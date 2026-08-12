import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { findLevel } from '../data/tracks.js'
import { useLevelContent } from '../lib/useLevelContent.js'
import Confetti from '../components/Confetti.jsx'

export default function Quiz() {
  const { trackId, levelId } = useParams()
  const navigate = useNavigate()
  const { completeLevel } = useProgress()
  const { track, level, index } = findLevel(trackId, levelId)

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [locked, setLocked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const savedRef = useRef(false)
  // The questions arrive in the subject's own chunk — see useLevelContent.
  const { content, loading } = useLevelContent(trackId, levelId)

  if (!track || !level) {
    return (
      <div className="page">
        <p>Quiz not found.</p>
        <Link to="/learn" className="btn">← Back to subjects</Link>
      </div>
    )
  }

  if (loading) return <p className="loading-note">Loading the quiz…</p>

  if (!content) {
    return (
      <div className="page">
        <p>This quiz could not be loaded. Check your connection and try again.</p>
        <Link to={`/learn/${track.id}`} className="btn">← Back to {track.title}</Link>
      </div>
    )
  }

  const questions = content.quiz
  const q = questions[current]
  const isLast = current === questions.length - 1
  const nextLevel = index >= 0 && index < track.levels.length - 1 ? track.levels[index + 1] : null

  const choose = (i) => {
    if (locked) return
    setSelected(i)
    setLocked(true)
    if (i === q.answer) setCorrectCount((c) => c + 1)
  }

  const next = () => {
    if (isLast) {
      if (!savedRef.current) {
        savedRef.current = true
        completeLevel(track.id, level.id, level.xp, correctCount, questions.length)
      }
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setLocked(false)
    }
  }

  if (finished) {
    const total = questions.length
    const stars = correctCount === total ? 3 : correctCount >= Math.ceil(total * 0.7) ? 2 : 1
    const perfect = correctCount === total
    return (
      <div className="page narrow center">
        <Confetti active={correctCount >= Math.ceil(total * 0.7)} />
        <div className="result-card">
          <div className="result-emoji">{perfect ? '🏆' : correctCount >= Math.ceil(total * 0.7) ? '🎉' : '💪'}</div>
          <h1>{perfect ? 'Perfect!' : correctCount >= Math.ceil(total * 0.7) ? 'Well done!' : 'Keep going!'}</h1>
          <div className="result-stars">
            {[1, 2, 3].map((i) => (
              <span key={i} className={i <= stars ? 'big-star on' : 'big-star'}>★</span>
            ))}
          </div>
          <p className="result-score">You scored <strong>{correctCount} / {total}</strong></p>
          <p className="result-xp">+{level.xp} XP earned ⭐</p>

          <div className="result-actions">
            <button className="btn" onClick={() => navigate(`/learn/${track.id}`)}>Back to map</button>
            {nextLevel ? (
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/learn/${track.id}/${nextLevel.id}/lesson`)}
              >
                Next level →
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => navigate('/learn')}>More tracks →</button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <div className="quiz-head">
        <Link to={`/learn/${track.id}`} className="back-link">✕ Quit</Link>
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
        </div>
        <span className="quiz-count">{current + 1}/{questions.length}</span>
      </div>

      <div className="quiz-eyebrow">{track.icon} {track.title} — {level.title}</div>
      <h2 className="quiz-question">{q.q}</h2>

      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (locked) {
            if (i === q.answer) cls += ' correct'
            else if (i === selected) cls += ' wrong'
            else cls += ' dim'
          }
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={locked}>
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {locked && (
        <div className={`feedback ${selected === q.answer ? 'ok' : 'no'}`}>
          <strong>{selected === q.answer ? '✓ Correct!' : '✗ Not quite.'}</strong> {q.explain}
        </div>
      )}

      <div className="quiz-actions">
        <button className="btn btn-primary btn-lg" disabled={!locked} onClick={next}>
          {isLast ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
