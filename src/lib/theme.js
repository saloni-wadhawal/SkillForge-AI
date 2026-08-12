// Light / dark theme. The choice is a plain attribute on <html>, so every
// stylesheet override is one `[data-theme="dark"]` block away and no component
// has to know which theme is on.
//
// It is applied before React renders (see main.jsx) so a dark-mode learner never
// gets a white flash on reload.

const KEY = 'codequest_theme'

export function storedTheme() {
  try {
    const t = localStorage.getItem(KEY)
    if (t === 'light' || t === 'dark') return t
  } catch {
    // private mode / blocked storage — fall through to the default
  }
  return null
}

export function applyTheme(theme) {
  const t = theme === 'dark' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', t)
  document.documentElement.style.colorScheme = t
  return t
}

// Defaults to light rather than following the OS: most learners here are on a
// shared or school machine, and a surprise dark app reads as broken.
export function initTheme() {
  return applyTheme(storedTheme() || 'light')
}

export function saveTheme(theme) {
  const t = applyTheme(theme)
  try {
    localStorage.setItem(KEY, t)
  } catch {
    // not being able to remember it is not worth breaking the toggle over
  }
  return t
}
