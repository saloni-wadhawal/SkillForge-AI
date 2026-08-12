import { useState } from 'react'

const COLORS = ['#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#7c5cff', '#ff9f1c']

// Lightweight dependency-free confetti burst. Render it (active) to celebrate.
export default function Confetti({ active }) {
  const [pieces] = useState(() =>
    Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1.5,
      color: COLORS[i % COLORS.length],
      rot: Math.random() * 360,
      size: 6 + Math.random() * 8,
    }))
  )

  if (!active) return null

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.5}px`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rot}deg)`,
          }}
        />
      ))}
    </div>
  )
}
