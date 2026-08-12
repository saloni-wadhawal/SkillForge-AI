// Runs a student's program on Wandbox (https://wandbox.org) — free, no API key,
// no signup, no account. We send only the code and the input for that run.
//
// JavaScript is not listed here on purpose: the browser runs JS itself, which is
// instant and works with no internet. See src/lib/runJavascript.js.
const WANDBOX = 'https://wandbox.org/api/compile.json'

// Pinned compilers, each checked to work. `fallback` is used if Wandbox ever
// retires the pinned version.
export const LANGUAGES = [
  { id: 'python', label: 'Python', compiler: 'cpython-3.13.8', fallback: 'cpython-head' },
  { id: 'javascript', label: 'JavaScript', compiler: 'nodejs-20.17.0', fallback: 'nodejs-18.20.4', local: true },
  { id: 'cpp', label: 'C++', compiler: 'gcc-13.2.0', fallback: 'gcc-head', options: '-std=c++17' },
  { id: 'c', label: 'C', compiler: 'gcc-13.2.0-c', fallback: 'gcc-head-c', options: '-std=c11' },
  { id: 'java', label: 'Java', compiler: 'openjdk-jdk-22+36', fallback: 'openjdk-jdk-21+35' },
]

const byId = new Map(LANGUAGES.map((l) => [l.id, l]))
export const languageList = () =>
  LANGUAGES.map(({ id, label, local }) => ({ id, label, local: Boolean(local) }))

const MAX_CODE = 20000 // characters
const MAX_STDIN = 10000
const MAX_OUTPUT = 20000
const TIMEOUT_MS = 25000

const clip = (text, limit) => {
  const s = String(text ?? '')
  return s.length > limit ? `${s.slice(0, limit)}\n… (output cut off here)` : s
}

async function callWandbox(compiler, code, stdin, options) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(WANDBOX, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        compiler,
        code,
        stdin,
        ...(options ? { 'compiler-option-raw': options } : {}),
      }),
    })
    if (!res.ok) {
      const body = await res.text().catch(() => '')
      const err = new Error(`Code runner returned ${res.status}`)
      err.detail = body.slice(0, 300)
      err.status = res.status
      throw err
    }
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

export async function runCode({ language, code, stdin = '' }) {
  const lang = byId.get(String(language))
  if (!lang) {
    const e = new Error(`Unknown language: ${language}`)
    e.status = 400
    e.expose = true
    throw e
  }
  if (typeof code !== 'string' || !code.trim()) {
    const e = new Error('There is no code to run')
    e.status = 400
    e.expose = true
    throw e
  }
  if (code.length > MAX_CODE) {
    const e = new Error(`That program is too long (limit ${MAX_CODE} characters)`)
    e.status = 413
    e.expose = true
    throw e
  }

  const started = Date.now()
  let result
  try {
    result = await callWandbox(lang.compiler, code, String(stdin).slice(0, MAX_STDIN), lang.options)
  } catch (err) {
    if (err.name === 'AbortError') {
      return {
        ok: false,
        timedOut: true,
        output: '',
        error: 'Your program took too long and was stopped. Check for a loop that never ends.',
        exitCode: null,
        timeMs: Date.now() - started,
      }
    }
    // The pinned compiler may have been retired — try the fallback once.
    if (lang.fallback) {
      result = await callWandbox(lang.fallback, code, String(stdin).slice(0, MAX_STDIN), lang.options)
    } else {
      throw err
    }
  }

  const compileError = result.compiler_error || ''
  const runError = result.program_error || ''
  const output = result.program_output ?? ''
  const exitCode = typeof result.status === 'string' ? Number(result.status) : result.status

  return {
    ok: exitCode === 0 && !compileError,
    output: clip(output, MAX_OUTPUT),
    // Compile errors first — that is what a student needs to see.
    error: clip(compileError || runError, 4000),
    exitCode: Number.isFinite(exitCode) ? exitCode : null,
    timeMs: Date.now() - started,
    language: lang.id,
  }
}
