// Lesson text and quiz questions for "System Programming".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "system-programming-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Software comes in two big families. System software runs and manages the computer itself: the operating system, compilers, assemblers, loaders, linkers, and device drivers. Application software is what a user runs to get a job done: a browser, a game, a text editor, a calculator."
    },
    {
     "type": "text",
     "text": "Think of a hotel. The application is the guest enjoying the room. The system software is the hotel staff and plumbing working behind the scenes so the room actually has water, power, and a clean bed. Guests rarely see this work, but nothing runs without it."
    },
    {
     "type": "text",
     "text": "A key difference is closeness to hardware. System software talks directly to the CPU, memory, and devices, and is often written to be fast and general-purpose. Application software usually sits on top and asks the system software to do the low-level work for it."
    },
    {
     "type": "tip",
     "text": "Quick test: if the program's main job is to help OTHER programs run, it's system software. If its main job is to help a PERSON do a task, it's application software."
    },
    {
     "type": "text",
     "text": "System programming means writing this foundational software. It demands care about memory, performance, and hardware rules, because a bug here can crash every application above it, not just one app."
    }
   ],
   "recap": "System software manages the machine and serves other programs; application software serves the user's tasks."
  },
  "quiz": [
   {
    "q": "Which of these is system software?",
    "options": [
     "A device driver",
     "A photo-editing app",
     "A weather app",
     "A chess game"
    ],
    "answer": 0,
    "explain": "A device driver manages hardware for other programs, making it system software."
   },
   {
    "q": "The main job of application software is to...",
    "options": [
     "Translate assembly code",
     "Help a user complete a task",
     "Manage the CPU schedule",
     "Load programs into memory"
    ],
    "answer": 1,
    "explain": "Application software exists to help a person accomplish some task."
   },
   {
    "q": "Why is a bug in system software often more serious?",
    "options": [
     "It costs more money",
     "It uses more disk space",
     "It is always harder to type",
     "It can affect every application running on top of it"
    ],
    "answer": 2,
    "explain": "Because applications depend on system software, a fault there can bring many programs down."
   },
   {
    "q": "Which pair are BOTH system software?",
    "options": [
     "Game and text editor",
     "Calculator and driver",
     "Assembler and operating system",
     "Browser and compiler"
    ],
    "answer": 2,
    "explain": "An assembler and an operating system both manage or support other programs, so both are system software."
   }
  ]
 },
 "system-programming-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CPU only understands machine code: raw binary numbers. Writing those by hand is painful, so we use assembly language, which gives each instruction a short readable name called a mnemonic, like MOV, ADD, or JMP. An assembler is the system program that translates assembly language into machine code."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; add two numbers on x86\nMOV AX, 5      ; put 5 into register AX\nADD AX, 3      ; AX = AX + 3, now AX holds 8\nHLT            ; stop"
    },
    {
     "type": "text",
     "text": "Most assemblers work in two passes over the source. Pass 1 scans all the code and builds a symbol table, recording the address of every label and variable. Pass 2 goes through again and generates the actual machine code, now that it knows where every label lives."
    },
    {
     "type": "tip",
     "text": "Why two passes? Because a jump like JMP LOOP might point to a label defined LATER in the file. Pass 1 finds all labels first, so pass 2 never gets stuck on an unknown address."
    },
    {
     "type": "text",
     "text": "Assembly instructions also include directives (or pseudo-ops) like DB or ORG. These are not CPU instructions; they are commands to the assembler itself, telling it to reserve storage or set a starting address. Distinguishing real instructions from directives is part of the assembler's job."
    }
   ],
   "recap": "An assembler translates human-readable assembly mnemonics into machine code, usually in two passes using a symbol table."
  },
  "quiz": [
   {
    "q": "What does an assembler translate?",
    "options": [
     "C code into assembly",
     "Machine code into assembly",
     "One high-level language into another",
     "Assembly language into machine code"
    ],
    "answer": 3,
    "explain": "An assembler converts assembly mnemonics into the CPU's machine code."
   },
   {
    "q": "What is built during Pass 1 of a two-pass assembler?",
    "options": [
     "The user interface",
     "The device driver",
     "The final executable file",
     "The symbol table of label addresses"
    ],
    "answer": 3,
    "explain": "Pass 1 records the address of every label in the symbol table."
   },
   {
    "q": "Why do many assemblers use two passes?",
    "options": [
     "To handle labels referenced before they are defined",
     "To save disk space",
     "To run twice as fast",
     "To support the mouse"
    ],
    "answer": 0,
    "explain": "Two passes let the assembler resolve forward references to labels defined later."
   },
   {
    "q": "A directive (pseudo-op) like ORG is...",
    "options": [
     "A CPU instruction",
     "A command to the assembler, not the CPU",
     "A type of register",
     "A machine-code opcode"
    ],
    "answer": 1,
    "explain": "Directives instruct the assembler itself, for example to set a starting address."
   }
  ]
 },
 "system-programming-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real programs are built from many pieces. Your code, a math library, and an input/output library are each assembled or compiled separately into object files. On their own these pieces are incomplete: your file might call a function that lives in another file. Two system programs finish the job: the linker and the loader."
    },
    {
     "type": "text",
     "text": "A linker combines several object files into one program. It resolves external references, meaning it connects each call to the actual code that defines that function, and it fixes up addresses so everything fits together. The result is a single executable file."
    },
    {
     "type": "text",
     "text": "A loader takes that executable and prepares it to run. It copies the program from disk into memory, adjusts addresses to the memory location actually used (relocation), and hands control to the program's first instruction."
    },
    {
     "type": "tip",
     "text": "Memory hook: the LINKER works before the program runs and joins pieces into one file. The LOADER works at run time and puts that file into memory. Link then load."
    },
    {
     "type": "text",
     "text": "Linking can be static or dynamic. Static linking copies library code into the executable, making it large but self-contained. Dynamic linking leaves shared libraries (like a .dll on Windows or .so on Linux) separate and links them at load or run time, saving memory when many programs share the same library."
    }
   ],
   "recap": "A linker joins object files and resolves references into one executable; a loader places that executable into memory and starts it, statically or dynamically."
  },
  "quiz": [
   {
    "q": "What is the main job of a linker?",
    "options": [
     "Copy the program into memory",
     "Translate assembly to machine code",
     "Combine object files and resolve external references",
     "Draw the user interface"
    ],
    "answer": 2,
    "explain": "The linker merges object files and connects each reference to its definition."
   },
   {
    "q": "Relocation performed by a loader means...",
    "options": [
     "Deleting unused code",
     "Adjusting addresses to the memory location actually used",
     "Compressing the file",
     "Sorting the symbol table"
    ],
    "answer": 1,
    "explain": "Relocation fixes addresses so the program works at the memory location it is loaded into."
   },
   {
    "q": "Compared to static linking, dynamic linking...",
    "options": [
     "Removes the need for a CPU",
     "Lets many programs share one library in memory",
     "Runs before assembly",
     "Always makes a larger executable"
    ],
    "answer": 1,
    "explain": "Dynamic linking keeps shared libraries separate so multiple programs can share them."
   },
   {
    "q": "Which correctly orders the steps?",
    "options": [
     "Loader then assembler",
     "Linker then loader",
     "Linker then assembler",
     "Loader then linker"
    ],
    "answer": 1,
    "explain": "Object files are linked into an executable first, then the loader brings it into memory to run."
   }
  ]
 },
 "system-programming-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sometimes you write the same block of instructions again and again. A macro is a named shortcut for a block of code. You define it once, then use its name wherever you need that block, and a macro processor expands the name back into the full code before assembly or compilation."
    },
    {
     "type": "text",
     "text": "This expansion happens by text substitution, not by a jump. Unlike a function call, which runs one shared copy of the code, a macro pastes a fresh copy at every place you use it. So macros can make the program larger but avoid call overhead."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#define SQUARE(x) ((x) * (x))\n\nint main(void) {\n    int a = SQUARE(4);   // expands to ((4) * (4)) = 16\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Always wrap macro parameters in parentheses, like ((x) * (x)). Without them, SQUARE(2 + 3) would expand to 2 + 3 * 2 + 3, giving 11 instead of 25."
    },
    {
     "type": "text",
     "text": "Macros can take parameters, and a macro processor may support conditional expansion and nested macros (a macro that uses another macro). In assembly, macros are heavily used to hide repetitive instruction sequences; in C, the preprocessor handles #define macros before the real compiler even sees your code."
    }
   ],
   "recap": "A macro is a reusable named block that a macro processor expands inline by text substitution, trading larger code for no call overhead."
  },
  "quiz": [
   {
    "q": "How does a macro processor handle a macro name?",
    "options": [
     "It ignores it",
     "It expands it inline by text substitution",
     "It jumps to shared code at runtime",
     "It stores it in a register"
    ],
    "answer": 1,
    "explain": "A macro processor replaces the name with the full block of code before assembly or compilation."
   },
   {
    "q": "A key difference between a macro and a function is that a macro...",
    "options": [
     "Pastes a fresh copy at each use",
     "Runs one shared copy of the code",
     "Cannot take parameters",
     "Only works in Python"
    ],
    "answer": 0,
    "explain": "Macro expansion inlines a copy at every use site, unlike a function's single shared copy."
   },
   {
    "q": "Why wrap macro parameters in parentheses?",
    "options": [
     "It is only for style",
     "To reduce file size",
     "To make them run faster",
     "To avoid wrong results from operator precedence after expansion"
    ],
    "answer": 3,
    "explain": "Parentheses prevent surrounding operators from binding incorrectly after text substitution."
   },
   {
    "q": "A macro that uses another macro inside it is called...",
    "options": [
     "A relocated macro",
     "A nested macro",
     "A static macro",
     "A linked macro"
    ],
    "answer": 1,
    "explain": "A macro invoking another macro is a nested macro."
   }
  ]
 },
 "system-programming-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Applications cannot touch the disk, network, or memory hardware directly, and that is on purpose. The operating system guards these resources. A system call is the controlled doorway a program uses to ask the OS to do a privileged job on its behalf, such as reading a file, creating a process, or sending data over the network."
    },
    {
     "type": "text",
     "text": "The CPU runs in two modes. User mode is restricted: normal application code runs here. Kernel mode is privileged: the OS runs here with full hardware access. A system call triggers a controlled switch from user mode into kernel mode, the OS does the work safely, then returns control to the program."
    },
    {
     "type": "tip",
     "text": "Analogy: user mode is a bank customer, kernel mode is the vault. You cannot walk into the vault yourself. You fill out a request (the system call) and a trusted teller (the OS) does it for you under strict rules."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <unistd.h>\n#include <fcntl.h>\n\nint main(void) {\n    int fd = open(\"data.txt\", O_RDONLY); // system call: ask OS to open a file\n    char buf[64];\n    read(fd, buf, 64);                    // system call: ask OS to read bytes\n    close(fd);                            // system call: ask OS to release it\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Programmers rarely make raw system calls by number. Libraries like the C standard library wrap them in friendly functions, and printf eventually calls the write system call underneath. This layering keeps applications portable while the OS keeps the machine safe and shared between many programs."
    }
   ],
   "recap": "System calls are the guarded interface where a program switches into the kernel to request privileged services from the OS."
  },
  "quiz": [
   {
    "q": "What is a system call?",
    "options": [
     "A macro expansion",
     "A way to link object files",
     "A CPU register",
     "A request from a program for the OS to do a privileged job"
    ],
    "answer": 3,
    "explain": "A system call is the controlled way a program asks the OS to perform privileged operations."
   },
   {
    "q": "In which mode does the operating system kernel run?",
    "options": [
     "Sleep mode",
     "Safe mode",
     "User mode",
     "Kernel mode"
    ],
    "answer": 3,
    "explain": "The kernel runs in privileged kernel mode with full hardware access."
   },
   {
    "q": "Why must applications go through system calls instead of touching hardware directly?",
    "options": [
     "To avoid using memory",
     "Because hardware has no addresses",
     "To run slower on purpose",
     "So the OS can protect and share resources safely"
    ],
    "answer": 3,
    "explain": "The OS mediates access so resources stay protected and shared fairly among programs."
   },
   {
    "q": "When you call printf in C, underneath it eventually uses which system call?",
    "options": [
     "open",
     "chmod",
     "fork",
     "write"
    ],
    "answer": 3,
    "explain": "printf ultimately relies on the write system call to output bytes."
   }
  ]
 },
 "system-programming-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every keyboard, disk, and network card speaks its own low-level language of registers and signals. A device driver is specialized system software that translates the OS's generic requests into the exact commands a specific piece of hardware understands. It is the bridge between the uniform world of the kernel and the messy details of real devices."
    },
    {
     "type": "text",
     "text": "Drivers usually run in kernel mode, so a driver bug is dangerous: it can crash the whole system, not just one app. The OS exposes a standard driver interface (open, read, write, close style operations) so that applications treat a disk, a printer, and a mouse through the same abstract model even though the drivers differ completely inside."
    },
    {
     "type": "text",
     "text": "Devices are far slower than the CPU, so drivers avoid busy-waiting. Instead they use interrupts: the device signals the CPU when it is ready, and the driver's interrupt handler responds. For large transfers, DMA (Direct Memory Access) lets the device move data to and from memory on its own, freeing the CPU to do other work."
    },
    {
     "type": "tip",
     "text": "Polling versus interrupts: polling is repeatedly asking are you done yet, wasting CPU. An interrupt is the device tapping the CPU on the shoulder only when it actually has news. Interrupts scale far better."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "// simplified Linux character-driver hooks\nstatic ssize_t my_read(struct file *f, char __user *buf,\n                       size_t len, loff_t *off) {\n    /* copy device data to user space with copy_to_user() */\n    return len;\n}\n\nstatic struct file_operations fops = {\n    .owner = THIS_MODULE,\n    .read  = my_read,   // kernel calls this when userspace read()s the device\n};"
    },
    {
     "type": "text",
     "text": "Drivers come in types, such as character drivers (byte streams like a serial port), block drivers (fixed-size blocks like disks), and network drivers. Writing them well means respecting concurrency (many requests at once), never blocking the kernel needlessly, and carefully validating data crossing between user space and kernel space, since a careless copy is a classic security hole."
    }
   ],
   "recap": "A device driver is kernel-mode software that maps the OS's generic I/O interface onto a specific device, using interrupts and DMA for efficiency."
  },
  "quiz": [
   {
    "q": "What is the main role of a device driver?",
    "options": [
     "To translate the OS's generic requests into a specific device's commands",
     "To run user applications",
     "To expand macros",
     "To link object files"
    ],
    "answer": 0,
    "explain": "A driver bridges the OS's uniform interface and one device's exact low-level commands."
   },
   {
    "q": "Why is a bug in a kernel-mode driver especially dangerous?",
    "options": [
     "It can crash the entire system",
     "It deletes source code",
     "It changes the screen color",
     "It only slows one app"
    ],
    "answer": 0,
    "explain": "Because drivers run in privileged kernel mode, a fault can bring down the whole system."
   },
   {
    "q": "Compared with polling, using interrupts lets a driver...",
    "options": [
     "Ignore the device entirely",
     "Ask the device repeatedly if it is done",
     "Run without the CPU",
     "Respond only when the device signals it is ready"
    ],
    "answer": 3,
    "explain": "An interrupt notifies the CPU only when the device has news, avoiding wasteful polling."
   },
   {
    "q": "What does DMA (Direct Memory Access) allow?",
    "options": [
     "Object files to be linked",
     "Macros to expand faster",
     "A device to move data to and from memory without the CPU doing each transfer",
     "The CPU to run drivers in user mode"
    ],
    "answer": 2,
    "explain": "DMA lets the device transfer data to memory directly, freeing the CPU for other work."
   }
  ]
 },
 "system-programming-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A text editor is system software that lets a programmer create and change source files, configuration files, and scripts. It sits between the human and the raw bytes of a file, and every other system program (assembler, compiler, linker) starts by reading a file that someone typed in an editor."
    },
    {
     "type": "text",
     "text": "The simplest editors are line editors: you pick a line number and change just that line, the way old teletype terminals worked. Modern screen editors show the whole file at once and let the cursor move freely, because the screen is refreshed fast enough to feel instant."
    },
    {
     "type": "text",
     "text": "Under the hood an editor keeps the file's text in a data structure built for fast insertion and deletion anywhere in the middle, not just at the end. Two classic choices are a gap buffer (an empty gap that slides to wherever you are typing) and a piece table (a list of pointers into the original file plus an edits buffer)."
    },
    {
     "type": "tip",
     "text": "Exam angle: editors are classified as line editors vs screen editors vs structure editors (which understand the syntax of what you are typing, like an IDE highlighting a missing bracket)."
    },
    {
     "type": "text",
     "text": "A structure editor goes further and understands the grammar of the language, so it can auto-indent, highlight matching brackets, or flag a syntax error as you type. That understanding is only possible because the editor borrows techniques from the very compilers it helps you write."
    }
   ],
   "recap": "A text editor is system software for creating and changing files; it ranges from simple line editors to structure editors that understand a language's grammar."
  },
  "quiz": [
   {
    "q": "What is a line editor?",
    "options": [
     "An editor built into a linker",
     "An editor that shows the whole file and lets the cursor move freely",
     "An editor where you select a line number and edit just that line",
     "An editor that only understands binary files"
    ],
    "answer": 2,
    "explain": "Line editors, common on old teletype terminals, work one numbered line at a time rather than showing the full screen."
   },
   {
    "q": "Why do editors use a gap buffer or piece table instead of a plain array of characters?",
    "options": [
     "To make the file smaller on disk",
     "To compile the file automatically",
     "To make inserting and deleting text anywhere in the file fast",
     "To encrypt the text"
    ],
    "answer": 2,
    "explain": "A plain array needs to shift every character after an edit point; gap buffers and piece tables avoid that cost."
   },
   {
    "q": "What makes a structure editor different from a plain screen editor?",
    "options": [
     "It only edits one line at a time",
     "It cannot save files",
     "It runs only in kernel mode",
     "It understands the grammar of the language being typed"
    ],
    "answer": 3,
    "explain": "A structure editor knows the language's syntax well enough to auto-indent, match brackets, or flag errors live."
   }
  ]
 },
 "system-programming-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A debugger is system software that lets a programmer inspect and control a running program instead of just staring at its source code. It can pause the program, show the values of variables at that moment, and step through instructions one at a time to see exactly where things go wrong."
    },
    {
     "type": "text",
     "text": "The core tool is a breakpoint: a marker that tells the debugger to stop execution at a chosen line or instruction. Once stopped, the programmer can inspect the call stack (which functions called which), watch variables, and even change a value on the fly to test a fix without recompiling."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "// compiled with debug symbols: gcc -g program.c -o program\n// then inspected with a debugger, e.g. gdb:\n//   break main       -> set a breakpoint at main()\n//   run              -> start the program\n//   next             -> execute the next line\n//   print total      -> show the current value of `total`\n//   backtrace        -> show the call stack"
    },
    {
     "type": "text",
     "text": "For all this to work, the compiler must embed debug symbols in the executable: a mapping from machine instructions back to source lines and variable names. Without symbols the debugger can still stop the program, but it can only show raw addresses, not the names you actually wrote."
    },
    {
     "type": "tip",
     "text": "Common exam mix-up: a debugger does not fix bugs, it only reveals what the program is doing. Compile with -g (or your language's debug flag) or the debugger has nothing meaningful to show."
    }
   ],
   "recap": "A debugger pauses and inspects a running program using breakpoints and debug symbols, revealing the exact state at the moment something goes wrong."
  },
  "quiz": [
   {
    "q": "What is a breakpoint?",
    "options": [
     "A type of macro expansion",
     "A section of unreachable code",
     "A marker that pauses execution at a chosen line or instruction",
     "A syntax error reported by the compiler"
    ],
    "answer": 2,
    "explain": "A breakpoint tells the debugger exactly where to stop the running program so the programmer can inspect its state."
   },
   {
    "q": "Why does a program usually need to be compiled with debug symbols before debugging?",
    "options": [
     "So the program runs faster",
     "So the linker can skip the linking step",
     "So the debugger can map machine instructions back to source lines and variable names",
     "So macros expand correctly"
    ],
    "answer": 2,
    "explain": "Debug symbols give the debugger the names and line numbers to show instead of raw memory addresses."
   },
   {
    "q": "What does a debugger's call stack view show?",
    "options": [
     "The macro definitions in the file",
     "Which functions called which, up to the current point",
     "The contents of the hard disk",
     "The list of installed device drivers"
    ],
    "answer": 1,
    "explain": "The call stack lists the chain of function calls that led to the current point in execution."
   }
  ]
 },
 "system-programming-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A compiler translates a whole program into machine code before anything runs. An interpreter instead reads a program's source (or an intermediate form of it) and carries out its actions directly, statement by statement, right at the moment each one is reached."
    },
    {
     "type": "text",
     "text": "This trade-off matters. An interpreted program usually starts instantly and is easy to test line by line, but it tends to run slower, because the same loop body is re-examined and re-translated every single time it executes, instead of being turned into machine code just once."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Python is interpreted: each line runs as soon as it is read\nfor i in range(3):\n    print(\"step\", i)   # the interpreter re-reads and re-executes this line each loop"
    },
    {
     "type": "text",
     "text": "Many real languages blend both ideas. Python and Java first compile source into a compact intermediate form called bytecode, then an interpreter (or a virtual machine) runs that bytecode. This keeps startup fast and portable, since the same bytecode can run wherever the interpreter exists, unlike raw machine code tied to one CPU family."
    },
    {
     "type": "tip",
     "text": "Exam line to remember: a compiler translates once, ahead of time; an interpreter translates and executes together, one piece at a time, every time that piece runs."
    }
   ],
   "recap": "An interpreter executes a program's source or bytecode directly, statement by statement, trading raw speed for fast startup and portability."
  },
  "quiz": [
   {
    "q": "What is the key difference between a compiler and an interpreter?",
    "options": [
     "There is no real difference",
     "A compiler only works with assembly language",
     "An interpreter always produces a faster program",
     "A compiler translates the whole program ahead of time; an interpreter translates and runs it piece by piece as it goes"
    ],
    "answer": 3,
    "explain": "Compilation is a one-time ahead-of-time translation; interpretation repeats translation and execution together during the run."
   },
   {
    "q": "Why is a purely interpreted loop often slower than compiled code doing the same work?",
    "options": [
     "Because interpreters cannot use variables",
     "Because the interpreter re-examines the same instructions on every pass through the loop",
     "Because loops are illegal in interpreted languages",
     "Because interpreted programs never use functions"
    ],
    "answer": 1,
    "explain": "Compiled machine code for a loop body is generated once; an interpreter re-processes that body every time the loop repeats."
   },
   {
    "q": "What is bytecode?",
    "options": [
     "Raw source code with comments removed",
     "A type of device driver",
     "A macro definition table",
     "A compact intermediate form that a virtual machine or interpreter runs"
    ],
    "answer": 3,
    "explain": "Bytecode is an intermediate, portable form produced by a first compile step and then executed by an interpreter or VM."
   }
  ]
 },
 "system-programming-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A real two-pass assembler solves a chicken-and-egg problem: an instruction near the top of a program can jump to a label defined near the bottom, but the assembler has not seen that label yet on its first read. The fix is to read the source twice."
    },
    {
     "type": "text",
     "text": "Pass 1 walks through the source just to build the symbol table: it tracks a location counter (the address each instruction will occupy) and records every label together with the address it stands for. It does not generate any machine code yet, because it may not know all the addresses labels refer to."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Pass 1 idea: build the symbol table using a location counter\nsource_lines = [(\"LOOP\", \"MOV\", 1), (None, \"ADD\", 1), (\"TOTAL\", \"STORE\", 1)]\ninstruction_size = {\"MOV\": 2, \"ADD\": 2, \"STORE\": 2}\n\nlocation_counter = 0\nsymbol_table = {}\nfor label, opcode, _operand in source_lines:\n    if label:\n        symbol_table[label] = location_counter\n    location_counter += instruction_size[opcode]\n\nprint(symbol_table)   # {'LOOP': 0, 'TOTAL': 4}"
    },
    {
     "type": "text",
     "text": "Pass 2 walks through the source a second time. This time the symbol table is complete, so every label reference can be replaced with its real address, and the assembler emits the actual machine code (or object code) instruction by instruction."
    },
    {
     "type": "tip",
     "text": "Exam trigger word: 'forward reference' means a label used before it is defined. That is exactly why a single pass is not enough and why Pass 1 exists purely to resolve addresses first."
    }
   ],
   "recap": "A two-pass assembler uses Pass 1 to build a complete symbol table of label addresses, then Pass 2 to generate machine code using that table."
  },
  "quiz": [
   {
    "q": "What is a forward reference?",
    "options": [
     "A comment at the top of a file",
     "A label used in an instruction before that label has been defined",
     "An error in the linker",
     "A macro that expands twice"
    ],
    "answer": 1,
    "explain": "A forward reference is a jump or reference to a label that appears later in the source, which a single pass cannot yet resolve."
   },
   {
    "q": "What is the main job of Pass 1 in a two-pass assembler?",
    "options": [
     "Run the finished program",
     "Build the symbol table by tracking the location counter and recording label addresses",
     "Link multiple object files together",
     "Generate the final machine code"
    ],
    "answer": 1,
    "explain": "Pass 1 scans the source to record where every label sits, without emitting code yet."
   },
   {
    "q": "Why can Pass 2 safely generate machine code for every instruction, including ones that jump forward?",
    "options": [
     "Because Pass 2 recompiles the symbol table from scratch",
     "Because the symbol table from Pass 1 already has every label's address",
     "Because Pass 2 ignores all labels",
     "Because forward jumps are not allowed in assembly"
    ],
    "answer": 1,
    "explain": "By the time Pass 2 runs, Pass 1 has already recorded every label's address, so lookups always succeed."
   }
  ]
 },
 "system-programming-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A symbol table is the data structure at the heart of an assembler or compiler. For every label or identifier it stores at least a name and an address (or value), and often extra information such as its type, its length, and whether other modules are allowed to see it."
    },
    {
     "type": "text",
     "text": "Because a symbol table is looked up constantly, every instruction that mentions a label triggers a search, its speed matters a lot. A hash table gives close to constant-time lookup, which is why real assemblers and compilers almost always use one instead of a plain list."
    },
    {
     "type": "text",
     "text": "A literal table is a related but separate structure. A literal is a constant value written directly in an instruction, like =5 or ='A'. Instead of scattering copies of that constant everywhere it is used, the assembler collects each distinct literal once, gives it an address in a literal pool, and reuses that single copy."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "symbol_table = {\"LOOP\": 204, \"TOTAL\": 300}   # label -> address\nliteral_table = {\"=5\": 500, \"='A'\": 504}      # literal -> pool address\n# an instruction like  ADD =5  gets rewritten to  ADD 500"
    },
    {
     "type": "tip",
     "text": "Do not confuse the two: the symbol table maps a programmer's names to addresses; the literal table maps constant values the programmer typed directly into code to a shared address in a literal pool."
    }
   ],
   "recap": "The symbol table maps labels to addresses and attributes; the literal table pools constants used directly in code so each one is stored only once."
  },
  "quiz": [
   {
    "q": "What does a symbol table typically store for each label?",
    "options": [
     "The label's name and address, and often its type and visibility",
     "Only the label's color on screen",
     "The entire source file text",
     "The macro it was expanded from"
    ],
    "answer": 0,
    "explain": "A symbol table records each label's name alongside its address and useful attributes like type or scope."
   },
   {
    "q": "Why do assemblers usually implement the symbol table as a hash table?",
    "options": [
     "Hash tables give near constant-time lookup, which matters since every label reference triggers a search",
     "Hash tables sort labels alphabetically automatically",
     "Hash tables use less disk space",
     "Hash tables are required by the CPU"
    ],
    "answer": 0,
    "explain": "Fast lookup matters because every instruction that references a label searches the symbol table."
   },
   {
    "q": "What is a literal table used for?",
    "options": [
     "Storing every comment in the source file",
     "Recording which functions call which",
     "Storing each distinct constant value once and giving it a shared address in a literal pool",
     "Listing all device drivers loaded"
    ],
    "answer": 2,
    "explain": "The literal table avoids duplicating the same constant value in memory by pooling each distinct literal once."
   }
  ]
 },
 "system-programming-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A loader takes an object program produced by the assembler or compiler and places it into memory ready to run. There are several classic designs, each doing a little more work than the last, and each trading simplicity for flexibility."
    },
    {
     "type": "text",
     "text": "An absolute loader is the simplest: the object code already has fixed, final memory addresses baked in, so the loader just copies it into memory at exactly those addresses. It is fast but rigid, since the program can only ever run starting at one fixed address."
    },
    {
     "type": "text",
     "text": "A relocating loader is smarter: it can place a program starting at whatever free address is available, and it adjusts every address inside the program by adding the actual starting address. This relocation step is why the same compiled program can be loaded at different addresses on different runs."
    },
    {
     "type": "text",
     "text": "A direct linking loader goes one step further and combines relocation with linking: it can take several separately assembled object modules, resolve references between them (module A calling a function defined in module B), and produce one runnable program in memory, all in a single loading pass."
    },
    {
     "type": "tip",
     "text": "Ladder to remember: absolute loader = fixed address only. Relocating loader = adjustable address, one module. Direct linking loader = adjustable address, many modules linked together."
    }
   ],
   "recap": "Loaders range from simple absolute loaders with fixed addresses, to relocating loaders that adjust addresses, to direct linking loaders that also combine multiple modules."
  },
  "quiz": [
   {
    "q": "What is the main limitation of an absolute loader?",
    "options": [
     "It links multiple modules automatically",
     "It only works with macros",
     "The program can only run starting at the one fixed address baked into the object code",
     "It cannot copy any bytes into memory"
    ],
    "answer": 2,
    "explain": "Absolute loaders load code exactly where the addresses were fixed at assembly time, with no flexibility."
   },
   {
    "q": "What extra step does a relocating loader perform that an absolute loader does not?",
    "options": [
     "It compiles the source code",
     "It deletes unused variables",
     "It adjusts every address in the program to match wherever it is actually loaded",
     "It writes the program to disk"
    ],
    "answer": 2,
    "explain": "Relocation adds the actual load address to every address reference so the program works no matter where it is placed."
   },
   {
    "q": "What makes a direct linking loader different from a plain relocating loader?",
    "options": [
     "It is only used for macros",
     "It never adjusts addresses",
     "It can combine and resolve references across several separately assembled modules in one pass",
     "It only works on one CPU family"
    ],
    "answer": 2,
    "explain": "A direct linking loader adds linking of multiple modules on top of relocation, producing one combined runnable program."
   }
  ]
 },
 "system-programming-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Linking is the step where references between separately compiled pieces of code get resolved into real addresses. There are two broad strategies for when this happens: static linking does it before the program ever runs, and dynamic linking does it while the program is running."
    },
    {
     "type": "text",
     "text": "Static linking copies the actual code of every library function a program uses directly into the final executable file. The result is one self-contained file that needs nothing else to run, but if ten programs on a machine all use the same library, ten separate copies of that library's code sit wasted on disk and in memory."
    },
    {
     "type": "text",
     "text": "Dynamic linking instead leaves a reference to the library in the executable and loads the actual library code, a shared library or DLL (dynamic-link library), only when the program starts, or even the first time a particular function is called. Many programs running at once can then share one single copy of that library in memory."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "// Linux, static:  gcc program.c -static -o program   (bigger file, no runtime dependency)\n// Linux, dynamic: gcc program.c -o program            (needs libc.so present at run time)\n// ldd program                                           lists the shared libraries it needs"
    },
    {
     "type": "tip",
     "text": "Trade-off to remember: static linking = bigger file, simpler deployment, no shared-memory savings. Dynamic linking = smaller file, memory sharing across programs, but the shared library must exist on the machine at run time."
    }
   ],
   "recap": "Static linking bakes library code into the executable at build time; dynamic linking loads shared library code at run time, letting many programs share one copy."
  },
  "quiz": [
   {
    "q": "What does static linking do?",
    "options": [
     "Runs the program inside an interpreter",
     "Loads library code only when the program is running",
     "Copies the library code directly into the final executable before it ever runs",
     "Deletes unused functions from the source"
    ],
    "answer": 2,
    "explain": "Static linking resolves and embeds library code into the executable at build time, ahead of execution."
   },
   {
    "q": "What is the main memory advantage of dynamic linking over static linking?",
    "options": [
     "Multiple running programs can share a single in-memory copy of the same library",
     "Dynamic linking avoids using object files",
     "Dynamic linking makes the CPU run faster",
     "Dynamic linking removes the need for a symbol table"
    ],
    "answer": 0,
    "explain": "Because the shared library is loaded once and referenced by many processes, it avoids duplicating that code in memory."
   },
   {
    "q": "What is a downside of dynamic linking compared to static linking?",
    "options": [
     "It always runs slower than an interpreter",
     "The executable file is much larger",
     "It cannot be used with C programs",
     "The required shared library must actually be present on the machine at run time"
    ],
    "answer": 3,
    "explain": "A dynamically linked program depends on the shared library existing on the target machine; if it is missing, the program fails to run."
   }
  ]
 },
 "system-programming-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Relocation is the process of adjusting the addresses inside a compiled program so it works correctly no matter where in memory it ends up being loaded. Without it, a program compiled assuming it starts at address 0 would break the moment it was loaded anywhere else."
    },
    {
     "type": "text",
     "text": "A relocatable object file marks which addresses inside it need adjusting, often in a relocation table. When the loader places the program at its real starting address, it walks this table and adds that starting address to every marked location, so every internal jump and reference still points to the right place."
    },
    {
     "type": "text",
     "text": "Position-independent code (PIC) takes a different, more elegant approach: instead of using absolute addresses at all, it computes addresses relative to wherever the code currently is (using the program counter or a base register). Because nothing needs adjusting, the exact same compiled code can be loaded at any address, even a different one for every program that uses it."
    },
    {
     "type": "tip",
     "text": "Why it matters for the exam and for real security: PIC is what makes shared libraries loadable at a different address in each process, and it is also what enables ASLR (address space layout randomization), a security feature that loads code at a random address each run to make attacks harder to aim."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "// compiled as position-independent code on Linux:\n// gcc -fPIC -shared mylib.c -o mylib.so\n// the same mylib.so can now be mapped at different addresses in different processes"
    }
   ],
   "recap": "Relocation adjusts a program's addresses to match wherever it is loaded; position-independent code avoids the need for adjustment by using relative addressing, enabling shared libraries and ASLR."
  },
  "quiz": [
   {
    "q": "What problem does relocation solve?",
    "options": [
     "It compiles source code into assembly",
     "It expands macros into their full text",
     "It adjusts internal addresses so a program works no matter where it is loaded in memory",
     "It removes unused variables from a program"
    ],
    "answer": 2,
    "explain": "Relocation fixes up addresses baked into a compiled program to match its actual load location."
   },
   {
    "q": "What is the key idea behind position-independent code (PIC)?",
    "options": [
     "It removes the need for a symbol table at compile time",
     "It computes addresses relative to the current location instead of using fixed absolute addresses",
     "It only works with static linking",
     "It refuses to run unless loaded at address 0"
    ],
    "answer": 1,
    "explain": "PIC uses relative addressing so the same code works correctly at any load address, with no adjustment needed."
   },
   {
    "q": "Why does ASLR (address space layout randomization) depend on position-independent code?",
    "options": [
     "ASLR replaces the linker entirely",
     "ASLR only randomizes variable names",
     "ASLR needs code that runs correctly no matter what random address it is loaded at",
     "ASLR requires every program to be interpreted, not compiled"
    ],
    "answer": 2,
    "explain": "Since ASLR loads code at a random address on each run, that code must be position-independent to still work correctly."
   }
  ]
 },
 "system-programming-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A shared library (a .so file on Linux, a .dll on Windows) packages reusable code, like the C standard library, so many programs can use it without each one carrying its own private copy. It is the runtime partner of dynamic linking discussed earlier."
    },
    {
     "type": "text",
     "text": "When a dynamically linked program starts, the OS's dynamic linker (sometimes called the runtime loader) steps in before the program's own code runs. It reads the list of shared libraries the program needs, finds them on disk, maps them into the process's memory, and patches up the addresses of the functions the program calls into them."
    },
    {
     "type": "text",
     "text": "Some systems delay even more work: with lazy binding, the address of a library function is only resolved the very first time that function is actually called, not at program startup. This speeds up startup for programs that only end up using a small fraction of a large library."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#include <dlfcn.h>\n\nint main(void) {\n    // load a shared library explicitly, at run time, chosen by the program itself\n    void *handle = dlopen(\"libm.so\", RTLD_LAZY);\n    double (*my_sqrt)(double) = dlsym(handle, \"sqrt\");\n    printf(\"%f\\n\", my_sqrt(16.0));   // calls sqrt() from the library, resolved just now\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Version mismatch is the classic real-world shared-library bug: if a program was built against version 2 of a library but only version 1 is installed on the machine, a needed function may be missing at run time even though the program compiled fine originally."
    }
   ],
   "recap": "A shared library is code that many processes reuse from one on-disk file; the OS's dynamic linker maps it in and resolves function addresses when the program starts or, with lazy binding, on first use."
  },
  "quiz": [
   {
    "q": "What role does the dynamic linker (runtime loader) play when a program starts?",
    "options": [
     "It compiles the source code from scratch",
     "It deletes unused shared libraries from disk",
     "It finds the needed shared libraries, maps them into memory, and resolves function addresses",
     "It writes debug symbols into the executable"
    ],
    "answer": 2,
    "explain": "The dynamic linker locates, loads, and connects a program to the shared libraries it depends on before the program's own code runs."
   },
   {
    "q": "What is lazy binding?",
    "options": [
     "Resolving every function address at compile time",
     "Refusing to link any shared libraries",
     "A way to skip writing a symbol table",
     "Resolving a library function's address only the first time it is actually called"
    ],
    "answer": 3,
    "explain": "Lazy binding defers the cost of resolving a function's address until that function is actually first used, speeding up startup."
   },
   {
    "q": "What is a common real-world problem with shared libraries?",
    "options": [
     "They cannot be used with dynamic linking",
     "A version mismatch between the library the program was built against and the one installed can break it at run time",
     "They always make executables larger",
     "They must be recompiled every time the OS boots"
    ],
    "answer": 1,
    "explain": "If the installed shared library version does not match what the program expects, needed functions can be missing or behave differently at run time."
   }
  ]
 },
 "system-programming-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Writing the first stage of a compiler by hand, the part that reads raw characters and groups them into tokens like keywords, numbers, and identifiers, is repetitive work: it is really just pattern matching. A lexical analyzer generator, classically called Lex, automates this by turning a list of patterns straight into working code."
    },
    {
     "type": "text",
     "text": "You describe each token as a regular expression paired with an action, and Lex compiles that description into a fast scanner, usually implemented internally as a finite automaton, that recognizes each pattern in the input and runs the matching action."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "/* a tiny Lex specification: pattern  { action } */\n%%\n[0-9]+          { printf(\"NUMBER: %s\\n\", yytext); }\n[a-zA-Z_][a-zA-Z0-9_]*  { printf(\"IDENTIFIER: %s\\n\", yytext); }\n[ \\t\\n]          { /* skip whitespace */ }\n%%"
    },
    {
     "type": "text",
     "text": "This is exactly the same tool that appears in the Compiler Design track's lexical analysis stage: the generated scanner is a piece of system software, a compiler-building tool, whereas the finite automaton theory behind it is the math that makes it possible."
    },
    {
     "type": "tip",
     "text": "Remember the chain: Lex specification (patterns + actions) is fed into the Lex generator, which produces C code, which is compiled into the actual lexical analyzer used by a real compiler."
    }
   ],
   "recap": "Lex is a tool that turns a list of regular-expression patterns and actions into a working lexical analyzer, saving the compiler writer from hand-coding a scanner."
  },
  "quiz": [
   {
    "q": "What does a Lex specification consist of?",
    "options": [
     "Regular-expression patterns paired with actions to run when each pattern matches",
     "A list of object files to link",
     "A symbol table of variable addresses",
     "A set of device driver hooks"
    ],
    "answer": 0,
    "explain": "A Lex specification pairs each token pattern, written as a regular expression, with the code to run when that pattern is found."
   },
   {
    "q": "What does Lex generate from its specification?",
    "options": [
     "A linked shared library",
     "Source code (typically in C) for a working lexical analyzer",
     "A relocation table",
     "A finished executable program with no source code"
    ],
    "answer": 1,
    "explain": "Lex compiles the pattern-and-action specification into actual source code implementing the scanner."
   },
   {
    "q": "Why is a Lex-generated scanner considered a system programming tool?",
    "options": [
     "Because it is software used to build other software, here the lexical stage of a compiler",
     "Because it only runs in kernel mode",
     "Because it directly manages hard disk sectors",
     "Because it replaces the operating system"
    ],
    "answer": 0,
    "explain": "Like assemblers and linkers, Lex is a tool whose job is helping build other programs, which is the definition of a system programming tool."
   }
  ]
 },
 "system-programming-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once a Lex-style scanner has turned raw text into a stream of tokens, something must check whether those tokens actually form a valid sentence in the language's grammar, and build a structure representing what the program means. Writing that parser by hand is hard to get right, so parser generators like Yacc (Yet Another Compiler Compiler) automate it too."
    },
    {
     "type": "text",
     "text": "You describe the language as a grammar: a set of rules stating how bigger constructs are built from smaller ones, for example an expression is a number, or an expression plus an expression. Yacc reads this grammar and generates a parser, usually a table-driven program that decides, token by token, which rule applies."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "/* a tiny Yacc grammar rule */\nexpr: expr '+' expr   { $$ = $1 + $3; }\n    | expr '*' expr   { $$ = $1 * $3; }\n    | NUMBER          { $$ = $1; }\n    ;"
    },
    {
     "type": "text",
     "text": "Lex and Yacc are usually used together: Lex hands tokens to the Yacc-generated parser one at a time, and the parser calls back into Lex whenever it needs the next token. This pairing is the classic way real compilers, and many other tools that need to read a structured language, were traditionally built."
    },
    {
     "type": "tip",
     "text": "Exam pairing to remember: Lex handles the words (tokens), Yacc handles the sentences (grammar rules). Lex builds a scanner from regular expressions; Yacc builds a parser from a grammar."
    }
   ],
   "recap": "Yacc is a parser generator: it turns a grammar description into working parser code, and is typically paired with a Lex-generated scanner to build a compiler's front end."
  },
  "quiz": [
   {
    "q": "What is the input to a tool like Yacc?",
    "options": [
     "A literal table",
     "A list of device drivers",
     "A grammar describing how larger language constructs are built from smaller ones",
     "A finished machine-code executable"
    ],
    "answer": 2,
    "explain": "Yacc takes a grammar specification and generates a parser that recognizes sentences following those rules."
   },
   {
    "q": "How do Lex and Yacc typically work together?",
    "options": [
     "Lex only runs after the program has finished executing",
     "Yacc replaces Lex entirely",
     "They cannot be used in the same compiler",
     "Lex supplies tokens one at a time to the Yacc-generated parser, which requests the next token as needed"
    ],
    "answer": 3,
    "explain": "The Lex-generated scanner feeds tokens to the Yacc-generated parser, which calls back for more tokens as it processes the grammar."
   },
   {
    "q": "What does a Yacc-generated parser produce or check?",
    "options": [
     "A relocation table for the loader",
     "Whether a stream of tokens forms a valid sentence in the grammar, and a structure representing its meaning",
     "The device driver for a printer",
     "The literal table for constants"
    ],
    "answer": 1,
    "explain": "The parser's job is validating token sequences against the grammar and building a structure (like a parse tree) representing the input."
   }
  ]
 },
 "system-programming-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A real program is rarely one file fed to one compiler command. It is dozens or thousands of source files, each depending on others, and re-running every compile step by hand after a single small edit would be painfully slow and error-prone. A build tool automates this."
    },
    {
     "type": "text",
     "text": "The classic example is make. You describe a set of targets (usually files to produce), the other files each target depends on, and the exact command that produces it. Make then figures out, by comparing file modification times, which targets are out of date and only rebuilds those, skipping everything already up to date."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "/* a tiny Makefile */\napp: main.o helper.o\n\tgcc main.o helper.o -o app\n\nmain.o: main.c\n\tgcc -c main.c\n\nhelper.o: helper.c\n\tgcc -c helper.c"
    },
    {
     "type": "text",
     "text": "This dependency-graph idea scales up into modern build systems and package managers that also fetch the right library versions and run tests automatically. Underneath, they are all solving the same system programming problem: which pieces need redoing, and in what order, given everything that changed."
    },
    {
     "type": "tip",
     "text": "Exam trap: make decides what to rebuild by comparing timestamps, not by reading file contents. If a file's timestamp changes but its content does not, make still rebuilds it."
    }
   ],
   "recap": "Build tools like make read a dependency graph of targets and rules, then rebuild only the files that are out of date, automating large multi-file compilation."
  },
  "quiz": [
   {
    "q": "What does a tool like make primarily automate?",
    "options": [
     "Designing the CPU's instruction set",
     "Writing source code automatically",
     "Translating regular expressions into finite automata",
     "Rebuilding only the files that are out of date, based on their dependencies"
    ],
    "answer": 3,
    "explain": "Make tracks dependencies between files and rebuilds only what has changed, skipping files already up to date."
   },
   {
    "q": "How does make typically decide whether a target needs rebuilding?",
    "options": [
     "By recompiling everything every single run",
     "By checking the file's content against a stored checksum of its meaning",
     "By asking the programmer each time",
     "By comparing the modification timestamps of the target and its dependencies"
    ],
    "answer": 3,
    "explain": "Make compares timestamps: if a dependency is newer than the target, the target is considered out of date."
   },
   {
    "q": "In a Makefile rule like 'app: main.o helper.o', what does 'app' represent?",
    "options": [
     "A device driver entry point",
     "A macro parameter",
     "A regular expression pattern",
     "The target file that the rule knows how to produce"
    ],
    "answer": 3,
    "explain": "The word before the colon is the target, the file the rule is responsible for building from its listed dependencies."
   }
  ]
 },
 "system-programming-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A process virtual machine is a program that behaves like its own private CPU: it defines an instruction set (bytecode) and executes programs written in it, exactly the way a physical CPU executes real machine code, except entirely in software. The Java Virtual Machine (JVM) and the Python interpreter's internal engine are well known examples."
    },
    {
     "type": "text",
     "text": "This buys portability. A Java compiler turns source into .class files full of JVM bytecode, not into one specific CPU's machine code. Any machine with a JVM installed, Windows, Linux, or a phone, can run that exact same bytecode, because the JVM hides all the differences in real hardware underneath it."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "// javac Hello.java   compiles to Hello.class, containing JVM bytecode, not native machine code\n// java Hello          the JVM loads that bytecode and executes it on THIS machine's real CPU"
    },
    {
     "type": "text",
     "text": "The bytecode itself is a compact instruction set, closer to assembly than to source code, with instructions like push a value, add two values, or call a method. The virtual machine's job is to fetch each bytecode instruction, decode it, and carry it out, an exact software echo of the fetch-decode-execute cycle a real CPU runs."
    },
    {
     "type": "tip",
     "text": "Don't confuse this with a system virtual machine (like VirtualBox or VMware), which emulates an entire computer including its own OS. A process virtual machine like the JVM runs just one program, not a whole operating system."
    }
   ],
   "recap": "A process virtual machine like the JVM executes portable bytecode in software, mimicking a CPU's fetch-decode-execute cycle so the same compiled program runs unchanged on any machine that has the VM."
  },
  "quiz": [
   {
    "q": "What is bytecode, in the context of a virtual machine like the JVM?",
    "options": [
     "A type of device driver",
     "A macro expansion table",
     "The original human-readable source code",
     "A compact, portable instruction set that the virtual machine executes"
    ],
    "answer": 3,
    "explain": "Bytecode is the compact intermediate instruction set produced by compilation, which the virtual machine then runs."
   },
   {
    "q": "Why does compiling to bytecode instead of native machine code give portability?",
    "options": [
     "Because bytecode does not need a virtual machine at all",
     "Because bytecode is identical to assembly language",
     "Because any machine with the matching virtual machine installed can run the exact same bytecode, regardless of its real CPU",
     "Because bytecode runs faster than native code everywhere"
    ],
    "answer": 2,
    "explain": "The virtual machine hides hardware differences, so the same bytecode runs unchanged wherever that virtual machine exists."
   },
   {
    "q": "How does a process virtual machine like the JVM differ from a system virtual machine like VirtualBox?",
    "options": [
     "There is no real difference between them",
     "A process virtual machine can only run on Linux",
     "A process virtual machine runs one program's bytecode; a system virtual machine emulates a whole computer including an OS",
     "A system virtual machine cannot run any software at all"
    ],
    "answer": 2,
    "explain": "Process VMs like the JVM execute a single program's bytecode, while system VMs emulate entire machines capable of booting their own operating systems."
   }
  ]
 },
 "system-programming-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Pure bytecode interpretation is portable but slow, since every instruction is decoded and carried out again on every single execution. Just-in-time (JIT) compilation is the modern answer: instead of only interpreting bytecode, the virtual machine watches the running program and compiles its hottest, most-used pieces into real native machine code, right there while the program is still running."
    },
    {
     "type": "text",
     "text": "The key insight is that most programs spend almost all their time in a small fraction of their code, the loops and functions that run over and over. A JIT compiler profiles the running program to find this hot code, compiles just that part into fast native instructions, and then swaps future calls to it over to the compiled version instead of the slower interpreted one."
    },
    {
     "type": "tip",
     "text": "This is exactly why a Java or JavaScript program often starts a little slow and then speeds up the longer it runs: it begins fully interpreted, and the JIT gradually promotes its hot paths to native code as it learns where the program spends its time."
    },
    {
     "type": "text",
     "text": "This costs something too: compiling code takes CPU time and memory, so a JIT must be selective, compiling only code that is used often enough to be worth the cost, and it may even fall back and de-optimize a piece of compiled code if the assumptions it was compiled under turn out to be wrong later."
    },
    {
     "type": "text",
     "text": "JIT compilation sits at the meeting point of everything this subject has covered: it needs a fast interpreter (like a bytecode VM), the same code-generation ideas a compiler uses, and the same careful memory and address management that loaders and linkers rely on, all working together while the program is live."
    }
   ],
   "recap": "JIT compilation blends interpretation and compilation, converting a running program's hottest code paths into native machine code on the fly, trading some startup cost for much faster long-running performance."
  },
  "quiz": [
   {
    "q": "What is the core idea behind just-in-time (JIT) compilation?",
    "options": [
     "Replacing the operating system with a virtual machine",
     "Interpreting every instruction forever with no compilation at all",
     "Compiling the entire program to machine code before it starts, like a normal compiler",
     "Compiling a running program's most frequently used code into native machine code while it executes"
    ],
    "answer": 3,
    "explain": "A JIT compiler identifies hot, frequently executed code while the program runs and compiles just that part to native machine code."
   },
   {
    "q": "Why does a JIT-compiled program often get faster the longer it runs?",
    "options": [
     "Because bytecode files shrink the longer a program runs",
     "Because the source code changes automatically while running",
     "Because the CPU physically speeds up over time",
     "Because the JIT gradually promotes the program's hot code paths from interpreted execution to compiled native code"
    ],
    "answer": 3,
    "explain": "As the JIT identifies which code runs most, it replaces the slower interpreted path with compiled native code for those parts."
   },
   {
    "q": "Why doesn't a JIT compiler simply compile every single piece of code to native machine code immediately?",
    "options": [
     "Because compiling costs CPU time and memory, so it is only worthwhile for code that runs often enough",
     "Because native machine code cannot be produced from bytecode",
     "Because interpreters are always faster than compiled code",
     "Because compiling code is technically impossible while a program is running"
    ],
    "answer": 0,
    "explain": "JIT compilation has a real cost, so compilers are selective and focus effort on the hot code that will actually benefit."
   }
  ]
 }
}
