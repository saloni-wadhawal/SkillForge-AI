// Lesson text and quiz questions for "Discrete Mathematics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "discrete-math-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A set is just a collection of distinct things, called elements. We write it with curly braces: A = {1, 2, 3}. Order doesn't matter and duplicates don't count, so {1, 2, 2} is really the same set as {1, 2}. Think of a set like a bag of unique items where you only care about which items are inside."
    },
    {
     "type": "text",
     "text": "We say 3 is a member of A and write 3 ∈ A. If something is not in the set we write 5 ∉ A. A set with nothing in it is the empty set, written {} or ∅. The number of elements in a set is its cardinality, written |A|; for A = {1, 2, 3}, |A| = 3."
    },
    {
     "type": "text",
     "text": "The three core operations combine sets. Union A ∪ B collects everything in either set. Intersection A ∩ B keeps only elements in both. Difference A − B keeps what's in A but not in B. For A = {1,2,3} and B = {2,3,4}: A ∪ B = {1,2,3,4}, A ∩ B = {2,3}, and A − B = {1}."
    },
    {
     "type": "tip",
     "text": "Union is like merging two contact lists (no duplicates); intersection is like finding the friends you both already share."
    },
    {
     "type": "code",
     "code": "A = {1, 2, 3}\nB = {2, 3, 4}\nprint(A | B)   # union        -> {1, 2, 3, 4}\nprint(A & B)   # intersection -> {2, 3}\nprint(A - B)   # difference   -> {1}\nprint(3 in A)  # membership   -> True",
     "lang": "python"
    }
   ],
   "recap": "A set is a collection of distinct elements; union, intersection, and difference combine sets in different ways."
  },
  "quiz": [
   {
    "q": "How many elements are in the set {4, 4, 5, 6, 6}?",
    "options": [
     "2",
     "5",
     "3",
     "6"
    ],
    "answer": 2,
    "explain": "Sets ignore duplicates, so the distinct elements are 4, 5, and 6, giving cardinality 3."
   },
   {
    "q": "If A = {1,2,3} and B = {3,4,5}, what is A ∩ B?",
    "options": [
     "{1,2,3,4,5}",
     "{1,2}",
     "{4,5}",
     "{3}"
    ],
    "answer": 3,
    "explain": "Intersection keeps only elements present in both sets, and only 3 is in both."
   },
   {
    "q": "What does the symbol ∉ mean?",
    "options": [
     "Is a member of",
     "Is not a member of",
     "Is a subset of",
     "Is the empty set"
    ],
    "answer": 1,
    "explain": "The slashed membership symbol ∉ states that an element is not in the set."
   },
   {
    "q": "For A = {1,2,3} and B = {2,3,4}, what is A − B?",
    "options": [
     "{2,3}",
     "{1}",
     "{1,2,3,4}",
     "{4}"
    ],
    "answer": 1,
    "explain": "Difference keeps elements in A that are not in B, and only 1 qualifies."
   }
  ]
 },
 "discrete-math-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A relation describes how elements of one set connect to elements of another. Formally, a relation from set A to set B is a set of ordered pairs (a, b), where a comes from A and b from B. For example, 'is older than' among people is a relation, and so is 'x divides y' among numbers."
    },
    {
     "type": "text",
     "text": "The Cartesian product A × B is the set of all possible ordered pairs. A relation is just any subset of that product — you pick which pairs actually count. If A = {1, 2} and B = {x, y}, then A × B = {(1,x), (1,y), (2,x), (2,y)}, and any collection of those pairs is a relation."
    },
    {
     "type": "text",
     "text": "Relations on a single set (from A to itself) have useful properties. Reflexive: every element relates to itself, like (a, a). Symmetric: if a relates to b then b relates to a, like 'is a sibling of'. Transitive: if a→b and b→c then a→c, like 'is less than'. A relation that is reflexive, symmetric, and transitive is an equivalence relation, which splits a set into neat groups."
    },
    {
     "type": "tip",
     "text": "A relation is basically a lookup table of allowed connections — think of a database table of (student, course) pairs saying who is enrolled in what."
    },
    {
     "type": "code",
     "code": "A = {1, 2, 3}\n# 'less than' relation on A: pairs (a, b) where a < b\nR = {(a, b) for a in A for b in A if a < b}\nprint(R)  # {(1, 2), (1, 3), (2, 3)}",
     "lang": "python"
    }
   ],
   "recap": "A relation is a set of ordered pairs linking elements; key properties are reflexive, symmetric, and transitive."
  },
  "quiz": [
   {
    "q": "A relation from A to B is best described as:",
    "options": [
     "A function that must be one-to-one",
     "A single number",
     "A subset of the Cartesian product A × B",
     "The union of A and B"
    ],
    "answer": 2,
    "explain": "A relation is any set of ordered pairs, i.e. a subset of A × B."
   },
   {
    "q": "Which property means 'if a relates to b, then b relates to a'?",
    "options": [
     "Antisymmetric",
     "Transitive",
     "Symmetric",
     "Reflexive"
    ],
    "answer": 2,
    "explain": "Symmetry requires the pair to hold in both directions."
   },
   {
    "q": "If A = {1, 2}, how many ordered pairs are in A × A?",
    "options": [
     "3",
     "8",
     "4",
     "2"
    ],
    "answer": 2,
    "explain": "A × A has |A| × |A| = 2 × 2 = 4 pairs."
   },
   {
    "q": "An equivalence relation must be reflexive, symmetric, and:",
    "options": [
     "Transitive",
     "Antisymmetric",
     "Empty",
     "One-to-one"
    ],
    "answer": 0,
    "explain": "Equivalence relations are exactly those that are reflexive, symmetric, and transitive."
   }
  ]
 },
 "discrete-math-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A function is a special relation where every input is paired with exactly one output. We write f: A → B, meaning f takes each element of A (the domain) and assigns it a single element of B (the codomain). The key rule: one input, one output — no input is left out and none maps to two things."
    },
    {
     "type": "text",
     "text": "The set of outputs the function actually produces is called the range (or image), which sits inside the codomain. For f(x) = x², the domain might be all real numbers, the codomain all real numbers, but the range is only the non-negative numbers because a square is never negative."
    },
    {
     "type": "text",
     "text": "Three important types describe how inputs map to outputs. Injective (one-to-one): different inputs always give different outputs. Surjective (onto): every element of the codomain is hit by some input. Bijective: both at once — a perfect pairing where each input matches exactly one output and vice versa. Bijections are what let you 'undo' a function with an inverse."
    },
    {
     "type": "tip",
     "text": "A function is like a vending machine: press a button (input) and you always get one specific snack (output). A bijection is a machine where every snack has its own unique button."
    },
    {
     "type": "code",
     "code": "def f(x):\n    return x * x   # f(x) = x^2\n\nprint(f(3))   # 9\nprint(f(-3))  # 9  -> two inputs share an output, so f is NOT injective",
     "lang": "python"
    }
   ],
   "recap": "A function maps each input to exactly one output; injective, surjective, and bijective describe how the mapping behaves."
  },
  "quiz": [
   {
    "q": "What defines a function versus a general relation?",
    "options": [
     "It has no domain",
     "It must be symmetric",
     "Every input maps to exactly one output",
     "Inputs can map to many outputs"
    ],
    "answer": 2,
    "explain": "A function requires each input to have precisely one output."
   },
   {
    "q": "A function where different inputs always give different outputs is called:",
    "options": [
     "Surjective",
     "Constant",
     "Reflexive",
     "Injective"
    ],
    "answer": 3,
    "explain": "Injective (one-to-one) means distinct inputs never collide to the same output."
   },
   {
    "q": "For f(x) = x² over the real numbers, the range is:",
    "options": [
     "All real numbers",
     "Only whole numbers",
     "Only negative numbers",
     "Non-negative numbers"
    ],
    "answer": 3,
    "explain": "Squaring any real number gives a result that is zero or positive."
   },
   {
    "q": "A function that is both injective and surjective is called:",
    "options": [
     "Empty",
     "Bijective",
     "Partial",
     "Transitive"
    ],
    "answer": 1,
    "explain": "Being one-to-one and onto together makes a function bijective, so it has an inverse."
   }
  ]
 },
 "discrete-math-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A proposition is a statement that is either true or false, never both. '5 is greater than 3' is a proposition (true); 'close the door' is not, because it has no truth value. In computing, propositions map directly onto boolean values: true and false, or 1 and 0."
    },
    {
     "type": "text",
     "text": "We combine propositions with logical connectives. NOT (¬) flips truth. AND (∧) is true only when both parts are true. OR (∨) is true when at least one part is true. Implication (→) 'if p then q' is false only when p is true but q is false. These are exactly the operators your code uses in if-statements."
    },
    {
     "type": "text",
     "text": "A truth table lists every possible combination of inputs and the resulting output, which is how we prove two expressions are equivalent. For p AND q with two variables there are 4 rows; with n variables there are 2ⁿ rows. A statement true in every row is a tautology; one false in every row is a contradiction."
    },
    {
     "type": "tip",
     "text": "Implication trips people up: 'if it rains, I bring an umbrella' is only broken (false) on the day it rains AND you forgot the umbrella — every other case keeps the promise."
    },
    {
     "type": "code",
     "code": "for p in (False, True):\n    for q in (False, True):\n        # implication p -> q is (not p) or q\n        print(p, q, (not p) or q)\n# F F True | F T True | T F False | T T True",
     "lang": "python"
    }
   ],
   "recap": "Propositions are true/false statements combined with NOT, AND, OR, and implication, and truth tables enumerate every outcome."
  },
  "quiz": [
   {
    "q": "When is 'p AND q' true?",
    "options": [
     "Always",
     "When at least one is true",
     "Only when both are false",
     "Only when both are true"
    ],
    "answer": 3,
    "explain": "Conjunction (AND) requires both operands to be true."
   },
   {
    "q": "The implication p → q is false in exactly which case?",
    "options": [
     "p false, q true",
     "p false, q false",
     "p true, q false",
     "p true, q true"
    ],
    "answer": 2,
    "explain": "An implication only breaks when the premise is true but the conclusion is false."
   },
   {
    "q": "How many rows does a truth table with 3 variables have?",
    "options": [
     "6",
     "3",
     "8",
     "9"
    ],
    "answer": 2,
    "explain": "Each variable doubles the combinations, so 2³ = 8 rows."
   },
   {
    "q": "A statement that is true for every combination of inputs is a:",
    "options": [
     "Tautology",
     "Proposition",
     "Contradiction",
     "Variable"
    ],
    "answer": 0,
    "explain": "A formula true in every row of its truth table is a tautology."
   }
  ]
 },
 "discrete-math-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Combinatorics is the art of counting without listing everything one by one. Two rules power most of it. The multiplication (product) rule: if a first choice has m options and an independent second choice has n options, there are m × n combined outcomes. The addition rule: if you must pick from one group OR another disjoint group, add their sizes."
    },
    {
     "type": "text",
     "text": "A permutation is an arrangement where order matters. The number of ways to arrange n distinct items is n! (n factorial) = n × (n−1) × ... × 1. For example, 3 books can be lined up in 3! = 6 ways. If you arrange only r of the n items, the count is P(n, r) = n! / (n − r)!."
    },
    {
     "type": "text",
     "text": "A combination is a selection where order does NOT matter. Choosing 2 people from 4 for a team ignores who was picked first. The count is C(n, r) = n! / (r! (n − r)!), often read 'n choose r'. The extra r! in the denominator removes the duplicate orderings that permutations counted."
    },
    {
     "type": "tip",
     "text": "Permutation vs combination in one line: a lock 'combination' is really a permutation (1-2-3 differs from 3-2-1), while picking a pizza's toppings is a true combination (order never matters)."
    },
    {
     "type": "code",
     "code": "from math import factorial, perm, comb\n\nprint(factorial(4))  # 24  arrangements of 4 items\nprint(perm(5, 2))     # 20  ordered picks of 2 from 5\nprint(comb(5, 2))     # 10  unordered picks of 2 from 5",
     "lang": "python"
    }
   ],
   "recap": "Counting uses product/addition rules; permutations count ordered arrangements (n!) while combinations count unordered selections (n choose r)."
  },
  "quiz": [
   {
    "q": "You have 3 shirts and 4 pants. How many outfits are possible?",
    "options": [
     "1",
     "7",
     "12",
     "34"
    ],
    "answer": 2,
    "explain": "By the product rule, 3 × 4 = 12 combined outcomes."
   },
   {
    "q": "In how many ways can 4 distinct books be arranged in a row?",
    "options": [
     "4",
     "24",
     "12",
     "16"
    ],
    "answer": 1,
    "explain": "Arrangements of 4 distinct items equal 4! = 24."
   },
   {
    "q": "The key difference between a permutation and a combination is:",
    "options": [
     "They are identical",
     "Combinations must be even",
     "Permutations use bigger numbers",
     "Order matters in permutations, not combinations"
    ],
    "answer": 3,
    "explain": "Permutations count ordered arrangements while combinations ignore order."
   },
   {
    "q": "How many ways can you choose 2 items from 4 when order doesn't matter?",
    "options": [
     "4",
     "8",
     "6",
     "12"
    ],
    "answer": 2,
    "explain": "C(4,2) = 4! / (2! · 2!) = 6."
   }
  ]
 },
 "discrete-math-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A graph is a set of vertices (nodes) connected by edges (links). It models anything made of things and connections: cities joined by roads, web pages joined by hyperlinks, or friends joined on a social network. We write G = (V, E), where V is the vertex set and E the edge set."
    },
    {
     "type": "text",
     "text": "Edges come in flavors. In an undirected graph an edge {a, b} works both ways, like a two-way street. In a directed graph (digraph) an edge (a, b) points one way, like a one-way street or a Twitter 'follow'. The degree of a vertex is how many edges touch it; in digraphs we split this into in-degree and out-degree."
    },
    {
     "type": "text",
     "text": "Picture a graph in words: draw dots for vertices and lines between the ones that connect. A path is a route of edges from one vertex to another, and a cycle is a path that returns to its start. In code, graphs are usually stored as an adjacency list — each vertex maps to the list of neighbours it directly links to, which is memory-efficient for sparse graphs."
    },
    {
     "type": "tip",
     "text": "A handy fact — the Handshake Lemma: if everyone in a room shakes some hands, the total of all handshake counts is even, because every edge adds 1 to exactly two vertices' degrees."
    },
    {
     "type": "code",
     "code": "# adjacency list for an undirected graph\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'C'],\n    'C': ['A', 'B', 'D'],\n    'D': ['C']\n}\nprint(len(graph['C']))  # degree of C -> 3",
     "lang": "python"
    }
   ],
   "recap": "A graph connects vertices with edges (directed or undirected); degree, paths, cycles, and adjacency lists are the core building blocks."
  },
  "quiz": [
   {
    "q": "In graph theory, the connections between vertices are called:",
    "options": [
     "Edges",
     "Nodes",
     "Cells",
     "Roots"
    ],
    "answer": 0,
    "explain": "Edges are the links joining pairs of vertices (nodes)."
   },
   {
    "q": "What is the degree of a vertex?",
    "options": [
     "Its numeric label",
     "The total vertices in the graph",
     "Its distance from the start",
     "The number of edges touching it"
    ],
    "answer": 3,
    "explain": "Degree counts how many edges are incident to that vertex."
   },
   {
    "q": "An edge that points in only one direction belongs to a:",
    "options": [
     "Directed graph",
     "Empty graph",
     "Complete graph",
     "Undirected graph"
    ],
    "answer": 0,
    "explain": "One-way edges (a, b) define a directed graph (digraph)."
   },
   {
    "q": "A path that starts and ends at the same vertex is called a:",
    "options": [
     "Degree",
     "Leaf",
     "Tree",
     "Cycle"
    ],
    "answer": 3,
    "explain": "A closed path returning to its starting vertex is a cycle."
   }
  ]
 },
 "discrete-math-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mathematical induction proves that a statement holds for all natural numbers, without checking infinitely many cases. It works in two steps. Base case: show the statement is true for the starting value, usually n = 1. Inductive step: assume it's true for some n = k (the inductive hypothesis), then prove it must also be true for n = k + 1."
    },
    {
     "type": "text",
     "text": "The classic analogy is a line of dominoes. The base case is knocking over the first domino. The inductive step is guaranteeing that every domino, when it falls, knocks over the next one. Together, those two facts mean the whole infinite line falls — you never have to push each domino individually."
    },
    {
     "type": "text",
     "text": "As an example, prove 1 + 2 + ... + n = n(n+1)/2. Base case n = 1: the left side is 1 and the right side is 1·2/2 = 1, so it holds. Inductive step: assume the sum up to k equals k(k+1)/2. Then the sum up to k+1 is k(k+1)/2 + (k+1) = (k+1)(k+2)/2, which is exactly the formula with n = k+1. Both steps done, so it holds for all n."
    },
    {
     "type": "tip",
     "text": "The inductive hypothesis is not cheating — you're not assuming what you want for all n; you assume it for ONE value k and use that to bridge to k+1, so the truth propagates step by step."
    },
    {
     "type": "code",
     "code": "# verify the formula sum(1..n) = n(n+1)/2 for many n\nfor n in range(1, 8):\n    left = sum(range(1, n + 1))\n    right = n * (n + 1) // 2\n    print(n, left, right, left == right)  # always True",
     "lang": "python"
    }
   ],
   "recap": "Induction proves a claim for all natural numbers via a base case plus an inductive step, like a chain of dominoes each toppling the next."
  },
  "quiz": [
   {
    "q": "The two required parts of a proof by induction are:",
    "options": [
     "Domain and range",
     "Guess and check",
     "Union and intersection",
     "Base case and inductive step"
    ],
    "answer": 3,
    "explain": "Induction needs a base case plus an inductive step to cover all natural numbers."
   },
   {
    "q": "The 'inductive hypothesis' is the assumption that the statement holds for:",
    "options": [
     "n = 0 only",
     "All n at once",
     "No values",
     "n = k, some particular value"
    ],
    "answer": 3,
    "explain": "You assume truth for n = k, then prove it forces truth for n = k + 1."
   },
   {
    "q": "In the domino analogy, the base case corresponds to:",
    "options": [
     "The dominoes standing still",
     "The last domino",
     "Knocking over the first domino",
     "Each domino knocking the next"
    ],
    "answer": 2,
    "explain": "The base case is toppling the first domino to start the chain."
   },
   {
    "q": "The sum 1 + 2 + ... + n equals:",
    "options": [
     "2n − 1",
     "n²",
     "n! / 2",
     "n(n+1)/2"
    ],
    "answer": 3,
    "explain": "The well-known closed form proved by induction is n(n+1)/2."
   }
  ]
 },
 "discrete-math-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The pigeonhole principle says: if you put more than n pigeons into n holes, at least one hole holds two or more pigeons. It sounds too simple to be useful, but it proves surprisingly strong facts about numbers, lists, and graphs without any calculation."
    },
    {
     "type": "text",
     "text": "Example: in any group of 13 people, at least two share a birth month. There are only 12 months (holes) and 13 people (pigeons), so by pigeonhole two people must land in the same month. You never had to know anyone's actual birthday."
    },
    {
     "type": "text",
     "text": "The generalized version says that if n pigeons go into k holes, some hole gets at least ceil(n / k) pigeons. This lets you prove stronger claims, like: among 100 people, some birth month must be shared by at least 9 people, since ceil(100 / 12) = 9 — meaning at least one of those 9 shares that month with 8 others."
    },
    {
     "type": "tip",
     "text": "Exam trick: first identify what the 'pigeons' are and what the 'holes' are. If the count of pigeons exceeds the count of holes, you're done — you rarely need more than that one comparison."
    },
    {
     "type": "code",
     "code": "# demonstrate pigeonhole: 13 random birth months, find a repeat\nimport random\nmonths = [random.randint(1, 12) for _ in range(13)]\nseen = set()\nrepeat = None\nfor m in months:\n    if m in seen:\n        repeat = m\n        break\n    seen.add(m)\nprint(months)\nprint('repeated month:', repeat)  # guaranteed to find one",
     "lang": "python"
    }
   ],
   "recap": "The pigeonhole principle guarantees a collision whenever there are more items than categories; the generalized form bounds how big that collision must be."
  },
  "quiz": [
   {
    "q": "The pigeonhole principle guarantees a repeat when:",
    "options": [
     "The items are all distinct",
     "The number of items exceeds the number of categories",
     "The categories are sorted",
     "The number of items equals the number of categories"
    ],
    "answer": 1,
    "explain": "Once items outnumber categories, at least one category must hold two or more items."
   },
   {
    "q": "In a room of 13 people, why must two share a birth month?",
    "options": [
     "Because months repeat every year",
     "Because people are born randomly",
     "Because there are only 12 months but 13 people",
     "Because 13 is a prime number"
    ],
    "answer": 2,
    "explain": "13 pigeons (people) into 12 holes (months) forces at least one hole to get two."
   },
   {
    "q": "The generalized pigeonhole principle says n items in k holes forces some hole to hold at least:",
    "options": [
     "exactly n items",
     "k / n items",
     "n − k items",
     "ceil(n / k) items"
    ],
    "answer": 3,
    "explain": "The average load per hole is n/k, so some hole must reach at least the ceiling of that average."
   }
  ]
 },
 "discrete-math-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "We say a divides b (written a | b) if b = a * k for some integer k, with no remainder. Divisibility is the backbone of number theory, and it shows up constantly in code: checking evenness, hashing, and cryptography all lean on it."
    },
    {
     "type": "text",
     "text": "The greatest common divisor (GCD) of two numbers is the largest number that divides both. GCD(12, 18) = 6, because 6 is the biggest number dividing both 12 and 18. Two numbers with GCD 1 are called coprime — they share no common factor except 1."
    },
    {
     "type": "text",
     "text": "The Euclidean algorithm finds the GCD fast without factoring. It repeatedly replaces the larger number with the remainder of dividing it by the smaller one: GCD(a, b) = GCD(b, a mod b), stopping when the remainder is 0. GCD(48, 18) → GCD(18, 12) → GCD(12, 6) → GCD(6, 0) = 6."
    },
    {
     "type": "tip",
     "text": "Never factor two numbers just to find their GCD in code or on an exam — the Euclidean algorithm gets there in a handful of steps even for huge numbers, while factoring can be painfully slow."
    },
    {
     "type": "code",
     "code": "def gcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n\nprint(gcd(48, 18))  # 6\nprint(gcd(17, 5))   # 1 -> coprime",
     "lang": "python"
    }
   ],
   "recap": "Divisibility (a | b) underlies GCD, and the Euclidean algorithm computes GCD by repeated remainders in place of slow factoring."
  },
  "quiz": [
   {
    "q": "Two integers are called coprime when their GCD is:",
    "options": [
     "0",
     "1",
     "Equal to the smaller number",
     "Equal to their product"
    ],
    "answer": 1,
    "explain": "Coprime numbers share no common factor besides 1, so GCD = 1."
   },
   {
    "q": "The Euclidean algorithm computes GCD(a, b) using the rule:",
    "options": [
     "GCD(a, b) = GCD(b, a mod b)",
     "GCD(a, b) = GCD(a + b, a)",
     "GCD(a, b) = GCD(a, b + 1)",
     "GCD(a, b) = a * b"
    ],
    "answer": 0,
    "explain": "Replacing the pair with (b, a mod b) shrinks the numbers each step until the remainder hits 0."
   },
   {
    "q": "What is GCD(48, 18)?",
    "options": [
     "3",
     "12",
     "6",
     "9"
    ],
    "answer": 2,
    "explain": "Applying the Euclidean steps: GCD(48,18) -> GCD(18,12) -> GCD(12,6) -> GCD(6,0) = 6."
   }
  ]
 },
 "discrete-math-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Modular arithmetic is 'clock arithmetic': numbers wrap around after reaching a fixed value called the modulus. 13 mod 12 = 1, the same way 13 o'clock on a 12-hour clock is really 1 o'clock. We write a ≡ b (mod n) when a and b leave the same remainder after dividing by n."
    },
    {
     "type": "text",
     "text": "Addition and multiplication behave nicely under mod: (a + b) mod n = ((a mod n) + (b mod n)) mod n, and the same holds for multiplication. This is why hash tables, checksums, and cryptographic algorithms like RSA all work with numbers 'mod n' instead of the full, huge value."
    },
    {
     "type": "text",
     "text": "A common use is hashing: to place a key into a table of size n, compute key mod n to get an index between 0 and n − 1. Another use is parity: a number mod 2 tells you if it's even (0) or odd (1) without ever computing division by hand."
    },
    {
     "type": "tip",
     "text": "Watch out for negative numbers: in math, −7 mod 3 = 2 (not −1), because we always want a remainder in the range [0, n−1]. Some programming languages return −1 for this, so check your language's behaviour before relying on it."
    },
    {
     "type": "code",
     "code": "n = 12\nprint(13 % n)          # 1, clock wraparound\nprint((7 + 9) % n)      # 4\nprint(((7 % n) + (9 % n)) % n)  # same answer: 4\nprint(-7 % n)           # Python gives 5 (always non-negative)",
     "lang": "python"
    }
   ],
   "recap": "Modular arithmetic wraps numbers around a modulus n; addition and multiplication can be reduced mod n at every step, which is why hashing and cryptography rely on it."
  },
  "quiz": [
   {
    "q": "13 mod 12 equals:",
    "options": [
     "12",
     "0",
     "13",
     "1"
    ],
    "answer": 3,
    "explain": "13 divided by 12 leaves remainder 1, matching the clock wraparound idea."
   },
   {
    "q": "Which property makes modular arithmetic useful for hashing large numbers?",
    "options": [
     "You can reduce mod n at each step instead of computing the full huge value first",
     "It only works on even numbers",
     "It only applies to negative numbers",
     "It requires floating point numbers"
    ],
    "answer": 0,
    "explain": "Because (a + b) mod n = ((a mod n)+(b mod n)) mod n, you never need the full sum before reducing."
   },
   {
    "q": "In standard mathematical convention, −7 mod 3 equals:",
    "options": [
     "−1",
     "2",
     "−7",
     "3"
    ],
    "answer": 1,
    "explain": "The remainder is defined to lie in [0, n−1], and −7 = 3*(−3) + 2, giving remainder 2."
   }
  ]
 },
 "discrete-math-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Propositional logic only handles whole statements that are true or false. Predicate logic goes further: a predicate like P(x) is a statement that depends on a variable, such as P(x): 'x is even'. It becomes true or false only once x is filled in — P(4) is true, P(3) is false."
    },
    {
     "type": "text",
     "text": "Quantifiers let us make claims about every value or some value of a variable. The universal quantifier ∀x P(x) means 'P(x) is true for all x'. The existential quantifier ∃x P(x) means 'there exists at least one x for which P(x) is true'. Example: ∀x (x is a diploma student → x studies discrete math) says every diploma student studies this subject."
    },
    {
     "type": "text",
     "text": "Negating a quantified statement flips both the quantifier and the inner statement: ¬(∀x P(x)) is the same as ∃x ¬P(x), and ¬(∃x P(x)) is the same as ∀x ¬P(x). In words: 'not everyone passed' means 'someone failed', and 'no one passed' means 'everyone failed'."
    },
    {
     "type": "tip",
     "text": "Order of quantifiers matters. ∀x ∃y (x < y) says 'for every x there's a bigger y' (true for integers). But ∃y ∀x (x < y) says 'there's one y bigger than every x' (false — no biggest integer). Swapping ∀ and ∃ can completely change the meaning."
    },
    {
     "type": "code",
     "code": "# check a universal claim over a finite domain\nnums = [2, 4, 6, 8]\nall_even = all(n % 2 == 0 for n in nums)      # forall x P(x)\nsome_gt5 = any(n > 5 for n in nums)           # exists x P(x)\nprint(all_even, some_gt5)  # True True",
     "lang": "python"
    }
   ],
   "recap": "Predicates depend on a variable; ∀ says 'for all', ∃ says 'there exists', and negating a quantifier flips it to the other one applied to the negated predicate."
  },
  "quiz": [
   {
    "q": "The statement ∀x P(x) means:",
    "options": [
     "P(x) is true for every x",
     "P(x) is true for at least one x",
     "P(x) is always false",
     "x is a predicate"
    ],
    "answer": 0,
    "explain": "The universal quantifier ∀ asserts the predicate holds for every value in the domain."
   },
   {
    "q": "The negation of ∀x P(x) is:",
    "options": [
     "∀x ¬P(x)",
     "∃x ¬P(x)",
     "¬P(x) for one fixed x",
     "∃x P(x)"
    ],
    "answer": 1,
    "explain": "Negating 'for all' gives 'there exists one for which it fails': ∃x ¬P(x)."
   },
   {
    "q": "Why does swapping the order of ∀ and ∃ matter?",
    "options": [
     "It can change the statement from true to false or vice versa",
     "It changes the predicate's name",
     "It only affects propositional logic",
     "It never matters, they're interchangeable"
    ],
    "answer": 0,
    "explain": "∀x ∃y (x<y) and ∃y ∀x (x<y) express different claims, and one can be true while the other is false."
   }
  ]
 },
 "discrete-math-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Besides direct proof and induction, two other techniques appear constantly on exams. A proof by contrapositive proves 'if P then Q' by instead proving 'if not Q then not P' — these two statements are logically equivalent, but the second is sometimes far easier to work with."
    },
    {
     "type": "text",
     "text": "Example: prove 'if n² is even, then n is even' by contrapositive. Instead, assume n is odd (not the conclusion) and show n² is odd (not the hypothesis). If n = 2k+1, then n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd. That proves the contrapositive, so the original statement is true."
    },
    {
     "type": "text",
     "text": "A proof by contradiction assumes the statement is false, then derives something impossible. Classic example: prove √2 is irrational. Assume √2 = a/b in lowest terms. Squaring gives 2b² = a², so a² is even, so a is even, so a = 2c. Substituting gives b² = 2c², so b is also even. But then a and b share a factor of 2, contradicting 'lowest terms'. So the assumption was false, and √2 must be irrational."
    },
    {
     "type": "tip",
     "text": "Use contrapositive when the conclusion's negation is easier to work with than the hypothesis directly (common with 'even/odd' or divisibility claims). Use contradiction when you can't see a direct path forward and need to assume the opposite to squeeze out an impossible result."
    },
    {
     "type": "code",
     "code": "# sanity check: n odd implies n*n odd, for many n\nfor n in range(1, 20, 2):   # odd numbers\n    print(n, n * n, (n * n) % 2 == 1)  # always True",
     "lang": "python"
    }
   ],
   "recap": "Contrapositive proof swaps 'if P then Q' for the equivalent 'if not Q then not P'; contradiction assumes the claim is false and derives an impossibility to force it true."
  },
  "quiz": [
   {
    "q": "A proof by contrapositive of 'if P then Q' actually proves:",
    "options": [
     "If not Q then not P",
     "P and not Q simultaneously",
     "If not P then not Q",
     "If Q then P"
    ],
    "answer": 0,
    "explain": "The contrapositive 'if not Q then not P' is logically equivalent to the original 'if P then Q'."
   },
   {
    "q": "In a proof by contradiction, you begin by assuming:",
    "options": [
     "The conclusion is true",
     "Nothing, you start from the axioms only",
     "The statement to be proved is false",
     "The hypothesis is false"
    ],
    "answer": 2,
    "explain": "You assume the negation of what you want to prove, then show it leads to something impossible."
   },
   {
    "q": "In proving √2 is irrational by contradiction, the key impossible outcome reached is:",
    "options": [
     "√2 turns out to be negative",
     "a and b are both odd",
     "a/b is not in lowest terms after all, contradicting the assumption",
     "2b² equals a³"
    ],
    "answer": 2,
    "explain": "Both a and b end up even, meaning they share a factor of 2 — contradicting that a/b was in lowest terms."
   }
  ]
 },
 "discrete-math-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A recurrence relation defines each term of a sequence using earlier terms. The classic example is Fibonacci: F(n) = F(n−1) + F(n−2), with base cases F(0) = 0 and F(1) = 1. Recurrences show up everywhere algorithms are analyzed, because 'the cost of solving a problem of size n' often depends on 'the cost of solving smaller versions of it'."
    },
    {
     "type": "text",
     "text": "Solving a recurrence means finding a closed-form formula that doesn't refer back to earlier terms. Some recurrences are solved by unrolling (expanding the recurrence step by step until a pattern appears), others by guessing a form and checking it, and others using the characteristic equation method for linear recurrences."
    },
    {
     "type": "text",
     "text": "Recurrences are the natural language of recursive algorithms. Merge sort's running time satisfies T(n) = 2T(n/2) + n (split into two halves, plus linear work to merge), and solving this recurrence — for example with the Master Theorem — gives T(n) = O(n log n)."
    },
    {
     "type": "tip",
     "text": "Always write both parts of a recurrence: the recursive rule AND the base case(s). A recurrence without a base case never actually terminates, on paper or in code — a very common exam and debugging mistake."
    },
    {
     "type": "code",
     "code": "def fib(n, memo={}):\n    if n <= 1:\n        return n              # base cases\n    if n in memo:\n        return memo[n]\n    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)  # recurrence\n    return memo[n]\n\nprint([fib(i) for i in range(10)])",
     "lang": "python"
    }
   ],
   "recap": "A recurrence relation defines terms from earlier terms plus base cases; solving it gives a closed form, and recurrences are exactly how we analyze recursive algorithms' running time."
  },
  "quiz": [
   {
    "q": "A recurrence relation is incomplete without:",
    "options": [
     "A base case",
     "A quantifier",
     "A graph",
     "A closed-form solution"
    ],
    "answer": 0,
    "explain": "Without a base case, the recursive definition never bottoms out and can't be evaluated."
   },
   {
    "q": "Merge sort's running time recurrence T(n) = 2T(n/2) + n solves (via the Master Theorem) to:",
    "options": [
     "O(2^n)",
     "O(n²)",
     "O(n log n)",
     "O(n)"
    ],
    "answer": 2,
    "explain": "Splitting into two halves plus linear merge work is the textbook case that yields O(n log n)."
   },
   {
    "q": "'Solving' a recurrence means finding:",
    "options": [
     "A closed-form formula not referring to earlier terms",
     "A quantifier for the sequence",
     "A recursive function that never terminates",
     "The largest term in the sequence"
    ],
    "answer": 0,
    "explain": "A closed form computes the nth term directly, without recursively needing all previous terms."
   }
  ]
 },
 "discrete-math-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A tree is a connected graph with no cycles. Trees are the backbone of file systems, decision structures, and parsing — anywhere you need hierarchy without loops. A tree with n vertices always has exactly n − 1 edges; add one more edge and you create a cycle, so it stops being a tree."
    },
    {
     "type": "text",
     "text": "A spanning tree of a connected graph G is a subgraph that includes every vertex of G, uses only edges from G, and is itself a tree — connected, no cycles, using the fewest edges possible to keep everything reachable. A single graph can have many different spanning trees."
    },
    {
     "type": "text",
     "text": "When edges have weights (costs), a minimum spanning tree (MST) is the spanning tree with the smallest total edge weight — useful for laying cable or road networks as cheaply as possible while keeping every location connected. Kruskal's algorithm builds an MST greedily: sort all edges by weight, and add each one unless it would create a cycle."
    },
    {
     "type": "tip",
     "text": "Remember the edge count rule: any tree on n vertices has exactly n − 1 edges. If a question gives you a graph with n vertices and n − 1 edges and says it's connected, you can conclude immediately it's a tree — no need to check for cycles separately."
    },
    {
     "type": "code",
     "code": "# Kruskal's MST using union-find\ndef find(parent, x):\n    while parent[x] != x:\n        x = parent[x]\n    return x\n\nedges = [(1, 'A', 'B'), (4, 'B', 'C'), (2, 'A', 'C'), (3, 'C', 'D')]\nedges.sort()\nparent = {v: v for e in edges for v in (e[1], e[2])}\nmst, total = [], 0\nfor w, u, v in edges:\n    ru, rv = find(parent, u), find(parent, v)\n    if ru != rv:\n        parent[ru] = rv\n        mst.append((u, v, w))\n        total += w\nprint(mst, 'total weight:', total)",
     "lang": "python"
    }
   ],
   "recap": "A tree is a connected, cycle-free graph with n − 1 edges; a minimum spanning tree connects all vertices of a weighted graph at the lowest possible total cost, built greedily by algorithms like Kruskal's."
  },
  "quiz": [
   {
    "q": "A tree with 10 vertices has exactly how many edges?",
    "options": [
     "11",
     "20",
     "9",
     "10"
    ],
    "answer": 2,
    "explain": "A tree on n vertices always has n − 1 edges; here 10 − 1 = 9."
   },
   {
    "q": "A minimum spanning tree is defined for a graph whose edges have:",
    "options": [
     "Colors",
     "Labels only, no numeric value",
     "Directions only",
     "Weights (costs)"
    ],
    "answer": 3,
    "explain": "MST minimizes total edge weight, so it requires weighted edges to compare against."
   },
   {
    "q": "Kruskal's algorithm builds an MST by:",
    "options": [
     "Removing the heaviest edges one at a time",
     "Visiting vertices in alphabetical order",
     "Adding edges in increasing weight order, skipping any that would form a cycle",
     "Always picking edges connected to vertex 1 first"
    ],
    "answer": 2,
    "explain": "Kruskal's is a greedy algorithm: sort edges by weight, add each unless it creates a cycle."
   }
  ]
 },
 "discrete-math-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Traversal means visiting every reachable vertex of a graph in some systematic order. The two fundamental strategies are breadth-first search (BFS) and depth-first search (DFS), and nearly every graph algorithm — shortest path, cycle detection, connectivity — builds on one of them."
    },
    {
     "type": "text",
     "text": "BFS explores level by level: visit the start vertex, then all its direct neighbours, then all of their unvisited neighbours, and so on. It uses a queue (first-in-first-out) and naturally finds the shortest path in an unweighted graph, because it reaches vertices in increasing order of distance from the start."
    },
    {
     "type": "text",
     "text": "DFS explores as deep as possible along one path before backtracking. It uses a stack (or recursion, which is really a stack in disguise). DFS is the natural choice for tasks like detecting cycles, finding connected components, or exploring a maze — go as far as you can, then step back only when stuck."
    },
    {
     "type": "tip",
     "text": "Memory trick: BFS = Queue = 'spreads outward in rings, like ripples'. DFS = Stack = 'dives down one branch fully before trying another'. If a question asks for shortest path in an unweighted graph, the answer is BFS, not DFS."
    },
    {
     "type": "code",
     "code": "from collections import deque\n\ngraph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}\n\ndef bfs(start):\n    visited, order, q = {start}, [], deque([start])\n    while q:\n        u = q.popleft()\n        order.append(u)\n        for v in graph[u]:\n            if v not in visited:\n                visited.add(v)\n                q.append(v)\n    return order\n\nprint(bfs('A'))  # ['A', 'B', 'C', 'D']",
     "lang": "python"
    }
   ],
   "recap": "BFS (queue) explores level by level and finds shortest paths in unweighted graphs; DFS (stack/recursion) dives deep along one branch before backtracking, useful for cycle detection and component finding."
  },
  "quiz": [
   {
    "q": "Which data structure does BFS use to decide visit order?",
    "options": [
     "Priority heap",
     "Stack",
     "Queue",
     "Linked list only"
    ],
    "answer": 2,
    "explain": "BFS uses a first-in-first-out queue to explore neighbours level by level."
   },
   {
    "q": "For finding the shortest path in an unweighted graph, you should use:",
    "options": [
     "BFS",
     "Neither works on unweighted graphs",
     "DFS",
     "Either gives the same guarantee"
    ],
    "answer": 0,
    "explain": "BFS visits vertices in increasing order of distance from the source, guaranteeing shortest paths in unweighted graphs."
   },
   {
    "q": "DFS is naturally implemented using:",
    "options": [
     "Modular arithmetic",
     "A queue",
     "A stack or recursion",
     "A hash table only"
    ],
    "answer": 2,
    "explain": "DFS dives deep along a branch before backtracking, which matches stack (last-in-first-out) or recursive call behaviour."
   }
  ]
 },
 "discrete-math-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Boolean algebra is the algebra of true/false values, using AND (·), OR (+), and NOT (¯). It's the mathematical foundation of digital circuits: every logic gate in a processor is a physical implementation of a Boolean operation, and every Boolean expression can be built from AND, OR, and NOT gates."
    },
    {
     "type": "text",
     "text": "Key laws let you simplify expressions the same way algebra simplifies equations. De Morgan's laws are the most tested: ¬(A · B) = ¬A + ¬B, and ¬(A + B) = ¬A · ¬B. In words: 'not (A and B)' means 'not A, or not B'. Distributive, associative, and identity laws (A + 0 = A, A · 1 = A) work much like ordinary algebra."
    },
    {
     "type": "text",
     "text": "A truth table lists every combination of input values and the resulting output, and it's the ground truth for any Boolean expression — two expressions are equal exactly when their truth tables match on every row. Circuit designers simplify expressions (fewer gates) using these laws or tools like Karnaugh maps, because fewer gates means cheaper, faster, cooler-running hardware."
    },
    {
     "type": "tip",
     "text": "To apply De Morgan's law fast: push the NOT inside, flip AND to OR (or OR to AND), and negate each individual term. ¬(A + B + C) becomes ¬A · ¬B · ¬C — flip the operator, negate everything inside."
    },
    {
     "type": "code",
     "code": "def demorgan_check(a, b):\n    left  = not (a and b)\n    right = (not a) or (not b)\n    return left == right\n\nfor a in [True, False]:\n    for b in [True, False]:\n        print(a, b, demorgan_check(a, b))  # always True",
     "lang": "python"
    }
   ],
   "recap": "Boolean algebra (AND, OR, NOT) models digital logic gates; De Morgan's laws flip AND/OR while negating terms, and truth tables are the ultimate test of whether two expressions are equal."
  },
  "quiz": [
   {
    "q": "De Morgan's law states ¬(A · B) equals:",
    "options": [
     "¬A + ¬B",
     "A · B",
     "A + B",
     "¬A · ¬B"
    ],
    "answer": 0,
    "explain": "Negating an AND flips it to an OR of the negated terms: ¬A + ¬B."
   },
   {
    "q": "Two Boolean expressions are considered equal exactly when:",
    "options": [
     "They have the same number of terms",
     "Their truth tables match on every row",
     "They both simplify to a single variable",
     "They use the same variable names"
    ],
    "answer": 1,
    "explain": "A truth table captures every possible input combination, so identical tables mean identical logical behaviour."
   },
   {
    "q": "Simplifying a Boolean circuit to use fewer gates mainly benefits:",
    "options": [
     "Nothing, gate count is irrelevant",
     "Cost, speed, and power/heat of the hardware",
     "Making the circuit slower on purpose",
     "Only readability of the math"
    ],
    "answer": 1,
    "explain": "Fewer gates typically means cheaper, faster, and cooler-running physical hardware."
   }
  ]
 },
 "discrete-math-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A relation R on a set is a partial order if it is reflexive (a R a), antisymmetric (a R b and b R a implies a = b), and transitive (a R b and b R c implies a R c). The 'divides' relation on integers and the 'subset of' relation on sets are both partial orders. It's 'partial' because not every pair of elements needs to be comparable — 5 doesn't divide 7, and neither divides the other."
    },
    {
     "type": "text",
     "text": "A set with a partial order is called a poset. Posets are often drawn as Hasse diagrams: dots for elements, with a line going upward from a to b whenever a < b and there's no element strictly between them (redundant edges from transitivity are omitted to keep the picture clean)."
    },
    {
     "type": "text",
     "text": "A lattice is a poset where every pair of elements has both a unique least upper bound (join, written a ∨ b) and a unique greatest lower bound (meet, written a ∧ b). The subset relation on a power set is a lattice: the join of two sets is their union, and the meet is their intersection."
    },
    {
     "type": "tip",
     "text": "Do not confuse 'partial order' with 'total order' (like ≤ on real numbers, where every pair IS comparable). The word 'partial' is the exam signal that some pairs of elements may simply have no relation to each other at all."
    },
    {
     "type": "code",
     "code": "# check the divides relation is a partial order-style comparison\ndef divides(a, b):\n    return b % a == 0\n\npairs = [(2, 8), (3, 8), (5, 5)]\nfor a, b in pairs:\n    print(f'{a} divides {b}:', divides(a, b))\nprint('5 and 7 comparable under divides?', divides(5, 7) or divides(7, 5))  # False",
     "lang": "python"
    }
   ],
   "recap": "A partial order is reflexive, antisymmetric, and transitive but need not compare every pair; a lattice is a poset where every pair has a unique join (least upper bound) and meet (greatest lower bound)."
  },
  "quiz": [
   {
    "q": "A partial order must be reflexive, transitive, and:",
    "options": [
     "Antisymmetric",
     "Total",
     "Commutative",
     "Symmetric"
    ],
    "answer": 0,
    "explain": "Antisymmetry (a R b and b R a implies a = b) rules out two distinct elements being mutually related both ways."
   },
   {
    "q": "What distinguishes a partial order from a total order?",
    "options": [
     "A partial order need not compare every pair of elements",
     "A partial order has no reflexive elements",
     "There is no difference",
     "A total order is never transitive"
    ],
    "answer": 0,
    "explain": "In a total order every pair is comparable; a partial order allows some pairs to be incomparable, like 5 and 7 under 'divides'."
   },
   {
    "q": "In a lattice, the join of two elements a and b is:",
    "options": [
     "Their unique least upper bound",
     "Their unique greatest lower bound",
     "Always equal to a",
     "Their difference"
    ],
    "answer": 0,
    "explain": "The join (a ∨ b) is defined as the unique least element that is greater than or equal to both a and b."
   }
  ]
 },
 "discrete-math-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A group is a set G paired with an operation (like + or *) that satisfies four rules: closure (combining two elements of G gives another element of G), associativity ((a*b)*c = a*(b*c)), an identity element e (a*e = a for all a), and inverses (every a has some a⁻¹ with a*a⁻¹ = e). Groups formalize the idea of 'symmetry' and 'reversible operations'."
    },
    {
     "type": "text",
     "text": "A concrete example: the integers under addition form a group. Closure holds (integer + integer = integer), 0 is the identity (a + 0 = a), and every a has an inverse −a (a + (−a) = 0). But the integers under multiplication are NOT a group, because most elements (like 2) have no integer inverse — 1/2 isn't an integer."
    },
    {
     "type": "text",
     "text": "Modular arithmetic gives another classic group: the integers {0, 1, ..., n−1} under addition mod n. This is exactly the structure behind clock arithmetic, cyclic codes, and much of cryptography, where operations 'wrap around' inside a finite set instead of running off to infinity."
    },
    {
     "type": "tip",
     "text": "To check whether a structure is a group, go through the four rules in order — closure, associativity, identity, inverses — and stop at the first one that fails. Missing inverses (like integers under multiplication) is the single most common way a candidate structure fails to be a group."
    },
    {
     "type": "code",
     "code": "n = 5\nelements = list(range(n))  # {0,1,2,3,4} under addition mod 5\nidentity = 0\nfor a in elements:\n    inv = [b for b in elements if (a + b) % n == identity][0]\n    print(f'inverse of {a} is {inv}')  # every element has one",
     "lang": "python"
    }
   ],
   "recap": "A group needs closure, associativity, an identity element, and inverses for every element; integers under addition and integers mod n under addition are classic examples, while integers under multiplication fail because inverses are missing."
  },
  "quiz": [
   {
    "q": "Which of these is NOT one of the four group axioms?",
    "options": [
     "Inverses",
     "Closure",
     "Identity element",
     "Commutativity"
    ],
    "answer": 3,
    "explain": "Commutativity (a*b = b*a) is not required for a group in general — groups without it are called non-abelian; the four required axioms are closure, associativity, identity, and inverses."
   },
   {
    "q": "Why do the integers under multiplication fail to form a group?",
    "options": [
     "Most elements have no integer multiplicative inverse",
     "There is no identity element",
     "Multiplication isn't closed on integers",
     "Multiplication isn't associative"
    ],
    "answer": 0,
    "explain": "1 is the identity, and multiplication is closed and associative, but an element like 2 has no integer inverse (1/2 isn't an integer)."
   },
   {
    "q": "The integers {0, ..., n−1} under addition mod n form a group whose identity element is:",
    "options": [
     "n − 1",
     "n",
     "0",
     "1"
    ],
    "answer": 2,
    "explain": "Adding 0 to any element mod n leaves it unchanged, so 0 is the identity element."
   }
  ]
 },
 "discrete-math-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Graph coloring assigns a color to every vertex so that no two adjacent vertices share the same color. The chromatic number χ(G) is the smallest number of colors that makes this possible. Coloring models scheduling problems: vertices are exams, edges connect exams sharing a student, and colors are time slots — no student should have two exams at once."
    },
    {
     "type": "text",
     "text": "A graph is bipartite exactly when χ(G) = 2 — its vertices split into two groups where all edges go between the groups, never within one. A graph is bipartite if and only if it contains no odd-length cycle; this is a clean, testable characterization used constantly in exams and in real scheduling and matching problems."
    },
    {
     "type": "text",
     "text": "A matching is a set of edges with no shared vertices — each vertex touches at most one chosen edge. A perfect matching covers every vertex exactly once, pairing everyone up with no one left over. Matching problems model pairing tasks to workers, or students to hostel rooms, where each pairing must be exclusive."
    },
    {
     "type": "tip",
     "text": "Four Color Theorem trivia worth remembering for interviews: any planar graph (drawable without edge crossings, like a political map) needs at most 4 colors. It's one of the few major theorems proved with heavy computer assistance, back in 1976."
    },
    {
     "type": "code",
     "code": "# greedy graph coloring\ngraph = {'A': ['B', 'C'], 'B': ['A', 'C'], 'C': ['A', 'B', 'D'], 'D': ['C']}\ncolor = {}\nfor v in graph:\n    used = {color[n] for n in graph[v] if n in color}\n    c = 0\n    while c in used:\n        c += 1\n    color[v] = c\nprint(color)  # e.g. {'A': 0, 'B': 1, 'C': 2, 'D': 0}",
     "lang": "python"
    }
   ],
   "recap": "Graph coloring assigns colors so adjacent vertices differ, with the chromatic number as the minimum count; bipartite graphs need only 2 colors and have no odd cycles; a matching pairs vertices via disjoint edges, perfectly when everyone is paired."
  },
  "quiz": [
   {
    "q": "The chromatic number of a graph is:",
    "options": [
     "The smallest number of colors needed so adjacent vertices differ",
     "The number of vertices",
     "Always equal to 2",
     "The number of edges"
    ],
    "answer": 0,
    "explain": "χ(G) is defined as the minimum colors required for a proper coloring where no edge joins two same-colored vertices."
   },
   {
    "q": "A graph is bipartite if and only if it:",
    "options": [
     "Has no cycles at all",
     "Is a tree",
     "Has exactly 2 vertices",
     "Contains no odd-length cycle"
    ],
    "answer": 3,
    "explain": "Bipartiteness (2-colorability) is exactly equivalent to having no odd cycles."
   },
   {
    "q": "A perfect matching is a matching that:",
    "options": [
     "Uses only 2 colors",
     "Has no edges at all",
     "Uses every edge in the graph",
     "Covers every vertex exactly once"
    ],
    "answer": 3,
    "explain": "A perfect matching pairs up all vertices, with each vertex touched by exactly one chosen edge."
   }
  ]
 },
 "discrete-math-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Complexity theory classifies problems by how their running time scales with input size. P is the class of problems solvable in polynomial time (n, n², n³, ...) — considered 'efficiently solvable'. NP is the class of problems whose solution, once given, can be VERIFIED in polynomial time, even if finding it might take much longer. Every problem in P is also in NP, because if you can solve it fast, you can certainly check a proposed solution fast too."
    },
    {
     "type": "text",
     "text": "A problem is NP-complete if it's in NP, and every other NP problem can be transformed into it in polynomial time (a 'polynomial reduction'). This means NP-complete problems are the hardest problems in NP — solve any one of them efficiently, and you've efficiently solved ALL of NP. The Boolean satisfiability problem (SAT) was the first proven NP-complete, and thousands of others (like the Traveling Salesman Problem and graph coloring for k ≥ 3 colors) have since been shown equivalent to it via reductions."
    },
    {
     "type": "text",
     "text": "The P vs NP question — whether P actually equals NP — is the most famous open problem in computer science, carrying a $1 million Clay Millennium Prize. Almost every researcher believes P ≠ NP (that some problems are genuinely hard to solve even though solutions are easy to check), but no one has proved it. This is exactly why interviewers ask about it: recognizing an NP-complete problem tells you to stop hunting for a fast exact algorithm and instead reach for heuristics, approximations, or restrictions on the input."
    },
    {
     "type": "tip",
     "text": "Interview pattern to remember: if a problem 'smells like' checking all subsets, all orderings, or all assignments (subset sum, TSP, SAT, graph coloring, clique) it is very likely NP-complete. Naming that fact out loud in an interview, then pivoting to a greedy or approximate solution, often matters more than trying to force an exact polynomial algorithm that doesn't exist."
    },
    {
     "type": "code",
     "code": "# brute-force subset-sum check: NP problem — easy to VERIFY, hard to SOLVE at scale\ndef has_subset_sum(nums, target):\n    n = len(nums)\n    for mask in range(1 << n):          # 2^n subsets: exponential\n        total = sum(nums[i] for i in range(n) if mask & (1 << i))\n        if total == target:\n            return True\n    return False\n\nprint(has_subset_sum([3, 7, 2, 9], 12))  # True: 3+2+7",
     "lang": "python"
    }
   ],
   "recap": "P is efficiently solvable problems, NP is efficiently verifiable ones, and NP-complete problems are the hardest in NP — whether P equals NP remains discrete mathematics' most famous open question."
  },
  "quiz": [
   {
    "q": "A problem being in NP means:",
    "options": [
     "It cannot be solved by any computer",
     "A proposed solution can be verified in polynomial time",
     "It must be solved in constant time",
     "It has no solution at all"
    ],
    "answer": 1,
    "explain": "NP stands for problems where a given candidate solution's correctness can be checked quickly, even if finding one might be slow."
   },
   {
    "q": "An NP-complete problem is characterized by:",
    "options": [
     "Being in NP and having every other NP problem reducible to it in polynomial time",
     "Only applying to graph problems",
     "Being easier than every problem in P",
     "Never having a known algorithm at all"
    ],
    "answer": 0,
    "explain": "NP-complete problems are the hardest in NP: solving one efficiently would solve all of NP efficiently, via polynomial reductions."
   },
   {
    "q": "The P vs NP question asks:",
    "options": [
     "Whether NP-complete problems exist",
     "Whether every efficiently verifiable problem is also efficiently solvable",
     "Whether every problem has a solution",
     "Whether graphs can be colored"
    ],
    "answer": 1,
    "explain": "P vs NP asks whether P = NP, i.e., whether being fast to check implies being fast to solve; it remains unresolved."
   }
  ]
 }
}
