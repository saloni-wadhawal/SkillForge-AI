// Lesson text and quiz questions for "Object-Oriented Programming".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "oop-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Object-Oriented Programming (OOP) is a way of organizing code around 'objects' — little bundles that group together data and the actions that work on that data. Instead of scattering variables and functions everywhere, you package related things together so your program mirrors the real world."
    },
    {
     "type": "text",
     "text": "A 'class' is a blueprint, and an 'object' is a real thing built from that blueprint. The class describes what every object of that type will look like; each object is one actual instance with its own values."
    },
    {
     "type": "tip",
     "text": "Think of a class as a cookie cutter and objects as the cookies. One cutter (class) can stamp out many cookies (objects), each one separate but the same shape."
    },
    {
     "type": "text",
     "text": "For example, a class 'Car' defines that every car has a color and can drive. From it you can create many car objects — a red car, a blue car — each independent but all sharing the same design."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Car:\n    pass\n\nmy_car = Car()   # my_car is an object built from the Car class\nprint(type(my_car))   # <class '__main__.Car'>"
    }
   ],
   "recap": "A class is a blueprint; an object is a real instance created from that blueprint."
  },
  "quiz": [
   {
    "q": "What is a class in OOP?",
    "options": [
     "A single variable",
     "A type of loop",
     "A running program",
     "A blueprint for creating objects"
    ],
    "answer": 3,
    "explain": "A class defines the structure and behavior that its objects will have — it is a blueprint."
   },
   {
    "q": "What is an object?",
    "options": [
     "A keyword",
     "The name of a file",
     "A comment in code",
     "An actual instance built from a class"
    ],
    "answer": 3,
    "explain": "An object is a concrete instance created from a class blueprint."
   },
   {
    "q": "OOP organizes code primarily around what?",
    "options": [
     "Objects that bundle data and actions",
     "Files",
     "Loops",
     "Global variables"
    ],
    "answer": 0,
    "explain": "OOP groups related data and the actions on it together into objects."
   },
   {
    "q": "One class can create how many objects?",
    "options": [
     "Exactly two",
     "Only one",
     "Many",
     "None"
    ],
    "answer": 2,
    "explain": "Like a cookie cutter, one class can produce many separate objects."
   }
  ]
 },
 "oop-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Objects hold two kinds of things: attributes and methods. Attributes are the data — the properties that describe the object, like a car's color or speed. Methods are the actions — functions that belong to the object and usually work with its attributes, like drive() or brake()."
    },
    {
     "type": "tip",
     "text": "A simple way to remember: attributes are the nouns (what an object HAS), and methods are the verbs (what an object DOES)."
    },
    {
     "type": "text",
     "text": "Inside a method, the object refers to itself using a special name — 'self' in Python (or 'this' in Java/C++). This lets a method read or change the attributes of the very object it was called on."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Dog:\n    def __init__(self, name):\n        self.name = name        # attribute\n\n    def bark(self):             # method\n        return f\"{self.name} says Woof!\"\n\nd = Dog(\"Rex\")\nprint(d.name)      # Rex\nprint(d.bark())    # Rex says Woof!"
    },
    {
     "type": "text",
     "text": "You reach an object's attributes and methods with a dot: object.attribute reads data, and object.method() runs an action. Each object keeps its own attribute values separate from other objects."
    }
   ],
   "recap": "Attributes are an object's data (what it has); methods are its actions (what it does), accessed with a dot."
  },
  "quiz": [
   {
    "q": "What are attributes?",
    "options": [
     "Names of classes",
     "Loops inside methods",
     "Actions an object performs",
     "The data or properties of an object"
    ],
    "answer": 3,
    "explain": "Attributes are the data/properties that describe an object."
   },
   {
    "q": "What are methods?",
    "options": [
     "Functions that belong to an object and define its actions",
     "External files",
     "Comments",
     "The color of an object"
    ],
    "answer": 0,
    "explain": "Methods are functions tied to an object that define what it can do."
   },
   {
    "q": "In Python, how does a method refer to the object it belongs to?",
    "options": [
     "self",
     "me",
     "object",
     "class"
    ],
    "answer": 0,
    "explain": "Python uses 'self' as the reference to the current object inside methods."
   },
   {
    "q": "How do you call a method named bark on an object d?",
    "options": [
     "d->bark",
     "d.bark()",
     "bark.d",
     "call bark d"
    ],
    "answer": 1,
    "explain": "Dot notation with parentheses, d.bark(), invokes the method on the object."
   }
  ]
 },
 "oop-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Encapsulation means keeping an object's data safe inside the object and controlling how the outside world can touch it. Instead of letting any code change an attribute directly, you hide it and expose controlled ways (methods) to read or update it."
    },
    {
     "type": "tip",
     "text": "Think of an ATM: you cannot open the machine and grab the cash directly. You interact through buttons (methods) that enforce rules. That protective boundary is encapsulation."
    },
    {
     "type": "text",
     "text": "Hiding data protects it from accidental or invalid changes. For example, a bank account can refuse a withdrawal larger than the balance. If any code could edit the balance directly, that rule could be bypassed and the data would become inconsistent."
    },
    {
     "type": "text",
     "text": "In Python, a leading underscore (like _balance) signals 'private, please do not touch directly'. Access is then given through methods, often called getters and setters, that can validate changes before applying them."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Account:\n    def __init__(self, balance):\n        self._balance = balance      # 'private' data\n\n    def deposit(self, amount):\n        if amount > 0:\n            self._balance += amount\n\n    def get_balance(self):\n        return self._balance\n\na = Account(100)\na.deposit(50)\nprint(a.get_balance())   # 150"
    }
   ],
   "recap": "Encapsulation hides an object's data and exposes controlled methods to protect it from invalid changes."
  },
  "quiz": [
   {
    "q": "Encapsulation mainly does what?",
    "options": [
     "Makes code run faster",
     "Hides data and controls access to it",
     "Creates new classes",
     "Deletes objects automatically"
    ],
    "answer": 1,
    "explain": "Encapsulation bundles data with methods and restricts direct outside access."
   },
   {
    "q": "Why hide an object's attributes?",
    "options": [
     "To protect data and enforce valid changes",
     "To avoid writing methods",
     "To hide it from the compiler",
     "To make the file smaller"
    ],
    "answer": 0,
    "explain": "Hiding data lets methods validate changes so the object stays consistent."
   },
   {
    "q": "In Python, a leading underscore on a name usually signals what?",
    "options": [
     "It should be treated as private/internal",
     "A syntax error",
     "A constant",
     "A method"
    ],
    "answer": 0,
    "explain": "By convention, a leading underscore marks an attribute as private/internal."
   },
   {
    "q": "A method that safely returns a private value is often called a...",
    "options": [
     "Destructor",
     "Constructor",
     "Loop",
     "Getter"
    ],
    "answer": 3,
    "explain": "A getter is a method that provides controlled read access to private data."
   }
  ]
 },
 "oop-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance lets a new class reuse the attributes and methods of an existing class. The existing class is the 'parent' (or base/superclass) and the new one is the 'child' (or derived/subclass). The child gets everything the parent has, and can add or change things."
    },
    {
     "type": "tip",
     "text": "Think of it as a family trait: a child inherits features from a parent but can also have its own. This is an 'is-a' relationship — a Dog IS an Animal."
    },
    {
     "type": "text",
     "text": "The big win is reuse: write shared behavior once in the parent, and every child gets it automatically. This avoids copy-pasting the same code into many similar classes."
    },
    {
     "type": "text",
     "text": "A child can also 'override' a parent method — define its own version with the same name to specialize the behavior while keeping the same interface."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Animal:\n    def speak(self):\n        return \"some sound\"\n\nclass Dog(Animal):        # Dog inherits from Animal\n    def speak(self):      # override\n        return \"Woof!\"\n\nprint(Dog().speak())      # Woof!"
    }
   ],
   "recap": "Inheritance lets a child class reuse and extend a parent class, modeling an 'is-a' relationship."
  },
  "quiz": [
   {
    "q": "Inheritance allows a class to do what?",
    "options": [
     "Run without a main function",
     "Reuse attributes and methods of another class",
     "Delete its parent",
     "Hide all its data"
    ],
    "answer": 1,
    "explain": "A child class inherits and reuses the parent's attributes and methods."
   },
   {
    "q": "Inheritance models which kind of relationship?",
    "options": [
     "has-a",
     "is-a",
     "next-to",
     "uses-a"
    ],
    "answer": 1,
    "explain": "Inheritance expresses an 'is-a' relationship, like Dog is-a Animal."
   },
   {
    "q": "The class being inherited from is called the...",
    "options": [
     "Object",
     "Method",
     "Instance",
     "Parent / base class"
    ],
    "answer": 3,
    "explain": "The class that is inherited from is the parent, base, or superclass."
   },
   {
    "q": "When a child defines its own version of a parent method, that is called...",
    "options": [
     "Overriding",
     "Encapsulating",
     "Importing",
     "Instantiating"
    ],
    "answer": 0,
    "explain": "Redefining an inherited method with the same name is overriding."
   }
  ]
 },
 "oop-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Polymorphism means 'many forms'. It lets the same method name behave differently depending on the object that runs it. You can call speak() on any animal, and each one responds in its own way, without your code needing to know the exact type."
    },
    {
     "type": "tip",
     "text": "Think of a 'play' button on a remote: one button, but it plays a movie, a song, or a game depending on the device. Same action name, different behavior."
    },
    {
     "type": "text",
     "text": "This is powerful because you can write code that works on a whole group of objects through a shared interface. Add a new animal type later, and the same loop keeps working — no changes needed to the calling code."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Cat:\n    def speak(self): return \"Meow\"\nclass Cow:\n    def speak(self): return \"Moo\"\n\nfor animal in (Cat(), Cow()):\n    print(animal.speak())   # Meow, then Moo"
    },
    {
     "type": "text",
     "text": "Polymorphism often works hand-in-hand with inheritance and overriding, but the core idea is broader: many object types offering the same method name so they can be used interchangeably."
    }
   ],
   "recap": "Polymorphism lets one method name take many forms, so different objects respond to the same call in their own way."
  },
  "quiz": [
   {
    "q": "What does polymorphism mean?",
    "options": [
     "Hiding data",
     "Copying a class",
     "One fixed behavior",
     "Many forms — same call, different behavior"
    ],
    "answer": 3,
    "explain": "Polymorphism means many forms: the same method name behaves differently per object."
   },
   {
    "q": "Why is polymorphism useful?",
    "options": [
     "It lets one piece of code work with many object types",
     "It speeds up loops",
     "It encrypts data",
     "It deletes unused objects"
    ],
    "answer": 0,
    "explain": "Shared method names let general code work across many types interchangeably."
   },
   {
    "q": "In the loop calling animal.speak(), what decides the output?",
    "options": [
     "The variable name",
     "The file name",
     "The loop counter",
     "The actual object's type"
    ],
    "answer": 3,
    "explain": "Each object's own class defines its speak(), so the object's type decides the result."
   },
   {
    "q": "Polymorphism commonly pairs with which other concept?",
    "options": [
     "Sorting algorithms",
     "Inheritance and method overriding",
     "Comments",
     "File I/O"
    ],
    "answer": 1,
    "explain": "Overriding inherited methods is a common way to achieve polymorphism."
   }
  ]
 },
 "oop-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Abstraction means showing only the essential features of something and hiding the complicated details. You expose WHAT an object does, not HOW it does it. Users of the object work with a simple interface and ignore the messy internals."
    },
    {
     "type": "tip",
     "text": "When you drive a car, you use the steering wheel and pedals — you don't think about fuel injection or engine timing. The simple controls are the abstraction; the engine is the hidden detail."
    },
    {
     "type": "text",
     "text": "In code, abstraction is often done with 'abstract classes' — templates that declare methods every subclass must provide, without giving the implementation. They define a contract: 'any shape must have an area()', while leaving each shape to compute it its own way."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): ...\n\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    def area(self): return 3.14 * self.r ** 2\n\nprint(Circle(2).area())   # 12.56"
    },
    {
     "type": "text",
     "text": "Abstraction and encapsulation are related but different: encapsulation hides DATA behind methods for safety, while abstraction hides COMPLEXITY behind a simple interface for clarity."
    }
   ],
   "recap": "Abstraction hides complex details behind a simple interface, defining what an object does, not how."
  },
  "quiz": [
   {
    "q": "Abstraction focuses on showing...",
    "options": [
     "The source file",
     "Only private variables",
     "What an object does, hiding how",
     "Every internal detail"
    ],
    "answer": 2,
    "explain": "Abstraction exposes what an object does and hides the how (the details)."
   },
   {
    "q": "An abstract class typically does what?",
    "options": [
     "Runs faster than others",
     "Cannot be inherited",
     "Stores no data ever",
     "Declares methods subclasses must implement"
    ],
    "answer": 3,
    "explain": "An abstract class defines a contract of methods that subclasses must implement."
   },
   {
    "q": "How does abstraction differ from encapsulation?",
    "options": [
     "Abstraction hides data; encapsulation hides complexity",
     "Abstraction hides complexity; encapsulation hides data",
     "They are identical",
     "Neither hides anything"
    ],
    "answer": 1,
    "explain": "Abstraction hides complexity behind an interface; encapsulation protects data."
   },
   {
    "q": "The car steering wheel is an analogy for what?",
    "options": [
     "A simple interface hiding engine complexity",
     "A private attribute",
     "A subclass",
     "A loop"
    ],
    "answer": 0,
    "explain": "The wheel is a simple interface that hides the engine's complexity — abstraction."
   }
  ]
 },
 "oop-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A constructor is a special method that runs automatically when an object is created. Its job is to set up the object's starting state — giving initial values to its attributes so the object is ready to use immediately."
    },
    {
     "type": "text",
     "text": "In Python the constructor is named __init__. In Java or C++ it shares the class's name. Whatever the language, it runs once per object, right when you build it, before you do anything else with it."
    },
    {
     "type": "tip",
     "text": "Think of a constructor as the setup crew before a stage show: they arrange everything (props, lights) so the moment the object 'goes live', it is fully prepared."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Point:\n    def __init__(self, x, y):   # constructor\n        self.x = x\n        self.y = y\n\np = Point(3, 4)     # __init__ runs automatically\nprint(p.x, p.y)     # 3 4"
    },
    {
     "type": "text",
     "text": "Constructors can take parameters so each object starts with different values, and they can also apply defaults or validation. This guarantees every object begins life in a valid, consistent state rather than being half-built."
    },
    {
     "type": "tip",
     "text": "Many languages also have a 'destructor' — the opposite of a constructor — that runs when an object is cleaned up, often to release resources like files or memory."
    }
   ],
   "recap": "A constructor runs automatically when an object is created to initialize its starting state."
  },
  "quiz": [
   {
    "q": "When does a constructor run?",
    "options": [
     "Only when you call it by name",
     "Automatically when an object is created",
     "When the program ends",
     "Never"
    ],
    "answer": 1,
    "explain": "A constructor runs automatically at the moment an object is created."
   },
   {
    "q": "What is the constructor's name in Python?",
    "options": [
     "__new__object",
     "__main__",
     "__init__",
     "construct"
    ],
    "answer": 2,
    "explain": "Python's constructor method is named __init__."
   },
   {
    "q": "What is a constructor's main job?",
    "options": [
     "To delete the object",
     "To initialize the object's attributes",
     "To print output",
     "To inherit a class"
    ],
    "answer": 1,
    "explain": "A constructor sets up (initializes) the object's starting attribute values."
   },
   {
    "q": "The special method that runs when an object is destroyed is called a...",
    "options": [
     "Getter",
     "Interface",
     "Overrider",
     "Destructor"
    ],
    "answer": 3,
    "explain": "A destructor runs at cleanup time, the opposite of a constructor."
   }
  ]
 },
 "oop-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Two words sound similar but mean different things. Method overloading means writing several methods with the SAME name but DIFFERENT parameters, in the SAME class. Method overriding means a subclass replaces a method it inherited from its parent, keeping the SAME signature."
    },
    {
     "type": "text",
     "text": "Overloading is decided at compile time (which version to call is picked from the arguments you pass) so it is often called 'compile-time polymorphism'. Overriding is decided at run time (which version runs depends on the actual object), so it is 'run-time polymorphism'."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Calc {\n    int add(int a, int b) { return a + b; }          // overload 1\n    double add(double a, double b) { return a + b; }  // overload 2 (different params)\n}\n\nclass Animal {\n    void speak() { System.out.println(\"some sound\"); }\n}\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println(\"Woof\"); }      // overriding, same signature\n}"
    },
    {
     "type": "tip",
     "text": "Exam trap: Python does not support true overloading. If you define add() twice in the same Python class, the second definition simply replaces the first — only the last one exists. Overloading only works cleanly in statically typed languages like Java or C++."
    },
    {
     "type": "text",
     "text": "Overloading improves readability (same verb, different inputs, like print() accepting a string or a number). Overriding is essential for polymorphism, letting each subclass customize inherited behaviour."
    }
   ],
   "recap": "Overloading is same name, different parameters, in one class, resolved at compile time. Overriding is same signature, replaced in a subclass, resolved at run time."
  },
  "quiz": [
   {
    "q": "Method overloading means having methods with the same name and...",
    "options": [
     "Different parameters, in the same class",
     "No parameters at all",
     "Different return types only",
     "The same parameters, in different classes"
    ],
    "answer": 0,
    "explain": "Overloading is same method name with different parameter lists inside one class."
   },
   {
    "q": "Which kind of polymorphism is method overriding?",
    "options": [
     "Compile-time",
     "Run-time",
     "Static-time",
     "Neither, it is not polymorphism"
    ],
    "answer": 1,
    "explain": "Overriding is resolved based on the actual object at run time, so it is run-time polymorphism."
   },
   {
    "q": "In plain Python, if you write two methods with the same name add() in one class, what happens?",
    "options": [
     "A compile error occurs",
     "Only the second definition survives, the first is discarded",
     "Both run together",
     "Python picks the right one by argument count"
    ],
    "answer": 1,
    "explain": "Python does not support true overloading; the later definition simply overwrites the earlier one."
   },
   {
    "q": "Overriding requires the subclass method to have...",
    "options": [
     "No body",
     "A completely different name",
     "The same signature as the parent method",
     "Extra parameters"
    ],
    "answer": 2,
    "explain": "Overriding replaces the parent's method, so the signature (name and parameters) must match."
   }
  ]
 },
 "oop-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Operator overloading lets you redefine what an operator like +, ==, or < does when it is used on objects of your own class. Instead of only adding numbers, + can be taught to add two Vector objects or join two Money amounts."
    },
    {
     "type": "text",
     "text": "In Python this is done with special 'dunder' (double underscore) methods: __add__ for +, __eq__ for ==, __lt__ for <, and so on. When you write a + b, Python actually calls a.__add__(b) behind the scenes."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __repr__(self):\n        return f\"Vector({self.x}, {self.y})\"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)   # Vector(4, 6)"
    },
    {
     "type": "tip",
     "text": "Overload operators only when the meaning is obvious. Adding two vectors with + makes sense; using + to 'merge' two unrelated database records does not — it will confuse whoever reads the code."
    },
    {
     "type": "text",
     "text": "C++ overloads operators with a special operator keyword, for example Vector operator+(Vector other). Java does not allow operator overloading at all (except + for strings, built into the language), so Java programmers write a named method like add() instead."
    }
   ],
   "recap": "Operator overloading gives operators like + and == custom meaning for your own classes, commonly through Python's dunder methods such as __add__."
  },
  "quiz": [
   {
    "q": "In Python, which special method is called when you write a + b for two objects?",
    "options": [
     "__add__",
     "__sum__",
     "__plus__",
     "__combine__"
    ],
    "answer": 0,
    "explain": "Python routes the + operator to the __add__ dunder method."
   },
   {
    "q": "Which language does NOT allow programmer-defined operator overloading?",
    "options": [
     "C++",
     "Python",
     "Java",
     "None, all of them allow it"
    ],
    "answer": 2,
    "explain": "Java deliberately leaves out operator overloading (apart from + for strings, built into the language)."
   },
   {
    "q": "What is a sensible rule for overloading an operator?",
    "options": [
     "Never document what it does",
     "Only use it for private methods",
     "Overload as many operators as possible",
     "Only overload it when the meaning stays obvious"
    ],
    "answer": 3,
    "explain": "Operator overloading should preserve the operator's natural, expected meaning so code stays readable."
   }
  ]
 },
 "oop-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far every attribute has belonged to one object. A static (or 'class') member instead belongs to the CLASS itself, and is shared by every object of that class. Change it through one object, and every other object sees the new value too."
    },
    {
     "type": "text",
     "text": "A common use is counting how many objects have been created. Each new object increments a shared counter that lives on the class, not inside any single instance."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Robot:\n    count = 0   # static/class attribute, shared by all\n\n    def __init__(self, name):\n        self.name = name        # instance attribute, unique per object\n        Robot.count += 1\n\nr1 = Robot(\"R1\")\nr2 = Robot(\"R2\")\nprint(Robot.count)   # 2"
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: instance attributes answer 'what does THIS object have', static/class attributes answer 'what do ALL objects of this class share'."
    },
    {
     "type": "text",
     "text": "Static methods work the same way — they belong to the class, not to any single object, so they cannot use self/this to reach instance data. They are used for utility work that relates to the class as a whole, like a factory method or a helper calculation."
    }
   ],
   "recap": "Static members belong to the class as a whole and are shared by every object, unlike instance members which are unique to each object."
  },
  "quiz": [
   {
    "q": "A static (class) attribute is...",
    "options": [
     "Only visible inside one method",
     "Shared by every object of the class",
     "Deleted after the constructor runs",
     "Unique to each object"
    ],
    "answer": 1,
    "explain": "Static attributes live on the class and are shared across all its objects."
   },
   {
    "q": "In the Robot example, why does Robot.count reach 2 after creating r1 and r2?",
    "options": [
     "count is shared, so both increments add to the same class-level value",
     "count resets for every new object",
     "Python ignores static attributes",
     "Each object has its own separate count starting at 1"
    ],
    "answer": 0,
    "explain": "Since count belongs to the class, both constructor calls increment the same shared value."
   },
   {
    "q": "Can a static method use self (the instance) directly?",
    "options": [
     "No, because it belongs to the class, not to any one object",
     "Only if the class has one object",
     "Only in Java",
     "Yes, always"
    ],
    "answer": 0,
    "explain": "Static methods operate at the class level and have no automatic access to a particular instance's data."
   }
  ]
 },
 "oop-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An interface is a pure contract: it lists method names every implementing class must provide, but gives no code at all. An abstract class can also declare such must-implement methods, but it is allowed to include some real, shared code too."
    },
    {
     "type": "text",
     "text": "Rule of thumb: use an abstract class when classes share some common behaviour (so you can write it once) plus some behaviour each must customize. Use an interface when you only want to guarantee 'this class can do X', with no shared implementation at all."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "interface Flyable {\n    void fly();               // no body at all\n}\n\nabstract class Bird {\n    void breathe() {           // shared, real implementation\n        System.out.println(\"breathing air\");\n    }\n    abstract void makeSound(); // each bird must define its own\n}\n\nclass Sparrow extends Bird implements Flyable {\n    void makeSound() { System.out.println(\"Chirp\"); }\n    public void fly() { System.out.println(\"flap flap\"); }\n}"
    },
    {
     "type": "tip",
     "text": "A common interview line: 'a class can extend only ONE abstract class, but can implement MANY interfaces.' That is exactly how Java gets around not allowing multiple inheritance of classes."
    },
    {
     "type": "text",
     "text": "In Python, interfaces are usually written with abstract base classes (ABC) where every method stays abstract, so the distinction is more about convention than a separate keyword."
    }
   ],
   "recap": "An interface is a pure contract with no shared code; an abstract class can mix must-implement methods with real shared code, and a class can implement many interfaces but extend only one class."
  },
  "quiz": [
   {
    "q": "What is the key difference between an interface and an abstract class?",
    "options": [
     "Interfaces can have shared implementation, abstract classes cannot",
     "An interface is a pure contract with no shared code; an abstract class can include real shared code too",
     "Abstract classes cannot declare methods",
     "They are exactly the same thing"
    ],
    "answer": 1,
    "explain": "Interfaces provide only method signatures, while abstract classes may combine abstract methods with concrete, shared ones."
   },
   {
    "q": "In Java, how many interfaces can one class implement?",
    "options": [
     "Only as many as it extends",
     "Exactly one",
     "Many",
     "Zero"
    ],
    "answer": 2,
    "explain": "A class can implement multiple interfaces, which is how Java offers multiple-inheritance-like behaviour without extending multiple classes."
   },
   {
    "q": "How many classes can a single Java class extend directly?",
    "options": [
     "As many as needed",
     "Two",
     "Zero, extension is not allowed",
     "Only one"
    ],
    "answer": 3,
    "explain": "Java allows single inheritance of classes — one class can extend only one parent class."
   }
  ]
 },
 "oop-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Multiple inheritance means a class inherits from more than one parent class at once. Python and C++ allow this directly. It sounds useful, but it creates a famous headache called the diamond problem."
    },
    {
     "type": "text",
     "text": "Picture class A at the top, classes B and C both inheriting from A, and class D inheriting from BOTH B and C. If A has a method and both B and C override it differently, which version does D get? The inheritance paths form a diamond shape, and the ambiguity is the diamond problem."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class A:\n    def greet(self): print(\"A\")\nclass B(A):\n    def greet(self): print(\"B\")\nclass C(A):\n    def greet(self): print(\"C\")\nclass D(B, C):\n    pass\n\nD().greet()   # \"B\" -- Python's MRO picks B before C, left to right"
    },
    {
     "type": "tip",
     "text": "Python solves the ambiguity with the MRO (Method Resolution Order): it searches parents left to right, depth first, but never visits a class before its own subclasses. Run ClassName.__mro__ to see the exact search order."
    },
    {
     "type": "text",
     "text": "Java sidesteps the whole problem by disallowing multiple inheritance of classes altogether — it only allows implementing multiple interfaces, which have no conflicting method bodies to fight over."
    }
   ],
   "recap": "Multiple inheritance lets a class have more than one parent, but creates the diamond problem when parents disagree on a shared ancestor's method; Python resolves it with the MRO, Java avoids it by disallowing multiple class inheritance."
  },
  "quiz": [
   {
    "q": "The diamond problem arises when...",
    "options": [
     "A class has no parent at all",
     "A class inherits from two classes that both inherit from the same ancestor with conflicting overrides",
     "A class is declared static",
     "A method has too many parameters"
    ],
    "answer": 1,
    "explain": "The diamond shape comes from two paths back to a common ancestor, creating ambiguity about which override to use."
   },
   {
    "q": "How does Python decide which parent's method to use in a multiple-inheritance conflict?",
    "options": [
     "It picks randomly",
     "It always uses the last parent listed",
     "Using the Method Resolution Order (MRO)",
     "It refuses to run the program"
    ],
    "answer": 2,
    "explain": "Python computes a consistent search order (the MRO) to resolve exactly which method gets called."
   },
   {
    "q": "How does Java avoid the diamond problem for classes?",
    "options": [
     "By disallowing multiple inheritance of classes, allowing only multiple interfaces",
     "It doesn't avoid it",
     "By allowing unlimited multiple inheritance",
     "By deleting one of the parent classes automatically"
    ],
    "answer": 0,
    "explain": "Java permits only single class inheritance, sidestepping conflicting method bodies; interfaces have no bodies to conflict."
   }
  ]
 },
 "oop-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Inheritance models an 'is-a' relationship: a Dog IS-A Animal. Composition models a 'has-a' relationship: a Car HAS-A Engine. Instead of inheriting behaviour, a class holds another object as an attribute and delegates work to it."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Engine:\n    def start(self):\n        print(\"Engine roars to life\")\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()   # composition: Car HAS-A Engine\n    def start(self):\n        self.engine.start()      # delegate the work\n\nCar().start()   # Engine roars to life"
    },
    {
     "type": "tip",
     "text": "Famous design principle: 'favour composition over inheritance.' Inheritance locks in a rigid hierarchy at compile time; composition lets you swap the inner object (a different Engine) at run time, which is far more flexible."
    },
    {
     "type": "text",
     "text": "Inheritance can lead to fragile, deep hierarchies where a small change to a base class breaks many subclasses. Composition keeps classes smaller and more independent, since each piece only needs to know the interface of the object it holds, not its internal details."
    },
    {
     "type": "text",
     "text": "A practical guideline: reach for inheritance when subclasses truly are specialised versions of the parent and share its identity; reach for composition when you are really just reusing a capability."
    }
   ],
   "recap": "Inheritance models is-a relationships and shares behaviour through a class hierarchy; composition models has-a relationships and reuses behaviour by holding another object, which is usually more flexible."
  },
  "quiz": [
   {
    "q": "Composition models which kind of relationship?",
    "options": [
     "Uses-only-once",
     "Has-a",
     "None, composition has no relationship",
     "Is-a"
    ],
    "answer": 1,
    "explain": "Composition means one class holds another as a part, a has-a relationship, unlike inheritance's is-a."
   },
   {
    "q": "What does the design guideline 'favour composition over inheritance' warn against?",
    "options": [
     "Writing constructors",
     "Using interfaces",
     "Rigid, fragile hierarchies from overusing inheritance",
     "Using classes at all"
    ],
    "answer": 2,
    "explain": "Deep inheritance hierarchies can become fragile; composition keeps parts more independent and swappable."
   },
   {
    "q": "In the Car and Engine example, how does Car use the Engine's start behaviour?",
    "options": [
     "Car holds an Engine object and delegates the call to it",
     "Car inherits from Engine",
     "Engine inherits from Car",
     "Car copies the Engine's code"
    ],
    "answer": 0,
    "explain": "Car stores an Engine instance as an attribute and calls its start() method — that is delegation via composition."
   }
  ]
 },
 "oop-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An exception is an object that represents an error, thrown when something goes wrong (dividing by zero, opening a missing file) and caught by code ready to handle it. Because exceptions are objects, they fit naturally into OOP: exception classes can be organised into their own inheritance hierarchy."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class InsufficientFundsError(Exception):\n    def __init__(self, shortfall):\n        super().__init__(f\"Short by {shortfall}\")\n        self.shortfall = shortfall\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(amount - balance)\n    return balance - amount\n\ntry:\n    withdraw(100, 150)\nexcept InsufficientFundsError as e:\n    print(\"Failed:\", e, \"| shortfall:\", e.shortfall)"
    },
    {
     "type": "tip",
     "text": "Custom exception classes should inherit from the language's built-in Exception (or Error) class. This lets you catch your specific error, or catch broadly with the base Exception, whichever a piece of code needs."
    },
    {
     "type": "text",
     "text": "Catching a more specific exception class before a general one lets calling code react precisely: a bank app can handle InsufficientFundsError differently from a generic ValueError, even though both are 'errors' underneath."
    },
    {
     "type": "text",
     "text": "Well-designed exception hierarchies mirror the same OOP ideas already covered: a specific exception IS-A general Exception, so polymorphism lets one except Exception block catch every subclass beneath it."
    }
   ],
   "recap": "Exceptions are objects representing errors, organised into inheritance hierarchies, letting you catch precisely or broadly using the same OOP ideas as any other class."
  },
  "quiz": [
   {
    "q": "Why do exceptions fit naturally into OOP?",
    "options": [
     "They are objects and can be organised into inheritance hierarchies",
     "They replace all classes",
     "They only work with static methods",
     "They cannot be objects"
    ],
    "answer": 0,
    "explain": "Exceptions are objects, usually built from a base Exception class, which naturally supports inheritance."
   },
   {
    "q": "What should a custom exception class typically inherit from?",
    "options": [
     "The class that raises it",
     "It should not inherit from anything",
     "The built-in Exception (or Error) class",
     "A random unrelated class"
    ],
    "answer": 2,
    "explain": "Inheriting from the base Exception class lets the custom exception be caught either specifically or generally."
   },
   {
    "q": "Why catch a specific exception class before a general one?",
    "options": [
     "So calling code can react precisely to that specific error case",
     "It is required by every language",
     "It prevents the program from compiling",
     "It has no effect on behaviour"
    ],
    "answer": 0,
    "explain": "Catching the specific subclass first lets you handle that particular failure differently from other, more general errors."
   }
  ]
 },
 "oop-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Generics (called templates in C++) let you write one class or function that works with any data type, decided later, instead of writing a separate version for int, another for string, and so on."
    },
    {
     "type": "code",
     "lang": "java",
     "code": "class Box<T> {           // T is a placeholder type\n    private T item;\n    void set(T item) { this.item = item; }\n    T get() { return item; }\n}\n\nBox<String> b1 = new Box<>();\nb1.set(\"hello\");\n\nBox<Integer> b2 = new Box<>();\nb2.set(42);"
    },
    {
     "type": "tip",
     "text": "Generics catch type mistakes at compile time. Without them, a Box built to only expect strings could silently accept a number and crash later, deep inside the program, far from where the mistake was made."
    },
    {
     "type": "text",
     "text": "Python does not need generics the same way, because its variables are not statically typed — a list can already hold any type of object without a special generic syntax. Type hints like list[int] exist for clarity and tooling, but Python does not enforce them at run time."
    },
    {
     "type": "text",
     "text": "Generics are heavily used in real-world collections: a list, stack, or queue class is written once as a generic container, then reused safely for integers, strings, or your own custom objects."
    }
   ],
   "recap": "Generics let one class or function work with any type, chosen when it is used, catching type errors early and avoiding duplicate code for each data type."
  },
  "quiz": [
   {
    "q": "What problem do generics solve?",
    "options": [
     "Writing one class/function that works safely across many data types instead of duplicating code",
     "They make code run without any type at all",
     "They remove the need for constructors",
     "They allow multiple inheritance"
    ],
    "answer": 0,
    "explain": "Generics let a single implementation serve many types instead of duplicating near-identical classes for each type."
   },
   {
    "q": "What is the C++ term for what Java calls generics?",
    "options": [
     "Constructors",
     "Templates",
     "Interfaces",
     "Static methods"
    ],
    "answer": 1,
    "explain": "C++ uses the term 'templates' for the same idea of type-parameterised classes and functions."
   },
   {
    "q": "Why does Python not need generics in the same way as Java?",
    "options": [
     "Python variables are not statically typed, so containers can already hold any type",
     "Python has no classes",
     "Python cannot store multiple types ever",
     "Python requires generics for every function"
    ],
    "answer": 0,
    "explain": "Since Python is dynamically typed, a plain list can hold any object type without a special generic syntax."
   }
  ]
 },
 "oop-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A design pattern is a proven, reusable solution to a recurring design problem. The Singleton pattern makes sure a class has exactly ONE instance across the whole program, and gives one global point to reach it."
    },
    {
     "type": "text",
     "text": "It is used for things that genuinely should be unique: one configuration manager, one connection pool, one logging service. Creating a second instance would cause conflicts or wasted resources."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Logger:\n    _instance = None\n\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\na = Logger()\nb = Logger()\nprint(a is b)   # True -- same object both times"
    },
    {
     "type": "tip",
     "text": "Exam-style question to expect: 'name one real situation where Singleton is appropriate.' Good answers: a single database connection pool, a single application settings object, a single hardware print spooler."
    },
    {
     "type": "text",
     "text": "Overusing Singleton is a known trap — it behaves like a hidden global variable, making code harder to test and reason about. Use it only when uniqueness is a genuine requirement, not as a shortcut to avoid passing objects around."
    }
   ],
   "recap": "The Singleton pattern guarantees a class has exactly one shared instance, useful for things like config managers and connection pools, but easy to overuse."
  },
  "quiz": [
   {
    "q": "What does the Singleton pattern guarantee?",
    "options": [
     "A class must have multiple parents",
     "A class has exactly one instance, shared everywhere",
     "A class can never be instantiated",
     "Every object gets its own unique instance"
    ],
    "answer": 1,
    "explain": "Singleton ensures only one object of that class ever exists, and every request returns that same object."
   },
   {
    "q": "Which is a sensible real use case for Singleton?",
    "options": [
     "A shopping cart item",
     "A single shared configuration manager",
     "Every button on a screen",
     "Every student record in a database"
    ],
    "answer": 1,
    "explain": "A configuration manager should genuinely be unique and shared, which is exactly what Singleton is designed for."
   },
   {
    "q": "What is a common criticism of overusing Singleton?",
    "options": [
     "It prevents any object creation",
     "It behaves like a hidden global variable, hurting testability",
     "It makes code compile faster",
     "It requires multiple inheritance"
    ],
    "answer": 1,
    "explain": "Overused Singletons act like global state, making unit tests and reasoning about code harder."
   }
  ]
 },
 "oop-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Factory pattern hides the details of object creation behind a separate method or class. Instead of client code writing new SpecificClass() directly, it asks a factory to build the right object, and the factory decides which class to instantiate."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Dog:\n    def speak(self): return \"Woof\"\nclass Cat:\n    def speak(self): return \"Meow\"\n\ndef animal_factory(kind):\n    if kind == \"dog\":\n        return Dog()\n    elif kind == \"cat\":\n        return Cat()\n    raise ValueError(\"Unknown kind\")\n\npet = animal_factory(\"cat\")\nprint(pet.speak())   # Meow"
    },
    {
     "type": "tip",
     "text": "The benefit shows up when new types are added later. Client code that calls animal_factory('bird') never needs to change; only the factory function needs a new branch, keeping the rest of the program untouched."
    },
    {
     "type": "text",
     "text": "This is an example of the wider idea of 'decoupling': the code that USES an object does not need to know the concrete class that CREATES it. That flexibility is one of the main reasons design patterns exist — they solve recurring problems of change and maintenance, not just of getting a program to run once."
    }
   ],
   "recap": "The Factory pattern centralises object creation in one place, so client code depends on a simple request, not on knowing every concrete class directly."
  },
  "quiz": [
   {
    "q": "What does the Factory pattern hide?",
    "options": [
     "The class's inheritance chain",
     "All method bodies in a class",
     "The details of which private variables exist",
     "The details of which concrete class gets instantiated"
    ],
    "answer": 3,
    "explain": "A factory decides internally which concrete class to build, so calling code doesn't need to know or choose directly."
   },
   {
    "q": "What is the main benefit when a new product type is added later?",
    "options": [
     "Only the factory needs a new branch; client code stays unchanged",
     "Every piece of client code must be rewritten",
     "The whole program must recompile from scratch",
     "There is no benefit"
    ],
    "answer": 0,
    "explain": "Because client code only calls the factory, adding a new type only requires updating the factory itself."
   },
   {
    "q": "The Factory pattern is an example of which broader idea?",
    "options": [
     "Tight coupling between client code and concrete classes",
     "Decoupling client code from concrete class creation",
     "Multiple inheritance",
     "Removing all classes from the program"
    ],
    "answer": 1,
    "explain": "Factory decouples the code that uses an object from the code that decides which class to create."
   }
  ]
 },
 "oop-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "SOLID is five guidelines for writing OOP code that stays easy to change as it grows. Each letter stands for one principle, and together they are among the most common interview questions on object-oriented design."
    },
    {
     "type": "text",
     "text": "S — Single Responsibility: a class should have only one reason to change, meaning it should do one job well. O — Open/Closed: a class should be open for extension (you can add new behaviour) but closed for modification (you shouldn't need to edit its existing, working code)."
    },
    {
     "type": "text",
     "text": "L — Liskov Substitution: a subclass object should be usable anywhere its parent is expected, without breaking the program. I — Interface Segregation: many small, specific interfaces are better than one giant interface that forces classes to implement methods they don't need. D — Dependency Inversion: depend on abstractions (interfaces) rather than on concrete classes directly."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Open/Closed example: add a new shape WITHOUT touching total_area\nclass Shape:\n    def area(self): raise NotImplementedError\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    def area(self): return 3.14 * self.r ** 2\nclass Square(Shape):\n    def __init__(self, s): self.s = s\n    def area(self): return self.s ** 2\n\ndef total_area(shapes):\n    return sum(s.area() for s in shapes)   # never needs editing for new shapes"
    },
    {
     "type": "tip",
     "text": "Memory aid for interviews: S-O-L-I-D = Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Being able to name and explain all five, with one example each, is a very common interview ask."
    }
   ],
   "recap": "SOLID is five design principles — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion — that keep object-oriented code maintainable as it grows."
  },
  "quiz": [
   {
    "q": "What does the 'S' in SOLID stand for?",
    "options": [
     "Structured programming",
     "Static typing",
     "Single Responsibility",
     "Simple inheritance"
    ],
    "answer": 2,
    "explain": "S stands for Single Responsibility: a class should have only one reason to change."
   },
   {
    "q": "The Open/Closed principle says a class should be...",
    "options": [
     "Open for modification, closed for extension",
     "Open for extension, closed for modification",
     "Open for both, with no rules",
     "Closed for both extension and modification"
    ],
    "answer": 1,
    "explain": "Open/Closed means you can extend a class's behaviour without editing its existing, tested code."
   },
   {
    "q": "The Liskov Substitution principle is about...",
    "options": [
     "Being able to use a subclass wherever the parent class is expected, safely",
     "Removing constructors from subclasses",
     "Static methods only",
     "Multiple inheritance rules"
    ],
    "answer": 0,
    "explain": "Liskov Substitution requires subclass objects to be safely substitutable for their parent type without breaking correctness."
   },
   {
    "q": "Dependency Inversion recommends depending on...",
    "options": [
     "Concrete classes directly",
     "Static attributes only",
     "Abstractions (interfaces), not concrete classes",
     "Global variables"
    ],
    "answer": 2,
    "explain": "Dependency Inversion favours coding against interfaces/abstractions rather than being tied to specific concrete classes."
   }
  ]
 },
 "oop-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "UML (Unified Modeling Language) class diagrams are a standard way to draw a class before, or while, you code it. A box is split into three parts: the class name on top, attributes in the middle, and methods at the bottom."
    },
    {
     "type": "text",
     "text": "Visibility symbols show access level: + means public, - means private, # means protected. So -balance means balance is a private attribute, and +deposit(amount) means deposit is a public method."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# UML box (as text):\n# --------------------\n# | Account            |\n# --------------------\n# | - balance: float   |\n# --------------------\n# | + deposit(amt)     |\n# | + withdraw(amt)    |\n# --------------------\n\nclass Account:\n    def __init__(self, balance=0):\n        self._balance = balance     # matches \"- balance\" in the diagram\n    def deposit(self, amt):\n        self._balance += amt        # matches \"+ deposit(amt)\""
    },
    {
     "type": "text",
     "text": "Relationships between classes are drawn as different arrows: a plain line means association (classes know about each other), a hollow-diamond line means aggregation (has-a, but parts can outlive the whole), a filled-diamond line means composition (has-a, parts die with the whole), and a hollow-triangle arrow means inheritance."
    },
    {
     "type": "tip",
     "text": "Exam favourite: aggregation vs composition arrows look nearly identical except for the diamond — hollow diamond (aggregation, parts survive independently, like a University and its Students) vs filled diamond (composition, parts cannot exist without the whole, like a House and its Rooms)."
    }
   ],
   "recap": "UML class diagrams show a class as name/attributes/methods with +/-/# visibility symbols, and connect classes with arrows for association, aggregation, composition, and inheritance."
  },
  "quiz": [
   {
    "q": "In a UML class diagram, what does a minus sign (-) before an attribute mean?",
    "options": [
     "It is private",
     "It is deprecated",
     "It is a static method",
     "It is public"
    ],
    "answer": 0,
    "explain": "The minus sign denotes private visibility in UML notation."
   },
   {
    "q": "Which UML relationship arrow represents inheritance?",
    "options": [
     "A dotted line only",
     "A filled-diamond line",
     "A hollow-triangle arrow",
     "A hollow-diamond line"
    ],
    "answer": 2,
    "explain": "Inheritance in UML is shown with a solid line ending in a hollow (unfilled) triangle pointing at the parent class."
   },
   {
    "q": "What distinguishes aggregation from composition in UML?",
    "options": [
     "There is no difference",
     "Aggregation always uses a triangle arrow",
     "Composition never appears in diagrams",
     "In composition the parts cannot exist without the whole; in aggregation they can"
    ],
    "answer": 3,
    "explain": "Composition (filled diamond) ties part lifetime to the whole; aggregation (hollow diamond) allows parts to exist independently."
   }
  ]
 },
 "oop-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Two ideas summarise almost everything good OOP design is trying to achieve: coupling and cohesion. Coupling measures how much one class depends on the internal details of another. Cohesion measures how focused a single class is on doing one clear job."
    },
    {
     "type": "text",
     "text": "The goal is LOW coupling and HIGH cohesion. Low coupling means you can change one class without breaking many others. High cohesion means a class's methods and attributes all clearly belong together, working toward one purpose."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Low cohesion / tightly coupled (bad): one class does everything and\n# reaches directly into another class's internals.\nclass ReportGenerator:\n    def __init__(self, db):\n        self.db = db\n    def build_and_email_and_log(self):\n        rows = self.db._raw_connection.execute(\"SELECT * FROM sales\")  # reaches into internals\n        # ...formats a report, sends an email, AND writes logs -- three jobs, one class\n\n# Higher cohesion / looser coupling (better): each class has one job,\n# and talks to others only through a clean public interface.\nclass SalesRepository:\n    def get_sales(self): ...\nclass ReportBuilder:\n    def build(self, sales): ...\nclass Mailer:\n    def send(self, report): ..."
    },
    {
     "type": "tip",
     "text": "This is the same thread running through every earlier idea: encapsulation lowers coupling by hiding internals; Single Responsibility raises cohesion; composition over inheritance keeps coupling loose; interfaces reduce coupling to a concrete class down to just its contract."
    },
    {
     "type": "text",
     "text": "Interviewers often ask you to critique a piece of code for coupling and cohesion rather than name a definition. A strong answer identifies exactly which class is doing too much (low cohesion) or reaching too deep into another class (high/tight coupling), then proposes splitting responsibilities or introducing an interface to fix it."
    }
   ],
   "recap": "Good OOP design aims for low coupling (classes depend on each other as little as possible) and high cohesion (each class has one clear, focused job) — the same goal behind encapsulation, SOLID, and composition over inheritance."
  },
  "quiz": [
   {
    "q": "What does 'high cohesion' mean for a class?",
    "options": [
     "Its methods and attributes are all focused on one clear purpose",
     "It cannot be inherited from",
     "It has the maximum possible number of methods",
     "It depends heavily on many other classes"
    ],
    "answer": 0,
    "explain": "High cohesion means everything inside the class works together toward a single, well-defined responsibility."
   },
   {
    "q": "What is the design goal regarding coupling?",
    "options": [
     "Minimize coupling, so classes depend on each other as little as possible",
     "Coupling has no effect on design quality",
     "Maximize coupling between all classes",
     "Coupling should always equal cohesion"
    ],
    "answer": 0,
    "explain": "Low coupling is desirable because it means changing one class is less likely to break unrelated classes."
   },
   {
    "q": "Which earlier OOP concept most directly helps LOWER coupling?",
    "options": [
     "Avoiding constructors",
     "Making all attributes public",
     "Writing one giant class for everything",
     "Encapsulation, by hiding internal details behind a clean interface"
    ],
    "answer": 3,
    "explain": "Encapsulation hides internals, so other classes depend only on a stable public interface, reducing coupling."
   },
   {
    "q": "A class whose single method both queries a database, formats a report, AND sends an email is an example of...",
    "options": [
     "Perfect encapsulation",
     "Low cohesion (it is doing multiple unrelated jobs)",
     "High cohesion",
     "Correct use of Singleton"
    ],
    "answer": 1,
    "explain": "Bundling several unrelated responsibilities into one class is the classic sign of low cohesion."
   }
  ]
 }
}
