// Lesson text and quiz questions for "Theory of Computation".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "toc-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Theory of Computation asks a deep question: what can a machine compute, and what can it never compute no matter how fast it is? Before we build real computers, we study simple imaginary machines called 'automata' to understand these limits precisely."
    },
    {
     "type": "text",
     "text": "An automaton is an abstract machine that reads an input one symbol at a time and decides something — usually 'yes, I accept this input' or 'no, I reject it'. Think of it like a very strict door: it only opens if you enter exactly the right sequence of keypresses."
    },
    {
     "type": "tip",
     "text": "Analogy: an automaton is like a vending machine. It moves between states (waiting, coins-inserted, dispensing) based on what you feed it, and finally gives an outcome."
    },
    {
     "type": "text",
     "text": "The field has a ladder of machines with increasing power: finite automata (weakest), pushdown automata, and Turing machines (strongest). Studying them tells us which problems are easy, which are hard, and which are impossible."
    },
    {
     "type": "text",
     "text": "Why should a computer engineer care? These ideas power compilers, search tools, regular expressions, protocol design, and they prove that some problems (like the Halting Problem) can never be solved by any program."
    }
   ],
   "recap": "Automata theory studies simple abstract machines to learn what computers can and cannot do."
  },
  "quiz": [
   {
    "q": "What is the core question Theory of Computation tries to answer?",
    "options": [
     "Which programming language is fastest",
     "How to design a CPU chip",
     "How to write bug-free code",
     "What machines can and cannot compute"
    ],
    "answer": 3,
    "explain": "The field studies the fundamental limits of computation — what is computable at all."
   },
   {
    "q": "An automaton typically decides to do what with its input?",
    "options": [
     "Encrypt it",
     "Print it faster",
     "Accept or reject it",
     "Compress it"
    ],
    "answer": 2,
    "explain": "Most automata read the input and either accept (yes) or reject (no)."
   },
   {
    "q": "Which is the MOST powerful machine in the automata ladder?",
    "options": [
     "Vending machine",
     "Turing machine",
     "Finite automaton",
     "Pushdown automaton"
    ],
    "answer": 1,
    "explain": "The Turing machine is the most powerful model of computation in this hierarchy."
   }
  ]
 },
 "toc-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything in computation is built from three basic ideas: alphabets, strings, and languages. Getting these right makes every later topic much easier."
    },
    {
     "type": "text",
     "text": "An alphabet, written Σ (sigma), is just a finite set of symbols. For example Σ = {0, 1} is the binary alphabet, and Σ = {a, b} is a common two-letter alphabet used in examples."
    },
    {
     "type": "text",
     "text": "A string (or word) is a finite sequence of symbols from the alphabet, like '0110' or 'aab'. The empty string, written ε (epsilon), has length zero. The length of a string is how many symbols it contains: |aab| = 3."
    },
    {
     "type": "text",
     "text": "A language is a set of strings — possibly infinite. For example, 'all binary strings that end in 0' is a language, and so is 'all strings with an even number of a's'. A language is simply the collection of inputs we consider 'valid' or 'accepted'."
    },
    {
     "type": "tip",
     "text": "Analogy: the alphabet is your letters, a string is a word you spell, and a language is the dictionary — the set of words you count as legal."
    },
    {
     "type": "text",
     "text": "Σ* (sigma star) means the set of ALL possible strings over Σ, including ε. Every language is a subset of Σ*. This tiny notation underpins the whole theory."
    }
   ],
   "recap": "An alphabet is a set of symbols, a string is a sequence of them, and a language is a set of strings."
  },
  "quiz": [
   {
    "q": "What does ε (epsilon) represent?",
    "options": [
     "The whole alphabet",
     "The empty string of length 0",
     "An infinite string",
     "An error symbol"
    ],
    "answer": 1,
    "explain": "ε is the empty string, which contains no symbols and has length zero."
   },
   {
    "q": "A language is best described as a...",
    "options": [
     "Set of strings",
     "Type of CPU",
     "Programming syntax",
     "Single symbol"
    ],
    "answer": 0,
    "explain": "A language is a set (possibly infinite) of strings over an alphabet."
   },
   {
    "q": "What is the length of the string 'abba'?",
    "options": [
     "5",
     "4",
     "2",
     "3"
    ],
    "answer": 1,
    "explain": "The string 'abba' has four symbols, so its length is 4."
   },
   {
    "q": "What does Σ* denote?",
    "options": [
     "The empty language",
     "Only strings of length 1",
     "A single fixed string",
     "All strings over Σ including ε"
    ],
    "answer": 3,
    "explain": "Σ* is the set of all possible strings over the alphabet, including the empty string."
   }
  ]
 },
 "toc-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A Deterministic Finite Automaton (DFA) is the simplest real machine in the theory. It has a finite number of states, reads the input one symbol at a time, and moves between states following fixed rules."
    },
    {
     "type": "text",
     "text": "A DFA is defined by five parts: a set of states Q, an alphabet Σ, a transition function δ (which state to go to next), a start state, and a set of accept (final) states. If the machine ends in an accept state after reading the whole input, it accepts; otherwise it rejects."
    },
    {
     "type": "text",
     "text": "'Deterministic' means: for every state and every input symbol, there is exactly ONE next state. No guessing, no choices — the path is completely determined by the input."
    },
    {
     "type": "tip",
     "text": "Diagram in words: draw states as circles, arrows labelled with symbols between them, an arrow from nowhere into the start state, and double circles for accept states."
    },
    {
     "type": "text",
     "text": "Example: a DFA that accepts binary strings ending in '1'. State A (start) means 'last symbol was 0 or nothing', state B means 'last symbol was 1' and is the accept state. On '1' you go to B; on '0' you go to A."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "States: A (start), B (accept)\nδ(A, 0) = A    δ(A, 1) = B\nδ(B, 0) = A    δ(B, 1) = B\nInput 101 -> A ->1 B ->0 A ->1 B  = ACCEPT (ends in B)"
    },
    {
     "type": "text",
     "text": "DFAs recognise exactly the 'regular languages'. They are fast (linear time, tiny memory) but limited — they cannot count without bound because they only have finitely many states."
    }
   ],
   "recap": "A DFA has finite states and exactly one transition per symbol; it accepts if it ends in an accept state."
  },
  "quiz": [
   {
    "q": "In a DFA, how many next states exist for a given state and input symbol?",
    "options": [
     "Unlimited",
     "Zero or more",
     "At least two",
     "Exactly one"
    ],
    "answer": 3,
    "explain": "Determinism means each state-symbol pair leads to exactly one next state."
   },
   {
    "q": "A DFA accepts an input when...",
    "options": [
     "It reads any '1'",
     "It ends in an accept (final) state",
     "It never halts",
     "It visits every state"
    ],
    "answer": 1,
    "explain": "Acceptance happens only if the machine finishes the input in an accept state."
   },
   {
    "q": "Which of these is NOT one of the five parts of a DFA?",
    "options": [
     "A compiler",
     "A start state",
     "Transition function δ",
     "Set of states Q"
    ],
    "answer": 0,
    "explain": "A DFA is (Q, Σ, δ, start state, accept states) — a compiler is not part of it."
   },
   {
    "q": "Why can't a DFA count an unbounded number of symbols?",
    "options": [
     "It has only finitely many states",
     "It has no start state",
     "It runs too slowly",
     "It has no alphabet"
    ],
    "answer": 0,
    "explain": "With only finite memory (states), a DFA cannot track arbitrarily large counts."
   }
  ]
 },
 "toc-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A Nondeterministic Finite Automaton (NFA) is like a DFA but relaxed: from one state and symbol it may have several possible next states, one, or even none. It can also take ε-transitions — jumping to another state without reading any input."
    },
    {
     "type": "text",
     "text": "How does 'nondeterminism' decide acceptance? Imagine the machine can explore all possible paths at once. If ANY path ends in an accept state, the NFA accepts the string. It only rejects if every possible path fails."
    },
    {
     "type": "tip",
     "text": "Analogy: an NFA is like a maze-solver that can clone itself at every fork and try all corridors simultaneously — if any clone reaches the exit, you win."
    },
    {
     "type": "text",
     "text": "This makes NFAs much easier to design. For example, 'strings containing the pattern 01' is simple: sit in the start state guessing when the '01' begins, then move forward when you see it."
    },
    {
     "type": "text",
     "text": "The surprising and beautiful result: NFAs are NOT more powerful than DFAs. Every NFA can be converted into an equivalent DFA using the 'subset construction', where each DFA state represents a set of NFA states. They recognise exactly the same class — the regular languages."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "NFA idea for 'ends in 01':\nStart --0,1(loop)--> Start\nStart --0--> S1 --1--> S2(accept)\nGuess where '01' starts; if a guess reaches S2 at input end, ACCEPT."
    }
   ],
   "recap": "An NFA may have several (or zero) transitions and ε-moves; it accepts if any path accepts, yet equals a DFA in power."
  },
  "quiz": [
   {
    "q": "How does an NFA decide to accept a string?",
    "options": [
     "It must use ε-moves",
     "Only the shortest path counts",
     "Every path must accept",
     "If any path ends in an accept state"
    ],
    "answer": 3,
    "explain": "An NFA accepts if at least one possible computation path reaches an accept state."
   },
   {
    "q": "What is a special feature an NFA has that a DFA does not?",
    "options": [
     "ε (empty) transitions",
     "Accept states",
     "A start state",
     "An alphabet"
    ],
    "answer": 0,
    "explain": "NFAs may move between states on ε without consuming any input symbol."
   },
   {
    "q": "Compared to DFAs, NFAs recognise...",
    "options": [
     "Only infinite languages",
     "Fewer languages",
     "Exactly the same languages",
     "More languages"
    ],
    "answer": 2,
    "explain": "NFAs and DFAs both recognise exactly the regular languages — equal in power."
   },
   {
    "q": "The method to convert an NFA to a DFA is called the...",
    "options": [
     "Subset construction",
     "Greedy algorithm",
     "Turing reduction",
     "Pumping lemma"
    ],
    "answer": 0,
    "explain": "The subset (powerset) construction builds a DFA whose states are sets of NFA states."
   }
  ]
 },
 "toc-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A regular expression is a compact text pattern that describes a language. Instead of drawing a machine, you write an algebraic formula, and it defines exactly which strings belong."
    },
    {
     "type": "text",
     "text": "There are three core operations: union (a | b means 'a or b'), concatenation (ab means 'a followed by b'), and the Kleene star (a* means 'zero or more a's'). From these you can build surprisingly rich patterns."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "(0|1)*        = all binary strings\n0(0|1)*0      = binary strings starting and ending in 0 (length >= 2)\na*b*          = some a's followed by some b's\n(ab)*         = ε, ab, abab, ababab, ..."
    },
    {
     "type": "text",
     "text": "Kleene's Theorem ties it all together: a language can be described by a regular expression IF AND ONLY IF it is accepted by some finite automaton (DFA or NFA). Regex, DFA, and NFA are three faces of the SAME class — the regular languages."
    },
    {
     "type": "tip",
     "text": "This is why grep, text search, and lexical analysers in compilers use regular expressions: patterns can be compiled straight into fast finite-state machines."
    },
    {
     "type": "text",
     "text": "But regular languages have limits. The Pumping Lemma proves that some languages, like 'n a's followed by n b's' (equal counts), are NOT regular — a finite machine cannot remember an unbounded count. That gap is exactly why we need more powerful models next."
    }
   ],
   "recap": "Regular expressions describe regular languages using union, concatenation and star — equivalent in power to finite automata."
  },
  "quiz": [
   {
    "q": "What does the Kleene star a* mean?",
    "options": [
     "At least two a's",
     "Any symbol except a",
     "Exactly one a",
     "Zero or more a's"
    ],
    "answer": 3,
    "explain": "The star operator means the preceding item repeated zero or more times."
   },
   {
    "q": "Kleene's Theorem says regular expressions are equivalent to...",
    "options": [
     "Context-free grammars",
     "Finite automata",
     "Pushdown automata",
     "Turing machines"
    ],
    "answer": 1,
    "explain": "A language is regular iff it is described by a regex and accepted by a finite automaton."
   },
   {
    "q": "Which language is NOT regular?",
    "options": [
     "Binary strings ending in 0",
     "n a's followed by n b's (equal count)",
     "Strings over {a,b}",
     "Strings containing '01'"
    ],
    "answer": 1,
    "explain": "Matching equal unbounded counts needs unlimited memory, so a^n b^n is not regular."
   },
   {
    "q": "What does the regex (0|1)* describe?",
    "options": [
     "All binary strings",
     "Only strings starting with 0",
     "Only strings of length 1",
     "Only the empty string"
    ],
    "answer": 0,
    "explain": "Union of 0 and 1 under a star generates every possible binary string, including ε."
   }
  ]
 },
 "toc-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To go beyond regular languages we need more power. A Context-Free Grammar (CFG) is a set of replacement rules that generate strings. CFGs can handle nested, balanced structures that finite automata cannot — like matching brackets or nested code blocks."
    },
    {
     "type": "text",
     "text": "A CFG has variables (non-terminals, usually capital letters), terminals (the actual alphabet symbols), a start variable, and production rules of the form A -> (some mix of variables and terminals). You generate a string by repeatedly replacing variables until only terminals remain."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Grammar for a^n b^n (equal counts):\nS -> a S b\nS -> ε\n\nDerivation: S => aSb => aaSbb => aabb\n(This language is NOT regular, but IS context-free.)"
    },
    {
     "type": "text",
     "text": "The machine that recognises context-free languages is the Pushdown Automaton (PDA): a finite automaton plus a stack. The stack gives unbounded memory in a last-in-first-out way, which is exactly what you need to match nested pairs."
    },
    {
     "type": "tip",
     "text": "Analogy: the stack is like a pile of plates. To match every opening bracket with a closing one, push a plate on '(' and pop one on ')' — if the pile is empty at the end, everything matched."
    },
    {
     "type": "text",
     "text": "CFGs are the backbone of programming language design. The syntax of nearly every language is specified by a grammar, and compilers use parsers built from grammars to check and understand your code. Structures like arithmetic with parentheses are naturally context-free."
    }
   ],
   "recap": "Context-free grammars use production rules to generate nested languages and are recognised by pushdown automata with a stack."
  },
  "quiz": [
   {
    "q": "What extra memory does a Pushdown Automaton have over a finite automaton?",
    "options": [
     "A stack",
     "A second CPU",
     "A hard disk",
     "A random-access array"
    ],
    "answer": 0,
    "explain": "A PDA is a finite automaton augmented with a stack for last-in-first-out memory."
   },
   {
    "q": "The grammar S -> aSb | ε generates which language?",
    "options": [
     "All binary strings",
     "Equal numbers of a's then b's (a^n b^n)",
     "Strings ending in b",
     "Only the empty string"
    ],
    "answer": 1,
    "explain": "Each rule adds one a and one b symmetrically, producing a^n b^n."
   },
   {
    "q": "Context-free grammars are mainly used in computing to define...",
    "options": [
     "Network cables",
     "Programming language syntax",
     "Screen resolution",
     "CPU clock speeds"
    ],
    "answer": 1,
    "explain": "Compilers use CFGs to specify and parse the syntax of programming languages."
   },
   {
    "q": "In a CFG, symbols that get replaced during derivation are called...",
    "options": [
     "States",
     "Terminals",
     "Non-terminals (variables)",
     "Tokens"
    ],
    "answer": 2,
    "explain": "Non-terminals (variables) are replaced by rules until only terminals remain."
   }
  ]
 },
 "toc-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Turing Machine, proposed by Alan Turing in 1936, is the most powerful model in the theory and the foundation of what we mean by 'computable'. Everything your real computer can do, a Turing machine can do too."
    },
    {
     "type": "text",
     "text": "A Turing machine has an infinite tape divided into cells, a read/write head, and a finite set of states. At each step it reads the symbol under the head, writes a symbol, moves left or right, and changes state. The infinite tape gives it unlimited memory — the key upgrade over a PDA's restricted stack."
    },
    {
     "type": "tip",
     "text": "Analogy: think of an endless strip of graph paper and a pencil with an eraser. You can read a cell, rewrite it, step left or right, and repeat — that simple loop is enough to compute anything computable."
    },
    {
     "type": "text",
     "text": "The Church-Turing Thesis states that any function that can be computed by any effective procedure at all can be computed by a Turing machine. It defines the outer boundary of computation itself — no known model is more powerful."
    },
    {
     "type": "text",
     "text": "Crucially, Turing proved some problems are UNDECIDABLE — no algorithm can ever solve them. The famous Halting Problem asks: given a program and input, will it eventually stop or run forever? Turing showed no general program can answer this for all cases. It is provably impossible."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "The Chomsky hierarchy (weak -> strong):\nRegular         : finite automaton   (regex)\nContext-free    : pushdown automaton (CFG)\nContext-sensitive: linear-bounded automaton\nRecursively enum.: TURING MACHINE   (most powerful)"
    },
    {
     "type": "text",
     "text": "This is the profound payoff of the whole subject: computers are astonishingly powerful, yet there are clear, provable limits to what any algorithm can ever do. Knowing that boundary is one of the deepest ideas in computer science."
    }
   ],
   "recap": "A Turing machine with its infinite tape captures all computation, yet problems like the Halting Problem are provably unsolvable."
  },
  "quiz": [
   {
    "q": "What gives a Turing machine its unlimited memory?",
    "options": [
     "A cache",
     "An infinite tape",
     "Extra states",
     "A stack"
    ],
    "answer": 1,
    "explain": "The infinite read/write tape provides unbounded memory, unlike a PDA's stack."
   },
   {
    "q": "The Halting Problem is an example of a problem that is...",
    "options": [
     "Undecidable (no algorithm can solve it)",
     "Solvable in linear time",
     "A regular language",
     "Solved by a DFA"
    ],
    "answer": 0,
    "explain": "Turing proved no general algorithm can decide whether every program halts."
   },
   {
    "q": "The Church-Turing Thesis claims Turing machines can compute...",
    "options": [
     "Only regular languages",
     "Nothing useful",
     "Anything that is effectively computable",
     "Only arithmetic"
    ],
    "answer": 2,
    "explain": "It states the Turing machine captures everything that can be computed by any procedure."
   },
   {
    "q": "In the Chomsky hierarchy, which machine is the most powerful?",
    "options": [
     "Turing machine",
     "Finite automaton",
     "Pushdown automaton",
     "Linear-bounded automaton"
    ],
    "answer": 0,
    "explain": "The Turing machine sits at the top, recognising the recursively enumerable languages."
   }
  ]
 },
 "toc-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not every language can be recognised by a DFA. But how do you PROVE a language is not regular? You cannot just say 'I could not build a DFA' — maybe you were not clever enough. You need a real proof tool, and that tool is the Pumping Lemma."
    },
    {
     "type": "text",
     "text": "The lemma says: if a language L is regular, then every string in L longer than some length n can be split into three parts x, y, z (string = xyz) where y is non-empty, the middle part x+y is short (length at most n), and repeating y any number of times (xy^k z, for k = 0, 1, 2, ...) always stays inside L. This 'repeating' is called pumping."
    },
    {
     "type": "text",
     "text": "The idea comes from the pigeonhole principle: a DFA has only n states, so any accepted string longer than n must revisit some state — creating a loop you can repeat (pump) or skip."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "To prove L is NOT regular:\n1. Assume L IS regular, so the pumping lemma must hold for some n.\n2. Pick a string s in L with length >= n (you choose s cleverly).\n3. Show that for EVERY possible split s = xyz (with |xy|<=n, |y|>0),\n   there exists some k where xy^k z is NOT in L.\n4. That contradicts the lemma, so L cannot be regular."
    },
    {
     "type": "tip",
     "text": "Classic exam example: L = { 0^n 1^n | n >= 0 } is not regular. Pick s = 0^n 1^n. Since |xy| <= n, y must be all 0s. Pumping y (say k=2) adds extra 0s without adding 1s, breaking the equal-count rule — contradiction."
    },
    {
     "type": "text",
     "text": "Remember: the pumping lemma can only prove a language is NOT regular. Passing the pumping lemma does not prove a language IS regular — some non-regular languages can still 'look' pumpable in tricky ways, so always show a contradiction for every possible split, not just one."
    }
   ],
   "recap": "The pumping lemma uses the pigeonhole principle on DFA states to prove certain languages, like 0^n1^n, can never be regular."
  },
  "quiz": [
   {
    "q": "What can the pumping lemma be used to prove?",
    "options": [
     "That a DFA has the fewest states possible",
     "That a language IS regular",
     "That a language is NOT regular",
     "That a grammar is ambiguous"
    ],
    "answer": 2,
    "explain": "The pumping lemma is a proof-by-contradiction tool for showing a language is not regular."
   },
   {
    "q": "Why must a long enough accepted string contain a repeatable loop?",
    "options": [
     "Because DFAs use recursion",
     "Because NFAs guess states",
     "Because of the pigeonhole principle on a finite number of states",
     "Because regular expressions always repeat"
    ],
    "answer": 2,
    "explain": "With only n states, a string longer than n must revisit a state, creating a loop that can be pumped."
   },
   {
    "q": "Which condition must the split s = xyz satisfy?",
    "options": [
     "z must be empty",
     "y must be non-empty and |xy| <= n",
     "x must be longer than z",
     "y must be empty"
    ],
    "answer": 1,
    "explain": "The lemma requires y to be non-empty and the first two parts combined to be no longer than n."
   },
   {
    "q": "Why is L = { 0^n 1^n } not regular?",
    "options": [
     "DFAs cannot read the symbol 1",
     "It contains the empty string",
     "Pumping the all-0s part y breaks the equal count of 0s and 1s",
     "It has infinite strings"
    ],
    "answer": 2,
    "explain": "Since |xy| <= n forces y to be only 0s, pumping adds extra 0s without matching 1s, leaving the language."
   }
  ]
 },
 "toc-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Regular languages behave nicely under many operations — this is called being 'closed' under an operation. If you combine two regular languages with union, intersection, concatenation, or Kleene star, the result is still regular. Complement of a regular language is also regular."
    },
    {
     "type": "text",
     "text": "This matters in practice: if you have a DFA for 'strings containing 101' and a DFA for 'strings of even length', you can build a combined DFA for 'strings containing 101 AND of even length' just by running both machines together — this trick is called the product construction."
    },
    {
     "type": "text",
     "text": "A separate, very practical question: given a DFA, can you build an equivalent one with fewer states? Yes — this is DFA minimization. Two states are 'equivalent' if, no matter what string you read from either one, they always end up either both accepting or both rejecting."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Minimization idea (table-filling method):\n1. Remove unreachable states (never visited from the start state).\n2. Start by marking pairs (accepting, non-accepting) as DISTINGUISHABLE.\n3. Repeat: mark (p,q) distinguishable if on some input symbol\n   they go to a pair already marked distinguishable.\n4. Merge all pairs left unmarked -- they are equivalent states."
    },
    {
     "type": "tip",
     "text": "Exam trick: minimal DFAs are unique (up to renaming states) for a given regular language. So two different-looking DFAs that both minimize to the same shape recognise the exact same language."
    },
    {
     "type": "text",
     "text": "Closure properties and minimization together are why regular languages are so easy to work with in tools: a regex engine, a lexer, or a text search feature can always be reduced to one small, fast, deterministic machine."
    }
   ],
   "recap": "Regular languages are closed under union, intersection, complement, and concatenation, and every DFA can be minimized to a unique smallest equivalent form."
  },
  "quiz": [
   {
    "q": "Regular languages are closed under which of these?",
    "options": [
     "Union only",
     "Union, intersection, and complement",
     "Only concatenation",
     "None of these operations"
    ],
    "answer": 1,
    "explain": "Regular languages are closed under union, intersection, complement, concatenation, and Kleene star."
   },
   {
    "q": "What does the product construction let you build?",
    "options": [
     "A single DFA that simulates two DFAs' states together to test both conditions at once",
     "A Turing machine from a DFA",
     "A regular expression from a CFG",
     "A DFA that shrinks two machines into one state"
    ],
    "answer": 0,
    "explain": "It tracks the pair of states from both DFAs simultaneously, letting you check combined conditions like AND or OR."
   },
   {
    "q": "In DFA minimization, when are two states merged?",
    "options": [
     "When they have the most transitions",
     "When they are both the start state",
     "When they have the same name",
     "When they are equivalent -- always agreeing on accept/reject for every possible string"
    ],
    "answer": 3,
    "explain": "States that behave identically for every future input are indistinguishable and can be merged into one."
   },
   {
    "q": "What is true about the minimal DFA for a regular language?",
    "options": [
     "There can be many different minimal DFAs with different numbers of states",
     "It cannot have any accepting states",
     "It is unique up to renaming states",
     "It always has exactly one state"
    ],
    "answer": 2,
    "explain": "For any regular language, the minimized DFA is unique except for how you label the states."
   }
  ]
 },
 "toc-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A DFA has no memory beyond its current state, so it can never check things like 'are the parentheses balanced' or 'are there equal 0s and 1s' — these need to count, and counting needs memory that can grow. A Pushdown Automaton (PDA) adds exactly that: a stack."
    },
    {
     "type": "text",
     "text": "A PDA is an NFA plus a stack. On each move it reads an input symbol (or nothing), looks at the top of the stack, and decides what to do: push a new symbol, pop the top symbol, or leave the stack alone, while also moving to a new state."
    },
    {
     "type": "text",
     "text": "The stack is what makes PDAs match the power of Context-Free Grammars exactly. In fact, every CFG can be converted into an equivalent PDA and every PDA into an equivalent CFG — they recognise precisely the same class of languages: the context-free languages."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "PDA for balanced parentheses ( and ):\nstart: push a marker $ on the stack\non '(' : push '(' \non ')' : pop the top symbol (must be '(')\nat end of input: accept if stack has only the marker $ left\n\nExample trace for '(())':\nread ( -> push (       stack: $ (\nread ( -> push (       stack: $ ( (\nread ) -> pop          stack: $ (\nread ) -> pop          stack: $\nend of input, stack = $  -> ACCEPT"
    },
    {
     "type": "tip",
     "text": "Remember the power ranking: DFA/NFA (no memory) < PDA (stack memory, one 'direction' at a time) < Turing machine (full tape, read AND write anywhere). A PDA can check balance but cannot check 'string equals its own reverse concatenated with itself twice' — some CFLs are already at the edge of what a stack can do."
    },
    {
     "type": "text",
     "text": "PDAs are not just theory — every programming language compiler uses a stack-based parser (often literally implemented with a stack) to check that your code's brackets, blocks, and expressions are correctly nested before it even understands what the code means."
    }
   ],
   "recap": "A PDA is an NFA with a stack, and PDAs are exactly as powerful as context-free grammars -- the two models define the same class of languages."
  },
  "quiz": [
   {
    "q": "What extra component does a PDA have that an NFA does not?",
    "options": [
     "A stack",
     "An infinite tape",
     "A second read head",
     "A clock"
    ],
    "answer": 0,
    "explain": "A PDA is an NFA extended with a stack for memory that can grow and shrink."
   },
   {
    "q": "Which class of languages is exactly equivalent in power to PDAs?",
    "options": [
     "Regular languages",
     "Context-sensitive languages only",
     "Recursively enumerable languages",
     "Context-free languages"
    ],
    "answer": 3,
    "explain": "Every CFG has an equivalent PDA and vice versa, so PDAs and CFGs recognise the same context-free languages."
   },
   {
    "q": "Why can't a DFA check balanced parentheses of unbounded length?",
    "options": [
     "DFAs cannot read the symbols ( and )",
     "It is actually possible with a DFA",
     "DFAs only accept the empty string",
     "A DFA has no memory that can grow to count an unbounded number of open brackets"
    ],
    "answer": 3,
    "explain": "A DFA's finite states cannot count arbitrarily high, but a PDA's stack can grow as needed."
   },
   {
    "q": "In the balanced-parentheses PDA, what happens on reading ')'?",
    "options": [
     "Ignore the symbol",
     "Push a new ')' onto the stack",
     "Restart the stack",
     "Pop the top of the stack"
    ],
    "answer": 3,
    "explain": "Each closing bracket pops one matching opening bracket off the stack."
   }
  ]
 },
 "toc-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A context-free grammar is ambiguous if some string in its language can be produced by more than one distinct parse tree (or equivalently, more than one leftmost derivation). This is a serious problem for compilers, because two different parse trees can mean two different things for the same code."
    },
    {
     "type": "text",
     "text": "The classic example is E -> E + E | E * E | id for the string id + id * id. One parse tree groups it as (id + id) * id, the other as id + (id * id) -- and these give different answers if you actually evaluate them."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Grammar: E -> E + E | E * E | id\nString: id + id * id\n\nTree A: (id + id) * id   <- + done first\nTree B: id + (id * id)   <- * done first\n\nBoth trees use the SAME grammar rules on the SAME string,\nso the grammar is ambiguous."
    },
    {
     "type": "text",
     "text": "The fix is to rewrite the grammar to force precedence and associativity directly into its structure, using separate non-terminals for each precedence level, so only one parse tree is ever possible."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Unambiguous version:\nE -> E + T | T\nT -> T * F | F\nF -> id | ( E )\n\nNow '*' always binds inside 'T' before '+' combines at the 'E' level,\nso id + id * id has exactly one parse tree."
    },
    {
     "type": "tip",
     "text": "Sadly, there is no general algorithm that can check if an arbitrary CFG is ambiguous -- this problem is itself undecidable. In practice, you prove ambiguity by exhibiting two trees, and you remove it with careful grammar redesign, exactly like the E/T/F example."
    }
   ],
   "recap": "A grammar is ambiguous when one string has two different parse trees; rewriting the grammar with precedence-layered non-terminals removes the ambiguity."
  },
  "quiz": [
   {
    "q": "A CFG is called ambiguous when...",
    "options": [
     "It uses recursion",
     "It has more than one non-terminal",
     "It generates an infinite language",
     "Some string has two or more distinct parse trees"
    ],
    "answer": 3,
    "explain": "Ambiguity means at least one string can be derived by more than one distinct parse tree."
   },
   {
    "q": "Why is ambiguity a real problem for a compiler?",
    "options": [
     "The same code could be interpreted with two different meanings",
     "It slows down lexical analysis",
     "It only matters for regular languages",
     "It makes the grammar too small"
    ],
    "answer": 0,
    "explain": "Two different parse trees for the same expression can lead to two different computed results."
   },
   {
    "q": "How is precedence typically enforced in an unambiguous arithmetic grammar?",
    "options": [
     "By using separate non-terminals for each precedence level (like E, T, F)",
     "By removing all operators",
     "By banning parentheses",
     "By making the grammar regular"
    ],
    "answer": 0,
    "explain": "Layering non-terminals (E for +, T for *, F for atoms) forces one grouping order and removes ambiguity."
   },
   {
    "q": "Is there a general algorithm to check if any given CFG is ambiguous?",
    "options": [
     "No, this problem is undecidable in general",
     "It is decidable but takes exponential time",
     "Yes, it always runs in linear time",
     "Yes, but only for regular grammars"
    ],
    "answer": 0,
    "explain": "Testing arbitrary CFGs for ambiguity is one of the classic undecidable problems in the theory."
   }
  ]
 },
 "toc-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Just like regular languages have their own pumping lemma, context-free languages have a stronger version. It proves that some languages need more power than even a PDA and CFG can give -- they are not context-free at all."
    },
    {
     "type": "text",
     "text": "For a context-free language L, every long enough string s can be split into FIVE parts, s = u v x y z, where v and y are not both empty, the middle chunk v x y is short, and pumping BOTH v and y together the same number of times (u v^k x y^k z) always keeps the string in L."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "To prove L is NOT context-free:\n1. Assume L IS context-free (pumping lemma must hold for some n).\n2. Pick a clever string s in L with |s| >= n.\n3. Show that for EVERY split s = uvxyz (with |vxy|<=n, v and y not both empty),\n   some k makes u v^k x y^k z fall OUTSIDE L.\n4. Contradiction -- so L is not context-free."
    },
    {
     "type": "tip",
     "text": "Classic exam example: L = { a^n b^n c^n | n >= 0 } is NOT context-free. Because |vxy| <= n, the short middle chunk can only touch at most two of the three letter blocks (a, b, c). Pumping then breaks the equal count among all three letters -- a CFG's single stack simply cannot track three counts at once."
    },
    {
     "type": "text",
     "text": "This is the real boundary lesson of the subject: DFAs count nothing, PDAs count one thing well (using the stack), and to count two independent things at once (like matching a^n b^n AND b^n c^n simultaneously) you need a full Turing machine."
    }
   ],
   "recap": "The CFL pumping lemma splits a string into five parts and pumps two of them together; it proves languages like a^n b^n c^n are not context-free because one stack cannot track three counts at once."
  },
  "quiz": [
   {
    "q": "How many parts does the CFL pumping lemma split a string into?",
    "options": [
     "Five",
     "Two",
     "Three",
     "Seven"
    ],
    "answer": 0,
    "explain": "The CFL pumping lemma uses the split s = u v x y z, five parts total."
   },
   {
    "q": "In the CFL pumping lemma, which parts get pumped together?",
    "options": [
     "u and z",
     "v and y",
     "u, v, and x",
     "x alone"
    ],
    "answer": 1,
    "explain": "Both v and y are repeated together the same number of times: u v^k x y^k z."
   },
   {
    "q": "Why is L = { a^n b^n c^n } not context-free?",
    "options": [
     "PDAs cannot read the letter c",
     "The short middle chunk vxy can only overlap two of the three letter blocks, so pumping breaks the count of the third",
     "It contains no strings at all",
     "It is actually context-free"
    ],
    "answer": 1,
    "explain": "A stack can reliably match only one pair of counts; matching three simultaneously is beyond a PDA's power."
   },
   {
    "q": "What is the main use of the CFL pumping lemma?",
    "options": [
     "Converting a CFG to Chomsky Normal Form",
     "Proving a language IS context-free",
     "Minimizing a PDA",
     "Proving a language is NOT context-free"
    ],
    "answer": 3,
    "explain": "Like its regular-language cousin, it is a proof-by-contradiction tool for showing a language falls outside the class."
   }
  ]
 },
 "toc-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Grammars written by hand are often messy -- with useless rules, unit rules like A -> B, or rules mixing terminals and non-terminals in awkward ways. Normal forms clean this up into a strict shape that is much easier for algorithms (and parsers) to work with."
    },
    {
     "type": "text",
     "text": "Chomsky Normal Form (CNF) requires every production to look like exactly one of two shapes: A -> B C (two non-terminals) or A -> a (a single terminal). A special rule allows S -> epsilon only if S is the start symbol and never appears on any rule's right side."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Converting to CNF (high-level steps):\n1. Add a new start symbol if the old one appears on a right side.\n2. Remove epsilon-productions (A -> empty), except possibly at the start.\n3. Remove unit productions (A -> B).\n4. Replace any rule mixing terminals/long non-terminal strings\n   so every rule becomes A->BC or A->a."
    },
    {
     "type": "text",
     "text": "Greibach Normal Form (GNF) is stricter still: every production must look like A -> a X1 X2 ... Xn, meaning it starts with exactly one terminal followed by zero or more non-terminals. GNF is especially useful for top-down parsers because every rule immediately 'consumes' one input symbol, which guarantees the parser makes progress and cannot loop forever."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: CNF makes every parse tree a strict binary tree (except leaves), which is exactly why the CYK parsing algorithm -- a classic dynamic-programming parser -- requires its input grammar to be in CNF."
    },
    {
     "type": "text",
     "text": "Both normal forms prove something reassuring: any context-free language (except one containing only epsilon oddities) can always be rewritten into one of these clean, restricted shapes without losing or gaining any strings -- the language stays exactly the same."
    }
   ],
   "recap": "Chomsky Normal Form restricts every rule to A->BC or A->a, and Greibach Normal Form restricts every rule to start with one terminal; both keep the language unchanged but make parsing algorithms simpler and provably terminating."
  },
  "quiz": [
   {
    "q": "Which shapes are allowed for a production in Chomsky Normal Form?",
    "options": [
     "A -> aB only",
     "A -> BC or A -> a",
     "A -> BCD or A -> ab",
     "Any shape at all"
    ],
    "answer": 1,
    "explain": "CNF restricts every rule to exactly two non-terminals or exactly one terminal."
   },
   {
    "q": "What must every production look like in Greibach Normal Form?",
    "options": [
     "A single non-terminal followed by a terminal",
     "A terminal followed by another terminal",
     "Two terminals only",
     "One terminal followed by zero or more non-terminals"
    ],
    "answer": 3,
    "explain": "GNF rules start with exactly one terminal, followed by any number of non-terminals."
   },
   {
    "q": "Why is GNF useful for top-down parsers?",
    "options": [
     "Every rule consumes one input symbol, guaranteeing progress and no infinite loops",
     "It only works for regular languages",
     "It removes all non-terminals",
     "It makes the grammar ambiguous"
    ],
    "answer": 0,
    "explain": "Since each rule starts with a terminal, the parser always advances through the input, so it cannot loop forever."
   },
   {
    "q": "Which parsing algorithm specifically requires the grammar to be in CNF?",
    "options": [
     "Recursive descent parsing",
     "Regular expression matching",
     "The CYK algorithm",
     "DFA minimization"
    ],
    "answer": 2,
    "explain": "The CYK dynamic-programming parser relies on the strict binary-rule shape that CNF guarantees."
   }
  ]
 },
 "toc-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Turing machines let us define the two most important language classes at the very top of the power scale. A language is Recursively Enumerable (RE) if some Turing machine accepts every string in it -- but for strings NOT in the language, the machine might reject, or it might just run forever, never answering."
    },
    {
     "type": "text",
     "text": "A language is Recursive if some Turing machine always halts -- on every input it eventually says yes (accept) or no (reject). It never loops forever. Every recursive language is recursively enumerable, but not the other way around."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "RECURSIVE      : TM always halts, answers YES or NO for every input\n                 (this is exactly the 'decidable' languages)\nRECURSIVELY ENUMERABLE (RE): TM halts and says YES for every string\n                 that IS in the language, but may loop forever\n                 on strings that are NOT in the language\n\nRelationship:  Recursive  is a strict subset of  RE"
    },
    {
     "type": "tip",
     "text": "Think of it like a very committed but sometimes-forgetful judge. A recursive-language judge always reaches a verdict. An RE-language judge will correctly shout 'guilty!' for every guilty case, but for an innocent case might just deliberate forever without ever saying 'not guilty'."
    },
    {
     "type": "text",
     "text": "The Halting Problem itself is the textbook example of a language that is RE but not recursive: you CAN write a machine that says 'yes, it halts' whenever the input program does halt (just simulate it and wait), but no machine can always correctly say 'no, it does not halt' in finite time for every non-halting program."
    },
    {
     "type": "text",
     "text": "This is the real reason Turing's undecidability result matters in practice: some questions about programs (does it halt, is it correct, does it ever crash) can be verified when the answer is 'yes' but can never be guaranteed to be answered when the answer is 'no'."
    }
   ],
   "recap": "Recursive languages always halt with a yes/no answer; recursively enumerable languages only guarantee a halt on yes-instances -- and the Halting Problem is the classic language that is RE but not recursive."
  },
  "quiz": [
   {
    "q": "What does it mean for a language to be recursive?",
    "options": [
     "It has an infinite number of accepting states",
     "Some TM accepts strings in the language but may loop on others",
     "Some TM always halts and correctly answers yes or no for every input",
     "It is generated only by regular expressions"
    ],
    "answer": 2,
    "explain": "Recursive (decidable) languages have a Turing machine that always halts with a definitive answer."
   },
   {
    "q": "What is true of a language that is recursively enumerable but not recursive?",
    "options": [
     "It must be a regular language",
     "It is impossible for it to exist",
     "A TM correctly accepts every string in the language but may never halt on strings outside it",
     "No Turing machine can accept any of its strings"
    ],
    "answer": 2,
    "explain": "RE-but-not-recursive languages have machines that recognise yes-cases but can loop forever on no-cases."
   },
   {
    "q": "Which of these is the classic example of a language that is RE but not recursive?",
    "options": [
     "L = { a^n b^n }",
     "The set of balanced-parenthesis strings",
     "Strings of even length",
     "The Halting Problem"
    ],
    "answer": 3,
    "explain": "You can confirm a halting program by simulating it, but you can never be sure a non-halting one will never halt."
   },
   {
    "q": "What is the relationship between recursive and RE languages?",
    "options": [
     "Recursive languages are a strict subset of RE languages",
     "They are exactly the same set of languages",
     "They have no relationship",
     "RE languages are a subset of recursive languages"
    ],
    "answer": 0,
    "explain": "Every recursive language is RE, but some RE languages (like the Halting Problem) are not recursive."
   }
  ]
 },
 "toc-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every Turing machine we have discussed so far is built for one specific job -- one machine to add numbers, another to check balanced brackets. But Turing had a deeper idea: build ONE machine that can simulate any other Turing machine at all."
    },
    {
     "type": "text",
     "text": "This is the Universal Turing Machine (UTM). You feed it two things on its tape: a description (an encoding) of some other Turing machine M, and an input string w. The UTM then simulates M running on w step by step, and produces the same result M would have produced."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "UTM tape layout (conceptual):\n[ encoding of machine M ] [ separator ] [ input string w ]\n\nUTM behaviour: read M's description, track M's current state\nand tape contents in its own working area, and simulate\none step of M at a time -- exactly reproducing what M would do."
    },
    {
     "type": "tip",
     "text": "This is exactly the idea behind every real computer today: your laptop is one fixed piece of hardware (the 'universal machine'), and the 'program' you load (encoded as data in memory) tells it what specific machine to simulate. Software is just an encoded Turing machine fed to a universal one."
    },
    {
     "type": "text",
     "text": "The UTM is also the key ingredient in proving the Halting Problem is undecidable. The classic proof assumes a machine H exists that can always tell whether 'M run on w' halts, then constructs a clever self-referencing machine that feeds its own description to itself, producing a logical contradiction no matter what H answers."
    },
    {
     "type": "text",
     "text": "This single idea -- that a machine's own description can be treated as ordinary data and fed back into a machine -- is one of the most important insights in all of computer science, and it underlies both the stored-program computer and the proofs of computability's limits."
    }
   ],
   "recap": "The Universal Turing Machine simulates any other Turing machine from an encoded description plus input, the same principle behind every stored-program computer and the proof that the Halting Problem is undecidable."
  },
  "quiz": [
   {
    "q": "What two things does a Universal Turing Machine take as input?",
    "options": [
     "An encoding of another Turing machine, plus an input string for it",
     "A regular expression and a DFA",
     "Two separate input strings",
     "Only a program, with no input"
    ],
    "answer": 0,
    "explain": "The UTM reads a description of machine M and an input w, then simulates M running on w."
   },
   {
    "q": "Which real-world idea is directly inspired by the Universal Turing Machine?",
    "options": [
     "The stored-program computer, where programs are just data in memory",
     "Regular expressions",
     "The pigeonhole principle",
     "DFA minimization"
    ],
    "answer": 0,
    "explain": "Modern computers run as one fixed hardware machine that simulates whatever program (encoded as data) is loaded into memory."
   },
   {
    "q": "How does the Universal Turing Machine relate to the Halting Problem proof?",
    "options": [
     "It only works for regular languages",
     "It has no relation to the Halting Problem",
     "The idea of feeding a machine's own encoding back into itself is central to the proof",
     "It proves the Halting Problem is decidable"
    ],
    "answer": 2,
    "explain": "The classic proof constructs a machine that receives its own description, producing a contradiction that shows no universal halt-checker H can exist."
   },
   {
    "q": "What does the UTM do with the encoded description of machine M?",
    "options": [
     "It ignores it and runs a fixed algorithm",
     "It converts M into a regular expression",
     "It simulates M step by step on the given input",
     "It deletes M and halts immediately"
    ],
    "answer": 2,
    "explain": "The UTM's whole purpose is to simulate the behaviour of the encoded machine M on the given input."
   }
  ]
 },
 "toc-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once you know the Halting Problem is undecidable, you rarely have to repeat Turing's original diagonal proof for every new problem. Instead you use reduction: show that if you COULD solve the new problem, you could use that solution to solve the Halting Problem too -- which is impossible, so the new problem must be undecidable as well."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Reduction technique (to prove problem X is undecidable):\n1. Assume, for contradiction, a machine that always solves X.\n2. Show how to build a solver for the Halting Problem\n   using that assumed X-solver as a sub-routine.\n3. But the Halting Problem is undecidable -- contradiction.\n4. Therefore X must be undecidable too."
    },
    {
     "type": "text",
     "text": "This gives a whole family of famous undecidable problems: does a given Turing machine ever print a particular symbol, does it accept the empty string, are two given Turing machines equivalent (accept exactly the same language), and does a given CFG generate every possible string over its alphabet."
    },
    {
     "type": "text",
     "text": "The Post Correspondence Problem (PCP) is another classic: given two lists of strings, can you pick a sequence of indices (repeats allowed) so that concatenating the top list's strings in that order equals concatenating the bottom list's strings in the same order? It sounds like a simple puzzle, but it is undecidable in general, and it is often used to prove OTHER problems (like CFG ambiguity) are undecidable, by reducing PCP to them."
    },
    {
     "type": "tip",
     "text": "Exam pattern: whenever you are asked to prove some property of programs is undecidable, look for a reduction FROM the Halting Problem (or PCP) TO your problem -- never try to reduce the other way around, that proves nothing."
    },
    {
     "type": "text",
     "text": "This reduction technique is exactly what real-world tool builders run into: nobody can write a perfectly general tool that detects every infinite loop, every dead-code path, or every security bug in arbitrary code, because each of these is a reduction away from the Halting Problem."
    }
   ],
   "recap": "Reductions let you prove new problems undecidable by showing a solution to them would solve the Halting Problem, which explains why so many real questions about programs (equivalence, dead code, infinite loops) can never be fully automated."
  },
  "quiz": [
   {
    "q": "What is the general strategy for proving a new problem X is undecidable using reduction?",
    "options": [
     "Show X only applies to regular languages",
     "Show that a solver for X could be used to solve the Halting Problem, which is impossible",
     "Count the number of states needed to solve X",
     "Show X is solvable by a DFA"
    ],
    "answer": 1,
    "explain": "If solving X would let you solve the Halting Problem, X cannot be decidable either."
   },
   {
    "q": "What does the Post Correspondence Problem ask?",
    "options": [
     "Whether a CFG is in Chomsky Normal Form",
     "Whether a sequence of indices exists so two lists of strings, concatenated in that order, become equal",
     "Whether a regular expression matches the empty string",
     "Whether a DFA has unreachable states"
    ],
    "answer": 1,
    "explain": "PCP asks for an index sequence making the top-list concatenation equal the bottom-list concatenation; it is undecidable."
   },
   {
    "q": "Which direction should a reduction go to prove a problem undecidable?",
    "options": [
     "From the Halting Problem (or another known undecidable problem) to the new problem",
     "Either direction works equally well",
     "From the new problem to the Halting Problem",
     "Reductions are not used for undecidability proofs"
    ],
    "answer": 0,
    "explain": "You reduce a known undecidable problem to the new one, showing a solver for the new problem would solve the known one."
   },
   {
    "q": "Why can no tool perfectly detect every infinite loop in arbitrary code?",
    "options": [
     "Infinite loops do not exist in real programs",
     "It is actually possible and already done perfectly",
     "Detecting infinite loops in general reduces to the undecidable Halting Problem",
     "Compilers are too slow"
    ],
    "answer": 2,
    "explain": "General infinite-loop detection is equivalent to solving the Halting Problem, which is proven undecidable."
   }
  ]
 },
 "toc-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "After seeing several undecidable problems about Turing machines, a pattern emerges. Rice's Theorem captures that pattern in one sweeping statement: any non-trivial property of the LANGUAGE a Turing machine recognises is undecidable."
    },
    {
     "type": "text",
     "text": "'Non-trivial' means the property is true for some Turing machines and false for others -- not true for all of them, and not false for all of them. 'Property of the language' means it depends only on WHICH strings the machine accepts, not on how the machine is built or how it works internally."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Rice's Theorem, informally:\nLet P be any property of languages such that:\n  - some TM's language has property P, and\n  - some TM's language does NOT have property P.\nThen: 'Does TM M's language have property P?' is UNDECIDABLE.\n\nExamples of such undecidable P:\n  - Is the language empty?\n  - Is the language finite?\n  - Does the language contain a specific string?\n  - Is the language regular?"
    },
    {
     "type": "tip",
     "text": "The one big exception: trivial properties ARE decidable, because you do not even need to look at the machine. 'Is the language a language?' is always true, and checking that takes zero work. Rice's Theorem only bites when the answer could genuinely go either way depending on which machine you are given."
    },
    {
     "type": "text",
     "text": "Rice's Theorem is why 'does this program have property X' is so often impossible to answer perfectly in general, for almost any interesting X you can name -- does it ever output a virus signature, is it equivalent to some known-safe program, does it always terminate. This single theorem instantly explains an enormous class of undecidability results, without needing a fresh reduction proof for each one."
    }
   ],
   "recap": "Rice's Theorem says any non-trivial property of a Turing machine's language is undecidable, explaining in one stroke why so many questions about what programs do can never be answered by a general algorithm."
  },
  "quiz": [
   {
    "q": "What does Rice's Theorem say is undecidable?",
    "options": [
     "Every property of every Turing machine",
     "Any non-trivial property of the language a Turing machine recognises",
     "Whether a DFA has more than 3 states",
     "Only the Halting Problem"
    ],
    "answer": 1,
    "explain": "Rice's Theorem generalises undecidability to any non-trivial semantic property of the recognised language."
   },
   {
    "q": "What does 'non-trivial' mean in Rice's Theorem?",
    "options": [
     "The property is true for some machines and false for others",
     "The property is true for all machines",
     "The property only applies to regular languages",
     "The property is false for all machines"
    ],
    "answer": 0,
    "explain": "Non-trivial means the property genuinely varies -- true for some machines' languages, false for others."
   },
   {
    "q": "Which of these properties is undecidable by Rice's Theorem?",
    "options": [
     "Is the machine's language empty?",
     "Is the machine's tape alphabet finite?",
     "Does the machine have exactly 5 states?",
     "Does the machine's description contain the letter A?"
    ],
    "answer": 0,
    "explain": "Emptiness of the recognised language is a non-trivial semantic property, so Rice's Theorem makes it undecidable."
   },
   {
    "q": "Why are trivial properties still decidable despite Rice's Theorem?",
    "options": [
     "They are decidable only for DFAs",
     "Trivial properties are checked using a UTM",
     "A property true for every machine (or false for every machine) needs no inspection of the machine at all",
     "Rice's Theorem does not apply to Turing machines"
    ],
    "answer": 2,
    "explain": "If the answer is always the same regardless of the machine, you can decide it instantly without any real computation."
   }
  ]
 },
 "toc-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Decidability asks 'can this be solved at all?'. Complexity theory asks the sharper question: 'can this be solved FAST?'. The class P contains every decision problem solvable by a deterministic algorithm in polynomial time -- time bounded by n^2, n^3, and so on, where n is the input size."
    },
    {
     "type": "text",
     "text": "The class NP contains every decision problem whose YES-answer has a certificate (a proposed solution) that can be VERIFIED in polynomial time, even if finding that certificate in the first place might be very hard. Equivalently, NP problems can be solved in polynomial time by a non-deterministic Turing machine, which is allowed to 'guess' the right branch at every step."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "P  : problems SOLVABLE quickly\nNP : problems whose proposed solution can be CHECKED quickly\n\nExample - Sudoku:\n  Solving a blank Sudoku puzzle from scratch: hard, no known fast method\n  Checking a FILLED-IN Sudoku grid is correct: fast (just scan rows/cols/boxes)\n  So Sudoku-checking is in NP.\n\nEvery problem in P is automatically in NP too,\nbecause if you can solve it fast, you can trivially verify a solution fast."
    },
    {
     "type": "tip",
     "text": "The single biggest open question in computer science is whether P = NP -- that is, whether every problem whose solution can be checked quickly can also be SOLVED quickly. Nobody has proven it either way; it carries a USD 1 million Millennium Prize. Most researchers believe P is not equal to NP."
    },
    {
     "type": "text",
     "text": "This matters far beyond theory: cryptography (like the RSA encryption behind HTTPS) is only secure because certain problems (factoring huge numbers) are believed to be outside P. If someone ever proved P = NP with a practical algorithm, most of today's encryption would break overnight."
    }
   ],
   "recap": "P is the class of problems solvable quickly; NP is the class of problems whose proposed solutions can be verified quickly; whether P equals NP remains the biggest open question in computer science."
  },
  "quiz": [
   {
    "q": "What defines the complexity class P?",
    "options": [
     "Problems with only one possible input",
     "Problems solvable by a deterministic algorithm in polynomial time",
     "Problems whose solution can only be guessed",
     "Problems that are undecidable"
    ],
    "answer": 1,
    "explain": "P is the class of decision problems solvable in polynomial time by a standard (deterministic) algorithm."
   },
   {
    "q": "What does it mean for a problem to be in NP?",
    "options": [
     "It must take exponential time to even check an answer",
     "It cannot be solved by any computer",
     "It is always harder than any problem in P",
     "A proposed solution (certificate) can be verified in polynomial time"
    ],
    "answer": 3,
    "explain": "NP problems allow fast verification of a proposed answer, even if finding that answer might be hard."
   },
   {
    "q": "Why is every problem in P automatically also in NP?",
    "options": [
     "Because P and NP are unrelated",
     "Because if you can solve it quickly, you can just solve it to trivially verify any proposed solution quickly",
     "This is actually false",
     "Because NP is a smaller class than P"
    ],
    "answer": 1,
    "explain": "Fast solving implies fast verification, so P is a subset of NP."
   },
   {
    "q": "Why does modern cryptography rely on P likely not equalling NP?",
    "options": [
     "Encryption needs problems that are easy to solve and easy to verify",
     "Cryptography requires undecidable problems",
     "P vs NP has nothing to do with cryptography",
     "Encryption relies on problems believed hard to solve but whose solutions (once found) are easy to verify, like factoring"
    ],
    "answer": 3,
    "explain": "Security depends on certain problems (like factoring) being hard to solve but easy to check, which would collapse if P = NP with a practical algorithm."
   }
  ]
 },
 "toc-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Among all problems in NP, some are the 'hardest' in a precise sense: they are NP-complete. A problem is NP-complete if it is in NP, and every other problem in NP can be reduced to it in polynomial time. Solve one NP-complete problem quickly, and you have a fast method for ALL of NP."
    },
    {
     "type": "text",
     "text": "The Boolean Satisfiability Problem (SAT) asks: given a Boolean formula built from AND, OR, and NOT over some variables, is there an assignment of TRUE/FALSE to the variables that makes the whole formula TRUE? The Cook-Levin Theorem (1971) proved SAT is NP-complete -- it was the FIRST problem ever proven NP-complete, and it opened the door for all the others."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "SAT example:\nFormula: (x1 OR x2) AND (NOT x1 OR x3) AND (NOT x2 OR NOT x3)\n\nTry x1=TRUE, x2=FALSE, x3=TRUE:\n  (T OR F)=T   AND   (F OR T)=T   AND   (F OR F)=F   -> whole formula FALSE\n\nTry x1=TRUE, x2=FALSE, x3=FALSE:\n  (T OR F)=T   AND   (F OR F)=F   -> already FALSE, try again\n\nTry x1=FALSE, x2=TRUE, x3=FALSE:\n  (F OR T)=T   AND   (T OR F)=T   AND   (F OR T)=T   -> SATISFIABLE!"
    },
    {
     "type": "text",
     "text": "Once SAT was known to be NP-complete, proving a NEW problem is NP-complete became much easier: show the new problem is in NP, then reduce a KNOWN NP-complete problem (like SAT) to it in polynomial time. This is how classic hard problems like the Travelling Salesman Problem, Graph Colouring, and the Knapsack decision problem were all shown NP-complete."
    },
    {
     "type": "tip",
     "text": "Exam trick: to prove problem X is NP-complete you need BOTH directions -- show X is in NP (fast verification), AND show a known NP-complete problem reduces to X (X is at least as hard). Missing either half is an incomplete proof."
    },
    {
     "type": "text",
     "text": "This is exactly why real interviewers ask about NP-completeness: if you recognise a problem (like optimal scheduling, or exact bin packing) as NP-complete, the honest engineering answer is not 'find the perfect fast algorithm' but 'use an approximation, a heuristic, or accept exponential time on small inputs' -- knowing the theory tells you when to stop chasing an exact fast solution."
    }
   ],
   "recap": "NP-complete problems are the hardest in NP -- solving any one fast solves them all; SAT was the first proven NP-complete (Cook-Levin), and it is now the standard tool for proving new problems NP-complete by reduction."
  },
  "quiz": [
   {
    "q": "What makes a problem NP-complete?",
    "options": [
     "It is in NP, and every problem in NP reduces to it in polynomial time",
     "It only applies to sorting algorithms",
     "It cannot be verified at all",
     "It is in P and solvable instantly"
    ],
    "answer": 0,
    "explain": "NP-completeness requires membership in NP plus polynomial-time reducibility from every other NP problem."
   },
   {
    "q": "What did the Cook-Levin Theorem prove?",
    "options": [
     "That the Halting Problem is decidable",
     "That all NP problems are in P",
     "That SAT was the first problem proven NP-complete",
     "That P equals NP"
    ],
    "answer": 2,
    "explain": "Cook-Levin (1971) proved SAT is NP-complete, the foundational result that started the whole theory of NP-completeness."
   },
   {
    "q": "What does SAT ask?",
    "options": [
     "Whether some assignment of TRUE/FALSE to variables makes a Boolean formula TRUE",
     "Whether a CFG is ambiguous",
     "Whether a graph can be colored with k colors",
     "Whether a Turing machine halts"
    ],
    "answer": 0,
    "explain": "SAT (Boolean Satisfiability) asks if there is a variable assignment that satisfies (makes true) a given formula."
   },
   {
    "q": "To prove a new problem X is NP-complete, what must you show?",
    "options": [
     "That X is in NP AND that a known NP-complete problem reduces to X in polynomial time",
     "That X can be solved in constant time",
     "Only that a known NP-complete problem reduces to X",
     "Only that X is in NP"
    ],
    "answer": 0,
    "explain": "Both halves are required: membership in NP, plus a polynomial-time reduction from an already-known NP-complete problem."
   }
  ]
 },
 "toc-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have now walked the entire Chomsky hierarchy: regular languages checked by DFAs, context-free languages checked by PDAs, and the unrestricted power of Turing machines -- alongside the hard limits of decidability and the open question of P versus NP. This final level connects all of it to the software you will actually write."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "The big picture, top to bottom:\nRegular       -> DFA/NFA/regex      -> lexers, search, simple validation\nContext-free  -> PDA/CFG            -> parsers, programming language syntax\nRecursively enumerable -> Turing machine -> full computation, any algorithm\n\nAnd the two walls every engineer eventually hits:\nUndecidability -> some questions about programs can NEVER be\n                  answered by ANY algorithm (Halting Problem, Rice's Theorem)\nNP-completeness -> some solvable problems have NO known fast algorithm\n                   (and may never have one)"
    },
    {
     "type": "text",
     "text": "Every time you write a regex, you are quietly using a DFA. Every time your compiler parses your code's grammar, it is running something equivalent to a PDA. Every time your IDE tries to warn you about 'this loop might never end' but sometimes just gives up, you are watching the Halting Problem in the wild. Every time a scheduling or routing feature says 'best effort' instead of 'optimal', you are watching NP-completeness in the wild."
    },
    {
     "type": "tip",
     "text": "Interview tip: when asked to design an algorithm and you suspect the underlying problem is NP-complete, say so explicitly and then propose a heuristic, an approximation, or a restriction to smaller inputs. Recognising the theoretical wall, rather than pretending it is not there, is exactly what separates a strong answer from a weak one."
    },
    {
     "type": "text",
     "text": "Theory of Computation is not just exam material -- it is the honest map of what software can and cannot do. It tells you when to keep optimizing your algorithm, and when to stop chasing a perfect answer and ship a good-enough one instead."
    }
   ],
   "recap": "The Chomsky hierarchy, undecidability, and NP-completeness together form the map of what computers can and cannot do -- and knowing where a real problem sits on that map is what turns a good engineer into a great one."
  },
  "quiz": [
   {
    "q": "Which machine model corresponds to regular languages in the Chomsky hierarchy?",
    "options": [
     "DFA / NFA",
     "Linear-bounded automaton",
     "Turing machine",
     "Pushdown automaton"
    ],
    "answer": 0,
    "explain": "Regular languages are exactly the languages recognised by finite automata (DFAs/NFAs)."
   },
   {
    "q": "An IDE that sometimes cannot decide if your loop will terminate is running into...",
    "options": [
     "A syntax error in the IDE",
     "A regular expression limitation",
     "An NP-completeness issue",
     "The Halting Problem"
    ],
    "answer": 3,
    "explain": "Determining whether an arbitrary loop halts is exactly the undecidable Halting Problem."
   },
   {
    "q": "When a routing or scheduling feature offers a 'best effort' answer instead of a guaranteed optimal one, this is usually because...",
    "options": [
     "The underlying problem is likely NP-complete, with no known fast exact algorithm",
     "The programmers were careless",
     "The problem is regular",
     "The problem is undecidable"
    ],
    "answer": 0,
    "explain": "Many optimization and scheduling problems are NP-complete, so exact solutions can take exponential time, pushing engineers toward heuristics."
   },
   {
    "q": "What is the recommended interview approach when a problem looks NP-complete?",
    "options": [
     "Insist a perfect fast algorithm must exist and keep searching",
     "Say so explicitly and propose a heuristic or approximation",
     "Claim the problem is undecidable instead",
     "Refuse to answer the question"
    ],
    "answer": 1,
    "explain": "Recognising the theoretical limit and proposing a practical heuristic or approximation shows real understanding, rather than chasing an algorithm that may not exist."
   }
  ]
 }
}
