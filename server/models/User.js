import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    displayName: { type: String, default: '' },
    role: { type: String, enum: ['child', 'adult', 'admin'], default: 'adult' },
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
