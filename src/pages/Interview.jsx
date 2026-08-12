import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { INTERVIEW_ROLES, ROUNDS, findRound } from '../data/interviewRoles.js'
import { aiReady } from '../lib/aiStatus.js'
import StatTile from '../components/StatTile.jsx'
import Icon from '../components/Icon.jsx'

const scoreClass = (n) => (n >= 80 ? 'great' : n >= 60 ? 'ok' : n >= 40 ? 'meh' : 'poor')

const when = (iso) => {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}

export default function Interview() {
  const { state } = useProgress()
  const [query, setQuery] = useState('')
  const [ai, setAi] = useState(null) // null = still checking

  useEffect(() => {
    let alive = true
    aiReady().then((ready) => alive && setAi(ready))
    return () => {
      alive = false
    }
  }, [])

  const sessions = useMemo(
    () =>
      Object.entries(state.interviews || {})
        .map(([id, s]) => ({ id, ...s }))
        .sort((a, b) => String(b.at || '').localeCompare(String(a.at || ''))),
    [state.interviews]
  )

  // Best score so far per role, so a card can show what there is to beat.
  const bestByRole = useMemo(() => {
    const best = {}
    for (const s of sessions) best[s.roleId] = Math.max(best[s.roleId] || 0, s.score || 0)
    return best
  }, [sessions])

  const roles = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return INTERVIEW_ROLES
    return INTERVIEW_ROLES.filter((r) =>
      [r.title, r.short, r.blurb, ...(r.skills || []), ...(r.hires || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }, [query])

  const best = sessions.reduce((n, s) => Math.max(n, s.score || 0), 0)
  const xpEarned = sessions.reduce((n, s) => n + (s.xp || 0), 0)
  const rolesTried = new Set(sessions.map((s) => s.roleId)).size

  return (
    <div className="page">
      <div className="section-head-row">
        <div>
          <p className="section-sub">
            Sit a real interview for the job you actually want. You get asked one question at a
            time, you answer in your own words, and you are told what was good and what was
            missing — before a real interviewer tells you.
          </p>
        </div>
        <Link to="/interview/answers" className="section-link">
          All questions &amp; answers
          <Icon name="chevronRight" size={15} />
        </Link>
      </div>

      <div className="tip-block">
        <span className="tip-icon">📖</span>
        <span>
          Stuck on something? Every question in here comes with its answer written out —
          read them all on the <Link to="/interview/answers">questions &amp; answers</Link> page.
          No need to go looking anywhere else.
        </span>
      </div>

      <section className="stat-grid">
        <StatTile icon="mic" value={sessions.length} label="Interviews done" />
        <StatTile icon="medal" value={`${best}%`} label="Best score" />
        <StatTile
          icon="compass"
          value={rolesTried}
          label="Roles tried"
          foot={`of ${INTERVIEW_ROLES.length}`}
        />
        <StatTile icon="spark" value={xpEarned} label="XP from interviews" />
      </section>

      {ai === false && (
        <div className="tip-block">
          <span className="tip-icon">💡</span>
          <span>
            AI marking is off, so your answers are marked against the model answer and you rate
            yourself honestly. To have the AI mark them instead, put a free
            <code> GEMINI_API_KEY </code> in <code>server/.env</code> and start the server — see
            <code> server/README.md</code>. Either way the interview works.
          </span>
        </div>
      )}

      <h2 className="section-title">
        Pick a role <span className="count-chip">{roles.length}</span>
      </h2>
      <p className="section-sub">
        Each role has its own questions, its own model answers and its own HR round.
      </p>

      <input
        className="text-input role-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a role or a skill — 'frontend', 'SQL', 'testing'…"
        aria-label="Search roles"
      />

      {roles.length === 0 ? (
        <p className="muted">No role matches “{query}”. Try a shorter word.</p>
      ) : (
        <div className="role-grid">
          {roles.map((r) => (
            <Link
              key={r.id}
              to={`/interview/${r.id}`}
              className="role-card"
              style={{ ['--accent']: r.color }}
            >
              <div className="role-card-top">
                <span className="role-icon">{r.icon}</span>
                {bestByRole[r.id] != null && (
                  <span className={`role-best ${scoreClass(bestByRole[r.id])}`}>
                    best {bestByRole[r.id]}%
                  </span>
                )}
              </div>
              <div className="role-card-title">{r.title}</div>
              <div className="role-card-blurb">{r.blurb}</div>
              <div className="role-skills">
                {(r.skills || []).slice(0, 4).map((s) => (
                  <span key={s} className="role-skill">
                    {s}
                  </span>
                ))}
              </div>
              <div className="role-hires">Hiring: {(r.hires || []).slice(0, 3).join(' · ')}</div>
            </Link>
          ))}
        </div>
      )}

      <h2 className="section-title">The rounds</h2>
      <div className="round-strip">
        {ROUNDS.map((r) => (
          <div key={r.id} className="round-note">
            <span className="round-note-icon">{r.icon}</span>
            <div>
              <div className="round-note-title">{r.title}</div>
              <div className="round-note-blurb">{r.blurb}</div>
            </div>
          </div>
        ))}
      </div>

      {sessions.length > 0 && (
        <>
          <h2 className="section-title">Your past interviews</h2>
          <div className="history-list">
            {sessions.slice(0, 10).map((s) => (
              <div key={s.id} className="history-row">
                <span className="history-role">{s.roleTitle || s.roleId}</span>
                <span className="tag">{findRound(s.round).title}</span>
                <span className="history-when">{when(s.at)}</span>
                <span className="history-asked">{s.asked} questions</span>
                <span className={`history-score ${scoreClass(s.score)}`}>{s.score}%</span>
                <Link to={`/interview/${s.roleId}`} className="section-link">
                  Retry →
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
