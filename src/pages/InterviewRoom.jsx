import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { buildInterview, findRole, findRound, ROUNDS } from '../data/interviewRoles.js'
import { aiReady } from '../lib/aiStatus.js'

const LENGTHS = [
  { n: 5, label: 'Quick', sub: '5 questions' },
  { n: 8, label: 'Standard', sub: '8 questions' },
  { n: 12, label: 'Full length', sub: '12 questions' },
]

const DIFFS = [
  { id: 'any', label: 'Mixed', sub: 'like the real thing' },
  { id: 'easy', label: 'Warm up', sub: 'gentle start' },
  { id: 'medium', label: 'Normal', sub: 'the usual level' },
  { id: 'hard', label: 'Tough', sub: 'stretch yourself' },
]

// How a student marks themselves when there is no AI key. Blunt on purpose —
// marking yourself kindly is the fastest way to fail the real one.
const SELF_MARKS = [
  { score: 0, icon: '😵', label: 'Missed it' },
  { score: 3, icon: '🙂', label: 'Some of it' },
  { score: 5, icon: '👍', label: 'Half of it' },
  { score: 8, icon: '💪', label: 'Most of it' },
  { score: 10, icon: '🌟', label: 'Nailed it' },
]

const mmss = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.max(0, s) % 60).padStart(2, '0')}`

const scoreClass = (n) => (n >= 80 ? 'great' : n >= 60 ? 'ok' : n >= 40 ? 'meh' : 'poor')

const wordCount = (t) => t.trim().split(/\s+/).filter(Boolean).length

const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window
const speechRecogniser = () =>
  typeof window === 'undefined' ? null : window.SpeechRecognition || window.webkitSpeechRecognition

async function postInterview(body) {
  const res = await fetch('/api/interview', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `Server error (${res.status})`)
  return data
}

export default function InterviewRoom() {
  const { roleId } = useParams()
  const role = findRole(roleId)
  const { recordInterview } = useProgress()

  const [stage, setStage] = useState('setup') // setup → live → report
  const [round, setRound] = useState('technical')
  const [count, setCount] = useState(8)
  const [difficulty, setDifficulty] = useState('any')
  const [ai, setAi] = useState(null) // null = still checking, then true/false

  const [questions, setQuestions] = useState([])
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [phase, setPhase] = useState('answering') // answering → marking → marked
  const [feedback, setFeedback] = useState(null)
  const [results, setResults] = useState([])
  const [seconds, setSeconds] = useState(0)
  const [notice, setNotice] = useState('')

  const [report, setReport] = useState(null)
  const [reportState, setReportState] = useState('idle') // idle | loading | done | off
  const [earnedXp, setEarnedXp] = useState(0)

  const [readAloud, setReadAloud] = useState(false)
  const [listening, setListening] = useState(false)
  const recogniserRef = useRef(null)
  const recordedRef = useRef(false)
  const answerBoxRef = useRef(null)
  // Bumped whenever we move on. A grade that lands after that belongs to a
  // question the student has already left, so it must not be shown.
  const markRef = useRef(0)

  const question = questions[idx] || null
  const roundInfo = findRound(round)
  // Only what the marker needs — no point shipping the whole question bank back.
  const apiRole = useMemo(() => ({ title: role?.title, skills: role?.skills }), [role])

  // Some rounds simply have fewer questions than the longest option (there are
  // only so many managerial ones, and only so many hard ones). Say so up front
  // rather than starting a "12 question" interview that ends after three.
  // Ask for exactly what they picked — a bigger probe would not tell the truth
  // about a full mock, which splits the count across three pools.
  const willAsk = useMemo(
    () => buildInterview({ roleId, round, count, difficulty }).length,
    [roleId, round, count, difficulty]
  )

  useEffect(() => {
    let alive = true
    aiReady().then((ready) => alive && setAi(ready))
    return () => {
      alive = false
    }
  }, [])

  // ---- the clock ----
  useEffect(() => {
    if (stage !== 'live') return undefined
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [stage])

  // Closing the tab mid-interview loses it, so at least ask first.
  useEffect(() => {
    if (stage !== 'live') return undefined
    const warn = (e) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [stage])

  // ---- voice (optional — both sides degrade to nothing if unsupported) ----
  const speak = useCallback((text) => {
    if (!canSpeak() || !text) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(String(text))
    utterance.rate = 0.95
    window.speechSynthesis.speak(utterance)
  }, [])

  const stopListening = useCallback(() => {
    try {
      recogniserRef.current?.stop()
    } catch {
      // already stopped
    }
    setListening(false)
  }, [])

  const startListening = () => {
    const Recogniser = speechRecogniser()
    if (!Recogniser) return
    const rec = new Recogniser()
    rec.lang = 'en-IN'
    rec.continuous = true
    rec.interimResults = false
    rec.onresult = (e) => {
      let heard = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) heard += e.results[i][0].transcript
      }
      const text = heard.trim()
      if (text) setAnswer((a) => (a ? `${a} ${text}` : text))
    }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)
    recogniserRef.current = rec
    try {
      rec.start()
      setListening(true)
    } catch {
      setListening(false)
    }
  }

  // Leaving the page must not leave a microphone or a voice running.
  useEffect(
    () => () => {
      try {
        recogniserRef.current?.abort()
      } catch {
        // nothing to stop
      }
      if (canSpeak()) window.speechSynthesis.cancel()
    },
    []
  )

  useEffect(() => {
    if (stage === 'live' && readAloud && question) speak(question.q)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, stage, readAloud])

  // ---- running the interview ----
  const start = () => {
    const picked = buildInterview({ roleId, round, count, difficulty })
    if (!picked.length) {
      setNotice('There are no questions for that combination yet — try another round.')
      return
    }
    setQuestions(picked)
    setIdx(0)
    setAnswer('')
    setShowHint(false)
    setPhase('answering')
    setFeedback(null)
    setResults([])
    setSeconds(0)
    setNotice('')
    setReport(null)
    setReportState('idle')
    setEarnedXp(0)
    recordedRef.current = false
    markRef.current++
    setStage('live')
  }

  // `skip` means "I have nothing" — it must not quietly send half a sentence
  // that happens to be sitting in the box.
  const submit = async ({ skip = false } = {}) => {
    if (!question || phase !== 'answering') return
    stopListening()
    const given = skip ? '' : answer.trim()
    if (skip) setAnswer('')
    if (!skip && !given) return // Ctrl+Enter must not submit an empty answer

    // The health check may not have come back yet. Settle it now rather than
    // guessing "no AI" and quietly marking them differently from what the
    // setup screen just promised.
    let useAi = ai
    if (useAi === null) {
      useAi = await aiReady()
      setAi(useAi)
    }

    if (!useAi) {
      // No AI: show the model answer and let them mark themselves against it.
      setFeedback({ source: 'self', score: null, better: question.ideal })
      setPhase('marked')
      return
    }

    const mark = ++markRef.current
    setPhase('marking')
    try {
      const marked = await postInterview({
        mode: 'grade',
        role: apiRole,
        round: question.round || round,
        question: {
          q: question.q,
          topic: question.topic,
          difficulty: question.difficulty,
          ideal: question.ideal,
        },
        answer: given,
      })
      if (mark !== markRef.current) return // they have already moved on
      setFeedback(marked)
      setNotice('')
    } catch (err) {
      if (mark !== markRef.current) return
      // The interview keeps going — fall back to self-marking for the rest.
      setAi(false)
      setNotice(`AI marking stopped working (${err.message}). Marking yourself from here on.`)
      setFeedback({ source: 'self', score: null, better: question.ideal })
    } finally {
      if (mark === markRef.current) setPhase('marked')
    }
  }

  const selfMark = (score) => setFeedback((f) => ({ ...(f || {}), source: 'self', score }))

  const next = () => {
    if (!question || feedback?.score == null) return
    const done = {
      id: question.id,
      q: question.q,
      topic: question.topic,
      difficulty: question.difficulty,
      round: question.round || round,
      ideal: question.ideal,
      answer: answer.trim(),
      score: feedback.score,
      verdict: feedback.verdict || '',
      good: feedback.good || [],
      missing: feedback.missing || [],
      better: feedback.better || question.ideal,
      source: feedback.source || 'ai',
    }
    setResults((rs) => [...rs, done])
    if (canSpeak()) window.speechSynthesis.cancel()
    markRef.current++

    if (idx + 1 >= questions.length) {
      setStage('report')
      return
    }
    setIdx((i) => i + 1)
    setAnswer('')
    setShowHint(false)
    setFeedback(null)
    setPhase('answering')
  }

  const endEarly = () => {
    if (!window.confirm('End the interview here? You will be marked on what you have answered.'))
      return
    stopListening()
    if (canSpeak()) window.speechSynthesis.cancel() // do not read on over the report
    markRef.current++
    if (results.length === 0) {
      setStage('setup')
      return
    }
    setStage('report')
  }

  // ---- the report ----
  const totals = useMemo(() => {
    const asked = results.length
    const points = results.reduce((n, r) => n + (r.score || 0), 0)
    const pct = asked ? Math.round((points / (asked * 10)) * 100) : 0
    return { asked, points, pct }
  }, [results])

  useEffect(() => {
    if (stage !== 'report' || recordedRef.current || !role) return
    recordedRef.current = true

    // Half a mark per point, plus a flat bonus for actually sitting it through.
    const xp = results.reduce((n, r) => n + Math.round((r.score || 0) / 2), 0) + 10
    setEarnedXp(xp)
    recordInterview({
      roleId: role.id,
      roleTitle: role.title,
      round,
      score: totals.pct,
      asked: totals.asked,
      xp,
    })

    if (!ai) {
      setReportState('off')
      return
    }
    setReportState('loading')
    postInterview({
      mode: 'report',
      role: apiRole,
      round,
      items: results.map((r) => ({
        q: r.q,
        topic: r.topic,
        difficulty: r.difficulty,
        answer: r.answer,
        score: r.score,
      })),
    })
      .then((data) => {
        setReport(data)
        setReportState('done')
      })
      .catch(() => setReportState('off'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  // What to say when there is no AI to say it: read it straight off the scores.
  const selfReport = useMemo(() => {
    const weak = results.filter((r) => (r.score || 0) < 5).map((r) => r.topic)
    const strong = results.filter((r) => (r.score || 0) >= 8).map((r) => r.topic)
    return {
      weak: [...new Set(weak)].slice(0, 5),
      strong: [...new Set(strong)].slice(0, 5),
    }
  }, [results])

  if (!role) {
    return (
      <div className="page narrow">
        <Link to="/interview" className="back-link">
          ← All roles
        </Link>
        <p className="muted">That role does not exist. Pick one from the list.</p>
      </div>
    )
  }

  // ---------------------------------------------------------------- setup ----
  if (stage === 'setup') {
    return (
      <div className="page narrow">
        <div className="section-head-row">
          <Link to="/interview" className="back-link">
            ← All roles
          </Link>
          <Link to={`/interview/answers?role=${role.id}`} className="section-link">
            📖 Read this role’s answers →
          </Link>
        </div>

        <div className="role-hero" style={{ ['--accent']: role.color }}>
          <span className="role-hero-icon">{role.icon}</span>
          <div>
            <h1 className="page-title">{role.title}</h1>
            <p className="muted">{role.blurb}</p>
          </div>
        </div>

        <div className="role-skills big">
          {(role.skills || []).map((s) => (
            <span key={s} className="role-skill">
              {s}
            </span>
          ))}
        </div>

        {role.hires?.length > 0 && (
          <p className="muted small">Companies that hire freshers for this: {role.hires.join(' · ')}</p>
        )}

        <h2 className="section-title">Which round?</h2>
        <div className="pick-grid">
          {ROUNDS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`pick-card ${round === r.id ? 'active' : ''}`}
              onClick={() => setRound(r.id)}
            >
              <span className="pick-icon">{r.icon}</span>
              <span className="pick-title">{r.title}</span>
              <span className="pick-sub">{r.blurb}</span>
            </button>
          ))}
        </div>

        <h2 className="section-title">How long?</h2>
        <div className="pick-grid three">
          {LENGTHS.map((l) => (
            <button
              key={l.n}
              type="button"
              className={`pick-card ${count === l.n ? 'active' : ''}`}
              onClick={() => setCount(l.n)}
            >
              <span className="pick-title">{l.label}</span>
              <span className="pick-sub">{l.sub}</span>
            </button>
          ))}
        </div>
        {willAsk < count && (
          <p className="field-hint">
            This round only has {willAsk} question{willAsk === 1 ? '' : 's'} to give you
            {difficulty !== 'any' && (round === 'technical' || round === 'full')
              ? ' — set “How hard?” back to Mixed for a longer one.'
              : ' — try the full mock interview for a longer one.'}
          </p>
        )}

        {/* Difficulty only means anything where there are technical questions to
            choose from — the HR and managerial banks are not graded that way. */}
        {(round === 'technical' || round === 'full') && (
          <>
            <h2 className="section-title">How hard?</h2>
            <div className="chip-row">
              {DIFFS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={`chip ${difficulty === d.id ? 'active' : ''}`}
                  onClick={() => setDifficulty(d.id)}
                  title={d.sub}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="tip-block">
          <span className="tip-icon">{ai === false ? '📝' : ai === null ? '⏳' : '🤖'}</span>
          <span>
            {ai === false
              ? 'AI marking is off. After each answer you will see the model answer and mark yourself against it — be honest, that is where the learning is.'
              : ai === null
                ? 'Checking whether AI marking is switched on. Either way you can start — every question comes with a model answer.'
                : 'The AI marks every answer out of 10, tells you what you got right, what an interviewer wanted to hear, and writes a report at the end.'}
          </span>
        </div>

        {notice && <p className="field-error">{notice}</p>}

        <button className="btn btn-primary btn-lg btn-block" onClick={start}>
          Start the interview →
        </button>

        {role.prep?.length > 0 && (
          <>
            <h2 className="section-title">Before you go in</h2>
            <ul className="prep-list">
              {role.prep.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }

  // ----------------------------------------------------------------- live ----
  if (stage === 'live' && question) {
    const pct = Math.round((idx / questions.length) * 100)
    const mic = speechRecogniser()
    return (
      <div className="page narrow">
        <div className="iv-bar">
          <span className="iv-where">
            {role.icon} {role.title} · {findRound(question.round || round).title}
          </span>
          <span className="iv-clock" title="Time so far">
            ⏱ {mmss(seconds)}
          </span>
        </div>

        <div className="iv-progress">
          <div className="iv-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="iv-count">
          Question {idx + 1} of {questions.length}
        </div>

        <div className="iv-card">
          <div className="iv-meta">
            <span className="tag">{question.topic}</span>
            <span className={`tag diff-${question.difficulty}`}>{question.difficulty}</span>
            {canSpeak() && (
              <button
                type="button"
                className="iv-icon-btn"
                onClick={() => speak(question.q)}
                title="Read the question out loud"
                aria-label="Read the question out loud"
              >
                🔊
              </button>
            )}
            <label className="iv-toggle" title="Read every question out loud">
              <input
                type="checkbox"
                checked={readAloud}
                onChange={(e) => setReadAloud(e.target.checked)}
                disabled={!canSpeak()}
              />
              read aloud
            </label>
          </div>

          <h2 className="iv-question">{question.q}</h2>

          {phase === 'answering' && (
            <>
              {showHint ? (
                <div className="iv-hint">💡 {question.hint}</div>
              ) : (
                <button type="button" className="btn btn-sm" onClick={() => setShowHint(true)}>
                  💡 I need a hint
                </button>
              )}

              <textarea
                ref={answerBoxRef}
                className="iv-answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) submit()
                }}
                placeholder="Answer the way you would say it out loud…"
                rows={7}
                autoFocus
              />

              <div className="iv-actions">
                <span className="iv-words">{wordCount(answer)} words</span>
                {mic && (
                  <button
                    type="button"
                    className={`btn btn-sm ${listening ? 'btn-check' : ''}`}
                    onClick={() => (listening ? stopListening() : startListening())}
                    title="Answer out loud instead of typing"
                  >
                    {listening ? '⏹ Stop' : '🎙 Speak'}
                  </button>
                )}
                <button type="button" className="btn btn-sm" onClick={() => submit({ skip: true })}>
                  Show me the answer
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => submit()}
                  disabled={!answer.trim()}
                >
                  Submit answer →
                </button>
              </div>
              <p className="field-hint">Ctrl+Enter also submits.</p>
            </>
          )}

          {phase === 'marking' && (
            <div className="iv-marking">
              <span className="tutor-typing">
                <i />
                <i />
                <i />
              </span>
              <span>The interviewer is reading your answer…</span>
            </div>
          )}

          {phase === 'marked' && feedback && (
            <div className="iv-feedback">
              {answer.trim() ? (
                <div className="iv-yours">
                  <div className="iv-sub">What you said</div>
                  <p>{answer.trim()}</p>
                </div>
              ) : (
                <div className="iv-yours skipped">You skipped this one.</div>
              )}

              {feedback.source === 'self' ? (
                <>
                  <div className="iv-sub">A strong answer</div>
                  <p className="iv-ideal">{feedback.better}</p>
                  <div className="iv-sub">How did you do — honestly?</div>
                  <div className="self-marks">
                    {SELF_MARKS.map((m) => (
                      <button
                        key={m.score}
                        type="button"
                        className={`self-mark ${feedback.score === m.score ? 'active' : ''}`}
                        onClick={() => selfMark(m.score)}
                      >
                        <span className="self-mark-icon">{m.icon}</span>
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className={`iv-score ${scoreClass((feedback.score || 0) * 10)}`}>
                    {feedback.score}/10
                  </div>
                  <p className="iv-verdict">{feedback.verdict}</p>
                  {feedback.good?.length > 0 && (
                    <ul className="iv-points good">
                      {feedback.good.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                  )}
                  {feedback.missing?.length > 0 && (
                    <ul className="iv-points missing">
                      {feedback.missing.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  )}
                  {feedback.better && (
                    <>
                      <div className="iv-sub">A stronger answer</div>
                      <p className="iv-ideal">{feedback.better}</p>
                    </>
                  )}
                </>
              )}

              <div className="iv-actions end">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={next}
                  disabled={feedback.score == null}
                >
                  {idx + 1 >= questions.length ? 'See my report →' : 'Next question →'}
                </button>
              </div>
              {feedback.score == null && (
                <p className="field-hint">Pick how it went to carry on.</p>
              )}
            </div>
          )}
        </div>

        {notice && <p className="field-error">{notice}</p>}

        <div className="iv-foot">
          <button type="button" className="btn btn-ghost-danger btn-sm" onClick={endEarly}>
            End interview
          </button>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------------- report ----
  return (
    <div className="page narrow">
      <Link to="/interview" className="back-link">
        ← All roles
      </Link>

      <div className="iv-result">
        <div className={`score-ring ${scoreClass(totals.pct)}`} style={{ ['--pct']: totals.pct }}>
          <span>{totals.pct}%</span>
        </div>
        <h1 className="page-title">
          {totals.pct >= 80
            ? 'Strong interview 🌟'
            : totals.pct >= 60
              ? 'Solid — nearly there 💪'
              : totals.pct >= 40
                ? 'A decent start 🙂'
                : 'Worth another go 🌱'}
        </h1>
        <p className="muted">
          {role.icon} {role.title} · {roundInfo.title} · {totals.asked} questions · {mmss(seconds)}
        </p>
        <p className="iv-xp">+{earnedXp} XP</p>
      </div>

      {reportState === 'loading' && (
        <div className="iv-marking">
          <span className="tutor-typing">
            <i />
            <i />
            <i />
          </span>
          <span>Writing your feedback…</span>
        </div>
      )}

      {reportState === 'done' && report && (
        <div className="iv-report">
          <p className="iv-summary">{report.summary}</p>
          {report.verdict && <p className="iv-verdict-line">🎯 {report.verdict}</p>}
          {report.strengths?.length > 0 && (
            <>
              <div className="iv-sub">What worked</div>
              <ul className="iv-points good">
                {report.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </>
          )}
          {report.improve?.length > 0 && (
            <>
              <div className="iv-sub">What to fix</div>
              <ul className="iv-points missing">
                {report.improve.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </>
          )}
          {report.study?.length > 0 && (
            <>
              <div className="iv-sub">Revise before the real one</div>
              <div className="chip-row">
                {report.study.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {reportState === 'off' && (
        <div className="iv-report">
          {selfReport.strong.length > 0 && (
            <>
              <div className="iv-sub">You were comfortable with</div>
              <div className="chip-row">
                {selfReport.strong.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
          {selfReport.weak.length > 0 ? (
            <>
              <div className="iv-sub">Go and revise these</div>
              <div className="chip-row">
                {selfReport.weak.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <p className="muted">Nothing scored badly — try a harder round next.</p>
          )}
        </div>
      )}

      <h2 className="section-title">Question by question</h2>
      <div className="iv-breakdown">
        {results.map((r, i) => (
          <details key={`${r.id}-${i}`} className="iv-row">
            <summary>
              <span className={`iv-row-score ${scoreClass((r.score || 0) * 10)}`}>{r.score}/10</span>
              <span className="iv-row-q">{r.q}</span>
            </summary>
            <div className="iv-row-body">
              <div className="iv-sub">You said</div>
              <p>{r.answer || <em>skipped</em>}</p>
              {r.verdict && <p className="iv-verdict">{r.verdict}</p>}
              <div className="iv-sub">A stronger answer</div>
              <p className="iv-ideal">{r.better}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="result-actions">
        <button className="btn btn-primary" onClick={() => setStage('setup')}>
          Interview again
        </button>
        <Link to="/interview" className="btn">
          Another role
        </Link>
        <Link to={`/interview/answers?role=${role.id}`} className="btn">
          📖 Read the answers
        </Link>
      </div>
    </div>
  )
}
