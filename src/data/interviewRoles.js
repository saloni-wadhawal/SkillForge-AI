// Mock-interview roles and their question banks.
//
// Generated, not hand-written — regenerate the JSON and re-emit rather than
// editing questions here one at a time.
//
// Every question carries its own model answer ("ideal"). That answer is both
// the marking rubric the AI is given AND what the app shows the student when
// no AI provider is set up, so the interview works with no key and no internet.
export const INTERVIEW_ROLES = [
  {
    id: 'sde',
    title: 'Software Development Engineer (SDE)',
    short: 'SDE',
    icon: '👨‍💻',
    color: '#6c5ce7',
    blurb: 'An SDE writes and maintains the actual product code, turning a requirement into working logic that is correct, fast enough and easy for the next person to change.',
    hires: [
      'Amazon',
      'Microsoft',
      'Zoho',
      'TCS Digital',
      'Infosys Specialist Programmer',
      'Cognizant GenC Next'
    ],
    skills: [
      'Arrays and strings',
      'Hashing and hash maps',
      'Linked lists, stacks and queues',
      'Trees and recursion',
      'Sorting and searching',
      'Time and space complexity',
      'OOP concepts',
      'DBMS and OS basics'
    ],
    prep: [
      'Solve two problems a day for a month and re-solve the ones you failed after three days.',
      'For every solution say the time and space complexity out loud before you write code.',
      'Keep one project you can explain end to end, including why you chose each data structure.'
    ],
    questions: [
      {
        id: 'sde-t1',
        q: 'What is the time complexity of binary search, and what must be true about the data before you can use it?',
        topic: 'Complexity',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about how much of the array you throw away after each comparison.',
        ideal: 'Binary search runs in O(log n) time and O(1) extra space in the iterative form. It works only on data that is already sorted and randomly accessible, so an array works but a singly linked list does not. Each step compares the target with the middle element and discards half of the remaining range, so about twenty comparisons are enough for a million elements. If the data is unsorted you must sort it first at O(n log n), so binary search pays off only when the data is already sorted or you search it many times.'
      },
      {
        id: 'sde-t2',
        q: 'When would you choose a linked list over an array, and when would you not?',
        topic: 'Data Structures',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare what each one costs for random access versus inserting in the middle.',
        ideal: 'An array stores elements in one continuous block, so reading index i is O(1), but inserting or deleting in the middle needs shifting and costs O(n). A linked list stores nodes anywhere and joins them with pointers, so inserting or deleting is O(1) once you already hold the right position, which means the previous node in a singly linked list or the node itself in a doubly linked one, but reaching the k-th element means walking from the head, which is O(n). Arrays also use less memory per element and are cache friendly, so they are usually faster in practice when scanning. I pick an array when I mostly read by index and a linked list when I mostly add or remove at known positions, such as inside an LRU cache.'
      },
      {
        id: 'sde-t3',
        q: 'Explain the difference between a stack and a queue and give one real place each is used.',
        topic: 'Stacks and Queues',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One serves the newest item first, the other serves the one that waited longest.',
        ideal: 'A stack is last in first out, so the item pushed most recently is popped first, and both push and pop are O(1). A queue is first in first out, so the item that has waited longest leaves first, using enqueue at the back and dequeue at the front. Stacks are used for function calls, undo in an editor and checking balanced brackets. Queues are used for printer jobs, breadth first search in a graph and request buffering in a server.'
      },
      {
        id: 'sde-t4',
        q: 'What is a hash map, why is a lookup usually O(1), and when does it become O(n)?',
        topic: 'Hashing',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about what happens when two different keys land in the same bucket.',
        ideal: 'A hash map stores key and value pairs and uses a hash function to turn the key into a bucket index, so it jumps straight to where the value should be. If the keys spread evenly across buckets, insert, search and delete are O(1) on average. When two different keys hash to the same bucket it is a collision, handled by chaining the entries in a list or tree, or by probing for the next free slot. If many keys collide, one bucket becomes a long chain and lookup degrades to O(n), which is why a good hash function and resizing when the load factor grows are important.'
      },
      {
        id: 'sde-t5',
        q: 'What are the four pillars of object oriented programming, and can you show encapsulation using something you actually built?',
        topic: 'OOP',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Name all four first, then talk about hiding data behind methods.',
        ideal: 'The four pillars are encapsulation, abstraction, inheritance and polymorphism. Encapsulation means keeping data private inside a class and exposing only methods that control how it changes, for example a BankAccount class with a private balance and deposit and withdraw methods that reject a negative amount. Abstraction means showing only what the caller needs and hiding how it works, inheritance lets a child class reuse a parent class, and polymorphism lets the same call behave differently depending on the actual object. Encapsulation matters because the class can change its internals later without breaking any code that uses it.'
      },
      {
        id: 'sde-t6',
        q: 'Given an unsorted array of n integers, how do you check whether any value appears more than once? Start with the simplest way and then improve it.',
        topic: 'Arrays and Hashing',
        difficulty: 'medium',
        round: 'technical',
        hint: 'You are allowed to trade extra memory for speed here.',
        ideal: 'The brute force way compares every pair with two nested loops, which is O(n squared) time and O(1) space. A better way is to sort the array in O(n log n) and then compare neighbouring elements, which needs no extra memory if the sort is in place. The fastest way is to insert each element into a hash set while scanning and stop the moment an element is already present, giving O(n) time and O(n) space. In an interview I would state the trade off and ask whether extra memory is allowed and whether the values lie in a small known range, because then a counting array works too.'
      },
      {
        id: 'sde-t7',
        q: 'How do you reverse a singly linked list in place? Walk me through the pointers.',
        topic: 'Linked Lists',
        difficulty: 'medium',
        round: 'technical',
        hint: 'You need three pointers moving together, not one.',
        ideal: 'I keep three pointers called prev, curr and next, with prev starting as null and curr at the head. In each step I save next as curr.next, point curr.next back to prev, then move prev to curr and curr to next. When curr becomes null the list is fully reversed and prev is the new head. It is a single pass, so O(n) time and O(1) extra space, while the recursive version is also O(n) time but uses O(n) stack space.'
      },
      {
        id: 'sde-t8',
        q: 'How would you find the first character in a string that does not repeat?',
        topic: 'Strings',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Two passes over the string are cheaper than comparing every pair of characters.',
        ideal: 'I do two passes. The first pass counts how many times each character appears using a hash map, or a fixed array of size 26 or 256 when the character set is known. The second pass walks the string in original order and returns the first character whose count is one. That is O(n) time and O(1) extra space for a fixed character set, and it beats the O(n squared) approach of checking each character against the rest. If no such character exists I return a clear signal such as minus one.'
      },
      {
        id: 'sde-t9',
        q: 'What is recursion, what causes a stack overflow, and how would you turn a recursive solution into an iterative one?',
        topic: 'Recursion',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Every pending call keeps its own frame in memory until it returns.',
        ideal: 'Recursion is a function calling itself on a smaller input until it reaches a base case that stops the calls. Every pending call keeps a frame on the call stack holding its parameters and local variables, so if the base case is missing or the depth is too large the stack runs out of memory and the program throws a stack overflow. To make it iterative I use a simple loop when the recursion is linear, like factorial or Fibonacci, or I keep my own explicit stack of pending work, which is how iterative tree traversal is written. Iterative code avoids the depth limit and call overhead, while recursive code is usually shorter and clearer for trees and divide and conquer.'
      },
      {
        id: 'sde-t10',
        q: 'What is the difference between a process and a thread, and what exactly is a deadlock?',
        topic: 'Operating Systems',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about what memory is shared between them and what is not.',
        ideal: 'A process is a running program with its own memory space, while a thread is a unit of execution inside a process that shares the code, heap and open files but has its own stack and registers. Threads are cheaper to create and switch between, but because they share memory they need locks to avoid race conditions. A deadlock is when two or more threads each hold a lock that another one needs, so none of them can move forward. It needs four conditions together, mutual exclusion, hold and wait, no preemption and circular wait, and breaking any one of them, for example by always taking locks in the same order, prevents it.'
      },
      {
        id: 'sde-t11',
        q: 'Why does adding a database index make reads faster but writes slower?',
        topic: 'DBMS',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The index is a second structure that also has to stay correct after every change.',
        ideal: 'An index is a separate sorted structure, usually a B tree, that maps column values to row locations, so the database can jump to matching rows instead of scanning the whole table. That turns a full scan into roughly O(log n) lookups, which is why searching, joining and sorting on that column get much faster. But every insert, update and delete must also update every index on that table, and each index takes extra disk space, so writes get slower as the number of indexes grows. So I index columns that are searched, joined or ordered often, and I avoid indexing columns with very few distinct values or tables that are written far more than they are read.'
      },
      {
        id: 'sde-t12',
        q: 'You are given a sorted array that was rotated at an unknown point, for example 6 7 8 1 2 3 4. How do you find a target value in O(log n)?',
        topic: 'Searching',
        difficulty: 'hard',
        round: 'technical',
        hint: 'In a rotated array, at least one half is always still perfectly sorted.',
        ideal: 'I use a modified binary search. At each step I compare the middle element with the target and return the index if they match. Otherwise I find which half is sorted by comparing the first element with the middle, and if arr at low is less than or equal to arr at mid the left half is sorted, else the right half is. I then check whether the target lies between the two ends of that sorted half, and if it does I search there, otherwise I search the other half. The range keeps halving so it is O(log n) time and O(1) space, and duplicate values need special care because they break the sorted check.'
      },
      {
        id: 'sde-t13',
        q: 'Find the length of the longest substring with no repeating characters, and explain why a sliding window works here.',
        topic: 'Sliding Window',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Grow the window on the right and only shrink it from the left when a duplicate appears.',
        ideal: 'I keep a window defined by a left and a right pointer plus a map from each character to the index where it was last seen. I move right forward one character at a time, and if that character was already seen at a position inside the current window I move left to just after that position. At every step the window contains only unique characters, so I update the best answer with right minus left plus one. Each character is visited at most twice, so it is O(n) time and O(k) space where k is the size of the character set, which is much better than checking every substring in O(n squared).'
      },
      {
        id: 'sde-t14',
        q: 'Design a data structure that supports insert, delete and get a random element, all in O(1) average time.',
        topic: 'Data Structure Design',
        difficulty: 'hard',
        round: 'technical',
        hint: 'One structure gives you random access by index, another gives you instant lookup by value.',
        ideal: 'I combine a dynamic array with a hash map from value to that value index inside the array. Insert appends the value at the end of the array and stores its index in the map, which is O(1). Delete looks up the index in the map, swaps that element with the last element of the array, updates the moved element index in the map, then removes the last element and the map entry, so nothing has to shift. Get random picks a uniform random index between zero and size minus one and returns that array element, which is O(1) because the array stays dense with no holes.'
      },
      {
        id: 'sde-m1',
        q: 'You are halfway through a coding task due this week when you realise your approach will not scale to the real data size. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Interviewers want early communication plus a concrete plan, not silent heroics.',
        ideal: 'First I confirm the problem with numbers, estimating the time and memory for the real input size so I am not reacting to a guess. Then I tell my lead the same day instead of on the deadline, and I bring options rather than only a problem, for example shipping the current version behind a data limit, or spending one more day on a hash based approach. I also check whether a smaller fix such as batching or an index is enough for now, keeping the bigger rewrite as a follow up ticket. The points that matter are early communication, a short written comparison of options with time estimates, and letting the team choose the trade off.'
      },
      {
        id: 'sde-m2',
        q: 'Your code passed review but caused a bug in production. Take me through your first hour.',
        topic: 'Incident Handling',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Stop the bleeding first, understand it second, blame nobody.',
        ideal: 'The first goal is to reduce user impact, so I check logs and error rates to see how many users are affected, then roll back or turn off the feature flag if that restores service. Once it is stable I reproduce the issue in a test environment and find the real root cause instead of patching the symptom. I fix it along with a test that would have caught the bug, get it reviewed and deploy it. Finally I write a short blameless note on what happened, why review and tests missed it, and what check we add so it cannot repeat, and I keep the team informed throughout.'
      },
      {
        id: 'sde-m3',
        q: 'Why software engineering, and what kind of engineer do you want to be three years from now?',
        topic: 'Motivation',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Tie the answer to something you actually built, not to salary.',
        ideal: 'A strong answer is specific and honest, for example that a small piece of code can solve a real problem for many people, supported by a project you built and what it taught you. Name the part of the work you enjoy most, such as clean logic, debugging or performance, so it sounds like you and not a script. For three years, keep it realistic, such as owning a full module end to end, writing good tests and reviewing other people work, and perhaps going deeper into one area like backend systems. Avoid answers that are only about package, designation or switching companies.'
      },
      {
        id: 'sde-m4',
        q: 'Tell me about a time you disagreed with a teammate about how to build something.',
        topic: 'Teamwork',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Use a real example and end with what actually shipped.',
        ideal: 'Answer in the STAR shape, first the situation and your task, then the action you took and the result. Describe the real technical disagreement in a line or two, for example one person wanting a quick fix and the other wanting a rewrite. Show that you argued with evidence such as a small benchmark, a prototype or the deadline, and that you genuinely listened to their reasoning. Close with what the team decided, that you supported the decision even when it was not yours, and one thing you learned about raising concerns early.'
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Developer',
    short: 'Frontend',
    icon: '🎨',
    color: '#e84393',
    blurb: 'A frontend developer builds the screens people actually see and click, turning a design into a fast, accessible page that works on any phone or browser.',
    hires: ['Zoho', 'Freshworks', 'TCS', 'Infosys', 'Accenture', 'Razorpay'],
    skills: [
      'HTML and semantic markup',
      'CSS flexbox and grid',
      'JavaScript fundamentals',
      'DOM and events',
      'React components, props and hooks',
      'Responsive design and media queries',
      'Browser dev tools and debugging',
      'Git basics'
    ],
    prep: [
      'Rebuild one real website layout using only HTML and CSS and make it look right at 360 pixels wide.',
      'Practise ten small JavaScript tasks directly in the browser console, such as array methods, closures and fetch.',
      'Keep one React project you can open and explain, including why you split it into those components.'
    ],
    questions: [
      {
        id: 'frontend-t1',
        q: 'Why would you use tags like header, nav, main and article instead of putting a div everywhere?',
        topic: 'HTML Semantics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about who reads your page besides a person with working eyes.',
        ideal: 'Semantic tags describe what the content means, not just how it looks, so header, nav, main, article and footer tell the browser and other tools the role of each block. Screen readers use them so a blind user can jump straight to the main content or the navigation, which is a real accessibility gain. Search engines and browser reader modes also understand the page structure better. A div carries no meaning and is fine as a pure layout wrapper, but any block with a clear role should use the matching semantic tag.'
      },
      {
        id: 'frontend-t2',
        q: 'Explain the CSS box model, and what box-sizing border-box actually changes.',
        topic: 'CSS Box Model',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Ask yourself exactly what the width property is measuring.',
        ideal: 'Every element is a box made of content, then padding around it, then a border, then margin outside the border. By default with box-sizing content-box, the width property sets only the content width, so padding and border are added on top and the element ends up wider than the number you wrote. Setting box-sizing border-box makes width include content, padding and border, so a 200 pixel box stays 200 pixels even after padding is added. That is why most projects start by applying border-box to everything, because the layout maths then adds up as expected, and margin always stays outside the box while vertical margins between siblings can collapse into the larger one.'
      },
      {
        id: 'frontend-t3',
        q: 'What is the difference between var, let and const, and which one do you use by default?',
        topic: 'JavaScript Basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about scope, reassignment, and what happens if you use the variable before its line.',
        ideal: 'var is function scoped and is hoisted with the value undefined, so using it before its declaration silently gives undefined and causes confusing bugs. let and const are block scoped, existing only inside the nearest curly braces, and using them before their line throws a ReferenceError because of the temporal dead zone. let can be reassigned, const cannot be reassigned after its first value. const does not freeze the value, so you can still push into a const array or change a property of a const object, and in practice I use const by default and switch to let only when I genuinely need to reassign.'
      },
      {
        id: 'frontend-t4',
        q: 'If an id selector and a class selector both set the colour of the same element, which one wins and why?',
        topic: 'CSS Specificity',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Browsers score the selectors before they ever look at file order.',
        ideal: 'The id wins, because specificity is scored highest for inline styles, then ids, then classes, attributes and pseudo classes, then plain element tags. So a rule using a hash id beats a rule using a dot class even if the class rule comes later in the file. Source order only breaks a tie between selectors of equal specificity, in which case the later rule wins. The important keyword overrides all of this but should be avoided because it makes later fixes harder, and the cleaner fix is to make the selector slightly more specific or to restructure the class names.'
      },
      {
        id: 'frontend-t5',
        q: 'What does responsive design mean, and how do media queries help you support a small phone?',
        topic: 'Responsive Design',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Start from the small screen and add rules as the screen gets bigger.',
        ideal: 'Responsive design means one codebase that adapts to any screen size instead of a separate mobile site. It relies on flexible units such as percent, rem, fr and max-width rather than fixed pixel widths, plus images with max-width one hundred percent. A media query applies a block of CSS only when a condition is true, for example min-width 768 pixels, so cards can stack in one column on a phone and become three columns on a laptop. I prefer a mobile first approach where the base CSS is the phone layout and min-width queries add larger layouts, and the meta viewport tag must be present or the phone simply zooms out a desktop layout.'
      },
      {
        id: 'frontend-t6',
        q: 'What is event bubbling, and how does event delegation use it to handle clicks on a list of a hundred items?',
        topic: 'DOM Events',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Attach one listener to the parent instead of a hundred to the children.',
        ideal: 'When you click an element the event first travels down in the capture phase and then bubbles up from the target through every ancestor to the document, and most handlers run during bubbling. Event delegation means putting a single listener on a common parent such as the list element, then checking event.target inside the handler to find which child was really clicked. That is far cheaper than a hundred separate listeners and it also works for items added later, which is why it suits dynamic lists. Using event.target.closest helps match the correct child, and event.stopPropagation stops the bubbling when that is genuinely needed.'
      },
      {
        id: 'frontend-t7',
        q: 'When do you reach for flexbox and when for CSS grid, and which would you use for a page with a fixed sidebar and a flexible content area?',
        topic: 'CSS Layout',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One thinks in a single line, the other thinks in rows and columns at the same time.',
        ideal: 'Flexbox is one dimensional, laying items out along a single row or column, which suits a navbar, a toolbar or centring a few items. Grid is two dimensional, controlling rows and columns together, which suits a whole page layout or a card gallery. For a fixed sidebar with flexible content I would use grid with grid-template-columns of 240 pixels and 1fr, because 1fr takes all the remaining space and the entire layout is described in one line. In real projects both are combined, grid for the page skeleton and flexbox inside each block, and the gap property works in both so you do not need margins for spacing.'
      },
      {
        id: 'frontend-t8',
        q: 'What is the virtual DOM in React and why is it usually faster than updating the real DOM yourself?',
        topic: 'React',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The expensive part is not the JavaScript, it is layout and repaint in the browser.',
        ideal: 'The virtual DOM is a lightweight JavaScript description of what the UI should look like. When state changes React builds a new tree, compares it with the previous one in a step called reconciliation, and applies only the differences to the real DOM. Real DOM changes are expensive because each one can force the browser to recalculate layout and repaint, so batching many small changes into one minimal update saves time. It is not magic and careful hand written code can be faster, but the real benefit is that you describe the final UI and React works out the updates, which removes a whole class of bugs. Stable key values on lists matter because they tell React which items actually moved.'
      },
      {
        id: 'frontend-t9',
        q: 'What is the difference between props and state in React, and what happens when you call a useState setter?',
        topic: 'React State',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One comes from outside and the child is not allowed to change it.',
        ideal: 'Props are the values a parent passes into a child component and the child must treat them as read only. State is data the component owns and can change over time, created with useState inside a function component. When you call the setter React marks the component for update, schedules a re-render, then re-runs the component function with the new value and applies only the changed parts to the DOM. State updates are asynchronous and batched, so use the function form such as setCount of c gives c plus one when the new value depends on the old one. You must never mutate state directly, because React compares references to decide whether anything changed.'
      },
      {
        id: 'frontend-t10',
        q: 'How would you load a list of users from an API in React and show loading, empty and error states?',
        topic: 'Async JavaScript',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Three pieces of state and one effect that runs once after the first render.',
        ideal: 'I keep three pieces of state, the data array, a loading boolean and an error value, and I fetch inside useEffect with an empty dependency array so it runs once after the first render. Inside the effect I set loading to true, call fetch in a try and catch, and check that response.ok is true because fetch does not reject on a 404 or 500, then parse the JSON and store it and clear loading in a finally block. The render then shows a spinner while loading, an error message with a retry button when error is set, a friendly empty message when the array has zero items, and the list otherwise. I also handle the component unmounting mid request using an AbortController or an ignore flag, so I never set state on an unmounted component.'
      },
      {
        id: 'frontend-t11',
        q: 'What is the difference between double equals and triple equals in JavaScript, and how is null different from undefined?',
        topic: 'JavaScript Types',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One of the two operators converts the types before comparing.',
        ideal: 'Triple equals compares value and type with no conversion, so the number 1 is not strictly equal to the string 1. Double equals converts types first, so the number 1 is loosely equal to the string 1, which produces surprising results and is why triple equals is the default choice. undefined means a variable was declared but never given a value, or a function returned nothing, while null is a value you assign deliberately to say there is intentionally nothing here. They are loosely equal but not strictly equal, and typeof null returns object which is a long standing quirk of the language. A safe check for either is value double equals null, or the nullish coalescing operator when setting a default.'
      },
      {
        id: 'frontend-t12',
        q: 'Explain closures in JavaScript and give one place where you would genuinely use one.',
        topic: 'Closures',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Think of a function that remembers the variables of the place where it was created.',
        ideal: 'A closure is a function that keeps access to the variables of the scope where it was defined, even after that outer function has already finished running, because the inner function holds a reference to that scope so those variables are not garbage collected. A real use is a counter or id generator where the count stays private and can only change through the returned function, which gives genuine data privacy. Another real use is a debounce helper, where the timer id lives in the closure between calls so a search box only fires a request after the user stops typing. A classic bug is using var in a loop with setTimeout, where every callback sees the final value, and switching to let fixes it because let creates a fresh binding for each iteration.'
      },
      {
        id: 'frontend-t13',
        q: 'A customer says your page feels slow on a mid range Android phone. How do you find the real cause and what do you fix first?',
        topic: 'Web Performance',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Measure before you optimise, and images are usually the first offender.',
        ideal: 'First I measure instead of guessing, using the browser dev tools Network and Performance panels with CPU and network throttling switched on to imitate a slower phone. I look at the largest contentful paint, how much JavaScript has to be downloaded and parsed, and any long tasks blocking the main thread. The usual wins in order are oversized images, which I compress, serve in modern formats and give width, height and lazy loading, then the JavaScript bundle, which I cut with code splitting and by removing heavy libraries. After that I check render blocking CSS and fonts, unnecessary re-renders in React, and layout shifts caused by content arriving late. Finally I measure again and compare the numbers, because an unmeasured fix is only a guess.'
      },
      {
        id: 'frontend-t14',
        q: 'What does the dependency array of useEffect do, and what typically causes an infinite re-render loop?',
        topic: 'React Hooks',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Ask what React compares between renders to decide whether to run the effect again.',
        ideal: 'The dependency array tells React when to re-run the effect. With no array it runs after every render, with an empty array it runs once after the first render, and with values listed it runs whenever one of those values changes by a reference or value comparison. An infinite loop usually happens when the effect sets a piece of state that is also in its dependency list, so each run causes a render which triggers the effect again. It also happens when a dependency is an object, array or function created fresh on every render, since the comparison sees a new reference each time, and the fix is useMemo, useCallback, or moving that value outside the component. The cleanup function returned by the effect runs before the next run and on unmount, and is where you clear timers, listeners and in flight requests.'
      },
      {
        id: 'frontend-m1',
        q: 'The design you were given looks great on a laptop but will break on a 360 pixel wide phone. How do you handle that with the designer?',
        topic: 'Working with Design',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Bring a working example of the breakage, not just an objection.',
        ideal: 'I would neither silently change the design nor silently ship something broken. I would build a quick version at that width, take a screenshot of the exact problem such as a table overflowing or a heading truncating, and show the designer two or three practical options, for example stacking the columns, letting the table scroll sideways, or hiding less important fields behind a see more link. I would ask which fields matter most on a phone, because that is a product decision rather than a coding decision. Then I confirm the agreed behaviour in writing and check it on a real device before calling it done.'
      },
      {
        id: 'frontend-m2',
        q: 'Two days before launch the client asks to change the colours and move the sidebar on every page. What do you say?',
        topic: 'Scope Change',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Neither a flat no nor a silent yes, put numbers on it.',
        ideal: 'I do not refuse and I do not just agree, I first estimate the real work honestly, and the answer depends heavily on how the CSS was written. If colours come from CSS variables or a theme file the colour change may take an hour, so I simply do it. Moving the sidebar on every page touches layout and responsive rules, so I give the hours, the risk of new bugs and the testing time needed, then let the client choose between delaying launch, doing colours now and layout in the next release, or dropping something else. I record the decision in writing so nobody remembers it differently later, and I would also point out that using design tokens from the start is what makes such changes cheap.'
      },
      {
        id: 'frontend-m3',
        q: 'A tester reports a bug that you cannot reproduce on your machine. What do you do?',
        topic: 'Debugging with Others',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'The difference is usually in the environment, not in their imagination.',
        ideal: 'I assume the bug is real and start by collecting details, the exact steps, browser and version, screen size, operating system, whether they were logged in, plus any console errors or a screen recording. Most such bugs come from environment differences, so I try another browser, a hard refresh to rule out cached files, a different user role, a slow network and different data such as a very long name or an empty list. If it still does not reproduce I sit with the tester on their machine or ask for a video, and I add temporary logging around the suspect area. Once fixed I add a test or at least note the exact condition in the ticket, and I never close it as works on my machine.'
      },
      {
        id: 'frontend-m4',
        q: 'Frontend tools change every year. How do you decide what to learn next?',
        topic: 'Continuous Learning',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Fundamentals first, then whatever your team or target job actually uses.',
        ideal: 'The fundamentals, HTML, CSS, JavaScript, the DOM and how a browser renders a page, change very slowly and everything else sits on top of them, so I keep those strong first. After that I learn what my team or the jobs I am targeting actually use, rather than chasing every new library, for example one framework and one build tool done well. I learn by building a small real project instead of only watching videos, and I read official documentation and release notes for the tools I already use. I also rebuild something old with a new tool from time to time, because comparing the two teaches more than any tutorial.'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    short: 'Backend',
    icon: '🛠️',
    color: '#0984e3',
    blurb: 'A backend developer builds the part users never see, the APIs, database queries and login logic that store the data and answer every request the app makes.',
    hires: ['Zoho', 'TCS', 'Infosys', 'Paytm', 'Razorpay', 'Cognizant'],
    skills: [
      'REST API design',
      'SQL queries and joins',
      'Database design and normalisation',
      'Authentication, sessions and JWT',
      'Server side language such as Node, Java or Python',
      'Caching and query performance',
      'Error handling and logging',
      'Git and basic deployment'
    ],
    prep: [
      'Build one small CRUD API with login and test every endpoint in Postman or curl before the interview.',
      'Write ten SQL queries by hand on paper, including joins, GROUP BY and HAVING, with no autocomplete.',
      'Be ready to draw your project tables on a whiteboard and explain every key and relationship.'
    ],
    questions: [
      {
        id: 'backend-t1',
        q: 'What is a REST API, and what do GET, POST, PUT, PATCH and DELETE each mean?',
        topic: 'REST APIs',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Treat the URL as the noun and the HTTP method as the verb.',
        ideal: 'REST is a style for web APIs where the URL names a resource and the HTTP method says what to do with it, so /users/7 is a resource and the method decides the action. GET reads data and must not change anything, POST creates a new resource, PUT replaces a whole resource, PATCH updates only some fields, and DELETE removes it. REST is stateless, meaning each request carries everything the server needs, usually a token, and the server keeps no memory of the previous request. GET, PUT and DELETE are meant to be idempotent, so calling them twice leaves the same end result, while POST is not.'
      },
      {
        id: 'backend-t2',
        q: 'What do the status codes 200, 201, 400, 401, 403, 404 and 500 tell the caller?',
        topic: 'HTTP',
        difficulty: 'easy',
        round: 'technical',
        hint: 'The first digit already tells you whose mistake it is.',
        ideal: '200 means the request succeeded and the body holds the result, and 201 means a new resource was created, usually returned by POST along with its id or location. 400 means the client sent something invalid such as a missing field or a wrong type, 401 means not authenticated so the token is missing or expired, and 403 means authenticated but not allowed to perform this action. 404 means the resource does not exist. 500 means the server itself failed, for example an unhandled exception, so 4xx points at the caller and 5xx points at us.'
      },
      {
        id: 'backend-t3',
        q: 'What is a primary key and a foreign key, and can a foreign key ever be null?',
        topic: 'DBMS Keys',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One identifies a row, the other points at a row in another table.',
        ideal: 'A primary key is a column or set of columns that uniquely identifies each row, it cannot be null or repeat, and a table has exactly one. A foreign key is a column holding the primary key value of another table, which is how two tables are related, for example orders.customer_id pointing at customers.id. The database enforces referential integrity, so you cannot insert an order for a customer that does not exist, and you choose what happens on delete using cascade, set null or restrict. A foreign key can be null when the relationship is optional, for example an order with no delivery agent assigned yet.'
      },
      {
        id: 'backend-t4',
        q: 'What is the practical difference between a SQL and a NoSQL database, and when would you actually pick MongoDB?',
        topic: 'Databases',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Ask whether the shape of the data is fixed and whether you need consistency across tables.',
        ideal: 'A SQL database stores rows in tables with a fixed schema, supports joins and gives strong ACID transactions, which suits data with clear relationships such as users, orders and payments. A document database like MongoDB stores flexible JSON style documents with no strict schema and scales horizontally by sharding, but joins are limited so data is often duplicated on purpose. I would choose MongoDB when the shape of a record varies a lot or changes often, such as product catalogues with different attributes, event logs or content, and when a read usually fetches one whole document. For money, stock or anything needing consistency across several tables I would stay with a relational database such as PostgreSQL or MySQL.'
      },
      {
        id: 'backend-t5',
        q: 'What is the difference between authentication and authorisation? Give an example from any app you know.',
        topic: 'Auth Basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One asks who you are, the other asks what you are allowed to do.',
        ideal: 'Authentication proves who the user is, for example by checking an email and password or a one time password, and it always happens first. Authorisation decides what that identified user may do, for example whether they can delete another user record. In HTTP terms a failed authentication returns 401 while a failed authorisation returns 403. In a college portal, logging in is authentication, and the rule that a student sees only their own marks while a teacher can edit marks for their class is authorisation, normally implemented as roles or permissions checked on the server for every request.'
      },
      {
        id: 'backend-t6',
        q: 'How would you write a query that lists each department with its employee count, showing only departments with more than five people? Which clause filters the groups?',
        topic: 'SQL',
        difficulty: 'medium',
        round: 'technical',
        hint: 'WHERE runs before grouping, so it cannot see the count.',
        ideal: 'I would write SELECT department, COUNT(*) AS total FROM employees GROUP BY department HAVING COUNT(*) > 5 ORDER BY total DESC. GROUP BY collapses rows sharing the same department into one row per group and the aggregate function counts the rows in each group. WHERE filters individual rows before grouping so it cannot use COUNT, while HAVING filters the groups after aggregation, and that is the key difference. If the department name lived in another table I would join first, and every non aggregated column in the SELECT list must also appear in the GROUP BY.'
      },
      {
        id: 'backend-t7',
        q: 'What is normalisation? Explain first, second and third normal form in one line each, and give one reason to deliberately denormalise.',
        topic: 'Normalisation',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Each normal form removes a different kind of repeated data.',
        ideal: 'Normalisation is organising tables so each fact is stored in exactly one place, which removes duplicate data and the update, insert and delete anomalies that come with it. First normal form means every column holds a single atomic value with no lists or repeating groups. Second normal form means no non key column depends on only part of a composite primary key. Third normal form means no non key column depends on another non key column, so a city should not sit beside the pincode that determines it. I would denormalise on purpose when reads far outnumber writes and joins are hurting, for example storing a computed order total or a copied product name in a reporting table, accepting that the copy must be kept in sync.'
      },
      {
        id: 'backend-t8',
        q: 'How do you store user passwords safely, and why is hashing with MD5 not enough?',
        topic: 'Security',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Slow and salted beats fast and clever.',
        ideal: 'Passwords must never be stored in plain text and never encrypted in a reversible way, they must be hashed with a slow algorithm built for passwords such as bcrypt, scrypt or Argon2. Each password gets a unique random salt so two users with the same password produce different hashes, which defeats precomputed rainbow tables, and bcrypt stores the salt inside the hash string itself. MD5 and SHA-256 are fast general purpose hashes, so an attacker with a GPU can try billions of guesses per second, whereas bcrypt has a cost factor you raise over time to stay slow. At login you hash the entered password with the stored salt and compare using a constant time comparison, and you also add rate limiting and lockout so the login endpoint cannot be brute forced.'
      },
      {
        id: 'backend-t9',
        q: 'What is a JWT and how does the server trust it without keeping any session in memory?',
        topic: 'JWT',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The signature is the trick, not the encoding.',
        ideal: 'A JWT is a token with three base64 parts, a header, a payload of claims such as user id and expiry, and a signature. The server signs the header and payload with a shared secret for an HMAC algorithm such as HS256, or with a private key for RS256, so when the token comes back it verifies that signature, recomputing it with the same secret or checking it against the matching public key, and knows the payload was not tampered with, which is why no session has to be stored server side and why it scales easily across many servers. The payload is only encoded and not encrypted, so you must never put a password or sensitive data in it, you must always check the expiry, and you must never accept a token whose algorithm header says none. The real weakness is that a JWT cannot easily be revoked before it expires, so production systems use a short lived access token plus a refresh token that can be revoked from the database.'
      },
      {
        id: 'backend-t10',
        q: 'The endpoint that returns a product list has become slow as the data grew. How do you find the cause and fix it?',
        topic: 'Query Performance',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Look at the queries the endpoint really fires, not only the code you wrote.',
        ideal: 'First I measure, adding timing logs or a monitoring tool to see whether the time is spent in the database, in an external call or in application code. The most common cause is the N plus one problem, where the code loads a list and then fires one extra query per item, and the fix is a single join or an eager load. Next I run EXPLAIN on the slow query to see whether it is doing a full table scan and add an index on the columns used in WHERE, JOIN and ORDER BY. I also add pagination so the endpoint never returns thousands of rows, and select only the columns needed instead of everything. If it is still hot after that I cache the result in Redis with a sensible expiry and clear that cache whenever a product changes.'
      },
      {
        id: 'backend-t11',
        q: 'What is a database transaction, and what does ACID mean in practice?',
        topic: 'Transactions',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think of a money transfer that must never stop halfway.',
        ideal: 'A transaction groups several statements so they either all succeed and commit or all fail and roll back, leaving the data as it was. Atomicity means all or nothing, which is why a transfer that debits one account and credits another must sit in one transaction. Consistency means the database moves from one valid state to another, respecting constraints and foreign keys. Isolation means concurrent transactions do not see each other half finished work, controlled by isolation levels that trade speed against anomalies such as dirty reads, non repeatable reads and phantom reads. Durability means that once committed the data survives a crash, because it was already written to a log on disk.'
      },
      {
        id: 'backend-t12',
        q: 'Where would you add caching in a web application, and how do you avoid serving stale data?',
        topic: 'Caching',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Every cache is a promise to be slightly wrong for a short while.',
        ideal: 'Caching can sit at several layers, the browser using HTTP cache headers, a CDN for static files, an application cache such as Redis for computed results or hot rows, and the database own buffer cache. The common pattern is cache aside, where the code checks Redis first and on a miss reads the database and writes the value back with a time to live. Staleness is controlled in two ways, a short expiry so wrong data heals itself, and explicit invalidation where the write path deletes or updates the key as soon as the underlying record changes. The cache key must include everything that changes the result, such as user id, filters and page number, otherwise one user can see another user data. I only cache what is read far more often than it is written, and I guard against a stampede of simultaneous misses using a lock or slightly randomised expiry times.'
      },
      {
        id: 'backend-t13',
        q: 'Your payment API can be called twice because the mobile app retries after a timeout. How do you make sure the customer is charged only once?',
        topic: 'Idempotency',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Let the client name the operation before it happens.',
        ideal: 'The answer is idempotency. The client generates a unique idempotency key for that payment attempt and sends it in a header, and the server stores the key together with the result in a table that has a unique constraint on the key. On the first call the server performs the payment and saves the key and the response, and on any repeat with the same key it returns the stored response without charging again. The key must be inserted inside the same transaction as the charge, so a crash cannot leave one without the other, and the unique constraint is what makes it safe even when two retries arrive at the same instant. I would also give the payment record a status such as pending, success or failed so a retry can resume rather than restart, and keep the keys for a sensible window such as twenty four hours.'
      },
      {
        id: 'backend-t14',
        q: 'Two support agents open the same ticket and save their changes at the same time. How do you stop one silently overwriting the other?',
        topic: 'Concurrency',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The update itself has to notice that the row changed under it.',
        ideal: 'This is the lost update problem and the usual answer is optimistic locking. Each row keeps a version number or an updated timestamp, the client sends back the version it read, and the update runs as UPDATE tickets SET fields, version = version + 1 WHERE id matches AND version matches. If zero rows are affected then somebody else changed the row first, so the server returns a conflict such as 409 and shows the user the newer data to merge. Pessimistic locking is the other option, using SELECT FOR UPDATE inside a transaction to lock the row until commit, which suits short critical sections like deducting stock but blocks other users and can deadlock. Optimistic locking fits web apps where conflicts are rare, pessimistic fits short high contention operations, and either way the check must happen in the database and not in application memory.'
      },
      {
        id: 'backend-m1',
        q: 'At nine at night the login API you own starts failing and users cannot sign in. What are your first steps?',
        topic: 'Incident Response',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Restore service first, find the root cause afterwards.',
        ideal: 'First I confirm the scope, checking monitoring and logs to see the error rate, which endpoints fail and whether all users or only some are affected, and I post in the team channel so nobody duplicates the work. Then I look for the most recent change, a deployment, a config edit, an expired certificate or a third party outage, because that is the usual cause, and if a recent release is the suspect I roll it back instead of debugging in production. If it is a dependency such as the database running out of connections, I apply the quick mitigation and send an update to support so users receive a clear message. Once service is back I do the root cause analysis calmly, ship a fix with a test and an alert that would have caught it earlier, and write a short blameless postmortem.'
      },
      {
        id: 'backend-m2',
        q: 'A frontend teammate says your API returns the wrong data, but you believe their request is wrong. How do you settle it?',
        topic: 'Cross Team Communication',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Reproduce it outside both of your applications.',
        ideal: 'I would avoid arguing in chat and instead reproduce it neutrally, asking for the exact request and running the same call in curl or Postman so we both see the raw request and response. Most of the time that settles it immediately, revealing a wrong field name, a missing header, a cached response or an environment mismatch where they hit staging and I checked production. I would also search my own logs for that request id before defending my code, because assuming I am right is how real bugs get missed. Whatever the cause, the outcome should be a fix plus something that stops it happening again, such as clearer API documentation, a sample request, validation that returns a helpful 400 message, or a shared contract test.'
      },
      {
        id: 'backend-m3',
        q: 'You need to add a required field to an API that a mobile app you cannot update is already using. How do you roll it out?',
        topic: 'API Versioning',
        difficulty: 'hard',
        round: 'managerial',
        hint: 'Old clients must keep working on the day you deploy.',
        ideal: 'The rule is backward compatibility, an old client must not break, so I never make a new field required for existing callers and never rename or remove an existing field. I add the field as optional with a sensible server side default, deploy that first, and let the new app version start sending it once released. If the change truly cannot be backward compatible I create a new version of the endpoint such as a v2 path, keep v1 working, and monitor how many clients still call v1 before planning its retirement. I would also announce the change with a deprecation date and remember that mobile users can stay on an old build for months, so the old path must live far longer than it would for a web only change.'
      },
      {
        id: 'backend-m4',
        q: 'You have three tickets all due today and you can only finish two. What do you do?',
        topic: 'Prioritisation',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Decide with your lead, do not choose silently.',
        ideal: 'I would first re-estimate honestly to be sure I really cannot finish all three, then rank them by impact, since a bug blocking users or a payment failure beats a cosmetic change or an internal report. I raise it with my lead or the product owner early in the day rather than at six in the evening, presenting my ranking and asking them to confirm which one slips. I also check whether part of a ticket can still ship, such as the API without the admin screen, or whether a teammate can pick one up. Then I update the ticket status and comments so the whole team sees the new plan, because the real mistake interviewers are testing for is staying quiet and missing all three.'
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    short: 'Full-Stack',
    icon: '🧩',
    color: '#00b894',
    blurb: 'You build the screens users click, the API behind them and the database under that, and then get the whole thing running on a server.',
    hires: ['TCS', 'Infosys', 'Cognizant', 'Zoho', 'Persistent Systems', 'Freshworks'],
    skills: [
      'JavaScript and React basics',
      'Node and Express REST APIs',
      'SQL and schema design',
      'HTTP, status codes and CORS',
      'Authentication with JWT or sessions',
      'Git and basic deployment',
      'Debugging with browser dev tools'
    ],
    prep: [
      'Build and deploy one small MERN app end to end and be ready to explain every file in it',
      'Practise drawing your app on paper as browser, API and database boxes with the request flowing through',
      'Revise 20 easy and medium array and string problems in JavaScript so the coding round does not surprise you'
    ],
    questions: [
      {
        id: 'fullstack-t1',
        q: 'You type a website address in the browser and press Enter. Walk me through everything that happens until the page appears.',
        topic: 'Web basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Start from how the name becomes an IP address and end at what the browser paints on screen.',
        ideal: 'The browser first resolves the domain name to an IP address using DNS, checking its own cache and then the DNS servers. It opens a TCP connection to that IP, and for HTTPS it also does a TLS handshake to set up encryption. Then it sends an HTTP GET request, and the server or backend framework returns a response with a status code and usually HTML. The browser parses that HTML into the DOM, downloads the CSS, JavaScript and images it references, applies styles, and paints the page. In a React app the first response is a small HTML shell, and the JavaScript then calls the backend API to fetch the real data and render it.'
      },
      {
        id: 'fullstack-t2',
        q: 'What is the difference between GET and POST, and how do you decide which one to use for a new endpoint?',
        topic: 'HTTP',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about where the data travels and whether calling it twice should change anything.',
        ideal: 'GET is for reading data and its parameters go in the URL as a query string, so it can be cached, bookmarked and repeated safely. POST sends data in the request body and is used to create something or submit a form, so calling it twice can create two records. GET should be safe and idempotent, meaning it must not change server state, while POST is not idempotent. Sensitive data like passwords must never go in a GET URL because URLs end up in browser history, server logs and proxies. So a search or list endpoint is GET and a signup or order endpoint is POST.'
      },
      {
        id: 'fullstack-t3',
        q: 'In your to-do application, explain how one task travels from the form on screen into the database and back to the list.',
        topic: 'App architecture',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Name the three layers and what each one hands to the next.',
        ideal: 'The typed text is held in component state in React. On submit the front end calls the backend with fetch or axios, sending a POST request to something like /api/todos with a JSON body and a content-type header. The Express route receives it, validates the input, and uses the database driver or an ORM like Mongoose or Sequelize to insert a row or document. The database returns the saved record including its generated id, the API sends that back as JSON with status 201, and the front end either adds it to the existing state array or re-fetches the list so the new task shows up. Errors at any layer are returned as a status code and message that the UI displays.'
      },
      {
        id: 'fullstack-t4',
        q: 'What is a REST endpoint, and what do the status codes 200, 201, 400, 401, 404 and 500 tell the caller?',
        topic: 'REST APIs',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Group them by who made the mistake, the client or the server.',
        ideal: 'A REST endpoint is a URL plus an HTTP method that represents an action on a resource, for example GET /api/users/5 to read user 5. Status 200 means the request succeeded and a body is returned, and 201 means a new resource was created, usually after a POST. Codes in the 400 range mean the client made the mistake, so 400 is a bad or invalid request body, 401 means not authenticated or the token is missing or expired, and 404 means the resource does not exist. Code 500 means the server itself failed, for example an unhandled exception or a database that is down. Using the right code matters because front-end code and monitoring tools react to the code, not to the message text.'
      },
      {
        id: 'fullstack-t5',
        q: 'SQL or NoSQL, which would you pick for a college result portal, and why?',
        topic: 'Databases',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Ask yourself how fixed the data shape is and how much you need joins.',
        ideal: 'A SQL database like MySQL or PostgreSQL stores data in tables with a fixed schema, supports joins across tables and gives ACID transactions. A NoSQL database like MongoDB stores flexible documents, needs no fixed schema and scales out easily, which suits varying or rapidly changing data. For a result portal the data is highly structured and related, with students, subjects, exams and marks linking to each other, and correctness matters, so I would choose SQL. I would use tables such as students, subjects and marks with foreign keys, and let the database enforce that a mark cannot exist for a student who is not registered.'
      },
      {
        id: 'fullstack-t6',
        q: 'How do you keep a user logged in after they close the browser tab? Compare JWT with server sessions.',
        topic: 'Authentication',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One approach stores state on the server, the other puts signed state in the token itself.',
        ideal: 'With server sessions the server creates a session record, stores it in memory, Redis or the database, and sends the client a session id in a cookie, so the server can revoke it any time by deleting the record. With JWT the server signs a token containing the user id and an expiry, the client stores it and sends it in the Authorization header, and the server only verifies the signature, so it holds no state and scales easily. The trade-off is that a JWT cannot easily be revoked before it expires, so you keep the access token short-lived and use a refresh token. Tokens or session cookies should be stored in an httpOnly secure cookie rather than localStorage to reduce XSS theft, and everything must go over HTTPS. You must never put passwords or secrets inside the JWT payload because it is only base64 encoded, not encrypted.'
      },
      {
        id: 'fullstack-t7',
        q: 'Your React app on localhost:3000 calls your API on localhost:5000 and the console shows a CORS error. What is happening and how do you fix it properly?',
        topic: 'CORS',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The browser is enforcing a rule, not the server refusing you.',
        ideal: 'The browser rule being enforced is the same-origin policy, and CORS, meaning cross-origin resource sharing, is the mechanism that lets a server relax it. Because the protocol, host or port differ, the browser blocks the JavaScript from reading the response unless the server explicitly opts in and allows that origin. The fix is on the server, not the client, by sending an Access-Control-Allow-Origin header for the front-end origin, which in Express is done with the cors middleware. For methods like PUT or DELETE, or for custom headers, the browser first sends an OPTIONS preflight request that the server must answer. If cookies are used you also need credentials true on both sides and a specific origin instead of the wildcard. In production I would allow only the real front-end domain, never allow every origin blindly.'
      },
      {
        id: 'fullstack-t8',
        q: 'A page listing fifty thousand products has become very slow. How do you find the cause and fix it?',
        topic: 'Performance',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Measure first and find out whether the time goes in the database, the network or the browser.',
        ideal: 'First I measure instead of guessing, using the browser network tab to see whether the delay is the API response time or the payload size or the rendering, and server logs or timing to see how long the query itself takes. Usually the cause is that the API returns all fifty thousand rows, so I add pagination or infinite scroll with limit and offset or keyset pagination, and return only the fields the list needs instead of every column. On the database side I check the query plan and add an index on the columns used in WHERE and ORDER BY, and remove the N plus one pattern where the code queries inside a loop. On the front end I avoid re-rendering the whole list, use keys correctly and virtualise long lists. Caching frequent results and enabling gzip compression on responses help further.'
      },
      {
        id: 'fullstack-t9',
        q: 'How do you store user passwords in your database?',
        topic: 'Security',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The correct answer is a one-way operation, not something you can reverse.',
        ideal: 'Passwords are never stored in plain text and never encrypted in a reversible way. They are hashed with a slow algorithm designed for passwords such as bcrypt, scrypt or Argon2, which automatically adds a unique random salt to each password so two users with the same password get different hashes and rainbow tables do not work. At login I hash the entered password with the stored salt and compare hashes, so the real password is never recoverable even if the database leaks. I also use HTTPS so the password is not sniffed in transit, never log the password, enforce a minimum length, and rate limit login attempts to slow brute force. Plain MD5 or SHA-256 alone is wrong because they are too fast to compute.'
      },
      {
        id: 'fullstack-t10',
        q: 'JavaScript is single threaded, so how does it handle a slow API call without freezing the page? Explain what async and await really do.',
        topic: 'Async JavaScript',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about who actually does the waiting while your code moves on.',
        ideal: 'JavaScript runs your code on one call stack, but slow work like network calls and timers is handed to the browser or Node runtime, which does it outside that thread. When it finishes, the callback or resolved promise is put in a queue and the event loop pushes it back onto the stack once the stack is empty, so the page keeps responding. A promise is an object representing a value that will arrive later, with pending, fulfilled and rejected states. Marking a function async makes it return a promise, and await pauses only inside that function until the promise settles, letting you write asynchronous code that reads like normal top-to-bottom code. Errors from an awaited call are caught with try and catch, and independent calls should use Promise.all so they run in parallel instead of one after another.'
      },
      {
        id: 'fullstack-t11',
        q: 'Your project runs perfectly on localhost. What has to change before it runs on a real server for real users?',
        topic: 'Deployment',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about what is hard-coded in your code that must become configuration.',
        ideal: 'All hard-coded values like the database URL, API base URL, port and any keys move into environment variables read from process.env, with the .env file kept out of Git through .gitignore and the real values set in the hosting dashboard. The React app is built once with a production build so it ships minified static files served by a web server or CDN, while the Node API runs as a long-lived process managed by PM2, Docker or the host, restarting on crash. The database moves from localhost to a managed instance with its own credentials and network rules, CORS is restricted to the real front-end domain, and HTTPS is enabled. I also switch logging to a proper logger, turn off detailed error messages to users, and run migrations for the schema. Finally I test the deployed URL end to end because things like case-sensitive file paths and missing environment variables usually break only there.'
      },
      {
        id: 'fullstack-t12',
        q: 'Two users open the same record and hit save at the same moment. How do you stop one silently overwriting the other?',
        topic: 'Concurrency',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The second save should be able to notice that the row changed since it was read.',
        ideal: 'By default the last write wins and the first user\'s change disappears without anyone noticing. The common fix is optimistic locking, where the row carries a version number or an updated_at timestamp, the client sends back the version it read, and the update runs as UPDATE ... WHERE id = ? AND version = ?. If zero rows are affected, someone else changed it, so the API returns 409 conflict and the UI asks the user to reload and reapply the change. Pessimistic locking is the alternative, using a transaction with SELECT ... FOR UPDATE so the second user waits, which is safer for money-critical operations but reduces concurrency and risks deadlocks. Anything that must move together, like debiting one account and crediting another, is wrapped in a single transaction so it either fully commits or fully rolls back.'
      },
      {
        id: 'fullstack-t13',
        q: 'Design the database tables and the main API routes for a simple food-delivery app.',
        topic: 'System design',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Start by listing the nouns in the problem, then decide how they point at each other.',
        ideal: 'The core tables are users, addresses, restaurants, menu_items, orders, order_items and payments. An order stores user_id, restaurant_id, address_id, status and total, while order_items stores order_id, menu_item_id, quantity and the price at the time of ordering, because copying that price keeps old bills correct even after the menu price changes. Foreign keys connect them and indexes go on orders.user_id, orders.restaurant_id and order status plus created_at since those drive most queries. The main routes are GET /restaurants with filters, GET /restaurants/:id/menu, POST /orders which validates items and computes the total on the server rather than trusting the client, GET /orders/:id, GET /users/me/orders and PATCH /orders/:id/status for the restaurant or delivery partner. Order status is a fixed set like placed, accepted, preparing, out_for_delivery, delivered and cancelled, changed only through allowed transitions, and payment is a separate row so a retry does not create a duplicate order.'
      },
      {
        id: 'fullstack-t14',
        q: 'Your Node API becomes unresponsive under load and the CPU sits at hundred percent. How do you debug that?',
        topic: 'Node internals',
        difficulty: 'hard',
        round: 'technical',
        hint: 'One thread runs your JavaScript, so ask what is refusing to give it back.',
        ideal: 'Node runs your JavaScript on a single thread, so any long synchronous work blocks every other request. I would first look at metrics and logs to see which endpoint spikes, then profile the process with node --inspect and the CPU profiler or a tool like clinic to find the hot function. Typical culprits are heavy JSON parsing or stringifying of huge payloads, synchronous file or crypto calls, image processing, regular expressions with catastrophic backtracking, or an unbounded loop over a large database result. The fixes are to move heavy work to worker threads or a background queue, stream instead of loading everything in memory, paginate the query, and cache repeated computations. Separately I run multiple processes with the cluster module or PM2 so all CPU cores are used, and add rate limiting and timeouts so one slow dependency cannot pile up requests.'
      },
      {
        id: 'fullstack-m1',
        q: 'The release is tomorrow morning and while testing you find a bug in the module you wrote. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Think about who needs to know, and how fast, before you touch any code.',
        ideal: 'I would first reproduce it and judge the impact, meaning who is affected, whether data is corrupted and whether there is a workaround. Then I would inform my lead immediately with the facts, an estimated fix time and the options, because hiding it until after release is far worse than admitting it now. If the fix is small and testable I would fix it, get it reviewed and retested rather than pushing directly. If it is risky, I would suggest disabling that feature behind a flag or shipping without it and releasing a patch, letting the lead take the call. Afterwards I would add a test case so the same bug cannot come back and note the root cause honestly in the retrospective.'
      },
      {
        id: 'fullstack-m2',
        q: 'The front-end developer says your API is broken and the backend developer says the UI is sending wrong data. You own both ends. How do you settle it?',
        topic: 'Collaboration',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Get evidence on the table before opinions.',
        ideal: 'I would stop the argument and reproduce it once, capturing the actual request and response from the browser network tab and from the server log. Then I would compare that payload against the agreed API contract, field by field, so the discussion moves from opinion to facts. If the UI is sending a wrong field I fix it there, and if the API is returning the wrong shape or status I fix it there, without blaming anyone. To stop it recurring I would write down the contract with sample request and response, add server-side validation that returns a clear 400 message naming the bad field, and add a test that covers the case. I would also keep the tone neutral because the goal is a working feature, not proving who was right.'
      },
      {
        id: 'fullstack-m3',
        q: 'You are asked to add online payments to the product and you have never integrated a payment gateway before. You have two weeks. How do you plan it?',
        topic: 'Planning',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Reduce the unknown part first, then commit to dates.',
        ideal: 'I would first spend a day reading the gateway documentation and running their sandbox in a throwaway project, because the biggest risk is the unknown, and a small proof of concept removes most of it. Then I would break the work into clear tasks such as order creation, redirect or checkout widget, success and failure handling, webhook verification, storing payment records and refunds, and estimate each with buffer. I would confirm the scope with my manager, flag early that webhooks and failure cases usually take longer than the happy path, and agree what can be dropped if time runs short. I would give short daily updates so problems surface early rather than on the last day. If I get stuck for more than a few hours I would ask a senior instead of losing days silently.'
      },
      {
        id: 'fullstack-m4',
        q: 'A client messages you directly on chat asking for a small UI change, without telling your manager. How do you respond?',
        topic: 'Process',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Be helpful to the client without quietly changing the plan.',
        ideal: 'I would reply politely, thank them and confirm I have understood the exact change, but I would not promise a date or start coding straight away. I would put the request into the tracker and inform my manager or lead, because they own priorities and there may be effort, testing or contract implications even for a small change. If it is genuinely a two-minute change and my lead approves, I would do it through the normal branch, review and test flow. The reason is traceability, so nobody later wonders why the UI changed and no untested change reaches production. I would also let the client know the status so they do not feel ignored.'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    short: 'Analyst',
    icon: '📊',
    color: '#fdcb6e',
    blurb: 'You pull data with SQL or Excel, clean it, find what is really going on, and explain it in a chart or a sentence a business person can act on.',
    hires: ['Accenture', 'Deloitte India', 'Mu Sigma', 'ZS Associates', 'Cognizant', 'Tiger Analytics'],
    skills: [
      'SQL joins, group by and window functions',
      'Excel pivot tables and lookup formulas',
      'Data cleaning and validation',
      'Descriptive statistics',
      'Dashboards in Power BI or Tableau',
      'Basic Python with pandas',
      'Explaining numbers to non-technical people'
    ],
    prep: [
      'Practise 30 SQL queries covering joins, group by with having, subqueries and window functions until you can write them without help',
      'Take one public dataset, clean it and build a five-chart dashboard you can walk an interviewer through in two minutes',
      'Prepare one story where your analysis changed a decision, with the number, the method and the outcome'
    ],
    questions: [
      {
        id: 'data-analyst-t1',
        q: 'What is the difference between an INNER JOIN and a LEFT JOIN? Give me a case where the two give different answers.',
        topic: 'SQL joins',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about the rows on the left that have no partner on the right.',
        ideal: 'An INNER JOIN returns only the rows that have a match in both tables, while a LEFT JOIN returns every row from the left table and fills the right table columns with NULL when there is no match. Take a customers table and an orders table. An inner join of the two silently drops every customer who never placed an order, so counting customers that way undercounts them. A left join keeps them, and adding WHERE orders.id IS NULL is exactly how you list customers who never ordered. So an inner join is right when you need only matched activity, and a left join is right when the left table is the population you must not lose.'
      },
      {
        id: 'data-analyst-t2',
        q: 'How would you write a query that gives total sales per city but shows only cities above one lakh in sales?',
        topic: 'SQL aggregation',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One keyword filters rows before grouping and a different one filters after.',
        ideal: 'The query is SELECT city, SUM(amount) AS total_sales FROM sales GROUP BY city HAVING SUM(amount) > 100000 ORDER BY total_sales DESC. GROUP BY collapses all rows of a city into one row and SUM adds their amounts. The important point is that WHERE filters individual rows before grouping, for example WHERE order_status = \'completed\', while HAVING filters the grouped results, so a condition on an aggregate must go in HAVING. Every non-aggregated column in the SELECT list must also appear in the GROUP BY. If sales can be NULL, SUM ignores NULLs, so I would confirm whether missing amounts should count as zero.'
      },
      {
        id: 'data-analyst-t3',
        q: 'For salary data, would you report the mean or the median, and why?',
        topic: 'Statistics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Picture what one CEO salary does to the average.',
        ideal: 'I would report the median, because salary data is right skewed, so a few very high salaries pull the mean upward and the mean then describes almost nobody. The median is the middle value once salaries are sorted, so it is not affected by extreme values and better represents a typical employee. The mode is the most frequent value and is more useful for categories or for pay bands. In practice I would show the median with the range or the twenty-fifth and seventy-fifth percentiles so the spread is visible, and mention the mean only alongside it. If the mean and the median are far apart, that gap itself is a finding worth reporting.'
      },
      {
        id: 'data-analyst-t4',
        q: 'The sales team sends you an Excel file with twenty thousand rows. What do you check before you analyse anything?',
        topic: 'Data cleaning',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Assume the file is wrong until you have proved it is usable.',
        ideal: 'First I check the shape and the source, meaning the row count against what the team expected and the date range the file is supposed to cover. Then I look for duplicates on the key column, blank or missing values, and whether the amount and date columns are actually numbers and dates rather than text. I check category spellings for the same value written differently, such as Mumbai, mumbai and MUMBAI, and strip trailing spaces. I scan for impossible values like negative quantity, a future order date or an amount of zero, and check whether the key I plan to join on is unique. Finally I write down every cleaning step I apply so the analysis is reproducible, and I go back to the sender when something looks structurally wrong rather than quietly guessing.'
      },
      {
        id: 'data-analyst-t5',
        q: 'When would you use VLOOKUP and when would you use a pivot table in Excel?',
        topic: 'Excel',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One brings a value across, the other summarises many rows into few.',
        ideal: 'VLOOKUP is for enrichment, meaning you take a key in your sheet and pull a matching value from another table, for example fetching a product category using the product code. It searches only to the right of the key column, needs the last argument set to FALSE for an exact match, and breaks if a column is inserted, which is why XLOOKUP or INDEX with MATCH is safer. A pivot table is for summarising, meaning it groups thousands of rows and gives sums, counts or averages by a dimension such as sales by region by month. So I use a lookup to add a column to my data and a pivot to answer a question about the data. In a real task I usually do the lookups first to build one clean table and then pivot it.'
      },
      {
        id: 'data-analyst-t6',
        q: 'Your manager says sales dropped twenty percent last month and wants to know why by evening. How do you investigate?',
        topic: 'Business analysis',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Confirm the number is real before you go hunting for a reason.',
        ideal: 'First I verify the number itself, checking the metric definition, whether the data for last month is fully loaded, and whether returns or cancelled orders are being treated differently than before, because a pipeline issue explains many sudden drops. Next I compare like with like, adjusting for the number of working days, festivals and normal seasonality against the same month last year. Then I break the total down by dimension, such as region, product category, channel, new versus repeat customers and top accounts, to see whether the drop is spread everywhere or concentrated in one slice. I also split it into price versus volume, since fewer orders and smaller orders are different problems. Once I find the slice that explains most of the gap, I check what changed there, for example a campaign that ended, a stock-out or a competitor price, and I present the finding with the evidence rather than a guess.'
      },
      {
        id: 'data-analyst-t7',
        q: 'After joining two tables your total revenue suddenly doubles. What went wrong?',
        topic: 'Data modelling',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Ask what one row means in each table before and after the join.',
        ideal: 'The join key is not unique on one side, so a one-to-many relationship duplicated the rows and the SUM counted the same amount multiple times. For example joining orders to order_items repeats the order total once per item. A primary key uniquely identifies a row in its table and a foreign key points at that key in another table, so I check whether the column I joined on is really the primary key of the right table or whether it repeats. The fix is to respect the grain, meaning either aggregate the many-side first and then join the summarised result, or sum a column that lives at the correct level. Blindly adding DISTINCT is dangerous because it also removes genuinely repeated legitimate values. I always sanity check totals before and after a join for exactly this reason.'
      },
      {
        id: 'data-analyst-t8',
        q: 'What does correlation mean, and why do people say correlation is not causation? Give me an example.',
        topic: 'Statistics',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Look for a third thing that could be driving both.',
        ideal: 'Correlation measures how two numeric variables move together, usually as a coefficient between minus one and plus one, where zero means no linear relationship. It only captures a linear pattern, so a strong curved relationship can still show a low correlation. It does not prove that one causes the other because a hidden third factor can drive both. The classic example is ice cream sales and drowning incidents, which rise together only because hot weather causes both. To claim causation you need a controlled experiment such as an A B test with random assignment, or a careful causal design that accounts for confounders. In business terms, finding that heavy discount users have higher revenue may just mean big buyers seek discounts, not that discounts create big buyers.'
      },
      {
        id: 'data-analyst-t9',
        q: 'How do you decide which chart to use, and what makes a dashboard genuinely useful instead of just pretty?',
        topic: 'Data visualisation',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Match the chart to the question being asked, not to what looks impressive.',
        ideal: 'The chart follows the question. A bar chart compares values across categories, a line chart shows a trend over time, a scatter plot shows the relationship between two numbers, and a stacked bar or hundred percent bar shows composition, while a table is best when people need exact figures. I avoid pie charts with many slices and avoid dual axes because they mislead, and I always start the bar axis at zero. A dashboard is useful when it answers specific decisions the audience makes, so I put the headline KPI at the top left, keep a consistent colour meaning throughout, add filters for period and region, and label units and the last refresh time. I remove decoration that carries no information and write a one-line takeaway near each chart. Before building I confirm the metric definitions with the business, because a beautiful dashboard with a disputed definition gets abandoned.'
      },
      {
        id: 'data-analyst-t10',
        q: 'How would you get the top three products in every category using SQL?',
        topic: 'Window functions',
        difficulty: 'medium',
        round: 'technical',
        hint: 'You need a per-group ranking that still keeps the individual rows.',
        ideal: 'I would use a window function, writing something like SELECT category, product, sales FROM (SELECT category, product, sales, ROW_NUMBER() OVER (PARTITION BY category ORDER BY sales DESC) AS rn FROM product_sales) t WHERE rn <= 3. PARTITION BY restarts the numbering for each category and ORDER BY decides what top means. The ranking has to be computed in a subquery or CTE because a window function cannot be used directly in the WHERE clause of the same query level. ROW_NUMBER always gives distinct numbers, RANK leaves gaps after ties, and DENSE_RANK does not, so if two products tie for second I would use DENSE_RANK to keep both. The advantage over GROUP BY is that window functions keep every row while adding the group-level calculation beside it, which is also how you compute running totals and month-on-month change.'
      },
      {
        id: 'data-analyst-t11',
        q: 'A column in your dataset has fifteen percent missing values. What do you do with them?',
        topic: 'Data cleaning',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Find out why they are missing before deciding how to fill them.',
        ideal: 'First I find out why the values are missing, because not collected, not applicable and system error need different treatment. If a value is missing because the situation does not apply, filling it with an average is simply wrong and it may deserve its own category such as Not Applicable. If the missingness is small and looks random, dropping those rows is acceptable, but at fifteen percent dropping can bias the result, so I would prefer imputing with the median for skewed numbers, the mean for symmetric ones, the mode for categories, or forward fill for time series. It often helps to add a flag column marking that the value was imputed so any later model or report can see it. I never fill with zero when zero is a meaningful value like amount or quantity, since that silently drags averages down. Finally I state in the report how many values were changed and by which method.'
      },
      {
        id: 'data-analyst-t12',
        q: 'Marketing ran a discount campaign and wants to know if it worked. How would you measure that?',
        topic: 'Experimentation',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Compare against what would have happened without the campaign, not just against last month.',
        ideal: 'The key question is what would have happened anyway, so I need a comparison group rather than only a before and after number. The cleanest method is a randomised A B test where a similar set of customers does not get the discount, and then I compare the chosen success metric, agreed before the campaign, such as conversion rate or revenue per customer. If randomisation was not done, I compare the exposed group against a similar unexposed region or segment over the same period, using a difference in differences approach that removes the common trend. I would also check whether the lift is statistically significant and, more importantly, whether it is large enough to matter after the cost of the discount, so I measure margin and not just revenue. I would look for cannibalisation, meaning customers who would have bought at full price anyway, and for a pull-forward effect where sales simply move earlier and then dip. Finally I report the assumptions and the confidence honestly instead of claiming a clean causal win.'
      },
      {
        id: 'data-analyst-t13',
        q: 'Your dashboard shows revenue of 4.2 crore but the finance team reports 3.9 crore. How do you handle that?',
        topic: 'Reconciliation',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Two correct numbers usually mean two different definitions.',
        ideal: 'I would never quietly change my number to match theirs. First I compare definitions, because gross versus net, tax included or excluded, cancelled orders, returns, discounts and inter-company entries are the usual reasons for a gap. Then I compare the boundaries, meaning the exact date range, the time zone, the currency conversion rate and whether the data refreshed at a different cut-off time. Next I reconcile stepwise, taking one region or one week and drilling to row level to see exactly which transactions exist in one source and not the other, which usually reveals a single rule difference. I then sit with the finance team, agree one official definition, document it in a metric dictionary and add it as a note on the dashboard so the same argument does not repeat. If the difference came from my pipeline I fix it and add a validation check that compares totals to the source automatically.'
      },
      {
        id: 'data-analyst-t14',
        q: 'A query on a fifty million row table takes ten minutes to run. How do you speed it up?',
        topic: 'Query performance',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Look at the execution plan and reduce how many rows the database has to touch.',
        ideal: 'I would start with EXPLAIN or the execution plan to see whether the database is doing a full table scan, a bad join order or a huge sort. Then I reduce the rows read by filtering early on a date or status column and making sure that column is indexed, and by selecting only the columns I need instead of using SELECT star. Indexes should cover the join keys and the main WHERE columns, and I must avoid wrapping an indexed column in a function such as YEAR(order_date), which prevents index use, and instead compare against a date range. Large repeated aggregations belong in a pre-aggregated summary table or materialised view refreshed nightly, so dashboards read a small table. Other wins are replacing a correlated subquery with a join, using partitions on date if the table is partitioned, and avoiding unnecessary DISTINCT and ORDER BY on huge result sets. While developing I test on a LIMIT or a sample so I do not wait ten minutes per attempt.'
      },
      {
        id: 'data-analyst-m1',
        q: 'Your manager wants an urgent number in two hours, but the underlying data is messy and you cannot fully validate it. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Deliver something useful, but be explicit about how much to trust it.',
        ideal: 'I would first ask what decision the number is for, because a rough directional figure and a board-ready figure need different levels of rigour. Then I would deliver the best estimate within the deadline, clearly labelled with the assumptions, the filters I applied and the known data gaps, for example that three days of data are missing so the total is understated. I would give a range rather than a single false-precision figure where possible. I would commit to a verified version by a stated time and then actually send it. What I would not do is present an unverified number as final, because a wrong number stated confidently damages trust far more than an honest caveat.'
      },
      {
        id: 'data-analyst-m2',
        q: 'Your analysis shows that the product your manager launched is losing money. How do you present that?',
        topic: 'Communication',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Make it about the data and the options, not about the person.',
        ideal: 'First I would re-check the analysis carefully, including cost allocation and the time period, because a claim like this must be right. Then I would share it privately before any group meeting, presenting it neutrally as what the data shows, with the method and assumptions visible so it can be challenged. I would focus on the business impact and on options, such as pricing changes, cost reduction or targeting a better segment, rather than on whether the launch was a mistake. I would keep the raw numbers ready so anyone can drill in, and I would be genuinely open to the possibility that I missed a cost or a benefit. Staying factual and unemotional is what makes uncomfortable analysis usable.'
      },
      {
        id: 'data-analyst-m3',
        q: 'Three teams ask you for reports on the same day and all of them say it is urgent. How do you handle it?',
        topic: 'Prioritisation',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Urgency is not the same as impact, so ask what each one unblocks.',
        ideal: 'I would ask each requester what decision depends on the report and by when it is actually needed, because that separates real deadlines from habit. Then I would check whether two of the requests overlap, since one well-built dataset often answers both. I would sequence them by impact and deadline, tell everyone clearly what they will get and when, and immediately flag to my manager if something important will slip so the call is made by the right person. Where possible I would negotiate scope, for example giving one team the headline number within an hour and the full breakdown next day. Afterwards I would automate or templatise the request that keeps repeating so it stops competing for time.'
      },
      {
        id: 'data-analyst-m4',
        q: 'A week after sending a report you realise one of the numbers in it was wrong. What do you do?',
        topic: 'Integrity',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'The cost of telling grows every day you wait.',
        ideal: 'I would tell my manager and the recipients as soon as I am sure, without waiting or hoping nobody noticed. I would state what was wrong, the corrected figure, why it happened and, most importantly, whether any decision was taken based on the wrong number so the impact can be assessed. Then I would send the corrected report clearly marked as revised, with a short note on what changed. After that I would fix the root cause rather than just the output, for example adding a validation check on row counts or totals, or a peer review step for numbers that go to leadership. Owning the mistake plainly and preventing a repeat is what protects credibility.'
      }
    ]
  },
  {
    id: 'ml-engineer',
    title: 'AI / ML Engineer',
    short: 'AI/ML',
    icon: '🤖',
    color: '#a29bfe',
    blurb: 'You take messy real data, turn it into features, train and evaluate a model, and then make that model usable by a real application without it breaking later.',
    hires: ['Fractal Analytics', 'Tiger Analytics', 'Quantiphi', 'TCS', 'Infosys', 'LTIMindtree'],
    skills: [
      'Python with pandas and numpy',
      'Feature engineering and data cleaning',
      'Supervised learning algorithms',
      'Overfitting, bias and variance',
      'Evaluation metrics and validation strategy',
      'scikit-learn workflow and pipelines',
      'Neural network and gradient descent basics',
      'Serving a model behind an API'
    ],
    prep: [
      'Finish two end-to-end projects where you can defend every choice, especially the metric and the validation split',
      'Be able to explain overfitting, precision versus recall and data leakage in plain words with a real example',
      'Practise pandas on a raw messy CSV without looking things up, since many interviews start with a live data cleaning task'
    ],
    questions: [
      {
        id: 'ml-engineer-t1',
        q: 'Explain supervised, unsupervised and reinforcement learning with one example each.',
        topic: 'ML basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'The difference is what kind of feedback the algorithm gets.',
        ideal: 'In supervised learning the data has labels, so the model learns a mapping from input to a known answer, for example predicting house price from area or classifying an email as spam. In unsupervised learning there are no labels, so the algorithm finds structure by itself, for example K-means clustering customers into segments or PCA reducing dimensions. In reinforcement learning an agent takes actions in an environment and learns from rewards and penalties over time, for example a game-playing agent or a robot learning to walk. Supervised problems split further into classification for categories and regression for continuous numbers. The practical difference in a job is that supervised learning needs labelled data, which is usually the hardest part to get.'
      },
      {
        id: 'ml-engineer-t2',
        q: 'What is overfitting, how do you detect it, and how do you fix it?',
        topic: 'Model quality',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare how the model does on data it has seen versus data it has not.',
        ideal: 'Overfitting means the model has memorised the training data, including its noise, instead of learning the general pattern, so it performs well on training data and badly on new data. I detect it by comparing training and validation scores, where a high training accuracy with a much lower validation accuracy is the classic sign, and by plotting learning curves where validation error starts rising while training error keeps falling. Fixes include getting more or more varied data, simplifying the model or reducing features, adding regularisation such as L1 or L2, using dropout in neural networks, early stopping, and cross-validation to make the estimate stable. For trees, limiting depth or minimum samples per leaf and using ensembles like random forest also help. The opposite problem is underfitting, where the model is too simple and does badly on both training and validation.'
      },
      {
        id: 'ml-engineer-t3',
        q: 'Why do we split data into train, validation and test sets? Can I not just use the test set to tune my model?',
        topic: 'Validation',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Every time you look at a set to make a decision, it stops being unseen.',
        ideal: 'The training set is used to fit the model parameters, the validation set is used to choose hyperparameters and compare models, and the test set is kept untouched to give one honest estimate of performance on unseen data. If I tune on the test set I am indirectly fitting to it, so the reported score becomes optimistic and will not hold in production. A common split is around seventy, fifteen and fifteen percent, and when data is limited I use k-fold cross-validation on the training portion instead of a fixed validation split. For classification with imbalanced classes I use stratified splitting so each split keeps the same class ratio. For time-series data I must split by time, training on the past and testing on the future, because a random split lets the model see the future and inflates the score.'
      },
      {
        id: 'ml-engineer-t4',
        q: 'What is the difference between classification and regression, and which metric would you report for each?',
        topic: 'Metrics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'The output type decides the metric family.',
        ideal: 'Regression predicts a continuous number such as price, demand or temperature, and is measured with mean absolute error, root mean squared error or R squared, where RMSE punishes large errors more because it squares them and MAE is easier to explain to business users. Classification predicts a category such as spam or not spam, and is measured with accuracy, precision, recall, F1 score, the confusion matrix and ROC AUC. Despite its name logistic regression is a classification algorithm, since it outputs a probability that is thresholded into a class. The choice of metric must match the business cost of each type of error, so accuracy alone is a poor choice when classes are imbalanced. I would always show the confusion matrix along with the headline number because it tells you which mistakes the model is actually making.'
      },
      {
        id: 'ml-engineer-t5',
        q: 'You are handed a new CSV file. What are the first pandas commands you run and what are you looking for?',
        topic: 'pandas',
        difficulty: 'easy',
        round: 'technical',
        hint: 'You are trying to learn the shape, the types and the dirt before you model anything.',
        ideal: 'I start with pd.read_csv, then df.shape to see the size, df.head to eyeball the columns, and df.info to see data types and non-null counts in one view. Then df.isnull().sum() shows missing values per column, df.duplicated().sum() shows duplicate rows, and df.describe gives min, max, mean and quartiles which quickly expose impossible values like a negative age or an amount of ten crore. For categorical columns I run value_counts to find inconsistent spellings and rare categories, and I check that date columns parsed as datetime rather than object. I also check the target column distribution early, because a heavy imbalance changes the whole approach. Only after this do I plan cleaning, encoding and feature engineering.'
      },
      {
        id: 'ml-engineer-t6',
        q: 'You build a fraud model where only one percent of transactions are fraud and it gives ninety-nine percent accuracy. Are you happy with it?',
        topic: 'Imbalanced data',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Work out the accuracy of a model that always predicts the majority class.',
        ideal: 'No, because a model that simply predicts not fraud every single time also scores ninety-nine percent while catching zero fraud, which is the accuracy paradox. With imbalanced data I look at the confusion matrix, precision, recall, F1 and the precision-recall AUC rather than accuracy. Recall matters because missing a fraud is expensive, but precision matters too because every false positive costs an analyst review or blocks a genuine customer, so the business decides the balance. Practical fixes are class weights in the algorithm, resampling such as undersampling the majority or SMOTE on the training folds only, and tuning the decision threshold instead of leaving it at 0.5. I also make sure splits are stratified so the rare class appears in every fold, and I validate on the natural imbalanced distribution, never on a rebalanced test set.'
      },
      {
        id: 'ml-engineer-t7',
        q: 'Explain precision and recall in simple words and tell me a case where you would sacrifice one for the other.',
        topic: 'Metrics',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One is about how clean your alarms are, the other about how many real cases you caught.',
        ideal: 'Precision is out of everything the model flagged as positive, how many really were positive, so it measures how trustworthy an alert is. Recall is out of all the real positives, how many the model actually caught, so it measures coverage. In cancer screening I would push recall up even at the cost of precision, because missing a sick patient is far worse than an extra test on a healthy one. In a spam filter I would protect precision, because pushing a genuine job offer into the spam folder is worse than letting some spam through. F1 is the harmonic mean of the two and is used when you need a single balanced number. The two move against each other as you shift the probability threshold, so I choose the threshold from the precision-recall curve based on the business cost, not by default.'
      },
      {
        id: 'ml-engineer-t8',
        q: 'What is the bias and variance tradeoff?',
        topic: 'Model theory',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think of a model that is too simple versus one that memorises.',
        ideal: 'Bias is error from wrong or overly simple assumptions, so a high bias model underfits and does badly on both training and test data, like fitting a straight line to a curved relationship. Variance is sensitivity to the particular training sample, so a high variance model fits noise and shows a large gap between excellent training performance and poor test performance. Total expected error is roughly bias squared plus variance plus irreducible noise, and reducing one usually increases the other, so the goal is the balance point with the lowest test error. Increasing model complexity lowers bias and raises variance, while regularisation, more training data and simpler models do the opposite. In practice bagging methods like random forest mainly reduce variance, while boosting methods mainly reduce bias, which is why both are useful.'
      },
      {
        id: 'ml-engineer-t9',
        q: 'How does a decision tree decide where to split, and why does random forest usually beat a single tree?',
        topic: 'Algorithms',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One tree memorises easily, so think about what averaging many different trees does.',
        ideal: 'A decision tree looks at every feature and every candidate threshold and picks the split that best separates the classes, measured by the largest reduction in Gini impurity or entropy, and for regression by the largest reduction in variance. It repeats this recursively until a stopping rule such as maximum depth or minimum samples per leaf is hit. A single deep tree is easy to read but overfits badly, because it can keep splitting until each leaf holds one row. Random forest trains many trees, each on a bootstrap sample of rows and each split considering only a random subset of features, then averages the predictions or takes a majority vote. That randomness makes the trees less correlated, so averaging cancels much of their individual noise and cuts variance sharply while handling non-linear relationships and giving feature importance. The trade-off is that it is slower, larger and much harder to explain than one tree.'
      },
      {
        id: 'ml-engineer-t10',
        q: 'What is feature scaling, which algorithms need it, and where exactly should you apply it?',
        topic: 'Preprocessing',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Ask which algorithms measure distance or take gradient steps.',
        ideal: 'Feature scaling puts numeric features on a comparable range, either by standardisation which subtracts the mean and divides by the standard deviation, or by min-max normalisation which squeezes values into zero to one. It matters for any algorithm based on distance or gradients, such as KNN, K-means, SVM, PCA, logistic and linear regression trained with gradient descent, and neural networks, because otherwise a feature measured in lakhs dominates one measured in years. Tree-based models like decision trees, random forest and gradient boosting do not need it, since they split on thresholds and are unaffected by monotone rescaling. The scaler must be fitted only on the training data and then applied to validation and test data, because fitting on everything leaks information about the test set. The cleanest way is to put the scaler and the model into a scikit-learn Pipeline so the same transformation is applied consistently during cross-validation and at prediction time.'
      },
      {
        id: 'ml-engineer-t11',
        q: 'Your model works in a Jupyter notebook. How do you make the mobile app able to use it?',
        topic: 'Deployment',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Everything you did to the data before training has to happen again at prediction time.',
        ideal: 'I save the trained artefact with joblib or pickle, and crucially I save the whole preprocessing pipeline with it, including the encoders and scalers, so the exact same transformations run at prediction time. Then I wrap it in a small web service using FastAPI or Flask, exposing an endpoint that accepts JSON, validates the input fields and types, builds the feature vector in the same column order, and returns the prediction and probability. I pin the library versions in requirements and usually containerise it with Docker, because a scikit-learn version mismatch can silently change behaviour or fail to load the pickle. Depending on the use case I offer real-time predictions for single records and a batch job for bulk scoring. I log inputs and predictions, add basic monitoring for latency, error rate and input distribution drift, keep the model version in the response, and plan how the model will be retrained and rolled back.'
      },
      {
        id: 'ml-engineer-t12',
        q: 'What is data leakage? Give me an example a beginner would actually cause.',
        topic: 'Data leakage',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Ask whether that information would really be available at the moment of prediction.',
        ideal: 'Data leakage is when information gets into training that would not be available at prediction time, or that comes from the evaluation data, so the score looks great and then collapses in production. The most common beginner mistake is scaling or imputing missing values on the full dataset before splitting, so statistics from the test rows influence training. Another is including a column that is a consequence of the target, such as using a payment_received or claim_settled flag to predict default, which is effectively the answer. A third is randomly splitting time-series data so future rows train a model that is then tested on the past, and a fourth is target encoding a categorical column using the whole training target without folds. The warning sign is a validation score that seems too good to be true. The prevention is to split first, do every transformation inside a pipeline fitted on training folds only, use time-based splits for temporal data, and ask for each feature whether it would truly exist at the moment of prediction.'
      },
      {
        id: 'ml-engineer-t13',
        q: 'Explain what actually happens in one training step of a neural network.',
        topic: 'Deep learning',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Forward to get the loss, backward to get the blame, then a small step.',
        ideal: 'In the forward pass the input is multiplied by the weights of each layer, a bias is added and a non-linear activation such as ReLU is applied, layer by layer, until the output layer produces a prediction, and a loss function like cross-entropy or mean squared error measures how wrong it is. Backpropagation then applies the chain rule from the loss backwards through the layers to compute the gradient of the loss with respect to every weight, which tells how much each weight contributed to the error. Gradient descent updates each weight as weight minus learning rate times gradient, so the loss goes down a little. This runs on mini-batches rather than the whole dataset, and one full pass over the data is an epoch. If the learning rate is too high training diverges and if it is too low it crawls, which is why adaptive optimisers like Adam are common. Non-linear activations are essential because stacking linear layers alone would collapse into a single linear function, and ReLU is preferred over sigmoid in deep networks to reduce vanishing gradients.'
      },
      {
        id: 'ml-engineer-t14',
        q: 'Your model performed well at launch but three months later its predictions are noticeably worse. What are the possible reasons?',
        topic: 'Production ML',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The model has not changed, so something around it has.',
        ideal: 'The most likely cause is drift, either data drift where the input distribution has moved, for example new customer segments or a new product mix, or concept drift where the relationship between inputs and the target itself has changed, for example fraud tactics evolving or prices shifting after inflation. Another very common cause is training and serving skew, where the production preprocessing differs slightly from the training pipeline, or an upstream team changed a column name, unit or default value and the feature silently became garbage. Seasonality can also explain it if the model was trained on only one part of the year. Feedback loops matter too, since blocking flagged transactions changes the data the model later sees. The fix is monitoring, meaning tracking input distributions, missing rates and prediction distribution as well as accuracy on a delayed labelled sample, with alerts on drift. Then I retrain on recent data on a schedule or a trigger, validate the new model against the old one on a holdout or in a shadow deployment, and keep model and data versioned so I can roll back.'
      },
      {
        id: 'ml-engineer-m1',
        q: 'Your model gets ninety-two percent accuracy but the business team says the predictions are useless. How do you handle that?',
        topic: 'Business alignment',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'The gap is usually between your metric and their decision.',
        ideal: 'I would not defend the number, I would ask what decision they take with the output and where it feels wrong, then look at the errors on exactly those cases. Very often the metric is misaligned, for example accuracy is high because the model is right on the easy majority while failing on the rare cases that carry all the business value, or the threshold is set for balanced accuracy when the business needs high recall. I would show the confusion matrix in their language, such as how many real defaulters were missed and how many good customers were blocked, and translate it into rupees where possible. Then I would agree a success metric with them upfront, adjust the threshold or the objective, and run a small pilot on live data before a full rollout. If the framing itself is wrong, I would rather redefine the problem than tune a model nobody uses.'
      },
      {
        id: 'ml-engineer-m2',
        q: 'You have three weeks to deliver a model but only half the data is labelled. What do you do?',
        topic: 'Planning',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Raise the constraint early and get something working on what you do have.',
        ideal: 'I would flag the gap to my manager in the first days rather than at the end, with a clear statement of what is achievable with the labels available. Then I would build a simple baseline on the labelled half immediately, since that sets a benchmark and reveals whether the features are even predictive. In parallel I would improve labelling by writing clear labelling guidelines, prioritising a stratified sample that covers the rare and confusing cases, and asking for domain expert time, since a few hundred good labels often beat thousands of noisy ones. Where possible I would use weak supervision such as rule-based labels, or semi-supervised approaches, while being honest that these add noise. Throughout I would keep the manager updated on the risk and propose a scoped deliverable, for example a working pipeline plus a baseline model in three weeks with accuracy improving as labels arrive.'
      },
      {
        id: 'ml-engineer-m3',
        q: 'A senior insists you use a deep learning model, but you believe logistic regression is enough for this dataset. How do you handle the disagreement?',
        topic: 'Teamwork',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Let a quick experiment settle it instead of a debate.',
        ideal: 'I would listen first, because the senior may know about upcoming data volume, a future use case or a client expectation that I do not. Then I would propose settling it with evidence, running both on the same validation split and comparing not only accuracy but training time, inference latency, data requirement, interpretability and maintenance cost. If the simple model is within a fraction of a percent, I would present that a logistic regression is easier to explain to a regulator or a client and cheaper to run, and if deep learning wins clearly I would happily adopt it. I would present the comparison as options rather than as being right, and accept the final call once it is made, documenting the reasoning. Disagreeing with data and no ego is what makes the discussion useful rather than personal.'
      },
      {
        id: 'ml-engineer-m4',
        q: 'Just before deployment you notice the training data barely represents one region and the model performs worse for those users. What do you do?',
        topic: 'Responsible AI',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'This is a launch-blocking finding, not a footnote.',
        ideal: 'I would raise it before deployment, because shipping a model I know performs worse for one group is both an ethical and a business risk. I would first quantify it by reporting the key metrics separately for each group instead of only the overall number, so the size of the gap is visible. Then I would investigate whether it comes from too few samples, from a proxy feature encoding the group, or from a genuinely different underlying behaviour, and try fixes such as collecting more data from that region, reweighting or resampling during training, and tuning thresholds carefully with the business rather than silently. I would document the limitation and the intended scope of use, and involve the product owner and, if relevant, compliance in the decision. If the gap cannot be closed in time, I would recommend a limited rollout excluding the affected group with a clear plan to fix it, rather than quietly launching.'
      }
    ]
  },
  {
    id: 'qa',
    title: 'QA / Test Engineer',
    short: 'QA',
    icon: '🐞',
    color: '#ff7675',
    blurb: 'A QA engineer checks new software before customers ever see it, by writing and running test cases, breaking the product on purpose, and reporting every bug clearly enough for a developer to fix it.',
    hires: ['Infosys', 'TCS', 'Accenture', 'Cognizant', 'Capgemini', 'Zoho'],
    skills: [
      'STLC and test planning',
      'Test case design techniques',
      'Defect life cycle and bug reporting',
      'Manual testing types',
      'Selenium WebDriver basics',
      'API testing with Postman',
      'SQL for backend checks',
      'Agile ceremonies and JIRA'
    ],
    prep: [
      'Write 20 test cases for an app you use daily, such as a food delivery app, and get them reviewed by a friend.',
      'Install Selenium with Java or Python and automate one full login flow end to end on your own laptop.',
      'Practise explaining severity versus priority using a real example from your college project.'
    ],
    questions: [
      {
        id: 'qa-t1',
        q: 'What is the difference between manual testing and automation testing, and how do you decide which one to use?',
        topic: 'Manual vs automation',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about how many times the same test has to be repeated.',
        ideal: 'Manual testing means a person runs the steps and judges the result, which suits new features, exploratory testing and anything about look and feel. Automation means a script runs the steps, which suits tests that must be repeated many times such as regression and smoke suites. Automation costs effort to build and needs maintenance, so it pays off only on screens that are stable. A practical rule is to automate repeated, stable and high risk flows, and keep manual testing for one time checks and anything needing human judgement. In real projects both are used together, not one instead of the other.'
      },
      {
        id: 'qa-t2',
        q: 'What information do you put in a bug report so the developer can fix it without asking you anything?',
        topic: 'Bug reporting',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Imagine the developer cannot reach you for two days.',
        ideal: 'A good report has a short clear title, the build or version number, the environment such as browser, device and operating system, and numbered steps to reproduce. It states the expected result and the actual result side by side so the difference is obvious. It carries severity and priority plus evidence such as a screenshot, a short video or the log file. Test data like the user id or the exact input used should also be written down. The test is simple, anyone should be able to reproduce the bug from the report alone.'
      },
      {
        id: 'qa-t3',
        q: 'What is the difference between severity and priority, and can you give an example of a high severity but low priority bug?',
        topic: 'Defect management',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One is about how much damage, the other about how soon.',
        ideal: 'Severity is how badly the defect damages the product and it is judged by the tester from a technical view. Priority is how soon the business wants it fixed and it is usually decided by the product owner or manager. A crash on a rarely used report screen that only two customers open once a year is high severity but low priority. A spelling mistake in the company name on the home page is low severity but high priority because every visitor sees it. They are set independently, so any combination of the two is possible.'
      },
      {
        id: 'qa-t4',
        q: 'What is smoke testing and how is it different from sanity testing?',
        topic: 'Test types',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One is done on a fresh build, the other after a small fix.',
        ideal: 'Smoke testing is a quick check on a new build to see whether the main flows work at all, for example login, search and checkout. If smoke fails the build is rejected and sent back, so the team does not waste a day testing a broken build. Sanity testing is a narrow but deeper check done after a small fix or change, to confirm that this particular area now behaves correctly. So smoke is wide and shallow while sanity is narrow and focused. Both are short confidence checks and neither replaces the full test cycle.'
      },
      {
        id: 'qa-t5',
        q: 'What is a test case, and which fields do you write inside one?',
        topic: 'Test case design',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about what a new joiner needs to run your test tomorrow.',
        ideal: 'A test case is a written set of steps with input data and an expected result, used to verify one condition of the application. The usual fields are test case id, module, title, preconditions, test data, steps, expected result, actual result and status such as pass, fail or blocked. It should also carry a link to the requirement or user story so coverage can be tracked. Each test case should check one thing only, because then a failure points straight at the cause. Clear wording matters, since any team member should get the same result running it.'
      },
      {
        id: 'qa-t6',
        q: 'Take a simple login page with an email field, a password field and a submit button. What test cases would you write for it?',
        topic: 'Test design scenario',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Cover valid, invalid, blank, limits, and things that are not about the two fields at all.',
        ideal: 'Start with the positive case, valid email and valid password should log in and land on the correct page. Then negative cases, wrong password, unregistered email, both wrong, blank fields, only spaces, and the error message should be clear without revealing which field was wrong. Add field level checks such as maximum and minimum length, email format validation, password masking, copy and paste behaviour, trimming of spaces and the enter key working like the button. Add security and session checks, account lock after repeated failures, password not visible in the network request, and the browser back button not returning to a logged in page after logout. Finish with non functional checks such as different browsers, mobile screen size, and how long the login takes.'
      },
      {
        id: 'qa-t7',
        q: 'Explain the defect life cycle from the moment you log a bug to the moment it is closed.',
        topic: 'Defect life cycle',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Follow the bug through every pair of hands it passes.',
        ideal: 'The tester logs the defect and it starts as New. A lead or developer reviews it and moves it to Assigned, or marks it Rejected if it is not a valid defect, Duplicate if the same one exists, or Deferred if it will be handled in a later release. The developer fixes it and moves it to Fixed or Ready for testing, and that fix arrives in the next build on the test environment. The tester retests, and if it works it becomes Closed, and if it still fails it is Reopened and goes back to the developer. Along with retesting the fix itself, a small regression around that area is done to confirm the fix did not break anything nearby.'
      },
      {
        id: 'qa-t8',
        q: 'The release is in two days and you cannot run the full regression suite. How do you decide what to test?',
        topic: 'Regression',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Go by risk and by what actually changed, not by the order in the document.',
        ideal: 'First find out exactly what changed in this build by reading the story list and talking to the developers. Test the changed modules first, then the modules that connect to them, because integration points break most often. Then add the high usage and high money flows such as login, cart, payment and reports, since a failure there hurts the most customers. Include recently fixed defects and areas that historically fail a lot. Finally send a written note of what was covered and what was skipped, so the remaining risk is a team decision and not a surprise.'
      },
      {
        id: 'qa-t9',
        q: 'What are equivalence partitioning and boundary value analysis? Apply them to an age field that accepts 18 to 60.',
        topic: 'Test techniques',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Bugs usually live at the edges of a range.',
        ideal: 'Equivalence partitioning splits the input into groups where every value behaves the same, so you test one value per group instead of every value. Here the groups are below 18, from 18 to 60, and above 60, so 10, 30 and 70 give good coverage with three tests. Boundary value analysis tests the edges because most coding mistakes are in the comparison signs, so you test 17, 18 and 19 at the lower edge and 59, 60 and 61 at the upper edge. You also cover invalid inputs such as blank, letters, special characters, zero, negative values and decimals. Used together, these two techniques give strong coverage with a small number of test cases, which is exactly what a tight release needs.'
      },
      {
        id: 'qa-t10',
        q: 'How do you locate an element in Selenium, and which locator do you prefer and why?',
        topic: 'Selenium',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about which locator still works after a UI redesign.',
        ideal: 'Selenium locates elements using id, name, class name, tag name, link text, partial link text, CSS selector and XPath. The best choice is id when it is unique and stable, because it is the fastest and easiest to read. When there is no id, a CSS selector is usually preferred over XPath since it is shorter and faster in most browsers. XPath is used when you must match on visible text, which a CSS selector cannot do, and it is still the easier option for walking up to a parent, though modern browsers now support the CSS :has() selector for that. Absolute XPath copied from the browser should be avoided because it breaks the moment the page layout changes, and asking developers to add stable test ids is a good long term fix.'
      },
      {
        id: 'qa-t11',
        q: 'The screen is not built yet but the API is ready. How would you test that API and what would you check?',
        topic: 'API testing',
        difficulty: 'medium',
        round: 'technical',
        hint: 'You are checking the contract, not the colours.',
        ideal: 'You can hit the API directly with a tool such as Postman by sending requests and inspecting the responses. Check the status codes, 200 for success, 201 for created, 400 for bad input, 401 when the token is missing or wrong, 403 when the user has no rights and 404 for not found. Check the response body, the field names, data types, mandatory fields, and that error messages are clear but do not leak internal details. Test authentication, expired tokens, boundary values, missing fields, wrong data types, large payloads and response time. Finally verify in the database that the record was really created or updated, because a success response does not always mean the data was saved correctly.'
      },
      {
        id: 'qa-t12',
        q: 'Your automation suite passes sometimes and fails sometimes with no code change. How do you find and fix these flaky tests?',
        topic: 'Automation stability',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Most flakiness comes from timing or from shared test data.',
        ideal: 'First gather evidence, rerun the failing test alone, keep the screenshot, log and video, and check whether it fails on the same step every time. The most common cause is timing, where the script acts before the page is ready, so replace fixed sleep calls with explicit waits on a real condition such as element visible or clickable. The second common cause is data, where tests share one record or depend on the order they run in, so make each test create and clean up its own data and stay fully independent. Other causes are unstable locators that change on each render, animations, popups and a slow shared environment. Keep a list of flaky tests, quarantine them from the main run so the team keeps trusting the report, and fix the root cause instead of rerunning until it passes.'
      },
      {
        id: 'qa-t13',
        q: 'You have to set up test automation for a brand new web product from zero. How would you design the framework?',
        topic: 'Framework design',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Separate the page details, the data and the tests from each other.',
        ideal: 'Choose a language and tool the team can maintain, for example Selenium with Java and TestNG, or Python with pytest, or Playwright if the team agrees. Use the Page Object Model so every screen has its own class holding locators and actions while the test file only calls those actions, which means one UI change is fixed in one place. Keep test data outside the code in JSON, CSV or Excel so the same test runs with many inputs, and keep environment values like URL, browser and credentials in a config file, never hard coded. Add reporting such as Extent Reports or Allure, screenshots on failure, proper logging and a Git repository from day one. Then connect it to the CI pipeline so a smoke suite runs on every build and the full regression runs nightly, and start with the most valuable flows rather than trying to automate everything at once.'
      },
      {
        id: 'qa-t14',
        q: 'How would you test the payment flow of a shopping app, including what happens when the payment gateway is down?',
        topic: 'End to end scenario',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Money bugs are about what state you are left in when something fails halfway.',
        ideal: 'Start with the happy path, add items to the cart, place the order, pay with a test card and confirm the order is created, the amount and taxes are correct and the confirmation message is sent. Then test failures, declined card, wrong OTP, insufficient balance and expired card, and confirm the order is not marked paid and the customer sees a clear message. Test interruptions, closing the browser after paying but before the redirect, losing network, and pressing back or refresh, and confirm there is no double charge and no duplicate order. Test the gateway being down or timing out, where the app should fail safely, show a pending status and later reconcile with the gateway rather than assume success. Also check refunds, partial refunds, rounding, currency, and that card details are never stored or written into logs, and always use the sandbox with test cards instead of real money.'
      },
      {
        id: 'qa-m1',
        q: 'It is the evening before release and you find a bug in a module the developer says works fine on his machine. What do you do?',
        topic: 'Release pressure',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Get the facts undeniable first, then let the right people decide.',
        ideal: 'First make the bug undeniable, reproduce it again on the shared test environment and capture the steps, screenshots, logs and build number. Then sit with the developer and walk through it, because a difference between machines usually means different data, browser version or configuration, and showing it live ends the argument quickly. Log it properly with severity and clear business impact, for example how many customers can hit it and whether money or data is affected. Take it to the lead or product owner with two options, fix and retest tonight, or release with a known issue and a workaround, and let them choose. Whatever is decided, record it in the defect and in the release note so the decision is documented and nobody is blamed later.'
      },
      {
        id: 'qa-m2',
        q: 'A developer keeps marking your bugs as not a bug. How do you handle that situation?',
        topic: 'Team conflict',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Argue with the requirement, never with the person.',
        ideal: 'Stay calm and keep it impersonal, because the goal is a correct product and not winning an argument. Go back to the requirement, user story or acceptance criteria and quote the exact line the behaviour breaks, so the discussion is based on the document. If the requirement is silent on that point, say so honestly and ask the business analyst or product owner to confirm the expected behaviour. At the same time improve my own reports, since many rejections are really reproduction problems caused by missing steps, data or environment details. If it keeps repeating, raise it as a process point in the stand up or with the lead, not as a personal complaint.'
      },
      {
        id: 'qa-m3',
        q: 'The build reached you two days late, you have covered only sixty percent of your test cases, and the manager wants sign off today. What do you say?',
        topic: 'Sign off and risk',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Never hide coverage, report the risk in numbers instead.',
        ideal: 'I would not give a clean sign off for testing that was not done, because that hides risk instead of removing it. I would send a clear status showing what was tested and passed, what failed, and exactly which areas remain untested, together with the open defects and their severity. I would spend the remaining hours on the highest risk areas first, the main customer journeys and the code that changed in this build. Then I would give a conditional sign off that states the residual risk in plain words, and let the manager or product owner accept it in writing. The business can still choose to release, but it will be an informed decision rather than a blind one.'
      },
      {
        id: 'qa-m4',
        q: 'A bug in an area you tested reached the customer. In the review meeting your lead asks how it happened. How do you answer?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Own it first, then talk about the gap in the process.',
        ideal: 'I would own it without excuses and state the facts, what I tested, which data and environment I used, and why that scenario was not covered. Then I would explain the real gap honestly, for example the case was missing from the test suite, the requirement was unclear, or the fix landed after my last run. I would immediately add the missing test case to regression and automate it so the same escape cannot happen again. I would also suggest one process improvement, such as reviewing requirements before test design or running a smoke test on the exact production build. Teams respect a tester who improves the process rather than one who defends himself.'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps / Cloud Engineer',
    short: 'DevOps',
    icon: '☁️',
    color: '#00cec9',
    blurb: 'A DevOps engineer keeps the road from a developer\'s laptop to running software smooth, by automating builds, deployments, servers and monitoring so releases are frequent, fast and safe to roll back.',
    hires: ['TCS', 'Infosys', 'Accenture', 'IBM India', 'HCLTech', 'Amazon Cloud Support'],
    skills: [
      'Linux commands and permissions',
      'Git branching and conflicts',
      'CI/CD with Jenkins or GitHub Actions',
      'Docker images and containers',
      'Kubernetes basics',
      'AWS basics such as EC2, S3 and IAM',
      'Shell scripting',
      'Monitoring, logs and alerting'
    ],
    prep: [
      'Install Linux in VirtualBox and work only from the terminal for one week, no graphical file manager.',
      'Write a Dockerfile for a small app of yours and deploy it with a free GitHub Actions pipeline.',
      'Open one AWS free tier account and launch, connect to, and then terminate an EC2 instance yourself.'
    ],
    questions: [
      {
        id: 'devops-t1',
        q: 'Which Linux commands do you use to check free disk space, memory usage and the processes that are running?',
        topic: 'Linux basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Three commands a support engineer types every single day.',
        ideal: 'For disk space use df -h for the whole file system and du -sh on a folder to find what is eating the space. For memory use free -h, and for a live view of processes and load use top or htop. To find one specific process use ps -ef with grep, and to stop it use kill or kill -9 with the process id. Logs are usually checked with tail -f and grep on files under /var/log. Mentioning that -h means human readable output shows the interviewer you have really used these commands.'
      },
      {
        id: 'devops-t2',
        q: 'What does chmod 755 mean on a file, and when would you use it?',
        topic: 'Linux permissions',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Each digit is one set of people and the numbers simply add up.',
        ideal: 'Permissions are read which is 4, write which is 2 and execute which is 1, and the three digits stand for owner, group and others. So 755 means the owner gets read, write and execute which is 7, while group and others get read and execute which is 5. That is the normal setting for a script or a directory that everyone may run or enter but only the owner may modify. A plain data file is usually 644, and 777 gives everybody full control which is unsafe and should be avoided on servers. Ownership is changed with chown and current permissions are seen with ls -l.'
      },
      {
        id: 'devops-t3',
        q: 'What is the difference between git fetch and git pull?',
        topic: 'Git',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One only downloads, the other also changes your working files.',
        ideal: 'git fetch downloads new commits and branch information from the remote but does not touch your working files, so you can inspect the changes before applying them. git pull performs a fetch and then immediately merges the remote branch into your current branch, so your files change at once. Fetch is therefore the safer command when you are unsure, and you can follow it with git log or git diff to see what is coming. git pull with the rebase option replays your local commits on top of the remote ones and keeps the history in a straight line. Conflicts can only appear in the merge or rebase part, never in a plain fetch.'
      },
      {
        id: 'devops-t4',
        q: 'What is Docker, and how is a container different from a virtual machine?',
        topic: 'Docker',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare how much each one has to carry with it.',
        ideal: 'Docker packages an application together with its libraries, dependencies and settings into an image that behaves the same on any machine. A container is a running copy of that image, and it shares the host operating system kernel, so it starts in seconds and uses very little memory and disk. A virtual machine carries a complete guest operating system on a hypervisor, which makes it heavier and slower to boot but gives stronger isolation. Containers isolate at process level while virtual machines isolate at hardware level. In practice containers remove environment mismatches between developer laptops, testing and production, and let many services run on one server.'
      },
      {
        id: 'devops-t5',
        q: 'Explain CI and CD in simple words to someone who has never used a pipeline.',
        topic: 'CI/CD',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about what should happen automatically the moment code is pushed.',
        ideal: 'Continuous integration means developers push code to a shared repository frequently, and on every push the system automatically builds it and runs the tests, so a breakage is found in minutes instead of weeks. Continuous delivery means the tested build is automatically packaged and kept ready to release, so going live becomes a single approval. Continuous deployment goes one step further and releases every passing build to production without any manual click. The benefit is many small safe changes instead of one big risky release at the end. Common tools are Jenkins, GitHub Actions, GitLab CI and Azure DevOps.'
      },
      {
        id: 'devops-t6',
        q: 'Take me through what happens in your pipeline from a developer pushing code to the application running for real users.',
        topic: 'Pipeline stages',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Name the stages in order and say what makes each one fail.',
        ideal: 'A push or pull request triggers the pipeline through a webhook. The pipeline checks out the code, installs dependencies, compiles or builds it, and runs unit tests, and it stops immediately if any test fails. Then it runs code quality and security scans, builds a Docker image, tags it with the commit id and pushes it to a registry such as ECR or Docker Hub. The deploy stage takes that exact image to development or staging, runs smoke and integration tests, and only then goes to production, usually behind a manual approval. After deployment a health check runs, and if it fails the pipeline rolls back to the previous image and alerts the team, and the same image is promoted through environments so nothing is rebuilt differently.'
      },
      {
        id: 'devops-t7',
        q: 'What is the difference between a Docker image and a container, and what do the COPY, RUN and CMD lines in a Dockerfile do?',
        topic: 'Dockerfile',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The image is the recipe and the container is the cooked dish.',
        ideal: 'An image is a read only template built from a Dockerfile, and a container is a running instance of that image with a writable layer on top, so many containers can come from a single image. In the Dockerfile, FROM selects the base image, COPY brings files from your project into the image, and RUN executes a command while the image is being built, for example installing packages. CMD or ENTRYPOINT defines the command that starts when the container runs, so it executes at run time and not at build time. Every instruction creates a cached layer, so putting rarely changing steps near the top makes rebuilds much faster. Keeping images small with a slim base image and a dockerignore file saves build, push and pull time.'
      },
      {
        id: 'devops-t8',
        q: 'A user reports that the website is down. How do you find out what is wrong?',
        topic: 'Troubleshooting',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Work from the outside inwards, one layer at a time.',
        ideal: 'First confirm the problem, is it down for everyone or one user, and check from another network as well as from the monitoring dashboard. Then check reachability and DNS with ping and curl, and look at the status code, because 502 or 503 points to the backend while a timeout points to network, firewall or load balancer. Log in to the server and check the service is running with systemctl status, then check CPU, memory and disk with top and df -h, since a full disk is a very common cause. Read the application and web server logs around the failure time with tail and grep, and check whether a recent deployment or configuration change matches that timestamp. Restore service first by restarting or rolling back, then write down the root cause and add an alert so it is detected before a user reports it next time.'
      },
      {
        id: 'devops-t9',
        q: 'What is the difference between git merge and git rebase, and how do you resolve a merge conflict?',
        topic: 'Git branching',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One keeps history as it really happened, the other rewrites it into a line.',
        ideal: 'Merge joins two branches and creates a merge commit, so the real history including the branching is preserved. Rebase moves your commits so they sit on top of the latest target branch, giving a straight history but rewriting the commit ids. The common team rule is to rebase your own local branch to stay updated, but never rebase a branch that others are already working on. A conflict occurs when the same lines were changed on both sides, and Git marks the file with conflict markers, so you open it, keep the correct code, remove the markers, run git add on that file and then continue the merge or rebase. If it goes wrong you can safely stop with git merge --abort or git rebase --abort and start again.'
      },
      {
        id: 'devops-t10',
        q: 'In AWS, what are EC2, S3 and IAM used for?',
        topic: 'Cloud basics',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One is a computer, one is a storage room, one is the set of keys.',
        ideal: 'EC2 is a virtual server in the cloud where your application runs, and you choose its size, operating system, key pair and security group which acts as its firewall. S3 is object storage for files such as images, backups, logs and static websites, it scales without limit and its buckets must never be left publicly open by accident. IAM decides who can do what, through users, groups, roles and policies, and the rule is least privilege rather than giving everyone administrator rights. An application running on EC2 should use an IAM role instead of access keys written into the code. Related basics an interviewer often adds are VPC for networking, RDS for managed databases, and CloudWatch for metrics, logs and alarms.'
      },
      {
        id: 'devops-t11',
        q: 'What is infrastructure as code, and why is it better than creating servers by hand in the cloud console?',
        topic: 'Infrastructure as code',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about recreating the exact same setup again next month.',
        ideal: 'Infrastructure as code means describing servers, networks, storage and permissions in files, for example Terraform or CloudFormation, and letting a tool create them for you. Those files live in Git, so every change is reviewed, versioned and can be rolled back exactly like application code. You can recreate identical development, staging and production environments in minutes, which removes the problem of an environment behaving differently from the others. Terraform keeps a state file mapping the code to the real resources, and terraform plan shows exactly what will be created, changed or destroyed before you apply it. Clicking in the console is fast once but it is not repeatable, not documented and impossible to audit later.'
      },
      {
        id: 'devops-t12',
        q: 'You deploy a new version and error rates start spiking. What do you do in the first ten minutes?',
        topic: 'Incident and rollback',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Stop the bleeding first, understand the cause afterwards.',
        ideal: 'The first job is to stop customer pain, so roll back to the previous known good version or shift traffic away from the new release, because root cause analysis can wait. Announce it in the incident channel so everyone knows what is happening and nobody repeats the same checks. Confirm from dashboards and logs that error rate and latency return to normal after the rollback, which also proves the deployment was the trigger. Preserve evidence before anything is cleaned up, keep the failing image tag, the logs and the metric graphs. Once stable, run a blameless root cause analysis and add whatever was missing, a test, an alert, or a safer rollout such as canary or blue green so the next bad build is caught before all users see it.'
      },
      {
        id: 'devops-t13',
        q: 'How do you keep passwords, tokens and cloud keys out of your Git repository while still letting the pipeline use them?',
        topic: 'Secrets management',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The pipeline should be handed secrets at run time, not carry them inside.',
        ideal: 'Secrets must never be committed, not even inside a config file, because Git history keeps them forever even after the line is deleted. Store them in a secret store such as GitHub Actions secrets, Jenkins credentials, AWS Secrets Manager, HashiCorp Vault or Kubernetes secrets, and let the job read them as environment variables at run time. Add files like .env to .gitignore and keep only a sample file with dummy values in the repository so new joiners know what is needed. Prefer IAM roles or workload identity over long lived access keys wherever the cloud supports it, and rotate every secret on a schedule. If a secret is ever committed, treat it as leaked, revoke and rotate it immediately, and only then clean the history, because rotation matters far more than hiding the commit.'
      },
      {
        id: 'devops-t14',
        q: 'What does Kubernetes give you that plain Docker does not, and what are a pod, a deployment and a service?',
        topic: 'Kubernetes',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Imagine running a hundred containers across twenty machines.',
        ideal: 'Docker runs containers on one machine, while Kubernetes runs and manages them across a cluster, handling scheduling, scaling, self healing, rolling updates and rollbacks. A pod is the smallest unit and usually holds one main container with a shared network address and storage, and pods are disposable because they can be killed and recreated at any time. A deployment declares the desired state, for example three replicas of this image, and the controller keeps that number running and performs rolling updates. A service gives a stable name and address in front of constantly changing pods and load balances traffic to the healthy ones. Around these you use ConfigMaps and Secrets for configuration, Ingress for traffic from outside, and liveness and readiness probes so Kubernetes knows when a pod is healthy enough to receive requests.'
      },
      {
        id: 'devops-m1',
        q: 'It is two in the morning, you are on call, and production is down. Walk me through what you do.',
        topic: 'On call ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Communication is as much a part of the job as the technical fix.',
        ideal: 'Acknowledge the alert first so everyone knows a human is on it, then open an incident channel and post short status updates every few minutes. Check the dashboards and recent changes, because most outages follow a deployment or a configuration change, and restore service first by rolling back or failing over instead of debugging on live traffic. Escalate early if it is outside my area, since waking a colleague costs much less than an hour of downtime. Keep a running timeline of what was checked and changed while it is still fresh in memory. Next morning write the postmortem with root cause, customer impact and action items, and keep it blameless so people keep reporting problems honestly.'
      },
      {
        id: 'devops-m2',
        q: 'A developer asks you for admin access to a production server so he can debug something quickly. How do you respond?',
        topic: 'Access control',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Help him reach the goal without handing over the keys.',
        ideal: 'I would not give standing administrator rights on production, because that access has to be controlled, approved and auditable. First I would ask what he actually needs, which is usually logs, metrics or the ability to restart a service, and provide that through the logging dashboard or a read only role. If real access is genuinely required, I would arrange time limited and logged access with the owner\'s approval and stay on the call while it is used. I would also treat the request as feedback, since if developers keep needing production access then our logging and self service tools are not good enough. The tone matters, I say yes to solving his problem and no only to the risky way of doing it.'
      },
      {
        id: 'devops-m3',
        q: 'The team wants to deploy a large change on Friday evening and you think it is risky. How do you handle it?',
        topic: 'Risk and release',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Bring data and a safer alternative, not just an opinion.',
        ideal: 'I would raise the concern early and in business terms, if it breaks on Friday night the support team is thin and customers are affected all weekend. I would ask concrete questions, is there a tested rollback, is it behind a feature flag, has it passed staging, and who is available to support it. Then I would offer safer options, deploy Monday morning, deploy with the feature turned off, or run a canary release to a small percentage of users first. If the business still chooses to go ahead, I support it fully, prepare the rollback, add extra monitoring for the night and get the plan written down. Disagreeing openly and then committing completely is exactly what teams expect from a good engineer.'
      },
      {
        id: 'devops-m4',
        q: 'You run a command on the wrong server and break something in production. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Speed and honesty are what limit the damage.',
        ideal: 'Tell the team immediately, because ten minutes of hiding a mistake costs far more than the embarrassment of admitting it. Stop making further changes on my own, share exactly which command was run and at what time, and work with a colleague to restore from backup or roll back to the previous state. Once the service is healthy, verify data integrity and confirm from monitoring that everything is normal. Then look at why the mistake was even possible and add a guard rail, for example clearly separated production profiles, a confirmation prompt, tighter permissions or a scripted procedure instead of manual commands. Owning the mistake and fixing the system, not only the incident, is what turns a bad night into trust.'
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Analyst',
    short: 'Security',
    icon: '🛡️',
    color: '#2d3436',
    blurb: 'A security analyst watches an organisation\'s systems and alerts for signs of attack, checks applications and networks for weaknesses, and leads the response when something suspicious actually happens.',
    hires: ['TCS', 'Wipro', 'Accenture', 'Deloitte India', 'IBM India', 'Quick Heal'],
    skills: [
      'CIA triad and core security concepts',
      'OWASP Top 10 web risks',
      'Networking, ports and firewalls',
      'Encryption, hashing and certificates',
      'Authentication and access control',
      'SIEM and log analysis',
      'Incident response process',
      'Vulnerability assessment and basic pen testing'
    ],
    prep: [
      'Build a home lab in VirtualBox with Kali and one target machine and practise attacks offline only.',
      'Run OWASP Juice Shop or DVWA on your own laptop and find the top ten issues yourself.',
      'Learn to read logs, take any web server log file and explain what each failed login line means.'
    ],
    questions: [
      {
        id: 'cyber-security-t1',
        q: 'What is the CIA triad, and can you give one real example of each part being broken?',
        topic: 'CIA triad',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Three ideas, keep it secret, keep it correct, keep it working.',
        ideal: 'CIA stands for confidentiality, integrity and availability, the three goals behind every security control. Confidentiality means only the right people can see the data, and it breaks when a customer database leaks or a password is shared. Integrity means data is accurate and not changed without permission, and it breaks when an attacker edits a bank balance or tampers with a file. Availability means the system is there when users need it, and it breaks during a denial of service attack, a ransomware infection or a server crash. Controls map directly to these goals, encryption and access control for confidentiality, hashing and checksums for integrity, and backups and redundancy for availability.'
      },
      {
        id: 'cyber-security-t2',
        q: 'What is the difference between a virus, a worm and a trojan?',
        topic: 'Malware',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Focus on how each one travels from machine to machine.',
        ideal: 'A virus attaches itself to a file or program and needs a user action, such as opening that file, before it can run and spread. A worm spreads by itself across a network without any user action, which is why worm outbreaks grow extremely fast. A trojan pretends to be useful software so the user installs it willingly, and it then opens a backdoor or steals data quietly. Related types are ransomware which encrypts files and demands payment, and spyware which collects information in the background. Defences are similar for all of them, updated endpoint protection, patched systems, no software from unknown sources, and offline backups.'
      },
      {
        id: 'cyber-security-t3',
        q: 'What is the difference between authentication and authorisation?',
        topic: 'Access control',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One asks who you are, the other asks what you are allowed to do.',
        ideal: 'Authentication proves identity, using a password, an OTP, a fingerprint or a certificate. Authorisation decides what that identity is permitted to do, for example a clerk can view records while only a manager can approve them. Authentication happens first, and authorisation is then checked on every request that follows. Multi factor authentication strengthens the first step by combining something you know with something you have or something you are. In web applications a wrong password returns 401 unauthorised while a valid user without permission returns 403 forbidden.'
      },
      {
        id: 'cyber-security-t4',
        q: 'What does a firewall actually do, and where does it sit in a network?',
        topic: 'Firewalls',
        difficulty: 'easy',
        round: 'technical',
        hint: 'It is a rule based traffic filter, not an antivirus.',
        ideal: 'A firewall inspects traffic and allows or blocks it according to rules based on source and destination address, port and protocol. It sits at the boundary between networks, for example between the office network and the internet, and host firewalls also run on individual machines. A stateful firewall remembers active connections, so replies to traffic you started are allowed while unrequested traffic from outside is dropped. A next generation firewall or a web application firewall goes further and inspects application traffic, blocking patterns such as SQL injection. The standard practice is default deny, block everything and open only the ports that are genuinely needed, such as 443 for HTTPS.'
      },
      {
        id: 'cyber-security-t5',
        q: 'How would you recognise a phishing email, and what should an employee do after receiving one?',
        topic: 'Phishing',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Look at the real sender, the real link, and the emotion being used.',
        ideal: 'Phishing mails create urgency or fear, for example your account will be blocked today, and push you to click a link, open an attachment or share a password or OTP. Check the actual sender address rather than the display name, hover over links to see the real destination domain, and watch for slightly misspelled versions of known company names. Other signs are unexpected attachments, generic greetings, unusual grammar and a request that bypasses the normal process. The employee should not click or reply, should report it using the phishing button or to the security team, and then delete it. If someone already clicked, they must report immediately, disconnect from the network and change the password, because speed decides how much damage happens.'
      },
      {
        id: 'cyber-security-t6',
        q: 'Explain SQL injection and how a developer should prevent it.',
        topic: 'SQL injection',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The user input is being read as command, not as data.',
        ideal: 'SQL injection happens when user input is placed directly into a database query, so an attacker can add their own SQL, for example a condition that is always true in a login field to get in without a password. The impact can be reading the entire database, changing or deleting records, and in bad cases running commands on the server. The main fix is parameterised queries or prepared statements, so input is always treated as data and never as part of the command. Extra layers are input validation using an allow list, least privilege for the database account so the application cannot drop tables, safe use of stored procedures, and generic error messages that do not expose the query. A web application firewall can filter obvious attempts but it is a safety net, not the fix.'
      },
      {
        id: 'cyber-security-t7',
        q: 'What is the difference between symmetric and asymmetric encryption, and where is each used?',
        topic: 'Encryption',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Start by counting the keys involved.',
        ideal: 'Symmetric encryption uses one shared key for both encryption and decryption, examples are AES and the older DES, and because it is fast it is used for bulk data such as files, disks and live traffic. Asymmetric encryption uses a key pair, a public key anyone may have and a private key kept secret, examples are RSA and ECC, and it is much slower. What one key locks only the other can open, so the public key encrypts data only the owner can read, and the private key signs data anyone can verify. The weakness of symmetric encryption is safely sharing the key, so HTTPS uses asymmetric encryption to agree on a session key and then symmetric encryption for the conversation. Hashing is a third and different thing, it is one way and is not encryption at all.'
      },
      {
        id: 'cyber-security-t8',
        q: 'Why do we hash passwords instead of encrypting them, and what is salting?',
        topic: 'Password storage',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The server never actually needs to read the password back.',
        ideal: 'Hashing is one way, so nobody including the company can recover the original password, and that is fine because the system only compares the hash of what was typed with the stored hash. Encryption is two way, so whoever steals the key also gets every password in plain text, which is why it is the wrong tool here. A salt is a random value added to each password before hashing and stored alongside it, so two users with the same password get different hashes and precomputed rainbow tables become useless. Use a slow algorithm built for passwords such as bcrypt, scrypt or Argon2, because fast hashes like MD5 and SHA1 can be brute forced at enormous speed and are considered broken for this purpose. Add rate limiting, account lockout and multi factor authentication so even a guessed password is not enough.'
      },
      {
        id: 'cyber-security-t9',
        q: 'What is cross site scripting, and what is the difference between stored and reflected XSS?',
        topic: 'XSS',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The attacker\'s script ends up running inside another user\'s browser.',
        ideal: 'Cross site scripting is when an attacker gets script into a page so it runs in another user\'s browser with that user\'s session, allowing cookie theft, keylogging or actions performed as the victim. In stored XSS the script is saved on the server, for example in a comment or profile field, and it hits every user who opens that page, which makes it the most dangerous form. In reflected XSS the script travels in the request, usually a crafted link or search parameter, and the server echoes it straight back, so the victim must be tricked into clicking. DOM based XSS never reaches the server and happens entirely in client side JavaScript. The fixes are validating input, encoding output for the exact context it lands in, using a content security policy, and setting session cookies as HttpOnly so scripts cannot read them.'
      },
      {
        id: 'cyber-security-t10',
        q: 'What is the difference between a vulnerability assessment and a penetration test?',
        topic: 'VAPT',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One lists the unlocked doors, the other actually walks through them.',
        ideal: 'A vulnerability assessment scans systems with tools such as Nessus or OpenVAS and produces a list of known weaknesses with severity ratings, so it is broad, largely automated and run regularly. A penetration test is a controlled attack performed by a human who actually exploits weaknesses to prove real impact, for example chaining two medium issues into a full account takeover. The assessment answers what could be wrong, while the pen test answers what an attacker could really achieve. A pen test needs written authorisation and an agreed scope, otherwise the activity is illegal. Most organisations scan continuously and run a pen test once or twice a year or before a major release.'
      },
      {
        id: 'cyber-security-t11',
        q: 'How does HTTPS keep data safe? Explain the handshake in simple words.',
        topic: 'TLS and HTTPS',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Certificate first, then a shared secret, then fast encryption.',
        ideal: 'HTTPS is HTTP carried inside TLS, which provides confidentiality so nobody can read the traffic, integrity so nobody can silently change it, and authentication so you know you reached the real server. In the handshake the client sends a hello listing the cipher suites it supports, and the server replies with its certificate containing its public key, signed by a certificate authority the browser trusts. The client verifies the certificate, that it is signed by a trusted authority, is not expired or revoked, and matches the domain, and then both sides agree on a session key, normally using Diffie Hellman key exchange. After that the actual data is protected with fast symmetric encryption using that session key. If the certificate is invalid the browser shows a warning, and ignoring that warning is precisely how a man in the middle attack succeeds.'
      },
      {
        id: 'cyber-security-t12',
        q: 'A SIEM alert shows the same user logging in from Pune and from another country ten minutes apart. What do you do?',
        topic: 'Alert triage',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Confirm it is real before you lock a director out of his account.',
        ideal: 'This is an impossible travel alert, so the first step is to decide whether it is genuine or a false positive caused by a VPN, a mobile network, a roaming device or a cloud service acting on the user\'s behalf. Look at the log detail, the source IP and its reputation, the device and user agent, whether the login actually succeeded and whether multi factor authentication was satisfied. Then check what happened after that login, new mailbox forwarding rules, bulk file downloads, password or MFA changes, new device registrations or privilege changes. If it looks like a real compromise, contain it, revoke the sessions and tokens, reset the password, and contact the user through another channel such as a phone call to confirm. Document everything as evidence, follow the incident playbook and escalate, and afterwards tune the rule so the same false positives do not flood the queue.'
      },
      {
        id: 'cyber-security-t13',
        q: 'Ransomware is found on one employee laptop. Take me through your response step by step.',
        topic: 'Incident response',
        difficulty: 'hard',
        round: 'technical',
        hint: 'There is a standard order, and pulling the network cable is not the same as switching off.',
        ideal: 'Follow the standard phases, preparation, identification, containment, eradication, recovery and lessons learned. Contain first, disconnect that laptop from the network and Wi-Fi so the malware cannot spread or reach its command server, but do not rush to power it off, because memory evidence and sometimes keys are lost when it shuts down. Identify the scope, which family it is, which files and shared drives were encrypted, what accounts that user held, and whether other machines show the same indicators. Eradicate by wiping and rebuilding the machine rather than trusting a cleanup, reset the user\'s credentials and close the entry point such as the phishing mail or an unpatched service. Recover from clean offline backups and verify the data before reconnecting, and treat paying the ransom as a last resort decision for management since it funds crime and does not guarantee recovery. Finish with lessons learned and fix the gap through patching, mail filtering, endpoint detection and regularly tested backups.'
      },
      {
        id: 'cyber-security-t14',
        q: 'A web application goes live next week and you are asked to review its security. What do you check first?',
        topic: 'Security review',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Start where an attacker arrives first and where a failure hurts most.',
        ideal: 'Start with authentication and session handling, strong password storage, multi factor for admin accounts, secure and HttpOnly cookies, proper session expiry and logout, and no default or test accounts left behind. Next check authorisation on the server for every request, because broken access control is the most common real world flaw, and test whether changing an id in the URL exposes another user\'s data. Then check input handling and the common OWASP issues, injection, cross site scripting, unsafe file upload, and confirm HTTPS everywhere with the usual security headers. Check configuration and secrets, debug mode off in production, no keys in the source code, no publicly open storage buckets, updated libraries without known vulnerable versions, and least privilege for database and cloud accounts. Finally check logging, monitoring and tested backups so an incident can be detected and recovered from, and deliver the findings with severity and a practical fix for each one rather than only a list of problems.'
      },
      {
        id: 'cyber-security-m1',
        q: 'You find a critical vulnerability the day before a launch and the business says the date cannot move. What do you do?',
        topic: 'Risk and business',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Put the risk in business language and offer a middle path.',
        ideal: 'Explain the risk in business terms rather than technical terms, what an attacker can actually do, how much customer data is exposed, and what the legal, financial and reputation cost could be. Bring evidence such as a safe proof of concept and the severity rating so the discussion is based on facts and not opinion. Offer options instead of a flat refusal, an immediate fix, a temporary control such as a firewall rule or disabling that one feature, or launching to a limited set of users while the fix is completed. Make sure the decision and the remaining risk are written down and accepted by the business owner, because an accepted risk is a business decision while an unrecorded one becomes a security failure. Then track the permanent fix with a firm date so it does not quietly vanish after the launch.'
      },
      {
        id: 'cyber-security-m2',
        q: 'A senior manager asks you to open a colleague\'s mailbox for him without any formal request. How do you handle it?',
        topic: 'Ethics and policy',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'The policy protects you as much as it protects the company.',
        ideal: 'I would stay polite and not accuse anyone, but I would not do it without proper approval, because access to another person\'s mailbox requires a documented request through HR or legal. I would explain that the process protects him too, since every access is logged and he would not want it linked to his name with no record of why. I would show him exactly how to raise the request and offer to help it move quickly if the reason is genuine and urgent. If he insists, I would escalate to my manager or the information security officer instead of deciding alone. Handling it quietly and professionally keeps both the rule and the working relationship intact.'
      },
      {
        id: 'cyber-security-m3',
        q: 'You reported a serious finding weeks ago and the development team keeps pushing the fix to the next sprint. What is your next step?',
        topic: 'Follow through',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Make the risk visible and make the fix easy to act on.',
        ideal: 'First review my own report, is the risk explained clearly, is the severity correct, and did I give a practical fix, because vague findings are the easiest ones to ignore. Then speak to the team directly and understand the real blocker, it may be effort, a dependency or unclear priority, and offer help such as a code sample or a temporary compensating control. If it still does not move, use the process, put it on the risk register with a due date and report it in the security review so leadership sees the ageing item. Escalation here is about visibility and not blame, and a formal risk acceptance signed by the owner is also a valid outcome. Keeping the tone collaborative matters, since security and development are protecting the same product.'
      },
      {
        id: 'cyber-security-m4',
        q: 'You realise you clicked a suspicious link on your office laptop an hour ago. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Report first, investigate later.',
        ideal: 'Report it to the security team immediately, because an hour of silence is exactly the time an attacker needs, and no sensible organisation punishes a fast honest report. Disconnect the laptop from the network so anything installed cannot spread or call out, and do not try to clean it myself since that destroys evidence. Change the passwords of accounts I used, from a different trusted device, and re verify multi factor authentication on them. Give the team full detail, the mail, the link, the exact time and whether I entered any credentials, so they can search the logs and check whether colleagues received the same mail. Afterwards I would share it internally as an awareness example, because one real story teaches a team more than a training slide.'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Developer',
    short: 'Mobile',
    icon: '📱',
    color: '#fd79a8',
    blurb: 'You build and maintain the app people install on their phone, writing the screens, connecting them to backend APIs, and getting new versions safely onto the Play Store or App Store.',
    hires: ['Paytm', 'Swiggy', 'PhonePe', 'Zoho', 'TCS', 'Jio Platforms'],
    skills: [
      'Android activity and fragment lifecycle',
      'Kotlin, Java or Dart basics',
      'Flutter widgets and state management',
      'Calling REST APIs and parsing JSON',
      'Local storage with Room, SQLite or SharedPreferences',
      'Runtime permissions and app security',
      'UI layouts for different screen sizes',
      'Build, signing and Play Store release'
    ],
    prep: [
      'Build and publish one small app end to end so you can talk about a real release.',
      'Be ready to draw the activity lifecycle and explain what happens on screen rotation.',
      'Keep one API driven screen in your project and know how data flows from the network call to the UI.'
    ],
    questions: [
      {
        id: 'mobile-t1',
        q: 'Walk me through the Android activity lifecycle. Which callbacks run when a phone call comes in while the user is using your app?',
        topic: 'Activity Lifecycle',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about the difference between the screen being partly covered and being fully hidden.',
        ideal: 'When the activity starts, onCreate runs once to set up the layout, then onStart makes it visible and onResume makes it interactive. A full screen call activity covers your app, so onPause runs first and then onStop because your activity is no longer visible. When the call ends, onRestart, onStart and onResume run in that order and the user comes back to the same screen. onDestroy runs only when the activity is finished or the system reclaims it. Keep onPause very short because the next activity cannot draw until it returns, and save screen state in onSaveInstanceState or a ViewModel because the process can still be killed in the background.'
      },
      {
        id: 'mobile-t2',
        q: 'What is the difference between an APK and an AAB, and which one do you upload to the Play Store today?',
        topic: 'App Release',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One is what the phone installs, the other is what Google splits up for each device.',
        ideal: 'An APK is the final installable package that already contains every screen density, language and CPU architecture, so it is bigger than any single device needs. An Android App Bundle, the aab file, is a publishing format that you upload to Play, and Google generates and signs an optimised APK for each device, which cuts the download size a lot. Since August 2021 new apps on Play must be uploaded as an AAB, and Play App Signing holds the release key. You still build APKs for direct install, sideloading and testing on a real device. Both need to be signed with a release key, and you must keep the upload key safe.'
      },
      {
        id: 'mobile-t3',
        q: 'In Flutter, what is the difference between a StatelessWidget and a StatefulWidget? Give one real screen example of each.',
        topic: 'Flutter Widgets',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Ask yourself whether anything on that widget can change after it is drawn.',
        ideal: 'A StatelessWidget has no data that changes over time, so its build method depends only on the values passed into the constructor, for example a product card that just shows an image, a name and a price. A StatefulWidget keeps a separate State object that survives rebuilds, and calling setState updates the data and asks Flutter to rebuild that widget, for example a login form with a show password toggle or a quantity counter. Flutter can throw away and recreate the widget object cheaply, which is why the mutable data lives in the State class and not in the widget. Prefer stateless widgets wherever possible because they are cheaper and easier to test.'
      },
      {
        id: 'mobile-t4',
        q: 'Where would you store the user login token on the device, and why there?',
        topic: 'Local Storage',
        difficulty: 'easy',
        round: 'technical',
        hint: 'It is a small value, but it is also the key to the user account.',
        ideal: 'A token is a small key value item, so a database is overkill, but plain SharedPreferences is not safe because it can be read on a rooted device. The right place is storage encrypted with a key that lives in the Android Keystore, for example a DataStore or file encrypted with Tink using a Keystore key, because the old EncryptedSharedPreferences from androidx.security-crypto is deprecated and DataStore on its own is not encrypted. On iOS the equivalent is the Keychain, and in Flutter flutter_secure_storage wraps both. Never hardcode secrets in the source, never write the token to logs, and clear it on logout. Prefer a short lived access token with a refresh token so a stolen token is useful only for a short time. Larger structured data such as cached products belongs in Room, SQLite or Hive instead.'
      },
      {
        id: 'mobile-t5',
        q: 'Why must you not make a network call on the main thread in Android, and what do you use instead?',
        topic: 'Threading',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about who draws each frame of the screen and what happens if that worker is busy.',
        ideal: 'The main thread, also called the UI thread, draws every frame and handles touch events, so blocking it freezes the app and if input is not handled for about five seconds Android shows an Application Not Responding dialog. Android actually enforces this and throws NetworkOnMainThreadException if you try. Instead run the call in the background using Kotlin coroutines on Dispatchers.IO, a Retrofit suspend function or enqueue callback, or WorkManager for work that can be delayed. When the result arrives, switch back to the main thread with withContext(Dispatchers.Main) or expose it through LiveData or StateFlow so the UI updates safely. In Flutter you use async and await, and the compute function or an isolate for heavy CPU work.'
      },
      {
        id: 'mobile-t6',
        q: 'A user complains that your list of products stutters while scrolling. How would you find the cause and fix it?',
        topic: 'Performance',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Measure first on a slow phone, and look at what work is happening for every visible row.',
        ideal: 'First reproduce it on a low end device and measure with the Android Studio profiler, Layout Inspector or Flutter DevTools to see which frames go over the frame budget. The usual causes are decoding full size images on the UI thread, no view recycling, a deep nested layout, or heavy work inside onBindViewHolder or build. Fix it by using RecyclerView or ListView.builder so rows are recycled, loading images through Glide, Coil or CachedNetworkImage which downsample and cache, and using DiffUtil instead of refreshing the whole list. Also flatten the layout with ConstraintLayout, move JSON parsing and date formatting off the UI thread, and mark constant Flutter widgets as const. Finally measure again and compare frame times so you can prove the fix worked.'
      },
      {
        id: 'mobile-t7',
        q: 'How would you make your app usable when the phone has no internet?',
        topic: 'Offline Support',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Decide what the screen reads from when the network is missing, and what happens to actions the user takes.',
        ideal: 'Treat the local database as the single source of truth: the screen always reads from Room, SQLite or Hive, and the network only refreshes that cache in the background. Show the cached data with a last updated time and a clear offline indicator instead of an empty error screen. For writes, save the action locally, mark it as pending, and use WorkManager or a retry queue to send it when connectivity returns. Make the sync idempotent by sending a client generated id so a retry does not create duplicate orders. Also handle timeouts, give a retry button, and test with airplane mode and a slow network.'
      },
      {
        id: 'mobile-t8',
        q: 'Your backend returns a JSON list of products. Walk me through how that reaches the screen in your app.',
        topic: 'REST APIs',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Describe each layer the data passes through, not just the HTTP call.',
        ideal: 'First define a model class that matches the JSON fields. Then call the endpoint on a background thread using Retrofit and OkHttp on Android or http and dio in Flutter, and convert the response with Gson, Moshi, kotlinx.serialization or a fromJson factory. A repository wraps that call and returns a result that is either success with the list, or an error. The ViewModel or controller holds the loading, success and error state, and the UI observes it through LiveData, StateFlow, Provider or setState and renders a RecyclerView or ListView.builder. On the way, handle non 200 status codes, null or missing fields, and timeouts, and show a loader and a retry option instead of crashing.'
      },
      {
        id: 'mobile-t9',
        q: 'How do runtime permissions work on Android, and what do you do if the user refuses camera access twice?',
        topic: 'Permissions',
        difficulty: 'medium',
        round: 'technical',
        hint: 'The system stops showing the dialog at some point, so the app has to guide the user somewhere else.',
        ideal: 'Dangerous permissions such as camera, location, microphone and contacts are declared in the manifest but must also be asked for at run time since Android 6. You check with ContextCompat.checkSelfPermission and request through registerForActivityResult, then handle granted or denied in the callback. If the user denied it once, call shouldShowRequestPermissionRationale and show a short screen explaining why you need the camera before asking again. From Android 11 a second denial is treated as do not ask again, the system silently denies future requests, so you must explain the situation and offer a button that opens the app settings page with an intent. The app should still work in a reduced way, for example letting the user pick an existing photo from the gallery.'
      },
      {
        id: 'mobile-t10',
        q: 'What is state management in Flutter and why do teams move beyond setState?',
        topic: 'State Management',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about data that more than one screen needs, like the cart or the logged in user.',
        ideal: 'setState is fine when the data belongs to one widget, because it only rebuilds that widget subtree. The problem starts with shared data such as the logged in user, the cart or a theme, because you have to pass it down through many constructors and every change rebuilds more of the tree than needed. Solutions like Provider, Riverpod, BLoC or Cubit and GetX keep that state outside the widget tree, let any widget listen to just the part it needs, and separate business logic from UI so it can be unit tested. BLoC uses events and streams and suits large teams, while Provider or Riverpod is lighter for small apps. Choose the simplest option that fits the app size rather than the most fashionable one.'
      },
      {
        id: 'mobile-t11',
        q: 'Before a release you are asked to reduce app size and startup time. What do you actually change?',
        topic: 'App Optimisation',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Split what the user downloads, remove what is unused, and delay what is not needed at launch.',
        ideal: 'For size, ship an app bundle so Play delivers only the density, language and ABI the device needs, turn on R8 or ProGuard minification with resource shrinking, convert PNGs to WebP or vector drawables, and remove unused libraries and permissions. Use the APK Analyzer to see what is actually big, since often it is images or one heavy SDK. For startup, avoid doing analytics, database and SDK initialisation inside Application.onCreate, initialise those lazily or with the App Startup library, and avoid heavy work in the first activity or first frame. In Flutter use split debug info, icon tree shaking and deferred components. Measure cold start before and after with a trace, because guessing usually optimises the wrong thing.'
      },
      {
        id: 'mobile-t12',
        q: 'Design token refresh so the user is never thrown back to the login screen in the middle of an action.',
        topic: 'Authentication',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Something has to catch the 401 and retry the same request, and only one refresh should happen at a time.',
        ideal: 'The server issues a short lived access token and a longer lived refresh token, and the refresh token is stored in encrypted storage backed by Keystore or Keychain. Add an interceptor, for example an OkHttp Authenticator or a dio interceptor, that catches a 401 response, calls the refresh endpoint, saves the new token and retries the original request transparently, so the user never sees it. Because several requests can fail at once, guard the refresh with a mutex or synchronized block so only one refresh call goes out and the other requests wait and then reuse the new token. If the refresh itself fails because the token expired or was revoked, clear the stored tokens and send the user to login once. Never refresh on the main thread, never log the tokens, and add a retry limit so you cannot loop forever.'
      },
      {
        id: 'mobile-t13',
        q: 'Your app crashes only for some users in production and never on your machine. How do you track it down?',
        topic: 'Crash Debugging',
        difficulty: 'hard',
        round: 'technical',
        hint: 'You cannot debug what you cannot see, so start with what the crash reporting tool already knows.',
        ideal: 'Use Firebase Crashlytics or Play Console vitals to get the stack trace along with the device model, OS version, app version and the percentage of users affected, and upload the mapping file so obfuscated traces are readable. Look for a pattern: one manufacturer, one Android version, low memory devices, or users coming from a specific screen, and use custom keys and breadcrumb logs to see the last steps before the crash. Then reproduce on an emulator with that API level, on a similar device, or through Firebase Test Lab. Typical causes are missing null checks, a permission or behaviour change in a newer Android version, an OEM specific API, or out of memory from large bitmaps. Fix it, add a test for that path, ship with a staged rollout and watch the crash free user rate before going to one hundred percent.'
      },
      {
        id: 'mobile-t14',
        q: 'How does Android decide to kill your app in the background, and how do you make sure the user does not lose what was on the screen?',
        topic: 'Process Death',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Your process can disappear without onDestroy ever running, so where does the screen data live?',
        ideal: 'Android ranks processes as foreground, visible, service, and cached, and when memory runs low it kills cached and background processes first, without any guarantee that onDestroy runs. That is called process death, and when the user returns the system recreates your activity with a saved state bundle, so any data held only in a normal object is gone. Small screen state such as the typed text, scroll position or selected tab should go into onSaveInstanceState or into SavedStateHandle inside a ViewModel, because a plain ViewModel survives rotation but not process death. Real data belongs in Room or DataStore so it can be reloaded. Long running work must be a foreground service or WorkManager, not a background thread, because a plain thread dies with the process.'
      },
      {
        id: 'mobile-m1',
        q: 'The Play Store release is planned for tomorrow and you discover a crash in the payment screen that you wrote. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Think about who needs to know, how bad it is, and what options exist besides fix or delay.',
        ideal: 'Tell the lead and the product owner immediately with facts: what breaks, how often, which users and which devices, because hiding it costs far more than admitting it. Then judge severity, and a crash in payment is blocking, so the honest recommendation is to hold the release or to ship with that feature disabled behind a remote flag. If the fix is small and I can test it on a couple of devices and get it reviewed, I would offer that as an option with the risk clearly stated. A staged rollout to a small percentage plus crash monitoring gives a safety net if we must ship. Afterwards I would add a regression test and note in the retrospective why our testing missed it.'
      },
      {
        id: 'mobile-m2',
        q: 'A designer wants an animation that you know will stutter on low end Android phones. How do you handle that conversation?',
        topic: 'Working with Design',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Do not argue from opinion, and do not simply refuse.',
        ideal: 'I would first understand what feeling the animation is meant to create, because there is usually more than one way to get it. Then I would build a quick prototype and profile it on a real low end device, so I can show measured frame drops instead of just saying it will be slow. With that data I would propose a simpler version, for example a shorter fade or a smaller moving area, or enable the rich animation only on capable devices and fall back elsewhere. The product owner takes the final call once both cost and benefit are visible. I would write the decision down so nobody reopens the same debate later.'
      },
      {
        id: 'mobile-m3',
        q: 'You are handed an old app with no tests and told to add a feature in two weeks. How do you start?',
        topic: 'Legacy Code',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Understand and de risk before you type, and keep the change small.',
        ideal: 'First I would run the app, use the flows around the feature, and read the code paths involved so I understand what exists before changing anything. I would get the requirement and the acceptance criteria in writing, then break the work into small tasks and give an honest estimate with a note that hidden bugs in old code are a risk. I would work on a branch with small commits, add tests only for the parts I touch instead of trying to test the whole app, and keep the existing style so reviewers can follow it. I would give the lead a short update every couple of days, especially if something takes longer than planned. Anything ugly that I do not need to touch, I would log as tech debt rather than refactor in the same change.'
      },
      {
        id: 'mobile-m4',
        q: 'The backend team keeps changing the API response format and it breaks your app builds. How do you deal with it?',
        topic: 'Team Conflict',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Fix the process and make your own code harder to break, before escalating.',
        ideal: 'I would talk to the backend developer directly and calmly, with concrete examples of which field changed and what broke, so the discussion is about the problem and not about the person. Then I would ask for two practical things: a versioned endpoint so old app versions keep working, and a shared contract document such as Swagger or a sample response that both sides agree on before changes. On my side I would make parsing defensive with default values and tolerance for unknown or missing fields, so a change causes a small glitch instead of a crash, and use a mock layer so I can build screens without waiting. If it keeps repeating after that, I would raise it with both leads, with the record of incidents rather than a complaint. This keeps the relationship good while still fixing the root cause.'
      }
    ]
  },
  {
    id: 'embedded-iot',
    title: 'Embedded / IoT Engineer',
    short: 'Embedded',
    icon: '🔌',
    color: '#e17055',
    blurb: 'You write the C firmware that runs inside a physical device such as a smart meter, a motor controller or a sensor node, so that the chip reads its sensors, respects timing and sends data reliably.',
    hires: [
      'Bosch Global Software Technologies',
      'Tata Elxsi',
      'L&T Technology Services',
      'Continental Automotive',
      'HCLTech',
      'Wipro'
    ],
    skills: [
      'Embedded C, pointers and bit manipulation',
      'Microcontroller registers, GPIO and timers',
      'Interrupts and ISR design',
      'UART, I2C and SPI protocols',
      'ADC and sensor interfacing',
      'RTOS tasks, queues and semaphores',
      'MQTT and IoT connectivity',
      'Debugging with scope and logic analyser'
    ],
    prep: [
      'Revise pointers, bit operations and volatile in C, because most first round questions come from there.',
      'Do one hands on project with an Arduino or ESP32 that reads a sensor and sends the value, and know the wiring.',
      'Practise reading a datasheet: register map, timing diagram and electrical limits.'
    ],
    questions: [
      {
        id: 'embedded-iot-t1',
        q: 'What does the volatile keyword do in embedded C, and give me one place where leaving it out causes a bug.',
        topic: 'Embedded C',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about what the compiler is allowed to assume when it optimises your loop.',
        ideal: 'volatile tells the compiler that the variable can change outside the normal flow of the program, so it must read it from memory every time instead of caching it in a CPU register or optimising the access away. You need it for memory mapped hardware registers, for a flag that an interrupt service routine sets and the main loop reads, and for variables shared with another thread. A classic bug is while (flag == 0) with a non volatile flag set inside an ISR, because with optimisation on the compiler reads the flag once and the loop never ends. Note that volatile only stops the optimisation, it does not make access atomic, so for a multi byte shared variable you still disable interrupts briefly or use an atomic type.'
      },
      {
        id: 'embedded-iot-t2',
        q: 'Compare UART, I2C and SPI. Which one would you pick for a temperature sensor and which for an SD card?',
        topic: 'Serial Protocols',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Count the wires, count the devices on the bus, and compare the speeds.',
        ideal: 'UART is asynchronous with two lines, TX and RX, point to point, and both sides must agree on the baud rate; it suits GPS and GSM modules and the debug console. I2C is synchronous with only two shared lines, SDA and SCL, needs pull up resistors, addresses each slave, and typically runs at 100 kHz, 400 kHz or 1 MHz, which is ideal for a temperature sensor or an EEPROM where you want few pins and several devices. SPI uses four lines, MOSI, MISO, SCK and a chip select per slave, is full duplex and runs at tens of megahertz, which is why an SD card or a display uses it. So the sensor goes on I2C and the SD card on SPI. Choose by required speed, number of devices, pin count and wire length.'
      },
      {
        id: 'embedded-iot-t3',
        q: 'What is an interrupt, and what rules do you follow while writing an interrupt service routine?',
        topic: 'Interrupts',
        difficulty: 'easy',
        round: 'technical',
        hint: 'The main program is waiting the whole time your handler is running.',
        ideal: 'An interrupt is a hardware signal that makes the CPU stop the current code, save its context, jump through the vector table to the handler, and then return exactly where it left off. The first rule is to keep the ISR as short as possible, because everything else is blocked or delayed while it runs. Do not put delays, printf, blocking waits or dynamic memory allocation inside it; just read the peripheral, set a volatile flag or push data into a ring buffer, clear the interrupt flag, and let the main loop or a task do the real work. Shared variables must be volatile and multi byte access must be protected, for example by disabling interrupts for a few instructions. Under an RTOS you must use the FromISR versions of the API and request a context switch at the end.'
      },
      {
        id: 'embedded-iot-t4',
        q: 'What is the difference between a microcontroller and a microprocessor, and where would you use each?',
        topic: 'MCU Basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about what is inside the single chip package.',
        ideal: 'A microcontroller has the CPU, flash, RAM and peripherals such as timers, ADC, UART and GPIO all on one chip, uses very little power, costs little and usually runs a single dedicated program or a small RTOS; examples are STM32, ATmega328 and ESP32. A microprocessor is mainly the CPU, and it needs external RAM, external storage and support chips, but it is much faster and normally runs a full operating system such as Linux; examples are the SoC on a Raspberry Pi or an i.MX part. So you use a microcontroller for real time control, battery powered products and cost sensitive designs, and a microprocessor where you need a GUI, a file system, networking stacks or heavy processing. Many IoT products use both, a small MCU for the sensors and a bigger processor for the gateway.'
      },
      {
        id: 'embedded-iot-t5',
        q: 'How do you read a temperature from an analog sensor using the ADC? Show me the conversion.',
        topic: 'ADC and Sensors',
        difficulty: 'easy',
        round: 'technical',
        hint: 'First turn the count into volts, then use the sensor datasheet to turn volts into degrees.',
        ideal: 'The ADC converts an input voltage into a digital count, and with n bits and reference voltage Vref the relation is count = Vin multiplied by (2 to the power n minus 1) divided by Vref, so Vin = count multiplied by Vref divided by (2 to the power n minus 1). For a 10 bit ADC with a 3.3 V reference one step is about 3.2 mV. Then apply the sensor formula from the datasheet; an LM35 gives 10 mV per degree Celsius, so temperature equals the voltage in millivolts divided by ten. In practice you configure a long enough sampling time for the source impedance, average several samples or use a simple filter to reduce noise, and keep the reference voltage stable because it directly scales your reading. A digital sensor like DS18B20 or DHT11 skips all this and gives you the value over a protocol instead.'
      },
      {
        id: 'embedded-iot-t6',
        q: 'Your I2C sensor stopped responding and the data line is stuck low. How do you debug it?',
        topic: 'Hardware Debugging',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Check the electrical basics before you blame the code, then look at the actual waveform.',
        ideal: 'Start with the hardware: are the pull up resistors present and around 4.7k, is there a common ground, is the supply voltage right, and do the two devices need level shifting. Then confirm the 7 bit address from the datasheet, remembering that the read and write bit shifts the value you see in examples. Put a logic analyser or oscilloscope on SDA and SCL to see whether the start condition, the address and the acknowledge actually appear. A permanently low SDA usually means a slave is stuck in the middle of a transfer and is holding the line, and the standard recovery is to toggle SCL up to nine times and then send a stop condition, or power cycle the slave. Also check for too long wires, too high a clock speed and a previous transfer that was aborted, and put timeouts in the driver so the firmware never waits forever.'
      },
      {
        id: 'embedded-iot-t7',
        q: 'What is a watchdog timer and what is the correct way to use it in firmware?',
        topic: 'Watchdog',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Where you kick it decides whether it protects you or hides the problem.',
        ideal: 'A watchdog is a hardware counter that resets the microcontroller if the firmware does not refresh it within a timeout, which recovers a device that has hung in an infinite loop or is stuck waiting on a dead peripheral. The correct pattern is to kick it from exactly one place, normally the main loop or a supervisor task that first checks that every other task has reported itself alive in this period. Kicking it from inside an ISR or from many scattered places is wrong, because a hung main loop would still be refreshed and the fault would be hidden. Choose a timeout somewhat longer than the worst case loop time, and handle long flash writes or sleep modes deliberately. After a reset, read the reset cause register, log it, and bring the outputs up in a safe state instead of continuing blindly.'
      },
      {
        id: 'embedded-iot-t8',
        q: 'What does an RTOS give you compared with a plain super loop, and when would you deliberately not use one?',
        topic: 'RTOS',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about several jobs with very different timing needs in the same firmware.',
        ideal: 'An RTOS gives you separate tasks with priorities and a preemptive scheduler, so an urgent job runs within a predictable time even while a slow job is in progress, plus queues, semaphores, mutexes, software timers and a delay that gives the CPU to someone else instead of busy waiting. That is much cleaner than one big super loop where every slow function has to be broken into a state machine. The costs are RAM for each task stack, context switch overhead, and new classes of bug such as race conditions, priority inversion and stack overflow. So for a small device that does one job with plenty of timing margin, a super loop with interrupts is simpler, cheaper in RAM and easier to review or certify. The honest answer is to choose based on the number of concurrent activities and their deadlines.'
      },
      {
        id: 'embedded-iot-t9',
        q: 'How would you send sensor readings from an ESP32 to a server using MQTT?',
        topic: 'MQTT and IoT',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about the broker, the topic name, and what happens when the device drops off.',
        ideal: 'The device joins Wi-Fi, then an MQTT client connects to the broker with a host, a port such as 1883 plain or 8883 over TLS, a unique client id and credentials or a certificate. It publishes each reading to a topic such as plant1/room3/temperature, usually as small JSON, and the dashboard or server subscribes to that topic, so the device never needs to know who is listening. Pick QoS 0 for fire and forget readings, QoS 1 when you must not lose a message and can tolerate a duplicate, and QoS 2 only when exactly once really matters, since it costs the most traffic. Set a keepalive and a last will message so the server is told immediately when the device disappears. To save power and data, publish only on change or every N seconds, buffer readings while offline, and reconnect with an increasing backoff instead of hammering the broker.'
      },
      {
        id: 'embedded-iot-t10',
        q: 'What is the difference between a mutex and a semaphore in an RTOS, and what is priority inversion?',
        topic: 'RTOS Synchronisation',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One of them has an owner, and that ownership is what allows the fix.',
        ideal: 'A mutex is meant for mutual exclusion of a shared resource; it has an owner, only the task that took it may give it back, and RTOS mutexes usually support priority inheritance. A semaphore is a signalling or counting mechanism, so a binary semaphore can be given by an interrupt and taken by a task to say that data has arrived, and any task can give it. Priority inversion happens when a low priority task holds the mutex that a high priority task needs, and then a medium priority task preempts the low one, so the high priority task is blocked by a task that is not even related to the resource. Priority inheritance solves it by temporarily raising the holder to the priority of the waiting task so it finishes and releases quickly. In practice use a mutex for shared hardware such as an I2C bus, and a semaphore or queue for ISR to task signalling.'
      },
      {
        id: 'embedded-iot-t11',
        q: 'Your device must run for a year on a coin cell. What do you change in the firmware?',
        topic: 'Low Power Design',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Ask what the chip is doing between two readings, and which part draws the most current.',
        ideal: 'The main idea is that the microcontroller should be asleep almost all the time, so replace delay loops and polling with a deep sleep or stop mode that wakes on an RTC timer or a GPIO interrupt. Lower the clock frequency, switch off clocks to peripherals you are not using, put sensors into their own sleep mode or power them from a GPIO pin, and configure unused pins so they do not leak current. The radio usually dominates the energy budget, so send batched data rarely rather than every reading, and keep the transmit window short. Then measure the real average current with a power profiler instead of trusting the datasheet, and compute battery life as cell capacity divided by average current, allowing for self discharge and the peak current the coin cell can supply. Small firmware choices such as waking up ten times less often often matter more than any code optimisation.'
      },
      {
        id: 'embedded-iot-t12',
        q: 'Explain the memory layout of an embedded C program, and tell me why malloc is discouraged in firmware.',
        topic: 'Memory',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Walk from flash to RAM and say which section each kind of variable lands in.',
        ideal: 'Code and constants live in flash as the text and rodata sections. Initialised globals and statics are stored in flash and copied into RAM at startup as the data section, while uninitialised globals and statics become the bss section which the startup code fills with zeros. Local variables and function call frames go on the stack, which usually grows downwards, and dynamic allocation comes from the heap, which grows towards the stack. malloc is discouraged because RAM is tiny, repeated allocate and free fragments the heap so a later allocation can fail even though enough total memory is free, the timing is not deterministic, and a stack and heap collision corrupts memory silently instead of raising an error. The safer practice is static allocation or fixed size memory pools decided at compile time, plus checking the linker map file and using a stack fill pattern to see real worst case usage.'
      },
      {
        id: 'embedded-iot-t13',
        q: 'How do you design a safe firmware over the air update for a device installed at a customer site?',
        topic: 'OTA Updates',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Assume the power will fail exactly in the middle of the update.',
        ideal: 'Split the flash into a bootloader plus two application slots, or an application plus a download area, and always download the new image into the slot that is not running, so the working firmware is never erased while it is in use. Before booting it, the bootloader must verify a CRC or hash for integrity and a digital signature for authenticity, so only images signed by your company can ever run. Then set a boot flag and reboot into the new image, and require the application to confirm within a few minutes that it is healthy; if it does not confirm, the bootloader falls back to the previous slot automatically. Transport should be TLS, downloads should be resumable, and the image should carry a version number so a downgrade to a vulnerable version can be blocked. Finally test power loss at every stage, because that is the failure that actually bricks devices in the field.'
      },
      {
        id: 'embedded-iot-t14',
        q: 'A control loop must run every 1 ms but you see jitter in the timing. How do you find the cause and guarantee the deadline?',
        topic: 'Real Time Timing',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Make the timing visible on a pin first, then look at everything that can delay your handler.',
        ideal: 'First drive the loop from a hardware timer interrupt rather than a software delay, because a delay based loop drifts by the execution time of the body. Then toggle a GPIO high at the start of the loop and low at the end, and watch it on an oscilloscope or logic analyser to measure both the period and the execution time directly. Jitter normally comes from another interrupt of equal or higher priority running longer, from critical sections that disable interrupts too long, or from blocking calls such as printf, a flash write or a busy wait on a peripheral. Fix it by keeping every ISR short, giving the control loop a high interrupt priority, moving slow work to a low priority task or the main loop, and avoiding code paths whose execution time varies a lot. Finally confirm the worst case execution time is comfortably under 1 ms so there is headroom for the future.'
      },
      {
        id: 'embedded-iot-m1',
        q: 'Two days before a customer demo, you find that the hardware team wired a pin wrongly on the new board. How do you handle it?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Confirm the fact, tell the right people fast, and look for a demo safe workaround.',
        ideal: 'First I would confirm it with a measurement, checking the schematic and probing the pin, so I report a verified fact and not a guess. Then I would tell the hardware lead and the project manager straight away with the impact on the demo, because they need the time to decide. In parallel I would look for a workaround: a bodge wire on one board, remapping the function to another free pin in firmware, or demonstrating that part on an older working board. I would agree clearly who does what by when, and keep the promise to the customer realistic rather than hiding the risk. After the demo I would raise a proper board change request and record it so the next revision does not repeat it.'
      },
      {
        id: 'embedded-iot-m2',
        q: 'A customer reports that the device hangs after running for several days, but it never fails in your lab. How do you approach it?',
        topic: 'Field Issues',
        difficulty: 'hard',
        round: 'managerial',
        hint: 'Long running failures have a small family of usual causes, and you need evidence from the field.',
        ideal: 'I would first collect facts from the site: exact time of failure, uptime before it, temperature, power quality, what the device was doing, and any logs. Then I would add lightweight diagnostics to the firmware, such as recording uptime, reset cause and error counters in non volatile memory, and ship that as a diagnostic build to a few units. The usual suspects for long run failures are counter overflow, a slow memory leak or heap fragmentation, gradual stack growth, watchdog resets, RTC drift, or a rarely taken error path, so I would review those areas of code. In parallel I would run a soak test in the lab, if possible accelerated with more traffic or higher temperature, to reproduce it. Throughout I would give the customer honest updates with what we know and what we are trying, and only call it fixed after the soak test has run longer than the failure interval.'
      },
      {
        id: 'embedded-iot-m3',
        q: 'Your manager asks you to estimate how long a driver for a new sensor will take. How do you give that number?',
        topic: 'Estimation',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Break the work down and state the assumptions instead of quoting one heroic number.',
        ideal: 'I would read the datasheet first and check whether the vendor provides a reference driver or example code, because that changes the effort a lot. Then I would break the job into bring up and communication check, register configuration, the read and conversion path, error handling and recovery, integration with the application, and testing, and estimate each small piece. I would give a range rather than a single figure and list the assumptions, for example that the board and sensor samples are available on a given date and that the bus is already working. I would also add buffer for hardware surprises, since in embedded work the first day is often spent on wiring rather than code. Most importantly I would report early if reality is running differently, because an early honest slip is much cheaper for the team than a late surprise.'
      },
      {
        id: 'embedded-iot-m4',
        q: 'A teammate\'s interrupt handler is long and is making your task miss its deadline. How do you raise it?',
        topic: 'Team Conflict',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Bring numbers, talk to the person before the manager, and turn it into a team rule.',
        ideal: 'I would first measure it properly, for example a scope trace of the pin toggling or a timing counter showing how long the ISR runs and when my deadline is missed, so the discussion is about data and not about the person. Then I would show it to him privately and suggest concrete options: move the processing into a task, shorten the critical section, use a queue from the ISR, or adjust priorities. Most engineers cooperate when they can see the trace. If the deadline is still at risk after that, I would escalate to the lead with the same evidence and the options, not as a complaint. Finally I would suggest a simple team rule about maximum ISR length in code review, so it applies to everyone including me and does not become personal.'
      }
    ]
  },
  {
    id: 'dba',
    title: 'Database Administrator',
    short: 'DBA',
    icon: '🗄️',
    color: '#6ab04c',
    blurb: 'You keep the company database fast, safe and available, tuning slow queries, running and testing backups, and deciding who is allowed to see or change which data.',
    hires: ['TCS', 'Infosys', 'Cognizant', 'Accenture', 'Oracle India', 'HCLTech'],
    skills: [
      'SQL joins, grouping and subqueries',
      'Indexes and execution plans',
      'Normalisation and schema design',
      'Transactions, ACID and isolation levels',
      'Backup, restore and point in time recovery',
      'Users, roles and privileges',
      'Locking, blocking and deadlocks',
      'Replication, high availability and slow query monitoring'
    ],
    prep: [
      'Practise writing joins, group by and subqueries by hand on paper without an editor.',
      'Install MySQL or PostgreSQL locally, load a sample database and read the EXPLAIN output of a few queries.',
      'Prepare one real story of a backup and restore you performed yourself, even on your own laptop.'
    ],
    questions: [
      {
        id: 'dba-t1',
        q: 'What is an index, and why is adding an index to every column a bad idea?',
        topic: 'Indexes',
        difficulty: 'easy',
        round: 'technical',
        hint: 'An index is extra data that also has to be kept correct.',
        ideal: 'An index is a separate sorted structure, usually a B-tree, that lets the engine find matching rows without reading the whole table, so a full scan becomes a quick lookup. It speeds up filters in WHERE, join columns and ORDER BY on the indexed columns. The cost is that every INSERT, UPDATE and DELETE must update every affected index too, so writes get slower, and each index takes disk space and memory that could have cached data. Indexes on low selectivity columns such as a yes or no flag are often ignored by the optimiser anyway, and duplicate or unused indexes are pure waste. So the rule is to index the columns you actually filter and join on, check index usage statistics, and drop the ones nobody uses.'
      },
      {
        id: 'dba-t2',
        q: 'What is the difference between DELETE, TRUNCATE and DROP?',
        topic: 'SQL Commands',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about rows versus the whole table, and about what gets logged.',
        ideal: 'DELETE is a DML statement that removes rows one at a time, can have a WHERE clause, fires row triggers, writes a log record per row and can be rolled back inside a transaction, so it is slower but selective. TRUNCATE is a DDL statement that empties the whole table quickly by deallocating its pages, does not fire row triggers, usually resets the identity or auto increment counter, and generally cannot be filtered; in Oracle and MySQL it commits implicitly, while in SQL Server and PostgreSQL it can be rolled back inside a transaction. DROP removes the table itself along with its data, indexes, constraints and permissions. So use DELETE when you want specific rows, TRUNCATE when you want a fast full clear of a staging table, and DROP when the object is not needed at all. TRUNCATE also fails if another table has a foreign key pointing at it.'
      },
      {
        id: 'dba-t3',
        q: 'Explain the ACID properties using a bank transfer as the example.',
        topic: 'Transactions',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Take money leaving one account and arriving in another, and ask what could go wrong at each stage.',
        ideal: 'Atomicity means the debit from account A and the credit to account B either both happen or neither does, so if the second update fails the whole transaction rolls back. Consistency means the database moves from one valid state to another, with constraints such as a non negative balance and the total money in the system still holding true. Isolation means another transaction reading the accounts at the same time must not see the half finished transfer, which the engine achieves with locking or multi version concurrency control. Durability means that once COMMIT returns, the transfer survives a power cut, because the change was already written to the write ahead or redo log on disk. In SQL you write BEGIN, the two UPDATE statements, then COMMIT on success or ROLLBACK on error.'
      },
      {
        id: 'dba-t4',
        q: 'What is normalisation, and how far do you normalise a real production database?',
        topic: 'Normalisation',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Define the first three normal forms, then say where practical design stops.',
        ideal: 'Normalisation means organising columns into tables so that each fact is stored once, which removes redundancy and update anomalies. First normal form requires atomic values with no repeating groups, second normal form additionally removes partial dependency on only part of a composite key, and third normal form removes transitive dependency so every non key column depends on the key alone. Most transaction systems are designed to third normal form or BCNF, because that keeps updates simple and correct. Reporting and read heavy systems often denormalise on purpose, for example storing an order total or a copy of the customer name, to avoid many joins, and accept that the copy must be kept in sync. So the honest answer is third normal form by default, with deliberate and documented denormalisation where read performance demands it.'
      },
      {
        id: 'dba-t5',
        q: 'Explain the difference between a primary key, a unique key and a foreign key.',
        topic: 'Keys',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare how many you can have per table and how each behaves with NULL.',
        ideal: 'A primary key uniquely identifies each row, there is only one per table, it cannot contain NULL, and it normally creates a clustered or unique index automatically. A unique key also enforces uniqueness but you can have several per table and it generally allows NULL, one NULL in SQL Server and many NULLs in Oracle, MySQL and PostgreSQL. A foreign key is a column or set of columns that references the primary or unique key of another table and enforces referential integrity, so you cannot insert a child row whose parent does not exist, and you cannot delete a parent that still has children unless you specify ON DELETE CASCADE, SET NULL or RESTRICT. In practice you should index foreign key columns yourself, because many engines do not create that index automatically and deletes on the parent then become very slow.'
      },
      {
        id: 'dba-t6',
        q: 'A report query that used to run in 2 seconds now takes 2 minutes. Walk me through your investigation.',
        topic: 'SQL Tuning',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Separate a server wide problem from a problem with this one query before you tune anything.',
        ideal: 'First I would check whether the whole server is slow or only this query, by looking at CPU, disk waits, memory and whether any session is blocking others. Then I would capture the execution plan with EXPLAIN, EXPLAIN ANALYZE or statistics IO and compare it with what the plan used to be, looking for a full table scan where an index seek used to be, badly wrong row estimates, or a sort spilling to disk. Common causes are that the table has grown a lot, statistics are stale, an index was dropped or is heavily fragmented, the plan changed because of parameter sniffing, or someone added a condition like WHERE YEAR(order_date) = 2026 that stops the index being used. The fixes follow from the cause: update statistics, create or repair the index, rewrite the predicate so it is sargable, return fewer rows or columns, or force a better plan as a last resort. Finally I would measure again and record the before and after numbers so the improvement is proven.'
      },
      {
        id: 'dba-t7',
        q: 'What is a clustered index, and how is it different from a non clustered index?',
        topic: 'Index Types',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One of them decides the physical order of the rows themselves.',
        ideal: 'A clustered index stores the actual table rows in the order of the index key, so there can only be one per table and it decides the physical ordering of the data; in SQL Server the primary key is clustered by default and in InnoDB the primary key always is. A non clustered or secondary index is a separate structure holding the key values plus a pointer, either a row locator or the clustered key, so after finding a match the engine may need an extra lookup to fetch the remaining columns. That extra lookup is why a covering index, which includes the other columns the query needs, can be dramatically faster. Range scans and ORDER BY on the clustered key are very efficient because the rows are already in order. A good clustered key is narrow and increasing, such as an identity column, because a random key causes page splits and fragmentation.'
      },
      {
        id: 'dba-t8',
        q: 'Explain the transaction isolation levels and what problem each one prevents.',
        topic: 'Isolation Levels',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Go from the weakest to the strongest and name the anomaly each one removes.',
        ideal: 'Read Uncommitted allows dirty reads, which means you can read data another transaction has not committed and may roll back. Read Committed prevents dirty reads, but the same row can change between two reads in your transaction, which is a non repeatable read. Repeatable Read prevents dirty and non repeatable reads by keeping the rows you read stable, though new rows matching your range can still appear as phantoms, which InnoDB blocks using gap locks. Serializable is the strictest and makes transactions behave as if they ran one after another, preventing phantoms too, at the cost of much more blocking or more serialization failures that the application must retry. Higher isolation means more locking or more version checking, so most applications run at Read Committed and use explicit locking such as SELECT FOR UPDATE only where correctness truly needs it.'
      },
      {
        id: 'dba-t9',
        q: 'What is a deadlock, how does the database deal with it, and how do you reduce them?',
        topic: 'Locking',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Two sessions, two resources, and the wrong order.',
        ideal: 'A deadlock is when two sessions each hold a lock that the other one is waiting for, so neither can move forward. The engine has a deadlock detector that spots the cycle, chooses the cheaper transaction as the victim, rolls it back and returns an error, so the application should catch that error and retry the transaction rather than fail the user. To reduce deadlocks, always access tables and rows in the same order everywhere in the code, keep transactions short and commit promptly, and never wait for user input while holding locks. Good indexes also help, because without them the engine locks many more rows than the query really needs. When they do occur, read the deadlock graph or the engine log to see the exact statements and resources involved, since that usually points straight at the offending code path.'
      },
      {
        id: 'dba-t10',
        q: 'The business says it can afford to lose at most fifteen minutes of data. Design the backup plan.',
        topic: 'Backup and Recovery',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Fifteen minutes is a target, and one type of backup is the only one that can meet it.',
        ideal: 'Fifteen minutes is the recovery point objective, and only log backups can deliver that, so the database must run in full recovery or archive log mode. A practical plan is a full backup nightly, differential backups a few times during the day to shorten restore time, and transaction log backups every ten to fifteen minutes. The backups must be written to different storage from the data files and copied off site, with a retention policy and checksum verification so a corrupt backup is caught early. The most important part is testing: restore to a spare server regularly and time it, because that restore time is your recovery time objective and it is the only proof the backups work. Finally document and automate the restore steps so any team member can run them at 2 am under pressure.'
      },
      {
        id: 'dba-t11',
        q: 'A developer asks you for full admin rights on the production database. What do you grant and how do you explain it?',
        topic: 'Permissions',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Start from what task he actually has to finish today.',
        ideal: 'I would start by asking what he needs to do, because usually the real need is to read a few tables or run one fix, not to administer the server. The principle is least privilege, so I would grant SELECT on the specific schema or a read only role, and any data changes through a defined role or a stored procedure rather than open rights. Permissions should be granted to roles and users added to roles, never granted personally, because that is auditable and easy to revoke when someone changes team. If he genuinely needs elevated access for an emergency, I would use a temporary, approved, time limited and logged account and remove it afterwards, and route any production DDL through change control. In parallel I would offer a full access copy in the development environment with masked data so his work is not blocked.'
      },
      {
        id: 'dba-t12',
        q: 'A table has fifty crore rows and queries are slow even with indexes. What options do you consider?',
        topic: 'Large Tables',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The goal is to make the query touch fewer pages, not to add more indexes.',
        ideal: 'First I would confirm from the execution plan how many rows and pages the query really reads, because often the query asks for far more data than the user needs, and a covering index plus a selective, indexed filter fixes it. Next I would look at partitioning, usually by date range, so the optimiser prunes whole partitions, and archiving old rows into a history table so the hot table stays small and cacheable. Pre computed summary tables or materialised views refreshed on a schedule turn a heavy report into a small read. Compression reduces IO, more memory keeps the working set in the buffer pool, and moving reporting to a read replica keeps the transaction system responsive. Whichever option I choose, I would measure IO and duration before and after on a copy of production, because a change that helps one query can hurt the write path.'
      },
      {
        id: 'dba-t13',
        q: 'Explain how the write ahead log lets a database recover after a sudden power failure.',
        topic: 'Crash Recovery',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Something is always written before the data page, and recovery has two phases.',
        ideal: 'The rule is write ahead logging: before a changed data page can be written to disk, the log record describing that change must already be on disk, and at commit the log is flushed, which is what makes durability possible. Data pages themselves can stay dirty in memory and are written later at a checkpoint, which also records how far the log has been applied. After a crash the engine starts from the last checkpoint and does redo, replaying log records so all committed changes are present, and then undo, rolling back the changes of transactions that were still open when the power went, so they vanish completely. The same log, backed up regularly, is what allows point in time recovery to any moment before an accident. This is also why the log disk should be fast and why you must never delete log files manually to free space.'
      },
      {
        id: 'dba-t14',
        q: 'How would you set up high availability, and what is the trade off between synchronous and asynchronous replication?',
        topic: 'Replication and HA',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Ask whether the commit waits for the second server or not, and what that costs.',
        ideal: 'High availability means keeping a second up to date copy of the database on another server, using SQL Server Always On availability groups, PostgreSQL streaming replication, MySQL replication or Oracle Data Guard, with failover and a listener or virtual name so the application reconnects without a config change. With synchronous replication the primary waits until the standby has written the log record before it confirms the commit, giving zero data loss, but every commit pays the network round trip and the primary can stall if the standby or link is slow. With asynchronous replication the primary commits immediately and ships the log afterwards, which is fast and works across regions, but a failover can lose the last few seconds of transactions. A common design is a synchronous replica in the same data centre for automatic failover plus an asynchronous replica in another region for disaster recovery. Whatever you choose, monitor replication lag and actually rehearse a failover, because an untested failover is not high availability.'
      },
      {
        id: 'dba-m1',
        q: 'It is 2 am and the production database is down. Walk me through your first thirty minutes.',
        topic: 'Incident Response',
        difficulty: 'hard',
        round: 'managerial',
        hint: 'Diagnose scope, communicate early, and take the least destructive action first.',
        ideal: 'I would stay calm and follow the runbook rather than improvising. First I would confirm the outage and its scope, checking whether the service is running, whether the server, storage or network is the problem, and looking at disk space and the database error log. Very early I would inform the on call lead and the stakeholders with a short factual message and a time for the next update, because silence during an outage causes more damage than the outage. Then I would take the safest action first, such as restarting the service, freeing disk space or bringing storage back, and take a snapshot or copy before doing anything irreversible. If a restore is needed I would follow the documented plan and state clearly how much data loss to expect. Once service is back, I would write a short root cause note and fix the missing alert or capacity issue that let it happen.'
      },
      {
        id: 'dba-m2',
        q: 'A developer has just run an UPDATE without a WHERE clause on the live customers table. What do you do?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Stop the bleeding, then recover only what was damaged, and blame nobody until later.',
        ideal: 'The first action is to stop further damage and find out whether the transaction is still open, because if it has not committed a rollback fixes everything instantly. If it is committed, I would find the exact time of the statement and how many rows changed, then restore a copy of the database to the moment just before it, or use flashback or log reading features, and copy back only the affected columns so legitimate changes made afterwards are not lost. I would tell the application owner and the business honestly about the impact and the expected recovery time rather than quietly hoping. I would keep the developer calm and involved, because he has the details, and blame helps nobody at that moment. Afterwards I would put in controls: no direct DML access on production, mandatory review, running such statements inside a transaction after checking the row count with a SELECT, and a fresh backup before any bulk change.'
      },
      {
        id: 'dba-m3',
        q: 'The application team keeps saying the database is slow, but your monitoring shows it is healthy. How do you handle that conversation?',
        topic: 'Working with Teams',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Agree on one shared measurement instead of defending your side.',
        ideal: 'I would not get defensive, because that turns a technical question into a fight between teams. I would ask for one concrete example, a specific screen or API call with a timestamp and, if possible, the exact query, then match it with what the database recorded for that moment: duration, waits, blocking and the plan. Sharing that evidence usually settles it, for example showing that the query took twenty milliseconds inside the database while the user waited three seconds, which points at the network, the ORM, or application code. If the database really is at fault I would say so plainly and tune it. To stop the argument repeating, I would suggest end to end tracing or logging the query time on the application side so both teams look at the same numbers next time.'
      },
      {
        id: 'dba-m4',
        q: 'Management asks you to apply a risky schema change on the production database during business hours. What do you say?',
        topic: 'Risk and Change Control',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Explain the risk in business terms and offer a safer path rather than a flat no.',
        ideal: 'I would explain the risk in language they care about, for example that the change locks the table for several minutes, that users will see errors, and how hard it would be to undo. Then I would ask what deadline is driving it, because often the real need can be met another way. I would propose safer options: run it in a maintenance window, use an online or rolling approach such as adding a nullable column and backfilling in batches, an online index rebuild, or a tool like pt-online-schema-change, and deploy the application change behind a feature flag. Whatever we do, I would insist on a tested script, a written rollback plan, and a fresh verified backup, and I would rehearse it on a staging copy of similar size first. If management still decides to proceed, I would do it professionally, document the decision and the risk, and monitor closely during and after.'
      }
    ]
  },
  {
    id: 'support-engineer',
    title: 'IT Support / Systems Engineer',
    short: 'IT Support',
    icon: '🧰',
    color: '#636e72',
    blurb: 'You keep the office running by fixing laptops, networks, accounts and software problems that people raise as tickets, and you explain the fix to them in plain language.',
    hires: ['HCLTech', 'Wipro', 'Tech Mahindra', 'Accenture India', 'IBM India', 'Concentrix'],
    skills: [
      'Windows and Linux basics',
      'TCP/IP, DNS, DHCP',
      'Active Directory and user accounts',
      'Hardware and laptop troubleshooting',
      'Ticketing tools like ServiceNow or Jira',
      'ITIL terms, SLA and escalation',
      'Email and Microsoft 365 issues',
      'Clear communication with non-technical users'
    ],
    prep: [
      'Install Windows Server or a Linux VM at home and practise creating users, resetting passwords and reading logs.',
      'Learn ipconfig, ping, tracert, nslookup and netstat well enough to say what each output means.',
      'Practise saying a fix out loud in simple words, as if the listener has never seen a command line.'
    ],
    questions: [
      {
        id: 'support-engineer-t1',
        q: 'A user calls and says the internet is not working on her laptop. What do you check first?',
        topic: 'Troubleshooting',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Find out how many people are affected before you touch the laptop.',
        ideal: 'First I ask what changed and whether colleagues around her have the same problem, because that tells me if it is one laptop or the whole network. Then I check the physical layer, that the cable is plugged in or wifi is connected to the right SSID. Next I run ipconfig to see if she has a valid IP address, since a 169.254 address means she never got one from DHCP. Then I ping the default gateway, then a public IP like 8.8.8.8, then a name like google.com, which separates a local network problem from an internet problem from a DNS problem. I also check proxy or VPN settings and whether only the browser is failing, and I log everything in the ticket.'
      },
      {
        id: 'support-engineer-t2',
        q: 'What is an IP address, and what is the difference between a private and a public IP?',
        topic: 'Networking',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about which addresses can be reached from outside the office.',
        ideal: 'An IP address is the number that identifies a device on a network so traffic can be delivered to it. Private IPs are the ranges 10.0.0.0 to 10.255.255.255, 172.16 to 172.31 and 192.168.x.x, and they are used inside a home or office network only. Public IPs are given by the internet service provider and are unique on the internet. The router uses NAT to translate many private addresses to one public address when users go online, so private addresses are never routed directly on the internet. That is why two offices can both use 192.168.1.10 without any clash.'
      },
      {
        id: 'support-engineer-t3',
        q: 'What does DNS do, and how do you check whether DNS is working on a Windows machine?',
        topic: 'DNS',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare pinging a name with pinging a plain number.',
        ideal: 'DNS converts a name like mail.company.com into an IP address so the machine knows where to connect. On Windows I run ipconfig /all to see which DNS servers the machine is using, then nslookup mail.company.com to see if the name resolves and which server answered. If ping 8.8.8.8 works but ping google.com fails, the network is fine and DNS is the problem. Common fixes are ipconfig /flushdns to clear a stale cached record, correcting a wrong DNS server entry, or reporting a real DNS server outage to the network team. I always test on a second machine to see if it is one user or everyone.'
      },
      {
        id: 'support-engineer-t4',
        q: 'What is the difference between RAM and hard disk, and how do you decide whether a slow PC needs more RAM?',
        topic: 'Hardware',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One empties when the power goes off, the other does not.',
        ideal: 'RAM is fast temporary memory that holds whatever is running right now and it is cleared when the machine is switched off, while the hard disk or SSD stores files and programs permanently. To judge a slow PC I open Task Manager and watch the Performance tab for a few minutes of normal work. If memory sits at ninety to hundred percent with only normal apps open and the machine is paging heavily, more RAM will help. If memory is fine but the disk stays at hundred percent on an old mechanical drive, replacing it with an SSD helps far more than RAM. I also check startup programs, antivirus scans, temperature and free disk space before recommending any spend.'
      },
      {
        id: 'support-engineer-t5',
        q: 'What information should a good support ticket contain before you start working on it?',
        topic: 'Ticketing',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Imagine a colleague has to take over your ticket while you are on leave.',
        ideal: 'A good ticket has the user name, contact number and location, the asset tag or machine name, and a clear one line summary of the issue. The description should have the exact error message, when it started, whether it worked before, the steps to reproduce it, and anything that changed such as an update or a new application. It must record the impact, meaning how many users are affected and whether work is stopped, because that decides the priority. It should list what troubleshooting was already done so nobody repeats it, along with screenshots or logs. Every update goes into the ticket notes so any engineer can pick it up without calling the user again.'
      },
      {
        id: 'support-engineer-t6',
        q: 'A user cannot print. Walk me through how you would find where the problem actually is.',
        topic: 'Printers',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Split the problem into the user, the PC, the network and the printer.',
        ideal: 'First I narrow the scope by asking if other users can print to the same printer and if this user can print to a different printer. At the printer I check power, paper, toner, any error on the panel, and the network cable or its IP address, and I ping that IP from my machine. On the PC I check that the correct printer is set as default, look for stuck jobs in the print queue, restart the Print Spooler service and clear the queue if jobs are frozen. Then I print a Windows test page, and if that works but the application does not, the problem is in that application or the document. If nothing works I reinstall the correct driver for the exact model and operating system version, and if all users are affected I escalate to the print server or network team.'
      },
      {
        id: 'support-engineer-t7',
        q: 'Which command line tools do you use for network troubleshooting on Windows, and what does each one tell you?',
        topic: 'Network tools',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Name the tool and, more importantly, what decision its output helps you make.',
        ideal: 'I use ipconfig /all to see the IP address, subnet mask, default gateway, DNS servers and whether DHCP gave the address. Ping tells me if a host is reachable and shows latency and packet loss. Tracert shows every hop on the way so I can see where the path breaks or slows down. Nslookup checks whether a name resolves and which DNS server answered. Netstat -ano shows open connections and listening ports with the process id, and Test-NetConnection or telnet on a port tells me if a specific service port is open. Ipconfig /flushdns clears cached DNS entries and ipconfig /release followed by /renew forces a fresh DHCP lease.'
      },
      {
        id: 'support-engineer-t8',
        q: 'What is DHCP, and what happens to users if the DHCP server goes down?',
        topic: 'DHCP',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Think about a machine that already has an address versus one that just booted.',
        ideal: 'DHCP automatically gives a device an IP address, subnet mask, default gateway and DNS servers, using the discover, offer, request and acknowledge exchange. Each address is a lease with a time limit, and the client tries to renew it about halfway through. If the DHCP server goes down, machines that already have a valid lease keep working until the lease expires. Machines that boot fresh get no answer and fall back to an APIPA address starting with 169.254, so they can only talk to other APIPA machines on the same link and not to the gateway. I would check whether the service is stopped, whether the scope has run out of free addresses, or whether the relay on the router is broken, and give a temporary static IP to critical users while the server is fixed.'
      },
      {
        id: 'support-engineer-t9',
        q: 'A user says he is locked out of his Windows domain account. How do you handle it safely?',
        topic: 'Active Directory',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Being locked out and having forgotten the password are two different fixes.',
        ideal: 'First I verify identity the way company policy says, for example calling back on the registered number or checking the employee id, and I never reset a password only because an email asked me to. Then I check in Active Directory whether the account is locked out, disabled or expired, because a lockout usually just needs an unlock, not a reset. A common cause of repeated lockouts is an old password saved on a phone, a mapped drive or a scheduled task, so I check the lockout source in the event logs. If a reset is genuinely needed I set a temporary password, tick user must change password at next logon, and share it over a separate channel, not in the same email chain. Finally I record the action in the ticket and tell the user to lock the screen instead of sharing passwords.'
      },
      {
        id: 'support-engineer-t10',
        q: 'On a Linux server, how do you check disk space, running processes, and why a service failed to start?',
        topic: 'Linux',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Free space, memory, then the service unit and its log.',
        ideal: 'I use df -h to see disk usage per mount point, and du -sh on directories to find what is eating the space, since a full root partition breaks many services. Free -h shows memory and swap, and top or htop plus ps -ef shows which processes are running and what they are consuming. For a service I run systemctl status servicename to see the state and the last error lines, then journalctl -u servicename for the full log. I also check the application log under /var/log, whether the port is already used by another process with ss -tulpn, and file permission or ownership problems on its config and data directories. After fixing it I start the service and enable it so it comes back after reboot.'
      },
      {
        id: 'support-engineer-t11',
        q: 'In support terms, what is the difference between an incident, a service request and a problem, and what is an SLA?',
        topic: 'ITIL',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One restores broken service, one is a normal ask, one hunts the root cause.',
        ideal: 'An incident is something that is broken or degraded, like mail not opening, and the goal is to restore service as fast as possible even with a workaround. A service request is a standard, planned ask such as new software access, a mouse or a new laptop, and it follows an approval flow. A problem is the underlying root cause behind one big or many repeated incidents, and problem management works on a permanent fix, often producing a known error record or knowledge article. An SLA is the agreed target time for responding to and resolving a ticket, usually different for each priority, and missing it counts as a breach that gets reported. Priority is normally decided from impact, how many users are hit, and urgency, how badly work is stopped.'
      },
      {
        id: 'support-engineer-t12',
        q: 'Ten users sitting on the same floor lose network access at the same time while the rest of the office is fine. How do you troubleshoot?',
        topic: 'Network troubleshooting',
        difficulty: 'hard',
        round: 'technical',
        hint: 'What hardware do exactly those ten people share and nobody else does?',
        ideal: 'Because the failure is limited to one group, I look for what only that group shares, normally the floor switch, its uplink, its power supply or the wifi access point covering that area. I confirm the pattern by asking whether the affected users are all wired or all on one access point, and I check a working machine on the same floor. On the affected machines I check ipconfig, since APIPA addresses across the whole floor point to a dead DHCP relay, a VLAN change or an exhausted scope. I check whether the switch responds to ping, whether its port lights and PoE are up, and I ask facilities whether any power or cabling work was done today. I give a workaround such as a spare port, another access point or a mobile hotspot for urgent users, escalate to the network team with the evidence I collected, and keep the users and my lead updated until it is closed.'
      },
      {
        id: 'support-engineer-t13',
        q: 'A shared folder opens fine for one team member but gives access denied to another in the same team. How do you find the reason?',
        topic: 'Permissions',
        difficulty: 'hard',
        round: 'technical',
        hint: 'There are two permission layers on a Windows share, and the stricter one wins.',
        ideal: 'First I confirm both users are opening exactly the same path, since a mapped drive can point to a different server or a different subfolder. Then I compare their group memberships in Active Directory, because access is normally granted to a group and the second user may not be in it. Next I check both permission layers, the share permission and the NTFS security permission, and remember that effective access is the more restrictive of the two, and that an explicit Deny always beats an Allow. The Effective Access tab on the folder security settings shows the final result for a specific user. A very common catch is that a newly added group membership only appears after the user logs off and logs back on, because the access token is built at logon. I also check whether inheritance was broken on that subfolder and record the correct fix in the ticket.'
      },
      {
        id: 'support-engineer-t14',
        q: 'A user calls saying strange files appeared and a note is demanding money to unlock her documents. What are your immediate steps?',
        topic: 'Security incident',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Stop the spread before you try to repair anything.',
        ideal: 'The first action is to contain it, so I tell the user to stop working and I disconnect the machine from the network by unplugging the cable and switching off wifi, which stops it encrypting shared drives. I do not pay anything and I do not let the user delete the note, and I immediately inform the information security team and my manager as per the incident policy, because this is a reportable security incident. I record the time it was noticed, the note file name, which folders are affected and which shares that user had mapped. I check the backups for the last clean copy and make sure the backup job does not overwrite good data with encrypted data. Recovery is normally to rebuild the machine from a clean image and restore files from backup rather than trust the infected system. Afterwards the team finds how it got in, such as a mail attachment or a USB drive, and we check other machines and warn users.'
      },
      {
        id: 'support-engineer-m1',
        q: 'A senior manager calls you angrily and demands you fix his laptop right now, but you are in the middle of an outage that has stopped work for thirty people. What do you do?',
        topic: 'Prioritisation',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Priority comes from business impact, and the manager still deserves a straight answer.',
        ideal: 'I would stay calm and polite, listen to him fully and ask two quick questions to judge how badly his work is blocked, because sometimes it is a five minute fix. I explain honestly that I am handling an outage affecting thirty users, which is a priority one under our SLA, and I give him a realistic time when I or a colleague can reach him. I offer a workaround immediately, such as a loaner laptop, webmail on his phone or a remote session from a free colleague. I make sure his ticket is logged with the right priority so nothing is forgotten, and I inform my team lead since a senior escalation should never be a surprise to my manager. Then I call him back at the time I promised, even if it is only to update him.'
      },
      {
        id: 'support-engineer-m2',
        q: 'You closed a ticket as resolved and the same issue came back the next day. How do you handle it?',
        topic: 'Ownership',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Owning the miss is faster than defending the closure.',
        ideal: 'I apologise to the user without making excuses, reopen the ticket or raise a linked one so the history stays together, and go back to it with fresh eyes. I accept that I probably fixed the symptom and not the cause, or closed it before the user confirmed, so this time I collect logs, event viewer entries and the exact steps that bring it back. I look for a pattern, for example whether it returns after reboot, after an update or only on that network. If the same thing is hitting several users I raise it as a problem record so the root cause gets a permanent fix instead of repeated restarts. Before closing I get clear confirmation from the user, and I follow up a day later and write a knowledge article so the next engineer solves it faster.'
      },
      {
        id: 'support-engineer-m3',
        q: 'How would you explain a mail server outage to a non technical user who just wants to know when her mail will work?',
        topic: 'Communication',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Say what she cannot do, what she can do, and when you will speak again.',
        ideal: 'I would avoid jargon completely and tell her plainly that the company mail system is down for everyone, that it is not a problem with her laptop, and that the team is already working on it. I would tell her what still works, for example mail on her phone if it is cached, chat, or calling the customer directly if something is urgent. I give an honest expected time only if I actually have one from the team, otherwise I say I will update her by a specific clock time rather than guessing. I give her the ticket number so she can refer to it, and I make sure I really call back at that time even if there is no news. I never blame another team in front of the user and I never promise a time I cannot keep.'
      },
      {
        id: 'support-engineer-m4',
        q: 'You get an issue you have never seen before and your senior is on leave. What do you do?',
        topic: 'Escalation',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'There is a limit on how long trying things yourself is a good idea.',
        ideal: 'I first gather full information and try only safe, standard steps, because guessing on a production system can make things worse. I search our internal knowledge base and past tickets for the same error, and check the vendor documentation, since most issues have been seen before. I keep the user informed that I am working on it and give a time for my next update. If I have not made progress within the time the SLA allows, I escalate to the next level support or the backup person named in the escalation matrix, and I hand over everything I already tried so nothing is repeated. I stay on the call while they fix it so I learn the method, and afterwards I document the solution in the knowledge base for the team.'
      }
    ]
  },
  {
    id: 'service-fresher',
    title: 'Service Company Fresher (TCS / Infosys / Wipro)',
    short: 'Service Co',
    icon: '🏢',
    color: '#e58e26',
    blurb: 'You join a large IT services company as a trainee, get put on a client project after training, and work on whatever technology that project needs, from coding and testing to support and small enhancements.',
    hires: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Capgemini', 'Accenture'],
    skills: [
      'One programming language in depth (C, Java or Python)',
      'DBMS and SQL queries',
      'Operating system basics',
      'Computer networks basics',
      'Object oriented programming',
      'Basic data structures and complexity',
      'Final year project explanation',
      'Aptitude and logical reasoning',
      'Communication and willingness to relocate'
    ],
    prep: [
      'Pick one language and be able to defend every line of code you have written in it.',
      'Prepare a two minute and a ten minute version of your final year project, including your exact contribution.',
      'Revise the four repeat topics every panel asks: OOP, SQL queries, deadlock and process versus thread, TCP versus UDP.'
    ],
    questions: [
      {
        id: 'service-fresher-t1',
        q: 'What is the difference between a compiler and an interpreter, and which one does your favourite language use?',
        topic: 'Programming basics',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Think about when the errors are shown to you.',
        ideal: 'A compiler translates the whole program into machine code before it runs and produces an output file such as an exe, so it reports all compile time errors together and the program then runs fast. An interpreter reads and executes the program line by line, so it stops at the first error and execution is generally slower, but testing small changes is easier. C and C plus plus are compiled, while Python is interpreted. Java uses both, because javac compiles the source into bytecode and the JVM interprets that bytecode, with the JIT compiler converting hot parts into native code at runtime. That two step design is what makes Java platform independent, since the same bytecode runs on any machine that has a JVM.'
      },
      {
        id: 'service-fresher-t2',
        q: 'What are the four pillars of object oriented programming? Explain each with a small everyday example.',
        topic: 'OOP',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Data hiding, showing only what is needed, reuse, and one name behaving in many ways.',
        ideal: 'Encapsulation means keeping data and the methods that work on it inside one class and marking the fields private, so a bank account balance can only change through a deposit or withdraw method that validates the amount. Abstraction means showing only what an object does and hiding how it does it, like a car driver using the brake pedal without knowing the hydraulics, and in code it is done with interfaces or abstract classes. Inheritance lets a child class reuse a parent class, so a Car class extends a Vehicle class and gets its common fields and methods. Polymorphism means the same name behaves differently, with overloading at compile time when methods share a name but differ in parameters, and overriding at runtime when a child class gives its own version of a parent method. Together they reduce duplicate code and make changes safer.'
      },
      {
        id: 'service-fresher-t3',
        q: 'What is a primary key and how is it different from a foreign key?',
        topic: 'DBMS',
        difficulty: 'easy',
        round: 'technical',
        hint: 'One identifies a row, the other points at another table.',
        ideal: 'A primary key is the column or set of columns that uniquely identifies each row in a table, it cannot be null, it cannot repeat, and a table can have only one primary key, which the database usually indexes automatically. A foreign key is a column in one table that refers to the primary key of another table and creates the relationship between them. Foreign key values can repeat and can be null, since many orders can belong to one customer. The foreign key enforces referential integrity, so the database will not let you insert an order for a customer id that does not exist, and it will block or cascade a delete of the parent row. A candidate key is any column that could have been the primary key, and the ones not chosen are alternate keys.'
      },
      {
        id: 'service-fresher-t4',
        q: 'What is an operating system and what are its main jobs?',
        topic: 'Operating systems',
        difficulty: 'easy',
        round: 'technical',
        hint: 'It sits between your program and the hardware.',
        ideal: 'An operating system is the software layer between the hardware and the user or application programs, and it manages all the machine resources. Its main jobs are process management, which means creating, scheduling and ending processes so the CPU is shared fairly, and memory management, which allocates and frees memory and handles virtual memory and paging. It also provides the file system for storing and organising data, and device management through drivers so programs can use disks, printers and network cards without knowing the hardware details. It handles security and user accounts, gives the user interface, and exposes system calls that programs use to ask for services. Windows, Linux, macOS and Android are common examples.'
      },
      {
        id: 'service-fresher-t5',
        q: 'What is the difference between an array and a linked list, and when would you choose each?',
        topic: 'Data structures',
        difficulty: 'easy',
        round: 'technical',
        hint: 'Compare how you reach the fifth element in each.',
        ideal: 'An array stores elements in one continuous block of memory with a fixed size, so reaching any element by index takes constant time, but inserting or deleting in the middle needs shifting and costs order n. A linked list stores each element in a node that also holds a pointer to the next node, so memory need not be continuous and it grows easily. Inserting or deleting is cheap once you already hold the previous node, but finding an element needs walking from the head, which is order n, and every node costs extra memory for the pointer. So I would use an array when I mostly read by index and know the rough size, and a linked list when there are many inserts and deletes and I do not need random access. In Java that maps to ArrayList versus LinkedList.'
      },
      {
        id: 'service-fresher-t6',
        q: 'How would you find the second largest number in an array without sorting it?',
        topic: 'Arrays',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Two variables and one pass are enough.',
        ideal: 'I would keep two variables, first and second, and scan the array once. For each element, if it is greater than first then second becomes first and first becomes that element, else if it is greater than second and not equal to first then second becomes that element. At the end second holds the answer, so the time is order n and the extra space is constant, which is better than sorting at order n log n. I would initialise both to the smallest possible value or to the first element rather than to zero, because the array may contain negative numbers. I would also handle the edge cases where the array has fewer than two elements or where all values are the same, in which case there is no second largest and I should say so instead of returning a wrong number.'
      },
      {
        id: 'service-fresher-t7',
        q: 'What is normalisation? Explain first, second and third normal form with an example.',
        topic: 'Normalisation',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Each form removes one kind of repeated data.',
        ideal: 'Normalisation is organising tables so that data is not repeated and insert, update and delete anomalies are avoided. First normal form means every column holds a single atomic value with no repeating groups, so instead of three phone numbers in one column you keep a separate phone table. Second normal form applies when the primary key has more than one column, and it says no non key column may depend on only part of that key, so in an order details table with order id and product id, the product name belongs in the product table. Third normal form removes transitive dependency, where a non key column depends on another non key column, so department name should move to a department table keyed by department id instead of sitting in the employee table. The cost of normalising is more joins, so reporting databases are sometimes deliberately denormalised for speed.'
      },
      {
        id: 'service-fresher-t8',
        q: 'What is the difference between DELETE, TRUNCATE and DROP in SQL?',
        topic: 'SQL',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One of them leaves an empty table, one leaves nothing at all.',
        ideal: 'DELETE is a DML command that removes rows one by one and can take a WHERE clause, it is logged per row so it is slower, it fires row triggers, and it can be rolled back inside a transaction. TRUNCATE is a DDL command that removes all rows at once by deallocating the pages, it cannot take a WHERE clause, it is much faster, it does not fire row triggers, and it usually resets the identity or auto increment counter. DROP is DDL too and it removes the entire table including its structure, indexes and constraints, so nothing is left. In most databases DDL statements are auto committed, so TRUNCATE and DROP cannot simply be undone the way DELETE can. Also, a table referenced by a foreign key normally cannot be truncated or dropped until that constraint is removed.'
      },
      {
        id: 'service-fresher-t9',
        q: 'What is a deadlock, and what conditions must be true for it to happen?',
        topic: 'Operating systems',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Four conditions, and breaking any one is enough to prevent it.',
        ideal: 'A deadlock is a situation where two or more processes each hold a resource and wait for a resource held by the other, so none of them can ever move forward. It needs four conditions at the same time, called the Coffman conditions: mutual exclusion, meaning a resource can be used by only one process at a time, hold and wait, meaning a process holds one resource while waiting for another, no preemption, meaning a resource cannot be forcibly taken away, and circular wait, meaning there is a cycle of processes each waiting on the next. Breaking any one of the four prevents deadlock, for example by asking every process to lock resources in the same fixed order, which removes circular wait. The operating system can also avoid it using the bankers algorithm, or detect it and recover by killing or rolling back a process. The same problem happens in databases when two transactions lock rows in opposite order, and the engine kills one as the deadlock victim.'
      },
      {
        id: 'service-fresher-t10',
        q: 'What is the difference between TCP and UDP, and give one real use of each?',
        topic: 'Networks',
        difficulty: 'medium',
        round: 'technical',
        hint: 'One apologises and resends, the other just keeps going.',
        ideal: 'TCP is connection oriented and sets up a connection with a three way handshake before sending data. It guarantees that data arrives, arrives in order and is error checked, using sequence numbers, acknowledgements and retransmission, plus flow control and congestion control, which makes it heavier and slightly slower. UDP is connectionless, sends datagrams without any handshake, has no acknowledgement, ordering or retransmission and a much smaller header, so it is faster with less overhead but delivery is not guaranteed. TCP is used where every byte matters, such as web pages over HTTP, email and file transfer. UDP is used where speed matters more than a lost packet, such as video calls, live streaming, online games and DNS queries.'
      },
      {
        id: 'service-fresher-t11',
        q: 'Tell me about your final year project. What problem does it solve, what exactly did you build, and what would you improve if you did it again?',
        topic: 'Project',
        difficulty: 'medium',
        round: 'technical',
        hint: 'Be very clear about which part was written by you and which by your teammates.',
        ideal: 'A good answer starts with the problem and who suffers from it in one or two sentences, then the solution and the technology used, for example a web application with a front end, a backend service and a database. Then it states the modules and clearly names the part the candidate personally built, since the panel will drill exactly there. It should include one real technical difficulty faced, such as slow queries, a login security issue or handling a file upload, and how it was solved. Then a result, even a small one, such as it reduced a manual step or was demonstrated to the department. Finally an honest improvement, such as adding proper validation, unit tests, better error handling or moving hard coded values into configuration, which shows the candidate can look critically at his own work.'
      },
      {
        id: 'service-fresher-t12',
        q: 'What happens step by step when you type www.google.com in a browser and press enter?',
        topic: 'Networks',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Name to address, then connection, then request, then rendering.',
        ideal: 'The browser first checks its own cache, then the operating system cache and the hosts file, and if the name is not found it asks the configured DNS resolver, which if needed queries the root, the top level domain and the authoritative servers to get the IP address. With the IP known the browser opens a TCP connection to port 443 using the three way handshake, and for https it then performs the TLS handshake to verify the certificate and agree on encryption keys. The browser sends an HTTP GET request with headers and cookies, which may pass through a load balancer to an application server, and that server may query a database or a cache before responding. The response comes back with a status code and the HTML body, and the browser parses the HTML, requests the linked CSS, JavaScript and images, builds the DOM and CSSOM, and renders the page. Caching, keep alive connections and content delivery networks make repeat visits much faster.'
      },
      {
        id: 'service-fresher-t13',
        q: 'In an employee table with a salary column, how do you write a query to get the second highest salary?',
        topic: 'SQL',
        difficulty: 'hard',
        round: 'technical',
        hint: 'The safest versions handle two employees earning the same top salary.',
        ideal: 'The simplest way is a subquery, SELECT MAX(salary) FROM employee WHERE salary less than (SELECT MAX(salary) FROM employee), which naturally ignores duplicates of the top salary. A cleaner general way uses a window function, SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS r FROM employee) t WHERE r equals 2, and DENSE_RANK is used instead of RANK so tied top salaries do not skip rank two. In MySQL or PostgreSQL you can also write SELECT DISTINCT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 1, where DISTINCT is essential otherwise duplicates give the wrong result. I would mention that if every employee earns the same, the query returns null or no row, and the application must handle that. The same pattern extends to the nth highest by changing the rank number or the offset.'
      },
      {
        id: 'service-fresher-t14',
        q: 'How does a HashMap store data internally, and what happens when two different keys give the same hash?',
        topic: 'Hashing',
        difficulty: 'hard',
        round: 'technical',
        hint: 'Think of an array of buckets, and what lives inside one bucket.',
        ideal: 'A HashMap keeps an internal array of buckets, and for each key it calls hashCode, spreads the bits, and maps the result to a bucket index. When two keys land in the same bucket, which is a collision, the entries are stored together in that bucket as a linked list, and in Java 8 and later a bucket that grows past about eight entries is converted into a balanced tree to keep lookups fast. To find the right entry inside a bucket the map compares hashes and then uses equals, which is why equals and hashCode must be consistent, and why keys should ideally be immutable. Average get and put are close to constant time, but the worst case degrades to order n with a linked bucket, or order log n once it becomes a tree. When the number of entries crosses the load factor, normally 0.75 of capacity, the map doubles its capacity and rehashes all entries, so giving a sensible initial capacity avoids repeated resizing.'
      },
      {
        id: 'service-fresher-m1',
        q: 'Are you willing to relocate to any of our locations and work in whatever technology the project needs, including night shifts?',
        topic: 'Flexibility',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Answer honestly, because they will hold you to it after training.',
        ideal: 'The expected answer is a clear yes with a reason, since a services company staffs projects across many cities and technologies and needs people who can move. A strong answer says the candidate is willing to relocate anywhere in India, has already discussed it with family, and sees working on different technologies as a chance to learn rather than a problem. Shift work should be accepted as part of supporting global clients, while it is fine to ask politely about shift rotation and transport as information, not as a condition. Candidates should not say yes if they truly cannot move, because backing out after the offer damages both sides, so honesty with a reason is better than a false yes. Mentioning that the college project or an internship already required adapting to a new tool makes the answer believable.'
      },
      {
        id: 'service-fresher-m2',
        q: 'After training you are put on a project using a technology you have never studied. How will you get productive in the first month?',
        topic: 'Learning',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Show a plan with weeks in it, not just the sentence I am a fast learner.',
        ideal: 'I would use the official documentation and the company learning portal first, and attend the knowledge transfer sessions the team gives, taking my own notes as I go. In the first week I would build one small hands on sample so the concepts stop being theory, and I would read the existing project code to trace how one complete flow works from the screen to the database. I would ask my buddy or mentor specific questions after trying myself, because vague questions waste a senior developer time. I would take small tasks such as bug fixes first, deliver them properly, and be honest in the daily stand up about where I am stuck instead of hiding it. I would also keep a personal document of commands, errors and fixes, which also helps the next new joiner.'
      },
      {
        id: 'service-fresher-m3',
        q: 'In your final year project one team member stopped contributing close to the deadline. What did you do about it?',
        topic: 'Teamwork',
        difficulty: 'medium',
        round: 'managerial',
        hint: 'Talk to the person before you talk to the guide.',
        ideal: 'I would first speak to him privately and without blaming, because there is often a real reason such as a personal problem, exams, or simply not understanding the task given to him. Based on that I would either break his work into smaller and clearer pieces, pair with him on the first one, or redistribute the parts among the rest of us with a new realistic plan. I would keep the task list and the deadline visible to everyone so the status is a fact and not an argument. If the delivery was still at risk I would inform our guide early with the facts and the plan, not on the last day, because hiding a risk helps nobody. The point I would make is that the goal is to protect the delivery and the team relationship at the same time, and that I would do the same on a client project.'
      },
      {
        id: 'service-fresher-m4',
        q: 'Why should we hire you, and where do you see yourself three years from now?',
        topic: 'Career',
        difficulty: 'easy',
        round: 'managerial',
        hint: 'Give one proof for every claim you make about yourself.',
        ideal: 'A good answer links two or three concrete strengths to what the role needs, for example solid fundamentals in one language, a project actually built end to end, and comfort with learning new tools, and it gives one proof for each rather than adjectives. It should mention reliability and communication, since services work is client facing and delivery depends on people who report status honestly. For the three year question the answer should be realistic and inside the company, such as becoming strong in one technology stack, owning a module end to end, and moving towards a senior developer or module lead role, possibly with a domain or certification added. It helps to say the candidate wants depth first and growth through the company career path, rather than hinting at switching jobs or going for higher studies. Keeping it specific and modest is better than claiming to be the best candidate.'
      }
    ]
  }
]

// The HR round is the same for every role — an interviewer does not change
// "tell me about yourself" because the job title changed.
export const HR_QUESTIONS = [
  {
    id: 'hr1',
    q: 'Tell me about yourself.',
    topic: 'Introduction',
    difficulty: 'easy',
    round: 'hr',
    hint: 'The interviewer is checking whether you can present yourself clearly in under two minutes, not your life story.',
    ideal: 'A strong answer runs about 60 to 90 seconds and follows a simple order: present (name, degree, college, final year), proof (one or two projects, internships or achievements that match the job), and future (why this role is the natural next step). Every line should connect to the job description, so the interviewer hears skills, not biography. Speak in full sentences and end cleanly, so the interviewer knows you have finished. The trap is starting from school marks, hometown and family details, or repeating the resume line by line. Do not memorise it word for word; keep the structure fixed and let the words come naturally.'
  },
  {
    id: 'hr2',
    q: 'Why do you want to join our company?',
    topic: 'Company Fit',
    difficulty: 'easy',
    round: 'hr',
    hint: 'They want to know if you researched them or applied to every company on campus.',
    ideal: 'A good answer names two or three specific things about the company: the kind of work or products, the technology stack, the training programme for freshers, or the scale of clients they serve. Then it links each point to something you actually want, such as learning a particular technology or working on real production systems. Finish with one honest line about how you see yourself growing there over the next few years. The trap is generic praise like it is a reputed company and a good work culture, because that fits every company and shows no preparation. Never say you are joining only because it is the first company visiting campus.'
  },
  {
    id: 'hr3',
    q: 'What are your strengths?',
    topic: 'Strengths',
    difficulty: 'easy',
    round: 'hr',
    hint: 'A strength without an example is just an adjective; they are listening for the proof.',
    ideal: 'Pick two or three strengths that the role actually needs, for example quick learning, patience while debugging, or clear communication in a team. For each one, give a short real example from a project, internship, hackathon or class assignment that shows the strength in action. Keep the example to two or three sentences with a result at the end, such as the bug being fixed or the module being delivered on time. The trap is listing five or six adjectives like hardworking, punctual and dedicated with nothing to back them up. Choose strengths you can defend if the interviewer asks a follow up question.'
  },
  {
    id: 'hr4',
    q: 'What is your biggest weakness?',
    topic: 'Weaknesses',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They are testing self awareness and whether you are actively working on the weakness.',
    ideal: 'Name one real but non fatal weakness, then spend most of the answer on the correction you are already making. A good shape is: here is the weakness, here is a situation where it cost me something small, here is the specific habit or tool I now use, and here is the improvement I can see. Keep it honest and specific, because a real weakness said calmly builds trust. The trap is the fake weakness such as I am a perfectionist or I work too hard, which every interviewer has heard hundreds of times. Also avoid naming a weakness that is the core skill of the job, like saying you dislike coding for a developer role.'
  },
  {
    id: 'hr5',
    q: 'Walk me through your final year project. What was your exact contribution?',
    topic: 'Project',
    difficulty: 'medium',
    round: 'hr',
    hint: 'The real test is whether the project is yours or you just watched your teammates build it.',
    ideal: 'Start with the problem in one line that a non technical person would understand, then the solution and the technology you used. Next, clearly separate what the team did from what you personally built, naming your modules, the language and the tools. Mention one hard problem you hit, how you solved it, and the final result or output of the project. Be ready for deep follow up questions on any part you claim, so never claim a module you cannot explain. The trap is using heavy jargon for five minutes and never saying what your own hands did.'
  },
  {
    id: 'hr6',
    q: 'Tell me about a time you disagreed with a teammate. How did you handle it?',
    topic: 'Teamwork',
    difficulty: 'hard',
    round: 'hr',
    hint: 'They want to see if you attack the problem or the person when a team is under pressure.',
    ideal: 'Use a simple situation, action, result structure with a small real disagreement, such as a choice of technology, a design decision, or work not being finished on time. Describe how you listened to the other side first, explained your reasoning with facts, and how the team reached a decision, even if the final decision was not yours. End with the outcome and one line on what you learned about working with people. The trap is saying you never have disagreements, which sounds untrue and passive. Never speak badly about the teammate by name or blame them for the whole problem.'
  },
  {
    id: 'hr7',
    q: 'Tell me about a time you failed. What did you learn from it?',
    topic: 'Failure',
    difficulty: 'hard',
    round: 'hr',
    hint: 'They are checking whether you own mistakes or hand the blame to circumstances.',
    ideal: 'Choose a genuine, contained failure such as a missed deadline, a rejected idea, a contest you lost, or an interview you were not selected for. Explain what went wrong and take clear ownership of your part instead of blaming teammates, teachers or the internet connection. Then describe exactly what you changed afterwards, and give one later example where that change worked. Keep the failure part short and the learning part longer, so the answer ends on strength. The trap is picking a fake failure with no consequence, or picking something so serious that it raises doubts about your basic reliability.'
  },
  {
    id: 'hr8',
    q: 'Where do you see yourself in five years?',
    topic: 'Career Goals',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They are really asking whether you will still be with them after the training investment.',
    ideal: 'Describe growth in the same direction as the job: first strong at the core technology, then owning a module end to end, then guiding juniors or moving into a technical lead or specialist role. Mention that you want to keep learning through certifications or new project domains, and connect it to the company\'s own career path if you know it. Sound ambitious but realistic for a fresher, because nobody expects a project manager title in five years. The trap is saying you will do a masters abroad, start your own company, or prepare for government exams, because that signals you will leave early. Also avoid the empty answer of I have not thought about it.'
  },
  {
    id: 'hr9',
    q: 'Are you willing to relocate to any of our office locations across India?',
    topic: 'Relocation',
    difficulty: 'easy',
    round: 'hr',
    hint: 'This is a filter question; hesitation reads as a risk of dropping out after joining.',
    ideal: 'If you are willing, say yes clearly in the first sentence and then add a short reason, such as wanting exposure to different teams and clients early in your career. Do not add long conditions or hint that you are hoping for one particular city. If you have a genuine constraint, state it politely and honestly, mention how long it applies, and show flexibility for training periods. Interviewers respect a clear yes or a clear honest limit far more than a vague maybe. The trap is saying yes in the interview while planning to refuse the offer letter, because that damages your college\'s relationship with the company.'
  },
  {
    id: 'hr10',
    q: 'Are you comfortable working night shifts or rotational shifts?',
    topic: 'Shifts',
    difficulty: 'easy',
    round: 'hr',
    hint: 'They need to know you understand the real working conditions before you sign.',
    ideal: 'Give a direct answer first, then show you understand why shifts exist, for example client time zones or production support that must run around the clock. If you are comfortable, say you are ready to work as per project requirement and that you can manage your schedule and health around it. If you have a real limitation, say it respectfully instead of hiding it, since a surprise after joining is worse. Keep the answer short, calm and confident, because a long explanation sounds like reluctance. The trap is asking how many night shifts and how much extra pay before you have even been selected.'
  },
  {
    id: 'hr11',
    q: 'We have a two year service agreement or bond. Are you okay with that?',
    topic: 'Bond',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They want commitment, and they are also watching how you ask about terms.',
    ideal: 'Show that you understand the company is investing in months of paid training, so a service period is fair from their side. Say clearly that you are ready to commit for that period, and that you plan to build your base with them anyway. It is completely acceptable to ask one polite clarifying question about the duration and the terms in writing, but ask it after you have shown willingness. Keep the tone positive rather than defensive, since a bond question answered nervously suggests you are already planning your exit. The trap is arguing about the fairness of bonds or asking how much the penalty is if you leave early.'
  },
  {
    id: 'hr12',
    q: 'What are your salary expectations?',
    topic: 'Salary',
    difficulty: 'hard',
    round: 'hr',
    hint: 'For a fresher this checks realism and market awareness, not negotiation skill.',
    ideal: 'For a campus or fresher role where the package is fixed, the safe answer is that you accept the standard package for this role and that learning and growth matter most at this stage. If the company asks for a number, give a small researched range based on the market for that role and city instead of one exact figure, and say you are open to discussion. Show that you know what the role pays by mentioning that your range comes from what similar fresher roles offer. Keep the tone calm and never make it the main topic of the interview. The trap is quoting a number far above the market, or saying anything is fine, which makes you sound like you do not know your own worth.'
  },
  {
    id: 'hr13',
    q: 'Why should we hire you?',
    topic: 'Selling Yourself',
    difficulty: 'medium',
    round: 'hr',
    hint: 'This is a closing pitch; they want to hear the match between their need and your proof.',
    ideal: 'Answer in three short parts: what the role needs, the evidence that you already have some of it, and the attitude you bring for the rest. Pick two or three requirements from the job description and match each one to a project, internship, certification or contest result. Add one line about being a fast learner who is comfortable being trained in the company\'s stack, since freshers are hired for potential. Finish with a confident single sentence, not a request or an apology. The trap is comparing yourself to other candidates or saying you need the job because you have to support your family, which is emotional rather than relevant.'
  },
  {
    id: 'hr14',
    q: 'I see a backlog in your marksheet. Can you explain that?',
    topic: 'Backlogs',
    difficulty: 'hard',
    round: 'hr',
    hint: 'They care much less about the backlog than about your honesty and your recovery.',
    ideal: 'Acknowledge the backlog straight away without excuses, and state its current status clearly, for example cleared in the next attempt or in progress with a date. Give a short honest reason if there is one, such as illness, a family situation or poor time management in that semester, in one sentence only. Then spend most of the answer on the correction and the proof it worked, such as improved marks in later semesters, projects completed or certifications earned. End on the present, showing that the issue is closed and behind you. The trap is blaming the teacher or the paper, or trying to hide the backlog, because it will show up in verification anyway.'
  },
  {
    id: 'hr15',
    q: 'There is a gap in your education timeline. What were you doing during that period?',
    topic: 'Education Gap',
    difficulty: 'hard',
    round: 'hr',
    hint: 'They are checking for honesty and for whether the time was used, not wasted.',
    ideal: 'State the reason for the gap plainly and briefly, whether it was a health issue, a family responsibility, exam preparation or a drop year, and give the exact period. Then show what you did with that time, such as courses, self study, freelance work, or skills you built, even if they were small. Close by saying how you are ready now and why the reason for the gap no longer applies. Keep the tone matter of fact rather than apologetic, because a calm explanation removes the doubt instantly. The trap is inventing a fake reason or giving vague answers, since documents and dates are verified during onboarding.'
  },
  {
    id: 'hr16',
    q: 'What do you do outside academics? Tell me about your hobbies.',
    topic: 'Hobbies',
    difficulty: 'easy',
    round: 'hr',
    hint: 'This relaxed question is still checking personality, consistency and whether your resume is true.',
    ideal: 'Name one or two hobbies you genuinely do, and add one specific detail that proves it, such as how often you do it or something you made, played or organised. If a hobby shows a useful trait like discipline, teamwork or creativity, connect it in one short line without forcing it. Be ready for a follow up question, because interviewers often test the hobby you listed on your resume with a simple factual question. Keep the answer light and natural, since this part of the interview is meant to show how you talk when relaxed. The trap is listing reading books or listening to music and then being unable to name a book or an artist.'
  },
  {
    id: 'hr17',
    q: 'Do you have any questions for us?',
    topic: 'Candidate Questions',
    difficulty: 'easy',
    round: 'hr',
    hint: 'Saying no here wastes the one moment where you can show real interest.',
    ideal: 'Always ask one or two prepared questions about the work itself, for example the training path for freshers, the kind of projects a new joiner is placed on, or the technologies the team uses. A good second question is about how performance is measured in the first year, which shows you plan to do well. Listen to the answer and respond to it briefly instead of jumping to your next question like a checklist. Close by thanking the interviewer and confirming your interest in the role. The trap is asking only about salary, leave policy, work from home or appraisal in your very first question, or saying you have no questions at all.'
  },
  {
    id: 'hr18',
    q: 'How do you handle pressure and tight deadlines?',
    topic: 'Pressure Handling',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They want a method you actually use, backed by one real crunch you survived.',
    ideal: 'Describe your method first in one or two lines: breaking the work into small tasks, ranking them by importance, and telling the team early if something will slip. Then give one real example, such as a project submission, an exam week clashing with a hackathon, or a bug found close to a demo, and say what you did and how it ended. Mention that you ask for help early rather than staying silent, since that is what managers want from a fresher. Keep the tone steady, because how you speak about pressure is itself part of the answer. The trap is claiming you never feel pressure, or telling a story where you finished everything at the last minute by luck.'
  },
  {
    id: 'hr19',
    q: 'You applied for a developer role, but we may place you in testing or support. Will you accept it?',
    topic: 'Role Flexibility',
    difficulty: 'medium',
    round: 'hr',
    hint: 'This is a loyalty and attitude test, not usually a real change of role.',
    ideal: 'Start by showing you understand that placement depends on project requirements and that every role in the delivery chain teaches something useful about the product. Say you are willing to start wherever you are placed and give your best there, while being clear and polite that your long term interest is development. Mention that you would keep building your coding skills alongside and would be happy to move when an opportunity opens internally. This gives them commitment without you pretending to want something you do not. The trap is a flat refusal, or an over eager yes to anything, since both sound unthinking.'
  },
  {
    id: 'hr20',
    q: 'Tell me about a time you led a team or took responsibility for something.',
    topic: 'Leadership',
    difficulty: 'medium',
    round: 'hr',
    hint: 'Leadership here means taking ownership, not holding a title.',
    ideal: 'Pick any situation where you owned an outcome, such as leading a project team, organising a college event, coordinating a group assignment, or mentoring juniors. Explain how you split the work, kept track of progress, and handled the person who was falling behind, since that is the part interviewers listen for. State the result in one line, and give credit to the team while being clear about what you personally drove. The trap is describing yourself as the leader who did everything alone because the others were useless, which reads as poor teamwork. If you have never held a formal leader role, an honest ownership story works just as well.'
  },
  {
    id: 'hr21',
    q: 'What do you know about our company and what we do?',
    topic: 'Company Research',
    difficulty: 'easy',
    round: 'hr',
    hint: 'Fifteen minutes of homework is visible here, and so is the absence of it.',
    ideal: 'Give the basics accurately: what the company does, the main services or products, the industries or clients it serves, and roughly its size or presence. Add one recent and specific detail, such as a new product, an acquisition, an expansion, or an area they are investing in, to show you looked beyond the front page. Then connect one of those points to the role you are applying for. Keep it to about a minute, because this is a check, not a presentation. The trap is repeating the company tagline, mixing the company up with a competitor, or quoting numbers you are not sure about.'
  },
  {
    id: 'hr22',
    q: 'Are you planning to do higher studies or prepare for other exams after joining?',
    topic: 'Long Term Intent',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They are measuring the risk that you leave within the first year of training.',
    ideal: 'If you have no such plan, say so clearly and add that your focus now is industry experience and building depth in real projects. If you are interested in further learning, frame it as part time or company supported study that fits alongside the job rather than a plan to quit. Reassure them about the near term by mentioning your commitment for the training and service period. Keep the answer short and confident, because a long hedged answer creates the very doubt you are trying to remove. The trap is admitting active preparation for a competing exam or an admission process, or lying about a plan that your social media or references may reveal.'
  },
  {
    id: 'hr23',
    q: 'Tell me about a time you received harsh criticism or negative feedback.',
    topic: 'Feedback',
    difficulty: 'medium',
    round: 'hr',
    hint: 'They want to see whether feedback makes you defensive or better.',
    ideal: 'Choose a real instance, such as a guide rejecting your project approach, a code review full of comments, or a mentor pointing out weak presentation skills. Describe your first reaction honestly, then how you separated the message from the tone and asked for specifics on what to fix. Explain the concrete change you made and the better result that followed, ideally with the same person noticing the improvement. End with a line showing you now see review comments as free training. The trap is picking feedback you disagreed with and then explaining why the other person was wrong.'
  },
  {
    id: 'hr24',
    q: 'How do you learn a new technology quickly, and what keeps you motivated?',
    topic: 'Learning Ability',
    difficulty: 'medium',
    round: 'hr',
    hint: 'Freshers are hired for how fast they can be trained, so they want your actual learning routine.',
    ideal: 'Describe a repeatable routine rather than a feeling: reading the official documentation or a short course, building a small working project immediately, then breaking and fixing it to understand the errors. Give one example of a language, framework or tool you picked up outside the syllabus and what you built with it, however small. Add how you stay current, such as following documentation updates, practising on coding platforms, or learning from seniors and code reviews. For motivation, mention something sustainable like seeing your own code work for a real user, and connect it to the work this role offers. The trap is saying you learn fast without any proof, or naming a technology you cannot answer one basic question about.'
  }
]

export const ROUNDS = [
  {
    id: 'technical',
    title: 'Technical round',
    icon: '⚙️',
    blurb: 'Do you actually know the subject? Concepts, and how you would use them.'
  },
  {
    id: 'managerial',
    title: 'Managerial round',
    icon: '🧩',
    blurb: 'How you work: ownership, deadlines, mistakes, and working with a team.'
  },
  {
    id: 'hr',
    title: 'HR round',
    icon: '🤝',
    blurb: 'About you — your project, your plans, and whether you fit.'
  },
  {
    id: 'full',
    title: 'Full mock interview',
    icon: '🎤',
    blurb: 'All three, in the order a real interview day runs them.'
  }
]

export const findRole = (id) => INTERVIEW_ROLES.find((r) => r.id === id) || null
export const findRound = (id) => ROUNDS.find((r) => r.id === id) || ROUNDS[0]

export const TOTAL_ROLE_QUESTIONS = INTERVIEW_ROLES.reduce((n, r) => n + r.questions.length, 0)

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const pick = (pool, n) => shuffle(pool).slice(0, Math.max(0, n))

// Narrowing to one difficulty is a preference, not a promise — if it would
// leave someone with two questions, give them the whole pool instead.
function atDifficulty(pool, difficulty) {
  if (!difficulty || difficulty === 'any') return pool
  const hit = pool.filter((q) => q.difficulty === difficulty)
  return hit.length >= 3 ? hit : pool
}

// Deal one interview. A 'full' mock runs technical, then managerial, then HR —
// the order a real interview day goes in.
export function buildInterview({ roleId, round = 'technical', count = 8, difficulty = 'any' }) {
  const role = findRole(roleId)
  if (!role) return []
  const technical = role.questions.filter((q) => q.round === 'technical')
  const managerial = role.questions.filter((q) => q.round === 'managerial')

  if (round === 'hr') return pick(HR_QUESTIONS, count)
  if (round === 'managerial') return pick(managerial.length ? managerial : role.questions, count)
  if (round === 'technical') return pick(atDifficulty(technical, difficulty), count)

  let nTechnical = Math.max(1, Math.round(count * 0.6))
  const nManagerial = Math.max(1, Math.round(count * 0.2))
  let nHr = count - nTechnical - nManagerial
  if (nHr < 1) {
    nHr = 1
    nTechnical = Math.max(1, count - nManagerial - nHr)
  }
  return [
    ...pick(atDifficulty(technical, difficulty), nTechnical),
    ...pick(managerial, nManagerial),
    ...pick(HR_QUESTIONS, nHr)
  ]
}
