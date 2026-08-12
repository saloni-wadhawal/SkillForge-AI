// Lesson text and quiz questions for "C#".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "csharp-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "C# (say it \"see sharp\") is a programming language made by Microsoft. It is used to build all kinds of software: desktop apps, websites, mobile apps, and games (Unity uses C#). It is designed to be clear and safe, which makes it a friendly language to learn early in your engineering journey."
    },
    {
     "type": "text",
     "text": "C# almost never travels alone — it runs on top of .NET. Think of .NET as a big toolbox plus an engine. The engine is called the runtime (the CLR), and the toolbox is a huge library of ready-made code so you don't have to build everything yourself."
    },
    {
     "type": "text",
     "text": "When you build a program, your C# code is first compiled into an in-between form called IL (Intermediate Language). At run time the .NET runtime turns that IL into instructions your actual computer understands. This two-step design is why the same C# app can run on Windows, Linux, and macOS."
    },
    {
     "type": "tip",
     "text": "Analogy: C# is the language you speak, and .NET is the country you speak it in — the roads, tools, and power supply that let your words actually get things done."
    },
    {
     "type": "text",
     "text": "C# is a high-level, strongly-typed, object-oriented language. \"High-level\" means it hides messy hardware details. \"Strongly-typed\" means every value has a known kind (a number, some text, etc.). \"Object-oriented\" means you organise code into reusable building blocks called classes — you'll meet those in the final level."
    }
   ],
   "recap": "C# is a modern Microsoft language that runs on .NET, which provides the runtime engine and a big library; your code compiles to IL and then runs cross-platform."
  },
  "quiz": [
   {
    "q": "What is .NET, in relation to C#?",
    "options": [
     "A rival language to C#",
     "A text editor for C#",
     "The runtime and library that C# programs run on",
     "A type of computer chip"
    ],
    "answer": 2,
    "explain": ".NET provides the runtime engine plus a large library of code that C# programs depend on to run."
   },
   {
    "q": "When you compile C#, what is produced first before machine code?",
    "options": [
     "IL (Intermediate Language)",
     "Raw electricity",
     "Python bytecode",
     "A PDF file"
    ],
    "answer": 0,
    "explain": "C# compiles to Intermediate Language (IL), which the runtime later turns into machine instructions."
   },
   {
    "q": "\"Strongly-typed\" means that in C#...",
    "options": [
     "Every value has a known, fixed kind",
     "You must type quickly",
     "Only strong computers can run it",
     "Code must be written in bold"
    ],
    "answer": 0,
    "explain": "Strong typing means each value has a definite type, like a number or text, that the compiler checks."
   },
   {
    "q": "Which is a real use of C#?",
    "options": [
     "Wiring a physical circuit board",
     "Building games in Unity",
     "Only spreadsheets",
     "Writing on paper"
    ],
    "answer": 1,
    "explain": "The Unity game engine uses C# as its scripting language, among C#'s many uses."
   }
  ]
 },
 "csharp-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every classic C# program starts running at a special method called Main. When you launch the app, the runtime looks for Main and begins executing the lines inside it, top to bottom. Main is the front door of your program."
    },
    {
     "type": "text",
     "text": "To show text on the screen, you use Console.WriteLine. Console means the black text window (the terminal), and WriteLine writes one line and then moves the cursor to the next line. Its close cousin Console.Write prints without moving to a new line."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine(\"Hello, world!\");\n        Console.WriteLine(\"Welcome to C#.\");\n    }\n}"
    },
    {
     "type": "text",
     "text": "Look closely: the text lives inside double quotes, and each statement ends with a semicolon (;). The semicolon is like a full stop — it tells C# \"this instruction is finished.\" Forgetting it is the most common beginner error."
    },
    {
     "type": "tip",
     "text": "Modern C# offers \"top-level statements\" so a tiny program can be just: Console.WriteLine(\"Hi\"); with no visible Main. The compiler still creates a Main for you behind the scenes."
    },
    {
     "type": "text",
     "text": "The line using System; at the top brings in the System library so you can write Console instead of the longer System.Console. It's like getting a tool out of the toolbox before you start working."
    }
   ],
   "recap": "Programs begin at Main; Console.WriteLine prints a line of text; statements end in a semicolon; using System; unlocks handy tools like Console."
  },
  "quiz": [
   {
    "q": "Where does a classic C# program begin executing?",
    "options": [
     "A file named start.txt",
     "The last line of the file",
     "Inside Console",
     "A method named Main"
    ],
    "answer": 3,
    "explain": "Main is the entry point; the runtime starts running the program from inside it."
   },
   {
    "q": "What does Console.WriteLine do that Console.Write does not?",
    "options": [
     "It moves to a new line after printing",
     "It runs faster",
     "It saves a file",
     "It prints in colour"
    ],
    "answer": 0,
    "explain": "WriteLine adds a line break after the text, whereas Write leaves the cursor on the same line."
   },
   {
    "q": "What ends most C# statements?",
    "options": [
     "A period .",
     "A space",
     "A semicolon ;",
     "A comma ,"
    ],
    "answer": 2,
    "explain": "Each C# statement is terminated with a semicolon, which marks the end of the instruction."
   },
   {
    "q": "Why write `using System;` at the top of a file?",
    "options": [
     "It is just decoration",
     "It speeds up the CPU",
     "So you can write Console instead of System.Console",
     "It deletes old files"
    ],
    "answer": 2,
    "explain": "The using directive imports the System namespace so its types like Console can be used by short name."
   }
  ]
 },
 "csharp-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a named box that stores a value your program can use and change later. In C# you usually declare a variable by stating its type, then its name, then the value. The type says what kind of data the box may hold."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "int age = 20;              // whole number\ndouble price = 99.95;      // number with decimals\nbool isStudent = true;     // true or false\nchar grade = 'A';          // a single character\nstring name = \"Ada\";       // a sequence of text\n\nage = 21;                  // the value can change"
    },
    {
     "type": "text",
     "text": "The common built-in types are: int for whole numbers, double for decimal numbers, bool for true/false, char for a single character (single quotes), and string for text (double quotes). Choosing the right type keeps your data meaningful and prevents mistakes."
    },
    {
     "type": "text",
     "text": "C# is statically typed, so once a box is declared int, it can only hold whole numbers — putting text in it is a compile error. This strictness catches bugs before your program even runs, which is a good thing."
    },
    {
     "type": "tip",
     "text": "You can let C# figure out the type with the var keyword: var count = 5; makes count an int automatically. Use var when the type is obvious from the right-hand side."
    },
    {
     "type": "text",
     "text": "Some variables never change — mark them const, like const double Pi = 3.14159;. A const is a promise: try to reassign it and the compiler stops you. Use it for fixed facts that should stay put."
    }
   ],
   "recap": "Variables are named, typed boxes for data; core types are int, double, bool, char, and string; var infers the type and const locks a value so it can't change."
  },
  "quiz": [
   {
    "q": "Which type best stores a person's age like 21?",
    "options": [
     "bool",
     "string",
     "int",
     "char"
    ],
    "answer": 2,
    "explain": "An age is a whole number, so int is the natural choice."
   },
   {
    "q": "How do you write a text value in C#?",
    "options": [
     "In single quotes, e.g. 'Ada'",
     "In double quotes, e.g. \"Ada\"",
     "In brackets, e.g. [Ada]",
     "With no quotes, e.g. Ada"
    ],
    "answer": 1,
    "explain": "A string literal is written between double quotes; single quotes are for a single char."
   },
   {
    "q": "What does the const keyword do?",
    "options": [
     "Prevents the value from ever being changed",
     "Deletes the variable",
     "Turns a number into text",
     "Makes a variable print faster"
    ],
    "answer": 0,
    "explain": "A const value is fixed at compile time and cannot be reassigned later."
   },
   {
    "q": "What is the type of `count` after `var count = 5;`?",
    "options": [
     "double",
     "bool",
     "string",
     "int"
    ],
    "answer": 3,
    "explain": "var infers the type from the value, and 5 is a whole number, so count is an int."
   }
  ]
 },
 "csharp-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators let your program do work with values. Arithmetic operators are +, -, *, /, and % (modulo, the remainder after division). For example 7 % 3 is 1, because 7 divided by 3 leaves a remainder of 1 — handy for checking odd/even numbers."
    },
    {
     "type": "text",
     "text": "Comparison operators ask true/false questions: == (equal to), != (not equal), <, >, <=, >=. Note the double equals: == compares two values, while a single = assigns a value. Mixing them up is a classic beginner slip."
    },
    {
     "type": "text",
     "text": "An if statement runs a block of code only when a condition is true. Add else to handle the false case, and else if to test more conditions in order. The first condition that is true wins, and the rest are skipped."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "int score = 72;\n\nif (score >= 90)\n{\n    Console.WriteLine(\"Grade A\");\n}\nelse if (score >= 60)\n{\n    Console.WriteLine(\"Grade B\");\n}\nelse\n{\n    Console.WriteLine(\"Needs improvement\");\n}"
    },
    {
     "type": "text",
     "text": "You can combine conditions with logical operators: && means AND (both must be true), || means OR (at least one true), and ! means NOT (flips true/false). Example: if (age >= 18 && isStudent) checks two things at once."
    },
    {
     "type": "tip",
     "text": "For a short choice, the ternary operator is compact: string result = (score >= 60) ? \"Pass\" : \"Fail\"; — read it as \"condition ? valueIfTrue : valueIfFalse\"."
    }
   ],
   "recap": "Operators compute and compare values; == tests equality while = assigns; if/else if/else choose a path; && (and), || (or), and ! (not) combine conditions."
  },
  "quiz": [
   {
    "q": "What does 7 % 3 evaluate to?",
    "options": [
     "0",
     "1",
     "3",
     "2"
    ],
    "answer": 1,
    "explain": "% gives the remainder of the division, and 7 divided by 3 leaves a remainder of 1."
   },
   {
    "q": "Which operator checks whether two values are equal?",
    "options": [
     "==",
     "=>",
     "!=",
     "="
    ],
    "answer": 0,
    "explain": "== compares two values for equality; a single = assigns a value instead."
   },
   {
    "q": "The && operator is true when...",
    "options": [
     "At least one condition is true",
     "Neither condition is true",
     "The condition is a number",
     "Both conditions are true"
    ],
    "answer": 3,
    "explain": "&& is logical AND, so it is true only when both operands are true."
   },
   {
    "q": "In an if / else if / else chain, how many blocks run?",
    "options": [
     "All of them",
     "None of them",
     "Every true one",
     "The first block whose condition is true"
    ],
    "answer": 3,
    "explain": "The chain runs only the first branch whose condition is true, then skips the rest."
   }
  ]
 },
 "csharp-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loop repeats a block of code so you don't copy-paste the same lines. Instead of writing \"print hello\" ten times, you write it once inside a loop that runs ten times. Loops are one of the biggest time-savers in programming."
    },
    {
     "type": "text",
     "text": "A for loop is perfect when you know how many times to repeat. It has three parts in its header: start (set up a counter), condition (keep going while true), and step (change the counter each round). They are separated by semicolons."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "for (int i = 0; i < 5; i++)\n{\n    Console.WriteLine(\"Count: \" + i);\n}\n// prints Count: 0 through Count: 4"
    },
    {
     "type": "text",
     "text": "A while loop repeats as long as a condition stays true, and it checks that condition before each round. Use it when you don't know the exact number of repetitions in advance — for example, keep asking until the user types a valid answer."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "int n = 1;\nwhile (n <= 3)\n{\n    Console.WriteLine(\"Line \" + n);\n    n++;   // move toward stopping\n}"
    },
    {
     "type": "tip",
     "text": "Always make sure the loop moves toward its stopping condition (like i++ or n++). If the condition never becomes false, you get an infinite loop that runs forever."
    },
    {
     "type": "text",
     "text": "Two useful jump keywords: break exits the loop immediately, and continue skips the rest of the current round and jumps to the next one. There's also foreach, which walks through every item in a collection without a manual counter."
    }
   ],
   "recap": "Loops repeat code: for is best when the count is known, while runs until a condition turns false; keep the counter moving to avoid infinite loops, and use break/continue to control flow."
  },
  "quiz": [
   {
    "q": "How many times does `for (int i = 0; i < 5; i++)` run its body?",
    "options": [
     "Forever",
     "6 times",
     "4 times",
     "5 times"
    ],
    "answer": 3,
    "explain": "i takes the values 0,1,2,3,4 — five iterations — then stops when i reaches 5."
   },
   {
    "q": "Which loop is best when you don't know how many repetitions you'll need?",
    "options": [
     "No loop at all",
     "A for loop with a fixed count",
     "A while loop",
     "A const"
    ],
    "answer": 2,
    "explain": "A while loop repeats based on a condition, ideal when the number of rounds isn't known ahead of time."
   },
   {
    "q": "What causes an infinite loop?",
    "options": [
     "Declaring an int",
     "The condition never becoming false",
     "Using a semicolon",
     "Printing text"
    ],
    "answer": 1,
    "explain": "If the loop's condition never turns false, it keeps running forever."
   },
   {
    "q": "What does the `break` keyword do inside a loop?",
    "options": [
     "Restarts the program",
     "Pauses for one second",
     "Exits the loop immediately",
     "Skips just one iteration"
    ],
    "answer": 2,
    "explain": "break stops the loop right away and continues with the code after it."
   }
  ]
 },
 "csharp-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A method is a named block of code that does one job. You define it once and then call it whenever you need that job done. Methods keep programs organised, avoid repetition, and make code easier to read and fix."
    },
    {
     "type": "text",
     "text": "A method can take inputs, called parameters, and can hand back a result using return. The return type comes first in the signature; if a method returns nothing, its return type is void — you've been using void every time you wrote Main."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "// takes two ints, returns their sum\nstatic int Add(int a, int b)\n{\n    return a + b;\n}\n\nstatic void Greet(string name)\n{\n    Console.WriteLine(\"Hi, \" + name);\n}\n\n// calling them:\nint total = Add(3, 4);   // total is 7\nGreet(\"Ada\");            // prints Hi, Ada"
    },
    {
     "type": "text",
     "text": "The values you pass in a call (like 3 and 4) are called arguments; the names inside the method (a and b) are the parameters that receive them. When return runs, the method ends immediately and the result takes the place of the call."
    },
    {
     "type": "tip",
     "text": "Good method names are verbs that describe the action: CalculateTotal, IsValid, SaveFile. A reader should guess what a method does from its name alone."
    },
    {
     "type": "text",
     "text": "You can also give parameters default values and overload methods — that is, have several methods with the same name but different parameter lists. C# picks the right one based on the arguments you pass. This lets Add(int, int) and Add(double, double) happily coexist."
    }
   ],
   "recap": "Methods are named, reusable blocks that take parameters and can return a value; void means no return, arguments fill parameters, and overloading lets one name serve different argument lists."
  },
  "quiz": [
   {
    "q": "What does a method's `return` statement do?",
    "options": [
     "Prints text to the screen",
     "Starts a loop",
     "Declares a variable",
     "Ends the method and hands back a value"
    ],
    "answer": 3,
    "explain": "return exits the method immediately and passes its result back to the caller."
   },
   {
    "q": "What return type is used when a method gives back no value?",
    "options": [
     "void",
     "string",
     "int",
     "bool"
    ],
    "answer": 0,
    "explain": "void signals that the method performs an action but returns no value."
   },
   {
    "q": "In `Add(3, 4)`, what are 3 and 4 called?",
    "options": [
     "Loops",
     "Namespaces",
     "Return types",
     "Arguments passed to the method"
    ],
    "answer": 3,
    "explain": "The values supplied in a call are the arguments, which fill the method's parameters."
   },
   {
    "q": "What is method overloading?",
    "options": [
     "Several methods sharing a name but with different parameters",
     "Calling a method too many times",
     "Deleting a method",
     "A method that runs too slowly"
    ],
    "answer": 0,
    "explain": "Overloading defines multiple methods with the same name but different parameter lists, and C# picks the matching one."
   }
  ]
 },
 "csharp-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A class is a blueprint that bundles data and the behaviour that acts on it into one unit. An object is a real thing built from that blueprint. This is the heart of object-oriented programming: model your problem as objects that hold state and do work."
    },
    {
     "type": "tip",
     "text": "Analogy: a class is the architect's plan for a house; an object is an actual house built from that plan. From one plan you can build many houses, each with its own colour and address."
    },
    {
     "type": "text",
     "text": "Inside a class, fields store data and methods define actions. To create an object from a class you use the new keyword, which allocates it and runs a special method called the constructor to set up its starting values."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class Car\n{\n    // auto-property: stores data with get/set\n    public string Model { get; set; }\n    public int Speed { get; private set; }\n\n    // constructor: runs when the object is created\n    public Car(string model)\n    {\n        Model = model;\n        Speed = 0;\n    }\n\n    public void Accelerate(int amount)\n    {\n        Speed += amount;\n    }\n}\n\n// using the class:\nCar myCar = new Car(\"Tesla\");\nmyCar.Accelerate(30);\nConsole.WriteLine(myCar.Model + \": \" + myCar.Speed);\n// Tesla: 30"
    },
    {
     "type": "text",
     "text": "A property is a smart, controlled gateway to data. get returns the value and set changes it, so the class can guard its own data instead of exposing raw fields. Here Speed has a private set, meaning outsiders can read it but only the class itself can change it — through Accelerate."
    },
    {
     "type": "text",
     "text": "This guarding is called encapsulation: keep data private and expose it through properties and methods so nothing outside can put the object into a bad state. It is a core principle that keeps large programs reliable as they grow."
    },
    {
     "type": "text",
     "text": "The access keywords public and private control visibility: public members can be used from anywhere, private members only from inside the class. Starting fields private and opening up just what's needed is the safe default in professional C#."
    }
   ],
   "recap": "A class is a blueprint of data plus behaviour; objects are instances made with new via a constructor; properties (get/set) guard data, and encapsulation with public/private keeps objects in a valid state."
  },
  "quiz": [
   {
    "q": "What is the relationship between a class and an object?",
    "options": [
     "They are the same thing",
     "A class can only make one object",
     "A class is a blueprint; an object is an instance built from it",
     "An object is a blueprint for a class"
    ],
    "answer": 2,
    "explain": "A class defines the blueprint, and each object is a concrete instance created from that blueprint."
   },
   {
    "q": "What runs automatically when you create an object with `new`?",
    "options": [
     "The Main method",
     "A quiz",
     "The constructor",
     "A loop"
    ],
    "answer": 2,
    "explain": "The constructor runs on object creation to initialise the object's starting state."
   },
   {
    "q": "What is the purpose of a property's get and set?",
    "options": [
     "To speed up loops",
     "To controllably read and change data",
     "To delete the object",
     "To print to the console"
    ],
    "answer": 1,
    "explain": "get reads and set writes a value, giving the class control over how its data is accessed."
   },
   {
    "q": "Encapsulation mainly means...",
    "options": [
     "Writing shorter variable names",
     "Making everything public",
     "Running code faster",
     "Keeping data private and exposing it through controlled members"
    ],
    "answer": 3,
    "explain": "Encapsulation hides internal data and exposes it via properties/methods so the object stays in a valid state."
   }
  ]
 },
 "csharp-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance lets one class reuse and extend another class instead of copying its code. The existing class is the base class (or parent) and the new one is the derived class (or child). The derived class automatically gets the base class's fields, properties, and methods."
    },
    {
     "type": "text",
     "text": "In C# you inherit with a colon: class Car : Vehicle means Car is a Vehicle plus whatever extra it adds. This models real \"is-a\" relationships: a Car is a Vehicle, a SavingsAccount is an Account."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class Vehicle\n{\n    public string Name { get; set; }\n    public void Honk()\n    {\n        Console.WriteLine(Name + \" says beep!\");\n    }\n}\n\nclass Car : Vehicle\n{\n    public int Doors { get; set; }\n}\n\nCar c = new Car();\nc.Name = \"Hatchback\";\nc.Doors = 4;\nc.Honk();\n// Hatchback says beep!"
    },
    {
     "type": "text",
     "text": "Notice Car never wrote Honk() itself — it inherited it from Vehicle for free. If ten different vehicle classes need the same behaviour, you write it once in the base class."
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: inheritance models an \"is-a\" relationship. If you catch yourself saying \"has-a\" instead (a Car has-a Engine), that calls for composition, not inheritance."
    },
    {
     "type": "text",
     "text": "A constructor of the derived class can call the base class's constructor with base(...), so the parent gets to set up its own fields first before the child adds its own."
    }
   ],
   "recap": "Inheritance lets a derived class reuse a base class's members using : BaseClass, modelling \"is-a\" relationships and avoiding duplicated code."
  },
  "quiz": [
   {
    "q": "In `class Car : Vehicle`, which is the base class?",
    "options": [
     "Vehicle",
     "Both equally",
     "Neither, they are unrelated",
     "Car"
    ],
    "answer": 0,
    "explain": "Vehicle appears after the colon, so it is the base (parent) class that Car inherits from."
   },
   {
    "q": "Inheritance is best used to model which relationship?",
    "options": [
     "\"is-a\"",
     "\"uses-a\"",
     "\"knows-a\"",
     "\"has-a\""
    ],
    "answer": 0,
    "explain": "Inheritance fits \"is-a\" relationships, like a Car is a Vehicle."
   },
   {
    "q": "What does a derived class automatically get from its base class?",
    "options": [
     "Its public and protected members",
     "Only its private fields",
     "Only its constructor",
     "Nothing, it must redeclare everything"
    ],
    "answer": 0,
    "explain": "A derived class inherits the accessible (public/protected) members of its base class without rewriting them."
   }
  ]
 },
 "csharp-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Polymorphism means \"many forms\": the same method call can behave differently depending on the actual object doing the work. In C# you get this by marking a base method virtual and its replacement in the derived class override."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class Animal\n{\n    public virtual void Speak()\n    {\n        Console.WriteLine(\"...\");\n    }\n}\n\nclass Dog : Animal\n{\n    public override void Speak()\n    {\n        Console.WriteLine(\"Woof!\");\n    }\n}\n\nAnimal a = new Dog();\na.Speak();\n// Woof! -- even though the variable type is Animal"
    },
    {
     "type": "text",
     "text": "The variable a is typed as Animal, but the object stored in it is really a Dog. Because Speak is virtual/override, C# looks at the real object at run time and calls Dog's version. This is called dynamic (run-time) binding."
    },
    {
     "type": "tip",
     "text": "Common exam trap: forgetting virtual on the base method. Without virtual, override won't compile, and without override the base version silently runs instead — always pair the two keywords."
    },
    {
     "type": "text",
     "text": "Polymorphism is powerful because you can write one loop that calls Speak() on a list of different Animal objects (Dog, Cat, Bird) and each one responds in its own way, without any if/else checking the type."
    }
   ],
   "recap": "Polymorphism lets a base-typed reference call a method and get the derived object's own behaviour, using virtual on the base method and override on the derived one."
  },
  "quiz": [
   {
    "q": "What two keywords work together to enable overriding in C#?",
    "options": [
     "static and final",
     "virtual and override",
     "public and private",
     "abstract and sealed"
    ],
    "answer": 1,
    "explain": "virtual on the base method and override on the derived method together allow run-time polymorphism."
   },
   {
    "q": "In the Dog/Animal example, why does a.Speak() print \"Woof!\" even though a is typed Animal?",
    "options": [
     "It is a compiler bug",
     "C# ignores types at run time",
     "Animal always calls the last class defined",
     "The object's actual type (Dog) is used because Speak is virtual/override"
    ],
    "answer": 3,
    "explain": "Virtual methods use dynamic binding: the real object type decides which override runs, not the variable's declared type."
   },
   {
    "q": "What is the main benefit of polymorphism shown here?",
    "options": [
     "It prevents inheritance",
     "Faster compilation",
     "It removes the need for classes",
     "You can call Speak() on mixed objects without type-checking each one"
    ],
    "answer": 3,
    "explain": "Polymorphism lets one piece of code work correctly across many different derived types."
   }
  ]
 },
 "csharp-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An interface is a pure contract: it lists methods and properties a class must provide, but gives no implementation at all. A class can implement many interfaces, even though C# only allows inheriting from one base class."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "interface IShape\n{\n    double Area();\n}\n\nclass Circle : IShape\n{\n    public double Radius { get; set; }\n    public double Area()\n    {\n        return Math.PI * Radius * Radius;\n    }\n}\n\nIShape s = new Circle { Radius = 2 };\nConsole.WriteLine(s.Area());\n// 12.566..."
    },
    {
     "type": "text",
     "text": "An abstract class sits between a normal class and an interface. It can have some finished methods and some abstract ones (declared but not implemented), and it cannot be instantiated directly with new — only its concrete subclasses can be."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: use an interface to say \"this class CAN do X\" (a contract, possibly shared by unrelated classes); use an abstract class to say \"this class IS A kind of Y\" that shares some real code with its children."
    },
    {
     "type": "text",
     "text": "By convention C# interface names start with a capital I, like IShape or IDisposable. Interfaces are heavily used in real projects to keep code loosely coupled — code can depend on IShape without caring whether it's a Circle or a Square."
    }
   ],
   "recap": "Interfaces define a contract with no implementation and support multiple implementation; abstract classes can mix implemented and unimplemented (abstract) members and cannot be instantiated directly."
  },
  "quiz": [
   {
    "q": "Can a class implement more than one interface in C#?",
    "options": [
     "Only if they are abstract",
     "No, only one",
     "Only in static classes",
     "Yes, a class can implement many interfaces"
    ],
    "answer": 3,
    "explain": "Unlike single class inheritance, a class can implement as many interfaces as it needs."
   },
   {
    "q": "Can you create an object directly from an abstract class using new?",
    "options": [
     "Only if it has no methods",
     "Only inside Main",
     "No, abstract classes cannot be instantiated directly",
     "Yes, always"
    ],
    "answer": 2,
    "explain": "Abstract classes are incomplete blueprints; only their concrete subclasses can be instantiated."
   },
   {
    "q": "What does an interface method contain in C#?",
    "options": [
     "Just a signature, no implementation",
     "A constructor",
     "A full implementation",
     "Only private fields"
    ],
    "answer": 0,
    "explain": "An interface only declares what a method looks like; implementing classes must supply the body."
   }
  ]
 },
 "csharp-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Normally each object gets its own copy of a class's fields. A static member instead belongs to the class itself, shared by every object, and it exists even before any object is created."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class Counter\n{\n    public static int Total = 0;\n\n    public Counter()\n    {\n        Total++;\n    }\n}\n\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nCounter c3 = new Counter();\nConsole.WriteLine(Counter.Total);\n// 3 -- shared by all objects"
    },
    {
     "type": "text",
     "text": "You access a static member through the class name, not an object: Counter.Total, not c1.Total. Static methods work the same way — Console.WriteLine itself is a static method, which is why you never write new Console()."
    },
    {
     "type": "tip",
     "text": "Common mistake: a static method cannot directly use non-static (instance) fields or call non-static methods, because it doesn't know which object's data to use — static code only works with static data."
    },
    {
     "type": "text",
     "text": "A whole class can also be marked static, meaning it can never be instantiated and can only contain static members. Math is a good example: you call Math.Sqrt(16) without ever creating a Math object."
    }
   ],
   "recap": "Static members belong to the class rather than to any one object, are shared across all instances, and are accessed through the class name."
  },
  "quiz": [
   {
    "q": "How do you access a static field called Total in class Counter?",
    "options": [
     "new Counter().Total",
     "Counter.Total",
     "Total.Counter",
     "this.Total"
    ],
    "answer": 1,
    "explain": "Static members are accessed via the class name, since they don't belong to any single instance."
   },
   {
    "q": "Can a static method directly use an instance (non-static) field?",
    "options": [
     "Yes, always",
     "Only if it's private",
     "No, it has no object to get instance data from",
     "Only in the constructor"
    ],
    "answer": 2,
    "explain": "Static methods run without any particular object, so they can't reach instance fields directly."
   },
   {
    "q": "Why can you call Math.Sqrt(16) without writing new Math()?",
    "options": [
     "Math is a keyword, not a class",
     "C# creates the object automatically and hides it",
     "Sqrt is a static method on a static class",
     "It only works inside Main"
    ],
    "answer": 2,
    "explain": "Math is a static class made of static methods, so it's used through its class name with no instance ever created."
   }
  ]
 },
 "csharp-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An exception is an error that happens while your program is running, like dividing by zero or reading a file that doesn't exist. If you don't handle it, the program crashes. C# lets you catch exceptions with try, catch, and finally."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "try\n{\n    int[] numbers = { 1, 2, 3 };\n    Console.WriteLine(numbers[5]);\n}\ncatch (IndexOutOfRangeException e)\n{\n    Console.WriteLine(\"Bad index: \" + e.Message);\n}\nfinally\n{\n    Console.WriteLine(\"This always runs.\");\n}"
    },
    {
     "type": "text",
     "text": "Code that might fail goes in try. If an exception of the matching type is thrown, the matching catch block runs instead of crashing the program. The finally block runs no matter what happened, so it's the place to close files or connections."
    },
    {
     "type": "tip",
     "text": "Catch the most specific exception type you can (like IndexOutOfRangeException) before a general one (Exception). C# checks catch blocks top to bottom, so a general Exception catch placed first would swallow everything and hide bugs."
    },
    {
     "type": "text",
     "text": "You can also raise your own exception with throw, for example throw new ArgumentException(\"age cannot be negative\"), to signal that something the caller did was invalid."
    }
   ],
   "recap": "try/catch/finally lets a program recover from run-time errors instead of crashing: risky code sits in try, matching errors are handled in catch, and finally always runs for cleanup."
  },
  "quiz": [
   {
    "q": "Which block always runs, whether or not an exception occurred?",
    "options": [
     "throw",
     "catch",
     "try",
     "finally"
    ],
    "answer": 3,
    "explain": "finally is guaranteed to execute for cleanup, regardless of whether an exception was thrown or caught."
   },
   {
    "q": "What happens if no catch block matches the thrown exception's type?",
    "options": [
     "It automatically becomes a warning",
     "The finally block is skipped",
     "The exception propagates up and can still crash the program",
     "C# silently ignores it"
    ],
    "answer": 2,
    "explain": "An unmatched exception is not handled here and keeps propagating up the call stack."
   },
   {
    "q": "Why should you catch a specific exception type before a general one?",
    "options": [
     "It compiles faster",
     "A general catch placed first would catch everything and hide the specific handling",
     "C# requires it alphabetically",
     "Specific catches use less memory"
    ],
    "answer": 1,
    "explain": "Catch blocks are checked in order; a broad Exception catch listed first intercepts everything before more specific catches get a chance."
   }
  ]
 },
 "csharp-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Arrays have a fixed size once created. In real programs you usually want a list that can grow and shrink — that's List<T>, part of C#'s generic collections in System.Collections.Generic."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "List<string> names = new List<string>();\nnames.Add(\"Asha\");\nnames.Add(\"Ravi\");\nnames.Remove(\"Asha\");\nConsole.WriteLine(names.Count);\n// 1\n\nDictionary<string, int> ages = new Dictionary<string, int>();\nages[\"Ravi\"] = 21;\nages[\"Meera\"] = 22;\nConsole.WriteLine(ages[\"Ravi\"]);\n// 21"
    },
    {
     "type": "text",
     "text": "The <string> in List<string> is a generic type parameter — it tells C# exactly what type of thing the list holds, so you get a compiler error instead of a run-time crash if you try to add the wrong type in."
    },
    {
     "type": "text",
     "text": "A Dictionary<TKey, TValue> stores key-value pairs, like a real dictionary maps a word to its meaning. Here each name (the key) maps to an age (the value), and lookups by key are very fast."
    },
    {
     "type": "tip",
     "text": "Choosing a collection: use List<T> when order matters and you access items by position; use Dictionary<TKey,TValue> when you look things up by a unique key rather than by counting through the whole list."
    }
   ],
   "recap": "List<T> is a resizable, ordered collection and Dictionary<TKey,TValue> stores fast key-to-value lookups; both use generics to stay type-safe."
  },
  "quiz": [
   {
    "q": "What is the main advantage of List<T> over a plain array?",
    "options": [
     "It cannot hold strings",
     "It can grow and shrink in size",
     "It has no Count property",
     "It uses less memory always"
    ],
    "answer": 1,
    "explain": "Unlike a fixed-size array, a List<T> automatically resizes as you add or remove items."
   },
   {
    "q": "In `Dictionary<string, int> ages`, what does string represent?",
    "options": [
     "An error",
     "The value type",
     "The key type",
     "The collection's name"
    ],
    "answer": 2,
    "explain": "The first generic parameter of Dictionary<TKey, TValue> is the key type, here a string name."
   },
   {
    "q": "Why does List<string> only allow strings to be added?",
    "options": [
     "It doesn't -- any type can be added",
     "Generics enforce the type at compile time",
     "It's a run-time-only restriction",
     "C# lists are always untyped"
    ],
    "answer": 1,
    "explain": "Generic type parameters are checked by the compiler, so adding a non-string would fail to compile, not just crash at run time."
   }
  ]
 },
 "csharp-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already used generics in List<T> and Dictionary<TKey,TValue>. Generics let you write one class or method that works with any data type, decided when it's actually used, instead of writing the same code once per type."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class Box<T>\n{\n    public T Content { get; set; }\n\n    public void Show()\n    {\n        Console.WriteLine(\"Box contains: \" + Content);\n    }\n}\n\nBox<int> intBox = new Box<int>();\nintBox.Content = 42;\nintBox.Show();\n\nBox<string> textBox = new Box<string>();\ntextBox.Content = \"Hello\";\ntextBox.Show();"
    },
    {
     "type": "text",
     "text": "T is a placeholder, called a type parameter — it stands in for whatever real type you use at the call site (int, string, or even your own class). The compiler generates the correct, type-safe version for each T you actually use."
    },
    {
     "type": "tip",
     "text": "Without generics you'd either write one Box class per type (Box, IntBox, StringBox — lots of duplication) or use a plain object type, which loses type safety and needs casting everywhere. Generics give you both reuse and safety."
    },
    {
     "type": "text",
     "text": "Generic methods work the same way: public T Max<T>(T a, T b) where T : IComparable can compare and return the larger of two values of any comparable type, all in one method."
    }
   ],
   "recap": "Generics let a class or method use a type parameter like T so the same code works safely with many data types, avoiding duplicated code and unsafe casting."
  },
  "quiz": [
   {
    "q": "What does the T in `class Box<T>` represent?",
    "options": [
     "A typo",
     "A placeholder type parameter filled in when the class is used",
     "A static field",
     "A fixed type called T"
    ],
    "answer": 1,
    "explain": "T is a type parameter; the actual type (int, string, etc.) is supplied when you write Box<int> or Box<string>."
   },
   {
    "q": "What is the main benefit of generics over using plain object for everything?",
    "options": [
     "Generics remove the need for classes",
     "Generics run in a different language",
     "Generics keep type safety and avoid casting",
     "Generics only work with numbers"
    ],
    "answer": 2,
    "explain": "Generics let the compiler check types at compile time, unlike object which needs unsafe run-time casts."
   },
   {
    "q": "Which of these is already an example of a generic type you've used?",
    "options": [
     "List<T>",
     "Console",
     "String.Format",
     "Math"
    ],
    "answer": 0,
    "explain": "List<T> is a built-in generic collection type that works with any element type T."
   }
  ]
 },
 "csharp-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A delegate is a type that holds a reference to a method, the way a variable holds a reference to a value. It lets you pass a method around as data — store it in a variable, pass it as a parameter, or call it later."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "delegate void Greeter(string name);\n\nstatic void SayHello(string name)\n{\n    Console.WriteLine(\"Hello, \" + name);\n}\n\nstatic void SayBye(string name)\n{\n    Console.WriteLine(\"Bye, \" + name);\n}\n\nGreeter g = SayHello;\ng += SayBye;   // delegates can chain multiple methods\ng(\"Asha\");\n// Hello, Asha\n// Bye, Asha"
    },
    {
     "type": "text",
     "text": "Notice g holds not one but two methods after +=; calling g(...) runs both in order. This chaining is called a multicast delegate."
    },
    {
     "type": "text",
     "text": "An event is built on top of a delegate and is C#'s standard way to say \"something happened, and anyone interested can subscribe.\" Buttons in a UI use events: button.Click += MyHandler means \"run MyHandler whenever the button is clicked.\""
    },
    {
     "type": "tip",
     "text": "Think of a delegate as a phone number for a method, and an event as a notice board: any code that subscribes (+=) gets called automatically when the event fires, without the event's source needing to know who is listening."
    }
   ],
   "recap": "A delegate is a type-safe reference to a method that can be stored, passed around, and chained; an event uses delegates to let other code subscribe to and react to something happening."
  },
  "quiz": [
   {
    "q": "What does a delegate hold?",
    "options": [
     "A value type like int",
     "A reference to a method",
     "A class definition",
     "A file path"
    ],
    "answer": 1,
    "explain": "A delegate is essentially a type-safe pointer to one or more methods with a matching signature."
   },
   {
    "q": "In the example, what does `g += SayBye` do?",
    "options": [
     "Deletes SayHello",
     "Causes a compile error",
     "Replaces SayHello with SayBye",
     "Adds SayBye so g calls both methods (multicast)"
    ],
    "answer": 3,
    "explain": "The += operator on a delegate chains another method onto it, so calling g invokes all subscribed methods in order."
   },
   {
    "q": "What is an event best described as?",
    "options": [
     "A synonym for a class",
     "A notification mechanism built on delegates that other code can subscribe to",
     "A type of exception",
     "A faster kind of loop"
    ],
    "answer": 1,
    "explain": "Events let subscriber code register handlers that run automatically when the event is raised."
   }
  ]
 },
 "csharp-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "LINQ (Language Integrated Query) lets you query collections — filter, sort, transform — using readable, SQL-like expressions built right into C#, instead of writing manual loops every time."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using System.Linq;\n\nList<int> numbers = new List<int> { 5, 12, 8, 23, 3, 17 };\n\nvar evens = numbers.Where(n => n % 2 == 0);\nvar sortedDesc = numbers.OrderByDescending(n => n).ToList();\nint total = numbers.Sum();\n\nConsole.WriteLine(string.Join(\", \", evens));\n// 12, 8\nConsole.WriteLine(total);\n// 68"
    },
    {
     "type": "text",
     "text": "n => n % 2 == 0 is a lambda expression: a short, unnamed function. It reads as \"given n, return whether n is even.\" LINQ methods like Where, OrderBy, and Select all take a lambda to say what you want done to each item."
    },
    {
     "type": "tip",
     "text": "Where filters (keeps items matching a condition), Select transforms each item into something else, and OrderBy sorts. Remembering these three covers most exam and interview LINQ questions."
    },
    {
     "type": "text",
     "text": "LINQ works on any IEnumerable collection — arrays, List<T>, Dictionary values, and more — which is why it feels the same whether you're querying an in-memory list or, in bigger apps, a database table."
    }
   ],
   "recap": "LINQ lets you filter, sort, and transform collections with expressive methods like Where, OrderBy, and Select, using lambda expressions instead of hand-written loops."
  },
  "quiz": [
   {
    "q": "What does `numbers.Where(n => n % 2 == 0)` return?",
    "options": [
     "The list sorted",
     "The sum of all numbers",
     "Only the even numbers",
     "A single number"
    ],
    "answer": 2,
    "explain": "Where filters the collection, keeping only the elements for which the lambda condition is true -- here, even numbers."
   },
   {
    "q": "What is `n => n % 2 == 0` called?",
    "options": [
     "A class",
     "A lambda expression",
     "A delegate declaration",
     "A LINQ keyword"
    ],
    "answer": 1,
    "explain": "It's a lambda expression: a short, inline, unnamed function used as the condition passed to Where."
   },
   {
    "q": "Which LINQ method would you use to sort a list from highest to lowest?",
    "options": [
     "OrderByDescending",
     "Where",
     "Sum",
     "Select"
    ],
    "answer": 0,
    "explain": "OrderByDescending sorts a sequence from largest to smallest based on the given key."
   }
  ]
 },
 "csharp-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real programs often need to read from and write to files: saving settings, logging, or loading data. The System.IO namespace provides classes like File and StreamReader/StreamWriter for this."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using System.IO;\n\n// write text to a file (creates or overwrites it)\nFile.WriteAllText(\"notes.txt\", \"Hello from C#!\");\n\n// read it back\nstring content = File.ReadAllText(\"notes.txt\");\nConsole.WriteLine(content);\n// Hello from C#!\n\n// append another line\nFile.AppendAllText(\"notes.txt\", \"\\nSecond line.\");"
    },
    {
     "type": "text",
     "text": "File.WriteAllText, ReadAllText, and AppendAllText are simple, one-line helpers good for small files. For large files you use a StreamReader or StreamWriter, which read or write piece by piece instead of loading the whole file into memory at once."
    },
    {
     "type": "tip",
     "text": "Always release file handles when you're done — either call .Close() or, better, wrap the stream in a using block, which automatically closes it even if an exception happens partway through."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using (StreamWriter writer = new StreamWriter(\"log.txt\"))\n{\n    writer.WriteLine(\"Started\");\n    writer.WriteLine(\"Finished\");\n}\n// file is automatically closed here, even on error"
    }
   ],
   "recap": "System.IO gives you simple File helpers for small reads/writes and Stream classes for larger files; a using block guarantees a file is properly closed."
  },
  "quiz": [
   {
    "q": "What does File.WriteAllText do if the file already exists?",
    "options": [
     "It renames the file",
     "It overwrites its contents",
     "It appends to it",
     "It throws an error"
    ],
    "answer": 1,
    "explain": "WriteAllText replaces the file's existing content; AppendAllText is the method that adds to the end instead."
   },
   {
    "q": "Why wrap a StreamWriter in a using block?",
    "options": [
     "It makes the code run faster",
     "It is required by the compiler",
     "It automatically closes the file, even if an exception occurs",
     "It converts text to binary"
    ],
    "answer": 2,
    "explain": "using guarantees Dispose() (which closes the underlying file) runs when the block ends, error or not."
   },
   {
    "q": "When would you prefer StreamReader over File.ReadAllText?",
    "options": [
     "When writing instead of reading",
     "When reading a very large file piece by piece instead of all at once",
     "Never, they do the same thing",
     "When the file doesn't exist"
    ],
    "answer": 1,
    "explain": "StreamReader reads incrementally, which avoids loading an entire large file into memory at once."
   }
  ]
 },
 "csharp-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Normally your program runs one instruction at a time, on one thread. Multithreading lets a program do more than one thing at once, useful for keeping an app responsive while a slow operation (like a big calculation or a network call) runs in the background."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using System.Threading.Tasks;\n\nTask t = Task.Run(() =>\n{\n    Console.WriteLine(\"Working in background...\");\n    Task.Delay(1000).Wait();\n    Console.WriteLine(\"Background work done.\");\n});\n\nConsole.WriteLine(\"Main thread keeps going.\");\nt.Wait();  // wait for the background task to finish\nConsole.WriteLine(\"All done.\");"
    },
    {
     "type": "text",
     "text": "Task.Run hands work off to a separate thread from a managed pool, so \"Main thread keeps going\" can print before the background work finishes. Task is C#'s modern, higher-level way to manage concurrent work, replacing manual Thread objects in most code."
    },
    {
     "type": "tip",
     "text": "The classic danger of multithreading is a race condition: two threads changing the same shared data at once, giving unpredictable results. The lock keyword marks a block so only one thread can run it at a time, protecting shared data."
    },
    {
     "type": "text",
     "text": "Tasks are also the foundation for async/await, which you'll meet next — it's the same idea of \"don't block while waiting,\" written in a style that reads almost like ordinary sequential code."
    }
   ],
   "recap": "Multithreading runs work concurrently using Task.Run, keeping programs responsive; shared data accessed by multiple threads needs protection (like lock) to avoid race conditions."
  },
  "quiz": [
   {
    "q": "What problem can occur when two threads modify the same shared variable at once?",
    "options": [
     "The program automatically pauses",
     "A compile error",
     "Nothing, C# prevents this always",
     "A race condition with unpredictable results"
    ],
    "answer": 3,
    "explain": "Without synchronization, concurrent writes to shared data can interleave unpredictably -- a race condition."
   },
   {
    "q": "What does the lock keyword help prevent?",
    "options": [
     "File corruption on disk",
     "Null reference exceptions",
     "Slow compilation",
     "Multiple threads running a critical section at the same time"
    ],
    "answer": 3,
    "explain": "lock ensures only one thread at a time can execute the locked block, protecting shared data from race conditions."
   },
   {
    "q": "What does Task.Run primarily let you do?",
    "options": [
     "Read a file",
     "Run code on a background thread without blocking the main thread",
     "Delete a running thread",
     "Compile code faster"
    ],
    "answer": 1,
    "explain": "Task.Run schedules work on the thread pool so it can proceed concurrently with the calling code."
   }
  ]
 },
 "csharp-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "async and await are C#'s way of writing code that waits for slow operations (like a web request or a database call) without blocking the whole program while it waits. A method marked async can pause at an await and let other work happen, then resume when the awaited task finishes."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "using System.Threading.Tasks;\n\nstatic async Task<string> FetchDataAsync()\n{\n    Console.WriteLine(\"Starting fetch...\");\n    await Task.Delay(2000);   // pretend this is a slow network call\n    return \"Data received!\";\n}\n\nstatic async Task Main()\n{\n    Console.WriteLine(\"Before fetch\");\n    string result = await FetchDataAsync();\n    Console.WriteLine(result);\n    Console.WriteLine(\"After fetch\");\n}\n// Before fetch\n// Starting fetch...\n// (2 second pause, but the app isn't frozen)\n// Data received!\n// After fetch"
    },
    {
     "type": "text",
     "text": "await FetchDataAsync() means \"start this task, and pause this method here until it completes — but don't block the thread while waiting.\" This is why UIs stay responsive during a network call instead of freezing."
    },
    {
     "type": "tip",
     "text": "A common exam/interview line: \"async/await doesn't create extra threads by itself; it frees up the current thread to do other work while waiting, then resumes.\" This is different from raw multithreading, which is about running things in parallel."
    },
    {
     "type": "text",
     "text": "An async method almost always returns Task or Task<T> instead of void, so its caller can await it too. The one common exception is an async void event handler, used only for things like UI button-click handlers."
    }
   ],
   "recap": "async marks a method that can pause at await points to wait for slow operations without blocking, keeping the rest of the program responsive; async methods return Task or Task<T> so callers can await them in turn."
  },
  "quiz": [
   {
    "q": "What does `await FetchDataAsync()` do?",
    "options": [
     "Pauses the current method until the task completes, without blocking the thread",
     "Cancels the task",
     "Blocks the whole program until it finishes",
     "Runs the method twice"
    ],
    "answer": 0,
    "explain": "await frees the thread to do other work and resumes the method once the awaited task finishes, avoiding a blocking wait."
   },
   {
    "q": "What return type does an async method typically use (other than an event handler)?",
    "options": [
     "void",
     "string only",
     "int only",
     "Task or Task<T>"
    ],
    "answer": 3,
    "explain": "Task or Task<T> lets the caller await the async method's completion and get its result."
   },
   {
    "q": "How does async/await differ from plain multithreading?",
    "options": [
     "They are identical",
     "Multithreading cannot wait for anything",
     "async/await only works with files",
     "async/await frees the current thread while waiting rather than necessarily running work in parallel on another thread"
    ],
    "answer": 3,
    "explain": "async/await is about not blocking while waiting for something to finish, which is a different concern from running work concurrently on multiple threads."
   }
  ]
 },
 "csharp-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "In C# you don't manually free memory the way you do in C with free(). Instead, .NET's garbage collector (GC) automatically finds objects that nothing refers to anymore and reclaims their memory in the background."
    },
    {
     "type": "text",
     "text": "The GC works by tracing which objects are still reachable from your running code (roots like local variables and static fields). Anything unreachable is garbage and gets cleaned up, usually in generations: short-lived objects (Gen 0) are collected often and cheaply, long-lived survivors (Gen 1, Gen 2) less often."
    },
    {
     "type": "tip",
     "text": "Common interview question: \"Does the GC manage everything?\" Answer: no — it only manages memory. Unmanaged resources like open files, network sockets, and database connections need explicit cleanup, which is where IDisposable comes in."
    },
    {
     "type": "code",
     "lang": "csharp",
     "code": "class DbConnection : IDisposable\n{\n    public void Query(string sql)\n    {\n        Console.WriteLine(\"Running: \" + sql);\n    }\n\n    public void Dispose()\n    {\n        Console.WriteLine(\"Connection closed.\");\n    }\n}\n\nusing (DbConnection conn = new DbConnection())\n{\n    conn.Query(\"SELECT * FROM Users\");\n}\n// Running: SELECT * FROM Users\n// Connection closed.  -- Dispose() runs automatically here"
    },
    {
     "type": "text",
     "text": "A class implements IDisposable and writes its own Dispose() method to release unmanaged resources deterministically — right when you're done, not whenever the GC eventually gets around to it. The using block calls Dispose() for you automatically, even if an exception is thrown inside."
    },
    {
     "type": "text",
     "text": "This combination — automatic GC for memory, IDisposable/using for everything else — is the backbone of reliable, leak-free C# programs, and it's a favourite topic in placement interviews because it tests whether you understand what the runtime does and doesn't handle for you."
    }
   ],
   "recap": "The garbage collector automatically reclaims memory from unreachable objects, but it does not manage unmanaged resources like files or connections; classes implement IDisposable and wrap their use in a using block for guaranteed, timely cleanup."
  },
  "quiz": [
   {
    "q": "What does the .NET garbage collector automatically manage?",
    "options": [
     "Database transactions",
     "Network connections",
     "Memory used by objects no longer reachable",
     "Open file handles"
    ],
    "answer": 2,
    "explain": "The GC's job is memory management -- reclaiming space used by objects nothing references anymore."
   },
   {
    "q": "Why does a class implement IDisposable?",
    "options": [
     "To make fields static",
     "To let the GC skip that object",
     "To make the class run faster",
     "To release unmanaged resources (files, connections) deterministically"
    ],
    "answer": 3,
    "explain": "IDisposable lets a class define explicit, timely cleanup logic for resources the GC does not know how to release."
   },
   {
    "q": "What guarantees that Dispose() is called, even if an exception occurs inside the block?",
    "options": [
     "A using block",
     "The GC always calls it immediately",
     "The static keyword",
     "A try block alone"
    ],
    "answer": 0,
    "explain": "A using block calls Dispose() automatically when the block ends, whether it exits normally or via an exception."
   },
   {
    "q": "Which statement best describes the GC's generational approach?",
    "options": [
     "All objects are collected at the same rate",
     "Short-lived objects (Gen 0) are collected more often than long-lived survivors (higher generations)",
     "Generations refer to versions of .NET",
     "Only static objects have generations"
    ],
    "answer": 1,
    "explain": "The GC groups objects by how long they survive, collecting the youngest generation most frequently since most objects die young."
   }
  ]
 }
}
