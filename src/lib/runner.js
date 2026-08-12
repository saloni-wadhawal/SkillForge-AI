import { runJavascriptLocally } from './runJavascript.js'

// The languages a student can pick. JavaScript runs in the browser; the rest go
// to the server, which forwards them to wandbox.org (free, no key).
export const LANGUAGES = [
  { id: 'python', label: 'Python', mode: 'python', local: false },
  { id: 'javascript', label: 'JavaScript', mode: 'javascript', local: true },
  { id: 'cpp', label: 'C++', mode: 'cpp', local: false },
  { id: 'c', label: 'C', mode: 'cpp', local: false },
  { id: 'java', label: 'Java', mode: 'java', local: false },
]

export const languageById = (id) => LANGUAGES.find((l) => l.id === id) || LANGUAGES[0]

const OFFLINE_MESSAGE =
  'Cannot reach the CodeQuest server, so this language cannot run right now. ' +
  'Start it with "npm run dev" in the server folder — or switch to JavaScript, which runs right here in your browser.'

export async function runProgram({ language, code, stdin = '' }) {
  if (languageById(language).local) {
    return runJavascriptLocally({ code, stdin })
  }

  const started = Date.now()
  let res
  try {
    res = await fetch('/api/run', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ language, code, stdin }),
    })
  } catch {
    return { ok: false, output: '', error: OFFLINE_MESSAGE, offline: true, timeMs: Date.now() - started }
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    return {
      ok: false,
      output: '',
      error: data.error || `The runner returned an error (${res.status})`,
      timeMs: Date.now() - started,
    }
  }
  return { ...data, where: 'server' }
}

// Compare a program's output with what was expected. Forgiving about trailing
// spaces and blank lines at the end, strict about everything else — otherwise
// "correct" answers would fail for invisible reasons.
export const normaliseOutput = (text) =>
  String(text ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.replace(/\s+$/, ''))
    .join('\n')
    .replace(/\n+$/, '')

export const outputMatches = (actual, expected) => normaliseOutput(actual) === normaliseOutput(expected)
