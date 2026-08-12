import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext.jsx'
import { useAuth } from '../state/AuthContext.jsx'
import { BADGES } from '../data/badges.js'
import { storedTheme, saveTheme } from '../lib/theme.js'
import Icon from './Icon.jsx'
import AiTutor from './AiTutor.jsx'

const GUEST_BAR_KEY = 'codequest_guestbar_hidden'

// Navigation lives here and only here. On a wide screen it is the left rail; on
// a phone the first six become the bottom tab bar and the rail disappears.
const NAV = [
  { to: '/', icon: 'home', label: 'Home', tab: true, match: (p) => p === '/' },
  { to: '/learn', icon: 'book', label: 'Subjects', tab: true, match: (p) => p.startsWith('/learn') },
  { to: '/practice', icon: 'target', label: 'Practice', tab: true, match: (p) => p.startsWith('/practice') },
  { to: '/challenges', icon: 'code', label: 'Challenges', tab: true, match: (p) => p.startsWith('/challenges') },
  { to: '/code', icon: 'terminal', label: 'Code Lab', tab: true, match: (p) => p.startsWith('/code') },
  {
    to: '/interview',
    icon: 'mic',
    label: 'Interview',
    tab: true,
    match: (p) => p.startsWith('/interview') && p !== '/interview/answers',
  },
  { to: '/interview/answers', icon: 'list', label: 'Answers', match: (p) => p === '/interview/answers' },
]

// What the coloured banner at the top of each page says, and what colour it is.
// A page listed with `banner: false` writes its own header instead — a lesson,
// a quiz or a live interview should not carry a second heading above it.
const PAGES = [
  // Home writes no banner: the rail already says HOME, and the big coloured
  // "continue" card underneath says the same thing with real content in it.
  [(p) => p === '/', { banner: false }],
  [(p) => /\/lesson$/.test(p), { banner: false }],
  [(p) => /\/quiz$/.test(p), { banner: false }],
  [(p) => /^\/learn\/[^/]+$/.test(p), { banner: false }],
  [(p) => p.startsWith('/learn'), { eyebrow: 'Computer engineering', title: 'Subjects', sub: 'Diploma to degree, 35 subjects', hue: '#ce82ff', edge: '#a568cc' }],
  // narrow: this page renders `.page narrow`, so its banner matches that width.
  [(p) => p.startsWith('/practice'), { eyebrow: 'Quick drill', title: 'Practice', sub: 'MCQs and aptitude, one at a time', hue: '#ff9600', edge: '#cc7800', narrow: true }],
  [(p) => /^\/challenges\/.+/.test(p), { banner: false }],
  [(p) => p.startsWith('/challenges'), { eyebrow: 'Write real code', title: 'Challenges', sub: 'Marked by running your program', hue: '#1cb0f6', edge: '#1899d6' }],
  [(p) => p.startsWith('/code'), { eyebrow: 'Scratchpad', title: 'Code Lab', sub: 'Five languages, nothing to install', hue: '#8549ba', edge: '#663c8f' }],
  [(p) => p === '/interview/answers', { eyebrow: 'Question bank', title: 'Answers', sub: 'Every interview question, answered', hue: '#2b70c9', edge: '#21579c' }],
  [(p) => /^\/interview\/.+/.test(p), { banner: false }],
  [(p) => p.startsWith('/interview'), { eyebrow: 'Placement', title: 'Mock Interview', sub: 'Sit a real interview for your role', hue: '#ff4b4b', edge: '#ea2b2b' }],
  // widgets: false — Profile is the widget rail written out in full. Showing
  // both would put level, XP and streak on the screen twice.
  [(p) => p.startsWith('/profile'), { eyebrow: 'Your account', title: 'Profile', sub: 'Badges, progress and settings', hue: '#00cd9c', edge: '#00a37c', widgets: false }],
]

function pageMeta(pathname) {
  const hit = PAGES.find(([test]) => test(pathname))
  return hit ? hit[1] : { banner: false }
}

