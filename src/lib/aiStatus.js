// Is the free AI provider set up on the server?
//
// Nothing in CodeQuest *requires* it — the mock interview marks answers against
// the model answer on its own when there is no key. This just lets a page say
// so up front instead of finding out halfway through.
//
// The answer is cached briefly so a page with several checks does not ping the
// server repeatedly, but not so long that starting the server means a reload.
const TTL_MS = 30_000

let cached = null
let cachedAt = 0

export async function aiReady() {
  if (cached !== null && Date.now() - cachedAt < TTL_MS) return cached
  try {
    const res = await fetch('/api/health')
    const data = await res.json()
    cached = Boolean(data?.ai?.ready)
  } catch {
    cached = false // server not running, or offline
  }
  cachedAt = Date.now()
  return cached
}
