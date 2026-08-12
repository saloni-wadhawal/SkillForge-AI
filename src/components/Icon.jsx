// Stroke icons for the app's chrome — the nav rail, the tab bar, stat tiles,
// buttons.
//
// Emoji is kept where it is *content* (a track's 💻, a badge's 🏆, a role's 🎤)
// and dropped where it was decoration. Navigation and counters read better as
// one consistent set of stroke glyphs than as a row of mismatched clip-art.
//
// All icons: 24×24 box, currentColor, stroke — so they inherit colour and size
// from whatever they sit in and never need a second copy for dark mode.

const ICONS = {
  home: (
    <>
      <path d="M3.5 10.8 12 4l8.5 6.8" />
      <path d="M5.8 9.5V19a1.5 1.5 0 0 0 1.5 1.5h3v-5.5h3.4v5.5h3a1.5 1.5 0 0 0 1.5-1.5V9.5" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.6C10.4 5 8.4 4.4 4 4.4v13c4.4 0 6.4.6 8 2.2 1.6-1.6 3.6-2.2 8-2.2v-13c-4.4 0-6.4.6-8 2.2Z" />
      <path d="M12 6.6v13" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8.5-4 3.5 4 3.5" />
      <path d="m15.5 8.5 4 3.5-4 3.5" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  terminal: (
    <>
      <rect x="3.2" y="4.5" width="17.6" height="15" rx="2.5" />
      <path d="m7.5 10 2.4 2.2-2.4 2.2" />
      <path d="M12.8 14.4h4" />
    </>
  ),
  mic: (
    <>
      <path d="M12 3.2a2.9 2.9 0 0 1 2.9 2.9v5a2.9 2.9 0 0 1-5.8 0v-5A2.9 2.9 0 0 1 12 3.2Z" />
      <path d="M5.4 11.1a6.6 6.6 0 0 0 13.2 0" />
      <path d="M12 17.7v3.1" />
    </>
  ),
  list: (
    <>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <path d="M4.3 6.5h.01M4.3 12h.01M4.3 17.5h.01" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  logout: (
    <>
      <path d="M14.5 4.5h3A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5h-3" />
      <path d="M4 12h10" />
      <path d="m8 8-4 4 4 4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.1M12 19.1v2.1M4.5 4.5l1.5 1.5M18 18l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.5 19.5 6 18M18 6l1.5-1.5" />
    </>
  ),
  moon: <path d="M20.4 14.6A8.6 8.6 0 0 1 9.4 3.6a8.6 8.6 0 1 0 11 11Z" />,
  flame: (
    <>
      <path d="M12 3.2c.7 3.2-2.2 4.1-2.2 6.4a2.2 2.2 0 0 0 4.4 0c0-.9.4-1.5.9-2 1.6 1.7 2.4 3.5 2.4 5.6a5.5 5.5 0 0 1-11 0c0-3.6 2.4-6.9 5.5-10Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.4 8.4 4.6-8.4 4.6L3.6 8Z" />
      <path d="m3.6 13 8.4 4.6L20.4 13" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="9.3" r="5.6" />
      <path d="m8.4 14-1.5 6.5 5.1-2.7 5.1 2.7-1.5-6.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m8.2 12.2 2.6 2.6 5-5.4" />
    </>
  ),
  spark: (
    <path d="m12 3.4 2.5 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.8l-5.2 2.8 1.1-5.9-4.3-4.1 5.9-.8Z" />
  ),
  bolt: <path d="M13.2 3 5.8 13.4h5.2l-.9 7.6 7.4-10.4h-5.2Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2v5l3.3 2" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h14" />
      <path d="m13 6.5 5.5 5.5-5.5 5.5" />
    </>
  ),
  chevronRight: <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  trend: (
    <>
      <path d="m4 15.5 5-5.2 3.4 3.2 6-6.2" />
      <path d="M14.6 7.3h3.8v3.8" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m15.2 8.8-1.7 4.7-4.7 1.7 1.7-4.7Z" />
    </>
  ),
}

export default function Icon({ name, size = 20, strokeWidth = 1.7, className = '', ...rest }) {
  const glyph = ICONS[name]
  if (!glyph) return null
  return (
    <svg
      className={`ic ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  )
}
