// Lesson text and quiz questions for "Design & Analysis of Algorithms".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "daa-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An algorithm is just a clear, finite set of steps that turns some input into a desired output — like a recipe that turns ingredients into a dish. For any real problem there are usually many algorithms that all give the correct answer, so 'correct' is only the starting point."
    },
    {
     "type": "text",
     "text": "Algorithm analysis asks the next question: how GOOD is this algorithm? Mainly we care about two costs — time (how many steps it runs) and space (how much memory it uses). We want to compare algorithms without actually running them on every machine."
    },
    {
     "type": "text",
     "text": "The trick is to count the work as a function of the input size, usually called n. If a list has n items, we ask 'roughly how many operations happen as n grows?' A stopwatch depends on your CPU and mood of the day; counting steps as a function of n is fair and machine-independent."
    },
    {
     "type": "tip",
     "text": "Think of it like comparing two routes to school: don't time one on a bike and one in a car. Count the number of turns and distance — that comparison is fair no matter the vehicle."
    },
    {
     "type": "text",
     "text": "We also separate best case, worst case, and average case. The worst case matters most in engineering because it tells you the guarantee: no matter how nasty the input, the algorithm will not be slower than this."
    }
   ],
   "recap": "Algorithm analysis measures an algorithm's time and space as a function of input size n, so we can compare solutions fairly without depending on a specific machine."
  },
  "quiz": [
   {
    "q": "What does algorithm analysis mainly measure?",
    "options": [
     "How pretty the code looks",
     "The programmer's typing speed",
     "Time and space used as input size grows",
     "The number of lines of code"
    ],
    "answer": 2,
    "explain": "Analysis focuses on time and space costs expressed as a function of the input size n."
   },
   {
    "q": "Why do we count steps as a function of n instead of using a stopwatch?",
    "options": [
     "Stopwatches are expensive",
     "To make code run faster automatically",
     "So the comparison is fair across different machines",
     "Because n is always small"
    ],
    "answer": 2,
    "explain": "Wall-clock time depends on hardware; counting operations by input size gives a machine-independent, fair comparison."
   },
   {
    "q": "Which case usually gives the most important engineering guarantee?",
    "options": [
     "Luckiest case",
     "Shortest case",
     "Worst case",
     "Best case"
    ],
    "answer": 2,
    "explain": "The worst case tells you the maximum work the algorithm will ever do, which is the safety guarantee."
   },
   {
    "q": "An algorithm must always be:",
    "options": [
     "Randomly ordered",
     "Written in C",
     "Longer than 100 lines",
     "A finite sequence of well-defined steps"
    ],
    "answer": 3,
    "explain": "By definition an algorithm is a finite, clearly defined series of steps producing an output."
   }
  ]
 },
 "daa-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When n gets large, we don't care about exact step counts — we care about the growth rate. Big-O notation describes the upper bound of that growth: O(f(n)) means the running time grows no faster than f(n) as n heads to infinity."
    },
    {
     "type": "text",
     "text": "Two rules make Big-O simple. First, drop constants: 5n and 100n are both O(n). Second, keep only the fastest-growing term: n^2 + n + 7 is O(n^2), because for large n the n^2 term dwarfs everything else."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# O(n): the loop runs n times\ndef sum_list(nums):\n    total = 0\n    for x in nums:      # n iterations\n        total += x\n    return total\n\n# O(n^2): a loop inside a loop\ndef has_pair(nums, target):\n    for i in range(len(nums)):\n        for j in range(len(nums)):   # n * n work\n            if nums[i] + nums[j] == target:\n                return True\n    return False"
    },
    {
     "type": "text",
     "text": "Common classes from fastest to slowest: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n^2) quadratic, O(2^n) exponential. Doubling the input barely touches an O(log n) algorithm but roughly quadruples an O(n^2) one."
    },
    {
     "type": "tip",
     "text": "Big-O is like a speed-limit sign: it promises you won't go FASTER-growing than this. Omega (Ω) is the lower bound and Theta (Θ) means the bound is tight from both sides."
    }
   ],
   "recap": "Big-O expresses the upper-bound growth rate of an algorithm; drop constants and lower-order terms, and know the ladder from O(1) up to O(2^n)."
  },
  "quiz": [
   {
    "q": "What is the Big-O of 3n^2 + 10n + 50?",
    "options": [
     "O(50)",
     "O(n^3)",
     "O(n^2)",
     "O(n)"
    ],
    "answer": 2,
    "explain": "We keep only the fastest-growing term and drop constants, leaving O(n^2)."
   },
   {
    "q": "Two nested loops each running n times give what complexity?",
    "options": [
     "O(2n)",
     "O(n^2)",
     "O(log n)",
     "O(n)"
    ],
    "answer": 1,
    "explain": "n iterations inside n iterations is n times n, which is O(n^2)."
   },
   {
    "q": "Which growth rate is the fastest (best) for large n?",
    "options": [
     "O(n^2)",
     "O(log n)",
     "O(2^n)",
     "O(n)"
    ],
    "answer": 1,
    "explain": "Logarithmic growth increases the slowest, so it scales best as n grows."
   },
   {
    "q": "Big-O notation describes which kind of bound?",
    "options": [
     "A lower bound",
     "An exact count",
     "The memory address",
     "An upper bound on growth"
    ],
    "answer": 3,
    "explain": "Big-O gives an asymptotic upper bound — the running time grows no faster than this."
   }
  ]
 },
 "daa-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Divide and conquer is a design strategy with three moves: DIVIDE the problem into smaller subproblems of the same type, CONQUER each subproblem (usually by recursion), and COMBINE their answers into the solution for the whole. It works best when the subproblems are independent."
    },
    {
     "type": "text",
     "text": "The classic example is merge sort. Split the array in half, sort each half recursively, then merge the two sorted halves. Splitting takes log n levels of division, and merging each level costs O(n), giving a total of O(n log n) — much better than the O(n^2) of simple sorts."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def merge_sort(a):\n    if len(a) <= 1:            # base case\n        return a\n    mid = len(a) // 2\n    left = merge_sort(a[:mid])   # divide + conquer\n    right = merge_sort(a[mid:])\n    return merge(left, right)    # combine\n\ndef merge(l, r):\n    out, i, j = [], 0, 0\n    while i < len(l) and j < len(r):\n        if l[i] <= r[j]:\n            out.append(l[i]); i += 1\n        else:\n            out.append(r[j]); j += 1\n    out.extend(l[i:]); out.extend(r[j:])\n    return out"
    },
    {
     "type": "text",
     "text": "Binary search is another example: to find a value in a sorted array, check the middle. If the target is smaller, search the left half; if larger, search the right. Each step throws away half the data, so it runs in O(log n)."
    },
    {
     "type": "tip",
     "text": "Every recursion needs a base case — the smallest subproblem you can answer directly (like a 1-element array is already sorted). Forget it and the recursion never stops."
    }
   ],
   "recap": "Divide and conquer splits a problem into like subproblems, solves them recursively, and combines results; merge sort (O(n log n)) and binary search (O(log n)) are the canonical examples."
  },
  "quiz": [
   {
    "q": "What are the three phases of divide and conquer?",
    "options": [
     "Sort, filter, print",
     "Divide, conquer, combine",
     "Loop, break, return",
     "Read, write, close"
    ],
    "answer": 1,
    "explain": "The strategy divides into subproblems, conquers each recursively, then combines the results."
   },
   {
    "q": "What is the time complexity of merge sort?",
    "options": [
     "O(n^2)",
     "O(n)",
     "O(n log n)",
     "O(2^n)"
    ],
    "answer": 2,
    "explain": "There are log n levels of splitting and O(n) work merging per level, giving O(n log n)."
   },
   {
    "q": "Why does binary search run in O(log n)?",
    "options": [
     "It checks every element once",
     "It uses two loops",
     "It sorts first",
     "It discards half the data each step"
    ],
    "answer": 3,
    "explain": "Each comparison eliminates half the remaining elements, so the count halves repeatedly — logarithmic."
   },
   {
    "q": "What must every recursive divide-and-conquer algorithm include?",
    "options": [
     "A global variable",
     "A sorting step",
     "A base case",
     "A print statement"
    ],
    "answer": 2,
    "explain": "A base case handles the smallest subproblem directly and stops the recursion from running forever."
   }
  ]
 },
 "daa-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A greedy algorithm builds a solution one step at a time, always taking the choice that looks best RIGHT NOW, and never reconsiders. It never looks back or plans ahead — it just grabs the locally optimal option and hopes that leads to a globally optimal answer."
    },
    {
     "type": "text",
     "text": "The magic is that for some problems this actually works perfectly. A classic is the coin change problem with standard currency: to make an amount, keep taking the largest coin that fits. For most real coin systems this gives the fewest coins."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def greedy_coins(amount, coins):\n    coins = sorted(coins, reverse=True)  # biggest first\n    result = []\n    for c in coins:\n        while amount >= c:\n            amount -= c        # take it now, no regrets\n            result.append(c)\n    return result\n\nprint(greedy_coins(87, [1, 5, 10, 25]))\n# [25, 25, 25, 10, 1, 1]"
    },
    {
     "type": "text",
     "text": "But greedy is not a silver bullet. With coins [1, 3, 4] making 6, greedy grabs 4 then 1 then 1 (three coins), while the true best is 3 + 3 (two coins). Greedy fails whenever a locally best choice blocks a better overall solution."
    },
    {
     "type": "text",
     "text": "A greedy method is only guaranteed correct when the problem has two properties: the greedy-choice property (a local best choice is safe) and optimal substructure (an optimal solution contains optimal solutions to its subproblems). Activity selection and Huffman coding are famous greedy successes."
    },
    {
     "type": "tip",
     "text": "Greedy is like hiking to the highest peak by always stepping uphill — fast and simple, but you can get stuck on a small hill and miss the tallest mountain across the valley."
    }
   ],
   "recap": "Greedy algorithms make the locally best choice at each step; they're fast and simple but only correct when the problem has the greedy-choice property and optimal substructure."
  },
  "quiz": [
   {
    "q": "How does a greedy algorithm make decisions?",
    "options": [
     "It picks randomly",
     "It tries all combinations",
     "It picks the best-looking option at each step and never reconsiders",
     "It works backward from the answer"
    ],
    "answer": 2,
    "explain": "Greedy takes the locally optimal choice at each step and does not revisit past decisions."
   },
   {
    "q": "With coins [1, 3, 4] to make 6, why does greedy fail?",
    "options": [
     "It runs forever",
     "It uses too much memory",
     "It picks 4+1+1 instead of the better 3+3",
     "It has no coins"
    ],
    "answer": 2,
    "explain": "Greedy grabs the largest coin (4) first, leading to three coins, while 3+3 uses only two."
   },
   {
    "q": "Which two properties guarantee a greedy solution is optimal?",
    "options": [
     "Greedy-choice property and optimal substructure",
     "Recursion and memoization",
     "Base case and loop",
     "Sorting and searching"
    ],
    "answer": 0,
    "explain": "A greedy algorithm is provably optimal only when both the greedy-choice property and optimal substructure hold."
   },
   {
    "q": "Which of these is a classic correct greedy algorithm?",
    "options": [
     "Huffman coding",
     "Binary search",
     "Bubble sort",
     "Merge sort"
    ],
    "answer": 0,
    "explain": "Huffman coding builds an optimal prefix code by greedily merging the two lowest-frequency nodes."
   }
  ]
 },
 "daa-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Dynamic programming (DP) solves problems that break into overlapping subproblems — the same smaller problem is needed again and again. Instead of recomputing it, DP solves each subproblem once and STORES the answer, then reuses it. Trading a little memory for a lot of speed."
    },
    {
     "type": "text",
     "text": "Take Fibonacci. Plain recursion recomputes fib(3) many times and blows up to O(2^n). If we remember each result, every fib(k) is computed once and the whole thing drops to O(n). That storing trick is called memoization (top-down)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Top-down: memoization\ndef fib_memo(n, cache={}):\n    if n <= 1:\n        return n\n    if n in cache:\n        return cache[n]        # reuse stored answer\n    cache[n] = fib_memo(n-1) + fib_memo(n-2)\n    return cache[n]\n\n# Bottom-up: tabulation\ndef fib_tab(n):\n    if n <= 1:\n        return n\n    dp = [0, 1]\n    for i in range(2, n+1):\n        dp.append(dp[i-1] + dp[i-2])\n    return dp[n]"
    },
    {
     "type": "text",
     "text": "DP comes in two flavours. Top-down (memoization) writes the natural recursion and caches results. Bottom-up (tabulation) fills a table starting from the smallest subproblems up to the answer. Both compute each subproblem exactly once."
    },
    {
     "type": "text",
     "text": "DP needs the same optimal substructure as greedy, PLUS overlapping subproblems. The difference: greedy commits to one choice immediately, while DP explores the choices, remembers their results, and picks the best. That's why DP solves coins [1,3,4]=6 correctly where greedy failed. Famous DP problems: 0/1 knapsack, longest common subsequence, matrix chain multiplication."
    },
    {
     "type": "tip",
     "text": "Memoization is like keeping your worked-out homework answers on sticky notes — when the same sub-question appears again, you read the note instead of solving it from scratch."
    }
   ],
   "recap": "Dynamic programming solves overlapping subproblems once and stores the results (via memoization or tabulation), turning exponential recomputation into efficient reuse."
  },
  "quiz": [
   {
    "q": "What kind of problems is dynamic programming designed for?",
    "options": [
     "Only sorting problems",
     "Problems that never repeat work",
     "Problems with no subproblems",
     "Problems with overlapping subproblems and optimal substructure"
    ],
    "answer": 3,
    "explain": "DP shines when subproblems overlap and the problem has optimal substructure, letting stored results be reused."
   },
   {
    "q": "Memoizing recursive Fibonacci changes its time from O(2^n) to what?",
    "options": [
     "O(log n)",
     "O(n)",
     "O(2^n) still",
     "O(n^2)"
    ],
    "answer": 1,
    "explain": "Caching means each fib(k) is computed once, giving linear O(n) time."
   },
   {
    "q": "What is the key difference between greedy and DP?",
    "options": [
     "DP explores and remembers choices; greedy commits to one immediately",
     "They are identical",
     "DP is always slower",
     "Greedy uses recursion, DP never does"
    ],
    "answer": 0,
    "explain": "Greedy locks in the local best at once, while DP evaluates options and stores results to choose the true optimum."
   },
   {
    "q": "Which term describes the bottom-up DP approach?",
    "options": [
     "Backtracking",
     "Memoization",
     "Tabulation",
     "Recursion"
    ],
    "answer": 2,
    "explain": "Tabulation fills a table from the smallest subproblems upward, the bottom-up form of DP."
   }
  ]
 },
 "daa-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Backtracking is a systematic way to search through all possible configurations of a solution. You build a candidate one piece at a time, and the moment a partial candidate cannot possibly lead to a valid answer, you abandon it — you 'backtrack' — and try a different piece."
    },
    {
     "type": "text",
     "text": "Picture exploring a maze. You walk down a path; if it dead-ends, you don't teleport — you retrace your steps to the last junction and try another direction. That retrace-and-retry is exactly backtracking. Conceptually it explores a tree of choices using depth-first search."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Solve N-Queens: place queens so none attack each other\ndef solve(board, col, n):\n    if col == n:\n        return True            # all queens placed\n    for row in range(n):\n        if is_safe(board, row, col, n):\n            board[row][col] = 1        # choose\n            if solve(board, col + 1, n):\n                return True\n            board[row][col] = 0        # UNDO: backtrack\n    return False               # no row worked, back up"
    },
    {
     "type": "text",
     "text": "The powerful part is PRUNING. Instead of generating every full configuration and checking it (brute force), backtracking rejects a whole branch as soon as a constraint is violated. Cutting a bad branch early can save a huge amount of work."
    },
    {
     "type": "text",
     "text": "Classic backtracking problems include N-Queens, Sudoku solving, generating all permutations, the subset-sum problem, and maze/path finding. In the worst case it can still be exponential, but good pruning usually makes it practical."
    },
    {
     "type": "tip",
     "text": "The core pattern is: choose, explore, un-choose. Always remember to UNDO your last choice before trying the next one — that undo step is what makes it backtracking rather than a one-way search."
    }
   ],
   "recap": "Backtracking incrementally builds candidates and abandons a partial solution the instant it can't succeed, pruning bad branches; the pattern is choose, explore, un-choose (as in N-Queens and Sudoku)."
  },
  "quiz": [
   {
    "q": "What does an algorithm do when it 'backtracks'?",
    "options": [
     "Undoes the last choice and tries a different one",
     "Sorts the input",
     "Prints the answer",
     "Starts over from scratch"
    ],
    "answer": 0,
    "explain": "Backtracking abandons the current partial choice and returns to try an alternative at the previous step."
   },
   {
    "q": "How does backtracking improve over pure brute force?",
    "options": [
     "It prunes branches that can't lead to a valid solution",
     "It uses more memory",
     "It never fails",
     "It ignores constraints"
    ],
    "answer": 0,
    "explain": "By rejecting a partial candidate as soon as it violates a constraint, backtracking skips entire hopeless branches."
   },
   {
    "q": "Which problem is a classic use of backtracking?",
    "options": [
     "Fibonacci with memoization",
     "N-Queens",
     "Merge sort",
     "Binary search"
    ],
    "answer": 1,
    "explain": "N-Queens is a textbook backtracking problem: place queens one column at a time and undo when stuck."
   },
   {
    "q": "What is the essential three-step backtracking pattern?",
    "options": [
     "Divide, conquer, combine",
     "Read, write, close",
     "Push, pop, peek",
     "Choose, explore, un-choose"
    ],
    "answer": 3,
    "explain": "You make a choice, explore further, and then un-choose (undo) it before trying the next option."
   }
  ]
 },
 "daa-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A graph is a set of vertices (nodes) connected by edges. It models anything with relationships: cities linked by roads, people linked by friendships, web pages linked by hyperlinks. Edges can be directed (one-way) or undirected, and weighted (carrying a cost like distance) or unweighted."
    },
    {
     "type": "text",
     "text": "Two fundamental ways to traverse a graph. Breadth-First Search (BFS) explores level by level using a queue, visiting all neighbours before going deeper — it finds the shortest path in terms of edge COUNT in an unweighted graph. Depth-First Search (DFS) plunges as deep as possible using a stack (or recursion) before backing up."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from collections import deque\n\ndef bfs(graph, start):\n    visited = {start}\n    queue = deque([start])\n    order = []\n    while queue:\n        node = queue.popleft()   # FIFO queue\n        order.append(node)\n        for nbr in graph[node]:\n            if nbr not in visited:\n                visited.add(nbr)\n                queue.append(nbr)\n    return order\n\ngraph = {'A': ['B','C'], 'B': ['D'], 'C': ['D'], 'D': []}\nprint(bfs(graph, 'A'))   # ['A', 'B', 'C', 'D']"
    },
    {
     "type": "text",
     "text": "When edges have weights (like road distances), plain BFS is not enough. Dijkstra's algorithm finds the shortest weighted path from a source by greedily expanding the closest unvisited vertex, using a priority queue. It's essentially the engine behind GPS route-finding, and it requires non-negative edge weights."
    },
    {
     "type": "text",
     "text": "Other essential graph algorithms build on these ideas: minimum spanning tree algorithms (Kruskal, Prim) connect all vertices at the least total cost, and topological sort orders tasks that depend on each other. Notice how BFS/DFS, greedy (Dijkstra, Prim), and DP-style relaxation all reappear here — graph algorithms tie the whole course together."
    },
    {
     "type": "tip",
     "text": "Remember the containers: BFS uses a QUEUE (first in, first out — explore wide), DFS uses a STACK (last in, first out — explore deep). The data structure you pick decides the traversal shape."
    }
   ],
   "recap": "Graphs model relationships with vertices and edges; BFS (queue, shortest unweighted path) and DFS (stack, go deep) are the core traversals, while Dijkstra's greedy algorithm finds shortest weighted paths."
  },
  "quiz": [
   {
    "q": "Which data structure does Breadth-First Search use?",
    "options": [
     "A queue",
     "A hash map only",
     "A stack",
     "A binary tree"
    ],
    "answer": 0,
    "explain": "BFS uses a FIFO queue to visit all neighbours at one level before going deeper."
   },
   {
    "q": "In an unweighted graph, BFS from a source finds what?",
    "options": [
     "The longest path",
     "The most expensive path",
     "A random path",
     "The shortest path by number of edges"
    ],
    "answer": 3,
    "explain": "Because BFS explores level by level, the first time it reaches a node is via the fewest edges."
   },
   {
    "q": "Which algorithm finds shortest paths in a weighted graph with non-negative weights?",
    "options": [
     "Binary search",
     "Depth-First Search alone",
     "Bubble sort",
     "Dijkstra's algorithm"
    ],
    "answer": 3,
    "explain": "Dijkstra's algorithm greedily expands the closest vertex using a priority queue to find shortest weighted paths."
   },
   {
    "q": "What do Kruskal's and Prim's algorithms compute?",
    "options": [
     "A sorted array",
     "A hash table",
     "The longest cycle",
     "A minimum spanning tree"
    ],
    "answer": 3,
    "explain": "Both build a minimum spanning tree that connects all vertices with the least total edge cost."
   }
  ]
 },
 "daa-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Divide-and-conquer algorithms like merge sort call themselves on smaller inputs, so their running time is naturally written as a recurrence relation — an equation that defines T(n) in terms of T of a smaller n. For merge sort: T(n) = 2T(n/2) + n, because it makes two half-size calls and then spends n steps merging."
    },
    {
     "type": "text",
     "text": "Solving a recurrence by hand every time is slow, so there is a shortcut called the Master Theorem. For a recurrence of the form T(n) = aT(n/b) + f(n), you compare f(n) against n^(log_b a). Whichever grows faster tends to dominate the total running time."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# T(n) = 2T(n/2) + n  ->  a=2, b=2, f(n)=n\n# log_b(a) = log2(2) = 1, so compare f(n)=n against n^1\n# they match (Case 2) -> T(n) = n * log(n)\n\n# T(n) = T(n/2) + 1   (binary search)\n# a=1, b=2, f(n)=1, n^0 = 1, they match -> T(n) = log(n)\n\n# T(n) = 2T(n/2) + 1  (like a simple binary tree traversal)\n# n^1 grows faster than f(n)=1 -> T(n) = n"
    },
    {
     "type": "text",
     "text": "In plain words: if the work done outside the recursive calls (f(n)) is small compared to the number and size of the recursive calls, the recursion tree itself dominates the cost. If the outside work is large, that dominates instead. If they are balanced, you get an extra log(n) factor, exactly like merge sort's n log n."
    },
    {
     "type": "tip",
     "text": "You don't need to memorise the three Master Theorem cases word for word for most exams — just remember to identify a (branches), b (shrink factor), and f(n) (work per call), then compare f(n) to n^(log_b a)."
    }
   ],
   "recap": "A recurrence relation like T(n) = aT(n/b) + f(n) captures a divide-and-conquer algorithm's cost; the Master Theorem lets you solve it quickly by comparing f(n) to n^(log_b a)."
  },
  "quiz": [
   {
    "q": "What recurrence relation describes merge sort's running time?",
    "options": [
     "T(n) = T(n-1) + n",
     "T(n) = T(n/2) + 1",
     "T(n) = 2T(n/2) + n",
     "T(n) = 2T(n) + 1"
    ],
    "answer": 2,
    "explain": "Merge sort makes two recursive calls on half-size inputs and spends n steps merging, giving T(n) = 2T(n/2) + n."
   },
   {
    "q": "In T(n) = aT(n/b) + f(n), what does 'a' represent?",
    "options": [
     "The base case value",
     "The size of the input",
     "The time to merge results",
     "The number of recursive calls made"
    ],
    "answer": 3,
    "explain": "'a' is how many recursive sub-calls the function makes at each step."
   },
   {
    "q": "What is the point of the Master Theorem?",
    "options": [
     "To sort an array",
     "To write recursive code faster",
     "To prove an algorithm is correct",
     "To quickly find the closed-form running time of a divide-and-conquer recurrence"
    ],
    "answer": 3,
    "explain": "It gives a shortcut for solving T(n) = aT(n/b) + f(n) without expanding the recursion tree by hand every time."
   },
   {
    "q": "For T(n) = T(n/2) + 1, what is the running time?",
    "options": [
     "O(1)",
     "O(log n)",
     "O(n)",
     "O(n log n)"
    ],
    "answer": 1,
    "explain": "This is the binary search pattern: one recursive call on half the input plus constant work, giving O(log n)."
   }
  ]
 },
 "daa-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A spanning tree of a connected graph touches every vertex using the fewest possible edges (exactly V-1 of them) with no cycles. A minimum spanning tree (MST) is the spanning tree whose edges add up to the smallest total weight — think of laying the cheapest possible network of cables to connect every city."
    },
    {
     "type": "text",
     "text": "Kruskal's algorithm is greedy on edges: sort all edges by weight, then repeatedly add the cheapest edge that does not create a cycle, until every vertex is connected. To check 'would this create a cycle?' quickly, it uses a Union-Find (disjoint set) structure."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def kruskal(n, edges):\n    parent = list(range(n))\n    def find(x):\n        while parent[x] != x:\n            x = parent[x]\n        return x\n    edges.sort(key=lambda e: e[2])   # sort by weight\n    mst_weight = 0\n    for u, v, w in edges:\n        ru, rv = find(u), find(v)\n        if ru != rv:            # adding this edge won't form a cycle\n            parent[ru] = rv\n            mst_weight += w\n    return mst_weight"
    },
    {
     "type": "text",
     "text": "Prim's algorithm is greedy on vertices instead: start from any one vertex and grow the tree by always adding the cheapest edge that connects a new vertex to the tree so far, using a priority queue (min-heap). Kruskal tends to suit sparse graphs (few edges); Prim tends to suit dense graphs (many edges), because it never needs to sort all edges up front."
    },
    {
     "type": "tip",
     "text": "Both Kruskal and Prim are greedy, and both provably give the true minimum — this is one of the rare cases where the greedy choice is guaranteed optimal, unlike in general 0/1 knapsack."
    }
   ],
   "recap": "A minimum spanning tree connects all vertices with the least total edge weight; Kruskal grows it by picking the cheapest non-cycle-forming edge globally (with Union-Find), while Prim grows it outward from one vertex using a priority queue."
  },
  "quiz": [
   {
    "q": "How many edges does a spanning tree of a graph with V vertices have?",
    "options": [
     "V - 1",
     "V",
     "V + 1",
     "2V"
    ],
    "answer": 0,
    "explain": "A spanning tree connects all V vertices with no cycles, which always takes exactly V - 1 edges."
   },
   {
    "q": "What data structure does Kruskal's algorithm use to detect cycles quickly?",
    "options": [
     "A binary search tree",
     "A stack",
     "Union-Find (disjoint set)",
     "A hash map"
    ],
    "answer": 2,
    "explain": "Union-Find efficiently answers 'are these two vertices already connected?' which is exactly what's needed to avoid cycles."
   },
   {
    "q": "What is the first step of Kruskal's algorithm?",
    "options": [
     "Remove the heaviest edge",
     "Pick a random starting vertex",
     "Run BFS from every vertex",
     "Sort all edges by weight"
    ],
    "answer": 3,
    "explain": "Kruskal processes edges in increasing order of weight, so sorting them is the first step."
   },
   {
    "q": "How does Prim's algorithm differ in approach from Kruskal's?",
    "options": [
     "Prim ignores edge weights",
     "Prim requires all weights to be equal",
     "Prim only works on directed graphs",
     "Prim grows the tree outward from one starting vertex; Kruskal picks edges globally"
    ],
    "answer": 3,
    "explain": "Prim expands the current tree one vertex at a time via the cheapest connecting edge, while Kruskal considers all edges globally sorted by weight."
   }
  ]
 },
 "daa-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Dijkstra's algorithm finds shortest paths fast, but it breaks if an edge has a negative weight — it can be fooled into finalising a vertex too early. When negative edges are possible (for example, an edge representing a refund or a discount), you need a different tool."
    },
    {
     "type": "text",
     "text": "Bellman-Ford handles negative edges correctly. It relaxes every edge (checks if going through it gives a shorter path) V-1 times in a row, where V is the number of vertices. After that many rounds, all shortest paths are guaranteed to be found — and a useful side effect is that it can also detect a negative-weight cycle, where the 'shortest path' would keep shrinking forever."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def bellman_ford(n, edges, src):\n    dist = [float('inf')] * n\n    dist[src] = 0\n    for _ in range(n - 1):\n        for u, v, w in edges:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w    # relax the edge\n    # one extra pass: if anything still improves, there's a negative cycle\n    for u, v, w in edges:\n        if dist[u] + w < dist[v]:\n            raise ValueError('Negative-weight cycle detected')\n    return dist"
    },
    {
     "type": "text",
     "text": "Bellman-Ford runs in O(V * E), slower than Dijkstra's O(E log V), because it doesn't get to greedily lock in a vertex the way Dijkstra does. If you need shortest paths between EVERY pair of vertices at once (not just from one source), Floyd-Warshall is the tool: it's a dynamic-programming algorithm that tries every vertex k as a possible 'stepping stone' between every pair (i, j), running in O(V^3)."
    },
    {
     "type": "tip",
     "text": "Quick recall: Dijkstra — fastest, but no negative edges. Bellman-Ford — handles negative edges, single source. Floyd-Warshall — all pairs at once, uses DP over 'via vertex k'."
    }
   ],
   "recap": "Bellman-Ford finds shortest paths from one source even with negative edges (and detects negative cycles) by relaxing every edge V-1 times; Floyd-Warshall finds shortest paths between all pairs using dynamic programming over an intermediate vertex k."
  },
  "quiz": [
   {
    "q": "Why can't Dijkstra's algorithm be used when edges have negative weights?",
    "options": [
     "It only works on trees",
     "It can finalise a vertex's distance too early and never revisit it",
     "It requires floating point numbers",
     "It runs out of memory"
    ],
    "answer": 1,
    "explain": "Dijkstra greedily locks in the shortest distance to a vertex once visited, but a later negative edge could have made an even shorter path possible."
   },
   {
    "q": "How many rounds of edge relaxation does Bellman-Ford perform?",
    "options": [
     "E, the number of edges",
     "log(V)",
     "Exactly 1",
     "V - 1, where V is the number of vertices"
    ],
    "answer": 3,
    "explain": "V - 1 rounds guarantee that the shortest path, which can use at most V - 1 edges, has been fully propagated."
   },
   {
    "q": "What extra thing can Bellman-Ford detect that Dijkstra cannot?",
    "options": [
     "The number of vertices",
     "Negative-weight cycles",
     "Duplicate edges",
     "Disconnected graphs"
    ],
    "answer": 1,
    "explain": "An extra relaxation pass that still improves a distance reveals a negative cycle, something Dijkstra has no mechanism to check for."
   },
   {
    "q": "What does Floyd-Warshall compute that single-source algorithms don't?",
    "options": [
     "A topological order",
     "Shortest paths between every pair of vertices at once",
     "The graph's number of edges",
     "A minimum spanning tree"
    ],
    "answer": 1,
    "explain": "Floyd-Warshall's dynamic programming approach fills in shortest distances for all (i, j) pairs simultaneously."
   }
  ]
 },
 "daa-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A Directed Acyclic Graph (DAG) is a directed graph with no cycles — you can never start at a vertex and follow edges back to itself. DAGs are the natural model for tasks with dependencies: 'compile file A before file B', 'finish course X before course Y'."
    },
    {
     "type": "text",
     "text": "A topological sort arranges the vertices of a DAG in a line such that every edge points from an earlier vertex to a later one. In other words, it's a valid order to do the tasks so that every prerequisite is done before the task that depends on it. A DAG can have more than one valid topological order."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from collections import deque\n\ndef topo_sort(n, graph):\n    indegree = [0] * n\n    for u in graph:\n        for v in graph[u]:\n            indegree[v] += 1\n    queue = deque([v for v in range(n) if indegree[v] == 0])\n    order = []\n    while queue:\n        u = queue.popleft()\n        order.append(u)\n        for v in graph[u]:\n            indegree[v] -= 1\n            if indegree[v] == 0:\n                queue.append(v)\n    if len(order) != n:\n        raise ValueError('Graph has a cycle: no valid order exists')\n    return order"
    },
    {
     "type": "text",
     "text": "This is Kahn's algorithm: repeatedly pick a vertex with no remaining incoming edges (in-degree 0), output it, and remove its outgoing edges. If you ever run out of in-degree-0 vertices before placing all of them, the graph has a cycle and no topological order exists. Topological sort is also the first step in many scheduling and build-system tools (like make or a package manager resolving dependencies)."
    },
    {
     "type": "tip",
     "text": "You can also get a topological order from DFS: run DFS and record each vertex when its recursive call finishes, then reverse that list. Both approaches are correct — Kahn's (in-degree/queue) is usually easier to trace by hand in an exam."
    }
   ],
   "recap": "A topological sort orders the vertices of a DAG so every edge goes from earlier to later; Kahn's algorithm builds it by repeatedly removing in-degree-0 vertices, and failing to place all vertices means the graph has a cycle."
  },
  "quiz": [
   {
    "q": "What must a graph be for a topological sort to exist?",
    "options": [
     "A directed graph with no cycles (a DAG)",
     "Undirected and connected",
     "Weighted",
     "Complete (every pair of vertices connected)"
    ],
    "answer": 0,
    "explain": "Topological order requires a directed acyclic graph; a cycle would make it impossible to order the vertices consistently."
   },
   {
    "q": "In Kahn's algorithm, which vertices are placed in the order first?",
    "options": [
     "Vertices with the highest out-degree",
     "The last vertex added to the graph",
     "Vertices with in-degree 0 (no remaining prerequisites)",
     "Vertices chosen at random"
    ],
    "answer": 2,
    "explain": "A vertex with in-degree 0 has no unmet dependencies, so it's safe to place it next in the order."
   },
   {
    "q": "What does it mean if Kahn's algorithm can't place all vertices?",
    "options": [
     "The graph has a cycle",
     "There was a coding error, it always finishes",
     "The graph is too large",
     "The graph is disconnected"
    ],
    "answer": 0,
    "explain": "Running out of in-degree-0 vertices before all vertices are placed means a cycle is blocking further progress."
   },
   {
    "q": "Which real-world problem is a natural fit for topological sort?",
    "options": [
     "Sorting a list of numbers",
     "Finding the shortest route between two cities",
     "Ordering course prerequisites so each course comes after the ones it depends on",
     "Compressing a file"
    ],
    "answer": 2,
    "explain": "Course prerequisites form a DAG, and topological sort gives a valid order to take them in."
   }
  ]
 },
 "daa-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Merge sort and quick sort are both divide-and-conquer sorting algorithms, but they split the work in opposite places. Merge sort does easy splitting (just cut the array in half) and hard combining (merge two sorted halves). Quick sort does hard splitting (partition around a pivot so everything smaller is on one side) and trivial combining (nothing left to do)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\n\nprint(quicksort([5, 2, 9, 1, 5, 6]))   # [1, 2, 5, 5, 6, 9]"
    },
    {
     "type": "text",
     "text": "Merge sort is always O(n log n), no matter how the input is arranged — its performance is predictable. Quick sort is O(n log n) on average, but its worst case is O(n^2), which happens when the pivot choice keeps splitting the array very unevenly (for example, always picking the smallest element as pivot on an already-sorted array). Choosing the pivot randomly, or as the median of three elements, makes the bad case extremely unlikely in practice."
    },
    {
     "type": "text",
     "text": "The other big difference is memory. Merge sort needs O(n) extra space for the temporary arrays used while merging. Quick sort can be done in-place, needing only O(log n) extra space for its recursion stack. That's why many real-world library sort functions default to a quicksort variant, while merge sort is preferred when stability (equal elements keep their original relative order) matters, such as sorting database records."
    },
    {
     "type": "tip",
     "text": "Exam one-liner: merge sort — guaranteed O(n log n), needs extra space, stable. Quick sort — average O(n log n) but worst-case O(n^2), in-place, usually faster in practice due to good cache behaviour."
    }
   ],
   "recap": "Merge sort splits trivially and merges carefully, always O(n log n) but needing extra space; quick sort partitions around a pivot and is in-place, averaging O(n log n) but degrading to O(n^2) with a bad pivot choice."
  },
  "quiz": [
   {
    "q": "What is quick sort's worst-case time complexity?",
    "options": [
     "O(log n)",
     "O(n log n)",
     "O(n)",
     "O(n^2)"
    ],
    "answer": 3,
    "explain": "If the pivot repeatedly splits the array very unevenly (e.g. always into a size-0 and a size-n-1 part), quick sort degrades to O(n^2)."
   },
   {
    "q": "Why is merge sort's running time always O(n log n), regardless of input order?",
    "options": [
     "It only works on already-sorted arrays",
     "It always splits exactly in half and merging takes linear time, no matter the arrangement",
     "It sorts in-place with no extra memory",
     "It uses a hash table"
    ],
    "answer": 1,
    "explain": "Merge sort's split step never depends on the data, so its performance is stable across all inputs."
   },
   {
    "q": "Which sorting algorithm needs O(log n) extra space rather than O(n)?",
    "options": [
     "Both need the same amount",
     "Neither needs extra space",
     "Quick sort (in-place version)",
     "Merge sort"
    ],
    "answer": 2,
    "explain": "In-place quick sort only needs stack space for recursion, roughly O(log n) on average, while merge sort needs O(n) for temporary merged arrays."
   },
   {
    "q": "What technique reduces the chance of quick sort hitting its worst case?",
    "options": [
     "Always picking the first element as pivot",
     "Skipping the partition step",
     "Always sorting already-sorted arrays first",
     "Choosing the pivot randomly or as a median-of-three"
    ],
    "answer": 3,
    "explain": "Randomising the pivot choice (or using median-of-three) makes an unlucky, consistently unbalanced split very unlikely."
   }
  ]
 },
 "daa-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A binary heap is a complete binary tree (every level filled left to right) stored efficiently in a plain array, with one rule: in a MIN-heap, every parent is smaller than or equal to both its children; in a MAX-heap, every parent is greater than or equal to both its children. That rule alone guarantees the smallest (or largest) element always sits at the root."
    },
    {
     "type": "text",
     "text": "Because a heap is stored as an array, a node at index i has its children at indices 2i+1 and 2i+2, with no pointers needed. Inserting a new element or removing the root both take O(log n): you place or remove the value, then 'sift' it up or down the tree, swapping with a parent or child until the heap rule is restored."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import heapq\n\nheap = []\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 1)\nheapq.heappush(heap, 8)\nheapq.heappush(heap, 3)\n\nprint(heapq.heappop(heap))   # 1  (smallest first, Python's heapq is a min-heap)\nprint(heap)                  # remaining elements, still heap-ordered"
    },
    {
     "type": "text",
     "text": "Heap sort uses this structure to sort in place: build a max-heap out of the whole array in O(n), then repeatedly swap the root (the largest remaining element) to the end of the array and sift the new root down. That gives O(n log n) time with O(1) extra space — no recursion stack like merge sort needs. Heaps are also exactly what a priority queue is built from, which is why Dijkstra's algorithm and Prim's algorithm both lean on one."
    },
    {
     "type": "tip",
     "text": "Don't confuse a heap with a binary search tree. A heap only guarantees parent-vs-child ordering, not left-vs-right — so a heap is NOT sorted if you just read it left to right; you must pop the root repeatedly to get sorted order."
    }
   ],
   "recap": "A binary heap is an array-backed complete binary tree where every parent beats its children (min or max); it gives O(log n) insert/remove and powers both priority queues and heap sort's O(n log n), O(1)-extra-space sort."
  },
  "quiz": [
   {
    "q": "In a min-heap, what is always true about a parent node?",
    "options": [
     "It is always equal to both children",
     "It has no relationship to its children",
     "It is always smaller than or equal to both children",
     "It is always larger than both children"
    ],
    "answer": 2,
    "explain": "The min-heap property requires every parent to be less than or equal to its children, keeping the smallest value at the root."
   },
   {
    "q": "How is a binary heap typically stored?",
    "options": [
     "As a linked list",
     "As a sorted array",
     "As a plain array, using index arithmetic to find children",
     "As a hash table"
    ],
    "answer": 2,
    "explain": "A heap's complete-tree shape lets it be stored compactly in an array, with a node at index i having children at 2i+1 and 2i+2."
   },
   {
    "q": "What is the time complexity of heap sort?",
    "options": [
     "O(n log n)",
     "O(n^2)",
     "O(log n)",
     "O(n)"
    ],
    "answer": 0,
    "explain": "Building the heap takes O(n), and each of the n extractions costs O(log n), giving O(n log n) overall."
   },
   {
    "q": "What data structure is a heap the natural backbone of?",
    "options": [
     "A stack",
     "A priority queue",
     "A linked list",
     "A hash map"
    ],
    "answer": 1,
    "explain": "A priority queue needs fast access to the smallest (or largest) item, which is exactly what a heap's root gives it."
   }
  ]
 },
 "daa-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far you've seen sorting algorithms that all cost O(n log n) at best: merge sort, quick sort (average case), heap sort. That's not a coincidence — it's a proven LOWER BOUND. Any sorting algorithm that only compares pairs of elements (asks 'is A bigger than B?') cannot possibly beat O(n log n) in the worst case, no matter how cleverly it's written."
    },
    {
     "type": "text",
     "text": "The proof uses a decision tree: imagine every possible sequence of comparisons your algorithm could make as a binary tree, where each leaf represents one final sorted arrangement. For n distinct elements there are n! (n factorial) possible orderings, so the tree needs at least n! leaves. A binary tree with n! leaves must have a height of at least log2(n!), and by Stirling's approximation log2(n!) is roughly n log n."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\nfor n in [4, 8, 16, 32]:\n    factorial_bound = math.log2(math.factorial(n))\n    n_log_n = n * math.log2(n)\n    print(n, round(factorial_bound, 1), round(n_log_n, 1))\n# the two columns track each other closely as n grows"
    },
    {
     "type": "text",
     "text": "This is exactly why counting sort, radix sort, and bucket sort can beat n log n — they are NOT comparison-based. Counting sort counts occurrences of each value directly (no 'is A bigger than B?' comparisons at all) and can run in O(n + k), where k is the range of possible values. The trade-off is that they only work well when the data has special structure, like small-range integers, rather than arbitrary comparable objects."
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: 'Any comparison-based sorting algorithm requires at least Ω(n log n) comparisons in the worst case.' The proof rests on the decision-tree argument and n! possible orderings — you don't need to derive Stirling's approximation, just quote the result."
    }
   ],
   "recap": "Comparison-based sorting can never beat O(n log n) in the worst case, proven by a decision-tree argument over the n! possible orderings; non-comparison sorts like counting sort escape this bound by exploiting structure in the data instead of comparisons."
  },
  "quiz": [
   {
    "q": "What is the proven lower bound for any comparison-based sorting algorithm?",
    "options": [
     "O(log n)",
     "O(n log n)",
     "O(n)",
     "O(n^2)"
    ],
    "answer": 1,
    "explain": "No algorithm that sorts purely by comparing pairs of elements can do better than Ω(n log n) in the worst case."
   },
   {
    "q": "What does the decision-tree proof count to derive this bound?",
    "options": [
     "The n! possible orderings the input could be sorted into",
     "The number of comparisons made by quicksort specifically",
     "The number of array indices",
     "The number of swaps made"
    ],
    "answer": 0,
    "explain": "Each of the n! possible final orderings needs its own leaf in the decision tree, and a binary tree needs height log2(n!) to fit that many leaves."
   },
   {
    "q": "Why can counting sort run faster than O(n log n)?",
    "options": [
     "It is not comparison-based; it counts occurrences of values directly",
     "It uses more memory than any other sort",
     "It only works on already-sorted input",
     "It secretly still compares elements"
    ],
    "answer": 0,
    "explain": "Counting sort never asks 'is A bigger than B?' — it tallies value frequencies, so the comparison-based lower bound simply doesn't apply to it."
   },
   {
    "q": "What limitation do non-comparison sorts like counting sort typically have?",
    "options": [
     "They cannot be implemented in any language",
     "They are always slower than merge sort",
     "They cannot handle duplicate values",
     "They only work well when data has special structure, like a small range of integers"
    ],
    "answer": 3,
    "explain": "Counting sort's speed depends on the range of values (k) being small; it isn't a general-purpose sort for arbitrary comparable objects."
   }
  ]
 },
 "daa-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 0/1 knapsack problem: you have a bag that can carry weight W, and a set of items each with a weight and a value. You want the most valuable combination of items that fits, and each item can only be taken whole or not at all (no cutting it in half). Greedy 'take the best value-per-weight first' does NOT always work here, which is why it needs dynamic programming."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def knapsack(weights, values, W):\n    n = len(weights)\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(W + 1):\n            dp[i][w] = dp[i - 1][w]                 # skip item i\n            if weights[i - 1] <= w:\n                take = dp[i - 1][w - weights[i - 1]] + values[i - 1]\n                dp[i][w] = max(dp[i][w], take)        # or take item i\n    return dp[n][W]\n\nprint(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5))   # 7"
    },
    {
     "type": "text",
     "text": "dp[i][w] means 'the best value achievable using the first i items with capacity w'. Each cell only depends on the row above, so it's a clean 2D table filled bottom-up. The final answer sits in the bottom-right corner."
    },
    {
     "type": "text",
     "text": "Longest Common Subsequence (LCS) asks: given two strings, what is the longest sequence of characters that appears in both, in the same relative order (not necessarily contiguous)? For 'ABCBDAB' and 'BDCABA', the LCS is 'BCBA', length 4. Its DP table, dp[i][j], means 'the LCS length using the first i characters of string 1 and the first j of string 2' — if the characters match, extend a diagonal; if not, take the best of skipping one character from either string."
    },
    {
     "type": "tip",
     "text": "Both problems share the same DP shape: a 2D table where each cell is built from cells above, to the left, or diagonally above-left. Spotting that shape is often the fastest way to recognise an unfamiliar problem is 'knapsack-like' or 'LCS-like' in an exam."
    }
   ],
   "recap": "0/1 Knapsack fills a 2D table of 'best value with i items and capacity w' since a greedy value-per-weight choice can be wrong; Longest Common Subsequence fills a similar table comparing two strings' prefixes, extending a match diagonally or taking the best of skipping a character."
  },
  "quiz": [
   {
    "q": "Why can't the 0/1 knapsack problem be solved with a simple greedy 'best value-per-weight first' rule?",
    "options": [
     "Weights are always negative",
     "Items can be split into fractions",
     "Greedy always works fine for 0/1 knapsack",
     "Taking whole items only means the greedy choice can leave wasted capacity that a different combination would use better"
    ],
    "answer": 3,
    "explain": "Because items can't be split, a greedy choice can lock in a suboptimal combination — DP is needed to explore all valid combinations properly."
   },
   {
    "q": "In the knapsack DP table dp[i][w], what does the value represent?",
    "options": [
     "The best value achievable using the first i items with capacity w",
     "The total weight of all items",
     "The index of the heaviest item",
     "The number of items taken"
    ],
    "answer": 0,
    "explain": "Each cell stores the optimal value obtainable by considering only the first i items within a capacity limit of w."
   },
   {
    "q": "What does Longest Common Subsequence require, unlike a common substring?",
    "options": [
     "The two strings must be the same length",
     "The matched characters must be contiguous",
     "The matched characters must appear in the same relative order, but not necessarily contiguously",
     "The characters must all be unique"
    ],
    "answer": 2,
    "explain": "LCS allows gaps between matched characters as long as their relative order is preserved in both strings."
   },
   {
    "q": "What happens in the LCS DP table when the current characters of both strings match?",
    "options": [
     "The row is skipped entirely",
     "The cell extends the diagonal value by 1",
     "It always takes the value from the left cell",
     "The cell is set to 0"
    ],
    "answer": 1,
    "explain": "A matching character extends the previously found common subsequence, so dp[i][j] = dp[i-1][j-1] + 1."
   }
  ]
 },
 "daa-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "String matching means finding every place a pattern occurs inside a longer text — like Ctrl+F in a document. The naive approach checks every possible starting position in the text and compares the pattern character by character, giving O(n*m) time for a text of length n and pattern of length m — slow when both are large, and especially bad on repetitive text like 'AAAAAAAB' searching for 'AAAB'."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def naive_search(text, pattern):\n    n, m = len(text), len(pattern)\n    positions = []\n    for i in range(n - m + 1):\n        if text[i:i + m] == pattern:      # compares up to m characters\n            positions.append(i)\n    return positions\n\nprint(naive_search('ABABDABACD', 'ABA'))   # [0, 5]"
    },
    {
     "type": "text",
     "text": "The Knuth-Morris-Pratt (KMP) algorithm avoids re-checking characters it has already matched. It first builds a 'failure function' (also called the LPS array — Longest Proper Prefix that is also a Suffix) for the pattern itself. This tells it, on a mismatch, how far it can safely SHIFT the pattern without re-comparing characters it already knows match, instead of sliding forward by just one position like the naive method."
    },
    {
     "type": "text",
     "text": "Building the LPS array takes O(m), and using it to scan the text takes O(n), so KMP runs in O(n + m) total — a real improvement over O(n*m), especially for long repetitive patterns. Other well-known string-matching algorithms include Rabin-Karp (uses rolling hashes to compare substrings fast) and Boyer-Moore (scans the pattern right-to-left and can skip large chunks of text)."
    },
    {
     "type": "tip",
     "text": "The key insight to remember for exams: KMP's speed comes entirely from precomputing the LPS array so that on a mismatch, it never needs to backtrack in the TEXT — only the pattern's comparison position moves, which is what guarantees linear time."
    }
   ],
   "recap": "Naive string search compares the pattern at every position in O(n*m); KMP precomputes an LPS (failure) array for the pattern so it can shift smartly on a mismatch, achieving O(n + m) by never re-scanning the text."
  },
  "quiz": [
   {
    "q": "What is the time complexity of the naive string-matching approach?",
    "options": [
     "O(log n)",
     "O(n + m)",
     "O(n log m)",
     "O(n * m)"
    ],
    "answer": 3,
    "explain": "In the worst case, the naive method compares up to m characters at each of roughly n positions, giving O(n*m)."
   },
   {
    "q": "What does KMP's LPS (failure function) array tell the algorithm?",
    "options": [
     "The length of the text",
     "How far to safely shift the pattern on a mismatch without re-comparing known matches",
     "The exact location of every match in advance",
     "The alphabetical order of characters in the pattern"
    ],
    "answer": 1,
    "explain": "The LPS array encodes the longest prefix of the pattern that is also a suffix up to each position, letting KMP skip redundant comparisons."
   },
   {
    "q": "What is KMP's overall time complexity?",
    "options": [
     "O(m^2)",
     "O(n * m)",
     "O(n + m)",
     "O(n^2)"
    ],
    "answer": 2,
    "explain": "Building the LPS array is O(m) and scanning is O(n), so KMP runs in O(n + m) total."
   },
   {
    "q": "Which algorithm uses rolling hashes to speed up substring comparison?",
    "options": [
     "Naive search",
     "KMP",
     "Rabin-Karp",
     "Merge sort"
    ],
    "answer": 2,
    "explain": "Rabin-Karp computes a hash of the pattern and of each text window, comparing hashes first and only checking characters when hashes match."
   }
  ]
 },
 "daa-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Picture a network of pipes carrying water from a source to a sink, where each pipe (edge) has a maximum capacity. The maximum flow problem asks: what's the most water you can push from source to sink per unit time, without exceeding any pipe's capacity? This models real things like maximum data throughput in a network, or maximum traffic a road system can handle."
    },
    {
     "type": "text",
     "text": "The Ford-Fulkerson method solves this by repeatedly finding an 'augmenting path' — any path from source to sink that still has spare capacity — and pushing as much flow as that path's tightest (bottleneck) edge allows. It keeps doing this, updating a 'residual graph' that tracks remaining capacity (and allows flow to be undone via reverse edges), until no augmenting path can be found."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from collections import deque\n\ndef bfs_augmenting_path(capacity, source, sink, parent):\n    visited = {source}\n    queue = deque([source])\n    while queue:\n        u = queue.popleft()\n        for v in capacity[u]:\n            if v not in visited and capacity[u][v] > 0:\n                visited.add(v)\n                parent[v] = u\n                if v == sink:\n                    return True\n                queue.append(v)\n    return False\n\n# Edmonds-Karp = Ford-Fulkerson where augmenting paths are found via BFS\n# (finding the SHORTEST augmenting path each time keeps it efficient: O(V*E^2))"
    },
    {
     "type": "text",
     "text": "The Max-Flow Min-Cut theorem is the elegant payoff: the maximum possible flow from source to sink always exactly equals the minimum total capacity of edges you'd need to cut to fully disconnect the source from the sink. This connects a flow question to a network-reliability question — the 'weakest link' in the network is precisely the bottleneck limiting flow."
    },
    {
     "type": "tip",
     "text": "Ford-Fulkerson is a METHOD (an idea), not one fixed algorithm — how you pick the augmenting path matters. Picking via BFS (shortest path first) is called Edmonds-Karp, and it guarantees polynomial time; picking paths poorly can make plain Ford-Fulkerson very slow on certain graphs."
    }
   ],
   "recap": "Maximum flow finds the most 'water' that can move from source to sink without exceeding edge capacities, computed by repeatedly pushing flow along augmenting paths (Ford-Fulkerson/Edmonds-Karp); the Max-Flow Min-Cut theorem says this maximum always equals the minimum capacity needed to disconnect the source from the sink."
  },
  "quiz": [
   {
    "q": "What does the maximum flow problem compute?",
    "options": [
     "The number of vertices in a graph",
     "The minimum spanning tree of a graph",
     "The shortest path between two vertices",
     "The most 'flow' that can move from source to sink without exceeding any edge's capacity"
    ],
    "answer": 3,
    "explain": "Max flow finds the greatest total throughput achievable from source to sink given each edge's capacity limit."
   },
   {
    "q": "What is an 'augmenting path' in Ford-Fulkerson?",
    "options": [
     "A path that has already been fully used",
     "A path from source to sink that still has spare capacity to push more flow through",
     "The shortest path regardless of capacity",
     "Any cycle in the graph"
    ],
    "answer": 1,
    "explain": "Ford-Fulkerson repeatedly finds paths with unused capacity and pushes flow through them until none remain."
   },
   {
    "q": "What does the Max-Flow Min-Cut theorem state?",
    "options": [
     "Maximum flow is always infinite in a connected graph",
     "Minimum cut is always larger than maximum flow",
     "Maximum flow equals the minimum total capacity of edges needed to disconnect source from sink",
     "Maximum flow is always equal to the number of edges"
    ],
    "answer": 2,
    "explain": "This theorem links the flow problem to a cut problem: the bottleneck capacity of the smallest disconnecting cut caps the achievable flow, and they're always equal."
   },
   {
    "q": "What is Edmonds-Karp?",
    "options": [
     "Ford-Fulkerson where augmenting paths are chosen via BFS (shortest path first)",
     "A hashing technique",
     "A sorting algorithm",
     "A method for building a minimum spanning tree"
    ],
    "answer": 0,
    "explain": "Edmonds-Karp specifically uses BFS to always pick the shortest augmenting path, which guarantees a polynomial running time."
   }
  ]
 },
 "daa-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sometimes a single operation looks expensive in the worst case, but that expensive case is so rare that averaged over many operations, the cost per operation is actually small. Amortized analysis is the technique for proving that average cost honestly, rather than just pessimistically assuming the worst case happens every single time."
    },
    {
     "type": "text",
     "text": "The classic example is a dynamic array (like Python's list, or Java's ArrayList). When it's full and you append one more element, it must allocate a new, bigger array (commonly double the size) and copy every existing element over — an O(n) operation. That sounds bad, but doubling means this expensive resize only happens at sizes 1, 2, 4, 8, 16... — it gets exponentially rarer."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Appending n items to a dynamic array that doubles when full:\n# resize costs happen at sizes 1, 2, 4, 8, ..., n  (roughly log2(n) resizes)\n# total copying work = 1 + 2 + 4 + ... + n  <= 2n  (a geometric series)\n# n appends + <= 2n total copying work = O(n) total, so O(1) PER append on average\n\nn = 16\ntotal_copies = sum(2**k for k in range(5))   # 1+2+4+8+16 = 31, still O(n)\nprint(total_copies, '<=', 2 * n)"
    },
    {
     "type": "text",
     "text": "Formally, if n appends cost at most O(n) in total, then each append costs O(n)/n = O(1) amortized — constant time on average, even though any single append might occasionally trigger that expensive O(n) resize. The three formal methods for proving this are the aggregate method (what we just did — total cost / number of operations), the accounting method (overcharge cheap operations to prepay for expensive ones), and the potential method (define a 'potential energy' function on the data structure)."
    },
    {
     "type": "tip",
     "text": "Don't confuse amortized analysis with average-case analysis. Average case assumes something about the INPUT DISTRIBUTION (like 'the input is randomly ordered'). Amortized analysis makes no assumption about input at all — it's a worst-case guarantee over any SEQUENCE of operations."
    }
   ],
   "recap": "Amortized analysis proves that a sequence of operations has a low average cost per operation even when individual operations are occasionally expensive, as with a dynamic array's doubling resize costing O(1) amortized per append; it is a worst-case-over-a-sequence guarantee, not an assumption about input distribution."
  },
  "quiz": [
   {
    "q": "What does amortized analysis measure?",
    "options": [
     "The best-case cost of a single operation",
     "The average cost per operation over a worst-case sequence of operations",
     "The cost assuming random input",
     "The memory used by an algorithm"
    ],
    "answer": 1,
    "explain": "Amortized analysis gives a guaranteed average cost per operation across any sequence, not just a typical or random one."
   },
   {
    "q": "Why is appending to a dynamic array O(1) amortized, even though resizing is O(n)?",
    "options": [
     "The array is always pre-allocated to be huge",
     "Resizes happen exponentially rarely (at sizes 1, 2, 4, 8...), so their total cost spread over n appends is only O(n)",
     "Resizing never actually happens",
     "Because Python lists use a hash table internally"
    ],
    "answer": 1,
    "explain": "Doubling means the total copying work across n appends sums to at most about 2n, giving O(1) per append on average."
   },
   {
    "q": "How does amortized analysis differ from average-case analysis?",
    "options": [
     "They are exactly the same thing",
     "Amortized analysis assumes random input; average-case doesn't",
     "Amortized analysis makes no assumption about input distribution; it's a guarantee over any sequence of operations",
     "Amortized analysis only applies to sorting algorithms"
    ],
    "answer": 2,
    "explain": "Average-case analysis relies on assumptions about input distribution; amortized analysis instead bounds the total cost of any possible sequence of operations."
   },
   {
    "q": "Which of these is NOT one of the standard methods for proving an amortized bound?",
    "options": [
     "The potential method",
     "The random-sampling method",
     "The aggregate method",
     "The accounting method"
    ],
    "answer": 1,
    "explain": "The three standard techniques are the aggregate, accounting, and potential methods; 'random-sampling method' is not one of them."
   }
  ]
 },
 "daa-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "P is the class of problems that can be SOLVED quickly (in polynomial time, like O(n), O(n^2), O(n^3)...) by a normal computer. NP is the class of problems whose SOLUTION can be VERIFIED quickly, even if finding that solution might be hard. Every problem in P is also in NP (if you can solve it fast, you can trivially verify a given answer fast too), but whether NP problems can also all be SOLVED fast is the single biggest open question in computer science: is P = NP?"
    },
    {
     "type": "text",
     "text": "An NP-Complete problem is one of the 'hardest' problems in NP: every other problem in NP can be transformed (reduced) into it in polynomial time. This means if anyone ever finds a fast (polynomial-time) algorithm for ONE NP-Complete problem, every problem in NP suddenly becomes solvable fast too, proving P = NP. Nobody has found such an algorithm despite over 50 years of trying, which is why most computer scientists believe P is NOT equal to NP, even though it hasn't been proven."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Boolean Satisfiability (SAT) was the FIRST problem proven NP-Complete (Cook-Levin theorem, 1971)\n# Example instance: is there an assignment of True/False to x, y, z that makes this true?\n#   (x OR y) AND (NOT x OR z) AND (NOT y OR NOT z)\n\n# Checking a PROPOSED answer is fast (just plug in values and evaluate):\ndef check(x, y, z):\n    return (x or y) and (not x or z) and (not y or not z)\n\nprint(check(True, False, True))   # True -> this assignment satisfies it\n# But SEARCHING for such an assignment, in general, has no known fast algorithm"
    },
    {
     "type": "text",
     "text": "Famous NP-Complete problems include SAT, the Travelling Salesman Problem (find the shortest route visiting every city exactly once), the Knapsack decision problem, and Graph Colouring (can you colour a graph's vertices with k colours so no two connected vertices share a colour?). In practice, when you recognise a problem is NP-Complete, you stop searching for a fast exact algorithm and instead reach for heuristics, approximation algorithms, or brute force on small inputs only."
    },
    {
     "type": "tip",
     "text": "Common exam trap: 'NP' does NOT stand for 'not polynomial' — it stands for Nondeterministic Polynomial time, referring to how fast a solution can be VERIFIED, not how hard it is to find. NP-Hard is a related but different label: a problem can be NP-Hard without even being in NP itself (its solution might not even be quickly verifiable)."
    }
   ],
   "recap": "P is problems solvable quickly; NP is problems verifiable quickly; NP-Complete problems are the hardest in NP, such that solving any one fast would solve all of NP fast — and whether P equals NP remains computer science's biggest open question."
  },
  "quiz": [
   {
    "q": "What does it mean for a problem to be in NP?",
    "options": [
     "It can never be solved by a computer",
     "A proposed solution to it can be verified in polynomial time",
     "It can be solved in polynomial time",
     "It requires infinite memory"
    ],
    "answer": 1,
    "explain": "NP stands for Nondeterministic Polynomial time, meaning a candidate answer can be checked quickly, even if finding one might be hard."
   },
   {
    "q": "What does it mean if a fast algorithm is ever found for one NP-Complete problem?",
    "options": [
     "It would prove P does not equal NP",
     "It would prove every problem in NP can be solved fast, i.e. P = NP",
     "It would prove nothing about other problems",
     "It would only help that one specific problem"
    ],
    "answer": 1,
    "explain": "NP-Complete problems are defined so that every NP problem reduces to them, so one fast solution would cascade to all of NP."
   },
   {
    "q": "Which of these is a classic NP-Complete problem?",
    "options": [
     "Merge sort",
     "Binary search",
     "Finding the maximum of an array",
     "The Travelling Salesman Problem (decision version)"
    ],
    "answer": 3,
    "explain": "The Travelling Salesman Problem is one of the most famous NP-Complete problems, alongside SAT, Knapsack, and Graph Colouring."
   },
   {
    "q": "What is a common misconception about the term 'NP'?",
    "options": [
     "That it stands for 'nondeterministic polynomial'",
     "That it stands for 'not polynomial'",
     "That P is a subset of NP",
     "That NP problems are always unsolvable"
    ],
    "answer": 1,
    "explain": "NP does not mean 'not polynomial' — it refers to fast verifiability (nondeterministic polynomial time), which is easy to misread."
   }
  ]
 },
 "daa-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When a problem is NP-Complete, you often can't afford to wait for an exact answer on large inputs. Two practical escape routes are approximation algorithms (deliberately accept a solution that's provably close to optimal, but computed fast) and randomized algorithms (use randomness during the algorithm itself to get speed or simplicity, usually with a small controlled chance of error or a probabilistic performance guarantee)."
    },
    {
     "type": "text",
     "text": "A good approximation algorithm comes with a proven APPROXIMATION RATIO — a guarantee like 'this answer is never more than twice the true optimum'. For example, for Vertex Cover (find the smallest set of vertices touching every edge), a simple greedy algorithm that repeatedly picks both endpoints of any uncovered edge gives a solution at most 2x the optimal size — fast, and provably not too far off, even though finding the exact minimum is NP-Hard."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import random\n\ndef randomized_quickselect(arr, k):\n    # find the k-th smallest element WITHOUT fully sorting the array\n    if len(arr) == 1:\n        return arr[0]\n    pivot = random.choice(arr)             # randomness avoids worst-case input patterns\n    smaller = [x for x in arr if x < pivot]\n    equal = [x for x in arr if x == pivot]\n    larger = [x for x in arr if x > pivot]\n    if k < len(smaller):\n        return randomized_quickselect(smaller, k)\n    elif k < len(smaller) + len(equal):\n        return pivot\n    else:\n        return randomized_quickselect(larger, k - len(smaller) - len(equal))\n\nprint(randomized_quickselect([7, 2, 9, 4, 1, 8], 2))   # 3rd smallest (k=2) -> 4"
    },
    {
     "type": "text",
     "text": "Randomized quickselect finds the k-th smallest element in O(n) EXPECTED time by picking a random pivot, which makes a consistently bad split extremely unlikely on any specific input — the same trick used to keep quick sort fast in practice. This is a Las Vegas algorithm: always correct, but its running time is what varies. A Monte Carlo algorithm is the other flavour: its running time is fixed, but there's a small chance it returns a wrong answer (used, for example, in fast primality testing)."
    },
    {
     "type": "tip",
     "text": "Interview-ready summary: when exact is too slow, ask 'can I accept a proven-close approximation?' (approximation algorithm) or 'can I use randomness to sidestep worst-case inputs?' (randomized algorithm) — recognising which escape hatch fits is often exactly what separates a textbook algorithm answer from a practical engineering one."
    }
   ],
   "recap": "Approximation algorithms trade exactness for speed with a provable closeness guarantee (an approximation ratio), while randomized algorithms use randomness to dodge worst-case inputs, either always-correct-but-variable-time (Las Vegas) or fixed-time-but-occasionally-wrong (Monte Carlo) — both are practical answers when exact, fast solutions don't exist."
  },
  "quiz": [
   {
    "q": "What does an approximation algorithm's 'approximation ratio' guarantee?",
    "options": [
     "That the algorithm runs in constant time",
     "That the input must be sorted first",
     "That the answer is always exactly optimal",
     "That the answer is provably within a certain factor of the true optimum"
    ],
    "answer": 3,
    "explain": "An approximation ratio bounds how far the algorithm's answer can be from the optimal solution, giving a provable quality guarantee even though it isn't exact."
   },
   {
    "q": "Why does randomized quickselect pick a random pivot?",
    "options": [
     "Randomness has no effect on performance",
     "To guarantee the array is already sorted",
     "To make the code shorter",
     "To make a consistently bad, unbalanced split extremely unlikely for any specific input"
    ],
    "answer": 3,
    "explain": "A random pivot choice means no particular input (like an already-sorted array) can reliably trigger the worst-case split every time."
   },
   {
    "q": "What defines a Las Vegas algorithm?",
    "options": [
     "It never uses randomness",
     "It has a fixed running time but might return a wrong answer",
     "It always returns the correct answer, but its running time varies randomly",
     "It only works on graphs"
    ],
    "answer": 2,
    "explain": "Las Vegas algorithms are always correct; the randomness only affects how long they take to run."
   },
   {
    "q": "When is it most sensible to reach for an approximation or randomized algorithm?",
    "options": [
     "When the problem is trivially solvable in O(1)",
     "When the exact problem is NP-Complete or otherwise too slow to solve exactly at scale",
     "Only when the input is very small",
     "Never — exact algorithms are always preferred in practice"
    ],
    "answer": 1,
    "explain": "These techniques exist precisely for hard problems (like NP-Complete ones) where waiting for an exact answer isn't practical on large inputs."
   }
  ]
 }
}
