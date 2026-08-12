import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { useAuth } from '../state/AuthContext.jsx'
import { TRACKS } from '../data/tracks.js'
import { BADGES } from '../data/badges.js'
import StatTile from '../components/StatTile.jsx'

const GOAL_LABEL = {
  basics: '🌱 Learning the basics',
  placement: '💼 Getting placed',
  explore: '🧭 Just exploring',
}

export default function Profile() {
  const {
    state,
    level,
    xpIntoLevel,
    xpToNext,
    completedCount,
    interviewCount,
    bestInterviewScore,
    earnedBadges,
    resetProgress,
    setProfile,
    cloud,
    storageBlocked,
  } = useProgress()
  const { user, guest, logout } = useAuth()
  const navigate = useNavigate()
  const earned = new Set(earnedBadges)
  const [editingName, setEditingName] = useState(false)
  const [draftName, setDraftName] = useState('')
  const pct = Math.round((xpIntoLevel / (xpIntoLevel + xpToNext)) * 100)
  const totalLevels = TRACKS.reduce((n, t) => n + t.levels.length, 0)

  const onReset = () => {
    if (window.confirm('Reset ALL progress? This cannot be undone.')) resetProgress()
  }

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const startEditName = () => {
    setDraftName(state.name || '')
    setEditingName(true)
  }

  const saveName = () => {
    const next = draftName.trim()
    if (next) setProfile(next, state.goal)
    setEditingName(false)
  }

  const CLOUD_LABEL = {
    syncing: '☁ Saving to your account…',
    saved: '☁ Saved to your account',
    error: '☁ Saved on this device — could not reach the server',
  }

  return (
    <div className="page">
      <div className="profile-head">
        <div className="profile-avatar">{(state.name || '?').charAt(0).toUpperCase()}</div>
        <div>
          {editingName ? (
            <div className="name-edit">
              <input
                className="text-input"
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveName()
                  if (e.key === 'Escape') setEditingName(false)
                }}
                maxLength={20}
                aria-label="Your name"
                autoFocus
              />
              <button className="btn btn-primary" onClick={saveName}>Save</button>
              <button className="btn" onClick={() => setEditingName(false)}>Cancel</button>
            </div>
          ) : (
            <h1 className="page-title">
              {state.name || 'Learner'}{' '}
              <button className="name-edit-btn" onClick={startEditName} title="Change your name">
                ✏️
              </button>
            </h1>
          )}
          <p className="muted">{GOAL_LABEL[state.goal] || 'Learning computer science'}</p>
          {user ? (
            <p className="muted account-line">
              {user.email}
              {cloud.status !== 'off' && <span className="cloud-note">{CLOUD_LABEL[cloud.status]}</span>}
            </p>
          ) : (
            <p className="muted account-line">
              Guest · saved in this browser · <Link to="/signup">create a free account</Link>
            </p>
          )}
        </div>
      </div>

      {storageBlocked && (
        <div className="tip-block auth-note">
          <span className="tip-icon">💡</span>
          <span>
            This browser is not letting CodeQuest save anything locally (private mode, or site data
            is blocked). Your progress will only last until you close the tab
            {user ? ' — but it is still being saved to your account.' : '.'}
          </span>
        </div>
      )}

      <div className="profile-level">
        <div className="level-badge big">Lv {level}</div>
        <div className="level-bar">
          <div className="level-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="level-bar-label">{state.xp} XP · {xpToNext} to next level</div>
      </div>

      <section className="stat-grid six">
        <StatTile icon="spark" value={state.xp} label="Total XP" />
        <StatTile icon="flame" value={state.streak.count} label="Day streak" />
        <StatTile icon="layers" value={completedCount} label="Levels done" foot={`of ${totalLevels}`} />
        <StatTile
          icon="target"
          value={state.practiceCorrect}
          label="Practice hits"
          foot={`of ${state.practiceAnswered} answered`}
        />
        <StatTile icon="mic" value={interviewCount} label="Mock interviews" />
        <StatTile icon="medal" value={`${bestInterviewScore}%`} label="Best interview" />
      </section>

      <h2 className="section-title">Badges</h2>
      <div className="badge-grid">
        {BADGES.map((b) => {
          const got = earned.has(b.id)
          return (
            <div key={b.id} className={`badge ${got ? 'earned' : 'locked'}`} title={b.desc}>
              <span className="badge-icon">{got ? b.icon : '🔒'}</span>
              <span className="badge-name">{b.name}</span>
              <span className="badge-desc">{b.desc}</span>
            </div>
          )
        })}
      </div>

      <h2 className="section-title">Track progress</h2>
      <div className="progress-list">
        {TRACKS.map((t) => {
          const done = t.levels.filter((l) => state.completed[l.id]).length
          const p = Math.round((done / t.levels.length) * 100)
          return (
            <div key={t.id} className="progress-row">
              <span className="progress-row-name">{t.icon} {t.title}</span>
              <div className="track-progress"><div className="track-progress-fill" style={{ width: `${p}%`, background: t.color }} /></div>
              <span className="progress-row-count">{done}/{t.levels.length}</span>
            </div>
          )
        })}
      </div>

      <div className="result-actions">
        {user || guest ? (
          <button className="btn" onClick={onLogout}>
            {user ? 'Log out' : 'Leave guest mode'}
          </button>
        ) : null}
      </div>

      <div className="danger-zone">
        <button className="btn btn-ghost-danger" onClick={onReset}>Reset all progress</button>
      </div>
    </div>
  )
}
