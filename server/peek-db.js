// Throwaway helper: show what is in the MongoDB the server is configured to use.
//   node peek-db.js          -> list databases, collections and counts
//   node peek-db.js --clean  -> delete every account + progress doc (fresh start)
import 'dotenv/config'
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI
if (!uri) {
  console.log('MONGODB_URI is blank — the server is using the local JSON file store.')
  process.exit(0)
}

await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 })
const db = mongoose.connection.db
console.log(`connected to database: ${db.databaseName}`)

if (process.argv.includes('--clean')) {
  for (const name of ['users', 'progresses']) {
    const res = await db.collection(name).deleteMany({})
    console.log(`  cleared ${name}: ${res.deletedCount} removed`)
  }
}

const cols = await db.listCollections().toArray()
if (!cols.length) console.log('  (no collections yet)')
for (const c of cols) {
  const n = await db.collection(c.name).countDocuments()
  console.log(`  ${c.name}: ${n} documents`)
}

const sample = await db.collection('users').find({}, { limit: 3 }).toArray()
for (const u of sample) {
  console.log(`   user: ${u.email} | name: ${u.displayName} | hash: ${String(u.passwordHash).slice(0, 12)}…`)
}

const admin = mongoose.connection.getClient().db().admin()
const { databases } = await admin.listDatabases()
console.log('databases on this cluster:', databases.map((d) => d.name).join(', '))

await mongoose.disconnect()
