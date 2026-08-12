import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { TRACKS } from '../data/tracks.js'
import Icon from '../components/Icon.jsx'
import StatTile from '../components/StatTile.jsx'

const GOALS = [
  { id: 'basics', icon: '🌱', title: 'Learn the basics', desc: 'Start from zero' },
  { id: 'placement', icon: '💼', title: 'Get placed', desc: 'Prepare for a job' },
  { id: 'explore', icon: '🧭', title: 'Just explore', desc: 'Have a look around' },
]

const TOTAL_LEVELS = TRACKS.reduce((n, t) => n + t.levels.length, 0)

// The next level in every subject that has one left, subjects you have already
// started first. That is what a learner actually wants on opening the app —
// not a second copy of the menu, which is what used to be here.
function upNext(completed, count) {
  const started = []
  const fresh = []
  for (const track of TRACKS) {
    const level = track.levels.find((l) => !completed[l.id])
    if (!level) continue
    const done = track.levels.filter((l) => completed[l.id]).length
    ;(done > 0 ? started : fresh).push({ track, level, done })
  }
  started.sort((a, b) => b.done - a.done)
  return [...started, ...fresh].slice(0, count)
}

function timeAgo(iso) {
  const then = Date.parse(iso)
  if (!then) return ''
  const mins = Math.round((Date.now() - then) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.round(hrs / 24)
  if (days < 7) return `${days}d ago`
  return new Date(then).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
}

function recentActivity(state, count) {
  const rows = [
    ...Object.entries(state.solved || {}).map(([id, s]) => ({
      key: `c-${id}`,
      icon: 'code',
      title: 'Solved a coding challenge',
      meta: s.language || '',
      xp: s.xp,
      at: s.at,
    })),
    ...Object.entries(state.interviews || {}).map(([id, s]) => ({
      key: `i-${id}`,
      icon: 'mic',
      title: s.roleTitle || 'Mock interview',
      meta: `${s.round || 'mock'} · scored ${s.score}%`,
      xp: s.xp,
      at: s.at,
    })),
  ]
  return rows
    .filter((r) => r.at)
    .sort((a, b) => String(b.at).localeCompare(String(a.at)))
    .slice(0, count)
}

function Onboarding() {
  const { state, setProfile } = useProgress()
  const [name, setName] = useState(state.name || '')
  const [goal, setGoal] = useState(state.goal || 'basics')
  // Someone who signed up already told us their name — only ask what is missing.
  const needsName = !state.name

  return (
    <div className="onboard">
      <div className="onboard-card">
        <div className="onboard-mark">
          <Icon name="bolt" size={26} strokeWidth={2.4} />
        </div>
        <h1>{needsName ? 'Welcome to CodeQuest' : `One quick thing, ${state.name}`}</h1>
        <p className="muted">
          Learn computer science the fun way — level by level, with XP, streaks and badges.
        </p>

        {needsName && (
          <>
            <label className="field-label">What should we call you?</label>
            <input
              className="text-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name"
              maxLength={20}
            />
          </>
        )}

        <label className="field-label">What is your goal?</label>
        <div className="goal-grid">
          {GOALS.map((g) => (
            <button
              key={g.id}
              className={`goal-card ${goal === g.id ? 'active' : ''}`}
              onClick={() => setGoal(g.id)}
              type="button"
            >
              <span className="goal-icon">{g.icon}</span>
              <span className="goal-title">{g.title}</span>
              <span className="goal-desc">{g.desc}</span>
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary btn-block"
          disabled={needsName && !name.trim()}
          onClick={() => setProfile(name.trim() || state.name, goal)}
        >
          Start learning
          <Icon name="arrowRight" size={17} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const { state, completedCount, solvedCount } = useProgress()
  const navigate = useNavigate()

  if (!state.name || !state.goal) return <Onboarding />

  // One lead card plus three follow-ups.
  const [lead, ...rest] = upNext(state.completed, 4)
  const accuracy = state.practiceAnswered
    ? `${Math.round((state.practiceCorrect / state.practiceAnswered) * 100)}%`
    : '—'
  const subjectsStarted = TRACKS.filter((t) => t.levels.some((l) => state.completed[l.id])).length
  const activity = recentActivity(state, 4)

  return (
    <div className="page dash">
      {/* One lesson, one button. Level, XP, streak and badges are all in the
          rail beside this page, so none of them appear here. */}
      {lead ? (
        <section className="continue" style={{ ['--accent']: lead.track.color }}>
          <span className="continue-icon">{lead.track.icon}</span>
          <div className="continue-text">
            <p className="continue-eyebrow">
              {lead.track.title}
              {lead.done > 0 && ` · ${lead.done} of ${lead.track.levels.length} done`}
            </p>
            <h2 className="continue-title">{lead.level.title}</h2>
            <p className="continue-xp">Earn +{lead.level.xp} XP</p>
          </div>
          <button
            type="button"
            className="btn btn-lg"
            onClick={() => navigate(`/learn/${lead.track.id}/${lead.level.id}/lesson`)}
          >
            {completedCount === 0 ? 'Start' : 'Continue'}
            <Icon name="arrowRight" size={18} strokeWidth={2.4} />
          </button>
        </section>
      ) : (
        <section className="panel">
          <div className="empty">
            <Icon name="check" size={30} strokeWidth={2} />
            <p>Every level is done. Keep sharp with Practice or a mock interview.</p>
            <Link to="/practice" className="btn btn-primary">
              Go to Practice
            </Link>
          </div>
        </section>
      )}

      {/* Four numbers that appear nowhere else in the app. */}
      <section className="stat-grid">
        <StatTile
          icon="layers"
          value={completedCount}
          label="Lessons done"
          foot={`of ${TOTAL_LEVELS}`}
        />
        <StatTile
          icon="code"
          value={solvedCount}
          label="Challenges solved"
          foot={solvedCount ? 'Nice work' : 'None yet'}
        />
        <StatTile
          icon="target"
          value={accuracy}
          label="Practice accuracy"
          foot={state.practiceAnswered ? `${state.practiceAnswered} answered` : 'Not started'}
        />
        <StatTile
          icon="compass"
          value={subjectsStarted}
          label="Subjects started"
          foot={`of ${TRACKS.length}`}
        />
      </section>

      {rest.length > 0 && (
        <section className="panel">
          <div className="panel-head">
            <h3>Also waiting for you</h3>
            <Link to="/learn" className="section-link">
              All subjects
              <Icon name="chevronRight" size={15} strokeWidth={2.4} />
            </Link>
          </div>
          <ul className="queue">
            {rest.map(({ track, level: lvl, done }) => (
              <li key={lvl.id} className="queue-row" style={{ ['--accent']: track.color }}>
                <span className="queue-icon">{track.icon}</span>
                <div className="queue-text">
                  <div className="queue-track">
                    {track.title}
                    {done > 0 && (
                      <span className="queue-done">
                        {done}/{track.levels.length} done
                      </span>
                    )}
                  </div>
                  <div className="queue-title">{lvl.title}</div>
                </div>
                <span className="queue-xp">+{lvl.xp} XP</span>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => navigate(`/learn/${track.id}/${lvl.id}/lesson`)}
                >
                  Open
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="panel">
        <div className="panel-head">
          <h3>Recent activity</h3>
        </div>
        {activity.length === 0 ? (
          <div className="empty tight">
            <Icon name="clock" size={24} strokeWidth={2} />
            <p>Nothing here yet. Solve a challenge or sit a mock interview.</p>
            <Link to="/challenges" className="btn btn-sm">
              Browse challenges
            </Link>
          </div>
        ) : (
          <ul className="mini-list">
            {activity.map((a) => (
              <li key={a.key} className="mini-row">
                <span className="mini-icon">
                  <Icon name={a.icon} size={16} strokeWidth={2.2} />
                </span>
                <div>
                  <div className="mini-title">{a.title}</div>
                  <div className="mini-sub">
                    {a.meta}
                    {a.meta && ' · '}
                    {timeAgo(a.at)}
                  </div>
                </div>
                {a.xp > 0 && <span className="mini-xp">+{a.xp}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>Jump into a subject</h3>
          <Link to="/learn" className="section-link">
            View all {TRACKS.length}
            <Icon name="chevronRight" size={15} strokeWidth={2.4} />
          </Link>
        </div>
        <div className="track-mini-grid">
          {TRACKS.slice(0, 11).map((t) => {
            const done = t.levels.filter((l) => state.completed[l.id]).length
            const p = Math.round((done / t.levels.length) * 100)
            return (
              <Link
                key={t.id}
                to={`/learn/${t.id}`}
                className="track-mini"
                style={{ ['--accent']: t.color }}
              >
                <span className="track-mini-icon">{t.icon}</span>
                <span className="track-mini-title">{t.title}</span>
                <span className="track-mini-bar">
                  <span style={{ width: `${p}%` }} />
                </span>
                <span className="track-mini-prog">
                  {done}/{t.levels.length}
                </span>
              </Link>
            )
          })}
          <Link to="/learn" className="track-mini track-mini-more">
            <span className="track-mini-icon">
              <Icon name="compass" size={24} strokeWidth={2} />
            </span>
            <span className="track-mini-title">View all</span>
            <span className="track-mini-prog">{TRACKS.length} subjects</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
