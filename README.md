# 🎮 CodeQuest — Learn Computer Science the Fun Way

A gamified, Duolingo-style learning platform for computer science — from
*"what is a computer?"* all the way to job-ready. Built for **children to adults**.

Learn programming languages and core CS subjects **level by level**, earn **XP,
streaks and badges**, and prepare for **placements** with an MCQ + aptitude bank.

## ✨ What's inside
- **35 subjects, 700 levels** of guided lessons + quizzes — the full computer engineering
  syllabus, diploma to degree, **20 levels per subject** running from the basics to the
  questions an interviewer actually asks:
  - Foundations: **Computer Fundamentals, Digital Electronics, Web Development Basics**
  - Languages: **C, C++, Python, Java, JavaScript, C#**
  - Core CS: **DSA, OOP, Operating Systems, DBMS, Networks, Architecture, Microprocessors,
    DAA, Theory of Computation, Compiler Design, Software Engineering, System Programming,
    Computer Graphics**
  - Maths: **Discrete, Engineering Maths, Probability & Statistics**
  - Advanced: **Full-Stack, AI, ML, Data Science, Cloud, Cyber Security, IoT, Mobile,
    Software Testing, DevOps & Git**
- **2,600+ quiz questions**, every one with an explanation of why the answer is right
- **Gamification:** XP, levels, day-streaks, stars per level, achievement badges, confetti 🎉
- **Duolingo-style lesson path** — a winding trail of levels, locked → unlocked, with the
  next one calling you forward
- **Practice & Placement:** a **225-question MCQ bank** (aptitude, logical reasoning, fundamentals, coding, core CS) with instant explanations
- **Mock Interview 🎤:** sit a real interview for **14 different roles** (SDE, frontend, backend,
  full-stack, data analyst, AI/ML, QA, DevOps, cyber security, mobile, embedded/IoT, DBA,
  IT support, and the service-company fresher interview). Technical, managerial and HR rounds,
  **252 role questions + 24 HR questions**, every answer marked out of 10 with what you got
  right, what was missing and a stronger answer — plus a report at the end. Optional
  read-aloud and speak-your-answer. Works **without any API key** (you mark yourself against
  the model answer); a free Gemini key turns on AI marking.
- **Questions & answers 📖:** every one of the **276 questions with its answer written out**,
  searchable and filterable by role, round and difficulty. Stuck mid-interview? "Show me the
  answer" reveals it there and then. Nobody has to leave the site to look something up.
- **Progress saved in your browser** — no login needed to start
- Friendly **onboarding** with a name + goal, and a **profile** with all your stats

## 🚀 Run it (open the folder in VS Code, then in the terminal)
```bash
npm install
npm run dev
```
Then open the URL it prints (usually **http://localhost:5173**). It opens automatically.

To make a production build:
```bash
npm run build
npm run preview
```

## 🧱 Tech stack
- **React + Vite** (frontend) · plain CSS (no framework, no paid tools)
- **React Router** for navigation
- Content stored as JSON-style data files in `src/data/`
- Progress stored in the browser via `localStorage`
- **Optional backend** (`server/`) — Express + MongoDB for accounts & cloud sync (Phase 2)

## 📁 Project structure
```
AI Based Learning Platform/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx              # app entry
│  ├─ App.jsx               # routes
│  ├─ index.css             # all styles
│  ├─ components/           # Layout (nav rail, widget rail, tab bar), Icon, Confetti
│  ├─ pages/                # Home, Tracks, TrackDetail, Lesson, Quiz, Practice,
│  │                        # Interview, InterviewRoom, CodeLab, Challenges, Profile
│  ├─ state/                # ProgressContext (XP, streaks, badges — saved in browser)
│  ├─ lib/                  # theme.js (light/dark), useLevelContent.js
│  └─ data/                 # tracks.js       — the subject index: names, level titles, XP.
│                           #                   Small, and in the main bundle.
│                           # content/<id>.js — one file per subject holding its lesson text
│                           #                   and quiz questions. Vite makes each its own
│                           #                   chunk, fetched only when you open that
│                           #                   subject, so 700 levels cost nothing to load.
│                           # levelContent.js — fetches the above on demand
│                           # mcqBank.js, challenges.js, interviewRoles.js, badges.js
└─ server/                  # OPTIONAL Phase-2 backend (Express + MongoDB) — see server/README.md
```

## 🗺️ How to use
1. Enter your name and pick a goal on first launch.
2. Go to **Subjects**, pick one, and start at level 1 of its path.
3. Read the short lesson, then take the quiz to earn XP and unlock the next level.
4. Use **Practice** to drill MCQs and prep for placements.
5. Go to **Interview**, pick the role you actually want, choose a round and sit it.
6. Check **Profile** for your badges, streak, and progress.

## 🔜 Ideas for later
Auto-graded coding challenges, an in-browser code editor, an AI tutor & AI mock
interviewer, certificates, leaderboards, and the full placement track — see the
project plan for the roadmap.
