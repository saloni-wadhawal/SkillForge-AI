// Lesson text and quiz questions for "Digital Electronics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "digital-electronics-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Signals in the world come in two flavours. An analog signal changes smoothly and can take any value — like the volume knob on an old radio that slides through every level. A digital signal only ever sits at one of two fixed levels, usually called HIGH and LOW, or 1 and 0. There is no 'in between'; it is like a light switch that is either fully on or fully off."
    },
    {
     "type": "text",
     "text": "Computers are built on digital signals because two clean levels are easy to store, copy and check for errors. A tiny bit of noise won't turn a '1' into a '0', but it could change an analog value slightly. This reliability is why every modern chip speaks in 1s and 0s."
    },
    {
     "type": "text",
     "text": "A single 1-or-0 value is called a bit (binary digit). Group 8 bits together and you get a byte. Binary is a base-2 number system: instead of the ten symbols 0-9 you know from decimal, it uses just two symbols, 0 and 1. Each position is worth twice the one to its right: 1, 2, 4, 8, 16, and so on."
    },
    {
     "type": "text",
     "text": "To read a binary number, add up the position values wherever there is a 1. For example 1011 means 8 + 0 + 2 + 1 = 11 in decimal. Counting up in binary goes 0, 1, 10, 11, 100, 101 — you 'carry over' as soon as you run out of the two symbols, just like decimal carries after 9."
    },
    {
     "type": "tip",
     "text": "Analogy: decimal is a 10-fingered way to count, binary is a 2-fingered way. Same idea, fewer symbols — a switch only has two states, so binary fits electronics perfectly."
    }
   ],
   "recap": "Analog is smooth and continuous; digital is two clean levels (1/0). Computers use binary because two states are reliable, and each binary position is worth double the one to its right."
  },
  "quiz": [
   {
    "q": "What is the main difference between an analog and a digital signal?",
    "options": [
     "Analog is faster than digital",
     "Digital can take any value; analog only two",
     "Analog varies smoothly; digital has two fixed levels",
     "There is no real difference"
    ],
    "answer": 2,
    "explain": "Analog signals change continuously through all values, while digital signals only sit at two fixed levels (1 or 0)."
   },
   {
    "q": "What is the decimal value of the binary number 1011?",
    "options": [
     "13",
     "9",
     "7",
     "11"
    ],
    "answer": 3,
    "explain": "1011 = 8 + 0 + 2 + 1 = 11."
   },
   {
    "q": "Why do computers prefer digital signals?",
    "options": [
     "They look nicer on screen",
     "Two clean levels resist noise and are easy to store",
     "Digital uses more electricity",
     "Analog signals are illegal in chips"
    ],
    "answer": 1,
    "explain": "Having only two levels makes digital signals reliable and hard to corrupt with small amounts of noise."
   },
   {
    "q": "How many bits are in one byte?",
    "options": [
     "8",
     "4",
     "2",
     "16"
    ],
    "answer": 0,
    "explain": "A byte is a group of 8 bits."
   }
  ]
 },
 "digital-electronics-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Logic gates are the tiny decision-makers of a digital circuit. Each gate takes one or more binary inputs and produces a single binary output by following a fixed rule. Chain thousands of them together and you can build anything from a calculator to a whole CPU. The three most basic gates are AND, OR and NOT."
    },
    {
     "type": "text",
     "text": "An AND gate outputs 1 only when ALL of its inputs are 1. Think of two switches wired in series to a lamp: the lamp lights only if the first AND the second switch are both closed. If any input is 0, the output is 0."
    },
    {
     "type": "text",
     "text": "An OR gate outputs 1 when AT LEAST ONE input is 1. Picture two switches wired in parallel: closing either switch — or both — lights the lamp. The output is 0 only when every input is 0."
    },
    {
     "type": "text",
     "text": "A NOT gate (also called an inverter) has a single input and simply flips it: 1 becomes 0 and 0 becomes 1. We show inversion with a small bar or an apostrophe, so NOT A is written A' or A-bar. We describe a gate's full behaviour with a truth table that lists every input combination and its output."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "A B | AND | OR\n0 0 |  0  | 0\n0 1 |  0  | 1\n1 0 |  0  | 1\n1 1 |  1  | 1\n\nA | NOT\n0 |  1\n1 |  0"
    },
    {
     "type": "tip",
     "text": "Memory hook: AND is fussy (it needs everything to be 1), OR is easy-going (one 1 is enough), and NOT is the contrarian (it always disagrees)."
    }
   ],
   "recap": "AND outputs 1 only when all inputs are 1; OR outputs 1 when at least one input is 1; NOT flips its single input. A truth table lists every input/output combination."
  },
  "quiz": [
   {
    "q": "An AND gate outputs 1 when...",
    "options": [
     "Any one input is 1",
     "Exactly one input is 1",
     "All inputs are 1",
     "All inputs are 0"
    ],
    "answer": 2,
    "explain": "AND requires every input to be 1 before its output becomes 1."
   },
   {
    "q": "What does a NOT gate do to an input of 0?",
    "options": [
     "Makes it 1",
     "Doubles it",
     "Nothing",
     "Keeps it 0"
    ],
    "answer": 0,
    "explain": "A NOT gate inverts its input, so 0 becomes 1."
   },
   {
    "q": "For an OR gate, which input combination gives an output of 0?",
    "options": [
     "1 and 1",
     "0 and 1",
     "0 and 0",
     "1 and 0"
    ],
    "answer": 2,
    "explain": "OR outputs 0 only when all of its inputs are 0."
   },
   {
    "q": "What is a truth table used for?",
    "options": [
     "To count how many gates a chip has",
     "To list every input combination and its output",
     "To convert decimal to binary",
     "To measure voltage"
    ],
    "answer": 1,
    "explain": "A truth table describes a gate or circuit by showing the output for every possible set of inputs."
   }
  ]
 },
 "digital-electronics-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once you know AND, OR and NOT, three more gates unlock a lot of power. NAND and NOR are simply the basic gates with a NOT stuck on the output, and XOR is a clever 'difference detector'. In circuit symbols, that added inversion is drawn as a small bubble on the gate's output."
    },
    {
     "type": "text",
     "text": "A NAND gate is NOT-AND: it does an AND, then flips the result. So its output is 0 only when all inputs are 1, and 1 in every other case. A NOR gate is NOT-OR: it does an OR, then flips it, so its output is 1 only when all inputs are 0."
    },
    {
     "type": "text",
     "text": "XOR (exclusive-OR) outputs 1 when its inputs are DIFFERENT and 0 when they are the SAME. With two inputs, 0 and 1 (or 1 and 0) give 1, while 0-0 and 1-1 give 0. This 'are they different?' behaviour makes XOR essential for adders, parity checks and simple encryption."
    },
    {
     "type": "text",
     "text": "NAND and NOR are called universal gates because you can build ANY other gate — AND, OR, NOT, even XOR — using only copies of one of them. That is a huge deal for chip makers, who can manufacture a whole processor from a single repeated gate type."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "A B | NAND | NOR | XOR\n0 0 |  1   |  1  |  0\n0 1 |  1   |  0  |  1\n1 0 |  1   |  0  |  1\n1 1 |  0   |  0  |  0"
    },
    {
     "type": "tip",
     "text": "Trick to remember XOR: it is the 'odd one out' gate — output is 1 only when the inputs disagree."
    }
   ],
   "recap": "NAND = NOT-AND, NOR = NOT-OR, and XOR outputs 1 only when inputs differ. NAND and NOR are universal — every other gate can be built from either one alone."
  },
  "quiz": [
   {
    "q": "A NAND gate outputs 0 only when...",
    "options": [
     "All inputs are 0",
     "Inputs differ",
     "Any input is 1",
     "All inputs are 1"
    ],
    "answer": 3,
    "explain": "NAND is AND then inverted, so it gives 0 only when the AND would have given 1 (all inputs 1)."
   },
   {
    "q": "What does an XOR gate output when both inputs are 1?",
    "options": [
     "1",
     "It depends",
     "0",
     "Undefined"
    ],
    "answer": 2,
    "explain": "XOR outputs 1 only when inputs differ; 1 and 1 are the same, so the output is 0."
   },
   {
    "q": "Why are NAND and NOR called 'universal' gates?",
    "options": [
     "They are the fastest gates",
     "Any other gate can be built from just one of them",
     "They use no power",
     "They work only in universities"
    ],
    "answer": 1,
    "explain": "Using only NANDs (or only NORs) you can construct AND, OR, NOT and every other logic function."
   },
   {
    "q": "A NOR gate outputs 1 when...",
    "options": [
     "All inputs are 0",
     "Inputs are different",
     "All inputs are 1",
     "Any input is 1"
    ],
    "answer": 0,
    "explain": "NOR is OR then inverted, so its output is 1 only when every input is 0."
   }
  ]
 },
 "digital-electronics-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Boolean algebra is the maths of true and false — the language we use to write and simplify logic circuits on paper before building them. Variables can only be 0 or 1. We write AND as a multiply (A·B or just AB), OR as a plus (A + B), and NOT as a bar or apostrophe (A' means NOT A). Simplifying an expression means fewer gates, which means a cheaper, faster chip."
    },
    {
     "type": "text",
     "text": "A few identities do most of the work. AND rules: A·1 = A, A·0 = 0, A·A = A, and A·A' = 0. OR rules: A + 0 = A, A + 1 = 1, A + A = A, and A + A' = 1. Notice how a variable combined with its own opposite always collapses to a fixed value."
    },
    {
     "type": "text",
     "text": "Two laws are especially handy. The distributive law lets you factor: A·B + A·C = A·(B + C). The absorption law removes redundancy: A + A·B = A, because if A already makes the expression 1, the extra A·B term adds nothing."
    },
    {
     "type": "text",
     "text": "De Morgan's theorems let you swap AND for OR by pushing a NOT through: (A·B)' = A' + B', and (A + B)' = A'·B'. In plain words: 'not (A and B)' is the same as 'not-A or not-B'. This is how you convert a circuit into all-NAND or all-NOR form."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Simplify: F = A·B + A·B'\n\nF = A·(B + B')   (distributive / factor out A)\nF = A·(1)        (B + B' = 1)\nF = A            (A·1 = A)\n\nTwo gates reduced to a plain wire!"
    },
    {
     "type": "tip",
     "text": "De Morgan shortcut: to invert a whole expression, flip every AND to OR (and vice versa) and NOT each variable. Break the bar, change the sign."
    }
   ],
   "recap": "Boolean algebra uses + for OR, · for AND and ' for NOT. Identities and De Morgan's theorems simplify expressions so a circuit uses fewer gates."
  },
  "quiz": [
   {
    "q": "Using Boolean identities, what does A + A·B simplify to?",
    "options": [
     "A·B",
     "B",
     "A",
     "1"
    ],
    "answer": 2,
    "explain": "By the absorption law, A + A·B = A, since A alone already determines the result."
   },
   {
    "q": "De Morgan's theorem says (A·B)' equals...",
    "options": [
     "A + B",
     "A' + B'",
     "A' · B'",
     "A · B"
    ],
    "answer": 1,
    "explain": "(A·B)' = A' + B': the NOT distributes and the AND becomes an OR."
   },
   {
    "q": "What is the value of A + A' ?",
    "options": [
     "0",
     "1",
     "A'",
     "A"
    ],
    "answer": 1,
    "explain": "A OR NOT-A always covers both possibilities, so the result is always 1."
   },
   {
    "q": "In Boolean algebra, the symbol '+' represents which operation?",
    "options": [
     "NOT",
     "AND",
     "XOR",
     "OR"
    ],
    "answer": 3,
    "explain": "The plus sign stands for the OR operation in Boolean algebra."
   }
  ]
 },
 "digital-electronics-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A combinational circuit is one whose output depends only on the current inputs — it has no memory of the past. Feed it the same inputs and you always get the same outputs, instantly (after a tiny gate delay). Adders, multiplexers and decoders are all combinational. This lesson builds the circuit that lets computers do arithmetic: the adder."
    },
    {
     "type": "text",
     "text": "Start with the half adder, which adds two single bits, A and B. Adding 1 + 1 in binary gives 10, so we need two output bits: a Sum and a Carry. The Sum is 1 when the inputs differ — that is exactly XOR. The Carry is 1 only when both inputs are 1 — that is exactly AND. So a half adder is just one XOR gate and one AND gate."
    },
    {
     "type": "text",
     "text": "The half adder can't accept a carry coming IN from a lower position, so it can't be chained. The full adder fixes this by taking three inputs: A, B, and Carry-in (Cin). It still produces a Sum and a Carry-out. Sum = A XOR B XOR Cin, and Carry-out is 1 whenever at least two of the three inputs are 1."
    },
    {
     "type": "text",
     "text": "To add multi-bit numbers, chain full adders together: the Carry-out of one bit becomes the Carry-in of the next. Four full adders in a row can add two 4-bit numbers. This design is called a ripple-carry adder, because the carry 'ripples' from the lowest bit up to the highest — the same way you carry digits when adding by hand."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Half adder truth table:\nA B | Sum(=A XOR B) | Carry(=A AND B)\n0 0 |      0        |      0\n0 1 |      1        |      0\n1 0 |      1        |      0\n1 1 |      0        |      1"
    },
    {
     "type": "tip",
     "text": "Analogy: adding binary is just like adding decimal by hand — write the sum digit, carry the overflow to the next column. A full adder is one column of that process."
    }
   ],
   "recap": "Combinational circuits depend only on current inputs. A half adder (XOR + AND) adds two bits; a full adder adds three (including a carry-in) and chains into a ripple-carry adder for multi-bit addition."
  },
  "quiz": [
   {
    "q": "Which two gates make up a half adder?",
    "options": [
     "OR and NOT",
     "NAND and NOR",
     "XOR (Sum) and AND (Carry)",
     "Two ANDs"
    ],
    "answer": 2,
    "explain": "The Sum output is A XOR B and the Carry output is A AND B."
   },
   {
    "q": "What extra input does a full adder have compared to a half adder?",
    "options": [
     "A reset",
     "A carry-in",
     "A second sum",
     "A clock"
    ],
    "answer": 1,
    "explain": "A full adder adds a third input, the carry-in, so adders can be chained together."
   },
   {
    "q": "A combinational circuit's output depends on...",
    "options": [
     "Only the current inputs",
     "A clock signal",
     "Random noise",
     "Past inputs stored in memory"
    ],
    "answer": 0,
    "explain": "Combinational logic has no memory; its output is fixed by the present inputs alone."
   },
   {
    "q": "In a ripple-carry adder, what connects one full adder to the next?",
    "options": [
     "Nothing, they are separate",
     "A clock line",
     "The sum bit",
     "The carry-out feeds the next carry-in"
    ],
    "answer": 3,
    "explain": "Each stage's carry-out becomes the carry-in of the next higher bit, letting the carry ripple upward."
   }
  ]
 },
 "digital-electronics-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Combinational circuits forget everything the instant inputs change. To build memory, we need sequential circuits that can REMEMBER a bit. The basic memory element is a latch, and its clock-controlled cousin is the flip-flop. One of these stores exactly one bit — the fundamental unit of every register and RAM cell."
    },
    {
     "type": "text",
     "text": "The simplest memory is the SR latch (Set-Reset), built from two cross-coupled NOR or NAND gates, each feeding the other's input. Set makes the stored bit 1, Reset makes it 0, and when both inputs are inactive the latch HOLDS its last value. Driving Set and Reset both active at once is forbidden — it leaves the output undefined."
    },
    {
     "type": "text",
     "text": "In a real computer, thousands of memory cells must all update in step. A clock — a signal that ticks 0,1,0,1 millions of times a second — provides that heartbeat. A flip-flop is a latch that only changes on a clock edge (the moment the clock rises from 0 to 1). Edge-triggering keeps the whole system synchronised."
    },
    {
     "type": "text",
     "text": "The most-used flip-flop is the D (Data) flip-flop. It has one data input D and one clock input. On each rising clock edge it copies D to its output Q and holds that value until the next edge. In short: 'whatever D is at the tick, Q becomes and stays'. The JK flip-flop is a more flexible version that can also toggle (flip its output) when both its inputs are 1."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "D flip-flop behaviour (on rising clock edge):\nClock edge | D | Q(next)\n   rise    | 0 |   0\n   rise    | 1 |   1\n  no edge  | x | Q holds (unchanged)"
    },
    {
     "type": "tip",
     "text": "Latch vs flip-flop: a latch is 'level' controlled (open while the enable is held), a flip-flop is 'edge' controlled (snaps only at the clock tick). Think door held open vs a camera shutter that captures one instant."
    }
   ],
   "recap": "Sequential circuits remember bits. An SR latch holds one bit but forbids Set+Reset together; a flip-flop updates only on a clock edge; the D flip-flop copies D to Q each tick — the building block of registers and memory."
  },
  "quiz": [
   {
    "q": "What is the key difference between combinational and sequential circuits?",
    "options": [
     "Sequential circuits can store/remember bits",
     "Combinational circuits use a clock",
     "Sequential circuits have no inputs",
     "They are the same thing"
    ],
    "answer": 0,
    "explain": "Sequential circuits have memory (state), while combinational circuits depend only on present inputs."
   },
   {
    "q": "On a rising clock edge, a D flip-flop makes Q equal to...",
    "options": [
     "The clock value",
     "The old Q",
     "Always 1",
     "The value of D"
    ],
    "answer": 3,
    "explain": "A D flip-flop captures the D input at the clock edge and holds it on Q."
   },
   {
    "q": "Which input combination is forbidden on a basic SR latch?",
    "options": [
     "Set=1, Reset=1",
     "Set=0, Reset=1",
     "Set=1, Reset=0",
     "Set=0, Reset=0"
    ],
    "answer": 0,
    "explain": "Activating both Set and Reset at once leaves the latch output undefined, so it is not allowed."
   },
   {
    "q": "What does a clock signal provide in a sequential circuit?",
    "options": [
     "A synchronised timing heartbeat for updates",
     "Random values",
     "The stored data",
     "Extra voltage"
    ],
    "answer": 0,
    "explain": "The clock's regular ticks keep all flip-flops updating in step with each other."
   }
  ]
 },
 "digital-electronics-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Chain flip-flops together and you get the workhorses of every processor: registers and counters. A register is a row of flip-flops that stores a multi-bit number as one unit — four D flip-flops hold a 4-bit value, eight hold a byte. On each clock edge the whole group captures new data at once. The CPU registers that hold your program's variables are exactly this."
    },
    {
     "type": "text",
     "text": "A shift register moves its stored bits sideways by one position on every clock tick. Serial-in data enters one end and marches through, bit by bit. Shift registers convert between serial data (one wire, one bit at a time) and parallel data (many wires at once) — vital for communication ports, and a left-shift also cheaply multiplies a binary number by two."
    },
    {
     "type": "text",
     "text": "A counter is flip-flops wired to step through a sequence of numbers, usually counting up 0,1,2,3… in binary. In an asynchronous (ripple) counter, each flip-flop's output clocks the next, so bits toggle one after another — simple but the changes ripple with a small delay. In a synchronous counter, every flip-flop shares the same clock and updates together, which is faster and glitch-free at high speeds."
    },
    {
     "type": "text",
     "text": "Counters are everywhere: they generate memory addresses, divide a clock down to slower rates, keep time in digital clocks, and drive the program counter that tracks which instruction runs next. A modulo-N counter resets after N counts — a mod-10 counter cycles 0-9 then rolls back to 0, perfect for a decimal digit display. This is where gates, flip-flops and timing all come together into real computing hardware."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "3-bit synchronous up-counter output (Q2 Q1 Q0) per clock tick:\ntick 0 -> 000  (0)\ntick 1 -> 001  (1)\ntick 2 -> 010  (2)\ntick 3 -> 011  (3)\ntick 4 -> 100  (4)\n...\ntick 7 -> 111  (7)\ntick 8 -> 000  (rolls over)"
    },
    {
     "type": "tip",
     "text": "Async vs sync counter analogy: async is a row of dominoes toppling one after another (delay adds up); sync is a marching band stepping on the same beat (all move together, cleaner at speed)."
    }
   ],
   "recap": "Registers are groups of flip-flops storing a multi-bit value; shift registers slide bits to convert serial/parallel; counters step through binary sequences (ripple/async vs synchronous). Together they form the memory and timing backbone of a CPU."
  },
  "quiz": [
   {
    "q": "What is a register in digital electronics?",
    "options": [
     "A single logic gate",
     "A group of flip-flops storing a multi-bit value",
     "A type of resistor",
     "A combinational adder"
    ],
    "answer": 1,
    "explain": "A register is several flip-flops working as a unit to hold a multi-bit number."
   },
   {
    "q": "In a synchronous counter, the flip-flops...",
    "options": [
     "Each clock the next in a chain",
     "Never use a clock",
     "All share the same clock and update together",
     "Count only downward"
    ],
    "answer": 2,
    "explain": "Synchronous counters drive every flip-flop from the same clock, so they update simultaneously and avoid ripple delay."
   },
   {
    "q": "What does a shift register mainly do?",
    "options": [
     "Move stored bits one position each clock (serial/parallel conversion)",
     "Add two numbers",
     "Store nothing",
     "Invert all its bits"
    ],
    "answer": 0,
    "explain": "A shift register slides its bits sideways each clock tick, which is how it converts between serial and parallel data."
   },
   {
    "q": "A mod-10 counter counts through which sequence before rolling over?",
    "options": [
     "0 to 9",
     "0 to 15",
     "0 to 10",
     "1 to 10"
    ],
    "answer": 0,
    "explain": "A modulo-10 counter cycles through the ten values 0-9 and then resets to 0."
   }
  ]
 },
 "digital-electronics-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Binary is precise but a byte like 11010110 is hard on the eyes. Engineers use octal (base-8, digits 0-7) and hexadecimal (base-16, digits 0-9 then A-F for 10-15) as shorthand. Both are chosen because they line up neatly with binary: 3 binary bits make one octal digit, and 4 binary bits make one hex digit."
    },
    {
     "type": "text",
     "text": "To convert binary to hex, group the bits into 4s from the right and read each group as one hex digit. 1101 0110 becomes D6 (1101 = 13 = D, 0110 = 6). To go back, just expand each hex digit into its 4-bit binary pattern. Octal works the same way but in groups of 3 bits."
    },
    {
     "type": "text",
     "text": "To convert decimal to binary (or any base), repeatedly divide by the target base and read the remainders bottom to up. 13 in decimal: 13/2=6 r1, 6/2=3 r0, 3/2=1 r1, 1/2=0 r1 — reading remainders bottom-up gives 1101."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Binary   1101 0110\nGrouped  1101 | 0110\nHex        D  |  6   -> D6\n\nHex digit map:\n0000=0 0001=1 0010=2 0011=3\n0100=4 0101=5 0110=6 0111=7\n1000=8 1001=9 1010=A 1011=B\n1100=C 1101=D 1110=E 1111=F"
    },
    {
     "type": "tip",
     "text": "Hex is popular because it maps 1-to-1 to 4 bits with no leftover — memory addresses and colour codes (#FF00A0) are written in hex for exactly this reason. Always double-check your last group has a full set of bits; pad with leading zeros if it's short."
    }
   ],
   "recap": "Octal (base-8) and hex (base-16) are binary shorthand: group bits in 3s for octal, 4s for hex, and convert digit by digit. Decimal-to-any-base conversion uses repeated division, reading remainders from bottom to top."
  },
  "quiz": [
   {
    "q": "How many binary bits does one hexadecimal digit represent?",
    "options": [
     "3",
     "2",
     "8",
     "4"
    ],
    "answer": 3,
    "explain": "Hex has 16 symbols (0-F), and 2^4 = 16, so each hex digit exactly represents 4 binary bits."
   },
   {
    "q": "What is binary 1010 1100 in hexadecimal?",
    "options": [
     "2C",
     "CA",
     "A2",
     "AC"
    ],
    "answer": 3,
    "explain": "1010 = A and 1100 = C, so grouping gives AC."
   },
   {
    "q": "When converting decimal to binary by repeated division, in what order do you read the remainders?",
    "options": [
     "Top to bottom",
     "Bottom to top",
     "Left to right, ignoring order",
     "It doesn't matter"
    ],
    "answer": 1,
    "explain": "The first remainder produced is the least significant bit, so you must read remainders from the last one calculated back to the first (bottom to top)."
   }
  ]
 },
 "digital-electronics-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not every 'code' made of 1s and 0s means what plain binary means. A code is just an agreed mapping between a value and a bit pattern. BCD (Binary Coded Decimal) encodes each decimal digit separately in 4 bits: 47 becomes 0100 0111, not the binary value of 47. This keeps digit boundaries clean for displays and calculators."
    },
    {
     "type": "text",
     "text": "Gray code is a sequence where only one bit changes between consecutive values, unlike binary where many bits can flip at once (011 to 100 flips all three). This matters in rotary position sensors and counters, because if multiple bits change at slightly different instants, the circuit can briefly read a completely wrong value mid-transition."
    },
    {
     "type": "text",
     "text": "ASCII (American Standard Code for Information Interchange) is a code that maps letters, digits and symbols to 7-bit or 8-bit patterns, so text can be stored and moved as binary. The character 'A' is always 65 (binary 0100 0001), 'a' is 97 — this is why programming languages let you compare characters like numbers."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Binary vs Gray code (3-bit):\nDecimal  Binary  Gray\n0        000     000\n1        001     001\n2        010     011\n3        011     010\n4        100     110\n5        101     111\n6        110     101\n7        111     100\n(notice: only ONE bit changes between any two neighbouring Gray rows)"
    },
    {
     "type": "tip",
     "text": "Exam trap: BCD is NOT the same as straight binary for numbers 10 and above. 47 in binary is 101111, but in BCD it is 0100 0111 (two separate 4-bit digits). Always ask 'is this plain binary or a code?' before converting."
    }
   ],
   "recap": "BCD encodes each decimal digit in its own 4 bits; Gray code changes only one bit between neighbours, avoiding glitches in sensors and counters; ASCII maps characters to fixed binary patterns so computers can handle text."
  },
  "quiz": [
   {
    "q": "What is the key property of Gray code?",
    "options": [
     "It is the same as BCD",
     "Only one bit changes between consecutive values",
     "It uses fewer bits than binary",
     "It represents negative numbers"
    ],
    "answer": 1,
    "explain": "Gray code is designed so exactly one bit flips from one value to the next, which avoids momentary false readings in hardware."
   },
   {
    "q": "What is decimal 47 in BCD?",
    "options": [
     "0100 0111",
     "0010 1111",
     "101111",
     "0011 0111"
    ],
    "answer": 0,
    "explain": "BCD encodes each digit separately: 4 -> 0100 and 7 -> 0111, giving 0100 0111."
   },
   {
    "q": "In ASCII, what does the code for a character actually represent?",
    "options": [
     "The Gray code of the letter's position in the alphabet",
     "The character's decimal value in a different number base",
     "A fixed binary pattern agreed to stand for that character",
     "A compressed version of the character"
    ],
    "answer": 2,
    "explain": "ASCII is a lookup table: each character is simply assigned a specific binary pattern by convention, not derived mathematically from the letter."
   }
  ]
 },
 "digital-electronics-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Plain binary only represents positive numbers. To store negative numbers, digital systems use two's complement: the leftmost bit becomes a sign bit (0 for positive, 1 for negative), and negative values are stored in a special encoded form rather than just 'binary with a minus sign attached'."
    },
    {
     "type": "text",
     "text": "To find the two's complement of a number: flip every bit (this is called the one's complement), then add 1. For 4 bits, +5 is 0101. Flip it to get 1010, add 1 to get 1011 — that is -5 in two's complement. The trick works because it makes 5 + (-5) equal exactly 0 when added in binary, with the extra carry bit simply discarded."
    },
    {
     "type": "text",
     "text": "The huge benefit is that subtraction becomes addition: to compute A - B, the hardware just computes A + (two's complement of B). This means one adder circuit can handle both addition and subtraction — no separate subtractor circuit is needed anywhere in the CPU."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "4-bit example: compute 5 - 3 using two's complement addition\n5           =  0101\n3           =  0011\ntwo's comp of 3 (flip+1): 0011 -> 1100 -> 1101\nAdd: 0101 + 1101 = 1 0010\ndiscard the extra carry bit -> 0010 = 2  (correct: 5-3=2)"
    },
    {
     "type": "tip",
     "text": "Memory aid: 'flip and add one'. Also remember the range trap — an n-bit two's complement number ranges from -(2^(n-1)) to +(2^(n-1))-1, so 4 bits go from -8 to +7, not -8 to +8."
    }
   ],
   "recap": "Two's complement stores negative numbers by flipping all bits and adding 1, which lets one adder circuit handle both addition and subtraction. The leftmost bit acts as the sign bit."
  },
  "quiz": [
   {
    "q": "How do you form the two's complement of a binary number?",
    "options": [
     "Add 1, then flip every bit",
     "Flip every bit, then add 1",
     "Multiply the number by -1 in decimal, then convert",
     "Reverse the bit order"
    ],
    "answer": 1,
    "explain": "Two's complement is the one's complement (all bits flipped) plus 1."
   },
   {
    "q": "Why do CPUs use two's complement for negative numbers?",
    "options": [
     "It uses fewer bits than binary",
     "It looks neater than plain binary",
     "It lets subtraction be done using the same adder circuit as addition",
     "It is required for BCD arithmetic"
    ],
    "answer": 2,
    "explain": "A - B becomes A + (two's complement of B), so no separate subtractor hardware is needed."
   },
   {
    "q": "What is the range of values a 4-bit two's complement number can represent?",
    "options": [
     "-7 to +7",
     "0 to 15",
     "-15 to +15",
     "-8 to +7"
    ],
    "answer": 3,
    "explain": "With n=4 bits, the range is -(2^3) to +(2^3)-1, which is -8 to +7."
   }
  ]
 },
 "digital-electronics-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already learned Boolean algebra rules for simplifying expressions, but applying them by hand can be slow and error-prone for anything beyond 3 variables. A Karnaugh map (K-map) is a grid that lets you simplify a Boolean expression visually, by grouping 1s instead of juggling algebra rules."
    },
    {
     "type": "text",
     "text": "A K-map is built from a truth table, but its cells are arranged so that any two adjacent cells (including wrap-around edges) differ in only one variable — this is Gray code ordering again, and it's exactly why that ordering matters. You place a 1 in every cell where the output is true, then look for groups of 1s in sizes of 1, 2, 4, 8, always powers of two."
    },
    {
     "type": "text",
     "text": "Each group you circle becomes one simplified term: the bigger the group, the fewer variables that term needs, because a variable that changes value across the group can be dropped. Cover every 1 with the biggest and fewest groups possible, then OR all the group terms together for the final simplified expression."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "2-variable K-map for F = A'B + AB (A,B are inputs)\n        B=0   B=1\nA=0  |   0  |   1  |\nA=1  |   0  |   1  |\n\nThe right-hand column (B=1) is all 1s -> group of 2\nSimplified result: F = B   (A dropped, since it doesn't affect the group)"
    },
    {
     "type": "tip",
     "text": "Common mistake: forgetting that K-maps wrap around — the leftmost column is adjacent to the rightmost column, and the top row is adjacent to the bottom row, just like a torus. Missing wrap-around groups is the #1 reason K-map answers come out more complex than needed."
    }
   ],
   "recap": "A Karnaugh map arranges a truth table in a grid where neighbouring cells differ by one variable, letting you simplify Boolean expressions by circling groups of 1s (sizes 1, 2, 4, 8...) instead of applying algebra rules by hand."
  },
  "quiz": [
   {
    "q": "In a Karnaugh map, what must be true of any two adjacent cells?",
    "options": [
     "They must be in the same row",
     "They represent the same minterm",
     "They must both be 1",
     "They differ in exactly one variable's value"
    ],
    "answer": 3,
    "explain": "K-map cells are laid out in Gray-code order specifically so adjacent cells differ by only one variable, which is what allows grouping to eliminate that variable."
   },
   {
    "q": "What sizes of groups are valid when circling 1s in a K-map?",
    "options": [
     "Only groups of exactly 4",
     "Only single cells",
     "Powers of two: 1, 2, 4, 8...",
     "Any number of cells"
    ],
    "answer": 2,
    "explain": "Valid groups must be powers of two so that the eliminated variables cancel out cleanly across the group."
   },
   {
    "q": "Why should a K-map be treated as wrapping around at the edges?",
    "options": [
     "To make the map look symmetrical",
     "It's just a drawing convention with no real effect",
     "Because the first and last rows/columns are also adjacent in Gray code order",
     "Only 4-variable maps wrap around"
    ],
    "answer": 2,
    "explain": "The Gray-code ordering means the last column/row is only one variable away from the first, so valid groups can span across the edge."
   }
  ]
 },
 "digital-electronics-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A multiplexer (MUX) is a combinational circuit that picks one of several input signals and sends it to a single output, based on a set of select lines. Think of it as a rotary switch: with 2 select lines you can choose between 4 inputs (a 4-to-1 MUX), because 2 select bits give 2^2 = 4 possible choices."
    },
    {
     "type": "text",
     "text": "A demultiplexer (DEMUX) does the reverse: it takes one input signal and routes it to one of several outputs, chosen by the same kind of select lines. MUXes and DEMUXes are used in pairs to share one physical wire or bus among many signals — send several signals through a MUX onto one line, then a DEMUX at the other end sorts them back out."
    },
    {
     "type": "text",
     "text": "MUXes are also used to build arbitrary logic functions without extra gates: by feeding the truth table's output column into the MUX's data inputs and the function's variables into the select lines, you get any Boolean function 'for free' just by selecting. This makes MUX-based design a classic exam and interview technique."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "4-to-1 MUX truth table (S1 S0 select which input D0..D3 reaches Y)\nS1 S0 | Y\n 0  0 | D0\n 0  1 | D1\n 1  0 | D2\n 1  1 | D3"
    },
    {
     "type": "tip",
     "text": "Quick way to size a MUX/DEMUX: with n select lines you always get 2^n inputs (MUX) or outputs (DEMUX). A 3-select-line MUX is an 8-to-1 MUX, because 2^3 = 8."
    }
   ],
   "recap": "A multiplexer selects one of many inputs onto a single output using select lines; a demultiplexer routes one input to one of many outputs. Together they let many signals share one line, and a MUX alone can implement any Boolean function."
  },
  "quiz": [
   {
    "q": "What does a multiplexer do?",
    "options": [
     "Selects one of several inputs and sends it to a single output",
     "Converts binary to decimal",
     "Routes one input to many outputs",
     "Stores a multi-bit value"
    ],
    "answer": 0,
    "explain": "A MUX picks one of its data inputs, chosen by the select lines, and forwards it to the single output."
   },
   {
    "q": "With 3 select lines, how many inputs can a multiplexer choose from?",
    "options": [
     "3",
     "8",
     "16",
     "6"
    ],
    "answer": 1,
    "explain": "n select lines give 2^n choices; 2^3 = 8, so it's an 8-to-1 MUX."
   },
   {
    "q": "What is the relationship between a MUX and a DEMUX when sharing one line?",
    "options": [
     "A MUX combines many signals onto one line; a DEMUX at the other end separates them back out",
     "A DEMUX combines signals and a MUX separates them",
     "They cannot be used together",
     "They perform the exact same operation twice"
    ],
    "answer": 0,
    "explain": "The MUX funnels multiple signals onto a shared line, and a matching DEMUX on the receiving end routes each one back to its own destination."
   }
  ]
 },
 "digital-electronics-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A decoder takes a binary code on its input lines and activates exactly one of many output lines that corresponds to that code. A 2-to-4 decoder takes a 2-bit input and turns on one of 4 outputs — it is the mirror image of a MUX's select logic, and is used to pick one memory chip, one display digit, or one device out of many based on an address."
    },
    {
     "type": "text",
     "text": "An encoder does the opposite job: it watches many input lines, and when exactly one is active, it outputs the binary code corresponding to that line. An 8-to-3 encoder takes 8 input lines and produces a 3-bit code identifying which one is high — useful for things like a keypad, where you want to know which single key was pressed as a compact number."
    },
    {
     "type": "text",
     "text": "A basic encoder breaks if two inputs are active at once — it doesn't know which one 'wins'. A priority encoder fixes this by assigning each input a priority rank, so if multiple inputs are active simultaneously, it always outputs the code for the highest-priority one. This is exactly what happens inside an interrupt controller when several devices raise interrupts at once."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "2-to-4 decoder truth table (A1 A0 input -> one output high)\nA1 A0 | Y0 Y1 Y2 Y3\n 0  0 |  1  0  0  0\n 0  1 |  0  1  0  0\n 1  0 |  0  0  1  0\n 1  1 |  0  0  0  1"
    },
    {
     "type": "tip",
     "text": "Keep encoder and decoder straight by direction: 'de-code' turns a code back into one active line (like decoding a secret message into a single answer); an encoder does the reverse, turning one active line into a code."
    }
   ],
   "recap": "A decoder activates one output line based on a binary input code; an encoder does the reverse, producing a code from whichever single input line is active. A priority encoder handles the case where multiple inputs are active at once, as used in interrupt controllers."
  },
  "quiz": [
   {
    "q": "What does a decoder do?",
    "options": [
     "Converts one active input line into a binary code",
     "Stores a byte of data",
     "Adds two binary numbers",
     "Activates exactly one output line based on a binary input code"
    ],
    "answer": 3,
    "explain": "A decoder reads a binary code on its inputs and switches on the single matching output line."
   },
   {
    "q": "What problem does a priority encoder solve compared to a basic encoder?",
    "options": [
     "It removes the need for select lines",
     "It handles the case where more than one input is active at the same time",
     "It works with fewer input lines",
     "It converts decimal directly to hex"
    ],
    "answer": 1,
    "explain": "A basic encoder gives an undefined result if multiple inputs are high; a priority encoder always resolves this by choosing the highest-priority active input."
   },
   {
    "q": "Where would you realistically find a priority encoder being used?",
    "options": [
     "Inside a shift register",
     "Inside an ASCII lookup table",
     "In an interrupt controller resolving multiple simultaneous device requests",
     "In a Karnaugh map"
    ],
    "answer": 2,
    "explain": "When several hardware devices raise interrupts at once, a priority encoder is used to decide which one the CPU should service first."
   }
  ]
 },
 "digital-electronics-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A parity bit is a single extra bit added to a group of data bits so the total count of 1s is either always even (even parity) or always odd (odd parity). A parity generator computes and attaches this bit before sending data; a parity checker recomputes it at the receiving end and flags an error if the count no longer matches — a simple, cheap way to catch single-bit transmission errors."
    },
    {
     "type": "text",
     "text": "A magnitude comparator is a combinational circuit that compares two binary numbers and outputs whether A is greater than, equal to, or less than B. It's built from XOR/XNOR gates checking equality bit by bit, combined with logic that finds the highest-order bit where the numbers differ — that bit alone decides which number is larger."
    },
    {
     "type": "text",
     "text": "A code converter changes data from one code to another without changing its meaning — for example a BCD-to-binary converter, or a binary-to-Gray converter. These are built as ordinary combinational circuits: you write the truth table mapping input code to output code, then simplify it (often with a K-map) just like any other logic design problem."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Binary-to-Gray conversion rule (MSB to LSB):\nG(msb) = B(msb)\nG(i) = B(i) XOR B(i+1)   for every other bit\n\nExample: Binary 1011\nG3 = B3        = 1\nG2 = B2 XOR B3 = 0 XOR 1 = 1\nG1 = B1 XOR B2 = 1 XOR 0 = 1\nG0 = B0 XOR B1 = 1 XOR 1 = 0\nGray = 1110"
    },
    {
     "type": "tip",
     "text": "Exam favourite: parity can only DETECT a single-bit error, it cannot correct it and it cannot reliably detect an even number of bit errors (two flipped bits can cancel out and still look 'correct'). Don't confuse parity checking with error correction, which needs extra codes like Hamming code."
    }
   ],
   "recap": "Parity bits give a cheap way to detect single-bit transmission errors. Magnitude comparators tell which of two binary numbers is bigger using bit-by-bit comparison. Code converters map one binary code onto another and are designed like any other combinational circuit."
  },
  "quiz": [
   {
    "q": "What can a simple parity bit reliably detect?",
    "options": [
     "Any number of bit errors",
     "A single-bit error",
     "Which specific bit was flipped",
     "Errors in the clock signal"
    ],
    "answer": 1,
    "explain": "A single parity bit can only reliably flag a single-bit change; it cannot pinpoint which bit changed, and can miss two simultaneous flips."
   },
   {
    "q": "What does a magnitude comparator output?",
    "options": [
     "Whether one binary number is greater than, equal to, or less than another",
     "A parity bit",
     "The sum of two numbers",
     "The two's complement of a number"
    ],
    "answer": 0,
    "explain": "A magnitude comparator's job is purely comparison, producing greater-than, equal-to, or less-than signals for two input numbers."
   },
   {
    "q": "What is a code converter, in general terms?",
    "options": [
     "A circuit that only works with decimal numbers",
     "A circuit that maps one binary code to a different code representing the same value",
     "A type of flip-flop",
     "A circuit that stores data temporarily"
    ],
    "answer": 1,
    "explain": "Code converters like BCD-to-binary or binary-to-Gray change the representation of data without changing what it means, and are designed as ordinary combinational logic."
   }
  ]
 },
 "digital-electronics-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far you've built individual flip-flops and counters. A finite state machine (FSM) formalises sequential circuit design: the circuit is always in one of a fixed set of states, and on each clock tick it moves to a new state based on the current state and the current input. A traffic light controller, a vending machine, and a CPU's control unit are all FSMs."
    },
    {
     "type": "text",
     "text": "A Moore machine's output depends only on the current state — not on the input directly. This makes its output stable and glitch-free for the whole clock cycle, which is why traffic lights (output = which lamp is lit) are usually modelled as Moore machines."
    },
    {
     "type": "text",
     "text": "A Mealy machine's output depends on both the current state and the current input. This can react faster (output can change mid-cycle, without waiting for the next state), and often needs fewer states to do the same job — but the output can glitch briefly if the input changes at the wrong moment."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "State diagram idea for a sequence detector (looking for input '1' then '0'):\n\nMoore style: output is attached to states\n  S0 --1--> S1 --0--> S2(output=1) --anything--> S0\n\nMealy style: output is attached to transitions (arrows)\n  S0 --1/0--> S1 --0/1--> S0   (output '1' fires exactly on the matching transition)"
    },
    {
     "type": "tip",
     "text": "Memory aid: 'Moore = More stable' (output tied to state only, changes cleanly on the clock edge). Mealy output can react the moment the input changes, which is faster but riskier for glitches."
    }
   ],
   "recap": "A finite state machine models sequential behaviour as a set of states and transitions. Moore machines tie output to the current state only (stable, more states); Mealy machines tie output to state plus input (faster reaction, fewer states, more glitch-prone)."
  },
  "quiz": [
   {
    "q": "In a Moore machine, what determines the output?",
    "options": [
     "The clock frequency",
     "The current state only",
     "The current state and the current input together",
     "The current input only"
    ],
    "answer": 1,
    "explain": "A Moore machine's output is a function of the current state alone, which is why it stays stable for the whole clock cycle."
   },
   {
    "q": "What is a key advantage of a Mealy machine over a Moore machine?",
    "options": [
     "It cannot use flip-flops",
     "Its output never depends on the input",
     "It can react to an input change without waiting for the next clock edge, often using fewer states",
     "It never glitches"
    ],
    "answer": 2,
    "explain": "Because Mealy output depends on the input directly, it can respond immediately and often needs a smaller state count than an equivalent Moore machine."
   },
   {
    "q": "Which real-world example given is a natural fit for a Moore machine?",
    "options": [
     "A binary-to-Gray converter",
     "A traffic light controller",
     "A magnitude comparator",
     "A parity checker"
    ],
    "answer": 1,
    "explain": "A traffic light's output (which lamp is on) depends only on which state it's currently in, matching the Moore model exactly."
   }
  ]
 },
 "digital-electronics-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "RAM (Random Access Memory) stores data that can be written and read repeatedly, but loses its contents when power is switched off — it's volatile. Static RAM (SRAM) uses flip-flops to hold each bit and is fast but needs more transistors per bit; Dynamic RAM (DRAM) stores each bit as a tiny electrical charge in a capacitor, which is cheaper and denser but must be constantly 'refreshed' before the charge leaks away."
    },
    {
     "type": "text",
     "text": "ROM (Read-Only Memory) holds data that is fixed and survives power loss — it's non-volatile. Variants let you change how 'read-only' it really is: PROM can be written once, EPROM can be erased with UV light and rewritten, and EEPROM (and flash memory, its modern descendant) can be erased and rewritten electrically, in place, many times."
    },
    {
     "type": "text",
     "text": "A PLD (Programmable Logic Device) is a chip built from a grid of AND and OR gates whose connections can be configured after manufacture, letting one general-purpose chip implement many different Boolean functions. A PAL (Programmable Array Logic) has a programmable AND array and fixed OR array; a PLA (Programmable Logic Array) has both arrays programmable, giving more flexibility at the cost of more complexity and often more delay."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Memory type quick reference:\nSRAM  - volatile, flip-flop based, fast, expensive per bit\nDRAM  - volatile, capacitor based, needs refresh, cheap/dense\nPROM  - non-volatile, write once\nEPROM - non-volatile, UV-erasable, rewritable\nEEPROM/Flash - non-volatile, electrically erasable, rewritable in-place"
    },
    {
     "type": "tip",
     "text": "Exam trap: 'volatile' does not mean unreliable — it strictly means 'loses data without power'. RAM is volatile, ROM is non-volatile; that single word decides half the questions on this topic."
    }
   ],
   "recap": "RAM is volatile read/write memory (SRAM: flip-flop based and fast; DRAM: capacitor based, cheap, needs refresh). ROM is non-volatile (PROM, EPROM, EEPROM/flash differ in how they're rewritten). PLDs like PAL and PLA are configurable AND/OR gate arrays that implement custom logic on one general chip."
  },
  "quiz": [
   {
    "q": "What does 'volatile' memory mean?",
    "options": [
     "It loses its stored data when power is removed",
     "It can only be read, never written",
     "It runs faster than non-volatile memory",
     "It is unreliable and prone to errors"
    ],
    "answer": 0,
    "explain": "Volatile simply means the memory needs continuous power to retain data; RAM is the classic example."
   },
   {
    "q": "What is the main difference between SRAM and DRAM?",
    "options": [
     "SRAM uses flip-flops and is fast; DRAM uses capacitors, is denser/cheaper, and needs refreshing",
     "DRAM is faster than SRAM",
     "SRAM must be refreshed periodically, DRAM never needs it",
     "SRAM is non-volatile, DRAM is volatile"
    ],
    "answer": 0,
    "explain": "SRAM's flip-flop cells hold state directly and are fast but bulky; DRAM's capacitor cells are compact and cheap but leak charge, requiring periodic refresh."
   },
   {
    "q": "What distinguishes a PAL from a PLA?",
    "options": [
     "There is no real difference between them",
     "PLA can only implement one fixed function",
     "PAL has a programmable AND array with a fixed OR array; PLA has both arrays programmable",
     "PAL is volatile memory, PLA is non-volatile memory"
    ],
    "answer": 2,
    "explain": "PAL fixes the OR array and only lets you program the AND array; PLA allows programming both, trading extra flexibility for more complexity."
   }
  ]
 },
 "digital-electronics-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The real world is analog — sound, temperature, light — but digital circuits only understand 1s and 0s. A Digital-to-Analog Converter (DAC) takes a binary number and produces a matching analog voltage; an Analog-to-Digital Converter (ADC) does the reverse, sampling a continuous voltage and outputting the closest binary number that represents it."
    },
    {
     "type": "text",
     "text": "A simple DAC design (weighted-resistor or R-2R ladder) sums scaled currents from each input bit, so each bit contributes a voltage proportional to its place value — the MSB contributes twice as much as the next bit down, mirroring binary place values in an actual analog circuit."
    },
    {
     "type": "text",
     "text": "An ADC must decide how often to sample (sampling rate) and how many bits to use per sample (resolution). More bits mean finer steps between representable voltages — an 8-bit ADC has 256 possible output levels, a 10-bit ADC has 1024 — so higher resolution more closely approximates the original analog signal, at the cost of needing more circuitry and time per conversion."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "3-bit DAC idea (max reference voltage = 7V, step = 1V per LSB):\nBinary in | Analog out\n  000     |   0V\n  001     |   1V\n  010     |   2V\n  ...     |   ...\n  111     |   7V\n(each extra bit doubles resolution but also doubles the number of steps needed)"
    },
    {
     "type": "tip",
     "text": "Where you'll meet this in real life: your phone's microphone uses an ADC to turn your voice into digital data, and its speaker uses a DAC to turn stored digital audio back into sound you can hear. Every 'smart' sensor-driven device needs this same digital-analog bridge somewhere inside it."
    }
   ],
   "recap": "A DAC converts a binary number into an analog voltage; an ADC samples an analog voltage and outputs its closest binary equivalent. ADC quality depends on sampling rate (how often) and resolution (how many bits, i.e. how fine the steps)."
  },
  "quiz": [
   {
    "q": "What does an ADC (Analog-to-Digital Converter) do?",
    "options": [
     "Converts binary to Gray code",
     "Stores digital data permanently",
     "Converts a binary number into an analog voltage",
     "Samples an analog signal and produces the closest matching binary number"
    ],
    "answer": 3,
    "explain": "An ADC's job is to take a continuous analog input and represent it as a digital (binary) value."
   },
   {
    "q": "How many distinct output levels does an 8-bit ADC have?",
    "options": [
     "64",
     "256",
     "8",
     "1024"
    ],
    "answer": 1,
    "explain": "An n-bit ADC has 2^n levels; 2^8 = 256."
   },
   {
    "q": "What happens to resolution as you increase the number of bits in an ADC?",
    "options": [
     "Resolution gets coarser",
     "Resolution stays exactly the same",
     "Resolution improves, since more, finer voltage steps can be represented",
     "It only affects the sampling rate, not resolution"
    ],
    "answer": 2,
    "explain": "More bits mean more possible output codes, so each code represents a smaller voltage step — a finer, more accurate approximation of the analog signal."
   }
  ]
 },
 "digital-electronics-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far you've treated gates as ideal black boxes. In real chips, gates are built from actual transistors, and different manufacturing approaches — called logic families — trade off speed, power use, and noise tolerance differently. The two you must know are TTL and CMOS."
    },
    {
     "type": "text",
     "text": "TTL (Transistor-Transistor Logic) is built from bipolar junction transistors. It was the dominant family for decades: reasonably fast, but it constantly draws current even when idle, so it uses more power and generates more heat, especially as chips get larger."
    },
    {
     "type": "text",
     "text": "CMOS (Complementary Metal-Oxide-Semiconductor) uses paired transistors (one type conducts for a 1, the other for a 0) so that in a steady state almost no current flows — power is drawn mainly while switching. This makes CMOS far more power-efficient, which is exactly why virtually every modern chip, from phone processors to memory, is built in CMOS, not TTL."
    },
    {
     "type": "text",
     "text": "Every logic family is also judged on 'noise margin' — how much unwanted voltage swing a signal can tolerate before it's misread as the wrong logic level — and on fan-out — how many other gate inputs a single output can safely drive. Mixing families on one board (e.g. TTL driving CMOS) can fail silently if these voltage levels don't match, which is a classic real-world hardware bug."
    },
    {
     "type": "tip",
     "text": "Interview one-liner: 'CMOS mostly draws power only while switching, TTL draws it continuously — that's why your phone's chip is CMOS, not TTL.' If asked why CMOS won, power efficiency at high transistor counts is the answer."
    }
   ],
   "recap": "TTL and CMOS are the two major logic families. TTL uses bipolar transistors and draws steady current; CMOS uses paired transistors and draws power mainly while switching, making it far more power-efficient and the standard for modern chips."
  },
  "quiz": [
   {
    "q": "Why has CMOS become the dominant logic family in modern chips?",
    "options": [
     "It is cheaper to manufacture than TTL in every case",
     "It works only with analog signals",
     "It draws power mainly while switching, making it much more power-efficient",
     "It cannot be damaged by static electricity"
    ],
    "answer": 2,
    "explain": "CMOS's paired-transistor design means very little current flows in a steady state, which is critical for battery-powered and densely packed modern chips."
   },
   {
    "q": "What is 'fan-out' in the context of logic families?",
    "options": [
     "How fast a gate can switch states",
     "The number of inputs a gate has",
     "How many other gate inputs a single output can reliably drive",
     "The physical cooling fan attached to a chip"
    ],
    "answer": 2,
    "explain": "Fan-out describes the maximum number of downstream gate inputs one output can safely supply enough current/voltage to drive correctly."
   },
   {
    "q": "What can happen if TTL and CMOS chips with mismatched voltage levels are connected directly?",
    "options": [
     "Only the TTL chip will be affected, never the CMOS chip",
     "The circuit may misread signals or fail, since their logic-level voltages don't line up",
     "The chips will run faster",
     "Nothing, they are always fully compatible"
    ],
    "answer": 1,
    "explain": "If the voltage thresholds for '1' and '0' differ between families, a signal from one can be misread by the other, causing unreliable or failing behaviour."
   }
  ]
 },
 "digital-electronics-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real gates are not instantaneous. Propagation delay is the time between an input changing and the output settling to its correct new value. In a chain of gates, these delays add up, and in a clocked sequential circuit, the clock period must be long enough for signals to settle before the next clock edge, or the circuit reads garbage."
    },
    {
     "type": "text",
     "text": "A hazard is a brief, unwanted glitch in the output caused by different signal paths through a circuit having different delays, even though the final, settled output is mathematically correct. A static hazard means the output should stay constant but briefly glitches to the wrong value before settling; a dynamic hazard means the output should change once cleanly but instead toggles multiple times before settling."
    },
    {
     "type": "text",
     "text": "Hazards matter most when a glitchy signal feeds something that reacts instantly to any transition, like a clock input or another asynchronous circuit — a brief false pulse can be wrongly interpreted as a real event. K-map based design can actually help here: adding a deliberately redundant term (one that overlaps two groups) can eliminate a specific static hazard, even though it's not needed for the logic to be correct."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Why clock period matters:\nClock period T must satisfy:\n  T >= propagation delay of flip-flop + longest combinational path delay + setup time\nIf T is too short, the next clock edge arrives before the signal has\nsettled -> the flip-flop may capture a wrong or unstable ('metastable') value."
    },
    {
     "type": "tip",
     "text": "Exam phrase to remember: a hazard is a timing problem, not a logic problem — the Boolean expression is correct, but real-world delay differences make the output blip momentarily on its way to the right answer."
    }
   ],
   "recap": "Propagation delay is the real-world lag between an input change and a settled output; it limits how fast a clock can run. Hazards are momentary glitches caused by unequal delay paths, not logic errors, and can sometimes be fixed by adding a redundant term."
  },
  "quiz": [
   {
    "q": "What is propagation delay?",
    "options": [
     "The time it takes to program a PLD",
     "The voltage drop across a resistor",
     "The number of gates in a circuit",
     "The time a signal takes to travel from input change to a settled, correct output"
    ],
    "answer": 3,
    "explain": "Propagation delay measures the real time lag between a change at a gate's input and its output reflecting that change."
   },
   {
    "q": "What best describes a static hazard?",
    "options": [
     "The output never settles at all",
     "The output is supposed to stay constant but glitches briefly before settling",
     "The output changes correctly but too slowly",
     "The circuit consumes too much power"
    ],
    "answer": 1,
    "explain": "A static hazard occurs when unequal path delays cause a momentary, incorrect glitch even though the output should remain unchanged."
   },
   {
    "q": "Why does clock period matter in a sequential circuit?",
    "options": [
     "It has no real effect on correctness",
     "It must be long enough for signals to propagate and settle before the next clock edge captures them",
     "Shorter clock periods always improve reliability",
     "It only affects power consumption, not correctness"
    ],
    "answer": 1,
    "explain": "If the clock period is shorter than the total propagation delay plus setup time, flip-flops may capture unsettled or wrong values."
   }
  ]
 },
 "digital-electronics-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You've now covered the whole path from a single 1 or 0 to full sequential design: gates, Boolean algebra, K-maps, combinational blocks like MUXes and decoders, flip-flops, counters, registers, state machines, memory, converters, and real-world timing. This final level ties it together the way an interviewer or exam paper actually asks about it."
    },
    {
     "type": "text",
     "text": "A classic interview question: 'Design a circuit and explain your process.' The expected answer follows a pipeline — write the problem as a truth table, derive the Boolean expression, simplify it (algebra or K-map), then implement it with the fewest/cheapest gates, checking timing and hazards last. Interviewers care less about the final circuit and more about whether you can explain each step and why it's needed."
    },
    {
     "type": "text",
     "text": "Combinational vs sequential is the master distinction that ties this whole subject together: combinational circuits (gates, adders, MUXes, decoders) have outputs depending only on current inputs, with no memory of the past. Sequential circuits (flip-flops, counters, registers, FSMs) have outputs depending on current inputs AND stored state, which is why they need a clock. Every circuit you've studied fits cleanly into one of these two boxes."
    },
    {
     "type": "text",
     "text": "A practical capstone example: a digital clock. It needs counters (to count seconds, minutes, hours — sequential), decoders (to drive each 7-segment display digit — combinational), a modulo-N counter (to roll over at 60 seconds, 60 minutes, 12 or 24 hours), and a state machine mindset (a 'set time' mode vs a 'running' mode). Every idea from this whole subject shows up in one everyday device."
    },
    {
     "type": "tip",
     "text": "Final interview tip: when asked 'is this circuit combinational or sequential?', check for one thing only — does it contain any memory element (flip-flop/latch) or feedback loop? If yes, it's sequential, no matter how simple it looks; if no, it's combinational, no matter how complex."
    }
   ],
   "recap": "Digital electronics builds up from gates and Boolean algebra through combinational blocks (MUX, decoder, comparator) to sequential blocks (flip-flops, counters, FSMs, memory), all governed by real-world timing. The one test that always classifies a circuit: does it have memory or feedback? If yes, sequential; if no, combinational."
  },
  "quiz": [
   {
    "q": "What is the single defining test for whether a circuit is sequential rather than combinational?",
    "options": [
     "Whether it processes binary numbers",
     "Whether it contains a memory element (like a flip-flop) or feedback",
     "Whether it runs on CMOS instead of TTL",
     "Whether it uses more than 4 gates"
    ],
    "answer": 1,
    "explain": "The presence of a memory element or feedback loop is what makes a circuit's output depend on the past, defining it as sequential."
   },
   {
    "q": "In the standard digital design process, what comes right after writing the truth table?",
    "options": [
     "Deriving and simplifying the Boolean expression (e.g. with a K-map)",
     "Building the physical circuit immediately",
     "Checking for timing hazards",
     "Choosing the logic family (TTL vs CMOS)"
    ],
    "answer": 0,
    "explain": "The standard flow is: truth table, then Boolean expression, then simplification, and only then implementation and timing checks."
   },
   {
    "q": "In the digital clock example, which part is best described as sequential?",
    "options": [
     "The seconds/minutes/hours counters",
     "The 7-segment display decoder",
     "A magnitude comparator",
     "A code converter"
    ],
    "answer": 0,
    "explain": "The counters must remember the current count from tick to tick, which is exactly what makes them sequential rather than combinational."
   }
  ]
 }
}
