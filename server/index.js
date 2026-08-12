import 'dotenv/config'
import crypto from 'node:crypto'
import fsSync from 'node:fs'
import path from 'node:path'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as store from './store.js'
import { tutorReply, aiStatus } from './ai.js'
import { gradeAnswer, finalReport, extraQuestion } from './interview.js'
import { runCode, languageList } from './run.js'

const app = express()
const PORT = process.env.PORT || 8080

const MIN_PW = 8
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EXPIRES = process.env.JWT_EXPIRES || '7d'
// bcryptjs is pure JavaScript and hashing blocks the event loop, so keep the
// cost sane and let it be tuned from .env.
const ROUNDS = Math.min(14, Math.max(8, parseInt(process.env.BCRYPT_ROUNDS || '10', 10) || 10))
// Compared against when the email is unknown, so a wrong email and a wrong
// password take the same time and cannot be told apart.
const DUMMY_HASH = bcrypt.hashSync('placeholder-never-matches', ROUNDS)

// ---- login token secret ----
// No hardcoded fallback: an attacker who reads this repo must not be able to
// forge a token. With nothing configured we generate one and keep it, so
// restarting the server does not log everybody out.
function resolveSecret() {
  const fromEnv = (process.env.JWT_SECRET || '').trim()
  const PLACEHOLDERS = new Set([
    'change-me-to-a-long-random-string',
    'dev-secret-change-me',
    'changeme',
    'secret',
  ])
  if (fromEnv && !PLACEHOLDERS.has(fromEnv) && fromEnv.length >= 32) return fromEnv
  if (fromEnv) console.warn('⚠  JWT_SECRET is a placeholder or under 32 characters — ignoring it.')
  if (process.env.NODE_ENV === 'production')
    throw new Error('Refusing to start in production without a strong JWT_SECRET (32+ characters).')

  const file = path.join(store.dataDir(), 'secret.json')
  try {
    const saved = JSON.parse(fsSync.readFileSync(file, 'utf8')).jwtSecret
    if (typeof saved === 'string' && saved.length >= 32) return saved
  } catch {
    // no secret yet — fall through and make one
  }
  const generated = crypto.randomBytes(48).toString('base64url')
  try {
    fsSync.mkdirSync(path.dirname(file), { recursive: true })
    fsSync.writeFileSync(file, JSON.stringify({ jwtSecret: generated }, null, 2), { mode: 0o600 })
    console.warn(`⚠  No JWT_SECRET set — generated one and saved it to ${file}`)
    console.warn('   (delete that file to log everyone out)')
  } catch (err) {
    console.warn(`⚠  Could not save a login secret (${err.message}) — using a temporary one.`)
    console.warn('   Everyone will be logged out when the server restarts.')
  }
  return generated
}
const JWT_SECRET = resolveSecret()

// The browser talks to Vite (:5173) and Vite forwards /api server-side, so
// CORS is not even involved in normal use. Keep the allowlist tight anyway:
// with origin '*' any website could drive this API from the owner's browser.
const ORIGINS = (process.env.CLIENT_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || ORIGINS.includes(origin)),
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false, // bearer tokens, not cookies
    maxAge: 600,
  })
)
app.use(express.json({ limit: '512kb' }))

// ---- helpers ----
// Express 4 does not catch rejected promises; without this an async route that
// throws would take the whole server down.
const ah = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

const requireStore = (req, res, next) =>
  store.storeMode() === 'none'
    ? res.status(503).json({
        error: 'Accounts are unavailable — the server could not open its account store.',
      })
    : next()

const issue = (user) =>
  jwt.sign({ uid: user.id }, JWT_SECRET, { expiresIn: EXPIRES, subject: String(user.id) })

