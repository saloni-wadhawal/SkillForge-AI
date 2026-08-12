// Remove only the @example.com accounts left behind by testing.
// Real accounts are never touched. Run from the server folder: node clean-test-accounts.js
import 'dotenv/config'
import mongoose from 'mongoose'

const TEST_EMAIL = /@example\.com$/i

if (!process.env.MONGODB_URI) {
  console.log('MONGODB_URI is blank — nothing to do (the server is on the JSON file store).')
  process.exit(0)
}

await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
const db = mongoose.connection.db
console.log(`database: ${db.databaseName}`)

const all = await db.collection('users').find({}).toArray()
const doomed = all.filter((u) => TEST_EMAIL.test(String(u.email)))
const keep = all.filter((u) => !TEST_EMAIL.test(String(u.email)))

console.log(`\nkeeping ${keep.length}:`)
keep.forEach((u) => console.log(`  ✓ ${u.email}`))
console.log(`\ndeleting ${doomed.length}:`)
doomed.forEach((u) => console.log(`  ✗ ${u.email}`))

if (doomed.length) {
  const ids = doomed.map((u) => u._id)
  const prog = await db.collection('progresses').deleteMany({ user: { $in: ids } })
  const users = await db.collection('users').deleteMany({ _id: { $in: ids } })
  console.log(`\nremoved ${users.deletedCount} accounts and ${prog.deletedCount} progress records`)
}

console.log('\nnow in the database:')
for (const name of ['users', 'progresses'])
  console.log(`  ${name}: ${await db.collection(name).countDocuments()}`)
const left = await db.collection('users').find({}).toArray()
left.forEach((u) => console.log(`   ${u.email} | ${u.displayName}`))

await mongoose.disconnect()
