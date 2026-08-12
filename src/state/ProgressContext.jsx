import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { BADGES } from '../data/badges.js'
import { api, useAuth } from './AuthContext.jsx'
import { keyFor } from './storageKeys.js'

const ProgressContext = createContext(null)

const todayStr = () => new Date().toISOString().slice(0, 10)
const yesterdayStr = () => new Date(Date.now() - 86400000).toISOString().slice(0, 10)

function loadState(key) {
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const saved = { ...defaultState(), ...JSON.parse(raw) }
      return { ...saved, interviews: trimInterviews(saved.interviews) }
    }
  } catch {
    // ignore corrupt storage
  }
  return defaultState()
}

function defaultState() {
  return {
    name: '',
    goal: null, // 'basics' | 'placement' | 'explore'
    xp: 0,
    // completed[levelId] = { stars, correct, total, trackId }
    completed: {},
    // solved[challengeId] = { language, xp, at }
    solved: {},
    // interviews[sessionId] = { roleId, roleTitle, round, score, asked, xp, at }
    interviews: {},
    streak: { count: 0, last: null },
    practiceAnswered: 0,
    practiceCorrect: 0,
    // When progress was last deliberately reset. A newer reset always wins over
    // older data, so "Reset all progress" cannot be undone by a merge.
    resetAt: 0,
  }
}

// Interview history is a list that would otherwise grow forever and get pushed
// to the server on every save, so it is capped. A summary is tiny, so the cap
// is set well above what anyone will actually sit.
const MAX_INTERVIEWS = 200

// Every page and badge reads these entries, so anything that is not a proper
// summary is dropped here — one junk value would otherwise take the page down.
function tidyInterviews(all) {
  return Object.entries(all || {}).filter(([, v]) => v && typeof v === 'object' && !Array.isArray(v))
}

function trimInterviews(all) {
  const entries = tidyInterviews(all)
  if (entries.length <= MAX_INTERVIEWS) return Object.fromEntries(entries)
  entries.sort((a, b) => String(b[1]?.at || '').localeCompare(String(a[1]?.at || '')))
  // Keep the newest, but never drop the best score — badges and the "best"
  // figure are worked out from this list, and they must not un-earn themselves.
  const best = entries.reduce((top, e) => ((e[1].score || 0) > (top[1].score || 0) ? e : top))
  const kept = entries.slice(0, MAX_INTERVIEWS)
  if (!kept.some(([id]) => id === best[0])) kept[kept.length - 1] = best
  return Object.fromEntries(kept)
}

// Combine two copies of the same learner's progress — this browser's and either
// the server's or another tab's. Keeps the better of the two, so a sync can
// never cost somebody XP.
function mergeProgress(local, incoming) {
  if (!incoming) return local
  const localReset = local.resetAt || 0
  const incomingReset = incoming.resetAt || 0
  // A reset is an explicit "throw this away" — respect the newer one.
  if (incomingReset > localReset)
    return { ...defaultState(), ...incoming, name: incoming.name || local.name }
  if (localReset > incomingReset) return local

  const completed = { ...(incoming.completed || {}) }
  for (const [id, rec] of Object.entries(local.completed || {})) {
    const prev = completed[id]
    if (!prev || (rec?.stars ?? 0) >= (prev?.stars ?? 0)) completed[id] = rec
  }
  // Solved challenges only ever accumulate — solving one twice is not a thing.
  const solved = { ...(incoming.solved || {}), ...(local.solved || {}) }
  // Same for finished interviews: every session has its own id, so the two
  // sides are folded together and the newest ones kept.
  const interviews = trimInterviews({ ...(incoming.interviews || {}), ...(local.interviews || {}) })

  // Levels and challenges each pay XP once, so the bigger total always contains
  // the smaller one. Interviews do not — they can be sat again and again, so two
  // devices can each hold XP the other has never seen. Take the bigger total and
  // add back the interviews it is missing, or that XP is quietly lost.
  const winner = (local.xp || 0) >= (incoming.xp || 0) ? local : incoming
  const missedXp = Object.entries(interviews).reduce(
    (n, [id, session]) => (winner.interviews?.[id] ? n : n + (session?.xp || 0)),
    0
  )
  const newerStreak =
    (local.streak?.last || '') >= (incoming.streak?.last || '') ? local.streak : incoming.streak
  return {
    ...defaultState(),
    ...local,
    xp: Math.max(local.xp || 0, incoming.xp || 0) + missedXp,
    completed,
    solved,
    interviews,
    streak: {
      count: Math.max(local.streak?.count || 0, incoming.streak?.count || 0),
      last: newerStreak?.last ?? null,
    },
    practiceAnswered: Math.max(local.practiceAnswered || 0, incoming.practiceAnswered || 0),
    practiceCorrect: Math.max(local.practiceCorrect || 0, incoming.practiceCorrect || 0),
    name: local.name || incoming.name || '',
    goal: local.goal || incoming.goal || null,
    resetAt: localReset,
  }
}

