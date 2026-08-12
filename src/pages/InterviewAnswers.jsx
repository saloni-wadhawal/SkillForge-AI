import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { INTERVIEW_ROLES, HR_QUESTIONS } from '../data/interviewRoles.js'
import StatTile from '../components/StatTile.jsx'

// Every question in the bank, flattened, with the role it belongs to. The HR
// round is shared by every role, so it gets a pseudo-role of its own.
const ALL_QUESTIONS = [
  ...INTERVIEW_ROLES.flatMap((r) =>
    r.questions.map((q) => ({
      ...q,
      roleId: r.id,
      roleTitle: r.title,
      roleIcon: r.icon,
      color: r.color,
    }))
  ),
  ...HR_QUESTIONS.map((q) => ({
    ...q,
    roleId: 'hr',
    roleTitle: 'HR round (asked for every role)',
    roleIcon: '🤝',
    color: '#6c5ce7',
  })),
]

const ROUND_FILTERS = [
  { id: 'all', label: 'All rounds' },
  { id: 'technical', label: 'Technical' },
  { id: 'managerial', label: 'Managerial' },
  { id: 'hr', label: 'HR' },
]

const DIFF_FILTERS = [
  { id: 'all', label: 'Any level' },
  { id: 'easy', label: 'Easy' },
  { id: 'medium', label: 'Medium' },
  { id: 'hard', label: 'Hard' },
]

export default function InterviewAnswers() {
  const [params, setParams] = useSearchParams()
  const roleId = params.get('role') || 'all'
  const [round, setRound] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(() => new Set())

  const pickRole = (id) => {
    // Keep the role in the URL so this page can be linked to and shared.
    if (id === 'all') params.delete('role')
    else params.set('role', id)
    setParams(params, { replace: true })
  }

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_QUESTIONS.filter((item) => {
      if (roleId !== 'all' && item.roleId !== roleId) return false
      if (round !== 'all' && item.round !== round) return false
      if (difficulty !== 'all' && item.difficulty !== difficulty) return false
      if (!q) return true
      // Search the answers too — "where is normalisation explained?" should work.
      return `${item.q} ${item.topic} ${item.hint} ${item.ideal} ${item.roleTitle}`
        .toLowerCase()
        .includes(q)
    })
  }, [roleId, round, difficulty, query])

  const toggle = (id, isOpen) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (isOpen) next.add(id)
      else next.delete(id)
      return next
    })

  const allOpen = shown.length > 0 && shown.every((item) => open.has(item.id))

  return (
    <div className="page">
      <div className="section-head-row">
        <div>
          <p className="section-sub">
            Every question in the interview bank, with the answer written out. Stuck on
            something? Read it here — you should not have to go anywhere else.
          </p>
        </div>
        <Link to="/interview" className="section-link">
          ← Back to interviews
        </Link>
      </div>

      <section className="stat-grid">
        <StatTile icon="book" value={ALL_QUESTIONS.length} label="Answers written" />
        <StatTile icon="compass" value={INTERVIEW_ROLES.length} label="Roles covered" />
        <StatTile icon="user" value={HR_QUESTIONS.length} label="HR questions" />
        <StatTile icon="list" value={shown.length} label="Showing now" />
      </section>

      <input
        className="text-input role-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a question, a topic, or anything inside the answers…"
        aria-label="Search the question bank"
      />

      <div className="chip-row">
        <button className={`chip ${roleId === 'all' ? 'active' : ''}`} onClick={() => pickRole('all')}>
          All roles
        </button>
        {INTERVIEW_ROLES.map((r) => (
          <button
            key={r.id}
            className={`chip ${roleId === r.id ? 'active' : ''}`}
            onClick={() => pickRole(r.id)}
          >
            {r.icon} {r.short}
          </button>
        ))}
        <button className={`chip ${roleId === 'hr' ? 'active' : ''}`} onClick={() => pickRole('hr')}>
          🤝 HR
        </button>
      </div>

      <div className="chip-row tight">
        {ROUND_FILTERS.map((r) => (
          <button
            key={r.id}
            className={`chip small ${round === r.id ? 'active' : ''}`}
            onClick={() => setRound(r.id)}
          >
            {r.label}
          </button>
        ))}
        {DIFF_FILTERS.map((d) => (
          <button
            key={d.id}
            className={`chip small ${difficulty === d.id ? 'active' : ''}`}
            onClick={() => setDifficulty(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="qa-toolbar">
        <span className="muted small">
          {shown.length} question{shown.length === 1 ? '' : 's'}
        </span>
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => setOpen(allOpen ? new Set() : new Set(shown.map((i) => i.id)))}
          disabled={!shown.length}
        >
          {allOpen ? 'Collapse all' : 'Open all answers'}
        </button>
        {roleId !== 'all' && roleId !== 'hr' && (
          <Link to={`/interview/${roleId}`} className="btn btn-sm btn-primary">
            Practise this role →
          </Link>
        )}
      </div>

      {shown.length === 0 ? (
        <p className="muted">
          Nothing matches that. Try a shorter word, or set the filters back to “All roles”.
        </p>
      ) : (
        <div className="qa-list">
          {shown.map((item) => (
            <details
              key={item.id}
              className="qa-item"
              style={{ ['--accent']: item.color }}
              open={open.has(item.id)}
              onToggle={(e) => toggle(item.id, e.currentTarget.open)}
            >
              <summary>
                <span className="qa-q">{item.q}</span>
                <span className="qa-tags">
                  <span className="tag">{item.topic}</span>
                  <span className={`tag diff-${item.difficulty}`}>{item.difficulty}</span>
                </span>
              </summary>
              <div className="qa-body">
                <div className="qa-where">
                  {item.roleIcon} {item.roleTitle} · {item.round} round
                </div>
                {item.hint && (
                  <div className="qa-hint">💡 {item.hint}</div>
                )}
                <div className="iv-sub">The answer</div>
                <p className="iv-ideal">{item.ideal}</p>
                {item.roleId !== 'hr' && (
                  <Link to={`/interview/${item.roleId}`} className="section-link">
                    Practise {item.roleTitle} →
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  )
}
