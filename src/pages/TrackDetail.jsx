import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { findTrack } from '../data/tracks.js'

function Stars({ n }) {
  return (
    <span className="node-stars">
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= n ? 'star on' : 'star'}>★</span>
      ))}
    </span>
  )
}

export default function TrackDetail() {
  const { trackId } = useParams()
  const navigate = useNavigate()
  const { state } = useProgress()
  const track = findTrack(trackId)

  if (!track) {
    return (
      <div className="page">
        <p>Track not found.</p>
        <Link to="/learn" className="btn">Back to subjects</Link>
      </div>
    )
  }

  const done = track.levels.filter((l) => state.completed[l.id]).length
  const pct = Math.round((done / track.levels.length) * 100)
  // The first level you have not finished — the only one that gets the bubble.
  const nextIndex = track.levels.findIndex((l) => !state.completed[l.id])

  return (
    <div className="page">
      <Link to="/learn" className="back-link">← All subjects</Link>

      <div className="track-header" style={{ ['--accent']: track.color }}>
        <span className="track-header-icon">{track.icon}</span>
        <div className="track-header-info">
          <h1>{track.title}</h1>
          <p className="muted">{track.blurb}</p>
          <div className="track-progress big">
            <div className="track-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="track-header-count">{done} / {track.levels.length} levels complete</div>
        </div>
      </div>

      {/* The path. Eight swing positions rather than two, so a long subject
          winds down the page instead of zig-zagging between the same two spots. */}
      <div className="level-map" style={{ ['--accent']: track.color }}>
        {track.levels.map((level, i) => {
          const record = state.completed[level.id]
          const prevDone = i === 0 || state.completed[track.levels[i - 1].id]
          const status = record ? 'done' : prevDone ? 'open' : 'locked'
          return (
            <div key={level.id} className={`map-row pos-${i % 8}`}>
              <button
                className={`map-node ${status}`}
                disabled={status === 'locked'}
                onClick={() => navigate(`/learn/${track.id}/${level.id}/lesson`)}
                title={status === 'locked' ? 'Finish the previous level to unlock' : level.title}
              >
                {i === nextIndex && (
                  <span className="map-start">{done === 0 ? 'Start' : 'Continue'}</span>
                )}
                <span className="map-node-num">
                  {status === 'done' ? '✓' : status === 'locked' ? '🔒' : i + 1}
                </span>
                {record && <Stars n={record.stars} />}
              </button>
              <div className="map-label">
                <div className="map-label-title">{level.title}</div>
                <div className="map-label-xp">+{level.xp} XP</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