// XP curve: 100 XP per level.
const XP_PER_LEVEL = 100
export const levelFromXp = (xp) => Math.floor(xp / XP_PER_LEVEL) + 1
export const xpIntoLevel = (xp) => xp % XP_PER_LEVEL

const MAX_PULL_RETRIES = 5

export function ProgressProvider({ children }) {
  const { user, guest, token, logout } = useAuth()
  // main.jsx remounts this provider when the account changes, so the key and
  // the state it loaded can never drift apart.
  const storageKey = keyFor(user?.id, guest)
  const [state, setState] = useState(() => loadState(storageKey))
  const [cloud, setCloud] = useState({ status: 'off', at: null })
  const [storageBlocked, setStorageBlocked] = useState(false)

  const stateRef = useRef(state)
  stateRef.current = state

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state))
    } catch {
      // Private mode / blocked site data / full quota. Keep going in memory
      // rather than taking the whole app down.
      setStorageBlocked(true)
    }
  }, [state, storageKey])

  // Another tab of the SAME account saved something — fold it in, so a tab that
  // has been sitting open cannot later overwrite newer progress with its own.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== storageKey || !e.newValue) return
      try {
        const incoming = JSON.parse(e.newValue)
        setState((local) => mergeProgress(local, incoming))
      } catch {
        // ignore a half-written value
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [storageKey])

  // ---- cloud sync (real accounts only, and only if the server is reachable) ----
  const pulledRef = useRef(false)
  const pendingRef = useRef(false)
  const pushTimerRef = useRef(null)
  const [pullAttempt, setPullAttempt] = useState(0)

  useEffect(() => {
    if (!user || !token) {
      pulledRef.current = false
      setCloud({ status: 'off', at: null })
      return
    }
    let cancelled = false
    setCloud({ status: 'syncing', at: null })
    api('/api/progress', { token })
      .then((remote) => {
        if (cancelled) return
        setState((local) => mergeProgress(local, remote))
        pulledRef.current = true
        setCloud({ status: 'saved', at: Date.now() })
      })
      .catch((err) => {
        if (cancelled) return
        if (err.status === 401) {
          logout() // the token is no longer good — ask them to log in again
          return
        }
        setCloud({ status: 'error', at: Date.now() })
        // Keep trying: without a successful pull we must not push, or we would
        // risk writing this device's older numbers over the account.
        if (pullAttempt < MAX_PULL_RETRIES) {
          const delay = 4000 * (pullAttempt + 1)
          setTimeout(() => {
            if (!cancelled) setPullAttempt((n) => n + 1)
          }, delay)
        }
      })
    return () => {
      cancelled = true
    }
  }, [user, token, pullAttempt, logout])

  // Coming back online or refocusing the tab is a good moment to retry.
  useEffect(() => {
    if (!user || !token) return
    const retry = () => {
      if (!pulledRef.current) setPullAttempt((n) => n + 1)
    }
    window.addEventListener('online', retry)
    window.addEventListener('focus', retry)
    return () => {
      window.removeEventListener('online', retry)
      window.removeEventListener('focus', retry)
    }
  }, [user, token])

  const pushNow = useCallback(
    (snapshot, { keepalive = false } = {}) => {
      if (!user || !token || !pulledRef.current) return
      const {
        name,
        goal,
        xp,
        completed,
        solved,
        interviews,
        streak,
        practiceAnswered,
        practiceCorrect,
        resetAt,
      } = snapshot
      api('/api/progress', {
        method: 'PUT',
        token,
        keepalive,
        body: {
          name,
          goal,
          xp,
          completed,
          solved,
          interviews,
          streak,
          practiceAnswered,
          practiceCorrect,
          resetAt,
        },
      })
        .then(() => setCloud({ status: 'saved', at: Date.now() }))
        .catch((err) => {
          if (err.status === 401) {
            logout()
            return
          }
          setCloud({ status: 'error', at: Date.now() })
        })
    },
    [user, token, logout]
  )

  useEffect(() => {
    if (!user || !token || !pulledRef.current) return
    pendingRef.current = true
    clearTimeout(pushTimerRef.current)
    pushTimerRef.current = setTimeout(() => {
      pendingRef.current = false
      pushNow(stateRef.current)
    }, 800)
    return () => clearTimeout(pushTimerRef.current)
  }, [state, user, token, pushNow])

  // Don't lose a queued save when the tab closes, the page is hidden, or the
  // provider unmounts (logging out, switching account).
  useEffect(() => {
    const flush = () => {
      if (!pendingRef.current) return
      pendingRef.current = false
      clearTimeout(pushTimerRef.current)
      pushNow(stateRef.current, { keepalive: true })
    }
    const onHide = () => {
      if (document.visibilityState === 'hidden') flush()
    }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onHide)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onHide)
      flush()
    }
  }, [pushNow])

  const setProfile = (name, goal) =>
    setState((p) => ({ ...p, name: name || p.name, goal: goal || p.goal }))

  // A signed-up learner already told us their name, so never ask again.
  useEffect(() => {
    if (!user || state.name) return
    const seed = user.displayName || user.email?.split('@')[0]
    if (seed) setState((p) => (p.name ? p : { ...p, name: seed }))
  }, [user, state.name])

  const bumpStreak = (streak) => {
    const t = todayStr()
    if (streak.last === t) return streak
    if (streak.last === yesterdayStr()) return { count: streak.count + 1, last: t }
    return { count: 1, last: t }
  }

  const completeLevel = (trackId, levelId, xpReward, correct, total) => {
    setState((prev) => {
      const already = prev.completed[levelId]
      const stars = total ? (correct === total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : 1) : 1
      const bestStars = already ? Math.max(already.stars, stars) : stars
      const gainedXp = already ? 0 : xpReward // XP only the first time a level is cleared
      return {
        ...prev,
        xp: prev.xp + gainedXp,
        completed: {
          ...prev.completed,
          [levelId]: { stars: bestStars, correct, total, trackId },
        },
        streak: bumpStreak(prev.streak),
      }
    })
  }

  // A coding challenge counts once: XP the first time it is solved, and the
  // language is remembered so the "3 different languages" badge can work.
  const solveChallenge = (challengeId, xpReward, language) => {
    setState((prev) => {
      if (prev.solved?.[challengeId]) return prev
      return {
        ...prev,
        xp: prev.xp + xpReward,
        solved: {
          ...(prev.solved || {}),
          [challengeId]: { language, xp: xpReward, at: new Date().toISOString() },
        },
        streak: bumpStreak(prev.streak),
      }
    })
  }

  const isChallengeSolved = (challengeId) => Boolean(state.solved?.[challengeId])

  // A finished mock interview. Unlike a level, this can be repeated as often as
  // the student likes and earns XP every time — the whole point is reps.
  // The id and timestamp are made out here, not inside the updater, so React
  // running the updater twice cannot file the same interview under two ids.
  const recordInterview = ({ roleId, roleTitle, round, score, asked, xp = 0 }) => {
    const at = new Date().toISOString()
    const id = `${roleId}-${Date.now().toString(36)}`
    const gained = Math.max(0, Math.round(xp) || 0)
    setState((prev) => ({
      ...prev,
      xp: prev.xp + gained,
      interviews: trimInterviews({
        ...(prev.interviews || {}),
        [id]: {
          roleId,
          roleTitle,
          round,
          score: Math.max(0, Math.min(100, Math.round(score) || 0)),
          asked: Math.max(0, Math.round(asked) || 0),
          xp: gained,
          at,
        },
      }),
      streak: bumpStreak(prev.streak),
    }))
    return id
  }

  const recordPractice = (isCorrect) =>
    setState((prev) => ({
      ...prev,
      xp: prev.xp + (isCorrect ? 2 : 0),
      practiceAnswered: prev.practiceAnswered + 1,
      practiceCorrect: prev.practiceCorrect + (isCorrect ? 1 : 0),
      streak: bumpStreak(prev.streak),
    }))

  // Wipes the learning progress but keeps who you are, and tells the server
  // straight away so a later sync cannot bring the old numbers back.
  const resetProgress = () => {
    const next = {
      ...defaultState(),
      name: stateRef.current.name,
      goal: stateRef.current.goal,
      resetAt: Date.now(),
    }
    pendingRef.current = false
    clearTimeout(pushTimerRef.current)
    setState(next)
    pushNow(next)
  }

  const isLevelComplete = (levelId) => Boolean(state.completed[levelId])

  const value = useMemo(() => {
    const level = levelFromXp(state.xp)
    const completedCount = Object.keys(state.completed).length
    const solvedCount = Object.keys(state.solved || {}).length
    const sessions = Object.values(state.interviews || {})
    const earnedBadges = BADGES.filter((b) => b.earned(state)).map((b) => b.id)
    return {
      state,
      level,
      xpIntoLevel: xpIntoLevel(state.xp),
      xpToNext: XP_PER_LEVEL - xpIntoLevel(state.xp),
      completedCount,
      solvedCount,
      interviewCount: sessions.length,
      bestInterviewScore: sessions.reduce((best, s) => Math.max(best, s.score || 0), 0),
      earnedBadges,
      cloud,
      storageBlocked,
      setProfile,
      completeLevel,
      recordPractice,
      solveChallenge,
      isChallengeSolved,
      recordInterview,
      resetProgress,
      isLevelComplete,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, cloud, storageBlocked, pushNow])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>')
  return ctx
}
