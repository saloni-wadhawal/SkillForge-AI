// Free AI provider for the CodeQuest tutor.
//
// Uses a FREE API — never a paid key and never the Claude subscription.
// Supported providers (pick one in server/.env):
//   - gemini : Google AI Studio free tier. Needs a free GEMINI_API_KEY.
//   - ollama : a local model (e.g. llama3.2). Free, offline, no key. Needs Ollama running.
//
// Both are called with the built-in fetch (Node 18+), so there are no extra
// dependencies to install for the tutor.

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash'
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434'
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3.2'

// A provider that hangs would otherwise leave somebody staring at a spinner for
// minutes (Node only gives up after ~5). Better a clear error they can act on.
const TIMEOUT_MS = Math.max(5000, parseInt(process.env.AI_TIMEOUT_MS || '45000', 10) || 45000)
const deadline = () => AbortSignal.timeout(TIMEOUT_MS)

const timeoutMessage = (err, who) =>
  err?.name === 'TimeoutError' || err?.name === 'AbortError'
    ? new Error(`${who} took too long to answer (over ${Math.round(TIMEOUT_MS / 1000)}s).`)
    : err

export function aiStatus() {
  const explicit = (process.env.AI_PROVIDER || '').toLowerCase()
  const provider = explicit || (process.env.GEMINI_API_KEY ? 'gemini' : '')
  if (provider === 'gemini') return { provider: 'gemini', model: GEMINI_MODEL, ready: !!process.env.GEMINI_API_KEY }
  if (provider === 'ollama') return { provider: 'ollama', model: OLLAMA_MODEL, ready: true }
  return { provider: null, model: null, ready: false }
}

const LEVEL_HINT = {
  basics: 'a beginner who is just starting — explain very simply, avoid jargon, use everyday analogies',
  placement: 'a student preparing for job interviews and placement tests — be practical and interview-focused',
  explore: 'a curious learner — be clear and friendly',
}

function buildSystemPrompt(context = {}) {
  const learner = LEVEL_HINT[context.goal] || LEVEL_HINT.explore
  let sys =
    "You are CodeQuest's friendly AI tutor. You help people (from children to adults) learn computer science and programming.\n" +
    `The learner is ${learner}.\n` +
    'Rules:\n' +
    '- Explain clearly with short paragraphs and simple language.\n' +
    '- Keep answers concise (a few short paragraphs at most).\n' +
    '- When useful, give a small code example inside a ``` code fence.\n' +
    '- Be encouraging and positive.\n' +
    '- Only discuss computers, coding, and learning. If asked something off-topic, gently steer back.\n' +
    '- Never produce harmful, unsafe, or age-inappropriate content.'
  if (context.track && context.level) {
    sys += `\n\nThe learner is currently on the "${context.track}" track, level "${context.level}".`
    if (context.lessonText) sys += `\nHere is the lesson they are reading (use it to answer questions about "this lesson"):\n"""\n${String(context.lessonText).slice(0, 1500)}\n"""`
  }
  return sys
}

async function callGemini({ system, messages, temperature = 0.6, maxTokens = 900 }) {
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content || '') }],
  }))
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { temperature, maxOutputTokens: maxTokens },
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`
  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: deadline(),
    })
  } catch (err) {
    throw timeoutMessage(err, 'Gemini')
  }
  if (!res.ok) {
    const t = await res.text().catch(() => '')
    throw new Error(`Gemini API ${res.status}: ${t.slice(0, 300)}`)
  }
  const data = await res.json()
  const reply = (data?.candidates?.[0]?.content?.parts || []).map((p) => p.text || '').join('')
  if (!reply.trim()) {
    const blocked = data?.promptFeedback?.blockReason
    throw new Error(blocked ? `Response blocked (${blocked}).` : 'Empty response from Gemini.')
  }
  return reply.trim()
}

async function callOllama({ system, messages, temperature = 0.6, maxTokens = 900 }) {
  let res
  try {
    res = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        stream: false,
        messages: [{ role: 'system', content: system }, ...messages],
        // Marking wants a steady hand and a fresh question wants imagination,
        // so the caller's settings have to reach this provider too.
        options: { temperature, num_predict: maxTokens },
      }),
      signal: deadline(),
    })
  } catch (err) {
    if (err?.name === 'TimeoutError' || err?.name === 'AbortError') throw timeoutMessage(err, 'Ollama')
    throw new Error(`Could not reach Ollama at ${OLLAMA_URL} — is it running with "${OLLAMA_MODEL}" pulled?`)
  }
  if (!res.ok) throw new Error(`Ollama ${res.status} — is Ollama running with "${OLLAMA_MODEL}" pulled?`)
  const data = await res.json()
  const reply = (data?.message?.content || '').trim()
  if (!reply) throw new Error('Empty response from Ollama.')
  return reply
}

// One way in to whichever free provider is configured. Everything that needs
// the AI (the tutor, the mock interviewer) goes through here, so adding a
// provider is a change in one place.
export async function chat({ system, messages = [], temperature = 0.6, maxTokens = 900 }) {
  const status = aiStatus()
  if (!status.ready) {
    const err = new Error('No free AI provider is configured.')
    err.code = 'NO_AI'
    throw err
  }
  if (!messages.length) throw new Error('No message to answer.')
  if (status.provider === 'ollama') return callOllama({ system, messages, temperature, maxTokens })
  return callGemini({ system, messages, temperature, maxTokens })
}

export async function tutorReply({ messages = [], context = {} }) {
  // Only keep the last dozen turns to stay light.
  const trimmed = messages
    .filter((m) => m && m.content && (m.role === 'user' || m.role === 'assistant'))
    .slice(-12)
  if (!trimmed.length) throw new Error('No message to answer.')
  return chat({ system: buildSystemPrompt(context), messages: trimmed })
}
