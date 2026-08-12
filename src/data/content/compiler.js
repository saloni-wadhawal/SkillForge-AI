// Lesson text and quiz questions for "Compiler Design".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "compiler-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You write code in a language humans can read, like C or Java. But a CPU only understands raw binary instructions. A compiler is the translator in between: it reads your whole source file and produces an equivalent program the machine can run directly."
    },
    {
     "type": "text",
     "text": "Think of a compiler like a professional book translator. It reads the entire book (your source code) once, understands the meaning, and writes a brand-new copy in another language (machine code). You then hand out that translated copy to readers (the CPU) as many times as you like."
    },
    {
     "type": "text",
     "text": "This is different from an interpreter, which is more like a live human interpreter at a meeting: it reads and translates one line at a time, as the program runs. Compiling happens once, ahead of time; interpreting happens repeatedly, during execution."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "// source.c  (what you write)\nint main() {\n    return 3 + 4;\n}\n\n// A compiler turns this into machine code an OS can load and run."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: a compiler translates the whole program before it runs; an interpreter translates while it runs. Java famously does both (compile to bytecode, then run it)."
    }
   ],
   "recap": "A compiler translates an entire source program into equivalent machine (or lower-level) code ahead of time, unlike an interpreter which executes line by line."
  },
  "quiz": [
   {
    "q": "What is the main job of a compiler?",
    "options": [
     "Run the program faster than the CPU",
     "Design the CPU hardware",
     "Translate source code into equivalent lower-level code",
     "Store your code in the cloud"
    ],
    "answer": 2,
    "explain": "A compiler's core role is translating a source program into an equivalent lower-level or machine form."
   },
   {
    "q": "How does an interpreter differ from a compiler?",
    "options": [
     "It never produces any output",
     "It translates and runs the program line by line",
     "It compiles faster hardware",
     "It only works on binary files"
    ],
    "answer": 1,
    "explain": "An interpreter processes and executes the source one statement at a time as the program runs."
   },
   {
    "q": "Why can compiled code be handed to the CPU many times without re-translating?",
    "options": [
     "Interpreters cache it",
     "The compiler stays running forever",
     "The CPU memorizes the source",
     "Translation happens once, ahead of time, producing a reusable output"
    ],
    "answer": 3,
    "explain": "Compilation is a one-time, ahead-of-time step, so the produced machine code can be run repeatedly."
   }
  ]
 },
 "compiler-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A compiler does not do everything in one giant step. It works in stages, called phases, where each phase takes the output of the previous one and refines it. This makes the compiler easier to build, test, and understand."
    },
    {
     "type": "text",
     "text": "The classic phases in order are: lexical analysis (break text into tokens), syntax analysis (check grammar, build a tree), semantic analysis (check meaning and types), intermediate code generation, code optimization, and final code generation. A symbol table and error handler run alongside all of them."
    },
    {
     "type": "text",
     "text": "Compiler writers group these into two halves. The front end (lexical, syntax, semantic) understands the source language. The back end (optimization and code generation) produces the target machine code. In the middle sits a language-neutral intermediate representation."
    },
    {
     "type": "text",
     "text": "Diagram in words: Source code -> [Lexical] -> tokens -> [Syntax] -> parse tree -> [Semantic] -> checked tree -> [Intermediate code] -> IR -> [Optimizer] -> better IR -> [Code generation] -> machine code."
    },
    {
     "type": "tip",
     "text": "The front-end/back-end split is powerful: one front end for C plus back ends for many CPUs, or many language front ends sharing one optimizer. That is exactly how toolchains like LLVM are organized."
    }
   ],
   "recap": "Compilation runs as ordered phases (lexical, syntax, semantic, intermediate, optimize, code-gen), split into a source-understanding front end and a machine-targeting back end."
  },
  "quiz": [
   {
    "q": "Which is the correct early-to-late order of compiler phases?",
    "options": [
     "Semantic, Lexical, Syntax",
     "Lexical, Syntax, Semantic",
     "Code-gen, Lexical, Syntax",
     "Syntax, Semantic, Lexical"
    ],
    "answer": 1,
    "explain": "The front end proceeds lexical analysis, then syntax analysis, then semantic analysis."
   },
   {
    "q": "Which phases make up the compiler's front end?",
    "options": [
     "The symbol table alone",
     "Only code generation",
     "Lexical, syntax, and semantic analysis",
     "Optimization and code generation"
    ],
    "answer": 2,
    "explain": "The front end (lexical, syntax, semantic analysis) is responsible for understanding the source language."
   },
   {
    "q": "Why split a compiler into a front end and back end?",
    "options": [
     "To skip syntax checking",
     "To make it run without a CPU",
     "So one front end can feed several machine back ends via a shared IR",
     "To avoid using a symbol table"
    ],
    "answer": 2,
    "explain": "A shared intermediate representation lets front ends and back ends be mixed and reused across languages and targets."
   },
   {
    "q": "What structure is shared across many phases to track names, types, and scope?",
    "options": [
     "The CPU cache",
     "The parse stack only",
     "The symbol table",
     "The optimizer log"
    ],
    "answer": 2,
    "explain": "The symbol table stores identifier information and is consulted by several phases throughout compilation."
   }
  ]
 },
 "compiler-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The first phase is lexical analysis, done by a part called the lexer or scanner. It reads the raw stream of characters and groups them into meaningful chunks called tokens, throwing away things like spaces and comments."
    },
    {
     "type": "text",
     "text": "A token has a type and often a value. For the line total = price * 2; the lexer emits tokens like IDENTIFIER(total), ASSIGN(=), IDENTIFIER(price), MULT(*), NUMBER(2), SEMICOLON. The exact text that matched, such as 'total', is called the lexeme."
    },
    {
     "type": "text",
     "text": "How does the lexer know what a valid token looks like? Each token type is described by a regular expression, a pattern language for text. For example an integer might be the pattern [0-9]+ (one or more digits), and an identifier [a-zA-Z_][a-zA-Z0-9_]*."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Input:   count = 10 + x\nTokens:  ID(count)  ASSIGN(=)  NUM(10)  PLUS(+)  ID(x)\n\nPatterns:  ID   -> [a-zA-Z_][a-zA-Z0-9_]*\n           NUM  -> [0-9]+"
    },
    {
     "type": "tip",
     "text": "Analogy: the lexer is like reading a sentence and splitting it into individual words, ignoring the blank spaces. It does not yet check whether the sentence makes grammatical sense."
    }
   ],
   "recap": "Lexical analysis scans raw characters into tokens (type plus lexeme) using regular-expression patterns, discarding whitespace and comments."
  },
  "quiz": [
   {
    "q": "What does a lexer produce from raw source characters?",
    "options": [
     "A stream of tokens",
     "A finished executable",
     "Machine code",
     "An optimized IR"
    ],
    "answer": 0,
    "explain": "The lexer groups characters into a stream of tokens for the next phase."
   },
   {
    "q": "The actual text 'count' that matched an IDENTIFIER token is called the:",
    "options": [
     "Grammar",
     "Opcode",
     "Register",
     "Lexeme"
    ],
    "answer": 3,
    "explain": "The specific matched character sequence for a token is its lexeme."
   },
   {
    "q": "What is typically used to specify the pattern for each token type?",
    "options": [
     "Machine registers",
     "A parse tree",
     "A regular expression",
     "A symbol table entry"
    ],
    "answer": 2,
    "explain": "Token patterns like [0-9]+ are described with regular expressions."
   },
   {
    "q": "What does the lexer usually do with whitespace and comments?",
    "options": [
     "Turns them into machine code",
     "Stores them as tokens",
     "Sends them to the CPU",
     "Discards them"
    ],
    "answer": 3,
    "explain": "Whitespace and comments carry no token meaning, so the lexer normally discards them."
   }
  ]
 },
 "compiler-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Syntax analysis, or parsing, is the second phase. The parser takes the token stream from the lexer and checks whether it follows the grammar of the language, the rules for how tokens may legally be arranged."
    },
    {
     "type": "text",
     "text": "A grammar is a set of production rules. For example: an expression is a term plus another expression, a term is a factor times a term, and a factor is a number or an identifier. These rules define every valid program shape, much like grammar rules define valid sentences."
    },
    {
     "type": "text",
     "text": "There are two broad parsing strategies. Top-down parsing (such as recursive descent) starts from the top rule and tries to break it down to match the tokens. Bottom-up parsing starts from the tokens and combines them upward into larger rules until it reaches the start symbol."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Grammar (simplified):\n  expr   -> expr '+' term | term\n  term   -> term '*' factor | factor\n  factor -> NUM | ID | '(' expr ')'\n\nValid:   a + b * 2\nInvalid: a + * b     <-- parser reports a syntax error"
    },
    {
     "type": "tip",
     "text": "If the tokens cannot be arranged to satisfy any grammar rule, the parser raises a syntax error. This is the phase that catches a missing semicolon or an unbalanced bracket."
    }
   ],
   "recap": "The parser checks the token stream against the language grammar's production rules using top-down or bottom-up strategies, reporting syntax errors when no rule fits."
  },
  "quiz": [
   {
    "q": "What is the parser's input?",
    "options": [
     "Machine code",
     "The token stream from the lexer",
     "Raw characters",
     "The symbol table"
    ],
    "answer": 1,
    "explain": "Parsing consumes the tokens produced by lexical analysis."
   },
   {
    "q": "A set of production rules defining valid program structure is called a:",
    "options": [
     "Grammar",
     "Register file",
     "Lexeme",
     "Token"
    ],
    "answer": 0,
    "explain": "Grammar rules (productions) specify which token arrangements are legal."
   },
   {
    "q": "Recursive descent is an example of which parsing strategy?",
    "options": [
     "Bottom-up parsing",
     "Lexical scanning",
     "Top-down parsing",
     "Code optimization"
    ],
    "answer": 2,
    "explain": "Recursive descent starts from the top rule and expands downward, so it is top-down."
   },
   {
    "q": "What does the parser report if 'a + * b' cannot match any grammar rule?",
    "options": [
     "A link error",
     "A type error",
     "A syntax error",
     "A runtime crash"
    ],
    "answer": 2,
    "explain": "Tokens that violate the grammar produce a syntax error during parsing."
   }
  ]
 },
 "compiler-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As the parser confirms your code fits the grammar, it builds a tree that captures the structure. A parse tree shows every grammar rule that was applied, so it can be bushy and full of intermediate nodes. It records exactly how the derivation happened."
    },
    {
     "type": "text",
     "text": "Compilers usually prefer a slimmer version called an Abstract Syntax Tree (AST). The AST keeps only the meaningful structure, throwing away noise like parentheses and single-child rules. For 3 + 4 * 5, the AST is a '+' node whose right child is a '*' node, and the tree's shape already encodes that multiplication binds tighter."
    },
    {
     "type": "text",
     "text": "Diagram in words for 3 + 4 * 5: at the top is a plus node. Its left child is the number 3. Its right child is a times node, whose children are the numbers 4 and 5. Because times sits below plus, the tree naturally says 'do 4 * 5 first'."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Expression:  3 + 4 * 5\n\n        (+)\n       /   \\\n      3    (*)\n          /   \\\n         4     5\n\nThe AST captures precedence in its shape."
    },
    {
     "type": "tip",
     "text": "A parse tree records how you parsed; an AST records what the program means. Later phases walk the AST, so it is the backbone that connects the front end to the rest of the compiler."
    }
   ],
   "recap": "Parsing builds a tree; the parse tree records every rule applied, while the leaner Abstract Syntax Tree keeps only meaningful structure and encodes precedence in its shape."
  },
  "quiz": [
   {
    "q": "How does an AST differ from a full parse tree?",
    "options": [
     "It is always larger",
     "It contains machine code",
     "It keeps only meaningful structure, dropping noise",
     "It stores raw characters"
    ],
    "answer": 2,
    "explain": "An AST abstracts away redundant grammar detail, keeping the essential structure."
   },
   {
    "q": "In the AST for 3 + 4 * 5, why is the '*' node below the '+' node?",
    "options": [
     "Random ordering",
     "Because the tree shape encodes '*' having higher precedence",
     "Because '+' is evaluated first",
     "Because 3 is the largest number"
    ],
    "answer": 1,
    "explain": "Placing '*' lower in the tree means it is evaluated first, encoding its higher precedence."
   },
   {
    "q": "Which tree records every grammar rule applied during a derivation?",
    "options": [
     "The abstract syntax tree",
     "The token stream",
     "The parse tree",
     "The symbol table"
    ],
    "answer": 2,
    "explain": "A parse tree captures the full derivation including intermediate rule nodes."
   },
   {
    "q": "Which structure do later compiler phases typically walk?",
    "options": [
     "The raw source string",
     "The list of comments",
     "The Abstract Syntax Tree",
     "The regular expressions"
    ],
    "answer": 2,
    "explain": "The AST is the backbone the semantic and code-generation phases traverse."
   }
  ]
 },
 "compiler-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Passing the grammar does not mean a program is correct. The sentence 'the number ate a color' is grammatically fine but meaningless. Semantic analysis is the phase that checks meaning: does everything make sense given the language's rules?"
    },
    {
     "type": "text",
     "text": "Its main jobs include type checking (you cannot add a string to an integer without a rule for it), verifying that every variable is declared before use, checking that functions are called with the right number and type of arguments, and enforcing scope rules about where a name is visible."
    },
    {
     "type": "text",
     "text": "The symbol table is the star of this phase. As declarations are seen, the compiler records each name with its type and scope. When a name is later used, semantic analysis looks it up to confirm it exists and is being used consistently. Undeclared or misused names become semantic errors."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int x = 5;\nx = \"hello\";   // semantic error: assigning a string to an int\ny = x + 1;     // semantic error: y was never declared\n\n// Grammar is fine; meaning is not."
    },
    {
     "type": "tip",
     "text": "Quick test: syntax errors are about shape (a missing bracket); semantic errors are about meaning (a type mismatch or an undeclared variable). The symbol table is how the compiler 'remembers' what each name means."
    }
   ],
   "recap": "Semantic analysis checks meaning, type consistency, declarations, scope, and correct usage, leaning on the symbol table to catch errors the grammar cannot."
  },
  "quiz": [
   {
    "q": "What does semantic analysis primarily check?",
    "options": [
     "The number of lines",
     "The meaning and consistency of the program",
     "Whitespace formatting",
     "Only the file name"
    ],
    "answer": 1,
    "explain": "Semantic analysis verifies the program's meaning, such as types and declarations."
   },
   {
    "q": "Assigning a string to an integer variable is what kind of error?",
    "options": [
     "Semantic (type) error",
     "Syntax error",
     "Lexical error",
     "Link error"
    ],
    "answer": 0,
    "explain": "Type mismatches are caught during semantic analysis, not by the grammar."
   },
   {
    "q": "Which structure does semantic analysis rely on to track names, types, and scope?",
    "options": [
     "The optimizer",
     "The token buffer",
     "The symbol table",
     "The parse stack"
    ],
    "answer": 2,
    "explain": "The symbol table records declarations so uses can be validated against them."
   },
   {
    "q": "Using a variable 'y' that was never declared is detected as a:",
    "options": [
     "Syntax error at the lexer",
     "Semantic error",
     "Optimization pass",
     "Machine fault"
    ],
    "answer": 1,
    "explain": "An undeclared identifier is a meaning violation caught in semantic analysis."
   }
  ]
 },
 "compiler-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once the AST is validated, the compiler does not jump straight to machine code. It first emits an Intermediate Representation (IR): a simple, machine-independent form that is easy to analyze and optimize. A common IR is three-address code, where each instruction does one operation with at most three operands."
    },
    {
     "type": "text",
     "text": "For a = b + c * d, the three-address code introduces temporaries: t1 = c * d, then t2 = b + t1, then a = t2. Breaking complex expressions into tiny steps makes the code uniform and gives the optimizer clear, small operations to reason about."
    },
    {
     "type": "text",
     "text": "Next comes optimization, which rewrites the IR to be faster or smaller without changing its behavior. Classic techniques include constant folding (compute 2 * 3 at compile time into 6), dead code elimination (delete results nobody uses), and common subexpression elimination (compute a repeated value once)."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Source:  a = b + c * d\n\nThree-address code (IR):\n  t1 = c * d\n  t2 = b + t1\n  a  = t2\n\nAfter code generation (illustrative):\n  MUL R1, c, d\n  ADD R2, b, R1\n  MOV a, R2"
    },
    {
     "type": "text",
     "text": "Finally, the back end performs code generation: translating the optimized IR into real target instructions. This phase handles instruction selection (which machine op to use), register allocation (deciding which values live in the CPU's limited registers versus memory), and instruction ordering. The result is the machine code that runs on the CPU."
    },
    {
     "type": "tip",
     "text": "Why bother with an IR at all? It decouples 'the language' from 'the machine.' Optimizers work on the neutral IR, and each CPU only needs its own back end, so the same middle can serve C, Rust, and Swift alike."
    }
   ],
   "recap": "After validation the compiler emits a machine-independent IR (e.g. three-address code), optimizes it (constant folding, dead-code and common-subexpression elimination), then the back end generates target machine code via instruction selection and register allocation."
  },
  "quiz": [
   {
    "q": "Why generate an intermediate representation before machine code?",
    "options": [
     "It replaces the lexer",
     "It is required by every OS",
     "It is machine-independent and easy to optimize",
     "It runs directly on the CPU"
    ],
    "answer": 2,
    "explain": "An IR is a neutral, analyzable form that simplifies optimization and separates language from target."
   },
   {
    "q": "In three-address code, what are t1 and t2 in 't1 = c * d; t2 = b + t1'?",
    "options": [
     "Grammar rules",
     "Temporary variables holding intermediate results",
     "CPU registers hardwired by the OS",
     "Machine opcodes"
    ],
    "answer": 1,
    "explain": "Three-address code introduces temporaries to break expressions into single simple operations."
   },
   {
    "q": "Replacing '2 * 3' with '6' at compile time is which optimization?",
    "options": [
     "Constant folding",
     "Lexical scanning",
     "Instruction selection",
     "Register allocation"
    ],
    "answer": 0,
    "explain": "Computing constant expressions at compile time is called constant folding."
   },
   {
    "q": "Deciding which values live in the CPU's limited registers versus memory is called:",
    "options": [
     "Register allocation",
     "Tokenization",
     "Dead code elimination",
     "Parsing"
    ],
    "answer": 0,
    "explain": "Register allocation maps program values onto the CPU's finite set of registers during code generation."
   }
  ]
 },
 "compiler-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know a parser checks that tokens follow the grammar. Top-down parsing builds the parse tree starting at the root (the start symbol) and works its way down to the tokens, guessing which rule to expand at each step and confirming the guess against the input."
    },
    {
     "type": "text",
     "text": "To guess correctly, the parser needs two sets for every non-terminal. FIRST(A) is the set of terminals that can appear as the first symbol of anything A can derive. FOLLOW(A) is the set of terminals that can appear immediately after A in some valid sentence. Together they tell the parser which rule to pick without backtracking."
    },
    {
     "type": "text",
     "text": "Example grammar: E -> T E', E' -> + T E' | epsilon, T -> id. Here FIRST(T) = {id}, so FIRST(E) = {id} too. Since E never appears on the right-hand side of any rule in this grammar, the only thing that can follow it is end of input, so FOLLOW(E) = FOLLOW(E') = { $ }."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Grammar:\n  E  -> T E'\n  E' -> + T E' | epsilon\n  T  -> id\n\nFIRST(T)  = { id }\nFIRST(E)  = { id }\nFIRST(E') = { +, epsilon }\nFOLLOW(E) = { $ }\nFOLLOW(E') = FOLLOW(E) = { $ }"
    },
    {
     "type": "tip",
     "text": "Exam shortcut: if a non-terminal A can derive epsilon, its epsilon-production also gets predicted whenever the lookahead token is in FOLLOW(A) - that is exactly why LL(1) parsing tables add A -> epsilon to table[A][b] for every b in FOLLOW(A). Always work out FIRST sets before FOLLOW sets - FOLLOW almost always needs FIRST as an input."
    }
   ],
   "recap": "Top-down parsing predicts which rule to expand next using FIRST (what a symbol can start with) and FOLLOW (what can come right after it)."
  },
  "quiz": [
   {
    "q": "What does FIRST(A) represent?",
    "options": [
     "The terminals that can follow A",
     "Every token in the language",
     "The last token of the program",
     "The terminals that can start a string derived from A"
    ],
    "answer": 3,
    "explain": "FIRST(A) is the set of terminals that can begin some derivation starting from A."
   },
   {
    "q": "What does FOLLOW(A) represent?",
    "options": [
     "Terminals that can start A",
     "Terminals that can immediately follow A in some derivation",
     "Every non-terminal in the grammar",
     "The tokens inside A only"
    ],
    "answer": 1,
    "explain": "FOLLOW(A) lists terminals that can legally appear right after A."
   },
   {
    "q": "Why does top-down parsing need FIRST and FOLLOW sets?",
    "options": [
     "To generate machine code",
     "To count tokens",
     "To choose the right rule to expand without backtracking",
     "To build the symbol table"
    ],
    "answer": 2,
    "explain": "These sets let the parser predict, one lookahead token at a time, which production to apply."
   },
   {
    "q": "If a non-terminal A can derive epsilon, what happens to FOLLOW(A)?",
    "options": [
     "It is discarded",
     "It is ignored entirely",
     "It becomes empty",
     "It tells the parser to predict A's epsilon-production whenever the lookahead is in FOLLOW(A)"
    ],
    "answer": 3,
    "explain": "When A can vanish (derive epsilon), FOLLOW(A) tells the parser which lookahead tokens should trigger that epsilon-production, since A produces no tokens of its own to predict on."
   }
  ]
 },
 "compiler-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An LL(1) parser is a top-down parser that looks only one token ahead ('1') and reads input Left to right while producing a Leftmost derivation. It uses a parsing table: rows are non-terminals, columns are terminals (plus $), and each cell holds the one rule to apply."
    },
    {
     "type": "text",
     "text": "The table is built directly from FIRST and FOLLOW sets. For a rule A -> alpha, put that rule in table[A][a] for every terminal a in FIRST(alpha). If alpha can derive epsilon, also put the rule in table[A][b] for every b in FOLLOW(A)."
    },
    {
     "type": "text",
     "text": "If any cell would need two different rules, the grammar is not LL(1) - it is ambiguous for one-token lookahead, often because of left recursion or a shared prefix between two alternatives. Both problems can sometimes be removed by rewriting the grammar."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Table for E -> T E' | E' -> + T E' | eps | T -> id\n\n        id        +          $\nE     E->TE'\nE'                E'->+TE'   E'->eps\nT     T->id\n\nParse 'id + id $' using a stack: push $ E, look at 'id',\nuse E->TE', then T->id matches 'id', then E' sees '+',\nuses E'->+TE', and so on until the stack only has $."
    },
    {
     "type": "tip",
     "text": "A grammar with left recursion (A -> A alpha) can never be LL(1) as written - the parser would expand A forever without consuming input. Left-recursion elimination is always the first fix to try."
    }
   ],
   "recap": "An LL(1) parser uses a table built from FIRST/FOLLOW to pick one rule per (non-terminal, next-token) pair; conflicting cells mean the grammar needs rewriting, often to remove left recursion."
  },
  "quiz": [
   {
    "q": "What does the '1' in LL(1) mean?",
    "options": [
     "One non-terminal",
     "One token of lookahead",
     "One rule in the whole grammar",
     "One pass over the source"
    ],
    "answer": 1,
    "explain": "LL(1) parsers decide which rule to apply using exactly one lookahead token."
   },
   {
    "q": "An LL(1) parsing table's rows and columns represent:",
    "options": [
     "Tokens and line numbers",
     "Files and functions",
     "Non-terminals and terminals",
     "Registers and memory addresses"
    ],
    "answer": 2,
    "explain": "Rows are non-terminals, columns are terminals (plus end-of-input), and cells hold the rule to use."
   },
   {
    "q": "Two different rules landing in the same table cell means:",
    "options": [
     "The code generator will crash",
     "The grammar is perfectly fine",
     "The lexer failed",
     "The grammar is not LL(1) as written"
    ],
    "answer": 3,
    "explain": "A conflicting cell means one token of lookahead cannot decide between two rules, so the grammar needs to be rewritten."
   },
   {
    "q": "Which grammar feature breaks LL(1) parsing outright?",
    "options": [
     "Short rule names",
     "Having an epsilon rule",
     "Using terminals",
     "Left recursion"
    ],
    "answer": 3,
    "explain": "Left recursion causes the parser to expand the same non-terminal forever without consuming any input."
   }
  ]
 },
 "compiler-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Bottom-up parsing builds the parse tree the opposite way: starting from the tokens and combining them upward until only the start symbol remains. The most common technique is shift-reduce parsing, using a stack and the remaining input."
    },
    {
     "type": "text",
     "text": "A 'shift' pushes the next input token onto the stack. A 'reduce' recognizes that the top of the stack matches the right-hand side of some grammar rule, and replaces it with the rule's left-hand side. The parser repeats shift and reduce until the stack holds only the start symbol and input is empty."
    },
    {
     "type": "text",
     "text": "The tricky part is knowing when to reduce and by which rule - this is decided by finding a 'handle', the substring on the stack that matches a rule's right side at exactly the right moment in a valid rightmost derivation (read backwards)."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Grammar: E -> E + T | T,  T -> id\nInput: id + id $\n\nStack        Input        Action\n$            id+id$       shift\n$id          +id$         reduce T->id\n$T           +id$         reduce E->T\n$E           +id$         shift\n$E+          id$          shift\n$E+id        $            reduce T->id\n$E+T         $            reduce E->E+T\n$E           $            accept"
    },
    {
     "type": "tip",
     "text": "Shift-reduce conflicts come in two flavors: shift/reduce (should I shift or reduce now?) and reduce/reduce (which of two rules should I reduce with?). Both mean the grammar is ambiguous for the parser being used."
    }
   ],
   "recap": "Shift-reduce parsing builds a parse tree bottom-up using a stack: shift pushes tokens, reduce collapses a handle into its left-hand non-terminal, until only the start symbol remains."
  },
  "quiz": [
   {
    "q": "In shift-reduce parsing, what does a 'shift' do?",
    "options": [
     "Replaces the stack top with a non-terminal",
     "Generates machine code",
     "Pushes the next input token onto the stack",
     "Deletes the stack"
    ],
    "answer": 2,
    "explain": "Shift moves the next token from the input onto the parsing stack."
   },
   {
    "q": "What does a 'reduce' step do?",
    "options": [
     "Replaces a handle on the stack with the rule's left-hand side",
     "Removes all whitespace",
     "Pushes a token onto the stack",
     "Starts a new parse tree"
    ],
    "answer": 0,
    "explain": "Reduce recognizes a rule's right-hand side on the stack (a handle) and collapses it to the left-hand non-terminal."
   },
   {
    "q": "A 'handle' is:",
    "options": [
     "A pointer to the symbol table",
     "The first token of the program",
     "The compiler's error message",
     "A substring on the stack matching a rule's right side at the correct point in the derivation"
    ],
    "answer": 3,
    "explain": "A handle is exactly what should be reduced next to stay consistent with a valid rightmost derivation."
   },
   {
    "q": "A shift/reduce conflict means:",
    "options": [
     "The parser cannot decide whether to shift or reduce at that point",
     "Two functions have the same name",
     "The program compiled successfully",
     "The lexer found an invalid character"
    ],
    "answer": 0,
    "explain": "A shift/reduce conflict happens when the parser cannot tell, from the current stack and lookahead, whether to shift or reduce."
   }
  ]
 },
 "compiler-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Plain shift-reduce parsing needs help deciding what to do at each step, so real compilers use LR parsers, which build a table of states from the grammar in advance. LR stands for Left-to-right input, Rightmost derivation in reverse."
    },
    {
     "type": "text",
     "text": "There are three common flavors, from weakest to strongest: SLR (Simple LR) uses FOLLOW sets to decide reduces, which is easy to build but rejects some valid grammars. CLR (Canonical LR) tracks exact lookahead per state, accepting the most grammars but producing very large tables. LALR (Look-Ahead LR) merges CLR states with the same core, giving CLR's power with SLR-sized tables."
    },
    {
     "type": "text",
     "text": "LALR is the sweet spot used by real tools: it is what Yacc and Bison actually generate. It handles essentially all practical programming-language grammars while keeping the parsing table small enough to be usable."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Power (grammars accepted), weakest to strongest:\n  LL(1)  <  SLR  <  LALR  <  CLR\n\nSLR : easy to build, FOLLOW-based, misses some grammars\nLALR: merged CLR states, used by Yacc/Bison in practice\n      (table stays about SLR-sized, not bigger)\nCLR : most precise, but tables can be huge"
    },
    {
     "type": "tip",
     "text": "Exam one-liner: 'LALR merges states of CLR that share the same core (the dotted rules), trading a tiny bit of power for a much smaller table.' That single sentence answers most LALR questions."
    }
   ],
   "recap": "LR parsers use precomputed states instead of guessing; SLR is simplest but weakest, CLR is strongest but huge, and LALR - used by real tools like Yacc - merges CLR states to get CLR's power in SLR-sized tables."
  },
  "quiz": [
   {
    "q": "What does LR stand for in LR parsing?",
    "options": [
     "Least Recursive",
     "Left-to-right input, Rightmost derivation (reversed)",
     "Logical Reduction",
     "Left Recursion Removed"
    ],
    "answer": 1,
    "explain": "LR parsers scan left to right and build a rightmost derivation, discovered in reverse."
   },
   {
    "q": "Which LR variant is generated by tools like Yacc and Bison in practice?",
    "options": [
     "LALR",
     "LL(1)",
     "SLR",
     "CLR"
    ],
    "answer": 0,
    "explain": "LALR merges CLR states with the same core, giving nearly CLR's power with much smaller tables, which is why real tools use it."
   },
   {
    "q": "Why is CLR less commonly used directly than LALR?",
    "options": [
     "CLR cannot parse expressions",
     "CLR's tables can become very large",
     "CLR ignores lookahead entirely",
     "CLR only works on English text"
    ],
    "answer": 1,
    "explain": "CLR tracks exact lookahead per state, giving maximum power but often impractically large tables."
   },
   {
    "q": "Ranking parser power from weakest to strongest, which order is correct?",
    "options": [
     "CLR < SLR < LALR",
     "SLR < LALR < CLR",
     "LALR < SLR < CLR",
     "CLR < LALR < SLR"
    ],
    "answer": 1,
    "explain": "SLR is the weakest of the three, LALR is stronger by merging CLR states, and CLR is the strongest but least compact."
   }
  ]
 },
 "compiler-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Nobody hand-writes a lexer and parser for a real language from scratch - it is tedious and error-prone. Instead, compiler writers use generator tools: Lex (or its modern cousin Flex) turns a list of token patterns into a working lexical analyzer, and Yacc (or Bison) turns a grammar into a working parser."
    },
    {
     "type": "text",
     "text": "A Lex file lists regular expressions paired with actions: when the pattern matches, run this code (usually 'return this token type'). A Yacc file lists grammar rules paired with actions: when this rule is reduced, run this code (often building an AST node or checking a type)."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "-- Lex-style rule --\n[0-9]+      { return NUMBER; }\n\"+\"         { return PLUS; }\n[ \\t\\n]     { /* skip whitespace */ }\n\n-- Yacc-style rule --\nexpr : expr PLUS term  { $$ = $1 + $3; }\n     | term             { $$ = $1; }\n     ;"
    },
    {
     "type": "text",
     "text": "The two tools are meant to work together: Lex's generated scanner feeds tokens one at a time to Yacc's generated parser, which calls back into the scanner whenever it needs the next token. This lexer-parser pipeline is how most real compilers, including parts of GCC's ancestors, were historically built."
    },
    {
     "type": "tip",
     "text": "Interview framing: Lex builds a DFA from regular expressions to recognize tokens; Yacc builds an LALR table from a grammar to recognize structure. Knowing which tool solves which problem is a very common viva question."
    }
   ],
   "recap": "Lex/Flex generate a lexical analyzer from token regular expressions, and Yacc/Bison generate an LALR parser from a grammar; together they form the classic scanner-plus-parser pipeline used to build real compilers."
  },
  "quiz": [
   {
    "q": "What does a Lex specification primarily describe?",
    "options": [
     "Regular expressions for tokens and the action to take on a match",
     "The optimizer's rules",
     "Grammar rules for statements",
     "Register allocation strategy"
    ],
    "answer": 0,
    "explain": "Lex files pair regex patterns with actions, generating the lexical analyzer."
   },
   {
    "q": "What does Yacc generate from a grammar specification?",
    "options": [
     "A garbage collector",
     "An LALR parser",
     "A linker",
     "A lexical analyzer"
    ],
    "answer": 1,
    "explain": "Yacc (and Bison) build an LALR parsing table and driver code from the given grammar rules."
   },
   {
    "q": "In the typical Lex + Yacc pipeline, who calls whom for the next token?",
    "options": [
     "The linker mediates between them",
     "The scanner calls the parser for the next token",
     "They never communicate",
     "The parser calls the scanner for the next token"
    ],
    "answer": 3,
    "explain": "The Yacc-generated parser requests the next token from the Lex-generated scanner as it needs it."
   },
   {
    "q": "What underlying machine does a Lex-generated scanner run to recognize tokens?",
    "options": [
     "A neural network",
     "A stack machine",
     "A recursive descent tree",
     "A DFA built from the regular expressions"
    ],
    "answer": 3,
    "explain": "Lex compiles the token regular expressions into a deterministic finite automaton for fast scanning."
   }
  ]
 },
 "compiler-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real code is rarely perfect on the first try, and a compiler that stops dead at the first typo is a bad tool. Every phase can hit errors: lexical (an illegal character), syntax (a missing semicolon), semantic (a type mismatch), and even logical ones the compiler cannot catch at all."
    },
    {
     "type": "text",
     "text": "A good compiler does two things: reports the error clearly (what, where, and ideally why), and recovers enough to keep looking for more errors in the same run, instead of stopping at the first one. Recovery is a deliberate compromise, not perfection - the compiler is just trying not to crash or flood you with junk messages."
    },
    {
     "type": "text",
     "text": "Common recovery strategies: panic mode skips input tokens until it finds a safe synchronizing token (like a semicolon or a closing brace) and resumes from there. Phrase-level recovery makes a small local fix, such as inserting a missing semicolon. Error productions add known-bad patterns directly into the grammar so the parser can recognize and report them by name."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int x = 5\nint y = 10;   // missing ';' above\nprintf(\"%d\", x + y);\n\n// A panic-mode recovery skips ahead to the next ';'\n// or '}' and resumes parsing from there, reporting\n// one clear error instead of a cascade of confusing ones."
    },
    {
     "type": "tip",
     "text": "Beware of 'cascading errors': one real mistake early on can trigger a flood of fake errors afterward if recovery is too aggressive. Good compilers try to report the first, real error clearly and suppress the noise that follows from it."
    }
   ],
   "recap": "Compilers detect lexical, syntax, and semantic errors, then use recovery strategies like panic mode, phrase-level fixes, or error productions to keep parsing and report multiple genuine errors in one run."
  },
  "quiz": [
   {
    "q": "Which is an example of a semantic error?",
    "options": [
     "A misspelled keyword",
     "A missing closing brace",
     "Adding a string to an integer without a defined rule",
     "An illegal character in a token"
    ],
    "answer": 2,
    "explain": "Type mismatches are meaning errors, caught during semantic analysis, not syntax or lexical checks."
   },
   {
    "q": "What does panic-mode error recovery do?",
    "options": [
     "Stops the compiler immediately",
     "Ignores all future errors silently",
     "Deletes the entire source file",
     "Skips tokens until a safe synchronizing token is found, then resumes"
    ],
    "answer": 3,
    "explain": "Panic mode discards tokens up to a synchronizing point like a semicolon or brace, then continues parsing."
   },
   {
    "q": "What is a 'cascading error'?",
    "options": [
     "An error only found at runtime",
     "An error in the linker only",
     "A single typo causing a flood of misleading follow-on errors",
     "A warning about unused variables"
    ],
    "answer": 2,
    "explain": "One real mistake can confuse later parsing enough to trigger many bogus errors afterward if recovery is naive."
   },
   {
    "q": "Adding known-bad patterns directly into the grammar so the parser can name them precisely is called:",
    "options": [
     "Constant folding",
     "Phrase-level recovery",
     "Error productions",
     "Panic mode"
    ],
    "answer": 2,
    "explain": "Error productions bake common mistakes into the grammar itself so the parser can give a specific, clear message."
   }
  ]
 },
 "compiler-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A type system is the set of rules a language uses to decide which operations make sense on which values - can you add an int to a float, can you call this function with these arguments, can you index this variable like an array? Type checking is the semantic-analysis process that enforces those rules before the program runs."
    },
    {
     "type": "text",
     "text": "Type checking can be static (done at compile time, as in C, Java, or C++) or dynamic (done at run time, as in Python or JavaScript). Static checking catches many bugs earlier and lets the compiler generate faster code, since it knows exact types in advance; dynamic checking is more flexible but pushes some errors to runtime."
    },
    {
     "type": "text",
     "text": "Two more useful terms: type coercion is when the compiler automatically converts one type to another where it is safe to do so (int to float in an expression), and type inference is when the compiler figures out a variable's type from context without you writing it explicitly."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "int a = 5;\nfloat b = 2.5;\nfloat c = a + b;   // coercion: 'a' is widened to float automatically\n\nauto d = a + b;    // type inference: compiler deduces 'd' is float\n\n// bool e = a + \"text\"; // type error: no rule for int + string"
    },
    {
     "type": "tip",
     "text": "Interview one-liner: 'static typing catches errors at compile time and enables faster code; dynamic typing defers checks to runtime and gives more flexibility.' Be ready to name a language for each side."
    }
   ],
   "recap": "A type system defines legal operations on values; type checking enforces them statically at compile time or dynamically at runtime, with coercion handling safe implicit conversions and inference deducing types automatically."
  },
  "quiz": [
   {
    "q": "When is static type checking performed?",
    "options": [
     "At run time only",
     "At compile time",
     "Never - it is manual",
     "Only after linking"
    ],
    "answer": 1,
    "explain": "Static type checking happens during compilation, before the program ever runs."
   },
   {
    "q": "Which of these is an example of type coercion?",
    "options": [
     "Writing a for loop",
     "Automatically converting an int to a float in a mixed expression",
     "Declaring a variable with 'int'",
     "Renaming a variable"
    ],
    "answer": 1,
    "explain": "Coercion is the compiler's automatic, safe conversion between compatible types, such as int to float."
   },
   {
    "q": "Type inference means:",
    "options": [
     "Types are checked only at runtime",
     "The compiler ignores types entirely",
     "The compiler deduces a variable's type from context",
     "The programmer must always write every type explicitly"
    ],
    "answer": 2,
    "explain": "Type inference lets the compiler figure out the type (e.g. from 'auto' or 'var') without an explicit annotation."
   },
   {
    "q": "Which language style defers most type errors to runtime?",
    "options": [
     "Assembly language",
     "Machine code",
     "Dynamically typed languages like Python or JavaScript",
     "Statically typed languages like C or Java"
    ],
    "answer": 2,
    "explain": "Dynamically typed languages check types as the program runs rather than before it starts."
   }
  ]
 },
 "compiler-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every variable your program creates needs memory, and the compiler decides ahead of time which strategy to use for each one. There are three main storage classes: static allocation, stack allocation, and heap allocation."
    },
    {
     "type": "text",
     "text": "Static allocation reserves a fixed memory address for a variable for the entire run of the program - global variables and variables declared 'static' work this way. The address is known at compile time, which makes access fast, but the memory is never given back until the program ends."
    },
    {
     "type": "text",
     "text": "Stack allocation is used for local variables and function parameters. Each function call gets a fresh block of memory (its activation record) pushed onto the stack, and that block is automatically popped and freed the instant the function returns. This is why recursion works and why local variables 'disappear' after a function ends."
    },
    {
     "type": "text",
     "text": "Heap allocation is used for memory the programmer requests explicitly at run time with malloc/new, whose size or lifetime cannot be known in advance. It is the most flexible but the slowest and riskiest: the programmer (or a garbage collector) must remember to free it, or the program leaks memory."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int counter = 0;        // static: lives the whole program\n\nvoid greet() {\n    int local = 5;       // stack: freed when greet() returns\n    int *p = malloc(sizeof(int) * 10);  // heap: lives until free(p)\n    free(p);\n}"
    },
    {
     "type": "tip",
     "text": "Memory speed ranking to remember: static and stack access are essentially free (just an offset calculation); heap access is slower because of the allocator's bookkeeping. That is why performance-critical code avoids unnecessary heap allocation."
    }
   ],
   "recap": "Compilers place variables in static memory (fixed for the program's life), the stack (per function call, auto-freed), or the heap (explicitly requested, flexible but manually managed and slower)."
  },
  "quiz": [
   {
    "q": "Which storage class is used for a variable declared 'static' at global scope?",
    "options": [
     "Static allocation, with a fixed address for the whole run",
     "Register allocation only",
     "Heap allocation",
     "Stack allocation, freed on function return"
    ],
    "answer": 0,
    "explain": "Static variables get one fixed compile-time address that persists for the entire program run."
   },
   {
    "q": "Why do a function's local variables disappear after it returns?",
    "options": [
     "They are stored on the heap and get garbage collected",
     "They are static and shared across calls",
     "The compiler deletes them from the source file",
     "They are stored on the stack, which pops the activation record on return"
    ],
    "answer": 3,
    "explain": "Local variables live in the function's stack frame, which is popped and reclaimed automatically when the function returns."
   },
   {
    "q": "Which storage type requires the programmer (or a garbage collector) to free memory manually?",
    "options": [
     "Stack allocation",
     "Register allocation",
     "Static allocation",
     "Heap allocation"
    ],
    "answer": 3,
    "explain": "Heap memory persists until it is explicitly freed or collected, unlike stack and static memory which are managed automatically."
   },
   {
    "q": "Why is stack allocation generally faster than heap allocation?",
    "options": [
     "The stack uses a garbage collector",
     "The heap is always empty",
     "The stack lives forever like static memory",
     "The stack uses simple pointer/offset math with no bookkeeping"
    ],
    "answer": 3,
    "explain": "Stack allocation just moves a stack pointer, while heap allocation involves an allocator searching for and tracking free blocks."
   }
  ]
 },
 "compiler-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every time a function is called, the compiler generates code to build an activation record (also called a stack frame): a chunk of memory on the stack holding everything that one call needs - its parameters, local variables, a return address, and a pointer back to the caller's frame."
    },
    {
     "type": "text",
     "text": "This is exactly how recursion works without magic: each call to a recursive function gets its own brand-new activation record, so each call's local variables are completely separate from every other call's, even though they share the same variable name in the source code."
    },
    {
     "type": "text",
     "text": "The return address, saved automatically when the call happens, is how the CPU knows where to resume in the caller once the callee finishes. The frame (or base) pointer gives a stable reference point for finding parameters and locals within the current frame, even as the stack pointer moves during the function's own work."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Stack grows downward, one frame per active call:\n\n  [ factorial(1) frame ]  <- top, currently executing\n  [ factorial(2) frame ]\n  [ factorial(3) frame ]\n  [ main() frame        ]  <- bottom\n\nEach frame holds: parameter n, return address,\nsaved frame pointer, and any locals for that call."
    },
    {
     "type": "tip",
     "text": "Stack overflow is simply running out of stack space because activation records keep piling up - classic causes are infinite (or too-deep) recursion. Remembering 'one frame per call, popped on return' explains most recursion questions in one shot."
    }
   ],
   "recap": "Each function call gets its own activation record on the stack holding parameters, locals, the return address, and a link back to the caller's frame, which is exactly why recursive calls stay independent of one another."
  },
  "quiz": [
   {
    "q": "What is stored in a function's activation record?",
    "options": [
     "The entire symbol table",
     "Only the function's name",
     "Only global variables",
     "Parameters, locals, return address, and a link to the caller's frame"
    ],
    "answer": 3,
    "explain": "An activation record bundles everything one call needs: its own data plus how to get back to the caller."
   },
   {
    "q": "Why do recursive calls not overwrite each other's local variables?",
    "options": [
     "The compiler renames variables randomly",
     "They share one global frame",
     "Recursion uses heap memory instead",
     "Each call gets its own separate activation record on the stack"
    ],
    "answer": 3,
    "explain": "Every call, recursive or not, pushes a fresh activation record, keeping each call's locals isolated."
   },
   {
    "q": "What is the purpose of the saved return address in an activation record?",
    "options": [
     "It tells the CPU where to resume execution in the caller after the function returns",
     "It holds the compiled machine code",
     "It stores the function's local variables",
     "It points to the heap"
    ],
    "answer": 0,
    "explain": "The return address is where control jumps back to once the current function finishes."
   },
   {
    "q": "A classic cause of stack overflow is:",
    "options": [
     "Excessive or infinite recursion piling up activation records",
     "Too many static variables",
     "A missing semicolon",
     "Using too few functions"
    ],
    "answer": 0,
    "explain": "Each recursive call adds another frame; without a base case (or with too much depth) the stack runs out of space."
   }
  ]
 },
 "compiler-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To optimize code well, a compiler needs to understand how execution can move through it - not just what each line does, but which lines can run right after which. A Control Flow Graph (CFG) captures exactly this: each node is a 'basic block' (a straight-line sequence of instructions with no jumps in or out except at the very start and end), and each edge shows a possible jump between blocks."
    },
    {
     "type": "text",
     "text": "Once the CFG exists, the compiler runs data flow analysis over it: tracking, block by block, facts like which variables are definitely assigned before use, which values are still 'live' (needed later), and which computations are redundant. These facts feed directly into optimizations."
    },
    {
     "type": "text",
     "text": "Two classic analyses: 'liveness analysis' finds, for each point in the program, which variables might be used again before being overwritten - this drives register allocation, because dead variables do not need a register. 'Reaching definitions' finds which assignments to a variable could still be the current value at a given point, which underlies dead code elimination and constant propagation."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "if (x > 0) {\n    y = 1;      // Block B1\n} else {\n    y = 2;      // Block B2\n}\nprint(y);       // Block B3\n\nCFG:  B1 -> B3\n      B2 -> B3\n\n'y' is live at the end of B1 and B2 (it is used in B3),\nso a register cannot be reused for something else until\nafter B3 reads it."
    },
    {
     "type": "tip",
     "text": "Remember the direction: liveness analysis flows backward through the CFG (from uses back to definitions), while reaching-definitions analysis flows forward (from definitions forward to uses). Getting the direction right is a common exam trap."
    }
   ],
   "recap": "A control flow graph models a program as basic blocks connected by possible jumps; data flow analyses like liveness and reaching definitions walk this graph to feed decisions such as register allocation and dead code elimination."
  },
  "quiz": [
   {
    "q": "What is a 'basic block' in a control flow graph?",
    "options": [
     "A single variable declaration",
     "The whole program",
     "A comment in the source code",
     "A straight-line sequence of instructions with no jumps except at the start and end"
    ],
    "answer": 3,
    "explain": "A basic block is a maximal run of instructions executed sequentially with no branching in the middle."
   },
   {
    "q": "What does liveness analysis determine?",
    "options": [
     "The file size of the source code",
     "The total number of functions",
     "Which variables might still be used before being overwritten",
     "The compiler's version number"
    ],
    "answer": 2,
    "explain": "Liveness analysis tracks which variables are 'live' - still needed later - which is essential for register allocation."
   },
   {
    "q": "In which direction does liveness analysis typically flow through the CFG?",
    "options": [
     "Randomly, block by block",
     "Backward, from uses back toward definitions",
     "Forward, from definitions to uses",
     "It does not use the CFG at all"
    ],
    "answer": 1,
    "explain": "Liveness is computed backward: a variable is live at a point if it is used somewhere reachable going forward from there."
   },
   {
    "q": "Which optimization directly depends on reaching-definitions analysis?",
    "options": [
     "Lexical scanning",
     "Dead code elimination and constant propagation",
     "Symbol table hashing",
     "Parsing table construction"
    ],
    "answer": 1,
    "explain": "Knowing which definitions can still reach a point lets the compiler remove unused assignments and propagate known constants."
   }
  ]
 },
 "compiler-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Loops run the same code many times, so even a tiny saving inside a loop body multiplies across every iteration - this makes loops the single best place to spend optimization effort. Compilers apply several loop-specific techniques on top of the general optimizations you already know."
    },
    {
     "type": "text",
     "text": "Loop-invariant code motion finds computations inside a loop whose result never changes between iterations, and hoists them out above the loop so they run once instead of every time. Strength reduction replaces an expensive operation with a cheaper equivalent - for example, turning repeated multiplication inside a loop into repeated addition."
    },
    {
     "type": "text",
     "text": "Loop unrolling duplicates the loop body several times per iteration of the loop counter, cutting down on the overhead of checking the loop condition and jumping back, at the cost of a larger compiled program. Induction variable elimination removes loop counters that are only used to compute another value that can be tracked directly instead."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "// Before optimization\nfor (int i = 0; i < n; i++) {\n    int limit = n * 2;       // loop-invariant: same every time\n    arr[i] = i * 4;           // strength reduction candidate\n}\n\n// After optimization (conceptually)\nint limit = n * 2;            // hoisted out of the loop\nint t = 0;\nfor (int i = 0; i < n; i++) {\n    arr[i] = t;                // multiplication turned into addition\n    t += 4;\n}"
    },
    {
     "type": "tip",
     "text": "Exam trigger phrase: if a question says 'moved a calculation outside a loop because its value never changes,' the answer is loop-invariant code motion; if it says 'replaced multiply with add,' the answer is strength reduction."
    }
   ],
   "recap": "Because loop bodies repeat, compilers apply loop-invariant code motion, strength reduction, loop unrolling, and induction-variable elimination to squeeze the most speed out of the code that runs most often."
  },
  "quiz": [
   {
    "q": "What does loop-invariant code motion do?",
    "options": [
     "Duplicates the loop body several times",
     "Deletes the loop entirely",
     "Adds more iterations to the loop",
     "Moves a computation whose value never changes out of the loop"
    ],
    "answer": 3,
    "explain": "If a value inside a loop is the same every iteration, computing it once outside the loop saves repeated work."
   },
   {
    "q": "Replacing repeated multiplication with repeated addition inside a loop is called:",
    "options": [
     "Dead code elimination",
     "Register allocation",
     "Loop unrolling",
     "Strength reduction"
    ],
    "answer": 3,
    "explain": "Strength reduction swaps an expensive operation for a cheaper equivalent that produces the same result."
   },
   {
    "q": "What is the main cost of loop unrolling?",
    "options": [
     "It breaks the loop's correctness",
     "It removes all local variables",
     "It always makes the program slower",
     "It increases the size of the compiled code"
    ],
    "answer": 3,
    "explain": "Unrolling duplicates the loop body, trading a larger program for fewer condition checks and jumps."
   },
   {
    "q": "Why are loops given special attention during optimization?",
    "options": [
     "Any saving in the loop body is multiplied by the number of iterations",
     "Loops do not use the CPU",
     "They are usually written incorrectly",
     "Loops cannot be compiled otherwise"
    ],
    "answer": 0,
    "explain": "Because loop bodies execute repeatedly, small improvements there have an outsized effect on total run time."
   }
  ]
 },
 "compiler-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CPU has only a handful of registers - fast storage right on the chip - but a program can use far more variables than that. Register allocation decides which variables get a real register and which must be 'spilled' to slower main memory, and the classic technique for doing this well is graph coloring."
    },
    {
     "type": "text",
     "text": "The compiler builds an 'interference graph': one node per variable, and an edge between two variables if they are ever live (needed) at the same time - meaning they cannot share the same register. This is where the liveness analysis you learned earlier gets used directly."
    },
    {
     "type": "text",
     "text": "Register allocation then becomes exactly the graph-coloring problem from graph theory: assign each node a 'color' (a register) so that no two connected nodes share a color, using at most as many colors as there are available registers. If the graph cannot be colored with the registers available, some variable is spilled to memory to simplify the graph, and the process repeats."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Variables a, b, c, d are live at overlapping times:\n  a-b interfere, b-c interfere, a-c do NOT interfere\n\nInterference graph:\n  a --- b --- c\n\nWith 2 registers (R1, R2):\n  a -> R1\n  b -> R2   (differs from both neighbours)\n  c -> R1   (safe: c does not interfere with a)\n\nIf a 4th variable interfered with all of a, b, c at once,\n2 registers would not be enough - one variable must spill."
    },
    {
     "type": "tip",
     "text": "Interview line: 'register allocation is graph coloring where nodes are variables, edges are interference from liveness analysis, and colors are registers; when you cannot color with the registers you have, you spill a variable to memory.' That sentence covers the whole topic."
    }
   ],
   "recap": "Register allocation builds an interference graph from liveness information and colors it so no two simultaneously-live variables share a register, spilling variables to memory when there are not enough registers to go around."
  },
  "quiz": [
   {
    "q": "In the interference graph used for register allocation, what does an edge between two variables mean?",
    "options": [
     "They are both global variables",
     "They are never used together",
     "They are live at the same time and cannot share a register",
     "They have the same type"
    ],
    "answer": 2,
    "explain": "An edge means the two variables' live ranges overlap, so putting them in the same register would corrupt one of them."
   },
   {
    "q": "What happens when the interference graph cannot be colored with the available registers?",
    "options": [
     "A variable is 'spilled' to memory to simplify the graph",
     "The program is left unoptimized entirely",
     "The compiler crashes with no recovery",
     "All variables are deleted"
    ],
    "answer": 0,
    "explain": "Spilling moves a variable to memory instead of a register, freeing up a color so the remaining graph can be colored."
   },
   {
    "q": "Which earlier analysis directly supplies the information needed to build the interference graph?",
    "options": [
     "Type checking",
     "Lexical analysis",
     "Parsing",
     "Liveness analysis"
    ],
    "answer": 3,
    "explain": "Liveness analysis tells the compiler which variables are simultaneously live, which is exactly the interference relation."
   },
   {
    "q": "Register allocation is a direct application of which classic problem?",
    "options": [
     "The traveling salesman problem",
     "Binary search",
     "The knapsack problem",
     "Graph coloring"
    ],
    "answer": 3,
    "explain": "Assigning registers so interfering variables never share one is exactly graph coloring, with registers as colors."
   }
  ]
 },
 "compiler-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything you have learned - lexing, parsing, semantic analysis, IR, optimization, code generation - is exactly the pipeline used inside real, production compilers. GCC and LLVM/Clang are the two most important compiler infrastructures in the industry, and both are built around a clean separation between front end, middle end, and back end."
    },
    {
     "type": "text",
     "text": "LLVM's big idea is a single, well-designed IR that many different front ends (Clang for C/C++, front ends for Rust, Swift, and others) all target, and many different back ends (x86, ARM, RISC-V) all consume. Because the middle (optimizations) works purely on LLVM IR, one optimizer serves every language and every target, which is exactly the 'decouple language from machine' benefit you saw with three-address code."
    },
    {
     "type": "text",
     "text": "Ahead-of-Time (AOT) compilation, what C and C++ use, does all the work described in this whole subject before the program ever runs, producing a finished executable. Just-In-Time (JIT) compilation, used by the Java Virtual Machine and JavaScript engines, instead compiles pieces of the program to machine code while it is running - often only 'hot' code that runs often enough to be worth the extra compile time - which lets it use runtime information a purely ahead-of-time compiler never sees."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "AOT (C/C++/Rust):\n  source -> full compile pipeline -> .exe   (once, before running)\n\nJIT (Java/JavaScript):\n  source -> bytecode -> interpret\n              \\-> hot code detected -> compile to native code at runtime\n\nLLVM pipeline:\n  Clang (C/C++) --\\\n  Rust front end ---> LLVM IR -> optimizer -> x86 / ARM / RISC-V back end\n  Swift front end --/"
    },
    {
     "type": "tip",
     "text": "The single most common interview question on this whole subject: 'what is the difference between AOT and JIT compilation?' Answer with the trade-off - AOT compiles once for zero runtime overhead, JIT compiles at runtime and can use live profiling data to optimize the code that actually gets executed most."
    }
   ],
   "recap": "Real-world compilers like GCC and LLVM/Clang run the exact front-end/middle/back-end pipeline you have studied; LLVM's shared IR lets one optimizer serve many languages and targets, while AOT and JIT compilation trade upfront compile time against the ability to optimize using live runtime information."
  },
  "quiz": [
   {
    "q": "What is LLVM's core design idea?",
    "options": [
     "A replacement for the operating system",
     "A shared intermediate representation that many front ends and back ends can target",
     "A single programming language for all uses",
     "A tool that only works with Java"
    ],
    "answer": 1,
    "explain": "LLVM's IR is the common middle ground: many languages compile down to it, and many CPU targets compile up from it."
   },
   {
    "q": "Which compilation strategy fully compiles a program to machine code before it ever runs?",
    "options": [
     "Lexical analysis only",
     "Ahead-of-Time (AOT) compilation",
     "Interpretation only",
     "Just-In-Time (JIT) compilation"
    ],
    "answer": 1,
    "explain": "AOT compilation, used by C and C++, produces a finished executable entirely before execution begins."
   },
   {
    "q": "What advantage does JIT compilation have over AOT?",
    "options": [
     "It removes the need for a parser",
     "It can use runtime information, like which code runs most often, to optimize better",
     "It always produces smaller executables",
     "It never needs an optimizer"
    ],
    "answer": 1,
    "explain": "Because JIT compiles while the program runs, it can profile actual behavior and focus optimization on genuinely hot code paths."
   },
   {
    "q": "Which real compiler front end targets LLVM IR for C and C++?",
    "options": [
     "The Java Virtual Machine",
     "GCC's assembler",
     "Clang",
     "Node.js"
    ],
    "answer": 2,
    "explain": "Clang is the LLVM-based front end that parses C/C++ and emits LLVM IR for the shared optimizer and back ends."
   }
  ]
 }
}
