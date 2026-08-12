// Lesson text and quiz questions for "C".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "c-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "C is one of the oldest and most important programming languages, created in 1972. Operating systems like Windows and Linux, plus tons of games and devices, are built with it. Learning C teaches you how a computer really works underneath."
    },
    {
     "type": "text",
     "text": "A computer's processor only understands machine code: raw 1s and 0s. C code is written in words humans can read, so we need a translator to turn it into machine code the computer can run."
    },
    {
     "type": "text",
     "text": "That translator is called a compiler. You write your program in a text file, the compiler reads it and produces a runnable program. This step is called compiling."
    },
    {
     "type": "tip",
     "text": "Think of a compiler like a chef: you hand it a recipe (your C code) and it cooks the finished dish (a program the computer can run)."
    },
    {
     "type": "code",
     "lang": "bash",
     "code": "# Compile a file named hello.c into a program\ngcc hello.c -o hello\n\n# Now run the program you built\n./hello"
    }
   ],
   "recap": "C is a classic language that a compiler translates into machine code the computer can run."
  },
  "quiz": [
   {
    "q": "What does a compiler do?",
    "options": [
     "Deletes old files",
     "Translates C code into machine code",
     "Runs code line by line forever",
     "Connects to the internet"
    ],
    "answer": 1,
    "explain": "A compiler turns human-readable C into machine code the processor can execute."
   },
   {
    "q": "Why can't the processor run C code directly?",
    "options": [
     "The processor only understands machine code (1s and 0s)",
     "C only works on phones",
     "C needs the internet",
     "C is too short"
    ],
    "answer": 0,
    "explain": "Processors execute machine code, so C must be compiled into that form first."
   },
   {
    "q": "In the command 'gcc hello.c -o hello', what is 'hello'?",
    "options": [
     "An error",
     "The name of the program that gets built",
     "A comment",
     "A website"
    ],
    "answer": 1,
    "explain": "The -o option names the output program, here called 'hello'."
   }
  ]
 },
 "c-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every C program starts running at a function called main. When you run the program, the computer looks for main and begins there, like the front door of a house."
    },
    {
     "type": "text",
     "text": "To print text to the screen, C uses printf. You put the words you want to show inside double quotes. The #include line at the top gives your program access to printf."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello, world!\\n\");\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "The \\n at the end means 'new line' — it moves the cursor down, like pressing Enter. The 'return 0;' tells the system the program finished successfully."
    },
    {
     "type": "tip",
     "text": "Every statement in C ends with a semicolon ;. Forgetting it is the most common beginner mistake — it's like forgetting the period at the end of a sentence."
    }
   ],
   "recap": "main is where a C program starts, and printf prints text; statements end with a semicolon."
  },
  "quiz": [
   {
    "q": "Where does a C program start running?",
    "options": [
     "At the last line",
     "At #include",
     "At printf",
     "At the function called main"
    ],
    "answer": 3,
    "explain": "Execution always begins in the main function."
   },
   {
    "q": "What does \\n do inside printf?",
    "options": [
     "Starts a new line",
     "Ends the program",
     "Makes text bold",
     "Prints the letter n"
    ],
    "answer": 0,
    "explain": "\\n is the newline character, which moves output to the next line."
   },
   {
    "q": "What must every C statement end with?",
    "options": [
     "A period .",
     "A space",
     "A comma ,",
     "A semicolon ;"
    ],
    "answer": 3,
    "explain": "C statements are terminated by a semicolon."
   },
   {
    "q": "Why is #include <stdio.h> needed here?",
    "options": [
     "To create the main function",
     "To give access to printf",
     "To speed up the program",
     "To add color"
    ],
    "answer": 1,
    "explain": "stdio.h provides the printf function used for output."
   }
  ]
 },
 "c-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a named box in memory that holds a value. In C you must say what type of value the box will hold before you use it. This is called declaring a variable."
    },
    {
     "type": "text",
     "text": "Common types: int holds whole numbers (like 5 or -20), float and double hold numbers with decimals (like 3.14), and char holds a single character (like 'A')."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int age = 10;\n    double price = 2.50;\n    char grade = 'A';\n\n    printf(\"Age: %d\\n\", age);\n    printf(\"Price: %.2f\\n\", price);\n    printf(\"Grade: %c\\n\", grade);\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "To print a variable, printf uses a placeholder: %d for an int, %f for a float or double, and %c for a char. The value after the comma fills the placeholder."
    },
    {
     "type": "tip",
     "text": "Choosing a type is like choosing the right container: you wouldn't store soup in an envelope. Whole number? Use int. Decimal? Use double."
    }
   ],
   "recap": "Variables are typed boxes for values; int holds whole numbers, double holds decimals, char holds one character."
  },
  "quiz": [
   {
    "q": "Which type would you use to store the number 7?",
    "options": [
     "char",
     "text",
     "double",
     "int"
    ],
    "answer": 3,
    "explain": "int is for whole numbers like 7."
   },
   {
    "q": "What does 'char grade = 'A';' store?",
    "options": [
     "A whole number",
     "A decimal number",
     "A whole word",
     "A single character"
    ],
    "answer": 3,
    "explain": "char holds exactly one character, here the letter A."
   },
   {
    "q": "Which placeholder prints an int in printf?",
    "options": [
     "%c",
     "%d",
     "%s",
     "%f"
    ],
    "answer": 1,
    "explain": "%d is the placeholder for integer values."
   },
   {
    "q": "Which type is best for a price like 2.50?",
    "options": [
     "grade",
     "int",
     "char",
     "double"
    ],
    "answer": 3,
    "explain": "double stores numbers with decimal parts."
   }
  ]
 },
 "c-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators let you do math and comparisons. The arithmetic operators are + (add), - (subtract), * (multiply), / (divide), and % (remainder, called modulo)."
    },
    {
     "type": "text",
     "text": "Careful with division: when both numbers are ints, C throws away the decimal. So 7 / 2 gives 3, not 3.5. The % operator gives what's left over: 7 % 2 is 1."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 7, b = 2;\n    printf(\"%d\\n\", a + b);   // 9\n    printf(\"%d\\n\", a / b);   // 3 (integer division)\n    printf(\"%d\\n\", a % b);   // 1 (remainder)\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Comparison operators ask true/false questions: == (equal), != (not equal), < (less than), > (greater than), <= and >=. In C, true is 1 and false is 0."
    },
    {
     "type": "tip",
     "text": "Watch out: = means 'assign a value', but == means 'is it equal?'. Mixing them up is a classic bug."
    }
   ],
   "recap": "Operators do math (+ - * / %) and comparisons (== != < >); int division drops the decimal and % gives the remainder."
  },
  "quiz": [
   {
    "q": "In C, what is 7 / 2 when both are ints?",
    "options": [
     "3.5",
     "4",
     "3",
     "1"
    ],
    "answer": 2,
    "explain": "Integer division drops the decimal part, giving 3."
   },
   {
    "q": "What does 7 % 2 give?",
    "options": [
     "1",
     "0",
     "3.5",
     "3"
    ],
    "answer": 0,
    "explain": "% is the remainder: 7 divided by 2 leaves 1."
   },
   {
    "q": "Which operator checks if two values are equal?",
    "options": [
     "!=",
     "==",
     "=>",
     "="
    ],
    "answer": 1,
    "explain": "== compares for equality, while = assigns a value."
   },
   {
    "q": "What value represents 'true' in C?",
    "options": [
     "0",
     "1",
     "-1",
     "the word yes"
    ],
    "answer": 1,
    "explain": "In C, true is represented by 1 and false by 0."
   }
  ]
 },
 "c-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Programs often need to make decisions. The if statement runs a block of code only when a condition is true. If the condition is false, the code inside is skipped."
    },
    {
     "type": "text",
     "text": "You can add else to say 'otherwise do this'. And else if lets you check several conditions in order, stopping at the first one that is true."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int score = 75;\n\n    if (score >= 90) {\n        printf(\"Grade A\\n\");\n    } else if (score >= 60) {\n        printf(\"Grade B\\n\");\n    } else {\n        printf(\"Try again\\n\");\n    }\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "The condition goes in parentheses ( ), and the code to run goes in curly braces { }. In the example, score is 75, so it prints 'Grade B'."
    },
    {
     "type": "tip",
     "text": "Think of if/else like a road fork: the condition decides which path your program walks down, and it can only take one."
    }
   ],
   "recap": "if runs code when a condition is true; else and else if handle the other cases, and only one branch runs."
  },
  "quiz": [
   {
    "q": "When does the code inside an if block run?",
    "options": [
     "Only when the condition is true",
     "Always",
     "Never",
     "Only when the condition is false"
    ],
    "answer": 0,
    "explain": "The if block runs only if its condition evaluates to true."
   },
   {
    "q": "In the lesson example with score = 75, what is printed?",
    "options": [
     "Grade A",
     "Grade B",
     "Try again",
     "Nothing"
    ],
    "answer": 1,
    "explain": "75 is not >= 90 but is >= 60, so 'Grade B' prints."
   },
   {
    "q": "What does 'else' mean?",
    "options": [
     "Do this otherwise, when the if was false",
     "Run only if a prior condition was true",
     "Repeat the block",
     "Stop the program"
    ],
    "answer": 0,
    "explain": "else provides the fallback code that runs when the if condition is false."
   },
   {
    "q": "Where does the condition of an if go?",
    "options": [
     "In square brackets [ ]",
     "In parentheses ( )",
     "In quotes \" \"",
     "After a semicolon"
    ],
    "answer": 1,
    "explain": "The condition is written inside parentheses right after if."
   }
  ]
 },
 "c-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loop repeats a block of code so you don't have to copy it many times. If you wanted to print something 100 times, a loop does it in a few lines."
    },
    {
     "type": "text",
     "text": "A while loop repeats as long as its condition stays true. Make sure something inside eventually makes the condition false, or the loop runs forever."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    // for loop: start at 1, run while i <= 5, add 1 each time\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");   // prints: 1 2 3 4 5\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "A for loop packs three parts into one line: the start value, the condition to keep going, and the change each round (i++ means add 1 to i). It's perfect for counting."
    },
    {
     "type": "tip",
     "text": "A loop is like a running track: you go around and around, and the condition is the coach deciding when you've done enough laps to stop."
    }
   ],
   "recap": "Loops repeat code; while runs as long as a condition holds, and for is ideal for counting a set number of times."
  },
  "quiz": [
   {
    "q": "What is the main purpose of a loop?",
    "options": [
     "To repeat a block of code",
     "To end the program",
     "To store data",
     "To make decisions"
    ],
    "answer": 0,
    "explain": "Loops repeat code so you avoid writing it many times."
   },
   {
    "q": "What does the for loop in the lesson print?",
    "options": [
     "5 4 3 2 1",
     "1 2 3 4",
     "1 2 3 4 5",
     "0 1 2 3 4"
    ],
    "answer": 2,
    "explain": "It counts i from 1 while i <= 5, printing 1 2 3 4 5."
   },
   {
    "q": "What does i++ do?",
    "options": [
     "Adds 1 to i",
     "Subtracts 1 from i",
     "Resets i to 0",
     "Doubles i"
    ],
    "answer": 0,
    "explain": "i++ increases i by 1 each time through the loop."
   },
   {
    "q": "What happens if a while loop's condition never becomes false?",
    "options": [
     "It skips entirely",
     "It loops forever",
     "It runs once",
     "It gives an error and stops"
    ],
    "answer": 1,
    "explain": "A condition that stays true creates an infinite loop that never ends."
   }
  ]
 },
 "c-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A function is a named piece of code that does one job. You write it once and can call it whenever you need it, which keeps your program tidy and avoids repeating yourself."
    },
    {
     "type": "text",
     "text": "A function can take inputs, called parameters, and can give back a result using return. The word before the name (like int) is the type of value it returns."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\n// A function that adds two numbers and returns the result\nint add(int x, int y) {\n    return x + y;\n}\n\nint main(void) {\n    int sum = add(3, 4);\n    printf(\"%d\\n\", sum);   // 7\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Here add takes two ints, x and y, and returns their sum. In main we call add(3, 4), and the returned value 7 is stored in sum. If a function returns nothing, its type is void."
    },
    {
     "type": "tip",
     "text": "A function is like a kitchen appliance: you put ingredients in (parameters), it does its job, and hands back a result. You don't need to know the wiring inside to use it."
    }
   ],
   "recap": "Functions are reusable named blocks that take parameters and can return a value, keeping code organized."
  },
  "quiz": [
   {
    "q": "Why use functions?",
    "options": [
     "To end a loop",
     "To make code run slower",
     "To store numbers",
     "To reuse code and stay organized"
    ],
    "answer": 3,
    "explain": "Functions let you write code once and reuse it, keeping programs clean."
   },
   {
    "q": "In 'int add(int x, int y)', what are x and y?",
    "options": [
     "Parameters (inputs)",
     "Return values",
     "Comments",
     "Loop counters"
    ],
    "answer": 0,
    "explain": "x and y are parameters, the inputs the function receives."
   },
   {
    "q": "What does 'return x + y;' do?",
    "options": [
     "Prints the sum",
     "Deletes x and y",
     "Sends the result back to the caller",
     "Starts a loop"
    ],
    "answer": 2,
    "explain": "return gives the computed value back to wherever the function was called."
   },
   {
    "q": "What return type means a function returns nothing?",
    "options": [
     "int",
     "void",
     "double",
     "char"
    ],
    "answer": 1,
    "explain": "void indicates a function that returns no value."
   }
  ]
 },
 "c-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An array stores many values of the same type in a row under one name. You reach each item by its index, a position number that starts at 0, not 1."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int nums[3] = {10, 20, 30};\n    printf(\"%d\\n\", nums[0]);   // 10 (first item)\n    printf(\"%d\\n\", nums[2]);   // 30 (third item)\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Every variable lives at an address in memory. A pointer is a variable that stores such an address. You get an address with & and read the value at an address with * (called dereferencing)."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int age = 25;\n    int *p = &age;      // p holds the address of age\n    printf(\"%d\\n\", *p); // 25 (value stored at that address)\n    *p = 30;            // change age through the pointer\n    printf(\"%d\\n\", age); // 30\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "A pointer is like a house address written on paper: the paper isn't the house, but it tells you exactly where to find it. Follow the address (with *) to reach what's inside."
    },
    {
     "type": "text",
     "text": "Pointers are what make C powerful and fast: they let functions share and change the same data directly, and they connect closely to how arrays work in memory."
    }
   ],
   "recap": "Arrays hold many values indexed from 0, and pointers store memory addresses you read or change with & and *."
  },
  "quiz": [
   {
    "q": "In an array, what is the index of the first item?",
    "options": [
     "1",
     "-1",
     "0",
     "The array's length"
    ],
    "answer": 2,
    "explain": "Array indexing starts at 0, so the first item is at index 0."
   },
   {
    "q": "Given 'int nums[3] = {10, 20, 30};', what is nums[2]?",
    "options": [
     "An error",
     "20",
     "10",
     "30"
    ],
    "answer": 3,
    "explain": "Index 2 is the third element, which is 30."
   },
   {
    "q": "What does a pointer store?",
    "options": [
     "A loop count",
     "A decimal number",
     "A memory address",
     "A character"
    ],
    "answer": 2,
    "explain": "A pointer holds the address of a location in memory."
   },
   {
    "q": "What does the * operator do with a pointer like *p?",
    "options": [
     "Deletes p",
     "Gets p's address",
     "Multiplies p",
     "Reads the value stored at that address"
    ],
    "answer": 3,
    "explain": "Dereferencing with * accesses the value at the address the pointer holds."
   }
  ]
 },
 "c-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "C has no built-in string type. A string is really just a char array that ends with a special hidden character, '\\0' (the null terminator), which marks where the text stops."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    char name[6] = \"Amit\";   // stored as A m i t \\0\n    printf(\"%s\\n\", name);     // Amit\n    printf(\"%c\\n\", name[0]);  // A (first character)\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "The array name[6] has room for 4 letters plus the null terminator, plus one spare slot. %s tells printf to keep printing characters until it hits '\\0'. Because strings are char arrays, you access one letter at a time with [ ]."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char a[20] = \"Hello\";\n    char b[] = \"World\";\n\n    printf(\"%zu\\n\", strlen(a));     // 5 (length, not counting \\0)\n    strcat(a, b);                   // joins b onto the end of a\n    printf(\"%s\\n\", a);              // HelloWorld\n    printf(\"%d\\n\", strcmp(a, b));   // non-zero: a and b differ\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "strcpy, strcat and sprintf do not check array size for you. If the destination array is too small, you overflow it and corrupt memory. Always make the destination big enough."
    },
    {
     "type": "text",
     "text": "The <string.h> header gives you strlen (length), strcpy (copy), strcat (join), strcmp (compare) and more. strcmp returns 0 only when the two strings are exactly equal."
    }
   ],
   "recap": "A C string is a char array ending in '\\0'; the <string.h> functions strlen, strcpy, strcat and strcmp work on that convention."
  },
  "quiz": [
   {
    "q": "What marks the end of a C string?",
    "options": [
     "A space character",
     "The null character '\\0'",
     "A semicolon",
     "The last index number"
    ],
    "answer": 1,
    "explain": "C strings are char arrays that end with the hidden '\\0' character; functions like printf's %s stop there."
   },
   {
    "q": "What does strcmp(a, b) return when a and b are exactly equal?",
    "options": [
     "1",
     "0",
     "The string length",
     "-1"
    ],
    "answer": 1,
    "explain": "strcmp returns 0 for equal strings, and non-zero if they differ."
   },
   {
    "q": "Why is strcpy risky to use carelessly?",
    "options": [
     "It deletes the source string",
     "It only works on numbers",
     "It does not check if the destination array is big enough",
     "It runs in a loop forever"
    ],
    "answer": 2,
    "explain": "strcpy copies characters until it hits '\\0' with no bounds checking, so a too-small destination overflows."
   },
   {
    "q": "What does strlen(\"Hello\") return?",
    "options": [
     "5",
     "It is an error",
     "4",
     "6"
    ],
    "answer": 0,
    "explain": "strlen counts the visible characters only, not the terminating '\\0', so \"Hello\" has length 5."
   }
  ]
 },
 "c-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A 2D array is an array of arrays, useful for grids like a table of marks or a tic-tac-toe board. You declare it with two sizes, rows and columns, and access an item with two indexes."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int grid[2][3] = { {1, 2, 3}, {4, 5, 6} };\n    printf(\"%d\\n\", grid[0][2]);   // 3 (row 0, column 2)\n    printf(\"%d\\n\", grid[1][0]);   // 4 (row 1, column 0)\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "An array's name is really the address of its first element. So nums and &nums[0] mean the same thing, and nums[i] is just a shorthand for *(nums + i)."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int nums[3] = {10, 20, 30};\n    int *p = nums;            // p points to nums[0]\n\n    printf(\"%d\\n\", *p);       // 10\n    p = p + 1;                // move to the NEXT int, not next byte\n    printf(\"%d\\n\", *p);       // 20\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Pointer arithmetic moves by whole elements, not bytes. p + 1 on an int pointer jumps 4 bytes ahead (on most systems), because the compiler knows the size of an int."
    },
    {
     "type": "text",
     "text": "This is why arrays and pointers feel interchangeable in C: walking through an array with p++ inside a loop is exactly what indexing with [i] does underneath."
    }
   ],
   "recap": "2D arrays use two indexes for rows and columns; an array name decays to a pointer to its first element, and pointer arithmetic moves in whole-element steps."
  },
  "quiz": [
   {
    "q": "In 'int grid[2][3]', what does grid[1][0] refer to?",
    "options": [
     "The last element overall",
     "Row 1, column 0",
     "An error, indexes start at 1",
     "Row 0, column 1"
    ],
    "answer": 1,
    "explain": "The first index is the row and the second is the column, so grid[1][0] is row 1, column 0."
   },
   {
    "q": "If p is an int pointer pointing at nums[0], what does p + 1 point to?",
    "options": [
     "nums[0] again",
     "The byte right after nums[0]",
     "The address of p itself",
     "nums[1]"
    ],
    "answer": 3,
    "explain": "Pointer arithmetic advances by whole elements of the pointer's type, so p + 1 skips a full int to reach nums[1]."
   },
   {
    "q": "What does an array's name decay into when used in an expression?",
    "options": [
     "A pointer to its first element",
     "Its total byte size",
     "A string",
     "A copy of every element"
    ],
    "answer": 0,
    "explain": "An array name used in most expressions becomes a pointer to its first element, which is why nums and &nums[0] are equivalent."
   },
   {
    "q": "nums[i] is shorthand for which expression?",
    "options": [
     "*(nums + i)",
     "i(nums)",
     "&nums + i",
     "nums * i"
    ],
    "answer": 0,
    "explain": "Indexing is defined in terms of pointer arithmetic: nums[i] means *(nums + i)."
   }
  ]
 },
 "c-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A struct groups different types of data together under one name. Where an array holds many values of the same type, a struct can hold a name (a string), an age (an int) and a marks (a float) all in one bundle."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nstruct Student {\n    char name[20];\n    int age;\n    float marks;\n};\n\nint main(void) {\n    struct Student s1 = {\"Riya\", 20, 88.5};\n    printf(\"%s is %d, scored %.1f\\n\", s1.name, s1.age, s1.marks);\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "You access a member with the dot operator, like s1.age. If you instead have a pointer to a struct, you use the arrow operator -> to reach a member without dereferencing manually."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nstruct Student { char name[20]; int age; };\n\nint main(void) {\n    struct Student s1 = {\"Riya\", 20};\n    struct Student *p = &s1;\n\n    printf(\"%d\\n\", p->age);     // 20, same as (*p).age\n    p->age = 21;                 // change through the pointer\n    printf(\"%d\\n\", s1.age);      // 21\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "p->age is exactly the same as (*p).age. The arrow is just a shortcut so you don't have to wrap the dereference in brackets every time."
    },
    {
     "type": "text",
     "text": "Structs are the building block for organizing real records, like an employee, a book, or a point on a screen, and they are passed around functions just like any other variable."
    }
   ],
   "recap": "A struct bundles different types under one name; use the dot operator on a struct variable and the arrow operator on a pointer to a struct."
  },
  "quiz": [
   {
    "q": "What is the main advantage of a struct over an array?",
    "options": [
     "It automatically sorts its data",
     "It cannot be passed to functions",
     "It runs faster than an array",
     "It can hold different data types together"
    ],
    "answer": 3,
    "explain": "An array holds many values of one type; a struct groups related fields of different types into one unit."
   },
   {
    "q": "If s1 is a struct variable, how do you access its age member?",
    "options": [
     "s1.age",
     "s1[age]",
     "age(s1)",
     "s1->age"
    ],
    "answer": 0,
    "explain": "The dot operator accesses a member directly on a struct variable."
   },
   {
    "q": "If p is a pointer to a struct, what does p->age mean?",
    "options": [
     "The address of age",
     "A syntax error",
     "It multiplies p by age",
     "(*p).age, the age member through the pointer"
    ],
    "answer": 3,
    "explain": "The arrow operator is shorthand for dereferencing the pointer and then accessing the member."
   },
   {
    "q": "What does 'struct Student { char name[20]; int age; float marks; };' actually create?",
    "options": [
     "An array of 20 students",
     "A new type describing that bundle of fields",
     "Three separate variables",
     "A function"
    ],
    "answer": 1,
    "explain": "This defines a new struct type; you must then declare variables of that type to actually store data."
   }
  ]
 },
 "c-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A union looks like a struct but its members share the same memory space. Only one member holds a valid value at a time, so a union is as big as its largest member, not the sum of all of them."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main(void) {\n    union Data d;\n    d.i = 10;\n    printf(\"%d\\n\", d.i);   // 10\n\n    d.f = 3.5;              // now overwrites the same memory\n    printf(\"%.1f\\n\", d.f);  // 3.5, but d.i is now garbage\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "sizeof(union) equals the size of its biggest member, while sizeof(struct) is roughly the sum of all members. Unions save memory but only one field is safe to read at a time."
    },
    {
     "type": "text",
     "text": "An enum gives readable names to a set of integer constants, which makes code self-explanatory instead of using plain numbers scattered around."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nenum Day { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main(void) {\n    enum Day today = WED;\n    printf(\"%d\\n\", today);   // 2, because MON=0, TUE=1, WED=2 ...\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "By default an enum starts counting from 0 and each name is one more than the previous. You can also assign your own starting numbers, like enum Day { MON = 1, TUE, WED };."
    }
   ],
   "recap": "A union stores different types in the same shared memory (only one is valid at a time), while an enum names a set of integer constants for readable code."
  },
  "quiz": [
   {
    "q": "In a union, how much memory is allocated?",
    "options": [
     "The size of the first member declared, always",
     "One byte, always",
     "The size of the largest member only",
     "The sum of all members' sizes"
    ],
    "answer": 2,
    "explain": "A union's members overlap in the same memory, so its total size is just the size of its biggest member."
   },
   {
    "q": "After setting d.f in a union that previously held d.i, what happens to d.i?",
    "options": [
     "It becomes garbage because the memory was overwritten",
     "The program refuses to compile",
     "It keeps its old correct value",
     "It automatically converts to match d.f"
    ],
    "answer": 0,
    "explain": "Since union members share memory, writing to one member invalidates the others."
   },
   {
    "q": "In 'enum Day { MON, TUE, WED, THU };', what integer value does WED have?",
    "options": [
     "3",
     "2",
     "1",
     "0"
    ],
    "answer": 1,
    "explain": "Enum values start at 0 by default and increase by 1, so MON=0, TUE=1, WED=2."
   },
   {
    "q": "What is the main purpose of an enum?",
    "options": [
     "To save memory like a union",
     "To replace arrays",
     "To store multiple data types in the same slot",
     "To give readable names to a set of related integer constants"
    ],
    "answer": 3,
    "explain": "Enums make code more readable by naming constant integer values instead of using bare numbers."
   }
  ]
 },
 "c-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Arrays declared normally have a fixed size decided at compile time. Sometimes you don't know how much memory you need until the program is running, so C lets you ask for memory on the fly from a pool called the heap."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int n = 5;\n    int *arr = malloc(n * sizeof(int));   // room for 5 ints\n\n    if (arr == NULL) {\n        printf(\"Allocation failed\\n\");\n        return 1;\n    }\n\n    for (int i = 0; i < n; i++) arr[i] = i * i;\n    printf(\"%d\\n\", arr[3]);   // 9\n\n    free(arr);   // give the memory back\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "malloc(size) reserves size bytes and returns a pointer to them, or NULL if it fails. calloc(n, size) does the same but also zeroes the memory. realloc(ptr, newSize) resizes a block you already allocated."
    },
    {
     "type": "tip",
     "text": "Every malloc/calloc needs a matching free. Forgetting free causes a memory leak; using memory after freeing it (a dangling pointer) or freeing it twice both cause undefined behavior."
    },
    {
     "type": "text",
     "text": "Unlike local variables, which disappear automatically when a function returns, heap memory stays reserved until you explicitly free it, or until the program ends."
    }
   ],
   "recap": "malloc, calloc and realloc reserve memory on the heap at runtime, and every allocation must be matched with free to avoid leaks."
  },
  "quiz": [
   {
    "q": "What does malloc(n * sizeof(int)) return if the allocation fails?",
    "options": [
     "0",
     "-1",
     "It crashes immediately",
     "NULL"
    ],
    "answer": 3,
    "explain": "malloc returns NULL on failure, which is why code should always check the pointer before using it."
   },
   {
    "q": "What is the difference between malloc and calloc?",
    "options": [
     "calloc cannot be freed",
     "calloc zero-initializes the memory, malloc does not",
     "There is no difference",
     "malloc is for arrays, calloc is for structs"
    ],
    "answer": 1,
    "explain": "calloc clears the allocated memory to all zeros; malloc leaves it with whatever garbage was already there."
   },
   {
    "q": "What happens if you forget to call free() on allocated memory?",
    "options": [
     "The program crashes instantly",
     "C automatically frees it after the function returns",
     "A memory leak: that memory stays reserved and unusable until the program ends",
     "The compiler gives an error"
    ],
    "answer": 2,
    "explain": "Heap memory is not released automatically; unfreed memory leaks and is wasted for the program's lifetime."
   },
   {
    "q": "What is a 'dangling pointer'?",
    "options": [
     "A pointer to a function",
     "A pointer that was never initialized",
     "A pointer to a struct",
     "A pointer still pointing to memory that has already been freed"
    ],
    "answer": 3,
    "explain": "After memory is freed, any pointer still referring to it is dangling, and using it leads to undefined behavior."
   }
  ]
 },
 "c-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Scope is where in your program a variable can be seen and used. A variable declared inside a function is local, visible only inside that function; one declared outside all functions is global, visible everywhere in the file."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint counter = 0;   // global: shared by every function\n\nvoid increment(void) {\n    counter++;     // reads and changes the global variable\n}\n\nint main(void) {\n    increment();\n    increment();\n    printf(\"%d\\n\", counter);   // 2\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Storage classes control a variable's lifetime and visibility. auto is the default for local variables (they are created fresh and destroyed each call). static makes a local variable keep its value between calls instead of resetting."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nvoid callMe(void) {\n    static int calls = 0;   // initialized only once, ever\n    calls++;\n    printf(\"Called %d times\\n\", calls);\n}\n\nint main(void) {\n    callMe();   // Called 1 times\n    callMe();   // Called 2 times\n    callMe();   // Called 3 times\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "static inside a function means 'remember my value between calls'. static on a global variable means the opposite: 'keep this private to this file, hide it from other files'."
    },
    {
     "type": "text",
     "text": "extern lets one file use a global variable that is actually defined in another file, which is how large C projects share data across multiple .c files."
    }
   ],
   "recap": "Scope controls where a variable is visible (local vs global), while storage classes like auto, static, and extern control its lifetime and cross-file visibility."
  },
  "quiz": [
   {
    "q": "What happens to a normal local (auto) variable each time its function is called?",
    "options": [
     "It is freshly created and re-initialized",
     "It becomes global",
     "It causes a compile error",
     "It keeps the value from last time"
    ],
    "answer": 0,
    "explain": "auto (ordinary local) variables are created anew on each call and lose their value when the function returns."
   },
   {
    "q": "What does the static keyword do to a local variable?",
    "options": [
     "Makes it visible in every file",
     "Deletes it after use",
     "Makes it keep its value between function calls",
     "Turns it into a pointer"
    ],
    "answer": 2,
    "explain": "A static local variable is initialized only once and retains its value across calls to the function."
   },
   {
    "q": "What is a global variable's scope?",
    "options": [
     "Only inside the function it is declared in",
     "Visible throughout the file (and other files with extern)",
     "Only inside loops",
     "Only inside if statements"
    ],
    "answer": 1,
    "explain": "Variables declared outside all functions are global and can be accessed by any function in the file, or other files via extern."
   },
   {
    "q": "What does the extern keyword let you do?",
    "options": [
     "Free memory automatically",
     "Make a variable static",
     "Declare a new data type",
     "Use a global variable that is actually defined in another source file"
    ],
    "answer": 3,
    "explain": "extern declares that a variable exists elsewhere (another file), letting multiple files share one global variable."
   }
  ]
 },
 "c-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before your code is compiled, a step called the preprocessor runs first. It handles every line starting with #, doing text substitution and file-copying before the compiler even sees real C code."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#define PI 3.14159\n#define SQUARE(x) ((x) * (x))\n\nint main(void) {\n    printf(\"%.2f\\n\", PI);         // 3.14\n    printf(\"%d\\n\", SQUARE(5));    // 25\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "#include copies in the contents of a header file, like stdio.h, so you can use functions such as printf. #define creates a macro: a piece of text that gets swapped in wherever its name appears, before compiling."
    },
    {
     "type": "tip",
     "text": "Always wrap macro parameters (and the whole macro) in parentheses, like ((x) * (x)) not x * x. Without them, SQUARE(1 + 2) would expand to 1 + 2 * 1 + 2, which is wrong."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\n#define DEBUG 1\n\nint main(void) {\n#if DEBUG\n    printf(\"Debug mode is on\\n\");\n#endif\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "#if / #endif do conditional compilation: code inside is only compiled if the condition is true, which is handy for turning debug prints on or off, or for excluding platform-specific code."
    }
   ],
   "recap": "The preprocessor runs before compilation, handling #include, #define macros, and conditional blocks like #if / #endif."
  },
  "quiz": [
   {
    "q": "When does the preprocessor run?",
    "options": [
     "After the program is compiled",
     "At the same time as execution",
     "Only when there is an error",
     "Before compilation, as a text-substitution step"
    ],
    "answer": 3,
    "explain": "The preprocessor processes all # directives (like #include and #define) before the actual C compiler sees the code."
   },
   {
    "q": "Why should SQUARE(x) be defined as ((x) * (x)) rather than (x * x)?",
    "options": [
     "It runs faster that way",
     "Because macros require double parentheses by syntax",
     "To avoid wrong results when x is an expression like 1 + 2",
     "It has no real reason, both are identical"
    ],
    "answer": 2,
    "explain": "Without the extra parentheses, an expression passed in could be split apart by operator precedence, giving a wrong result."
   },
   {
    "q": "What does #include <stdio.h> do?",
    "options": [
     "Runs the program",
     "Defines a new function called stdio",
     "Declares a global variable",
     "Copies the contents of the stdio.h header file into your code"
    ],
    "answer": 3,
    "explain": "#include textually inserts the named header file's contents, giving you declarations like printf."
   },
   {
    "q": "What is #if / #endif used for?",
    "options": [
     "Conditionally compiling a block of code in or out",
     "Looping over an array",
     "Declaring a struct",
     "Ending the main function"
    ],
    "answer": 0,
    "explain": "#if and #endif mark a block that is only included in the compiled program if the condition evaluates true."
   }
  ]
 },
 "c-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a base case, a simple condition where it stops calling itself, or it would recurse forever."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint factorial(int n) {\n    if (n == 0) return 1;          // base case\n    return n * factorial(n - 1);   // recursive case\n}\n\nint main(void) {\n    printf(\"%d\\n\", factorial(5));   // 120\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "factorial(5) calls factorial(4), which calls factorial(3), and so on down to factorial(0), which returns 1 without calling itself again. Then each waiting call multiplies its way back up: 1, then 1*1, then 2*1, then 6*2, then finally 24*5 = 120."
    },
    {
     "type": "tip",
     "text": "Every recursive call uses a new slot on the call stack to remember its own n and where to return to. Too many calls without hitting the base case causes a stack overflow, C's version of running out of memory for calls."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 1) return n;          // base cases: fib(0)=0, fib(1)=1\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main(void) {\n    printf(\"%d\\n\", fib(6));   // 8\n    return 0;\n}"
    }
   ],
   "recap": "A recursive function calls itself to break a problem into smaller pieces, and must always have a base case to stop, since each call uses its own stack slot."
  },
  "quiz": [
   {
    "q": "What is a base case in recursion?",
    "options": [
     "A syntax error",
     "The slowest part of the recursion",
     "The simple condition where the function stops calling itself",
     "The first line of any function"
    ],
    "answer": 2,
    "explain": "The base case is the stopping condition; without it a recursive function would call itself forever."
   },
   {
    "q": "What happens if a recursive function never reaches its base case?",
    "options": [
     "The compiler blocks it before running",
     "It simply runs once and stops",
     "It returns 0 automatically",
     "It causes a stack overflow from unlimited calls"
    ],
    "answer": 3,
    "explain": "Each call uses stack memory; with no base case reached, calls pile up endlessly until the stack runs out."
   },
   {
    "q": "In factorial(5) = 5 * factorial(4), what value does factorial(0) return to make the whole chain work?",
    "options": [
     "0",
     "It is undefined",
     "1",
     "5"
    ],
    "answer": 2,
    "explain": "factorial(0) returning 1 is the base case that lets the multiplications unwind correctly back up to 120."
   },
   {
    "q": "What does each recursive call use to remember its own local variables and return address?",
    "options": [
     "A separate stack frame on the call stack",
     "A static variable",
     "A global array",
     "The heap"
    ],
    "answer": 0,
    "explain": "Every function call, recursive or not, gets its own stack frame holding its parameters, locals, and return address."
   }
  ]
 },
 "c-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far every value has vanished when the program ends. Files let a C program save data to disk and read it back later. The <stdio.h> header gives you FILE pointers to work with files."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"data.txt\", \"w\");   // open for writing\n    if (fp == NULL) {\n        printf(\"Could not open file\\n\");\n        return 1;\n    }\n\n    fprintf(fp, \"Score: %d\\n\", 95);\n    fclose(fp);   // always close what you open\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "fopen(name, mode) opens a file and returns a FILE pointer, or NULL if it fails. Common modes are \"r\" (read), \"w\" (write, erasing existing content), and \"a\" (append, adding to the end)."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    FILE *fp = fopen(\"data.txt\", \"r\");\n    char line[100];\n\n    if (fp == NULL) return 1;\n\n    while (fgets(line, sizeof(line), fp) != NULL) {\n        printf(\"%s\", line);   // print each line read\n    }\n\n    fclose(fp);\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Always check fopen's return value before using it, and always call fclose when you are done. An unclosed file may not save all its data, since output can be buffered in memory until it's flushed."
    }
   ],
   "recap": "FILE pointers opened with fopen let a program read (fgets/fscanf) or write (fprintf) data on disk, and must be closed with fclose."
  },
  "quiz": [
   {
    "q": "What does fopen return if the file cannot be opened?",
    "options": [
     "The program halts with no return",
     "0 always",
     "An empty string",
     "NULL"
    ],
    "answer": 3,
    "explain": "fopen returns NULL on failure, so code should check for that before using the FILE pointer."
   },
   {
    "q": "Which fopen mode opens a file for writing and erases its existing contents?",
    "options": [
     "\"r\"",
     "\"w\"",
     "\"x\"",
     "\"a\""
    ],
    "answer": 1,
    "explain": "\"w\" mode truncates (erases) an existing file and opens it fresh for writing; \"a\" would append instead."
   },
   {
    "q": "Why must you call fclose on an open file?",
    "options": [
     "It is optional and has no effect",
     "It deletes the file",
     "To ensure buffered data is actually written and the resource is released",
     "It renames the file"
    ],
    "answer": 2,
    "explain": "Output can be buffered; fclose flushes any pending data to disk and frees the file handle."
   },
   {
    "q": "What does fgets(line, sizeof(line), fp) do?",
    "options": [
     "Counts the lines in the file",
     "Deletes a line from the file",
     "Reads one line from the file into the line buffer",
     "Writes a line to the file"
    ],
    "answer": 2,
    "explain": "fgets reads characters from fp into line until a newline or the buffer limit, making it safe for reading text lines."
   }
  ]
 },
 "c-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Just as a pointer can store the address of a variable, a function pointer stores the address of a function. This lets you pass a function as data, so a program can decide at runtime which function to call."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\n\nint main(void) {\n    int (*op)(int, int) = add;   // op points to the add function\n    printf(\"%d\\n\", op(5, 3));    // 8\n\n    op = sub;                     // now point to sub instead\n    printf(\"%d\\n\", op(5, 3));    // 2\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Read a function pointer declaration from the inside out: 'int (*op)(int, int)' means op is a pointer to a function that takes two ints and returns an int. The parentheses around *op are essential."
    },
    {
     "type": "text",
     "text": "main can also receive input from outside the program itself, through command-line arguments, using the signature int main(int argc, char *argv[])."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    printf(\"Program name: %s\\n\", argv[0]);\n    printf(\"Argument count: %d\\n\", argc);\n    for (int i = 1; i < argc; i++) {\n        printf(\"arg %d: %s\\n\", i, argv[i]);\n    }\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "argc is the count of arguments (including the program name itself), and argv is an array of strings holding each one. If you run the program as './app hello 5', argc is 3 and argv[1] is \"hello\"."
    }
   ],
   "recap": "A function pointer stores a function's address so you can call it indirectly, and argc/argv let main read arguments passed from outside the program."
  },
  "quiz": [
   {
    "q": "What does 'int (*op)(int, int) = add;' do?",
    "options": [
     "Declares add as an int variable",
     "Makes op a pointer holding the address of the add function",
     "Causes a compile error",
     "Calls add immediately and stores the result"
    ],
    "answer": 1,
    "explain": "This declares op as a function pointer and assigns it the address of add, so op(5, 3) later calls add(5, 3)."
   },
   {
    "q": "In 'int main(int argc, char *argv[])', what does argv[0] hold?",
    "options": [
     "The name of the program itself",
     "The first user-supplied argument",
     "The total number of arguments",
     "Always NULL"
    ],
    "answer": 0,
    "explain": "By convention argv[0] is the program's own name; user-supplied arguments start at argv[1]."
   },
   {
    "q": "If you run './app one two' from the command line, what is argc?",
    "options": [
     "2",
     "3",
     "0",
     "1"
    ],
    "answer": 1,
    "explain": "argc counts the program name plus each argument: './app', 'one', and 'two' makes 3."
   },
   {
    "q": "Why would you use a function pointer instead of just calling a function directly?",
    "options": [
     "Because plain function calls are illegal in C",
     "To avoid using parameters",
     "It runs the function faster",
     "To decide at runtime which function to call, e.g. passing a comparison function"
    ],
    "answer": 3,
    "explain": "Function pointers let code choose or receive a function to call dynamically, which is how things like custom sort comparators work."
   }
  ]
 },
 "c-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Bitwise operators work directly on the individual 0s and 1s of a number's binary form, rather than treating it as a whole value. They are common in embedded programming, flags, and performance-critical code."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 5;    // binary 0101\n    int b = 3;    // binary 0011\n\n    printf(\"%d\\n\", a & b);   // 1  (AND: 0001)\n    printf(\"%d\\n\", a | b);   // 7  (OR:  0111)\n    printf(\"%d\\n\", a ^ b);   // 6  (XOR: 0110)\n    printf(\"%d\\n\", ~a);      // -6 (NOT: flips every bit)\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "& gives 1 only where both bits are 1. | gives 1 where either bit is 1. ^ (XOR) gives 1 where the bits differ. ~ flips every bit, which for signed integers changes both the value and its sign."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int x = 3;          // binary 0011\n    printf(\"%d\\n\", x << 2);   // 12, shifts bits left, same as x * 4\n    printf(\"%d\\n\", x >> 1);   // 1,  shifts bits right, same as x / 2\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Shifting left by n is the same as multiplying by 2^n, and shifting right by n is the same as dividing by 2^n (for positive numbers). This trick is used to write fast code that avoids actual multiplication or division."
    },
    {
     "type": "text",
     "text": "A common real use is flags: you can pack many true/false settings into a single int, turning bits on with |, off with & ~, and checking one with &."
    }
   ],
   "recap": "Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual bits directly, enabling fast math tricks and compact flag storage."
  },
  "quiz": [
   {
    "q": "What does a & b compute?",
    "options": [
     "Flips all the bits",
     "1 where the bits differ",
     "1 only where both bits are 1",
     "1 where either bit is 1"
    ],
    "answer": 2,
    "explain": "The bitwise AND (&) sets a result bit to 1 only when both corresponding input bits are 1."
   },
   {
    "q": "What is 3 << 2 equivalent to?",
    "options": [
     "3 % 2",
     "3 * 4",
     "3 / 4",
     "3 - 2"
    ],
    "answer": 1,
    "explain": "Shifting left by 2 multiplies by 2^2 = 4, so 3 << 2 equals 12, the same as 3 * 4."
   },
   {
    "q": "What does the ^ (XOR) operator produce for two bits?",
    "options": [
     "The flipped value of the first bit",
     "1 only if both bits are 1",
     "1 only if the bits are different",
     "Always 0"
    ],
    "answer": 2,
    "explain": "XOR gives 1 exactly when the two bits differ (one is 0 and the other is 1)."
   },
   {
    "q": "Why are bitwise operators useful for storing flags/settings?",
    "options": [
     "They automatically sort the flags",
     "They convert numbers to strings",
     "They only work on floating-point numbers",
     "They let many true/false values be packed into the bits of one int"
    ],
    "answer": 3,
    "explain": "Each bit of an int can represent one on/off flag, and & / | / ~ let you check, set, or clear individual bits efficiently."
   }
  ]
 },
 "c-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A C program's memory is commonly split into a few regions: the stack (local variables and function calls, automatically managed), the heap (memory you request with malloc, manually managed), and static/global storage (fixed for the program's whole run)."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdlib.h>\n\nint *makeArray(int n) {\n    int local[10];        // BUG: lives on the stack, destroyed when function returns\n    int *heapArr = malloc(n * sizeof(int));   // safe: lives on the heap\n\n    return heapArr;       // OK to return\n    // return local;      // would be a dangling pointer bug\n}"
    },
    {
     "type": "tip",
     "text": "Never return the address of a local variable. Once the function returns, its stack frame is gone, and the pointer becomes dangling: it looks valid but reads garbage or crashes unpredictably."
    },
    {
     "type": "text",
     "text": "Undefined behavior is code the C standard does not guarantee any specific result for, such as reading uninitialized memory, going past the end of an array, dividing by zero, or using a pointer after free(). It might work by luck on your machine and fail elsewhere."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n    int *p = malloc(sizeof(int));\n    *p = 42;\n    free(p);\n\n    // printf(\"%d\\n\", *p);   // use-after-free: undefined behavior\n    p = NULL;                // safe habit: avoid dangling references\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Common interview questions probe exactly these ideas: the difference between stack and heap, what a memory leak is, what a segmentation fault means (touching memory you don't own), and why C gives you speed and control at the cost of these responsibilities."
    }
   ],
   "recap": "C splits memory into stack, heap, and static storage; returning stack addresses, leaking heap memory, and touching freed or uninitialized memory are classic sources of undefined behavior that interviewers love to ask about."
  },
  "quiz": [
   {
    "q": "What is wrong with returning the address of a local (stack) array from a function?",
    "options": [
     "Local arrays cannot have their address taken",
     "The stack frame is destroyed when the function returns, leaving a dangling pointer",
     "Nothing, it is perfectly safe",
     "It causes a compile-time error"
    ],
    "answer": 1,
    "explain": "Once a function returns, its stack frame is gone, so any pointer to a local variable inside it becomes dangling and unsafe to use."
   },
   {
    "q": "Which of these is an example of undefined behavior in C?",
    "options": [
     "Using a for loop to print an array",
     "Declaring a global variable",
     "Calling a function with the right number of arguments",
     "Reading memory through a pointer after it has been freed"
    ],
    "answer": 3,
    "explain": "Use-after-free is a classic case of undefined behavior: the memory may look valid but its contents and effects are not guaranteed."
   },
   {
    "q": "What generally causes a segmentation fault?",
    "options": [
     "Using printf with no arguments",
     "Declaring too many variables",
     "The program accessing memory it does not have permission to use",
     "Running out of disk space"
    ],
    "answer": 2,
    "explain": "A segmentation fault happens when a program tries to read or write memory outside what the operating system has allocated to it."
   },
   {
    "q": "Which memory region is automatically managed (created and destroyed) as functions are called and return?",
    "options": [
     "The heap",
     "The stack",
     "Static/global storage",
     "The file system"
    ],
    "answer": 1,
    "explain": "The stack holds local variables and call information, and is automatically pushed and popped as functions are entered and exited, unlike the heap which you must manage yourself with malloc/free."
   }
  ]
 }
}
