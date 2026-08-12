// Lesson text and quiz questions for "Computer Architecture".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "architecture-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Almost every computer you have ever used follows one big idea: the von Neumann model. It says a computer has a processor that does the thinking, a memory that holds both the data AND the instructions, and a way to talk to the outside world (input and output)."
    },
    {
     "type": "text",
     "text": "The clever trick is that instructions and data live together in the same memory. To the computer, a program is just more numbers sitting in memory. The processor reads those numbers and treats some as 'commands' and some as 'stuff to work on'."
    },
    {
     "type": "tip",
     "text": "Think of memory like a giant wall of numbered mailboxes. Some boxes hold a recipe (instructions), others hold ingredients (data). The chef (processor) reads the recipe box by box."
    },
    {
     "type": "text",
     "text": "This model has three core parts working together: the CPU (processor), main memory, and input/output devices like a keyboard, screen, or disk. They connect through shared wires called buses, which we will meet later."
    }
   ],
   "recap": "A von Neumann computer stores instructions and data together in one memory, and a processor reads and runs them."
  },
  "quiz": [
   {
    "q": "In the von Neumann model, where are instructions stored?",
    "options": [
     "Only inside the keyboard",
     "In a separate instruction-only chip",
     "In the same memory as the data",
     "Nowhere; they are hard-wired"
    ],
    "answer": 2,
    "explain": "The key idea is that both instructions and data share the same memory."
   },
   {
    "q": "Which three parts make up the basic von Neumann computer?",
    "options": [
     "Screen, mouse, speaker",
     "Processor, memory, and input/output",
     "Wifi, Bluetooth, and USB",
     "Battery, fan, and case"
    ],
    "answer": 1,
    "explain": "The model is built from a processor, a memory, and input/output devices."
   },
   {
    "q": "To the computer, a program in memory is really just...",
    "options": [
     "Magic it cannot see",
     "Sound waves",
     "Numbers it reads and interprets",
     "A picture"
    ],
    "answer": 2,
    "explain": "Instructions are stored as numbers, which the processor reads and interprets as commands."
   }
  ]
 },
 "architecture-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The CPU (Central Processing Unit) is the 'brain' of the computer. But a brain has parts. The three you should know are the ALU, the Control Unit, and the registers. Together they do all the actual computing."
    },
    {
     "type": "text",
     "text": "The ALU (Arithmetic Logic Unit) is the calculator. It adds, subtracts, compares numbers, and does logic like AND and OR. Any real 'math' or 'decision' happens here."
    },
    {
     "type": "text",
     "text": "The Control Unit (CU) is the manager. It does not do math itself. Instead it reads each instruction and tells every other part what to do and when, like a conductor directing an orchestra."
    },
    {
     "type": "text",
     "text": "Registers are tiny, super-fast storage slots inside the CPU. They hold the few numbers the CPU is working on right now. They are much smaller but much faster than main memory."
    },
    {
     "type": "tip",
     "text": "Picture a chef at a counter: the ALU is the chef's hands doing the chopping, the Control Unit is the head chef calling orders, and registers are the small cutting board holding just what is being chopped this second."
    }
   ],
   "recap": "The CPU has an ALU (does math and logic), a Control Unit (directs the work), and registers (tiny fast storage for current values)."
  },
  "quiz": [
   {
    "q": "Which CPU part actually performs addition and comparison?",
    "options": [
     "The registers",
     "The ALU",
     "The bus",
     "The Control Unit"
    ],
    "answer": 1,
    "explain": "The Arithmetic Logic Unit is the part that does math and logic operations."
   },
   {
    "q": "What is the job of the Control Unit?",
    "options": [
     "To store files long-term",
     "To do all the math",
     "To display graphics",
     "To direct other parts and set the order of steps"
    ],
    "answer": 3,
    "explain": "The Control Unit reads instructions and coordinates what every part does and when."
   },
   {
    "q": "Why are registers special?",
    "options": [
     "They hold data after the power is off",
     "They connect to the internet",
     "They are the largest storage in the computer",
     "They are tiny but the fastest storage, holding current values"
    ],
    "answer": 3,
    "explain": "Registers are very small and very fast, holding the values the CPU is using right now."
   },
   {
    "q": "The best analogy for the Control Unit is...",
    "options": [
     "A filing cabinet",
     "A power cord",
     "A conductor directing an orchestra",
     "A calculator"
    ],
    "answer": 2,
    "explain": "Like a conductor, the Control Unit directs the other parts without playing an instrument itself."
   }
  ]
 },
 "architecture-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "How does the CPU run a program? It repeats a simple loop billions of times per second: fetch, decode, execute. This is called the instruction cycle, and it is the heartbeat of the computer."
    },
    {
     "type": "text",
     "text": "FETCH: the CPU grabs the next instruction from memory. A special register called the Program Counter (PC) remembers the address of that next instruction, then steps forward so it is ready for the one after."
    },
    {
     "type": "text",
     "text": "DECODE: the Control Unit looks at the instruction and figures out what it means, for example 'add these two numbers' or 'store this value in memory'."
    },
    {
     "type": "text",
     "text": "EXECUTE: the CPU actually does it, often using the ALU. Then the loop starts over with the next instruction. Over and over, this runs your whole program."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "loop forever:\n    instruction = memory[PC]   # FETCH\n    PC = PC + 1                # move to next\n    meaning = decode(instruction)   # DECODE\n    run(meaning)               # EXECUTE"
    },
    {
     "type": "tip",
     "text": "It is like reading a recipe line by line: read the next step (fetch), understand what it asks (decode), then actually do it (execute), then read the next line."
    }
   ],
   "recap": "The CPU endlessly repeats fetch (get the next instruction), decode (understand it), and execute (do it), tracked by the Program Counter."
  },
  "quiz": [
   {
    "q": "What are the three steps of the instruction cycle, in order?",
    "options": [
     "Execute, decode, fetch",
     "Decode, fetch, execute",
     "Fetch, decode, execute",
     "Store, load, print"
    ],
    "answer": 2,
    "explain": "The cycle always goes fetch, then decode, then execute, and repeats."
   },
   {
    "q": "What does the Program Counter (PC) keep track of?",
    "options": [
     "How much battery is left",
     "The address of the next instruction",
     "The result of the last calculation",
     "The temperature of the CPU"
    ],
    "answer": 1,
    "explain": "The Program Counter holds the memory address of the next instruction to fetch."
   },
   {
    "q": "During the 'decode' step, the CPU is...",
    "options": [
     "Figuring out what the instruction means",
     "Turning off",
     "Charging the registers",
     "Sending data to the printer"
    ],
    "answer": 0,
    "explain": "Decoding is when the Control Unit works out what the fetched instruction is asking for."
   },
   {
    "q": "After executing one instruction, what happens next?",
    "options": [
     "The screen clears",
     "The memory is erased",
     "The computer shuts down",
     "The cycle repeats with the next instruction"
    ],
    "answer": 3,
    "explain": "The fetch-decode-execute loop simply starts again for the following instruction."
   }
  ]
 },
 "architecture-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not all memory is equal. Fast memory is expensive and small; cheap memory is big but slow. So computers stack several kinds of storage into a pyramid called the memory hierarchy, balancing speed, size, and cost."
    },
    {
     "type": "text",
     "text": "From fastest and smallest to slowest and biggest: registers (inside the CPU), then cache, then main memory (RAM), then storage like an SSD or hard drive. As you go down, capacity grows but speed drops."
    },
    {
     "type": "text",
     "text": "Cache is a small, very fast memory that sits between the CPU and RAM. It keeps copies of data the CPU used recently or is likely to use next, so the CPU does not have to wait for slow RAM as often."
    },
    {
     "type": "text",
     "text": "Why does cache work? Because of 'locality': programs tend to reuse the same data and nearby data over and over. Keeping that hot data close saves huge amounts of time. Caches often come in levels: L1 (smallest, fastest), L2, and L3."
    },
    {
     "type": "tip",
     "text": "Think of your desk. Registers are the item in your hand, cache is the papers on your desk, RAM is the drawer, and the SSD is the storage room down the hall. You keep what you use most within arm's reach."
    }
   ],
   "recap": "Memory forms a speed-vs-size pyramid: registers, cache, RAM, then disk; cache holds recently used data close to the CPU because programs reuse data (locality)."
  },
  "quiz": [
   {
    "q": "Which of these is the fastest but smallest memory?",
    "options": [
     "SSD",
     "RAM",
     "Hard drive",
     "Registers"
    ],
    "answer": 3,
    "explain": "Registers sit inside the CPU and are the fastest and smallest storage."
   },
   {
    "q": "What is the main purpose of cache?",
    "options": [
     "To connect to the internet",
     "To cool the processor",
     "To store files permanently",
     "To keep recently or soon-needed data close to the CPU"
    ],
    "answer": 3,
    "explain": "Cache holds hot data near the CPU so it avoids waiting on slower RAM."
   },
   {
    "q": "As you move down the memory hierarchy, memory generally becomes...",
    "options": [
     "Bigger but slower",
     "More expensive per byte",
     "Impossible to read",
     "Smaller and faster"
    ],
    "answer": 0,
    "explain": "Lower levels trade speed for larger, cheaper capacity."
   },
   {
    "q": "Cache works well because of 'locality', which means...",
    "options": [
     "Data is stored far away",
     "The CPU is offline",
     "Memory never changes",
     "Programs reuse the same and nearby data"
    ],
    "answer": 3,
    "explain": "Locality is the tendency of programs to reuse recent and nearby data, which caching exploits."
   }
  ]
 },
 "architecture-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The CPU, memory, and devices all need to talk to each other. They do it over shared bundles of wires called buses. A bus is like a highway that carries information between parts of the computer."
    },
    {
     "type": "text",
     "text": "There are three main buses. The DATA bus carries the actual values being moved. The ADDRESS bus carries the location (which memory box) the CPU wants to read or write. The CONTROL bus carries signals like 'read now' or 'write now' that coordinate the traffic."
    },
    {
     "type": "text",
     "text": "The width of a bus matters. A wider data bus can carry more bits at once, like a highway with more lanes. A wider address bus can point to more memory locations, so it sets how much memory the computer can use."
    },
    {
     "type": "tip",
     "text": "Imagine sending a package: the data bus is the package itself, the address bus is the delivery address on the label, and the control bus is the instruction telling the driver to pick up or drop off."
    },
    {
     "type": "text",
     "text": "So a memory read is a team effort: the address bus says WHERE, the control bus says WHAT (read), and the data bus carries the value BACK to the CPU."
    }
   ],
   "recap": "Buses are shared wires that connect parts of a computer: the data bus carries values, the address bus carries locations, and the control bus carries coordinating signals."
  },
  "quiz": [
   {
    "q": "Which bus carries the actual values being moved around?",
    "options": [
     "Control bus",
     "School bus",
     "Address bus",
     "Data bus"
    ],
    "answer": 3,
    "explain": "The data bus carries the real values, while other buses carry location and control signals."
   },
   {
    "q": "What does the address bus carry?",
    "options": [
     "The memory location the CPU wants",
     "The sound",
     "The electricity",
     "The final answer"
    ],
    "answer": 0,
    "explain": "The address bus specifies which memory location is being accessed."
   },
   {
    "q": "A wider address bus lets a computer...",
    "options": [
     "Display more colors",
     "Use less power always",
     "Run cooler",
     "Address more memory locations"
    ],
    "answer": 3,
    "explain": "More address lines means more distinct locations can be pointed to, allowing more memory."
   },
   {
    "q": "Which bus sends signals like 'read' or 'write'?",
    "options": [
     "Control bus",
     "Memory bus",
     "Data bus",
     "Address bus"
    ],
    "answer": 0,
    "explain": "The control bus carries the timing and command signals that coordinate transfers."
   }
  ]
 },
 "architecture-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Deep down, a computer only understands two states: on and off, which we write as 1 and 0. Each 1 or 0 is a bit. Because there are only two symbols, this is called the binary (base-2) number system."
    },
    {
     "type": "text",
     "text": "In everyday base-10, each place is worth ten times the one to its right (ones, tens, hundreds). In binary each place is worth twice the one to its right (1, 2, 4, 8, 16...). To read binary, add up the place values where there is a 1."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Binary 1011:\n  1     0     1     1\n  8  +  0  +  2  +  1  = 11\n\nSo 1011 in binary = 11 in decimal."
    },
    {
     "type": "text",
     "text": "Long strings of bits are hard for humans to read, so we often use hexadecimal (base-16). Hex uses 16 symbols: 0-9 then A, B, C, D, E, F (where A=10 ... F=15). One hex digit neatly packs exactly 4 bits."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Python can convert for you\nprint(bin(11))   # 0b1011  (binary)\nprint(hex(255))  # 0xff    (hexadecimal)\nprint(0xff)      # 255     (back to decimal)"
    },
    {
     "type": "tip",
     "text": "Group bits in fours to read hex fast: 1111 = F, 0000 = 0. So the byte 1111 0000 is just F0 in hex. Much shorter than eight 1s and 0s."
    }
   ],
   "recap": "Computers use binary (base-2) where each bit is a place value; hexadecimal (base-16, digits 0-9 and A-F) is a shorter way to write binary, with one hex digit per 4 bits."
  },
  "quiz": [
   {
    "q": "What is the binary number 1011 in decimal?",
    "options": [
     "13",
     "11",
     "9",
     "1011"
    ],
    "answer": 1,
    "explain": "8 + 0 + 2 + 1 equals 11."
   },
   {
    "q": "How many different symbols does hexadecimal use?",
    "options": [
     "8",
     "2",
     "10",
     "16"
    ],
    "answer": 3,
    "explain": "Hexadecimal is base-16, using 0-9 and A-F for a total of 16 symbols."
   },
   {
    "q": "In hexadecimal, the letter F stands for what decimal value?",
    "options": [
     "6",
     "15",
     "16",
     "10"
    ],
    "answer": 1,
    "explain": "In hex A=10, B=11, C=12, D=13, E=14, and F=15."
   },
   {
    "q": "One hexadecimal digit represents exactly how many bits?",
    "options": [
     "3 bits",
     "8 bits",
     "2 bits",
     "4 bits"
    ],
    "answer": 3,
    "explain": "Because 16 = 2 to the 4th power, one hex digit maps to exactly 4 bits."
   }
  ]
 },
 "architecture-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CPU can only do a fixed set of very simple operations, like 'load a number', 'add two numbers', or 'jump to another instruction'. This built-in set is called the instruction set. Every program, no matter how fancy, is built from these tiny steps."
    },
    {
     "type": "text",
     "text": "Each machine instruction is just a pattern of bits. It usually has two parts: an opcode (which operation to do, like ADD) and operands (what to do it to, like which registers or which memory address)."
    },
    {
     "type": "text",
     "text": "Because raw bits are painful to read, we write instructions in assembly language, a human-readable shorthand. Each assembly line usually maps to one machine instruction."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "LOAD  R1, 5      ; put the number 5 into register R1\nLOAD  R2, 7      ; put the number 7 into register R2\nADD   R3, R1, R2 ; R3 = R1 + R2  (now R3 holds 12)\nSTORE R3, 100    ; save R3 into memory location 100"
    },
    {
     "type": "text",
     "text": "Notice how the whole thing is just moving numbers between registers and memory and doing simple math, exactly the fetch-decode-execute loop from earlier running one instruction at a time. High-level languages like Python get translated down into thousands of these little steps."
    },
    {
     "type": "tip",
     "text": "Think of instructions as LEGO bricks. Each brick is simple and boring on its own, but stacking millions of them together builds anything from a game to a web browser."
    }
   ],
   "recap": "A CPU runs a fixed instruction set; each instruction is bits made of an opcode plus operands, written readably as assembly, and all software is built from these simple steps."
  },
  "quiz": [
   {
    "q": "What is the 'opcode' part of an instruction?",
    "options": [
     "Which operation to perform",
     "The name of the program",
     "The data to save to disk",
     "The screen color"
    ],
    "answer": 0,
    "explain": "The opcode tells the CPU which operation, such as ADD or LOAD, to carry out."
   },
   {
    "q": "What is assembly language?",
    "options": [
     "A high-level language like Python",
     "A kind of bus",
     "A type of memory",
     "A human-readable shorthand for machine instructions"
    ],
    "answer": 3,
    "explain": "Assembly is a readable form of machine code, usually one line per machine instruction."
   },
   {
    "q": "The complete set of operations a CPU can perform is called its...",
    "options": [
     "Memory hierarchy",
     "Control bus",
     "Instruction set",
     "Cache"
    ],
    "answer": 2,
    "explain": "The instruction set is the fixed collection of operations a CPU understands."
   },
   {
    "q": "In 'ADD R3, R1, R2', what does the instruction do?",
    "options": [
     "Adds R1 and R2 and stores the result in R3",
     "Deletes R1 and R2",
     "Loads a file named R3",
     "Prints R3 to the screen"
    ],
    "answer": 0,
    "explain": "It performs R3 = R1 + R2, storing the sum in register R3."
   }
  ]
 },
 "architecture-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An instruction like ADD R3, R1, R2 tells the CPU what to do, but how does it know where to find its data? The rule for locating an operand is called an addressing mode. Different modes trade off speed, flexibility, and instruction size."
    },
    {
     "type": "text",
     "text": "In immediate addressing, the value is baked right into the instruction: LOAD R1, #5 puts the literal number 5 into R1. No memory lookup needed, so it is very fast."
    },
    {
     "type": "text",
     "text": "In direct addressing, the instruction holds a memory address: LOAD R1, 200 means 'go to memory location 200 and copy what is there into R1'. In register addressing, the operand already sits inside a register, so there is no memory trip at all."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "LOAD  R1, #5      ; immediate: R1 = 5\nLOAD  R2, 200     ; direct: R2 = value at memory address 200\nLOAD  R3, (R2)    ; indirect: R2 holds an address, go there and load that value\nADD   R4, R1, R3  ; register: operands already in registers"
    },
    {
     "type": "text",
     "text": "Indirect addressing goes one step further: the instruction points to a memory location that itself holds the real address, like following a forwarding note. This is how pointers work in C, and how arrays are walked element by element."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: immediate = value is in the instruction. Direct = address is in the instruction. Indirect = the instruction points to a box that contains the real address."
    }
   ],
   "recap": "Addressing modes are the rules for finding an operand: immediate (value in the instruction), direct (address in the instruction), register (already in a register), and indirect (instruction points to a pointer)."
  },
  "quiz": [
   {
    "q": "In immediate addressing, where is the actual operand value?",
    "options": [
     "In a register",
     "On the disk",
     "Inside the instruction itself",
     "At a memory address stored in a register"
    ],
    "answer": 2,
    "explain": "Immediate addressing embeds the literal value directly in the instruction, so no lookup is needed."
   },
   {
    "q": "LOAD R1, (R2) is an example of which addressing mode?",
    "options": [
     "Register",
     "Direct",
     "Indirect",
     "Immediate"
    ],
    "answer": 2,
    "explain": "R2 holds an address, and the CPU must follow it to find the real value, which is indirect addressing."
   },
   {
    "q": "Why is register addressing usually the fastest option?",
    "options": [
     "It requires two memory trips",
     "It skips memory access entirely",
     "It always loads zero",
     "It uses the largest numbers"
    ],
    "answer": 1,
    "explain": "The operand is already sitting in a register, so there is no need to touch memory at all."
   },
   {
    "q": "Which addressing mode closely matches how pointers work in C?",
    "options": [
     "Direct",
     "Register",
     "Immediate",
     "Indirect"
    ],
    "answer": 3,
    "explain": "A pointer holds an address of another value, exactly like indirect addressing follows an address to reach the real data."
   }
  ]
 },
 "architecture-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "CPU designers had to choose a philosophy for their instruction sets. CISC (Complex Instruction Set Computer) packs a lot of work into one instruction, even a single instruction that loads from memory, adds, and stores the result. RISC (Reduced Instruction Set Computer) keeps every instruction small and simple, usually one operation per instruction."
    },
    {
     "type": "text",
     "text": "CISC chips, like the x86 family used in most laptops and desktops, have hundreds of instructions of varying length. This keeps programs short but makes the CPU's internal decoding logic complicated."
    },
    {
     "type": "text",
     "text": "RISC chips, like ARM (found in nearly every smartphone) and the newer RISC-V, have a small, uniform instruction set, usually fixed-length, and rely on the compiler to combine simple instructions to do complex work. Simpler instructions are easier to pipeline, which we will look at next."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; CISC-style: one instruction does load + add + store\nADDM  [200], [100]\n\n; RISC-style: the same job split into simple steps\nLOAD  R1, [100]\nLOAD  R2, [200]\nADD   R2, R2, R1\nSTORE [200], R2"
    },
    {
     "type": "tip",
     "text": "Memory trick: RISC = Really Includes Simple Chunks (many small steps). CISC = Contains Instructions that Squeeze Complexity (one big step)."
    }
   ],
   "recap": "CISC uses fewer, richer instructions that do more per line, while RISC uses many small, uniform instructions that are easier to pipeline and speed up; x86 is CISC, ARM and RISC-V are RISC."
  },
  "quiz": [
   {
    "q": "Which of these is the main idea behind RISC design?",
    "options": [
     "Keep instructions small, simple, and uniform",
     "Pack as much work as possible into one instruction",
     "Only run on desktop computers",
     "Avoid using registers"
    ],
    "answer": 0,
    "explain": "RISC keeps each instruction doing one simple job, usually in a fixed length, which makes the hardware simpler and faster to pipeline."
   },
   {
    "q": "Which processor family is the classic example of CISC?",
    "options": [
     "x86",
     "MIPS",
     "RISC-V",
     "ARM"
    ],
    "answer": 0,
    "explain": "x86, used in most PCs, has a large, variable-length, feature-rich instruction set typical of CISC."
   },
   {
    "q": "In a RISC design, who usually takes on the job of combining simple instructions to do complex work?",
    "options": [
     "The power supply",
     "The monitor",
     "The compiler",
     "The hard disk"
    ],
    "answer": 2,
    "explain": "Since each RISC instruction does very little, the compiler generates several simple instructions to achieve what one CISC instruction would do."
   },
   {
    "q": "Why are RISC instructions easier to pipeline than CISC ones?",
    "options": [
     "They run only one instruction ever",
     "They are all the same simple shape and length",
     "They never use registers",
     "They use more memory"
    ],
    "answer": 1,
    "explain": "Uniform, simple instructions are predictable in size and behavior, which is exactly what a pipeline needs to keep stages moving smoothly."
   }
  ]
 },
 "architecture-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Earlier you learned the fetch-decode-execute cycle runs one instruction at a time. That is wasteful: while the CPU decodes instruction 2, the fetch hardware for instruction 3 is sitting idle. Pipelining fixes this by overlapping stages, like a factory assembly line."
    },
    {
     "type": "text",
     "text": "Imagine a simple 3-stage pipeline: Fetch (F), Decode (D), Execute (E). Without pipelining, each instruction takes 3 full cycles before the next one starts. With pipelining, a new instruction starts fetching every single cycle."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "Cycle:     1   2   3   4   5\nInstr 1:   F   D   E\nInstr 2:       F   D   E\nInstr 3:           F   D   E\n; By cycle 3, all three stages are busy at once on different instructions"
    },
    {
     "type": "text",
     "text": "This does not make any single instruction finish faster, but it dramatically increases throughput, the number of instructions completed per second, because the pipeline is never idle once it fills up."
    },
    {
     "type": "text",
     "text": "Real CPUs use much deeper pipelines, sometimes 10 to 20 stages, to squeeze even more overlap out of the hardware. But deeper pipelines are more exposed to hazards, cases where the overlap breaks down, which is our next topic."
    },
    {
     "type": "tip",
     "text": "Pipelining is like a car wash with separate stations for soap, rinse, and dry. One car is not washed faster, but many cars get washed back to back with no station left empty."
    }
   ],
   "recap": "Pipelining overlaps the fetch, decode, and execute stages of consecutive instructions, so a new instruction starts every cycle, boosting throughput even though a single instruction's own latency stays the same."
  },
  "quiz": [
   {
    "q": "What does pipelining primarily improve?",
    "options": [
     "The speed of a single instruction",
     "The size of memory",
     "The color depth of the screen",
     "Throughput, the number of instructions finished per second"
    ],
    "answer": 3,
    "explain": "Pipelining overlaps stages of different instructions so more instructions complete per second, even though one instruction's own delay is unchanged."
   },
   {
    "q": "In a 3-stage Fetch-Decode-Execute pipeline, once it is full, how often does a new instruction start fetching?",
    "options": [
     "Every 3 cycles",
     "Never after the first instruction",
     "Every cycle",
     "Only once per program"
    ],
    "answer": 2,
    "explain": "Once the pipeline fills up, a new instruction enters the fetch stage on every single clock cycle."
   },
   {
    "q": "What is a good real-world analogy for pipelining?",
    "options": [
     "One chef cooking one dish start to finish before starting the next",
     "A single cashier serving one customer per hour",
     "A library with only one book",
     "A car wash with separate soap, rinse, and dry stations working on different cars at once"
    ],
    "answer": 3,
    "explain": "Like the car wash, each stage works on a different instruction at the same time, keeping every station busy."
   },
   {
    "q": "What tends to happen as pipelines get deeper (more stages)?",
    "options": [
     "They can only run one instruction ever",
     "They become immune to problems",
     "They stop needing a clock",
     "They become more exposed to hazards that can stall the overlap"
    ],
    "answer": 3,
    "explain": "More stages mean more overlapping instructions in flight at once, which increases the chances that one instruction's result is needed before it is ready."
   }
  ]
 },
 "architecture-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Pipelining works beautifully until something breaks the assumption that instructions are independent. These problems are called hazards, and there are three main kinds: structural, data, and control."
    },
    {
     "type": "text",
     "text": "A structural hazard happens when two instructions need the same hardware at the same time, for example both needing the same memory unit in the same cycle. It is solved by adding more hardware or making one instruction wait."
    },
    {
     "type": "text",
     "text": "A data hazard happens when one instruction needs a result that a previous instruction has not finished producing yet."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "ADD  R1, R2, R3   ; R1 is being computed, still in the pipeline\nSUB  R4, R1, R5   ; needs R1 immediately -- but it is not ready yet!"
    },
    {
     "type": "text",
     "text": "This is fixed with forwarding (also called bypassing), where the result is passed directly from one pipeline stage to another that needs it, skipping the wait for it to be written back to the register file. A control hazard happens with branches: the CPU is not sure which instruction comes next until the branch is evaluated, so it may guess wrong and have to throw away, or flush, the wrongly fetched instructions."
    },
    {
     "type": "tip",
     "text": "Three hazards, three quick labels: Structural = 'no free hardware', Data = 'answer not ready yet', Control = 'not sure which way to jump'."
    }
   ],
   "recap": "Pipeline hazards, structural (hardware clash), data (a needed value is not ready), and control (branch direction unknown), can stall or flush the pipeline; forwarding is the classic fix for data hazards."
  },
  "quiz": [
   {
    "q": "Two instructions both needing the exact same memory unit in the same cycle is an example of which hazard?",
    "options": [
     "Control hazard",
     "Structural hazard",
     "Cache hazard",
     "Data hazard"
    ],
    "answer": 1,
    "explain": "A structural hazard is a hardware resource conflict, such as two instructions competing for the same functional unit."
   },
   {
    "q": "An instruction needing a result that a previous instruction has not finished computing yet is called a...",
    "options": [
     "Compile hazard",
     "Structural hazard",
     "Control hazard",
     "Data hazard"
    ],
    "answer": 3,
    "explain": "This is a data hazard: the needed value simply is not ready in time."
   },
   {
    "q": "What technique passes a computed result directly to the stage that needs it, without waiting for it to be written back to a register?",
    "options": [
     "Branching",
     "Flushing",
     "Forwarding (bypassing)",
     "Paging"
    ],
    "answer": 2,
    "explain": "Forwarding routes the result straight to where it is needed next, avoiding a pipeline stall."
   },
   {
    "q": "A branch instruction whose direction is not yet known causes which kind of hazard?",
    "options": [
     "Structural hazard",
     "Memory hazard",
     "Control hazard",
     "Data hazard"
    ],
    "answer": 2,
    "explain": "Control hazards arise because the CPU cannot be sure which instruction to fetch next until the branch outcome is known."
   }
  ]
 },
 "architecture-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CPU does not only run one program blindly forever, it needs a way to react to events, like a keyboard key being pressed or a printer running out of paper. This signal is called an interrupt: a request that says 'stop what you are doing and handle me now'."
    },
    {
     "type": "text",
     "text": "When an interrupt arrives, the CPU finishes its current instruction, saves its current state (the program counter and register values) onto the stack, and jumps to a special piece of code called an interrupt service routine (ISR), also known as a handler."
    },
    {
     "type": "text",
     "text": "After the ISR finishes, the CPU restores the saved state and resumes exactly where it left off, as if nothing happened. Interrupts can come from hardware (a device wanting attention) or software (a program deliberately triggering one, like a system call)."
    },
    {
     "type": "text",
     "text": "An exception is closely related but comes from inside the running program itself, like dividing by zero or trying to access memory the program is not allowed to touch. The CPU handles it the same way: save state, jump to a handler, deal with the problem."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int main(void) {\n    // conceptually, an interrupt does this around your running program:\n    // 1. finish current instruction\n    // 2. save PC and registers\n    // 3. jump to ISR(interrupt_number)\n    // 4. run the ISR\n    // 5. restore PC and registers\n    // 6. continue the interrupted program\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Exam distinction: an interrupt usually comes from outside (a device), an exception comes from inside (an error in the running instruction). Both are handled the same way: save, service, restore."
    }
   ],
   "recap": "Interrupts let the CPU respond to outside events and exceptions let it respond to its own errors; both save the current state, run a handler, and then restore execution exactly where it stopped."
  },
  "quiz": [
   {
    "q": "What does the CPU save before jumping to an interrupt service routine?",
    "options": [
     "The hard disk contents",
     "The program counter and register values",
     "The screen resolution",
     "Nothing, it just jumps"
    ],
    "answer": 1,
    "explain": "Saving the program counter and registers lets the CPU resume the interrupted program exactly where it left off."
   },
   {
    "q": "Which of these is best described as an exception rather than a hardware interrupt?",
    "options": [
     "A network cable being plugged in",
     "A printer running out of paper",
     "Dividing a number by zero inside the running program",
     "A keyboard key press"
    ],
    "answer": 2,
    "explain": "Divide-by-zero is an error condition arising from the program's own instruction, which is the hallmark of an exception."
   },
   {
    "q": "What is the name for the special code that runs when an interrupt occurs?",
    "options": [
     "Compiler",
     "Interrupt service routine (ISR)",
     "Bootloader",
     "Garbage collector"
    ],
    "answer": 1,
    "explain": "The ISR, or handler, is the routine written to deal with a specific interrupt or exception."
   },
   {
    "q": "After the interrupt handler finishes, what does the CPU normally do?",
    "options": [
     "Shuts down",
     "Restarts from the very first instruction of the program",
     "Restores the saved state and resumes the interrupted program",
     "Waits forever"
    ],
    "answer": 2,
    "explain": "The CPU restores the saved program counter and registers so the interrupted program continues seamlessly."
   }
  ]
 },
 "architecture-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Devices like keyboards, disks, and network cards are much slower than the CPU, so the CPU needs a strategy for moving data in and out. There are three classic approaches: programmed I/O (polling), interrupt-driven I/O, and DMA."
    },
    {
     "type": "text",
     "text": "In polling, the CPU repeatedly checks a status flag in a loop, asking 'are you ready yet?' over and over, until the device says yes. It is simple to implement but wastes huge amounts of CPU time on waiting."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint device_status = 0;\n#define READY 1\n\nvoid read_data_from_device(void) {\n    printf(\"data read from device\\n\");\n}\n\nint main(void) {\n    // polling: the CPU busy-waits\n    while (device_status != READY) {\n        device_status = READY; // simulate the device becoming ready\n    }\n    read_data_from_device();\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Interrupt-driven I/O flips this around: the CPU asks the device to do its work, then goes off and does something useful, and the device itself raises an interrupt when it is ready. This is far more efficient, since the CPU is never stuck busy-waiting."
    },
    {
     "type": "text",
     "text": "DMA (Direct Memory Access) goes one step further. For large transfers, like reading a whole file from disk, even interrupts per byte would be too slow. A DMA controller is given the source, destination, and length, and it moves the entire block of data directly between the device and memory without bothering the CPU at all, only interrupting once at the very end when the whole transfer is done."
    },
    {
     "type": "tip",
     "text": "Speed order to remember: Polling wastes CPU time waiting. Interrupts free the CPU but still bother it once per event. DMA barely bothers the CPU at all, only at the finish line."
    }
   ],
   "recap": "Polling wastes CPU cycles busy-waiting on a device, interrupt-driven I/O lets the CPU work elsewhere until the device signals it, and DMA offloads whole block transfers to a separate controller, interrupting the CPU only once the transfer is complete."
  },
  "quiz": [
   {
    "q": "What is the main downside of polling?",
    "options": [
     "It only works with disks",
     "It cannot detect the device at all",
     "It requires no hardware",
     "The CPU wastes time repeatedly checking a status flag"
    ],
    "answer": 3,
    "explain": "Polling makes the CPU busy-wait in a loop, burning cycles that could be used for real work."
   },
   {
    "q": "In interrupt-driven I/O, how does the CPU know the device is ready?",
    "options": [
     "It guesses based on a timer",
     "The device raises an interrupt to signal the CPU",
     "It never finds out",
     "It keeps checking in a loop"
    ],
    "answer": 1,
    "explain": "The device itself signals readiness via an interrupt, so the CPU can do other work in the meantime."
   },
   {
    "q": "Why is DMA used for large data transfers like disk reads?",
    "options": [
     "It avoids using memory entirely",
     "It lets a separate controller move the whole block without the CPU handling every byte",
     "It removes the need for interrupts forever",
     "It only works for small one-byte transfers"
    ],
    "answer": 1,
    "explain": "A DMA controller handles the entire block transfer directly, interrupting the CPU only once the whole transfer finishes."
   },
   {
    "q": "Which I/O technique interrupts the CPU only once for an entire block of data, rather than once per unit of data?",
    "options": [
     "Polling",
     "Interrupt-driven I/O",
     "DMA",
     "None of them"
    ],
    "answer": 2,
    "explain": "DMA is designed exactly for this: one setup, one final interrupt, and the whole transfer happens in between without CPU involvement."
   }
  ]
 },
 "architecture-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know cache is small, fast memory that sits between the CPU and main memory. But cache is far smaller than RAM, so it cannot hold a copy of everything, it needs a rule for deciding where a piece of memory is allowed to sit inside it. That rule is called a mapping technique."
    },
    {
     "type": "text",
     "text": "In direct mapping, each memory block can go in exactly one specific cache line, decided by a simple formula, usually (block number) mod (number of cache lines). It is fast and simple to check, but two blocks that map to the same line will keep kicking each other out even if the rest of the cache is empty."
    },
    {
     "type": "text",
     "text": "In fully associative mapping, a memory block can go in any cache line at all. This gives maximum flexibility and far fewer clashes, but the hardware has to search every single line to check for a match, which is expensive and slower."
    },
    {
     "type": "text",
     "text": "Set-associative mapping is the practical middle ground used in almost every real CPU. The cache is divided into sets of a few lines each (commonly 2, 4, or 8), a block maps to one specific set by a formula, but within that set it can sit in any of the lines. This keeps searching cheap while avoiding most of direct mapping's clashes."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    int block_number = 13;\n    // direct mapping example: cache has 8 lines\n    int cache_line = block_number % 8;\n    // set-associative example: 4 sets, each holding 2 lines\n    int set_index = block_number % 4;\n    // then check both lines within that set for a match\n    printf(\"cache_line=%d set_index=%d\\n\", cache_line, set_index);\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Remember the trade-off as a spectrum: Direct mapping = one fixed slot, fast check, more clashes. Fully associative = anywhere, flexible, slow check. Set-associative = a small group of slots, a practical balance most real CPUs use."
    }
   ],
   "recap": "Cache mapping decides where a memory block can live in the cache: direct mapping gives it one fixed slot, fully associative allows any slot, and set-associative, the common real-world choice, restricts it to any slot within one small set."
  },
  "quiz": [
   {
    "q": "In direct mapping, how many possible cache lines can a given memory block go into?",
    "options": [
     "Zero, it must stay in RAM",
     "Any line in the cache",
     "Exactly one specific line",
     "A small group of lines"
    ],
    "answer": 2,
    "explain": "Direct mapping assigns each block to exactly one line, usually via a modulo formula, which is fast but prone to clashes."
   },
   {
    "q": "What is the main disadvantage of fully associative mapping?",
    "options": [
     "Searching every line for a match is expensive",
     "It never finds a match",
     "It cannot hold any data",
     "It only works with one cache line"
    ],
    "answer": 0,
    "explain": "Because a block can go anywhere, the hardware must check every single line, which costs time and extra circuitry."
   },
   {
    "q": "What does set-associative mapping do differently from direct mapping?",
    "options": [
     "It allows a block to sit in any line within one specific set, instead of just one fixed line",
     "It removes the need for a cache entirely",
     "It requires searching the entire cache every time",
     "It only stores instructions, never data"
    ],
    "answer": 0,
    "explain": "Set-associative mapping narrows the search to one small set of lines rather than one single line or the whole cache."
   },
   {
    "q": "Why do most real CPUs use set-associative mapping rather than fully associative?",
    "options": [
     "Fully associative mapping is illegal to implement",
     "It balances fewer clashes against a manageable search cost",
     "It is cheaper to build than direct mapping",
     "It requires no hardware at all"
    ],
    "answer": 1,
    "explain": "Set-associative mapping keeps the search limited to a small set while still reducing the clashes that plague pure direct mapping."
   }
  ]
 },
 "architecture-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A program often behaves as if it has access to a huge, private block of memory, even on a machine with much less physical RAM, and even while other programs are running at the same time. This illusion is called virtual memory."
    },
    {
     "type": "text",
     "text": "Every address a running program uses is a virtual address. Special hardware called the Memory Management Unit (MMU) translates each virtual address into a real physical address in RAM, using a lookup structure called a page table."
    },
    {
     "type": "text",
     "text": "Memory is split into fixed-size chunks called pages (in virtual memory) and frames (the matching chunks in physical RAM). Not every page needs to be in RAM at once, only the pages actually being used right now."
    },
    {
     "type": "text",
     "text": "If a program touches a page that is not currently in RAM, the hardware triggers a page fault, and the operating system fetches that page from disk into a free frame before letting the program continue. This is what allows a computer to run programs whose total size is bigger than its physical RAM."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int main(void) {\n    // conceptually, every memory access goes through this:\n    // 1. CPU issues a virtual address\n    // 2. MMU checks the page table\n    // 3. if the page is in RAM -> translate to physical address, continue\n    // 4. if not (page fault) -> OS loads the page from disk, then retry\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Virtual memory gives two big wins at once: programs feel like they have huge, private memory, and the OS can safely isolate one program's memory from another's."
    }
   ],
   "recap": "Virtual memory lets a program use addresses that the MMU translates through a page table into real RAM locations, loading pages from disk on a page fault, so programs can run larger and more isolated than physical RAM alone would allow."
  },
  "quiz": [
   {
    "q": "What hardware component translates a virtual address into a physical address?",
    "options": [
     "The Memory Management Unit (MMU)",
     "The control bus",
     "The ALU",
     "The cache controller only"
    ],
    "answer": 0,
    "explain": "The MMU consults the page table to convert each virtual address a program uses into the actual physical RAM address."
   },
   {
    "q": "What happens when a program accesses a page that is not currently loaded in RAM?",
    "options": [
     "Nothing, virtual memory ignores the request",
     "A page fault occurs and the OS loads that page from disk",
     "The program crashes immediately with no recovery",
     "The CPU simply skips that instruction"
    ],
    "answer": 1,
    "explain": "A page fault triggers the operating system to fetch the missing page from disk into a free physical frame, then the access is retried."
   },
   {
    "q": "What is the main benefit of virtual memory for running programs?",
    "options": [
     "It makes the CPU clock run faster",
     "It removes the need for a hard disk",
     "It lets programs use more memory than is physically installed and isolates them from each other",
     "It deletes unused files automatically"
    ],
    "answer": 2,
    "explain": "Virtual memory gives each program the illusion of large, private memory while the OS manages the real, limited RAM behind the scenes."
   },
   {
    "q": "What are the fixed-size chunks that memory is divided into in a paging system?",
    "options": [
     "Pages (virtual) and frames (physical)",
     "Bytes and nibbles",
     "Sectors and clusters",
     "Threads and processes"
    ],
    "answer": 0,
    "explain": "Virtual memory is divided into pages, and physical RAM is divided into matching-sized frames that pages are loaded into."
   }
  ]
 },
 "architecture-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "How do you actually compare whether one CPU is faster than another? Clock speed alone is not enough, since different designs get different amounts of work done per clock tick. Engineers use a few standard metrics instead."
    },
    {
     "type": "text",
     "text": "CPI (Cycles Per Instruction) measures the average number of clock cycles a typical instruction takes on a given CPU. A lower CPI generally means the CPU is doing more work per cycle. Execution time can be estimated as: Instruction count times CPI, divided by clock rate."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n\nint main(void) {\n    // Execution time = (Instruction Count * CPI) / Clock Rate\n    // Example: 1,000,000 instructions, average CPI = 2, clock rate = 1 GHz\n    double instructions = 1000000;\n    double cpi = 2;\n    double clock_rate_hz = 1e9;\n    double exec_time_sec = (instructions * cpi) / clock_rate_hz;\n    printf(\"%f\\n\", exec_time_sec);\n    // exec_time_sec = 0.002 seconds\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "MIPS (Million Instructions Per Second) is another common measure, simply clock rate divided by (CPI times one million). It is easy to compute but can be misleading when comparing CPUs with very different instruction sets, since RISC and CISC instructions do different amounts of work."
    },
    {
     "type": "text",
     "text": "Amdahl's Law answers a different but crucial question: if you speed up only part of a system, how much faster does the whole system actually get? If a fraction F of a task can be sped up by factor S, the overall speedup is limited: Speedup = 1 / ((1 - F) + F/S). Even an infinitely fast improvement to that one part cannot beat 1 / (1 - F), because the untouched part still has to run."
    },
    {
     "type": "tip",
     "text": "Amdahl's Law in one line: the part you did not speed up puts a hard ceiling on your overall speedup, no matter how much you improve the rest."
    }
   ],
   "recap": "CPI and MIPS measure how efficiently a CPU executes instructions, while Amdahl's Law shows that speeding up only part of a system caps the overall improvement, since the untouched portion still limits total speedup."
  },
  "quiz": [
   {
    "q": "What does CPI stand for, and what does a lower CPI usually mean?",
    "options": [
     "Cache Performance Indicator; lower means more cache misses",
     "Cycles Per Instruction; lower means more work done per cycle",
     "Computer Processing Index; lower means slower memory",
     "Cost Per Instruction; lower means cheaper hardware"
    ],
    "answer": 1,
    "explain": "CPI is Cycles Per Instruction, and a lower value means the CPU is completing instructions using fewer clock cycles on average."
   },
   {
    "q": "According to the formula, if you double the instruction count while keeping CPI and clock rate the same, what happens to execution time?",
    "options": [
     "It halves",
     "It becomes zero",
     "It stays the same",
     "It doubles"
    ],
    "answer": 3,
    "explain": "Execution time is proportional to instruction count, so doubling the instructions doubles the execution time when CPI and clock rate are unchanged."
   },
   {
    "q": "Why can MIPS be misleading when comparing a RISC CPU to a CISC CPU?",
    "options": [
     "MIPS only applies to memory, not CPUs",
     "CISC chips have no clock rate",
     "Their instructions do different amounts of work, so counting raw instructions per second is not a fair comparison",
     "MIPS cannot be calculated for RISC chips"
    ],
    "answer": 2,
    "explain": "A single CISC instruction may do the work of several RISC instructions, so comparing raw instruction counts alone can be unfair."
   },
   {
    "q": "According to Amdahl's Law, if only 50% of a program can be sped up, what limits the maximum possible overall speedup?",
    "options": [
     "The other 50% that cannot be sped up puts a ceiling on the total improvement",
     "There is no limit at all",
     "Amdahl's Law only applies to memory, not speedup",
     "The clock rate becomes infinite"
    ],
    "answer": 0,
    "explain": "The untouched 50% still takes its original time to run, so no matter how much the other half improves, overall speedup is capped."
   }
  ]
 },
 "architecture-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "For decades, CPUs got faster mainly by raising clock speed. But packing transistors tighter and running them faster eventually generates too much heat, so around the mid-2000s, manufacturers changed strategy: instead of one faster core, put several cores on the same chip."
    },
    {
     "type": "text",
     "text": "A multicore CPU has two or more independent processing units, each capable of fetching, decoding, and executing instructions on its own, all sharing the same chip and usually some levels of cache. A quad-core CPU can genuinely run four separate instruction streams at the same time."
    },
    {
     "type": "text",
     "text": "This is different from multiprocessing, where a system has multiple separate CPU chips, and also different from multithreading, where a single core rapidly switches between multiple threads to look busy, but is not truly running them all at once. Multicore is genuinely parallel hardware."
    },
    {
     "type": "text",
     "text": "Software has to be written to take advantage of multiple cores. A program that only uses one thread will only ever use one core, no matter how many cores the chip has. This is why parallel programming, splitting work into independent chunks that can run simultaneously, matters so much in modern software design."
    },
    {
     "type": "tip",
     "text": "Do not confuse the three: multicore = multiple real cores on one chip, multiprocessing = multiple separate CPU chips, multithreading = one core juggling many threads by switching quickly between them."
    }
   ],
   "recap": "Multicore CPUs put several independent processing units on one chip to keep improving performance without raising clock speed further, but software must be written with multiple threads to actually benefit from the extra cores."
  },
  "quiz": [
   {
    "q": "Why did CPU manufacturers shift from raising clock speed to adding more cores?",
    "options": [
     "Software stopped supporting fast clock speeds",
     "More cores are cheaper to design than a single fast core",
     "Clock speed increases stopped being possible to manufacture at all",
     "Pushing clock speed higher generates too much heat and power draw"
    ],
    "answer": 3,
    "explain": "Beyond a point, higher clock speeds create excessive heat and power consumption, so adding parallel cores became the better path forward."
   },
   {
    "q": "What is the key difference between multicore and multiprocessing?",
    "options": [
     "Multiprocessing means one core switching between threads",
     "Multicore only exists in mobile phones",
     "There is no difference, they mean the same thing",
     "Multicore means multiple cores on one chip, multiprocessing means multiple separate CPU chips"
    ],
    "answer": 3,
    "explain": "Multicore packs several independent processing units onto a single chip, while multiprocessing uses multiple distinct CPU chips in a system."
   },
   {
    "q": "A single-threaded program running on a quad-core CPU will use...",
    "options": [
     "No cores at all",
     "Exactly two cores",
     "All four cores equally",
     "Only one core, regardless of how many are available"
    ],
    "answer": 3,
    "explain": "Without being written to use multiple threads, a program can only ever run on one core at a time."
   },
   {
    "q": "What is multithreading on a single core best described as?",
    "options": [
     "A way to add more physical cores",
     "Truly running many instruction streams at the exact same instant",
     "A type of cache mapping",
     "One core rapidly switching between threads to appear as if it runs them together"
    ],
    "answer": 3,
    "explain": "On a single core, multithreading interleaves execution of multiple threads quickly, giving the appearance of simultaneous progress without true parallel hardware."
   }
  ]
 },
 "architecture-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "With multicore chips and clusters of machines everywhere, it helps to have a standard way to classify how a system handles instructions and data at the same time. Flynn's Taxonomy sorts computer architectures into four categories based on two questions: how many instruction streams are there, and how many data streams are there?"
    },
    {
     "type": "text",
     "text": "SISD (Single Instruction, Single Data) is the classic one-core-at-a-time computer: one instruction stream working on one data item at a time, the traditional von Neumann model you started this subject with."
    },
    {
     "type": "text",
     "text": "SIMD (Single Instruction, Multiple Data) applies the same one instruction to many data items simultaneously, this is exactly what a graphics card (GPU) does when it applies the same shading calculation to millions of pixels at once, and it is also how vector instructions in modern CPUs speed up things like video processing."
    },
    {
     "type": "text",
     "text": "MISD (Multiple Instruction, Single Data) is rare in practice, multiple instruction streams working on the same single data item, mostly used in specialised fault-tolerant systems where several units cross-check the same result. MIMD (Multiple Instruction, Multiple Data) is the most general and common form in modern multicore CPUs and computer clusters, where each core or machine runs its own instructions on its own data completely independently."
    },
    {
     "type": "tip",
     "text": "Quick recall: SISD = your old single-core PC. SIMD = a GPU painting millions of pixels with one instruction. MISD = rare, cross-checking systems. MIMD = today's multicore CPUs and clusters, each doing its own thing."
    }
   ],
   "recap": "Flynn's Taxonomy classifies architectures by instruction and data streams: SISD (one and one, classic CPU), SIMD (one instruction, many data, like a GPU), MISD (rare, multiple instructions on one data item), and MIMD (many instructions, many data, today's multicore systems)."
  },
  "quiz": [
   {
    "q": "Which Flynn's Taxonomy category best describes a GPU applying the exact same operation to millions of pixels at once?",
    "options": [
     "SIMD",
     "MIMD",
     "MISD",
     "SISD"
    ],
    "answer": 0,
    "explain": "SIMD applies a single instruction across many data items simultaneously, exactly how GPUs process large batches of pixels in parallel."
   },
   {
    "q": "The classic single-core von Neumann computer, running one instruction on one piece of data at a time, is classified as...",
    "options": [
     "MIMD",
     "MISD",
     "SISD",
     "SIMD"
    ],
    "answer": 2,
    "explain": "SISD stands for Single Instruction, Single Data, the traditional one-instruction-at-a-time model."
   },
   {
    "q": "A modern multicore CPU, where each core independently runs its own instructions on its own data, is best classified as...",
    "options": [
     "SISD",
     "MIMD",
     "MISD",
     "SIMD"
    ],
    "answer": 1,
    "explain": "MIMD covers systems with multiple independent instruction streams each working on their own data, which describes today's multicore chips and clusters."
   },
   {
    "q": "Which category of Flynn's Taxonomy is considered rare and mostly used in specialised fault-tolerant systems?",
    "options": [
     "SISD",
     "SIMD",
     "MISD",
     "MIMD"
    ],
    "answer": 2,
    "explain": "MISD, multiple instructions operating on a single data stream, is uncommon and mainly appears in niche cross-checking or fault-tolerant designs."
   }
  ]
 },
 "architecture-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Basic pipelining lets one instruction start every cycle, but modern high-performance CPUs go further with superscalar execution: they have multiple copies of the fetch, decode, and execute hardware, so they can start and finish more than one instruction in the very same cycle."
    },
    {
     "type": "text",
     "text": "A superscalar CPU might fetch and decode four instructions at once, then hand them off to several separate execution units, an integer unit, a floating-point unit, a load/store unit, all working simultaneously, as long as the instructions do not depend on each other."
    },
    {
     "type": "text",
     "text": "That last condition is the catch: real programs are full of dependencies, where one instruction needs the previous one's result. Out-of-order execution tackles this by letting the CPU look ahead in the instruction stream and execute a later, independent instruction first, if an earlier one is stuck waiting on data or a slow memory access, rather than freezing the whole pipeline."
    },
    {
     "type": "text",
     "text": "Crucially, even though instructions execute out of order internally, the CPU always commits, writes back, results in the original program order, using a structure called a reorder buffer. This keeps the program's behaviour correct and predictable from the outside, even though the inside is a race to keep every execution unit busy."
    },
    {
     "type": "tip",
     "text": "Interview soundbite: superscalar means 'wider' (more instructions per cycle), out-of-order means 'smarter scheduling' (execute what is ready now, but finish results in the original order)."
    }
   ],
   "recap": "Superscalar CPUs use duplicated hardware to issue and execute several instructions per cycle, and out-of-order execution lets independent, ready instructions jump ahead of stalled ones while a reorder buffer ensures results still commit in the correct program order."
  },
  "quiz": [
   {
    "q": "What does a superscalar CPU do differently from a simple pipelined CPU?",
    "options": [
     "It can fetch, decode, and execute more than one instruction in the same cycle",
     "It runs at a slower clock speed on purpose",
     "It only supports one execution unit",
     "It removes the need for a cache"
    ],
    "answer": 0,
    "explain": "Superscalar CPUs duplicate pipeline hardware so multiple independent instructions can move through fetch, decode, and execute simultaneously."
   },
   {
    "q": "Why does out-of-order execution exist?",
    "options": [
     "To make programs run in a random, unpredictable sequence permanently",
     "To slow the CPU down for power saving",
     "To remove the need for registers",
     "To let an independent, ready instruction execute while an earlier one is stalled waiting on data"
    ],
    "answer": 3,
    "explain": "Rather than freezing the pipeline when one instruction is stuck, the CPU executes other ready instructions out of sequence to keep hardware busy."
   },
   {
    "q": "What ensures that results still appear to complete in the original program order, even with out-of-order execution happening internally?",
    "options": [
     "The interrupt controller",
     "The reorder buffer",
     "The MMU",
     "The cache controller"
    ],
    "answer": 1,
    "explain": "The reorder buffer tracks instructions and commits their results in the original program order, keeping the external behaviour correct."
   },
   {
    "q": "In an interview one-liner, superscalar means 'wider execution' -- what does out-of-order mean by contrast?",
    "options": [
     "Also wider execution, they are the same thing",
     "Smarter scheduling: run what is ready now, commit results in order",
     "Running instructions only in reverse order",
     "Removing all pipelining"
    ],
    "answer": 1,
    "explain": "Out-of-order execution is about scheduling: independent ready instructions run ahead of stalled ones, while a reorder buffer preserves correct final ordering."
   }
  ]
 },
 "architecture-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have now walked the whole journey: von Neumann's model, fetch-decode-execute, memory hierarchy, buses, instruction sets, addressing modes, pipelining, hazards, interrupts, I/O, cache mapping, virtual memory, performance metrics, and parallel hardware. A real modern CPU is simply all of these ideas working together at once."
    },
    {
     "type": "text",
     "text": "When your laptop or phone runs a program, dozens of these techniques fire simultaneously: branch predictors guess which way a branch will go before it is even resolved, to keep a deep pipeline fed; out-of-order execution and superscalar issue keep several execution units busy at once; multiple cache levels (L1, L2, L3) sit between the core and RAM, each bigger and slower than the last; and virtual memory quietly keeps every running program isolated and safe."
    },
    {
     "type": "text",
     "text": "Branch prediction deserves a special mention since it ties pipelining and control hazards together: the CPU keeps a history of how a branch behaved before, and guesses it will do the same again. A correct guess keeps the pipeline full; a wrong guess means flushing the wrongly fetched instructions and paying a penalty, which is exactly the control hazard cost from before."
    },
    {
     "type": "text",
     "text": "This is also the level a placement interview tends to probe: not just 'what is cache' but 'why does a branch misprediction hurt a deep pipeline more than a shallow one', or 'why doesn't doubling the cores always double your speed' (hint: Amdahl's Law), or 'how does out-of-order execution avoid breaking a program's correctness' (hint: the reorder buffer)."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "int main(void) {\n    // A rough mental model of what happens for ONE instruction in a modern CPU:\n    // 1. Branch predictor guesses the next fetch address\n    // 2. Fetch + decode multiple instructions per cycle (superscalar)\n    // 3. Independent instructions may execute out of order\n    // 4. Data hazards resolved by forwarding\n    // 5. Memory access checked against multiple cache levels, then virtual memory\n    // 6. Reorder buffer commits results in correct program order\n    // ... all of this, for every single instruction, billions of times per second\n    return 0;\n}"
    },
    {
     "type": "tip",
     "text": "For interviews, always connect the dots: pipelining needs hazard handling, hazard handling needs forwarding and prediction, deeper pipelines raise misprediction cost, and Amdahl's Law explains why no single trick gives unlimited speedup."
    }
   ],
   "recap": "A modern CPU is the sum of everything in this subject working together: pipelining, hazard handling, branch prediction, out-of-order superscalar execution, layered caches, and virtual memory, all combining to turn billions of simple instructions per second into the computer you use every day."
  },
  "quiz": [
   {
    "q": "What is the purpose of a branch predictor in a modern CPU?",
    "options": [
     "To permanently stop using branches",
     "To slow down deep pipelines on purpose",
     "To guess which way a branch will go so the pipeline can keep fetching ahead of time",
     "To replace the cache entirely"
    ],
    "answer": 2,
    "explain": "Branch predictors guess the outcome of a branch in advance so the CPU can keep fetching and executing instructions without stalling the pipeline."
   },
   {
    "q": "Why does a branch misprediction hurt a deeper pipeline more than a shallow one?",
    "options": [
     "Deeper pipelines have no instructions in flight to flush",
     "Deep pipelines cannot use branch prediction at all",
     "More instructions have already been fetched speculatively and must all be flushed",
     "It has no real effect either way"
    ],
    "answer": 2,
    "explain": "A deeper pipeline holds more speculatively fetched instructions at once, so a wrong guess wastes more work when those instructions must be discarded."
   },
   {
    "q": "Why doesn't adding more cores always double a program's overall speed?",
    "options": [
     "Adding cores always slows a CPU down",
     "Cores do not actually run any instructions",
     "Amdahl's Law shows that the portion of the task that cannot be parallelised limits the overall speedup",
     "More cores always double speed with no exceptions"
    ],
    "answer": 2,
    "explain": "Amdahl's Law shows that the serial, non-parallelisable part of a task caps the maximum possible speedup, no matter how many cores you add."
   },
   {
    "q": "What keeps out-of-order execution from producing incorrect program behaviour?",
    "options": [
     "The branch predictor",
     "The reorder buffer, which commits results in the original program order",
     "Turning off the cache",
     "Nothing, it is inherently unpredictable"
    ],
    "answer": 1,
    "explain": "Even though instructions may execute internally out of sequence, the reorder buffer ensures their results are committed in the correct original program order."
   }
  ]
 }
}
