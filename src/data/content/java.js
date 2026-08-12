// Lesson text and quiz questions for "Java".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "java-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Java is a programming language: a set of words and rules you use to tell a computer what to do. It was created in 1995 and is still one of the most popular languages in the world. It powers Android phone apps, big business websites, and even parts of some games."
    },
    {
     "type": "text",
     "text": "Java's famous idea is 'write once, run anywhere.' You write your program one time, and it can run on Windows, Mac, Linux, and phones without being rewritten. That is a big reason so many companies chose it."
    },
    {
     "type": "text",
     "text": "This works because of the JVM, the Java Virtual Machine. When you write Java code, it is turned into 'bytecode,' a middle language. The JVM on each machine reads that bytecode and runs it. Think of bytecode as a universal recipe, and the JVM as a local chef in every country who knows how to cook it."
    },
    {
     "type": "tip",
     "text": "Analogy: your Java code is like sheet music. Bytecode is the printed notes, and the JVM is any musician who can read those notes and play the song on their own instrument."
    }
   ],
   "recap": "Java is a popular 'write once, run anywhere' language, and the JVM is the engine that lets the same program run on many kinds of computers."
  },
  "quiz": [
   {
    "q": "What does the JVM (Java Virtual Machine) do?",
    "options": [
     "Runs Java bytecode on a specific machine",
     "Stores your files forever",
     "Designs the computer's screen",
     "Connects you to the internet"
    ],
    "answer": 0,
    "explain": "The JVM reads bytecode and runs it on whatever machine it is installed on."
   },
   {
    "q": "What is Java's famous slogan?",
    "options": [
     "Write once, run anywhere",
     "Code hard, sleep later",
     "Fast and furious",
     "One language to rule them all"
    ],
    "answer": 0,
    "explain": "'Write once, run anywhere' means the same Java program can run on many platforms."
   },
   {
    "q": "In the analogy, bytecode is like which of these?",
    "options": [
     "The concert hall",
     "A universal recipe or sheet music",
     "The musician playing",
     "The audience"
    ],
    "answer": 1,
    "explain": "Bytecode is the middle 'recipe' that the JVM (the chef/musician) knows how to carry out."
   }
  ]
 },
 "java-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every Java program starts running from a special place called the main method. When you press run, the JVM looks for main and begins there. It is the front door of your program."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
    },
    {
     "type": "text",
     "text": "System.out.println is the command that prints a line of text to the screen. Whatever you put in the quotes gets shown, and 'println' adds a new line afterward so the next print starts below it. There is also System.out.print, which does NOT add a new line."
    },
    {
     "type": "text",
     "text": "Notice the details: the code lives inside a class named Hello, curly braces { } wrap blocks of code, and every statement ends with a semicolon ;. Java is strict about these, like a form that must be filled in exactly."
    },
    {
     "type": "tip",
     "text": "Tip: the file name must match the public class name. A class named Hello must be saved as Hello.java."
    }
   ],
   "recap": "Programs start at the main method, and System.out.println prints text to the screen. Java needs curly braces around blocks and a semicolon after each statement."
  },
  "quiz": [
   {
    "q": "Where does a Java program begin running?",
    "options": [
     "Wherever you click",
     "At the last line",
     "At the main method",
     "At the class name"
    ],
    "answer": 2,
    "explain": "The JVM starts execution at the main method."
   },
   {
    "q": "What does System.out.println(\"Hi\"); do?",
    "options": [
     "Deletes the word Hi",
     "Saves Hi to a file",
     "Prints Hi and moves to a new line",
     "Asks the user for input"
    ],
    "answer": 2,
    "explain": "println prints the text and then adds a new line."
   },
   {
    "q": "What must end almost every Java statement?",
    "options": [
     "A comma ,",
     "A semicolon ;",
     "A period .",
     "A question mark ?"
    ],
    "answer": 1,
    "explain": "Java statements end with a semicolon."
   },
   {
    "q": "If your public class is named Hello, what should the file be called?",
    "options": [
     "hello.txt",
     "main.java",
     "Java.class",
     "Hello.java"
    ],
    "answer": 3,
    "explain": "The file name must match the public class name exactly, so Hello.java."
   }
  ]
 },
 "java-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A variable is a named box that holds a value you want to remember and reuse. In Java you must tell it what TYPE of value the box holds. This is called being 'statically typed,' and it helps catch mistakes early."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "int age = 12;\ndouble price = 4.99;\nboolean isSunny = true;\nchar grade = 'A';\nString name = \"Maya\";\n\nSystem.out.println(name + \" is \" + age);"
    },
    {
     "type": "text",
     "text": "Common types: int holds whole numbers, double holds decimal numbers, boolean holds true or false, char holds a single character in single quotes, and String holds text in double quotes. String starts with a capital S because it is a slightly special type."
    },
    {
     "type": "text",
     "text": "The + sign joins Strings together, called concatenation. So name + \" is \" + age builds one bigger piece of text. When a number is joined to a String, Java turns it into text automatically."
    },
    {
     "type": "tip",
     "text": "Tip: pick clear names like totalScore instead of x. Future-you will thank present-you."
    }
   ],
   "recap": "Variables are named, typed boxes for values. Key types are int, double, boolean, char, and String, and the + sign joins Strings together."
  },
  "quiz": [
   {
    "q": "Which type would you use to store the value true or false?",
    "options": [
     "int",
     "double",
     "String",
     "boolean"
    ],
    "answer": 3,
    "explain": "boolean holds only true or false."
   },
   {
    "q": "Which line correctly stores a whole number?",
    "options": [
     "int score = 10;",
     "int score = \"10\";",
     "int score = 10.5;",
     "int score = 'ten';"
    ],
    "answer": 0,
    "explain": "int holds whole numbers, and 10 is a valid whole number."
   },
   {
    "q": "What does the + do in \"Hi \" + name?",
    "options": [
     "Causes an error",
     "Joins the text together",
     "Removes spaces",
     "Adds numbers only"
    ],
    "answer": 1,
    "explain": "With Strings, + concatenates (joins) the text."
   },
   {
    "q": "Which type is best for a price like 4.99?",
    "options": [
     "boolean",
     "int",
     "char",
     "double"
    ],
    "answer": 3,
    "explain": "double stores decimal numbers such as 4.99."
   }
  ]
 },
 "java-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operators are symbols that do work on values. The math operators are + (add), - (subtract), * (multiply), / (divide), and % (remainder, also called modulo). They work just like they did in school math class."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "int a = 7;\nint b = 2;\nSystem.out.println(a + b);   // 9\nSystem.out.println(a / b);   // 3  (whole-number division)\nSystem.out.println(a % b);   // 1  (remainder)\nSystem.out.println(a > b);   // true"
    },
    {
     "type": "text",
     "text": "Careful: when you divide two ints, Java throws away the decimal part. So 7 / 2 is 3, not 3.5. The % operator gives the leftover, so 7 % 2 is 1. Modulo is handy for checking if a number is even: number % 2 == 0 means even."
    },
    {
     "type": "text",
     "text": "Comparison operators ask true/false questions: > greater than, < less than, >= at least, <= at most, == equal to, and != not equal to. Notice == has two equals signs; a single = means 'assign a value,' which is different."
    },
    {
     "type": "tip",
     "text": "Tip: mixing them up is the classic beginner bug. Use = to store, and == to compare."
    }
   ],
   "recap": "Operators do math (+ - * / %) and comparisons (> < >= <= == !=). Int division drops the decimal, and % gives the remainder. Remember: = assigns, == compares."
  },
  "quiz": [
   {
    "q": "In Java, what is 7 / 2 when both are ints?",
    "options": [
     "1",
     "4",
     "3.5",
     "3"
    ],
    "answer": 3,
    "explain": "Int division drops the decimal, so 7 / 2 is 3."
   },
   {
    "q": "What does 10 % 3 give?",
    "options": [
     "1",
     "3",
     "30",
     "0"
    ],
    "answer": 0,
    "explain": "% gives the remainder, and 10 divided by 3 leaves 1."
   },
   {
    "q": "Which operator checks if two values are equal?",
    "options": [
     "=",
     ">=",
     "==",
     "!="
    ],
    "answer": 2,
    "explain": "== compares for equality, while a single = assigns a value."
   },
   {
    "q": "How can you tell if a number is even?",
    "options": [
     "number % 2 == 0",
     "number == 2",
     "number / 2 == 0",
     "number * 2 == 0"
    ],
    "answer": 0,
    "explain": "An even number has no remainder when divided by 2, so number % 2 == 0."
   }
  ]
 },
 "java-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Programs often need to choose between paths. The if statement runs a block of code only when a condition is true. You can add else to say 'otherwise do this,' and else if to check more conditions in order."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "int score = 75;\n\nif (score >= 90) {\n    System.out.println(\"Grade A\");\n} else if (score >= 60) {\n    System.out.println(\"Grade B\");\n} else {\n    System.out.println(\"Keep trying\");\n}"
    },
    {
     "type": "text",
     "text": "The condition inside the parentheses must be a boolean, something that is true or false. Java checks the conditions from top to bottom and runs the FIRST one that is true, then skips the rest. In the example, score 75 fails the first test but passes score >= 60, so it prints Grade B."
    },
    {
     "type": "text",
     "text": "You can combine conditions with && (and) and || (or). age >= 13 && age <= 19 is true only when BOTH sides are true. isWeekend || isHoliday is true when EITHER side is true."
    },
    {
     "type": "tip",
     "text": "Analogy: if/else if/else is like a sorting machine. An item drops into the first slot it fits, and once it fits, it stops checking the others."
    }
   ],
   "recap": "if runs code when a condition is true, else if adds more choices, and else is the fallback. Only the first true branch runs, and && (and) plus || (or) combine conditions."
  },
  "quiz": [
   {
    "q": "In the lesson code, what prints when score is 75?",
    "options": [
     "Keep trying",
     "Grade B",
     "Grade A",
     "Nothing"
    ],
    "answer": 1,
    "explain": "75 is below 90 but at least 60, so the else-if branch prints Grade B."
   },
   {
    "q": "What must go inside an if's parentheses?",
    "options": [
     "A String",
     "A true/false condition",
     "Any number",
     "A file name"
    ],
    "answer": 1,
    "explain": "An if needs a boolean condition that is either true or false."
   },
   {
    "q": "When is a && b true?",
    "options": [
     "Never",
     "When both a and b are true",
     "When only a is true",
     "When at least one is true"
    ],
    "answer": 1,
    "explain": "The && (and) operator is true only when both sides are true."
   },
   {
    "q": "In an if / else if / else chain, how many branches run?",
    "options": [
     "All of them",
     "The last one",
     "Only the first true branch",
     "A random one"
    ],
    "answer": 2,
    "explain": "Java runs only the first branch whose condition is true, then skips the rest."
   }
  ]
 },
 "java-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loop repeats a block of code so you do not have to copy and paste it. Instead of printing a line five times by hand, you tell the loop to run it five times. This saves work and prevents mistakes."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "// for loop: count 1 to 5\nfor (int i = 1; i <= 5; i++) {\n    System.out.println(\"Count: \" + i);\n}\n\n// while loop: repeat until condition is false\nint fuel = 3;\nwhile (fuel > 0) {\n    System.out.println(\"Driving...\");\n    fuel--;\n}"
    },
    {
     "type": "text",
     "text": "A for loop has three parts in its parentheses: a start (int i = 1), a condition to keep going (i <= 5), and a step (i++, which adds 1 each time). Use it when you know how many times to repeat. Here i++ is shorthand for i = i + 1."
    },
    {
     "type": "text",
     "text": "A while loop repeats as long as its condition stays true. Use it when you do not know the exact count ahead of time, like 'keep going while there is fuel.' Warning: if the condition never becomes false, you get an infinite loop that never stops."
    },
    {
     "type": "tip",
     "text": "Tip: always make sure something inside the loop moves it toward stopping, like fuel-- or i++. Otherwise it loops forever."
    }
   ],
   "recap": "Loops repeat code. Use a for loop when you know the count, and a while loop when you repeat until a condition changes. Always ensure the loop can eventually stop."
  },
  "quiz": [
   {
    "q": "How many times does 'for (int i = 1; i <= 5; i++)' run its body?",
    "options": [
     "5 times",
     "4 times",
     "Forever",
     "6 times"
    ],
    "answer": 0,
    "explain": "It runs for i = 1, 2, 3, 4, 5, which is 5 times."
   },
   {
    "q": "Which loop is best when you don't know the number of repeats ahead of time?",
    "options": [
     "A for loop",
     "A println",
     "A while loop",
     "No loop"
    ],
    "answer": 2,
    "explain": "A while loop repeats until its condition becomes false, so it suits unknown counts."
   },
   {
    "q": "What does i++ do?",
    "options": [
     "Resets i to 0",
     "Doubles i",
     "Adds 1 to i",
     "Prints i"
    ],
    "answer": 2,
    "explain": "i++ is shorthand for i = i + 1, adding 1 each time."
   },
   {
    "q": "What causes an infinite loop?",
    "options": [
     "Printing text",
     "Using a semicolon",
     "Counting to 5",
     "A condition that never becomes false"
    ],
    "answer": 3,
    "explain": "If the condition stays true forever, the loop never stops."
   }
  ]
 },
 "java-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A method is a named block of code you can reuse by 'calling' it. You write the steps once, give them a name, and then run them whenever you like. This keeps code short, organized, and easy to fix."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "// A method that returns the sum of two numbers\nstatic int add(int x, int y) {\n    return x + y;\n}\n\n// A method that returns nothing (void)\nstatic void greet(String name) {\n    System.out.println(\"Hello, \" + name);\n}\n\n// Calling them\nint total = add(3, 4);   // total is 7\ngreet(\"Sam\");            // prints Hello, Sam"
    },
    {
     "type": "text",
     "text": "Methods can take inputs called parameters, the values inside the parentheses like (int x, int y). They can also give back a result using return. The word before the method name is the return type: int means it returns a whole number, and void means it returns nothing."
    },
    {
     "type": "text",
     "text": "When you 'call' a method, the program jumps to it, runs its code, and comes back with the result. add(3, 4) hands over 3 and 4, and the method returns 7 to be stored in total."
    },
    {
     "type": "tip",
     "text": "Analogy: a method is like a coffee machine. You put in ingredients (parameters), press a button (call it), and get a cup back (the return value). You don't rebuild the machine each time."
    }
   ],
   "recap": "Methods are named, reusable blocks of code. Parameters are the inputs, return gives back a result, and void means the method returns nothing."
  },
  "quiz": [
   {
    "q": "What does the return type 'void' mean?",
    "options": [
     "It returns true",
     "It returns text",
     "It returns nothing",
     "It returns a decimal"
    ],
    "answer": 2,
    "explain": "A void method performs actions but does not return a value."
   },
   {
    "q": "In add(int x, int y), what are x and y called?",
    "options": [
     "Loops",
     "Classes",
     "Return types",
     "Parameters"
    ],
    "answer": 3,
    "explain": "The inputs listed in the parentheses are the method's parameters."
   },
   {
    "q": "What value does add(5, 6) return, given the lesson code?",
    "options": [
     "56",
     "1",
     "11",
     "Nothing"
    ],
    "answer": 2,
    "explain": "The method returns x + y, and 5 + 6 is 11."
   },
   {
    "q": "Why are methods useful?",
    "options": [
     "They reuse code and keep it organized",
     "They replace the JVM",
     "They delete variables",
     "They slow the program down"
    ],
    "answer": 0,
    "explain": "Methods let you write code once and reuse it, keeping programs tidy."
   }
  ]
 },
 "java-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Java is an object-oriented language, which means we model real things as objects. A class is a blueprint that describes what an object has (its data) and what it can do (its methods). An object is one actual thing built from that blueprint."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Dog {\n    String name;          // field (data)\n    int age;\n\n    Dog(String name, int age) {   // constructor\n        this.name = name;\n        this.age = age;\n    }\n\n    void bark() {         // method (behavior)\n        System.out.println(name + \" says Woof!\");\n    }\n}\n\n// Using the blueprint\nDog d = new Dog(\"Rex\", 3);\nd.bark();   // Rex says Woof!"
    },
    {
     "type": "text",
     "text": "The class Dog defines fields (name, age) and a method (bark). The special constructor runs when you build an object with the keyword new. The word 'this' means 'this particular object,' so this.name is that specific dog's name."
    },
    {
     "type": "text",
     "text": "Dog d = new Dog(\"Rex\", 3) creates one object from the blueprint. You could make many dogs, each with its own name and age, all from the same class. You reach an object's data and methods with a dot, like d.bark()."
    },
    {
     "type": "tip",
     "text": "Analogy: a class is like a cookie cutter, and objects are the cookies. One cutter (class) can stamp out many cookies (objects), each decorated differently."
    }
   ],
   "recap": "A class is a blueprint with fields (data) and methods (behavior). You create objects from it with 'new,' the constructor sets them up, and 'this' refers to the current object."
  },
  "quiz": [
   {
    "q": "What is the relationship between a class and an object?",
    "options": [
     "An object is a blueprint for a class",
     "They are the same thing",
     "A class is a blueprint; an object is made from it",
     "A class is one cookie"
    ],
    "answer": 2,
    "explain": "A class is the blueprint, and an object is a real instance built from it."
   },
   {
    "q": "Which keyword creates a new object?",
    "options": [
     "make",
     "new",
     "class",
     "build"
    ],
    "answer": 1,
    "explain": "The 'new' keyword creates a new object from a class."
   },
   {
    "q": "What does the constructor do?",
    "options": [
     "Prints the class name",
     "Deletes the object",
     "Ends the program",
     "Sets up the object when it is created"
    ],
    "answer": 3,
    "explain": "The constructor runs at creation time to initialize the object's fields."
   },
   {
    "q": "In the code, what does 'this.name' refer to?",
    "options": [
     "This particular object's name field",
     "A method call",
     "Every dog's name",
     "The class name"
    ],
    "answer": 0,
    "explain": "'this' refers to the current object, so this.name is that specific dog's name."
   }
  ]
 },
 "java-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Encapsulation means hiding an object's data and only allowing changes through controlled methods. Instead of letting anyone touch a field directly, you mark it private and provide public getter and setter methods to read or update it safely."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class BankAccount {\n    private double balance;   // hidden from outside\n\n    public double getBalance() {\n        return balance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n        }\n    }\n}\n\nBankAccount acc = new BankAccount();\nacc.deposit(500);\nSystem.out.println(acc.getBalance());  // 500.0\n// acc.balance = -9999;  // ERROR: balance is private"
    },
    {
     "type": "text",
     "text": "Java has four access modifiers. private means only this class can see it. public means any class can see it. protected means the class, its package, and its subclasses can see it. Writing nothing at all (package-private) means only classes in the same package can see it."
    },
    {
     "type": "text",
     "text": "The deposit method checks amount > 0 before changing balance, so nobody can put a negative deposit into the account. That check is only possible because balance is private and can't be changed directly from outside the class."
    },
    {
     "type": "tip",
     "text": "Exam habit: fields private, methods public. If you ever expose a field directly, you lose the chance to validate what goes into it."
    }
   ],
   "recap": "Encapsulation hides fields behind private access and exposes controlled public getters and setters, letting the class validate every change."
  },
  "quiz": [
   {
    "q": "Which access modifier hides a field from every other class?",
    "options": [
     "static",
     "protected",
     "public",
     "private"
    ],
    "answer": 3,
    "explain": "private restricts access to only the class the field is declared in."
   },
   {
    "q": "Why does BankAccount use a deposit() method instead of a public balance field?",
    "options": [
     "To make the code longer",
     "Java requires a method for every field",
     "Because private fields are faster",
     "So it can validate the amount before changing balance"
    ],
    "answer": 3,
    "explain": "A setter-style method can check the input, like rejecting negative deposits, which a public field could never do."
   },
   {
    "q": "What can see a protected member?",
    "options": [
     "Every class in every package",
     "The class, its package, and its subclasses",
     "Nothing, protected members are unusable",
     "Only the exact same class"
    ],
    "answer": 1,
    "explain": "protected is wider than private but narrower than public, reaching subclasses too."
   },
   {
    "q": "What is the core idea of encapsulation?",
    "options": [
     "Making every field static",
     "Writing one giant class",
     "Removing all constructors",
     "Hiding data and controlling access through methods"
    ],
    "answer": 3,
    "explain": "Encapsulation bundles data with the methods that safely control access to it."
   }
  ]
 },
 "java-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance lets one class reuse the fields and methods of another. The existing class is called the parent (or superclass), and the new class is the child (or subclass). The child gets everything the parent has, plus whatever new things it adds."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Animal {\n    String name;\n    Animal(String name) { this.name = name; }\n    void eat() { System.out.println(name + \" is eating\"); }\n}\n\nclass Cat extends Animal {\n    Cat(String name) {\n        super(name);   // calls Animal's constructor\n    }\n    void meow() { System.out.println(name + \" says Meow\"); }\n}\n\nCat c = new Cat(\"Whiskers\");\nc.eat();   // inherited from Animal\nc.meow();  // defined in Cat"
    },
    {
     "type": "text",
     "text": "The keyword extends creates the parent-child link: class Cat extends Animal means Cat is an Animal, plus more. super(name) calls the parent's constructor so the inherited field name gets set up correctly."
    },
    {
     "type": "text",
     "text": "Cat did not need to rewrite eat(); it inherited it for free. This avoids duplicating code across classes that share common behavior, and it models real 'is-a' relationships: a Cat is an Animal."
    },
    {
     "type": "tip",
     "text": "Common mix-up: 'is-a' means inheritance (Cat is an Animal). 'has-a' means the class should hold another object as a field instead, not extend it (a Car has an Engine, it isn't one)."
    }
   ],
   "recap": "extends lets a subclass inherit fields and methods from a superclass, and super() reaches back to the parent's constructor."
  },
  "quiz": [
   {
    "q": "Which keyword makes one class inherit from another?",
    "options": [
     "inherits",
     "super",
     "extends",
     "implements"
    ],
    "answer": 2,
    "explain": "extends creates the parent-child (superclass-subclass) relationship."
   },
   {
    "q": "What does super(name) do inside Cat's constructor?",
    "options": [
     "Calls the parent class's constructor",
     "Overrides the meow method",
     "Creates a static field",
     "Deletes the Animal class"
    ],
    "answer": 0,
    "explain": "super(...) invokes the superclass's constructor so inherited fields are properly initialized."
   },
   {
    "q": "Why can c.eat() be called on a Cat object even though eat() is defined in Animal?",
    "options": [
     "Java copies the method text into Cat automatically at compile time only if asked",
     "eat() is a keyword, not a method",
     "It cannot be called, this is an error",
     "Cat inherits eat() from Animal"
    ],
    "answer": 3,
    "explain": "Subclasses automatically inherit the public and protected methods of their superclass."
   },
   {
    "q": "Which relationship best describes inheritance?",
    "options": [
     "is-a",
     "makes-a",
     "uses-a",
     "has-a"
    ],
    "answer": 0,
    "explain": "Inheritance models an 'is-a' relationship, like a Cat is an Animal."
   }
  ]
 },
 "java-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Polymorphism means 'many forms.' In Java it lets the same method call behave differently depending on the actual object running it. The two main kinds are method overriding (runtime) and method overloading (compile time)."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Animal {\n    void sound() { System.out.println(\"Some sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println(\"Woof\"); }\n}\nclass Cat extends Animal {\n    @Override\n    void sound() { System.out.println(\"Meow\"); }\n}\n\nAnimal a1 = new Dog();\nAnimal a2 = new Cat();\na1.sound();  // Woof\na2.sound();  // Meow"
    },
    {
     "type": "text",
     "text": "This is method overriding: Dog and Cat both redefine sound() from Animal with the same name and parameters. Even though a1 and a2 are declared as type Animal, Java calls the version that matches the real object at runtime. That is why a1.sound() prints Woof, not 'Some sound.'"
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Calc {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\n\nCalc c = new Calc();\nc.add(2, 3);       // uses the int version\nc.add(2.5, 3.5);   // uses the double version"
    },
    {
     "type": "tip",
     "text": "Overriding vs overloading, a quick test: overriding needs an inheritance relationship and the identical method signature; overloading happens in the same class with different parameter lists."
    }
   ],
   "recap": "Polymorphism lets code work with many object types through one interface. Overriding redefines a method in a subclass, chosen at runtime; overloading gives a class multiple methods with the same name but different parameters."
  },
  "quiz": [
   {
    "q": "In the Dog/Cat example, why does a1.sound() print 'Woof' when a1 is declared as type Animal?",
    "options": [
     "Because Dog is alphabetically before Cat",
     "Java calls the method matching the object's actual runtime type",
     "It is a compile error",
     "Java ignores the declared type and always calls Animal's method"
    ],
    "answer": 1,
    "explain": "Overridden methods are resolved at runtime based on the real object, not the reference's declared type."
   },
   {
    "q": "What is method overloading?",
    "options": [
     "Calling a method too many times",
     "Multiple methods in the same class sharing a name but different parameters",
     "Redefining a parent method in a subclass",
     "Making a method static"
    ],
    "answer": 1,
    "explain": "Overloading is having several methods with the same name but different parameter lists, resolved at compile time."
   },
   {
    "q": "Which annotation signals that a method is meant to override a parent's method?",
    "options": [
     "@Super",
     "@Inherit",
     "@Override",
     "@Polymorphic"
    ],
    "answer": 2,
    "explain": "@Override tells the compiler to check that this method really does override one from the superclass."
   },
   {
    "q": "Overriding is resolved at which stage?",
    "options": [
     "Never, it is a myth",
     "Only during debugging",
     "Runtime",
     "Compile time"
    ],
    "answer": 2,
    "explain": "Overriding uses dynamic (runtime) dispatch based on the actual object type."
   }
  ]
 },
 "java-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Abstraction means describing what something does without pinning down exactly how, until a subclass fills in the details. Java gives two tools for this: abstract classes and interfaces."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "abstract class Shape {\n    abstract double area();      // no body, must be implemented\n\n    void describe() {            // normal method, shared by all shapes\n        System.out.println(\"Area = \" + area());\n    }\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { radius = r; }\n    double area() { return Math.PI * radius * radius; }\n}\n\nCircle c = new Circle(2);\nc.describe();   // Area = 12.566..."
    },
    {
     "type": "text",
     "text": "An abstract class can mix finished methods (describe) with unfinished ones (area, with no body). You cannot create a Shape directly with new Shape(); only a concrete subclass like Circle that fills in area() can be built."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "interface Drawable {\n    void draw();   // every method is implicitly public and abstract\n}\n\nclass Square implements Drawable {\n    public void draw() { System.out.println(\"Drawing a square\"); }\n}"
    },
    {
     "type": "text",
     "text": "An interface is a pure contract: it lists methods a class promises to implement, with the keyword implements, but has no fields or state of its own (aside from constants). A class can implement many interfaces, but extend only one class, since Java does not allow multiple class inheritance."
    },
    {
     "type": "tip",
     "text": "Rule of thumb for interviews: use an abstract class when subclasses share common code and an 'is-a' identity; use an interface when unrelated classes just need to promise the same behavior."
    }
   ],
   "recap": "Abstract classes and interfaces both let you define behavior without full implementation. A class can extend only one abstract class but implement many interfaces."
  },
  "quiz": [
   {
    "q": "Can you write new Shape() if Shape is an abstract class?",
    "options": [
     "Only inside main()",
     "Yes, always",
     "Only if it has no methods",
     "No, abstract classes cannot be instantiated directly"
    ],
    "answer": 3,
    "explain": "Abstract classes may have unfinished methods, so Java forbids creating them directly; you must use a concrete subclass."
   },
   {
    "q": "How many interfaces can a single Java class implement?",
    "options": [
     "Only two",
     "Exactly one",
     "Zero",
     "Many, at the same time"
    ],
    "answer": 3,
    "explain": "A class can implement multiple interfaces, unlike class inheritance which allows only one parent class."
   },
   {
    "q": "What must Circle provide because Shape declares 'abstract double area();'?",
    "options": [
     "A new abstract method",
     "Nothing, it is optional",
     "A concrete implementation of area()",
     "A private copy of Shape"
    ],
    "answer": 2,
    "explain": "Any concrete subclass of an abstract class must implement all of its abstract methods."
   },
   {
    "q": "When should you prefer an interface over an abstract class?",
    "options": [
     "When unrelated classes need to share a method promise, not shared code",
     "When you need shared fields across classes",
     "When only one subclass will ever exist",
     "Interfaces should always be preferred, never abstract classes"
    ],
    "answer": 0,
    "explain": "Interfaces are best for a pure behavioral contract across otherwise unrelated classes."
   }
  ]
 },
 "java-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An array is a fixed-size container that holds many values of the same type, stored one after another in memory. Each value is reached by an index, and indices start at 0, not 1."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "int[] scores = new int[3];   // creates an array of 3 ints, all 0\nscores[0] = 90;\nscores[1] = 85;\nscores[2] = 78;\n\nint[] marks = {90, 85, 78};   // shortcut: create and fill at once\n\nfor (int i = 0; i < marks.length; i++) {\n    System.out.println(marks[i]);\n}\n\n// enhanced for-loop, reads each element in order\nfor (int m : marks) {\n    System.out.println(m);\n}"
    },
    {
     "type": "text",
     "text": "marks.length gives the number of slots, not marks.length() like a String; arrays use a field, not a method. The last valid index is always length - 1, so marks[3] here would throw an ArrayIndexOutOfBoundsException."
    },
    {
     "type": "text",
     "text": "Arrays can also be two-dimensional, like a grid: int[][] grid = new int[3][3]; creates a 3-by-3 table, accessed with grid[row][col]. Once created, an array's size cannot change; if you need a resizable list, that is what the ArrayList collection is for."
    },
    {
     "type": "tip",
     "text": "Off-by-one is the most common array bug. Always loop with i < length, never i <= length, and remember arrays are zero-indexed."
    }
   ],
   "recap": "Arrays store a fixed number of same-type values, indexed from 0 to length - 1, and can be looped over with a normal or enhanced for-loop."
  },
  "quiz": [
   {
    "q": "What is the index of the first element in a Java array?",
    "options": [
     "1",
     "It depends on the array",
     "-1",
     "0"
    ],
    "answer": 3,
    "explain": "Java arrays are zero-indexed, so the first element is at index 0."
   },
   {
    "q": "Given int[] marks = {90, 85, 78};, what does marks[3] do?",
    "options": [
     "Throws ArrayIndexOutOfBoundsException",
     "Returns 0",
     "Grows the array automatically",
     "Returns the last element again"
    ],
    "answer": 0,
    "explain": "Valid indices only go up to length - 1 (here, index 2); index 3 is out of bounds and throws an exception."
   },
   {
    "q": "How do you get the number of elements in an array called marks?",
    "options": [
     "marks.size",
     "marks.length",
     "marks.length()",
     "marks.count()"
    ],
    "answer": 1,
    "explain": "Arrays expose length as a field, not a method call, unlike String's length()."
   },
   {
    "q": "What happens if you need to resize an array after creating it?",
    "options": [
     "Arrays resize automatically when full",
     "Java doubles it silently",
     "You call marks.resize()",
     "You cannot resize it; arrays are fixed size"
    ],
    "answer": 3,
    "explain": "Array size is fixed at creation; a resizable alternative is the ArrayList collection."
   }
  ]
 },
 "java-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A String in Java is an object representing text, and it is immutable, meaning once created, its contents never change. Every method that seems to 'modify' a String, like toUpperCase() or replace(), actually returns a brand new String."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "String s = \"hello\";\nString shout = s.toUpperCase();\nSystem.out.println(s);       // hello (unchanged)\nSystem.out.println(shout);   // HELLO\n\nSystem.out.println(s.length());        // 5\nSystem.out.println(s.charAt(1));       // 'e'\nSystem.out.println(s.substring(1, 3)); // \"el\"\nSystem.out.println(s + \" world\");      // \"hello world\""
    },
    {
     "type": "text",
     "text": "Comparing Strings needs care. == compares whether two references point to the exact same object in memory, while .equals() compares the actual characters. Two different String objects with the same text are equal by .equals() but may not be == equal."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "String a = new String(\"cat\");\nString b = new String(\"cat\");\nSystem.out.println(a == b);       // false, different objects\nSystem.out.println(a.equals(b));  // true, same characters\n\nStringBuilder sb = new StringBuilder();\nsb.append(\"Hello\").append(\", \").append(\"world\");\nSystem.out.println(sb.toString());  // Hello, world"
    },
    {
     "type": "tip",
     "text": "Always compare Strings with .equals(), never ==. Building a string inside a loop with + is slow; use StringBuilder instead because it modifies one buffer in place."
    }
   ],
   "recap": "Strings are immutable objects; their 'modifying' methods return new Strings. Use .equals() to compare content, and StringBuilder to build text efficiently in loops."
  },
  "quiz": [
   {
    "q": "What does it mean for a String to be immutable?",
    "options": [
     "It can be changed only once",
     "It is stored only in arrays",
     "Its contents never change after creation",
     "It cannot be printed"
    ],
    "answer": 2,
    "explain": "Immutable means once a String object is created, its character content can never be altered."
   },
   {
    "q": "Given String a = new String(\"cat\"); String b = new String(\"cat\");, what does a == b return?",
    "options": [
     "true",
     "\"cat\"",
     "false",
     "It throws an exception"
    ],
    "answer": 2,
    "explain": "== checks reference identity, and a and b are two separate objects, so it returns false even though their text matches."
   },
   {
    "q": "What is the correct way to compare the text of two Strings?",
    "options": [
     "Using .length()",
     "Using new String()",
     "Using ==",
     "Using .equals()"
    ],
    "answer": 3,
    "explain": ".equals() compares the actual characters, which is what you want for text comparison."
   },
   {
    "q": "Why prefer StringBuilder over + when building a long string inside a loop?",
    "options": [
     "There is no difference",
     "+ does not work inside loops",
     "StringBuilder modifies one buffer instead of creating many new String objects",
     "StringBuilder is a keyword, not a class"
    ],
    "answer": 2,
    "explain": "Since Strings are immutable, repeated + creates many throwaway objects; StringBuilder avoids that by growing one mutable buffer."
   }
  ]
 },
 "java-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An exception is an error that happens while a program runs, like dividing by zero or accessing an array index that does not exist. Instead of crashing the whole program, Java lets you 'catch' the error and handle it gracefully with try-catch."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "try {\n    int[] nums = {1, 2, 3};\n    System.out.println(nums[5]);   // out of bounds\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"Invalid index: \" + e.getMessage());\n} finally {\n    System.out.println(\"This always runs\");\n}"
    },
    {
     "type": "text",
     "text": "Code that might fail goes inside try. If an exception matching the catch type occurs, control jumps straight into that catch block instead of crashing. The finally block runs no matter what, whether an exception happened or not, useful for cleanup like closing a file."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class InsufficientFundsException extends Exception {\n    InsufficientFundsException(String message) {\n        super(message);\n    }\n}\n\nvoid withdraw(double balance, double amount) throws InsufficientFundsException {\n    if (amount > balance) {\n        throw new InsufficientFundsException(\"Not enough balance\");\n    }\n}"
    },
    {
     "type": "text",
     "text": "You can define your own exception by extending Exception, and raise it with throw. A method that might throw a checked exception must declare it with throws in its signature, so callers know to handle it. Checked exceptions (like IOException) must be caught or declared; unchecked ones (like NullPointerException) do not have to be."
    },
    {
     "type": "tip",
     "text": "Never leave a catch block empty. Swallowing an exception silently hides bugs; at minimum log or print what went wrong."
    }
   ],
   "recap": "try-catch handles runtime errors without crashing the program, finally always runs for cleanup, and throw/throws let you raise and declare custom exceptions."
  },
  "quiz": [
   {
    "q": "What is the purpose of the finally block?",
    "options": [
     "It stops the program",
     "It replaces the catch block",
     "It only runs if an exception occurs",
     "It runs regardless of whether an exception occurred"
    ],
    "answer": 3,
    "explain": "finally always executes, whether the try succeeded or an exception was caught, making it ideal for cleanup."
   },
   {
    "q": "What keyword is used to manually raise an exception?",
    "options": [
     "throws",
     "catch",
     "throw",
     "raise"
    ],
    "answer": 2,
    "explain": "throw is used inside a method to actually raise a new exception object; throws is used in a method signature to declare one."
   },
   {
    "q": "Accessing nums[5] on a 3-element array throws which exception in the example?",
    "options": [
     "ArrayIndexOutOfBoundsException",
     "ClassCastException",
     "NullPointerException",
     "NumberFormatException"
    ],
    "answer": 0,
    "explain": "Reading past the valid indices of an array throws ArrayIndexOutOfBoundsException."
   },
   {
    "q": "Why is an empty catch block considered bad practice?",
    "options": [
     "It makes the program run faster",
     "It causes a compile error",
     "Java does not allow empty catch blocks",
     "It silently hides errors instead of handling or reporting them"
    ],
    "answer": 3,
    "explain": "An empty catch swallows the exception with no trace, making bugs much harder to find later."
   }
  ]
 },
 "java-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Arrays have a fixed size, but the Java Collections Framework gives you resizable containers. The two you will use constantly are ArrayList, a growable list, and HashMap, a key-value lookup table."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "import java.util.ArrayList;\n\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Asha\");\nnames.add(\"Ravi\");\nnames.remove(\"Asha\");\nSystem.out.println(names.size());       // 1\nSystem.out.println(names.get(0));       // Ravi\n\nfor (String n : names) {\n    System.out.println(n);\n}"
    },
    {
     "type": "text",
     "text": "ArrayList<String> means this list only holds Strings; the type inside the angle brackets is called a generic type parameter. Unlike an array, you never set a size upfront: add() grows it automatically, and remove() shrinks it."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "import java.util.HashMap;\n\nHashMap<String, Integer> ages = new HashMap<>();\nages.put(\"Asha\", 21);\nages.put(\"Ravi\", 23);\nSystem.out.println(ages.get(\"Ravi\"));   // 23\nSystem.out.println(ages.containsKey(\"Asha\"));  // true\n\nfor (String key : ages.keySet()) {\n    System.out.println(key + \" -> \" + ages.get(key));\n}"
    },
    {
     "type": "text",
     "text": "HashMap<String, Integer> stores pairs: each unique key (a name) maps to one value (an age). get() looks up a value by its key almost instantly, which is why maps are the go-to structure whenever you need fast lookups by name or id, unlike scanning a whole list."
    },
    {
     "type": "tip",
     "text": "Pick ArrayList when order matters and you access things by position; pick HashMap when you look things up by a unique key. A HashMap does not guarantee any particular order of its entries."
    }
   ],
   "recap": "ArrayList is a resizable, ordered list; HashMap stores key-value pairs for fast lookup by key. Both use generics to fix the type of what they hold."
  },
  "quiz": [
   {
    "q": "What is the main advantage of ArrayList over a plain array?",
    "options": [
     "It is always faster for every operation",
     "It cannot be looped over",
     "It only stores numbers",
     "It can grow and shrink automatically"
    ],
    "answer": 3,
    "explain": "ArrayList automatically resizes as you add() or remove() elements, unlike a fixed-size array."
   },
   {
    "q": "In HashMap<String, Integer> ages, what does get(\"Ravi\") do?",
    "options": [
     "Returns the value stored for the key \"Ravi\"",
     "Returns the size of the map",
     "Removes Ravi from the map",
     "Adds a new key called Ravi"
    ],
    "answer": 0,
    "explain": "get(key) looks up and returns the value associated with that key."
   },
   {
    "q": "What does the <String> in ArrayList<String> represent?",
    "options": [
     "The maximum size of the list",
     "The name of the list",
     "A method call",
     "A generic type parameter fixing what type the list holds"
    ],
    "answer": 3,
    "explain": "Generics let you specify at compile time what type of elements a collection will hold, here restricting the list to Strings."
   },
   {
    "q": "When should you prefer a HashMap over an ArrayList?",
    "options": [
     "When you only ever have one element",
     "HashMap should always be used instead of ArrayList",
     "When you need fast lookup by a unique key rather than by position",
     "When order must always be preserved"
    ],
    "answer": 2,
    "explain": "HashMap is designed for fast key-based lookups, while ArrayList suits ordered, position-based access."
   }
  ]
 },
 "java-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Generics let a class or method work with any type while still catching type mistakes at compile time. Instead of writing one Box class for Integer and another for String, you write it once with a placeholder type like T."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Box<T> {\n    private T content;\n\n    void set(T content) { this.content = content; }\n    T get() { return content; }\n}\n\nBox<Integer> intBox = new Box<>();\nintBox.set(42);\nint value = intBox.get();\n\nBox<String> strBox = new Box<>();\nstrBox.set(\"Hello\");\nString text = strBox.get();\n// strBox.set(42);   // compile error: expects a String"
    },
    {
     "type": "text",
     "text": "T is a type parameter; when you write Box<Integer>, every T in the class becomes Integer for that specific box. This is exactly how ArrayList<String> and HashMap<String, Integer> work under the hood, they are generic classes from the standard library."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "static <T> T firstElement(T[] array) {\n    return array[0];\n}\n\nInteger[] nums = {10, 20, 30};\nString[] words = {\"a\", \"b\", \"c\"};\nSystem.out.println(firstElement(nums));   // 10\nSystem.out.println(firstElement(words));  // a"
    },
    {
     "type": "text",
     "text": "Methods can be generic too. firstElement works for an array of any type, T is decided when the method is called, based on what array you pass in. Without generics, you would need a separate copy of this method for every type, or fall back to unsafe casting."
    },
    {
     "type": "tip",
     "text": "Generics catch type errors when you compile, not when the program crashes at runtime. That is their whole point: strBox.set(42) fails to compile instead of blowing up in production."
    }
   ],
   "recap": "Generics let classes and methods use a placeholder type (like T) so the same code works safely with many types, catching mismatches at compile time."
  },
  "quiz": [
   {
    "q": "What does T represent in class Box<T>?",
    "options": [
     "A fixed type called T",
     "A method name",
     "A syntax error",
     "A placeholder type parameter, filled in when the class is used"
    ],
    "answer": 3,
    "explain": "T is a generic type parameter; it stands in for whatever type is specified when the class is instantiated, like Integer or String."
   },
   {
    "q": "Why does strBox.set(42) fail to compile if strBox is a Box<String>?",
    "options": [
     "The generic type was fixed to String, so an int argument doesn't match",
     "set() only exists on Box<Integer>",
     "42 is too large a number",
     "Box does not have a set method"
    ],
    "answer": 0,
    "explain": "Since strBox is Box<String>, every T becomes String, so passing an int violates the expected parameter type."
   },
   {
    "q": "What is the main benefit generics provide?",
    "options": [
     "Smaller file sizes",
     "Type errors are caught at compile time instead of causing runtime failures",
     "Automatic multithreading",
     "Faster runtime speed"
    ],
    "answer": 1,
    "explain": "Generics let the compiler verify type correctness ahead of time, avoiding unsafe casts and runtime type errors."
   },
   {
    "q": "Which standard library classes are actually generic classes themselves?",
    "options": [
     "if and for",
     "int and double",
     "ArrayList and HashMap",
     "System and Math"
    ],
    "answer": 2,
    "explain": "ArrayList<E> and HashMap<K, V> are built using the same generic type parameter mechanism shown with Box<T>."
   }
  ]
 },
 "java-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A lambda expression is a short, unnamed block of code you can pass around like a value, mostly used where a method is expected. It looks like (parameters) -> expression, and it replaces writing a whole extra class just to hand over a small piece of behavior."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "import java.util.ArrayList;\nimport java.util.Comparator;\n\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Ravi\");\nnames.add(\"Asha\");\nnames.add(\"Om\");\n\n// old way: an anonymous class\nnames.sort(new Comparator<String>() {\n    public int compare(String a, String b) {\n        return a.length() - b.length();\n    }\n});\n\n// lambda way: same logic, far shorter\nnames.sort((a, b) -> a.length() - b.length());"
    },
    {
     "type": "text",
     "text": "Both sort calls do the same thing: order names by string length. The lambda (a, b) -> a.length() - b.length() is a compact stand-in for the whole Comparator class. Lambdas work with 'functional interfaces,' interfaces that declare exactly one abstract method, like Comparator's compare."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "import java.util.List;\nimport java.util.stream.Collectors;\n\nList<Integer> nums = List.of(1, 2, 3, 4, 5, 6);\n\nList<Integer> evenSquares = nums.stream()\n    .filter(n -> n % 2 == 0)     // keep even numbers\n    .map(n -> n * n)             // square each one\n    .collect(Collectors.toList());\n\nSystem.out.println(evenSquares);  // [4, 16, 36]"
    },
    {
     "type": "text",
     "text": "A stream is a pipeline for processing a collection in steps: filter keeps only elements matching a condition, map transforms each element, and collect gathers the results back into a list. This chains lambdas together to express 'what' you want without writing manual loops for 'how.'"
    },
    {
     "type": "tip",
     "text": "Read stream code left to right as a sentence: 'take nums, filter to evens, map to squares, collect into a list.' That mental model makes long stream chains much easier to follow."
    }
   ],
   "recap": "Lambda expressions are compact, passable blocks of code used with single-method (functional) interfaces. Streams chain lambdas like filter, map, and collect to process collections declaratively."
  },
  "quiz": [
   {
    "q": "What is a lambda expression primarily used for in Java?",
    "options": [
     "Handling exceptions",
     "Creating an array",
     "Passing a small block of behavior as a value, often to replace a one-method anonymous class",
     "Declaring a new class"
    ],
    "answer": 2,
    "explain": "Lambdas offer a compact syntax for supplying behavior, typically implementing a functional interface's single method."
   },
   {
    "q": "What must an interface have for a lambda to implement it?",
    "options": [
     "No methods at all",
     "Exactly one abstract method",
     "At least two abstract methods",
     "Any number of methods"
    ],
    "answer": 1,
    "explain": "Lambdas target functional interfaces, which by definition declare exactly one abstract method."
   },
   {
    "q": "In nums.stream().filter(n -> n % 2 == 0).map(n -> n * n).collect(...), what does filter do?",
    "options": [
     "Squares every number",
     "Sorts the numbers",
     "Removes duplicates",
     "Keeps only the numbers matching the given condition"
    ],
    "answer": 3,
    "explain": "filter keeps only the elements for which the given lambda condition returns true, here the even numbers."
   },
   {
    "q": "What does the map step do in a stream pipeline?",
    "options": [
     "Sorts elements by key",
     "Removes elements from the stream",
     "Transforms each element into a new value",
     "Creates a HashMap"
    ],
    "answer": 2,
    "explain": "map applies a function to every element, producing a new stream of transformed values, like squaring each number."
   }
  ]
 },
 "java-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A thread is an independent path of execution inside a program. By default, a Java program runs on a single thread, but you can start extra threads to do work concurrently, useful for tasks like downloading a file while the interface stays responsive."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Printer extends Thread {\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Printing \" + i);\n        }\n    }\n}\n\nPrinter p = new Printer();\np.start();   // runs concurrently, NOT p.run()\nSystem.out.println(\"Main thread continues\");"
    },
    {
     "type": "text",
     "text": "You put the work inside run(), but you start the thread by calling start(), never run() directly. Calling run() directly would just execute it like a normal method on the current thread; start() is what actually creates a new thread and schedules run() on it."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Counter {\n    private int count = 0;\n    synchronized void increment() {   // only one thread at a time\n        count++;\n    }\n}"
    },
    {
     "type": "text",
     "text": "When two threads change the same shared data at once, you can get a race condition: unpredictable results because the operations interleave badly. The synchronized keyword locks a method so only one thread can run it at a time on a given object, preventing that kind of corruption."
    },
    {
     "type": "tip",
     "text": "Interview trap: start() launches a new thread; run() just calls the method normally on the current thread. Mixing these up is one of the most common multithreading mistakes."
    }
   ],
   "recap": "Threads let parts of a program run concurrently; start() launches a new thread while run() holds the work. synchronized prevents race conditions when threads share data."
  },
  "quiz": [
   {
    "q": "What is the correct way to actually start a new thread of execution?",
    "options": [
     "Call start()",
     "Just create the object with new",
     "Call run() directly",
     "Call execute()"
    ],
    "answer": 0,
    "explain": "start() creates a new thread and schedules run() to execute on it; calling run() directly just runs it on the current thread."
   },
   {
    "q": "What is a race condition?",
    "options": [
     "A compile-time error",
     "Unpredictable results from multiple threads accessing shared data without coordination",
     "A thread that never finishes",
     "A thread running too fast"
    ],
    "answer": 1,
    "explain": "Race conditions happen when concurrent threads read and write shared data in an interleaved, uncoordinated way."
   },
   {
    "q": "What does marking a method synchronized do?",
    "options": [
     "Turns it into a static method",
     "Deletes the method after one use",
     "Makes it run faster",
     "Ensures only one thread can execute it on a given object at a time"
    ],
    "answer": 3,
    "explain": "synchronized locks the method per object instance, so concurrent threads must take turns rather than interleave freely."
   },
   {
    "q": "If you call p.run() instead of p.start() on a Thread object, what happens?",
    "options": [
     "A new thread starts as usual",
     "run() executes like a normal method call on the current thread, no new thread is created",
     "It throws an exception",
     "Nothing happens at all"
    ],
    "answer": 1,
    "explain": "run() is just a regular method; without start(), no new thread is spawned and the code runs sequentially on the caller's thread."
   }
  ]
 },
 "java-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Java code is compiled into bytecode (.class files), not directly into machine code. The Java Virtual Machine (JVM) reads that bytecode and runs it, which is why Java code runs unchanged on any device with a JVM: write once, run anywhere."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "public class Demo {\n    public static void main(String[] args) {\n        int x = 10;                 // stored on the stack\n        Demo obj = new Demo();      // 'obj' reference on stack,\n                                     // the actual object on the heap\n    }\n}\n// javac Demo.java  -> produces Demo.class (bytecode)\n// java Demo         -> JVM loads and runs the bytecode"
    },
    {
     "type": "text",
     "text": "The JVM splits memory into regions. The stack holds local variables and method call frames, and is cleaned up automatically the instant a method returns. The heap holds every object created with new, and objects live there until nothing refers to them anymore."
    },
    {
     "type": "text",
     "text": "Garbage collection (GC) is the JVM's automatic process of finding heap objects that no code can reach anymore, and freeing their memory. Unlike languages such as C, you never call 'free' yourself; you just stop referencing an object (for example, by setting a variable to null or letting it go out of scope), and the garbage collector reclaims it later."
    },
    {
     "type": "tip",
     "text": "Interview one-liner: 'Java compiles to bytecode, the JVM executes it, and the garbage collector automatically frees heap memory for objects nobody references anymore.' That sentence covers write-once-run-anywhere, the stack/heap split, and automatic memory management in one shot."
    }
   ],
   "recap": "The JVM runs compiled Java bytecode, giving platform independence. Local variables live on the stack; objects live on the heap; and the garbage collector automatically reclaims heap memory no longer in use."
  },
  "quiz": [
   {
    "q": "What does the Java compiler (javac) produce from a .java file?",
    "options": [
     "Bytecode, stored in a .class file",
     "A finished executable with no JVM needed",
     "Native machine code for one specific CPU",
     "Nothing, javac only checks syntax"
    ],
    "answer": 0,
    "explain": "javac compiles source code into platform-independent bytecode, which the JVM then executes."
   },
   {
    "q": "Where are objects created with 'new' stored?",
    "options": [
     "The .class file",
     "The garbage collector",
     "The heap",
     "The stack"
    ],
    "answer": 2,
    "explain": "Objects live on the heap; only local variables and method call frames live on the stack."
   },
   {
    "q": "What is the role of the garbage collector?",
    "options": [
     "It manages thread scheduling",
     "It compiles Java code to bytecode",
     "It automatically frees heap memory for objects no longer referenced",
     "It catches exceptions"
    ],
    "answer": 2,
    "explain": "The garbage collector scans the heap for unreachable objects and reclaims their memory automatically, without manual free calls."
   },
   {
    "q": "Why can the same compiled Java program run on Windows, Linux, and Mac without changes?",
    "options": [
     "Because each OS has an identical file system",
     "Because the JVM, not the OS, executes the platform-independent bytecode",
     "Because Java programs do not use memory",
     "Because Java source code is never compiled"
    ],
    "answer": 1,
    "explain": "The 'write once, run anywhere' promise works because a JVM tailored to each platform interprets the same bytecode."
   }
  ]
 }
}
