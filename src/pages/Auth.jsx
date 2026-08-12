import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext.jsx'
import Icon from '../components/Icon.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PW = 8

// One screen, two modes. Keeping them together means switching tabs does not
// throw away what the student already typed.
export default function Auth({ mode: initialMode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, signup, continueAsGuest, accountsUp } = useAuth()

  const [mode, setMode] = useState(initialMode === 'signup' ? 'signup' : 'login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [err, setErr] = useState({})
  const [formError, setFormError] = useState(null)
  const [offline, setOffline] = useState(false)
  const [busy, setBusy] = useState(false)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const pwRef = useRef(null)

  const isSignup = mode === 'signup'
  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    setMode(initialMode === 'signup' ? 'signup' : 'login')
  }, [initialMode])

  useEffect(() => {
    const first = isSignup ? nameRef.current : emailRef.current
    first?.focus()
  }, [isSignup])

  // The server may simply not be running — say so before they fill the form in.
  useEffect(() => {
    if (accountsUp === false) setOffline(true)
  }, [accountsUp])

  const switchTo = (next) => {
    if (next === mode) return
    setErr({})
    setFormError(null)
    navigate(next === 'signup' ? '/signup' : '/login', { replace: true, state: location.state })
  }

  const clearError = (field) => setErr((e) => (e[field] ? { ...e, [field]: undefined } : e))

  const validate = () => {
    const next = {}
    const em = email.trim()
    if (!em) next.email = 'We need your email to save your progress.'
    else if (!EMAIL_RE.test(em))
      next.email = 'That does not look like an email yet — check for a typo like "name@gmail.com".'

    if (!password) next.password = isSignup ? 'Please pick a password.' : 'Please type your password.'
    else if (isSignup && password.length < MIN_PW)
      next.password = 'A bit longer, please — at least 8 characters.'

    if (isSignup && password && confirm !== password)
      next.confirm = 'These two do not match yet. Try typing the second one again.'

    setErr(next)
    if (next.email) emailRef.current?.focus()
    else if (next.password || next.confirm) pwRef.current?.focus()
    return Object.keys(next).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    setFormError(null)
    if (busy || !validate()) return
    setBusy(true)
    try {
      const creds = { email: email.trim().toLowerCase(), password }
      if (isSignup) await signup({ ...creds, name: name.trim() })
      else await login(creds)
      navigate(from, { replace: true })
    } catch (error) {
      if (error.offline) {
        setOffline(true)
        setFormError(null)
      } else if (error.status === 409) {
        setFormError({ text: 'You already have an account with this email.', showLogin: true })
      } else if (error.status === 401) {
        setFormError({ text: 'That email and password do not match. Check the password and try again.' })
      } else if (error.status === 400 || error.status === 429) {
        setFormError({ text: error.message })
      } else {
        setFormError({ text: 'Something went wrong on our side. Please try that again in a moment.' })
      }
    } finally {
      setBusy(false)
    }
  }

  const asGuest = () => {
    continueAsGuest()
    navigate('/', { replace: true })
  }

  return (
    <div className="onboard auth-wrap">
      <div className="onboard-card auth-card">
        <Link to="/" className="auth-brand">
          <span className="brand-mark">
            <Icon name="bolt" size={19} strokeWidth={2} />
          </span>
          <span className="brand-name">CodeQuest</span>
        </Link>

        <h1>{isSignup ? 'Create your account' : 'Welcome back'}</h1>
        <p className="muted">
          {isSignup
            ? 'Learn computer science the fun way — level by level, with XP, streaks and badges.'
            : 'Learn computer science the fun way — pick up right where you left off.'}
        </p>

        <div className="auth-tabs" role="tablist" aria-label="Log in or sign up">
          <button
            type="button"
            role="tab"
            aria-selected={!isSignup}
            className={`auth-tab ${!isSignup ? 'active' : ''}`}
            onClick={() => switchTo('login')}
          >
            Log in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isSignup}
            className={`auth-tab ${isSignup ? 'active' : ''}`}
            onClick={() => switchTo('signup')}
          >
            Sign up
          </button>
        </div>

        {formError && (
          <div className="feedback no auth-alert" role="alert">
            {formError.text}{' '}
            {formError.showLogin && (
              <button type="button" className="auth-link" onClick={() => switchTo('login')}>
                Log in instead?
              </button>
            )}
          </div>
        )}

        {offline && (
          <div className="tip-block auth-note">
            <span className="tip-icon">💡</span>
            <span>
              We cannot reach the CodeQuest server right now, so accounts are not available. You can
              keep learning without one — your XP is saved on this device.
            </span>
          </div>
        )}

        <form id="auth-form" onSubmit={submit} noValidate>
          {isSignup && (
            <>
              <label className="field-label" htmlFor="au-name">
                What should we call you?
              </label>
              <input
                id="au-name"
                ref={nameRef}
                className="text-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                autoComplete="nickname"
                maxLength={20}
              />
              <p className="field-hint">Only used to say hi. Nothing else.</p>
            </>
          )}

          <label className="field-label" htmlFor="au-email">
            Your email
          </label>
          <input
            id="au-email"
            ref={emailRef}
            className={`text-input ${err.email ? 'invalid' : ''}`}
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              clearError('email')
            }}
            placeholder="you@example.com"
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? 'e-email' : undefined}
          />
          {err.email && (
            <p className="field-error" id="e-email">
              {err.email}
            </p>
          )}

          <label className="field-label" htmlFor="au-pw">
            Password
          </label>
          <div className="input-wrap">
            <input
              id="au-pw"
              key={`pw-${mode}`}
              ref={pwRef}
              className={`text-input has-toggle ${err.password ? 'invalid' : ''}`}
              type={showPw ? 'text' : 'password'}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                clearError('password')
              }}
              placeholder={isSignup ? 'At least 8 characters' : 'Your password'}
              aria-invalid={Boolean(err.password)}
              aria-describedby={err.password ? 'e-pw' : undefined}
            />
            <button
              type="button"
              className="input-toggle"
              onClick={() => setShowPw((s) => !s)}
              aria-pressed={showPw}
              aria-label={showPw ? 'Hide password' : 'Show password'}
              title={showPw ? 'Hide password' : 'Show password'}
            >
              {showPw ? '🙈' : '👁'}
            </button>
          </div>
          {err.password && (
            <p className="field-error" id="e-pw">
              {err.password}
            </p>
          )}

          {isSignup && (
            <>
              <label className="field-label" htmlFor="au-pw2">
                Type it again
              </label>
              <div className="input-wrap">
                <input
                  id="au-pw2"
                  className={`text-input has-toggle ${err.confirm ? 'invalid' : ''}`}
                  type={showPw ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(e) => {
                    setConfirm(e.target.value)
                    clearError('confirm')
                  }}
                  placeholder="Same password again"
                  aria-invalid={Boolean(err.confirm)}
                  aria-describedby={err.confirm ? 'e-pw2' : undefined}
                />
              </div>
              {err.confirm && (
                <p className="field-error" id="e-pw2">
                  {err.confirm}
                </p>
              )}
            </>
          )}

          <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={busy}>
            {busy ? 'One moment…' : isSignup ? 'Create account →' : 'Log in →'}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? 'Already have an account? ' : 'New here? '}
          <button
            type="button"
            className="auth-link"
            onClick={() => switchTo(isSignup ? 'login' : 'signup')}
          >
            {isSignup ? 'Log in' : 'Create an account'}
          </button>
        </p>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button type="button" className="btn btn-block" onClick={asGuest}>
          Continue without an account
        </button>
        <p className="auth-fineprint">
          Your XP stays on this device. You can make an account later — nothing is lost.
        </p>
      </div>

      <p className="auth-foot">
        CodeQuest — learn computer science the fun way, from basics to job-ready.
      </p>
    </div>
  )
}
