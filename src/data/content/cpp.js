// Lesson text and quiz questions for "C++".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "cpp-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "C++ is a compiled, general-purpose programming language created by Bjarne Stroustrup in the 1980s as an extension of C. It powers things that must be fast: operating systems, game engines, browsers, databases, and embedded devices. You get low-level control over memory plus high-level tools to organize big programs."
    },
    {
     "type": "text",
     "text": "Unlike languages that run line-by-line, C++ is compiled: a program called a compiler translates your human-readable source code (a .cpp file) into machine code the CPU runs directly. This upfront translation is why C++ programs tend to run very fast."
    },
    {
     "type": "tip",
     "text": "Think of compiling like translating a whole book into another language before anyone reads it — slower to prepare, but then everyone reads it at full speed with no translator standing by."
    },
    {
     "type": "text",
     "text": "The build has stages: the preprocessor handles lines starting with #, the compiler turns each .cpp into an object file, and the linker joins those object files (and libraries) into one executable program you can run."
    },
    {
     "type": "code",
     "lang": "bash",
     "code": "# Compile a source file into an executable, then run it\ng++ hello.cpp -o hello\n./hello"
    }
   ],
   "recap": "C++ is a fast, compiled language; a compiler and linker turn your .cpp source into an executable machine-code program."
  },
  "quiz": [
   {
    "q": "What does a C++ compiler do?",
    "options": [
     "Translates source code into machine code before running",
     "Stores your files on disk",
     "Runs the source code one line at a time",
     "Connects your program to the internet"
    ],
    "answer": 0,
    "explain": "A compiler translates the whole source file into machine code ahead of time, which is why compiled programs run fast."
   },
   {
    "q": "Which stage joins object files and libraries into one executable?",
    "options": [
     "The debugger",
     "The editor",
     "The linker",
     "The preprocessor"
    ],
    "answer": 2,
    "explain": "The linker combines compiled object files and libraries into a single runnable executable."
   },
   {
    "q": "C++ was created as an extension of which language?",
    "options": [
     "Assembly",
     "Python",
     "Java",
     "C"
    ],
    "answer": 3,
    "explain": "Bjarne Stroustrup built C++ as an extension of C, adding higher-level features."
   },
   {
    "q": "Why is C++ often chosen for game engines and operating systems?",
    "options": [
     "It only works on the web",
     "It runs fast and gives low-level control",
     "It needs no compiler",
     "It cannot handle large programs"
    ],
    "answer": 1,
    "explain": "Compiled speed plus fine control over memory make C++ ideal for performance-critical software."
   }
  ]
 },
 "cpp-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every C++ program starts running at a special function called main. When you run the program, the operating system calls main first; everything your program does flows from there. main returns an int, where 0 conventionally means 'finished successfully'."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, world!\" << std::endl;\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "The line #include <iostream> pulls in the input/output library so you can print text. std::cout is the standard output stream (your console), and the << operator sends data into it. std::endl ends the line and flushes the output. The std:: prefix means these names live in the standard namespace."
    },
    {
     "type": "tip",
     "text": "Read << as an arrow pushing values toward the screen: std::cout << x pushes x out to the console. You can chain several: cout << a << b << c."
    },
    {
     "type": "text",
     "text": "Every statement ends with a semicolon (;). Forgetting it is the most common beginner error, and the compiler will complain about the line after the missing one."
    }
   ],
   "recap": "Execution begins in main; std::cout with << prints to the console, and every statement ends with a semicolon."
  },
  "quiz": [
   {
    "q": "Where does a C++ program begin executing?",
    "options": [
     "In the #include line",
     "In the main function",
     "At the last line of the file",
     "Wherever cout appears"
    ],
    "answer": 1,
    "explain": "The main function is the program's entry point; the OS calls it first."
   },
   {
    "q": "What does std::cout << \"Hi\"; do?",
    "options": [
     "Reads text from the user",
     "Declares a variable named Hi",
     "Sends the text 'Hi' to the console",
     "Deletes the text 'Hi'"
    ],
    "answer": 2,
    "explain": "std::cout is the output stream and << pushes the value out to the console."
   },
   {
    "q": "Why do we write #include <iostream>?",
    "options": [
     "To create the main function automatically",
     "To make the program run faster",
     "To bring in input/output tools like cout",
     "To end the program"
    ],
    "answer": 2,
    "explain": "iostream provides std::cout and std::cin for console input and output."
   },
   {
    "q": "What ends nearly every C++ statement?",
    "options": [
     "A semicolon ;",
     "A colon :",
     "A comma ,",
     "A period ."
    ],
    "answer": 0,
    "explain": "Statements in C++ terminate with a semicolon, and omitting it causes a compile error."
   }
  ]
 },
 "cpp-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a named box in memory that holds a value. C++ is statically typed, meaning you must declare each variable's type, and that type does not change. The type tells the compiler how much memory to use and what kinds of operations are allowed."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int age = 20;          // whole number\ndouble price = 9.99;   // number with a decimal\nchar grade = 'A';      // single character\nbool passed = true;    // true or false\nstd::string name = \"Ada\"; // text (needs #include <string>)"
    },
    {
     "type": "text",
     "text": "int stores whole numbers, double stores real numbers with a fractional part, char holds one character in single quotes, and bool holds true or false. std::string holds text in double quotes. Choosing the right type keeps your program correct and memory-efficient."
    },
    {
     "type": "tip",
     "text": "Watch out for integer division: 7 / 2 gives 3, not 3.5, because both operands are ints. Make at least one a double (7.0 / 2) to keep the decimal part."
    },
    {
     "type": "text",
     "text": "You can also let the compiler infer the type with the auto keyword: auto count = 10; makes count an int automatically. Use it to avoid repeating long type names, but keep code readable."
    }
   ],
   "recap": "Variables are typed named boxes; int, double, char, bool, and std::string cover the basics, and auto lets the compiler infer the type."
  },
  "quiz": [
   {
    "q": "What does it mean that C++ is statically typed?",
    "options": [
     "Only text can be stored",
     "Each variable's type is fixed at declaration",
     "Variables have no type",
     "Types change while the program runs"
    ],
    "answer": 1,
    "explain": "In a statically typed language you declare a type and it stays fixed for that variable."
   },
   {
    "q": "Which type best stores the value 3.14?",
    "options": [
     "int",
     "char",
     "bool",
     "double"
    ],
    "answer": 3,
    "explain": "double stores real numbers that have a fractional (decimal) part."
   },
   {
    "q": "What is the result of the expression 7 / 2 in C++?",
    "options": [
     "3.5",
     "3",
     "3.0",
     "4"
    ],
    "answer": 1,
    "explain": "Dividing two ints performs integer division, discarding the fractional part to give 3."
   },
   {
    "q": "What does 'auto count = 10;' do?",
    "options": [
     "Lets the compiler infer count is an int",
     "Creates an error",
     "Makes count text",
     "Makes count a double"
    ],
    "answer": 0,
    "explain": "auto tells the compiler to deduce the type from the initializer, here an int."
   }
  ]
 },
 "cpp-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators are symbols that act on values. Arithmetic operators + - * / do math, and % (modulo) gives the remainder of a division. For example, 10 % 3 is 1. Modulo is handy for checking even/odd or wrapping around ranges."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int a = 10, b = 3;\nint sum = a + b;        // 13\nint rem = a % b;        // 1  (remainder)\nbool even = (a % 2 == 0); // true, 10 is even\n\na += 5;   // same as a = a + 5;  -> a is now 15"
    },
    {
     "type": "text",
     "text": "Comparison operators == != < > <= >= produce a bool. Note == tests equality, while a single = assigns. Logical operators combine bools: && is AND (both must be true), || is OR (either true), and ! is NOT (flips the value)."
    },
    {
     "type": "tip",
     "text": "The classic bug is writing if (x = 5) instead of if (x == 5). The first assigns 5 to x and is almost always wrong — double it up to compare."
    },
    {
     "type": "text",
     "text": "Compound assignment operators like += -= *= /= update a variable in place, so count += 1 is shorthand for count = count + 1. Operators also have precedence — * and / happen before + and — , and you use parentheses to force the order you want."
    }
   ],
   "recap": "Operators do math and comparisons; % gives remainders, == compares while = assigns, and && || ! combine boolean values."
  },
  "quiz": [
   {
    "q": "What is the value of 10 % 3?",
    "options": [
     "3",
     "1",
     "0",
     "3.33"
    ],
    "answer": 1,
    "explain": "The modulo operator returns the remainder of 10 divided by 3, which is 1."
   },
   {
    "q": "Which operator tests whether two values are equal?",
    "options": [
     "!=",
     "=",
     "==",
     ":="
    ],
    "answer": 2,
    "explain": "== compares for equality, while a single = performs assignment."
   },
   {
    "q": "The && operator is true when...",
    "options": [
     "Neither side is true",
     "The sides are equal",
     "Either side is true",
     "Both sides are true"
    ],
    "answer": 3,
    "explain": "Logical AND (&&) yields true only when both operands are true."
   },
   {
    "q": "What is 'count += 1;' shorthand for?",
    "options": [
     "count = 1",
     "count = count + 1",
     "count - 1",
     "count == count + 1"
    ],
    "answer": 1,
    "explain": "+= is compound assignment, so count += 1 means count = count + 1."
   }
  ]
 },
 "cpp-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Control flow lets a program make decisions and repeat work. An if statement runs a block only when a condition is true; else provides an alternative, and else if chains several conditions. The condition must evaluate to a bool."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int score = 75;\nif (score >= 90) {\n    std::cout << \"A\";\n} else if (score >= 60) {\n    std::cout << \"Pass\";\n} else {\n    std::cout << \"Fail\";\n}"
    },
    {
     "type": "text",
     "text": "Loops repeat a block. A while loop keeps going as long as its condition stays true. A for loop packs three parts into one line — initialize, condition, update — which is perfect for counting a known number of times."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// Print 0 1 2 3 4\nfor (int i = 0; i < 5; i++) {\n    std::cout << i << \" \";\n}\n\nint n = 3;\nwhile (n > 0) {\n    std::cout << n;\n    n--;   // must change n, or the loop never ends\n}"
    },
    {
     "type": "tip",
     "text": "If a loop runs forever, check that something inside actually moves the condition toward false. A while loop with no update is a classic infinite loop."
    },
    {
     "type": "text",
     "text": "Inside loops, break exits the loop immediately and continue skips to the next iteration. Use them sparingly to keep logic clear."
    }
   ],
   "recap": "if/else if/else choose between paths, while repeats until a condition is false, and for loops count with initialize/condition/update in one line."
  },
  "quiz": [
   {
    "q": "How many times does 'for (int i = 0; i < 5; i++)' run its body?",
    "options": [
     "4 times",
     "Forever",
     "6 times",
     "5 times"
    ],
    "answer": 3,
    "explain": "i takes the values 0,1,2,3,4 — five iterations — then stops when i reaches 5."
   },
   {
    "q": "What keyword provides an alternative path when an if condition is false?",
    "options": [
     "loop",
     "then",
     "else",
     "break"
    ],
    "answer": 2,
    "explain": "The else block runs when the if condition evaluates to false."
   },
   {
    "q": "What commonly causes an infinite while loop?",
    "options": [
     "The condition never becomes false",
     "Printing inside the loop",
     "Using a bool condition",
     "Declaring the variable"
    ],
    "answer": 0,
    "explain": "If nothing inside the loop moves the condition toward false, it repeats forever."
   },
   {
    "q": "What does break do inside a loop?",
    "options": [
     "Pauses the program",
     "Exits the loop immediately",
     "Restarts the loop",
     "Skips to the next iteration"
    ],
    "answer": 1,
    "explain": "break terminates the loop right away and continues after it."
   }
  ]
 },
 "cpp-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A function is a named, reusable block of code. It takes inputs called parameters, does work, and can return a result. Functions let you break a big problem into small named pieces and avoid repeating yourself."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// return type, name, parameters\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int total = add(3, 4);   // total is 7\n    std::cout << total;\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "The return type comes first (int here), then the name, then parameters in parentheses. A function whose return type is void returns nothing — it just performs an action. The values you pass in when calling are called arguments."
    },
    {
     "type": "tip",
     "text": "By default C++ passes arguments by value — the function gets its own copy, so changes inside don't affect the caller's variable. Pass by reference (int& x) when you want changes to stick."
    },
    {
     "type": "text",
     "text": "If a function is defined after main, you provide a declaration (prototype) earlier, like int add(int, int); so the compiler knows it exists before it is used. You can also overload functions — several functions with the same name but different parameter lists — and the compiler picks the matching one."
    }
   ],
   "recap": "Functions package reusable code with a return type, name, and parameters; pass-by-value copies arguments while pass-by-reference lets changes persist."
  },
  "quiz": [
   {
    "q": "In 'int add(int a, int b)', what is int at the front?",
    "options": [
     "The function's name",
     "The return type",
     "An argument",
     "A parameter"
    ],
    "answer": 1,
    "explain": "The leading int is the return type, describing what value the function gives back."
   },
   {
    "q": "What does a void function return?",
    "options": [
     "A bool",
     "Nothing",
     "Its parameters",
     "An integer"
    ],
    "answer": 1,
    "explain": "A void function performs an action but returns no value."
   },
   {
    "q": "With default pass-by-value, changing a parameter inside a function...",
    "options": [
     "Also changes the caller's variable",
     "Deletes the variable",
     "Does not affect the caller's variable",
     "Causes a compile error"
    ],
    "answer": 2,
    "explain": "Pass-by-value gives the function its own copy, so the original stays unchanged."
   },
   {
    "q": "What lets two functions share the same name with different parameters?",
    "options": [
     "A prototype",
     "Recursion",
     "Function overloading",
     "Inheritance"
    ],
    "answer": 2,
    "explain": "Overloading allows multiple functions with the same name distinguished by their parameter lists."
   }
  ]
 },
 "cpp-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An array stores many values of the same type in a row, accessed by an index that starts at 0. So in an array of 5 elements the valid indices are 0 through 4. Arrays have a fixed size decided when you declare them."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int scores[5] = {90, 80, 70, 60, 50};\nstd::cout << scores[0];   // 90 (first element)\nscores[4] = 55;           // change the last element\n\n// std::vector is a resizable array (needs <vector>)\nstd::vector<int> v = {1, 2, 3};\nv.push_back(4);           // now {1, 2, 3, 4}"
    },
    {
     "type": "tip",
     "text": "Going past the end — like scores[5] on a 5-element array — is undefined behavior. C++ won't stop you, and it may silently corrupt memory, so always stay within 0 to size-1."
    },
    {
     "type": "text",
     "text": "A reference is an alias — another name for an existing variable. Declared with &, it must be bound when created and always refers to the same variable. References are the main way to let a function modify a caller's variable or to avoid copying large objects."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "void doubleIt(int& x) {   // x refers to the caller's variable\n    x = x * 2;\n}\n\nint n = 10;\ndoubleIt(n);   // n is now 20"
    },
    {
     "type": "text",
     "text": "Prefer std::vector over raw arrays in modern C++: it knows its own size, can grow with push_back, and is safer. Passing a big vector by reference (const std::vector<int>& v) avoids an expensive copy."
    }
   ],
   "recap": "Arrays hold fixed-size indexed collections starting at 0; references are aliases used to modify or cheaply pass variables, and std::vector is the safer resizable alternative."
  },
  "quiz": [
   {
    "q": "In an array of 5 elements, what is the index of the first element?",
    "options": [
     "-1",
     "0",
     "1",
     "5"
    ],
    "answer": 1,
    "explain": "Array indexing in C++ starts at 0, so the first element is at index 0."
   },
   {
    "q": "What is a C++ reference?",
    "options": [
     "An alias for an existing variable",
     "A resizable array",
     "A type of loop",
     "A copy of a variable"
    ],
    "answer": 0,
    "explain": "A reference is another name bound to an existing variable, always referring to it."
   },
   {
    "q": "Why prefer std::vector over a raw array?",
    "options": [
     "It cannot store numbers",
     "It runs without a compiler",
     "It knows its size and can grow",
     "It has no indices"
    ],
    "answer": 2,
    "explain": "std::vector tracks its own size and can resize with push_back, making it safer and more flexible."
   },
   {
    "q": "After 'void doubleIt(int& x){ x = x*2; }' is called on n = 10, what is n?",
    "options": [
     "10",
     "20",
     "It stays a copy",
     "0"
    ],
    "answer": 1,
    "explain": "Because x is a reference to n, doubling x changes the original n to 20."
   }
  ]
 },
 "cpp-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A class is a blueprint that bundles data (member variables) with the functions that operate on that data (member functions or methods). An object is a concrete instance made from that blueprint. This is the heart of object-oriented programming: modeling real things as self-contained units."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Rectangle {\nprivate:\n    int width, height;      // hidden data\npublic:\n    Rectangle(int w, int h) // constructor\n        : width(w), height(h) {}\n    int area() { return width * height; }\n};\n\nint main() {\n    Rectangle r(3, 4);      // create an object\n    std::cout << r.area();  // 12\n}"
    },
    {
     "type": "text",
     "text": "The public and private labels control access — this is encapsulation. Private members are hidden inside the class so outside code can't tamper with them, and you expose a clean public interface. A constructor is a special function that runs when an object is created, setting up its initial state."
    },
    {
     "type": "tip",
     "text": "Think of a class like a cookie cutter and objects like the cookies. One blueprint (class) stamps out many independent objects, each with its own data."
    },
    {
     "type": "text",
     "text": "The Standard Template Library (STL) gives you ready-made, tested building blocks: containers like std::vector, std::map, and std::set store data, while algorithms like std::sort and std::find operate on them. They are templated, meaning they work with any type — a vector of ints or of strings uses the same code."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "#include <vector>\n#include <algorithm>\n\nstd::vector<int> nums = {5, 2, 8, 1};\nstd::sort(nums.begin(), nums.end());   // -> 1 2 5 8\n\n// map: key -> value lookup\nstd::map<std::string, int> ages;\nages[\"Ada\"] = 36;   // store\nint a = ages[\"Ada\"];  // retrieve"
    },
    {
     "type": "text",
     "text": "Together, classes let you design your own types and the STL saves you from reinventing common data structures and algorithms. Mastering both is what turns you from writing small scripts into building large, maintainable C++ systems."
    }
   ],
   "recap": "Classes bundle data with methods and use encapsulation via public/private; objects are instances, and the STL provides reusable templated containers (vector, map) and algorithms (sort) for any type."
  },
  "quiz": [
   {
    "q": "What is the relationship between a class and an object?",
    "options": [
     "A class is a blueprint; an object is an instance of it",
     "They are the same thing",
     "An object is a blueprint for a class",
     "A class runs an object"
    ],
    "answer": 0,
    "explain": "A class defines the blueprint, and each object is a concrete instance created from it."
   },
   {
    "q": "What does marking members private achieve?",
    "options": [
     "Makes members global",
     "Deletes the data",
     "Hides data from outside code (encapsulation)",
     "Makes the program faster"
    ],
    "answer": 2,
    "explain": "Private members are hidden inside the class, enforcing encapsulation and a clean interface."
   },
   {
    "q": "Which special function runs automatically when an object is created?",
    "options": [
     "main",
     "The destructor",
     "sort",
     "The constructor"
    ],
    "answer": 3,
    "explain": "A constructor runs at object creation to initialize the object's state."
   },
   {
    "q": "What does std::sort(v.begin(), v.end()) do to a vector?",
    "options": [
     "Deletes its elements",
     "Arranges its elements in order",
     "Prints it to the screen",
     "Reverses it randomly"
    ],
    "answer": 1,
    "explain": "std::sort is an STL algorithm that orders the elements in the given range."
   }
  ]
 },
 "cpp-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A pointer is a variable that stores the memory address of another variable, instead of storing a value directly. You declare one with a star: int* p means p can hold the address of an int. The & operator gives you the address of a variable, and the * operator, when applied to a pointer, dereferences it to get the value it points to."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int x = 10;\nint* p = &x;      // p holds the address of x\n\nstd::cout << x;    // 10\nstd::cout << p;    // some address like 0x7ffee...\nstd::cout << *p;   // 10, the value at that address\n\n*p = 20;           // change x through the pointer\nstd::cout << x;    // 20"
    },
    {
     "type": "text",
     "text": "So far every variable you have used lived on the stack and was cleaned up automatically when it went out of scope. Sometimes you need memory that survives beyond a function call, or whose size is only known while the program is running. That memory comes from the heap, and you request it with new."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int* arr = new int[5];   // 5 ints on the heap\nfor (int i = 0; i < 5; i++) arr[i] = i * i;\n\ndelete[] arr;            // must free it yourself\n\nint* single = new int(7);\ndelete single;            // single object, plain delete"
    },
    {
     "type": "tip",
     "text": "Every new must be matched by exactly one delete (or new[] with delete[]). Forgetting delete causes a memory leak; deleting twice or using freed memory causes a crash. This bookkeeping is exactly why later lessons introduce smart pointers."
    },
    {
     "type": "text",
     "text": "A pointer that does not point anywhere valid should be set to nullptr, and you should check for it before dereferencing. Dereferencing a null or dangling pointer is undefined behaviour — the program might crash, or worse, might appear to work and fail later."
    }
   ],
   "recap": "Pointers store addresses; & takes an address and * dereferences one. new/delete manage heap memory manually, and every new needs exactly one matching delete."
  },
  "quiz": [
   {
    "q": "What does the & operator do when applied to a variable?",
    "options": [
     "Doubles the variable",
     "Deletes the variable",
     "Gives the address of the variable",
     "Dereferences a pointer"
    ],
    "answer": 2,
    "explain": "& produces the memory address of a variable, which can be stored in a pointer."
   },
   {
    "q": "After 'int* p = &x;', how do you access the value x holds through p?",
    "options": [
     "p[0]",
     "&p",
     "p",
     "*p"
    ],
    "answer": 3,
    "explain": "*p dereferences the pointer, giving you the value stored at the address it holds."
   },
   {
    "q": "What happens if you call new but never call delete on that memory?",
    "options": [
     "The program refuses to compile",
     "The compiler deletes it automatically",
     "A memory leak — the memory is never freed",
     "Nothing, C++ has garbage collection"
    ],
    "answer": 2,
    "explain": "C++ has no automatic garbage collector for heap memory, so unmatched new calls leak memory until the program ends."
   },
   {
    "q": "Which is correct for freeing memory allocated with 'new int[5]'?",
    "options": [
     "free(arr);",
     "arr.clear();",
     "delete[] arr;",
     "delete arr;"
    ],
    "answer": 2,
    "explain": "Array allocations with new[] must be freed with delete[], not plain delete."
   }
  ]
 },
 "cpp-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have already seen a constructor set up an object's initial state. C++ also gives every class a destructor, a special function that runs automatically when an object is destroyed — when it goes out of scope, or when you delete it. Destructors are named with a tilde: ~ClassName()."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class File {\npublic:\n    File(std::string name) { std::cout << \"opening \" << name; }\n    ~File() { std::cout << \"closing file\"; }\n};\n\nvoid use() {\n    File f(\"data.txt\");\n}   // f goes out of scope here -> destructor runs"
    },
    {
     "type": "text",
     "text": "This pattern, where a constructor acquires a resource and the destructor releases it automatically, is called RAII (Resource Acquisition Is Initialization). It is the main reason C++ programs can manage files, locks, and memory safely without remembering to clean up by hand every time."
    },
    {
     "type": "text",
     "text": "Inside a member function, the keyword this is a pointer to the current object. You rarely need it for simple access, but it is essential when a parameter shadows a member name, or when a method needs to return a reference to the object itself."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Counter {\n    int count;\npublic:\n    Counter(int count) {\n        this->count = count;   // this->count is the member, count is the parameter\n    }\n    Counter& increment() {\n        count++;\n        return *this;           // enables chaining: c.increment().increment();\n    }\n};"
    },
    {
     "type": "tip",
     "text": "If a class allocates memory with new in its constructor, it must free it with delete in its destructor. Missing this is one of the most common causes of memory leaks in student C++ code."
    }
   ],
   "recap": "A destructor (~ClassName) runs automatically when an object dies, enabling RAII — pairing resource setup in the constructor with cleanup in the destructor. The `this` pointer refers to the current object inside a member function."
  },
  "quiz": [
   {
    "q": "When does a destructor run?",
    "options": [
     "Only when the program calls it manually",
     "Never, unless you use delete",
     "Only for global objects",
     "Automatically when the object is destroyed or goes out of scope"
    ],
    "answer": 3,
    "explain": "Destructors run automatically at the end of an object's lifetime, whether that's scope exit or an explicit delete."
   },
   {
    "q": "What does RAII stand for and mean in practice?",
    "options": [
     "A loop construct",
     "Resource Acquisition Is Initialization — tie resource cleanup to object lifetime",
     "A sorting algorithm",
     "A type of pointer"
    ],
    "answer": 1,
    "explain": "RAII ties acquiring a resource to construction and releasing it to destruction, so cleanup happens automatically."
   },
   {
    "q": "Inside a member function, what does 'this' refer to?",
    "options": [
     "The first parameter",
     "The class name",
     "A pointer to the current object",
     "The base class"
    ],
    "answer": 2,
    "explain": "'this' is an implicit pointer to the object the member function was called on."
   },
   {
    "q": "Why does 'return *this;' inside a method allow chaining like c.increment().increment()?",
    "options": [
     "It creates a new object each time",
     "It only works with pointers",
     "It restarts the program",
     "It returns a reference to the current object so another method can be called on the result"
    ],
    "answer": 3,
    "explain": "Returning *this gives back the same object by reference, so a second method call can be chained directly onto the result."
   }
  ]
 },
 "cpp-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance lets one class (the derived or child class) reuse and extend another class (the base or parent class). Instead of copy-pasting fields and methods between similar classes, you write the shared parts once in the base class and let derived classes add or change only what is different."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Animal {\nprotected:\n    std::string name;\npublic:\n    Animal(std::string n) : name(n) {}\n    void eat() { std::cout << name << \" is eating\"; }\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}   // call the base constructor\n    void bark() { std::cout << name << \" says woof\"; }\n};\n\nint main() {\n    Dog d(\"Rex\");\n    d.eat();   // inherited from Animal\n    d.bark();  // Dog's own method\n}"
    },
    {
     "type": "text",
     "text": "The protected access level sits between public and private: a protected member is hidden from outside code, like private, but a derived class can still access it directly. Public inheritance (': public Animal') means every Dog 'is-a' Animal — this is the standard, most common form."
    },
    {
     "type": "text",
     "text": "A derived class's constructor must initialize its base class part first, which is why Dog's constructor calls Animal(n) in its initializer list. If you don't call it explicitly, the base class's default constructor runs automatically."
    },
    {
     "type": "tip",
     "text": "Ask yourself 'is a Dog a kind of Animal?' If yes, inheritance fits. If the relationship is really 'a Car has an Engine', that's composition (a member variable), not inheritance — a very common exam distinction."
    }
   ],
   "recap": "Inheritance (class Derived : public Base) lets a child class reuse a parent's members and add its own; protected members are visible to derived classes but hidden from outside code."
  },
  "quiz": [
   {
    "q": "In 'class Dog : public Animal', what is Animal?",
    "options": [
     "A member variable of Dog",
     "The base (parent) class",
     "A derived class of Dog",
     "An interface only"
    ],
    "answer": 1,
    "explain": "Animal is the base class that Dog inherits from and extends."
   },
   {
    "q": "How is a protected member different from a private one?",
    "options": [
     "Protected members are accessible to derived classes but hidden from outside code, unlike private which even derived classes can't touch directly",
     "Protected members can't be inherited at all",
     "There is no difference",
     "Protected members are visible everywhere"
    ],
    "answer": 0,
    "explain": "Protected grants derived classes direct access while still hiding the member from unrelated outside code, unlike private."
   },
   {
    "q": "Which relationship best fits inheritance rather than composition?",
    "options": [
     "A Library has Books",
     "A Dog is an Animal",
     "A Car has an Engine",
     "A House has a Room"
    ],
    "answer": 1,
    "explain": "'Is-a' relationships like Dog-is-an-Animal fit inheritance; 'has-a' relationships fit composition."
   },
   {
    "q": "What must a derived class's constructor do regarding the base class?",
    "options": [
     "Nothing, base initialization happens by magic with no rules",
     "It must redefine every base method",
     "It cannot call the base constructor at all",
     "It must initialize the base part, explicitly or via the base's default constructor"
    ],
    "answer": 3,
    "explain": "The base class portion of a derived object must be constructed, either explicitly in the initializer list or by an implicit call to the base's default constructor."
   }
  ]
 },
 "cpp-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Polymorphism means 'many forms' — the same function call can behave differently depending on the actual type of object it runs on. In C++, this is achieved with virtual functions: a base class marks a method virtual, and a derived class can override it with its own version."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Shape {\npublic:\n    virtual double area() { return 0; }   // virtual: can be overridden\n};\n\nclass Circle : public Shape {\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n};\n\nvoid printArea(Shape* s) {\n    std::cout << s->area();   // calls the right version at runtime\n}\n\nint main() {\n    Circle c(2);\n    printArea(&c);   // prints Circle's area, not Shape's\n}"
    },
    {
     "type": "text",
     "text": "The key idea is that printArea takes a Shape*, but it still calls Circle's area(), not Shape's. This is decided at runtime based on the object's real type, which is why it's called dynamic (or runtime) polymorphism. Without the virtual keyword, the base class version would always run instead."
    },
    {
     "type": "text",
     "text": "The override keyword is optional but strongly recommended: it tells the compiler 'I intend to override a virtual base method', and the compiler will error if the signature doesn't actually match a base method — catching typos that would otherwise silently create a new, unrelated function."
    },
    {
     "type": "tip",
     "text": "If a base class pointer will ever be used to delete a derived object, the base class destructor must also be virtual. Otherwise only the base part gets destroyed and the derived part leaks — a classic interview question."
    }
   ],
   "recap": "Virtual functions let a base class pointer or reference call the derived class's overridden version at runtime, which is the mechanism behind runtime polymorphism in C++."
  },
  "quiz": [
   {
    "q": "What keyword makes a base class method overridable at runtime?",
    "options": [
     "static",
     "virtual",
     "override",
     "inline"
    ],
    "answer": 1,
    "explain": "Marking a base method virtual enables dynamic dispatch, so derived overrides are chosen at runtime."
   },
   {
    "q": "In the Shape/Circle example, calling s->area() through a Shape* pointing at a Circle prints:",
    "options": [
     "Nothing, it's undefined",
     "A compile error",
     "Shape's area (always 0)",
     "Circle's area, chosen at runtime"
    ],
    "answer": 3,
    "explain": "Because area() is virtual, the call is resolved based on the real object type at runtime, giving Circle's version."
   },
   {
    "q": "Why should a base class have a virtual destructor if it will be deleted through a base pointer?",
    "options": [
     "It is required by every class regardless of use",
     "It makes the program compile faster",
     "Without it, deleting through a base pointer only destroys the base part, leaking the derived part",
     "It has no real effect"
    ],
    "answer": 2,
    "explain": "A non-virtual destructor called through a base pointer skips the derived class's cleanup, causing a resource leak."
   },
   {
    "q": "What does the 'override' keyword do?",
    "options": [
     "Deletes the base class version",
     "Tells the compiler this function is meant to override a virtual base method, and errors if it doesn't match",
     "Marks a function as private",
     "Makes a function run faster"
    ],
    "answer": 1,
    "explain": "override is a safety check: the compiler verifies the function actually overrides a base virtual method with a matching signature."
   }
  ]
 },
 "cpp-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A pure virtual function has no body in the base class and is declared by writing '= 0' after it. A class with at least one pure virtual function becomes an abstract class: you cannot create an object of it directly, only use it as a base for other classes."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Shape {\npublic:\n    virtual double area() = 0;    // pure virtual - no body\n    virtual ~Shape() {}\n};\n\nclass Square : public Shape {\n    double side;\npublic:\n    Square(double s) : side(s) {}\n    double area() override { return side * side; }   // must override\n};\n\n// Shape s;      // ERROR: cannot instantiate an abstract class\nSquare sq(4);   // OK, Square provides area()"
    },
    {
     "type": "text",
     "text": "Abstract classes are how C++ expresses interfaces: a contract that says 'every shape must be able to report its area', without saying how. Any derived class that fails to override every pure virtual function is itself abstract too, and still can't be instantiated."
    },
    {
     "type": "text",
     "text": "This is powerful with collections: you can keep a std::vector<Shape*> holding pointers to Square, Circle, Triangle objects all together, and call ->area() on each one, letting polymorphism pick the right version for every element."
    },
    {
     "type": "tip",
     "text": "Exam phrasing to remember: 'a pure virtual function has = 0 and no definition; a class containing one cannot be instantiated; it can only be used through pointers or references to derived objects.'"
    }
   ],
   "recap": "A pure virtual function (= 0) makes its class abstract — instantiable only through derived classes that implement it — and is C++'s way of defining an interface."
  },
  "quiz": [
   {
    "q": "How do you declare a pure virtual function?",
    "options": [
     "abstract void f();",
     "virtual void f() = 0;",
     "virtual void f();",
     "void f() = 0;"
    ],
    "answer": 1,
    "explain": "A pure virtual function is declared with 'virtual' and '= 0' and has no body in the base class."
   },
   {
    "q": "What happens if you try to create an object of a class with a pure virtual function that isn't overridden?",
    "options": [
     "It only fails at runtime",
     "A compile error, because the class is abstract",
     "It compiles fine",
     "It creates the object with a default area of 0"
    ],
    "answer": 1,
    "explain": "Classes with unimplemented pure virtual functions are abstract and the compiler refuses to instantiate them directly."
   },
   {
    "q": "What is the main purpose of an abstract class in C++?",
    "options": [
     "To make code run faster",
     "To define an interface/contract that derived classes must implement",
     "To store data only, with no methods",
     "To avoid writing constructors"
    ],
    "answer": 1,
    "explain": "Abstract classes specify required behaviour (via pure virtual functions) without providing an implementation, acting as an interface."
   },
   {
    "q": "Why keep a std::vector<Shape*> instead of std::vector<Square>, std::vector<Circle> separately?",
    "options": [
     "Vectors of pointers are required by the language",
     "There is no real benefit",
     "It lets you treat different derived shapes uniformly and call the right override via polymorphism",
     "It uses less memory always"
    ],
    "answer": 2,
    "explain": "A vector of base pointers can hold mixed derived types together, and virtual dispatch calls each one's correct override."
   }
  ]
 },
 "cpp-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "C++ lets you redefine what an operator like +, ==, or << does when applied to your own class, so objects can be used as naturally as built-in types. This is called operator overloading, and it is done by defining a specially named function."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Point {\npublic:\n    int x, y;\n    Point(int x, int y) : x(x), y(y) {}\n\n    Point operator+(const Point& other) const {\n        return Point(x + other.x, y + other.y);\n    }\n    bool operator==(const Point& other) const {\n        return x == other.x && y == other.y;\n    }\n};\n\nint main() {\n    Point a(1, 2), b(3, 4);\n    Point c = a + b;     // calls operator+\n    bool same = (a == b); // calls operator==\n}"
    },
    {
     "type": "text",
     "text": "The const after the parameter list promises the function won't modify 'other', and the const after the parameter list on the whole method promises it won't modify the object it's called on either — good practice for operators that only read data."
    },
    {
     "type": "text",
     "text": "You can also overload << to make an object print nicely with std::cout, but since the left operand there is std::ostream (not your class), that operator must be written as a standalone (often 'friend') function rather than a member."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "std::ostream& operator<<(std::ostream& out, const Point& p) {\n    out << \"(\" << p.x << \", \" << p.y << \")\";\n    return out;\n}\n// now: std::cout << a;   prints (1, 2)"
    },
    {
     "type": "tip",
     "text": "Overload operators only when the meaning is obvious — + for adding two vectors makes sense, + for concatenating two Employee records does not. Misusing operator overloading makes code harder to read, not easier."
    }
   ],
   "recap": "Operator overloading lets objects use +, ==, << and similar operators naturally by defining functions like operator+; keep overloads intuitive and match the operator's usual meaning."
  },
  "quiz": [
   {
    "q": "How do you define what '+' does for two Point objects?",
    "options": [
     "By using a macro called PLUS",
     "By renaming the class Add",
     "It works automatically for all classes",
     "By writing a function named operator+"
    ],
    "answer": 3,
    "explain": "Overloading + is done by defining a member (or free) function named operator+ that returns the result."
   },
   {
    "q": "Why must operator<< for printing a Point be a standalone function rather than a member of Point?",
    "options": [
     "The left-hand operand is std::ostream, not Point, so it can't be a member of Point",
     "<< only works on numbers",
     "Member functions can't return values",
     "It must be a private function"
    ],
    "answer": 0,
    "explain": "A member operator's left operand is always the object it's called on; since the left operand of cout << p is ostream, the function must be free-standing."
   },
   {
    "q": "What does adding 'const' after a member function's parameter list promise?",
    "options": [
     "The function only accepts constant arguments",
     "The function runs faster",
     "The function will not modify the object it is called on",
     "The function cannot be overloaded"
    ],
    "answer": 2,
    "explain": "A trailing const on a member function guarantees it does not modify the calling object's state."
   },
   {
    "q": "When is operator overloading a bad idea?",
    "options": [
     "Only for the == operator",
     "Never, it should always be used",
     "When the operator's new meaning matches its usual meaning, like + for vector addition",
     "When the overloaded meaning is unrelated to the operator's usual meaning, hurting readability"
    ],
    "answer": 3,
    "explain": "Overloading should preserve the operator's intuitive meaning; using + for something unrelated to addition confuses readers."
   }
  ]
 },
 "cpp-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A template lets you write one function or class that works with any type, and lets the compiler generate the specific version it needs when you use it. This is how std::vector or std::sort can work with ints, strings, or your own classes without separate code for each."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "template <typename T>\nT maxOf(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << maxOf(3, 7);          // T becomes int -> 7\n    std::cout << maxOf(2.5, 1.1);      // T becomes double -> 2.5\n    std::cout << maxOf(std::string(\"cat\"), std::string(\"dog\")); // T becomes string\n}"
    },
    {
     "type": "text",
     "text": "The compiler figures out T from the arguments you pass — this is called template argument deduction, and you rarely need to specify T explicitly. Each distinct type used generates its own compiled version behind the scenes, so there's no runtime overhead compared to writing the function by hand for each type."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "template <typename T>\nclass Box {\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T get() { return value; }\n};\n\nBox<int> b1(42);\nBox<std::string> b2(\"hello\");"
    },
    {
     "type": "tip",
     "text": "Templates are compile-time, generics-like tools — the type must be known when the code compiles, unlike Python or Java generics that can defer more to runtime. If T doesn't support an operation you use inside the template (like > for a class with no operator>), you get a compile error only when that instantiation is used."
    }
   ],
   "recap": "Templates (template <typename T>) let one function or class work with any type; the compiler deduces T and generates a specific version for each type actually used, with no runtime overhead."
  },
  "quiz": [
   {
    "q": "What problem do templates solve?",
    "options": [
     "They make loops run in parallel",
     "They let you write one function/class that works for many types instead of duplicating code per type",
     "They replace the need for classes entirely",
     "They remove the need for a compiler"
    ],
    "answer": 1,
    "explain": "Templates generate type-specific code from one generic definition, avoiding duplicated functions for each type."
   },
   {
    "q": "In 'template <typename T> T maxOf(T a, T b)', how does the compiler know what T is when you call maxOf(3, 7)?",
    "options": [
     "It deduces T from the argument types passed in",
     "It picks T randomly",
     "T defaults to int always",
     "You must always specify T explicitly"
    ],
    "answer": 0,
    "explain": "Template argument deduction infers T from the types of the arguments supplied at the call site."
   },
   {
    "q": "What happens if you use maxOf on a class type that has no operator> defined?",
    "options": [
     "It silently returns 0",
     "It always returns the first argument",
     "Templates ignore missing operators",
     "A compile error occurs when that instantiation is used"
    ],
    "answer": 3,
    "explain": "Since maxOf's body uses >, instantiating it for a type without operator> fails to compile at that instantiation."
   },
   {
    "q": "Are templates resolved at compile time or runtime?",
    "options": [
     "Compile time — the compiler generates specific code for each type used",
     "It depends on the operating system",
     "Neither, they are interpreted",
     "Runtime, like Python generics"
    ],
    "answer": 0,
    "explain": "C++ templates are a compile-time mechanism; the compiler generates concrete code for every type actually instantiated."
   }
  ]
 },
 "cpp-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When something goes wrong at runtime — dividing by zero, opening a missing file, an invalid array index — a function can throw an exception instead of returning a bad value or crashing silently. The calling code can then catch that exception and decide how to respond."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "double divide(double a, double b) {\n    if (b == 0) {\n        throw std::runtime_error(\"division by zero\");\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        double r = divide(10, 0);\n        std::cout << r;\n    } catch (const std::runtime_error& e) {\n        std::cout << \"Error: \" << e.what();\n    }\n    std::cout << \"program continues\";\n}"
    },
    {
     "type": "text",
     "text": "The try block contains code that might fail. If a throw happens inside it, control jumps immediately to the matching catch block instead of continuing normally, and the program does not crash. Once the catch block finishes, execution carries on normally after the try/catch, which is why 'program continues' still prints."
    },
    {
     "type": "text",
     "text": "C++ provides standard exception types like std::runtime_error, std::out_of_range, and std::invalid_argument in the <stdexcept> header, all with a .what() method that returns a description. You can also define your own exception class by inheriting from std::exception."
    },
    {
     "type": "tip",
     "text": "Catch exceptions by const reference (const std::exception& e), not by value. Catching by value can slice a derived exception type down to its base, losing information, and is also less efficient because it copies."
    }
   ],
   "recap": "throw raises an exception when something goes wrong; try/catch lets the calling code handle it gracefully instead of crashing, using standard types like std::runtime_error and their .what() message."
  },
  "quiz": [
   {
    "q": "What does 'throw' do in a function?",
    "options": [
     "Ends the program immediately with no message",
     "Restarts the function",
     "Raises an exception that transfers control to a matching catch block",
     "Prints an error and continues normally"
    ],
    "answer": 2,
    "explain": "throw raises an exception, and control jumps to the nearest matching catch handler up the call stack."
   },
   {
    "q": "In a try/catch block, what happens after the catch block finishes handling an exception?",
    "options": [
     "The program terminates",
     "Execution continues normally after the try/catch statement",
     "The try block runs again",
     "It re-throws automatically"
    ],
    "answer": 1,
    "explain": "Once the catch handler completes, the program resumes execution right after the try/catch, without re-running the try block."
   },
   {
    "q": "Why catch exceptions by const reference instead of by value?",
    "options": [
     "By-value catching can slice a derived exception to its base type and is less efficient",
     "There is no difference",
     "By-value catching is not allowed by the compiler",
     "const reference makes exceptions run faster to throw"
    ],
    "answer": 0,
    "explain": "Catching by value copies (and can slice) the exception object; catching by const reference avoids both problems."
   },
   {
    "q": "What does an exception's .what() method return?",
    "options": [
     "Nothing, it's void",
     "The type name only",
     "The line number where it was thrown",
     "A description of the error"
    ],
    "answer": 3,
    "explain": ".what() returns a C-string describing the exception, useful for logging or displaying the error."
   }
  ]
 },
 "cpp-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far all input and output has gone through the console using std::cin and std::cout. C++ treats files the same way, as streams, using the <fstream> header: ofstream for writing to a file, ifstream for reading from one, and fstream for both."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "#include <fstream>\n\n// writing\nstd::ofstream out(\"scores.txt\");\nif (out.is_open()) {\n    out << \"Alice 90\" << std::endl;\n    out << \"Bob 85\" << std::endl;\n    out.close();\n}"
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// reading, line by line\nstd::ifstream in(\"scores.txt\");\nstd::string line;\nwhile (std::getline(in, line)) {\n    std::cout << line << std::endl;\n}\nin.close();\n\n// reading structured data (name then number)\nstd::ifstream in2(\"scores.txt\");\nstd::string name; int score;\nwhile (in2 >> name >> score) {\n    std::cout << name << \" scored \" << score << std::endl;\n}"
    },
    {
     "type": "text",
     "text": "Always check is_open() (or just test the stream itself, since it converts to false on failure) before reading or writing, in case the file doesn't exist or can't be created. Closing a stream with close() flushes any buffered data to disk and releases the file handle; if you skip it, the destructor closes it automatically when the stream object goes out of scope."
    },
    {
     "type": "tip",
     "text": "getline(in, line) reads a whole line including spaces, while 'in >> word' reads one whitespace-separated token at a time. Mixing the two without care is a common source of file-reading bugs — a leftover newline character trips up the next getline call."
    }
   ],
   "recap": "ofstream writes to files and ifstream reads from them, using the same << and >> operators (and getline) as cin/cout; always check the stream opened successfully and close it when done."
  },
  "quiz": [
   {
    "q": "Which stream type do you use to write to a file?",
    "options": [
     "sstream",
     "ofstream",
     "cin",
     "ifstream"
    ],
    "answer": 1,
    "explain": "ofstream (output file stream) is used to write data to a file."
   },
   {
    "q": "What does std::getline(in, line) read?",
    "options": [
     "An entire line, including spaces, until the newline",
     "The whole file at once",
     "A single character",
     "A whitespace-separated token"
    ],
    "answer": 0,
    "explain": "getline reads characters up to (and discarding) the next newline, capturing the full line including embedded spaces."
   },
   {
    "q": "Why should you check is_open() (or the stream's boolean state) before reading or writing a file?",
    "options": [
     "It makes the program compile faster",
     "It is not necessary, C++ handles it automatically",
     "Only ifstream needs this check, never ofstream",
     "The file might not exist or might fail to open, and using a failed stream leads to silent errors"
    ],
    "answer": 3,
    "explain": "A file can fail to open for many reasons (missing path, permissions); checking first avoids acting on an unusable stream."
   },
   {
    "q": "What happens if you never call close() explicitly on a file stream object?",
    "options": [
     "The file is corrupted permanently",
     "The program crashes immediately",
     "The destructor closes it automatically when the object goes out of scope",
     "The data is never written at all"
    ],
    "answer": 2,
    "explain": "File stream objects follow RAII: their destructor closes the file automatically if you forget to call close() yourself."
   }
  ]
 },
 "cpp-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A lambda expression is a small, unnamed function you can write inline, right where you need it — useful for short pieces of logic passed to another function, like a custom sorting rule or a condition to search for. Its basic shape is [capture](parameters) { body }."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "auto square = [](int x) { return x * x; };\nstd::cout << square(5);   // 25\n\nstd::vector<int> nums = {5, 2, 8, 1, 9};\nstd::sort(nums.begin(), nums.end(),\n    [](int a, int b) { return a > b; });   // descending order\n// nums is now {9, 8, 5, 2, 1}"
    },
    {
     "type": "text",
     "text": "The square brackets [] are the capture list: it decides which outside variables the lambda can use inside its body. [x] captures x by value (a copy), [&x] captures it by reference (changes affect the original), and [&] or [=] capture everything used, by reference or by value respectively."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int threshold = 5;\nauto it = std::find_if(nums.begin(), nums.end(),\n    [threshold](int n) { return n > threshold; });\nif (it != nums.end()) std::cout << \"found \" << *it;\n\nint total = 0;\nstd::for_each(nums.begin(), nums.end(),\n    [&total](int n) { total += n; });   // captures total by reference to accumulate"
    },
    {
     "type": "tip",
     "text": "Lambdas turned std::sort, std::find_if, std::count_if, and std::for_each from awkward tools (needing a separate named function) into one-liners. In an interview, being able to write a lambda comparator on the spot is a strong signal of comfort with modern C++."
    }
   ],
   "recap": "A lambda ([capture](params){ body }) is an inline anonymous function, commonly passed to STL algorithms like sort, find_if, and for_each; the capture list controls access to outside variables by value or reference."
  },
  "quiz": [
   {
    "q": "What does [&x] mean in a lambda's capture list?",
    "options": [
     "Ignore x entirely",
     "Capture x by reference, so changes affect the original variable",
     "Capture every variable in scope",
     "Capture x by value, as a copy"
    ],
    "answer": 1,
    "explain": "The & prefix in a capture list means the variable is captured by reference, linking it to the original outside variable."
   },
   {
    "q": "In 'std::sort(nums.begin(), nums.end(), [](int a, int b){ return a > b; })', what order results?",
    "options": [
     "No change to the vector",
     "Random order",
     "Ascending order",
     "Descending order"
    ],
    "answer": 3,
    "explain": "The comparator returns true when a should come before b for a > b, which sorts the vector in descending order."
   },
   {
    "q": "What does std::find_if do?",
    "options": [
     "Sorts a container",
     "Returns an iterator to the first element matching a given condition (lambda)",
     "Removes elements matching a condition",
     "Counts all elements"
    ],
    "answer": 1,
    "explain": "find_if scans the range and returns an iterator to the first element for which the predicate returns true, or end() if none match."
   },
   {
    "q": "Why must the lambda in the for_each example write [&total] instead of [total]?",
    "options": [
     "It makes no difference either way",
     "for_each requires reference captures by syntax rule",
     "[total] would capture a copy, so updates inside the lambda wouldn't affect the outer total variable",
     "Lambdas cannot capture integers by value"
    ],
    "answer": 2,
    "explain": "Capturing by value copies total into the lambda; only a reference capture lets the lambda's += actually accumulate into the outer variable."
   }
  ]
 },
 "cpp-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Manual new and delete are error-prone: forget a delete and you leak memory, delete twice and you crash, use a pointer after deleting it and you get undefined behaviour. Modern C++ solves this with smart pointers, from the <memory> header, which wrap a raw pointer and delete it automatically using RAII."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "#include <memory>\n\nstd::unique_ptr<int> p1 = std::make_unique<int>(42);\nstd::cout << *p1;      // 42, use it just like a raw pointer\n// no delete needed - p1 is destroyed automatically when it goes out of scope\n\n// unique_ptr cannot be copied, only moved:\nstd::unique_ptr<int> p2 = std::move(p1);   // ownership transfers to p2\n// p1 is now empty (nullptr)"
    },
    {
     "type": "text",
     "text": "std::unique_ptr expresses sole ownership: exactly one unique_ptr owns the object at a time, so it cannot be copied, only moved (transferring ownership). This is the default choice whenever an object has one clear owner, which is most of the time."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "std::shared_ptr<int> s1 = std::make_shared<int>(100);\nstd::shared_ptr<int> s2 = s1;    // both share ownership, copy is allowed\nstd::cout << s1.use_count();      // 2\n// object is deleted automatically only when the LAST shared_ptr to it is gone"
    },
    {
     "type": "text",
     "text": "std::shared_ptr allows multiple owners: it keeps an internal reference count, and the object is deleted only when that count drops to zero. Use it when ownership is genuinely shared between parts of a program; otherwise unique_ptr is simpler and has no reference-counting overhead."
    },
    {
     "type": "tip",
     "text": "Interview rule of thumb: default to unique_ptr for single ownership, reach for shared_ptr only when multiple parts of the code truly need to co-own an object, and never mix raw delete with a smart pointer that already owns that memory."
    }
   ],
   "recap": "unique_ptr and shared_ptr from <memory> wrap raw pointers and delete their object automatically via RAII; unique_ptr is sole, move-only ownership, while shared_ptr allows multiple owners via reference counting."
  },
  "quiz": [
   {
    "q": "What is the main advantage of a smart pointer over a raw pointer managed with new/delete?",
    "options": [
     "Smart pointers are always faster at arithmetic",
     "They automatically delete the owned object via RAII, avoiding leaks and double-deletes",
     "They remove the need for pointers entirely",
     "They can only point to integers"
    ],
    "answer": 1,
    "explain": "Smart pointers tie deletion to the smart pointer's own destructor, so the programmer no longer manually tracks new/delete pairs."
   },
   {
    "q": "Can a std::unique_ptr be copied?",
    "options": [
     "Only if it points to a primitive type",
     "No, it can only be moved, transferring ownership",
     "Yes, freely, like an int",
     "Yes, but only once"
    ],
    "answer": 1,
    "explain": "unique_ptr enforces sole ownership, so copying is disabled; ownership can only be transferred with std::move."
   },
   {
    "q": "When does the object managed by a std::shared_ptr actually get deleted?",
    "options": [
     "Only when delete is called manually",
     "Never, shared_ptr leaks by design",
     "When the reference count drops to zero, i.e. the last owner is gone",
     "As soon as the first shared_ptr to it goes out of scope"
    ],
    "answer": 2,
    "explain": "shared_ptr keeps a reference count; the managed object is destroyed only once that count reaches zero."
   },
   {
    "q": "When should you prefer unique_ptr over shared_ptr?",
    "options": [
     "Always use shared_ptr instead, it's strictly better",
     "When there is a single, clear owner of the object and no need for shared ownership",
     "unique_ptr and shared_ptr are interchangeable with no tradeoffs",
     "Only for arrays, never for single objects"
    ],
    "answer": 1,
    "explain": "unique_ptr is simpler and has no reference-counting overhead, making it the right default when ownership isn't actually shared."
   }
  ]
 },
 "cpp-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When you assign or return a large object like a std::vector, C++ traditionally has to copy every element, which is wasteful when the source object is a temporary that's about to be destroyed anyway. Move semantics let the compiler 'steal' the temporary's internal data instead of copying it."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "std::vector<int> makeBigVector() {\n    std::vector<int> v(1000000, 1);\n    return v;   // modern compilers move (or elide) this, not copy it\n}\n\nstd::vector<int> a = makeBigVector();   // no expensive copy happens\n\nstd::vector<int> b = {1, 2, 3};\nstd::vector<int> c = std::move(b);      // explicitly steal b's internal buffer\n// b is now left in a valid but unspecified (typically empty) state"
    },
    {
     "type": "text",
     "text": "An rvalue reference, written with &&, is a reference that can only bind to a temporary (an rvalue) — something with no persistent name, like the return value of a function or the result of std::move. A move constructor takes such a reference and transfers ownership of internal resources (like a pointer to heap data) instead of copying them."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "class Buffer {\n    int* data;\npublic:\n    Buffer(Buffer&& other) noexcept  // move constructor\n        : data(other.data) {\n        other.data = nullptr;   // steal, then null out the source\n    }\n};"
    },
    {
     "type": "text",
     "text": "std::move doesn't actually move anything by itself — it's just a cast that tells the compiler 'treat this as an rvalue', making it eligible to bind to a && parameter and trigger the move constructor or move assignment instead of the copy versions."
    },
    {
     "type": "tip",
     "text": "This is a favourite final-round interview topic: know that move semantics exist to avoid needless deep copies of resources like heap buffers, that std::move is just a cast (not an action), and that an object moved-from is left valid but unspecified — you can still assign to it, but shouldn't assume its old value."
    }
   ],
   "recap": "Move semantics let the compiler transfer ownership of a temporary's resources instead of copying them, using rvalue references (&&) and move constructors; std::move is a cast that marks an object as movable, not an action itself."
  },
  "quiz": [
   {
    "q": "What problem do move semantics solve?",
    "options": [
     "Missing destructors",
     "Unnecessary deep copies of resources when a source object is a temporary about to be destroyed",
     "Incorrect operator overloading",
     "Slow compilation times"
    ],
    "answer": 1,
    "explain": "Move semantics let resources be transferred rather than copied when the source is a temporary, avoiding wasted work."
   },
   {
    "q": "What does std::move(b) actually do?",
    "options": [
     "Casts b to an rvalue reference, making it eligible for the move constructor/assignment",
     "Copies b twice for safety",
     "Physically relocates b in memory",
     "Immediately deletes b"
    ],
    "answer": 0,
    "explain": "std::move performs no action itself; it is a cast that marks its argument as movable so move overloads are selected."
   },
   {
    "q": "What kind of reference can bind to a temporary value, enabling move semantics?",
    "options": [
     "A regular lvalue reference (T&)",
     "A const reference (const T&) only",
     "A pointer (T*)",
     "An rvalue reference (T&&)"
    ],
    "answer": 3,
    "explain": "Rvalue references, written with &&, are designed to bind specifically to temporaries and moved-from objects."
   },
   {
    "q": "After 'std::vector<int> c = std::move(b);', what is the state of b?",
    "options": [
     "b is left in a valid but unspecified state, typically empty",
     "b is destroyed and cannot be used again",
     "b still holds all its original elements, unchanged",
     "b now equals c exactly, as a copy"
    ],
    "answer": 0,
    "explain": "A moved-from object is left in a valid but unspecified state — usually empty for containers — and can still be assigned to safely."
   }
  ]
 }
}
