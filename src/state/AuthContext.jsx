import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { adoptGuestProgress, claimLegacyProgress } from './storageKeys.js'

const AUTH_KEY = 'codequest_auth_v1'
const AuthContext = createContext(null)

// A session is either a real account or an explicit "just let me learn" guest.
// Both count as signed in for routing; only the first one talks to the server.
function loadSession() {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return { user: null, token: null, guest: false }
    const s = JSON.parse(raw)
    if (s && s.guest) return { user: null, token: null, guest: true }
    if (s && s.user && s.user.id) return { user: s.user, token: s.token || null, guest: false }
  } catch {
    // ignore corrupt storage
  }
  return { user: null, token: null, guest: false }
}

// Returns false if this browser refuses to store anything (private mode, a full
// quota, blocked site data). The session then only lasts until the tab closes.
function saveSession(session) {
  try {
    if (!session.user && !session.guest) localStorage.removeItem(AUTH_KEY)
    else localStorage.setItem(AUTH_KEY, JSON.stringify(session))
    return true
  } catch {
    return false
  }
}

const isOffline = (err) => /Failed to fetch|NetworkError|load failed/i.test(String(err?.message))

// Small fetch wrapper: always resolves to parsed JSON or throws an Error that
// carries .status and, for a dead server, .offline.
export async function api(path, { method = 'GET', body, token, keepalive = false } = {}) {
  let res
  try {
    res = await fetch(path, {
      method,
      keepalive,
      headers: {
        ...(body ? { 'content-type': 'application/json' } : {}),
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    const e = new Error('server-unreachable')
    e.offline = true
    throw e
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const e = new Error(data.error || `Server error (${res.status})`)
    e.status = res.status
    // The account store being unavailable is the same thing to a learner as the
    // server being down: accounts are not usable right now.
    if (res.status === 503) e.offline = true
    throw e
  }
  return data
}

export function AuthProvider({ children }) {
  // Read synchronously: an async read would flash the login screen on refresh.
  const [session, setSession] = useState(loadSession)
  const [accountsUp, setAccountsUp] = useState(null) // null = not checked yet
  const [storageBlocked, setStorageBlocked] = useState(false)
  const wasGuestRef = useRef(session.guest)

  useEffect(() => {
    wasGuestRef.current = session.guest
  }, [session.guest])

  const apply = useCallback((next) => {
    if (!saveSession(next)) setStorageBlocked(true)
    setSession(next)
  }, [])

  // Is the backend there at all? Used only to explain things to the learner.
  const checkAccounts = useCallback(async () => {
    try {
      const health = await api('/api/health')
      setAccountsUp(Boolean(health.accounts))
      return Boolean(health.accounts)
    } catch {
      setAccountsUp(false)
      return false
    }
  }, [])

  useEffect(() => {
    checkAccounts()
  }, [checkAccounts])

  // A saved token can be stale (expired, or the store was reset). Verify it
  // once, and only log out when the server actually rejects it — never just
  // because it is unreachable.
  useEffect(() => {
    if (!session.token) return
    let cancelled = false
    api('/api/auth/me', { token: session.token })
      .then((data) => {
        if (!cancelled && data.user) apply({ ...session, user: data.user })
      })
      .catch((err) => {
        if (!cancelled && err.status === 401) apply({ user: null, token: null, guest: false })
      })
    return () => {
      cancelled = true
    }
    // Only re-verify when the token itself changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.token])

  // Log out in one tab -> log out in the others.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === AUTH_KEY) setSession(loadSession())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const signup = useCallback(
    async ({ name, email, password }) => {
      const data = await api('/api/auth/register', {
        method: 'POST',
        body: { email, password, displayName: name },
      })
      // Someone upgrading from guest mode takes their XP with them. Otherwise
      // the very first account on this browser inherits the pre-accounts blob.
      if (wasGuestRef.current) adoptGuestProgress(data.user.id)
      else claimLegacyProgress(data.user.id)
      apply({ user: data.user, token: data.token, guest: false })
      return data.user
    },
    [apply]
  )

  const login = useCallback(
    async ({ email, password }) => {
      const data = await api('/api/auth/login', { method: 'POST', body: { email, password } })
      // Log in only ever adopts the ONE pre-accounts blob, once. A guest's
      // progress is never poured into an existing account — on a shared
      // computer that would be a stranger's XP.
      claimLegacyProgress(data.user.id)
      apply({ user: data.user, token: data.token, guest: false })
      return data.user
    },
    [apply]
  )

  const continueAsGuest = useCallback(() => {
    apply({ user: null, token: null, guest: true })
  }, [apply])

  const logout = useCallback(() => {
    apply({ user: null, token: null, guest: false })
  }, [apply])

  const value = useMemo(
    () => ({
      user: session.user,
      token: session.token,
      guest: session.guest,
      signedIn: Boolean(session.user) || session.guest,
      accountsUp,
      storageBlocked,
      checkAccounts,
      signup,
      login,
      continueAsGuest,
      logout,
      isOffline,
    }),
    [session, accountsUp, storageBlocked, checkAccounts, signup, login, continueAsGuest, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
