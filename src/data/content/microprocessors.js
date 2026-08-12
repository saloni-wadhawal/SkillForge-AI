// Lesson text and quiz questions for "Microprocessors & Microcontrollers".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "microprocessors-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A microprocessor is the 'brain' of a computer built onto a single tiny chip of silicon. Its whole job is to fetch instructions from memory, understand them, and carry them out — millions or billions of times every second. When you hear names like Intel Core, AMD Ryzen, or the classic 8085, those are all microprocessors."
    },
    {
     "type": "text",
     "text": "By itself a microprocessor cannot do much. It needs three friends around it: memory (to hold instructions and data), input/output devices (keyboard, screen, sensors), and a clock (a steady 'tick' that keeps everything in step). Wire these together and you have a working computer system."
    },
    {
     "type": "tip",
     "text": "Analogy: think of the microprocessor as a chef. Memory is the recipe book and the fridge, I/O is the waiter bringing orders and serving food, and the clock is the metronome that sets the cooking pace."
    },
    {
     "type": "text",
     "text": "A key idea is the 'word size' or data width — how many bits the processor handles at once. The 8085 is an 8-bit processor (8 bits at a time); modern CPUs are 64-bit. More bits generally means it can move and calculate on larger chunks of data in one go."
    }
   ],
   "recap": "A microprocessor is a CPU on a single chip that fetches, decodes, and executes instructions, and needs memory, I/O, and a clock to form a computer."
  },
  "quiz": [
   {
    "q": "What is a microprocessor?",
    "options": [
     "A CPU built on a single chip",
     "A power supply for a PC",
     "A type of computer memory",
     "A network cable standard"
    ],
    "answer": 0,
    "explain": "A microprocessor packs the central processing unit (CPU) onto one integrated-circuit chip."
   },
   {
    "q": "Which of these does a microprocessor NEED to form a working computer?",
    "options": [
     "An internet connection",
     "Memory, I/O, and a clock",
     "A second microprocessor",
     "Only a keyboard"
    ],
    "answer": 1,
    "explain": "On its own the chip is idle; it needs memory, input/output, and a clock signal to run."
   },
   {
    "q": "The 8085 is described as an 8-bit processor. What does that mean?",
    "options": [
     "It has 8 pins",
     "It runs at 8 MHz",
     "It costs 8 dollars",
     "It handles 8 bits of data at a time"
    ],
    "answer": 3,
    "explain": "'8-bit' refers to the data word size — the number of bits processed in one operation."
   },
   {
    "q": "What is the role of the clock in a microprocessor system?",
    "options": [
     "It displays the time to the user",
     "It stores the program",
     "It provides steady timing pulses to synchronise operations",
     "It connects to the internet"
    ],
    "answer": 2,
    "explain": "The clock produces regular pulses that keep every step of the processor in step."
   }
  ]
 },
 "microprocessors-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Open up a microprocessor and you find three main parts working together. The ALU (Arithmetic Logic Unit) does the maths and logic — add, subtract, AND, OR, compare. The Control Unit is the manager that decodes each instruction and tells everyone what to do. And the registers are tiny, super-fast storage slots inside the CPU itself."
    },
    {
     "type": "text",
     "text": "Registers are like the chef's cutting board: much smaller than the fridge (main memory) but right where the work happens, so the CPU can grab values instantly. Common registers include the Accumulator (holds results of ALU operations), general-purpose registers (B, C, D, E in the 8085), the Program Counter (points to the next instruction), and the Stack Pointer."
    },
    {
     "type": "tip",
     "text": "The Program Counter (PC) is basically a bookmark: it always remembers which instruction address comes next, and it steps forward automatically after each fetch."
    },
    {
     "type": "text",
     "text": "The parts talk to each other over buses — bundles of parallel wires. The address bus carries WHERE (which memory location), the data bus carries WHAT (the actual bits), and the control bus carries commands like 'read' or 'write'. The address bus is one-way (CPU tells memory a location), while the data bus is two-way."
    },
    {
     "type": "text",
     "text": "There is also the Flag register (status register). After an operation, individual bits called flags get set — like Zero (result was 0), Carry (an overflow happened), or Sign (result was negative). Programs read these flags to make decisions, such as 'jump only if the result was zero'."
    }
   ],
   "recap": "A CPU contains the ALU for calculations, a Control Unit to direct traffic, fast registers (Accumulator, PC, flags), and connects to memory via address, data, and control buses."
  },
  "quiz": [
   {
    "q": "Which part of the CPU actually performs addition and logic operations?",
    "options": [
     "The ALU",
     "The address bus",
     "The clock",
     "The Program Counter"
    ],
    "answer": 0,
    "explain": "The Arithmetic Logic Unit (ALU) carries out arithmetic and logical operations."
   },
   {
    "q": "What does the address bus carry?",
    "options": [
     "The actual data bits",
     "Which memory location to access",
     "The power supply voltage",
     "The clock signal"
    ],
    "answer": 1,
    "explain": "The address bus specifies the location (the 'where') the CPU wants to read from or write to."
   },
   {
    "q": "What is the job of the Program Counter (PC)?",
    "options": [
     "Count how many programs are open",
     "Measure elapsed time",
     "Hold the address of the next instruction",
     "Store the ALU result"
    ],
    "answer": 2,
    "explain": "The PC acts like a bookmark, always pointing to the next instruction to fetch."
   },
   {
    "q": "Why are registers faster to use than main memory?",
    "options": [
     "They use the internet",
     "They store programs permanently",
     "They are larger",
     "They are inside the CPU, right where work happens"
    ],
    "answer": 3,
    "explain": "Registers sit inside the CPU, so their values can be accessed almost instantly."
   }
  ]
 },
 "microprocessors-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Intel 8085 (1976) is the classic teaching processor. It is 8-bit, runs around 3 MHz, and has a 16-bit address bus. A 16-bit address bus means it can point to 2^16 = 65,536 locations, so it can address 64 KB of memory. Its simplicity makes it perfect for learning how a CPU really works."
    },
    {
     "type": "text",
     "text": "A neat trick in the 8085 is the multiplexed AD0–AD7 bus: the same 8 pins carry the lower address bits AND the data, at different moments in time. A signal called ALE (Address Latch Enable) tells external hardware 'right now these pins are an address — latch them'. This pin-saving trick is a common exam favourite."
    },
    {
     "type": "text",
     "text": "The Intel 8086 (1978) was the big step up and the ancestor of today's x86 PCs. It is 16-bit, has a 20-bit address bus (2^20 = 1 MB of memory), and introduced two clever features: a pipeline-like split into a Bus Interface Unit (BIU) and Execution Unit (EU), and memory segmentation."
    },
    {
     "type": "tip",
     "text": "Segmentation analogy: instead of one giant street with million-digit house numbers, the 8086 divides memory into 'segments' (neighbourhoods) plus an 'offset' (house number within the neighbourhood). Physical address = segment × 16 + offset."
    },
    {
     "type": "text",
     "text": "The 8086's BIU fetches instructions ahead of time into a queue while the EU is busy executing — an early form of pipelining that overlaps fetching and execution to run faster. This 'fetch while you work' idea is the seed of every modern high-speed processor."
    }
   ],
   "recap": "The 8-bit 8085 (64 KB, multiplexed AD bus with ALE) is the classic learning CPU; the 16-bit 8086 (1 MB, segmentation, BIU/EU prefetch queue) launched the x86 family."
  },
  "quiz": [
   {
    "q": "How much memory can the 8085's 16-bit address bus directly address?",
    "options": [
     "1 GB",
     "1 MB",
     "64 KB",
     "16 KB"
    ],
    "answer": 2,
    "explain": "2^16 = 65,536 locations = 64 KB of directly addressable memory."
   },
   {
    "q": "What is the purpose of the ALE signal in the 8085?",
    "options": [
     "To increase the clock speed",
     "To reset the CPU",
     "To signal that the multiplexed pins currently hold an address",
     "To multiply two numbers"
    ],
    "answer": 2,
    "explain": "ALE (Address Latch Enable) tells external hardware to latch the address from the multiplexed AD0–AD7 lines."
   },
   {
    "q": "The 8086 has a 20-bit address bus. How much memory can it address?",
    "options": [
     "1 MB",
     "256 KB",
     "64 KB",
     "4 GB"
    ],
    "answer": 0,
    "explain": "2^20 = 1,048,576 bytes = 1 MB of addressable memory."
   },
   {
    "q": "In the 8086, what lets the Bus Interface Unit speed things up?",
    "options": [
     "It stores data on the internet",
     "It fetches instructions ahead into a queue while the EU executes",
     "It removes the ALU",
     "It doubles the clock automatically"
    ],
    "answer": 1,
    "explain": "The BIU prefetches instructions into a queue, overlapping fetch with execution — an early pipeline."
   }
  ]
 },
 "microprocessors-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A microprocessor only understands its own instruction set — a fixed menu of simple commands like 'load a value', 'add', 'jump', or 'store to memory'. Each instruction is stored as a binary number called the opcode. Because binary is hard for humans, we write assembly language — short mnemonics that map one-to-one to those opcodes."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; 8085 assembly: add the number 5 to 3\nMVI A, 03H   ; move 03 into the Accumulator\nMVI B, 05H   ; move 05 into register B\nADD B        ; A = A + B  (result 08H in A)\nHLT          ; halt the processor"
    },
    {
     "type": "text",
     "text": "Every instruction is carried out through the instruction cycle, which has two main phases. FETCH: the Control Unit uses the Program Counter to read the opcode from memory into the CPU. EXECUTE: the CPU decodes what the opcode means and performs it (maybe using the ALU or accessing memory). Then the cycle repeats for the next instruction."
    },
    {
     "type": "tip",
     "text": "Remember it as Fetch → Decode → Execute. Fetch = 'get the order slip', Decode = 'read what it says', Execute = 'cook the dish'. The Program Counter advances so the next slip is ready."
    },
    {
     "type": "text",
     "text": "Timing has a hierarchy: a machine cycle is the time to do one memory or I/O operation, and each machine cycle is made of several clock periods called T-states. One full instruction may need several machine cycles. So: T-states build a machine cycle, machine cycles build an instruction cycle."
    }
   ],
   "recap": "Instructions are binary opcodes (written as assembly mnemonics) executed via the fetch–decode–execute cycle, timed in T-states that make up machine cycles that make up the instruction cycle."
  },
  "quiz": [
   {
    "q": "What are the two main phases of the instruction cycle?",
    "options": [
     "Sleep and Wake",
     "Read and Delete",
     "Compress and Send",
     "Fetch and Execute"
    ],
    "answer": 3,
    "explain": "Every instruction is first fetched from memory, then decoded and executed."
   },
   {
    "q": "What is an opcode?",
    "options": [
     "The binary code that represents an instruction",
     "A type of memory chip",
     "The clock frequency",
     "A password for the CPU"
    ],
    "answer": 0,
    "explain": "An opcode is the binary number that tells the processor which operation to perform."
   },
   {
    "q": "Why do programmers use assembly mnemonics like ADD or MVI?",
    "options": [
     "They use less memory than opcodes",
     "They work on any language",
     "They are human-readable names that map to opcodes",
     "They run faster than binary"
    ],
    "answer": 0,
    "explain": "Mnemonics are readable one-to-one stand-ins for the raw binary opcodes."
   },
   {
    "q": "What is the correct size ordering from smallest to largest?",
    "options": [
     "T-state < machine cycle < instruction cycle",
     "Instruction cycle < machine cycle < T-state",
     "They are all equal",
     "Machine cycle < T-state < instruction cycle"
    ],
    "answer": 0,
    "explain": "T-states make up a machine cycle, and machine cycles make up the full instruction cycle."
   }
  ]
 },
 "microprocessors-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A processor works with two broad memory types. ROM (Read-Only Memory) is non-volatile — it keeps its contents when power is off, and typically holds start-up code and fixed programs. RAM (Random-Access Memory) is volatile — fast, read/write, but forgets everything when powered down. It holds the running program's data and temporary results."
    },
    {
     "type": "text",
     "text": "Each memory chip listens only to its own range of addresses. The CPU puts an address on the address bus, and 'address decoding' logic activates exactly one chip's Chip Select line so only that chip responds. This is how many separate chips share one bus without clashing — like flats sharing a building but each having a unique door number."
    },
    {
     "type": "text",
     "text": "To talk to the outside world — keyboards, LEDs, sensors, motors — the CPU uses I/O ports. There are two styles. In memory-mapped I/O, devices are given normal memory addresses, so the same LOAD/STORE instructions work on them. In isolated (I/O-mapped) I/O, ports live in a separate address space with dedicated instructions (IN and OUT on the 8085) and a control line telling memory-vs-I/O apart."
    },
    {
     "type": "tip",
     "text": "Memory-mapped I/O: the device pretends to be a memory cell, so no special instructions are needed but it uses up memory addresses. Isolated I/O: keeps I/O and memory in separate 'buildings', freeing memory space but needing IN/OUT instructions."
    },
    {
     "type": "text",
     "text": "How does data actually move? Programmed I/O means the CPU personally handles every byte (simple but keeps the CPU busy). Interrupt-driven I/O lets the device raise a flag only when ready. DMA (Direct Memory Access) lets a special controller move big blocks of data straight between a device and memory without bothering the CPU at all — ideal for disks and networks."
    }
   ],
   "recap": "ROM is non-volatile and RAM is volatile; address decoding lets chips share a bus; the CPU reaches devices via memory-mapped or isolated I/O, transferring data by programmed I/O, interrupts, or fast DMA."
  },
  "quiz": [
   {
    "q": "Which statement is true about RAM and ROM?",
    "options": [
     "ROM is faster read/write storage",
     "Both lose data on power-off",
     "RAM is read-only",
     "RAM is volatile; ROM keeps its contents without power"
    ],
    "answer": 3,
    "explain": "RAM loses its contents when power is removed, while ROM is non-volatile."
   },
   {
    "q": "What does address decoding accomplish?",
    "options": [
     "It selects exactly one chip that should respond to an address",
     "It encrypts the data bus",
     "It converts assembly to binary",
     "It speeds up the clock"
    ],
    "answer": 0,
    "explain": "Decoding logic activates the correct chip's Chip Select so only that chip answers."
   },
   {
    "q": "In memory-mapped I/O, how are devices accessed?",
    "options": [
     "Using the same instructions as memory, via memory addresses",
     "Only through DMA",
     "With special IN/OUT instructions only",
     "They cannot be accessed by the CPU"
    ],
    "answer": 0,
    "explain": "Memory-mapped devices occupy memory addresses, so ordinary load/store instructions reach them."
   },
   {
    "q": "What is the main advantage of DMA (Direct Memory Access)?",
    "options": [
     "It moves large data blocks without tying up the CPU",
     "It doubles the address bus width",
     "It makes ROM writable",
     "It removes the need for RAM"
    ],
    "answer": 0,
    "explain": "A DMA controller transfers blocks directly between device and memory, freeing the CPU."
   }
  ]
 },
 "microprocessors-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An interrupt is a signal that tells the CPU 'stop what you're doing, something needs attention NOW'. Without interrupts the CPU would have to constantly ask every device 'anything yet? anything yet?' — a wasteful approach called polling. Interrupts flip this around: the device speaks up only when it actually needs service."
    },
    {
     "type": "tip",
     "text": "Analogy: polling is like repeatedly checking the oven every ten seconds to see if the food is done. An interrupt is a smart oven that beeps only when it's ready — you get on with other work meanwhile."
    },
    {
     "type": "text",
     "text": "When an interrupt fires, the CPU finishes its current instruction, saves its place (pushes the Program Counter onto the stack so it can return), and jumps to a special routine called the ISR (Interrupt Service Routine). After handling the event, it pops the saved address back and resumes exactly where it left off — as if nothing happened."
    },
    {
     "type": "text",
     "text": "Interrupts come in two flavours. A maskable interrupt can be ignored or 'switched off' by the programmer (using enable/disable instructions like EI and DI on the 8085) when the task is too critical to disturb. A non-maskable interrupt (NMI, called TRAP on the 8085) cannot be blocked — it is reserved for emergencies like power failure."
    },
    {
     "type": "text",
     "text": "When several devices might interrupt, priority decides who wins if two arrive together. The 8085 has five hardware interrupt lines — TRAP (highest, non-maskable), RST 7.5, RST 6.5, RST 5.5, and INTR (lowest). Each is 'vectored', meaning it automatically sends the CPU to a fixed memory address for its ISR."
    }
   ],
   "recap": "Interrupts let devices signal the CPU on demand instead of wasteful polling; the CPU saves the PC on the stack, runs an ISR, then resumes — with maskable vs non-maskable types and a priority order (TRAP highest on the 8085)."
  },
  "quiz": [
   {
    "q": "What problem do interrupts solve compared with polling?",
    "options": [
     "They increase memory size",
     "They remove the need for a clock",
     "They make ROM writable",
     "They avoid the CPU constantly checking every device"
    ],
    "answer": 3,
    "explain": "Interrupts let devices signal only when needed, instead of the CPU wasting time polling."
   },
   {
    "q": "When an interrupt occurs, why does the CPU save the Program Counter on the stack?",
    "options": [
     "To speed up the ALU",
     "So it can return and resume where it left off",
     "To delete the current program",
     "To disable the clock"
    ],
    "answer": 1,
    "explain": "Saving the PC lets the CPU return to the exact spot after the ISR finishes."
   },
   {
    "q": "What is a non-maskable interrupt?",
    "options": [
     "An interrupt that can be disabled by software",
     "An interrupt that cannot be blocked, used for emergencies",
     "An interrupt reserved for graphics",
     "An interrupt that is always ignored"
    ],
    "answer": 1,
    "explain": "A non-maskable interrupt (TRAP on the 8085) cannot be disabled and handles critical events like power failure."
   },
   {
    "q": "Which 8085 interrupt has the highest priority?",
    "options": [
     "INTR",
     "RST 5.5",
     "TRAP",
     "RST 7.5"
    ],
    "answer": 2,
    "explain": "TRAP is the highest-priority, non-maskable interrupt on the 8085."
   }
  ]
 },
 "microprocessors-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Now the big-picture distinction. A microprocessor is just the CPU — a powerful brain that needs external memory, I/O chips, and timers wired around it to become a system. A microcontroller (MCU) packs the CPU, RAM, ROM/Flash, I/O ports, timers, and often ADCs onto a single chip. It is a whole tiny computer in one package."
    },
    {
     "type": "tip",
     "text": "Analogy: a microprocessor is a super-fast chef who still needs a fully equipped kitchen built around them. A microcontroller is a self-contained food truck — smaller kitchen, but everything's already inside and ready to roll."
    },
    {
     "type": "text",
     "text": "This shapes where each is used. Microprocessors go into general-purpose, high-performance systems — laptops, phones, servers — where you want raw speed and lots of external RAM and storage. Microcontrollers go into dedicated embedded tasks — washing machines, car engine control, drones, IoT sensors — where low cost, low power, small size, and reliability matter more than raw horsepower. Think Arduino (ATmega328) or ESP32."
    },
    {
     "type": "text",
     "text": "Architecture often differs too. Many microcontrollers use the Harvard architecture — separate memories and buses for program and data, so it can fetch an instruction and read data at the same time. General microprocessors more often use the Von Neumann architecture, where program and data share one memory and one bus (simpler, more flexible, but the shared bus can be a bottleneck)."
    },
    {
     "type": "text",
     "text": "A related design axis is CISC vs RISC. CISC (Complex Instruction Set Computing, like x86) offers many rich, multi-step instructions. RISC (Reduced Instruction Set Computing, like ARM and most modern MCUs) uses fewer, simpler, uniform instructions that each run fast and pipeline cleanly — which is why RISC dominates low-power and embedded chips today."
    },
    {
     "type": "text",
     "text": "Bottom line for a designer: choose a microprocessor when you need maximum computing power and expandability; choose a microcontroller when you need an integrated, low-cost, low-power controller for a specific job. The 'best' chip is always the one that fits the task, budget, and power envelope."
    }
   ],
   "recap": "A microprocessor is a standalone CPU needing external support, while a microcontroller integrates CPU, memory, and I/O on one chip for embedded tasks — differing further by Harvard vs Von Neumann and RISC vs CISC design choices."
  },
  "quiz": [
   {
    "q": "What is the key difference between a microprocessor and a microcontroller?",
    "options": [
     "There is no difference",
     "A microcontroller integrates CPU, memory, and I/O on one chip",
     "A microcontroller is always faster",
     "A microprocessor cannot execute programs"
    ],
    "answer": 1,
    "explain": "A microcontroller combines the CPU with memory and I/O on a single chip, unlike a bare microprocessor."
   },
   {
    "q": "Which application best suits a microcontroller?",
    "options": [
     "A washing machine's control system",
     "A large database server",
     "A supercomputer cluster",
     "A high-end gaming laptop"
    ],
    "answer": 0,
    "explain": "Dedicated, low-cost, low-power embedded tasks like appliance control are ideal for microcontrollers."
   },
   {
    "q": "What defines the Harvard architecture?",
    "options": [
     "Separate memories and buses for program and data",
     "No memory at all",
     "One shared bus for program and data",
     "Only used in servers"
    ],
    "answer": 0,
    "explain": "Harvard architecture uses separate program and data memories/buses, allowing simultaneous fetch and data access."
   },
   {
    "q": "Why does RISC dominate low-power and embedded chips like ARM?",
    "options": [
     "It uses fewer, simple, uniform instructions that pipeline efficiently",
     "It requires more power than CISC",
     "It uses very complex multi-step instructions",
     "It has no instruction set"
    ],
    "answer": 0,
    "explain": "RISC's small set of simple, uniform instructions execute quickly and pipeline cleanly, saving power."
   }
  ]
 },
 "microprocessors-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An instruction needs to know where its data lives, not just what to do with it. Addressing mode is the rule the CPU uses to find that data. The same operation, ADD, can pull its number straight from the instruction, from a register, or from memory — the addressing mode tells the CPU which."
    },
    {
     "type": "text",
     "text": "Immediate addressing means the data is written right into the instruction. MVI A, 05H loads the literal value 05H into the Accumulator — no lookup needed, it is the fastest mode. Register addressing means the data already sits in a register, like MOV A, B which copies register B into A."
    },
    {
     "type": "text",
     "text": "Direct addressing gives the full memory address inside the instruction, like LDA 2000H, which loads whatever byte sits at memory location 2000H into the Accumulator. Indirect (register-indirect) addressing uses a register pair as a pointer: MOV A, M reads the byte at the address held in the H-L register pair, not the address 'M' itself."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; four addressing modes, same job: get a value into A\nMVI A, 05H     ; immediate  - value is inside the instruction\nMOV A, B       ; register   - value comes from register B\nLDA 2050H      ; direct     - value comes from memory address 2050H\nLXI H, 2050H   ; load H-L with the pointer 2050H\nMOV A, M       ; indirect   - value comes from the address H-L points to"
    },
    {
     "type": "tip",
     "text": "Exam trick: if the instruction shows a plain number like 05H, it is immediate. If it shows a register name, it is register. If it shows a 16-bit address directly, it is direct. If it uses M or a register pair as a pointer, it is indirect."
    }
   ],
   "recap": "Addressing modes decide where an instruction's data comes from: immediate (in the instruction), register (in a register), direct (a named memory address), or indirect (a register pair used as a pointer)."
  },
  "quiz": [
   {
    "q": "In MVI A, 05H, what addressing mode is used?",
    "options": [
     "Immediate",
     "Register",
     "Indirect",
     "Direct"
    ],
    "answer": 0,
    "explain": "The value 05H is written straight into the instruction, so this is immediate addressing."
   },
   {
    "q": "What does LDA 2000H do?",
    "options": [
     "Stores the Accumulator into register B",
     "Jumps the program counter to address 2000H",
     "Loads the Accumulator with the literal value 2000H",
     "Loads the Accumulator with the byte stored at memory address 2000H"
    ],
    "answer": 3,
    "explain": "LDA is direct addressing: it fetches the byte located at the given memory address."
   },
   {
    "q": "In MOV A, M, where does the data actually come from?",
    "options": [
     "The address currently held in the H-L register pair",
     "A fixed address written in the instruction",
     "The literal letter M",
     "Register B"
    ],
    "answer": 0,
    "explain": "M is shorthand for 'memory pointed to by H-L' — this is register-indirect addressing."
   },
   {
    "q": "Which addressing mode is fastest because no memory lookup is needed?",
    "options": [
     "Immediate",
     "Indirect",
     "Direct",
     "Register-indirect"
    ],
    "answer": 0,
    "explain": "Immediate addressing carries the value inside the instruction itself, so nothing else has to be fetched."
   }
  ]
 },
 "microprocessors-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 8085 instruction set groups into families by what they do: data transfer (MOV, MVI, LDA, STA), arithmetic (ADD, SUB, INR, DCR), logical (ANA, ORA, XRA, CMP), branching (JMP, JNZ, CALL, RET), and control (HLT, NOP, EI, DI). Learning the set is really learning these five buckets, not 246 separate things."
    },
    {
     "type": "text",
     "text": "Arithmetic and logic instructions update flags in the Flag register: Sign, Zero, Auxiliary Carry, Parity, and Carry. A conditional jump like JZ (jump if zero) or JNZ (jump if not zero) reads the Zero flag left behind by the previous instruction — this is how the CPU makes decisions."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; sum an array of 5 bytes stored from 2000H onward, result in C\nLXI H, 2000H   ; H-L points to the first number\nMVI B, 05H     ; B = loop counter (5 numbers)\nMVI C, 00H     ; C = running total, start at 0\nLOOP: MOV A, C ; A = running total\n ADD M         ; A = A + (value at address H-L points to)\n MOV C, A      ; C = C + (value at M)\n INX H         ; move pointer to next byte\n DCR B         ; decrement counter, sets Zero flag when it hits 0\n JNZ LOOP      ; loop again while B is not zero\n HLT"
    },
    {
     "type": "tip",
     "text": "DCR and INR do not affect the Carry flag — a classic exam gotcha. Only ADD, SUB, and similar arithmetic instructions touch Carry; INR/DCR only touch Sign, Zero, Auxiliary Carry, and Parity."
    },
    {
     "type": "text",
     "text": "Writing assembly is really three steps: pick registers to hold your values, move data in and out of memory with LDA/STA or LXI/MOV M, and control the flow with compare-then-jump pairs (CMP followed by JZ/JNZ/JC). Almost every 8085 program you will be asked to trace or write follows this same shape."
    }
   ],
   "recap": "8085 instructions fall into data transfer, arithmetic, logical, branch, and control families; flags set by arithmetic/logic instructions drive conditional jumps that give assembly its decision-making power."
  },
  "quiz": [
   {
    "q": "Which flag does a JZ instruction check?",
    "options": [
     "Carry flag",
     "Zero flag",
     "Sign flag",
     "Parity flag"
    ],
    "answer": 1,
    "explain": "JZ jumps only if the Zero flag is set, meaning the previous result was zero."
   },
   {
    "q": "Which of these does NOT affect the Carry flag?",
    "options": [
     "ADD",
     "CMP",
     "DCR",
     "SUB"
    ],
    "answer": 2,
    "explain": "INR and DCR update Sign, Zero, Auxiliary Carry, and Parity but never touch the Carry flag."
   },
   {
    "q": "In the loop-sum program, what does DCR B followed by JNZ LOOP achieve?",
    "options": [
     "It halts the processor immediately",
     "It counts down B and repeats the loop until B reaches zero",
     "It adds B to the total every time",
     "It clears the Carry flag"
    ],
    "answer": 1,
    "explain": "DCR B decreases the counter and sets the Zero flag when it hits 0; JNZ keeps looping until that happens."
   },
   {
    "q": "Which instruction family does HLT belong to?",
    "options": [
     "Control",
     "Data transfer",
     "Logical",
     "Arithmetic"
    ],
    "answer": 0,
    "explain": "HLT stops execution — it is a control instruction, not one that moves or computes data."
   }
  ]
 },
 "microprocessors-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The stack is a reserved block of memory that grows and shrinks like a pile of plates — last one placed on top is the first one taken off (LIFO: Last In, First Out). The Stack Pointer (SP) register always holds the address of the current top of the stack."
    },
    {
     "type": "text",
     "text": "PUSH copies a register pair onto the stack and moves SP down. POP copies the top two bytes off the stack back into a register pair and moves SP up. This lets a subroutine borrow registers, use them freely, and then restore the caller's original values before returning."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; a subroutine that doubles A, protecting B and C for the caller\nDOUBLE: PUSH B    ; save caller's B-C on the stack\n MOV B, A\n ADD B         ; A = A + B, i.e. A doubled\n POP B         ; restore caller's B-C exactly as it was\n RET           ; return to the address CALL pushed earlier"
    },
    {
     "type": "text",
     "text": "CALL and RET use the stack too. CALL pushes the address of the next instruction (the return address) onto the stack, then jumps to the subroutine. RET pops that address back into the Program Counter, sending execution back to right after the CALL. This is exactly how a function call and return works in any higher-level language under the hood."
    },
    {
     "type": "tip",
     "text": "Every PUSH must be matched by a POP in the same order reversed, and the stack must be balanced before RET — if you PUSH twice but POP only once, RET will pop the wrong value and jump to garbage. This is the single most common assembly bug."
    }
   ],
   "recap": "The stack is a LIFO memory region managed by the Stack Pointer; PUSH/POP save and restore registers, while CALL/RET use the same stack to remember and return to a caller's address, exactly like a function call."
  },
  "quiz": [
   {
    "q": "What does LIFO mean for a stack?",
    "options": [
     "Data is accessed in random order",
     "Last data in is first data out",
     "The stack never changes size",
     "First data in is first data out"
    ],
    "answer": 1,
    "explain": "LIFO, Last In First Out, means the most recently pushed item is the first one popped."
   },
   {
    "q": "What does CALL push onto the stack before jumping to the subroutine?",
    "options": [
     "The value in the Accumulator",
     "The contents of the Stack Pointer",
     "The address of the instruction right after the CALL",
     "Nothing — CALL never touches the stack"
    ],
    "answer": 2,
    "explain": "CALL saves the return address so RET knows exactly where to resume the caller."
   },
   {
    "q": "Why does the subroutine in the example PUSH B before using it and POP B before RET?",
    "options": [
     "To free unused memory",
     "To restore the caller's B-C values so the subroutine doesn't corrupt them",
     "Because PUSH is required before every instruction",
     "To increase the clock speed"
    ],
    "answer": 1,
    "explain": "Saving and restoring B-C means the caller sees its registers unchanged after the call, even though the subroutine used them internally."
   },
   {
    "q": "What happens if PUSH and POP counts don't match before a RET?",
    "options": [
     "The Accumulator is cleared",
     "The clock frequency changes",
     "Nothing, RET always works correctly",
     "RET pops the wrong value off the stack and jumps to an incorrect address"
    ],
    "answer": 3,
    "explain": "An unbalanced stack means the value on top when RET executes is not the real return address, so execution jumps to garbage."
   }
  ]
 },
 "microprocessors-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every instruction takes a fixed pattern of time to run, built from three levels: a T-state is one clock pulse, a machine cycle is a group of T-states that does one bus operation (like fetching one byte), and an instruction cycle is the full set of machine cycles needed to fetch and execute one instruction."
    },
    {
     "type": "text",
     "text": "The 8085 has five kinds of machine cycles: Opcode Fetch (4 T-states, reads the instruction code), Memory Read, Memory Write, I/O Read, and I/O Write (each usually 3 T-states). A simple instruction like MOV A,B needs only one machine cycle (fetch); a longer one like LDA needs four (fetch + two memory reads for the address + one memory read for the data)."
    },
    {
     "type": "text",
     "text": "A timing diagram is a graph of signals against time — the Address bus, Data bus, and control signals like ALE (Address Latch Enable), RD (Read), and WR (Write) — showing exactly which T-state each event happens in. ALE pulses high during T1 to say 'the address is valid right now, latch it,' because the 8085 multiplexes address and data on the same pins to save package space."
    },
    {
     "type": "tip",
     "text": "Remember the order for any machine cycle: ALE goes high in T1 while the address is on the bus, then in T2 either RD or WR goes low while the data byte moves, and status signals (IO/M, S1, S0) tell you whether this is memory or I/O and whether it's a read or write."
    },
    {
     "type": "text",
     "text": "Why this matters beyond exams: it is how you calculate exactly how long a program takes to run. If a 3 MHz 8085 executes an instruction needing 10 T-states, that instruction takes 10 / 3,000,000 seconds — about 3.3 microseconds. Multiply across a loop and you get real, predictable timing, which matters for anything time-critical like generating a delay or driving a motor."
    }
   ],
   "recap": "A T-state is one clock pulse, several T-states form a machine cycle (fetch, memory/IO read or write), and machine cycles together form an instruction cycle; ALE, RD, and WR on the timing diagram show exactly when address and data are valid."
  },
  "quiz": [
   {
    "q": "What is a T-state?",
    "options": [
     "One clock pulse, the smallest unit of CPU timing",
     "One full instruction cycle",
     "A memory address",
     "A type of interrupt"
    ],
    "answer": 0,
    "explain": "A T-state is a single clock period — the smallest building block of timing in the 8085."
   },
   {
    "q": "What is the purpose of the ALE signal?",
    "options": [
     "To enable an interrupt",
     "To reset the Stack Pointer",
     "To signal that the address on the multiplexed bus is valid and should be latched",
     "To halt the processor"
    ],
    "answer": 2,
    "explain": "ALE pulses high during T1 so external circuitry can latch the address before the same pins carry data."
   },
   {
    "q": "Why does LDA need more machine cycles than MOV A, B?",
    "options": [
     "LDA only fetches, MOV does more",
     "LDA must fetch the opcode plus read two address bytes and then read the data itself, while MOV A,B only needs a fetch",
     "Machine cycles are random",
     "LDA is not a real instruction"
    ],
    "answer": 1,
    "explain": "LDA needs the opcode fetch, two more fetches for the 16-bit address, and a memory read for the data — four machine cycles versus MOV A,B's one."
   },
   {
    "q": "At 3 MHz, roughly how long does a 6 T-state instruction take?",
    "options": [
     "6 milliseconds",
     "18 seconds",
     "2 microseconds",
     "0.5 microseconds"
    ],
    "answer": 2,
    "explain": "6 T-states / 3,000,000 Hz = 2 microseconds."
   }
  ]
 },
 "microprocessors-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 8086 was Intel's leap to a 16-bit CPU, and it split its internal work into two units running side by side: the Bus Interface Unit (BIU) fetches instructions and reads/writes memory, while the Execution Unit (EU) decodes and runs them. Because they overlap, the BIU can fetch the next instruction while the EU is still executing the current one — a simple two-stage pipeline."
    },
    {
     "type": "text",
     "text": "The BIU keeps a small queue (6 bytes) of pre-fetched instruction bytes, so the EU rarely has to wait for memory. This is why the 8086 feels faster than the 8085 even at similar clock speeds — most of the time is spent computing, not waiting to fetch."
    },
    {
     "type": "text",
     "text": "To address 1 MB of memory (20 address lines) using only 16-bit registers, the 8086 uses segmentation. A physical address is formed as Segment × 16 + Offset. Four segment registers point to the active areas: CS (Code Segment) for instructions, DS (Data Segment) for data, SS (Stack Segment) for the stack, and ES (Extra Segment) for extra data like string operations."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; physical address = CS * 16 + IP\n; if CS = 2000H and IP = 0050H:\n; physical = 20000H + 0050H = 20050H"
    },
    {
     "type": "tip",
     "text": "Exam formula to remember: Physical Address = (Segment register value shifted left by 4, i.e. * 16) + Offset. A quick way to shift left by 4 is to just append a zero in hex — 2000H becomes 20000H."
    },
    {
     "type": "text",
     "text": "This segment:offset scheme is why old MS-DOS addresses looked like 'A000:0050' — two 16-bit numbers combining into one 20-bit physical address, letting a 16-bit CPU reach far more memory than 16 bits alone would allow."
    }
   ],
   "recap": "The 8086 overlaps a Bus Interface Unit (fetch) and Execution Unit (execute) for pipelining, and uses four segment registers with the formula Segment*16 + Offset to reach a 1 MB address space from 16-bit registers."
  },
  "quiz": [
   {
    "q": "What do the BIU and EU do in the 8086?",
    "options": [
     "Both only execute instructions",
     "BIU fetches instructions and handles memory, EU decodes and executes, working in an overlapped pipeline",
     "EU fetches, BIU executes",
     "BIU only exists in the 8085"
    ],
    "answer": 1,
    "explain": "The Bus Interface Unit fetches/handles memory while the Execution Unit decodes and executes, overlapping for speed."
   },
   {
    "q": "Why does the 8086 need segmentation?",
    "options": [
     "To slow down the clock",
     "To disable interrupts",
     "To reach a 1 MB address space using 16-bit registers",
     "To remove the need for a stack"
    ],
    "answer": 2,
    "explain": "Combining a 16-bit segment with a 16-bit offset gives a 20-bit physical address, covering 1 MB with only 16-bit registers."
   },
   {
    "q": "If CS = 3000H and IP = 0025H, what is the physical address?",
    "options": [
     "30025H",
     "3025H",
     "00025H",
     "30000H"
    ],
    "answer": 0,
    "explain": "Physical address = CS*16 + IP = 30000H + 0025H = 30025H."
   },
   {
    "q": "Which segment register points to the active stack area?",
    "options": [
     "SS",
     "ES",
     "CS",
     "DS"
    ],
    "answer": 0,
    "explain": "SS, the Stack Segment register, points to the memory area used for the stack."
   }
  ]
 },
 "microprocessors-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 8086 has four general-purpose 16-bit registers — AX, BX, CX, DX — each splittable into two 8-bit halves (AH/AL, BH/BL, and so on), plus pointer/index registers SI, DI, BP, SP used mainly for addressing memory. AX is the preferred Accumulator for arithmetic and I/O; CX is the default loop counter for LOOP instructions; BX often holds a base address."
    },
    {
     "type": "text",
     "text": "8086 addressing modes extend the 8085 idea to handle 16-bit offsets flexibly: register (MOV AX, BX), immediate (MOV AX, 0005H), direct (MOV AX, [1000H]), register-indirect (MOV AX, [BX]), and based/indexed modes that add a register to a displacement, like MOV AX, [BX+SI] or MOV AX, [BX+4]. These let a program walk through arrays and structures using one base pointer plus an offset."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; sum an array of words using based-indexed addressing\nMOV CX, 5        ; 5 elements to add\nMOV BX, 0        ; offset into the array, starts at 0\nMOV AX, 0        ; running total\nMOV SI, OFFSET ARRAY\nADDLOOP:\nADD AX, [SI+BX]  ; based-indexed: base SI + offset BX\nADD BX, 2        ; move to next word (2 bytes each)\nLOOP ADDLOOP     ; decrements CX, loops while CX <> 0"
    },
    {
     "type": "tip",
     "text": "LOOP is a built-in combo of DCR CX + JNZ — it automatically decrements CX and jumps back if CX is not yet zero, saving you two lines every time you write a counted loop."
    }
   ],
   "recap": "The 8086 general registers AX, BX, CX, DX split into 8-bit halves, with SI/DI/BP/SP for addressing; its addressing modes add based and indexed forms (like [BX+SI]) so programs can walk arrays with a base pointer plus offset."
  },
  "quiz": [
   {
    "q": "Which 8086 register is the default counter for the LOOP instruction?",
    "options": [
     "DX",
     "AX",
     "BX",
     "CX"
    ],
    "answer": 3,
    "explain": "LOOP always decrements CX and jumps if CX is not zero."
   },
   {
    "q": "What does MOV AX, [BX+SI] use as its addressing mode?",
    "options": [
     "Immediate",
     "Register",
     "Based-indexed",
     "Direct"
    ],
    "answer": 2,
    "explain": "Adding a base register (BX) to an index register (SI) to form the memory address is based-indexed addressing."
   },
   {
    "q": "What are AH and AL?",
    "options": [
     "Flags in the Flag register",
     "Segment registers",
     "The high and low 8-bit halves of the AX register",
     "Two separate 16-bit registers"
    ],
    "answer": 2,
    "explain": "AX splits into an upper byte AH and lower byte AL, letting programs work with 8-bit or 16-bit data."
   },
   {
    "q": "Why is a based-indexed addressing mode like [BX+SI] useful?",
    "options": [
     "It lets a program access array elements using a base pointer plus a moving offset",
     "It disables interrupts",
     "It halts the CPU",
     "It is only used for segment registers"
    ],
    "answer": 0,
    "explain": "Combining a base and an index lets code walk through arrays or structures without rewriting the address each time."
   }
  ]
 },
 "microprocessors-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Assembler directives are not instructions the CPU executes — they are instructions to the assembler program itself, telling it how to lay out memory. Common ones: DB (Define Byte), DW (Define Word), ORG (set the starting address), END (mark the end of the source), and EQU (give a constant a name)."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": ".DATA\nCOUNT   EQU 5             ; a named constant, not a memory location\nARRAY   DW 10, 20, 30, 40, 50 ; 5 words reserved and initialised\nMSG     DB 'HELLO$'        ; a byte string, DOS-style $ terminator\n\n.CODE\nORG 100H                  ; program starts loading at offset 100H\nMOV CX, COUNT\nMOV BX, 0\nMOV AX, 0\nADDLOOP:\nADD AX, ARRAY[BX]\nADD BX, 2\nLOOP ADDLOOP\nHLT\nEND"
    },
    {
     "type": "text",
     "text": "A full assembly program usually has clear sections: a data segment for variables (DB/DW), a code segment for the actual instructions, and directives that glue them together. Assembling turns this readable source into machine code (object code); linking then resolves addresses so it can actually run."
    },
    {
     "type": "tip",
     "text": "EQU does not reserve memory — it is just a label swapped for its value at assembly time, like a #define in C. DB and DW do reserve real memory, one byte or one word per item respectively."
    },
    {
     "type": "text",
     "text": "Two-pass assembly is why label references work even before they're defined: Pass 1 scans the whole file just to build a symbol table (label to address), and Pass 2 actually generates machine code, now able to resolve every forward reference like JMP FORWARD_LABEL."
    }
   ],
   "recap": "Assembler directives (DB, DW, ORG, EQU, END) tell the assembler how to lay out memory rather than telling the CPU what to do; two-pass assembly builds a symbol table first so forward label references resolve correctly."
  },
  "quiz": [
   {
    "q": "What is the key difference between an instruction and an assembler directive?",
    "options": [
     "Directives run faster than instructions",
     "Directives are only used in C, not assembly",
     "There is no difference",
     "An instruction is executed by the CPU; a directive only guides the assembler while building the program"
    ],
    "answer": 3,
    "explain": "Directives like DB, DW, ORG never become CPU opcodes — they control how the assembler lays out and builds the code."
   },
   {
    "q": "What does EQU do?",
    "options": [
     "Marks the end of the program",
     "Reserves a word of memory",
     "Reserves a byte of memory",
     "Assigns a name to a constant value without reserving memory"
    ],
    "answer": 3,
    "explain": "EQU just substitutes a name for a fixed value at assembly time — no memory is set aside."
   },
   {
    "q": "Why does two-pass assembly exist?",
    "options": [
     "To detect syntax errors only",
     "To make assembly slower on purpose",
     "Because the CPU requires two clock cycles per instruction",
     "So the assembler can build a symbol table on pass 1 and resolve forward label references on pass 2"
    ],
    "answer": 3,
    "explain": "Pass 1 records every label's address; pass 2 uses that table to correctly fill in jumps to labels defined later in the file."
   },
   {
    "q": "What does DW 10, 20, 30 reserve?",
    "options": [
     "Nothing, DW is not a valid directive",
     "Three words (16-bit values) initialised to 10, 20, and 30",
     "Three bytes",
     "A single constant equal to 60"
    ],
    "answer": 1,
    "explain": "DW defines words; listing three values reserves three consecutive 16-bit memory locations."
   }
  ]
 },
 "microprocessors-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Moving a large block of data (like from a disk to RAM) one byte at a time through the CPU, via IN/OUT and MOV instructions, wastes the CPU's time on pure data shuffling. Direct Memory Access (DMA) lets a dedicated controller chip move data directly between an I/O device and memory, without the CPU touching every byte."
    },
    {
     "type": "text",
     "text": "The DMA controller (like Intel's 8257) requests the bus from the CPU using a HOLD signal. The CPU finishes its current bus cycle, then responds with HLDA (Hold Acknowledge) and floats its address/data/control lines, handing the bus over. The DMA controller then drives the bus itself to transfer data, and returns control to the CPU when done."
    },
    {
     "type": "tip",
     "text": "Remember the handshake pair: HOLD is the DMA controller asking, HLDA is the CPU granting. Mixing these up (which signal comes from which chip) is a common exam slip."
    },
    {
     "type": "text",
     "text": "There are three DMA transfer modes. Burst mode grabs the bus and moves the entire block in one uninterrupted stretch, fastest but it can starve the CPU for a while. Cycle stealing mode moves a little data, gives the bus back, waits, and repeats — sharing bus time more fairly. Interleaved mode uses only the moments the CPU isn't using the bus, causing no perceivable CPU slowdown at all."
    },
    {
     "type": "text",
     "text": "DMA matters in real systems constantly: disk controllers, network cards, and sound cards all use it so that transferring megabytes of data barely touches CPU load, leaving the processor free to keep running other work."
    }
   ],
   "recap": "DMA lets a dedicated controller move data directly between I/O and memory using a HOLD/HLDA handshake with the CPU, in burst, cycle-stealing, or interleaved modes, freeing the CPU from byte-by-byte transfer work."
  },
  "quiz": [
   {
    "q": "What problem does DMA solve?",
    "options": [
     "It avoids the CPU spending time moving every byte of a large data transfer itself",
     "It makes the clock faster",
     "It increases the instruction set size",
     "It removes the need for interrupts"
    ],
    "answer": 0,
    "explain": "DMA offloads bulk data movement to a dedicated controller so the CPU is free to do other work."
   },
   {
    "q": "Which signal does the CPU use to grant the bus to the DMA controller?",
    "options": [
     "HOLD",
     "INTR",
     "HLDA",
     "RD"
    ],
    "answer": 2,
    "explain": "HLDA (Hold Acknowledge) is sent by the CPU to confirm it has released the bus."
   },
   {
    "q": "Which DMA mode transfers the whole data block in one uninterrupted stretch?",
    "options": [
     "Polling mode",
     "Burst mode",
     "Cycle stealing",
     "Interleaved"
    ],
    "answer": 1,
    "explain": "Burst mode holds the bus continuously until the entire transfer finishes, for maximum speed."
   },
   {
    "q": "Which chip initiates a DMA request?",
    "options": [
     "The interrupt controller",
     "The CPU always initiates it",
     "The Stack Pointer",
     "The DMA controller, by asserting HOLD"
    ],
    "answer": 3,
    "explain": "The DMA controller raises HOLD to ask the CPU for the bus before it can start transferring data."
   }
  ]
 },
 "microprocessors-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A microprocessor can't directly wire up every keyboard, switch, or LED array it needs to control — it needs a go-between chip. The 8255 Programmable Peripheral Interface (PPI) gives the CPU three 8-bit I/O ports, called Port A, Port B, and Port C, that can each be configured as input or output under software control."
    },
    {
     "type": "text",
     "text": "The 8255 is configured by writing a single byte, the Control Word, to its Control Register. Bits in that byte choose the mode (Mode 0 for simple I/O, Mode 1 for handshaken I/O, Mode 2 for bidirectional bus) and set each port's direction. Port C is special: it can even split into two 4-bit halves used as separate control/status lines when Mode 1 or 2 handshaking is active."
    },
    {
     "type": "code",
     "lang": "asm",
     "code": "; configure 8255: Port A output, Port B input, Port C output, Mode 0\n; control word bit7=1 (select), bit6-5=00 (mode0 for A), bit4=0 (A out)\n; bit3=0 (C upper out), bit2=0 (mode0 for B), bit1=1 (B in), bit0=0 (C lower out)\nMVI A, 82H          ; the assembled control word\nOUT CONTROL_PORT    ; write it to the 8255's control register"
    },
    {
     "type": "tip",
     "text": "Mode 0 is 'basic I/O' — no handshaking, the port just holds whatever value was last written or read, useful for simple switches and LEDs. Mode 1 adds handshake lines (STB, IBF, ACK) so a port waits for a 'data ready' signal before reading — used for things like a real keyboard where timing isn't guaranteed."
    },
    {
     "type": "text",
     "text": "This is the general pattern for peripheral chips: write a control word to configure behaviour, then read or write the data ports as if they were ordinary memory or I/O locations. The same idea reappears in the 8253 timer and 8251 serial chip you'll meet next."
    }
   ],
   "recap": "The 8255 PPI gives a microprocessor three configurable 8-bit ports (A, B, C); a single Control Word sets each port's direction and mode (0 for simple I/O, 1 for handshaken I/O, 2 for bidirectional), letting the CPU talk to real-world devices."
  },
  "quiz": [
   {
    "q": "What is the 8255 used for?",
    "options": [
     "Storing program instructions",
     "Providing configurable parallel I/O ports so the CPU can interface with external devices",
     "Generating the system clock",
     "Managing DMA transfers only"
    ],
    "answer": 1,
    "explain": "The 8255 is a Programmable Peripheral Interface that exposes ports A, B, and C for parallel I/O."
   },
   {
    "q": "How is the 8255's mode and port direction set?",
    "options": [
     "By writing a Control Word to its Control Register",
     "By sending an interrupt",
     "By physically rewiring the chip",
     "It is fixed at manufacture and cannot change"
    ],
    "answer": 0,
    "explain": "A single Control Word, written by software, configures each port's mode and direction."
   },
   {
    "q": "What makes Mode 1 different from Mode 0 on the 8255?",
    "options": [
     "Mode 1 disables Port C entirely",
     "There is no difference",
     "Mode 1 is only for output, never input",
     "Mode 1 adds handshaking signals like STB and ACK for synchronised transfers"
    ],
    "answer": 3,
    "explain": "Mode 1 introduces handshake lines so data transfer is synchronised with an external device's readiness."
   },
   {
    "q": "Which port on the 8255 can split into two 4-bit halves for handshaking control lines?",
    "options": [
     "The Control Register",
     "Port C",
     "Port A",
     "Port B"
    ],
    "answer": 1,
    "explain": "Port C is unique in being splittable into upper and lower nibbles used as handshake/status lines."
   }
  ]
 },
 "microprocessors-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A microprocessor's clock ticks constantly, but counting those ticks in software wastes CPU time. The 8253/8254 Programmable Interval Timer offloads this: it has three independent 16-bit counters that count down clock pulses and can generate a signal (a square wave, a single pulse, or an interrupt) when they hit zero — used for real-time clocks, delays, and generating baud rates for serial ports."
    },
    {
     "type": "text",
     "text": "Each counter is set up with a Control Word choosing one of six modes. Mode 0 (interrupt on terminal count) counts down once and signals when it reaches zero — a simple one-shot delay. Mode 3 (square wave generator) produces a continuous, evenly repeating output — the classic way to generate a fixed frequency, like a UART's baud clock or a speaker tone."
    },
    {
     "type": "text",
     "text": "Serial communication sends data one bit at a time over a single wire, instead of parallel's 8 wires at once — slower per bit, but far simpler cabling over distance. The 8251 USART (Universal Synchronous/Asynchronous Receiver Transmitter) handles this: it converts parallel data from the CPU into a serial bit stream to send, and reassembles incoming serial bits back into parallel bytes to hand to the CPU."
    },
    {
     "type": "text",
     "text": "In asynchronous mode (the common case, like old RS-232 ports), each byte is wrapped with a start bit, the data bits, an optional parity bit for error checking, and one or more stop bits — this framing is how the receiver knows exactly where one byte ends and the next begins, without a shared clock signal running between the two devices."
    },
    {
     "type": "tip",
     "text": "Baud rate is bits per second on the serial line, not the same as the byte rate — with 1 start bit, 8 data bits, and 1 stop bit, sending one byte actually takes 10 bit-times, so a 9600 baud link sends roughly 960 bytes per second, not 9600."
    }
   ],
   "recap": "The 8253/8254 timer counts down clock pulses in configurable modes (one-shot or continuous square wave) to generate delays and baud clocks; the 8251 USART converts between parallel CPU data and a framed serial bit stream (start, data, parity, stop bits) for communication over fewer wires."
  },
  "quiz": [
   {
    "q": "What does the 8253/8254 timer chip primarily do?",
    "options": [
     "Store program instructions",
     "Count down clock pulses and generate signals or interrupts, offloading timing tasks from the CPU",
     "Manage the stack",
     "Convert parallel data to serial"
    ],
    "answer": 1,
    "explain": "The Programmable Interval Timer provides hardware counters so the CPU doesn't have to count clock ticks in software."
   },
   {
    "q": "Which 8253 mode produces a continuous, repeating output useful for generating a fixed frequency?",
    "options": [
     "Read-back mode",
     "Latch mode",
     "Mode 3, square wave generator",
     "Mode 0, interrupt on terminal count"
    ],
    "answer": 2,
    "explain": "Mode 3 produces a repeating square wave, ideal for clock or tone generation."
   },
   {
    "q": "What is the main job of the 8251 USART?",
    "options": [
     "Converting between parallel CPU data and a framed serial bit stream for transmission",
     "Generating the system clock",
     "Managing DMA transfers",
     "Providing the three timer counters"
    ],
    "answer": 0,
    "explain": "The USART serialises outgoing parallel data and deserialises incoming serial bits back into bytes."
   },
   {
    "q": "In asynchronous serial framing, what tells the receiver where a byte begins and ends?",
    "options": [
     "A shared external clock wire",
     "Nothing is needed, bytes arrive continuously with no gaps",
     "The baud rate alone",
     "Start bit, data bits, optional parity, and stop bit(s) framing each byte"
    ],
    "answer": 3,
    "explain": "The start/stop bit framing lets the receiver detect byte boundaries without needing a shared clock line."
   }
  ]
 },
 "microprocessors-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Interfacing memory to a microprocessor means wiring a RAM or ROM chip's address, data, and control pins to the CPU's buses so specific addresses reach that chip. Since a chip only has some of the address lines wired to it directly, address decoding logic (often simple gates, or a chip like the 74138 decoder) watches the remaining high-order address lines and enables the correct chip only when the CPU's address falls in that chip's range."
    },
    {
     "type": "text",
     "text": "There are two philosophies for talking to I/O devices. I/O-mapped I/O gives devices their own separate address space, reached only by IN and OUT instructions (the 8085 has 256 such I/O addresses) — completely separate from memory addresses, so a device at 'port 05H' and memory location '05H' never collide. Memory-mapped I/O instead treats a device's registers as if they were just memory locations, reachable with ordinary MOV/LDA/STA instructions."
    },
    {
     "type": "text",
     "text": "Memory-mapped I/O's big advantage is that every memory-touching instruction — not just IN/OUT — can now manipulate a device, which is more flexible and is what most modern CPUs (including ARM) use exclusively, having no separate I/O instructions at all. Its cost is that address space shared between real memory and devices is smaller for actual RAM/ROM."
    },
    {
     "type": "tip",
     "text": "Quick way to tell which scheme a system uses: if you see dedicated IN/OUT instructions with small port numbers, it's I/O-mapped. If devices show up as ordinary addresses accessed by MOV-family instructions, it's memory-mapped."
    },
    {
     "type": "text",
     "text": "Address decoding also matters for memory itself: if you have four 4K RAM chips to fill a 16K address space, the top 2 address lines select which of the four chips is active (via a 2-to-4 decoder), while the lower 12 lines go straight to every chip to pick the byte within it."
    }
   ],
   "recap": "Memory interfacing wires a chip's pins to the CPU's buses with address decoding logic selecting the right chip; I/O-mapped I/O uses a separate address space reached by IN/OUT, while memory-mapped I/O treats devices as ordinary memory addresses reachable by any data-transfer instruction."
  },
  "quiz": [
   {
    "q": "What is the role of address decoding logic in memory interfacing?",
    "options": [
     "It generates the system clock",
     "It converts serial data to parallel",
     "It enables the correct memory or I/O chip only when the CPU's address falls in that chip's range",
     "It stores the program permanently"
    ],
    "answer": 2,
    "explain": "Decoding logic watches the high-order address lines and selects exactly one chip for any given address."
   },
   {
    "q": "What distinguishes I/O-mapped I/O from memory-mapped I/O?",
    "options": [
     "Memory-mapped I/O requires no address decoding at all",
     "I/O-mapped I/O can use any instruction, memory-mapped cannot",
     "They are exactly the same thing",
     "I/O-mapped I/O uses a separate address space reached only via IN/OUT; memory-mapped I/O treats devices as ordinary memory addresses"
    ],
    "answer": 3,
    "explain": "I/O-mapped I/O keeps a separate address space for devices, accessed only with IN/OUT; memory-mapped I/O folds devices into the normal memory address range."
   },
   {
    "q": "What is a practical advantage of memory-mapped I/O?",
    "options": [
     "It disables interrupts automatically",
     "It requires no data bus",
     "It halves the clock speed",
     "Any memory-touching instruction, not just IN/OUT, can operate on a device, giving more flexibility"
    ],
    "answer": 3,
    "explain": "Because devices look like memory, the full instruction set (MOV, ADD, compare, etc.) can act on them directly."
   },
   {
    "q": "To fill a 16K space with four 4K RAM chips, how many address lines are needed to select which chip is active?",
    "options": [
     "1",
     "2",
     "12",
     "4"
    ],
    "answer": 1,
    "explain": "2 address lines can select among 4 chips (2^2 = 4), while the remaining 12 lines address the byte within the chosen chip."
   }
  ]
 },
 "microprocessors-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 8051 is the classic 8-bit microcontroller that made the microprocessor-vs-microcontroller idea concrete for millions of engineers. On one chip it packs an 8-bit CPU, 4 KB of on-chip ROM for the program, 128 bytes of on-chip RAM for data, four 8-bit I/O ports (P0-P3), two 16-bit timers, and a serial port — everything a small embedded job needs, with no external chips required."
    },
    {
     "type": "text",
     "text": "Its 128 bytes of RAM are organised in a specific way for programmer convenience: the lowest 32 bytes form four banks of eight general-purpose registers (R0-R7), the next 16 bytes are bit-addressable (individual bits can be set/cleared directly, handy for flags and single I/O pins), and the rest is general-purpose scratch RAM."
    },
    {
     "type": "text",
     "text": "The 8051 has a dedicated Special Function Register (SFR) area mapped just above the RAM, holding registers like the Accumulator (A), Program Status Word (PSW, holding flags plus the active register bank selection), the ports (P0-P3), and the timer/serial control registers — configuring a peripheral is just writing the right SFR."
    },
    {
     "type": "tip",
     "text": "Because it has separate program memory (ROM/Flash) and data memory (RAM) with distinct address spaces and access instructions (MOVC for code memory, MOV for internal RAM), the 8051 is a Harvard architecture design, unlike the 8086's Von Neumann style shared memory."
    },
    {
     "type": "text",
     "text": "This exact chip family — or its many modern descendants — still ships inside huge volumes of appliances, sensors, and simple industrial controllers today, precisely because a fully self-contained, low-cost, low-power chip beats a general-purpose microprocessor for a single dedicated job."
    }
   ],
   "recap": "The 8051 packs an 8-bit CPU, 4 KB ROM, 128 bytes RAM (with register banks and bit-addressable space), 4 I/O ports, timers, and a serial port on a single chip; its Special Function Registers configure every peripheral, and its Harvard-style separate program/data memory distinguishes it from the 8086."
  },
  "quiz": [
   {
    "q": "What makes the 8051 a microcontroller rather than a bare microprocessor?",
    "options": [
     "It has no CPU at all",
     "It cannot execute any instructions",
     "It integrates CPU, ROM, RAM, I/O ports, timers, and a serial port on one chip",
     "It only runs at very high clock speeds"
    ],
    "answer": 2,
    "explain": "Packing CPU plus memory and peripherals onto a single chip is exactly what defines a microcontroller."
   },
   {
    "q": "What is special about the lowest 32 bytes of the 8051's internal RAM?",
    "options": [
     "They hold the interrupt vector table",
     "They are read-only",
     "They form four banks of general-purpose registers R0-R7",
     "They store the program code"
    ],
    "answer": 2,
    "explain": "The first 32 bytes are organised into four switchable banks of eight registers each, selected via bits in the PSW."
   },
   {
    "q": "What kind of architecture does the 8051 use for program vs data memory?",
    "options": [
     "Only data memory exists, no program memory",
     "Harvard, with separate program and data memory spaces",
     "It has no memory architecture",
     "Von Neumann, sharing one memory and bus"
    ],
    "answer": 1,
    "explain": "The 8051 keeps program memory (ROM/Flash) and data memory (RAM) separate, a Harvard-style design."
   },
   {
    "q": "What are Special Function Registers (SFRs) used for on the 8051?",
    "options": [
     "They configure and control on-chip peripherals like ports, timers, and the serial interface",
     "They are unused legacy addresses",
     "They only store the stack",
     "They hold the machine's clock signal directly"
    ],
    "answer": 0,
    "explain": "SFRs like PSW, ports P0-P3, and timer/serial control registers let software configure every built-in peripheral."
   }
  ]
 },
 "microprocessors-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 8086's simple two-stage overlap (fetch while executing) is the seed of an idea modern CPUs take much further: pipelining splits instruction processing into several stages — fetch, decode, execute, memory access, write-back — so that while one instruction executes, the next is decoding and the one after that is being fetched, all at once, like an assembly line."
    },
    {
     "type": "text",
     "text": "Pipelining doesn't always run smoothly — hazards stall it. A data hazard happens when an instruction needs a result the previous instruction hasn't finished computing yet. A control hazard happens at a branch: the CPU doesn't know which instruction to fetch next until the branch is resolved, so it may have to throw away wrongly-fetched instructions (a pipeline flush). A structural hazard happens when two instructions need the same hardware resource at once, like both wanting the same memory port in the same cycle."
    },
    {
     "type": "text",
     "text": "Modern CPUs fight these hazards with techniques an interviewer loves to ask about: branch prediction guesses which way a branch will go so fetching can continue speculatively instead of stalling; out-of-order execution lets independent later instructions run ahead while an earlier one waits on a slow operation; and cache memory (small, very fast memory sitting between CPU and main RAM, exploiting the fact that recently used data is likely to be reused) hides the huge speed gap between a fast CPU and slower main memory."
    },
    {
     "type": "tip",
     "text": "Classic interview one-liner: 'a data hazard is a false dependency stalling the pipeline; branch prediction and out-of-order execution exist specifically to keep the pipeline full despite hazards; a cache exists specifically to keep the pipeline fed with data as fast as it can consume it.'"
    },
    {
     "type": "text",
     "text": "The throughline across this whole subject is worth saying out loud: the 8085 taught the fetch-decode-execute idea in its rawest form; the 8086 added pipelining and bigger addressing; the 8051 showed how to package a CPU as a complete embedded system; and modern superscalar, out-of-order, cache-backed, multi-core processors are the same fetch-decode-execute idea, scaled up with decades of engineering to hide every slow step behind something else useful happening in parallel."
    }
   ],
   "recap": "Pipelining overlaps instruction stages for speed but suffers data, control, and structural hazards; branch prediction, out-of-order execution, and cache memory are the modern answers, and they are all just deeper versions of the fetch-decode-execute cycle you started this subject with."
  },
  "quiz": [
   {
    "q": "What is a data hazard in a pipeline?",
    "options": [
     "An instruction needing a result that a previous instruction hasn't finished computing yet",
     "A missing assembler directive",
     "A memory chip failure",
     "A branch instruction executing too slowly"
    ],
    "answer": 0,
    "explain": "A data hazard is exactly this kind of dependency stall — the pipeline must wait for the needed value."
   },
   {
    "q": "What causes a control hazard?",
    "options": [
     "Two instructions needing the same ALU at once",
     "Uncertainty over which instruction to fetch next until a branch is resolved",
     "Running out of registers",
     "A parity error in memory"
    ],
    "answer": 1,
    "explain": "Control hazards arise at branches, where the next fetch address isn't known until the branch outcome is decided."
   },
   {
    "q": "What is the main purpose of cache memory?",
    "options": [
     "To permanently store the operating system",
     "To bridge the speed gap between a fast CPU and slower main memory using small, very fast storage",
     "To generate interrupts",
     "To replace the need for registers"
    ],
    "answer": 1,
    "explain": "Cache exploits reused data to keep the CPU fed at close to its own speed, avoiding constant waits on slow RAM."
   },
   {
    "q": "What does out-of-order execution allow a CPU to do?",
    "options": [
     "Execute instructions in whatever order they appear in memory, always strictly in sequence",
     "Disable all interrupts permanently",
     "Skip the fetch stage entirely",
     "Let independent later instructions run ahead while an earlier instruction is stalled waiting on something slow"
    ],
    "answer": 3,
    "explain": "Out-of-order execution keeps the pipeline busy by running ready instructions ahead of a stalled one, then reordering results correctly."
   }
  ]
 }
}
