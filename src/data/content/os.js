// Lesson text and quiz questions for "Operating Systems".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "os-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An Operating System (OS) is the master program that runs your whole computer. Windows, macOS, Android, and Linux are all operating systems. It starts when you turn the machine on and keeps running until you shut it down."
    },
    {
     "type": "text",
     "text": "Think of the OS as the manager of a busy restaurant. The chefs, tables, and food are the hardware (CPU, memory, disk). The customers are your apps. The manager decides who gets served, who waits, and makes sure nobody grabs another person's plate."
    },
    {
     "type": "text",
     "text": "Its main jobs are: run programs, share the CPU fairly, hand out memory, store your files, and talk to devices like the keyboard, screen, and network. Apps ask the OS for these things instead of touching the hardware directly."
    },
    {
     "type": "tip",
     "text": "Analogy: an app that wants to save a file is like a guest asking the manager for the bill — it doesn't walk into the kitchen itself. It politely asks the OS to do it."
    }
   ],
   "recap": "An OS is the manager program that runs your apps and shares the computer's hardware (CPU, memory, storage, devices) safely and fairly."
  },
  "quiz": [
   {
    "q": "Which of these is an operating system?",
    "options": [
     "Android",
     "A USB cable",
     "Google Chrome",
     "Microsoft Word"
    ],
    "answer": 0,
    "explain": "Android is an operating system, while Chrome and Word are apps that run on top of one."
   },
   {
    "q": "Why do apps ask the OS for things like saving a file?",
    "options": [
     "It makes the computer slower on purpose",
     "Apps are not allowed to run",
     "So the app can skip the CPU",
     "The OS safely manages shared hardware for everyone"
    ],
    "answer": 3,
    "explain": "The OS controls shared hardware and grants access safely, so apps go through it instead of touching hardware directly."
   },
   {
    "q": "When does the operating system start running?",
    "options": [
     "Never — apps run it",
     "Only when you save a file",
     "When the computer turns on",
     "Only when you open an app"
    ],
    "answer": 2,
    "explain": "The OS boots up as soon as the computer turns on and keeps running until shutdown."
   }
  ]
 },
 "os-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A program is just a file sitting on disk — a recipe written down. A process is that program actually running, using memory and the CPU. The recipe is the program; the cooking happening right now is the process."
    },
    {
     "type": "text",
     "text": "You can run one program many times at once. Open three calculator windows and you have one program but three separate processes, each with its own memory. They don't share their numbers with each other."
    },
    {
     "type": "text",
     "text": "A running process moves through states. It is Ready when waiting for a turn on the CPU, Running when it is actually using the CPU, and Blocked (Waiting) when it is paused for something like a file to load or a key to be pressed."
    },
    {
     "type": "code",
     "code": "# Ask the OS to turn a program into a running process\n$ python game.py\n# 'python' is the program file; while it runs it is a process\n# with its own memory and its own place in the CPU line",
     "lang": "bash"
    },
    {
     "type": "tip",
     "text": "Analogy: a process bounces between Ready (in line), Running (at the counter), and Blocked (stepped aside to wait for a phone call) — then back in line."
    }
   ],
   "recap": "A program is a file on disk; a process is that program running with its own memory. Each process moves between Ready, Running, and Blocked states."
  },
  "quiz": [
   {
    "q": "What is the difference between a program and a process?",
    "options": [
     "A process only exists on paper",
     "They are exactly the same thing",
     "A program is a file; a process is it actually running",
     "A program is running; a process is stored"
    ],
    "answer": 2,
    "explain": "A program is a stored file, and a process is that program while it is actively running with memory and CPU time."
   },
   {
    "q": "You open the same app in 3 windows. How many processes is that?",
    "options": [
     "1 process",
     "0 processes",
     "3 separate processes",
     "Half a process"
    ],
    "answer": 2,
    "explain": "One program can run as many separate processes, each with its own memory."
   },
   {
    "q": "A process paused while it waits for a file to load is in which state?",
    "options": [
     "Running",
     "Finished",
     "Blocked (Waiting)",
     "Ready"
    ],
    "answer": 2,
    "explain": "A process waiting for something like I/O is Blocked, not using the CPU until the wait is over."
   },
   {
    "q": "A process that is waiting for its turn on the CPU is:",
    "options": [
     "Running",
     "Blocked",
     "Ready",
     "Deleted"
    ],
    "answer": 2,
    "explain": "Ready means the process could run right now and is just waiting in line for the CPU."
   }
  ]
 },
 "os-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A CPU can usually do only one thing at a time per core, yet dozens of processes want it. The part of the OS that decides who goes next is the scheduler. It switches between processes so fast that everything looks like it happens at once."
    },
    {
     "type": "text",
     "text": "One simple rule is First-Come, First-Served (FCFS): whoever asks first runs first, like a queue at a shop. It is fair but a slow, giant job at the front makes everyone behind it wait a long time."
    },
    {
     "type": "text",
     "text": "A friendlier rule is Round Robin. Each process gets a small, equal slice of time called a time quantum. When your slice ends you go to the back of the line, even if you're not done. This keeps the system feeling responsive."
    },
    {
     "type": "text",
     "text": "Swapping the CPU from one process to another is called a context switch. The OS saves what the first process was doing and loads the next one. It's necessary, but doing it too often wastes time on the switching itself."
    },
    {
     "type": "tip",
     "text": "Round Robin is like a group sharing one microphone: everyone gets 30 seconds, then passes it on, so nobody hogs it and no one waits forever."
    }
   ],
   "recap": "The scheduler shares the CPU among processes. FCFS runs them in arrival order; Round Robin gives each a small time slice. Switching between them is a context switch."
  },
  "quiz": [
   {
    "q": "What does the CPU scheduler decide?",
    "options": [
     "What color the screen is",
     "Which process runs on the CPU next",
     "How big files are",
     "Which apps to delete"
    ],
    "answer": 1,
    "explain": "The scheduler's job is choosing which ready process gets the CPU next."
   },
   {
    "q": "In Round Robin scheduling, what happens when a process's time slice ends?",
    "options": [
     "It moves to the back of the line",
     "It crashes the CPU",
     "It is deleted",
     "It runs forever"
    ],
    "answer": 0,
    "explain": "Round Robin gives each process an equal slice, then sends it to the back of the queue to keep things fair."
   },
   {
    "q": "What is a context switch?",
    "options": [
     "Saving one process and loading another on the CPU",
     "Adding more memory",
     "Deleting a file",
     "Turning the computer off"
    ],
    "answer": 0,
    "explain": "A context switch saves the current process's state and loads the next one so the CPU can change tasks."
   },
   {
    "q": "A weakness of First-Come, First-Served is that:",
    "options": [
     "It never lets anyone run",
     "A long job at the front makes others wait",
     "It is unfair to the first job",
     "It needs no order at all"
    ],
    "answer": 1,
    "explain": "In FCFS a big job at the front blocks everyone behind it, causing long waits."
   }
  ]
 },
 "os-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A thread is a single line of work inside a process. A process can have many threads running at the same time, and they all share the same memory — like several cooks working from one shared kitchen counter."
    },
    {
     "type": "text",
     "text": "This is why one app can do several things at once. In a game, one thread draws the screen while another plays sound and another checks the network. If it were all one thread, the game would freeze whenever a slow task ran."
    },
    {
     "type": "text",
     "text": "Because threads share memory, they are cheaper and faster to create than whole new processes. But sharing is also risky: if two threads change the same value at the same time, they can corrupt it. This is called a race condition."
    },
    {
     "type": "code",
     "code": "import threading\n\ndef greet(name):\n    print(f\"Hello from {name}\")\n\n# Start two threads inside one process\nt1 = threading.Thread(target=greet, args=(\"thread 1\",))\nt2 = threading.Thread(target=greet, args=(\"thread 2\",))\nt1.start(); t2.start()\nt1.join();  t2.join()",
     "lang": "python"
    },
    {
     "type": "tip",
     "text": "Processes are separate houses with their own kitchens; threads are roommates sharing one kitchen. Sharing is fast, but two roommates grabbing the same pan at once causes chaos (a race condition)."
    }
   ],
   "recap": "A thread is one line of work inside a process. Many threads share the process's memory so an app can do several things at once, but shared data must be handled carefully to avoid race conditions."
  },
  "quiz": [
   {
    "q": "What do threads inside the same process share?",
    "options": [
     "The same memory",
     "Separate computers",
     "Different operating systems",
     "Nothing at all"
    ],
    "answer": 0,
    "explain": "Threads of one process share that process's memory, which is what makes them fast and lightweight."
   },
   {
    "q": "Why use multiple threads in one app?",
    "options": [
     "To do several things at once without freezing",
     "To use less of the screen",
     "To avoid using the CPU",
     "To delete the process"
    ],
    "answer": 0,
    "explain": "Multiple threads let an app handle several tasks concurrently, so a slow task doesn't freeze everything."
   },
   {
    "q": "When two threads change the same value at the same time and corrupt it, that is a:",
    "options": [
     "Context switch",
     "File system",
     "Race condition",
     "Time quantum"
    ],
    "answer": 2,
    "explain": "A race condition happens when threads access shared data at the same time and the result depends on unlucky timing."
   }
  ]
 },
 "os-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every running process needs RAM (main memory) to hold its code and data. The OS hands out memory, tracks who has what, and takes it back when a process ends — so processes can't accidentally read or wreck each other's data."
    },
    {
     "type": "text",
     "text": "Each process is given its own virtual memory: a clean, private set of addresses starting at zero. The process thinks it has the whole machine to itself. The OS quietly maps those virtual addresses to real spots in physical RAM."
    },
    {
     "type": "text",
     "text": "To manage this, memory is cut into equal fixed-size blocks called pages, and RAM is cut into matching slots called frames. A page table records which page sits in which frame — like a coat check that maps ticket numbers to hooks."
    },
    {
     "type": "text",
     "text": "Paging means the pieces don't have to sit next to each other in RAM, which avoids wasted gaps. If RAM fills up, the OS can move some pages out to disk and pull them back later. Overdoing this causes heavy slowdown called thrashing."
    },
    {
     "type": "tip",
     "text": "Virtual memory is like everyone getting an apartment numbered '1'. The OS's map turns each private '1' into a unique real address, so nobody collides."
    }
   ],
   "recap": "The OS gives each process private virtual memory and maps it to real RAM using fixed-size pages and frames tracked by a page table, so processes stay isolated and RAM is used efficiently."
  },
  "quiz": [
   {
    "q": "What is virtual memory?",
    "options": [
     "Memory only for viruses",
     "Memory that doesn't exist",
     "The hard disk's brand name",
     "A private address space the OS maps to real RAM"
    ],
    "answer": 3,
    "explain": "Virtual memory gives each process its own private addresses that the OS maps onto physical RAM."
   },
   {
    "q": "In paging, what does a page table do?",
    "options": [
     "Maps pages to frames in RAM",
     "Schedules the CPU",
     "Deletes old files",
     "Counts open windows"
    ],
    "answer": 0,
    "explain": "The page table records which virtual page is stored in which physical frame."
   },
   {
    "q": "Why does the OS give each process its own separate memory space?",
    "options": [
     "To save electricity",
     "To make apps prettier",
     "To slow the computer down",
     "So processes can't damage each other's data"
    ],
    "answer": 3,
    "explain": "Isolated memory keeps one process from reading or corrupting another's data."
   },
   {
    "q": "Constantly swapping pages between RAM and disk until the system crawls is called:",
    "options": [
     "Booting",
     "Scheduling",
     "Thrashing",
     "Threading"
    ],
    "answer": 2,
    "explain": "Thrashing is when too much page swapping happens and the system spends its time moving pages instead of working."
   }
  ]
 },
 "os-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sometimes processes need to lock resources — a file, a printer, a chunk of memory — so no one else uses them at the same time. A deadlock is when processes get stuck waiting for each other forever, and none can move."
    },
    {
     "type": "text",
     "text": "Picture two people at a narrow doorway, each stepping aside and waiting for the other to go first. Both wait politely, neither moves, and they're frozen. That's a deadlock: everyone holding something and waiting on someone else."
    },
    {
     "type": "text",
     "text": "A classic case: Process A holds the printer and wants the scanner; Process B holds the scanner and wants the printer. Each refuses to release what it has until it gets the other. Neither ever will, so both hang forever."
    },
    {
     "type": "text",
     "text": "Deadlock needs four conditions at once: resources can't be shared (mutual exclusion), a process holds one while waiting for another (hold and wait), resources can't be forcibly taken away (no preemption), and there's a circle of waiting (circular wait). Break any one and the deadlock can't form."
    },
    {
     "type": "tip",
     "text": "A common fix is ordering: make everyone grab resources in the same agreed order (always printer before scanner). With no cycle possible, the circular wait — and the deadlock — can't happen."
    }
   ],
   "recap": "A deadlock is processes stuck forever, each holding a resource and waiting for one another. It needs four conditions together; breaking any one (for example, forcing a fixed lock order) prevents it."
  },
  "quiz": [
   {
    "q": "What is a deadlock?",
    "options": [
     "A full hard drive",
     "Processes stuck waiting for each other forever",
     "A very fast CPU",
     "A process that finishes early"
    ],
    "answer": 1,
    "explain": "A deadlock is when processes each hold a resource and wait on one another, so none can ever proceed."
   },
   {
    "q": "Which is one of the four conditions required for deadlock?",
    "options": [
     "Extra RAM",
     "Empty disk",
     "Fast scheduling",
     "Circular wait"
    ],
    "answer": 3,
    "explain": "Circular wait — a closed loop of processes each waiting on the next — is one of the four required conditions."
   },
   {
    "q": "How can forcing all processes to lock resources in the same order help?",
    "options": [
     "It speeds up the CPU",
     "It prevents a circular wait from forming",
     "It adds more memory",
     "It deletes waiting processes"
    ],
    "answer": 1,
    "explain": "A fixed global lock order makes a waiting cycle impossible, so deadlock cannot occur."
   }
  ]
 },
 "os-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A disk is really just a huge pile of numbered blocks. The file system is the OS layer that turns that raw pile into something humans understand: named files organized into folders (also called directories)."
    },
    {
     "type": "text",
     "text": "Folders form a tree. There's one top folder called the root; inside it are more folders and files, and inside those, more still. A path like /home/sam/photo.jpg is the trail of names from the root down to one exact file."
    },
    {
     "type": "text",
     "text": "The file system also keeps metadata — data about your data. That includes the file's name, size, type, when it was changed, and who is allowed to read or write it. Permissions are how the OS stops other users from opening your private files."
    },
    {
     "type": "code",
     "code": "$ ls -l report.txt\n-rw-r--r--  1 sam  staff  1024  Jul 25 10:30  report.txt\n#  ^perms       ^owner        ^size  ^modified time  ^name\n# rw- = owner can read/write; r-- = others read only",
     "lang": "bash"
    },
    {
     "type": "text",
     "text": "One file's blocks may be scattered all over the disk; the file system tracks which blocks belong to which file and stitches them back together when you open it. That's why safely 'ejecting' a drive matters — it lets the OS finish writing before you unplug."
    },
    {
     "type": "tip",
     "text": "Think of the file system as a library: files are books, folders are shelves, the path is the shelf-and-title address, and metadata is the catalog card telling you the author, date, and who may borrow it."
    }
   ],
   "recap": "A file system organizes raw disk blocks into named files and folders arranged in a tree from the root, tracks metadata like size and permissions, and reassembles a file's scattered blocks when you open it."
  },
  "quiz": [
   {
    "q": "What does a file system do?",
    "options": [
     "Cools the computer down",
     "Creates new threads",
     "Organizes disk storage into named files and folders",
     "Schedules the CPU"
    ],
    "answer": 2,
    "explain": "The file system turns raw numbered disk blocks into named files and folders that people can use."
   },
   {
    "q": "In a path like /home/sam/photo.jpg, what is the very top folder called?",
    "options": [
     "The branch",
     "The frame",
     "The root",
     "The leaf"
    ],
    "answer": 2,
    "explain": "The single top folder that all others descend from is called the root."
   },
   {
    "q": "Which of these is file metadata?",
    "options": [
     "The file's size and modified time",
     "The screen brightness",
     "The CPU's speed",
     "The number of open apps"
    ],
    "answer": 0,
    "explain": "Metadata is data about the file, such as its size, type, timestamps, and permissions."
   },
   {
    "q": "What do file permissions control?",
    "options": [
     "The color of folders",
     "How many pages RAM has",
     "How fast the CPU runs",
     "Who can read or write a file"
    ],
    "answer": 3,
    "explain": "Permissions decide which users are allowed to read, write, or run a given file."
   }
  ]
 },
 "os-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know the CPU picks one ready process to run and switches between them. Now let's look at the actual rules, called scheduling algorithms, that decide which process goes next."
    },
    {
     "type": "text",
     "text": "First Come First Served (FCFS) runs processes in the order they arrive, like a queue at a shop counter. It is simple and fair by arrival time, but one long process at the front makes everyone behind it wait — this is called the convoy effect."
    },
    {
     "type": "text",
     "text": "Shortest Job First (SJF) always picks whichever ready process needs the least CPU time. This gives the lowest possible average waiting time, but the OS rarely knows a process's exact future burst time in advance, so it is often only an estimate."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Average waiting time for FCFS\nburst = [6, 8, 7, 3]   # burst time of each process, in arrival order\nwait = [0]\nfor i in range(1, len(burst)):\n    wait.append(wait[i-1] + burst[i-1])\nprint(wait)                       # [0, 6, 14, 21]\nprint(sum(wait) / len(wait))      # average waiting time"
    },
    {
     "type": "text",
     "text": "Round Robin gives each process a small fixed slice of CPU time called a time quantum, then moves to the next process, cycling around. It feels fair and responsive for interactive systems, but if the quantum is too small, the CPU wastes time on constant switching; too large, and it behaves like FCFS."
    },
    {
     "type": "tip",
     "text": "Priority Scheduling runs the highest-priority process first, but a steady stream of high-priority arrivals can starve a low-priority process forever. Aging fixes this by slowly raising the priority of any process that waits too long."
    }
   ],
   "recap": "FCFS, SJF, Round Robin, and Priority Scheduling are the classic CPU scheduling algorithms, each trading off simplicity, fairness, and average waiting time differently."
  },
  "quiz": [
   {
    "q": "What is the convoy effect in FCFS scheduling?",
    "options": [
     "Processes run in random order",
     "The CPU never idles",
     "A long process at the front makes shorter ones behind it wait",
     "Priority is ignored"
    ],
    "answer": 2,
    "explain": "FCFS runs strictly in arrival order, so one long process blocks every shorter process queued behind it."
   },
   {
    "q": "Which algorithm gives the lowest average waiting time, in theory?",
    "options": [
     "Shortest Job First",
     "FCFS",
     "Random scheduling",
     "Round Robin"
    ],
    "answer": 0,
    "explain": "SJF always picks the shortest remaining job next, which mathematically minimizes average waiting time."
   },
   {
    "q": "In Round Robin, what happens if the time quantum is set too small?",
    "options": [
     "Only one process ever runs",
     "The CPU wastes time on excessive context switching",
     "Priorities get inverted",
     "Processes never finish"
    ],
    "answer": 1,
    "explain": "A tiny quantum forces very frequent switching, and the overhead of each switch starts to dominate actual work."
   },
   {
    "q": "What does 'aging' solve in priority scheduling?",
    "options": [
     "Slow disks",
     "Memory fragmentation",
     "Starvation of low-priority processes",
     "Deadlock"
    ],
    "answer": 2,
    "explain": "Aging gradually increases a waiting process's priority so it eventually runs, preventing indefinite starvation."
   }
  ]
 },
 "os-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When two processes or threads share the same data, timing can break things. If both read a bank balance, both add 100, and both write it back, one update can silently overwrite the other. This kind of bug is called a race condition — the result depends on who happened to run first."
    },
    {
     "type": "text",
     "text": "The part of the code that touches shared data is called the critical section. Only one process should be inside its critical section for that data at a time. Everything outside it is safe to run freely."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "// Two threads doing counter++ without protection can lose updates\n#include <stdio.h>\n\nint counter = 0;\n\nvoid increment() {\n    int temp = counter;   // read\n    temp = temp + 1;      // modify\n    counter = temp;       // write\n}\n\nint main() {\n    increment();\n    increment();\n    printf(\"%d\\n\", counter);   // 2, if each call runs to completion undisturbed\n    // But if two threads interleave so both read counter=5 before either\n    // writes back, the final value is 6 instead of 7 - one increment is lost.\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "A correct solution to the critical section problem must guarantee three things: mutual exclusion (only one process inside at a time), progress (a process not in the critical section doesn't block others from entering), and bounded waiting (no process waits forever)."
    },
    {
     "type": "tip",
     "text": "A simple shared flag or turn variable can look like it works but usually fails one of the three conditions under bad timing. Real fixes need atomic hardware instructions or OS-provided tools like semaphores — covered next."
    }
   ],
   "recap": "A race condition happens when shared data is accessed by multiple processes without control. The shared-data code is the critical section, and a correct solution needs mutual exclusion, progress, and bounded waiting."
  },
  "quiz": [
   {
    "q": "What is a race condition?",
    "options": [
     "A process with high priority",
     "A CPU running two cores at once",
     "A disk running out of space",
     "A bug where the result depends on the timing of concurrent operations"
    ],
    "answer": 3,
    "explain": "A race condition occurs when the outcome changes depending on the unpredictable order in which concurrent operations happen to execute."
   },
   {
    "q": "What is a critical section?",
    "options": [
     "The operating system kernel",
     "A type of scheduling algorithm",
     "The fastest part of a program",
     "The section of code that accesses shared data"
    ],
    "answer": 3,
    "explain": "The critical section is the piece of code where a process reads or writes data shared with other processes, so it needs protection."
   },
   {
    "q": "Which of these is NOT one of the three required properties of a critical-section solution?",
    "options": [
     "Bounded waiting",
     "Mutual exclusion",
     "Maximum CPU speed",
     "Progress"
    ],
    "answer": 2,
    "explain": "Mutual exclusion, progress, and bounded waiting are the three required properties; CPU speed is unrelated."
   },
   {
    "q": "Why can a simple shared flag variable fail to protect a critical section?",
    "options": [
     "Flags use too much memory",
     "Checking and setting the flag isn't atomic, so two processes can both pass the check",
     "Flags cannot be integers",
     "The OS deletes flags automatically"
    ],
    "answer": 1,
    "explain": "If checking the flag and setting it are two separate steps, both processes can check it as free before either sets it, so both enter."
   }
  ]
 },
 "os-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A semaphore is a counter the OS lets processes check and change safely, in one uninterruptible step (called an atomic operation). Two operations work on it: wait (also called P), which decreases the counter and blocks if it would go negative, and signal (also called V), which increases it and wakes a waiting process."
    },
    {
     "type": "text",
     "text": "A binary semaphore only holds 0 or 1, acting like a single lock — this is usually called a mutex (mutual exclusion lock). A counting semaphore can hold any number, useful when several identical resources are available, like 3 printers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Protecting a critical section with a semaphore\nclass Semaphore:\n    def __init__(self, value):\n        self.value = value\n    def wait(self):        # P: enter -- blocks if already 0\n        self.value -= 1\n    def signal(self):      # V: leave -- lets the next waiter in\n        self.value += 1\n\nsem = Semaphore(1)   # binary semaphore, acts as a mutex\ncounter = 0\n\ndef safe_increment():\n    global counter\n    sem.wait()\n    counter = counter + 1\n    sem.signal()\n\nsafe_increment()\nprint(counter)   # 1"
    },
    {
     "type": "text",
     "text": "A mutex has ownership: only the thread that locked it is allowed to unlock it. A semaphore has no owner — any thread can call signal, which makes it more flexible for things like signalling 'a resource is now free' between two different threads."
    },
    {
     "type": "tip",
     "text": "The most common semaphore bug is forgetting to call signal after wait (for example, if an error happens mid-function and the code returns early). The lock never gets released, and every other process waiting on it hangs forever."
    }
   ],
   "recap": "Semaphores are OS-managed counters with atomic wait and signal operations; a binary semaphore is a mutex. Forgetting to signal after waiting is the classic bug that causes a permanent hang."
  },
  "quiz": [
   {
    "q": "What does the wait (P) operation on a semaphore do?",
    "options": [
     "Deletes the semaphore",
     "Increases the counter",
     "Decreases the counter, blocking if it would go negative",
     "Restarts the CPU"
    ],
    "answer": 2,
    "explain": "Wait decrements the semaphore's counter and blocks the calling process if the counter would drop below zero."
   },
   {
    "q": "What is a binary semaphore usually called?",
    "options": [
     "A thread",
     "A mutex",
     "A page table",
     "A scheduler"
    ],
    "answer": 1,
    "explain": "A binary semaphore, which only holds 0 or 1, functions as a single mutual-exclusion lock, or mutex."
   },
   {
    "q": "How does a mutex differ from a general semaphore?",
    "options": [
     "A mutex is used only for files",
     "A mutex can count above 1",
     "A mutex cannot block a thread",
     "A mutex has ownership — only the locking thread can unlock it"
    ],
    "answer": 3,
    "explain": "A mutex is owned by whichever thread locked it, and only that thread may unlock it; a semaphore has no such ownership rule."
   },
   {
    "q": "What usually happens if a process calls wait() but never calls signal()?",
    "options": [
     "The semaphore resets automatically",
     "Every other process waiting on that semaphore hangs forever",
     "The CPU speeds up",
     "Nothing, it self-corrects"
    ],
    "answer": 1,
    "explain": "Without the matching signal, the lock is never released, so any process waiting to acquire it blocks indefinitely."
   }
  ]
 },
 "os-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A few synchronization puzzles show up in every OS course because they capture real problems in a small example. The Producer-Consumer problem has one process producing items into a shared, fixed-size buffer and another consuming them — the producer must wait if the buffer is full, and the consumer must wait if it's empty."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Producer-Consumer with semaphores\nclass Semaphore:\n    def __init__(self, value):\n        self.value = value\n    def wait(self):\n        self.value -= 1\n    def signal(self):\n        self.value += 1\n\nN = 5\nbuffer = []\n\nempty = Semaphore(N)   # counts empty slots, starts full: N\nfull  = Semaphore(0)   # counts filled slots, starts at 0\nmutex = Semaphore(1)   # protects the buffer itself\n\ndef add_to_buffer(item):\n    buffer.append(item)\n\ndef remove_from_buffer():\n    return buffer.pop(0)\n\ndef producer(item):\n    empty.wait(); mutex.wait()\n    add_to_buffer(item)\n    mutex.signal(); full.signal()\n\ndef consumer():\n    full.wait(); mutex.wait()\n    item = remove_from_buffer()\n    mutex.signal(); empty.signal()\n    return item\n\nproducer(42)\nprint(consumer())   # 42"
    },
    {
     "type": "text",
     "text": "The Readers-Writers problem has many processes reading a shared file safely at the same time, but a writer needs exclusive access — no readers or other writers allowed while it writes. The trick is letting reads run in parallel while still fully locking out everyone during a write."
    },
    {
     "type": "text",
     "text": "The Dining Philosophers problem sits five philosophers around a table with one fork between each pair; eating needs both forks. If everyone picks up their left fork at the same time, all five wait forever for their right fork — a deadlock. Fixes include making one philosopher pick up the right fork first, or adding a waiter who limits how many may pick up forks at once."
    },
    {
     "type": "tip",
     "text": "These three problems aren't just puzzles — they model exactly what real systems do: shared buffers (producer-consumer), shared databases (readers-writers), and shared limited resources (dining philosophers). Interviewers love asking you to code one from scratch."
    }
   ],
   "recap": "Producer-Consumer, Readers-Writers, and Dining Philosophers are classic synchronization problems, each modelling a different pattern of processes sharing a limited resource safely."
  },
  "quiz": [
   {
    "q": "In the Producer-Consumer problem, what must the producer do if the buffer is full?",
    "options": [
     "Crash the program",
     "Skip the item silently and continue",
     "Overwrite the oldest item",
     "Wait until a slot is free"
    ],
    "answer": 3,
    "explain": "The producer must block until the consumer frees up a slot, which is exactly what the 'empty' semaphore's wait enforces."
   },
   {
    "q": "In Readers-Writers, what is allowed to happen simultaneously?",
    "options": [
     "Multiple writers writing at once",
     "Nothing may ever happen at the same time",
     "Multiple readers reading at once",
     "A reader and a writer at the same time"
    ],
    "answer": 2,
    "explain": "Since reading doesn't change the data, multiple readers can safely read at the same time; writers still need exclusive access."
   },
   {
    "q": "What causes deadlock in the naive Dining Philosophers setup?",
    "options": [
     "One philosopher eats too fast",
     "Too much food",
     "The table is too small",
     "Every philosopher picks up their left fork first and then waits forever for the right"
    ],
    "answer": 3,
    "explain": "If all five simultaneously grab their left fork, each then waits on their right fork, which their neighbor is holding — a circular wait, exactly the deadlock condition."
   },
   {
    "q": "Which fix breaks the Dining Philosophers deadlock?",
    "options": [
     "Feeding philosophers one at a time in a random order with no rule",
     "Making one philosopher pick up their right fork first, breaking the symmetry",
     "Giving everyone two forks each",
     "Removing the table"
    ],
    "answer": 1,
    "explain": "Breaking the symmetry (one philosopher reaches for the other fork first) prevents the circular wait pattern needed for deadlock."
   }
  ]
 },
 "os-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know deadlock needs four conditions together: mutual exclusion, hold-and-wait, no preemption, and circular wait. An OS can deal with the risk in three different ways: prevent it from ever being possible, avoid it dynamically, or let it happen and clean up afterward."
    },
    {
     "type": "text",
     "text": "Deadlock prevention removes one of the four conditions structurally — for example, forcing every process to request all resources it will ever need up front (removing hold-and-wait), or imposing a strict global lock order (removing circular wait). This is safe but often wastes resources or limits flexibility."
    },
    {
     "type": "text",
     "text": "Deadlock avoidance is smarter: it lets processes request resources as needed, but before granting any request, the OS checks whether granting it could still leave a path where every process can eventually finish. This check is called the Banker's Algorithm, named after a banker who won't lend money if it might leave nobody able to repay."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Simplified safety check idea (Banker's Algorithm)\navailable = 3\nneed = {'P1': 2, 'P2': 4, 'P3': 1}\n\n# Try to find an order where every process's remaining need\n# can be met by what's currently available plus freed resources\norder = sorted(need, key=lambda p: need[p])\nfor p in order:\n    if need[p] <= available:\n        available += need[p]   # process finishes, releases its resources\n    else:\n        print(p, \"cannot be satisfied - unsafe state\")\n        break"
    },
    {
     "type": "text",
     "text": "Deadlock detection and recovery takes the opposite approach: allow deadlocks to occur, but periodically check for a cycle in a resource-allocation graph. If one is found, recover by forcibly preempting a resource from a process or killing one process in the cycle to break it."
    },
    {
     "type": "tip",
     "text": "Exam tip: prevention is 'stop it before it can happen', avoidance is 'check before every grant', and detection+recovery is 'clean up after it happens'. Many systems (including most general-purpose OSes) actually just ignore the problem — the 'ostrich algorithm' — because deadlocks are rare enough that a reboot is cheaper than constant checking."
    }
   ],
   "recap": "Deadlocks can be handled by prevention (structurally removing a condition), avoidance (the Banker's Algorithm checking safety before each grant), or detection and recovery (finding and breaking a cycle after the fact)."
  },
  "quiz": [
   {
    "q": "What does the Banker's Algorithm check before granting a resource request?",
    "options": [
     "Whether the process has high priority",
     "Whether the disk has enough space",
     "Whether the CPU is idle",
     "Whether granting it could still leave a safe path for every process to finish"
    ],
    "answer": 3,
    "explain": "The Banker's Algorithm only grants a request if the resulting state is still 'safe' — meaning some order exists where all processes can complete."
   },
   {
    "q": "Which strategy allows deadlocks to happen and cleans up afterward?",
    "options": [
     "Detection and recovery",
     "Avoidance",
     "Prevention",
     "Aging"
    ],
    "answer": 0,
    "explain": "Detection and recovery lets the system run normally, periodically checks for a deadlock cycle, and breaks it by preempting or killing a process."
   },
   {
    "q": "Forcing a strict global order for locking resources removes which deadlock condition?",
    "options": [
     "Hold and wait",
     "Mutual exclusion",
     "No preemption",
     "Circular wait"
    ],
    "answer": 3,
    "explain": "A fixed order for acquiring resources makes a circular waiting chain impossible, eliminating that specific condition."
   },
   {
    "q": "What is the 'ostrich algorithm'?",
    "options": [
     "A type of semaphore",
     "A page replacement policy",
     "A fast sorting method",
     "Ignoring the deadlock problem entirely, since it's rare enough to not be worth preventing"
    ],
    "answer": 3,
    "explain": "Many general-purpose systems simply ignore deadlocks since they occur rarely, treating an occasional reboot as cheaper than constant checks."
   }
  ]
 },
 "os-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You've seen paging split memory into fixed-size pages. An older, simpler approach is contiguous allocation: give each process one unbroken block of memory, sized exactly to what it needs."
    },
    {
     "type": "text",
     "text": "In fixed partitioning, memory is divided into a set number of blocks ahead of time. This wastes space when a process is smaller than its block — the unused space inside an allocated block is called internal fragmentation. Variable partitioning instead carves out a block exactly the size a process needs, but as processes come and go, memory ends up scattered with small unusable gaps between allocated blocks — this is external fragmentation."
    },
    {
     "type": "text",
     "text": "When a new process arrives, the OS must pick which free gap to use. First-fit takes the first gap big enough. Best-fit searches all gaps and picks the smallest one that still fits, minimizing wasted space but taking longer to search. Worst-fit picks the largest available gap, leaving a bigger leftover chunk that might be reused later."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# First-fit allocation\nfree_blocks = [100, 500, 200, 300]  # sizes of free memory holes\nrequest = 212\n\nfor i, size in enumerate(free_blocks):\n    if size >= request:\n        print(\"Allocated in block\", i, \"- leftover:\", size - request)\n        break\nelse:\n    print(\"No block big enough\")"
    },
    {
     "type": "tip",
     "text": "A common exam trick is compaction: the OS shifts all allocated blocks together to merge the scattered free gaps into one big usable block, removing external fragmentation. It fixes the problem but costs time, since every relocated process's memory has to be copied."
    }
   ],
   "recap": "Contiguous allocation gives each process one unbroken memory block; fixed partitioning wastes space inside blocks (internal fragmentation) while variable partitioning wastes space between blocks (external fragmentation), fixable by compaction."
  },
  "quiz": [
   {
    "q": "What is internal fragmentation?",
    "options": [
     "Wasted space between allocated blocks",
     "A type of deadlock",
     "Wasted space inside an allocated block bigger than the process needs",
     "A CPU scheduling bug"
    ],
    "answer": 2,
    "explain": "Internal fragmentation is the unused space left inside a fixed-size block once a smaller process is placed in it."
   },
   {
    "q": "Which allocation strategy searches for the smallest free gap that still fits the request?",
    "options": [
     "Worst-fit",
     "First-fit",
     "Best-fit",
     "Round Robin"
    ],
    "answer": 2,
    "explain": "Best-fit scans every free block and chooses the smallest one large enough, minimizing the leftover space."
   },
   {
    "q": "What does memory compaction do?",
    "options": [
     "Splits memory into pages",
     "Shifts allocated blocks together to merge scattered free gaps into one",
     "Deletes unused processes",
     "Speeds up the CPU clock"
    ],
    "answer": 1,
    "explain": "Compaction relocates processes so all free memory is combined into a single contiguous block, eliminating external fragmentation."
   },
   {
    "q": "External fragmentation is most closely associated with which allocation scheme?",
    "options": [
     "Variable partitioning",
     "Paging with fixed frame size",
     "Register allocation",
     "Fixed partitioning"
    ],
    "answer": 0,
    "explain": "Variable partitioning creates exactly-sized blocks for each process, which leaves irregular unusable gaps between them over time."
   }
  ]
 },
 "os-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You learned earlier that paging splits memory into fixed-size pages. Virtual memory takes this further: it lets a process believe it has far more memory than the machine physically has, by combining real RAM with space borrowed from disk, called swap space."
    },
    {
     "type": "text",
     "text": "The key idea is demand paging: instead of loading a whole program into RAM at once, the OS only loads a page when the CPU actually tries to use it. Most programs only touch a small fraction of their code and data at any given moment, so this saves huge amounts of memory."
    },
    {
     "type": "text",
     "text": "When the CPU tries to access a page that isn't currently in RAM, the hardware raises a page fault. This isn't an error — it's a normal signal that tells the OS: find this page on disk, load it into a free frame in RAM, update the page table, and then let the instruction run again as if nothing happened."
    },
    {
     "type": "text",
     "text": "Virtual memory has three big payoffs: programs larger than physical RAM can still run, more processes can be kept active at once since each only uses the RAM it's actively touching, and each process's virtual address space keeps it isolated from every other process's memory."
    },
    {
     "type": "tip",
     "text": "Don't confuse a page fault with a segmentation fault. A page fault is routine and handled silently by the OS. A segmentation fault means the program tried to access memory it was never allowed to touch at all, and the OS kills the process instead of fixing anything."
    }
   ],
   "recap": "Virtual memory combines RAM and disk swap space so processes can use more memory than physically exists, loading pages on demand; a page fault is the normal signal that triggers the OS to fetch a missing page."
  },
  "quiz": [
   {
    "q": "What is demand paging?",
    "options": [
     "Loading an entire program into RAM before it starts",
     "Loading a page into RAM only when it is actually accessed",
     "Deleting unused pages permanently",
     "A CPU scheduling algorithm"
    ],
    "answer": 1,
    "explain": "Demand paging delays loading a page until the process actually references it, saving memory for the parts that are never touched."
   },
   {
    "q": "What happens on a page fault?",
    "options": [
     "The process is immediately killed",
     "The CPU halts permanently",
     "The file system is reformatted",
     "The OS fetches the missing page from disk into RAM and resumes the instruction"
    ],
    "answer": 3,
    "explain": "A page fault triggers the OS to locate the page on disk, load it into a free frame, update the page table, and retry the instruction."
   },
   {
    "q": "What is swap space?",
    "options": [
     "A backup CPU",
     "A network protocol",
     "A type of cache memory",
     "Disk space used to hold pages that don't currently fit in RAM"
    ],
    "answer": 3,
    "explain": "Swap space is disk storage the OS uses as an extension of RAM, holding pages that are not currently loaded in physical memory."
   },
   {
    "q": "How does a segmentation fault differ from a page fault?",
    "options": [
     "They are the same thing",
     "A segmentation fault means the access was never allowed, so the process is killed instead of the page being fetched",
     "A segmentation fault only happens on Windows",
     "A segmentation fault is always caused by low RAM"
    ],
    "answer": 1,
    "explain": "A page fault is a legal access to a page just not currently in memory; a segmentation fault is an illegal access, so the OS terminates the process."
   }
  ]
 },
 "os-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When RAM is full and a page fault needs a free frame, the OS must evict — remove — some page already in memory to make room. Which page to evict is decided by a page replacement algorithm."
    },
    {
     "type": "text",
     "text": "FIFO (First In, First Out) evicts whichever page has been in memory the longest, regardless of whether it's still being used. It's simple to implement but can behave strangely: sometimes adding more memory frames actually causes more page faults, a surprising quirk called Belady's Anomaly."
    },
    {
     "type": "text",
     "text": "LRU (Least Recently Used) evicts the page that hasn't been touched for the longest time, betting that a page used long ago is less likely to be needed again soon than a page used a moment ago. It performs much closer to ideal than FIFO, but needs extra bookkeeping (like timestamps or a stack) to track recency."
    },
    {
     "type": "text",
     "text": "Optimal replacement evicts whichever page won't be needed again for the longest time in the future. It gives the theoretical best possible fault count, but is impossible to actually implement, since the OS can't see the future — it's used only as a benchmark to measure how close other algorithms come."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# FIFO trace for reference string 1,2,3,4,1,2,5 with 3 frames\nframes = []\nreference = [1,2,3,4,1,2,5]\nfaults = 0\nfor page in reference:\n    if page not in frames:\n        faults += 1\n        if len(frames) == 3:\n            frames.pop(0)   # evict the oldest\n        frames.append(page)\nprint(\"Page faults:\", faults)   # 7"
    },
    {
     "type": "tip",
     "text": "Exam tip: always trace the reference string frame by frame, marking a fault only when the page is not already present. FIFO evicts the front of the queue, LRU evicts based on last-used time, and Optimal evicts based on next-used time — practice all three on the same string to see the difference."
    }
   ],
   "recap": "Page replacement algorithms decide which page to evict when memory is full: FIFO evicts the oldest, LRU evicts the least recently used, and Optimal (a theoretical benchmark) evicts the page needed furthest in the future."
  },
  "quiz": [
   {
    "q": "What does FIFO page replacement evict?",
    "options": [
     "The page that has been in memory the longest",
     "The page needed soonest",
     "A random page",
     "The most recently used page"
    ],
    "answer": 0,
    "explain": "FIFO treats memory like a queue and evicts whichever page arrived first, regardless of recent use."
   },
   {
    "q": "What is Belady's Anomaly?",
    "options": [
     "A type of deadlock",
     "A CPU overheating bug",
     "The surprising case where adding more frames increases page faults under FIFO",
     "A disk scheduling algorithm"
    ],
    "answer": 2,
    "explain": "Belady's Anomaly is the counterintuitive result, seen with FIFO, where increasing the number of available frames can sometimes increase the number of page faults."
   },
   {
    "q": "Why can't the Optimal page replacement algorithm actually be used in a real running system?",
    "options": [
     "It causes deadlocks",
     "It's too slow to compute",
     "It requires knowing which pages will be needed in the future",
     "It only works with one frame"
    ],
    "answer": 2,
    "explain": "Optimal replacement needs foreknowledge of future page references, which no real system has while it's running; it's used only as a benchmark."
   },
   {
    "q": "What does LRU stand for and evict?",
    "options": [
     "Last Referenced Update - evicts newest pages",
     "Longest Running Unit - evicts the slowest process",
     "Lowest Ranking Utility - evicts based on priority",
     "Least Recently Used - evicts the page unused for the longest time"
    ],
    "answer": 3,
    "explain": "LRU stands for Least Recently Used, and it evicts the page that has gone the longest without being accessed."
   }
  ]
 },
 "os-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "If too many processes are crammed into too little RAM, each one keeps needing pages that were just evicted to make room for someone else. The system ends up spending almost all its time swapping pages in and out and almost none actually running code. This state is called thrashing."
    },
    {
     "type": "text",
     "text": "Thrashing is easy to spot from the outside: CPU usage looks low even though the disk (paging) activity is very high — the OS looks busy but almost nothing useful is getting done. It usually happens because the degree of multiprogramming (how many processes run at once) is set too high for the available RAM."
    },
    {
     "type": "text",
     "text": "The locality of reference is the idea that a running process tends to access a small, clustered set of pages for a while before moving on to a different cluster — like reading a few nearby pages of a book rather than jumping randomly through it. A process's working set is that current cluster of pages it actively needs."
    },
    {
     "type": "text",
     "text": "The working-set model uses this idea to prevent thrashing: the OS tracks each process's recent working set size, and only starts a new process (or keeps an existing one running) if enough free frames exist to hold its full working set. If not, it suspends a process instead of letting everyone starve."
    },
    {
     "type": "tip",
     "text": "If a system feels frozen with the disk light constantly flashing and CPU near idle, that's thrashing, not a fast CPU. The fix is almost never 'wait longer' — it's reducing the number of active processes or adding more RAM."
    }
   ],
   "recap": "Thrashing happens when too many processes compete for too little RAM, so the system spends nearly all its time paging instead of computing; the working-set model prevents it by only running processes whose active page set fits in memory."
  },
  "quiz": [
   {
    "q": "What is thrashing?",
    "options": [
     "A disk formatting operation",
     "The system spending almost all its time paging instead of doing useful work",
     "A type of deadlock",
     "The CPU running at maximum speed"
    ],
    "answer": 1,
    "explain": "Thrashing is when the OS is so busy swapping pages in and out that almost no actual process execution happens."
   },
   {
    "q": "What usually causes thrashing?",
    "options": [
     "A very fast CPU clock",
     "The degree of multiprogramming being too high for available RAM",
     "Using SSD instead of HDD",
     "Too few processes running"
    ],
    "answer": 1,
    "explain": "When too many processes are active at once for the amount of physical RAM available, they constantly evict each other's needed pages."
   },
   {
    "q": "What is a process's 'working set'?",
    "options": [
     "Its process ID",
     "Its total code size on disk",
     "Its priority level",
     "The cluster of pages it is actively using right now"
    ],
    "answer": 3,
    "explain": "The working set is the small, currently-active group of pages a process needs based on its recent locality of reference."
   },
   {
    "q": "How does the working-set model help prevent thrashing?",
    "options": [
     "It disables paging entirely",
     "It only runs a process if enough free frames exist for its working set",
     "It deletes idle processes permanently",
     "It increases the CPU clock speed"
    ],
    "answer": 1,
    "explain": "By checking that a process's working set fits in available memory before letting it run, the model avoids overcommitting RAM to too many processes at once."
   }
  ]
 },
 "os-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A spinning hard disk has a read/write head that must physically move to different tracks to fetch different data. Moving the head, called seeking, is by far the slowest part of a disk operation, so the OS carefully decides the order in which to service pending disk requests."
    },
    {
     "type": "text",
     "text": "FCFS disk scheduling services requests in the order they arrive, which is simple but can make the head zigzag wildly across the disk if requests are scattered, wasting huge amounts of seek time."
    },
    {
     "type": "text",
     "text": "SSTF (Shortest Seek Time First) always jumps to whichever pending request is physically closest to the head's current position. This cuts total travel a lot, but a request sitting far from the busy area can be skipped over again and again — a form of starvation."
    },
    {
     "type": "text",
     "text": "SCAN, often called the elevator algorithm, moves the head steadily in one direction, servicing every request in its path, until it reaches the end of the disk, then reverses direction — just like a lift visiting floors in order rather than jumping around. C-SCAN (Circular SCAN) also sweeps in one direction, but instead of reversing, it jumps back to the start and sweeps again the same way, giving more uniform wait times across the whole disk."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# SCAN: total head movement for requests, starting at 50, moving toward higher tracks first\nrequests = [82, 170, 43, 140, 24, 16, 190]\nhead = 50\ndisk_end = 199\n\nhigher = sorted(r for r in requests if r >= head)\nlower  = sorted((r for r in requests if r < head), reverse=True)\n\npath = [head] + higher + [disk_end] + lower\nmovement = sum(abs(path[i+1]-path[i]) for i in range(len(path)-1))\nprint(\"Total head movement:\", movement)"
    },
    {
     "type": "tip",
     "text": "Exam tip: for SCAN and C-SCAN problems, always draw the disk as a number line, mark the head's start position and direction, then sort the requests on each side before adding up the distances — it's easy to lose a step doing it in your head."
    }
   ],
   "recap": "Disk scheduling algorithms order pending disk requests to minimize costly head movement: FCFS is simplest, SSTF chases the nearest request, and SCAN/C-SCAN sweep the disk like an elevator for more predictable service."
  },
  "quiz": [
   {
    "q": "Why does disk scheduling matter so much?",
    "options": [
     "Because moving the disk head (seeking) is the slowest part of a disk operation",
     "To reduce RAM usage",
     "To increase file permissions",
     "To save electricity"
    ],
    "answer": 0,
    "explain": "Seek time dominates disk access cost, so the order requests are serviced in has a big effect on total performance."
   },
   {
    "q": "What problem can SSTF cause?",
    "options": [
     "It always moves in one direction only",
     "It never finds the closest request",
     "It ignores request order completely",
     "A far-away request can be starved, repeatedly skipped for closer ones"
    ],
    "answer": 3,
    "explain": "Because SSTF always jumps to the nearest pending request, a request stuck far from the busy area can wait indefinitely as new closer requests keep arriving."
   },
   {
    "q": "What does the SCAN algorithm do?",
    "options": [
     "Services requests in random order",
     "Ignores requests until the disk is idle",
     "Moves the head in one direction servicing requests, then reverses at the end, like an elevator",
     "Only services the closest request every time"
    ],
    "answer": 2,
    "explain": "SCAN sweeps across the disk in one direction, handling every request along the way, then reverses direction at the last track, much like an elevator visiting floors in order."
   },
   {
    "q": "How does C-SCAN differ from plain SCAN?",
    "options": [
     "It processes requests in first-come order",
     "It never moves the head",
     "After reaching the end, it jumps back to the start and sweeps the same direction again instead of reversing",
     "It only works on SSDs"
    ],
    "answer": 2,
    "explain": "C-SCAN keeps sweeping in a single consistent direction, jumping back to the starting edge rather than reversing, which gives more even wait times across all tracks."
   }
  ]
 },
 "os-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know the file system organizes disk blocks into named files and folders. Now the deeper question: given a file's data spread across many disk blocks, how does the OS actually keep track of which blocks belong to it?"
    },
    {
     "type": "text",
     "text": "Contiguous allocation stores a file's blocks one after another, back to back. It's simple and gives very fast sequential and random access, but the OS needs to know the file's final size in advance, and free space gets fragmented over time as files of different sizes are created and deleted, exactly like the memory fragmentation you saw earlier."
    },
    {
     "type": "text",
     "text": "Linked allocation stores each block with a pointer to the next block of the same file, scattered anywhere on disk. There's no external fragmentation and files can grow freely, but reading block 500 of a file means following 499 pointers first — random access is slow, and a single broken pointer can corrupt the whole chain."
    },
    {
     "type": "text",
     "text": "Indexed allocation gives each file one special index block that holds pointers to all of that file's data blocks. This allows direct access to any block instantly (just look it up in the index) without the fragility of a pointer chain. Unix-style file systems use a similar idea called an inode."
    },
    {
     "type": "text",
     "text": "The OS also has to track which blocks on the whole disk are free. A bitmap uses one bit per block (1 for used, 0 for free) — compact and fast to scan. A free list instead links all free blocks together like linked allocation does for files, which is simpler to update but slower to search for a large free chunk."
    },
    {
     "type": "tip",
     "text": "Exam tip: contiguous = fast but needs advance sizing and fragments; linked = flexible but slow random access; indexed = flexible and fast random access, at the cost of one extra index block per file."
    }
   ],
   "recap": "Files are physically stored using contiguous, linked, or indexed allocation, each trading off speed, flexibility, and fragmentation differently; free disk space itself is tracked with a bitmap or a free list."
  },
  "quiz": [
   {
    "q": "What is the main drawback of contiguous file allocation?",
    "options": [
     "It only works on SSDs",
     "It cannot support sequential access",
     "The OS must know the file's final size in advance, and free space fragments over time",
     "It requires a pointer in every block"
    ],
    "answer": 2,
    "explain": "Contiguous allocation needs an upfront size estimate and, like contiguous memory allocation, its free space fragments as files of varying sizes are created and removed."
   },
   {
    "q": "Why is random access slow in linked file allocation?",
    "options": [
     "The OS deletes linked files automatically",
     "Reaching block N means following N-1 pointers from the start of the chain",
     "Blocks are stored on a different disk",
     "Linked files cannot be read at all"
    ],
    "answer": 1,
    "explain": "Since each block only points to the next, accessing a block deep in the file requires walking the whole chain up to that point."
   },
   {
    "q": "What does indexed allocation add that linked allocation lacks?",
    "options": [
     "Direct access to any block via one index block, instead of following a chain",
     "Automatic backup",
     "The ability to grow a file",
     "Compression"
    ],
    "answer": 0,
    "explain": "The index block stores pointers to every data block, so any block can be found directly without traversing a chain — this is the idea behind the Unix inode."
   },
   {
    "q": "What does a bitmap track in free space management?",
    "options": [
     "The CPU's scheduling queue",
     "The names of every file",
     "The file's creation date",
     "Which disk blocks are free or used, one bit per block"
    ],
    "answer": 3,
    "explain": "A bitmap dedicates one bit to each disk block, marking it 1 for used or 0 for free, giving a compact way to scan for free space."
   }
  ]
 },
 "os-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Input/output devices like keyboards, disks, and network cards are enormously slower than the CPU. If the CPU just sat there checking a device's status over and over — called polling — it would waste huge amounts of processing time waiting for slow hardware."
    },
    {
     "type": "text",
     "text": "Interrupts solve this: the CPU starts an I/O operation, then goes off to do other useful work. When the device finishes, it sends an interrupt signal, and the CPU pauses whatever it's doing, jumps to a small handler routine to deal with the completed I/O, and then resumes exactly where it left off."
    },
    {
     "type": "text",
     "text": "For small transfers, interrupts are efficient. But for a large transfer, like copying a whole file from disk into RAM, having the CPU manage every single byte would still be wasteful. DMA (Direct Memory Access) hardware handles this: the CPU tells the DMA controller the source, destination, and size once, and the DMA controller moves the entire block directly between the device and RAM without the CPU's involvement, only interrupting the CPU once at the very end."
    },
    {
     "type": "text",
     "text": "A device driver is the software layer that turns the OS's generic I/O request (like 'read this file') into the exact commands a specific piece of hardware understands. This is why the same OS call works whether you're reading from an SSD, a USB drive, or a network share — the driver hides the differences underneath."
    },
    {
     "type": "tip",
     "text": "Interview tip: be ready to explain the difference in one line each — polling wastes CPU cycles checking constantly; interrupts let the CPU work elsewhere and get notified; DMA goes further by removing the CPU from the data-copying loop entirely, not just the waiting."
    }
   ],
   "recap": "Interrupts let the CPU do other work while slow I/O happens and get notified on completion, instead of wasting cycles polling; DMA takes this further by moving entire blocks of data without CPU involvement, and device drivers translate generic OS requests into hardware-specific commands."
  },
  "quiz": [
   {
    "q": "What is the main problem with polling?",
    "options": [
     "It wastes CPU cycles repeatedly checking a device's status",
     "It requires special hardware",
     "It only works for keyboards",
     "It never detects device completion"
    ],
    "answer": 0,
    "explain": "Polling has the CPU actively check the device over and over, burning processing time that could be spent on other work."
   },
   {
    "q": "What does an interrupt let the CPU do?",
    "options": [
     "Run two programs on one core simultaneously with no switching",
     "Do other work while I/O happens, then get notified when it's done",
     "Stop permanently until reboot",
     "Skip all I/O operations"
    ],
    "answer": 1,
    "explain": "With interrupts, the CPU starts the I/O and moves on to other tasks, only stopping to handle the device once it signals completion."
   },
   {
    "q": "What advantage does DMA add over plain interrupts for large transfers?",
    "options": [
     "It makes disks spin faster",
     "It removes the CPU from copying each byte, only interrupting once at the end",
     "It replaces the device driver",
     "It eliminates the need for RAM"
    ],
    "answer": 1,
    "explain": "DMA hardware moves the whole block of data directly, so the CPU is freed from managing every byte and is only interrupted once the transfer completes."
   },
   {
    "q": "What is the role of a device driver?",
    "options": [
     "To translate a generic OS I/O request into hardware-specific commands",
     "To physically power the device",
     "To schedule the CPU",
     "To manage virtual memory paging"
    ],
    "answer": 0,
    "explain": "A device driver hides hardware differences by converting a standard OS request into the exact commands the specific device understands."
   }
  ]
 },
 "os-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An OS must stop programs and users from harming each other or the system itself. Authentication proves who you are — a password, fingerprint, or key. Authorization is a separate step that decides what you, once identified, are actually allowed to do."
    },
    {
     "type": "text",
     "text": "Access control uses this in practice: Unix-style permission bits (read, write, execute for owner, group, and others) or a more detailed access control list decide exactly which operations each user can perform on each file or resource."
    },
    {
     "type": "text",
     "text": "Underneath all of this sits dual-mode operation. The CPU runs in user mode for ordinary programs, which can't directly touch hardware or other processes' memory, and kernel mode for the OS core, which can do anything. The only doorway from user mode into kernel mode is a system call — a program can never just reach into the kernel; it has to formally ask, and the OS decides whether to allow it. This is exactly what keeps one misbehaving program from bringing down the whole machine."
    },
    {
     "type": "text",
     "text": "Virtualization takes isolation a step further: a hypervisor lets one physical machine run several virtual machines, each believing it has its own dedicated CPU, RAM, and disk, even though they all actually share the same hardware underneath. This is the backbone of cloud computing — renting a 'computer' from a cloud provider is really renting a slice of a much bigger physical machine."
    },
    {
     "type": "text",
     "text": "Containers take a lighter approach than full virtual machines: instead of virtualizing entire hardware and running a separate OS in each one, containers share the host's OS kernel but isolate processes from each other using kernel features like namespaces and cgroups. They start faster and use fewer resources than VMs, at the cost of slightly less isolation."
    },
    {
     "type": "tip",
     "text": "Interview tip: be ready to explain why system calls exist (protecting the kernel from user code) and the VM-versus-container distinction (full separate OS and hardware virtualization versus a shared kernel with lightweight process isolation) — these come up constantly in placement interviews."
    }
   ],
   "recap": "The OS protects the system through authentication, authorization, and access control, enforced structurally by dual-mode operation and system calls; virtualization and containers extend this isolation to let one physical machine safely run many separate environments."
  },
  "quiz": [
   {
    "q": "What is the difference between authentication and authorization?",
    "options": [
     "They mean the same thing",
     "Authentication is for files, authorization is for the CPU",
     "Authorization happens before authentication",
     "Authentication proves who you are; authorization decides what you're allowed to do"
    ],
    "answer": 3,
    "explain": "Authentication verifies identity (a password or fingerprint), while authorization is the separate decision of what that verified identity is permitted to do."
   },
   {
    "q": "What is the only way for a user-mode program to get the kernel to perform a privileged operation?",
    "options": [
     "Rebooting the computer",
     "Changing its own priority",
     "A system call",
     "Directly writing to kernel memory"
    ],
    "answer": 2,
    "explain": "A system call is the formal, controlled request a user-mode program must make to ask the kernel to do something on its behalf; there is no direct route."
   },
   {
    "q": "What does a hypervisor do?",
    "options": [
     "Schedules the CPU for a single process",
     "Encrypts network traffic",
     "Deletes unused files",
     "Lets one physical machine run several virtual machines, each believing it has its own hardware"
    ],
    "answer": 3,
    "explain": "A hypervisor manages virtual machines, giving each one the illusion of dedicated hardware while actually sharing the same physical machine."
   },
   {
    "q": "How do containers differ from full virtual machines?",
    "options": [
     "Containers require more resources than VMs",
     "There is no difference",
     "Containers share the host's OS kernel and isolate processes with lightweight features like namespaces and cgroups",
     "Containers run a completely separate OS kernel for each one"
    ],
    "answer": 2,
    "explain": "Unlike VMs, which virtualize entire hardware and run a full separate OS each, containers share the host kernel and achieve isolation through lighter-weight kernel mechanisms, making them faster and leaner."
   }
  ]
 }
}
