// Lesson text and quiz questions for "DevOps & Git".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "devops-git-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Imagine writing a big assignment and saving copies called 'report_final.doc', 'report_final2.doc', 'report_FINAL_really.doc'. Soon you have no idea which one is newest or what changed between them. Version control solves exactly this problem for code."
    },
    {
     "type": "text",
     "text": "A version control system (VCS) records every change you make to your files over time. You can see what changed, who changed it, when, and why — and you can jump back to any earlier version if something breaks. Git is by far the most popular VCS today."
    },
    {
     "type": "text",
     "text": "The saved snapshots are called 'commits'. Instead of many messy file copies, you keep ONE set of files and a clean history of commits behind it. This history lives in a folder called a 'repository' (or 'repo')."
    },
    {
     "type": "tip",
     "text": "Think of commits like save points in a video game: if you mess up, you reload the last good save instead of restarting the whole game."
    },
    {
     "type": "text",
     "text": "Version control also lets many people work on the same project without emailing files back and forth. Everyone shares one history, so nothing gets lost or overwritten by accident."
    }
   ],
   "recap": "Version control (like Git) records your code's history as commits, so you can review changes, undo mistakes, and work with others safely."
  },
  "quiz": [
   {
    "q": "What is the main purpose of a version control system?",
    "options": [
     "To make code run faster",
     "To translate code between languages",
     "To compress files into a zip",
     "To record changes to files over time so you can review and undo them"
    ],
    "answer": 3,
    "explain": "A VCS tracks the history of changes so you can see what changed and roll back when needed."
   },
   {
    "q": "In Git, what is a single saved snapshot of your changes called?",
    "options": [
     "A commit",
     "A folder",
     "A backup",
     "A download"
    ],
    "answer": 0,
    "explain": "Each recorded snapshot of changes in Git is called a commit."
   },
   {
    "q": "Which is a real problem that version control fixes?",
    "options": [
     "Weak passwords",
     "Confusing 'final_v2_really' copies of files",
     "Slow internet connections",
     "Low battery on your laptop"
    ],
    "answer": 1,
    "explain": "Version control replaces messy manual file copies with one clean, tracked history."
   }
  ]
 },
 "devops-git-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To start tracking a project with Git you run 'git init', which creates the repository. As you edit files, Git sees them as changed but doesn't save them until you tell it to. You do that in two steps: 'stage' the changes, then 'commit' them."
    },
    {
     "type": "code",
     "lang": "bash",
     "code": "git init                 # create a new repo\ngit add app.js           # stage a file (mark it to be saved)\ngit commit -m \"Add app\"  # save a snapshot with a message"
    },
    {
     "type": "text",
     "text": "A 'branch' is a separate line of work. The default branch is usually called 'main'. When you want to build a new feature without breaking the working code, you create a branch, experiment there, and leave 'main' safe and stable."
    },
    {
     "type": "code",
     "lang": "bash",
     "code": "git branch login-feature   # create a branch\ngit checkout login-feature # switch to it\n# (or do both at once:)\ngit checkout -b login-feature"
    },
    {
     "type": "text",
     "text": "When your feature works, you 'merge' the branch back into main. Merging combines the two histories so main now includes your new commits. If two branches changed the same lines differently, Git reports a 'merge conflict' and asks you to choose which version to keep."
    },
    {
     "type": "tip",
     "text": "Think of branches like parallel drafts of an essay. You try a bold rewrite in one draft; if you like it, you merge those edits back into your main copy."
    }
   ],
   "recap": "Stage and commit to save snapshots, use branches to work safely in parallel, and merge to combine finished work back into main."
  },
  "quiz": [
   {
    "q": "What must you do before 'git commit' saves a file?",
    "options": [
     "Stage it with 'git add'",
     "Delete the file",
     "Restart your computer",
     "Rename the file"
    ],
    "answer": 0,
    "explain": "Changes must be staged with 'git add' before a commit records them."
   },
   {
    "q": "Why would you create a new branch?",
    "options": [
     "To make the repo smaller",
     "To permanently delete main",
     "To work on a feature without breaking the stable main code",
     "To hide your commits from Git"
    ],
    "answer": 2,
    "explain": "Branches let you develop separately so main stays safe and stable."
   },
   {
    "q": "What is a 'merge conflict'?",
    "options": [
     "When two branches changed the same lines differently and Git needs you to decide",
     "When a file is too large",
     "When the internet disconnects",
     "When you forget your password"
    ],
    "answer": 0,
    "explain": "A conflict happens when Git can't automatically combine competing changes to the same lines."
   },
   {
    "q": "Which command creates a branch and switches to it in one step?",
    "options": [
     "git commit -m",
     "git checkout -b feature",
     "git init branch",
     "git add branch"
    ],
    "answer": 1,
    "explain": "'git checkout -b feature' creates the branch and moves you onto it at once."
   }
  ]
 },
 "devops-git-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Git runs on your own computer. GitHub (and similar sites like GitLab and Bitbucket) is a website that hosts your Git repositories online. It gives your team one shared 'remote' copy that everyone can push to and pull from."
    },
    {
     "type": "text",
     "text": "You 'push' to send your local commits up to the remote, and 'pull' to bring other people's commits down to your computer. 'clone' makes a full local copy of an online repo the first time you get it."
    },
    {
     "type": "code",
     "lang": "bash",
     "code": "git clone https://github.com/user/project.git  # copy repo\ngit pull origin main    # get latest changes from remote\ngit push origin main    # send your commits to remote"
    },
    {
     "type": "text",
     "text": "The heart of GitHub collaboration is the 'Pull Request' (PR) — a Merge Request on GitLab. You push a branch, then open a PR asking teammates to review your changes before they merge into main. Reviewers comment, suggest fixes, and approve. This keeps quality high and spreads knowledge."
    },
    {
     "type": "tip",
     "text": "A Pull Request is like submitting an assignment for feedback: a classmate checks your work and suggests improvements before it becomes 'final'."
    },
    {
     "type": "text",
     "text": "GitHub also hosts 'Issues' (a to-do and bug list), a README to explain your project, and the history everyone shares. 'origin' is just the default nickname Git gives to your main remote."
    }
   ],
   "recap": "GitHub hosts your repo online; push/pull sync your work, and Pull Requests let teammates review changes before merging."
  },
  "quiz": [
   {
    "q": "What is the difference between Git and GitHub?",
    "options": [
     "Git is the version-control tool; GitHub is a website that hosts Git repos online",
     "Git is only for websites",
     "GitHub runs offline; Git needs internet",
     "They are exactly the same thing"
    ],
    "answer": 0,
    "explain": "Git is the local tool, while GitHub is an online service that hosts repositories."
   },
   {
    "q": "Which command sends your local commits to the online repository?",
    "options": [
     "git push",
     "git pull",
     "git clone",
     "git init"
    ],
    "answer": 0,
    "explain": "'git push' uploads your local commits to the remote repository."
   },
   {
    "q": "What is the main purpose of a Pull Request?",
    "options": [
     "To let teammates review changes before they merge into main",
     "To make the repo private",
     "To delete a branch instantly",
     "To reset all commits"
    ],
    "answer": 0,
    "explain": "A Pull Request opens your changes for review and approval before merging."
   },
   {
    "q": "What does 'git clone' do?",
    "options": [
     "Deletes the remote repo",
     "Commits your changes",
     "Makes a full local copy of an online repository",
     "Renames your branch"
    ],
    "answer": 2,
    "explain": "Cloning downloads a complete local copy of a remote repository."
   }
  ]
 },
 "devops-git-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Traditionally, 'Developers' (Dev) wrote code and threw it over the wall to 'Operations' (Ops), the team that ran the servers. When something broke, each side blamed the other. DevOps is a culture and set of practices that break down that wall so the two work as one team."
    },
    {
     "type": "text",
     "text": "The goal of DevOps is to deliver software faster AND more reliably. It combines people, process, and tools: shared responsibility, automation of repetitive tasks, and constant feedback so problems are caught early instead of on release day."
    },
    {
     "type": "text",
     "text": "A handy way to remember its values is CALMS: Culture (collaboration), Automation (scripts instead of manual steps), Lean (remove waste), Measurement (track what happens), and Sharing (open knowledge). It's about mindset first, tools second."
    },
    {
     "type": "tip",
     "text": "Think of a Formula 1 pit crew: developers and mechanics aren't separate teams blaming each other — they practice one smooth, automated routine so the car is back on track in seconds."
    },
    {
     "type": "text",
     "text": "DevOps is often drawn as an infinite loop: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → back to Plan. The loop never ends because software keeps improving. Version control (Git) sits right at the start of that loop as the source of truth."
    }
   ],
   "recap": "DevOps unites development and operations with shared responsibility, automation, and feedback to ship software faster and more reliably."
  },
  "quiz": [
   {
    "q": "What core problem does DevOps aim to fix?",
    "options": [
     "Slow computers",
     "Too many programming languages",
     "The 'wall' and blame between developers and operations teams",
     "Expensive laptops"
    ],
    "answer": 2,
    "explain": "DevOps removes the divide between Dev and Ops so they collaborate as one team."
   },
   {
    "q": "Which pair best describes DevOps goals?",
    "options": [
     "Slower releases with more paperwork",
     "Fewer commits and no testing",
     "Cheaper hardware and bigger screens",
     "Faster AND more reliable delivery"
    ],
    "answer": 3,
    "explain": "DevOps seeks to deliver software both faster and more reliably."
   },
   {
    "q": "In the DevOps 'infinite loop', why does it never end?",
    "options": [
     "Because Git is always running",
     "Because software keeps improving through continuous feedback",
     "Because computers never turn off",
     "Because servers reboot nightly"
    ],
    "answer": 1,
    "explain": "The loop is continuous because software is always being improved based on feedback."
   },
   {
    "q": "DevOps is best described as primarily a...",
    "options": [
     "Culture and set of practices (people and process first)",
     "Type of computer hardware",
     "Programming language",
     "Single software product you install"
    ],
    "answer": 0,
    "explain": "DevOps is a culture and set of practices, with tools supporting it rather than defining it."
   }
  ]
 },
 "devops-git-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "CI stands for Continuous Integration: every time someone pushes code, an automated system builds it and runs the tests. Instead of merging everyone's work once a month and fighting huge conflicts, small changes are integrated and checked many times a day."
    },
    {
     "type": "text",
     "text": "CD stands for Continuous Delivery (or Continuous Deployment). Continuous Delivery means the tested code is always ready to release at the click of a button. Continuous Deployment goes further: if all tests pass, the change is released to users automatically, with no manual step."
    },
    {
     "type": "text",
     "text": "A 'pipeline' is the automated sequence that runs these steps. A typical pipeline: install dependencies → build → run tests → (if green) deploy. If any stage fails, the pipeline stops and alerts the team, so broken code never reaches users."
    },
    {
     "type": "code",
     "lang": "yaml",
     "code": "# .github/workflows/ci.yml (GitHub Actions)\nname: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install\n      - run: npm test"
    },
    {
     "type": "tip",
     "text": "Think of a pipeline like an airport security line: every bag (commit) passes the same automated checks in order, and anything that fails is pulled aside before it can board the plane (reach users)."
    },
    {
     "type": "text",
     "text": "Popular CI/CD tools include GitHub Actions, GitLab CI, Jenkins, and CircleCI. They usually read a config file in your repo (like the YAML above) that describes exactly which steps to run on each push."
    }
   ],
   "recap": "CI automatically builds and tests every push; CD keeps tested code ready to release or ships it automatically — all run by an automated pipeline defined in your repo."
  },
  "quiz": [
   {
    "q": "What does Continuous Integration (CI) do on every push?",
    "options": [
     "Automatically builds the code and runs the tests",
     "Emails the whole company",
     "Renames the main branch",
     "Deletes old branches"
    ],
    "answer": 0,
    "explain": "CI automatically builds and tests the code each time changes are pushed."
   },
   {
    "q": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "options": [
     "Delivery means deleting the pipeline",
     "Delivery keeps code release-ready for a manual click; Deployment releases automatically when tests pass",
     "Deployment is slower and needs no tests",
     "They are unrelated to testing"
    ],
    "answer": 1,
    "explain": "Delivery leaves a manual release step, while Deployment ships automatically after passing tests."
   },
   {
    "q": "In a pipeline, what happens if the test stage fails?",
    "options": [
     "All branches merge automatically",
     "The pipeline stops and alerts the team, so broken code isn't released",
     "The code deploys anyway",
     "The repo is deleted"
    ],
    "answer": 1,
    "explain": "A failing stage halts the pipeline so bad code never reaches users."
   },
   {
    "q": "Where is a CI/CD pipeline usually defined?",
    "options": [
     "In a config file inside the repository (e.g., a YAML file)",
     "In a printed manual",
     "Only in the developer's memory",
     "In the computer's BIOS"
    ],
    "answer": 0,
    "explain": "Pipelines are described in a config file (like YAML) stored in the repo."
   }
  ]
 },
 "devops-git-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Deployment means putting your tested application onto servers where real users can reach it. Teams keep separate 'environments': development (your machine), staging (a production-like rehearsal space), and production (the live system). Changes are promoted from one to the next so surprises are caught before real users see them."
    },
    {
     "type": "text",
     "text": "Modern deployment often uses 'containers'. A container (built with Docker) packages your app together with everything it needs to run, so it behaves the same on your laptop and on the server. This kills the classic excuse 'but it works on my machine'."
    },
    {
     "type": "code",
     "lang": "dockerfile",
     "code": "# Dockerfile: a recipe to package the app\nFROM node:20\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"node\", \"server.js\"]"
    },
    {
     "type": "text",
     "text": "To release with minimal risk, teams use safer strategies. A 'blue-green' deployment runs two identical environments and switches traffic to the new one instantly (and back if it fails). A 'canary' release sends the new version to a small percentage of users first, watches for errors, then rolls it out to everyone."
    },
    {
     "type": "tip",
     "text": "A canary release is named after the canary in a coal mine: expose a tiny group first, and if something goes wrong you notice before the whole userbase is affected."
    },
    {
     "type": "text",
     "text": "After deploying, the job isn't done — you 'monitor'. Logs, metrics (CPU, response time, error rate), and alerts tell you if the release is healthy. If not, you 'roll back' to the previous version. Treating your servers as code ('Infrastructure as Code', e.g. Terraform) lets you rebuild them reliably and automatically."
    }
   ],
   "recap": "Deploy through dev/staging/production using containers for consistency, reduce risk with blue-green or canary releases, then monitor and roll back if needed."
  },
  "quiz": [
   {
    "q": "Why do teams use separate staging and production environments?",
    "options": [
     "Because Git requires it",
     "To make the app slower",
     "To avoid writing tests",
     "To rehearse changes in a production-like space before real users are affected"
    ],
    "answer": 3,
    "explain": "Staging mirrors production so problems are caught before reaching live users."
   },
   {
    "q": "What problem does a container (Docker) mainly solve?",
    "options": [
     "It hides the source code",
     "It makes code shorter",
     "It replaces version control",
     "It packages the app with its dependencies so it runs the same everywhere"
    ],
    "answer": 3,
    "explain": "Containers bundle the app and its dependencies for consistent behavior across machines."
   },
   {
    "q": "In a canary release, what happens first?",
    "options": [
     "A small percentage of users gets the new version while you watch for errors",
     "The whole userbase gets the new version at once",
     "All servers are shut down",
     "The old version is deleted immediately"
    ],
    "answer": 0,
    "explain": "A canary sends the change to a small group first to catch issues before full rollout."
   },
   {
    "q": "If a new release is causing errors in production, the safest immediate action is to...",
    "options": [
     "Turn off monitoring",
     "Delete the repository",
     "Ignore the alerts",
     "Roll back to the previous working version"
    ],
    "answer": 3,
    "explain": "Rolling back restores the last healthy version while you investigate the problem."
   }
  ]
 },
 "devops-git-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every Git repository has a hidden folder called .git sitting at its root. This is the whole database Git uses — delete it and the folder is just plain files with no history. Everything you have learned so far (commits, branches, staging) is really just Git reading and writing objects inside this folder."
    },
    {
     "type": "text",
     "text": "Git stores content as four kinds of objects, each identified by a SHA-1 hash of its contents. A 'blob' stores a file's raw content. A 'tree' is like a folder listing, pointing to blobs and other trees. A 'commit' points to one tree (a full snapshot) plus its parent commit(s), author, and message. A 'tag' can point at a commit with a name."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Not real Git code, just the idea in plain terms:\n// commit  -> points to -> tree (snapshot of files)\n//                      -> parent commit(s)\n// tree    -> points to -> blob (file content), more trees (subfolders)\n// A file with the exact same content anywhere in history\n// reuses the SAME blob hash. Git never stores it twice."
    },
    {
     "type": "text",
     "text": "The 'staging area' (also called the index) is a file inside .git that lists exactly what will go into the next commit. 'git add' updates this file; it does not touch your commit history yet. 'git commit' then takes whatever is staged and freezes it as a new commit object."
    },
    {
     "type": "tip",
     "text": "If a friend says 'Git is basically a key-value store where the key is a hash and the value is content', they are right. That single idea explains why identical files never take extra space, and why every commit hash changes if even one byte in history changes."
    },
    {
     "type": "text",
     "text": "Because a commit's hash depends on its content and its parent's hash, changing anything in an old commit changes its hash — and every commit after it. This is exactly why Git treats history as append-only by default, and why rewriting old commits needs special commands you will meet next."
    }
   ],
   "recap": "Git stores everything as hashed objects (blobs, trees, commits, tags) inside .git; the staging area is just a list of what goes into the next commit."
  },
  "quiz": [
   {
    "q": "What does a Git 'blob' object store?",
    "options": [
     "A list of remote servers",
     "A branch name",
     "The raw content of a single file",
     "A commit message"
    ],
    "answer": 2,
    "explain": "A blob holds a file's raw content, identified by the hash of that content."
   },
   {
    "q": "What does 'git add' actually do?",
    "options": [
     "It creates a new branch",
     "It deletes the file from disk",
     "It pushes the file to GitHub",
     "It updates the staging area (index) with what should go into the next commit"
    ],
    "answer": 3,
    "explain": "git add only updates the staging area; the commit itself happens with git commit."
   },
   {
    "q": "Why does changing an old commit change the hashes of every commit after it?",
    "options": [
     "It doesn't, hashes never change",
     "Because each commit's hash depends on its own content and its parent's hash",
     "Because branches are renamed automatically",
     "Because GitHub recalculates them randomly"
    ],
    "answer": 1,
    "explain": "Since a commit hash is derived from its content plus its parent hash, any change ripples forward through history."
   },
   {
    "q": "What happens if two different files in your repo's history have exactly the same content?",
    "options": [
     "Git corrupts the repository",
     "Git stores two separate copies",
     "Git refuses to commit the second one",
     "Git reuses the same blob object for both"
    ],
    "answer": 3,
    "explain": "Since blobs are keyed by content hash, identical content is stored only once and reused."
   }
  ]
 },
 "devops-git-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When your feature branch and main have both moved forward, you need a way to bring main's changes into your branch. There are two common tools for this: 'merge' and 'rebase'. Both end with your changes and main's changes combined, but they produce very different history."
    },
    {
     "type": "text",
     "text": "'git merge main' creates a brand new 'merge commit' that has two parents: the tip of your branch and the tip of main. Nothing already committed is changed. This keeps an honest, if slightly busy, record of exactly when branches crossed."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// merge (keeps history, adds a merge commit)\n// git checkout feature\n// git merge main\n// history: A---B---C (main)\n//               \\       \\\n//                D---E---M (feature, M = merge commit)\n\n// rebase (rewrites feature's commits on top of main)\n// git checkout feature\n// git rebase main\n// history: A---B---C (main)\n//                    \\\n//                     D'---E'  (feature, replayed, new hashes)"
    },
    {
     "type": "text",
     "text": "'git rebase main' instead takes your branch's commits, temporarily sets them aside, and replays them one by one on top of the latest main. The result looks like you had written your code after main's newest changes all along — a straight line, no merge commit. But this rewrites your commits, giving them new hashes."
    },
    {
     "type": "tip",
     "text": "Golden rule: never rebase commits that other people have already pulled. Rewriting shared history forces everyone else to fix their own copies. Rebase your own local, unpushed work; merge when combining with shared branches."
    },
    {
     "type": "text",
     "text": "Many teams use both: rebase your feature branch locally to keep it clean and up to date, then open a pull request that gets merged (often with a merge commit or a 'squash merge' that flattens all your commits into one) into main."
    }
   ],
   "recap": "Merge adds a new commit joining two histories without rewriting anything; rebase replays your commits on top of another branch, producing cleaner but rewritten history. Never rebase shared commits."
  },
  "quiz": [
   {
    "q": "What does 'git merge main' create when there are new commits on both branches?",
    "options": [
     "Nothing, it fails automatically",
     "A tag",
     "A new commit with two parents",
     "A deleted branch"
    ],
    "answer": 2,
    "explain": "A merge commit has two parents, recording where the two histories joined."
   },
   {
    "q": "What does rebase do to your branch's existing commits?",
    "options": [
     "Pushes them straight to production",
     "Replays them on top of the new base, giving them new hashes",
     "Leaves their hashes exactly the same",
     "Deletes them permanently with no trace"
    ],
    "answer": 1,
    "explain": "Rebase re-creates each commit on top of the new base commit, so their hashes change even though the content is similar."
   },
   {
    "q": "Why should you avoid rebasing commits that others have already pulled?",
    "options": [
     "It automatically deletes their branches",
     "It rewrites shared history, forcing everyone else to fix their local copies",
     "It makes the repository larger",
     "It is not allowed by Git at all"
    ],
    "answer": 1,
    "explain": "Rebasing shared commits changes their hashes, breaking everyone else's history that was based on the old commits."
   },
   {
    "q": "Which statement best describes the visual difference in history between merge and rebase?",
    "options": [
     "Merge deletes the feature branch automatically",
     "They always look identical",
     "Merge keeps a branching history with a join commit; rebase produces a straight line",
     "Rebase adds more merge commits than merge does"
    ],
    "answer": 2,
    "explain": "Merge preserves the branch/join shape with an extra commit; rebase flattens the branch onto a straight line."
   }
  ]
 },
 "devops-git-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A merge conflict happens when Git cannot automatically combine two changes — usually because two people edited the same lines of the same file differently. Git does not guess who is right; it stops and asks you to decide."
    },
    {
     "type": "text",
     "text": "When a conflict occurs, Git marks the file with conflict markers. Everything between <<<<<<< and ======= is your current branch's version; everything between ======= and >>>>>>> is the incoming version. You edit the file to keep the correct final content and remove the markers."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "<<<<<<< HEAD\nconst discount = 0.10; // your branch\n=======\nconst discount = 0.15; // incoming branch\n>>>>>>> feature/pricing\n\n// After you decide and edit:\nconst discount = 0.15; // kept the incoming value, markers removed"
    },
    {
     "type": "text",
     "text": "After fixing the file, you tell Git the conflict is resolved by staging it: 'git add <file>'. Once every conflicted file is staged, run 'git commit' (for a merge) or 'git rebase --continue' (for a rebase) to finish the operation."
    },
    {
     "type": "tip",
     "text": "If a merge or rebase goes badly wrong, you are not stuck. 'git merge --abort' or 'git rebase --abort' cancels the whole operation and puts your branch back exactly where it was before you started."
    },
    {
     "type": "text",
     "text": "Conflicts are far less scary in small, frequent commits and branches that live for a day or two. The longer a branch diverges from main without updating, the more lines overlap and the messier the conflict becomes."
    }
   ],
   "recap": "A conflict means Git could not auto-merge overlapping changes; you edit out the <<<<<<< / ======= / >>>>>>> markers to the correct content, stage the file, then continue or commit."
  },
  "quiz": [
   {
    "q": "When does Git raise a merge conflict?",
    "options": [
     "Every time you run git commit",
     "Whenever two branches exist",
     "When two changes touch the same lines of the same file and Git cannot combine them automatically",
     "Only when pushing to GitHub"
    ],
    "answer": 2,
    "explain": "Conflicts happen specifically when overlapping edits can't be automatically reconciled."
   },
   {
    "q": "In a conflicted file, what does the text between ======= and >>>>>>> represent?",
    "options": [
     "A syntax error",
     "Your current branch's version",
     "A deleted file",
     "The incoming branch's version of the code"
    ],
    "answer": 3,
    "explain": "The section after ======= up to >>>>>>> shows the incoming branch's conflicting content."
   },
   {
    "q": "After manually fixing a conflicted file, what is the next step?",
    "options": [
     "Restart the computer",
     "Push immediately without staging",
     "Delete the .git folder",
     "Stage the file with git add, then commit or continue the operation"
    ],
    "answer": 3,
    "explain": "You must stage the resolved file, then finish with git commit (merge) or git rebase --continue (rebase)."
   },
   {
    "q": "Which command cancels an in-progress merge and restores your branch to before it started?",
    "options": [
     "git branch -D",
     "git commit --force",
     "git clone",
     "git merge --abort"
    ],
    "answer": 3,
    "explain": "git merge --abort backs out of a messy merge and returns to the pre-merge state."
   }
  ]
 },
 "devops-git-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mistakes happen — a bad commit, a wrong file staged, or a branch that needs to go back in time. Git gives you several undo tools, and picking the right one matters because some rewrite history and some don't."
    },
    {
     "type": "text",
     "text": "'git reset' moves your branch pointer to an earlier commit. '--soft' keeps your changes staged, '--mixed' (the default) keeps them as unstaged edits, and '--hard' throws them away completely, matching your working folder exactly to that commit. Reset is meant for commits only you have, not ones you already pushed and shared."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// git reset --soft HEAD~1   -> undo last commit, keep changes staged\n// git reset --mixed HEAD~1  -> undo last commit, keep changes unstaged\n// git reset --hard HEAD~1   -> undo last commit AND discard the changes\n\n// git revert <commit-hash>  -> adds a NEW commit that undoes an old one\n// safe for shared/pushed history because nothing is rewritten"
    },
    {
     "type": "text",
     "text": "'git revert' is the safe option for shared history: instead of rewinding, it creates a brand new commit whose changes cancel out an earlier commit. History keeps growing forward, so nobody else's branch breaks. This is what you use to undo something already pushed to main."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: reset for your own local mess-ups before anyone else has seen them; revert for anything already shared. If in doubt, revert — it never deletes information."
    },
    {
     "type": "text",
     "text": "'git reflog' is your safety net. It logs every place HEAD has pointed recently, even commits that a hard reset seemed to erase. If you reset --hard by accident, 'git reflog' can show you the lost commit's hash so you can recover it with 'git checkout <hash>' or 'git reset --hard <hash>'."
    }
   ],
   "recap": "Reset rewinds your branch (soft keeps changes staged, hard discards them) and is only safe on unshared commits; revert undoes shared commits by adding a new commit; reflog can recover almost anything that looks lost."
  },
  "quiz": [
   {
    "q": "What does 'git reset --hard HEAD~1' do?",
    "options": [
     "Moves the branch back one commit and discards any changes from that commit",
     "Deletes the entire repository",
     "Adds a new commit that undoes the last one",
     "Only stages the changes without committing"
    ],
    "answer": 0,
    "explain": "--hard rewinds the branch pointer and throws away the working directory changes that commit introduced."
   },
   {
    "q": "Why is 'git revert' safer than 'git reset' for a commit already pushed and shared?",
    "options": [
     "Reset is actually always safer",
     "Revert deletes the remote repository",
     "Revert adds a new commit undoing the change instead of rewriting history",
     "Revert requires no internet connection"
    ],
    "answer": 2,
    "explain": "Revert keeps history append-only by adding a corrective commit, so no one else's branch is broken."
   },
   {
    "q": "What can 'git reflog' help you recover?",
    "options": [
     "Passwords stored in .gitignore",
     "A commit that seems lost after a hard reset, as long as it's within the reflog's history",
     "Files that were never committed at all",
     "Deleted GitHub repositories"
    ],
    "answer": 1,
    "explain": "Reflog tracks recent HEAD movements, letting you find and restore commits that a hard reset appeared to erase."
   },
   {
    "q": "You accidentally staged the wrong file with git add. Which reset mode un-stages it without touching your edits or commit history?",
    "options": [
     "git reset --hard",
     "git reflog",
     "git revert",
     "git reset --mixed (the default)"
    ],
    "answer": 3,
    "explain": "The default --mixed reset un-stages files but leaves your working directory edits intact."
   }
  ]
 },
 "devops-git-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not everything in your project folder belongs in Git. Build outputs, dependency folders like node_modules, log files, and secret .env files should never be committed — they are either regenerable, huge, or dangerous to share. A '.gitignore' file tells Git which paths to simply skip."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "// .gitignore (plain text file, one pattern per line)\nnode_modules/\ndist/\n*.log\n.env\n.DS_Store"
    },
    {
     "type": "text",
     "text": "If a file was already committed before you added it to .gitignore, the rule alone will not remove it — you must also run 'git rm --cached <file>' to untrack it, then commit that removal. .gitignore only prevents new, never-tracked files from being picked up."
    },
    {
     "type": "tip",
     "text": "Never commit real secrets (API keys, passwords, tokens) even by accident. If one slips into history, changing the file later is not enough — the secret is still visible in old commits, so you must also rotate (change) the actual key."
    },
    {
     "type": "text",
     "text": "Git hooks are scripts that run automatically at specific points, like right before a commit ('pre-commit') or right before a push ('pre-push'). They live in .git/hooks and can block an action — for example, a pre-commit hook can run a linter and refuse the commit if the code fails style checks. Tools like Husky make hooks easy to share across a team."
    }
   ],
   "recap": ".gitignore keeps unwanted files (build output, secrets, dependencies) out of version control; Git hooks like pre-commit run automatic checks and can block bad commits or pushes."
  },
  "quiz": [
   {
    "q": "What is the main purpose of a .gitignore file?",
    "options": [
     "To store commit messages",
     "To create new branches automatically",
     "To list files and folders Git should never track",
     "To speed up git commit"
    ],
    "answer": 2,
    "explain": ".gitignore lists patterns for files/folders that should be excluded from version control."
   },
   {
    "q": "A secret key was committed to Git by accident last week. What must you do, beyond adding it to .gitignore?",
    "options": [
     "Rename the branch",
     "Rotate (change) the actual secret, since it still exists in old commits",
     "Delete only the newest commit",
     "Nothing, .gitignore removes it from history automatically"
    ],
    "answer": 1,
    "explain": ".gitignore only affects future tracking; the secret remains visible in old commit history, so the real fix is to change the compromised key."
   },
   {
    "q": "What does a pre-commit Git hook do?",
    "options": [
     "Creates a pull request",
     "Automatically pushes to GitHub",
     "Deletes old commits",
     "Runs a script (like a linter) before a commit is created, and can block it"
    ],
    "answer": 3,
    "explain": "A pre-commit hook runs before the commit completes and can stop it if checks fail."
   },
   {
    "q": "If node_modules was already committed before being added to .gitignore, what else is needed to stop tracking it?",
    "options": [
     "Deleting the whole repository",
     "Running git rm --cached on it and committing that removal",
     "Renaming node_modules",
     "Nothing, .gitignore handles already-tracked files too"
    ],
    "answer": 1,
    "explain": ".gitignore only ignores untracked files; already-tracked files need to be explicitly untracked with git rm --cached."
   }
  ]
 },
 "devops-git-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As a project matures, you need a way to mark 'this exact commit is what we shipped to customers as version 2.3.0'. A Git 'tag' is a permanent, named pointer to one specific commit, so you can always find and rebuild exactly that release later, even after hundreds more commits."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Lightweight tag: just a name pointing at a commit\n// git tag v2.3.0\n\n// Annotated tag: stores author, date, and a message (recommended for releases)\n// git tag -a v2.3.0 -m \"Release 2.3.0: add dark mode\"\n\n// Push tags to the remote (tags are NOT pushed automatically)\n// git push origin v2.3.0"
    },
    {
     "type": "text",
     "text": "Most software follows 'semantic versioning': MAJOR.MINOR.PATCH, like 2.3.1. PATCH increases for bug fixes with no new features. MINOR increases when you add features in a backward-compatible way. MAJOR increases when you make a breaking change that could break code depending on the old version."
    },
    {
     "type": "tip",
     "text": "A quick way to remember semantic versioning: PATCH = fixed a bug, MINOR = added something, MAJOR = broke something (on purpose, with a plan). Anyone depending on your library can read the version number and instantly know the risk of upgrading."
    },
    {
     "type": "text",
     "text": "GitHub 'Releases' build on tags: a release takes a tag, adds release notes (what changed), and can attach built files like installers or compiled binaries. This gives users a clear, downloadable snapshot of each version without digging through commit history."
    }
   ],
   "recap": "Tags mark a specific commit as a named release point; semantic versioning (MAJOR.MINOR.PATCH) communicates whether an update is a bug fix, a new feature, or a breaking change."
  },
  "quiz": [
   {
    "q": "What does a Git tag do?",
    "options": [
     "Renames a file",
     "Deletes a branch",
     "Automatically merges two branches",
     "Creates a permanent, named pointer to one specific commit"
    ],
    "answer": 3,
    "explain": "A tag marks a specific commit permanently, commonly used to mark releases."
   },
   {
    "q": "In semantic versioning 2.3.1, which part would increase for a backward-compatible new feature with no breaking changes?",
    "options": [
     "MAJOR (2)",
     "MINOR (3)",
     "PATCH (1)",
     "None of them"
    ],
    "answer": 1,
    "explain": "MINOR increases for new, backward-compatible features; PATCH is for bug fixes and MAJOR is for breaking changes."
   },
   {
    "q": "When should the MAJOR version number increase?",
    "options": [
     "Every single commit",
     "When a breaking change is introduced that could break existing users' code",
     "Never, it is fixed at 1",
     "When a bug is fixed with no other changes"
    ],
    "answer": 1,
    "explain": "MAJOR signals breaking changes that are not backward-compatible."
   },
   {
    "q": "Do Git tags get pushed to a remote automatically with a normal 'git push'?",
    "options": [
     "Only if the tag is annotated",
     "No, tags must be pushed explicitly (e.g., git push origin <tag>)",
     "Only on the main branch",
     "Yes, always automatically"
    ],
    "answer": 1,
    "explain": "Tags are not included in a regular push; they need an explicit push command."
   }
  ]
 },
 "devops-git-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A 'pull request' (PR), sometimes called a 'merge request', is a request to bring changes from one branch into another, usually into main. It is not a Git feature itself — it's a workflow feature provided by GitHub, GitLab, and similar platforms, built on top of ordinary branches and commits."
    },
    {
     "type": "text",
     "text": "Opening a PR shows a diff (a side-by-side of what changed) and lets teammates leave comments on specific lines, request changes, or approve. This is 'code review': a second pair of eyes catches bugs, style issues, and design problems before they reach main."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Typical PR workflow\n// 1. git checkout -b feature/login-page\n// 2. ...make commits...\n// 3. git push origin feature/login-page\n// 4. Open a Pull Request on GitHub: feature/login-page -> main\n// 5. Reviewers comment; you push more commits to the same branch to address them\n// 6. Once approved AND CI checks pass, the PR is merged"
    },
    {
     "type": "tip",
     "text": "Small, focused PRs get reviewed faster and more carefully than giant ones. A 40-line PR touching one feature usually gets a better review than a 2000-line PR touching five things at once — reviewers get tired and start skimming."
    },
    {
     "type": "text",
     "text": "Most teams require both an approval and passing CI checks before a PR can merge — this is a 'branch protection rule'. Some also require the branch to be up to date with main first, so the merged result is actually tested, not just the old, stale version of the code."
    }
   ],
   "recap": "A pull request proposes merging one branch into another and is where code review happens; branch protection rules typically require approval plus passing CI checks before merging."
  },
  "quiz": [
   {
    "q": "What is a pull request primarily used for?",
    "options": [
     "Creating a new Git repository",
     "Deleting old branches",
     "Proposing to merge one branch into another, with room for review and discussion",
     "Compiling the code"
    ],
    "answer": 2,
    "explain": "A PR proposes a merge and gives a place for reviewers to comment before it happens."
   },
   {
    "q": "Why do small, focused pull requests usually get better code reviews than huge ones?",
    "options": [
     "GitHub requires PRs to be small",
     "Reviewers can actually read and understand them carefully instead of skimming",
     "They don't need approval",
     "They automatically pass CI"
    ],
    "answer": 1,
    "explain": "Smaller PRs are easier for a human reviewer to fully understand, leading to more careful, useful reviews."
   },
   {
    "q": "What is a 'branch protection rule' commonly used for?",
    "options": [
     "Encrypting commit messages",
     "Requiring approval and passing CI checks before a PR can merge into a protected branch like main",
     "Hiding the branch from other developers",
     "Automatically deleting feature branches"
    ],
    "answer": 1,
    "explain": "Branch protection rules enforce conditions, like review approval and CI success, before allowing a merge."
   },
   {
    "q": "Is 'pull request' a core feature of Git itself?",
    "options": [
     "No, it replaced Git entirely",
     "Yes, it is built into every git command",
     "Yes, but only in Git version 3 and above",
     "No, it is a workflow feature added by platforms like GitHub and GitLab on top of Git"
    ],
    "answer": 3,
    "explain": "Pull requests are a hosting-platform feature layered on top of Git's branches and commits, not a core git command."
   }
  ]
 },
 "devops-git-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As a team grows, 'how do we organize our branches' becomes an important decision, not just a personal habit. A branching strategy is an agreed set of rules for what branches exist, what they are for, and when they merge into what."
    },
    {
     "type": "text",
     "text": "'Git Flow' is a structured strategy with several long-lived branch types: 'main' holds production-ready code, 'develop' holds the next release in progress, 'feature/*' branches come off develop for new work, 'release/*' branches stabilize a version before shipping, and 'hotfix/*' branches patch production urgently. It gives clear structure but adds overhead for small teams."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Git Flow (simplified)\n// main -------o-----------------o------  (production releases)\n//              \\                 /\n// release/2.0   o---o---o------o\n//              /\n// develop  ---o---o---o---o---o------  (integration branch)\n//              \\     /\n// feature/x     o---o"
    },
    {
     "type": "text",
     "text": "'Trunk-based development' is simpler: everyone commits small, frequent changes directly to (or through very short-lived branches into) a single branch, usually main. Unfinished features are hidden behind 'feature flags' (an on/off switch in code) rather than a long-lived branch, so main is always deployable."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: Git Flow trades speed for structure (good for apps with scheduled releases, like desktop software); trunk-based trades structure for speed (good for teams doing continuous deployment many times a day, like most modern web companies)."
    },
    {
     "type": "text",
     "text": "Neither is universally 'correct'. A team shipping a mobile app every six weeks may prefer Git Flow's release branches for stabilization; a team deploying a web service multiple times a day usually prefers trunk-based development because long-lived feature branches cause painful merge conflicts."
    }
   ],
   "recap": "Git Flow uses multiple long-lived branches (main, develop, feature, release, hotfix) for structured releases; trunk-based development keeps everyone on one branch with short-lived changes and feature flags, favoring speed."
  },
  "quiz": [
   {
    "q": "In Git Flow, which branch is meant to always reflect production-ready code?",
    "options": [
     "main",
     "hotfix/*",
     "feature/*",
     "develop"
    ],
    "answer": 0,
    "explain": "main represents the current production release in the Git Flow model."
   },
   {
    "q": "What replaces long-lived feature branches in trunk-based development to hide unfinished work?",
    "options": [
     "Release branches",
     "The .gitignore file",
     "Git tags",
     "Feature flags (on/off switches in code)"
    ],
    "answer": 3,
    "explain": "Trunk-based teams merge small changes often and use feature flags to hide incomplete features rather than keeping long branches."
   },
   {
    "q": "Which team is trunk-based development generally best suited for?",
    "options": [
     "A team shipping a desktop app once a year",
     "A team that never uses CI",
     "A team with only one developer and no releases",
     "A team deploying a web service multiple times per day"
    ],
    "answer": 3,
    "explain": "Trunk-based development favors speed and frequent, small integrations, matching teams that deploy very often."
   },
   {
    "q": "In Git Flow, what is a hotfix/* branch used for?",
    "options": [
     "Renaming the main branch",
     "Storing documentation",
     "Long-term feature experiments",
     "Urgently patching an issue found in production"
    ],
    "answer": 3,
    "explain": "hotfix branches are created from main to quickly fix an urgent production issue and are merged back into both main and develop."
   }
  ]
 },
 "devops-git-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have already seen a Dockerfile describe how to build a container. Now let's go one level deeper into how containers actually work. An 'image' is the built, read-only package created from a Dockerfile — think of it as a frozen template. A 'container' is a running instance of that image, the way an object is an instance of a class."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Build an image from a Dockerfile in the current folder, tag it \"myapp:1.0\"\n// docker build -t myapp:1.0 .\n\n// Run a container from that image, mapping port 3000 on the host to 3000 in the container\n// docker run -p 3000:3000 myapp:1.0\n\n// List running containers\n// docker ps\n\n// Stop a container\n// docker stop <container-id>"
    },
    {
     "type": "text",
     "text": "Containers are meant to be disposable — stop one and its filesystem changes vanish. That is a problem for databases, which must keep data between restarts. A 'volume' is storage that lives outside the container's lifecycle; you mount it into the container so files written there survive even if the container is deleted and recreated."
    },
    {
     "type": "tip",
     "text": "Common exam trap: containers are NOT virtual machines. A VM virtualizes an entire operating system (heavy, minutes to boot); a container shares the host's OS kernel and only isolates the application (light, starts in seconds)."
    },
    {
     "type": "text",
     "text": "By default, containers are isolated and cannot see each other. Docker networking lets you connect containers together — for example, putting a web app container and a database container on the same Docker network so the web app can reach the database by its container name, without exposing the database to the outside world at all."
    }
   ],
   "recap": "An image is a built template; a container is a running instance of it. Volumes give containers persistent storage outside their own lifecycle, and Docker networks let containers talk to each other securely."
  },
  "quiz": [
   {
    "q": "What is the relationship between a Docker image and a container?",
    "options": [
     "They are the same thing",
     "A container builds an image",
     "An image only exists after the container is deleted",
     "An image is the read-only template; a container is a running instance of that image"
    ],
    "answer": 3,
    "explain": "The image is the static built package; running it creates a container instance."
   },
   {
    "q": "Why do databases running in containers typically need a Docker volume?",
    "options": [
     "Volumes make containers start faster",
     "Container filesystem changes are normally lost when the container is removed, so a volume keeps data persistent",
     "Volumes replace the need for a Dockerfile",
     "Volumes are required to build any image"
    ],
    "answer": 1,
    "explain": "A container's own filesystem is disposable; a volume stores data outside that lifecycle so it survives container recreation."
   },
   {
    "q": "What is the key difference between a container and a full virtual machine?",
    "options": [
     "A VM is always smaller than a container",
     "Containers virtualize a full separate OS just like a VM",
     "There is no real difference",
     "A container shares the host OS kernel and isolates only the app, making it much lighter than a VM"
    ],
    "answer": 3,
    "explain": "Containers share the host kernel and isolate just the application layer, unlike a VM which virtualizes an entire OS."
   },
   {
    "q": "How can a web app container reach a database container safely without exposing the database publicly?",
    "options": [
     "By hardcoding the host machine's public IP",
     "By putting both containers on the same Docker network and referring to the database by its container name",
     "It is impossible in Docker",
     "By running both inside the same container"
    ],
    "answer": 1,
    "explain": "A shared Docker network lets containers resolve and reach each other by name while staying isolated from the outside world."
   }
  ]
 },
 "devops-git-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Running one container by hand is fine for a demo, but a real product might need dozens of containers spread across many servers, some crashing and needing restarts, traffic that spikes and needs more copies, and updates that must roll out without downtime. Manually running 'docker run' commands does not scale to this. This is the problem 'container orchestration' solves."
    },
    {
     "type": "text",
     "text": "Kubernetes (often shortened to 'k8s') is the most widely used orchestration system. You describe the desired state — 'I want 3 copies of this container always running' — and Kubernetes continuously works to keep reality matching that description, restarting containers that die and spreading them across available servers ('nodes')."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Simplified idea of a Kubernetes Deployment (usually written in YAML)\n// kind: Deployment\n// spec:\n//   replicas: 3          <- always keep 3 copies running\n//   template:\n//     containers:\n//       - image: myapp:1.0\n//         ports: [3000]\n\n// A Service then gives those 3 pods one stable address to be reached at,\n// even as individual pods are restarted and get new internal IPs."
    },
    {
     "type": "text",
     "text": "The smallest deployable unit in Kubernetes is a 'Pod' — usually one container wrapped with a bit of Kubernetes bookkeeping. A 'Deployment' manages a set of identical Pods and keeps the requested number running. A 'Service' gives those Pods one stable network address so other parts of the system don't need to track individual Pod IPs that change constantly."
    },
    {
     "type": "tip",
     "text": "Memory aid: Docker packages and runs ONE container; Kubernetes manages MANY containers across MANY machines, automatically restarting, scaling, and load-balancing them. Docker answers 'how do I package and run this app', Kubernetes answers 'how do I run thousands of these reliably'."
    },
    {
     "type": "text",
     "text": "Kubernetes also supports 'rolling updates': it replaces old Pods with new ones a few at a time, so the service stays available throughout the update, and 'auto-scaling': automatically adding more Pods when traffic increases and removing them when it drops."
    }
   ],
   "recap": "Kubernetes orchestrates many containers across many servers by continuously matching a desired state (replica counts, health) using Pods, Deployments, and Services, enabling rolling updates and auto-scaling."
  },
  "quiz": [
   {
    "q": "What problem does container orchestration (like Kubernetes) mainly solve?",
    "options": [
     "Compiling source code",
     "Running, restarting, scaling, and updating many containers across many servers reliably",
     "Writing Dockerfiles faster",
     "Replacing the need for Git"
    ],
    "answer": 1,
    "explain": "Orchestration automates the operational work of running containers at scale across a fleet of machines."
   },
   {
    "q": "In Kubernetes, what is the smallest deployable unit?",
    "options": [
     "A Service",
     "A Pod",
     "A Deployment",
     "A Node"
    ],
    "answer": 1,
    "explain": "A Pod, usually wrapping one container, is the smallest unit Kubernetes schedules and runs."
   },
   {
    "q": "What does a Kubernetes Service provide?",
    "options": [
     "A place to write Dockerfiles",
     "A backup of your Git repository",
     "A way to delete old container images",
     "A stable network address for a set of Pods, even as individual Pods change or restart"
    ],
    "answer": 3,
    "explain": "A Service gives callers one stable address, hiding the churn of individual Pods being created and destroyed."
   },
   {
    "q": "What happens during a Kubernetes rolling update?",
    "options": [
     "The whole cluster is deleted and rebuilt",
     "All Pods are stopped at once, causing downtime",
     "Old Pods are replaced with new ones gradually, keeping the service available throughout",
     "Nothing changes automatically, it requires manual restarts"
    ],
    "answer": 2,
    "explain": "Rolling updates swap Pods a few at a time so the application keeps serving traffic during the update."
   }
  ]
 },
 "devops-git-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before Infrastructure as Code (IaC), setting up servers, networks, and databases meant clicking through a cloud provider's website by hand, or running one-off commands. This was slow, easy to get wrong, and impossible to reproduce exactly on a second try. IaC means describing your infrastructure in text files that a tool can read and build automatically."
    },
    {
     "type": "text",
     "text": "Terraform is a popular IaC tool that works across many cloud providers (AWS, Azure, Google Cloud, and others) using one common language. You write '.tf' configuration files declaring what you want to exist — for example, one server of a certain size — and Terraform figures out the actual API calls needed to create it."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// main.tf (simplified example, HCL language)\n// resource \"aws_instance\" \"web_server\" {\n//   ami           = \"ami-0123456789\"\n//   instance_type = \"t2.micro\"\n//   tags = {\n//     Name = \"my-web-server\"\n//   }\n// }\n\n// terraform init   -> download provider plugins\n// terraform plan   -> show what WOULD change, without doing it\n// terraform apply  -> actually create/update/destroy resources to match the file"
    },
    {
     "type": "text",
     "text": "Terraform keeps a 'state file' recording what it believes currently exists. Every time you run 'terraform plan', it compares your configuration files against this state and the real cloud account, then shows exactly what will be added, changed, or destroyed before anything happens."
    },
    {
     "type": "tip",
     "text": "The single biggest exam-and-interview idea here is 'declarative, not imperative': you describe the end state you want ('3 servers should exist'), not the step-by-step commands to get there. Terraform works out the steps itself, and running 'apply' twice in a row the second time changes nothing, because reality already matches."
    },
    {
     "type": "text",
     "text": "Because infrastructure lives in version-controlled text files, teams get the same benefits Git gave application code: code review on infrastructure changes via pull requests, a full history of every change, and the ability to recreate an entire environment from scratch identically, which is invaluable for disaster recovery."
    }
   ],
   "recap": "Infrastructure as Code describes servers and cloud resources in text files instead of manual clicks; Terraform reads declarative .tf files, shows a plan, and applies changes to match, tracking real state so nothing is guessed."
  },
  "quiz": [
   {
    "q": "What is the main idea behind Infrastructure as Code?",
    "options": [
     "Only using a cloud provider's website",
     "Describing infrastructure in version-controlled text files that a tool can build automatically and reproducibly",
     "Writing infrastructure setup steps by hand each time",
     "Avoiding all cloud providers"
    ],
    "answer": 1,
    "explain": "IaC captures infrastructure definitions as code, enabling automation, review, and reproducibility."
   },
   {
    "q": "What does 'terraform plan' do?",
    "options": [
     "Immediately creates all resources with no warning",
     "Shows what changes would be made, without making them yet",
     "Deletes the current infrastructure",
     "Downloads Terraform itself"
    ],
    "answer": 1,
    "explain": "terraform plan is a dry run that previews additions, changes, and deletions before terraform apply executes them."
   },
   {
    "q": "What does it mean that Terraform is 'declarative'?",
    "options": [
     "You describe the desired end state, and Terraform figures out how to get there",
     "You write the exact sequence of commands to run",
     "It requires manual clicking in a web console",
     "It only works with one cloud provider"
    ],
    "answer": 0,
    "explain": "Declarative means specifying the desired outcome rather than the step-by-step procedure to achieve it."
   },
   {
    "q": "What does Terraform's state file track?",
    "options": [
     "The Dockerfile contents",
     "What Terraform believes currently exists in the real infrastructure, used to compute changes",
     "Git commit messages",
     "The company's payroll records"
    ],
    "answer": 1,
    "explain": "The state file lets Terraform compare desired configuration against what it believes is really deployed, to determine the needed changes."
   }
  ]
 },
 "devops-git-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Terraform is great at creating the servers themselves (the 'infrastructure'), but once a server exists, someone still has to install software on it, set configuration files, create users, and keep all of that consistent across dozens or hundreds of machines. That ongoing job is 'configuration management'."
    },
    {
     "type": "text",
     "text": "Ansible is a popular configuration management tool. You describe the desired setup of a server in a 'playbook' (a YAML file listing tasks), and Ansible connects over SSH to run those tasks on every server in your list — no special agent software needs to be pre-installed on the target machines."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// playbook.yml (simplified)\n// - hosts: webservers\n//   tasks:\n//     - name: Install nginx\n//       apt:\n//         name: nginx\n//         state: present\n//     - name: Start nginx service\n//       service:\n//         name: nginx\n//         state: started\n\n// ansible-playbook playbook.yml   -> applies these tasks to every host listed"
    },
    {
     "type": "tip",
     "text": "A key word here is 'idempotent': running the same Ansible playbook twice should leave the system in the same state as running it once. If nginx is already installed and running, the second run detects that and does nothing more, instead of erroring or reinstalling."
    },
    {
     "type": "text",
     "text": "A common pairing in real jobs: Terraform provisions the servers themselves (creates the virtual machines, networks, and storage), then Ansible configures what runs on them (installs software, applies settings, deploys the application). Terraform answers 'what exists', Ansible answers 'what is installed and configured on what exists'."
    }
   ],
   "recap": "Configuration management tools like Ansible describe a server's desired setup in playbooks and apply it over SSH, idempotently; Terraform typically creates the servers and Ansible configures them afterward."
  },
  "quiz": [
   {
    "q": "What problem does a configuration management tool like Ansible mainly solve?",
    "options": [
     "Creating the raw virtual servers themselves",
     "Building Docker images",
     "Installing software, applying settings, and keeping many servers consistently configured",
     "Writing Git commit messages"
    ],
    "answer": 2,
    "explain": "Configuration management handles what software and settings exist on already-created servers, keeping them consistent."
   },
   {
    "q": "What does 'idempotent' mean in the context of an Ansible playbook?",
    "options": [
     "It deletes the server each time",
     "It always fails on the second run",
     "It can only be run once ever",
     "Running it multiple times produces the same end state as running it once, without unwanted side effects"
    ],
    "answer": 3,
    "explain": "Idempotent tasks check the current state and only make changes when needed, so repeated runs are safe."
   },
   {
    "q": "How does Ansible typically connect to and configure target servers?",
    "options": [
     "It requires a special agent pre-installed on every server",
     "Only through a graphical desktop app",
     "By rebuilding the server from scratch every time",
     "Over SSH, with no special agent software required on the targets"
    ],
    "answer": 3,
    "explain": "Ansible is agentless, using SSH to run tasks on target machines directly."
   },
   {
    "q": "In a typical Terraform + Ansible pairing, what does Terraform usually handle versus Ansible?",
    "options": [
     "Terraform creates the servers/infrastructure; Ansible configures software on them",
     "They do the exact same job redundantly",
     "Terraform configures software; Ansible creates servers",
     "Neither tool touches real servers"
    ],
    "answer": 0,
    "explain": "Terraform typically provisions infrastructure (servers, networks), and Ansible then configures what runs on it."
   }
  ]
 },
 "devops-git-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Deploying an application is not the end of the DevOps job — you also need to know, at any moment, whether it is actually healthy. This ongoing visibility work has three closely related parts: metrics, logs, and alerts."
    },
    {
     "type": "text",
     "text": "'Metrics' are numbers measured over time — CPU usage, memory, requests per second, error rate, response time. Tools like Prometheus collect these numbers regularly, and Grafana turns them into dashboards with graphs, so a human can glance at one screen and see the system's health."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A metric is just a number with a timestamp and a label:\n// http_requests_total{status=\"500\"} 42   (at 14:03:00)\n// http_requests_total{status=\"500\"} 47   (at 14:04:00)\n// A sudden jump in this number over one minute is a strong signal something broke."
    },
    {
     "type": "text",
     "text": "'Logs' are the detailed text messages your application writes as it runs — 'user 123 logged in', 'payment failed: card declined'. Unlike a single metric number, a log line gives context about exactly what happened. Tools in the 'ELK stack' (Elasticsearch, Logstash, Kibana) collect logs from many servers into one searchable place, so you are not SSHing into ten different machines to grep through files."
    },
    {
     "type": "tip",
     "text": "Think of it this way: metrics tell you something is wrong ('error rate jumped to 8%'); logs tell you what and why ('500 users hit a null pointer exception in the checkout function'). You need both — metrics to notice fast, logs to diagnose precisely."
    },
    {
     "type": "text",
     "text": "'Alerting' closes the loop: rules like 'if error rate is above 5% for 3 minutes, notify the on-call engineer' turn monitoring data into an automatic page or message, so problems are caught within minutes instead of being discovered by an angry customer."
    }
   ],
   "recap": "Metrics are numeric health signals over time (Prometheus/Grafana), logs are detailed text records of what happened (ELK stack), and alerting turns both into automatic notifications when something crosses a threshold."
  },
  "quiz": [
   {
    "q": "What is the main difference between a metric and a log line?",
    "options": [
     "Logs are always faster to check than metrics",
     "Metrics can only be viewed once",
     "A metric is a number measured over time; a log line is a detailed text record of a specific event",
     "They are exactly the same thing"
    ],
    "answer": 2,
    "explain": "Metrics are numeric time-series data (good for spotting trends fast); logs are detailed textual records (good for diagnosing exactly what happened)."
   },
   {
    "q": "What is Grafana commonly used for?",
    "options": [
     "Running Ansible playbooks",
     "Writing Dockerfiles",
     "Turning collected metrics into visual dashboards and graphs",
     "Storing Git commit history"
    ],
    "answer": 2,
    "explain": "Grafana visualizes metrics (often collected by tools like Prometheus) as dashboards for humans to monitor."
   },
   {
    "q": "What problem does a centralized logging tool like the ELK stack solve?",
    "options": [
     "It replaces the need for metrics entirely",
     "It removes the need for any monitoring",
     "It lets you search logs from many servers in one place instead of checking each server individually",
     "It automatically fixes bugs in the code"
    ],
    "answer": 2,
    "explain": "Centralized logging aggregates logs from all servers into one searchable system, saving the effort of checking each machine separately."
   },
   {
    "q": "What does an alerting rule like 'if error rate > 5% for 3 minutes, notify on-call' achieve?",
    "options": [
     "It rewrites Git history",
     "It deletes the error automatically",
     "It turns monitoring data into an automatic notification so problems are caught quickly",
     "It slows down the application on purpose"
    ],
    "answer": 2,
    "explain": "Alerting rules convert a monitored condition into a timely automated notification to the responsible engineer."
   }
  ]
 },
 "devops-git-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "For a long time, security was treated as a final check done just before release, by a separate team, often too late to fix problems cheaply. 'DevSecOps' means baking security checks directly into the same CI/CD pipeline that builds and tests your code, so vulnerabilities are caught the same day they are introduced, not months later."
    },
    {
     "type": "text",
     "text": "One key practice is 'dependency scanning'. Almost every project pulls in third-party packages (like npm or pip packages), and any one of them might have a known vulnerability. Automated tools scan your dependency list against public vulnerability databases on every build and fail the pipeline if a serious issue is found."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Example CI step added for security (conceptual, GitHub Actions style)\n// - name: Scan dependencies for vulnerabilities\n//   run: npm audit --audit-level=high\n// - name: Scan Docker image for known CVEs\n//   run: trivy image myapp:1.0\n// If either step finds a high-severity issue, the pipeline fails\n// and the code cannot merge or deploy until it is fixed."
    },
    {
     "type": "text",
     "text": "'Secrets management' is another pillar: passwords, API keys, and certificates must never sit in plain text inside source code or config files in the repo. Instead, they are stored in a dedicated secrets manager (like HashiCorp Vault, or a cloud provider's secret store) and injected into the running application only at deploy or run time."
    },
    {
     "type": "tip",
     "text": "The phrase to remember for an interview is 'shift left': move security checks as early ('left') in the pipeline timeline as possible — ideally into the developer's own editor and every pull request — rather than only at the very end, right before release."
    },
    {
     "type": "text",
     "text": "Static Application Security Testing (SAST) scans your own source code for risky patterns (like building a SQL query by directly joining strings, which invites SQL injection) without running the program. Dynamic Application Security Testing (DAST) instead tests the running application from the outside, simulating how an attacker would probe it. A mature pipeline typically uses both, alongside dependency scanning and secrets management."
    }
   ],
   "recap": "DevSecOps builds security checks (dependency scanning, secrets management, SAST, DAST) directly into the CI/CD pipeline so vulnerabilities are caught early ('shift left') instead of as a late, separate step."
  },
  "quiz": [
   {
    "q": "What does 'shift left' mean in the context of DevSecOps?",
    "options": [
     "Running security checks as early as possible in development, not just at the very end",
     "Moving servers to a different data center",
     "Moving code review to after deployment",
     "Reversing a Git commit"
    ],
    "answer": 0,
    "explain": "Shift left means catching security issues early in the pipeline, ideally at the pull request stage, rather than only right before release."
   },
   {
    "q": "What does a dependency scanning tool check for?",
    "options": [
     "Spelling mistakes in comments",
     "Known vulnerabilities in third-party packages your project uses",
     "The speed of your CI pipeline",
     "Git branch names"
    ],
    "answer": 1,
    "explain": "Dependency scanners compare your project's third-party packages against databases of known vulnerabilities."
   },
   {
    "q": "Where should real secrets like API keys and passwords live, according to good DevSecOps practice?",
    "options": [
     "In the README file",
     "In a public GitHub repository",
     "Hardcoded directly in the source code",
     "In a dedicated secrets manager, injected at deploy or run time"
    ],
    "answer": 3,
    "explain": "Secrets belong in a dedicated secrets manager and should be injected into the app at runtime, never committed in plain text."
   },
   {
    "q": "What is the difference between SAST and DAST?",
    "options": [
     "Neither one relates to security",
     "SAST scans source code without running it; DAST tests the running application from the outside like an attacker would",
     "They are the same technique with different names",
     "SAST only runs after deployment; DAST only runs before deployment"
    ],
    "answer": 1,
    "explain": "SAST is static analysis of source code, while DAST probes the live, running application externally for vulnerabilities."
   }
  ]
 }
}
