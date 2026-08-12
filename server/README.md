# CodeQuest — Backend

The main app in the parent folder runs **entirely on its own** and saves progress in
the browser. Run this backend when you want the **AI Tutor** (free) and **user accounts**
with progress saved to the account instead of just the browser.

**Accounts need no database install and no cloud signup** — see below.

## 🤖 AI Tutor (free — start here)
The tutor uses a **free API**, never a paid key. Two free choices:

**Option A — Google Gemini free tier (easiest):**
1. Get a **free** key at <https://aistudio.google.com/app/apikey> (no billing needed).
2. `cd server` → `npm install` → `copy .env.example .env`
3. In `.env`, set `GEMINI_API_KEY=` to your key. (`AI_PROVIDER=gemini` is the default.)
4. `npm run dev` — the API starts on `http://localhost:8080`.
5. In another terminal run the app (`npm run dev` in the parent folder). The 🤖 tutor
   button (bottom-right) now answers questions. Check status at `http://localhost:8080/api/health`.

**Option B — Local model with Ollama (free, offline, no key):**
1. Install [Ollama](https://ollama.com) and run `ollama pull llama3.2`.
2. In `.env` set `AI_PROVIDER=ollama`.
3. `npm install` then `npm run dev`.

> No key yet? The tutor still opens and shows a friendly "add a free key" message —
> nothing breaks. The **Mock Interview** works with no key at all: it shows the model
> answer after each question and you mark yourself. A key just turns on AI marking.

## Accounts with no database (the default)
Leave `MONGODB_URI` blank and the server keeps accounts in a plain JSON file at
`server/.data/codequest-db.json`. Sign up and log in work immediately — nothing to
install, nothing to sign up for, nothing to pay.

| `MONGODB_URI` | `/api/health` reports | What happens |
|---|---|---|
| blank (default) | `storage: "file"` | Accounts live in `server/.data/codequest-db.json` |
| set + reachable | `storage: "mongo"` | Accounts live in MongoDB |
| set + unreachable | `storage: "file"` | Falls back to the file store (set `STORE_FALLBACK=off` to refuse instead) |

Same API and same JSON either way.

### Where your data lives
- `server/.data/codequest-db.json` — accounts + saved progress. Gitignored and
  human-readable. **Back it up** by copying the file; **reset everything** by deleting
  it (the server makes a fresh one).
- `server/.data/secret.json` — the key that signs login tokens, generated on first run.
  Delete it to log everyone out.
- Passwords are stored only as **bcrypt hashes**, never as plain text.

### Switching to MongoDB later
Set `MONGODB_URI` and restart. Accounts already in the JSON file are **not** migrated —
they stay in the file for you to import by hand if you want them.

## What it provides
- `POST /api/tutor` — ask the AI tutor a question (free provider, no account needed)
- `POST /api/interview` — the mock interviewer. `mode: "grade"` marks one answer out of 10,
  `mode: "report"` writes the end-of-interview feedback, `mode: "question"` invents a fresh
  question. Same free provider; no account needed. **Optional** — with no key the app marks
  answers against the model answer that ships with each question instead.
- `POST /api/auth/register` — create an account (email + password)
- `POST /api/auth/login` — log in, returns a token
- `GET  /api/auth/me` — who the current token belongs to
- `GET  /api/progress` — load the signed-in user's progress
- `PUT  /api/progress` — save the signed-in user's progress
- `GET  /api/health` — status: `storage` (`file`/`mongo`/`none`), `accounts`, AI provider

Stack: **Express** (API) + free **Gemini/Ollama** (tutor) + **JSON file or MongoDB** +
**JWT/bcrypt** (accounts). Needs **Node 18+**.

## Run it
```bash
cd server
npm install
copy .env.example .env      # optional — every setting has a working default
npm run dev
```
The API starts on `http://localhost:8080`. Check `http://localhost:8080/api/health`.

The app (parent folder, `npm run dev`) proxies `/api` here automatically, so you just
need both running.

## Security notes
- The server listens on `127.0.0.1` only, so the account store is not exposed to your network.
- Login is rate-limited in memory (8 failed attempts per email per 15 minutes; 20 sign-ups
  per hour per address). Restarting the server clears the counters.
- `JWT_SECRET` has **no** hardcoded fallback. Leave it blank locally and one is generated
  and saved for you; in production (`NODE_ENV=production`) the server refuses to start
  without a real 32+ character secret.

## Troubleshooting
- **`codequest-db.corrupt-*.json` appeared** — the data file could not be parsed, so it was
  renamed and a fresh one started. Nothing was deleted; the old file is still there.
- **`EPERM` while saving** — antivirus or the search indexer briefly locked the file. The
  write retries 5 times before giving up.
- **429 on login** — the rate limit. Wait ~15 minutes or restart the server.
- **`storage: "none"` in `/api/health`** — the account store could not be opened at all.
  Check the server log and the folder permissions on `server/.data`.
