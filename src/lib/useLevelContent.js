import { useEffect, useState } from 'react'
import { loadLevelContent } from '../data/levelContent.js'

// A level's lesson blocks and quiz questions, fetched on demand.
//
// The subject index in tracks.js carries only ids, titles and XP; the body of
// every lesson lives in its own per-subject chunk so the app does not ship all
// 35 subjects to someone reading one of them. This hook is the seam.
//
// Returns { content, loading }. `content` is null while loading and stays null
// if the subject or level has no content file.
export function useLevelContent(trackId, levelId) {
  const [state, setState] = useState({ content: null, loading: true })

  useEffect(() => {
    let alive = true
    setState({ content: null, loading: true })
    loadLevelContent(trackId, levelId).then((content) => {
      // Navigating away mid-fetch must not write into an unmounted component.
      if (alive) setState({ content, loading: false })
    })
    return () => {
      alive = false
    }
  }, [trackId, levelId])

  return state
}
