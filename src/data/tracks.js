// The subject index: what every subject and level is called and what it is
// worth. Small on purpose — this is in the main bundle, so it holds no lesson
// text and no quiz questions. Those live one file per subject in ./content/ and
// are fetched by loadLevelContent() the moment a lesson or quiz is opened.
//
// Shape:
// { id, title, icon, category:'foundation'|'language'|'core'|'math'|'advanced', color, blurb,
//   levels: [{ id, title, xp }] }
//
// Generated content. Do not hand-edit; regenerate instead.

export const TRACKS = [
 {
  "id": "fundamentals",
  "title": "Computer Fundamentals",
  "icon": "💻",
  "category": "foundation",
  "color": "#22A699",
  "blurb": "Start from zero and learn how computers really work, one friendly step at a time.",
  "levels": [
   {
    "id": "fundamentals-1",
    "title": "What Is a Computer?",
    "xp": 15
   },
   {
    "id": "fundamentals-2",
    "title": "Hardware vs Software",
    "xp": 16
   },
   {
    "id": "fundamentals-3",
    "title": "Input and Output Devices",
    "xp": 18
   },
   {
    "id": "fundamentals-4",
    "title": "The CPU: The Brain",
    "xp": 20
   },
   {
    "id": "fundamentals-5",
    "title": "Memory: RAM, ROM, Storage",
    "xp": 22
   },
   {
    "id": "fundamentals-6",
    "title": "Binary, Bits, and Bytes",
    "xp": 24
   },
   {
    "id": "fundamentals-7",
    "title": "Operating System Basics",
    "xp": 25
   },
   {
    "id": "fundamentals-8",
    "title": "How the Internet Works",
    "xp": 27
   },
   {
    "id": "fundamentals-9",
    "title": "Files and Folders",
    "xp": 30
   },
   {
    "id": "fundamentals-10",
    "title": "Number Systems: Binary, Octal & Hex",
    "xp": 31
   },
   {
    "id": "fundamentals-11",
    "title": "Character Encoding: ASCII & Unicode",
    "xp": 32
   },
   {
    "id": "fundamentals-12",
    "title": "Generations of Computers",
    "xp": 33
   },
   {
    "id": "fundamentals-13",
    "title": "Types of Computers",
    "xp": 34
   },
   {
    "id": "fundamentals-14",
    "title": "Types of Software: System, Application & Utility",
    "xp": 35
   },
   {
    "id": "fundamentals-15",
    "title": "Programming Languages & Translators",
    "xp": 36
   },
   {
    "id": "fundamentals-16",
    "title": "Algorithms & Flowcharts",
    "xp": 38
   },
   {
    "id": "fundamentals-17",
    "title": "Introduction to Databases",
    "xp": 39
   },
   {
    "id": "fundamentals-18",
    "title": "Computer Networks & the Cloud",
    "xp": 41
   },
   {
    "id": "fundamentals-19",
    "title": "Cyber Security Basics",
    "xp": 43
   },
   {
    "id": "fundamentals-20",
    "title": "Emerging Trends: AI, IoT & Careers in Computing",
    "xp": 45
   }
  ]
 },
 {
  "id": "digital-electronics",
  "title": "Digital Electronics",
  "icon": "🔌",
  "category": "foundation",
  "color": "#E91E63",
  "blurb": "From binary 1s and 0s to counters and registers — build the logic that makes computers tick.",
  "levels": [
   {
    "id": "digital-electronics-1",
    "title": "Analog vs Digital & Binary",
    "xp": 15
   },
   {
    "id": "digital-electronics-2",
    "title": "Logic Gates: AND, OR, NOT",
    "xp": 17
   },
   {
    "id": "digital-electronics-3",
    "title": "NAND, NOR & XOR",
    "xp": 19
   },
   {
    "id": "digital-electronics-4",
    "title": "Boolean Algebra",
    "xp": 21
   },
   {
    "id": "digital-electronics-5",
    "title": "Combinational Circuits & Adders",
    "xp": 23
   },
   {
    "id": "digital-electronics-6",
    "title": "Flip-Flops & Latches",
    "xp": 26
   },
   {
    "id": "digital-electronics-7",
    "title": "Counters & Registers",
    "xp": 30
   },
   {
    "id": "digital-electronics-8",
    "title": "Number Systems: Octal, Hex & Conversions",
    "xp": 31
   },
   {
    "id": "digital-electronics-9",
    "title": "Binary Codes: BCD, Gray Code & ASCII",
    "xp": 32
   },
   {
    "id": "digital-electronics-10",
    "title": "Signed Numbers & Two's Complement",
    "xp": 33
   },
   {
    "id": "digital-electronics-11",
    "title": "Karnaugh Maps: Simplifying Logic",
    "xp": 34
   },
   {
    "id": "digital-electronics-12",
    "title": "Multiplexers & Demultiplexers",
    "xp": 35
   },
   {
    "id": "digital-electronics-13",
    "title": "Encoders & Decoders",
    "xp": 36
   },
   {
    "id": "digital-electronics-14",
    "title": "Parity, Comparators & Code Converters",
    "xp": 37
   },
   {
    "id": "digital-electronics-15",
    "title": "Sequential Design: Mealy & Moore Machines",
    "xp": 38
   },
   {
    "id": "digital-electronics-16",
    "title": "Memory Devices: RAM, ROM & PLDs",
    "xp": 39
   },
   {
    "id": "digital-electronics-17",
    "title": "A/D and D/A Converters",
    "xp": 41
   },
   {
    "id": "digital-electronics-18",
    "title": "Logic Families: TTL vs CMOS",
    "xp": 42
   },
   {
    "id": "digital-electronics-19",
    "title": "Timing Hazards & Propagation Delay",
    "xp": 44
   },
   {
    "id": "digital-electronics-20",
    "title": "Digital Design Interview Essentials",
    "xp": 45
   }
  ]
 },
 {
  "id": "webdev",
  "title": "Web Development Basics",
  "icon": "🌍",
  "category": "foundation",
  "color": "#FF6D00",
  "blurb": "Build real web pages from scratch — from how the web works to HTML, CSS, and responsive design.",
  "levels": [
   {
    "id": "webdev-1",
    "title": "How the Web Works",
    "xp": 15
   },
   {
    "id": "webdev-2",
    "title": "HTML Structure & Tags",
    "xp": 17
   },
   {
    "id": "webdev-3",
    "title": "Text, Links & Images",
    "xp": 19
   },
   {
    "id": "webdev-4",
    "title": "CSS Styling Basics",
    "xp": 21
   },
   {
    "id": "webdev-5",
    "title": "The Box Model",
    "xp": 24
   },
   {
    "id": "webdev-6",
    "title": "Forms & User Input",
    "xp": 27
   },
   {
    "id": "webdev-7",
    "title": "Intro to Responsive Layout",
    "xp": 30
   },
   {
    "id": "webdev-8",
    "title": "CSS Flexbox in Depth",
    "xp": 31
   },
   {
    "id": "webdev-9",
    "title": "CSS Grid Layout",
    "xp": 32
   },
   {
    "id": "webdev-10",
    "title": "Positioning & Stacking with Z-Index",
    "xp": 32
   },
   {
    "id": "webdev-11",
    "title": "Semantic HTML & Accessibility",
    "xp": 33
   },
   {
    "id": "webdev-12",
    "title": "CSS Variables & Custom Properties",
    "xp": 34
   },
   {
    "id": "webdev-13",
    "title": "CSS Transitions & Animations",
    "xp": 35
   },
   {
    "id": "webdev-14",
    "title": "JavaScript & the DOM: Making Pages Interactive",
    "xp": 36
   },
   {
    "id": "webdev-15",
    "title": "Events & Event Handling",
    "xp": 37
   },
   {
    "id": "webdev-16",
    "title": "Fetch, AJAX & JSON: Talking to Servers",
    "xp": 38
   },
   {
    "id": "webdev-17",
    "title": "Browser Storage: Cookies, localStorage & sessionStorage",
    "xp": 39
   },
   {
    "id": "webdev-18",
    "title": "Web Performance & Optimization",
    "xp": 40
   },
   {
    "id": "webdev-19",
    "title": "Web Security Basics: HTTPS, XSS & CSRF",
    "xp": 42
   },
   {
    "id": "webdev-20",
    "title": "Deployment, Hosting & Modern Frameworks",
    "xp": 45
   }
  ]
 },
 {
  "id": "c",
  "title": "C",
  "icon": "🔵",
  "category": "language",
  "color": "#5C6BC0",
  "blurb": "Learn C from your very first \"hello\" to pointers — the language behind operating systems and games.",
  "levels": [
   {
    "id": "c-1",
    "title": "What is C & Compiling",
    "xp": 15
   },
   {
    "id": "c-2",
    "title": "printf and main",
    "xp": 17
   },
   {
    "id": "c-3",
    "title": "Variables & Data Types",
    "xp": 19
   },
   {
    "id": "c-4",
    "title": "Operators",
    "xp": 20
   },
   {
    "id": "c-5",
    "title": "if / else",
    "xp": 22
   },
   {
    "id": "c-6",
    "title": "Loops",
    "xp": 24
   },
   {
    "id": "c-7",
    "title": "Functions",
    "xp": 26
   },
   {
    "id": "c-8",
    "title": "Arrays & Pointers",
    "xp": 30
   },
   {
    "id": "c-9",
    "title": "Strings & String Functions",
    "xp": 31
   },
   {
    "id": "c-10",
    "title": "Multi-Dimensional Arrays & Pointer Arithmetic",
    "xp": 32
   },
   {
    "id": "c-11",
    "title": "Structures",
    "xp": 33
   },
   {
    "id": "c-12",
    "title": "Unions & Enums",
    "xp": 34
   },
   {
    "id": "c-13",
    "title": "Dynamic Memory Allocation",
    "xp": 36
   },
   {
    "id": "c-14",
    "title": "Storage Classes & Scope",
    "xp": 37
   },
   {
    "id": "c-15",
    "title": "The Preprocessor & Macros",
    "xp": 38
   },
   {
    "id": "c-16",
    "title": "Recursion",
    "xp": 39
   },
   {
    "id": "c-17",
    "title": "File Handling",
    "xp": 40
   },
   {
    "id": "c-18",
    "title": "Function Pointers & Command-Line Arguments",
    "xp": 42
   },
   {
    "id": "c-19",
    "title": "Bitwise Operators & Bit Manipulation",
    "xp": 43
   },
   {
    "id": "c-20",
    "title": "C Interview Essentials: Memory & Undefined Behavior",
    "xp": 45
   }
  ]
 },
 {
  "id": "cpp",
  "title": "C++",
  "icon": "🔷",
  "category": "language",
  "color": "#00599C",
  "blurb": "Go from your first compiled program to classes and the STL — the language behind fast, real-world software.",
  "levels": [
   {
    "id": "cpp-1",
    "title": "What C++ Is & Compiling",
    "xp": 15
   },
   {
    "id": "cpp-2",
    "title": "cout & the main Function",
    "xp": 16
   },
   {
    "id": "cpp-3",
    "title": "Variables & Types",
    "xp": 18
   },
   {
    "id": "cpp-4",
    "title": "Operators",
    "xp": 20
   },
   {
    "id": "cpp-5",
    "title": "if/else & Loops",
    "xp": 22
   },
   {
    "id": "cpp-6",
    "title": "Functions",
    "xp": 24
   },
   {
    "id": "cpp-7",
    "title": "Arrays & References",
    "xp": 26
   },
   {
    "id": "cpp-8",
    "title": "Classes, Objects & the STL",
    "xp": 30
   },
   {
    "id": "cpp-9",
    "title": "Pointers & Dynamic Memory",
    "xp": 31
   },
   {
    "id": "cpp-10",
    "title": "Constructors, Destructors & this",
    "xp": 33
   },
   {
    "id": "cpp-11",
    "title": "Inheritance",
    "xp": 34
   },
   {
    "id": "cpp-12",
    "title": "Polymorphism & Virtual Functions",
    "xp": 36
   },
   {
    "id": "cpp-13",
    "title": "Abstract Classes & Interfaces",
    "xp": 37
   },
   {
    "id": "cpp-14",
    "title": "Operator Overloading",
    "xp": 38
   },
   {
    "id": "cpp-15",
    "title": "Templates",
    "xp": 39
   },
   {
    "id": "cpp-16",
    "title": "Exception Handling",
    "xp": 40
   },
   {
    "id": "cpp-17",
    "title": "File I/O with Streams",
    "xp": 41
   },
   {
    "id": "cpp-18",
    "title": "Lambda Expressions & STL Algorithms",
    "xp": 42
   },
   {
    "id": "cpp-19",
    "title": "Smart Pointers & RAII Memory Management",
    "xp": 44
   },
   {
    "id": "cpp-20",
    "title": "Move Semantics & Rvalue References",
    "xp": 45
   }
  ]
 },
 {
  "id": "python",
  "title": "Python",
  "icon": "🐍",
  "category": "language",
  "color": "#3776AB",
  "blurb": "Learn Python from your very first line of code to files, dictionaries, and error-handling.",
  "levels": [
   {
    "id": "python-1",
    "title": "What Is Python & Running It",
    "xp": 15
   },
   {
    "id": "python-2",
    "title": "Variables & Types",
    "xp": 16
   },
   {
    "id": "python-3",
    "title": "Strings",
    "xp": 17
   },
   {
    "id": "python-4",
    "title": "Input & Print",
    "xp": 18
   },
   {
    "id": "python-5",
    "title": "Operators",
    "xp": 19
   },
   {
    "id": "python-6",
    "title": "If / Else",
    "xp": 21
   },
   {
    "id": "python-7",
    "title": "Loops",
    "xp": 22
   },
   {
    "id": "python-8",
    "title": "Lists",
    "xp": 24
   },
   {
    "id": "python-9",
    "title": "Functions",
    "xp": 26
   },
   {
    "id": "python-10",
    "title": "Dictionaries, Files & Exceptions",
    "xp": 30
   },
   {
    "id": "python-11",
    "title": "Tuples & Sets",
    "xp": 32
   },
   {
    "id": "python-12",
    "title": "List Comprehensions",
    "xp": 33
   },
   {
    "id": "python-13",
    "title": "String Formatting & Methods",
    "xp": 34
   },
   {
    "id": "python-14",
    "title": "Modules, Packages & pip",
    "xp": 35
   },
   {
    "id": "python-15",
    "title": "Classes & Objects in Python",
    "xp": 37
   },
   {
    "id": "python-16",
    "title": "Inheritance & Polymorphism",
    "xp": 38
   },
   {
    "id": "python-17",
    "title": "Lambda, map, filter & *args",
    "xp": 39
   },
   {
    "id": "python-18",
    "title": "Iterators & Generators",
    "xp": 41
   },
   {
    "id": "python-19",
    "title": "Decorators",
    "xp": 43
   },
   {
    "id": "python-20",
    "title": "Regular Expressions & JSON",
    "xp": 45
   }
  ]
 },
 {
  "id": "java",
  "title": "Java",
  "icon": "☕",
  "category": "language",
  "color": "#E76F00",
  "blurb": "Brew your first programs and learn the language that runs on billions of devices.",
  "levels": [
   {
    "id": "java-1",
    "title": "What Is Java?",
    "xp": 15
   },
   {
    "id": "java-2",
    "title": "Hello, World!",
    "xp": 16
   },
   {
    "id": "java-3",
    "title": "Variables & Types",
    "xp": 18
   },
   {
    "id": "java-4",
    "title": "Operators",
    "xp": 20
   },
   {
    "id": "java-5",
    "title": "Making Decisions",
    "xp": 22
   },
   {
    "id": "java-6",
    "title": "Loops",
    "xp": 24
   },
   {
    "id": "java-7",
    "title": "Methods",
    "xp": 26
   },
   {
    "id": "java-8",
    "title": "Classes & Objects",
    "xp": 30
   },
   {
    "id": "java-9",
    "title": "Encapsulation & Access Modifiers",
    "xp": 31
   },
   {
    "id": "java-10",
    "title": "Inheritance",
    "xp": 33
   },
   {
    "id": "java-11",
    "title": "Polymorphism",
    "xp": 34
   },
   {
    "id": "java-12",
    "title": "Abstraction: Abstract Classes & Interfaces",
    "xp": 35
   },
   {
    "id": "java-13",
    "title": "Arrays",
    "xp": 36
   },
   {
    "id": "java-14",
    "title": "Strings in Depth",
    "xp": 37
   },
   {
    "id": "java-15",
    "title": "Exception Handling",
    "xp": 38
   },
   {
    "id": "java-16",
    "title": "Collections: ArrayList & HashMap",
    "xp": 39
   },
   {
    "id": "java-17",
    "title": "Generics",
    "xp": 40
   },
   {
    "id": "java-18",
    "title": "Lambda Expressions & Streams",
    "xp": 42
   },
   {
    "id": "java-19",
    "title": "Multithreading Basics",
    "xp": 44
   },
   {
    "id": "java-20",
    "title": "JVM, Memory & Garbage Collection",
    "xp": 45
   }
  ]
 },
 {
  "id": "javascript",
  "title": "JavaScript",
  "icon": "🟨",
  "category": "language",
  "color": "#F7DF1E",
  "blurb": "Bring web pages to life — learn the language of the web from your first console.log to the DOM.",
  "levels": [
   {
    "id": "javascript-1",
    "title": "What JavaScript Is",
    "xp": 15
   },
   {
    "id": "javascript-2",
    "title": "Variables: let and const",
    "xp": 16
   },
   {
    "id": "javascript-3",
    "title": "Data Types",
    "xp": 18
   },
   {
    "id": "javascript-4",
    "title": "Operators",
    "xp": 19
   },
   {
    "id": "javascript-5",
    "title": "Making Decisions",
    "xp": 20
   },
   {
    "id": "javascript-6",
    "title": "Loops",
    "xp": 22
   },
   {
    "id": "javascript-7",
    "title": "Functions",
    "xp": 24
   },
   {
    "id": "javascript-8",
    "title": "Arrays and Objects",
    "xp": 27
   },
   {
    "id": "javascript-9",
    "title": "Touching the Page: the DOM",
    "xp": 30
   },
   {
    "id": "javascript-10",
    "title": "Scope and Closures",
    "xp": 33
   },
   {
    "id": "javascript-11",
    "title": "Higher-Order Functions: map, filter, reduce",
    "xp": 34
   },
   {
    "id": "javascript-12",
    "title": "Template Literals, Destructuring and Spread",
    "xp": 35
   },
   {
    "id": "javascript-13",
    "title": "Forms and the Event Object",
    "xp": 36
   },
   {
    "id": "javascript-14",
    "title": "JSON: Exchanging Data",
    "xp": 37
   },
   {
    "id": "javascript-15",
    "title": "Asynchronous JavaScript: Callbacks and Promises",
    "xp": 38
   },
   {
    "id": "javascript-16",
    "title": "Async/Await and Fetch",
    "xp": 40
   },
   {
    "id": "javascript-17",
    "title": "Error Handling: try, catch, finally",
    "xp": 41
   },
   {
    "id": "javascript-18",
    "title": "Classes and Object-Oriented JavaScript",
    "xp": 42
   },
   {
    "id": "javascript-19",
    "title": "The this Keyword and Hoisting",
    "xp": 43
   },
   {
    "id": "javascript-20",
    "title": "The Event Loop and Concurrency",
    "xp": 45
   }
  ]
 },
 {
  "id": "csharp",
  "title": "C#",
  "icon": "🟣",
  "category": "language",
  "color": "#68217A",
  "blurb": "Learn C# from your first line of code to your first class — one bite-sized level at a time.",
  "levels": [
   {
    "id": "csharp-1",
    "title": "What C# & .NET Are",
    "xp": 15
   },
   {
    "id": "csharp-2",
    "title": "Your First Program: Main & WriteLine",
    "xp": 17
   },
   {
    "id": "csharp-3",
    "title": "Variables & Types",
    "xp": 19
   },
   {
    "id": "csharp-4",
    "title": "Operators & Conditionals",
    "xp": 21
   },
   {
    "id": "csharp-5",
    "title": "Loops: Repeating Work",
    "xp": 24
   },
   {
    "id": "csharp-6",
    "title": "Methods: Reusable Blocks",
    "xp": 27
   },
   {
    "id": "csharp-7",
    "title": "Classes, Objects & Properties",
    "xp": 30
   },
   {
    "id": "csharp-8",
    "title": "Inheritance & base",
    "xp": 31
   },
   {
    "id": "csharp-9",
    "title": "Polymorphism & Overriding",
    "xp": 32
   },
   {
    "id": "csharp-10",
    "title": "Interfaces & Abstract Classes",
    "xp": 33
   },
   {
    "id": "csharp-11",
    "title": "Static Members",
    "xp": 34
   },
   {
    "id": "csharp-12",
    "title": "Exception Handling",
    "xp": 35
   },
   {
    "id": "csharp-13",
    "title": "Collections: List<T> & Dictionary<T>",
    "xp": 36
   },
   {
    "id": "csharp-14",
    "title": "Generics",
    "xp": 37
   },
   {
    "id": "csharp-15",
    "title": "Delegates & Events",
    "xp": 38
   },
   {
    "id": "csharp-16",
    "title": "LINQ Basics",
    "xp": 39
   },
   {
    "id": "csharp-17",
    "title": "File I/O & Streams",
    "xp": 40
   },
   {
    "id": "csharp-18",
    "title": "Multithreading & Tasks",
    "xp": 42
   },
   {
    "id": "csharp-19",
    "title": "async & await",
    "xp": 44
   },
   {
    "id": "csharp-20",
    "title": "Garbage Collection & IDisposable",
    "xp": 45
   }
  ]
 },
 {
  "id": "dsa",
  "title": "Data Structures & Algorithms",
  "icon": "🧮",
  "category": "core",
  "color": "#009688",
  "blurb": "Learn how to organize data and solve problems fast — from arrays to Big-O.",
  "levels": [
   {
    "id": "dsa-1",
    "title": "What Are Data Structures?",
    "xp": 15
   },
   {
    "id": "dsa-2",
    "title": "Arrays",
    "xp": 17
   },
   {
    "id": "dsa-3",
    "title": "Linked Lists",
    "xp": 19
   },
   {
    "id": "dsa-4",
    "title": "Stacks",
    "xp": 20
   },
   {
    "id": "dsa-5",
    "title": "Queues",
    "xp": 21
   },
   {
    "id": "dsa-6",
    "title": "Hashing & Hash Tables",
    "xp": 23
   },
   {
    "id": "dsa-7",
    "title": "Trees & Binary Search Trees",
    "xp": 25
   },
   {
    "id": "dsa-8",
    "title": "Searching: Linear & Binary",
    "xp": 27
   },
   {
    "id": "dsa-9",
    "title": "Sorting & Big-O Complexity",
    "xp": 30
   },
   {
    "id": "dsa-10",
    "title": "Recursion",
    "xp": 30
   },
   {
    "id": "dsa-11",
    "title": "Quick Sort & Heap Sort",
    "xp": 32
   },
   {
    "id": "dsa-12",
    "title": "Tree Traversals",
    "xp": 33
   },
   {
    "id": "dsa-13",
    "title": "Heaps & Priority Queues",
    "xp": 34
   },
   {
    "id": "dsa-14",
    "title": "Graphs: Representation",
    "xp": 35
   },
   {
    "id": "dsa-15",
    "title": "Graph Traversal: BFS & DFS",
    "xp": 36
   },
   {
    "id": "dsa-16",
    "title": "Balanced BSTs & AVL Trees",
    "xp": 38
   },
   {
    "id": "dsa-17",
    "title": "Dynamic Programming",
    "xp": 40
   },
   {
    "id": "dsa-18",
    "title": "Greedy Algorithms",
    "xp": 41
   },
   {
    "id": "dsa-19",
    "title": "Shortest Paths & Minimum Spanning Trees",
    "xp": 43
   },
   {
    "id": "dsa-20",
    "title": "NP-Completeness & Cracking the Interview",
    "xp": 45
   }
  ]
 },
 {
  "id": "oop",
  "title": "Object-Oriented Programming",
  "icon": "🧩",
  "category": "core",
  "color": "#7B1FA2",
  "blurb": "Model real-world things as objects — learn the four pillars of OOP one bite at a time.",
  "levels": [
   {
    "id": "oop-1",
    "title": "Objects & Classes",
    "xp": 15
   },
   {
    "id": "oop-2",
    "title": "Attributes & Methods",
    "xp": 17
   },
   {
    "id": "oop-3",
    "title": "Encapsulation",
    "xp": 20
   },
   {
    "id": "oop-4",
    "title": "Inheritance",
    "xp": 22
   },
   {
    "id": "oop-5",
    "title": "Polymorphism",
    "xp": 24
   },
   {
    "id": "oop-6",
    "title": "Abstraction",
    "xp": 27
   },
   {
    "id": "oop-7",
    "title": "Constructors",
    "xp": 30
   },
   {
    "id": "oop-8",
    "title": "Method Overloading vs Overriding",
    "xp": 31
   },
   {
    "id": "oop-9",
    "title": "Operator Overloading",
    "xp": 32
   },
   {
    "id": "oop-10",
    "title": "Static Members",
    "xp": 33
   },
   {
    "id": "oop-11",
    "title": "Interfaces vs Abstract Classes",
    "xp": 34
   },
   {
    "id": "oop-12",
    "title": "Multiple Inheritance & the Diamond Problem",
    "xp": 35
   },
   {
    "id": "oop-13",
    "title": "Composition vs Inheritance",
    "xp": 36
   },
   {
    "id": "oop-14",
    "title": "Exceptions in an OOP World",
    "xp": 37
   },
   {
    "id": "oop-15",
    "title": "Generics / Templates",
    "xp": 38
   },
   {
    "id": "oop-16",
    "title": "Design Pattern: Singleton",
    "xp": 39
   },
   {
    "id": "oop-17",
    "title": "Design Pattern: Factory",
    "xp": 40
   },
   {
    "id": "oop-18",
    "title": "SOLID Principles",
    "xp": 42
   },
   {
    "id": "oop-19",
    "title": "UML Class Diagrams",
    "xp": 44
   },
   {
    "id": "oop-20",
    "title": "Coupling, Cohesion & Good OOP Design",
    "xp": 45
   }
  ]
 },
 {
  "id": "os",
  "title": "Operating Systems",
  "icon": "🧠",
  "category": "core",
  "color": "#FF7043",
  "blurb": "Meet the invisible manager that runs your computer — from apps and memory to files and CPU time.",
  "levels": [
   {
    "id": "os-1",
    "title": "What an Operating System Does",
    "xp": 15
   },
   {
    "id": "os-2",
    "title": "Programs, Processes, and States",
    "xp": 18
   },
   {
    "id": "os-3",
    "title": "CPU Scheduling Basics",
    "xp": 20
   },
   {
    "id": "os-4",
    "title": "Threads",
    "xp": 22
   },
   {
    "id": "os-5",
    "title": "Memory Management & Paging",
    "xp": 25
   },
   {
    "id": "os-6",
    "title": "Deadlock Basics",
    "xp": 27
   },
   {
    "id": "os-7",
    "title": "File System Basics",
    "xp": 30
   },
   {
    "id": "os-8",
    "title": "CPU Scheduling Algorithms",
    "xp": 31
   },
   {
    "id": "os-9",
    "title": "Process Synchronization & Critical Sections",
    "xp": 32
   },
   {
    "id": "os-10",
    "title": "Semaphores & Mutexes",
    "xp": 33
   },
   {
    "id": "os-11",
    "title": "Classic Synchronization Problems",
    "xp": 34
   },
   {
    "id": "os-12",
    "title": "Handling Deadlocks: Prevention, Avoidance & Recovery",
    "xp": 35
   },
   {
    "id": "os-13",
    "title": "Contiguous Memory Allocation & Fragmentation",
    "xp": 36
   },
   {
    "id": "os-14",
    "title": "Virtual Memory & Demand Paging",
    "xp": 37
   },
   {
    "id": "os-15",
    "title": "Page Replacement Algorithms",
    "xp": 38
   },
   {
    "id": "os-16",
    "title": "Thrashing",
    "xp": 39
   },
   {
    "id": "os-17",
    "title": "Disk Scheduling Algorithms",
    "xp": 40
   },
   {
    "id": "os-18",
    "title": "File Allocation Methods & Free Space Management",
    "xp": 41
   },
   {
    "id": "os-19",
    "title": "I/O Systems, Interrupts & DMA",
    "xp": 43
   },
   {
    "id": "os-20",
    "title": "OS Protection, Security & Virtualization",
    "xp": 45
   }
  ]
 },
 {
  "id": "dbms",
  "title": "DBMS",
  "icon": "🗄️",
  "category": "core",
  "color": "#4CAF50",
  "blurb": "From your first table to ACID transactions — learn how databases really store and protect data.",
  "levels": [
   {
    "id": "dbms-1",
    "title": "What is a Database?",
    "xp": 15
   },
   {
    "id": "dbms-2",
    "title": "Tables, Rows & Columns",
    "xp": 16
   },
   {
    "id": "dbms-3",
    "title": "Keys: Primary & Foreign",
    "xp": 19
   },
   {
    "id": "dbms-4",
    "title": "Your First SQL SELECT",
    "xp": 20
   },
   {
    "id": "dbms-5",
    "title": "Filtering with WHERE",
    "xp": 22
   },
   {
    "id": "dbms-6",
    "title": "Changing Data: INSERT, UPDATE, DELETE",
    "xp": 24
   },
   {
    "id": "dbms-7",
    "title": "Normalization & ACID Transactions",
    "xp": 30
   },
   {
    "id": "dbms-8",
    "title": "Functional Dependencies & Normal Forms",
    "xp": 31
   },
   {
    "id": "dbms-9",
    "title": "BCNF & Denormalization",
    "xp": 32
   },
   {
    "id": "dbms-10",
    "title": "Joins: Combining Tables",
    "xp": 33
   },
   {
    "id": "dbms-11",
    "title": "GROUP BY, HAVING & Aggregates",
    "xp": 34
   },
   {
    "id": "dbms-12",
    "title": "Subqueries & Nested Queries",
    "xp": 35
   },
   {
    "id": "dbms-13",
    "title": "Views",
    "xp": 36
   },
   {
    "id": "dbms-14",
    "title": "ER Diagrams & Relational Mapping",
    "xp": 37
   },
   {
    "id": "dbms-15",
    "title": "Relational Algebra",
    "xp": 38
   },
   {
    "id": "dbms-16",
    "title": "Indexes & B-Trees",
    "xp": 39
   },
   {
    "id": "dbms-17",
    "title": "Concurrency Control & Locking",
    "xp": 40
   },
   {
    "id": "dbms-18",
    "title": "Isolation Levels & Serializability",
    "xp": 42
   },
   {
    "id": "dbms-19",
    "title": "Deadlock in DBMS & Recovery",
    "xp": 44
   },
   {
    "id": "dbms-20",
    "title": "SQL vs NoSQL & Distributed Databases",
    "xp": 45
   }
  ]
 },
 {
  "id": "networks",
  "title": "Computer Networks",
  "icon": "🌐",
  "category": "core",
  "color": "#3D8BFD",
  "blurb": "From one cable to the whole internet — learn how computers find each other and talk.",
  "levels": [
   {
    "id": "networks-1",
    "title": "What Is a Network?",
    "xp": 15
   },
   {
    "id": "networks-2",
    "title": "LAN and WAN",
    "xp": 17
   },
   {
    "id": "networks-3",
    "title": "IP Addresses",
    "xp": 20
   },
   {
    "id": "networks-4",
    "title": "The Network Layers",
    "xp": 22
   },
   {
    "id": "networks-5",
    "title": "Data Travels in Packets",
    "xp": 24
   },
   {
    "id": "networks-6",
    "title": "DNS: The Internet's Phonebook",
    "xp": 26
   },
   {
    "id": "networks-7",
    "title": "HTTP, HTTPS and Common Protocols",
    "xp": 30
   },
   {
    "id": "networks-8",
    "title": "Switches, Routers and Hubs",
    "xp": 31
   },
   {
    "id": "networks-9",
    "title": "MAC Addresses and ARP",
    "xp": 32
   },
   {
    "id": "networks-10",
    "title": "Subnetting and CIDR",
    "xp": 33
   },
   {
    "id": "networks-11",
    "title": "NAT: Sharing One Public IP",
    "xp": 34
   },
   {
    "id": "networks-12",
    "title": "The Three-Way TCP Handshake",
    "xp": 35
   },
   {
    "id": "networks-13",
    "title": "Error Detection: Checksums and CRC",
    "xp": 36
   },
   {
    "id": "networks-14",
    "title": "Routing Algorithms",
    "xp": 37
   },
   {
    "id": "networks-15",
    "title": "Congestion Control",
    "xp": 38
   },
   {
    "id": "networks-16",
    "title": "Wireless Networks and Wi-Fi Standards",
    "xp": 39
   },
   {
    "id": "networks-17",
    "title": "Firewalls and VPNs",
    "xp": 40
   },
   {
    "id": "networks-18",
    "title": "Socket Programming Basics",
    "xp": 42
   },
   {
    "id": "networks-19",
    "title": "Load Balancers and CDNs",
    "xp": 44
   },
   {
    "id": "networks-20",
    "title": "Common Network Attacks and Defenses",
    "xp": 45
   }
  ]
 },
 {
  "id": "architecture",
  "title": "Computer Architecture",
  "icon": "🏗️",
  "category": "core",
  "color": "#8E7CC3",
  "blurb": "Peek inside the machine: how a computer stores, moves, and crunches every instruction.",
  "levels": [
   {
    "id": "architecture-1",
    "title": "The von Neumann Model",
    "xp": 15
   },
   {
    "id": "architecture-2",
    "title": "Inside the CPU",
    "xp": 17
   },
   {
    "id": "architecture-3",
    "title": "Fetch, Decode, Execute",
    "xp": 20
   },
   {
    "id": "architecture-4",
    "title": "Memory Hierarchy and Cache",
    "xp": 22
   },
   {
    "id": "architecture-5",
    "title": "Buses: The Data Highways",
    "xp": 22
   },
   {
    "id": "architecture-6",
    "title": "Binary and Hexadecimal",
    "xp": 25
   },
   {
    "id": "architecture-7",
    "title": "How Instructions Work",
    "xp": 28
   },
   {
    "id": "architecture-8",
    "title": "Addressing Modes",
    "xp": 30
   },
   {
    "id": "architecture-9",
    "title": "RISC vs CISC",
    "xp": 31
   },
   {
    "id": "architecture-10",
    "title": "Instruction Pipelining",
    "xp": 33
   },
   {
    "id": "architecture-11",
    "title": "Pipeline Hazards",
    "xp": 34
   },
   {
    "id": "architecture-12",
    "title": "Interrupts and Exception Handling",
    "xp": 35
   },
   {
    "id": "architecture-13",
    "title": "I/O Techniques: Polling, Interrupts, DMA",
    "xp": 36
   },
   {
    "id": "architecture-14",
    "title": "Cache Mapping Techniques",
    "xp": 37
   },
   {
    "id": "architecture-15",
    "title": "Virtual Memory",
    "xp": 38
   },
   {
    "id": "architecture-16",
    "title": "Performance Metrics: CPI, MIPS & Amdahl's Law",
    "xp": 39
   },
   {
    "id": "architecture-17",
    "title": "Multicore & Multiprocessing",
    "xp": 40
   },
   {
    "id": "architecture-18",
    "title": "Flynn's Taxonomy & Parallel Architectures",
    "xp": 41
   },
   {
    "id": "architecture-19",
    "title": "Superscalar & Out-of-Order Execution",
    "xp": 43
   },
   {
    "id": "architecture-20",
    "title": "Modern CPU Design: Putting It All Together",
    "xp": 45
   }
  ]
 },
 {
  "id": "microprocessors",
  "title": "Microprocessors & Microcontrollers",
  "icon": "🔩",
  "category": "core",
  "color": "#6D4C41",
  "blurb": "Meet the tiny brains that run every computer — from a single CPU chip to the all-in-one controllers inside your gadgets.",
  "levels": [
   {
    "id": "microprocessors-1",
    "title": "What Is a Microprocessor?",
    "xp": 15
   },
   {
    "id": "microprocessors-2",
    "title": "Inside a CPU: ALU, Registers & Buses",
    "xp": 18
   },
   {
    "id": "microprocessors-3",
    "title": "The 8085 & 8086 Idea",
    "xp": 20
   },
   {
    "id": "microprocessors-4",
    "title": "Instructions & the Instruction Cycle",
    "xp": 22
   },
   {
    "id": "microprocessors-5",
    "title": "Memory & I/O",
    "xp": 24
   },
   {
    "id": "microprocessors-6",
    "title": "Interrupts",
    "xp": 27
   },
   {
    "id": "microprocessors-7",
    "title": "Microprocessor vs Microcontroller",
    "xp": 30
   },
   {
    "id": "microprocessors-8",
    "title": "Addressing Modes",
    "xp": 31
   },
   {
    "id": "microprocessors-9",
    "title": "8085 Instruction Set & Assembly Basics",
    "xp": 32
   },
   {
    "id": "microprocessors-10",
    "title": "Stack, Subroutines & the Stack Pointer",
    "xp": 34
   },
   {
    "id": "microprocessors-11",
    "title": "Timing Diagrams & Machine Cycles",
    "xp": 35
   },
   {
    "id": "microprocessors-12",
    "title": "8086 Architecture: Segmentation & Pipelining",
    "xp": 36
   },
   {
    "id": "microprocessors-13",
    "title": "8086 Registers & Addressing Modes",
    "xp": 37
   },
   {
    "id": "microprocessors-14",
    "title": "8086 Assembly Programming & Assembler Directives",
    "xp": 38
   },
   {
    "id": "microprocessors-15",
    "title": "DMA: Direct Memory Access",
    "xp": 39
   },
   {
    "id": "microprocessors-16",
    "title": "Programmable Peripheral Interface: the 8255",
    "xp": 40
   },
   {
    "id": "microprocessors-17",
    "title": "Timers (8253/8254) & Serial Communication (8251)",
    "xp": 41
   },
   {
    "id": "microprocessors-18",
    "title": "Memory Interfacing & Memory-Mapped vs I/O-Mapped I/O",
    "xp": 42
   },
   {
    "id": "microprocessors-19",
    "title": "The 8051 Microcontroller Architecture",
    "xp": 43
   },
   {
    "id": "microprocessors-20",
    "title": "Pipelining Hazards & Where Modern CPUs Go From Here",
    "xp": 45
   }
  ]
 },
 {
  "id": "daa",
  "title": "Design & Analysis of Algorithms",
  "icon": "📐",
  "category": "core",
  "color": "#3F51B5",
  "blurb": "Learn to design clever algorithms and measure how fast and lean they really are.",
  "levels": [
   {
    "id": "daa-1",
    "title": "What Is Algorithm Analysis?",
    "xp": 15
   },
   {
    "id": "daa-2",
    "title": "Big-O and Asymptotic Notation",
    "xp": 18
   },
   {
    "id": "daa-3",
    "title": "Divide and Conquer",
    "xp": 20
   },
   {
    "id": "daa-4",
    "title": "The Greedy Method",
    "xp": 22
   },
   {
    "id": "daa-5",
    "title": "Dynamic Programming",
    "xp": 25
   },
   {
    "id": "daa-6",
    "title": "Backtracking",
    "xp": 27
   },
   {
    "id": "daa-7",
    "title": "Intro to Graph Algorithms",
    "xp": 30
   },
   {
    "id": "daa-8",
    "title": "Recurrence Relations & the Master Theorem",
    "xp": 31
   },
   {
    "id": "daa-9",
    "title": "Minimum Spanning Trees: Kruskal & Prim",
    "xp": 32
   },
   {
    "id": "daa-10",
    "title": "Shortest Paths: Bellman-Ford & Floyd-Warshall",
    "xp": 33
   },
   {
    "id": "daa-11",
    "title": "Topological Sort & DAGs",
    "xp": 34
   },
   {
    "id": "daa-12",
    "title": "Sorting Algorithms Compared: Merge & Quick Sort",
    "xp": 35
   },
   {
    "id": "daa-13",
    "title": "Heaps and Heap Sort",
    "xp": 36
   },
   {
    "id": "daa-14",
    "title": "Lower Bounds: Why Comparison Sorting Needs n log n",
    "xp": 37
   },
   {
    "id": "daa-15",
    "title": "Advanced DP: Knapsack & Longest Common Subsequence",
    "xp": 38
   },
   {
    "id": "daa-16",
    "title": "String Matching: Naive Search & KMP",
    "xp": 39
   },
   {
    "id": "daa-17",
    "title": "Network Flow: Max-Flow Min-Cut",
    "xp": 40
   },
   {
    "id": "daa-18",
    "title": "Amortized Analysis",
    "xp": 41
   },
   {
    "id": "daa-19",
    "title": "NP-Completeness and P vs NP",
    "xp": 43
   },
   {
    "id": "daa-20",
    "title": "Approximation & Randomized Algorithms",
    "xp": 45
   }
  ]
 },
 {
  "id": "toc",
  "title": "Theory of Computation",
  "icon": "♾️",
  "category": "core",
  "color": "#5D4037",
  "blurb": "Discover the beautiful math behind what computers can and cannot do — from tiny machines to the limits of computing.",
  "levels": [
   {
    "id": "toc-1",
    "title": "What Is Automata Theory?",
    "xp": 15
   },
   {
    "id": "toc-2",
    "title": "Alphabets, Strings & Languages",
    "xp": 17
   },
   {
    "id": "toc-3",
    "title": "Finite Automata (DFA)",
    "xp": 20
   },
   {
    "id": "toc-4",
    "title": "Nondeterministic Automata (NFA)",
    "xp": 22
   },
   {
    "id": "toc-5",
    "title": "Regular Expressions & Regular Languages",
    "xp": 24
   },
   {
    "id": "toc-6",
    "title": "Context-Free Grammars",
    "xp": 27
   },
   {
    "id": "toc-7",
    "title": "Turing Machines & the Limits of Computing",
    "xp": 30
   },
   {
    "id": "toc-8",
    "title": "Pumping Lemma for Regular Languages",
    "xp": 32
   },
   {
    "id": "toc-9",
    "title": "Closure Properties & DFA Minimization",
    "xp": 33
   },
   {
    "id": "toc-10",
    "title": "Pushdown Automata (PDA)",
    "xp": 34
   },
   {
    "id": "toc-11",
    "title": "Ambiguous Grammars & Parse Trees",
    "xp": 35
   },
   {
    "id": "toc-12",
    "title": "Pumping Lemma for Context-Free Languages",
    "xp": 36
   },
   {
    "id": "toc-13",
    "title": "Chomsky & Greibach Normal Forms",
    "xp": 37
   },
   {
    "id": "toc-14",
    "title": "Recursive & Recursively Enumerable Languages",
    "xp": 38
   },
   {
    "id": "toc-15",
    "title": "The Universal Turing Machine",
    "xp": 39
   },
   {
    "id": "toc-16",
    "title": "Decidability, Reductions & More Undecidable Problems",
    "xp": 40
   },
   {
    "id": "toc-17",
    "title": "Rice's Theorem",
    "xp": 41
   },
   {
    "id": "toc-18",
    "title": "Complexity Classes: P and NP",
    "xp": 42
   },
   {
    "id": "toc-19",
    "title": "NP-Completeness, Cook-Levin & SAT",
    "xp": 44
   },
   {
    "id": "toc-20",
    "title": "The Limits of Computation: Where TOC Meets Real Software",
    "xp": 45
   }
  ]
 },
 {
  "id": "compiler",
  "title": "Compiler Design",
  "icon": "⚙️",
  "category": "core",
  "color": "#455A64",
  "blurb": "Follow your code on its journey from human text to running machine instructions.",
  "levels": [
   {
    "id": "compiler-1",
    "title": "What a Compiler Does",
    "xp": 15
   },
   {
    "id": "compiler-2",
    "title": "The Phases of Compilation",
    "xp": 17
   },
   {
    "id": "compiler-3",
    "title": "Lexical Analysis: Tokens",
    "xp": 19
   },
   {
    "id": "compiler-4",
    "title": "Syntax Analysis: Parsing",
    "xp": 21
   },
   {
    "id": "compiler-5",
    "title": "Parse Trees and Syntax Trees",
    "xp": 23
   },
   {
    "id": "compiler-6",
    "title": "Semantic Analysis",
    "xp": 25
   },
   {
    "id": "compiler-7",
    "title": "Intermediate and Final Code Generation",
    "xp": 30
   },
   {
    "id": "compiler-8",
    "title": "Top-Down Parsing: FIRST & FOLLOW",
    "xp": 31
   },
   {
    "id": "compiler-9",
    "title": "LL(1) Parsing Tables",
    "xp": 32
   },
   {
    "id": "compiler-10",
    "title": "Bottom-Up (Shift-Reduce) Parsing",
    "xp": 33
   },
   {
    "id": "compiler-11",
    "title": "LR Parsers: SLR, CLR & LALR",
    "xp": 34
   },
   {
    "id": "compiler-12",
    "title": "Parser Generators: Lex & Yacc",
    "xp": 35
   },
   {
    "id": "compiler-13",
    "title": "Error Detection & Recovery",
    "xp": 36
   },
   {
    "id": "compiler-14",
    "title": "Type Systems & Type Checking",
    "xp": 37
   },
   {
    "id": "compiler-15",
    "title": "Storage Allocation: Static, Stack & Heap",
    "xp": 38
   },
   {
    "id": "compiler-16",
    "title": "Activation Records & Function Calls",
    "xp": 39
   },
   {
    "id": "compiler-17",
    "title": "Control Flow Graphs & Data Flow Analysis",
    "xp": 41
   },
   {
    "id": "compiler-18",
    "title": "Loop Optimization",
    "xp": 42
   },
   {
    "id": "compiler-19",
    "title": "Register Allocation by Graph Coloring",
    "xp": 44
   },
   {
    "id": "compiler-20",
    "title": "Real Compilers: GCC, LLVM & JIT",
    "xp": 45
   }
  ]
 },
 {
  "id": "software-engineering",
  "title": "Software Engineering",
  "icon": "🏛️",
  "category": "core",
  "color": "#0277BD",
  "blurb": "Learn to build software like a pro — from what engineering means to models, design, testing and UML.",
  "levels": [
   {
    "id": "software-engineering-1",
    "title": "What Is Software Engineering?",
    "xp": 15
   },
   {
    "id": "software-engineering-2",
    "title": "The Software Life Cycle (SDLC)",
    "xp": 17
   },
   {
    "id": "software-engineering-3",
    "title": "Requirements Gathering",
    "xp": 19
   },
   {
    "id": "software-engineering-4",
    "title": "Process Models: Waterfall vs Agile",
    "xp": 22
   },
   {
    "id": "software-engineering-5",
    "title": "Software Design",
    "xp": 24
   },
   {
    "id": "software-engineering-6",
    "title": "Software Testing",
    "xp": 26
   },
   {
    "id": "software-engineering-7",
    "title": "Maintenance & Intro to UML",
    "xp": 30
   },
   {
    "id": "software-engineering-8",
    "title": "Sequence & Activity Diagrams",
    "xp": 31
   },
   {
    "id": "software-engineering-9",
    "title": "Coupling & Cohesion",
    "xp": 32
   },
   {
    "id": "software-engineering-10",
    "title": "SOLID Design Principles",
    "xp": 33
   },
   {
    "id": "software-engineering-11",
    "title": "Software Architecture Styles",
    "xp": 34
   },
   {
    "id": "software-engineering-12",
    "title": "Design Patterns: Singleton & Factory",
    "xp": 35
   },
   {
    "id": "software-engineering-13",
    "title": "Design Patterns: Observer & MVC",
    "xp": 36
   },
   {
    "id": "software-engineering-14",
    "title": "Requirements Engineering & the SRS",
    "xp": 37
   },
   {
    "id": "software-engineering-15",
    "title": "Effort Estimation: COCOMO & Function Points",
    "xp": 38
   },
   {
    "id": "software-engineering-16",
    "title": "Project Scheduling: WBS & Gantt Charts",
    "xp": 39
   },
   {
    "id": "software-engineering-17",
    "title": "Risk Management in Software Projects",
    "xp": 40
   },
   {
    "id": "software-engineering-18",
    "title": "Verification & Validation",
    "xp": 41
   },
   {
    "id": "software-engineering-19",
    "title": "Software Quality & Metrics",
    "xp": 43
   },
   {
    "id": "software-engineering-20",
    "title": "Agile in Depth: Scrum Roles & Sprints",
    "xp": 45
   }
  ]
 },
 {
  "id": "system-programming",
  "title": "System Programming",
  "icon": "🖥️",
  "category": "core",
  "color": "#37474F",
  "blurb": "Peek under the hood: how assemblers, linkers, and the OS turn your code into a running program.",
  "levels": [
   {
    "id": "system-programming-1",
    "title": "System vs Application Software",
    "xp": 15
   },
   {
    "id": "system-programming-2",
    "title": "Assemblers",
    "xp": 18
   },
   {
    "id": "system-programming-3",
    "title": "Loaders & Linkers",
    "xp": 20
   },
   {
    "id": "system-programming-4",
    "title": "Macros & Macro Processors",
    "xp": 24
   },
   {
    "id": "system-programming-5",
    "title": "The OS Interface & System Calls",
    "xp": 27
   },
   {
    "id": "system-programming-6",
    "title": "Device Drivers (Advanced)",
    "xp": 30
   },
   {
    "id": "system-programming-7",
    "title": "Text Editors",
    "xp": 31
   },
   {
    "id": "system-programming-8",
    "title": "Debuggers",
    "xp": 32
   },
   {
    "id": "system-programming-9",
    "title": "Interpreters",
    "xp": 33
   },
   {
    "id": "system-programming-10",
    "title": "Assembler Design: Pass 1 and Pass 2",
    "xp": 34
   },
   {
    "id": "system-programming-11",
    "title": "Symbol Tables & Literal Tables",
    "xp": 35
   },
   {
    "id": "system-programming-12",
    "title": "Loaders: Absolute, Relocating & Direct Linking",
    "xp": 36
   },
   {
    "id": "system-programming-13",
    "title": "Static vs Dynamic Linking",
    "xp": 37
   },
   {
    "id": "system-programming-14",
    "title": "Relocation & Position-Independent Code",
    "xp": 38
   },
   {
    "id": "system-programming-15",
    "title": "Shared Libraries at Runtime",
    "xp": 39
   },
   {
    "id": "system-programming-16",
    "title": "Lexical Analyzer Generators (Lex)",
    "xp": 40
   },
   {
    "id": "system-programming-17",
    "title": "Parser Generators (Yacc)",
    "xp": 41
   },
   {
    "id": "system-programming-18",
    "title": "Build Tools & Software Configuration",
    "xp": 42
   },
   {
    "id": "system-programming-19",
    "title": "Virtual Machines & Bytecode",
    "xp": 44
   },
   {
    "id": "system-programming-20",
    "title": "Just-In-Time Compilation",
    "xp": 45
   }
  ]
 },
 {
  "id": "computer-graphics",
  "title": "Computer Graphics",
  "icon": "🖼️",
  "category": "core",
  "color": "#C2185B",
  "blurb": "From a single glowing pixel to spinning 3D worlds — learn how computers draw everything you see.",
  "levels": [
   {
    "id": "computer-graphics-1",
    "title": "What Is Computer Graphics?",
    "xp": 15
   },
   {
    "id": "computer-graphics-2",
    "title": "Pixels & Raster Displays",
    "xp": 18
   },
   {
    "id": "computer-graphics-3",
    "title": "Coordinate Systems",
    "xp": 20
   },
   {
    "id": "computer-graphics-4",
    "title": "Drawing Lines & Circles",
    "xp": 22
   },
   {
    "id": "computer-graphics-5",
    "title": "2D Transformations",
    "xp": 26
   },
   {
    "id": "computer-graphics-6",
    "title": "Into 3D & Clipping",
    "xp": 30
   },
   {
    "id": "computer-graphics-7",
    "title": "Bezier Curves & B-Splines",
    "xp": 31
   },
   {
    "id": "computer-graphics-8",
    "title": "Representing 3D Objects",
    "xp": 32
   },
   {
    "id": "computer-graphics-9",
    "title": "Illumination Models",
    "xp": 33
   },
   {
    "id": "computer-graphics-10",
    "title": "Shading: Flat, Gouraud & Phong",
    "xp": 34
   },
   {
    "id": "computer-graphics-11",
    "title": "Texture Mapping",
    "xp": 35
   },
   {
    "id": "computer-graphics-12",
    "title": "Visible Surface Detection",
    "xp": 36
   },
   {
    "id": "computer-graphics-13",
    "title": "Color Models: RGB, CMYK & HSV",
    "xp": 37
   },
   {
    "id": "computer-graphics-14",
    "title": "Fractals & Procedural Graphics",
    "xp": 38
   },
   {
    "id": "computer-graphics-15",
    "title": "Computer Animation Basics",
    "xp": 39
   },
   {
    "id": "computer-graphics-16",
    "title": "Compositing & Alpha Blending",
    "xp": 40
   },
   {
    "id": "computer-graphics-17",
    "title": "Ray Tracing",
    "xp": 41
   },
   {
    "id": "computer-graphics-18",
    "title": "The Modern Rendering Pipeline & GPUs",
    "xp": 43
   },
   {
    "id": "computer-graphics-19",
    "title": "Shaders: Vertex & Fragment Programs",
    "xp": 44
   },
   {
    "id": "computer-graphics-20",
    "title": "Real-Time vs Offline Rendering",
    "xp": 45
   }
  ]
 },
 {
  "id": "discrete-math",
  "title": "Discrete Mathematics",
  "icon": "➗",
  "category": "math",
  "color": "#1565C0",
  "blurb": "The math behind code: sets, logic, counting, and graphs that power every algorithm.",
  "levels": [
   {
    "id": "discrete-math-1",
    "title": "Sets & Set Operations",
    "xp": 15
   },
   {
    "id": "discrete-math-2",
    "title": "Relations",
    "xp": 18
   },
   {
    "id": "discrete-math-3",
    "title": "Functions",
    "xp": 20
   },
   {
    "id": "discrete-math-4",
    "title": "Propositional Logic",
    "xp": 22
   },
   {
    "id": "discrete-math-5",
    "title": "Combinatorics: Counting & Permutations",
    "xp": 25
   },
   {
    "id": "discrete-math-6",
    "title": "Graph Theory Basics",
    "xp": 27
   },
   {
    "id": "discrete-math-7",
    "title": "Mathematical Induction",
    "xp": 30
   },
   {
    "id": "discrete-math-8",
    "title": "The Pigeonhole Principle",
    "xp": 31
   },
   {
    "id": "discrete-math-9",
    "title": "Number Theory: Divisibility & GCD",
    "xp": 32
   },
   {
    "id": "discrete-math-10",
    "title": "Modular Arithmetic",
    "xp": 33
   },
   {
    "id": "discrete-math-11",
    "title": "Predicate Logic & Quantifiers",
    "xp": 34
   },
   {
    "id": "discrete-math-12",
    "title": "Proof Techniques: Contrapositive & Contradiction",
    "xp": 35
   },
   {
    "id": "discrete-math-13",
    "title": "Recurrence Relations",
    "xp": 36
   },
   {
    "id": "discrete-math-14",
    "title": "Trees & Spanning Trees",
    "xp": 37
   },
   {
    "id": "discrete-math-15",
    "title": "Graph Traversal: BFS & DFS",
    "xp": 38
   },
   {
    "id": "discrete-math-16",
    "title": "Boolean Algebra & Logic Gates",
    "xp": 39
   },
   {
    "id": "discrete-math-17",
    "title": "Partial Orders & Lattices",
    "xp": 41
   },
   {
    "id": "discrete-math-18",
    "title": "Group Theory Basics",
    "xp": 42
   },
   {
    "id": "discrete-math-19",
    "title": "Graph Coloring & Matching",
    "xp": 44
   },
   {
    "id": "discrete-math-20",
    "title": "Algorithmic Complexity & NP-Completeness",
    "xp": 45
   }
  ]
 },
 {
  "id": "engineering-math",
  "title": "Engineering Mathematics",
  "icon": "📈",
  "category": "math",
  "color": "#00838F",
  "blurb": "The math engine behind graphics, AI, and everything your code quietly computes.",
  "levels": [
   {
    "id": "engineering-math-1",
    "title": "Why Math Matters in CS",
    "xp": 15
   },
   {
    "id": "engineering-math-2",
    "title": "Vectors & Matrices",
    "xp": 18
   },
   {
    "id": "engineering-math-3",
    "title": "Matrix Operations",
    "xp": 20
   },
   {
    "id": "engineering-math-4",
    "title": "Derivatives: Rate of Change",
    "xp": 23
   },
   {
    "id": "engineering-math-5",
    "title": "Integrals: Area & Accumulation",
    "xp": 26
   },
   {
    "id": "engineering-math-6",
    "title": "How It All Powers Computing",
    "xp": 30
   },
   {
    "id": "engineering-math-7",
    "title": "Determinants & Matrix Inverse",
    "xp": 31
   },
   {
    "id": "engineering-math-8",
    "title": "Systems of Linear Equations & Gaussian Elimination",
    "xp": 32
   },
   {
    "id": "engineering-math-9",
    "title": "Eigenvalues & Eigenvectors",
    "xp": 33
   },
   {
    "id": "engineering-math-10",
    "title": "Complex Numbers",
    "xp": 34
   },
   {
    "id": "engineering-math-11",
    "title": "Partial Derivatives",
    "xp": 35
   },
   {
    "id": "engineering-math-12",
    "title": "Vector Calculus: Gradient, Divergence & Curl",
    "xp": 36
   },
   {
    "id": "engineering-math-13",
    "title": "Multiple Integrals",
    "xp": 37
   },
   {
    "id": "engineering-math-14",
    "title": "Ordinary Differential Equations",
    "xp": 38
   },
   {
    "id": "engineering-math-15",
    "title": "Laplace Transforms",
    "xp": 39
   },
   {
    "id": "engineering-math-16",
    "title": "Fourier Series & Transforms",
    "xp": 40
   },
   {
    "id": "engineering-math-17",
    "title": "Numerical Methods: Finding Roots",
    "xp": 41
   },
   {
    "id": "engineering-math-18",
    "title": "Numerical Integration",
    "xp": 42
   },
   {
    "id": "engineering-math-19",
    "title": "Optimization: Gradient Descent & Lagrange Multipliers",
    "xp": 44
   },
   {
    "id": "engineering-math-20",
    "title": "Eigenvalues in the Real World: PCA & PageRank",
    "xp": 45
   }
  ]
 },
 {
  "id": "probability-stats",
  "title": "Probability & Statistics",
  "icon": "🎲",
  "category": "math",
  "color": "#2E7D32",
  "blurb": "Roll the dice on data: learn to measure chance and make sense of numbers, the way real engineers and data scientists do.",
  "levels": [
   {
    "id": "probability-stats-1",
    "title": "What Is Probability?",
    "xp": 15
   },
   {
    "id": "probability-stats-2",
    "title": "Events & Outcomes",
    "xp": 18
   },
   {
    "id": "probability-stats-3",
    "title": "Mean, Median & Mode",
    "xp": 20
   },
   {
    "id": "probability-stats-4",
    "title": "Variance & Standard Deviation",
    "xp": 23
   },
   {
    "id": "probability-stats-5",
    "title": "Common Distributions",
    "xp": 26
   },
   {
    "id": "probability-stats-6",
    "title": "Why Stats Powers Data Science",
    "xp": 30
   },
   {
    "id": "probability-stats-7",
    "title": "Conditional Probability",
    "xp": 30
   },
   {
    "id": "probability-stats-8",
    "title": "Bayes' Theorem",
    "xp": 31
   },
   {
    "id": "probability-stats-9",
    "title": "Independent Events & the Multiplication Rule",
    "xp": 31
   },
   {
    "id": "probability-stats-10",
    "title": "Counting Techniques: Permutations & Combinations",
    "xp": 32
   },
   {
    "id": "probability-stats-11",
    "title": "Random Variables & Probability Distributions",
    "xp": 33
   },
   {
    "id": "probability-stats-12",
    "title": "The Binomial Distribution",
    "xp": 34
   },
   {
    "id": "probability-stats-13",
    "title": "The Poisson Distribution",
    "xp": 35
   },
   {
    "id": "probability-stats-14",
    "title": "The Normal Distribution & Z-Scores",
    "xp": 36
   },
   {
    "id": "probability-stats-15",
    "title": "Sampling & the Central Limit Theorem",
    "xp": 37
   },
   {
    "id": "probability-stats-16",
    "title": "Confidence Intervals",
    "xp": 38
   },
   {
    "id": "probability-stats-17",
    "title": "Hypothesis Testing: Null vs Alternative",
    "xp": 40
   },
   {
    "id": "probability-stats-18",
    "title": "t-Tests and Chi-Square Tests",
    "xp": 41
   },
   {
    "id": "probability-stats-19",
    "title": "Correlation & Linear Regression",
    "xp": 43
   },
   {
    "id": "probability-stats-20",
    "title": "Classic Probability Puzzles for Interviews",
    "xp": 45
   }
  ]
 },
 {
  "id": "web-technologies",
  "title": "Web Technologies (Full-Stack)",
  "icon": "🕸️",
  "category": "advanced",
  "color": "#EF6C00",
  "blurb": "Build the whole web: from browser clicks to servers, databases, and APIs working as one.",
  "levels": [
   {
    "id": "web-technologies-1",
    "title": "Client vs Server",
    "xp": 15
   },
   {
    "id": "web-technologies-2",
    "title": "HTTP Requests & Responses",
    "xp": 18
   },
   {
    "id": "web-technologies-3",
    "title": "Front-End vs Back-End",
    "xp": 20
   },
   {
    "id": "web-technologies-4",
    "title": "Databases Behind Websites",
    "xp": 22
   },
   {
    "id": "web-technologies-5",
    "title": "REST APIs",
    "xp": 25
   },
   {
    "id": "web-technologies-6",
    "title": "The MVC Pattern",
    "xp": 27
   },
   {
    "id": "web-technologies-7",
    "title": "Full-Stack Overview",
    "xp": 30
   },
   {
    "id": "web-technologies-8",
    "title": "JavaScript Frameworks & SPAs",
    "xp": 32
   },
   {
    "id": "web-technologies-9",
    "title": "Components & State",
    "xp": 33
   },
   {
    "id": "web-technologies-10",
    "title": "Node.js & the npm Ecosystem",
    "xp": 34
   },
   {
    "id": "web-technologies-11",
    "title": "Express.js & Middleware",
    "xp": 35
   },
   {
    "id": "web-technologies-12",
    "title": "Designing Good REST APIs",
    "xp": 36
   },
   {
    "id": "web-technologies-13",
    "title": "Async JavaScript: Callbacks, Promises & Fetch",
    "xp": 37
   },
   {
    "id": "web-technologies-14",
    "title": "Cookies, Sessions & Local Storage",
    "xp": 38
   },
   {
    "id": "web-technologies-15",
    "title": "Authentication & Authorization",
    "xp": 39
   },
   {
    "id": "web-technologies-16",
    "title": "Working with Databases: SQL, NoSQL & ORMs",
    "xp": 40
   },
   {
    "id": "web-technologies-17",
    "title": "Web Security: XSS, CSRF & SQL Injection",
    "xp": 42
   },
   {
    "id": "web-technologies-18",
    "title": "CORS & the Same-Origin Policy",
    "xp": 43
   },
   {
    "id": "web-technologies-19",
    "title": "Performance: Caching & Optimization",
    "xp": 44
   },
   {
    "id": "web-technologies-20",
    "title": "Deployment, Scaling & Microservices",
    "xp": 45
   }
  ]
 },
 {
  "id": "ai",
  "title": "Artificial Intelligence",
  "icon": "🤖",
  "category": "advanced",
  "color": "#6200EA",
  "blurb": "From \"what AI really is\" to smart agents, search, reasoning, learning, and the ethics of it all.",
  "levels": [
   {
    "id": "ai-1",
    "title": "What AI Is (and Is Not)",
    "xp": 15
   },
   {
    "id": "ai-2",
    "title": "Intelligent Agents",
    "xp": 17
   },
   {
    "id": "ai-3",
    "title": "Search & Problem Solving",
    "xp": 20
   },
   {
    "id": "ai-4",
    "title": "Knowledge & Reasoning",
    "xp": 22
   },
   {
    "id": "ai-5",
    "title": "Machine Learning as Part of AI",
    "xp": 24
   },
   {
    "id": "ai-6",
    "title": "AI in the Real World",
    "xp": 26
   },
   {
    "id": "ai-7",
    "title": "AI Ethics & Responsibility",
    "xp": 30
   },
   {
    "id": "ai-8",
    "title": "Adversarial Search & Game Playing",
    "xp": 31
   },
   {
    "id": "ai-9",
    "title": "Constraint Satisfaction Problems",
    "xp": 32
   },
   {
    "id": "ai-10",
    "title": "Uncertainty & Probabilistic Reasoning",
    "xp": 33
   },
   {
    "id": "ai-11",
    "title": "Fuzzy Logic",
    "xp": 34
   },
   {
    "id": "ai-12",
    "title": "Expert Systems",
    "xp": 35
   },
   {
    "id": "ai-13",
    "title": "Natural Language Processing Basics",
    "xp": 36
   },
   {
    "id": "ai-14",
    "title": "Neural Networks & Deep Learning Foundations",
    "xp": 37
   },
   {
    "id": "ai-15",
    "title": "Genetic Algorithms & Evolutionary Computing",
    "xp": 38
   },
   {
    "id": "ai-16",
    "title": "Planning in AI",
    "xp": 39
   },
   {
    "id": "ai-17",
    "title": "Reinforcement Learning",
    "xp": 40
   },
   {
    "id": "ai-18",
    "title": "Computer Vision Basics",
    "xp": 41
   },
   {
    "id": "ai-19",
    "title": "Robotics & AI",
    "xp": 43
   },
   {
    "id": "ai-20",
    "title": "The Future of AI: AGI, Alignment & Interview Essentials",
    "xp": 45
   }
  ]
 },
 {
  "id": "ml",
  "title": "Machine Learning",
  "icon": "📊",
  "category": "advanced",
  "color": "#D81B60",
  "blurb": "Teach computers to learn from data — from your first prediction to spotting overfitting like a pro.",
  "levels": [
   {
    "id": "ml-1",
    "title": "What Is Machine Learning?",
    "xp": 15
   },
   {
    "id": "ml-2",
    "title": "Data & Features",
    "xp": 18
   },
   {
    "id": "ml-3",
    "title": "Supervised vs Unsupervised",
    "xp": 20
   },
   {
    "id": "ml-4",
    "title": "Training & Testing",
    "xp": 22
   },
   {
    "id": "ml-5",
    "title": "Regression: Predicting Numbers",
    "xp": 24
   },
   {
    "id": "ml-6",
    "title": "Classification: Predicting Categories",
    "xp": 26
   },
   {
    "id": "ml-7",
    "title": "Overfitting & Real-World ML",
    "xp": 30
   },
   {
    "id": "ml-8",
    "title": "Decision Trees",
    "xp": 31
   },
   {
    "id": "ml-9",
    "title": "Ensembles: Bagging & Random Forests",
    "xp": 32
   },
   {
    "id": "ml-10",
    "title": "Boosting: AdaBoost & Gradient Boosting",
    "xp": 33
   },
   {
    "id": "ml-11",
    "title": "k-Nearest Neighbors",
    "xp": 34
   },
   {
    "id": "ml-12",
    "title": "Naive Bayes",
    "xp": 35
   },
   {
    "id": "ml-13",
    "title": "Support Vector Machines",
    "xp": 36
   },
   {
    "id": "ml-14",
    "title": "Clustering: k-Means",
    "xp": 37
   },
   {
    "id": "ml-15",
    "title": "Dimensionality Reduction: PCA",
    "xp": 38
   },
   {
    "id": "ml-16",
    "title": "Feature Engineering & Scaling",
    "xp": 39
   },
   {
    "id": "ml-17",
    "title": "Model Evaluation: ROC-AUC & Tuning",
    "xp": 40
   },
   {
    "id": "ml-18",
    "title": "Neural Networks: The Basics",
    "xp": 42
   },
   {
    "id": "ml-19",
    "title": "Deep Learning: CNNs & Beyond",
    "xp": 44
   },
   {
    "id": "ml-20",
    "title": "ML in Production: Deployment, Drift & Ethics",
    "xp": 45
   }
  ]
 },
 {
  "id": "data-science",
  "title": "Data Science & Big Data",
  "icon": "📉",
  "category": "advanced",
  "color": "#00897B",
  "blurb": "Turn raw data into real answers — from your first dataset to billion-row systems.",
  "levels": [
   {
    "id": "data-science-1",
    "title": "What Is Data Science?",
    "xp": 15
   },
   {
    "id": "data-science-2",
    "title": "The Data Pipeline",
    "xp": 18
   },
   {
    "id": "data-science-3",
    "title": "Cleaning Data",
    "xp": 20
   },
   {
    "id": "data-science-4",
    "title": "Analysis & Visualization",
    "xp": 22
   },
   {
    "id": "data-science-5",
    "title": "What 'Big Data' Means (The Vs)",
    "xp": 25
   },
   {
    "id": "data-science-6",
    "title": "Big Data Tools (Advanced)",
    "xp": 30
   },
   {
    "id": "data-science-7",
    "title": "SQL for Data Analysis: Joins & Window Functions",
    "xp": 31
   },
   {
    "id": "data-science-8",
    "title": "Data Warehousing: OLTP vs OLAP",
    "xp": 32
   },
   {
    "id": "data-science-9",
    "title": "ETL vs ELT: Building Data Pipelines",
    "xp": 33
   },
   {
    "id": "data-science-10",
    "title": "Data Modeling: Star & Snowflake Schemas",
    "xp": 34
   },
   {
    "id": "data-science-11",
    "title": "Inside HDFS: Blocks, Replication & Fault Tolerance",
    "xp": 35
   },
   {
    "id": "data-science-12",
    "title": "Spark Internals: RDDs & Lazy Evaluation",
    "xp": 36
   },
   {
    "id": "data-science-13",
    "title": "Stream Processing: Batch vs Real-Time",
    "xp": 37
   },
   {
    "id": "data-science-14",
    "title": "NoSQL Data Models & the CAP Theorem",
    "xp": 38
   },
   {
    "id": "data-science-15",
    "title": "Orchestration: Airflow & DAGs",
    "xp": 39
   },
   {
    "id": "data-science-16",
    "title": "A/B Testing & Statistical Significance",
    "xp": 40
   },
   {
    "id": "data-science-17",
    "title": "Data Lakes & the Lakehouse",
    "xp": 41
   },
   {
    "id": "data-science-18",
    "title": "Data Governance, Privacy & Ethics",
    "xp": 42
   },
   {
    "id": "data-science-19",
    "title": "Turning Analysis into Dashboards Business Trusts",
    "xp": 43
   },
   {
    "id": "data-science-20",
    "title": "The Data Science Interview: An End-to-End Case Study",
    "xp": 45
   }
  ]
 },
 {
  "id": "cloud",
  "title": "Cloud Computing",
  "icon": "☁️",
  "category": "advanced",
  "color": "#039BE5",
  "blurb": "Rent computers over the internet instead of owning them — from basics to security.",
  "levels": [
   {
    "id": "cloud-1",
    "title": "What Is the Cloud?",
    "xp": 15
   },
   {
    "id": "cloud-2",
    "title": "Virtualization: The Engine of the Cloud",
    "xp": 18
   },
   {
    "id": "cloud-3",
    "title": "IaaS, PaaS, SaaS: The Service Models",
    "xp": 20
   },
   {
    "id": "cloud-4",
    "title": "Public, Private, and Hybrid Clouds",
    "xp": 22
   },
   {
    "id": "cloud-5",
    "title": "The Major Cloud Providers",
    "xp": 25
   },
   {
    "id": "cloud-6",
    "title": "Benefits and Cloud Security Basics",
    "xp": 30
   },
   {
    "id": "cloud-7",
    "title": "Cloud Storage: Object, Block, and File",
    "xp": 32
   },
   {
    "id": "cloud-8",
    "title": "Cloud Databases: SQL, NoSQL, and Managed Services",
    "xp": 33
   },
   {
    "id": "cloud-9",
    "title": "Load Balancing and Auto-Scaling",
    "xp": 34
   },
   {
    "id": "cloud-10",
    "title": "Containers and Docker",
    "xp": 35
   },
   {
    "id": "cloud-11",
    "title": "Kubernetes: Orchestrating Containers",
    "xp": 36
   },
   {
    "id": "cloud-12",
    "title": "Serverless Computing (FaaS)",
    "xp": 37
   },
   {
    "id": "cloud-13",
    "title": "Microservices Architecture",
    "xp": 38
   },
   {
    "id": "cloud-14",
    "title": "Cloud Networking: VPCs, Subnets, and CDNs",
    "xp": 39
   },
   {
    "id": "cloud-15",
    "title": "Disaster Recovery: Backup, Replication, RTO/RPO",
    "xp": 40
   },
   {
    "id": "cloud-16",
    "title": "DevOps and CI/CD Pipelines",
    "xp": 41
   },
   {
    "id": "cloud-17",
    "title": "Cloud Monitoring, Logging, and Observability",
    "xp": 42
   },
   {
    "id": "cloud-18",
    "title": "Cloud Cost Management (FinOps)",
    "xp": 43
   },
   {
    "id": "cloud-19",
    "title": "Multi-Cloud, Edge Computing, and Vendor Lock-In",
    "xp": 44
   },
   {
    "id": "cloud-20",
    "title": "Cloud Computing: Interview and Exam Review",
    "xp": 45
   }
  ]
 },
 {
  "id": "cybersecurity",
  "title": "Cyber Security & Cryptography",
  "icon": "🔐",
  "category": "advanced",
  "color": "#B71C1C",
  "blurb": "Lock down systems and scramble secrets — learn to think like a defender and a cryptographer.",
  "levels": [
   {
    "id": "cybersecurity-1",
    "title": "Why Security Matters",
    "xp": 15
   },
   {
    "id": "cybersecurity-2",
    "title": "The CIA Triad",
    "xp": 17
   },
   {
    "id": "cybersecurity-3",
    "title": "Common Threats & Attacks",
    "xp": 20
   },
   {
    "id": "cybersecurity-4",
    "title": "Encryption: Symmetric & Asymmetric",
    "xp": 22
   },
   {
    "id": "cybersecurity-5",
    "title": "Hashing",
    "xp": 24
   },
   {
    "id": "cybersecurity-6",
    "title": "Network Security Basics",
    "xp": 26
   },
   {
    "id": "cybersecurity-7",
    "title": "Safe Practices (Advanced)",
    "xp": 30
   },
   {
    "id": "cybersecurity-8",
    "title": "Password Security: Hashing & Salting",
    "xp": 31
   },
   {
    "id": "cybersecurity-9",
    "title": "Access Control Models",
    "xp": 32
   },
   {
    "id": "cybersecurity-10",
    "title": "Public Key Infrastructure & Certificates",
    "xp": 33
   },
   {
    "id": "cybersecurity-11",
    "title": "Digital Signatures",
    "xp": 34
   },
   {
    "id": "cybersecurity-12",
    "title": "Web Application Vulnerabilities (OWASP Top 10)",
    "xp": 35
   },
   {
    "id": "cybersecurity-13",
    "title": "Buffer Overflows & Memory Safety",
    "xp": 36
   },
   {
    "id": "cybersecurity-14",
    "title": "Malware: Viruses, Worms, Trojans & Ransomware",
    "xp": 37
   },
   {
    "id": "cybersecurity-15",
    "title": "Social Engineering & Phishing",
    "xp": 38
   },
   {
    "id": "cybersecurity-16",
    "title": "Wireless Network Security",
    "xp": 39
   },
   {
    "id": "cybersecurity-17",
    "title": "Key Exchange & Cryptographic Key Management",
    "xp": 41
   },
   {
    "id": "cybersecurity-18",
    "title": "Penetration Testing & Ethical Hacking",
    "xp": 42
   },
   {
    "id": "cybersecurity-19",
    "title": "Digital Forensics & Incident Response",
    "xp": 44
   },
   {
    "id": "cybersecurity-20",
    "title": "Risk, Compliance & Emerging Threats",
    "xp": 45
   }
  ]
 },
 {
  "id": "iot",
  "title": "Internet of Things (IoT)",
  "icon": "📡",
  "category": "advanced",
  "color": "#00ACC1",
  "blurb": "Turn everyday objects into smart, connected devices — from a single sensor to a secure cloud fleet.",
  "levels": [
   {
    "id": "iot-1",
    "title": "What Is IoT?",
    "xp": 15
   },
   {
    "id": "iot-2",
    "title": "Sensors & Actuators",
    "xp": 18
   },
   {
    "id": "iot-3",
    "title": "Embedded Devices & Arduino",
    "xp": 20
   },
   {
    "id": "iot-4",
    "title": "Connectivity: WiFi & Bluetooth",
    "xp": 23
   },
   {
    "id": "iot-5",
    "title": "Sending Data to the Cloud",
    "xp": 26
   },
   {
    "id": "iot-6",
    "title": "Applications & Security",
    "xp": 30
   },
   {
    "id": "iot-7",
    "title": "IoT Architecture: The Four Layers",
    "xp": 31
   },
   {
    "id": "iot-8",
    "title": "Protocols Deep Dive: MQTT, CoAP & HTTP",
    "xp": 32
   },
   {
    "id": "iot-9",
    "title": "Low-Power Wireless: Zigbee & 6LoWPAN",
    "xp": 33
   },
   {
    "id": "iot-10",
    "title": "Long-Range IoT: LoRaWAN & NB-IoT",
    "xp": 34
   },
   {
    "id": "iot-11",
    "title": "RFID & NFC: Identifying Things",
    "xp": 34
   },
   {
    "id": "iot-12",
    "title": "IoT Platforms & Device Management",
    "xp": 35
   },
   {
    "id": "iot-13",
    "title": "Fog Computing: Between Edge and Cloud",
    "xp": 36
   },
   {
    "id": "iot-14",
    "title": "Power Management & Energy Harvesting",
    "xp": 37
   },
   {
    "id": "iot-15",
    "title": "Big Data Analytics in IoT",
    "xp": 38
   },
   {
    "id": "iot-16",
    "title": "TinyML: Machine Learning on Tiny Devices",
    "xp": 40
   },
   {
    "id": "iot-17",
    "title": "IoT Security Deep Dive: Threat Modeling & Secure Boot",
    "xp": 42
   },
   {
    "id": "iot-18",
    "title": "IoT Standards & Interoperability",
    "xp": 43
   },
   {
    "id": "iot-19",
    "title": "Case Study: Industrial IoT & Predictive Maintenance",
    "xp": 44
   },
   {
    "id": "iot-20",
    "title": "Designing an End-to-End IoT System",
    "xp": 45
   }
  ]
 },
 {
  "id": "mobile-dev",
  "title": "Mobile App Development",
  "icon": "📱",
  "category": "advanced",
  "color": "#43A047",
  "blurb": "Go from \"what even is an app?\" to shipping one on the store — platforms, UI, data, and publishing.",
  "levels": [
   {
    "id": "mobile-dev-1",
    "title": "Mobile Platforms: Android & iOS",
    "xp": 15
   },
   {
    "id": "mobile-dev-2",
    "title": "Native vs Cross-Platform",
    "xp": 18
   },
   {
    "id": "mobile-dev-3",
    "title": "The App Lifecycle",
    "xp": 20
   },
   {
    "id": "mobile-dev-4",
    "title": "Building a User Interface",
    "xp": 22
   },
   {
    "id": "mobile-dev-5",
    "title": "Using APIs & Data",
    "xp": 25
   },
   {
    "id": "mobile-dev-6",
    "title": "Publishing an App (Advanced)",
    "xp": 30
   },
   {
    "id": "mobile-dev-7",
    "title": "Navigation & Multi-Screen Apps",
    "xp": 31
   },
   {
    "id": "mobile-dev-8",
    "title": "State Management",
    "xp": 32
   },
   {
    "id": "mobile-dev-9",
    "title": "Permissions & Device Sensors",
    "xp": 33
   },
   {
    "id": "mobile-dev-10",
    "title": "Push Notifications",
    "xp": 34
   },
   {
    "id": "mobile-dev-11",
    "title": "Background Work & Services",
    "xp": 35
   },
   {
    "id": "mobile-dev-12",
    "title": "App Architecture: MVC, MVP & MVVM",
    "xp": 36
   },
   {
    "id": "mobile-dev-13",
    "title": "Local Databases in Depth",
    "xp": 37
   },
   {
    "id": "mobile-dev-14",
    "title": "Cross-Platform Frameworks: Flutter & React Native",
    "xp": 38
   },
   {
    "id": "mobile-dev-15",
    "title": "Responsive & Adaptive UI",
    "xp": 39
   },
   {
    "id": "mobile-dev-16",
    "title": "Testing Mobile Apps",
    "xp": 40
   },
   {
    "id": "mobile-dev-17",
    "title": "Performance Optimization",
    "xp": 41
   },
   {
    "id": "mobile-dev-18",
    "title": "Mobile Security Best Practices",
    "xp": 43
   },
   {
    "id": "mobile-dev-19",
    "title": "Accessibility in Mobile Apps",
    "xp": 44
   },
   {
    "id": "mobile-dev-20",
    "title": "Where Mobile Development Is Heading",
    "xp": 45
   }
  ]
 },
 {
  "id": "software-testing",
  "title": "Software Testing",
  "icon": "🧪",
  "category": "advanced",
  "color": "#7CB342",
  "blurb": "Catch bugs before your users do — learn to test software like a pro, from first checks to full QA.",
  "levels": [
   {
    "id": "software-testing-1",
    "title": "Why We Test Software",
    "xp": 15
   },
   {
    "id": "software-testing-2",
    "title": "Types of Testing",
    "xp": 18
   },
   {
    "id": "software-testing-3",
    "title": "Manual vs Automated Testing",
    "xp": 20
   },
   {
    "id": "software-testing-4",
    "title": "Writing Good Test Cases",
    "xp": 23
   },
   {
    "id": "software-testing-5",
    "title": "The Bug Life Cycle",
    "xp": 26
   },
   {
    "id": "software-testing-6",
    "title": "QA Basics (Advanced)",
    "xp": 30
   },
   {
    "id": "software-testing-7",
    "title": "Test Levels: Unit, Integration, System, Acceptance",
    "xp": 31
   },
   {
    "id": "software-testing-8",
    "title": "Black-Box Techniques: Partitioning & Boundaries",
    "xp": 32
   },
   {
    "id": "software-testing-9",
    "title": "White-Box Techniques: Statement, Branch & Path Coverage",
    "xp": 33
   },
   {
    "id": "software-testing-10",
    "title": "Test-Driven Development & Unit Test Frameworks",
    "xp": 34
   },
   {
    "id": "software-testing-11",
    "title": "Automation Testing: Tools & Scripts",
    "xp": 35
   },
   {
    "id": "software-testing-12",
    "title": "Regression Testing & the Test Pyramid",
    "xp": 36
   },
   {
    "id": "software-testing-13",
    "title": "Non-Functional Testing: Performance, Load & Stress",
    "xp": 37
   },
   {
    "id": "software-testing-14",
    "title": "Security Testing Basics",
    "xp": 38
   },
   {
    "id": "software-testing-15",
    "title": "Usability & Accessibility Testing",
    "xp": 39
   },
   {
    "id": "software-testing-16",
    "title": "Test Planning & the Traceability Matrix",
    "xp": 40
   },
   {
    "id": "software-testing-17",
    "title": "Test Management & Quality Metrics",
    "xp": 41
   },
   {
    "id": "software-testing-18",
    "title": "Agile Testing & Continuous Testing",
    "xp": 42
   },
   {
    "id": "software-testing-19",
    "title": "API Testing",
    "xp": 43
   },
   {
    "id": "software-testing-20",
    "title": "Bringing It Together: Testing for Interviews & Careers",
    "xp": 45
   }
  ]
 },
 {
  "id": "devops-git",
  "title": "DevOps & Git",
  "icon": "🔧",
  "category": "advanced",
  "color": "#546E7A",
  "blurb": "Track your code, ship it safely, and automate the boring parts — from your first commit to real deployments.",
  "levels": [
   {
    "id": "devops-git-1",
    "title": "Why Version Control?",
    "xp": 15
   },
   {
    "id": "devops-git-2",
    "title": "Git Basics: Commit, Branch, Merge",
    "xp": 18
   },
   {
    "id": "devops-git-3",
    "title": "GitHub & Collaboration",
    "xp": 20
   },
   {
    "id": "devops-git-4",
    "title": "What Is DevOps?",
    "xp": 22
   },
   {
    "id": "devops-git-5",
    "title": "CI/CD Pipelines",
    "xp": 26
   },
   {
    "id": "devops-git-6",
    "title": "Deployment Basics (Advanced)",
    "xp": 30
   },
   {
    "id": "devops-git-7",
    "title": "Git Internals: The .git Folder & Objects",
    "xp": 32
   },
   {
    "id": "devops-git-8",
    "title": "Merge vs Rebase",
    "xp": 33
   },
   {
    "id": "devops-git-9",
    "title": "Resolving Merge Conflicts",
    "xp": 34
   },
   {
    "id": "devops-git-10",
    "title": "Undoing Changes: reset, revert, reflog",
    "xp": 35
   },
   {
    "id": "devops-git-11",
    "title": ".gitignore and Git Hooks",
    "xp": 36
   },
   {
    "id": "devops-git-12",
    "title": "Git Tags, Releases & Semantic Versioning",
    "xp": 37
   },
   {
    "id": "devops-git-13",
    "title": "Pull Requests & Code Review Workflow",
    "xp": 38
   },
   {
    "id": "devops-git-14",
    "title": "Branching Strategies: Git Flow vs Trunk-Based",
    "xp": 39
   },
   {
    "id": "devops-git-15",
    "title": "Docker Deep Dive: Images, Volumes, Networking",
    "xp": 40
   },
   {
    "id": "devops-git-16",
    "title": "Container Orchestration: Kubernetes Basics",
    "xp": 41
   },
   {
    "id": "devops-git-17",
    "title": "Infrastructure as Code: Terraform",
    "xp": 42
   },
   {
    "id": "devops-git-18",
    "title": "Configuration Management: Ansible",
    "xp": 43
   },
   {
    "id": "devops-git-19",
    "title": "Monitoring, Logging & Alerting",
    "xp": 44
   },
   {
    "id": "devops-git-20",
    "title": "DevSecOps: Security in the Pipeline",
    "xp": 45
   }
  ]
 }
]

export function findTrack(trackId) {
  return TRACKS.find((t) => t.id === trackId) || null
}

export function findLevel(trackId, levelId) {
  const track = findTrack(trackId)
  if (!track) return { track: null, level: null, index: -1 }
  const index = track.levels.findIndex((l) => l.id === levelId)
  return { track, level: index >= 0 ? track.levels[index] : null, index }
}

// Lesson bodies and quizzes are fetched by ./levelContent.js. They are kept out
// of this file on purpose: that loader uses `import.meta.glob`, which only
// exists inside Vite, and this file has to stay importable by plain Node so the
// content can be counted, validated and regenerated by scripts.
