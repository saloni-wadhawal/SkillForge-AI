import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CodeRunner from '../components/CodeRunner.jsx'
import Confetti from '../components/Confetti.jsx'
import { useProgress } from '../state/ProgressContext.jsx'
import { CHALLENGES, CHALLENGE_CATEGORIES, findChallenge } from '../data/challenges.js'
import { outputMatches, runProgram } from '../lib/runner.js'

const draftKey = (id) => `codequest_draft_${id}`

export default function Challenge() {
  const { challengeId } = useParams()
  const navigate = useNavigate()
  const { state, solveChallenge } = useProgress()
  const challenge = findChallenge(challengeId)

  const [language, setLanguage] = useState('python')
  const [code, setCode] = useState('')
  const [stdin, setStdin] = useState('')
  const [checking, setChecking] = useState(null) // { done, total }
  const [report, setReport] = useState(null)
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [justSolved, setJustSolved] = useState(false)

  const alreadySolved = Boolean(state.solved?.[challengeId])

  // Restore whatever the student last had open for this challenge.
  useEffect(() => {
    if (!challenge) return
    let saved = null
    try {
      saved = JSON.parse(localStorage.getItem(draftKey(challenge.id)))
    } catch {
      // ignore
    }
    const lang = saved?.language || 'python'
    setLanguage(lang)
    setCode(saved?.code || challenge.starter[lang] || '')
    setStdin(saved?.stdin ?? challenge.examples[0]?.input ?? '')
    setReport(null)
    setAttempts(0)
    setShowHint(false)
    setShowSolution(false)
    setJustSolved(false)
  }, [challenge])

  const persist = (next) => {
    try {
      localStorage.setItem(draftKey(challengeId), JSON.stringify(next))
    } catch {
      // not being able to save a draft must not block coding
    }
  }

  const onLanguageChange = (nextLang) => {
    // Swap in that language's starter unless they have written something.
    const untouched = code.trim() === (challenge.starter[language] || '').trim()
    const nextCode = untouched ? challenge.starter[nextLang] || '' : code
    setLanguage(nextLang)
    setCode(nextCode)
    persist({ language: nextLang, code: nextCode, stdin })
  }

  const onCodeChange = (next) => {
    setCode(next)
    persist({ language, code: next, stdin })
  }

  const onStdinChange = (next) => {
    setStdin(next)
    persist({ language, code, stdin: next })
  }

  const resetCode = () => {
    const starter = challenge.starter[language] || ''
    setCode(starter)
    persist({ language, code: starter, stdin })
  }

  const submit = async () => {
    if (checking) return
    setReport(null)
    setChecking({ done: 0, total: challenge.tests.length })
    const results = []
    for (let i = 0; i < challenge.tests.length; i++) {
      const test = challenge.tests[i]
      // eslint-disable-next-line no-await-in-loop
      const res = await runProgram({ language, code, stdin: test.input })
      results.push({
        input: test.input,
        expected: test.output,
        got: res.output || '',
        error: res.error || '',
        offline: res.offline,
        passed: !res.error && outputMatches(res.output, test.output),
      })
      setChecking({ done: i + 1, total: challenge.tests.length })
      if (res.offline) break // no point hammering a server that is not there
    }
    setChecking(null)

    const offline = results.some((r) => r.offline)
    const passedAll = !offline && results.length === challenge.tests.length && results.every((r) => r.passed)
    setReport({ results, passedAll, offline })
    setAttempts((n) => n + 1)

    if (passedAll && !alreadySolved) {
      solveChallenge(challenge.id, challenge.xp, language)
      setJustSolved(true)
    }
  }

  const nextChallenge = useMemo(() => {
    if (!challenge) return null
    const i = CHALLENGES.findIndex((c) => c.id === challenge.id)
    return i >= 0 && i < CHALLENGES.length - 1 ? CHALLENGES[i + 1] : null
  }, [challenge])

  if (!challenge) {
    return (
      <div className="page">
        <p>That challenge does not exist.</p>
        <Link to="/challenges" className="btn">
          ← All challenges
        </Link>
      </div>
    )
  }

  const category = CHALLENGE_CATEGORIES.find((c) => c.id === challenge.category)
  const firstFail = report?.results.find((r) => !r.passed)

  return (
    <div className="page challenge-page">
      <Confetti active={justSolved} />
      <Link to="/challenges" className="back-link">
        ← All challenges
      </Link>

      <div className="challenge-head" style={{ ['--accent']: category?.color }}>
        <div>
          <div className="challenge-eyebrow">
            {category?.icon} {category?.title}
          </div>
          <h1 className="challenge-title">{challenge.title}</h1>
        </div>
        <div className="challenge-head-tags">
          <span className={`tag diff-${challenge.difficulty}`}>{challenge.difficulty}</span>
          <span className="tag">{alreadySolved ? '✓ solved' : `+${challenge.xp} XP`}</span>
        </div>
      </div>

      <div className="challenge-body">
        <p className="challenge-brief">{challenge.brief}</p>

        {challenge.examples.map((ex, i) => (
          <div key={i} className="example-box">
            <div className="example-row">
              <span className="example-label">Input</span>
              <pre>{ex.input}</pre>
            </div>
            <div className="example-row">
              <span className="example-label">Output</span>
              <pre>{ex.output}</pre>
            </div>
            <p className="example-explain">{ex.explain}</p>
          </div>
        ))}

        <div className="challenge-help">
          {showHint ? (
            <div className="tip-block">
              <span className="tip-icon">💡</span>
              <span>{challenge.hint}</span>
            </div>
          ) : (
            <button type="button" className="btn btn-sm" onClick={() => setShowHint(true)}>
              💡 Show a hint
            </button>
          )}
        </div>
      </div>

      <CodeRunner
        language={language}
        onLanguageChange={onLanguageChange}
        code={code}
        onCodeChange={onCodeChange}
        stdin={stdin}
        onStdinChange={onStdinChange}
        onReset={resetCode}
        minHeight={320}
        extraActions={
          <button type="button" className="btn btn-sm btn-check" onClick={submit} disabled={Boolean(checking)}>
            {checking ? `Checking ${checking.done}/${checking.total}…` : '✅ Submit'}
          </button>
        }
      />

      {report && (
        <div className={`verdict ${report.passedAll ? 'pass' : 'fail'}`}>
          {report.offline ? (
            <>
              <h2>Cannot check right now</h2>
              <p>
                The server is not running, so {language} cannot be tested. Start it with{' '}
                <code>npm run dev</code> in the <code>server</code> folder — or switch to JavaScript,
                which runs in your browser.
              </p>
            </>
          ) : report.passedAll ? (
            <>
              <h2>🎉 All {report.results.length} tests passed!</h2>
              <p>
                {alreadySolved && !justSolved
                  ? 'You had already solved this one — nice to see it still works.'
                  : `+${challenge.xp} XP earned.`}
              </p>
              <div className="result-actions">
                <button className="btn" onClick={() => navigate('/challenges')}>
                  Back to list
                </button>
                {nextChallenge && (
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/challenges/${nextChallenge.id}`)}
                  >
                    Next challenge →
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <h2>
                {report.results.filter((r) => r.passed).length} of {challenge.tests.length} tests
                passed
              </h2>
              {firstFail && (
                <div className="fail-detail">
                  {firstFail.error ? (
                    <>
                      <div className="fail-row">
                        <span className="example-label">Your program stopped with an error</span>
                        <pre className="output-box error">{firstFail.error}</pre>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="fail-row">
                        <span className="example-label">For this input</span>
                        <pre>{firstFail.input || '(nothing)'}</pre>
                      </div>
                      <div className="fail-row">
                        <span className="example-label">Expected</span>
                        <pre className="want">{firstFail.expected}</pre>
                      </div>
                      <div className="fail-row">
                        <span className="example-label">Your program printed</span>
                        <pre className="got">{firstFail.got || '(nothing)'}</pre>
                      </div>
                    </>
                  )}
                </div>
              )}
              {attempts >= 3 && !showSolution && (
                <button type="button" className="btn btn-sm" onClick={() => setShowSolution(true)}>
                  Show me one way to do it (Python)
                </button>
              )}
            </>
          )}
        </div>
      )}

      {showSolution && (
        <div className="solution-box">
          <div className="runner-label">One way to solve it — in Python</div>
          <pre className="output-box">{challenge.solution}</pre>
          <p className="field-hint">
            Read it, close it, and try to write it again yourself. That is what makes it stick.
          </p>
        </div>
      )}
    </div>
  )
}
