// Achievement badges. Each has an `earned(state)` predicate evaluated against
// the saved progress state (see ProgressContext).

const completedCount = (s) => Object.keys(s.completed || {}).length
const hasPerfect = (s) => Object.values(s.completed || {}).some((c) => c.stars === 3)
const solvedCount = (s) => Object.keys(s.solved || {}).length
const languagesUsed = (s) => new Set(Object.values(s.solved || {}).map((v) => v.language)).size
const interviews = (s) => Object.values(s.interviews || {})
const bestInterview = (s) => interviews(s).reduce((best, i) => Math.max(best, i.score || 0), 0)
const rolesInterviewed = (s) => new Set(interviews(s).map((i) => i.roleId)).size

export const BADGES = [
  {
    id: 'first-steps',
    name: 'First Steps',
    icon: '🐣',
    desc: 'Complete your very first level.',
    earned: (s) => completedCount(s) >= 1,
  },
  {
    id: 'quiz-whiz',
    name: 'Quiz Whiz',
    icon: '🎯',
    desc: 'Score full marks (3 stars) on a level.',
    earned: (s) => hasPerfect(s),
  },
  {
    id: 'getting-serious',
    name: 'Getting Serious',
    icon: '🔥',
    desc: 'Complete 5 levels.',
    earned: (s) => completedCount(s) >= 5,
  },
  {
    id: 'century',
    name: 'Century',
    icon: '💯',
    desc: 'Earn 100 XP.',
    earned: (s) => (s.xp || 0) >= 100,
  },
  {
    id: 'streak-3',
    name: 'On a Roll',
    icon: '⚡',
    desc: 'Reach a 3-day streak.',
    earned: (s) => (s.streak?.count || 0) >= 3,
  },
  {
    id: 'streak-7',
    name: 'Unstoppable',
    icon: '🚀',
    desc: 'Reach a 7-day streak.',
    earned: (s) => (s.streak?.count || 0) >= 7,
  },
  {
    id: 'scholar',
    name: 'Scholar',
    icon: '🎓',
    desc: 'Complete 15 levels.',
    earned: (s) => completedCount(s) >= 15,
  },
  {
    id: 'practice-pro',
    name: 'Practice Pro',
    icon: '🧠',
    desc: 'Answer 20 practice questions.',
    earned: (s) => (s.practiceAnswered || 0) >= 20,
  },
  {
    id: 'high-scorer',
    name: 'High Scorer',
    icon: '🏆',
    desc: 'Earn 500 XP.',
    earned: (s) => (s.xp || 0) >= 500,
  },
  {
    id: 'hello-world',
    name: 'Hello, World',
    icon: '👨‍💻',
    desc: 'Solve your first coding challenge.',
    earned: (s) => solvedCount(s) >= 1,
  },
  {
    id: 'code-ten',
    name: 'Ten Down',
    icon: '⌨️',
    desc: 'Solve 10 coding challenges.',
    earned: (s) => solvedCount(s) >= 10,
  },
  {
    id: 'polyglot',
    name: 'Polyglot',
    icon: '🌍',
    desc: 'Solve challenges in 3 different languages.',
    earned: (s) => languagesUsed(s) >= 3,
  },
  {
    id: 'first-interview',
    name: 'First Interview',
    icon: '🎤',
    desc: 'Finish your first mock interview.',
    earned: (s) => interviews(s).length >= 1,
  },
  {
    id: 'interview-regular',
    name: 'Well Rehearsed',
    icon: '🗣️',
    desc: 'Finish 5 mock interviews.',
    earned: (s) => interviews(s).length >= 5,
  },
  {
    id: 'role-explorer',
    name: 'Keeping Options Open',
    icon: '🧭',
    desc: 'Practise interviews for 3 different roles.',
    earned: (s) => rolesInterviewed(s) >= 3,
  },
  {
    id: 'interview-ace',
    name: 'Offer Material',
    icon: '🌟',
    desc: 'Score 80% or more in a mock interview.',
    earned: (s) => bestInterview(s) >= 80,
  },
]
