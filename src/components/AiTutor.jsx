import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { findLevel } from '../data/tracks.js'
import { loadLevelContent } from '../data/levelContent.js'

// Turn a lesson's blocks into a short plain-text summary for context.
function lessonToText(content) {
  if (!content?.lesson) return ''
  const parts = content.lesson.blocks.map((b) => {
    if (b.type === 'code') return `Code:\n${b.code}`
    return b.text
  })
  parts.push(`Recap: ${content.lesson.recap}`)
  return parts.join('\n')
}

// Split an AI reply into text and ``` code ``` segments.
function segments(text) {
  const out = []
  const re = /```(\w*)\n?([\s\S]*?)```/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ type: 'text', text: text.slice(last, m.index) })
    out.push({ type: 'code', text: m[2] })
    last = re.lastIndex
  }
  if (last < text.length) out.push({ type: 'text', text: text.slice(last) })
  return out
}

export default function AiTutor() {
  const { state } = useProgress()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  // The lesson body lives in a lazily-loaded chunk, so it cannot be read
  // synchronously the way the titles can. The tutor works without it — it just
  // answers with less context until it arrives.
  const [lessonText, setLessonText] = useState('')

  useEffect(() => {
    const m = location.pathname.match(/^\/learn\/([^/]+)\/([^/]+)\//)
    if (!m) {
      setLessonText('')
      return undefined
    }
    let alive = true
    loadLevelContent(m[1], m[2]).then((c) => {
      if (alive) setLessonText(lessonToText(c))
    })
    return () => {
      alive = false
    }
  }, [location.pathname])

  // Figure out context from the URL: which lesson, or which interview role.
  const context = useMemo(() => {
    const ctx = { goal: state.goal }
    const lesson = location.pathname.match(/^\/learn\/([^/]+)\/([^/]+)\//)
    if (lesson) {
      const { track, level } = findLevel(lesson[1], lesson[2])
      if (track && level) {
        ctx.track = track.title
        ctx.level = level.title
        if (lessonText) ctx.lessonText = lessonText
      }
      return ctx
    }
    // The role id is enough — reading it off the URL keeps the interview
    // question bank out of the main bundle.
    const interview = location.pathname.match(/^\/interview\/([^/]+)/)
    if (interview && interview[1] !== 'answers') {
      ctx.track = 'Mock interview practice'
      ctx.level = interview[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    }
    return ctx
  }, [location.pathname, state.goal, lessonText])

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, loading, open])

  if (!state.name) return null // hide until onboarding is done

  const onInterview = context.track === 'Mock interview practice'
  const quickPrompts = onInterview
    ? [
        'How do I answer this question?',
        'What do interviewers want to hear?',
        'What should I revise for this role?',
        'Give me a 30-second version',
      ]
    : context.level
      ? ['Explain this simply', 'Give me an example', 'Why does this matter?', 'Quiz me on this']
      : ['What should I learn first?', 'What is a computer?', 'Explain variables', 'How do I get placed?']

  const send = async (text) => {
    const content = (text ?? input).trim()
    if (!content || loading) return
    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next, context }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || `Server error (${res.status})`)
      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch (e) {
      const offline = /Failed to fetch|NetworkError|load failed/i.test(String(e.message))
      const msg = offline
        ? "I can't reach the AI server yet. Start it in a terminal:\n\ncd server\nnpm install\nnpm run dev\n\n(See server/README.md — it uses a free API.)"
        : e.message
      setMessages([...next, { role: 'assistant', content: msg, error: true }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <button
        className={`tutor-fab ${open ? 'hidden' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Open AI tutor"
      >
        🤖 <span>Ask AI Tutor</span>
      </button>

      {open && (
        <div className="tutor-panel" role="dialog" aria-label="AI Tutor">
          <div className="tutor-head">
            <div className="tutor-head-title">🤖 AI Tutor</div>
            {context.level && <div className="tutor-head-sub">{context.track} · {context.level}</div>}
            <button className="tutor-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="tutor-body" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="tutor-msg assistant">
                <div className="tutor-bubble">
                  Hi {state.name}! 👋 I'm your tutor. Ask me anything about computers or coding
                  {context.level ? `, or about "${context.level}".` : '.'}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`tutor-msg ${msg.role}`}>
                <div className={`tutor-bubble ${msg.error ? 'error' : ''}`}>
                  {segments(msg.content).map((seg, j) =>
                    seg.type === 'code' ? (
                      <pre key={j} className="tutor-code"><code>{seg.text}</code></pre>
                    ) : (
                      <span key={j} className="tutor-text">{seg.text}</span>
                    )
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="tutor-msg assistant">
                <div className="tutor-bubble"><span className="tutor-typing"><i /><i /><i /></span></div>
              </div>
            )}
          </div>

          <div className="tutor-chips">
            {quickPrompts.map((p) => (
              <button key={p} className="tutor-chip" onClick={() => send(p)} disabled={loading}>{p}</button>
            ))}
          </div>

          <div className="tutor-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Ask a question…"
              rows={1}
            />
            <button className="tutor-send" onClick={() => send()} disabled={loading || !input.trim()}>➤</button>
          </div>
        </div>
      )}
    </>
  )
}