const auth = ah(async (req, res, next) => {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Missing token' })
  let payload
  try {
    payload = jwt.verify(token, JWT_SECRET)
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
  const user = await store.findUserById(payload.uid)
  if (!user) return res.status(401).json({ error: 'Session expired — please log in again' })
  req.userId = user.id
  req.user = store.publicUser(user)
  next()
})

// ---- simple in-process rate limit (no extra dependency) ----
// Also a DoS control: bcrypt hashing blocks the event loop.
const FAILS = new Map()
const WINDOW_MS = 15 * 60_000
const MAX_FAILS = 8

function tooMany(key, max = MAX_FAILS, win = WINDOW_MS) {
  const hit = FAILS.get(key)
  if (!hit) return 0
  if (Date.now() - hit.first > win) {
    FAILS.delete(key)
    return 0
  }
  return hit.n >= max ? Math.ceil((hit.first + win - Date.now()) / 1000) : 0
}

function noteFail(key, win = WINDOW_MS) {
  const hit = FAILS.get(key)
  if (!hit || Date.now() - hit.first > win) {
    if (FAILS.size > 5000) FAILS.clear() // hard memory bound
    FAILS.set(key, { n: 1, first: Date.now() })
  } else {
    hit.n++
  }
}

setInterval(() => {
  const now = Date.now()
  for (const [k, v] of FAILS) if (now - v.first > 60 * 60_000) FAILS.delete(k)
}, 5 * 60_000).unref()

// ---- routes ----
app.get('/api/health', (req, res) =>
  res.json({
    ok: true,
    storage: store.storeMode(), // 'file' | 'mongo' | 'none'
    accounts: store.storeMode() !== 'none',
    db: store.storeMode() === 'mongo', // legacy field
    ai: aiStatus(),
  })
)

// AI Tutor — free provider (Gemini free tier / local Ollama). No account needed.
app.post('/api/tutor', async (req, res) => {
  try {
    const { messages = [], context = {} } = req.body || {}
    if (!aiStatus().ready) {
      return res.status(503).json({
        error:
          'AI tutor not set up yet. Add a free GEMINI_API_KEY in server/.env (get one at aistudio.google.com), then restart the server. See server/README.md.',
      })
    }
    const reply = await tutorReply({ messages, context })
    res.json({ reply })
  } catch (err) {
    res.status(500).json({ error: String((err && err.message) || err) })
  }
})

// ---- mock interview ----
// Same free provider as the tutor. No account needed — and if no provider is
// set up the app marks answers against the model answer on its own, so this
// endpoint being unavailable never blocks a practice interview.
app.post(
  '/api/interview',
  ah(async (req, res) => {
    const { mode } = req.body || {}
    if (!['grade', 'report', 'question'].includes(mode))
      return res.status(400).json({ error: 'Unknown interview mode' })
    if (!aiStatus().ready)
      return res.status(503).json({
        error:
          'AI marking is not set up. Add a free GEMINI_API_KEY in server/.env (get one at aistudio.google.com) and restart the server — until then, interviews are marked against the model answer.',
      })

    // One answer per question is a handful of calls per interview; this only
    // catches a runaway loop hammering somebody else's free tier.
    const key = `iv|${req.ip}`
    const wait = tooMany(key, 60, 60_000)
    if (wait)
      return res
        .set('Retry-After', wait)
        .status(429)
        .json({ error: 'That is a lot of questions in one minute. Give it a few seconds.' })
    noteFail(key, 60_000)

    try {
      if (mode === 'grade') return res.json(await gradeAnswer(req.body))
      if (mode === 'report') return res.json(await finalReport(req.body))
      return res.json(await extraQuestion(req.body))
    } catch (err) {
      // The interview must keep moving, so report the failure as a normal
      // result the page can fall back from rather than a dead 500.
      return res.status(502).json({ error: String((err && err.message) || err) })
    }
  })
)

// ---- code runner ----
// Free, no key: the code goes to wandbox.org and the output comes back.
// No account needed to use it — it is a learning tool, not user data.
app.get('/api/run/languages', (req, res) => res.json({ languages: languageList() }))

app.post(
  '/api/run',
  ah(async (req, res) => {
    const { language, code, stdin } = req.body || {}
    // Running code is slow and hits somebody else's free service, so keep a lid
    // on how fast one person can fire it off.
    const key = `run|${req.ip}`
    const wait = tooMany(key, 40, 60_000)
    if (wait)
      return res
        .set('Retry-After', wait)
        .status(429)
        .json({ error: 'That is a lot of runs in one minute. Give it a few seconds.' })
    noteFail(key, 60_000)
    res.json(await runCode({ language, code, stdin }))
  })
)

app.post(
  '/api/auth/register',
  requireStore,
  ah(async (req, res) => {
    const { email, password, displayName } = req.body || {}
    // Normalise ONCE, before any lookup or write, so the two can never disagree.
    const em = store.normEmail(email)
    if (!EMAIL_RE.test(em))
      return res.status(400).json({ error: 'Please enter a valid email address' })
    if (typeof password !== 'string' || password.length < MIN_PW)
      return res.status(400).json({ error: `Password must be at least ${MIN_PW} characters` })
    if (Buffer.byteLength(password, 'utf8') > 72)
      return res.status(400).json({ error: 'Password is too long (72 bytes max)' })

    const ipKey = `reg|${req.ip}`
    const wait = tooMany(ipKey, 20, 60 * 60_000)
    if (wait)
      return res
        .set('Retry-After', wait)
        .status(429)
        .json({ error: 'Too many sign-ups from here. Please try again later.' })

    if (await store.findUserByEmail(em))
      return res.status(409).json({ error: 'Email already registered' })

    const passwordHash = await bcrypt.hash(password, ROUNDS)
    let user
    try {
      user = await store.createUser({
        email: em,
        passwordHash,
        displayName: String(displayName || '').trim().slice(0, 60),
      })
    } catch (e) {
      if (e.code === 'EDUPE' || e.code === 11000)
        return res.status(409).json({ error: 'Email already registered' })
      throw e
    }
    noteFail(ipKey, 60 * 60_000) // counts sign-ups per IP, not failures
    res.json({ token: issue(user), user: store.publicUser(user) })
  })
)

app.post(
  '/api/auth/login',
  requireStore,
  ah(async (req, res) => {
    const em = store.normEmail(req.body?.email)
    const password = typeof req.body?.password === 'string' ? req.body.password : ''
    // Keyed on the email too: in dev every request comes from 127.0.0.1, so an
    // IP-only key would let one bad login lock out the whole machine.
    const key = `login|${req.ip}|${em}`
    const wait = tooMany(key)
    if (wait)
      return res
        .set('Retry-After', wait)
        .status(429)
        .json({ error: `Too many failed attempts. Try again in ${Math.ceil(wait / 60)} min.` })

    const user = await store.findUserByEmail(em)
    const ok = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH)
    if (!user || !ok) {
      noteFail(key)
      return res.status(401).json({ error: 'Invalid email or password' })
    }
    FAILS.delete(key)
    res.json({ token: issue(user), user: store.publicUser(user) })
  })
)

