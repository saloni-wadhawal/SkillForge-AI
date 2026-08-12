// Where progress is kept in the browser.
//
// Three separate slots, on purpose:
//   codequest_progress_v1            the pre-accounts blob (kept as a backup)
//   codequest_progress_guest         whoever is currently learning as a guest
//   codequest_progress_v1:<userId>   one per account
export const LEGACY_KEY = 'codequest_progress_v1'
export const GUEST_KEY = 'codequest_progress_guest'
export const MIGRATED_FLAG = 'codequest_progress_migrated_v1'

export const keyFor = (userId, guest = false) =>
  userId ? `${LEGACY_KEY}:${userId}` : guest ? GUEST_KEY : LEGACY_KEY

// Only what was earned. The display name is deliberately NOT copied: on a
// shared computer that would greet the new account with somebody else's name.
const EARNED = [
  'xp',
  'completed',
  'solved',
  'interviews',
  'streak',
  'practiceAnswered',
  'practiceCorrect',
  'goal',
  'resetAt',
]

function earnedOnly(raw) {
  const src = JSON.parse(raw)
  const out = {}
  for (const k of EARNED) if (src[k] !== undefined) out[k] = src[k]
  return JSON.stringify(out)
}

function read(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

// A guest's progress lives in its own slot, but fall back to the pre-accounts
// blob the first time so nobody's existing XP disappears.
export const readGuestProgress = () => read(GUEST_KEY) || read(LEGACY_KEY)

// Signing UP after learning as a guest: the guest's XP moves into the new
// account. This is the "nothing is lost" promise on the login screen.
export function adoptGuestProgress(userId) {
  if (!userId) return false
  try {
    const target = keyFor(userId)
    if (localStorage.getItem(target)) return false // the account already has data
    const source = readGuestProgress()
    if (!source) return false
    localStorage.setItem(target, earnedOnly(source))
    localStorage.removeItem(GUEST_KEY) // it now belongs to the account
    return true
  } catch {
    return false
  }
}

// One-time only: hand the pre-accounts blob to the FIRST account used on this
// browser, so the person who was already learning here keeps their XP. Later
// accounts never inherit it — that would be somebody else's progress.
export function claimLegacyProgress(userId) {
  if (!userId) return false
  try {
    const target = keyFor(userId)
    if (localStorage.getItem(target)) return false
    if (localStorage.getItem(MIGRATED_FLAG)) return false
    const legacy = localStorage.getItem(LEGACY_KEY)
    if (!legacy) return false
    localStorage.setItem(target, earnedOnly(legacy))
    localStorage.setItem(MIGRATED_FLAG, userId)
    return true
  } catch {
    return false
  }
}
