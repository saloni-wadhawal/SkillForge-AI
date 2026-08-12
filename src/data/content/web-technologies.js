// Lesson text and quiz questions for "Web Technologies (Full-Stack)".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "web-technologies-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every website is a conversation between two players. The client is the program that asks for things — usually a web browser like Chrome or Firefox running on your laptop or phone. The server is a powerful computer, always on, that holds the website and answers those requests."
    },
    {
     "type": "text",
     "text": "Think of it like ordering food. You (the client) walk up to a counter and ask for a burger. The kitchen (the server) prepares it and hands it back. You don't cook it yourself, and the kitchen doesn't decide what you want — each side has a clear job."
    },
    {
     "type": "text",
     "text": "When you type an address like example.com and press Enter, your browser (client) sends a request across the internet to that site's server. The server finds the right page, packs it up, and sends it back. Your browser then draws it on the screen."
    },
    {
     "type": "tip",
     "text": "Client = asks. Server = answers. Any device can be a client, but a server is usually a machine kept running 24/7 in a data centre."
    },
    {
     "type": "text",
     "text": "One server can talk to thousands of clients at once. That is why a single website like a college portal can serve many students at the same time — the one server keeps answering request after request."
    }
   ],
   "recap": "The client (browser) requests; the server (always-on computer) responds — the basic two-sided conversation of the web."
  },
  "quiz": [
   {
    "q": "In web terms, what does the 'client' usually refer to?",
    "options": [
     "The web browser making requests",
     "The data centre",
     "The internet cable",
     "The database"
    ],
    "answer": 0,
    "explain": "The client is the program (typically a browser) that asks the server for pages and data."
   },
   {
    "q": "What is the main job of a server?",
    "options": [
     "To answer requests and send back data",
     "To type website addresses",
     "To store files only on your phone",
     "To display pages on screen"
    ],
    "answer": 0,
    "explain": "A server's role is to receive requests and respond with the requested pages or data."
   },
   {
    "q": "Why can one server handle many users at once?",
    "options": [
     "Because browsers store the whole website",
     "Because clients never wait",
     "Because it keeps answering many requests continuously",
     "Because each user has their own server"
    ],
    "answer": 2,
    "explain": "A single always-on server processes request after request, serving many clients at the same time."
   }
  ]
 },
 "web-technologies-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When a client and server talk, they follow a shared language called HTTP (HyperText Transfer Protocol). A protocol is just an agreed set of rules — like both people agreeing to speak English so the conversation makes sense."
    },
    {
     "type": "text",
     "text": "Every exchange has two parts: a request from the client and a response from the server. The request says WHAT you want and HOW. The most common methods are GET (fetch something) and POST (send something new, like a form)."
    },
    {
     "type": "code",
     "lang": "http",
     "code": "GET /students/42 HTTP/1.1\nHost: college.edu\nAccept: application/json"
    },
    {
     "type": "text",
     "text": "The server replies with a response that starts with a status code — a three-digit number that tells you how it went. 200 means OK, 404 means Not Found, and 500 means the server hit an error. Knowing these codes helps you debug any website fast."
    },
    {
     "type": "code",
     "lang": "http",
     "code": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{ \"id\": 42, \"name\": \"Asha\" }"
    },
    {
     "type": "tip",
     "text": "Memory hook: 2xx = success, 3xx = redirect, 4xx = you (the client) messed up, 5xx = the server messed up."
    }
   ],
   "recap": "HTTP is the request/response language of the web: methods like GET and POST ask for things, and status codes like 200 or 404 report the result."
  },
  "quiz": [
   {
    "q": "What does the HTTP status code 404 mean?",
    "options": [
     "Server error",
     "Redirect",
     "Not Found",
     "Success"
    ],
    "answer": 2,
    "explain": "404 signals that the requested resource could not be found on the server."
   },
   {
    "q": "Which HTTP method is typically used to fetch a page or data?",
    "options": [
     "POST",
     "PUT",
     "DELETE",
     "GET"
    ],
    "answer": 3,
    "explain": "GET is the standard method for retrieving existing resources from a server."
   },
   {
    "q": "A status code in the 5xx range means...",
    "options": [
     "The request succeeded",
     "The page moved elsewhere",
     "The server encountered an error",
     "The client sent a bad request"
    ],
    "answer": 2,
    "explain": "5xx codes indicate the server failed to fulfil an otherwise valid request."
   },
   {
    "q": "HTTP is best described as...",
    "options": [
     "An agreed set of rules for client-server messages",
     "A type of database",
     "A web browser",
     "A programming language"
    ],
    "answer": 0,
    "explain": "HTTP is a protocol — a shared set of rules for how clients and servers exchange requests and responses."
   }
  ]
 },
 "web-technologies-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A full website has two sides. The front-end is everything you see and touch in the browser — the layout, colours, buttons and animations. The back-end is the hidden engine on the server that stores data, checks passwords and does the real logic."
    },
    {
     "type": "text",
     "text": "Picture a restaurant. The front-end is the dining area: the menu, the tables, the friendly waiter. The back-end is the kitchen and store-room: where the cooking and inventory actually happen, out of the customer's sight."
    },
    {
     "type": "text",
     "text": "The front-end is built with three core languages. HTML gives structure (the skeleton), CSS gives style (the skin and clothes), and JavaScript gives behaviour (the muscles that react to clicks)."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<button onclick=\"greet()\">Say Hi</button>\n<script>\n  function greet() {\n    alert('Hello from the front-end!');\n  }\n</script>"
    },
    {
     "type": "text",
     "text": "The back-end runs on the server in languages like JavaScript (Node.js), Python, Java or PHP. It receives requests, talks to the database, applies rules (like 'only logged-in users can post'), and sends data back to the front-end."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: if a user can see it, it's front-end; if it's a secret or a decision, it belongs on the back-end. Never trust the front-end with security alone."
    }
   ],
   "recap": "Front-end = what users see (HTML, CSS, JavaScript in the browser); back-end = the server-side logic and data handling users never see."
  },
  "quiz": [
   {
    "q": "Which trio of languages powers most front-ends?",
    "options": [
     "HTML, CSS, JavaScript",
     "SQL, PHP, Ruby",
     "HTTP, TCP, DNS",
     "Python, Java, C++"
    ],
    "answer": 0,
    "explain": "HTML (structure), CSS (style) and JavaScript (behaviour) are the core front-end languages."
   },
   {
    "q": "Where should sensitive security checks like password validation happen?",
    "options": [
     "On the back-end (server)",
     "In the CSS file",
     "In the HTML",
     "Only in the browser"
    ],
    "answer": 0,
    "explain": "Security logic must run on the back-end because the front-end can be inspected and tampered with by users."
   },
   {
    "q": "In the restaurant analogy, the kitchen represents the...",
    "options": [
     "Browser",
     "Menu",
     "Back-end",
     "Front-end"
    ],
    "answer": 2,
    "explain": "The kitchen — where hidden work happens — maps to the back-end that users never see directly."
   },
   {
    "q": "What is CSS mainly responsible for?",
    "options": [
     "Storing user data",
     "The visual style and layout",
     "Handling HTTP requests",
     "Running database queries"
    ],
    "answer": 1,
    "explain": "CSS controls the appearance — colours, spacing and layout — of a web page."
   }
  ]
 },
 "web-technologies-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Websites need to remember things — your login, your orders, your messages. That memory lives in a database: an organised store of data on the server that survives even after you close the browser."
    },
    {
     "type": "text",
     "text": "The most common type is a relational database, which arranges data into tables of rows and columns, much like a spreadsheet. A 'students' table might have columns for id, name and email, with one row per student."
    },
    {
     "type": "text",
     "text": "To talk to a relational database we use SQL (Structured Query Language). SQL lets the back-end ask precise questions and make changes without touching the raw files."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name, email\nFROM students\nWHERE id = 42;"
    },
    {
     "type": "text",
     "text": "There are also NoSQL databases like MongoDB that store flexible, document-shaped data instead of strict tables — handy when your data doesn't fit neat rows. The choice depends on the project's needs."
    },
    {
     "type": "tip",
     "text": "The back-end never lets the browser touch the database directly. The browser asks the server, and only the server runs the SQL — this keeps your data safe."
    }
   ],
   "recap": "A database is the website's long-term memory; relational databases use tables and SQL, while NoSQL stores flexible documents — always accessed through the back-end."
  },
  "quiz": [
   {
    "q": "What language is used to query a relational database?",
    "options": [
     "HTTP",
     "SQL",
     "CSS",
     "HTML"
    ],
    "answer": 1,
    "explain": "SQL (Structured Query Language) is the standard language for reading and writing relational database data."
   },
   {
    "q": "How does a relational database organise data?",
    "options": [
     "As web pages",
     "As random text",
     "As image files",
     "As tables of rows and columns"
    ],
    "answer": 3,
    "explain": "Relational databases store data in tables made of rows and columns, similar to a spreadsheet."
   },
   {
    "q": "Which of these is a NoSQL, document-style database?",
    "options": [
     "PostgreSQL",
     "MySQL",
     "MongoDB",
     "SQLite"
    ],
    "answer": 2,
    "explain": "MongoDB stores flexible document data rather than strict relational tables, making it a NoSQL database."
   },
   {
    "q": "Why shouldn't the browser query the database directly?",
    "options": [
     "For safety — only the server should run queries",
     "It would be too colourful",
     "Databases don't use electricity",
     "Browsers can't display data"
    ],
    "answer": 0,
    "explain": "Routing all queries through the back-end protects the data from tampering and exposure."
   }
  ]
 },
 "web-technologies-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An API (Application Programming Interface) is a doorway that lets programs talk to each other. On the web, the front-end uses an API to ask the back-end for data without knowing how the back-end works inside — just like you use a wall socket without knowing the wiring."
    },
    {
     "type": "text",
     "text": "REST is the most popular style for web APIs. It treats everything as a 'resource' with a clear address (URL), and it reuses the HTTP methods you already know: GET to read, POST to create, PUT to update, DELETE to remove."
    },
    {
     "type": "code",
     "lang": "http",
     "code": "GET    /api/students        # list all students\nPOST   /api/students        # add a new student\nGET    /api/students/42     # get student 42\nPUT    /api/students/42     # update student 42\nDELETE /api/students/42     # remove student 42"
    },
    {
     "type": "text",
     "text": "REST APIs usually send data as JSON — a simple, human-readable text format of keys and values. Both the browser and the server understand JSON easily, so it has become the common currency of the web."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "fetch('/api/students/42')\n  .then(res => res.json())\n  .then(student => console.log(student.name));"
    },
    {
     "type": "tip",
     "text": "Good REST design uses nouns in URLs (/students) and lets the HTTP method describe the action. Avoid verbs like /getStudent — the method GET already says it."
    }
   ],
   "recap": "A REST API exposes data as addressable resources, uses HTTP methods (GET/POST/PUT/DELETE) for actions, and exchanges JSON so front-end and back-end can communicate cleanly."
  },
  "quiz": [
   {
    "q": "In a REST API, which HTTP method would you use to create a new record?",
    "options": [
     "DELETE",
     "POST",
     "HEAD",
     "GET"
    ],
    "answer": 1,
    "explain": "POST is used to create new resources on the server in REST design."
   },
   {
    "q": "What data format do most REST APIs use to exchange data?",
    "options": [
     "PDF",
     "CSS",
     "JSON",
     "MP3"
    ],
    "answer": 2,
    "explain": "JSON is the lightweight, human-readable format most commonly used by REST APIs."
   },
   {
    "q": "Which URL follows good REST naming conventions?",
    "options": [
     "/api/students/42",
     "/deleteTheStudent",
     "/getStudentById",
     "/fetchStudentNow"
    ],
    "answer": 0,
    "explain": "REST URLs should name resources with nouns and let the HTTP method express the action."
   },
   {
    "q": "What is an API, in simple terms?",
    "options": [
     "A type of database table",
     "A web browser",
     "A styling language",
     "A doorway letting programs talk to each other"
    ],
    "answer": 3,
    "explain": "An API is an interface that lets one program request services or data from another."
   }
  ]
 },
 "web-technologies-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As apps grow, mixing all your code together becomes a tangled mess. MVC (Model-View-Controller) is a design pattern that keeps a project organised by splitting it into three clear responsibilities."
    },
    {
     "type": "text",
     "text": "The Model is the data and rules — it talks to the database and knows what a 'student' or an 'order' really is. The View is what the user sees — the HTML pages and layout. The Controller is the coordinator in the middle: it takes a request, asks the Model for data, and picks the View to show."
    },
    {
     "type": "text",
     "text": "Think of a news channel. Reporters gathering facts are the Model. The screen the audience watches is the View. The producer deciding what airs and in what order is the Controller — no single part does everyone's job."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Controller (Node.js / Express)\napp.get('/students/:id', async (req, res) => {\n  const student = await Student.findById(req.params.id); // Model\n  res.render('student', { student });                    // View\n});"
    },
    {
     "type": "text",
     "text": "The payoff is separation of concerns: you can redesign the View without touching the database logic, or change the Model without breaking the pages. This makes big projects easier to test, fix and grow as a team."
    },
    {
     "type": "tip",
     "text": "One-line memory: Model = data, View = looks, Controller = decisions. If you're unsure where code goes, ask which of those three jobs it's really doing."
    }
   ],
   "recap": "MVC splits an app into Model (data & rules), View (what users see) and Controller (the coordinator), giving clean separation of concerns that scales."
  },
  "quiz": [
   {
    "q": "In MVC, which part is responsible for the data and database logic?",
    "options": [
     "View",
     "Controller",
     "Model",
     "Router"
    ],
    "answer": 2,
    "explain": "The Model handles the application's data, rules and interaction with the database."
   },
   {
    "q": "What does the Controller do in MVC?",
    "options": [
     "Runs the web browser",
     "Coordinates requests between Model and View",
     "Only styles the page",
     "Stores the raw data"
    ],
    "answer": 1,
    "explain": "The Controller receives requests, works with the Model, and chooses the View to respond with."
   },
   {
    "q": "What is the main benefit of using MVC?",
    "options": [
     "Faster internet",
     "It removes the need for a database",
     "Separation of concerns for easier maintenance",
     "Smaller image files"
    ],
    "answer": 2,
    "explain": "MVC separates data, presentation and logic so each can change independently, easing maintenance."
   },
   {
    "q": "In MVC, what does the View represent?",
    "options": [
     "The request coordinator",
     "The server hardware",
     "The database rules",
     "What the user sees"
    ],
    "answer": 3,
    "explain": "The View is the presentation layer — the pages and layout the user actually sees."
   }
  ]
 },
 "web-technologies-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Now let's assemble everything. A full-stack developer understands the entire journey of a request — from the button a user clicks, through the network, into the server and database, and back to the screen. This final level ties every previous idea together."
    },
    {
     "type": "text",
     "text": "Follow one click end-to-end. You click 'View Profile' in the browser (front-end). JavaScript sends an HTTP GET to a REST API endpoint. The Controller receives it, the Model runs a SQL query against the database, and the result is packed into JSON and returned. The front-end reads the JSON and updates the View. Every arrow in that chain is a topic you have already learned."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Browser (View)\n   | HTTP GET /api/profile/42\n   v\nServer: Controller --> Model --> Database\n                          |\n                          v  JSON { name, email }\nBrowser updates the page"
    },
    {
     "type": "text",
     "text": "The 'stack' is the full set of technologies chosen for each layer. A popular one is the MERN stack: MongoDB (database), Express (back-end framework), React (front-end library) and Node.js (server runtime) — all using JavaScript top to bottom."
    },
    {
     "type": "text",
     "text": "Beyond writing code, full-stack work includes deployment (putting the app on a live server or cloud), authentication (verifying who a user is), and security (protecting data in transit with HTTPS and guarding against attacks like SQL injection). These turn a demo into a real, trustworthy product."
    },
    {
     "type": "tip",
     "text": "You don't need to master every layer equally on day one. Start by tracing one feature all the way through the stack — that single mental model is what makes a developer 'full-stack'."
    }
   ],
   "recap": "Full-stack means owning the whole request journey — front-end, HTTP, back-end, database and API together — plus deployment, auth and security that make an app production-ready."
  },
  "quiz": [
   {
    "q": "What does the MERN stack stand for?",
    "options": [
     "Memory, Ethernet, RAM, Node",
     "MySQL, Elixir, Rails, Nginx",
     "MongoDB, Express, React, Node.js",
     "Model, Endpoint, REST, Network"
    ],
    "answer": 2,
    "explain": "MERN is MongoDB, Express, React and Node.js — a JavaScript-based full-stack combination."
   },
   {
    "q": "In a full request journey, which order is correct?",
    "options": [
     "CSS → SQL → JSON → HTML",
     "Database → Browser → Controller → Model",
     "Browser → HTTP → Controller → Model → Database",
     "Model → View → HTTP → Database"
    ],
    "answer": 2,
    "explain": "A request flows from the browser over HTTP to the controller, then the model, then the database, and back."
   },
   {
    "q": "Which of these is a production concern beyond just writing features?",
    "options": [
     "Naming variables",
     "Adding comments",
     "Security and authentication",
     "Choosing button colours"
    ],
    "answer": 2,
    "explain": "Security and authentication are essential for turning working code into a trustworthy, production-ready app."
   },
   {
    "q": "What best describes a full-stack developer?",
    "options": [
     "Someone who understands the whole request journey, front to back",
     "Someone who designs logos",
     "Someone who only styles pages",
     "Someone who only writes SQL"
    ],
    "answer": 0,
    "explain": "A full-stack developer works across every layer, understanding how the front-end, back-end and database connect."
   }
  ]
 },
 "web-technologies-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Early websites reloaded the whole page for every click. A Single Page Application (SPA) loads one HTML page once, then uses JavaScript to swap content in and out without ever asking the server for a fresh page. This makes apps feel instant, like a native app."
    },
    {
     "type": "text",
     "text": "Frameworks like React, Angular and Vue exist to manage this. Instead of you manually finding elements and updating them, you describe what the page should look like for a given piece of data, and the framework updates the actual page for you when that data changes."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A tiny React-style component\nfunction Greeting({ name }) {\n  return `<h1>Hello, ${name}!</h1>`;\n}\n// The framework re-runs this whenever 'name' changes\n// and patches only the changed part of the real page."
    },
    {
     "type": "text",
     "text": "This is called declarative UI: you declare the desired result, not the step-by-step commands to reach it. The old way — directly using document.getElementById and changing it line by line — is called imperative, and it gets messy fast as an app grows."
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: SPA = one page load, JavaScript handles the rest. Interviewers often ask 'why not just reload the page' — the answer is speed and a smoother user experience."
    }
   ],
   "recap": "SPAs load once and let JavaScript update the page directly; frameworks like React let you describe the UI declaratively instead of updating it step by step."
  },
  "quiz": [
   {
    "q": "What is a Single Page Application (SPA)?",
    "options": [
     "A website with only one image",
     "An app that loads once and updates content with JavaScript, without full reloads",
     "A page that reloads fully on every click",
     "A page that cannot use CSS"
    ],
    "answer": 1,
    "explain": "An SPA loads a single HTML page and uses JavaScript to update the content dynamically, avoiding full page reloads."
   },
   {
    "q": "What does 'declarative UI' mean, as used by frameworks like React?",
    "options": [
     "You manually update each HTML element step by step",
     "You write only CSS, no JavaScript",
     "You describe what the UI should look like for given data, and the framework updates it",
     "The UI never changes once written"
    ],
    "answer": 2,
    "explain": "Declarative UI means describing the desired result; the framework figures out how to update the real page to match."
   },
   {
    "q": "Which of these is a front-end JavaScript framework/library?",
    "options": [
     "MySQL",
     "MongoDB",
     "Express",
     "React"
    ],
    "answer": 3,
    "explain": "React is a front-end library for building user interfaces; Express, MongoDB and MySQL are back-end/database tools."
   }
  ]
 },
 "web-technologies-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Modern front-end apps are built from components — small, self-contained pieces of UI that combine markup, logic and sometimes their own styling. A button, a search bar, and a whole product card can each be one component, reused wherever needed."
    },
    {
     "type": "text",
     "text": "Every component can hold state — data that can change over time and, when it changes, causes the component to redraw itself. A counter's current number, whether a menu is open, or the text typed into a search box are all state."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// React state example\nfunction Counter() {\n  const [count, setCount] = React.useState(0);\n  return `<button onClick=${() => setCount(count + 1)}>\n            Clicked ${count} times\n          </button>`;\n}"
    },
    {
     "type": "text",
     "text": "Data usually flows one way: from a parent component down to its children, through props (short for properties). A parent passes a value; the child displays it but does not change it directly. This one-way flow keeps large apps predictable — you always know where a value came from."
    },
    {
     "type": "tip",
     "text": "Common interview question: 'What is the difference between state and props?' State is owned and changed by the component itself; props are handed down from a parent and treated as read-only by the child."
    }
   ],
   "recap": "Components are reusable UI building blocks that hold their own state; data flows down to children through read-only props, keeping apps predictable."
  },
  "quiz": [
   {
    "q": "What is 'state' in a component-based UI framework?",
    "options": [
     "The server's database connection",
     "The CSS file attached to a component",
     "A fixed value that never changes",
     "Data that can change over time and triggers a re-render when it does"
    ],
    "answer": 3,
    "explain": "State is data owned by a component that changes over time; when it changes, the component re-renders to reflect the new value."
   },
   {
    "q": "How does data usually flow between a parent and child component?",
    "options": [
     "It never flows; each component is isolated",
     "Only from child to parent",
     "Randomly in both directions",
     "From parent to child via props"
    ],
    "answer": 3,
    "explain": "Data typically flows one way, from parent to child, through props, which keeps the app's behaviour predictable."
   },
   {
    "q": "What is a 'prop' in a component framework?",
    "options": [
     "A value passed from a parent component that the child treats as read-only",
     "A type of HTTP request",
     "A CSS class name",
     "A database table"
    ],
    "answer": 0,
    "explain": "Props are values passed down from a parent to a child component; the child reads them but does not modify them directly."
   }
  ]
 },
 "web-technologies-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "JavaScript was originally built only to run inside browsers. Node.js changed that by taking Chrome's JavaScript engine (V8) and letting it run directly on a computer, outside any browser. This means the same language you use for buttons and forms can now also run your server."
    },
    {
     "type": "text",
     "text": "Node ships with npm (Node Package Manager), a huge public library of reusable code called packages. Instead of writing everything yourself, you install a package that already solves your problem — sending emails, parsing dates, talking to a database, and so on."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A minimal Node.js web server, no framework needed\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello from Node.js!');\n});\n\nserver.listen(3000, () => console.log('Server running on port 3000'));"
    },
    {
     "type": "text",
     "text": "Every Node project has a package.json file, which lists the project's name, version, and dependencies (the packages it needs). Running 'npm install' reads this file and downloads everything listed into a node_modules folder."
    },
    {
     "type": "tip",
     "text": "Node.js is single-threaded but handles many requests at once using an event loop and non-blocking I/O — it doesn't wait idly for a slow file read or database call, it moves on and comes back when the result is ready."
    }
   ],
   "recap": "Node.js runs JavaScript outside the browser, typically for servers; npm is its package manager, and package.json tracks a project's dependencies."
  },
  "quiz": [
   {
    "q": "What is Node.js?",
    "options": [
     "A web browser",
     "A JavaScript runtime that lets JavaScript run outside the browser",
     "A type of database",
     "A CSS framework"
    ],
    "answer": 1,
    "explain": "Node.js runs JavaScript's engine outside a browser, commonly used to build servers and command-line tools."
   },
   {
    "q": "What does npm stand for and do?",
    "options": [
     "Node Package Manager; installs and manages reusable code packages",
     "New Page Model; renders web pages",
     "Network Protocol Manager; manages internet connections",
     "Node Process Monitor; tracks CPU usage"
    ],
    "answer": 0,
    "explain": "npm is Node's package manager, used to install and manage third-party JavaScript packages."
   },
   {
    "q": "What is the purpose of package.json in a Node project?",
    "options": [
     "It lists the project's name, version and dependencies",
     "It replaces the need for a database",
     "It stores the compiled HTML output",
     "It is the browser's cache file"
    ],
    "answer": 0,
    "explain": "package.json describes the project and lists its dependencies, which npm install then downloads."
   }
  ]
 },
 "web-technologies-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Writing a raw Node.js server for every route quickly becomes repetitive. Express is a lightweight framework built on top of Node that makes handling routes, requests and responses far simpler, which is why it's the most common choice for a Node back-end."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => res.send('Home page'));\napp.get('/students/:id', (req, res) => {\n  res.json({ id: req.params.id, name: 'Aditi' });\n});\n\napp.listen(3000);"
    },
    {
     "type": "text",
     "text": "Express is built around middleware: functions that sit between the incoming request and the final response, each one able to inspect or change the request, then pass it along by calling next(). A logging middleware might print every request; an authentication middleware might block requests without a valid login."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "function logger(req, res, next) {\n  console.log(`${req.method} ${req.url}`);\n  next(); // pass control to the next middleware or route\n}\napp.use(logger);"
    },
    {
     "type": "tip",
     "text": "If a middleware forgets to call next(), the request hangs forever with no response. This is one of the most common Express bugs beginners hit — always call next() unless you intend to end the response there."
    }
   ],
   "recap": "Express simplifies routing on top of Node.js; middleware functions process requests in a chain, each calling next() to pass control forward."
  },
  "quiz": [
   {
    "q": "What is Express.js?",
    "options": [
     "A front-end CSS library",
     "A lightweight framework built on Node.js that simplifies routing and request handling",
     "A database engine",
     "A type of web browser"
    ],
    "answer": 1,
    "explain": "Express is a minimal framework on top of Node.js that makes defining routes and handling requests much easier."
   },
   {
    "q": "In Express, what is 'middleware'?",
    "options": [
     "A CSS layout technique",
     "The middle layer of the OSI model",
     "A function that runs between the request and the final response, and can pass control onward with next()",
     "A database table in the middle of a schema"
    ],
    "answer": 2,
    "explain": "Middleware functions inspect or modify requests/responses and call next() to pass control to the following middleware or route handler."
   },
   {
    "q": "What happens if a middleware function never calls next() and never sends a response?",
    "options": [
     "Express automatically calls next() for you",
     "The server crashes immediately",
     "The request completes instantly",
     "The request hangs, because nothing ever responds to the client"
    ],
    "answer": 3,
    "explain": "Without a call to next() or a response being sent, the request chain stalls and the client waits indefinitely."
   }
  ]
 },
 "web-technologies-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know a REST API lets a front-end talk to a back-end over HTTP. Designing one well is its own skill, and it's a favourite interview topic. Good REST APIs organise everything around resources — nouns like /students or /orders — not actions like /getStudent."
    },
    {
     "type": "text",
     "text": "The HTTP method says what to do to that resource: GET reads it, POST creates a new one, PUT or PATCH updates it, and DELETE removes it. So GET /students/5 reads student 5, and DELETE /students/5 removes them — the URL stays a noun, the verb comes from the method."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "GET    /students        -> list all students\nGET    /students/5      -> get student 5\nPOST   /students         -> create a new student\nPUT    /students/5      -> replace student 5's data\nDELETE /students/5      -> delete student 5"
    },
    {
     "type": "text",
     "text": "Status codes complete the picture: 200 OK for success, 201 Created after a successful POST, 400 Bad Request for invalid input, 401/403 for auth problems, and 404 Not Found when the resource doesn't exist. Returning the right code lets the front-end react correctly without guessing."
    },
    {
     "type": "tip",
     "text": "A REST API should be stateless: each request must carry everything the server needs (like a login token) because the server does not remember your previous request. This is a very common exam definition — write it down word for word if asked."
    }
   ],
   "recap": "Good REST APIs name resources as nouns, use HTTP methods as verbs, return meaningful status codes, and stay stateless — each request is self-contained."
  },
  "quiz": [
   {
    "q": "In good REST API design, what should a URL like /students represent?",
    "options": [
     "A CSS class",
     "A single database column",
     "A resource (a noun), with the HTTP method deciding the action",
     "An action to perform"
    ],
    "answer": 2,
    "explain": "REST URLs should name resources as nouns; the HTTP method (GET, POST, etc.) supplies the action."
   },
   {
    "q": "Which HTTP status code should a successful POST that creates a new resource typically return?",
    "options": [
     "200",
     "201",
     "404",
     "500"
    ],
    "answer": 1,
    "explain": "201 Created is the conventional response for a successful creation via POST."
   },
   {
    "q": "What does it mean for a REST API to be 'stateless'?",
    "options": [
     "It never uses a database",
     "It only works over HTTPS",
     "It cannot return JSON",
     "Each request must contain all information the server needs; the server keeps no memory of prior requests"
    ],
    "answer": 3,
    "explain": "Statelessness means every request is self-contained; the server does not rely on remembering earlier requests from the same client."
   }
  ]
 },
 "web-technologies-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Fetching data from a server takes time, and JavaScript refuses to freeze the whole page waiting for it. Instead, it runs such tasks asynchronously: it starts the task, keeps doing other things, and comes back to handle the result once it's ready."
    },
    {
     "type": "text",
     "text": "The oldest pattern is a callback: a function you pass in to be run later. Nested callbacks for several dependent steps become hard to read, sometimes called 'callback hell'. Promises fixed this by representing 'a value that will arrive later' as an object you can chain with .then()."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "fetch('/api/students/5')\n  .then(response => response.json())\n  .then(data => console.log(data.name))\n  .catch(error => console.error('Failed:', error));"
    },
    {
     "type": "text",
     "text": "async/await is newer syntax that lets promise-based code read almost like normal, top-to-bottom code, while still being non-blocking underneath."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "async function loadStudent(id) {\n  try {\n    const response = await fetch(`/api/students/${id}`);\n    const data = await response.json();\n    console.log(data.name);\n  } catch (error) {\n    console.error('Failed:', error);\n  }\n}"
    },
    {
     "type": "tip",
     "text": "await only works inside a function marked async. A very common mistake is writing await at the top level of a normal function and getting a syntax error — check the function keyword first."
    }
   ],
   "recap": "Async JavaScript avoids freezing the page while waiting for slow operations; promises and async/await make chained async steps readable and manageable."
  },
  "quiz": [
   {
    "q": "Why does JavaScript run network calls asynchronously?",
    "options": [
     "To make the code longer",
     "Because the browser cannot run synchronous code",
     "To avoid using HTTP",
     "So the page does not freeze while waiting for a slow response"
    ],
    "answer": 3,
    "explain": "Asynchronous execution lets the page stay responsive instead of freezing during slow operations like network requests."
   },
   {
    "q": "What is a JavaScript Promise?",
    "options": [
     "A guaranteed error-free function",
     "A synonym for a callback that never runs",
     "A CSS animation",
     "An object representing a value that will be available later, either resolved or rejected"
    ],
    "answer": 3,
    "explain": "A Promise represents an eventual result of an asynchronous operation, which can succeed (resolve) or fail (reject)."
   },
   {
    "q": "Where can the 'await' keyword be used?",
    "options": [
     "Only in HTML files",
     "Anywhere in any function",
     "Only inside a function declared with async",
     "Only inside a for loop"
    ],
    "answer": 2,
    "explain": "await pauses execution until a promise settles, but it can only be used inside a function marked async."
   }
  ]
 },
 "web-technologies-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "HTTP is stateless by design — each request arrives with no memory of the last one. But real apps need to remember you're logged in as you move between pages. Several browser storage tools solve this, each with a different purpose and lifespan."
    },
    {
     "type": "text",
     "text": "A cookie is a small piece of data the server asks the browser to store, which the browser then automatically resends with every future request to that site. Cookies are how a server recognises you're the same user on your next request, often by storing a session ID."
    },
    {
     "type": "text",
     "text": "A session is server-side memory tied to that cookie's ID — the server keeps your login state, cart contents, and so on, in its own storage, looked up using the ID the cookie carries. Local Storage, in contrast, is data saved directly in the browser that is never sent to the server automatically, and stays even after the browser closes."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Local Storage: browser-only, not sent with requests\nlocalStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\n\n// sessionStorage is similar but clears when the tab closes\nsessionStorage.setItem('draftText', 'Hello');"
    },
    {
     "type": "tip",
     "text": "Exam distinction to memorise: cookies travel with every HTTP request automatically; localStorage and sessionStorage never leave the browser unless your JavaScript explicitly sends them."
    }
   ],
   "recap": "Cookies let the server recognise a returning browser and back server-side sessions; localStorage and sessionStorage store data purely in the browser and are never auto-sent to the server."
  },
  "quiz": [
   {
    "q": "What makes a cookie different from localStorage?",
    "options": [
     "Cookies can only store images",
     "Cookies are automatically sent with every HTTP request to the site; localStorage is not",
     "localStorage is sent with every request; cookies are not",
     "There is no difference"
    ],
    "answer": 1,
    "explain": "Cookies are attached automatically to outgoing requests to the matching site, while localStorage stays purely client-side unless explicitly sent."
   },
   {
    "q": "What is a server-side session typically used for?",
    "options": [
     "Remembering a logged-in user's state between stateless HTTP requests, using data linked to a cookie's ID",
     "Compiling JavaScript",
     "Rendering images faster",
     "Storing CSS styles"
    ],
    "answer": 0,
    "explain": "A session lets the server keep track of a user's state (like being logged in) across otherwise stateless HTTP requests, using an ID stored in a cookie."
   },
   {
    "q": "How long does data in sessionStorage typically persist?",
    "options": [
     "Only until the current browser tab is closed",
     "Forever, across all future visits",
     "Only for one HTTP request",
     "It never persists at all"
    ],
    "answer": 0,
    "explain": "sessionStorage data is cleared automatically when the tab or window is closed, unlike localStorage which persists longer."
   }
  ]
 },
 "web-technologies-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Authentication answers 'who are you?' — proving identity, usually with a username and password. Authorization answers a different question: 'what are you allowed to do?' — a logged-in student and a logged-in admin are both authenticated, but only one is authorized to delete a course."
    },
    {
     "type": "text",
     "text": "Passwords should never be stored as plain text. Instead, the server stores a hash — the scrambled output of a one-way function — and compares hashes at login time. Even if the database leaks, attackers only see hashes, not real passwords."
    },
    {
     "type": "text",
     "text": "For APIs, a popular approach is the JSON Web Token (JWT). After login, the server issues a signed token containing the user's identity. The client sends this token with every future request instead of a cookie-backed session, and the server verifies its signature to trust it without needing to look anything up in a database."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Client sends the JWT on every request\nfetch('/api/profile', {\n  headers: { Authorization: `Bearer ${token}` }\n});"
    },
    {
     "type": "tip",
     "text": "Common trap question: 'Is authentication the same as authorization?' No — always answer with the identity vs permission distinction, and give an example, exactly as above."
    }
   ],
   "recap": "Authentication verifies who a user is (often via hashed passwords); authorization decides what that verified user is allowed to do; JWTs are a common token-based way to carry identity between requests."
  },
  "quiz": [
   {
    "q": "What is the difference between authentication and authorization?",
    "options": [
     "Authentication verifies identity; authorization decides what that identity is permitted to do",
     "They mean exactly the same thing",
     "Authorization happens before authentication always",
     "Authentication is only for admins"
    ],
    "answer": 0,
    "explain": "Authentication confirms who a user is; authorization then determines what actions that user is permitted to perform."
   },
   {
    "q": "Why does a server store a hash of a password instead of the password itself?",
    "options": [
     "Because plain text passwords are illegal",
     "Hashing makes login faster",
     "Hashes take up less storage space",
     "So that even if the database is leaked, the real passwords are not exposed"
    ],
    "answer": 3,
    "explain": "Storing a one-way hash protects users even if the database is compromised, since the original password cannot be recovered from the hash."
   },
   {
    "q": "What is a JWT (JSON Web Token) commonly used for?",
    "options": [
     "Storing images in a database",
     "Formatting CSS styles",
     "Carrying a signed identity between the client and server without a server-side session lookup",
     "Compiling JavaScript into machine code"
    ],
    "answer": 2,
    "explain": "A JWT is a signed token the client sends with requests so the server can verify identity without maintaining server-side session state."
   }
  ]
 },
 "web-technologies-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know a website's data usually lives in a database. In practice, a full-stack developer must choose between two broad families: SQL (relational) databases like MySQL or PostgreSQL, and NoSQL databases like MongoDB."
    },
    {
     "type": "text",
     "text": "SQL databases store data in fixed tables with rows and columns, defined by a strict schema decided in advance, and they enforce relationships between tables using keys. NoSQL databases, especially document stores like MongoDB, store flexible, JSON-like documents that don't need every record to share the exact same shape."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A MongoDB-style document — flexible shape\nconst studentDoc = {\n  \"_id\": 101,\n  \"name\": \"Aditi\",\n  \"skills\": [\"HTML\", \"CSS\", \"JS\"]\n};\n// A SQL row instead lives in a fixed 'students' table\n// with predefined columns: id, name, email, ..."
    },
    {
     "type": "text",
     "text": "Writing raw SQL queries by hand in every route gets repetitive and error-prone. An ORM (Object-Relational Mapper), such as Sequelize for SQL or Mongoose for MongoDB, lets you work with plain JavaScript objects and methods instead, and it generates the underlying queries for you."
    },
    {
     "type": "tip",
     "text": "Interview one-liner: choose SQL when your data is highly structured and relationships matter (banking, inventory); choose NoSQL when your data's shape varies or you need to scale flexibly (logs, content feeds)."
    }
   ],
   "recap": "SQL databases enforce a strict, related schema; NoSQL databases store flexible documents; ORMs like Sequelize or Mongoose let code talk to either without writing raw queries by hand."
  },
  "quiz": [
   {
    "q": "What is a key difference between SQL and NoSQL databases?",
    "options": [
     "SQL uses fixed tables and a strict schema; NoSQL (like MongoDB) stores flexible, JSON-like documents",
     "SQL databases cannot store text",
     "NoSQL databases cannot be used on the web",
     "There is no real difference"
    ],
    "answer": 0,
    "explain": "SQL databases require a predefined table structure, while NoSQL document stores allow records with varying shapes."
   },
   {
    "q": "What does an ORM (Object-Relational Mapper) do?",
    "options": [
     "It replaces HTTP with a faster protocol",
     "It lets you interact with a database using objects and methods instead of writing raw queries",
     "It compresses images for the web",
     "It designs the front-end layout"
    ],
    "answer": 1,
    "explain": "An ORM like Sequelize or Mongoose maps database records to programming objects, generating the queries behind the scenes."
   },
   {
    "q": "When would a NoSQL database like MongoDB typically be preferred over SQL?",
    "options": [
     "When data's shape varies or the app needs flexible, easy horizontal scaling",
     "When the app never stores any data",
     "Only for storing images, never text",
     "When data has a rigid, unchanging structure with many strict relationships"
    ],
    "answer": 0,
    "explain": "NoSQL databases suit flexible or varying data shapes and workloads that need to scale out easily, such as logs or content feeds."
   }
  ]
 },
 "web-technologies-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As soon as a website accepts input from users, it opens the door to attacks. Three classic vulnerabilities appear again and again in exams and real breaches: Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection."
    },
    {
     "type": "text",
     "text": "XSS happens when a site displays user input as raw HTML without escaping it, letting an attacker inject a `<script>` tag that runs in other visitors' browsers. SQL Injection happens when user input is pasted directly into a SQL query string, letting an attacker rewrite the query itself."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// VULNERABLE: user input goes straight into the query\nconst query = `SELECT * FROM users WHERE name = '${input}'`;\n// If input is:  ' OR '1'='1\n// the query becomes: SELECT * FROM users WHERE name = '' OR '1'='1'\n// which matches every row!\n\n// SAFE: use parameterised queries\ndb.query('SELECT * FROM users WHERE name = ?', [input]);"
    },
    {
     "type": "text",
     "text": "CSRF tricks a logged-in user's browser into sending an unwanted request to a site they're authenticated on, using their existing session cookie, without them meaning to — for example, a hidden form on a malicious page that submits a money transfer. Anti-CSRF tokens, unique per session, defend against this by rejecting requests that don't include the right token."
    },
    {
     "type": "tip",
     "text": "The universal fix for XSS and SQL Injection is the same idea: never trust raw user input. Escape it before displaying as HTML, and use parameterised queries instead of string concatenation for SQL."
    }
   ],
   "recap": "XSS injects malicious scripts through unescaped input, SQL Injection rewrites queries through unsanitised input, and CSRF abuses a logged-in session to send unwanted requests; validating and escaping input, and using parameterised queries and CSRF tokens, defend against all three."
  },
  "quiz": [
   {
    "q": "What is Cross-Site Scripting (XSS)?",
    "options": [
     "A way to speed up CSS loading",
     "A method for compressing web pages",
     "A type of database index",
     "An attack where malicious script is injected into a page because user input wasn't escaped"
    ],
    "answer": 3,
    "explain": "XSS occurs when unescaped user input is rendered as HTML/JavaScript, letting attackers run scripts in other users' browsers."
   },
   {
    "q": "What is the safest way to prevent SQL Injection?",
    "options": [
     "Concatenating user input directly into the SQL string",
     "Only using NoSQL databases",
     "Disabling the database entirely",
     "Using parameterised queries instead of building SQL strings from raw input"
    ],
    "answer": 3,
    "explain": "Parameterised queries keep user input separate from the SQL command structure, preventing it from altering the query's logic."
   },
   {
    "q": "What does a CSRF attack rely on?",
    "options": [
     "The attacker knowing the victim's password",
     "The victim never having visited the site before",
     "The victim using an outdated CPU",
     "The victim's browser automatically sending their existing session cookie with a forged request"
    ],
    "answer": 3,
    "explain": "CSRF exploits the browser automatically attaching a logged-in user's session cookie to a request the attacker tricked them into sending."
   }
  ]
 },
 "web-technologies-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Browsers enforce the Same-Origin Policy: by default, JavaScript running on one website cannot read data from a different website. Two URLs share an 'origin' only if their protocol, domain and port all match exactly — https://app.com and http://app.com are already different origins."
    },
    {
     "type": "text",
     "text": "This is a security feature, not a bug: without it, a malicious page could silently read your email or bank data from another open tab using your logged-in session. But it also blocks legitimate cases, like a front-end on one domain calling an API on another."
    },
    {
     "type": "text",
     "text": "CORS (Cross-Origin Resource Sharing) is how a server opts back in. The server adds a response header telling the browser 'requests from this other origin are allowed', and the browser then permits the JavaScript to read the response."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Express server allowing a specific front-end origin\napp.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', 'https://myapp.com');\n  next();\n});"
    },
    {
     "type": "tip",
     "text": "A very common beginner confusion: CORS errors show up in the browser console, but the fix must be made on the server, by adding the right header — the browser is only enforcing a rule the server needs to relax."
    }
   ],
   "recap": "The Same-Origin Policy blocks JavaScript from one origin reading another origin's data by default; CORS headers, set by the server, allow specific cross-origin requests through."
  },
  "quiz": [
   {
    "q": "What does the Same-Origin Policy do by default?",
    "options": [
     "It blocks all internet access",
     "It speeds up page loading",
     "It only affects CSS files",
     "It prevents JavaScript on one origin from reading data from a different origin"
    ],
    "answer": 3,
    "explain": "The Same-Origin Policy is a browser security rule that stops scripts from one origin accessing resources on a different origin without permission."
   },
   {
    "q": "Which of these pairs counts as a different origin from https://app.com?",
    "options": [
     "https://app.com (identical)",
     "http://app.com, because the protocol differs",
     "https://app.com with a trailing slash",
     "The exact same URL loaded twice"
    ],
    "answer": 1,
    "explain": "Origin is defined by protocol, domain and port together; changing the protocol from https to http makes it a different origin."
   },
   {
    "q": "How does CORS let a browser allow a legitimate cross-origin request?",
    "options": [
     "The server includes a response header permitting the specific origin",
     "CORS disables HTTPS",
     "The client removes the Same-Origin Policy",
     "The browser ignores all origin rules automatically"
    ],
    "answer": 0,
    "explain": "CORS works by the server sending headers (like Access-Control-Allow-Origin) that tell the browser a given cross-origin request is allowed."
   }
  ]
 },
 "web-technologies-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A working app isn't enough if it's slow — users abandon pages that take too long to load. Caching is the single biggest performance lever available: storing a copy of something so the next request can skip the expensive work of generating it again."
    },
    {
     "type": "text",
     "text": "Browser caching stores static files, like images and CSS, on the user's own device using response headers like Cache-Control, so a repeat visit doesn't re-download them. Server-side caching, often using a fast in-memory store like Redis, saves the result of an expensive database query so the next identical request is answered instantly."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Cache-Control: max-age=86400\n# tells the browser: reuse this file for 86400 seconds (1 day)\n# before asking the server again"
    },
    {
     "type": "text",
     "text": "A CDN (Content Delivery Network) takes caching further by copying static files to servers physically closer to each user around the world, so a user in Mumbai downloads images from a nearby server instead of one on the other side of the planet. Other common wins include compressing images, minifying JavaScript/CSS (removing whitespace and shortening names), and lazy loading — only fetching content, like images further down a page, once the user actually scrolls near it."
    },
    {
     "type": "tip",
     "text": "Interview tip: if asked 'how would you speed up a slow web page', mention at least three levers — caching, a CDN, and lazy loading — rather than just one. Interviewers are checking that you see performance as a system, not a single trick."
    }
   ],
   "recap": "Caching, CDNs, minification and lazy loading are the main levers for web performance; each avoids redoing or re-downloading work that has already been done."
  },
  "quiz": [
   {
    "q": "What does the Cache-Control response header do?",
    "options": [
     "It tells the browser how long it can reuse a cached copy of a file before asking again",
     "It encrypts the page",
     "It blocks all future requests",
     "It deletes files from the server"
    ],
    "answer": 0,
    "explain": "Cache-Control tells the browser how long it may serve a cached copy of a resource without re-requesting it from the server."
   },
   {
    "q": "What is the main benefit of a CDN (Content Delivery Network)?",
    "options": [
     "It automatically fixes security bugs",
     "It serves static content from servers physically closer to each user, reducing load time",
     "It replaces the need for a database",
     "It writes your JavaScript for you"
    ],
    "answer": 1,
    "explain": "A CDN distributes copies of static content across servers worldwide, so users download from a nearby server instead of one far away."
   },
   {
    "q": "What is 'lazy loading'?",
    "options": [
     "Only loading content, like images, when the user is about to need it, such as scrolling near it",
     "Disabling JavaScript entirely",
     "Loading every resource immediately on page load, regardless of need",
     "A way to slow down a page deliberately"
    ],
    "answer": 0,
    "explain": "Lazy loading defers fetching resources until they are actually needed, reducing the initial page load time."
   }
  ]
 },
 "web-technologies-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Writing a working app on your laptop is only half the job — it must also be deployed: put on a server that is always on and reachable by the public internet. Modern deployment usually uses containers, most commonly Docker, which package an app together with everything it needs to run, so it behaves identically on any machine."
    },
    {
     "type": "text",
     "text": "As traffic grows, a single server eventually can't keep up. Scaling up means moving to a bigger, more powerful server; scaling out means running many copies of the app across multiple servers instead, with a load balancer in front deciding which server handles each incoming request."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "                +-----------+\n Users -------> | Load      | ---> Server 1\n                | Balancer  | ---> Server 2\n                +-----------+ ---> Server 3"
    },
    {
     "type": "text",
     "text": "Large applications are often split into microservices: small, independent services (a payments service, a login service, a search service) that each do one job and talk to each other over the network, rather than one giant monolithic codebase doing everything. This lets teams deploy, scale and update each part separately, at the cost of more moving parts to coordinate."
    },
    {
     "type": "tip",
     "text": "A monolith is simpler to start and easier to debug; microservices scale and deploy independently but add network complexity. If an interviewer asks you to pick one for a small student project, defend the monolith — that's the technically correct answer at small scale."
    }
   ],
   "recap": "Deployment puts an app on a live server, often via containers like Docker; scaling out with load balancers and splitting into microservices are how apps handle growing traffic and team size, at the cost of added complexity."
  },
  "quiz": [
   {
    "q": "What does a container technology like Docker mainly provide?",
    "options": [
     "Free cloud hosting",
     "A way to package an app with everything it needs so it runs identically on any machine",
     "A faster CPU",
     "A new programming language"
    ],
    "answer": 1,
    "explain": "Containers bundle an application with its dependencies and environment so it behaves consistently across different machines."
   },
   {
    "q": "What is the role of a load balancer when 'scaling out'?",
    "options": [
     "It deletes old requests to save space",
     "It replaces the need for a database",
     "It distributes incoming requests across multiple server copies",
     "It compiles the application's code"
    ],
    "answer": 2,
    "explain": "A load balancer spreads incoming traffic across several server instances so no single server is overwhelmed."
   },
   {
    "q": "What best describes a microservices architecture?",
    "options": [
     "A front-end framework for building buttons",
     "Splitting an application into small, independent services that each handle one responsibility and communicate over the network",
     "A single database with no back-end code",
     "One large codebase handling every feature together"
    ],
    "answer": 1,
    "explain": "Microservices break an application into small, independently deployable services, each responsible for one part of the system's functionality."
   }
  ]
 }
}
