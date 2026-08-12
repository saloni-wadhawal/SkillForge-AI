# What to build next in CodeQuest

Generated 26 July 2026 from a five-angle brainstorm (daily student / placement / teacher / real-website / what-beats-the-competition), with every idea then scored out of 30 by three independent judges: value to the student, buildable for free, and would-anyone-actually-use-it.

**Already built since this list was made:** the code editor and 45 auto-graded coding challenges.

---

DO NEXT

1. Put it on a real URL (medium)
- Sees: codequest.pages.dev opens on any phone from a WhatsApp link; sign-up, login and progress sync work with the owner's laptop off. On a cold server the login screen says "Waking up the server — about 30 seconds" with a bar, not a dead spinner.
- Why: until this exists, zero students use anything else on this list.
- Touches: `C:\AI Based Learning Platform\server\index.js` (CORS + a `/api/health` ping), `src\state\AuthContext.jsx` (retry + waking message), a `VITE_API_URL` env var.
- Free thing: Cloudflare Pages/Netlify free + Render free web service + the live Atlas M0 + GitHub Actions cron to keep it warm.

2. My mistakes — a deck of your own wrong questions (medium)
- Merges "Fix your mistakes", "Mistake notebook", "It remembers every question you got wrong" — one build.
- Sees: Home tile "Fix your 6 mistakes — 2 min"; only questions they personally missed, with the explanation; right answer pushes it to 3 → 7 → 21 days, wrong sends it back to tomorrow. A "Mistakes: 6" pill next to XP.
- Why: the single highest-value study habit, and it needs no new content — the 225-question bank plus 247 quizzes already generate the material.
- Touches: `src\state\ProgressContext.jsx` (new `mistakes` map, syncs with existing progress), `src\pages\Quiz.jsx`, `src\pages\Practice.jsx`, `src\pages\Home.jsx`.
- Free thing: nothing new.

3. Search on Learn, and open a locked level anyway (medium)
- Sees: type "normalization" → "DBMS · Normalization — Level 7", tap straight in. Locked levels say "You haven't reached this yet — open it anyway?" instead of a dead padlock.
- Why: a student revising for tomorrow's unit test wants one topic, not a 35-subject index; the locked grey wall is the main reason they close the tab.
- Touches: `src\pages\Tracks.jsx`, `src\pages\TrackDetail.jsx`, a small index built from `src\data\tracks.js`.
- Free thing: nothing new.

4. Exam Mode — real company test patterns (large)
- Sees: pick TCS NQT / Infosys / Wipro NLTH / Capgemini; sectional timers, question palette, no going back, auto-submit, result scored against that company's rough cutoff plus the 6 topics that cost marks.
- Why: this is the reason a placement-year student picks CodeQuest over YouTube; also the engine that later powers mock interviews and readiness.
- Touches: new page + new section metadata over `src\data\mcqBank.js`; reuses nothing from Quiz.jsx.
- Free thing: nothing new.

WORTH DOING AFTER THAT

- Install to home screen + works offline (medium) — merges all four PWA entries into one spec: app icon, full screen, previously opened lessons and quizzes work with no signal, "offline — will sync" pill, XP uploads on reconnect. Do the per-subject lazy loading (the 919 KB bundle) as part of it so the cache stays small. Free: hand-written service worker, no new deps.
- Pseudocode / output-prediction questions (medium) — new question type with a code box and dry-run hint; the Infosys–Capgemini round the bank currently has nothing for. Free: nothing new, but it is real content writing.
- Aptitude speed drills (medium) — 20 questions, countdown ring, auto-advance, one shortcut trick after each answer, average seconds and a personal best. Free: nothing new.
- "Still confused? Ask the tutor" (medium) — merges the wrong-answer button and the long-press "explain this line" bubble; opens `src\components\AiTutor.jsx` pre-loaded with the question, their wrong option and the lesson text. Free: Gemini free tier — and it must fall back to today's static explanation when no key is set.
- Your semester, not a giant index (medium) — two onboarding questions (board/university, year+semester) reorder Learn to "Semester 4 — what you're studying now". Free: nothing new; syllabus lists typed once by hand.
- Prove you know it and skip ahead (medium) — 5 hard questions unlock a whole track as "skipped, not mastered", feeding those levels into the mistakes deck. Free: nothing new.

SKIP OR PARK

