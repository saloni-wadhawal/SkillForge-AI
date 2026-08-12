// Lesson text and quiz questions for "Software Engineering".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "software-engineering-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Writing a small program for yourself is like cooking a snack in your kitchen. Software engineering is like running a restaurant kitchen: many people, a repeatable process, quality checks, and food that stays good every single day. It is the disciplined way of building software that is large, reliable, and made by teams."
    },
    {
     "type": "text",
     "text": "A single clever coder can hack together an app. But real software must work for thousands of users, be fixed and improved for years, and be built by people who join and leave the team. Engineering adds structure — planning, documenting, testing, and reviewing — so the software does not collapse as it grows."
    },
    {
     "type": "text",
     "text": "Software engineering cares about the whole life of the product, not just typing code. It asks: What should we build? How do we design it? How do we know it works? How do we keep it running? Coding is only one slice of that pie."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: 'programming' is writing code that works once; 'software engineering' is code that keeps working for a team, over time, at scale."
    },
    {
     "type": "text",
     "text": "Because software is invisible and easy to change, it is also easy to get messy. Engineering practices exist to fight that mess — the same reason a bridge needs blueprints and inspections, not just strong metal."
    }
   ],
   "recap": "Software engineering is the disciplined, team-based practice of building software that is reliable, maintainable, and works at scale — far more than just writing code."
  },
  "quiz": [
   {
    "q": "What best separates software engineering from just programming?",
    "options": [
     "Using a faster computer",
     "Writing code in a newer language",
     "Avoiding all documentation",
     "Discipline, process and building for teams and scale over time"
    ],
    "answer": 3,
    "explain": "Engineering adds process, teamwork, and long-term reliability on top of writing code."
   },
   {
    "q": "In the restaurant analogy, software engineering is most like:",
    "options": [
     "Cooking a quick snack alone",
     "Running a full restaurant kitchen with a repeatable process",
     "Eating at a friend's house",
     "Ordering takeout"
    ],
    "answer": 1,
    "explain": "A restaurant kitchen needs teams, process, and consistent quality — just like engineered software."
   },
   {
    "q": "Which of these is a core concern of software engineering?",
    "options": [
     "Only the speed of typing",
     "Never letting anyone else read the code",
     "Making the code look pretty only",
     "The whole life of the product: build, test, and maintain"
    ],
    "answer": 3,
    "explain": "Engineering covers the entire product lifecycle, not just the coding moment."
   }
  ]
 },
 "software-engineering-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Software is not born all at once. It goes through stages, just like a building goes from an idea, to blueprints, to construction, to people living in it, to repairs. This journey of stages is called the Software Development Life Cycle, or SDLC."
    },
    {
     "type": "text",
     "text": "The classic SDLC has these phases: Requirements (what should it do?), Design (how will we build it?), Implementation (write the code), Testing (does it work correctly?), Deployment (give it to users), and Maintenance (keep fixing and improving it). Each phase feeds the next."
    },
    {
     "type": "text",
     "text": "Think of it as a diagram-in-words: a chain of boxes — [Requirements] -> [Design] -> [Coding] -> [Testing] -> [Deployment] -> [Maintenance] — where the output of one box becomes the input of the next. Good work early makes every later box easier."
    },
    {
     "type": "tip",
     "text": "A mistake found in Requirements costs pennies to fix; the same mistake found after Deployment can cost a fortune. Catching problems early is the whole point of having phases."
    },
    {
     "type": "text",
     "text": "The SDLC is not one fixed rulebook — different process models (which you will meet soon) arrange these same phases in different orders and rhythms. But almost every model uses these same building-block activities."
    }
   ],
   "recap": "The SDLC is the sequence of stages software passes through — requirements, design, implementation, testing, deployment, and maintenance — with each phase feeding the next."
  },
  "quiz": [
   {
    "q": "What does SDLC stand for?",
    "options": [
     "Software Development Life Cycle",
     "System Data Logic Chart",
     "Standard Deployment Load Control",
     "Software Design Language Compiler"
    ],
    "answer": 0,
    "explain": "SDLC is the Software Development Life Cycle — the stages software goes through."
   },
   {
    "q": "Which is the correct typical order of SDLC phases?",
    "options": [
     "Deployment -> Coding -> Requirements -> Design",
     "Testing -> Design -> Requirements -> Coding",
     "Design -> Maintenance -> Requirements -> Testing",
     "Requirements -> Design -> Implementation -> Testing -> Deployment -> Maintenance"
    ],
    "answer": 3,
    "explain": "Requirements come first and maintenance last, with design, coding, testing, and deployment in between."
   },
   {
    "q": "Why is it cheaper to catch a mistake in the Requirements phase?",
    "options": [
     "Because fixing it later means redoing design, code, and tests already built on it",
     "Because requirements are always wrong anyway",
     "Because users never notice early mistakes",
     "Because early phases have no cost"
    ],
    "answer": 0,
    "explain": "Errors found late force rework of everything built on top of them, so they cost far more."
   },
   {
    "q": "What comes right after Deployment in the classic SDLC?",
    "options": [
     "Design",
     "Maintenance",
     "Requirements",
     "Nothing — the project ends"
    ],
    "answer": 1,
    "explain": "After release the software enters Maintenance, where it is fixed and improved over time."
   }
  ]
 },
 "software-engineering-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before you build anything, you must know what to build. Requirements gathering is the work of talking to users and stakeholders to discover exactly what the software needs to do. Skip it, and you risk building a beautiful thing nobody asked for."
    },
    {
     "type": "text",
     "text": "Requirements come in two flavours. Functional requirements say what the system does — 'a user can reset their password'. Non-functional requirements say how well it must do it — 'the page must load in under 2 seconds' or 'it must handle 10,000 users at once'. Both matter."
    },
    {
     "type": "text",
     "text": "Engineers gather requirements through interviews, questionnaires, watching users work, studying existing systems, and building quick prototypes to get feedback. The goal is to turn vague wishes ('make it fast and easy') into clear, testable statements."
    },
    {
     "type": "tip",
     "text": "A good requirement is specific and verifiable. 'The app should be user-friendly' cannot be tested. 'A new user can complete signup in under 3 steps' can be — so it is a better requirement."
    },
    {
     "type": "text",
     "text": "Requirements are often written down in a document called an SRS (Software Requirements Specification). It becomes the shared agreement — the contract — between the people who want the software and the people who build it, so everyone means the same thing."
    }
   ],
   "recap": "Requirements gathering discovers what to build via functional (what it does) and non-functional (how well) requirements, written as clear, testable statements in an SRS."
  },
  "quiz": [
   {
    "q": "Which is a FUNCTIONAL requirement?",
    "options": [
     "The system must respond within 2 seconds",
     "A user can upload a profile photo",
     "The interface should look modern",
     "The app must handle 5,000 users at once"
    ],
    "answer": 1,
    "explain": "'Upload a profile photo' describes what the system does, which is a functional requirement."
   },
   {
    "q": "Which is a NON-functional requirement?",
    "options": [
     "The homepage must load in under 2 seconds",
     "A user can log in with a password",
     "Users can post comments",
     "An admin can delete accounts"
    ],
    "answer": 0,
    "explain": "Load time describes how well the system performs, which is non-functional."
   },
   {
    "q": "Why is 'the app should be user-friendly' a weak requirement?",
    "options": [
     "It mentions users",
     "It is too long",
     "It cannot be measured or tested objectively",
     "It is a functional requirement"
    ],
    "answer": 2,
    "explain": "Good requirements must be specific and verifiable, and 'user-friendly' cannot be tested."
   },
   {
    "q": "What is the SRS document?",
    "options": [
     "The written specification acting as an agreement on what to build",
     "The source code repository",
     "A list of bugs",
     "A test report"
    ],
    "answer": 0,
    "explain": "The SRS records requirements and serves as the shared agreement between clients and developers."
   }
  ]
 },
 "software-engineering-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A process model is the game plan for how you move through the SDLC phases. The two most famous are Waterfall and Agile, and they represent two very different philosophies."
    },
    {
     "type": "text",
     "text": "Waterfall is like a staircase you walk down one step at a time: finish all Requirements, then all Design, then all Coding, then Testing. You do not go back up. It is simple and clear, and works well when the requirements are fully known and unlikely to change — but it is rigid, and a wrong assumption early can wreck everything late."
    },
    {
     "type": "text",
     "text": "Agile flips the idea. Instead of one long march, you build the software in small repeating cycles called iterations or sprints (often 1-4 weeks). Each cycle produces a small working piece, you show it to users, get feedback, and adjust. It embraces change instead of fearing it."
    },
    {
     "type": "tip",
     "text": "Waterfall bakes the whole cake and serves it at the end; Agile serves one slice at a time and asks 'how does it taste?' before baking the next."
    },
    {
     "type": "text",
     "text": "Neither is 'always better'. Waterfall suits stable, well-understood projects (like some safety or contract work). Agile suits projects where needs evolve and fast feedback matters — which is most modern web and app development. Popular Agile approaches include Scrum and Kanban."
    }
   ],
   "recap": "Waterfall runs the SDLC phases once in strict sequence; Agile runs them in short, repeating iterations that welcome feedback and change — each fits different kinds of projects."
  },
  "quiz": [
   {
    "q": "What is the key idea of the Waterfall model?",
    "options": [
     "Skip the design phase",
     "Build in short repeating cycles",
     "Complete each phase fully before moving to the next, without going back",
     "Deliver working software every week"
    ],
    "answer": 2,
    "explain": "Waterfall moves through phases in a strict one-way sequence, like steps down a staircase."
   },
   {
    "q": "A short 1-4 week Agile development cycle is usually called a:",
    "options": [
     "Waterfall",
     "Sprint or iteration",
     "Milestone gate",
     "Deployment"
    ],
    "answer": 1,
    "explain": "Agile works in short repeating cycles called sprints or iterations."
   },
   {
    "q": "When is Waterfall a reasonable choice?",
    "options": [
     "When requirements are stable and well understood upfront",
     "When nobody knows what to build",
     "When you want feedback every week",
     "When requirements change constantly"
    ],
    "answer": 0,
    "explain": "Waterfall fits projects whose requirements are clear and unlikely to change."
   },
   {
    "q": "Which pair are popular Agile approaches?",
    "options": [
     "SRS and UML",
     "Waterfall and V-Model",
     "Compile and Link",
     "Scrum and Kanban"
    ],
    "answer": 3,
    "explain": "Scrum and Kanban are well-known Agile frameworks."
   }
  ]
 },
 "software-engineering-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once you know what to build (requirements), design decides how to build it. It is the blueprint stage — you plan the structure of the software before laying down code, just as an architect draws plans before builders pour concrete."
    },
    {
     "type": "text",
     "text": "Design happens at two levels. High-level (architectural) design splits the system into big parts — modules or components — and decides how they talk to each other. Low-level (detailed) design zooms into each part and plans its data, logic, and functions."
    },
    {
     "type": "text",
     "text": "Two guiding ideas make designs strong. High cohesion means each module focuses on one clear job. Loose coupling means modules depend on each other as little as possible. Together they let you change one part without breaking the others."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Loose coupling: EmailSender doesn't know how the message was built.\nclass EmailSender:\n    def send(self, to, message):\n        print(f\"Sending to {to}: {message}\")\n\nclass Notifier:\n    def __init__(self, sender):\n        self.sender = sender  # depends on an interface, not internals\n    def alert(self, user):\n        self.sender.send(user, \"Your order shipped!\")\n\nNotifier(EmailSender()).alert(\"sam@mail.com\")"
    },
    {
     "type": "tip",
     "text": "Think LEGO, not glue. High cohesion + loose coupling means parts snap together and pull apart cleanly, so you can swap or fix one block without smashing the whole model."
    },
    {
     "type": "text",
     "text": "Designers also lean on proven solutions called design patterns — reusable templates for common problems (like the Singleton or Observer pattern). Reusing a known-good pattern beats reinventing a shaky solution each time."
    }
   ],
   "recap": "Design is the blueprint stage: splitting the system into modules with high cohesion and loose coupling, at both architectural and detailed levels, often using proven design patterns."
  },
  "quiz": [
   {
    "q": "What does 'high cohesion' mean in design?",
    "options": [
     "The code runs fast",
     "Modules depend heavily on each other",
     "Each module focuses on one clear, well-defined job",
     "There are no modules at all"
    ],
    "answer": 2,
    "explain": "High cohesion means a module concentrates on a single, clear responsibility."
   },
   {
    "q": "Why is loose coupling desirable?",
    "options": [
     "You can change one module without breaking others",
     "It makes the program larger",
     "It removes the need for testing",
     "It makes modules depend on each other more"
    ],
    "answer": 0,
    "explain": "Loose coupling reduces dependencies so changes stay contained to one module."
   },
   {
    "q": "Architectural (high-level) design mainly decides:",
    "options": [
     "The color of buttons",
     "Which test cases to write",
     "How the system is split into major components and how they interact",
     "The exact variable names"
    ],
    "answer": 2,
    "explain": "High-level design defines the big components and their interactions."
   },
   {
    "q": "A design pattern is best described as:",
    "options": [
     "A bug in the code",
     "A type of programming language",
     "A testing tool",
     "A reusable, proven template for solving a common design problem"
    ],
    "answer": 3,
    "explain": "Design patterns are reusable, tested solutions to recurring design problems."
   }
  ]
 },
 "software-engineering-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Testing is how we build confidence that the software actually works. It means running the software with chosen inputs and checking that the outputs are correct. A key truth from Dijkstra: testing can show that bugs exist, but never prove there are none — so we test smartly, not endlessly."
    },
    {
     "type": "text",
     "text": "Testing happens in levels. Unit testing checks the smallest pieces (a single function). Integration testing checks that pieces work together. System testing checks the whole product end-to-end. Acceptance testing checks that it meets the user's real needs before release."
    },
    {
     "type": "text",
     "text": "There are also two viewpoints. Black-box testing checks behaviour without looking inside the code — you only care about inputs and outputs. White-box testing looks inside and tests the actual logic paths and branches. Good teams use both."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def add(a, b):\n    return a + b\n\n# A simple unit test\ndef test_add():\n    assert add(2, 3) == 5      # normal case\n    assert add(-1, 1) == 0     # edge case\n    assert add(0, 0) == 0      # boundary\n\ntest_add()\nprint(\"All tests passed!\")"
    },
    {
     "type": "tip",
     "text": "Always test the edges, not just the happy path: empty inputs, zero, negative numbers, and the very largest values are where bugs love to hide."
    },
    {
     "type": "text",
     "text": "A helpful distinction: verification asks 'are we building the product right?' (does it meet the spec), while validation asks 'are we building the right product?' (does it meet the user's real need). You want both to be true."
    }
   ],
   "recap": "Testing builds confidence by running software and checking outputs, across levels (unit, integration, system, acceptance) and viewpoints (black-box, white-box); it reveals bugs but cannot prove their absence."
  },
  "quiz": [
   {
    "q": "Which statement about testing is true?",
    "options": [
     "Testing is only needed after deployment",
     "Testing can reveal bugs but cannot prove none exist",
     "Testing replaces the need for design",
     "Testing proves software has zero bugs"
    ],
    "answer": 1,
    "explain": "Testing can show the presence of bugs but never guarantee their complete absence."
   },
   {
    "q": "Unit testing focuses on:",
    "options": [
     "The smallest individual pieces, like a single function",
     "The whole system end-to-end",
     "The user's business needs",
     "How modules integrate together"
    ],
    "answer": 0,
    "explain": "Unit tests check the smallest pieces of code in isolation."
   },
   {
    "q": "Black-box testing means:",
    "options": [
     "Testing based on inputs and outputs without seeing the code",
     "Testing without any inputs",
     "Testing done by the customer only",
     "Testing only the internal logic paths"
    ],
    "answer": 0,
    "explain": "Black-box testing checks behaviour through inputs and outputs, ignoring internal code."
   },
   {
    "q": "Validation asks which question?",
    "options": [
     "Is the code short enough?",
     "Are we building the right product (meets the user's real need)?",
     "Are we building the product right (meets the spec)?",
     "Is the code fast enough?"
    ],
    "answer": 1,
    "explain": "Validation checks that the software meets the user's actual needs, not just the written spec."
   }
  ]
 },
 "software-engineering-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Shipping software is not the finish line — it is the start of maintenance, often the longest and most expensive phase. Studies show maintenance can eat well over half of a system's total cost, because software must keep adapting long after launch."
    },
    {
     "type": "text",
     "text": "Maintenance comes in four types. Corrective fixes bugs found after release. Adaptive updates the software for a changed environment (a new OS or law). Perfective adds improvements and new features users request. Preventive tidies the code to stop future problems — like refactoring to reduce technical debt."
    },
    {
     "type": "text",
     "text": "'Technical debt' is a powerful idea: quick, messy shortcuts taken today are like borrowing money — they speed you up now but charge 'interest' later as extra effort. Preventive maintenance pays that debt down before it grows crippling."
    },
    {
     "type": "text",
     "text": "To keep a large system understandable across its long life, engineers use UML (Unified Modeling Language) — a standard set of diagrams to picture software. Instead of reading thousands of lines of code, a diagram shows the structure or behaviour at a glance, like a map of a city instead of walking every street."
    },
    {
     "type": "text",
     "text": "Two of the most common UML diagrams: a Class diagram shows the structure — the classes, their attributes, and how they relate (a static picture). A Use-case diagram shows the behaviour — which actors (users) can perform which actions with the system. Others include sequence and activity diagrams."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "UML Class diagram (text sketch):\n\n +------------------+          +----------------+\n |     Customer     |          |     Order      |\n +------------------+   1    * +----------------+\n | - name: String   |----------| - id: int      |\n | - email: String  | places   | - total: float |\n +------------------+          +----------------+\n | + placeOrder()   |          | + calcTotal()  |\n +------------------+          +----------------+\n\n(one Customer places many Orders)"
    },
    {
     "type": "tip",
     "text": "Match the diagram to the question: use a Class diagram to ask 'what is the system MADE of?' and a Use-case diagram to ask 'what can users DO with it?'"
    },
    {
     "type": "text",
     "text": "Together, maintenance and modelling are how software survives the real world for years. Good models and clean, debt-free code make every future change cheaper — which is the ultimate goal of software engineering."
    }
   ],
   "recap": "Maintenance (corrective, adaptive, perfective, preventive) is the longest, costliest phase; UML diagrams like class and use-case give standard pictures of a system's structure and behaviour to keep it understandable over time."
  },
  "quiz": [
   {
    "q": "Which type of maintenance fixes bugs discovered after release?",
    "options": [
     "Preventive",
     "Corrective",
     "Adaptive",
     "Perfective"
    ],
    "answer": 1,
    "explain": "Corrective maintenance repairs defects found after the software is released."
   },
   {
    "q": "Updating software to run on a new operating system is which maintenance type?",
    "options": [
     "Preventive",
     "Corrective",
     "Adaptive",
     "Perfective"
    ],
    "answer": 2,
    "explain": "Adaptive maintenance changes the software to fit a new environment like a new OS."
   },
   {
    "q": "What does 'technical debt' describe?",
    "options": [
     "Quick, messy shortcuts that cost extra effort to fix later",
     "The price of a software license",
     "A bug that crashes the program",
     "Money owed to software vendors"
    ],
    "answer": 0,
    "explain": "Technical debt is the future cost created by taking easy shortcuts today."
   },
   {
    "q": "Which UML diagram shows the system's static structure — classes and their relationships?",
    "options": [
     "Class diagram",
     "Activity diagram",
     "Use-case diagram",
     "Sequence diagram"
    ],
    "answer": 0,
    "explain": "A class diagram depicts classes, their attributes, and how they relate, the static structure."
   },
   {
    "q": "A Use-case diagram is best for showing:",
    "options": [
     "The color scheme of the UI",
     "The exact database schema",
     "The speed of each function",
     "Which actors can perform which actions with the system"
    ],
    "answer": 3,
    "explain": "Use-case diagrams capture actors and the actions they can carry out with the system."
   }
  ]
 },
 "software-engineering-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A class diagram shows what a system is made of, but it says nothing about time. Two UML diagrams fix that: a sequence diagram shows objects talking to each other in a specific order, and an activity diagram shows the flow of steps in a process, like a flowchart with extra rules."
    },
    {
     "type": "text",
     "text": "In a sequence diagram, each object gets its own vertical lifeline. Arrows between lifelines are messages, drawn top to bottom in the order they happen. A login flow might show: User sends 'enterPassword()' to LoginForm, which sends 'checkPassword()' to AuthService, which replies back up the chain."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Sequence diagram (text sketch):\n\nUser        LoginForm       AuthService\n |               |               |\n |--enterPwd()-->|               |\n |               |--check(pwd)-->|\n |               |               |--(query DB)\n |               |<--valid=true--|\n |<--'Welcome!'--|               |\n\n(time flows downward; each arrow is one message)"
    },
    {
     "type": "text",
     "text": "An activity diagram is closer to a flowchart: it shows the steps of a process using rounded boxes for actions, diamonds for decisions, and forks/joins for tasks that happen in parallel. It answers 'what happens, in what order, including branches and parallel work?' — useful for describing a business process like 'place an order'."
    },
    {
     "type": "tip",
     "text": "Pick the diagram by the question you are answering: structure -> class diagram, who-does-what -> use-case diagram, message order between objects -> sequence diagram, step-by-step process/workflow -> activity diagram."
    },
    {
     "type": "text",
     "text": "These diagrams are not just decoration for a report. Teams draw a sequence diagram before coding to catch a missing message or a wrong order of calls, cheaply, before it becomes a bug in running code."
    }
   ],
   "recap": "Sequence diagrams show the exact order of messages passed between objects over time; activity diagrams show the flow of steps, decisions, and parallel work in a process."
  },
  "quiz": [
   {
    "q": "What does a sequence diagram primarily show?",
    "options": [
     "The color scheme of the UI",
     "The order in which objects exchange messages over time",
     "Which actors can use the system",
     "The static attributes of a class"
    ],
    "answer": 1,
    "explain": "A sequence diagram arranges objects on lifelines and shows messages between them in time order, top to bottom."
   },
   {
    "q": "Which UML diagram is closest in spirit to a flowchart with decisions and parallel paths?",
    "options": [
     "Use-case diagram",
     "Class diagram",
     "Sequence diagram",
     "Activity diagram"
    ],
    "answer": 3,
    "explain": "Activity diagrams model workflow: actions, decision diamonds, and forks/joins for parallel steps."
   },
   {
    "q": "In a sequence diagram, what represents an object over the lifetime of the interaction?",
    "options": [
     "A vertical lifeline",
     "A dashed arrow only",
     "A diamond",
     "A rounded rectangle"
    ],
    "answer": 0,
    "explain": "Each participating object gets a vertical lifeline; messages are horizontal arrows between lifelines."
   }
  ]
 },
 "software-engineering-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Two words decide whether a design will age well: coupling and cohesion. Coupling is how tightly one module depends on another. Cohesion is how strongly the things inside one module belong together. Good design wants low coupling and high cohesion — modules that stand on their own but are internally focused."
    },
    {
     "type": "text",
     "text": "High coupling means changing one module breaks others, like a house of cards. If a Billing module directly reaches into Inventory's private variables, any change to Inventory risks breaking Billing. Low coupling means modules talk only through clean, narrow interfaces, so one can change without the other noticing."
    },
    {
     "type": "text",
     "text": "Low cohesion means a module does many unrelated jobs — a 'Utils' class that formats dates, sends emails, and calculates tax has low cohesion. High cohesion means a module has one clear job, like a class that only formats dates. High-cohesion modules are easier to name, test, and reuse."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Low cohesion, high coupling example\nclass ReportUtil:\n    def format_date(self, d): ...\n    def send_email(self, to, msg): ...\n    def calc_tax(self, amount): ...  # three unrelated jobs\n\n# Better: high cohesion, each class has one job\nclass DateFormatter:\n    def format(self, d): ...\n\nclass EmailSender:\n    def send(self, to, msg): ...\n\nclass TaxCalculator:\n    def calc(self, amount): ..."
    },
    {
     "type": "tip",
     "text": "Memory aid: cohesion is about the INSIDE of a module (does it belong together?), coupling is about the OUTSIDE, between modules (how tangled are they?). Aim: low coupling, high cohesion."
    },
    {
     "type": "text",
     "text": "These two ideas are the reason large systems are split into modules, packages, and services at all. A codebase with high coupling and low cohesion becomes a 'big ball of mud' where every change is risky."
    }
   ],
   "recap": "Coupling measures how dependent modules are on each other; cohesion measures how focused a single module is. Good design aims for low coupling and high cohesion."
  },
  "quiz": [
   {
    "q": "What does 'high cohesion' mean for a module?",
    "options": [
     "It is written in fewer lines of code",
     "It depends heavily on other modules",
     "It performs one clear, focused job",
     "It has no functions at all"
    ],
    "answer": 2,
    "explain": "High cohesion means the responsibilities inside a module are closely related and focused on one purpose."
   },
   {
    "q": "A class that reaches directly into another class's private data to work is an example of:",
    "options": [
     "High cohesion",
     "High coupling",
     "Low coupling",
     "Low complexity"
    ],
    "answer": 1,
    "explain": "Directly depending on another module's internals creates tight, high coupling between them."
   },
   {
    "q": "What is the ideal combination for a good software design?",
    "options": [
     "Low coupling, low cohesion",
     "Low coupling, high cohesion",
     "High coupling, high cohesion",
     "High coupling, low cohesion"
    ],
    "answer": 1,
    "explain": "Modules should be independent of each other (low coupling) but internally focused on one job (high cohesion)."
   }
  ]
 },
 "software-engineering-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "SOLID is five design principles for object-oriented software, one letter each, that grew out of hard lessons from real projects. They are guidelines, not laws, but interviewers and code reviewers use them constantly to judge design quality."
    },
    {
     "type": "text",
     "text": "S — Single Responsibility: a class should have only one reason to change. O — Open/Closed: a class should be open for extension but closed for modification, meaning you add new behaviour without editing tested code. L — Liskov Substitution: a subclass must be usable anywhere its parent class is expected, without breaking things."
    },
    {
     "type": "text",
     "text": "I — Interface Segregation: many small, specific interfaces beat one giant interface that forces classes to implement methods they do not need. D — Dependency Inversion: high-level code should depend on abstractions (interfaces), not on concrete low-level details, so the low-level pieces can be swapped freely."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "// Open/Closed example: add new shapes without touching Shape or AreaCalculator\ninterface Shape {\n    double area();\n}\n\nclass Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    public double area() { return Math.PI * r * r; }\n}\n\nclass Square implements Shape {\n    double side;\n    Square(double s) { this.side = s; }\n    public double area() { return side * side; }\n}\n\n// AreaCalculator never changes, even when a new Shape is added\nclass AreaCalculator {\n    double total(Shape[] shapes) {\n        double sum = 0;\n        for (Shape s : shapes) sum += s.area();\n        return sum;\n    }\n}"
    },
    {
     "type": "tip",
     "text": "Exam trick to remember the order: S-O-L-I-D = Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion."
    },
    {
     "type": "text",
     "text": "SOLID connects directly to the coupling and cohesion ideas from the last level: Single Responsibility raises cohesion, and Dependency Inversion lowers coupling. They are the same goal, described from a design-rules angle instead of a metrics angle."
    }
   ],
   "recap": "SOLID is five OOP design principles — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — aimed at code that is easy to extend and safe to change."
  },
  "quiz": [
   {
    "q": "Which SOLID principle says a class should have only one reason to change?",
    "options": [
     "Open/Closed",
     "Liskov Substitution",
     "Dependency Inversion",
     "Single Responsibility"
    ],
    "answer": 3,
    "explain": "Single Responsibility Principle limits a class to one job, so it only ever needs to change for one reason."
   },
   {
    "q": "'Open for extension, closed for modification' describes which principle?",
    "options": [
     "Open/Closed Principle",
     "Interface Segregation",
     "Dependency Inversion",
     "Single Responsibility"
    ],
    "answer": 0,
    "explain": "The Open/Closed Principle wants new behaviour added via extension, without editing existing, tested code."
   },
   {
    "q": "Depending on interfaces/abstractions instead of concrete low-level classes is the:",
    "options": [
     "Single Responsibility Principle",
     "Interface Segregation Principle",
     "Dependency Inversion Principle",
     "Liskov Substitution Principle"
    ],
    "answer": 2,
    "explain": "Dependency Inversion says high-level modules should depend on abstractions, not concrete details."
   },
   {
    "q": "A subclass that breaks code written for its parent class violates:",
    "options": [
     "Open/Closed Principle",
     "Interface Segregation Principle",
     "Single Responsibility Principle",
     "Liskov Substitution Principle"
    ],
    "answer": 3,
    "explain": "Liskov Substitution requires a subclass to be safely usable anywhere the parent type is expected."
   }
  ]
 },
 "software-engineering-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Architecture is the highest-level design decision: how a whole system is split into big pieces and how those pieces talk to each other. Choosing badly here is expensive to undo later, far more than a bug in one function."
    },
    {
     "type": "text",
     "text": "Layered architecture stacks the system in horizontal layers — presentation, business logic, data access — where each layer only talks to the one directly below it. It is simple and familiar, but a request can feel slow if it has to pass through every layer for small changes."
    },
    {
     "type": "text",
     "text": "Client-server splits work between a client that asks and a server that answers, like a browser talking to a web server. Microservices architecture takes this further: instead of one large 'monolith' application, the system is a set of small, independently deployable services, each owning one business capability (orders, payments, users) and talking over the network, often with REST APIs."
    },
    {
     "type": "text",
     "text": "A monolith is easy to build and test early on — one codebase, one deploy. Microservices scale better for large teams and huge systems, letting one team update the payments service without redeploying the whole app, but they add real cost: network calls can fail, and keeping services in sync is genuinely hard."
    },
    {
     "type": "tip",
     "text": "Interview answer pattern: 'Start with a monolith for a small team and simple product; move to microservices once the team, traffic, or codebase has grown enough that independent deployment outweighs the added network and coordination complexity.'"
    },
    {
     "type": "text",
     "text": "Other common styles worth knowing by name: event-driven architecture (services react to events instead of direct calls) and pipe-and-filter (data flows through a chain of processing steps, like Unix commands piped together)."
    }
   ],
   "recap": "Architecture styles include layered (horizontal layers), client-server, monolith vs microservices (one deployable unit vs many small independent services), event-driven, and pipe-and-filter — each with its own trade-offs in simplicity vs scale."
  },
  "quiz": [
   {
    "q": "In a layered architecture, how do layers normally communicate?",
    "options": [
     "Only the top layer exists",
     "Any layer can call any other layer directly",
     "Layers never communicate",
     "Each layer only talks to the layer directly below it"
    ],
    "answer": 3,
    "explain": "Layered architecture keeps a strict order: each layer depends only on the layer beneath it."
   },
   {
    "q": "What is a key advantage of microservices over a monolith?",
    "options": [
     "It is always simpler to build and test",
     "Zero network calls between components",
     "One team can deploy one service independently of the rest",
     "It removes the need for APIs"
    ],
    "answer": 2,
    "explain": "Microservices let teams deploy and scale each small service on its own, unlike a single monolithic deploy."
   },
   {
    "q": "What is a real cost of splitting a system into microservices?",
    "options": [
     "It removes all coupling automatically",
     "It eliminates the need for testing",
     "Network calls between services can fail and must be handled",
     "The code becomes a single large file"
    ],
    "answer": 2,
    "explain": "Microservices communicate over a network, so failures, latency, and keeping data in sync become real engineering problems."
   }
  ]
 },
 "software-engineering-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A design pattern is a proven, named solution to a problem that keeps showing up in software design. Patterns are not code you copy-paste; they are a shape of a solution you adapt. Knowing their names lets engineers talk in shorthand: saying 'use a Factory here' communicates a whole design idea in two words."
    },
    {
     "type": "text",
     "text": "The Singleton pattern ensures a class has exactly one instance across the whole program, with one global point to access it — useful for things like a single configuration manager or a single connection pool, where having two copies would cause bugs or wasted resources."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class ConfigManager:\n    _instance = None\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n            cls._instance.settings = {}\n        return cls._instance\n\na = ConfigManager()\nb = ConfigManager()\nprint(a is b)  # True: both variables point to the same single object"
    },
    {
     "type": "text",
     "text": "The Factory pattern hides the details of creating an object behind a single method, so the calling code just asks for 'a shape' or 'a payment method' without knowing the exact class being built. This keeps the caller decoupled from concrete classes, in the spirit of the Dependency Inversion principle."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Dog:\n    def speak(self): return \"Woof\"\n\nclass Cat:\n    def speak(self): return \"Meow\"\n\ndef animal_factory(kind):\n    if kind == \"dog\":\n        return Dog()\n    elif kind == \"cat\":\n        return Cat()\n    raise ValueError(\"Unknown animal\")\n\npet = animal_factory(\"cat\")\nprint(pet.speak())  # Meow -- caller never wrote 'Cat()' directly"
    },
    {
     "type": "tip",
     "text": "Watch out for the classic Singleton trap: overusing it turns it into hidden global state, making unit tests hard because every test secretly shares the same instance. Use it sparingly, for genuinely single, shared resources."
    }
   ],
   "recap": "Design patterns are reusable, named design solutions. Singleton guarantees exactly one instance of a class; Factory hides object-creation details behind one method so callers stay decoupled from concrete classes."
  },
  "quiz": [
   {
    "q": "What problem does the Singleton pattern solve?",
    "options": [
     "It creates a new object every time it is called",
     "It hides which class is being created",
     "It speeds up sorting algorithms",
     "It guarantees only one instance of a class exists, with one access point"
    ],
    "answer": 3,
    "explain": "Singleton restricts a class to a single shared instance, accessed the same way everywhere in the program."
   },
   {
    "q": "Why use a Factory instead of calling 'new SomeClass()' directly everywhere?",
    "options": [
     "It decouples the calling code from the concrete class being created",
     "It removes the need for classes entirely",
     "It makes the object slower to create",
     "It forces every object to be a Singleton"
    ],
    "answer": 0,
    "explain": "A Factory centralizes creation logic so callers depend on an abstraction, not on specific concrete classes."
   },
   {
    "q": "What is a common downside of overusing the Singleton pattern?",
    "options": [
     "It makes memory usage unlimited",
     "It requires more classes than any other pattern",
     "It can only be used in Python",
     "It introduces hidden global state that complicates unit testing"
    ],
    "answer": 3,
    "explain": "Because a Singleton is shared everywhere, tests can accidentally leak state between them through it."
   }
  ]
 },
 "software-engineering-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Observer pattern lets one object (the 'subject') notify a list of other objects ('observers') whenever something changes, without the subject needing to know any details about them. It is the backbone of event systems: a button click, a stock price update, or a chat message all use this idea."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Subject:\n    def __init__(self):\n        self._observers = []\n\n    def subscribe(self, observer):\n        self._observers.append(observer)\n\n    def notify(self, data):\n        for obs in self._observers:\n            obs.update(data)\n\nclass EmailAlert:\n    def update(self, data):\n        print(f\"Email: price changed to {data}\")\n\nstock = Subject()\nstock.subscribe(EmailAlert())\nstock.notify(105.50)  # Email: price changed to 105.5"
    },
    {
     "type": "text",
     "text": "MVC (Model-View-Controller) is an architectural pattern that splits an application into three roles. The Model holds the data and business rules. The View displays that data to the user. The Controller takes user input, updates the Model, and picks which View to show. This split is exactly why you can change how a page looks (View) without touching how data is stored (Model)."
    },
    {
     "type": "text",
     "text": "MVC actually leans on Observer internally: many implementations have the View subscribe to the Model, so that whenever the Model changes, every View watching it refreshes automatically, without the Model needing to know which Views exist."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: Model = data + rules, View = what the user sees, Controller = the traffic cop that reacts to input and updates the Model. If a question describes 'separating data from display', it is asking about MVC."
    },
    {
     "type": "text",
     "text": "These patterns matter beyond exams: almost every modern web framework (React, Angular, Django, Spring) is built around some flavour of MVC or Observer, so recognizing them here means recognizing real frameworks later."
    }
   ],
   "recap": "Observer lets a subject notify many observers on change without knowing their details; MVC splits an app into Model (data/rules), View (display), and Controller (input handling), often using Observer between Model and View."
  },
  "quiz": [
   {
    "q": "In the Observer pattern, what does the subject do when its state changes?",
    "options": [
     "It stops running",
     "It deletes all its observers",
     "It notifies its list of observers without needing to know their internal details",
     "It becomes a Singleton"
    ],
    "answer": 2,
    "explain": "The subject just calls update() on each subscribed observer; it does not need to know what each observer does with the data."
   },
   {
    "q": "In MVC, which part holds the data and business rules?",
    "options": [
     "The View",
     "The Model",
     "The Router",
     "The Controller"
    ],
    "answer": 1,
    "explain": "The Model represents the application's data and the rules for changing it, separate from display or input handling."
   },
   {
    "q": "What is the role of the Controller in MVC?",
    "options": [
     "It renders the final pixels on screen",
     "It has no responsibility in the pattern",
     "It stores data permanently",
     "It takes user input, updates the Model, and chooses the View"
    ],
    "answer": 3,
    "explain": "The Controller sits between input and the Model/View, reacting to user actions and coordinating the response."
   }
  ]
 },
 "software-engineering-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already met requirements gathering as the first real step of building software. Requirements engineering goes deeper: it is the whole process of eliciting, analysing, specifying, and validating what a system must do, before serious design or coding begins."
    },
    {
     "type": "text",
     "text": "Requirements split into two big families. Functional requirements describe what the system does — 'the system shall let a user reset their password by email.' Non-functional requirements describe how well it does it — performance, security, usability, reliability. A login page that works but takes 30 seconds has met its functional requirement and failed a non-functional one."
    },
    {
     "type": "text",
     "text": "All of this is written down in an SRS: a Software Requirements Specification. A good SRS is unambiguous (only one possible reading), complete (nothing important left out), verifiable (you can actually test whether it was met), and consistent (no requirement contradicts another)."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "SRS excerpt example:\n\nFR-1 (Functional): The system shall allow a registered user to\n reset their password via a link emailed to their registered address.\n\nNFR-1 (Non-functional, Performance): The password-reset email\n shall be sent within 5 seconds of the request, for 95% of requests.\n\nNFR-2 (Non-functional, Security): Reset links shall expire after\n 30 minutes and be usable only once."
    },
    {
     "type": "tip",
     "text": "Spot the difference fast: if a requirement can be answered with 'yes it does that' or 'no it doesn't', it is functional. If it needs a number or quality judgement ('how fast', 'how safe', 'how easy'), it is non-functional."
    },
    {
     "type": "text",
     "text": "Ambiguous requirements are one of the most common causes of project failure — a client says 'fast' and a team assumes 2 seconds while the client meant 200 milliseconds. Writing precise, testable requirements up front is far cheaper than fixing a mismatch after the product is built."
    }
   ],
   "recap": "Requirements engineering elicits and documents functional (what the system does) and non-functional (how well it does it) requirements in an SRS that must be unambiguous, complete, verifiable, and consistent."
  },
  "quiz": [
   {
    "q": "'The system shall respond to a search query within 2 seconds' is an example of a:",
    "options": [
     "Non-functional requirement",
     "Functional requirement",
     "Design pattern",
     "Use case"
    ],
    "answer": 0,
    "explain": "Response time is a quality attribute (performance), which makes it a non-functional requirement."
   },
   {
    "q": "What does the SRS quality attribute 'verifiable' mean?",
    "options": [
     "You can objectively test whether the requirement was satisfied",
     "The requirement is written in legal language",
     "It contains no functional requirements",
     "It was verified by the CEO personally"
    ],
    "answer": 0,
    "explain": "A verifiable requirement can be checked by a concrete test, not just judged subjectively."
   },
   {
    "q": "Which of these is a functional requirement?",
    "options": [
     "The UI shall use a calming color palette",
     "The system shall encrypt data at rest",
     "The system shall be available 99.9% of the time",
     "The system shall allow a user to add an item to a shopping cart"
    ],
    "answer": 3,
    "explain": "Adding an item to a cart is a concrete behaviour the system performs -- a functional requirement."
   }
  ]
 },
 "software-engineering-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before a project starts, someone has to answer an expensive question: how many people-months and how much time will this take? Getting this wrong causes late projects and blown budgets, so software engineering has formal models for estimating effort instead of guessing."
    },
    {
     "type": "text",
     "text": "COCOMO (Constructive Cost Model) estimates effort from the predicted size of the software in KLOC (thousands of lines of code). In its simplest, Basic form: Effort = a × (KLOC)^b person-months, where a and b are constants that depend on the project type — organic (small, familiar team), semidetached (medium), or embattled/embedded (large, strict, complex)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Basic COCOMO for an 'organic' project: a = 2.4, b = 1.05\ndef cocomo_effort(kloc, a=2.4, b=1.05):\n    return a * (kloc ** b)\n\neffort = cocomo_effort(kloc=20)\nprint(round(effort, 1), \"person-months\")  # roughly 55.7 person-months"
    },
    {
     "type": "text",
     "text": "Function Point Analysis takes a different angle: instead of counting lines of code (which vary by language and programmer style), it counts the features the system delivers to the user — inputs, outputs, inquiries, files, and external interfaces — and weighs each by complexity. This makes it useful very early, even before a line of code is designed, and lets you compare systems built in different languages fairly."
    },
    {
     "type": "tip",
     "text": "Remember the contrast: COCOMO needs a size estimate in lines of code (better once design exists), Function Points count user-visible features (usable from the very first requirements)."
    },
    {
     "type": "text",
     "text": "No estimate is perfect. Good teams re-estimate as the project progresses and more is known, rather than treating day-one numbers as a fixed promise -- this is exactly why Agile favors short iterations with frequent re-planning."
    }
   ],
   "recap": "COCOMO estimates project effort in person-months from an expected code size (KLOC) using a formula tuned by project type; Function Points estimate size from user-visible features instead of code, making them usable earlier in the project."
  },
  "quiz": [
   {
    "q": "What does Basic COCOMO use as its main input to estimate effort?",
    "options": [
     "The estimated size of the code in KLOC",
     "The number of user-visible features",
     "The number of team members",
     "The programming language's popularity"
    ],
    "answer": 0,
    "explain": "Basic COCOMO's formula, Effort = a x (KLOC)^b, is driven by the estimated thousands of lines of code."
   },
   {
    "q": "What is the main advantage of Function Point Analysis over COCOMO?",
    "options": [
     "It requires the code to already be written",
     "It only works for embedded systems",
     "It can be used earlier, since it counts user-visible features instead of code",
     "It ignores project complexity"
    ],
    "answer": 2,
    "explain": "Function points are based on requirements-level features, so they can be estimated before any code exists."
   },
   {
    "q": "In COCOMO's project categories, which describes a small, familiar-team project?",
    "options": [
     "Semidetached",
     "Organic",
     "Distributed",
     "Embedded"
    ],
    "answer": 1,
    "explain": "'Organic' projects are small, with an experienced team working in a familiar environment."
   }
  ]
 },
 "software-engineering-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once you know roughly how much effort a project needs, you must turn that into an actual schedule: who does what, and in what order. Two classic tools do this job -- the Work Breakdown Structure (WBS) and the Gantt chart."
    },
    {
     "type": "text",
     "text": "A WBS breaks a big project into smaller and smaller pieces until each piece is a manageable task with a clear owner -- like breaking 'Build an e-commerce site' into 'Design database', 'Build product catalog', 'Build checkout', and each of those into still smaller tasks. It answers 'what work needs to be done?' without yet saying when."
    },
    {
     "type": "text",
     "text": "A Gantt chart takes those tasks and lays them out on a timeline, as horizontal bars showing start date, duration, and dependencies -- which tasks must finish before others can start. It answers 'when does each piece happen, and what is blocking what?'"
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Gantt chart (text sketch), weeks 1-6:\n\nTask                Week: 1 2 3 4 5 6\nDesign database          [==]\nBuild catalog                [====]\nBuild checkout                  [======]\nIntegration testing                    [==]\n\n(catalog waits for the database design to finish;\n testing waits for both catalog and checkout)"
    },
    {
     "type": "tip",
     "text": "Quick way to tell them apart in an exam: WBS = a tree of WHAT work exists; Gantt chart = a timeline bar chart of WHEN each piece happens and how tasks depend on each other."
    },
    {
     "type": "text",
     "text": "The path of dependent tasks that determines the shortest possible total project time is called the critical path -- delay any task on it, and the whole project slips. Managers watch the critical path most closely, because slack time elsewhere can absorb small delays without harming the deadline."
    }
   ],
   "recap": "A WBS decomposes a project into a tree of manageable tasks (what work exists); a Gantt chart schedules those tasks on a timeline with dependencies (when each happens); the critical path is the chain of tasks that sets the minimum project duration."
  },
  "quiz": [
   {
    "q": "What is the main purpose of a Work Breakdown Structure (WBS)?",
    "options": [
     "To break a project down into smaller, manageable tasks",
     "To calculate the project's total cost",
     "To assign colors to each developer",
     "To show task start and end dates on a timeline"
    ],
    "answer": 0,
    "explain": "A WBS decomposes a large project into a hierarchy of smaller, ownable tasks, without scheduling dates yet."
   },
   {
    "q": "What does a Gantt chart add on top of a plain task list?",
    "options": [
     "Timeline bars showing start, duration, and dependencies between tasks",
     "The salary of each team member",
     "Nothing, it is identical to a WBS",
     "The programming language for each task"
    ],
    "answer": 0,
    "explain": "A Gantt chart visualizes when each task happens and which tasks depend on others finishing first."
   },
   {
    "q": "What is the 'critical path' in project scheduling?",
    "options": [
     "The path with the most slack time",
     "The chain of dependent tasks that determines the shortest total project duration",
     "A path that can be skipped safely",
     "The most expensive task in the project"
    ],
    "answer": 1,
    "explain": "Delaying any task on the critical path delays the whole project, since there is no slack to absorb it."
   }
  ]
 },
 "software-engineering-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A risk is something that might go wrong, not something that has gone wrong yet -- a key vendor might miss a deadline, a key developer might quit, a new technology might not scale. Risk management is the discipline of finding these threats early and planning for them, instead of being surprised later."
    },
    {
     "type": "text",
     "text": "The process has four steps. Identification lists what could go wrong. Analysis estimates each risk's probability of happening and its impact if it does. Prioritization ranks risks so the team focuses on the ones that matter most -- usually probability multiplied by impact. Mitigation plans what to do: reduce the chance, reduce the damage, or prepare a fallback."
    },
    {
     "type": "text",
     "text": "Risk response generally falls into four strategies: avoid (change the plan so the risk cannot happen), mitigate (reduce its probability or impact), transfer (shift it to someone else, like buying insurance or outsourcing a risky piece), or accept (acknowledge it and do nothing extra, usually because it is low-impact or unavoidable)."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Simple risk matrix:\n\n                Low impact     High impact\nHigh probability   Monitor        Act NOW (top priority)\nLow probability    Ignore         Have a backup plan ready\n\nExample: 'Key API partner changes pricing' -> high probability,\nmedium impact -> mitigate by negotiating a contract early."
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: risk exposure = probability x impact. A rare but catastrophic risk (server catches fire) and a common but minor risk (a typo in docs) can end up with similar exposure -- rank by the product, not by gut feeling alone."
    },
    {
     "type": "text",
     "text": "Good teams keep a living risk register throughout the project, revisiting it at every milestone, because new risks appear and old ones fade as the project moves forward -- risk management is not a one-time document filed away at the start."
    }
   ],
   "recap": "Risk management identifies, analyses, prioritises (by probability x impact), and responds to project risks using strategies of avoid, mitigate, transfer, or accept, tracked in a living risk register."
  },
  "quiz": [
   {
    "q": "How is risk exposure typically calculated for prioritisation?",
    "options": [
     "Probability plus impact",
     "Only by impact, ignoring probability",
     "Impact divided by team size",
     "Probability multiplied by impact"
    ],
    "answer": 3,
    "explain": "Risk exposure combines how likely a risk is with how bad it would be, usually as probability x impact."
   },
   {
    "q": "Buying insurance or outsourcing a risky task to a specialist is which risk response strategy?",
    "options": [
     "Transfer",
     "Accept",
     "Avoid",
     "Mitigate"
    ],
    "answer": 0,
    "explain": "Transfer shifts the burden of the risk to another party, such as an insurer or a specialist vendor."
   },
   {
    "q": "Choosing to acknowledge a low-impact risk and take no special action is called:",
    "options": [
     "Accept",
     "Avoid",
     "Transfer",
     "Mitigate"
    ],
    "answer": 0,
    "explain": "Accepting a risk means consciously deciding the cost of handling it outweighs its small potential impact."
   }
  ]
 },
 "software-engineering-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Two short questions sit at the heart of quality assurance. Verification asks: 'Are we building the product right?' -- does it follow the design and specification correctly. Validation asks: 'Are we building the right product?' -- does it actually satisfy what the user needed."
    },
    {
     "type": "text",
     "text": "A system can pass verification and still fail validation. Imagine a team builds a report generator that exactly matches its written specification (verified) -- but the specification itself was wrong, and users actually needed a different report entirely (not validated). The code did what it was told; it just was not told the right thing."
    },
    {
     "type": "text",
     "text": "Verification activities happen throughout the project, often without running the code -- code reviews, design walkthroughs, and static analysis all check that an artifact matches its specification. Validation activities usually involve running the actual system against real needs -- acceptance testing with real users, or checking the delivered software against the original business goal."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Quick test:\n\nQ: The code correctly implements every rule written in the SRS.\nA: Verification passed.\n\nQ: The client tries the finished app and says 'this is not what\n   I needed, even though it matches what we wrote down.'\nA: Validation failed."
    },
    {
     "type": "tip",
     "text": "Classic memory aid: Verification = 'right PRODUCT' check against the SPEC (are we building it right). Validation = 'right SPEC' check against the USER'S real need (are we building the right thing). Both start with different questions but must both pass."
    },
    {
     "type": "text",
     "text": "This is exactly why requirements gathering and frequent user feedback matter so much -- Agile's short iterations exist partly to catch validation failures early, instead of discovering after months of 'correct' work that the product itself is wrong."
    }
   ],
   "recap": "Verification checks that the product was built correctly according to its specification; validation checks that the product actually meets the user's real needs -- a system can pass one and still fail the other."
  },
  "quiz": [
   {
    "q": "Which question does verification answer?",
    "options": [
     "Are we building the right product for the user?",
     "Is the product profitable?",
     "Is the team happy?",
     "Are we building the product right, according to its specification?"
    ],
    "answer": 3,
    "explain": "Verification checks conformance to the spec/design -- 'building it right'."
   },
   {
    "q": "A user says the finished software matches the spec exactly, but is not what they actually needed. This is a failure of:",
    "options": [
     "Verification",
     "Coupling",
     "Effort estimation",
     "Validation"
    ],
    "answer": 3,
    "explain": "The product satisfied its spec (verified) but not the real user need (not validated) -- a validation failure."
   },
   {
    "q": "Which activity is typically a verification activity rather than validation?",
    "options": [
     "Asking users if the product solves their problem",
     "A live pilot with real customers",
     "A code review checking the code matches the design document",
     "User acceptance testing"
    ],
    "answer": 2,
    "explain": "Code reviews check an artifact against its specification/design, which is the definition of verification."
   }
  ]
 },
 "software-engineering-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "'Good software' is not just 'software with no bugs.' Quality models break it into measurable attributes so teams can judge quality objectively instead of arguing opinions. McCall's Quality Model, a classic one, groups quality into three views: how the product operates, how it can be revised, and how well it transitions to new environments."
    },
    {
     "type": "text",
     "text": "Operational quality includes correctness (does it do what it's supposed to), reliability (does it keep working without failing), usability (can people actually use it), integrity (is it protected against unauthorized access), and efficiency (does it use resources well). Revision quality includes maintainability, flexibility, and testability. Transition quality includes portability, reusability, and interoperability."
    },
    {
     "type": "text",
     "text": "Since these attributes are abstract, engineers use metrics to make them concrete and measurable. Cyclomatic complexity counts the number of independent paths through a function's code -- a high number (say, above 10) signals code that is hard to test and likely to hide bugs, because there are simply too many branches to check. Defect density (bugs found per thousand lines of code) tracks reliability across releases."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def classify(age, has_ticket, is_vip):\n    # Cyclomatic complexity here = number of decision points + 1\n    if age < 5:\n        return \"free\"\n    elif is_vip:\n        return \"vip\"\n    elif has_ticket:\n        return \"standard\"\n    else:\n        return \"denied\"\n# 3 decision points (if/elif/elif) -> cyclomatic complexity = 4\n# Each path needs at least one test case to be fully covered."
    },
    {
     "type": "tip",
     "text": "Exam shortcut for cyclomatic complexity: count the decision points (if, else-if, for, while, case) and add 1. More decision points means more test cases are required to cover every path."
    },
    {
     "type": "text",
     "text": "Metrics are tools, not goals -- a team that chases a lower complexity number without actually simplifying the logic (say, by hiding branches in unclear tricks) has gamed the metric, not improved the software. The point is always the real quality behind the number."
    }
   ],
   "recap": "Software quality models like McCall's split quality into operational, revision, and transition attributes; metrics such as cyclomatic complexity (branch count + 1) and defect density make those abstract attributes measurable."
  },
  "quiz": [
   {
    "q": "What does cyclomatic complexity measure?",
    "options": [
     "The file's storage size in kilobytes",
     "The number of independent paths through a function's logic",
     "The number of developers who touched the file",
     "The number of lines of code in a file"
    ],
    "answer": 1,
    "explain": "Cyclomatic complexity counts decision points plus one, giving the number of independent execution paths."
   },
   {
    "q": "In McCall's Quality Model, which category does 'maintainability' belong to?",
    "options": [
     "Operational quality",
     "Revision quality",
     "Transition quality",
     "None of these categories"
    ],
    "answer": 1,
    "explain": "Maintainability, flexibility, and testability are grouped under revision quality -- how easily the product can be changed."
   },
   {
    "q": "A function with 4 decision points (if/else-if branches) has what cyclomatic complexity?",
    "options": [
     "4",
     "5",
     "3",
     "8"
    ],
    "answer": 1,
    "explain": "Cyclomatic complexity is decision points plus one, so 4 decision points give a complexity of 5."
   },
   {
    "q": "Why is chasing a lower complexity number without real simplification a problem?",
    "options": [
     "It always makes the code faster",
     "It is not a problem at all",
     "It removes the need for testing",
     "It games the metric while the underlying quality does not actually improve"
    ],
    "answer": 3,
    "explain": "Metrics are proxies for quality; optimizing the number alone without improving real structure defeats their purpose."
   }
  ]
 },
 "software-engineering-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already compared Agile to Waterfall at a high level. Scrum is the most widely used Agile framework in real companies, and it is also one of the most common software engineering topics in placement interviews, so it deserves a close look on its own."
    },
    {
     "type": "text",
     "text": "Scrum organizes work into fixed-length iterations called sprints, usually 1 to 4 weeks. Work is drawn from a Product Backlog -- a prioritized wish-list of features -- into a Sprint Backlog, the slice of work the team commits to finishing in that one sprint."
    },
    {
     "type": "text",
     "text": "Three roles run a Scrum team. The Product Owner represents the customer/business, decides what to build and in what priority order. The Scrum Master protects the process, removes blockers, and shields the team from distractions, without being the team's boss. The Development Team does the actual design, coding, and testing, and is self-organizing -- deciding how to do the work, not just following orders."
    },
    {
     "type": "text",
     "text": "Four ceremonies keep a sprint on track. Sprint Planning picks what work enters the sprint. The Daily Scrum (daily stand-up) is a short, roughly 15-minute sync where each person says what they did, what they will do, and what is blocking them. The Sprint Review demos finished work to stakeholders at the end of the sprint. The Sprint Retrospective is the team looking inward, asking what went well and what to improve next time."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "One Scrum sprint (2 weeks), simplified:\n\nDay 1:        Sprint Planning (pick backlog items for this sprint)\nDay 2-9:      Daily Scrum each morning + actual dev work\nDay 10 (end): Sprint Review (demo to stakeholders)\n              Sprint Retrospective (team improves its own process)\n              -> next sprint's Planning begins"
    },
    {
     "type": "tip",
     "text": "Interview trap: the Scrum Master is NOT a project manager who assigns tasks -- they are a facilitator who removes obstacles. The Product Owner decides WHAT to build; the team decides HOW."
    },
    {
     "type": "text",
     "text": "This is the natural end-point of everything in this track: requirements become a backlog, design and coding happen inside a sprint, testing and quality checks run continuously, and the retrospective closes the loop by feeding lessons straight back into how the team works -- the whole software engineering lifecycle, running on a two-week clock."
    }
   ],
   "recap": "Scrum runs work in fixed sprints pulled from a prioritized Product Backlog, with three roles (Product Owner, Scrum Master, Development Team) and four ceremonies (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) driving continuous delivery and improvement."
  },
  "quiz": [
   {
    "q": "In Scrum, who decides what features go into the Product Backlog and their priority?",
    "options": [
     "Any team member at random",
     "The Product Owner",
     "The Scrum Master",
     "The end customer's competitor"
    ],
    "answer": 1,
    "explain": "The Product Owner represents business/customer priorities and owns the ordering of the Product Backlog."
   },
   {
    "q": "What is the main job of the Scrum Master?",
    "options": [
     "Assigning specific tasks to each developer like a manager",
     "Facilitating the process and removing blockers for the team",
     "Writing all the code personally",
     "Deciding the product's feature priorities"
    ],
    "answer": 1,
    "explain": "The Scrum Master is a facilitator and blocker-remover, not a boss who assigns tasks or sets priorities."
   },
   {
    "q": "Which Scrum ceremony happens at the very end of a sprint to reflect on how the team can improve?",
    "options": [
     "Sprint Retrospective",
     "Sprint Review",
     "Daily Scrum",
     "Sprint Planning"
    ],
    "answer": 0,
    "explain": "The Sprint Retrospective is the team's internal look-back on its own process, separate from the customer-facing Sprint Review."
   },
   {
    "q": "What is the Daily Scrum meant to be?",
    "options": [
     "A demo to external stakeholders",
     "A short daily sync on progress and blockers",
     "A long weekly planning meeting",
     "A formal performance review"
    ],
    "answer": 1,
    "explain": "The Daily Scrum is a brief, roughly 15-minute check-in, not a lengthy or formal meeting."
   }
  ]
 }
}
