import mongoose from 'mongoose'

// One progress document per user. Mirrors the shape saved in the browser so the
// frontend can sync its local state to the cloud with almost no changes.
const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    xp: { type: Number, default: 0 },
    completed: { type: Object, default: {} }, // { [levelId]: { stars, correct, total, trackId } }
    solved: { type: Object, default: {} }, // { [challengeId]: { language, xp, at } }
    // { [sessionId]: { roleId, roleTitle, round, score, asked, xp, at } }
    interviews: { type: Object, default: {} },
    streak: {
      count: { type: Number, default: 0 },
      last: { type: String, default: null },
    },
    practiceAnswered: { type: Number, default: 0 },
    practiceCorrect: { type: Number, default: 0 },
    goal: { type: String, default: null },
    name: { type: String, default: '' }, // the learner's display name, as shown in the app
    resetAt: { type: Number, default: 0 }, // when the learner last wiped their own progress
  },
  { timestamps: true }
)

export default mongoose.model('Progress', progressSchema)
