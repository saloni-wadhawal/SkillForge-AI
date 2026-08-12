// Lesson text and quiz questions for "JavaScript".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "javascript-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "JavaScript (JS) is a programming language that makes web pages come alive. HTML gives a page its structure and CSS gives it style, but JavaScript is what lets it react — showing a message when you click a button, checking a form, or updating a score without reloading."
    },
    {
     "type": "text",
     "text": "JavaScript runs wherever there is a JavaScript engine. Every web browser (Chrome, Firefox, Safari, Edge) has one built in, so JS runs right on your computer or phone as you browse. It can also run outside the browser on a server using a tool called Node.js."
    },
    {
     "type": "text",
     "text": "One of the simplest things JS can do is print a message. The command console.log() writes text to the browser's console — a hidden panel developers use to see what their code is doing."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "console.log(\"Hello, world!\");"
    },
    {
     "type": "tip",
     "text": "Think of the browser as a car and JavaScript as the driver: HTML builds the car, CSS paints it, and JS actually makes it move."
    }
   ],
   "recap": "JavaScript is the language that makes web pages interactive, and it runs in browsers and in Node.js."
  },
  "quiz": [
   {
    "q": "What is JavaScript mainly used for?",
    "options": [
     "Painting colors on a page",
     "Storing files on disk",
     "Making web pages interactive",
     "Building the page's skeleton"
    ],
    "answer": 2,
    "explain": "JavaScript adds behavior and interactivity, while HTML handles structure and CSS handles style."
   },
   {
    "q": "Where can JavaScript run?",
    "options": [
     "Only on printers",
     "Only inside Photoshop",
     "Only on Apple devices",
     "In web browsers and in Node.js"
    ],
    "answer": 3,
    "explain": "Every browser has a JS engine, and Node.js lets JavaScript run outside the browser too."
   },
   {
    "q": "What does console.log(\"Hi\") do?",
    "options": [
     "Restarts the browser",
     "Changes the font",
     "Prints Hi to the console",
     "Deletes the page"
    ],
    "answer": 2,
    "explain": "console.log() writes its message to the browser's developer console."
   }
  ]
 },
 "javascript-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a labeled box where you store a value so you can use it later. In JavaScript you create one with the keyword let or const, followed by a name, an equals sign, and the value."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let score = 0;\nconst name = \"Ada\";\nscore = 10; // allowed\nconsole.log(name, score);"
    },
    {
     "type": "text",
     "text": "Use let when the value might change later, like a score that goes up during a game. Use const (short for constant) when the value should never be reassigned, like someone's name. Trying to reassign a const causes an error."
    },
    {
     "type": "text",
     "text": "Good variable names describe what they hold, such as playerScore or totalPrice. This makes your code read almost like a sentence and easy to understand later."
    },
    {
     "type": "tip",
     "text": "Reach for const first. Only switch to let when you actually need to change the value — it keeps accidental changes from sneaking in."
    }
   ],
   "recap": "Use let for values that change and const for values that stay fixed; give variables clear, descriptive names."
  },
  "quiz": [
   {
    "q": "Which keyword should you use for a value that will never be reassigned?",
    "options": [
     "const",
     "var2",
     "let",
     "loop"
    ],
    "answer": 0,
    "explain": "const creates a constant, a variable whose value cannot be reassigned."
   },
   {
    "q": "What happens if you try to reassign a const?",
    "options": [
     "You get an error",
     "It becomes a let",
     "It silently works",
     "It doubles the value"
    ],
    "answer": 0,
    "explain": "Reassigning a const throws an error because constants cannot be changed."
   },
   {
    "q": "Which is the best variable name for a running total?",
    "options": [
     "a1",
     "x",
     "thing",
     "totalPrice"
    ],
    "answer": 3,
    "explain": "totalPrice describes what the variable holds, making the code easier to read."
   },
   {
    "q": "When is let the right choice?",
    "options": [
     "Never in modern JS",
     "When the value should be fixed forever",
     "When the value may change later",
     "Only for text"
    ],
    "answer": 2,
    "explain": "let is for variables whose value you expect to reassign over time."
   }
  ]
 },
 "javascript-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every value in JavaScript has a type — the kind of data it is. The main basic types are: string (text), number (any number), boolean (true or false), undefined (a value not set yet), and null (an intentional 'nothing')."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let title = \"Level 3\";   // string\nlet lives = 3;           // number\nlet isReady = true;      // boolean\nlet prize;               // undefined\nconsole.log(typeof lives); // \"number\""
    },
    {
     "type": "text",
     "text": "Strings are always wrapped in quotes: single ' ', double \" \", or backticks ` `. Numbers are written without quotes — writing \"3\" as text is different from the number 3. Booleans have exactly two values, true and false, and are the backbone of decisions."
    },
    {
     "type": "text",
     "text": "The typeof operator tells you the type of any value. It's handy when a bug makes you unsure whether you're dealing with a number or a string that only looks like one."
    },
    {
     "type": "tip",
     "text": "\"5\" + 3 gives \"53\", not 8, because a string plus a number glues them together as text. Watching types prevents surprises like this."
    }
   ],
   "recap": "The core types are string, number, boolean, undefined, and null; typeof reveals a value's type."
  },
  "quiz": [
   {
    "q": "What type is the value true?",
    "options": [
     "string",
     "null",
     "number",
     "boolean"
    ],
    "answer": 3,
    "explain": "true and false are the two boolean values."
   },
   {
    "q": "What is the type of \"42\" (with quotes)?",
    "options": [
     "undefined",
     "number",
     "boolean",
     "string"
    ],
    "answer": 3,
    "explain": "Quotes make it text, so \"42\" is a string, not a number."
   },
   {
    "q": "What does \"5\" + 3 produce?",
    "options": [
     "\"53\"",
     "8",
     "an error",
     "15"
    ],
    "answer": 0,
    "explain": "A string plus a number joins them as text, giving \"53\"."
   },
   {
    "q": "Which operator tells you a value's type?",
    "options": [
     "checkType",
     "typeof",
     "isType",
     "kindof"
    ],
    "answer": 1,
    "explain": "typeof returns a string describing the value's type, like \"number\"."
   }
  ]
 },
 "javascript-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators are symbols that do work on values. Arithmetic operators do math: + add, - subtract, * multiply, / divide, and % (modulo) which gives the remainder of a division."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "console.log(7 + 2);   // 9\nconsole.log(7 % 2);   // 1 (remainder)\nconsole.log(2 ** 3);  // 8 (2 to the power of 3)"
    },
    {
     "type": "text",
     "text": "Comparison operators ask a question and answer with true or false: > greater than, < less than, >= and <=. To check if two values are equal, use === (strictly equal) and !== (not equal). These compare both value and type."
    },
    {
     "type": "text",
     "text": "Prefer === over the older ==. The triple equals is strict: 5 === \"5\" is false because a number and a string are different types. The double == would loosely say true, which often hides bugs."
    },
    {
     "type": "tip",
     "text": "Modulo (%) has a neat trick: number % 2 is 0 for even numbers and 1 for odd ones — a quick even/odd test."
    }
   ],
   "recap": "Arithmetic operators do math, comparison operators return true/false, and === checks value and type strictly."
  },
  "quiz": [
   {
    "q": "What does 10 % 3 give?",
    "options": [
     "3",
     "1",
     "0",
     "3.33"
    ],
    "answer": 1,
    "explain": "10 divided by 3 leaves a remainder of 1, which is what modulo returns."
   },
   {
    "q": "What is the result of 5 === \"5\"?",
    "options": [
     "false",
     "5",
     "true",
     "an error"
    ],
    "answer": 0,
    "explain": "=== is strict, so a number and a string are not equal even if they look alike."
   },
   {
    "q": "Which operator raises a number to a power?",
    "options": [
     "%%",
     "pow",
     "**",
     "^"
    ],
    "answer": 2,
    "explain": "** is the exponentiation operator, so 2 ** 3 is 8."
   },
   {
    "q": "Why prefer === over ==?",
    "options": [
     "It rounds numbers",
     "It compares value and type without loose conversions",
     "It's faster to type",
     "It's shorter"
    ],
    "answer": 1,
    "explain": "=== avoids surprising type conversions that == performs, preventing hidden bugs."
   }
  ]
 },
 "javascript-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Programs often need to choose between paths. An if statement runs a block of code only when a condition is true. You can add else to handle the false case, and else if to test more conditions in a row."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let score = 85;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80) {\n  console.log(\"B\");\n} else {\n  console.log(\"Keep trying\");\n}"
    },
    {
     "type": "text",
     "text": "The condition inside the parentheses must be something that is true or false. Comparison operators like >= are perfect here. JavaScript checks each branch from top to bottom and runs the first one that is true, then skips the rest."
    },
    {
     "type": "text",
     "text": "For a quick one-line choice, the ternary operator helps: condition ? valueIfTrue : valueIfFalse. It's a compact if/else that returns a value."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let age = 20;\nlet ticket = age >= 18 ? \"adult\" : \"child\";\nconsole.log(ticket); // \"adult\""
    },
    {
     "type": "tip",
     "text": "Order your branches carefully. Since only the first true branch runs, put the most specific condition (like >= 90) before the more general one (>= 80)."
    }
   ],
   "recap": "if/else if/else picks a path based on true/false conditions, and the ternary operator is a compact one-line choice."
  },
  "quiz": [
   {
    "q": "When does the code inside an if block run?",
    "options": [
     "Never",
     "Only on the second run",
     "Only when its condition is true",
     "Always"
    ],
    "answer": 2,
    "explain": "An if block executes only if its condition evaluates to true."
   },
   {
    "q": "In an if/else if/else chain, how many branches run?",
    "options": [
     "All of them",
     "The first one whose condition is true",
     "Only the else",
     "A random one"
    ],
    "answer": 1,
    "explain": "JavaScript runs the first matching branch and skips the rest."
   },
   {
    "q": "What does age >= 18 ? \"adult\" : \"child\" return when age is 12?",
    "options": [
     "12",
     "true",
     "\"child\"",
     "\"adult\""
    ],
    "answer": 2,
    "explain": "Since 12 >= 18 is false, the ternary returns the value after the colon, \"child\"."
   },
   {
    "q": "Why check score >= 90 before score >= 80?",
    "options": [
     "80 is invalid",
     "It runs faster",
     "So the most specific case wins first",
     "It looks nicer"
    ],
    "answer": 2,
    "explain": "A score of 95 also passes >= 80, so the stricter test must come first to catch it."
   }
  ]
 },
 "javascript-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loop repeats a block of code so you don't have to write it many times. The for loop is the classic: it has a start value, a condition to keep going, and a step that changes the value each time."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "for (let i = 0; i < 3; i++) {\n  console.log(\"Count:\", i);\n}\n// Count: 0\n// Count: 1\n// Count: 2"
    },
    {
     "type": "text",
     "text": "Read the for loop as: start i at 0; keep going while i is less than 3; after each pass add 1 to i (that's i++). When the condition becomes false, the loop stops. Programmers usually start counting at 0."
    },
    {
     "type": "text",
     "text": "A while loop is simpler in shape — it repeats as long as a condition stays true. Just make sure something inside eventually makes the condition false, or the loop runs forever."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let lives = 3;\nwhile (lives > 0) {\n  console.log(lives);\n  lives--; // subtract 1 each pass\n}"
    },
    {
     "type": "tip",
     "text": "An infinite loop that never stops is a common beginner bug. Always ask: what changes each pass to bring the loop closer to ending?"
    }
   ],
   "recap": "for loops repeat with a counter (start, condition, step), and while loops repeat as long as a condition stays true."
  },
  "quiz": [
   {
    "q": "In for (let i = 0; i < 3; i++), how many times does the loop run?",
    "options": [
     "Forever",
     "3",
     "4",
     "2"
    ],
    "answer": 1,
    "explain": "i takes the values 0, 1, and 2 before 3 fails the condition, so it runs 3 times."
   },
   {
    "q": "What does i++ do each pass?",
    "options": [
     "Resets i to 0",
     "Stops the loop",
     "Doubles i",
     "Adds 1 to i"
    ],
    "answer": 3,
    "explain": "i++ increases i by one on every iteration."
   },
   {
    "q": "What causes an infinite loop?",
    "options": [
     "Counting up",
     "A condition that never becomes false",
     "Starting at 0",
     "Using console.log"
    ],
    "answer": 1,
    "explain": "If nothing makes the condition false, the loop never stops."
   },
   {
    "q": "When does a while loop keep running?",
    "options": [
     "Exactly 10 times",
     "Only once",
     "While its condition is true",
     "Until you refresh"
    ],
    "answer": 2,
    "explain": "A while loop repeats as long as its condition evaluates to true."
   }
  ]
 },
 "javascript-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A function is a reusable block of code you name once and run whenever you need it. It's like a recipe: you write the steps once, then 'call' the recipe any time. Functions keep your code organized and stop you repeating yourself."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "function greet(name) {\n  return \"Hello, \" + name + \"!\";\n}\n\nconsole.log(greet(\"Sam\")); // \"Hello, Sam!\""
    },
    {
     "type": "text",
     "text": "Values you pass into a function are called arguments, and the named slots that receive them are parameters (like name above). The return keyword sends a value back out so the rest of your program can use the result."
    },
    {
     "type": "text",
     "text": "Modern JS also has a shorter form called an arrow function. It does the same job with less typing and is very common in real code."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const double = (n) => n * 2;\nconsole.log(double(5)); // 10"
    },
    {
     "type": "tip",
     "text": "If a function doesn't return anything, calling it gives back undefined. When you want a usable result, remember to include a return."
    }
   ],
   "recap": "Functions are named, reusable blocks that take parameters and can return a value; arrow functions are a shorter syntax."
  },
  "quiz": [
   {
    "q": "What does the return keyword do?",
    "options": [
     "Prints to the screen",
     "Sends a value back out of the function",
     "Deletes the function",
     "Repeats the function"
    ],
    "answer": 1,
    "explain": "return hands a result back to whatever called the function."
   },
   {
    "q": "In greet(\"Sam\"), what is \"Sam\"?",
    "options": [
     "A return value",
     "A loop",
     "An argument",
     "A parameter"
    ],
    "answer": 2,
    "explain": "The value passed in when calling is an argument; the parameter is the name that receives it."
   },
   {
    "q": "What does const double = (n) => n * 2 called with 5 return?",
    "options": [
     "5",
     "7",
     "undefined",
     "10"
    ],
    "answer": 3,
    "explain": "The arrow function multiplies its input by 2, so double(5) is 10."
   },
   {
    "q": "What does a function return if it has no return statement?",
    "options": [
     "0",
     "undefined",
     "null",
     "An error"
    ],
    "answer": 1,
    "explain": "A function with no return gives back undefined by default."
   }
  ]
 },
 "javascript-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An array is an ordered list of values inside square brackets. You reach each item by its index — its position — and indexes start at 0, so the first item is at index 0."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[0]);      // \"apple\"\nconsole.log(fruits.length);  // 3\nfruits.push(\"date\");         // add to the end"
    },
    {
     "type": "text",
     "text": "Arrays have handy tools: .length tells you how many items there are, .push() adds to the end, and you can loop over every item to work with each one. Arrays are perfect for lists like scores, names, or to-do items."
    },
    {
     "type": "text",
     "text": "An object stores data as key–value pairs inside curly braces. Instead of positions, each value has a named key, which makes objects great for describing one thing with several properties — like a person having a name and an age."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let user = {\n  name: \"Ada\",\n  age: 30,\n  isMember: true\n};\nconsole.log(user.name);   // \"Ada\"\nuser.age = 31;            // update a value"
    },
    {
     "type": "tip",
     "text": "Use an array when order and a list matter, and an object when you're describing one thing with named details. They often team up: an array of objects is a very common shape for real data."
    }
   ],
   "recap": "Arrays are ordered, index-based lists (starting at 0); objects store named key–value pairs describing one thing."
  },
  "quiz": [
   {
    "q": "In [\"a\", \"b\", \"c\"], what index holds \"a\"?",
    "options": [
     "0",
     "1",
     "3",
     "-1"
    ],
    "answer": 0,
    "explain": "Array indexes start at 0, so the first item is at index 0."
   },
   {
    "q": "What does fruits.push(\"date\") do?",
    "options": [
     "Removes the first item",
     "Adds \"date\" to the end",
     "Sorts the array",
     "Counts the items"
    ],
    "answer": 1,
    "explain": ".push() appends a new value to the end of the array."
   },
   {
    "q": "How do you read the name from let user = { name: \"Ada\" }?",
    "options": [
     "user.name",
     "name.user",
     "user[0]",
     "user->name"
    ],
    "answer": 0,
    "explain": "Object values are accessed by their key using dot notation, like user.name."
   },
   {
    "q": "Which is best for describing one person's name, age, and status?",
    "options": [
     "A boolean",
     "An object",
     "An array",
     "A single number"
    ],
    "answer": 1,
    "explain": "An object groups named properties, ideal for one thing with several details."
   }
  ]
 },
 "javascript-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When a browser loads your HTML, it builds a live model of the page called the DOM (Document Object Model). It's a tree of elements that JavaScript can read and change. Editing the DOM is how JS updates what you see without reloading the page."
    },
    {
     "type": "text",
     "text": "To change an element you first select it. document.querySelector() finds the first element matching a CSS selector — for example \"#score\" targets the element with id=\"score\". Once you have it, you can read or change its content and style."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// HTML: <p id=\"score\">0</p>\nconst el = document.querySelector(\"#score\");\nel.textContent = \"10\";        // change the text\nel.style.color = \"green\";     // change the style"
    },
    {
     "type": "text",
     "text": "The real power comes from responding to the user. addEventListener() waits for an event — like a click — and runs a function when it happens. That function is called a handler. This is how buttons, menus, and games react to people."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// HTML: <button id=\"go\">Click me</button>\nconst btn = document.querySelector(\"#go\");\nbtn.addEventListener(\"click\", () => {\n  console.log(\"Button was clicked!\");\n});"
    },
    {
     "type": "tip",
     "text": "Run your script after the elements exist — place the <script> tag at the end of the body, or querySelector may return null because the element hasn't loaded yet."
    }
   ],
   "recap": "The DOM is the browser's live model of the page; use querySelector to select elements and addEventListener to run code on events like clicks."
  },
  "quiz": [
   {
    "q": "What does DOM stand for?",
    "options": [
     "Display Order Map",
     "Document Object Model",
     "Digital Online Menu",
     "Data Output Mode"
    ],
    "answer": 1,
    "explain": "DOM is the Document Object Model, the browser's live tree of page elements."
   },
   {
    "q": "What does document.querySelector(\"#score\") select?",
    "options": [
     "Every paragraph",
     "A random element",
     "The whole page as text",
     "The element with id score"
    ],
    "answer": 3,
    "explain": "The #score selector targets the element whose id is score."
   },
   {
    "q": "Which method makes code run when a button is clicked?",
    "options": [
     "textContent",
     "querySelector",
     "addEventListener",
     "console.log"
    ],
    "answer": 2,
    "explain": "addEventListener attaches a handler that runs when the chosen event, like a click, occurs."
   },
   {
    "q": "Why can querySelector return null?",
    "options": [
     "CSS is missing",
     "The script ran before the element loaded",
     "The internet is off",
     "The page is too small"
    ],
    "answer": 1,
    "explain": "If the script runs before the element exists in the DOM, querySelector finds nothing and returns null."
   }
  ]
 },
 "javascript-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Scope decides where a variable can be seen and used. A variable declared with let or const inside a function or a block ({ }) only exists inside that block — this is called block scope. Outside code cannot see it."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "function greet() {\n  let message = \"Hello\";\n  console.log(message); // works\n}\ngreet();\nconsole.log(message); // ReferenceError: message is not defined"
    },
    {
     "type": "text",
     "text": "A closure happens when a function remembers the variables from the place it was created, even after that outer function has finished running. The inner function keeps a private link to those variables."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "function makeCounter() {\n  let count = 0;\n  return function () {\n    count = count + 1;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2"
    },
    {
     "type": "text",
     "text": "Each call to makeCounter() creates its own fresh count, and the returned function keeps exclusive access to it. This is how JavaScript builds private data without classes — a very common interview topic."
    },
    {
     "type": "tip",
     "text": "If you can create a variable, return a function that uses it, and call that function later and it still remembers the value — that is a closure. Examiners often ask you to write a counter or a bank-balance example."
    }
   ],
   "recap": "let and const are block-scoped; a closure is a function that remembers the variables from where it was created, even after the outer function has returned."
  },
  "quiz": [
   {
    "q": "What is a closure?",
    "options": [
     "A function that remembers variables from its creation scope",
     "A way to close a browser tab",
     "An error type",
     "A loop that never ends"
    ],
    "answer": 0,
    "explain": "A closure is a function bundled with references to its surrounding variables, kept alive even after the outer function finishes."
   },
   {
    "q": "In the makeCounter example, why does each counter keep its own count?",
    "options": [
     "JavaScript resets count every call",
     "count is a global variable",
     "Functions cannot have variables",
     "Each call to makeCounter creates a new, separate count variable"
    ],
    "answer": 3,
    "explain": "Every call to makeCounter() runs the function body again, creating a brand new count that only its returned function can access."
   },
   {
    "q": "What happens if you try to use a let variable outside the block it was declared in?",
    "options": [
     "It returns undefined silently",
     "JavaScript copies it automatically",
     "It becomes global",
     "You get a ReferenceError"
    ],
    "answer": 3,
    "explain": "Block-scoped variables do not exist outside their block, so referencing them throws a ReferenceError."
   },
   {
    "q": "Which keyword pair creates block-scoped variables?",
    "options": [
     "global and local",
     "var and function",
     "static and public",
     "let and const"
    ],
    "answer": 3,
    "explain": "let and const are confined to the nearest enclosing block; var is not."
   }
  ]
 },
 "javascript-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A higher-order function is a function that takes another function as an argument, or returns one. Arrays come with three higher-order functions that replace most manual loops: map, filter, and reduce. map() runs your function on every item and builds a new array of the results, keeping the same length. filter() runs a test on every item and keeps only the ones where the test returns true."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let nums = [1, 2, 3, 4, 5];\nlet doubled = nums.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\nlet evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]"
    },
    {
     "type": "text",
     "text": "reduce() combines every item into a single value, like a total. You give it a function and a starting value; it carries an accumulator through the whole array."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let total = nums.reduce((sum, n) => sum + n, 0);\nconsole.log(total); // 15"
    },
    {
     "type": "tip",
     "text": "Remember the roles: map transforms (same length out), filter selects (shorter or equal length out), reduce combines into one value. Interviewers love asking you to rewrite a for loop using these."
    }
   ],
   "recap": "map() transforms every item into a new array, filter() keeps only items that pass a test, and reduce() folds an array down into one value."
  },
  "quiz": [
   {
    "q": "What does nums.map(n => n * 2) return?",
    "options": [
     "A new array with every item doubled",
     "The original array unchanged",
     "A single doubled number",
     "true or false"
    ],
    "answer": 0,
    "explain": "map() applies the function to every element and returns a new array of the same length with the results."
   },
   {
    "q": "Which method would you use to keep only numbers greater than 10 in an array?",
    "options": [
     "map",
     "reduce",
     "filter",
     "push"
    ],
    "answer": 2,
    "explain": "filter() tests each item and keeps only those for which the test function returns true."
   },
   {
    "q": "In nums.reduce((sum, n) => sum + n, 0), what is 0?",
    "options": [
     "The starting value of the accumulator",
     "An error code",
     "The last item",
     "The array length"
    ],
    "answer": 0,
    "explain": "The second argument to reduce is the initial value the accumulator (sum) starts from."
   },
   {
    "q": "What kind of function is one that takes another function as an argument?",
    "options": [
     "Anonymous function",
     "Recursive function",
     "Higher-order function",
     "Constructor function"
    ],
    "answer": 2,
    "explain": "A higher-order function either accepts a function as a parameter or returns one; map, filter, and reduce all qualify."
   }
  ]
 },
 "javascript-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Template literals use backticks instead of quotes and let you embed variables directly inside a string using ${ }. This is called string interpolation, and it is much cleaner than joining strings with +."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let name = \"Ada\";\nlet age = 30;\nconsole.log(`${name} is ${age} years old.`);\n// Ada is 30 years old."
    },
    {
     "type": "text",
     "text": "Destructuring lets you pull values out of an array or object into separate variables in one line, instead of accessing them one at a time. The spread operator (...) does the opposite job — it expands an array or object into individual items, which is useful for copying, merging, or combining data without changing the original."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let user = { name: \"Ada\", age: 30 };\nlet { name: userName, age: userAge } = user;\n\nlet colors = [\"red\", \"green\", \"blue\"];\nlet [first, second] = colors;\nconsole.log(first, second); // red green"
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let a = [1, 2];\nlet b = [3, 4];\nlet combined = [...a, ...b];\nconsole.log(combined); // [1, 2, 3, 4]\n\nlet extended = { ...user, city: \"Pune\" };"
    },
    {
     "type": "tip",
     "text": "Spread copies one level deep only — nested objects or arrays inside are still shared references. This trips people up when they expect a full deep copy."
    }
   ],
   "recap": "Template literals (backticks with ${}) build strings with embedded variables; destructuring unpacks array/object values into variables; spread (...) expands or copies arrays and objects."
  },
  "quiz": [
   {
    "q": "What does `${name} is ${age}` use to embed variables in a string?",
    "options": [
     "Single quotes",
     "Square brackets",
     "Double plus signs",
     "Backticks and ${ }"
    ],
    "answer": 3,
    "explain": "Template literals are written with backticks, and ${} inserts a variable or expression directly into the string."
   },
   {
    "q": "What does let [first, second] = colors; do?",
    "options": [
     "Assigns the first two array items to first and second",
     "Creates a new empty array",
     "Deletes the first two items",
     "Sorts the array"
    ],
    "answer": 0,
    "explain": "Array destructuring pulls items out by position into named variables."
   },
   {
    "q": "What does [...a, ...b] produce if a = [1,2] and b = [3,4]?",
    "options": [
     "A nested array [[1,2],[3,4]]",
     "[1, 2, 3, 4]",
     "An error",
     "[1, 2] only"
    ],
    "answer": 1,
    "explain": "The spread operator expands both arrays' items into one flat new array."
   },
   {
    "q": "Why should you be careful using spread to copy an object with nested objects inside?",
    "options": [
     "Spread deletes nested data",
     "Spread only copies one level deep, so nested objects are still shared",
     "Spread cannot copy objects at all",
     "Spread only works on arrays"
    ],
    "answer": 1,
    "explain": "Spread performs a shallow copy — top-level properties are copied, but nested objects/arrays remain the same reference."
   }
  ]
 },
 "javascript-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every time an event fires, JavaScript automatically passes an event object to the handler function. It carries details about what happened — which key was pressed, which element was clicked, and more."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "btn.addEventListener(\"click\", (event) => {\n  console.log(event.target); // the exact element clicked\n});"
    },
    {
     "type": "text",
     "text": "Forms are a common place to use this. When a form is submitted, the browser's default behaviour is to reload the page. Calling event.preventDefault() stops that, so you can handle the data with JavaScript instead."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// HTML: <form id=\"login\"><input id=\"email\"><button>Go</button></form>\nconst form = document.querySelector(\"#login\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const email = document.querySelector(\"#email\").value;\n  console.log(\"Submitted:\", email);\n});"
    },
    {
     "type": "text",
     "text": "The .value property reads whatever the user typed into an input field. Reading values and preventing the default reload is the basis of nearly every login form, search box, and to-do input you will build."
    },
    {
     "type": "tip",
     "text": "Forgetting event.preventDefault() is a classic bug: the page reloads and your JavaScript variables reset before you even see the result. Always add it first inside a submit handler."
    }
   ],
   "recap": "Every event handler receives an event object; event.target tells you what was clicked, and event.preventDefault() stops a form's default page-reload on submit."
  },
  "quiz": [
   {
    "q": "What does event.preventDefault() do inside a form's submit handler?",
    "options": [
     "Stops the browser's default reload so JS can handle the data",
     "Prevents the event object from being created",
     "Clears all input fields",
     "Deletes the form"
    ],
    "answer": 0,
    "explain": "It cancels the browser's default action for that event, which for a form submit is reloading the page."
   },
   {
    "q": "What does event.target refer to in a click handler?",
    "options": [
     "The whole document",
     "The exact element that was clicked",
     "The browser window",
     "A random element"
    ],
    "answer": 1,
    "explain": "event.target is the specific element that triggered the event."
   },
   {
    "q": "How do you read what a user typed into an input with id=\"email\"?",
    "options": [
     "email.get()",
     "document.email",
     "document.querySelector(\"#email\").text",
     "document.querySelector(\"#email\").value"
    ],
    "answer": 3,
    "explain": "The .value property holds the current text inside an input element."
   },
   {
    "q": "What usually happens if you forget preventDefault() on a form submit?",
    "options": [
     "An error is thrown immediately",
     "The page reloads, losing your JS state",
     "Nothing changes",
     "The form becomes uneditable"
    ],
    "answer": 1,
    "explain": "Without preventDefault(), the browser's default submit behaviour reloads the page."
   }
  ]
 },
 "javascript-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "JSON (JavaScript Object Notation) is a text format for representing data, built from the same object and array syntax you already know. It is the standard way servers and browsers exchange data over the internet."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let jsonText = '{\"name\":\"Ada\",\"age\":30,\"skills\":[\"HTML\",\"CSS\"]}';"
    },
    {
     "type": "text",
     "text": "JSON.parse() turns a JSON string into a real JavaScript object you can use. JSON.stringify() does the reverse — it turns a JavaScript object into a JSON string, ready to send or store."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "let obj = JSON.parse(jsonText);\nconsole.log(obj.name); // \"Ada\"\n\nlet backToText = JSON.stringify(obj);\nconsole.log(backToText); // '{\"name\":\"Ada\",\"age\":30,\"skills\":[\"HTML\",\"CSS\"]}'"
    },
    {
     "type": "text",
     "text": "JSON keys must always be in double quotes, and JSON cannot store functions or undefined — only plain data like strings, numbers, booleans, arrays, objects, and null. This keeps it simple and safe to transfer between different programming languages."
    },
    {
     "type": "tip",
     "text": "A common exam trap: JSON looks like a JavaScript object literal but is stricter. No trailing commas, no single quotes, no comments — only double-quoted keys and values."
    }
   ],
   "recap": "JSON is a text-based data format built on JS object/array syntax; JSON.parse() converts text to an object, and JSON.stringify() converts an object back to text."
  },
  "quiz": [
   {
    "q": "What does JSON.parse() do?",
    "options": [
     "Deletes JSON data",
     "Converts an object into a JSON string",
     "Runs a function stored in JSON",
     "Converts a JSON string into a JavaScript object"
    ],
    "answer": 3,
    "explain": "JSON.parse() reads a JSON-formatted string and builds a real JavaScript value (usually an object or array) from it."
   },
   {
    "q": "Which of these can JSON NOT store?",
    "options": [
     "Arrays",
     "Numbers",
     "Strings",
     "Functions"
    ],
    "answer": 3,
    "explain": "JSON only represents plain data — strings, numbers, booleans, arrays, objects, and null — not functions."
   },
   {
    "q": "In valid JSON, how must keys be written?",
    "options": [
     "With no quotes",
     "In double quotes",
     "In backticks",
     "In single quotes"
    ],
    "answer": 1,
    "explain": "Strict JSON requires every key to be a double-quoted string."
   },
   {
    "q": "What does JSON.stringify(obj) produce?",
    "options": [
     "A JSON-formatted text string",
     "A parsed object",
     "An error",
     "A copy of obj with functions included"
    ],
    "answer": 0,
    "explain": "JSON.stringify() converts a JavaScript value into its JSON text representation."
   }
  ]
 },
 "javascript-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some tasks take time — fetching data from a server, reading a file, or waiting on a timer. JavaScript does not pause and wait; it keeps running other code and deals with the slow task's result later. This is asynchronous behaviour."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "console.log(\"Start\");\nsetTimeout(() => {\n  console.log(\"This runs later\");\n}, 1000);\nconsole.log(\"End\");\n// Output order: Start, End, This runs later"
    },
    {
     "type": "text",
     "text": "The function passed to setTimeout is a callback — a function handed to another function to be run once something finishes. Deeply nesting callbacks inside callbacks is called callback hell, and it becomes hard to read."
    },
    {
     "type": "text",
     "text": "A Promise is an object representing a value that will exist in the future. It is either pending, fulfilled (success), or rejected (failure). .then() runs when it succeeds, and .catch() runs when it fails."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "function fetchScore() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve(95), 1000);\n  });\n}\nfetchScore()\n  .then(score => console.log(\"Score:\", score))\n  .catch(error => console.log(\"Failed:\", error));"
    },
    {
     "type": "tip",
     "text": "A Promise settles exactly once — either resolve() or reject() runs, never both, and never twice. Chaining .then() calls is how you avoid deeply nested callbacks."
    }
   ],
   "recap": "JavaScript handles slow tasks asynchronously using callbacks or Promises; a Promise is pending, then either fulfilled (.then) or rejected (.catch)."
  },
  "quiz": [
   {
    "q": "In the setTimeout example, why does \"End\" print before \"This runs later\"?",
    "options": [
     "There is a bug",
     "JavaScript ignores setTimeout",
     "setTimeout schedules the callback to run later while the rest of the code continues",
     "console.log is asynchronous"
    ],
    "answer": 2,
    "explain": "setTimeout does not pause execution; it schedules the callback for later and JS immediately moves on to the next line."
   },
   {
    "q": "What are the three possible states of a Promise?",
    "options": [
     "Pending, fulfilled, rejected",
     "Open, closed, error",
     "Start, middle, end",
     "True, false, null"
    ],
    "answer": 0,
    "explain": "A Promise begins pending and then settles as either fulfilled (success) or rejected (failure)."
   },
   {
    "q": "Which method runs code when a Promise fails?",
    "options": [
     ".resolve()",
     ".finally() only",
     ".catch()",
     ".then()"
    ],
    "answer": 2,
    "explain": ".catch() attaches a handler that runs specifically when the Promise is rejected."
   },
   {
    "q": "What is a callback?",
    "options": [
     "An HTML event",
     "A function passed to another function to be run later",
     "A function returned from a class",
     "A type of loop"
    ],
    "answer": 1,
    "explain": "A callback is a function handed off to run once some operation — like a timer or a request — completes."
   }
  ]
 },
 "javascript-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "async and await are a cleaner way to write Promise-based code so it reads top to bottom, like normal synchronous code. Marking a function async lets you use await inside it to pause until a Promise settles."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "async function getScore() {\n  let score = await fetchScore(); // pauses here until resolved\n  console.log(\"Score:\", score);\n}\ngetScore();"
    },
    {
     "type": "text",
     "text": "fetch() is the browser's built-in function for requesting data from a server, most often an API. It returns a Promise that resolves to a response, which you then convert to usable data with .json()."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "async function getUsers() {\n  const response = await fetch(\"https://api.example.com/users\");\n  const data = await response.json();\n  console.log(data);\n}"
    },
    {
     "type": "text",
     "text": "await only pauses the async function it is inside — it does not freeze the whole browser. Other code, like button clicks, keeps working while the request is in flight."
    },
    {
     "type": "tip",
     "text": "await only works inside a function declared async. Trying to use await at the top level of an old-style script throws a syntax error — wrap it in an async function first."
    }
   ],
   "recap": "async marks a function as returning a Promise and allows await inside it; await pauses only that function until a Promise settles; fetch() requests data and returns a Promise you can await."
  },
  "quiz": [
   {
    "q": "Where can you use the await keyword?",
    "options": [
     "Anywhere in any file",
     "Only inside a function declared async",
     "Only inside loops",
     "Only inside classes"
    ],
    "answer": 1,
    "explain": "await is only valid inside functions marked async (or in modern top-level module code)."
   },
   {
    "q": "What does fetch() return?",
    "options": [
     "A Promise that resolves to a response",
     "An error object",
     "The data directly",
     "Nothing"
    ],
    "answer": 0,
    "explain": "fetch() returns a Promise; you await it to get a response object, then call .json() to get usable data."
   },
   {
    "q": "Does await freeze the entire browser while waiting?",
    "options": [
     "No, it only pauses the async function it is inside",
     "Only on mobile browsers",
     "Yes, but only for 1 second",
     "Yes, everything stops"
    ],
    "answer": 0,
    "explain": "await pauses execution of its own async function; the rest of the page, like click handlers, keeps responding."
   },
   {
    "q": "Why is async/await often preferred over chaining many .then() calls?",
    "options": [
     "It is faster at runtime",
     "It removes the need for Promises entirely",
     "It works without a network",
     "It reads more like normal top-to-bottom synchronous code"
    ],
    "answer": 3,
    "explain": "async/await is syntax sugar over Promises that makes asynchronous code easier to read and reason about."
   }
  ]
 },
 "javascript-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Errors happen — a network request fails, a value is missing, a function is called wrong. Without handling, an error stops your whole script. try...catch lets you attempt risky code and recover gracefully if it fails."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "try {\n  let result = JSON.parse(\"not valid json\");\n} catch (error) {\n  console.log(\"Something went wrong:\", error.message);\n}\nconsole.log(\"Script keeps running\");"
    },
    {
     "type": "text",
     "text": "Code inside try runs first; if it throws an error, control jumps straight to catch, where the error object is available with a .message describing what happened. Code after the try/catch block still runs normally."
    },
    {
     "type": "text",
     "text": "An optional finally block runs no matter what — whether the try succeeded or the catch ran. It is used for cleanup, like hiding a loading spinner."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "async function loadData() {\n  try {\n    const response = await fetch(\"https://api.example.com/data\");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log(\"Fetch failed:\", error.message);\n  } finally {\n    console.log(\"Done trying\");\n  }\n}"
    },
    {
     "type": "tip",
     "text": "try/catch works with async/await, but not directly with .then() chains — there you use .catch() instead. Mixing the two styles in one function is a common source of confusion."
    }
   ],
   "recap": "try runs code that might fail, catch handles the error if one is thrown, and finally runs regardless — the standard pattern for safe error handling in JavaScript."
  },
  "quiz": [
   {
    "q": "What happens when code inside a try block throws an error?",
    "options": [
     "The try block restarts",
     "The error is ignored silently",
     "Control jumps to the catch block",
     "The whole program stops immediately"
    ],
    "answer": 2,
    "explain": "A thrown error inside try is caught by the matching catch block, which then handles it."
   },
   {
    "q": "When does the finally block run?",
    "options": [
     "Never automatically",
     "Only if try succeeds",
     "Always, whether try succeeded or catch ran",
     "Only if catch runs"
    ],
    "answer": 2,
    "explain": "finally always executes after try/catch, regardless of the outcome, making it ideal for cleanup."
   },
   {
    "q": "What does error.message give you inside a catch block?",
    "options": [
     "The line number only",
     "The original correct value",
     "Nothing, it is always undefined",
     "A description of what went wrong"
    ],
    "answer": 3,
    "explain": "The error object caught in catch has a .message property describing the problem."
   },
   {
    "q": "Which pairs with await for handling errors, matching how .catch() pairs with .then()?",
    "options": [
     "if/else",
     "try/catch",
     "for/while",
     "switch/case"
    ],
    "answer": 1,
    "explain": "In async/await style code, try/catch is used to handle rejected Promises instead of chaining .catch()."
   }
  ]
 },
 "javascript-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A class is a blueprint for creating objects that share the same structure and behaviour. Instead of writing one object at a time, you define a class once and create as many objects — called instances — from it as you need."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "class Student {\n  constructor(name, marks) {\n    this.name = name;\n    this.marks = marks;\n  }\n  hasPassed() {\n    return this.marks >= 40;\n  }\n}\nlet s1 = new Student(\"Riya\", 78);\nconsole.log(s1.name);        // \"Riya\"\nconsole.log(s1.hasPassed()); // true"
    },
    {
     "type": "text",
     "text": "The constructor is a special method that runs automatically when you create a new instance with the new keyword. Inside a class, this refers to the specific instance being created or used."
    },
    {
     "type": "text",
     "text": "Classes also support inheritance: one class can extend another to reuse its properties and methods, then add or override its own. The child class calls super() to run the parent's constructor first."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "class TopperStudent extends Student {\n  constructor(name, marks, rank) {\n    super(name, marks);\n    this.rank = rank;\n  }\n}\nlet s2 = new TopperStudent(\"Aman\", 95, 1);\nconsole.log(s2.hasPassed()); // true, inherited from Student"
    },
    {
     "type": "tip",
     "text": "JavaScript classes are largely a friendlier syntax over its older prototype-based system underneath — but for exams and interviews, describe them in terms of constructor, this, and extends/super, exactly as shown here."
    }
   ],
   "recap": "A class defines a blueprint with a constructor and methods; new creates an instance; extends and super let one class inherit and build on another."
  },
  "quiz": [
   {
    "q": "What runs automatically when you write new Student(\"Riya\", 78)?",
    "options": [
     "Nothing until you call a method",
     "The constructor",
     "The parent class only",
     "The hasPassed method"
    ],
    "answer": 1,
    "explain": "The constructor method runs immediately when a new instance is created, setting up its initial properties."
   },
   {
    "q": "Inside a class method, what does this refer to?",
    "options": [
     "A random object",
     "The class definition itself",
     "The specific instance the method is called on",
     "The global window object always"
    ],
    "answer": 2,
    "explain": "this refers to the particular instance (object) the method is being called on."
   },
   {
    "q": "What does the extends keyword do?",
    "options": [
     "Lets one class inherit properties and methods from another",
     "Deletes a class",
     "Creates a new instance",
     "Converts a class to a function"
    ],
    "answer": 0,
    "explain": "extends sets up inheritance so a child class gets everything the parent class defines, plus its own additions."
   },
   {
    "q": "Why does TopperStudent's constructor call super(name, marks)?",
    "options": [
     "To create a second student",
     "To run the parent Student constructor and set up its properties first",
     "It is optional and does nothing",
     "To delete the parent class"
    ],
    "answer": 1,
    "explain": "super() invokes the parent class's constructor, which must run before the child can add its own properties like rank."
   }
  ]
 },
 "javascript-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "this is one of the trickiest ideas in JavaScript because its value depends on how a function is called, not where it is written. Inside an object method, this refers to that object. Called alone, this can refer to undefined (in strict mode) or the global object. Arrow functions behave differently: they do not have their own this, and instead inherit this from the surrounding code where they were written — which is why they are often used inside callbacks to keep the outer this."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const car = {\n  brand: \"Tata\",\n  showBrand: function () {\n    console.log(this.brand);\n  }\n};\ncar.showBrand(); // \"Tata\" — this is car"
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "const timer = {\n  seconds: 0,\n  start: function () {\n    setInterval(() => {\n      this.seconds++; // arrow function keeps timer's this\n      console.log(this.seconds);\n    }, 1000);\n  }\n};"
    },
    {
     "type": "text",
     "text": "Hoisting is JavaScript's behaviour of moving function and variable declarations to the top of their scope before code runs. Function declarations are fully hoisted — you can call them before they appear in the file. var declarations are hoisted but stay undefined until their line runs; let and const are hoisted too but cannot be used before their line (the temporal dead zone)."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "sayHi(); // works: \"Hi!\"\nfunction sayHi() {\n  console.log(\"Hi!\");\n}\n\nconsole.log(x); // undefined, not an error\nvar x = 5;"
    },
    {
     "type": "tip",
     "text": "A classic interview question: use a regular function as an object method (for this to work) but use an arrow function for callbacks inside it (to keep the outer this). Mixing these up is the single most common this bug."
    }
   ],
   "recap": "this depends on how a function is called — object methods get the object, arrow functions inherit this from where they were defined; hoisting moves declarations to the top of scope, with function declarations fully usable early and let/const left in a temporal dead zone."
  },
  "quiz": [
   {
    "q": "What does this refer to inside car.showBrand()?",
    "options": [
     "The global window object",
     "The car object",
     "Undefined always",
     "The showBrand function name"
    ],
    "answer": 1,
    "explain": "When a function is called as a method on an object, this refers to that object."
   },
   {
    "q": "Why are arrow functions used inside callbacks when you need the outer this?",
    "options": [
     "Arrow functions do not have their own this and inherit it from the surrounding scope",
     "Arrow functions cannot use this at all",
     "Arrow functions automatically become global",
     "Arrow functions run faster"
    ],
    "answer": 0,
    "explain": "Arrow functions have no this of their own, so they use the this value from where they were written, not how they are called."
   },
   {
    "q": "What happens if you call console.log(x) before var x = 5;?",
    "options": [
     "It logs 5",
     "The program crashes",
     "It logs undefined, no error",
     "ReferenceError"
    ],
    "answer": 2,
    "explain": "var declarations are hoisted to the top of scope but only assigned their value when that line actually runs, so the variable exists but is undefined earlier."
   },
   {
    "q": "Why can you call sayHi() before its definition appears in the file?",
    "options": [
     "Only arrow functions allow this",
     "It is actually an error",
     "Function declarations are fully hoisted, body included",
     "JavaScript ignores order entirely"
    ],
    "answer": 2,
    "explain": "Function declarations (not expressions) are hoisted completely, including their body, so calling them earlier in the file works."
   }
  ]
 },
 "javascript-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "JavaScript runs on a single thread — it can only do one thing at a time. Yet it handles timers, network requests, and clicks without freezing, thanks to a system called the event loop."
    },
    {
     "type": "text",
     "text": "The call stack is where your currently running code lives, one function call on top of another. When code finishes, it pops off the stack. Slow operations like setTimeout or fetch are handed off to the browser, which finishes them in the background and places their callback in a queue."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");\n// Output: 1, 4, 3, 2"
    },
    {
     "type": "text",
     "text": "The event loop's job is simple: keep checking whether the call stack is empty, and if it is, take the next waiting callback and push it on. There are two queues — the microtask queue (Promises) and the macrotask queue (setTimeout, events). Microtasks always run first, before the next macrotask, which is why \"3\" prints before \"2\" above even though setTimeout was called first."
    },
    {
     "type": "text",
     "text": "This model explains why a long-running loop can freeze a whole web page — nothing else, not even clicks, can be handled until the call stack clears, because there is only one thread."
    },
    {
     "type": "tip",
     "text": "Interview gold: \"JavaScript is single-threaded but non-blocking, thanks to the event loop, callback queues, and Web APIs provided by the browser (or Node) handling the slow work.\" Memorize the order: synchronous code, then all microtasks, then one macrotask, repeat."
    }
   ],
   "recap": "JavaScript runs on one thread using an event loop: the call stack executes code, slow tasks run in the background via the browser, and their callbacks queue up — microtasks (Promises) always run before macrotasks (setTimeout)."
  },
  "quiz": [
   {
    "q": "Why does \"4\" print before \"3\" and \"2\" in the example code?",
    "options": [
     "The order is random",
     "setTimeout always runs first",
     "console.log(\"4\") is synchronous and runs immediately, before any queued callback",
     "Promises are broken"
    ],
    "answer": 2,
    "explain": "Synchronous code runs to completion first; only once the call stack is empty does the event loop run queued microtasks and macrotasks."
   },
   {
    "q": "Which queue runs first when the call stack becomes empty: microtasks or macrotasks?",
    "options": [
     "Neither runs automatically",
     "Microtasks (like Promise callbacks) run first",
     "They always run at exactly the same time",
     "Macrotasks always run first"
    ],
    "answer": 1,
    "explain": "The event loop drains the entire microtask queue before taking the next macrotask, which is why Promise callbacks beat setTimeout callbacks."
   },
   {
    "q": "Why can a long, heavy loop freeze a web page's clicks and animations?",
    "options": [
     "Because the browser disables clicks during loops",
     "Because loops use a different thread",
     "Because JavaScript is single-threaded, so nothing else runs until the call stack is clear",
     "It cannot happen in modern browsers"
    ],
    "answer": 2,
    "explain": "With only one thread, the call stack must be free before the event loop can process other events like clicks."
   },
   {
    "q": "What is the event loop's basic job?",
    "options": [
     "Compiling JavaScript into machine code",
     "Rendering HTML to the screen",
     "Managing variable scope",
     "Checking if the call stack is empty and moving queued callbacks onto it"
    ],
    "answer": 3,
    "explain": "The event loop continuously checks whether the call stack is empty, then pushes the next ready callback from the queues onto it."
   }
  ]
 }
}
