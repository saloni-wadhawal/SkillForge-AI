// Lesson text and quiz questions for "Python".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "python-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Python is a programming language: a way of writing instructions that a computer can follow. It is famous for reading almost like plain English, which makes it a great first language for beginners."
    },
    {
     "type": "text",
     "text": "You write Python in a plain text file that ends with .py, then you 'run' it. Running means the computer reads your instructions from top to bottom and does what they say, one line at a time."
    },
    {
     "type": "text",
     "text": "The classic first program just shows a message on the screen. The word print tells Python to display whatever is inside the parentheses."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "print(\"Hello, world!\")"
    },
    {
     "type": "tip",
     "text": "Think of Python as a very literal helper: it does exactly what you type, in the exact order you type it, and nothing more."
    }
   ],
   "recap": "Python is a beginner-friendly language; you write code in .py files and run it so the computer follows your instructions line by line."
  },
  "quiz": [
   {
    "q": "What does the print() function do?",
    "options": [
     "Displays a message on the screen",
     "Deletes text",
     "Prints paper on a printer",
     "Saves the file"
    ],
    "answer": 0,
    "explain": "print() outputs text to the screen so you can see it."
   },
   {
    "q": "What file extension do Python programs use?",
    "options": [
     ".py",
     ".exe",
     ".html",
     ".txt"
    ],
    "answer": 0,
    "explain": "Python source files end with .py."
   },
   {
    "q": "In what order does Python run your instructions?",
    "options": [
     "Top to bottom, line by line",
     "In a random order",
     "All at the same time",
     "Bottom to top"
    ],
    "answer": 0,
    "explain": "Python executes lines from top to bottom, one at a time."
   }
  ]
 },
 "python-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a name that stores a value so you can use it again later. You create one with an equals sign: the name goes on the left, the value on the right."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "age = 12\nname = \"Sam\"\nprint(name)\nprint(age)"
    },
    {
     "type": "text",
     "text": "Values have types. The main basic ones are: int (whole numbers like 12), float (numbers with a decimal like 3.5), str (text, always in quotes like \"Sam\"), and bool (True or False)."
    },
    {
     "type": "tip",
     "text": "Picture a variable as a labeled box: the label is the name, and whatever you put inside is the value. You can swap the contents any time."
    }
   ],
   "recap": "Variables store values using name = value; common types are int, float, str, and bool."
  },
  "quiz": [
   {
    "q": "Which line correctly creates a variable?",
    "options": [
     "12 = age",
     "age == 12",
     "age -> 12",
     "age = 12"
    ],
    "answer": 3,
    "explain": "You assign a value with name = value, so age = 12 is correct."
   },
   {
    "q": "What type is the value 3.5?",
    "options": [
     "float",
     "bool",
     "str",
     "int"
    ],
    "answer": 0,
    "explain": "Numbers with a decimal point are floats."
   },
   {
    "q": "What type is \"Sam\"?",
    "options": [
     "bool",
     "int",
     "str",
     "float"
    ],
    "answer": 2,
    "explain": "Text wrapped in quotes is a string (str)."
   },
   {
    "q": "Which value is a bool?",
    "options": [
     "1.0",
     "\"yes\"",
     "True",
     "42"
    ],
    "answer": 2,
    "explain": "bool values are exactly True or False."
   }
  ]
 },
 "python-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A string is text, written inside quotes. You can use single or double quotes, as long as they match: 'hi' and \"hi\" both work."
    },
    {
     "type": "text",
     "text": "You can join strings together with the + sign. This is called concatenation. You can also count the characters with len()."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "first = \"Ada\"\nlast = \"Lovelace\"\nfull = first + \" \" + last\nprint(full)\nprint(len(full))"
    },
    {
     "type": "text",
     "text": "An f-string lets you drop variables straight into text. Put the letter f before the quote, then wrap any variable in curly braces."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "name = \"Ada\"\nprint(f\"Hello, {name}!\")"
    },
    {
     "type": "tip",
     "text": "Note the space in \"Ada\" + \" \" + \"Lovelace\": Python only adds spaces if you include them yourself."
    }
   ],
   "recap": "Strings are text in quotes; join them with +, measure them with len(), and insert variables cleanly with f-strings."
  },
  "quiz": [
   {
    "q": "What does \"cat\" + \"dog\" produce?",
    "options": [
     "\"catdog\"",
     "\"cat dog\"",
     "an error",
     "\"cat+dog\""
    ],
    "answer": 0,
    "explain": "+ joins strings exactly, with no space added, giving \"catdog\"."
   },
   {
    "q": "What does len(\"Python\") return?",
    "options": [
     "1",
     "7",
     "5",
     "6"
    ],
    "answer": 3,
    "explain": "\"Python\" has 6 characters, so len returns 6."
   },
   {
    "q": "How do you insert a variable name into text with an f-string?",
    "options": [
     "\"Hi\" + name only",
     "f\"Hi {name}\"",
     "f\"Hi name\"",
     "\"Hi {name}\""
    ],
    "answer": 1,
    "explain": "An f-string needs the f prefix and the variable in curly braces: f\"Hi {name}\"."
   }
  ]
 },
 "python-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "print() sends information out to the screen. input() does the opposite: it pauses the program and lets the user type something in. Whatever the text inside input() says is shown as a prompt."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "name = input(\"What is your name? \")\nprint(\"Nice to meet you, \" + name)"
    },
    {
     "type": "text",
     "text": "Important: input() always gives you back a string, even if the user types numbers. To do math with it, convert it first using int() or float()."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "age = input(\"Your age? \")\nage = int(age)\nprint(f\"Next year you will be {age + 1}\")"
    },
    {
     "type": "tip",
     "text": "If you forget int() and try to add 1 to a typed number, Python complains, because \"12\" + 1 mixes text and a number."
    }
   ],
   "recap": "input() reads text from the user and always returns a string; use int() or float() to turn it into a number for math."
  },
  "quiz": [
   {
    "q": "What type does input() always return?",
    "options": [
     "int",
     "bool",
     "float",
     "str"
    ],
    "answer": 3,
    "explain": "input() always returns a string, even when the user types digits."
   },
   {
    "q": "How do you turn the string \"5\" into a number you can add?",
    "options": [
     "print(\"5\")",
     "int(\"5\")",
     "\"5\" + 0",
     "str(\"5\")"
    ],
    "answer": 1,
    "explain": "int(\"5\") converts the string to the whole number 5."
   },
   {
    "q": "What does the text inside input(\"...\") do?",
    "options": [
     "Runs a calculation",
     "Shows a prompt to the user",
     "Names the variable",
     "Ends the program"
    ],
    "answer": 1,
    "explain": "The text inside input() is displayed as a prompt asking the user what to type."
   }
  ]
 },
 "python-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators let Python do math and make comparisons. The math ones are + add, - subtract, * multiply, / divide. There is also % (modulo) which gives the remainder after division, and ** for powers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "print(7 + 3)   # 10\nprint(7 % 3)   # 1  (remainder)\nprint(2 ** 4)  # 16 (2 to the power 4)"
    },
    {
     "type": "text",
     "text": "Comparison operators ask a yes/no question and give back True or False: == is equal to, != is not equal, and <, >, <=, >= compare sizes. Notice == (two equals) checks equality, while a single = assigns a value."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "print(5 == 5)  # True\nprint(5 != 3)  # True\nprint(3 > 10)  # False"
    },
    {
     "type": "tip",
     "text": "A common mix-up: one = puts a value into a variable, two == asks 'are these equal?'. They are not the same."
    }
   ],
   "recap": "Math operators include + - * / % and **; comparison operators like == != < > return True or False."
  },
  "quiz": [
   {
    "q": "What does 10 % 3 give?",
    "options": [
     "3.33",
     "3",
     "0",
     "1"
    ],
    "answer": 3,
    "explain": "% is the remainder: 10 divided by 3 leaves a remainder of 1."
   },
   {
    "q": "Which operator checks if two values are equal?",
    "options": [
     ">=",
     "==",
     "!=",
     "="
    ],
    "answer": 1,
    "explain": "== compares for equality; a single = only assigns."
   },
   {
    "q": "What is the result of 2 ** 3?",
    "options": [
     "9",
     "8",
     "6",
     "5"
    ],
    "answer": 1,
    "explain": "** means power: 2 to the power 3 is 8."
   },
   {
    "q": "What does 4 != 4 return?",
    "options": [
     "0",
     "4",
     "False",
     "True"
    ],
    "answer": 2,
    "explain": "!= means 'not equal'; since 4 does equal 4, the answer is False."
   }
  ]
 },
 "python-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An if statement lets your program make decisions. Python checks a condition; if it is True, it runs the indented block underneath. If it is False, it skips that block."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "age = 18\nif age >= 18:\n    print(\"You can vote.\")\nelse:\n    print(\"Too young to vote.\")"
    },
    {
     "type": "text",
     "text": "Use elif (short for 'else if') to check more conditions in order. Python tries each one top to bottom and runs the first that is True. Indentation, usually four spaces, tells Python which lines belong inside each branch."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "score = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")"
    },
    {
     "type": "tip",
     "text": "The colon and indentation matter. If you forget to indent the lines under an if, Python will raise an error."
    }
   ],
   "recap": "if/elif/else let programs choose what to do based on conditions; indentation defines which lines belong to each branch."
  },
  "quiz": [
   {
    "q": "When does the code inside an if run?",
    "options": [
     "Only when the condition is True",
     "Never",
     "Always",
     "Only when the condition is False"
    ],
    "answer": 0,
    "explain": "The indented block runs only if the condition evaluates to True."
   },
   {
    "q": "What does elif mean?",
    "options": [
     "A type of variable",
     "Exit the program",
     "End the loop",
     "Else if: another condition to check"
    ],
    "answer": 3,
    "explain": "elif checks an additional condition when the ones before it were False."
   },
   {
    "q": "With score = 75, what does the grading example print?",
    "options": [
     "Pass",
     "Nothing",
     "A",
     "Fail"
    ],
    "answer": 0,
    "explain": "75 is not >= 90 but is >= 60, so the elif branch prints Pass."
   },
   {
    "q": "What tells Python which lines belong inside an if?",
    "options": [
     "Semicolons",
     "Curly braces",
     "Quotes",
     "Indentation"
    ],
    "answer": 3,
    "explain": "Python uses indentation to group the lines inside a branch."
   }
  ]
 },
 "python-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loop repeats instructions so you do not have to copy them. A for loop runs once for each item in a sequence. range(5) produces the numbers 0, 1, 2, 3, 4."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "for i in range(5):\n    print(i)"
    },
    {
     "type": "text",
     "text": "A while loop keeps repeating as long as its condition stays True. You must make sure the condition eventually becomes False, or the loop runs forever."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Liftoff!\")"
    },
    {
     "type": "tip",
     "text": "range(5) starts at 0 and stops before 5, giving five numbers. This 'start at 0, stop before the end' pattern is very common in Python."
    }
   ],
   "recap": "for loops repeat over a sequence like range(); while loops repeat as long as a condition is True, so the condition must eventually turn False."
  },
  "quiz": [
   {
    "q": "How many times does 'for i in range(5)' loop?",
    "options": [
     "5 times",
     "Forever",
     "4 times",
     "6 times"
    ],
    "answer": 0,
    "explain": "range(5) gives 0,1,2,3,4 which is five values, so the loop runs five times."
   },
   {
    "q": "What is the first number produced by range(5)?",
    "options": [
     "-1",
     "0",
     "5",
     "1"
    ],
    "answer": 1,
    "explain": "range starts at 0 by default."
   },
   {
    "q": "When does a while loop stop?",
    "options": [
     "Never",
     "When its condition becomes False",
     "After exactly 10 runs",
     "When it reaches range()"
    ],
    "answer": 1,
    "explain": "A while loop keeps going until its condition is no longer True."
   },
   {
    "q": "What causes an infinite loop?",
    "options": [
     "A condition that never becomes False",
     "Using range()",
     "Using a for loop",
     "Printing inside the loop"
    ],
    "answer": 0,
    "explain": "If the while condition never turns False, the loop repeats forever."
   }
  ]
 },
 "python-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A list stores many values in one variable, in order, inside square brackets. Each item has a position called an index, and counting starts at 0."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "fruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])   # apple\nprint(fruits[2])   # cherry\nprint(len(fruits)) # 3"
    },
    {
     "type": "text",
     "text": "Lists can change. append() adds an item to the end, and you can replace an item by assigning to its index. You can also loop over every item easily."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "fruits.append(\"date\")\nfruits[1] = \"blueberry\"\nfor fruit in fruits:\n    print(fruit)"
    },
    {
     "type": "tip",
     "text": "Because indexing starts at 0, the first item is fruits[0] and the last item of a 3-item list is fruits[2], not fruits[3]."
    }
   ],
   "recap": "Lists hold ordered values in [ ]; access items by index starting at 0, change them with append() and assignment, and loop over them with for."
  },
  "quiz": [
   {
    "q": "What is the index of the first item in a list?",
    "options": [
     "0",
     "-1",
     "It has no index",
     "1"
    ],
    "answer": 0,
    "explain": "List indexing starts at 0, so the first item is at index 0."
   },
   {
    "q": "For fruits = [\"apple\", \"banana\", \"cherry\"], what is fruits[2]?",
    "options": [
     "banana",
     "apple",
     "cherry",
     "an error"
    ],
    "answer": 2,
    "explain": "Index 2 is the third item, which is cherry."
   },
   {
    "q": "What does append() do to a list?",
    "options": [
     "Empties the list",
     "Sorts the list",
     "Adds an item to the end",
     "Removes the first item"
    ],
    "answer": 2,
    "explain": "append() adds a new item onto the end of the list."
   },
   {
    "q": "How many items are in [\"a\", \"b\", \"c\", \"d\"]?",
    "options": [
     "0",
     "5",
     "4",
     "3"
    ],
    "answer": 2,
    "explain": "There are four items, so len() would return 4."
   }
  ]
 },
 "python-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A function is a reusable block of code with a name. You define it once with def, then 'call' it by name whenever you need it. This saves you from repeating yourself."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def greet(name):\n    print(f\"Hello, {name}!\")\n\ngreet(\"Ada\")\ngreet(\"Sam\")"
    },
    {
     "type": "text",
     "text": "The values you pass in, like \"Ada\", are called arguments; inside the function they are named by the parameters, like name. A function can also give a value back using return, which you can store in a variable."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def add(a, b):\n    return a + b\n\ntotal = add(3, 4)\nprint(total)  # 7"
    },
    {
     "type": "tip",
     "text": "print shows a value on screen; return hands a value back to the code that called the function. They look similar but do very different jobs."
    }
   ],
   "recap": "Functions are named, reusable blocks defined with def; they take arguments through parameters and can hand back a result with return."
  },
  "quiz": [
   {
    "q": "Which keyword defines a function?",
    "options": [
     "func",
     "function",
     "define",
     "def"
    ],
    "answer": 3,
    "explain": "In Python you define a function with the def keyword."
   },
   {
    "q": "What does 'return' do in a function?",
    "options": [
     "Ends the whole program",
     "Defines a variable",
     "Prints to the screen",
     "Hands a value back to the caller"
    ],
    "answer": 3,
    "explain": "return sends a value back to wherever the function was called."
   },
   {
    "q": "In add(3, 4), what are 3 and 4 called?",
    "options": [
     "Arguments",
     "Comments",
     "Types",
     "Loops"
    ],
    "answer": 0,
    "explain": "The values passed into a function call are its arguments."
   },
   {
    "q": "Why use functions?",
    "options": [
     "To delete variables",
     "To slow the program down",
     "To reuse code without repeating it",
     "To add colors"
    ],
    "answer": 2,
    "explain": "Functions let you write logic once and reuse it many times."
   }
  ]
 },
 "python-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A dictionary stores pairs of key and value inside curly braces. Instead of a numbered position, you look things up by a meaningful key, like a real dictionary where a word maps to its definition."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "person = {\"name\": \"Ada\", \"age\": 36}\nprint(person[\"name\"])   # Ada\nperson[\"age\"] = 37       # update a value\nperson[\"city\"] = \"London\"  # add a new pair"
    },
    {
     "type": "text",
     "text": "Programs can also read and write files. Using 'with open(...)' safely opens a file and closes it for you automatically. Use \"w\" to write and \"r\" to read."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"Hello file!\")\n\nwith open(\"notes.txt\", \"r\") as f:\n    print(f.read())"
    },
    {
     "type": "text",
     "text": "Sometimes code fails at runtime, for example dividing by zero or opening a missing file. An error like this is called an exception. try/except lets you catch the problem and respond calmly instead of crashing."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "try:\n    number = int(input(\"Enter a number: \"))\n    print(10 / number)\nexcept ValueError:\n    print(\"That was not a number.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")"
    },
    {
     "type": "tip",
     "text": "Catch specific exceptions like ValueError or ZeroDivisionError rather than a blanket catch, so you only handle the errors you actually expect."
    }
   ],
   "recap": "Dictionaries map keys to values in { }; 'with open' reads and writes files safely; and try/except catches exceptions so your program handles errors instead of crashing."
  },
  "quiz": [
   {
    "q": "How do you get the value for key \"name\" in a dictionary d?",
    "options": [
     "d[\"name\"]",
     "d.name()",
     "d(0)",
     "d->name"
    ],
    "answer": 0,
    "explain": "You access a dictionary value by its key in square brackets: d[\"name\"]."
   },
   {
    "q": "What mode opens a file for writing?",
    "options": [
     "\"x\"",
     "\"r\"",
     "\"w\"",
     "\"read\""
    ],
    "answer": 2,
    "explain": "\"w\" opens a file for writing (\"r\" is for reading)."
   },
   {
    "q": "What is the main benefit of using 'with open(...)'?",
    "options": [
     "It encrypts the file",
     "It prints the file",
     "It runs faster only",
     "It closes the file automatically"
    ],
    "answer": 3,
    "explain": "The with block automatically closes the file when you are done, even if an error occurs."
   },
   {
    "q": "What does try/except let you do?",
    "options": [
     "Catch errors and respond instead of crashing",
     "Define a function",
     "Create a dictionary",
     "Loop forever"
    ],
    "answer": 0,
    "explain": "try/except catches exceptions so the program can handle failures gracefully."
   }
  ]
 },
 "python-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A tuple is like a list but it cannot be changed after you make it. You write it with round brackets. Because it is fixed, Python can use it in places a list is not allowed, like as a dictionary key."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "point = (3, 4)\nprint(point[0])   # 3\nx, y = point       # unpacking\nprint(y)           # 4"
    },
    {
     "type": "text",
     "text": "A set stores values with no order and no duplicates. It is written with curly braces, like a dictionary, but holds single values instead of pairs. Sets are fast for checking whether something is inside them."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "colors = {\"red\", \"green\", \"blue\", \"red\"}\nprint(colors)          # duplicate red is dropped\nprint(\"green\" in colors)  # True\n\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)   # intersection: {2, 3}\nprint(a | b)   # union: {1, 2, 3, 4}"
    },
    {
     "type": "tip",
     "text": "Try point[0] = 9 on a tuple and Python raises a TypeError. That is the whole point of a tuple: once made, it stays put."
    }
   ],
   "recap": "Tuples (a, b) are fixed-size and unchangeable; sets {a, b} hold unique unordered values and support fast membership checks plus union/intersection."
  },
  "quiz": [
   {
    "q": "What happens if you try to change a value inside a tuple?",
    "options": [
     "The tuple becomes a list",
     "Nothing happens",
     "Python raises a TypeError",
     "It changes normally"
    ],
    "answer": 2,
    "explain": "Tuples are immutable, so assigning to an index raises a TypeError."
   },
   {
    "q": "What does a set automatically remove?",
    "options": [
     "Duplicate values",
     "String values",
     "The first element",
     "Negative numbers"
    ],
    "answer": 0,
    "explain": "A set only ever keeps one copy of each value; duplicates are dropped."
   },
   {
    "q": "For a = {1, 2, 3} and b = {2, 3, 4}, what is a & b?",
    "options": [
     "{1, 2, 3, 4}",
     "{1}",
     "{4}",
     "{2, 3}"
    ],
    "answer": 3,
    "explain": "& gives the intersection: values present in both sets, which are 2 and 3."
   },
   {
    "q": "Which is written with round brackets and cannot be modified?",
    "options": [
     "Tuple",
     "Dictionary",
     "List",
     "Set"
    ],
    "answer": 0,
    "explain": "A tuple uses ( ) and is immutable once created."
   }
  ]
 },
 "python-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A list comprehension builds a new list in one line by applying an expression to every item of another sequence. It replaces a for loop that just appends to a list."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "numbers = [1, 2, 3, 4, 5]\nsquares = [n * n for n in numbers]\nprint(squares)   # [1, 4, 9, 16, 25]\n\n# the loop version does the same job\nsquares2 = []\nfor n in numbers:\n    squares2.append(n * n)"
    },
    {
     "type": "text",
     "text": "You can also add a condition at the end to keep only some items. This is the same as an if check inside a normal loop."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "evens = [n for n in numbers if n % 2 == 0]\nprint(evens)   # [2, 4]\n\nwords = [\"cat\", \"elephant\", \"dog\"]\nlong_words = [w.upper() for w in words if len(w) > 3]\nprint(long_words)   # ['ELEPHANT']"
    },
    {
     "type": "tip",
     "text": "A comprehension is not just shorter, it is usually faster than a manual loop with append, because Python optimizes the pattern internally."
    }
   ],
   "recap": "A list comprehension [expr for item in sequence if condition] builds a filtered, transformed list in a single readable line."
  },
  "quiz": [
   {
    "q": "What does [n * 2 for n in [1, 2, 3]] produce?",
    "options": [
     "[1, 2, 3]",
     "6",
     "[1, 4, 9]",
     "[2, 4, 6]"
    ],
    "answer": 3,
    "explain": "Each item n is doubled, giving [2, 4, 6]."
   },
   {
    "q": "What does the 'if' at the end of a comprehension do?",
    "options": [
     "Sorts the list",
     "Ends the program",
     "Reverses the list",
     "Filters which items are included"
    ],
    "answer": 3,
    "explain": "The trailing if condition keeps only the items that satisfy it."
   },
   {
    "q": "Which loop pattern does a list comprehension usually replace?",
    "options": [
     "A function definition",
     "A for loop that appends to a new list",
     "A try/except block",
     "A while loop that never ends"
    ],
    "answer": 1,
    "explain": "Comprehensions are a compact way to write a for loop whose job is to build a new list."
   },
   {
    "q": "What does [w.upper() for w in ['cat','dog'] if len(w) > 2] return?",
    "options": [
     "['cat', 'dog']",
     "['CAT']",
     "[]",
     "['CAT', 'DOG']"
    ],
    "answer": 3,
    "explain": "Both words have length 3, which is greater than 2, so both are uppercased and kept."
   }
  ]
 },
 "python-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An f-string lets you drop variables straight inside a string by putting an f before the quotes and wrapping the variable in curly braces. It is the cleanest way to build text with values in it."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "name = \"Meera\"\nscore = 92.456\nprint(f\"{name} scored {score:.1f}%\")   # Meera scored 92.5%"
    },
    {
     "type": "text",
     "text": "Strings come with many built-in methods for cleaning and splitting text. split() breaks a string into a list of pieces, join() glues a list back into one string, and strip() removes extra spaces from the ends."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "line = \"  apple, banana, cherry  \"\ncleaned = line.strip()\nfruits = cleaned.split(\", \")\nprint(fruits)               # ['apple', 'banana', 'cherry']\nprint(\"-\".join(fruits))     # apple-banana-cherry\nprint(\"Apple\".lower())      # apple\nprint(\"hi\" * 3)             # hihihi"
    },
    {
     "type": "tip",
     "text": "The :.1f inside an f-string means \"show as a decimal number with 1 digit after the point\" — a common exam question is reading what a format spec like :.2f prints."
    }
   ],
   "recap": "f-strings embed values in text with f\"{...}\"; split/join convert between strings and lists; strip removes surrounding whitespace."
  },
  "quiz": [
   {
    "q": "What does f\"{3.14159:.2f}\" print?",
    "options": [
     "3.1",
     "3.14",
     "3.14159",
     "3"
    ],
    "answer": 1,
    "explain": ":.2f rounds and shows exactly 2 digits after the decimal point, giving 3.14."
   },
   {
    "q": "Which method turns \"a,b,c\" into ['a', 'b', 'c']?",
    "options": [
     "strip(',')",
     "join(',')",
     "replace(',')",
     "split(',')"
    ],
    "answer": 3,
    "explain": "split(',') breaks the string at every comma into a list of pieces."
   },
   {
    "q": "What does \"-\".join([\"a\", \"b\", \"c\"]) return?",
    "options": [
     "a-b-c",
     "abc",
     "['a','b','c']",
     "a,b,c"
    ],
    "answer": 0,
    "explain": "join glues the list items together using the string before it as the separator, giving 'a-b-c'."
   },
   {
    "q": "What does \"  hi  \".strip() return?",
    "options": [
     "\"  hi\"",
     "\"hi\"",
     "\"hi  \"",
     "\"  hi  \""
    ],
    "answer": 1,
    "explain": "strip() removes whitespace from both the start and end, leaving just 'hi'."
   }
  ]
 },
 "python-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A module is just a Python file full of functions and variables you can reuse. Python ships with many built-in modules, and you bring one in with the import keyword."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\nprint(math.sqrt(16))   # 4.0\nprint(math.pi)         # 3.141592653589793\n\nfrom random import randint\nprint(randint(1, 6))   # a random number from 1 to 6"
    },
    {
     "type": "text",
     "text": "A package is a folder of related modules bundled together. Beyond the standard library, thousands of packages are published on PyPI, the Python Package Index, and you install them with pip, Python's package manager, from the terminal."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# run in a terminal, not inside a script\n# pip install requests\n\ntry:\n    import requests\n    response = requests.get(\"https://example.com\")\n    print(response.status_code)   # 200 means success\nexcept Exception:\n    print(\"200 (requests needs internet + the package installed)\")"
    },
    {
     "type": "tip",
     "text": "Use a virtual environment (python -m venv env) for each project so the packages one project needs never clash with another project's versions."
    }
   ],
   "recap": "import brings in built-in or installed modules; pip install fetches third-party packages from PyPI; virtual environments keep each project's dependencies separate."
  },
  "quiz": [
   {
    "q": "Which keyword brings a module's code into your script?",
    "options": [
     "include",
     "import",
     "require",
     "using"
    ],
    "answer": 1,
    "explain": "Python uses the import keyword to bring in modules."
   },
   {
    "q": "What command installs a third-party package?",
    "options": [
     "get requests",
     "pip install requests",
     "python install requests",
     "import install requests"
    ],
    "answer": 1,
    "explain": "pip is Python's package manager and pip install <name> fetches it from PyPI."
   },
   {
    "q": "Why use a virtual environment?",
    "options": [
     "To keep one project's packages separate from another's",
     "To hide your code from others",
     "To make code run faster",
     "It is required to use print()"
    ],
    "answer": 0,
    "explain": "A virtual environment isolates each project's dependencies so versions do not conflict."
   },
   {
    "q": "What does math.sqrt(16) return?",
    "options": [
     "4",
     "8.0",
     "16",
     "4.0"
    ],
    "answer": 3,
    "explain": "sqrt always returns a float, so the answer is 4.0, not the integer 4."
   }
  ]
 },
 "python-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A class is a blueprint for creating objects that bundle data and behavior together. You define one with the class keyword, and the special __init__ method runs automatically whenever a new object is created."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        print(f\"{self.name} says woof!\")\n\nrex = Dog(\"Rex\", 3)\nrex.bark()          # Rex says woof!\nprint(rex.age)      # 3"
    },
    {
     "type": "text",
     "text": "self refers to the specific object the method was called on. Every method inside a class takes self as its first parameter so it can read and change that object's own data."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def increment(self):\n        self.count += 1\n\nc = Counter()\nc.increment()\nc.increment()\nprint(c.count)   # 2"
    },
    {
     "type": "tip",
     "text": "Forgetting self as the first parameter of a method is one of the most common beginner errors — Python will complain about a missing argument when you call it."
    }
   ],
   "recap": "A class is a blueprint; __init__ sets up a new object's data; self lets each method access that particular object's own attributes."
  },
  "quiz": [
   {
    "q": "Which method runs automatically when a new object is created?",
    "options": [
     "__main__",
     "__init__",
     "__start__",
     "__new__"
    ],
    "answer": 1,
    "explain": "__init__ is the constructor, called automatically to set up a new object."
   },
   {
    "q": "What does self refer to inside a method?",
    "options": [
     "The class itself, not any object",
     "The specific object the method was called on",
     "The parent class",
     "A global variable"
    ],
    "answer": 1,
    "explain": "self is the particular instance (object) the method is currently running for."
   },
   {
    "q": "Given class Dog with self.name, what does rex = Dog(\"Rex\", 3); rex.name print?",
    "options": [
     "Rex",
     "3",
     "Dog",
     "self"
    ],
    "answer": 0,
    "explain": "__init__ stored \"Rex\" in self.name, so rex.name reads back \"Rex\"."
   },
   {
    "q": "What is a class best described as?",
    "options": [
     "A single stored value",
     "A type of loop",
     "A built-in Python module",
     "A blueprint for creating objects with data and behavior"
    ],
    "answer": 3,
    "explain": "A class defines the structure and behavior that its objects will share."
   }
  ]
 },
 "python-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance lets one class reuse another class's code. The new class, called a subclass, is written with the parent class in brackets, and it automatically gets all the parent's attributes and methods."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print(f\"{self.name} makes a sound.\")\n\nclass Cat(Animal):\n    def speak(self):\n        print(f\"{self.name} says meow.\")\n\ngeneric = Animal(\"Some animal\")\ngeneric.speak()      # Some animal makes a sound.\n\nfelix = Cat(\"Felix\")\nfelix.speak()        # Felix says meow."
    },
    {
     "type": "text",
     "text": "When Cat rewrites speak() with its own version, that is called overriding. Polymorphism means different classes can respond to the same method call in their own way, so the same code that calls .speak() works for any animal."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "animals = [Animal(\"Generic\"), Cat(\"Felix\")]\nfor a in animals:\n    a.speak()   # each object uses its own version of speak"
    },
    {
     "type": "tip",
     "text": "Use super().__init__(...) inside a subclass's __init__ to call the parent's setup code instead of retyping it, so you extend behavior rather than duplicating it."
    }
   ],
   "recap": "Inheritance lets a subclass reuse a parent class's code; overriding replaces a parent's method; polymorphism lets the same method call behave differently depending on the object's actual class."
  },
  "quiz": [
   {
    "q": "What is it called when a subclass writes its own version of a parent's method?",
    "options": [
     "Overriding",
     "Encapsulating",
     "Importing",
     "Inheriting"
    ],
    "answer": 0,
    "explain": "Replacing a parent method with a new version in the subclass is called overriding."
   },
   {
    "q": "class Cat(Animal): means what?",
    "options": [
     "Cat and Animal are unrelated",
     "Animal inherits from Cat",
     "Cat is a variable inside Animal",
     "Cat inherits from Animal"
    ],
    "answer": 3,
    "explain": "Writing the parent class in brackets makes Cat a subclass that inherits from Animal."
   },
   {
    "q": "What does polymorphism allow?",
    "options": [
     "Variables to change their data type at random",
     "Only one class can ever have a method named speak",
     "The same method call to behave differently depending on the object's class",
     "A class to have no methods at all"
    ],
    "answer": 2,
    "explain": "Polymorphism means different objects respond to the same method call in their own way."
   },
   {
    "q": "What does super().__init__(...) do inside a subclass?",
    "options": [
     "Overrides speak()",
     "Calls the parent class's constructor",
     "Creates a new subclass",
     "Deletes the parent class"
    ],
    "answer": 1,
    "explain": "super().__init__(...) runs the parent's constructor so you can reuse its setup logic."
   }
  ]
 },
 "python-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A lambda is a small, unnamed function written in one line, useful when you need a quick throwaway function instead of a full def block."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "square = lambda x: x * x\nprint(square(5))   # 25\n\nnumbers = [1, 2, 3, 4]\ndoubled = list(map(lambda n: n * 2, numbers))\nprint(doubled)      # [2, 4, 6, 8]\n\nevens = list(filter(lambda n: n % 2 == 0, numbers))\nprint(evens)         # [2, 4]"
    },
    {
     "type": "text",
     "text": "map() applies a function to every item of a sequence, and filter() keeps only the items where the function returns True. *args lets a function accept any number of extra positional arguments, and **kwargs does the same for extra named arguments."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3, 4))   # 10\n\ndef describe(**kwargs):\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\ndescribe(name=\"Ravi\", age=20)"
    },
    {
     "type": "tip",
     "text": "*args collects extra positional arguments into a tuple; **kwargs collects extra named arguments into a dictionary. The names args and kwargs are convention, only the * and ** matter."
    }
   ],
   "recap": "lambda writes a tiny one-line function; map and filter apply or select using a function across a sequence; *args and **kwargs let a function accept any number of positional or named arguments."
  },
  "quiz": [
   {
    "q": "What does list(map(lambda n: n * 2, [1, 2, 3])) return?",
    "options": [
     "6",
     "[1, 2, 3]",
     "[2, 4, 6]",
     "[1, 4, 9]"
    ],
    "answer": 2,
    "explain": "map applies the lambda to every element, doubling each: [2, 4, 6]."
   },
   {
    "q": "What does filter() do?",
    "options": [
     "Doubles every item in a list",
     "Sorts a list",
     "Keeps only items where the function returns True",
     "Deletes a list"
    ],
    "answer": 2,
    "explain": "filter keeps only the elements for which the given function returns True."
   },
   {
    "q": "In def total(*args), what type is args inside the function?",
    "options": [
     "A dictionary",
     "A tuple",
     "A string",
     "A set"
    ],
    "answer": 1,
    "explain": "*args collects any extra positional arguments into a tuple."
   },
   {
    "q": "What does **kwargs collect?",
    "options": [
     "Only integer arguments",
     "Extra named (keyword) arguments as a dictionary",
     "Extra positional arguments as a list",
     "Nothing, it is unused syntax"
    ],
    "answer": 1,
    "explain": "**kwargs gathers any extra keyword arguments into a dictionary of name-value pairs."
   }
  ]
 },
 "python-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An iterator is any object you can step through one value at a time with next(). A for loop actually works by asking a sequence for its iterator and repeatedly calling next() on it until it runs out."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "numbers = [10, 20, 30]\nit = iter(numbers)\nprint(next(it))   # 10\nprint(next(it))   # 20\nprint(next(it))   # 30\n# next(it) again would raise StopIteration"
    },
    {
     "type": "text",
     "text": "A generator is an easy way to write your own iterator. Instead of return, it uses yield, which pauses the function and remembers exactly where it left off. This means it produces values one at a time instead of building a whole list in memory."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor number in countdown(3):\n    print(number)   # 3, then 2, then 1"
    },
    {
     "type": "tip",
     "text": "Use a generator instead of a list when you are dealing with huge or endless data, since it only ever keeps one value in memory at a time rather than the whole sequence."
    }
   ],
   "recap": "An iterator produces values one at a time via next(); a generator function uses yield to create an iterator automatically, saving memory compared to building a full list."
  },
  "quiz": [
   {
    "q": "What keyword turns a normal function into a generator?",
    "options": [
     "yield",
     "iter",
     "next",
     "return"
    ],
    "answer": 0,
    "explain": "yield pauses the function and produces a value, turning it into a generator."
   },
   {
    "q": "What happens when next() is called on an iterator with no values left?",
    "options": [
     "It restarts from the beginning",
     "It returns 0",
     "It returns None",
     "It raises StopIteration"
    ],
    "answer": 3,
    "explain": "An exhausted iterator raises StopIteration, which a for loop catches automatically."
   },
   {
    "q": "What is the main advantage of a generator over building a full list?",
    "options": [
     "It uses less memory by producing values one at a time",
     "It can only be used once ever, which is a benefit",
     "It sorts the data automatically",
     "It runs the code twice"
    ],
    "answer": 0,
    "explain": "A generator keeps only the current value in memory instead of the entire sequence."
   },
   {
    "q": "In countdown(3), what does the loop print?",
    "options": [
     "1, 2, 3",
     "3, 2, 1",
     "3",
     "0, 1, 2"
    ],
    "answer": 1,
    "explain": "The while loop yields n, then decreases it, starting at 3 and counting down to 1."
   }
  ]
 },
 "python-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "In Python, functions are values, so you can pass one function into another. A decorator is a function that takes another function, wraps extra behavior around it, and gives back the wrapped version — without changing the original function's code."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def shout(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\ndef greet():\n    return \"hello\"\n\nloud_greet = shout(greet)\nprint(loud_greet())   # HELLO"
    },
    {
     "type": "text",
     "text": "The @ symbol above a function definition is shorthand for exactly that wrapping. @shout above def greet(): means \"replace greet with shout(greet)\" automatically."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "@shout\ndef greet():\n    return \"hello\"\n\nprint(greet())   # HELLO, thanks to the decorator"
    },
    {
     "type": "tip",
     "text": "A very common real decorator is @staticmethod or a custom @timer that measures how long a function takes — the pattern always \"wraps\" behavior around the original function."
    }
   ],
   "recap": "A decorator is a function that wraps another function to add behavior; @decorator_name above a function is shorthand for function = decorator_name(function)."
  },
  "quiz": [
   {
    "q": "What does @shout above def greet(): actually do?",
    "options": [
     "Runs greet immediately and stops",
     "Replaces greet with shout(greet)",
     "Renames greet to shout",
     "Deletes greet"
    ],
    "answer": 1,
    "explain": "The @ syntax is shorthand for reassigning greet to the result of shout(greet)."
   },
   {
    "q": "What must a decorator function return to be useful?",
    "options": [
     "Always the number 0",
     "Nothing, it must return None",
     "The original function's name as a string",
     "A wrapped version of the function it was given"
    ],
    "answer": 3,
    "explain": "A decorator returns a new (usually wrapping) function that replaces the original."
   },
   {
    "q": "Why is it possible to write decorators in Python?",
    "options": [
     "Because functions can be passed around like any other value",
     "Because Python has no functions, only classes",
     "Because @ is a special print operator",
     "Because loops can return functions"
    ],
    "answer": 0,
    "explain": "Python treats functions as first-class values, so they can be passed into and returned from other functions."
   },
   {
    "q": "Using the shout decorator, what does greet() print if greet originally returns \"hi\"?",
    "options": [
     "greet",
     "Hi",
     "hi",
     "HI"
    ],
    "answer": 3,
    "explain": "shout's wrapper calls the original function then applies .upper(), turning \"hi\" into \"HI\"."
   }
  ]
 },
 "python-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A regular expression, or regex, is a pattern used to search text for a shape rather than an exact match, like \"any three digits\" instead of one specific number. Python's re module runs these patterns."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import re\n\ntext = \"Call me at 98765-43210 or 91234-56789.\"\nmatches = re.findall(r\"\\d{5}-\\d{5}\", text)\nprint(matches)   # ['98765-43210', '91234-56789']\n\nif re.search(r\"^Call\", text):\n    print(\"Starts with Call\")"
    },
    {
     "type": "text",
     "text": "JSON is a text format for exchanging structured data, built from the same shapes as Python dictionaries and lists. It is how most web APIs send and receive data. Python's json module converts between JSON text and Python objects."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import json\n\ndata = {\"name\": \"Ada\", \"skills\": [\"Python\", \"C++\"]}\ntext = json.dumps(data)     # Python object -> JSON string\nprint(text)                  # {\"name\": \"Ada\", \"skills\": [\"Python\", \"C++\"]}\n\nback = json.loads(text)      # JSON string -> Python object\nprint(back[\"skills\"][0])     # Python"
    },
    {
     "type": "tip",
     "text": "In interviews, remember: \\d means any digit, \\w means any letter/digit/underscore, and {5} means exactly 5 repeats — most regex questions just combine these building blocks."
    }
   ],
   "recap": "re.findall/re.search match text patterns using regex building blocks like \\d and {n}; json.dumps turns Python data into JSON text and json.loads turns JSON text back into Python data — the backbone of talking to web APIs."
  },
  "quiz": [
   {
    "q": "What does \\d mean in a regular expression?",
    "options": [
     "A dot",
     "Any letter",
     "Any digit",
     "The end of a line"
    ],
    "answer": 2,
    "explain": "\\d matches any single digit from 0 to 9."
   },
   {
    "q": "Which function converts a Python dictionary into a JSON string?",
    "options": [
     "json.parse",
     "json.dumps",
     "json.loads",
     "json.read"
    ],
    "answer": 1,
    "explain": "json.dumps serializes a Python object into a JSON-formatted string."
   },
   {
    "q": "What does json.loads(text) do?",
    "options": [
     "Converts a JSON string into a Python object",
     "Converts a Python object into a JSON string",
     "Deletes the JSON file",
     "Sends text over the network"
    ],
    "answer": 0,
    "explain": "json.loads parses a JSON string and returns the equivalent Python object (dict, list, etc)."
   },
   {
    "q": "What would re.findall(r\"\\d{5}-\\d{5}\", text) match in \"98765-43210\"?",
    "options": [
     "Only \"98765\"",
     "Only \"-\"",
     "\"98765-43210\" as a whole",
     "Nothing, the pattern is invalid"
    ],
    "answer": 2,
    "explain": "The pattern requires exactly 5 digits, a dash, then 5 more digits, matching the whole string."
   }
  ]
 }
}
