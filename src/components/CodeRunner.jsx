import { useEffect, useRef, useState } from 'react'
import CodeEditor from './CodeEditor.jsx'
import { LANGUAGES, languageById, runProgram } from '../lib/runner.js'

// The editor + Run button + output panel. Used by the playground and by every
// coding challenge.
export default function CodeRunner({
  language,
  onLanguageChange,
  code,
  onCodeChange,
  stdin,
  onStdinChange,
  showInput = true,
  onReset,
  extraActions = null,
  minHeight = 300,
}) {
  const [result, setResult] = useState(null)
  const [running, setRunning] = useState(false)
  const runToken = useRef(0)

  const lang = languageById(language)

  const run = async () => {
    if (running) return
    const token = ++runToken.current
    setRunning(true)
    setResult(null)
    const res = await runProgram({ language, code, stdin })
    if (token !== runToken.current) return // a newer run replaced this one
    setResult(res)
    setRunning(false)
  }

  // Ctrl+Enter runs, like every code tool students will meet later.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        run()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="runner">
      <div className="runner-bar">
        <select
          className="runner-select"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
          aria-label="Programming language"
        >
          {LANGUAGES.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>

        <span className="runner-where">
          {lang.local ? 'runs in your browser' : 'runs on the server'}
        </span>

        <div className="runner-actions">
          {extraActions}
          {onReset && (
            <button type="button" className="btn btn-sm" onClick={onReset}>
              Reset
            </button>
          )}
          <button type="button" className="btn btn-primary btn-sm" onClick={run} disabled={running}>
            {running ? 'Running…' : '▶ Run'}
          </button>
        </div>
      </div>

      <CodeEditor value={code} onChange={onCodeChange} mode={lang.mode} minHeight={minHeight} />

      {showInput && (
        <div className="runner-input">
          <label className="runner-label" htmlFor="run-stdin">
            Input (what your program reads)
          </label>
          <textarea
            id="run-stdin"
            className="runner-textarea"
            value={stdin}
            onChange={(e) => onStdinChange(e.target.value)}
            placeholder="Type here what you would type into the program"
            rows={2}
            spellCheck={false}
          />
        </div>
      )}

      <div className="runner-output">
        <div className="runner-label">
          Output
          {result?.timeMs != null && <span className="runner-time">{result.timeMs} ms</span>}
        </div>
        {running && <pre className="output-box waiting">Running your code…</pre>}
        {!running && !result && (
          <pre className="output-box empty">Press ▶ Run to see what your program prints.</pre>
        )}
        {!running && result && (
          <>
            {result.output && <pre className="output-box">{result.output}</pre>}
            {result.error && <pre className="output-box error">{result.error}</pre>}
            {!result.output && !result.error && (
              <pre className="output-box empty">
                Your program ran but printed nothing. Did you forget to print the answer?
              </pre>
            )}
          </>
        )}
      </div>
    </div>
  )
}