- The whole teacher suite (class codes, teacher dashboard, assignments, in-class tests, teacher's own questions, CSV export, completion timestamps): five interlocking builds for a user who hasn't asked yet — park until one real teacher wants it.
- Duplicate entries the judges flagged (three mistake-deck versions, four PWA versions): already merged above.
- Public progress link `/p/8fk2n9`: unverified XP presented as a credential — trust theatre; revisit after certificates.
- Timed essay + GD prep: nobody types 400 words on an Android keyboard for practice.
- Weekly parent report card, shareable WhatsApp card, owner /admin dashboard, load-testing and DB backups: real but premature at zero users.
- Drive countdown, readiness meter, eligibility + resume check, HR answer sheet: good ideas that all depend on Exam Mode data existing first — park behind item 4.
- Dark mode, bottom nav bar, error boundary, streak freeze, shuffled replay options: each is a half-day of plain CSS/JSX. Don't plan them; fold them in while touching those files.
- Landing page + link preview: do the 20-minute version (meta tags in `index.html`) with item 1, skip the rest.
- Hindi/Marathi lesson translation: high value but AI-rewriting 247 lessons is a quality-control problem, not a coding one. Park.

BUILD THIS ONE FIRST: Put it on a real URL

Everything else on this list is invisible while the app only runs on the owner's laptop, and a shared link is what turns one user into a class. The code is already built for it — Vite produces a static `dist`, the Express server is small and stateless, and Atlas M0 is live, so this is configuration and a cold-start message rather than new features. It also converts every later item from a private demo into something students actually receive on WhatsApp the day it ships.

WHERE THE JUDGES DISAGREED

- Exam Mode (value 9, buildable 6): the buildability judge is right that it's large, but the value judge wins — it's the product's reason to exist for a final-year student.
- Assignments with due dates (buildable 4, sticky 8): the buildability judge is right; stickiness assumes a teacher who doesn't exist yet.
- Night mode / phone-first nav (value 4, buildable 9): buildability judge is right that it's trivial — so it shouldn't occupy a slot, just get done in passing.
- Shareable progress card (value 2, buildable 8): the value judge is right; cheap to build isn't a reason to build it.
- Owner's usage dashboard (buildable 7, sticky 1): both are right — build it in an hour after launch, purely for the owner, and never mention it again.

---

## Every idea, scored

| Idea | Total /30 | Value | Buildable | Sticky |
|---|---|---|---|---|
| "Fix your mistakes" review deck (spaced repetition) | 25 | 8 | medium | 8 |
| Search, and let me jump to the topic I need tonight | 25 | 8 | medium | 9 |
| Mistake notebook with spaced revision | 25 | 9 | medium | 8 |
| It remembers every question you got wrong | 25 | 9 | large | 8 |
| Exam Mode — real company test patterns, sectional timers | 24 | 9 | large | 9 |
| Aptitude speed drills with shortcut cards | 24 | 8 | medium | 8 |
| Actually put it on the internet — free hosting, and the five things that block it today | 24 | 9 | medium | 7 |
| Prove you already know it and skip ahead | 24 | 8 | medium | 8 |
| Install to home screen + works with no internet | 23 | 7 | medium | 8 |
| Pseudocode & output-prediction questions (the Infosys/Capgemini round) | 23 | 9 | medium | 8 |
| Your semester, not a giant index | 23 | 7 | medium | 9 |
| Wrong answer → "Explain why I got this wrong" straight to the AI tutor | 22 | 7 | medium | 7 |
| Make coming back worth it: shuffled options, star-chasing, and an end-of-subject boss quiz | 22 | 7 | medium | 7 |
| Works offline, installs like an app | 22 | 7 | medium | 8 |
| Explain this lesson in Hindi, Marathi or Hinglish | 22 | 8 | medium | 8 |
| Lesson as swipeable cards with a checkpoint, not a wall of text | 21 | 6 | small | 6 |
| Daily goal ring + a streak that survives one bad day | 21 | 5 | medium | 8 |
| HR round answer sheet (the questions Indian panels actually ask) | 21 | 7 | medium | 6 |
| Installable app that works fully offline | 21 | 7 | medium | 8 |
| Install it and learn with no internet | 21 | 6 | medium | 8 |
| Ask about this exact line | 21 | 6 | small | 7 |
| Rust check — 5 questions on what you learnt last week | 21 | 7 | medium | 6 |
| Attempt history + "Am I ready?" readiness meter | 20 | 7 | medium | 6 |
| Drive countdown — a day-by-day plan to the actual date | 20 | 6 | medium | 8 |
| Survive the sleeping server: cold-start messaging and an offline progress outbox | 20 | 7 | medium | 5 |
| Night mode + real thumb-sized tap targets | 19 | 4 | small | 6 |
| Assignments with a due date | 19 | 7 | large | 8 |
| Record when each level was actually finished | 19 | 6 | medium | 4 |
| Phone-first navigation instead of a squeezed desktop header | 19 | 4 | small | 6 |
| Load one subject at a time instead of all 247 lessons up front | 18 | 7 | large | 5 |
| Dark mode and a real accessibility pass | 18 | 4 | medium | 6 |
| Don't white-screen: error boundary, stale-tab recovery, and a report button | 18 | 5 | small | 4 |
| A public front door that survives being shared on WhatsApp | 18 | 4 | medium | 6 |
| Your tutor chat stays with the lesson | 18 | 4 | small | 5 |
| Split the 919 KB bundle so the app opens on a slow phone | 17 | 6 | large | 5 |
| Eligibility gate + rule-based resume check | 17 | 7 | medium | 4 |
| Class code — join your teacher's batch | 17 | 6 | medium | 5 |
| Teacher dashboard — who is falling behind | 17 | 7 | large | 6 |
| Teacher's own questions from her own syllabus | 17 | 7 | medium | 6 |
| Write the answer like the exam paper | 17 | 7 | large | 5 |
| Run a real test in class with a code | 16 | 6 | large | 7 |
| Download the marks as a spreadsheet | 16 | 5 | small | 4 |
| Shareable progress card for WhatsApp status | 15 | 2 | small | 5 |
| Harden for the day 100 students log in at once — and back up the database | 15 | 6 | medium | 2 |
| Timed essay + group-discussion prep | 14 | 5 | medium | 2 |
| Weekly report card for parents — print and WhatsApp | 14 | 3 | medium | 3 |
| The questions a college asks before saying yes | 14 | 5 | medium | 2 |
| A link that proves what a student finished | 13 | 3 | medium | 3 |
| Owner's usage dashboard, self-hosted and free | 13 | 5 | medium | 1 |
