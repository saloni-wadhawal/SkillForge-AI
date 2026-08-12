import { Link } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { TRACKS } from '../data/tracks.js'
import { CATEGORY_ORDER, CATEGORY_META } from '../data/categories.js'

function TrackCard({ track, completed }) {
  const done = track.levels.filter((l) => completed[l.id]).length
  const pct = Math.round((done / track.levels.length) * 100)
  return (
    <Link to={`/learn/${track.id}`} className="track-card" style={{ ['--accent']: track.color }}>
      <div className="track-card-top">
        <span className="track-card-icon">{track.icon}</span>
        <span className="track-card-count">{done}/{track.levels.length}</span>
      </div>
      <h3 className="track-card-title">{track.title}</h3>
      <p className="track-card-blurb">{track.blurb}</p>
      <div className="track-progress">
        <div className="track-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </Link>
  )
}

export default function Tracks() {
  const { state } = useProgress()

  // Show known categories in order, then any leftover categories at the end.
  const known = new Set(CATEGORY_ORDER)
  const extra = [...new Set(TRACKS.map((t) => t.category))].filter((c) => !known.has(c))
  const categories = [...CATEGORY_ORDER, ...extra]

  return (
    <div className="page">
      <p className="section-sub">
        The full computer engineering syllabus — diploma to degree. Pick any subject; each one
        teaches from the basics all the way to advanced.
      </p>

      {categories.map((cat) => {
        const list = TRACKS.filter((t) => t.category === cat)
        if (!list.length) return null
        const meta = CATEGORY_META[cat] || { title: cat, subtitle: '', icon: '' }
        return (
          <section key={cat}>
            <h2 className="section-title">
              {meta.icon} {meta.title} <span className="section-count">{list.length}</span>
            </h2>
            {meta.subtitle && <p className="section-sub">{meta.subtitle}</p>}
            <div className="track-grid">
              {list.map((t) => (
                <TrackCard key={t.id} track={t} completed={state.completed} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
