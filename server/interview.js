// The mock interviewer.
//
// Marks a student's spoken/typed answer against the model answer that ships
// with the question, writes the end-of-interview report, and can invent one
// extra question when the bank runs dry.
//
// It uses the SAME free provider as the tutor (Gemini free tier / local
// Ollama) — never a paid key, never a subscription. The whole feature also
// works with no provider at all: the app falls back to self-marking against
// the model answer, so a student without a key can still practise.
import { chat } from './ai.js'

const clip = (v, n) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, n)

const lines = (v, max, len = 160) =>
  (Array.isArray(v) ? v : typeof v === 'string' && v ? [v] : [])
    .map((s) => clip(s, len))
    .filter(Boolean)
    .slice(0, max)

// Models do not reliably send a bare number — "8/10", "8 out of 10" and "8."
// all turn up. Take the first number in there rather than scoring a good answer
// zero because of how it was written.
function score10(v) {
  const n = typeof v === 'number' ? v : Number(String(v ?? '').match(/-?\d+(\.\d+)?/)?.[0])
  return Number.isFinite(n) ? Math.max(0, Math.min(10, Math.round(n))) : null
}

// Models like to wrap JSON in chatter, or in a ``` fence, or add an example
// fence AFTER the JSON. Try the likely spots in order and take the first one
// that actually parses.
function parseJson(text) {
  const raw = String(text || '')
  const candidates = [raw]
  for (const m of raw.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi)) candidates.push(m[1])

  for (const body of candidates) {
    const start = body.indexOf('{')
    const end = body.lastIndexOf('}')
    if (start === -1 || end <= start) continue
    try {
      const parsed = JSON.parse(body.slice(start, end + 1))
      if (parsed && typeof parsed === 'object') return parsed
    } catch {
      // try the next place it might be hiding
    }
  }
  throw new Error('The AI reply was not readable.')
}

const ROUND_STYLE = {
  technical: 'a technical round — you care about correctness, depth and whether they really understand it',
  managerial: 'a managerial round — you care about ownership, judgement and how they handle pressure',
  hr: 'an HR round — you care about attitude, honesty, communication and fit, not technical depth',
}

const BASE_RULES =
  'You are interviewing a final-year computer engineering student in India for their first job.\n' +
  'Be fair and encouraging but honest — a fresher learns nothing from marks they did not earn.\n' +
  'Judge only what they actually said. Never invent things they did not say.\n' +
  'Write in simple English, no jargon they would not know, no markdown and no code fences.\n' +
  'Reply with ONE JSON object and nothing else — no explanation before or after it.'

// ---- marking one answer ----------------------------------------------------
export async function gradeAnswer(input = {}) {
  // Defaults only cover undefined, and a request body can just as easily say
  // null — so normalise here rather than throwing a TypeError on .title.
  const role = input.role || {}
  const question = input.question || {}
  const round = input.round || 'technical'
  const given = clip(input.answer, 4000)
  const style = ROUND_STYLE[round] || ROUND_STYLE.technical

  // Nothing to mark. Don't spend a call (or let the model be generous about it).
  if (given.length < 2) {
    return {
      score: 0,
      verdict: 'Nothing was answered, so there is nothing to mark. Have a go next time — even a partial answer scores.',
      good: [],
      missing: ['A first attempt, in your own words'],
      better: clip(question.ideal, 900),
      source: 'skipped',
    }
  }

  const system =
    `${BASE_RULES}\n\n` +
    `You are running ${style}, for the role of ${clip(role.title, 80) || 'Software Engineer'}.\n` +
    'The JSON must be exactly:\n' +
    '{"score": <whole number 0-10>, "verdict": "<one or two sentences to the candidate, second person>", ' +
    '"good": ["<something they genuinely got right>", ...], ' +
    '"missing": ["<a point an interviewer wanted and did not hear>", ...], ' +
    '"better": "<a model answer in 3-5 short sentences, the way a good fresher would actually say it out loud>"}\n' +
    'Rules for the score: 0 = nothing relevant, 3 = the idea is there but wrong or very thin, ' +
    '5 = a pass, 7 = a good fresher answer, 9-10 = complete, correct and well explained.\n' +
    'Keep "good" and "missing" to at most 3 short points each. If they got everything, "missing" may be empty.'

  const user =
    `Question asked: ${clip(question.q, 600)}\n` +
    `Topic: ${clip(question.topic, 60)} (${clip(question.difficulty, 20) || 'medium'})\n` +
    `What a strong answer covers: ${clip(question.ideal, 1200)}\n\n` +
    `The candidate answered:\n"""\n${given}\n"""`

  const reply = await chat({
    system,
    messages: [{ role: 'user', content: user }],
    temperature: 0.25,
    maxTokens: 700,
  })
  const data = parseJson(reply)
  const score = score10(data.score)
  // No usable mark means we do not know how they did. Say so and let the app
  // fall back to self-marking, rather than quietly recording a zero.
  if (score === null) throw new Error('The AI did not give a mark for that answer.')
  return {
    score,
    verdict: clip(data.verdict, 400) || 'Marked.',
    good: lines(data.good, 3),
    missing: lines(data.missing, 3),
    better: clip(data.better, 900) || clip(question.ideal, 900),
    source: 'ai',
  }
}

