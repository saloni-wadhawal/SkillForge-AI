import { Link } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { CHALLENGE_CATEGORIES, CHALLENGES, challengesInCategory } from '../data/challenges.js'
import StatTile from '../components/StatTile.jsx'
import Icon from '../components/Icon.jsx'

const DIFF_LABEL = { easy: 'easy', medium: 'medium', hard: 'hard' }

export default function Challenges() {
  const { state } = useProgress()
  const solved = state.solved || {}
  const solvedCount = Object.keys(solved).length

  return (
    <div className="page">
      <div className="section-head-row">
        <div>
          <p className="section-sub">
            Write real programs and have them marked automatically. Solve one to earn XP.
          </p>
        </div>
        <Link to="/code" className="section-link">
          Free practice editor
          <Icon name="chevronRight" size={15} />
        </Link>
      </div>

      <section className="stat-grid">
        <StatTile
          icon="check"
          value={solvedCount}
          label="Solved"
          foot={`of ${CHALLENGES.length}`}
        />
        <StatTile
          icon="spark"
          value={Object.values(solved).reduce((n, s) => n + (s.xp || 0), 0)}
          label="XP from code"
        />
        <StatTile
          icon="terminal"
          value={new Set(Object.values(solved).map((s) => s.language)).size}
          label="Languages used"
          foot="of 5 available"
        />
        <StatTile icon="target" value={CHALLENGES.length - solvedCount} label="Still to solve" />
      </section>

      {CHALLENGE_CATEGORIES.map((cat) => {
        const list = challengesInCategory(cat.id)
        const done = list.filter((c) => solved[c.id]).length
        return (
          <section key={cat.id} className="challenge-section">
            <div className="section-head-row">
              <h2 className="section-title">
                {cat.icon} {cat.title} <span className="count-chip">{done}/{list.length}</span>
              </h2>
            </div>
            <p className="section-sub">{cat.blurb}</p>

            <div className="challenge-grid">
              {list.map((c) => (
                <Link
                  key={c.id}
                  to={`/challenges/${c.id}`}
                  className={`challenge-card ${solved[c.id] ? 'solved' : ''}`}
                  style={{ ['--accent']: cat.color }}
                >
                  <div className="challenge-card-top">
                    <span className={`tag diff-${c.difficulty}`}>{DIFF_LABEL[c.difficulty]}</span>
                    <span className="challenge-xp">{solved[c.id] ? '✓ solved' : `+${c.xp} XP`}</span>
                  </div>
                  <div className="challenge-card-title">{c.title}</div>
                  <div className="challenge-card-brief">{c.brief}</div>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
