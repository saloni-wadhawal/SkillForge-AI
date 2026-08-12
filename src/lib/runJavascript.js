// Run the student's JavaScript inside a Web Worker.
//
// Why not send it to the server like the other languages? Because this way it
// is instant, it works with no internet, and it costs nothing. The worker is a
// separate thread with no access to the page, so a bad loop cannot freeze the
// app — we just terminate it.
//
// The shims below let the SAME program work here and on the server: students
// read input with require('fs').readFileSync(0, 'utf8'), exactly as they would
// in Node.
const WORKER_SRC = `
self.onmessage = function (e) {
  var code = e.data.code
  var stdin = e.data.stdin || ''
  var out = []

  function fmt(v) {
    if (typeof v === 'string') return v
    if (v instanceof Error) return v.message
    try { return JSON.stringify(v) } catch (_) { return String(v) }
  }
  function line() {
    out.push(Array.prototype.map.call(arguments, fmt).join(' ') + '\\n')
  }

  var consoleShim = { log: line, info: line, warn: line, error: line, debug: line }

  function requireShim(name) {
    if (name === 'fs') {
      return {
        readFileSync: function () { return stdin },
        readFile: function (p, o, cb) { (cb || o)(null, stdin) },
      }
    }
    if (name === 'readline') {
      throw new Error("require('readline') is not supported here. Read the input in one go with require('fs').readFileSync(0, 'utf8')")
    }
    throw new Error("require('" + name + "') is not available here")
  }

  var EXIT = {}
  var processShim = {
    stdout: { write: function (s) { out.push(String(s)); return true } },
    stderr: { write: function (s) { out.push(String(s)); return true } },
    argv: ['node', 'main.js'],
    env: {},
    exit: function () { throw EXIT },
  }

  function promptShim() {
    throw new Error("prompt() does not work here. Read the input with require('fs').readFileSync(0, 'utf8')")
  }

  try {
    var fn = new Function('console', 'require', 'process', 'prompt', 'alert', 'window', 'document', code)
    fn(consoleShim, requireShim, processShim, promptShim, promptShim, undefined, undefined)
    self.postMessage({ ok: true, output: out.join(''), error: '' })
  } catch (err) {
    if (err === EXIT) {
      self.postMessage({ ok: true, output: out.join(''), error: '' })
      return
    }
    var msg
    if (err && err.stack) {
      msg = String(err.stack).split('\\n').slice(0, 3).join('\\n')
    } else {
      msg = String(err && err.message ? err.message : err)
    }
    self.postMessage({ ok: false, output: out.join(''), error: msg })
  }
}
`

let blobUrl = null
function workerUrl() {
  if (!blobUrl) blobUrl = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' }))
  return blobUrl
}

export function runJavascriptLocally({ code, stdin = '', timeoutMs = 5000 }) {
  return new Promise((resolve) => {
    const started = Date.now()
    let worker
    try {
      worker = new Worker(workerUrl())
    } catch (err) {
      resolve({ ok: false, output: '', error: `Could not start the runner: ${err.message}`, timeMs: 0 })
      return
    }

    let settled = false
    const finish = (payload) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      worker.terminate()
      resolve({ timeMs: Date.now() - started, where: 'browser', ...payload })
    }

    const timer = setTimeout(
      () =>
        finish({
          ok: false,
          output: '',
          timedOut: true,
          error: 'Your program took too long and was stopped. Check for a loop that never ends.',
        }),
      timeoutMs
    )

    worker.onmessage = (e) => finish(e.data)
    worker.onerror = (e) => finish({ ok: false, output: '', error: e.message || 'Something went wrong while running' })
    worker.postMessage({ code, stdin })
  })
}
