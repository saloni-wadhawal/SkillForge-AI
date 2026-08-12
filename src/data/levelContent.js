// Fetches the body of a lesson — its blocks, recap and quiz questions.
//
// ./content/ holds one file per subject and Vite turns each into its own chunk,
// so opening a C lesson downloads C and nothing else. The subject index in
// ./tracks.js stays in the main bundle because every list, count and badge needs
// it synchronously; this, the 95% of the bytes, does not.
//
// Kept apart from tracks.js because `import.meta.glob` only exists inside Vite,
// and tracks.js has to remain importable by plain Node for the content scripts.

const CONTENT = import.meta.glob('./content/*.js')

const cache = new Map()

function loadTrackContent(trackId) {
  if (cache.has(trackId)) return cache.get(trackId)
  const loader = CONTENT[`./content/${trackId}.js`]
  if (!loader) return Promise.resolve(null)
  // Cache the promise rather than the result, so two components opening the
  // same lesson at once share one fetch instead of racing.
  const p = loader()
    .then((m) => m.default)
    .catch(() => null)
  cache.set(trackId, p)
  return p
}

// { lesson: { blocks, recap }, quiz: [...] } for one level, or null if the
// subject or the level does not exist.
export async function loadLevelContent(trackId, levelId) {
  const all = await loadTrackContent(trackId)
  return all?.[levelId] || null
}
