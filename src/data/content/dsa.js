// Lesson text and quiz questions for "Data Structures & Algorithms".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "dsa-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A data structure is simply a way of organizing data in a computer's memory so you can use it efficiently. Think of your kitchen: spices in a rack, plates in a stack, cutlery in labeled slots. Each arrangement makes a certain job easy. Data structures do the same thing for information inside a program."
    },
    {
     "type": "text",
     "text": "An algorithm is a step-by-step recipe for doing a task, like a set of instructions to find a name in a phone book. Data structures store the data; algorithms are the steps that work on that data. Good programmers pick the right structure so their algorithms run fast and use little memory."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: choose the data structure first, then the algorithm often becomes obvious. The wrong container makes even a smart algorithm slow."
    },
    {
     "type": "text",
     "text": "Why does this matter? The same task can take a fraction of a second or several minutes depending on how the data is stored. For a computer-engineering student, mastering data structures is the difference between code that merely works and code that works at scale."
    }
   ],
   "recap": "Data structures organize data; algorithms are the steps that act on it. Picking the right structure makes programs fast and efficient."
  },
  "quiz": [
   {
    "q": "What is a data structure?",
    "options": [
     "A network protocol",
     "A programming language",
     "A way of organizing data in memory",
     "A type of computer chip"
    ],
    "answer": 2,
    "explain": "A data structure is a way of organizing and storing data so it can be used efficiently."
   },
   {
    "q": "How does an algorithm differ from a data structure?",
    "options": [
     "An algorithm is the step-by-step method; a data structure stores the data",
     "A data structure runs faster than an algorithm",
     "They are exactly the same thing",
     "An algorithm only works on images"
    ],
    "answer": 0,
    "explain": "An algorithm is the sequence of steps, while the data structure is how the data it works on is organized."
   },
   {
    "q": "Why does choosing the right data structure matter?",
    "options": [
     "It makes the screen brighter",
     "It has no real effect",
     "It changes the programming language",
     "It can make a program much faster and use less memory"
    ],
    "answer": 3,
    "explain": "The right data structure can dramatically improve speed and memory use for the same task."
   }
  ]
 },
 "dsa-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An array is a collection of items stored one after another in memory, where each item sits at a numbered position called an index. Indexes usually start at 0, so the first item is at index 0, the second at index 1, and so on. Picture a row of numbered lockers standing side by side."
    },
    {
     "type": "text",
     "text": "Because the items are lined up in a row and each is the same size, the computer can jump straight to any item using its index — no need to walk through the others first. This makes reading a known position extremely fast (constant time)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "nums = [10, 20, 30, 40]\nprint(nums[0])   # 10  (first element)\nprint(nums[2])   # 30  (third element)\nnums[1] = 99     # change the second element\nprint(nums)      # [10, 99, 30, 40]"
    },
    {
     "type": "tip",
     "text": "Off-by-one bugs are the #1 array mistake. An array of length 4 has valid indexes 0, 1, 2, 3 — index 4 is out of bounds."
    },
    {
     "type": "text",
     "text": "The trade-off: arrays are great for fast lookups but weak at inserting or deleting in the middle, because every item after the change must shift over to make or fill a gap. In many languages the size is also fixed when the array is created."
    }
   ],
   "recap": "Arrays store items in numbered slots for instant index access, but inserting or deleting in the middle is slow because elements must shift."
  },
  "quiz": [
   {
    "q": "In most languages, the first element of an array is at which index?",
    "options": [
     "-1",
     "0",
     "Depends on the array's length",
     "1"
    ],
    "answer": 1,
    "explain": "Array indexing typically starts at 0, so the first element is at index 0."
   },
   {
    "q": "What is arrays' biggest strength?",
    "options": [
     "Fast access to any element by its index",
     "Fast insertion in the middle",
     "Storing different-sized items easily",
     "Unlimited automatic resizing"
    ],
    "answer": 0,
    "explain": "Because elements are contiguous and evenly sized, an array can jump directly to any index in constant time."
   },
   {
    "q": "Why is inserting into the middle of an array slow?",
    "options": [
     "All later elements must shift to make room",
     "The index numbers get deleted",
     "Arrays cannot be changed at all",
     "It rewrites the whole program"
    ],
    "answer": 0,
    "explain": "Inserting in the middle forces every following element to shift over, which takes time proportional to the array size."
   },
   {
    "q": "For an array of length 4, which index is out of bounds?",
    "options": [
     "4",
     "2",
     "3",
     "0"
    ],
    "answer": 0,
    "explain": "Valid indexes for length 4 are 0 through 3, so index 4 is out of bounds."
   }
  ]
 },
 "dsa-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A linked list stores items in separate boxes called nodes, scattered anywhere in memory. Each node holds its data plus a pointer — the memory address of the next node. Follow the pointers from the first node (the head) and you visit every item in order, like a treasure hunt where each clue tells you where the next clue is."
    },
    {
     "type": "text",
     "text": "Unlike an array, the nodes are not lined up next to each other, so you cannot jump straight to position 5. You must start at the head and follow pointers one by one. That makes lookups slower than arrays."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None   # pointer to the next node\n\n# Build:  10 -> 20 -> None\nhead = Node(10)\nhead.next = Node(20)\nprint(head.data)        # 10\nprint(head.next.data)   # 20"
    },
    {
     "type": "tip",
     "text": "To insert a node, you just rewire two pointers — no shifting. That's why linked lists shine when you add or remove items often."
    },
    {
     "type": "text",
     "text": "Trade-off summary: arrays give fast index access but slow middle insertion; linked lists give fast insertion and deletion (once you're at the spot) but slow lookups and use extra memory for the pointers. Choosing between them depends on which operation you do most."
    }
   ],
   "recap": "A linked list chains nodes together with pointers, making insertion and deletion cheap but forcing you to walk from the head to reach any position."
  },
  "quiz": [
   {
    "q": "What does each node in a singly linked list contain?",
    "options": [
     "Data and a pointer to the next node",
     "Only data",
     "The whole array",
     "An index number"
    ],
    "answer": 0,
    "explain": "Each node stores its data plus a pointer (reference) to the next node in the chain."
   },
   {
    "q": "Why is reaching the 5th element of a linked list slower than in an array?",
    "options": [
     "Linked lists cannot hold 5 items",
     "The 5th element is always deleted",
     "Pointers reverse the order",
     "You must follow pointers from the head one by one"
    ],
    "answer": 3,
    "explain": "Nodes aren't contiguous, so you must traverse from the head following each pointer until you reach the position."
   },
   {
    "q": "What is a key advantage of a linked list over an array?",
    "options": [
     "Inserting or removing a node needs no shifting",
     "It is always faster for everything",
     "Instant access by index",
     "Uses less memory per item"
    ],
    "answer": 0,
    "explain": "Insertion and deletion just rewire pointers, so no elements need to be shifted."
   }
  ]
 },
 "dsa-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A stack is a collection where you add and remove items from only one end, called the top. The last item you put in is the first one you take out. This rule is called LIFO — Last In, First Out. Picture a stack of plates: you add a clean plate on top and take the top plate to use."
    },
    {
     "type": "text",
     "text": "A stack has two main operations: push (add an item to the top) and pop (remove the top item). A peek operation lets you look at the top item without removing it. All three are fast, constant-time actions."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "stack = []\nstack.append('a')   # push\nstack.append('b')   # push\nprint(stack[-1])    # peek -> 'b'\ntop = stack.pop()   # pop  -> 'b'\nprint(top, stack)   # b ['a']"
    },
    {
     "type": "tip",
     "text": "The browser Back button is a stack: each page you visit is pushed on; pressing Back pops the most recent one off."
    },
    {
     "type": "text",
     "text": "Stacks appear everywhere in computing: the call stack tracks which function is running, undo features reverse your most recent action first, and compilers use stacks to check that brackets are balanced. Whenever the newest item should be handled first, reach for a stack."
    }
   ],
   "recap": "A stack is LIFO — push and pop happen at one end, so the last item in is the first out. It powers undo, function calls, and bracket checking."
  },
  "quiz": [
   {
    "q": "A stack follows which ordering rule?",
    "options": [
     "Sorted order",
     "First In, First Out (FIFO)",
     "Random order",
     "Last In, First Out (LIFO)"
    ],
    "answer": 3,
    "explain": "A stack is LIFO: the most recently added item is the first one removed."
   },
   {
    "q": "Which operation removes the top item from a stack?",
    "options": [
     "push",
     "pop",
     "insert",
     "peek"
    ],
    "answer": 1,
    "explain": "pop removes and returns the item at the top of the stack."
   },
   {
    "q": "Which real-world feature works like a stack?",
    "options": [
     "A printer queue",
     "A line at a ticket counter",
     "The browser Back button",
     "A round-robin scheduler"
    ],
    "answer": 2,
    "explain": "The Back button pops the most recently visited page first, which is LIFO behavior."
   },
   {
    "q": "What does peek do?",
    "options": [
     "Returns the top item without removing it",
     "Reverses the stack",
     "Deletes the whole stack",
     "Adds an item to the bottom"
    ],
    "answer": 0,
    "explain": "peek lets you read the top item while leaving it on the stack."
   }
  ]
 },
 "dsa-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A queue is a collection where you add items at one end (the rear) and remove them from the other end (the front). The first item to arrive is the first to leave. This rule is FIFO — First In, First Out — exactly like a line of people waiting at a checkout counter."
    },
    {
     "type": "text",
     "text": "The two core operations are enqueue (add an item to the rear) and dequeue (remove the item at the front). This fairness — first come, first served — is what separates a queue from a stack."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from collections import deque\nq = deque()\nq.append('first')    # enqueue\nq.append('second')   # enqueue\nfront = q.popleft()  # dequeue -> 'first'\nprint(front, list(q))  # first ['second']"
    },
    {
     "type": "tip",
     "text": "Use collections.deque, not a plain list, for queues in Python — popleft() is fast, while list.pop(0) is slow because it shifts every element."
    },
    {
     "type": "text",
     "text": "Queues model any first-come-first-served system: print jobs, tasks waiting for a CPU, messages between services, and the breadth-first search of graphs and trees. Whenever order of arrival must be respected, a queue is the natural fit."
    }
   ],
   "recap": "A queue is FIFO — enqueue at the rear, dequeue at the front, so the first item in is the first out. It models fair, first-come-first-served processing."
  },
  "quiz": [
   {
    "q": "A queue follows which ordering rule?",
    "options": [
     "Last In, First Out (LIFO)",
     "Highest value first",
     "First In, First Out (FIFO)",
     "No particular order"
    ],
    "answer": 2,
    "explain": "A queue is FIFO: the first item added is the first one removed."
   },
   {
    "q": "Which pair of operations belongs to a queue?",
    "options": [
     "sort and search",
     "enqueue and dequeue",
     "push and pop",
     "peek and top"
    ],
    "answer": 1,
    "explain": "Enqueue adds to the rear and dequeue removes from the front of a queue."
   },
   {
    "q": "Which everyday situation behaves like a queue?",
    "options": [
     "A stack of plates",
     "A pile of books",
     "A line of people at a checkout",
     "The undo button"
    ],
    "answer": 2,
    "explain": "A checkout line serves people first-come-first-served, which is FIFO like a queue."
   },
   {
    "q": "In Python, why prefer deque over a plain list for a queue?",
    "options": [
     "deque uses more memory on purpose",
     "Lists cannot store strings",
     "deque cannot be modified",
     "list.pop(0) is slow because it shifts all elements"
    ],
    "answer": 3,
    "explain": "Removing from the front of a list shifts every remaining element, while deque.popleft() is fast."
   }
  ]
 },
 "dsa-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A hash table stores key-value pairs and lets you look up a value by its key almost instantly. The secret is a hash function: it takes a key (like a word) and turns it into a number that tells you which slot in an underlying array to use. Instead of searching, you compute the location directly."
    },
    {
     "type": "text",
     "text": "Analogy: a coat check. You hand over a coat and get a numbered tag. Later you show the tag and the attendant goes straight to that slot — no searching through every coat. The hash function is what turns your item into that slot number."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "phone = {}                # a hash table (dict)\nphone['alice'] = 5551234  # insert\nphone['bob']   = 5559876\nprint(phone['alice'])     # 5551234  (near-instant lookup)\nprint('bob' in phone)     # True"
    },
    {
     "type": "text",
     "text": "Sometimes two different keys hash to the same slot — that's a collision. Hash tables handle it, for example by keeping a small list of entries in each slot (chaining). As long as collisions are rare, insert, lookup, and delete all run in about constant time on average."
    },
    {
     "type": "tip",
     "text": "Hash tables are unordered. If you need items sorted or in insertion order, a hash table alone won't give you that — use a different structure or sort afterward."
    }
   ],
   "recap": "A hash table uses a hash function to map keys directly to slots, giving near-instant average-case insert, lookup, and delete — at the cost of ordering and occasional collisions."
  },
  "quiz": [
   {
    "q": "What does a hash function do?",
    "options": [
     "Converts a key into a slot number",
     "Encrypts the whole table permanently",
     "Counts how many keys exist",
     "Sorts the keys alphabetically"
    ],
    "answer": 0,
    "explain": "A hash function maps a key to an index in the underlying array so the value can be found directly."
   },
   {
    "q": "What is the average-case time to look up a value in a hash table?",
    "options": [
     "Constant time",
     "Proportional to the number of items",
     "Proportional to the square of the items",
     "Always the slowest option"
    ],
    "answer": 0,
    "explain": "With few collisions, a hash table computes the slot directly, giving average constant-time lookup."
   },
   {
    "q": "What is a collision in hashing?",
    "options": [
     "Two programs running at once",
     "When the table runs out of memory",
     "When two keys map to the same slot",
     "When a key is deleted twice"
    ],
    "answer": 2,
    "explain": "A collision happens when the hash function maps two different keys to the same slot."
   },
   {
    "q": "Which is a limitation of a plain hash table?",
    "options": [
     "It can hold only one key",
     "It cannot store strings",
     "Lookups are always slow",
     "It does not keep items in sorted order"
    ],
    "answer": 3,
    "explain": "Hash tables are unordered, so they don't maintain keys in sorted or insertion order by themselves."
   }
  ]
 },
 "dsa-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A tree is a structure that branches like a family tree. It starts at a single root node, and each node can have child nodes below it. Nodes with no children are called leaves. Trees are perfect for hierarchical data such as folders inside folders or an organization chart."
    },
    {
     "type": "text",
     "text": "A Binary Search Tree (BST) is a special tree where every node has at most two children — left and right — and follows one rule: everything in a node's left subtree is smaller than the node, and everything in the right subtree is larger. This ordering is what makes searching fast."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef search(node, target):\n    if node is None or node.val == target:\n        return node\n    if target < node.val:\n        return search(node.left, target)   # go left if smaller\n    return search(node.right, target)      # go right if larger"
    },
    {
     "type": "text",
     "text": "Because you go left or right at each step, a search throws away half the remaining nodes each time — like finding a name in a phone book by always opening to the middle. In a balanced BST that means about log-n steps, far fewer than checking every node."
    },
    {
     "type": "tip",
     "text": "Watch out: if you insert already-sorted data into a plain BST, it degrades into a long chain (like a linked list) and loses its speed. Self-balancing trees such as AVL or Red-Black trees fix this."
    }
   ],
   "recap": "A BST keeps smaller values on the left and larger on the right, so each comparison halves the search space — but it must stay balanced to keep that log-n speed."
  },
  "quiz": [
   {
    "q": "In a Binary Search Tree, where do values smaller than a node go?",
    "options": [
     "At the root only",
     "They are deleted",
     "In its right subtree",
     "In its left subtree"
    ],
    "answer": 3,
    "explain": "In a BST, all values smaller than a node are placed in its left subtree."
   },
   {
    "q": "What is the topmost node of a tree called?",
    "options": [
     "The branch",
     "The pointer",
     "The root",
     "The leaf"
    ],
    "answer": 2,
    "explain": "A tree begins at a single top node called the root."
   },
   {
    "q": "Why is searching a balanced BST fast?",
    "options": [
     "It sorts the data on every search",
     "It checks every node twice",
     "It uses no comparisons at all",
     "Each comparison discards about half the remaining nodes"
    ],
    "answer": 3,
    "explain": "Going left or right at each node halves the search space, giving about log-n steps."
   },
   {
    "q": "What happens if you insert already-sorted data into a plain BST?",
    "options": [
     "It degrades into a long chain like a linked list",
     "It becomes faster than a hash table",
     "It stays perfectly balanced",
     "It refuses the insertions"
    ],
    "answer": 0,
    "explain": "Sorted inserts make each new node hang off one side, turning the BST into a slow chain."
   }
  ]
 },
 "dsa-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Searching means finding whether (and where) an item exists in a collection. The simplest method is linear search: start at the first item and check each one in turn until you find the target or reach the end. It works on any list, sorted or not."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def linear_search(arr, target):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            return i      # found at index i\n    return -1             # not found"
    },
    {
     "type": "text",
     "text": "Binary search is much faster but has one requirement: the data must already be sorted. It checks the middle item; if that's the target, done. If the target is smaller, it repeats on the left half; if larger, on the right half. Each step throws away half the remaining items."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            low = mid + 1     # search right half\n        else:\n            high = mid - 1    # search left half\n    return -1"
    },
    {
     "type": "tip",
     "text": "Guessing a number between 1 and 100 in at most 7 tries by always guessing the middle IS binary search. Linear search would take up to 100 tries."
    },
    {
     "type": "text",
     "text": "The takeaway: linear search is simple and works everywhere but slows down as the list grows. Binary search is dramatically faster on large sorted data because it halves the problem each step — the reason keeping data sorted is often worth the effort."
    }
   ],
   "recap": "Linear search checks items one by one on any list; binary search halves a sorted list each step, making it far faster on large data."
  },
  "quiz": [
   {
    "q": "What must be true before you can use binary search?",
    "options": [
     "The list must contain numbers only",
     "The list must be a linked list",
     "The list must be empty",
     "The list must be sorted"
    ],
    "answer": 3,
    "explain": "Binary search relies on order, so the data must already be sorted."
   },
   {
    "q": "How does binary search speed things up?",
    "options": [
     "It skips the whole list",
     "It eliminates half the remaining items each step",
     "It checks each item twice",
     "It sorts as it searches"
    ],
    "answer": 1,
    "explain": "By comparing to the middle element, binary search discards half the candidates every step."
   },
   {
    "q": "Which search works on an unsorted list?",
    "options": [
     "Both equally well",
     "Neither one",
     "Binary search",
     "Linear search"
    ],
    "answer": 3,
    "explain": "Linear search checks each element in turn, so it works regardless of order."
   },
   {
    "q": "What does linear_search return when the target isn't found?",
    "options": [
     "0",
     "-1",
     "None of the list",
     "The last index"
    ],
    "answer": 1,
    "explain": "The shown linear_search returns -1 to signal the target was not found."
   }
  ]
 },
 "dsa-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sorting arranges items in order, and it's one of the most common tasks in computing. Two classic algorithms show how design choices affect speed. Bubble sort repeatedly walks through the list, swapping neighbors that are out of order, so big values 'bubble' to the end. It's easy to understand but slow."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - 1 - i):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # swap\n    return arr"
    },
    {
     "type": "text",
     "text": "Merge sort is a smarter divide-and-conquer method: split the list in half, sort each half (by splitting further), then merge the two sorted halves back together. This structured splitting is far faster on large inputs than bubble sort's repeated scanning."
    },
    {
     "type": "text",
     "text": "To compare algorithms fairly we use Big-O notation, which describes how the running time grows as the input size n grows — ignoring hardware and exact constants. Bubble sort is O(n^2): double the data and it takes roughly four times as long. Merge sort is O(n log n), which grows far more gently."
    },
    {
     "type": "tip",
     "text": "Quick ranking from fastest-growing to slowest: O(1) constant, O(log n), O(n), O(n log n), O(n^2), O(2^n). Lower on this list means it scales worse. Aim for the smallest Big-O you can."
    },
    {
     "type": "text",
     "text": "Big-O focuses on the worst-case trend for large n, not tiny inputs. For 10 items bubble sort is fine; for 10 million, the difference between O(n^2) and O(n log n) is the difference between seconds and hours. Thinking in Big-O is how engineers write code that scales."
    }
   ],
   "recap": "Bubble sort is simple but O(n^2); merge sort divides and conquers at O(n log n). Big-O notation describes how running time grows with input size, guiding you toward code that scales."
  },
  "quiz": [
   {
    "q": "What is the time complexity of bubble sort?",
    "options": [
     "O(1)",
     "O(n log n)",
     "O(log n)",
     "O(n^2)"
    ],
    "answer": 3,
    "explain": "Bubble sort compares and swaps in nested loops, giving quadratic O(n^2) time."
   },
   {
    "q": "What does Big-O notation describe?",
    "options": [
     "The exact seconds a program runs",
     "The color of the output",
     "How running time grows as input size grows",
     "How much disk a file uses"
    ],
    "answer": 2,
    "explain": "Big-O expresses how an algorithm's cost scales with input size, ignoring constants and hardware."
   },
   {
    "q": "Which strategy does merge sort use?",
    "options": [
     "Random shuffling until sorted",
     "Checking one element only",
     "Divide and conquer: split, sort halves, then merge",
     "Swapping every adjacent pair repeatedly"
    ],
    "answer": 2,
    "explain": "Merge sort splits the list, sorts each half, and merges them, achieving O(n log n)."
   },
   {
    "q": "For very large inputs, which complexity is better?",
    "options": [
     "They are all identical",
     "O(n log n)",
     "O(n^2)",
     "O(2^n)"
    ],
    "answer": 1,
    "explain": "O(n log n) grows much more slowly than O(n^2) or O(2^n), so it scales far better."
   }
  ]
 },
 "dsa-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs two parts: a base case that stops the calls, and a recursive case that breaks the problem down and calls the function again."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def factorial(n):\n    if n == 0:          # base case\n        return 1\n    return n * factorial(n - 1)   # recursive case\n\nprint(factorial(5))   # 120"
    },
    {
     "type": "text",
     "text": "Each call to factorial waits for the call below it to finish, so the calls stack up: factorial(5) waits for factorial(4), which waits for factorial(3), and so on down to factorial(0). This chain of waiting calls is called the call stack, and it uses memory — one frame per pending call."
    },
    {
     "type": "text",
     "text": "Without a base case, a recursive function calls itself forever, until it runs out of stack memory and crashes with a 'stack overflow' error. Getting the base case right is the single most important part of writing recursion."
    },
    {
     "type": "tip",
     "text": "When you're stuck writing recursion, ask two questions: what is the smallest case I can answer directly (base case), and how do I shrink the problem toward that case (recursive case)? Trust that the smaller call already works — that's the recursive leap of faith."
    },
    {
     "type": "text",
     "text": "Recursion often mirrors how we naturally define a problem, like 'the sum of a list is its first item plus the sum of the rest.' Many data structures you've already seen, like trees, are naturally recursive too — a tree is a node plus smaller trees."
    }
   ],
   "recap": "Recursion solves a problem by calling itself on a smaller case, always needing a base case to stop; each call sits on the call stack until it returns."
  },
  "quiz": [
   {
    "q": "What two parts must every recursive function have?",
    "options": [
     "A loop and a variable",
     "An input and an output",
     "A base case and a recursive case",
     "An array and a pointer"
    ],
    "answer": 2,
    "explain": "A base case stops the recursion and a recursive case breaks the problem into a smaller one."
   },
   {
    "q": "What happens if a recursive function has no base case?",
    "options": [
     "It returns 0 automatically",
     "It calls itself forever and crashes with a stack overflow",
     "It becomes iterative",
     "It runs faster"
    ],
    "answer": 1,
    "explain": "With no stopping point, the calls never stop stacking up until memory runs out."
   },
   {
    "q": "Where do pending recursive calls get stored while they wait?",
    "options": [
     "The heap",
     "A linked list",
     "A hash table",
     "The call stack"
    ],
    "answer": 3,
    "explain": "Each call waits on the call stack for the call below it to return."
   },
   {
    "q": "In factorial(n), what is the base case?",
    "options": [
     "There is no base case",
     "n == 1000",
     "n is negative",
     "n == 0"
    ],
    "answer": 3,
    "explain": "factorial(0) returns 1 directly without calling itself again, stopping the recursion."
   }
  ]
 },
 "dsa-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Quick sort is another divide-and-conquer sort, and in practice it's usually the fastest general-purpose sort. It picks one element as the 'pivot', moves everything smaller than the pivot to its left and everything larger to its right, then recursively sorts each side."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left  = [x for x in arr if x < pivot]\n    mid   = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + mid + quick_sort(right)"
    },
    {
     "type": "text",
     "text": "Quick sort's average case is O(n log n), same as merge sort, but it does the work in place with less extra memory, which is why it's the default sort in many languages. Its worst case is O(n^2), which happens if you keep picking a bad pivot (like always the smallest element on an already-sorted list)."
    },
    {
     "type": "text",
     "text": "Heap sort takes a different route: it builds a heap (a tree-shaped structure where every parent is bigger than its children, called a max-heap), repeatedly pulls out the biggest element, and places it at the end. It's O(n log n) in every case, with no bad-luck worst case, but it's usually a bit slower in practice than quick sort."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: quick sort — average O(n log n), worst O(n^2), in-place. Merge sort — always O(n log n), needs extra memory. Heap sort — always O(n log n), in-place, no worst-case surprise."
    },
    {
     "type": "text",
     "text": "Choosing a sort is a trade-off: quick sort for typical speed, merge sort when you need guaranteed performance and stability (equal elements keep their original order), heap sort when you need guaranteed performance without extra memory."
    }
   ],
   "recap": "Quick sort partitions around a pivot for fast average-case O(n log n) sorting; heap sort uses a max-heap for a guaranteed O(n log n) with no worst case."
  },
  "quiz": [
   {
    "q": "What does quick sort use to split the array?",
    "options": [
     "A pivot element",
     "A linked list",
     "A hash function",
     "The middle index only"
    ],
    "answer": 0,
    "explain": "Quick sort picks a pivot and partitions the array into smaller and larger elements around it."
   },
   {
    "q": "What is quick sort's worst-case time complexity?",
    "options": [
     "O(log n)",
     "O(n^2)",
     "O(n log n)",
     "O(1)"
    ],
    "answer": 1,
    "explain": "A consistently bad pivot choice makes quick sort degrade to quadratic time."
   },
   {
    "q": "What structure does heap sort rely on?",
    "options": [
     "A stack",
     "A queue",
     "A hash table",
     "A max-heap (or min-heap)"
    ],
    "answer": 3,
    "explain": "Heap sort repeatedly removes the largest element from a heap and places it at the end."
   },
   {
    "q": "Which sort guarantees O(n log n) in every case, unlike quick sort?",
    "options": [
     "Heap sort",
     "Bubble sort",
     "Insertion sort",
     "Selection sort"
    ],
    "answer": 0,
    "explain": "Heap sort's O(n log n) holds in the best, average, and worst case, unlike quick sort."
   }
  ]
 },
 "dsa-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You've already met binary search trees. Traversal means visiting every node in a tree in some order, and the order you pick changes what you get out of it. The three classic depth-first orders are named by when you visit the current node relative to its children."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def in_order(node):\n    if node:\n        in_order(node.left)\n        print(node.value, end=' ')\n        in_order(node.right)\n\ndef pre_order(node):\n    if node:\n        print(node.value, end=' ')\n        pre_order(node.left)\n        pre_order(node.right)\n\ndef post_order(node):\n    if node:\n        post_order(node.left)\n        post_order(node.right)\n        print(node.value, end=' ')"
    },
    {
     "type": "text",
     "text": "In-order visits left, then the node, then right — on a binary search tree this prints values in sorted order, which is why it's the one used most often. Pre-order visits the node first, useful for copying a tree's structure. Post-order visits the node last, useful for deleting a tree safely (children before parent)."
    },
    {
     "type": "text",
     "text": "There's also a breadth-first order called level-order traversal: visit all nodes at depth 0, then all at depth 1, then depth 2, and so on. Unlike the other three (which use recursion and the call stack), level-order traversal uses a queue to keep track of which node to visit next."
    },
    {
     "type": "tip",
     "text": "Memory aid: in-order, pre-order, and post-order all refer to WHEN you print the current node relative to its two children — before both (pre), between them (in), or after both (post)."
    },
    {
     "type": "text",
     "text": "Traversal questions are a favorite in exams and interviews: given a tree, write out its in-order, pre-order, and post-order sequences, or go the other way — reconstruct a tree from two of those sequences."
    }
   ],
   "recap": "In-order, pre-order, and post-order are depth-first tree visits distinguished by when the current node is printed; level-order is a breadth-first visit using a queue."
  },
  "quiz": [
   {
    "q": "What order does in-order traversal print a binary search tree's values in?",
    "options": [
     "Sorted order",
     "Level by level",
     "Random order",
     "Reverse sorted order"
    ],
    "answer": 0,
    "explain": "In-order visits left subtree, node, then right subtree, which prints BST values from smallest to largest."
   },
   {
    "q": "Which traversal visits the node before its children?",
    "options": [
     "Level-order",
     "In-order",
     "Post-order",
     "Pre-order"
    ],
    "answer": 3,
    "explain": "Pre-order prints the current node first, then recurses into left and right."
   },
   {
    "q": "What data structure does level-order traversal use?",
    "options": [
     "A heap",
     "A queue",
     "A stack",
     "A hash table"
    ],
    "answer": 1,
    "explain": "Level-order traversal processes nodes breadth-first, adding children to a queue as it goes."
   },
   {
    "q": "Which traversal is most useful for safely deleting a tree, node by node?",
    "options": [
     "Pre-order",
     "Level-order",
     "In-order",
     "Post-order"
    ],
    "answer": 3,
    "explain": "Post-order visits both children before the parent, so children can be freed before the parent is removed."
   }
  ]
 },
 "dsa-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A heap is a tree-shaped structure with one rule: in a max-heap, every parent is greater than or equal to its children (in a min-heap, every parent is smaller). This doesn't fully sort the data, but it guarantees the largest (or smallest) item is always at the root, ready to grab instantly."
    },
    {
     "type": "text",
     "text": "A priority queue is the abstract idea of 'always serve the most important item first', and a heap is the standard way to build one efficiently. Inserting a new item or removing the top item both take O(log n) time, because the heap only needs to fix one path from root to leaf, not the whole structure."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import heapq\n\npq = []\nheapq.heappush(pq, 5)\nheapq.heappush(pq, 1)\nheapq.heappush(pq, 3)\n\nprint(heapq.heappop(pq))   # 1  (smallest first, min-heap)\nprint(heapq.heappop(pq))   # 3"
    },
    {
     "type": "text",
     "text": "Priority queues show up constantly: an OS scheduler picking the next process to run, a hospital ranking patients by urgency, or an algorithm like Dijkstra's shortest path always expanding the closest unvisited node next. Whenever 'always process the most urgent item next' shows up, a heap is usually the right tool."
    },
    {
     "type": "tip",
     "text": "Heap sort from the last level literally works by building a max-heap and popping the root repeatedly — that's the connection between heaps and sorting."
    },
    {
     "type": "text",
     "text": "A heap is usually stored in a plain array, not with explicit tree pointers: for a node at index i, its children sit at 2i+1 and 2i+2. This makes heaps compact and cache-friendly compared to linked tree structures."
    }
   ],
   "recap": "A heap keeps the largest (or smallest) item at the root for O(log n) insert and remove, making it the standard engine behind a priority queue."
  },
  "quiz": [
   {
    "q": "In a min-heap, where is the smallest element always found?",
    "options": [
     "At a leaf",
     "At the root",
     "It could be anywhere",
     "In the middle"
    ],
    "answer": 1,
    "explain": "A min-heap keeps its smallest value at the root by definition."
   },
   {
    "q": "What is the time complexity of inserting into a heap of size n?",
    "options": [
     "O(n)",
     "O(1)",
     "O(n^2)",
     "O(log n)"
    ],
    "answer": 3,
    "explain": "Insertion only needs to fix a single path from the new node up to the root, which is O(log n)."
   },
   {
    "q": "What abstract idea does a heap usually implement?",
    "options": [
     "A stack",
     "A hash table",
     "A linked list",
     "A priority queue"
    ],
    "answer": 3,
    "explain": "A priority queue always serves the highest-priority item first, and a heap is the efficient way to build one."
   },
   {
    "q": "In an array-based heap, where are the children of the node at index i?",
    "options": [
     "2i+1 and 2i+2",
     "i/2 and i/2+1",
     "i-1 and i+1",
     "i*2 and i*2+1"
    ],
    "answer": 0,
    "explain": "The standard array-heap layout places a node's children at indices 2i+1 and 2i+2."
   }
  ]
 },
 "dsa-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A graph is a set of nodes (called vertices) connected by links (called edges). Trees are actually a special kind of graph. Graphs are more general: any node can connect to any number of others, and connections can even form cycles. A social network, a road map, and the internet are all graphs."
    },
    {
     "type": "text",
     "text": "Edges can be directed (a one-way link, like 'follows' on social media) or undirected (a two-way link, like a friendship). Edges can also be weighted, carrying a number such as distance or cost — useful for a road map where the weight is travel time."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# adjacency list: each vertex lists its neighbors\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A'],\n    'D': ['B']\n}\n\n# adjacency matrix: a grid, 1 if an edge exists\n#     A  B  C  D\n# A [ 0, 1, 1, 0 ]\n# B [ 1, 0, 0, 1 ]\n# C [ 1, 0, 0, 0 ]\n# D [ 0, 1, 0, 0 ]"
    },
    {
     "type": "text",
     "text": "An adjacency list stores, for each vertex, just its actual neighbors — this is memory-efficient for sparse graphs (few edges) and is the more common choice. An adjacency matrix stores a full grid of 0s and 1s (or weights), which makes checking 'is there an edge between X and Y' instant, but wastes memory when most pairs aren't connected."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: adjacency list for most real graphs (sparse, many vertices); adjacency matrix when the graph is dense or you need O(1) edge lookups and vertex count is small."
    },
    {
     "type": "text",
     "text": "Two structural terms you'll see often: a path is a sequence of edges connecting two vertices, and a cycle is a path that comes back to where it started. A graph with no cycles at all is called acyclic — a tree is simply a connected, acyclic graph."
    }
   ],
   "recap": "A graph generalizes a tree into vertices connected by directed or undirected, possibly weighted, edges — stored as an adjacency list (memory-efficient) or an adjacency matrix (fast lookups)."
  },
  "quiz": [
   {
    "q": "What is a tree, in graph terms?",
    "options": [
     "A connected, acyclic graph",
     "A graph with weighted edges only",
     "A graph with only directed edges",
     "A graph with no vertices"
    ],
    "answer": 0,
    "explain": "A tree is exactly a connected graph that has no cycles."
   },
   {
    "q": "Which representation is more memory-efficient for a sparse graph?",
    "options": [
     "Neither can represent sparse graphs",
     "Both use the same memory",
     "Adjacency matrix",
     "Adjacency list"
    ],
    "answer": 3,
    "explain": "An adjacency list only stores actual edges, so it scales with the number of edges rather than vertices squared."
   },
   {
    "q": "What does a weighted edge represent?",
    "options": [
     "A duplicate vertex",
     "A number attached to the edge, like cost or distance",
     "A direction only",
     "A missing connection"
    ],
    "answer": 1,
    "explain": "A weight attaches extra information to an edge, such as travel time or cost."
   },
   {
    "q": "What is a cycle in a graph?",
    "options": [
     "A vertex with no edges",
     "An edge with a negative weight",
     "A graph with two components",
     "A path that returns to its starting vertex"
    ],
    "answer": 3,
    "explain": "A cycle is formed when following a path eventually leads back to the vertex you started from."
   }
  ]
 },
 "dsa-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Just like trees, graphs need a systematic way to visit every vertex. The two fundamental methods are breadth-first search (BFS) and depth-first search (DFS), and both need to track which vertices have already been visited so they don't loop forever around a cycle."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def bfs(graph, start):\n    visited = {start}\n    queue = [start]\n    order = []\n    while queue:\n        node = queue.pop(0)\n        order.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    return order"
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    order = [start]\n    for neighbor in graph[start]:\n        if neighbor not in visited:\n            order += dfs(graph, neighbor, visited)\n    return order"
    },
    {
     "type": "text",
     "text": "BFS explores level by level, using a queue, visiting all of a vertex's neighbors before going further out — this makes it perfect for finding the shortest path in an unweighted graph, since the first time you reach a vertex is guaranteed to be via the fewest edges. DFS dives as deep as possible down one path before backtracking, using a stack (or recursion, which is really the same thing)."
    },
    {
     "type": "tip",
     "text": "Remember it by the data structure: BFS = Queue (First In First Out, spreads out evenly), DFS = Stack (Last In First Out, plunges deep). Both are O(V + E), visiting every vertex and edge once."
    },
    {
     "type": "text",
     "text": "Both traversals are building blocks for bigger algorithms: BFS underlies shortest-path and 'minimum number of steps' problems, while DFS underlies cycle detection, topological sorting, and finding connected components."
    }
   ],
   "recap": "BFS uses a queue to explore level by level (best for shortest paths in unweighted graphs), while DFS uses a stack or recursion to explore deeply before backtracking; both run in O(V + E)."
  },
  "quiz": [
   {
    "q": "What data structure does BFS use to decide which vertex to visit next?",
    "options": [
     "A heap",
     "A hash table",
     "A queue",
     "A stack"
    ],
    "answer": 2,
    "explain": "BFS uses a queue, which visits vertices in the order they were discovered, spreading out level by level."
   },
   {
    "q": "Which traversal is guaranteed to find the shortest path in an unweighted graph?",
    "options": [
     "Neither guarantees it",
     "Both equally",
     "BFS",
     "DFS"
    ],
    "answer": 2,
    "explain": "Because BFS visits closer vertices first, the first time it reaches a vertex is via the fewest edges."
   },
   {
    "q": "What is the time complexity of both BFS and DFS on a graph with V vertices and E edges?",
    "options": [
     "O(V)",
     "O(V + E)",
     "O(V * E)",
     "O(E)"
    ],
    "answer": 1,
    "explain": "Both traversals visit every vertex once and examine every edge once, giving O(V + E)."
   },
   {
    "q": "Why does graph traversal need a 'visited' set that trees don't strictly need?",
    "options": [
     "Graphs have no root",
     "Trees don't have vertices",
     "Graphs are always directed",
     "Graphs can contain cycles, which would loop forever otherwise"
    ],
    "answer": 3,
    "explain": "A cycle could send the traversal back to a vertex it already visited, causing an infinite loop without tracking visited nodes."
   }
  ]
 },
 "dsa-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A binary search tree gives O(log n) search, insert, and delete — but only if it's balanced. If you insert already-sorted data into a plain BST, it degrades into a straight line (essentially a linked list), and every operation slows down to O(n)."
    },
    {
     "type": "text",
     "text": "An AVL tree (named after its inventors, Adelson-Velsky and Landis) is a self-balancing BST: after every insert or delete, it checks the 'balance factor' of each node — the height difference between its left and right subtree. If that difference ever exceeds 1, the tree performs a rotation to restore balance."
    },
    {
     "type": "text",
     "text": "A rotation is a local rearrangement of a few nodes that fixes the imbalance without breaking the BST ordering rule (left child smaller, right child bigger). There are four rotation cases — left, right, left-right, and right-left — but the goal is always the same: shrink the taller side by one level."
    },
    {
     "type": "tip",
     "text": "You don't need to hand-trace every rotation case for an exam, but remember the headline fact: AVL trees guarantee height stays O(log n), which is why search, insert, and delete stay O(log n) even in the worst case — unlike a plain BST."
    },
    {
     "type": "text",
     "text": "Other self-balancing trees exist too, like Red-Black trees (used inside many language libraries, including C++'s map and Java's TreeMap) — they balance more loosely than AVL, giving slightly slower lookups but faster inserts, which is often a better trade-off in practice."
    }
   ],
   "recap": "A plain BST can degrade to O(n) on sorted input; an AVL tree fixes this by rotating after every insert/delete to keep the tree height O(log n), guaranteeing fast operations."
  },
  "quiz": [
   {
    "q": "What happens to a plain BST if you insert already-sorted data?",
    "options": [
     "It stays perfectly balanced",
     "It rejects the input",
     "It automatically becomes a heap",
     "It degrades into a line, like a linked list"
    ],
    "answer": 3,
    "explain": "Sorted insertions always go the same direction, producing a skewed tree with O(n) height."
   },
   {
    "q": "What does an AVL tree do to stay balanced?",
    "options": [
     "It sorts all values every insert",
     "It performs rotations when a node's balance factor exceeds 1",
     "It converts to an array",
     "It deletes random nodes"
    ],
    "answer": 1,
    "explain": "AVL trees check balance factors after each change and rotate to restore balance."
   },
   {
    "q": "What time complexity do search, insert, and delete keep in an AVL tree, even worst case?",
    "options": [
     "O(1)",
     "O(n)",
     "O(log n)",
     "O(n^2)"
    ],
    "answer": 2,
    "explain": "By keeping height O(log n) through rotations, AVL trees guarantee O(log n) operations."
   },
   {
    "q": "Which real-world structure commonly uses a self-balancing tree similar to AVL?",
    "options": [
     "A bubble-sorted list",
     "A basic queue",
     "Java's TreeMap / C++'s map, using Red-Black trees",
     "A simple array"
    ],
    "answer": 2,
    "explain": "Many standard library ordered maps are implemented with Red-Black trees, a relative of AVL trees."
   }
  ]
 },
 "dsa-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Dynamic programming (DP) speeds up problems that have overlapping subproblems — the same smaller calculation needed again and again. Instead of recomputing it every time, DP stores the answer once and reuses it. The classic example is computing Fibonacci numbers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# naive recursion recomputes fib(2) many times - slow, O(2^n)\ndef fib_slow(n):\n    if n <= 1:\n        return n\n    return fib_slow(n - 1) + fib_slow(n - 2)\n\n# DP with memoization stores each answer once - O(n)\ndef fib_fast(n, memo={}):\n    if n <= 1:\n        return n\n    if n not in memo:\n        memo[n] = fib_fast(n - 1, memo) + fib_fast(n - 2, memo)\n    return memo[n]"
    },
    {
     "type": "text",
     "text": "There are two ways to apply DP. Top-down (memoization) keeps the natural recursive structure but caches results in a dictionary or array, like fib_fast above. Bottom-up (tabulation) instead builds a table of answers starting from the smallest subproblem up to the final answer, usually with a simple loop and no recursion at all."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# bottom-up tabulation for fibonacci\ndef fib_table(n):\n    table = [0, 1]\n    for i in range(2, n + 1):\n        table.append(table[i - 1] + table[i - 2])\n    return table[n]"
    },
    {
     "type": "tip",
     "text": "To spot a DP problem, look for two signs: overlapping subproblems (the same smaller case keeps coming up) and optimal substructure (the best overall answer is built from the best answers to subproblems). Classic DP problems: 0/1 Knapsack, Longest Common Subsequence, and coin change."
    },
    {
     "type": "text",
     "text": "DP trades memory for time: fib_fast uses a dictionary to avoid recomputation, turning an exponential O(2^n) algorithm into a linear O(n) one. This trade-off — spend a little extra memory to skip repeated work — is the core idea behind nearly every DP solution."
    }
   ],
   "recap": "Dynamic programming speeds up problems with overlapping subproblems by storing answers once, either top-down with memoization or bottom-up with a table, turning exponential recursion into linear or polynomial time."
  },
  "quiz": [
   {
    "q": "What two properties make a problem a good fit for dynamic programming?",
    "options": [
     "Sorted input and no cycles",
     "Single recursion and no base case",
     "Overlapping subproblems and optimal substructure",
     "Random data and large size"
    ],
    "answer": 2,
    "explain": "DP works when the same subproblems repeat and the overall best answer is built from the best sub-answers."
   },
   {
    "q": "What is memoization?",
    "options": [
     "Caching each subproblem's answer the first time it's computed",
     "Sorting results at the end",
     "Running the algorithm twice",
     "Deleting old recursive calls"
    ],
    "answer": 0,
    "explain": "Memoization stores a result the first time it's computed so later calls reuse it instead of recomputing."
   },
   {
    "q": "What is the time complexity of the naive recursive Fibonacci, without memoization?",
    "options": [
     "O(n)",
     "O(2^n)",
     "O(log n)",
     "O(n log n)"
    ],
    "answer": 1,
    "explain": "Without caching, naive recursive Fibonacci recomputes the same subproblems exponentially many times."
   },
   {
    "q": "What is the key difference between top-down and bottom-up DP?",
    "options": [
     "They always give different answers",
     "Top-down never uses memory",
     "Top-down uses recursion with caching; bottom-up builds a table with a loop",
     "Bottom-up cannot be used for Fibonacci"
    ],
    "answer": 2,
    "explain": "Top-down keeps the recursive shape and caches results, while bottom-up fills a table iteratively from the smallest case up."
   }
  ]
 },
 "dsa-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A greedy algorithm builds a solution step by step, always picking whatever looks best right now, and never reconsidering that choice later. It's simpler and faster than dynamic programming, but it only gives the correct final answer for problems that have a special property called the 'greedy choice property'."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# coin change with greedy: works for coins like 1, 5, 10, 25\ndef greedy_coins(amount, coins=[25, 10, 5, 1]):\n    result = []\n    for coin in coins:\n        while amount >= coin:\n            amount -= coin\n            result.append(coin)\n    return result\n\nprint(greedy_coins(41))   # [25, 10, 5, 1]"
    },
    {
     "type": "text",
     "text": "The coin example works because standard coin denominations are designed so the greedy 'take the biggest coin you can' strategy always gives the fewest coins. But greedy isn't always correct: with coins {1, 3, 4}, greedy makes 6 as 4+1+1 (3 coins), while the true best is 3+3 (2 coins). This is why greedy needs proof, not just intuition."
    },
    {
     "type": "text",
     "text": "A classic exam example is the Activity Selection problem: given activities with start and end times, pick the maximum number that don't overlap. The greedy strategy — always pick the activity that finishes earliest among the remaining ones — is provably optimal here, unlike the coin example above."
    },
    {
     "type": "tip",
     "text": "Contrast with DP: greedy makes one irreversible choice per step and never looks back (fast, but only correct for certain problems); DP considers all choices and keeps the best, using extra memory to guarantee correctness. When in doubt whether greedy works, try to think of a counter-example first."
    },
    {
     "type": "text",
     "text": "Other classic greedy algorithms include Kruskal's and Prim's algorithms for building a Minimum Spanning Tree, and Huffman coding for data compression — both work because they satisfy the greedy choice property that can be formally proven."
    }
   ],
   "recap": "Greedy algorithms make the locally best choice at each step without backtracking — fast, but only correct when the problem has the greedy choice property, unlike DP which always guarantees the optimal answer."
  },
  "quiz": [
   {
    "q": "What does a greedy algorithm do at each step?",
    "options": [
     "Always sorts the input first",
     "Tries every possible option and remembers the best",
     "Picks whatever looks best right now and never reconsiders",
     "Randomly picks the next option"
    ],
    "answer": 2,
    "explain": "Greedy algorithms commit to the locally best choice at each step and move on without backtracking."
   },
   {
    "q": "Why does greedy coin change fail for coins {1, 3, 4} and amount 6?",
    "options": [
     "It picks 4+1+1=3 coins instead of the better 3+3=2 coins",
     "It cannot represent 6 at all",
     "Greedy always fails on every input",
     "It picks 3+3=2 coins instead of the worse 4+1+1"
    ],
    "answer": 0,
    "explain": "Greedy grabs the largest coin (4) first, giving 4+1+1 (three coins), while 3+3 (two coins) is actually better."
   },
   {
    "q": "What is required for a greedy algorithm to guarantee the correct answer?",
    "options": [
     "The input must be sorted alphabetically",
     "The algorithm must run in O(1)",
     "The problem must use recursion",
     "The problem must have the greedy choice property"
    ],
    "answer": 3,
    "explain": "Greedy only guarantees optimal results when locally best choices are proven to lead to a globally best solution."
   },
   {
    "q": "Which of these is a classic correct use of a greedy algorithm?",
    "options": [
     "Coin change with arbitrary denominations",
     "Activity Selection, picking the earliest-finishing activity each time",
     "Solving every dynamic programming problem",
     "Sorting with bubble sort"
    ],
    "answer": 1,
    "explain": "Activity Selection's earliest-finish-time greedy strategy is provably optimal, unlike arbitrary coin change."
   }
  ]
 },
 "dsa-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once graph edges carry weights, BFS's 'fewest edges' notion of shortest path isn't enough — we need the path with the smallest total weight. Dijkstra's algorithm solves this for graphs with non-negative weights: it repeatedly picks the closest unvisited vertex and updates its neighbors' distances, using a priority queue (the heap you met earlier) to always grab the nearest one next."
    },
    {
     "type": "text",
     "text": "Dijkstra's algorithm keeps a running 'best distance so far' for every vertex, starting at infinity except the source (0). Each time it visits the closest remaining vertex, it checks whether going through that vertex gives a shorter path to its neighbors, and updates if so. This process, called relaxation, repeats until every vertex has been visited."
    },
    {
     "type": "tip",
     "text": "Dijkstra's algorithm breaks if any edge has a negative weight, because it assumes the closest vertex found so far can never be beaten later — a negative edge can violate that. For graphs with negative weights, algorithms like Bellman-Ford are used instead."
    },
    {
     "type": "text",
     "text": "A Minimum Spanning Tree (MST) is a different but related problem: given a connected, weighted, undirected graph, find the subset of edges that connects every vertex with the minimum total edge weight, and no cycles. Think of it as the cheapest way to wire electricity to every house in a town."
    },
    {
     "type": "text",
     "text": "Two greedy algorithms solve MST optimally. Kruskal's algorithm sorts all edges by weight and adds each one if it doesn't form a cycle, until every vertex is connected. Prim's algorithm instead grows a single tree outward, always adding the cheapest edge that connects a new vertex to the tree so far."
    },
    {
     "type": "tip",
     "text": "Shortest path (Dijkstra) finds the cheapest route between two specific vertices. MST (Kruskal's/Prim's) connects ALL vertices as cheaply as possible overall — these solve different questions, so don't mix them up in an exam."
    }
   ],
   "recap": "Dijkstra's algorithm finds shortest weighted paths from a source using a priority queue, while Kruskal's and Prim's algorithms build a Minimum Spanning Tree that connects every vertex for the least total edge weight."
  },
  "quiz": [
   {
    "q": "What data structure does Dijkstra's algorithm use to always pick the closest unvisited vertex next?",
    "options": [
     "A stack",
     "A hash table",
     "A linked list",
     "A priority queue (heap)"
    ],
    "answer": 3,
    "explain": "A priority queue lets Dijkstra's algorithm efficiently retrieve the nearest unvisited vertex at every step."
   },
   {
    "q": "Why does Dijkstra's algorithm fail on graphs with negative edge weights?",
    "options": [
     "It runs out of memory",
     "Negative weights make the graph disconnected",
     "It only works on trees",
     "It assumes the closest vertex found so far can never be beaten later, which negative edges can break"
    ],
    "answer": 3,
    "explain": "A later negative-weight edge could produce a shorter path than one already finalized, which Dijkstra's greedy approach can't account for."
   },
   {
    "q": "What does a Minimum Spanning Tree connect?",
    "options": [
     "Only the heaviest edges",
     "Only two chosen vertices",
     "Every vertex in the graph, with minimum total edge weight and no cycles",
     "A random subset of vertices"
    ],
    "answer": 2,
    "explain": "An MST spans all vertices using the cheapest possible total edge weight while staying acyclic."
   },
   {
    "q": "How does Kruskal's algorithm build a Minimum Spanning Tree?",
    "options": [
     "It sorts all edges by weight and adds each one if it doesn't create a cycle",
     "It grows one tree outward from a single starting vertex",
     "It uses dynamic programming to try every subset",
     "It removes the heaviest edges one at a time"
    ],
    "answer": 0,
    "explain": "Kruskal's algorithm greedily adds the smallest remaining edge as long as it does not form a cycle."
   }
  ]
 },
 "dsa-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some problems don't have any known algorithm that solves them quickly as they grow. Computer scientists sort problems into complexity classes to talk about this. P is the class of problems solvable in polynomial time (like O(n), O(n^2)) — fast, practical algorithms exist. NP is the class of problems where, if someone hands you a proposed answer, you can at least verify it quickly, even if finding it from scratch might be hard."
    },
    {
     "type": "text",
     "text": "NP-Complete problems are the hardest problems in NP: no polynomial-time algorithm is known for any of them, and if anyone ever found a fast algorithm for one NP-Complete problem, it would instantly give a fast algorithm for all of them (this is the famous unsolved 'P vs NP' question). The Travelling Salesman Problem (find the shortest route visiting every city once) and the 0/1 Knapsack decision problem are classic examples."
    },
    {
     "type": "tip",
     "text": "You don't need to prove NP-Completeness for an exam, just recognize it: if a problem seems to require checking every combination (exponential time) and nobody has found a shortcut despite decades of trying, it's likely NP-Complete. The practical response is to use approximation, heuristics, or accept slower runtimes on small inputs."
    },
    {
     "type": "text",
     "text": "This whole DSA journey — arrays, linked lists, trees, hashing, sorting, graphs, DP, and complexity — is exactly what technical interviews test. The pattern interviewers look for is: can you recognize which structure or technique fits a new problem, not just recite one you memorized."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Two Sum: classic interview question\n# Given a list and a target, find two numbers that add up to it.\n# Naive: check every pair - O(n^2)\n# Better: use a hash table to remember numbers seen so far - O(n)\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []"
    },
    {
     "type": "tip",
     "text": "Interview strategy: state the brute-force solution and its Big-O first, then ask 'what data structure removes the repeated work?' — a hash table often turns an O(n^2) search into O(n), a sorted structure often turns O(n) lookups into O(log n), and recognizing overlapping subproblems points straight at dynamic programming."
    }
   ],
   "recap": "P problems have known fast algorithms; NP-Complete problems have no known fast algorithm and are believed to require exponential time — recognizing which class and which structure a new problem needs is exactly what interviews and exams test."
  },
  "quiz": [
   {
    "q": "What does it mean for a problem to be in the class P?",
    "options": [
     "It cannot be solved at all",
     "It requires exponential memory",
     "It can be solved in polynomial time",
     "It can only be verified, not solved"
    ],
    "answer": 2,
    "explain": "P is the class of problems that have a known algorithm running in polynomial time."
   },
   {
    "q": "What defines an NP-Complete problem?",
    "options": [
     "It can never be verified quickly",
     "It has a known O(log n) solution",
     "It only applies to sorting",
     "No polynomial-time algorithm is known, and it is among the hardest problems in NP"
    ],
    "answer": 3,
    "explain": "NP-Complete problems are the hardest in NP: verifiable quickly, but with no known fast way to solve them from scratch."
   },
   {
    "q": "In the Two Sum example, what does using a hash table improve the time complexity to?",
    "options": [
     "O(log n)",
     "O(n)",
     "O(n^2)",
     "O(1)"
    ],
    "answer": 1,
    "explain": "Storing seen numbers in a hash table lets each element be checked in constant time, giving overall O(n)."
   },
   {
    "q": "Which is a classic example of an NP-Complete problem?",
    "options": [
     "Binary search",
     "The Travelling Salesman Problem",
     "Linear search",
     "Bubble sort"
    ],
    "answer": 1,
    "explain": "The Travelling Salesman Problem has no known polynomial-time algorithm and is a textbook NP-Complete example."
   }
  ]
 }
}