// Local calendar date as YYYY-MM-DD. Deliberately not toISOString(), which is
// UTC and so returns yesterday for anyone east of Greenwich before 05:30 IST.
function localDay(d) {
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

// Monday-to-Sunday, with the days your current streak covers filled in. The
// streak is stored as a count and a last-active day, which is enough: a streak
// of N ending on `last` means exactly those N days were active.
function weekDots(streak) {
  const today = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7))

  const active = new Set()
  if (streak?.last && streak.count > 0) {
    const end = new Date(`${streak.last}T00:00:00`)
    for (let i = 0; i < streak.count; i += 1) {
      const d = new Date(end)
      d.setDate(end.getDate() - i)
      active.add(localDay(d))
    }
  }

  const todayKey = localDay(today)
  return ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((letter, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    const key = localDay(d)
    return { key, letter, done: active.has(key), today: key === todayKey }
  })
}

export default function Layout() {
  const { state, level, xpIntoLevel, xpToNext, earnedBadges } = useProgress()
  const { user, guest, logout } = useAuth()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [theme, setTheme] = useState(() => storedTheme() || 'light')
  const [guestBarHidden, setGuestBarHidden] = useState(
    () => localStorage.getItem(GUEST_BAR_KEY) === '1'
  )

  const toggleTheme = () => setTheme(saveTheme(theme === 'dark' ? 'light' : 'dark'))

  const hideGuestBar = () => {
    localStorage.setItem(GUEST_BAR_KEY, '1')
    setGuestBarHidden(true)
  }

  const onLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const who = state.name || user?.displayName || user?.email || 'Learner'
  const initial = who.trim().charAt(0).toUpperCase() || '?'
  const page = pageMeta(pathname)
  const dots = weekDots(state.streak)
  const nextBadges = BADGES.filter((b) => !earnedBadges.includes(b.id)).slice(0, 2)
  const pct = Math.round((xpIntoLevel / (xpIntoLevel + xpToNext)) * 100)

  const showWidgets = page.widgets !== false

  return (
    <div className={`app ${showWidgets ? '' : 'no-widgets'}`}>
      <aside className="rail">
        <NavLink to="/" className="wordmark">
          <Icon name="bolt" size={26} strokeWidth={2.4} />
          CodeQuest
        </NavLink>

        <nav className="rail-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rail-link ${item.match(pathname) ? 'active' : ''}`}
              aria-current={item.match(pathname) ? 'page' : undefined}
            >
              <Icon name={item.icon} size={22} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="rail-foot">
          <Link
            to="/profile"
            className={`rail-link ${pathname.startsWith('/profile') ? 'active' : ''}`}
            aria-current={pathname.startsWith('/profile') ? 'page' : undefined}
          >
            <span className="avatar">{initial}</span>
            <span className="rail-who">{who}</span>
          </Link>
          <button type="button" className="rail-link subtle" onClick={toggleTheme}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} strokeWidth={2} />
            <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          {user ? (
            <button type="button" className="rail-link subtle" onClick={onLogout}>
              <Icon name="logout" size={20} strokeWidth={2} />
              <span>Log out</span>
            </button>
          ) : (
            <Link to="/login" className="rail-link subtle">
              <Icon name="user" size={20} strokeWidth={2} />
              <span>Log in</span>
            </Link>
          )}
        </div>
      </aside>

      <div className="shell">
        {/* Only visible once the widget rail has gone, so the counters it held
            never disappear off the screen entirely. */}
        <header className="counterbar">
          <NavLink to="/" className="wordmark">
            <Icon name="bolt" size={22} strokeWidth={2.4} />
            CodeQuest
          </NavLink>
          <div className="counterbar-right">
            <span
              className={`metric streak ${state.streak.count > 0 ? 'on' : ''}`}
              title={
                state.streak.count > 0
                  ? `${state.streak.count} day streak`
                  : 'Finish anything today to start a streak'
              }
            >
              <Icon name="flame" size={19} strokeWidth={2} />
              {state.streak.count}
              <span className="metric-word">day streak</span>
            </span>
            <span className="metric xp" title={`${state.xp} XP earned`}>
              <Icon name="spark" size={19} strokeWidth={2} />
              {state.xp}
              <span className="metric-word">XP</span>
            </span>
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} strokeWidth={2} />
            </button>
            <Link to="/profile" className="avatar counterbar-avatar" title={who}>
              {initial}
            </Link>
          </div>
        </header>

        {guest && !guestBarHidden && (
          <div className="guest-bar">
            <span>
              Learning as a guest — your XP is saved on this device only.{' '}
              <Link to="/signup">Create a free account</Link> to keep it safe.
            </span>
            <button
              type="button"
              className="guest-bar-close"
              onClick={hideGuestBar}
              aria-label="Hide this message"
            >
              <Icon name="close" size={14} />
            </button>
          </div>
        )}

        <main className="main">
          {page.banner !== false && (
            <div className={`unit-wrap ${page.narrow ? 'narrow' : ''}`}>
              <header
                className="unit"
                style={{ ['--unit']: page.hue, ['--unit-edge']: page.edge }}
              >
                <div className="unit-text">
                  <p className="unit-eyebrow">{page.eyebrow}</p>
                  <h1>{page.title}</h1>
                  {page.sub && <p className="unit-sub">{page.sub}</p>}
                </div>
              </header>
            </div>
          )}
          <Outlet />
        </main>

        <footer className="footer">
          CodeQuest — learn computer science the fun way, from basics to job-ready.
        </footer>
      </div>

      {/* Your numbers, on every page but one. Nothing here is repeated in the
          pages themselves — that is the whole reason it can sit on all of them,
          and why Profile, which does show them, opts out. */}
      {showWidgets && (
      <aside className="widgets" aria-label="Your progress">
        <section className="widget">
          <div className="level-widget">
            <div className="level-ring" style={{ ['--pct']: pct }}>
              <span>
                <b>{level}</b>
                <small>LEVEL</small>
              </span>
            </div>
            <div className="level-widget-text">
              <b>{state.xp} XP earned</b>
              <p className="widget-note">{xpToNext} XP to level {level + 1}</p>
            </div>
          </div>
        </section>

        <section className="widget">
          <div className="widget-head">
            <h3>
              {state.streak.count} day streak
            </h3>
            <Icon name="flame" size={20} strokeWidth={2} className="streak-icon" />
          </div>
          <div className="week">
            {dots.map((d) => (
              <span
                key={d.key}
                className={`week-day ${d.done ? 'done' : ''} ${d.today ? 'today' : ''}`}
                title={d.key}
              >
                <span className="week-dot">{d.done ? '✓' : ''}</span>
                {d.letter}
              </span>
            ))}
          </div>
          {state.streak.count === 0 && (
            <p className="widget-note" style={{ marginTop: 12 }}>
              Finish any level today to start one.
            </p>
          )}
        </section>

        {nextBadges.length > 0 && (
          <section className="widget">
            <div className="widget-head">
              <h3>Next badges</h3>
              <Link to="/profile" className="widget-link">
                All {BADGES.length}
              </Link>
            </div>
            <ul className="mini-list">
              {nextBadges.map((b) => (
                <li key={b.id} className="mini-row">
                  <span className="mini-emoji">{b.icon}</span>
                  <div>
                    <div className="mini-title">{b.name}</div>
                    <div className="mini-sub">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!user && (
          <section className="widget">
            <div className="widget-head">
              <h3>Save your progress</h3>
            </div>
            <p className="widget-note">
              Create a free account and your XP follows you to any device.
            </p>
            <Link to="/signup" className="btn btn-primary btn-block">
              Create a profile
            </Link>
          </section>
        )}
      </aside>
      )}

      <nav className="tabbar" aria-label="Main">
        {NAV.filter((item) => item.tab).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`tab ${item.match(pathname) ? 'active' : ''}`}
            aria-current={item.match(pathname) ? 'page' : undefined}
            aria-label={item.label}
            title={item.label}
          >
            <Icon name={item.icon} size={24} strokeWidth={2} />
          </Link>
        ))}
      </nav>

      <AiTutor />
    </div>
  )
}
