import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { MCQ_BANK, mcqCategories } from '../data/mcqBank.js'
import Icon from '../components/Icon.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Practice() {
  const { recordPractice } = useProgress()
  const categories = useMemo(() => ['All', ...mcqCategories()], [])

  const [cat, setCat] = useState('All')
  const [deck, setDeck] = useState(() => shuffle(MCQ_BANK))
  const [pos, setPos] = useState(0)
  const [selected, setSelected] = useState(null)
  const [locked, setLocked] = useState(false)
  const [answered, setAnswered] = useState(0)
  const [correct, setCorrect] = useState(0)

  const pickCat = (c) => {
    setCat(c)
    const pool = c === 'All' ? MCQ_BANK : MCQ_BANK.filter((q) => q.category === c)
    setDeck(shuffle(pool))
    setPos(0)
    setSelected(null)
    setLocked(false)
  }

  const q = deck[pos]

  const choose = (i) => {
    if (locked) return
    setSelected(i)
    setLocked(true)
    const ok = i === q.answer
    setAnswered((n) => n + 1)
    if (ok) setCorrect((n) => n + 1)
    recordPractice(ok)
  }

  const next = () => {
    const np = pos + 1
    if (np >= deck.length) {
      setDeck(shuffle(deck))
      setPos(0)
    } else {
      setPos(np)
    }
    setSelected(null)
    setLocked(false)
  }

  const accuracy = answered ? Math.round((correct / answered) * 100) : 0

  return (
    <div className="page narrow">
      <div className="section-head-row">
        <div>
          <p className="section-sub">Sharpen up with MCQs — computer fundamentals, coding, aptitude and core CS. Each correct answer earns XP.</p>
        </div>
        <Link to="/interview" className="section-link">
          Mock interview
          <Icon name="chevronRight" size={15} />
        </Link>
      </div>

      <div className="chip-row">
        {categories.map((c) => (
          <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => pickCat(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="practice-stats">
        <span>Session: <strong>{correct}/{answered}</strong> correct</span>
        <span>Accuracy: <strong>{accuracy}%</strong></span>
      </div>

      {q ? (
        <div className="practice-card">
          <div className="practice-meta">
            <span className="tag">{q.category}</span>
            <span className={`tag diff-${q.difficulty}`}>{q.difficulty}</span>
          </div>
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
              Next question →
            </button>
          </div>
        </div>
      ) : (
        <p className="muted">No questions in this category yet.</p>
      )}
    </div>
  )
}
