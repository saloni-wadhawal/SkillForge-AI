import { Link, useNavigate, useParams } from 'react-router-dom'
import { findLevel } from '../data/tracks.js'
import { useLevelContent } from '../lib/useLevelContent.js'

// The Code Lab understands these; anything else has no runnable editor.
const RUNNABLE = { python: 'python', py: 'python', javascript: 'javascript', js: 'javascript', cpp: 'cpp', 'c++': 'cpp', c: 'c', java: 'java' }

function Block({ block }) {
  if (block.type === 'code') {
    const runnable = RUNNABLE[String(block.lang || '').toLowerCase()]
    return (
      <div className="code-block-wrap">
        <pre className="code-block">
          {block.lang && <span className="code-lang">{block.lang}</span>}
          <code>{block.code}</code>
        </pre>
        {runnable && (
          <button
            type="button"
            className="try-code-btn"
            onClick={() => {
              // Hand it to the Code Lab instead of making them retype it.
              try {
                localStorage.setItem(
                  'codequest_codelab_v1',
                  JSON.stringify({ language: runnable, code: block.code, stdin: '' })
                )
              } catch {
                // if storage is blocked the lab just opens with its sample
              }
              window.open('/code', '_blank', 'noopener')
            }}
          >
            ▶ Try this code
          </button>
        )}
      </div>
    )
  }
  if (block.type === 'tip') {
    return (
      <div className="tip-block">
        <span className="tip-icon">💡</span>
        <span>{block.text}</span>
      </div>
    )
  }
  return <p className="lesson-text">{block.text}</p>
}

export default function Lesson() {
  const { trackId, levelId } = useParams()
  const navigate = useNavigate()
  const { track, level } = findLevel(trackId, levelId)
  // The body of the lesson arrives in its own chunk — see useLevelContent.
  const { content, loading } = useLevelContent(trackId, levelId)

  if (!track || !level) {
    return (
      <div className="page">
        <p>Lesson not found.</p>
        <Link to="/learn" className="btn">← Back to subjects</Link>
      </div>
    )
  }

  if (loading) return <p className="loading-note">Loading the lesson…</p>

  if (!content) {
    return (
      <div className="page">
        <p>This lesson could not be loaded. Check your connection and try again.</p>
        <Link to={`/learn/${track.id}`} className="btn">← Back to {track.title}</Link>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <Link to={`/learn/${track.id}`} className="back-link">← {track.title} map</Link>

      <div className="lesson-head" style={{ ['--accent']: track.color }}>
        <span className="lesson-head-icon">{track.icon}</span>
        <div>
          <div className="lesson-eyebrow">{track.title}</div>
          <h1 className="lesson-title">{level.title}</h1>
        </div>
      </div>

      <article className="lesson-body">
        {content.lesson.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}

        <div className="recap">
          <strong>Recap:</strong> {content.lesson.recap}
        </div>
      </article>

      <div className="lesson-actions">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate(`/learn/${track.id}/${level.id}/quiz`)}
        >
          Start quiz →
        </button>
      </div>
    </div>
  )
}