// ---- the end-of-interview report -------------------------------------------
export async function finalReport(input = {}) {
  const role = input.role || {}
  const round = input.round || 'technical'
  const list = (Array.isArray(input.items) ? input.items : []).filter(Boolean).slice(0, 20)
  if (!list.length) throw new Error('There are no answers to report on.')

  const scored = list.filter((it) => Number.isFinite(Number(it.score)))
  const pct = scored.length
    ? Math.round((scored.reduce((n, it) => n + (score10(it.score) ?? 0), 0) / (scored.length * 10)) * 100)
    : 0

  const system =
    `${BASE_RULES}\n\n` +
    `You have just finished ${ROUND_STYLE[round] || ROUND_STYLE.technical} for the role of ` +
    `${clip(role.title, 80) || 'Software Engineer'}. Write the feedback the candidate takes away.\n` +
    'The JSON must be exactly:\n' +
    '{"summary": "<3-4 sentences to the candidate about how that went overall>", ' +
    '"strengths": ["<what they can rely on>", ...], ' +
    '"improve": ["<what cost them marks, and what to do instead>", ...], ' +
    '"study": ["<a specific topic to revise before the real thing>", ...], ' +
    '"verdict": "<one short line: would this pass a real first-round for this role, and why>"}\n' +
    'At most 3 points in each list. Be specific to what they actually said — no generic advice.'

  const transcript = list
    .map((it, i) => {
      const said = clip(it.answer, 700)
      return (
        `Q${i + 1} (${clip(it.topic, 50) || 'general'}, ${clip(it.difficulty, 20) || 'medium'}): ${clip(it.q, 400)}\n` +
        `They said: ${said || '(skipped)'}\n` +
        `Marked: ${score10(it.score) ?? 0}/10`
      )
    })
    .join('\n\n')

  const reply = await chat({
    system,
    messages: [
      {
        role: 'user',
        content: `Overall they scored ${pct}% across ${list.length} questions.\n\n${transcript}`,
      },
    ],
    temperature: 0.4,
    maxTokens: 900,
  })
  const data = parseJson(reply)
  const out = {
    summary: clip(data.summary, 800),
    strengths: lines(data.strengths, 3, 200),
    improve: lines(data.improve, 3, 200),
    study: lines(data.study, 3, 120),
    verdict: clip(data.verdict, 300),
    source: 'ai',
  }
  // Valid JSON with none of the keys we asked for would render as an empty
  // card. Treat that as a failure so the app shows its own report instead.
  if (!out.summary && !out.verdict && !out.strengths.length && !out.improve.length)
    throw new Error('The AI report came back empty.')
  return out
}

// ---- one fresh question ----------------------------------------------------
// Used when the student asks for a new question the bank has not got, so the
// same interview never repeats itself twice in a row.
export async function extraQuestion(input = {}) {
  const role = input.role || {}
  const round = input.round || 'technical'
  const difficulty = input.difficulty || 'medium'
  const avoid = lines(input.asked, 20, 200)
  const system =
    `${BASE_RULES}\n\n` +
    `Write ONE fresh interview question for ${ROUND_STYLE[round] || ROUND_STYLE.technical}, ` +
    `for the role of ${clip(role.title, 80) || 'Software Engineer'}` +
    `${role.skills ? ` (they will be probed on: ${lines(role.skills, 8, 40).join(', ')})` : ''}.\n` +
    'It must be a question freshers are really asked — not a brain teaser, not trivia.\n' +
    'The JSON must be exactly:\n' +
    '{"q": "<the question, worded the way an interviewer says it>", "topic": "<short topic label>", ' +
    `"difficulty": "${['easy', 'medium', 'hard'].includes(difficulty) ? difficulty : 'medium'}", ` +
    '"hint": "<one line that nudges without answering>", ' +
    '"ideal": "<the model answer in 3-5 sentences of simple English>"}'

  const reply = await chat({
    system,
    messages: [
      {
        role: 'user',
        content: avoid.length
          ? `Do not ask anything close to these, they have already been asked:\n- ${avoid.join('\n- ')}`
          : 'Ask the first question.',
      },
    ],
    temperature: 0.9,
    maxTokens: 600,
  })
  const data = parseJson(reply)
  const q = clip(data.q, 600)
  if (!q) throw new Error('The AI did not come up with a question.')
  return {
    id: `ai-${round}-${Buffer.from(q).toString('base64url').slice(0, 10)}`,
    q,
    topic: clip(data.topic, 60) || 'General',
    difficulty: ['easy', 'medium', 'hard'].includes(data.difficulty) ? data.difficulty : 'medium',
    round,
    hint: clip(data.hint, 240),
    ideal: clip(data.ideal, 1200),
    ai: true,
  }
}