app.get(
  '/api/auth/me',
  requireStore,
  auth,
  ah(async (req, res) => res.json({ user: req.user }))
)

app.get(
  '/api/progress',
  requireStore,
  auth,
  ah(async (req, res) => res.json(await store.getProgress(req.userId)))
)

app.put(
  '/api/progress',
  requireStore,
  auth,
  ah(async (req, res) => {
    const b = req.body || {}
    const patch = {}
    if (Number.isFinite(b.xp)) patch.xp = Math.max(0, Math.min(1e9, Math.trunc(b.xp)))
    if (b.completed && typeof b.completed === 'object' && !Array.isArray(b.completed))
      patch.completed = b.completed
    if (b.solved && typeof b.solved === 'object' && !Array.isArray(b.solved)) patch.solved = b.solved
    // Interview summaries are read back as objects with a numeric score, so a
    // junk entry here would break the pages that display them. Keep the shape.
    if (b.interviews && typeof b.interviews === 'object' && !Array.isArray(b.interviews))
      patch.interviews = Object.fromEntries(
        Object.entries(b.interviews)
          .filter(([, v]) => v && typeof v === 'object' && !Array.isArray(v))
          .slice(0, 500)
          .map(([id, v]) => [
            String(id).slice(0, 80),
            {
              roleId: String(v.roleId || '').slice(0, 60),
              roleTitle: String(v.roleTitle || '').slice(0, 120),
              round: String(v.round || '').slice(0, 20),
              score: Math.max(0, Math.min(100, Math.trunc(Number(v.score)) || 0)),
              asked: Math.max(0, Math.min(100, Math.trunc(Number(v.asked)) || 0)),
              xp: Math.max(0, Math.min(1000, Math.trunc(Number(v.xp)) || 0)),
              at: String(v.at || '').slice(0, 40),
            },
          ])
      )
    if (b.streak && typeof b.streak === 'object')
      patch.streak = {
        count: Math.max(0, Math.trunc(Number(b.streak.count) || 0)),
        last: typeof b.streak.last === 'string' ? b.streak.last.slice(0, 10) : null,
      }
    if (Number.isFinite(b.practiceAnswered))
      patch.practiceAnswered = Math.max(0, Math.trunc(b.practiceAnswered))
    if (Number.isFinite(b.practiceCorrect))
      patch.practiceCorrect = Math.max(0, Math.trunc(b.practiceCorrect))
    if (b.goal === null || ['basics', 'placement', 'explore'].includes(b.goal)) patch.goal = b.goal
    if (typeof b.name === 'string') patch.name = b.name.trim().slice(0, 60)
    if (Number.isFinite(b.resetAt)) patch.resetAt = Math.max(0, Math.trunc(b.resetAt))
    res.json(await store.saveProgress(req.userId, patch))
  })
)

// ---- errors ----
app.use((req, res) => res.status(404).json({ error: 'Not found' }))
// Always JSON — a fetch() that gets Express's HTML error page cannot report it.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (!err.expose) console.error(err)
  res.status(err.status || 500).json({ error: err.expose ? err.message : 'Server error' })
})

await store.initStore()
// 127.0.0.1 only: the account store should not be reachable from the network.
app.listen(PORT, '127.0.0.1', () =>
  console.log(`✓ CodeQuest API running on http://localhost:${PORT}  (accounts: ${store.storeMode()})`)
)
