// Account + progress storage for CodeQuest.
//
// Two backends behind ONE interface, picked at boot:
//   • file  — a local JSON file (server/.data/codequest-db.json). The default.
//             No database to install, no cloud account, nothing to pay for.
//   • mongo — used only if MONGODB_URI is set. Same API, same JSON out.
//
// Passwords are only ever stored as bcrypt hashes, never as plain text.
import crypto from 'node:crypto'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const PROGRESS_FIELDS = [
  'xp',
  'completed',
  'solved',
  'interviews',
  'streak',
  'practiceAnswered',
  'practiceCorrect',
  'goal',
  'name',
  'resetAt',
]

export const defaultProgress = () => ({
  xp: 0,
  completed: {},
  solved: {}, // solved coding challenges
  interviews: {}, // finished mock interviews, one summary each
  streak: { count: 0, last: null },
  practiceAnswered: 0,
  practiceCorrect: 0,
  goal: null,
  name: '',
  resetAt: 0, // when the learner last wiped their own progress
})

// One place that decides what an email looks like in storage, so a lookup can
// never disagree with a write.
export const normEmail = (e) => String(e ?? '').trim().toLowerCase()

// findUserByEmail() below returns the passwordHash on purpose — login needs it.
// publicUser() is the whitelist every route must pass a user through before
// res.json(), so a hash can never leak by accident.
export const publicUser = (u) => u && { id: u.id, email: u.email, displayName: u.displayName || '' }

export const dataDir = () =>
  path.resolve(process.env.DATA_DIR || fileURLToPath(new URL('./.data/', import.meta.url)))
const dataFile = () => process.env.DATA_FILE || path.join(dataDir(), 'codequest-db.json')

const clone = (v) => (v == null ? v : JSON.parse(JSON.stringify(v)))

let impl = null
let mode = 'none'

export const storeMode = () => mode

export async function initStore() {
  if (process.env.MONGODB_URI) {
    try {
      impl = await makeMongoStore(process.env.MONGODB_URI)
      mode = 'mongo'
      console.log('✓ Accounts: MongoDB')
      return mode
    } catch (err) {
      console.error('✗ MongoDB connection failed:', err.message)
      if (process.env.STORE_FALLBACK === 'off') {
        mode = 'none'
        return mode
      }
      console.warn('⚠  Falling back to the local JSON file store.')
    }
  }
  try {
    impl = await makeFileStore(dataFile())
    mode = 'file'
    console.log(`✓ Accounts: local JSON file (${dataFile()})`)
  } catch (err) {
    console.error('✗ Could not open the account store:', err.message)
    impl = null
    mode = 'none'
  }
  return mode
}

const need = () => {
  if (!impl) {
    const e = new Error('Account storage is not available')
    e.status = 503
    e.expose = true
    throw e
  }
  return impl
}

export const findUserByEmail = (email) => need().findUserByEmail(normEmail(email))
export const findUserById = (id) => need().findUserById(String(id || ''))
export const createUser = (u) => need().createUser({ ...u, email: normEmail(u.email) })
export const getProgress = (userId) => need().getProgress(String(userId))
export const saveProgress = (userId, patch) => need().saveProgress(String(userId), patch)

// ---------------------------------------------------------------- mongo ----
// Lazily imported so the default (file) path never even loads mongoose.
async function makeMongoStore(uri) {
  const { default: mongoose } = await import('mongoose')
  const { default: User } = await import('./models/User.js')
  const { default: Progress } = await import('./models/Progress.js')

  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  await User.init() // make sure the unique-email index really exists
  mongoose.connection.on('error', (e) => console.error('MongoDB error:', e.message))
  mongoose.connection.on('disconnected', () => console.warn('⚠  MongoDB disconnected'))

  const toUser = (d) =>
    d && {
      id: String(d._id),
      email: d.email,
      passwordHash: d.passwordHash,
      displayName: d.displayName || '',
    }

  const toProg = (d) => {
    if (!d) return defaultProgress()
    const raw = d.toObject ? d.toObject() : d
    const out = defaultProgress()
    for (const k of PROGRESS_FIELDS) if (raw[k] !== undefined && raw[k] !== null) out[k] = raw[k]
    out.updatedAt = raw.updatedAt
    return out
  }

  // A uuid from the file store would throw a CastError here, so check first.
  const oid = (id) => (mongoose.isValidObjectId(id) ? id : null)

  return {
    findUserByEmail: async (email) => toUser(await User.findOne({ email })),
    findUserById: async (id) => (oid(id) ? toUser(await User.findById(id)) : null),
    createUser: async (u) => toUser(await User.create(u)),
    getProgress: async (uid) =>
      oid(uid) ? toProg(await Progress.findOne({ user: uid })) : defaultProgress(),
    saveProgress: async (uid, patch) => {
      if (!oid(uid)) return defaultProgress()
      return toProg(
        await Progress.findOneAndUpdate({ user: uid }, patch, {
          new: true,
          upsert: true,
          setDefaultsOnInsert: true,
        })
      )
    },
  }
}

