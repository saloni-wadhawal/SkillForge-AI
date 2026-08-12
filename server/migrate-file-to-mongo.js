// Move progress that was saved in the JSON file store into MongoDB, for any
// account that exists in both. Keeps the better of the two values, so this can
// never cost anybody XP, and it is safe to run more than once.
// Also clears @example.com test accounts out of the (now unused) JSON file.
//   node migrate-file-to-mongo.js
import 'dotenv/config'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import mongoose from 'mongoose'

const TEST_EMAIL = /@example\.com$/i
const dataDir = path.resolve(process.env.DATA_DIR || fileURLToPath(new URL('./.data/', import.meta.url)))
const dataFile = process.env.DATA_FILE || path.join(dataDir, 'codequest-db.json')

if (!process.env.MONGODB_URI) {
  console.log('MONGODB_URI is blank — nothing to migrate into.')
  process.exit(0)
}

let file
try {
  file = JSON.parse(await fs.readFile(dataFile, 'utf8'))
} catch (err) {
  console.log(`No JSON file store to read (${err.code || err.message}) — nothing to migrate.`)
  process.exit(0)
}

await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
const db = mongoose.connection.db
console.log(`database: ${db.databaseName}\n`)

const better = (a = {}, b = {}) => {
  const completed = { ...(b.completed || {}) }
  for (const [id, rec] of Object.entries(a.completed || {})) {
    const prev = completed[id]
    if (!prev || (rec?.stars ?? 0) >= (prev?.stars ?? 0)) completed[id] = rec
  }
  const newerStreak = (a.streak?.last || '') >= (b.streak?.last || '') ? a.streak : b.streak
  return {
    xp: Math.max(a.xp || 0, b.xp || 0),
    completed,
    streak: {
      count: Math.max(a.streak?.count || 0, b.streak?.count || 0),
      last: newerStreak?.last ?? null,
    },
    practiceAnswered: Math.max(a.practiceAnswered || 0, b.practiceAnswered || 0),
    practiceCorrect: Math.max(a.practiceCorrect || 0, b.practiceCorrect || 0),
    goal: b.goal || a.goal || null,
    name: b.name || a.name || '',
    resetAt: Math.max(a.resetAt || 0, b.resetAt || 0),
  }
}

let moved = 0
for (const u of file.users || []) {
  if (TEST_EMAIL.test(String(u.email))) continue
  const mongoUser = await db.collection('users').findOne({ email: u.email })
  if (!mongoUser) {
    console.log(`  – ${u.email}: no matching MongoDB account, skipped`)
    continue
  }
  const fileProgress = (file.progress || {})[u.id]
  if (!fileProgress) continue
  const mongoProgress = await db.collection('progresses').findOne({ user: mongoUser._id })
  const merged = better(fileProgress, mongoProgress || {})
  await db
    .collection('progresses')
    .updateOne(
      { user: mongoUser._id },
      { $set: { ...merged, user: mongoUser._id, updatedAt: new Date() } },
      { upsert: true }
    )
  console.log(
    `  ✓ ${u.email}: file ${fileProgress.xp || 0} XP + cloud ${
      mongoProgress?.xp || 0
    } XP -> ${merged.xp} XP, ${Object.keys(merged.completed).length} levels`
  )
  moved++
}
console.log(`\nmigrated ${moved} account(s)`)

// Tidy the (now unused) JSON file: drop test accounts, keep real ones as a backup.
const keptUsers = (file.users || []).filter((u) => !TEST_EMAIL.test(String(u.email)))
const removed = (file.users || []).length - keptUsers.length
if (removed) {
  const keptIds = new Set(keptUsers.map((u) => u.id))
  const progress = {}
  for (const [id, p] of Object.entries(file.progress || {})) if (keptIds.has(id)) progress[id] = p
  const next = { version: 1, users: keptUsers, progress }
  const tmp = `${dataFile}.migrate.tmp`
  await fs.writeFile(tmp, JSON.stringify(next, null, 2), 'utf8')
  await fs.rename(tmp, dataFile)
  console.log(`JSON file: removed ${removed} test account(s), kept ${keptUsers.length}`)
}

await mongoose.disconnect()