// ----------------------------------------------------------------- file ----
async function makeFileStore(file) {
  let db = null
  let seq = 0
  const byEmail = new Map()

  // Writes are serialised through a promise chain. Node is single-threaded but
  // `await` interleaves, so two overlapping saves could otherwise clobber
  // each other. The chain is kept non-rejecting so one failure cannot stall it.
  let chain = Promise.resolve()
  const withLock = (fn) => {
    const run = chain.then(fn)
    chain = run.then(
      () => {},
      () => {}
    )
    return run
  }

  const blank = () => ({ version: 1, users: [], progress: {} })
  const reindex = () => {
    byEmail.clear()
    for (const u of db.users) byEmail.set(u.email, u)
  }

  async function persist() {
    const json = JSON.stringify(db, null, 2)
    const tmp = `${file}.${process.pid}.${++seq}.tmp`
    const fh = await fs.open(tmp, 'w')
    try {
      await fh.writeFile(json, 'utf8')
      await fh.sync() // flush to disk before the rename
    } finally {
      await fh.close()
    }
    await renameWithRetry(tmp, file, { dropSourceOnFailure: true })
  }

  // On Windows an antivirus scan or the search indexer can hold the target
  // file open for a moment, so a rename is worth retrying.
  // dropSourceOnFailure is only ever safe for a throwaway temp file — never for
  // the real database.
  async function renameWithRetry(from, to, { tries = 5, dropSourceOnFailure = false } = {}) {
    for (let i = 0; ; i++) {
      try {
        return await fs.rename(from, to)
      } catch (e) {
        if (i >= tries - 1 || !['EPERM', 'EACCES', 'EBUSY'].includes(e.code)) {
          if (dropSourceOnFailure) await fs.rm(from, { force: true }).catch(() => {})
          throw e
        }
        await new Promise((r) => setTimeout(r, 20 * 2 ** i))
      }
    }
  }

  async function load() {
    let raw
    try {
      raw = await fs.readFile(file, 'utf8')
    } catch (e) {
      if (e.code !== 'ENOENT') throw e
      db = blank()
      reindex()
      // Write it now, so a permissions problem shows up at boot rather than
      // in the middle of somebody's sign-up.
      await persist()
      return
    }

    try {
      if (!raw.trim()) throw new Error('the file is empty')
      const parsed = JSON.parse(raw)
      if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.users))
        throw new Error('unexpected shape')
      db = {
        version: 1,
        users: parsed.users
          .filter((u) => u && typeof u.email === 'string' && typeof u.passwordHash === 'string')
          .map((u) => ({ ...u, id: u.id || crypto.randomUUID(), email: normEmail(u.email) })),
        progress:
          parsed.progress && typeof parsed.progress === 'object' && !Array.isArray(parsed.progress)
            ? parsed.progress
            : {},
      }
      reindex()
    } catch (e) {
      // Never start empty on top of a file we could not move out of the way —
      // that would destroy every account instead of preserving them.
      const bak = `${file}.corrupt-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
      try {
        await renameWithRetry(file, bak)
      } catch (renameErr) {
        console.error(`✗ ${path.basename(file)} could not be read (${e.message}),`)
        console.error(`  and could not be moved aside either (${renameErr.code || renameErr.message}).`)
        console.error('  Refusing to overwrite it. Accounts are disabled until this is sorted out.')
        throw renameErr
      }
      console.error(`✗ ${path.basename(file)} could not be read (${e.message}).`)
      console.error(`  Moved it to ${path.basename(bak)} — nothing was deleted.`)
      console.error('  Starting with an empty account store.')
      db = blank()
      reindex()
      await persist()
    }
  }

  await fs.mkdir(path.dirname(file), { recursive: true })
  await load()

  return {
    // Reads hit the in-memory copy, so they need no lock and no disk I/O.
    findUserByEmail: async (email) => clone(byEmail.get(email) || null),
    findUserById: async (id) => clone(db.users.find((u) => u.id === id) || null),

    createUser: (u) =>
      withLock(async () => {
        // Safe as a check-then-insert only because the lock serialises writes.
        if (byEmail.has(u.email)) {
          const e = new Error('Email already registered')
          e.code = 'EDUPE'
          throw e
        }
        const now = new Date().toISOString()
        const rec = {
          id: crypto.randomUUID(),
          email: u.email,
          passwordHash: u.passwordHash,
          displayName: u.displayName || '',
          createdAt: now,
          updatedAt: now,
        }
        db.users.push(rec)
        byEmail.set(rec.email, rec)
        db.progress[rec.id] = { ...defaultProgress(), updatedAt: now }
        try {
          await persist()
        } catch (err) {
          // Roll back so memory and disk cannot drift apart.
          db.users.pop()
          byEmail.delete(rec.email)
          delete db.progress[rec.id]
          throw err
        }
        return clone(rec)
      }),

    // Start from the defaults so an account saved before a new field existed
    // still comes back with it — the mongo backend does the same.
    getProgress: async (uid) => clone({ ...defaultProgress(), ...(db.progress[uid] || {}) }),

    saveProgress: (uid, patch) =>
      withLock(async () => {
        const current = db.progress[uid] || defaultProgress()
        const next = { ...current }
        // Only defined keys are applied — this mirrors how mongoose strips
        // undefined, so both backends behave identically.
        for (const k of PROGRESS_FIELDS) if (patch[k] !== undefined) next[k] = patch[k]
        next.updatedAt = new Date().toISOString()
        const prev = db.progress[uid]
        db.progress[uid] = next
        try {
          await persist()
        } catch (err) {
          if (prev) db.progress[uid] = prev
          else delete db.progress[uid]
          throw err
        }
        return clone(next)
      }),
  }
}
