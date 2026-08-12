// Lesson text and quiz questions for "Software Testing".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "software-testing-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Software testing means checking that a program actually does what it is supposed to do — and does NOT do what it should not. Every app you use was tested many times before it reached you. Testing is how we find mistakes (called bugs) before real users hit them."
    },
    {
     "type": "text",
     "text": "Programmers are human, so code always has mistakes: a wrong calculation, a button that crashes, a login that lets the wrong person in. A tiny bug can cost real money or trust. In 1996 the Ariane 5 rocket exploded seconds after launch because of a single number-conversion bug that testing could have caught."
    },
    {
     "type": "tip",
     "text": "Think of testing like a spell-checker for behaviour: writing code is the essay, testing is proofreading it before you hand it in."
    },
    {
     "type": "text",
     "text": "A key idea: the earlier you find a bug, the cheaper it is to fix. A bug caught while coding might take minutes; the same bug found after release can mean an emergency patch, angry users, and lost reputation. Testing is not about proving software is perfect — it is about reducing risk."
    },
    {
     "type": "text",
     "text": "Testing also answers a simple question: 'Does it meet the requirements?' Requirements are the agreed list of what the software must do. Testing compares the real behaviour against those expectations and reports the difference."
    }
   ],
   "recap": "We test software to find bugs early, reduce risk, and confirm the program meets its requirements — because finding a bug later costs far more than finding it sooner."
  },
  "quiz": [
   {
    "q": "What is the main purpose of software testing?",
    "options": [
     "To write more lines of code",
     "To find bugs and check the software meets its requirements",
     "To design the user interface",
     "To make code run faster"
    ],
    "answer": 1,
    "explain": "Testing exists to uncover defects and verify the software behaves as required."
   },
   {
    "q": "Why is finding a bug early so valuable?",
    "options": [
     "The earlier a bug is found, the cheaper it is to fix",
     "Early bugs are always harmless",
     "It lets you skip documentation",
     "It looks good on a report"
    ],
    "answer": 0,
    "explain": "Fixing a bug during coding costs far less than fixing it after release."
   },
   {
    "q": "What does a 'bug' mean in software?",
    "options": [
     "A type of test tool",
     "A mistake or fault in the program",
     "A programming language",
     "A feature request"
    ],
    "answer": 1,
    "explain": "A bug is a defect that makes the software behave incorrectly."
   },
   {
    "q": "Testing mainly compares the software's real behaviour against what?",
    "options": [
     "The requirements (what it should do)",
     "The number of users",
     "The programmer's mood",
     "The size of the code"
    ],
    "answer": 0,
    "explain": "Testing checks actual behaviour against the agreed requirements."
   }
  ]
 },
 "software-testing-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Testing happens at different levels, from the smallest piece of code up to the whole finished product. The four classic levels are unit, integration, system, and acceptance testing. They build on each other like floors of a building."
    },
    {
     "type": "text",
     "text": "Unit testing checks one small piece in isolation — usually a single function or method. If a function adds two numbers, a unit test feeds it 2 and 3 and checks it returns 5. Units are tested alone so a failure points to exactly one place."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def add(a, b):\n    return a + b\n\n# a unit test\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0"
    },
    {
     "type": "text",
     "text": "Integration testing checks that separate units work correctly TOGETHER. Two functions may each pass their own unit tests but still break when connected — like two puzzle pieces that are each fine but do not fit. Integration tests catch problems at the joins, such as one module sending data in the wrong format."
    },
    {
     "type": "text",
     "text": "System testing checks the complete, fully assembled application as a whole, in an environment like the real one. It tests end-to-end flows — for example, a user signs up, logs in, buys an item, and receives a receipt. Acceptance testing is the final check, done from the user's or customer's point of view, to confirm the software is fit to be delivered and meets business needs (often called UAT — User Acceptance Testing)."
    },
    {
     "type": "tip",
     "text": "Remember the order small-to-big: Unit (one brick) → Integration (bricks joined) → System (whole building) → Acceptance (the owner inspects it)."
    }
   ],
   "recap": "The four levels rise from small to large: unit tests one function, integration tests units working together, system tests the whole app end-to-end, and acceptance confirms it meets the user's real needs."
  },
  "quiz": [
   {
    "q": "Which level tests a single function in isolation?",
    "options": [
     "System testing",
     "Acceptance testing",
     "Integration testing",
     "Unit testing"
    ],
    "answer": 3,
    "explain": "Unit testing checks one small piece, like a single function, on its own."
   },
   {
    "q": "Two modules each pass their own tests but fail when connected. What testing catches this?",
    "options": [
     "Integration testing",
     "Acceptance testing",
     "Unit testing",
     "Load testing"
    ],
    "answer": 0,
    "explain": "Integration testing checks that separate units work correctly together."
   },
   {
    "q": "What is the correct order from smallest to largest scope?",
    "options": [
     "Integration → Unit → Acceptance → System",
     "Acceptance → System → Unit → Integration",
     "Unit → Integration → System → Acceptance",
     "System → Unit → Integration → Acceptance"
    ],
    "answer": 2,
    "explain": "Testing scales up: unit, then integration, then system, then acceptance."
   },
   {
    "q": "Acceptance testing (UAT) is mainly done from whose point of view?",
    "options": [
     "The compiler",
     "The network router",
     "The user or customer",
     "The database administrator"
    ],
    "answer": 2,
    "explain": "Acceptance testing confirms the software meets the user's real business needs."
   }
  ]
 },
 "software-testing-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "There are two ways to run tests: a human does them (manual testing) or a program does them (automated testing). Both are useful, and real teams use a mix of the two."
    },
    {
     "type": "text",
     "text": "In manual testing, a person clicks through the app, types inputs, and checks the results with their own eyes. It is flexible and great for exploring, judging how something looks and feels, or testing a brand-new feature nobody has scripted yet. Its weakness: it is slow, tiring, and easy to make mistakes when repeated many times."
    },
    {
     "type": "text",
     "text": "In automated testing, you write code that runs the checks for you. The computer performs the same steps in seconds and reports pass or fail. It is fast, exact, and repeatable — perfect for re-running the same checks after every code change (called regression testing) to make sure nothing that worked before is now broken."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// an automated test using a test runner\ntest('login rejects a wrong password', () => {\n  const result = login('alice', 'wrongpass');\n  expect(result.success).toBe(false);\n});"
    },
    {
     "type": "tip",
     "text": "Rule of thumb: automate the boring, repeated checks; keep humans for exploring, judgement, and 'does this feel right?' There is no need to automate a test you will only ever run once."
    },
    {
     "type": "text",
     "text": "Automation is not free — writing and maintaining test code takes effort, and it cannot judge look-and-feel. Manual testing needs no setup but does not scale. The smart choice depends on how often a test must run and whether a human's judgement is needed."
    }
   ],
   "recap": "Manual testing uses a human — flexible and good for exploring; automated testing uses code — fast, exact, and ideal for repeated regression checks. Real teams combine both."
  },
  "quiz": [
   {
    "q": "Which type of testing is best for repeatedly re-running the same checks after every code change?",
    "options": [
     "Exploratory testing",
     "Manual testing",
     "Automated testing",
     "Coffee-break testing"
    ],
    "answer": 2,
    "explain": "Automated tests are fast and repeatable, ideal for regression checks."
   },
   {
    "q": "Re-running old tests to confirm new changes did not break anything is called what?",
    "options": [
     "Unit testing",
     "Stress testing",
     "Smoke signalling",
     "Regression testing"
    ],
    "answer": 3,
    "explain": "Regression testing verifies that previously working features still work."
   },
   {
    "q": "What is a strength of MANUAL testing?",
    "options": [
     "It needs no human at all",
     "It is flexible and good at exploring and judging look-and-feel",
     "It never makes mistakes",
     "It runs in milliseconds"
    ],
    "answer": 1,
    "explain": "Humans excel at exploration and judgement that automation cannot do."
   },
   {
    "q": "A downside of automated testing is that it...",
    "options": [
     "Takes effort to write and maintain, and cannot judge look-and-feel",
     "Can only test one function ever",
     "Is always slower than manual",
     "Cannot be repeated"
    ],
    "answer": 0,
    "explain": "Automation costs effort to build and maintain and lacks human judgement."
   }
  ]
 },
 "software-testing-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A test case is a clear, written recipe for checking one specific thing. A good test case can be run by anyone and always gives the same verdict. It usually has: an ID, a description, preconditions, steps, test data, an EXPECTED result, and (after running) the actual result and a pass/fail status."
    },
    {
     "type": "text",
     "text": "The heart of every test case is the expected result. Without deciding in advance what SHOULD happen, you cannot say whether the software passed. 'Enter 2 + 3 and press equals' is not a test until you add 'expected result: the display shows 5.'"
    },
    {
     "type": "text",
     "text": "Good test cases cover more than the happy path (the normal, everything-goes-right case). You also test negative cases (wrong inputs) and edge cases (the tricky boundaries). For an age field that accepts 1 to 120, smart values to test are 0, 1, 120, and 121 — the boundaries are where bugs love to hide. This is called boundary value analysis."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "TC-07  Login with wrong password\nPreconditions: user 'alice' exists\nSteps: 1. Open login  2. Enter 'alice' + 'wrongpass'  3. Click Login\nTest data: alice / wrongpass\nExpected: error 'Invalid credentials'; user stays logged out"
    },
    {
     "type": "tip",
     "text": "Test one thing per test case. If a case checks five things and fails, you cannot tell which one broke. Small, focused cases make failures easy to read."
    },
    {
     "type": "text",
     "text": "Write test cases so they are independent — one should not depend on another having run first. Independent cases can run in any order, be split across people, and a single failure does not knock over the rest."
    }
   ],
   "recap": "A good test case is a clear, repeatable recipe with a defined expected result; it tests one thing, stays independent, and covers happy paths, negative cases, and boundary edges where bugs hide."
  },
  "quiz": [
   {
    "q": "What is the single most important part of a test case?",
    "options": [
     "The author's name",
     "The time it was written",
     "The expected result",
     "Its colour"
    ],
    "answer": 2,
    "explain": "Without a defined expected result you cannot decide pass or fail."
   },
   {
    "q": "For an age field valid from 1 to 120, which set best tests the boundaries?",
    "options": [
     "Any random number",
     "50, 60, 70, 80",
     "5 and 6 only",
     "0, 1, 120, 121"
    ],
    "answer": 3,
    "explain": "Boundary value analysis tests just inside and outside the limits, where bugs hide."
   },
   {
    "q": "Why should each test case check only one thing?",
    "options": [
     "Because tools only allow one",
     "To use less paper",
     "To make tests slower",
     "So that when it fails you know exactly what broke"
    ],
    "answer": 3,
    "explain": "A focused test makes a failure point to a single, clear cause."
   },
   {
    "q": "The normal, everything-goes-right scenario is called the...",
    "options": [
     "Crash path",
     "Happy path",
     "Edge case",
     "Negative case"
    ],
    "answer": 1,
    "explain": "The happy path is the expected, successful flow; edge and negative cases test the rest."
   }
  ]
 },
 "software-testing-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When a tester finds a bug, it does not just get fixed silently — it travels through a series of stages called the bug (or defect) life cycle. Tracking these stages in a tool like Jira keeps everyone honest about what is broken, who owns it, and whether it is really fixed."
    },
    {
     "type": "text",
     "text": "The typical journey: New (just reported) → Assigned (given to a developer) → Open / In Progress (being worked on) → Fixed (developer says it is done) → Retest → Verified (tester confirms the fix works) → Closed (finished). If the fix did not work, the tester sets it to Reopened and it goes back to the developer."
    },
    {
     "type": "tip",
     "text": "Think of it like a hospital: a patient is admitted (New), assigned a doctor (Assigned), treated (In Progress), declared cured (Fixed), then re-examined (Retest) before being discharged (Closed)."
    },
    {
     "type": "text",
     "text": "Not every reported bug is a real, fixable bug. A developer might mark it Rejected (not actually a defect), Duplicate (already reported), or Deferred / Won't Fix (real but not worth fixing now — maybe a tiny issue in a feature being removed). A good bug report avoids these by being clear."
    },
    {
     "type": "text",
     "text": "A useful bug report includes: a short title, steps to reproduce, the expected result, the actual result, the severity (how bad the impact is) and priority (how urgently to fix it). Severity and priority are different — a rare crash can be high severity but low priority, while a typo on the home page can be low severity but high priority because everyone sees it."
    },
    {
     "type": "text",
     "text": "The most important field is 'steps to reproduce.' If a developer cannot make the bug happen again, they cannot fix it — and the bug often ends up marked 'Cannot Reproduce' and closed."
    }
   ],
   "recap": "A bug moves through stages — New, Assigned, In Progress, Fixed, Retest, Verified, Closed — and may be Reopened, Rejected, Duplicate, or Deferred; clear steps to reproduce plus separate severity and priority make a report actionable."
  },
  "quiz": [
   {
    "q": "After a developer marks a bug 'Fixed', what does the tester do next?",
    "options": [
     "Delete the bug report",
     "Immediately close it without checking",
     "Retest to verify the fix actually works",
     "Assign it to a new developer"
    ],
    "answer": 2,
    "explain": "The tester retests and only verifies/closes it once the fix is confirmed."
   },
   {
    "q": "A rare crash that hardly ever happens but destroys data would be...",
    "options": [
     "Low severity, low priority",
     "Always a duplicate",
     "High severity, possibly lower priority",
     "Not a bug at all"
    ],
    "answer": 2,
    "explain": "Severity reflects impact (high) while priority reflects urgency, which can differ."
   },
   {
    "q": "What happens if a verified fix turns out not to work?",
    "options": [
     "Nothing changes",
     "It becomes a new feature",
     "The bug is permanently deleted",
     "The bug is set to Reopened"
    ],
    "answer": 3,
    "explain": "A failed fix is Reopened and sent back to the developer."
   },
   {
    "q": "Which field matters most so a developer can actually fix a bug?",
    "options": [
     "Clear steps to reproduce",
     "The tester's favourite browser",
     "The colour of the button",
     "The date the app was released"
    ],
    "answer": 0,
    "explain": "Without reproducible steps a developer cannot recreate or fix the bug."
   }
  ]
 },
 "software-testing-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Quality Assurance (QA) is bigger than testing. Testing FINDS defects in a product; QA is about preventing defects by improving the whole process — code reviews, clear requirements, standards, and continuous checking. A helpful phrase: QC (Quality Control) and testing ask 'did we build it right?'; QA and requirements review ask 'are we building the right thing, the right way?'"
    },
    {
     "type": "text",
     "text": "Two verbs sit at the core of QA. Verification asks 'are we building the product right?' (reviews, static checks, does it match the spec). Validation asks 'are we building the right product?' (does it actually solve the user's real problem). You can build something perfectly to spec yet still fail validation because the spec itself was wrong."
    },
    {
     "type": "text",
     "text": "Modern QA is woven into the delivery pipeline. In CI/CD (Continuous Integration / Continuous Delivery), every code push automatically triggers the test suite. If tests fail, the change is blocked from merging. This 'shift-left' idea moves testing earlier and makes quality everyone's job, not a final gate at the end."
    },
    {
     "type": "code",
     "lang": "yaml",
     "code": "# a CI step that runs tests on every push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install\n      - run: npm test   # merge is blocked if this fails"
    },
    {
     "type": "text",
     "text": "QA teams also track metrics to judge quality objectively: test coverage (how much code the tests exercise), defect density (bugs per size of code), and defect leakage (bugs that escaped to production). Beware of chasing 100% coverage blindly — coverage tells you what code RAN during tests, not whether your assertions actually checked the right things."
    },
    {
     "type": "tip",
     "text": "Golden rule: exhaustive testing is impossible. You can never test every possible input, so QA is about testing SMART — prioritising by risk, using techniques like equivalence partitioning and boundary analysis to get maximum confidence from minimum tests."
    },
    {
     "type": "text",
     "text": "Finally, remember the 'pesticide paradox': running the same tests over and over stops finding new bugs, just as pests grow immune to a repeated pesticide. Good QA keeps reviewing and refreshing its tests, and pairs automated regression suites with human exploratory testing to keep catching what scripts miss."
    }
   ],
   "recap": "QA prevents defects by improving the whole process, not just finding them: verification checks we build it right, validation checks we build the right thing, CI/CD shifts testing left, metrics judge quality, and smart risk-based testing beats the impossible dream of testing everything."
  },
  "quiz": [
   {
    "q": "What is the key difference between QA and testing?",
    "options": [
     "Testing is done by managers only",
     "QA only runs after release",
     "Testing finds defects in the product; QA improves the whole process to prevent defects",
     "They are identical"
    ],
    "answer": 2,
    "explain": "Testing detects defects while QA focuses on preventing them across the process."
   },
   {
    "q": "Validation answers which question?",
    "options": [
     "Is the code indented correctly?",
     "Are we building the product right?",
     "Are we building the right product for the user?",
     "Is the file size small?"
    ],
    "answer": 2,
    "explain": "Validation checks the software solves the user's real problem; verification checks it is built to spec."
   },
   {
    "q": "In CI/CD, what typically happens when the automated tests fail on a push?",
    "options": [
     "It deploys anyway",
     "The tests are deleted",
     "The developer is fired",
     "The change is blocked from merging"
    ],
    "answer": 3,
    "explain": "Failing tests block the merge so broken code does not advance."
   },
   {
    "q": "Why is chasing 100% test coverage not the whole story?",
    "options": [
     "Coverage only works in Python",
     "Coverage shows code ran, not that your assertions checked the right things",
     "High coverage always means zero bugs",
     "Coverage is impossible to measure"
    ],
    "answer": 1,
    "explain": "Coverage measures which code executed, not whether the tests truly verified correct behaviour."
   }
  ]
 },
 "software-testing-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Testing happens in layers, from the smallest piece of code up to the whole finished product. Each layer catches different kinds of bugs, so skipping one leaves a gap. The four classic levels are unit, integration, system, and acceptance testing."
    },
    {
     "type": "text",
     "text": "Unit testing checks the smallest testable piece — usually one function or one method — in isolation from the rest of the program. It is fast, cheap, and usually written by the developer who wrote the code."
    },
    {
     "type": "text",
     "text": "Integration testing checks what happens when units are combined. Two functions can each work perfectly alone yet fail together — for example, one returns a date as text and the other expects a date object. Integration testing exists to catch exactly this kind of interface mismatch."
    },
    {
     "type": "text",
     "text": "System testing checks the complete, integrated application against the full requirements — the whole product working end to end, not just its parts. Acceptance testing comes last: real users or the client check that the system actually solves their problem and is ready to go live. This final round is often called UAT (User Acceptance Testing)."
    },
    {
     "type": "tip",
     "text": "Remember the order with the phrase 'Unit joins Integration, then the whole System is Accepted' — U, I, S, A, moving from smallest piece to final sign-off."
    }
   ],
   "recap": "Software is tested in four widening layers — unit (one piece), integration (pieces combined), system (the whole app against requirements), and acceptance (real users signing off) — and each layer catches bugs the others miss."
  },
  "quiz": [
   {
    "q": "Which level of testing checks a single function in isolation?",
    "options": [
     "System testing",
     "Unit testing",
     "Acceptance testing",
     "Integration testing"
    ],
    "answer": 1,
    "explain": "Unit testing targets the smallest testable piece of code, on its own."
   },
   {
    "q": "Two functions each pass their own unit tests but crash when used together because of a mismatched data format. Which testing level is meant to catch this?",
    "options": [
     "Integration testing",
     "Unit testing",
     "Acceptance testing",
     "None of these can catch it"
    ],
    "answer": 0,
    "explain": "Integration testing specifically checks how combined units interact, including interface mismatches."
   },
   {
    "q": "UAT (User Acceptance Testing) is usually performed by...",
    "options": [
     "Nobody, it is automatic",
     "Real users or the client, near the end",
     "The original programmer only",
     "The compiler"
    ],
    "answer": 1,
    "explain": "Acceptance testing is the final check where users or the client confirm the system meets their real needs."
   },
   {
    "q": "System testing checks the software against...",
    "options": [
     "A single line of code",
     "Only the database schema",
     "The complete requirements of the whole application",
     "The developer's personal opinion"
    ],
    "answer": 2,
    "explain": "System testing evaluates the fully integrated application end to end against its overall requirements."
   }
  ]
 },
 "software-testing-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Black-box testing means testing the software from the outside, using only its inputs and expected outputs — the tester never looks at the source code. It is based purely on requirements and specifications, which makes it useful even for testers who cannot read code."
    },
    {
     "type": "text",
     "text": "Equivalence partitioning splits all possible inputs into groups (partitions) that should behave the same way. Instead of testing every possible age from 0 to 150, you group them: invalid (negative), valid (0-120), and invalid (over 120) — then test just one representative value from each group."
    },
    {
     "type": "text",
     "text": "Boundary value analysis focuses on the edges of those partitions, because bugs love to hide exactly at the boundary. If a field accepts ages 18 to 60, you test 17, 18, 60, and 61 — the values just outside and just inside each edge — rather than a random value from the middle."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def is_valid_age(age):\n    return 18 <= age <= 60\n\n# Boundary value test cases\nprint(is_valid_age(17))  # False - just below the boundary\nprint(is_valid_age(18))  # True  - lower boundary\nprint(is_valid_age(60))  # True  - upper boundary\nprint(is_valid_age(61))  # False - just above the boundary"
    },
    {
     "type": "tip",
     "text": "Exam favourite: for a range of A to B, the four key boundary values are A-1, A, B, and B+1. Memorise this pattern and you can answer almost any boundary value question."
    }
   ],
   "recap": "Black-box testing works purely from requirements: equivalence partitioning groups similar inputs so you test one per group, and boundary value analysis targets the edges of those groups, where bugs are most likely to hide."
  },
  "quiz": [
   {
    "q": "Black-box testing is based on...",
    "options": [
     "The developer's memory",
     "Random guessing",
     "The inputs and outputs described in the requirements",
     "The source code's internal logic"
    ],
    "answer": 2,
    "explain": "Black-box testing ignores internal code and checks behaviour against specified inputs and outputs."
   },
   {
    "q": "A field accepts values from 1 to 100. Using boundary value analysis, which set of test values makes the most sense?",
    "options": [
     "1, 2, 3, 4, 5",
     "0, 1, 100, 101",
     "50 only",
     "A random value like 37"
    ],
    "answer": 1,
    "explain": "Boundary value analysis tests just outside and just inside each edge of the valid range: 0 and 101 (invalid), 1 and 100 (valid)."
   },
   {
    "q": "What is the main purpose of equivalence partitioning?",
    "options": [
     "To test every single possible input value",
     "To group similar inputs so one test per group is enough",
     "To test only invalid inputs",
     "To remove the need for any testing"
    ],
    "answer": 1,
    "explain": "It reduces the number of test cases by assuming all values in a group behave the same way, so one representative is sufficient."
   },
   {
    "q": "Why do testers pay special attention to boundaries?",
    "options": [
     "Boundaries are easier to type",
     "Off-by-one mistakes and edge conditions often cause bugs exactly at boundaries",
     "Boundaries never contain bugs",
     "It has nothing to do with bug likelihood"
    ],
    "answer": 1,
    "explain": "Programming mistakes like using < instead of <= commonly show up right at the edge of a valid range."
   }
  ]
 },
 "software-testing-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "White-box testing is the opposite of black-box: the tester looks directly at the source code and designs tests based on its internal structure — the actual if statements, loops, and paths the code can take."
    },
    {
     "type": "text",
     "text": "Statement coverage is the weakest measure: it just checks that every line of code ran at least once during testing. It is easy to achieve but can miss a lot, because a line can run without ever being tested with the input that would break it."
    },
    {
     "type": "text",
     "text": "Branch (decision) coverage is stronger: it requires every branch of every if/else or loop condition to be taken at least once — both the true side and the false side. This catches missing else-handling that statement coverage would miss."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def classify(n):\n    if n > 0:\n        return \"positive\"\n    else:\n        return \"non-positive\"\n\n# 100% statement coverage needs just one call, e.g. classify(5)\n# 100% branch coverage needs BOTH:\nclassify(5)   # true branch\nclassify(-3)  # false branch"
    },
    {
     "type": "text",
     "text": "Path coverage is the strongest and most thorough: it tries to test every possible route through the code, including every combination of branches. Cyclomatic complexity is a number, calculated from the code's decision points, that tells you the minimum number of independent paths you need to test for full path coverage."
    },
    {
     "type": "tip",
     "text": "Strength order to remember for exams: Statement coverage < Branch coverage < Path coverage. Higher coverage catches more bugs but needs more test cases to achieve."
    }
   ],
   "recap": "White-box testing uses knowledge of the code's structure: statement coverage checks every line ran, branch coverage checks every true/false decision was taken, and path coverage — the strongest — checks every possible route through the code."
  },
  "quiz": [
   {
    "q": "White-box testing designs test cases based on...",
    "options": [
     "Guesswork",
     "The user manual only",
     "The internal structure of the source code",
     "Marketing requirements"
    ],
    "answer": 2,
    "explain": "White-box testing uses visibility into the code itself — its statements, branches, and paths."
   },
   {
    "q": "Which coverage level is the weakest?",
    "options": [
     "Statement coverage",
     "Branch coverage",
     "They are all equally strong",
     "Path coverage"
    ],
    "answer": 0,
    "explain": "Statement coverage only requires each line to execute once and can miss untested logic branches."
   },
   {
    "q": "To achieve full branch coverage on a single if/else statement, how many test cases are needed at minimum?",
    "options": [
     "Two — one for each branch",
     "As many as there are lines of code",
     "One",
     "Zero"
    ],
    "answer": 0,
    "explain": "Branch coverage requires both the true and false outcome of the condition to be exercised at least once."
   },
   {
    "q": "What does cyclomatic complexity tell a tester?",
    "options": [
     "The minimum number of independent paths to test for full path coverage",
     "The programming language used",
     "How long the code took to write",
     "The exact number of bugs in the code"
    ],
    "answer": 0,
    "explain": "It is calculated from the code's decision points and gives the minimum independent test paths needed."
   }
  ]
 },
 "software-testing-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Test-Driven Development (TDD) flips the usual order: instead of writing code then testing it, you write a failing test FIRST, describing what the code should do, then write just enough code to make it pass."
    },
    {
     "type": "text",
     "text": "TDD follows a short cycle called Red-Green-Refactor. Red: write a test for behaviour that does not exist yet, so it fails. Green: write the simplest code that makes the test pass. Refactor: clean up the code without changing its behaviour, while the test keeps proving nothing broke."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# RED: write the test first (it fails, add() doesn't exist yet)\ndef test_add():\n    assert add(2, 3) == 5\n\n# GREEN: write the minimum code to pass\ndef add(a, b):\n    return a + b\n\n# REFACTOR: the code is already simple, nothing to clean up here\ntest_add()  # passes silently if correct"
    },
    {
     "type": "text",
     "text": "Every language has a unit testing framework built around this idea: JUnit for Java, unittest and pytest for Python, and Jest for JavaScript. They all give you an assert function to check expected vs. actual results, a way to group tests, and setup/teardown hooks that run before and after each test to prepare and clean up test data."
    },
    {
     "type": "tip",
     "text": "A common mistake is writing all the tests after the code is finished and calling it TDD — that is just unit testing. True TDD means the test exists before the production code that satisfies it."
    }
   ],
   "recap": "TDD means writing a failing test first, then the minimum code to pass it, then refactoring — the Red-Green-Refactor cycle — and unit test frameworks like JUnit, pytest, and Jest give every language the assert and setup/teardown tools to do this."
  },
  "quiz": [
   {
    "q": "In the TDD cycle, what happens during the 'Red' step?",
    "options": [
     "You delete all existing tests",
     "You deploy to production",
     "You write the final, polished code",
     "You write a test that fails because the code doesn't exist yet"
    ],
    "answer": 3,
    "explain": "Red means writing a test for behaviour that doesn't exist yet, so it naturally fails at first."
   },
   {
    "q": "What is the purpose of the 'Refactor' step?",
    "options": [
     "To delete the test file",
     "To clean up the code's structure while behaviour stays the same, proven by the passing test",
     "To add new untested features",
     "To rewrite the requirements"
    ],
    "answer": 1,
    "explain": "Refactor improves code quality without changing what it does — the test suite confirms nothing broke."
   },
   {
    "q": "Which of these is a unit testing framework?",
    "options": [
     "pytest",
     "Microsoft Word",
     "Photoshop",
     "HTML"
    ],
    "answer": 0,
    "explain": "pytest is a widely used Python unit testing framework, alongside JUnit (Java) and Jest (JavaScript)."
   },
   {
    "q": "Writing all your tests only after the code is complete is best described as...",
    "options": [
     "True TDD",
     "Impossible to do",
     "Just testing after the fact, not TDD",
     "The same thing as Red-Green-Refactor"
    ],
    "answer": 2,
    "explain": "TDD specifically requires the test to exist before the production code; writing tests afterward is ordinary testing."
   }
  ]
 },
 "software-testing-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Manual testing means a human clicks through the app and checks results by eye. Automation testing replaces that human with a script that performs the same steps and checks the same results — much faster, and it can run thousands of times without getting tired or careless."
    },
    {
     "type": "text",
     "text": "Automation is best for tests you will run again and again, especially regression tests that check old features still work after a change. It is a poor fit for exploratory testing, where a human's curiosity and judgement are exactly the point — a script can only check what it was told to check."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Simplified stand-in for a browser automation tool (e.g. Selenium/Playwright)\nasync function runLoginTest() {\n  const page = {\n    goto: async (url) => {},\n    fill: async (selector, value) => {},\n    click: async (selector) => {},\n    textContent: async (selector) => \"Invalid credentials\"\n  };\n  function assert(condition) {\n    if (!condition) throw new Error(\"Assertion failed\");\n  }\n\n  await page.goto(\"https://example.com/login\");\n  await page.fill(\"#username\", \"tester1\");\n  await page.fill(\"#password\", \"wrongpass\");\n  await page.click(\"#loginBtn\");\n\n  const errorText = await page.textContent(\"#error\");\n  assert(errorText === \"Invalid credentials\");\n  console.log(\"Test passed: login correctly rejected invalid credentials\");\n}\n\nrunLoginTest();"
    },
    {
     "type": "text",
     "text": "Common automation tools include Selenium (drives real web browsers), Appium (for mobile apps), and Cypress or Playwright (modern, developer-friendly web testing). Some tools offer 'record and playback', where you click through the app once and it generates a script — quick to start with, but these scripts tend to break easily when the UI changes."
    },
    {
     "type": "tip",
     "text": "A classic interview question is 'when would you NOT automate a test?' Good answers: tests that run only once, tests needing human judgement (usability, look-and-feel), and tests on a UI that changes constantly, since the automation script would need constant rewriting."
    }
   ],
   "recap": "Automation testing runs scripts instead of humans, which pays off for repeated regression checks but is a poor fit for one-off or exploratory testing; tools like Selenium, Appium, and Cypress drive the app and assert the results automatically."
  },
  "quiz": [
   {
    "q": "Automation testing is the best fit for...",
    "options": [
     "Exploratory testing",
     "A test that will only ever run once",
     "Judging whether a design looks pleasing",
     "Repeated regression tests that check old features still work"
    ],
    "answer": 3,
    "explain": "Automation shines when the same test needs to run repeatedly and consistently, like regression checks."
   },
   {
    "q": "Which of these is a browser automation testing tool?",
    "options": [
     "Selenium",
     "Microsoft Excel",
     "Photoshop",
     "Notepad"
    ],
    "answer": 0,
    "explain": "Selenium drives real web browsers to perform automated UI tests."
   },
   {
    "q": "What is a downside of 'record and playback' generated scripts?",
    "options": [
     "They often break easily when the UI changes",
     "They can only test databases",
     "They require no tools at all",
     "They are impossible to create"
    ],
    "answer": 0,
    "explain": "Recorded scripts are tightly tied to the exact UI they were recorded on and break with UI changes."
   },
   {
    "q": "Why is exploratory testing usually left to humans rather than automation?",
    "options": [
     "Computers cannot click buttons",
     "Scripts are too expensive to write",
     "It relies on curiosity and judgement to find issues nobody scripted for",
     "It is illegal to automate"
    ],
    "answer": 2,
    "explain": "Exploratory testing depends on human intuition to try unexpected things a fixed script would never check."
   }
  ]
 },
 "software-testing-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Regression testing means re-running existing tests after a code change, to make sure the change did not accidentally break something that used to work. The name comes from 'regressing' — a feature going backwards to a broken state."
    },
    {
     "type": "text",
     "text": "As an app grows, its full regression suite can become huge, so teams organise their tests using the test pyramid. It has three layers: many fast unit tests at the base, a medium number of integration tests in the middle, and few slow end-to-end (UI) tests at the top."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// The test pyramid, in words:\n//\n//        /\\\n//       /E2E\\        <- few, slow, brittle, test the whole app via UI\n//      /------\\\n//     / Integr.\\     <- some, test modules working together\n//    /----------\\\n//   /   Unit     \\   <- many, fast, test one function at a time\n//  /--------------\\"
    },
    {
     "type": "text",
     "text": "The shape matters: unit tests are cheap, fast, and pinpoint exactly which function broke, so you want lots of them. End-to-end tests through the real UI are slow, expensive to maintain, and 'flaky' (they sometimes fail for reasons unrelated to a real bug, like a slow network), so you want only a handful, covering the most critical user journeys."
    },
    {
     "type": "tip",
     "text": "If a team has the shape flipped — mostly slow UI tests and few unit tests — it is nicknamed the 'ice cream cone' anti-pattern. It is a common exam and interview question: recognise it as a warning sign of a slow, flaky, hard-to-maintain test suite."
    }
   ],
   "recap": "Regression testing re-checks that old features still work after a change, and the test pyramid organises this efficiently: many fast unit tests, fewer integration tests, and only a few slow end-to-end tests at the top."
  },
  "quiz": [
   {
    "q": "What is the main goal of regression testing?",
    "options": [
     "To replace unit testing entirely",
     "To confirm a recent change did not break existing functionality",
     "To test brand-new features only",
     "To measure the size of the codebase"
    ],
    "answer": 1,
    "explain": "Regression testing re-runs prior tests to catch anything the new change accidentally broke."
   },
   {
    "q": "In the test pyramid, which layer should have the most tests?",
    "options": [
     "Unit tests",
     "End-to-end (UI) tests",
     "Integration tests",
     "Manual exploratory tests"
    ],
    "answer": 0,
    "explain": "Unit tests are fast and cheap, so the pyramid recommends having the largest number of them at the base."
   },
   {
    "q": "Why are end-to-end UI tests kept to a small number at the top of the pyramid?",
    "options": [
     "They are slow, expensive to maintain, and can be flaky",
     "They cannot find any real bugs",
     "They are illegal to write",
     "The UI never changes"
    ],
    "answer": 0,
    "explain": "UI tests run through the whole system and are slower and more fragile than unit tests, so fewer are used."
   },
   {
    "q": "A test suite with mostly slow UI tests and almost no unit tests is nicknamed...",
    "options": [
     "The ice cream cone anti-pattern",
     "The waterfall model",
     "Continuous integration",
     "The test pyramid"
    ],
    "answer": 0,
    "explain": "This inverted, top-heavy shape is a well-known warning sign called the 'ice cream cone'."
   }
  ]
 },
 "software-testing-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far most testing has checked WHAT the software does — does it give the right answer. Non-functional testing checks HOW WELL it does it: how fast, how many users it can handle, and how it behaves when things get extreme."
    },
    {
     "type": "text",
     "text": "Performance testing measures speed and responsiveness under normal conditions — for example, how long a page takes to load. Load testing pushes the system with the number of users or requests it is expected to handle in real use, to check it copes without slowing down or crashing."
    },
    {
     "type": "text",
     "text": "Stress testing goes further, pushing the system well beyond its expected limits deliberately, to find its breaking point and see how gracefully (or badly) it fails. Spike testing is a related idea: a sudden, sharp burst of extra load, like a flash sale suddenly bringing ten times the normal traffic in seconds."
    },
    {
     "type": "text",
     "text": "Tools like Apache JMeter and Gatling simulate thousands of virtual users hitting a system at once, measuring response times and error rates, without needing that many real people or real devices."
    },
    {
     "type": "tip",
     "text": "Exam memory aid: Performance asks 'how fast normally?', Load asks 'can it handle expected traffic?', Stress asks 'where does it break?', Spike asks 'what if traffic suddenly jumps?'"
    }
   ],
   "recap": "Non-functional testing checks speed and robustness rather than correct answers: performance testing measures normal speed, load testing checks expected traffic, stress testing finds the breaking point, and spike testing checks sudden traffic bursts."
  },
  "quiz": [
   {
    "q": "Which type of testing is designed to find a system's breaking point by pushing it well beyond expected limits?",
    "options": [
     "Equivalence partitioning",
     "Unit testing",
     "Stress testing",
     "Acceptance testing"
    ],
    "answer": 2,
    "explain": "Stress testing deliberately overloads the system to see how and where it fails."
   },
   {
    "q": "Load testing is best described as checking...",
    "options": [
     "Whether variable names follow a style guide",
     "Whether the code compiles",
     "The colour scheme of the UI",
     "How the system performs under the expected real-world number of users"
    ],
    "answer": 3,
    "explain": "Load testing verifies the system handles its anticipated real traffic without problems."
   },
   {
    "q": "A sudden burst of ten times normal traffic during a flash sale is best tested with...",
    "options": [
     "Boundary value analysis",
     "Spike testing",
     "Static code review",
     "Unit testing"
    ],
    "answer": 1,
    "explain": "Spike testing specifically checks how a system copes with a sharp, sudden jump in load."
   },
   {
    "q": "Tools like JMeter and Gatling are mainly used for...",
    "options": [
     "Managing source code branches",
     "Simulating many virtual users to measure performance under load",
     "Writing requirements documents",
     "Designing the app's logo"
    ],
    "answer": 1,
    "explain": "These tools simulate large volumes of virtual traffic to measure response time and error rate."
   }
  ]
 },
 "software-testing-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Security testing looks for weaknesses an attacker could exploit — places where the software lets in data or users it should not trust. It asks 'can someone break in, steal data, or misuse this system?' rather than 'does this button work?'"
    },
    {
     "type": "text",
     "text": "Two very common vulnerabilities show up on almost every syllabus and interview. SQL injection happens when user input is inserted directly into a database query, letting an attacker sneak in their own SQL commands. Cross-Site Scripting (XSS) happens when user input is shown back on a page without being cleaned, letting an attacker inject a malicious script that runs in other users' browsers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# VULNERABLE: user input goes straight into the query string\nquery = \"SELECT * FROM users WHERE name = '\" + user_input + \"'\"\n# An attacker could type: ' OR '1'='1  and read every row\n\n# SAFE: parameterized query keeps the input as pure data, never as code\nquery = \"SELECT * FROM users WHERE name = ?\"\ncursor.execute(query, (user_input,))"
    },
    {
     "type": "text",
     "text": "Security testing also covers authentication testing (can someone log in as another user, or guess weak passwords?) and authorization testing (can a normal user reach an admin-only page just by typing its URL?). Penetration testing takes this further: a tester deliberately acts like a real attacker, trying every trick to break in, and reports what they find."
    },
    {
     "type": "tip",
     "text": "Remember the fix pattern: never build a query, command, or HTML page by directly gluing raw user input into it. Always use parameterized queries and proper output-encoding — the same fix idea defeats both SQL injection and XSS."
    }
   ],
   "recap": "Security testing hunts for exploitable weaknesses like SQL injection and XSS, checks who can log in and what they can access (authentication and authorization), and penetration testing simulates a real attacker to find gaps before one does."
  },
  "quiz": [
   {
    "q": "SQL injection happens when...",
    "options": [
     "A page takes too long to load",
     "A test case has too many boundary values",
     "A database runs too slowly",
     "Raw user input is inserted directly into a database query, letting an attacker add their own commands"
    ],
    "answer": 3,
    "explain": "SQL injection exploits queries built by directly concatenating untrusted user input."
   },
   {
    "q": "What is the standard fix for SQL injection shown in the lesson?",
    "options": [
     "Using parameterized queries so input is treated as data, not code",
     "Deleting the database",
     "Disabling the login page",
     "Making the query string longer"
    ],
    "answer": 0,
    "explain": "Parameterized queries keep user input as pure data, preventing it from being executed as SQL commands."
   },
   {
    "q": "A normal logged-in user can view an admin-only page just by typing its URL directly. This is a failure of...",
    "options": [
     "Authorization testing",
     "Performance testing",
     "Unit testing",
     "Boundary value analysis"
    ],
    "answer": 0,
    "explain": "Authorization testing checks whether users can only access what their role permits."
   },
   {
    "q": "What does penetration testing involve?",
    "options": [
     "Measuring page load time",
     "Checking spelling on the website",
     "A tester deliberately trying to break in like a real attacker would",
     "Comparing two UI colour schemes"
    ],
    "answer": 2,
    "explain": "Penetration testing simulates real attack techniques to uncover exploitable weaknesses."
   }
  ]
 },
 "software-testing-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A program can be completely bug-free and still be a bad product if real people find it confusing to use. Usability testing checks exactly this: real users are given tasks to complete (like 'buy a pair of shoes' on a shopping site) while a tester quietly observes where they hesitate, get lost, or give up."
    },
    {
     "type": "text",
     "text": "Usability problems are not 'bugs' in the traditional sense — the code works exactly as written — but they are still real defects in the product, because the software fails at its actual purpose: being usable by humans."
    },
    {
     "type": "text",
     "text": "Accessibility testing checks that the software can be used by people with disabilities — for example, someone who is blind and relies on a screen reader, or someone who cannot use a mouse and navigates only with a keyboard. The internationally recognised standard is WCAG (Web Content Accessibility Guidelines)."
    },
    {
     "type": "text",
     "text": "Common accessibility checks include: does every image have descriptive alt text for screen readers, can every feature be reached and used with only the keyboard (Tab, Enter, arrow keys), and is the text colour contrast high enough for people with low vision to read comfortably."
    },
    {
     "type": "tip",
     "text": "Interview tip: usability asks 'is it easy to use?' while accessibility asks 'can everyone, including people with disabilities, use it at all?' They overlap but are not the same thing — good accessibility often improves usability for everyone."
    }
   ],
   "recap": "Usability testing watches real users attempt real tasks to find confusing spots in a product; accessibility testing checks the software can be used by people with disabilities, following standards like WCAG, through alt text, keyboard navigation, and sufficient colour contrast."
  },
  "quiz": [
   {
    "q": "Usability testing mainly finds problems by...",
    "options": [
     "Checking database table structure",
     "Reading the source code line by line",
     "Measuring server response time",
     "Observing real users attempting real tasks"
    ],
    "answer": 3,
    "explain": "Usability testing watches actual users perform tasks to see where they struggle or get confused."
   },
   {
    "q": "Which of the following is an accessibility check?",
    "options": [
     "Measuring the server's response time under load",
     "Testing the maximum number of database rows",
     "Checking the cyclomatic complexity of a function",
     "Testing that every feature is reachable using only the keyboard"
    ],
    "answer": 3,
    "explain": "Keyboard-only navigation is a core accessibility check for users who cannot use a mouse."
   },
   {
    "q": "What is WCAG?",
    "options": [
     "A widely recognised set of accessibility guidelines",
     "A type of database key",
     "A programming language",
     "A test automation tool"
    ],
    "answer": 0,
    "explain": "WCAG (Web Content Accessibility Guidelines) is the standard reference for web accessibility."
   },
   {
    "q": "A confusing checkout process that frustrates users, even though the code works correctly, is a problem found by...",
    "options": [
     "Statement coverage analysis",
     "SQL injection testing",
     "Unit testing",
     "Usability testing"
    ],
    "answer": 3,
    "explain": "Usability testing catches real-world confusion and friction even when the underlying code has no bugs."
   }
  ]
 },
 "software-testing-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before testing begins on a large project, the team writes a test plan — a document describing the scope of testing (what will and will not be tested), the approach and techniques to be used, the resources and schedule, and the entry and exit criteria."
    },
    {
     "type": "text",
     "text": "Entry criteria are the conditions that must be true before testing can start — for example, the build must be installed and stable enough to even open. Exit criteria decide when testing can stop — for example, '95% of test cases passed and no open critical bugs remain.' Without agreed exit criteria, testing could go on forever."
    },
    {
     "type": "text",
     "text": "A Requirement Traceability Matrix (RTM) is a table that links every requirement to the test case(s) that check it. Each row is a requirement; each column shows which test cases cover it. This makes it easy to prove nothing was missed, and to see instantly which tests are affected if a requirement changes."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// A tiny example RTM as a table\n// Requirement ID | Requirement            | Test Case IDs\n// REQ-01         | User can log in         | TC-01, TC-02\n// REQ-02         | Password must be hidden | TC-03\n// REQ-03         | Session expires in 30m  | TC-04, TC-05"
    },
    {
     "type": "tip",
     "text": "Exam favourite: if a requirement has NO test case linked to it in the RTM, that is a red flag — it means that requirement is currently untested, no matter how well everything else is covered."
    }
   ],
   "recap": "A test plan sets the scope, approach, schedule, and entry/exit criteria for testing, while a Requirement Traceability Matrix links every requirement to its test cases so nothing goes untested."
  },
  "quiz": [
   {
    "q": "Exit criteria in a test plan describe...",
    "options": [
     "When testing is allowed to begin",
     "The programming language used",
     "The colour scheme of the test report",
     "The conditions under which testing is considered complete and can stop"
    ],
    "answer": 3,
    "explain": "Exit criteria define when testing can be considered finished, such as a pass-rate threshold with no critical bugs open."
   },
   {
    "q": "What does a Requirement Traceability Matrix (RTM) link together?",
    "options": [
     "Colours and fonts",
     "Requirements and the test cases that verify them",
     "Developers and their salaries",
     "Servers and IP addresses"
    ],
    "answer": 1,
    "explain": "An RTM maps each requirement to the test case(s) that check it, proving coverage."
   },
   {
    "q": "If a requirement in the RTM has zero linked test cases, what does that indicate?",
    "options": [
     "Nothing meaningful",
     "The requirement is perfectly tested",
     "The requirement is currently untested — a coverage gap",
     "The requirement was removed from the software"
    ],
    "answer": 2,
    "explain": "No linked test case means there is no verification for that requirement, a clear testing gap."
   },
   {
    "q": "Entry criteria for testing might typically include...",
    "options": [
     "The software already being released to customers",
     "The build being installed and stable enough to open",
     "The test plan being deleted",
     "All bugs being fixed already"
    ],
    "answer": 1,
    "explain": "Entry criteria are the minimum conditions needed before testing can sensibly begin, like a working, installable build."
   }
  ]
 },
 "software-testing-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "On a real project, testers do not just run tests — they manage them. Test management tools (like Jira, TestRail, or Zephyr) organise test cases, track which ones passed or failed in each run, and log defects with all their details in one searchable place."
    },
    {
     "type": "text",
     "text": "Metrics turn testing progress into numbers a manager can act on. Test execution percentage shows how many of the planned test cases have actually been run so far. Pass/fail rate shows how many of those runs succeeded. These together answer 'are we on track, and is the software actually working?'"
    },
    {
     "type": "text",
     "text": "Defect density measures bugs found per unit of code size (for example, bugs per 1,000 lines), letting teams compare the quality of different modules fairly, regardless of their size. A module with unusually high defect density is a signal to review it more carefully or even redesign it."
    },
    {
     "type": "text",
     "text": "Defect leakage measures bugs that escaped testing and were found later, in production, by real users. It is one of the most important metrics of all, because it measures how effective the testing process actually was at its real job — catching bugs before customers do."
    },
    {
     "type": "tip",
     "text": "Interview tip: if asked 'how do you know if testing was successful?', don't just say 'we found bugs' — mention defect leakage. Low leakage means most bugs were caught before release, which is the real measure of a strong test process."
    }
   ],
   "recap": "Test management tools track test cases and defects, while metrics like execution percentage, pass/fail rate, defect density, and especially defect leakage turn testing progress into numbers that show whether the process is actually working."
  },
  "quiz": [
   {
    "q": "Defect leakage measures...",
    "options": [
     "The speed of the CPU",
     "Bugs found during unit testing only",
     "The number of test cases written",
     "Bugs that escaped testing and were found later in production"
    ],
    "answer": 3,
    "explain": "Defect leakage tracks bugs missed during testing that users encounter after release."
   },
   {
    "q": "Why is defect density useful for comparing two modules of very different sizes?",
    "options": [
     "It only applies to user interfaces",
     "It ignores code size entirely and looks only at raw bug counts",
     "It measures how fast the module runs",
     "It normalises bug counts against code size (e.g. bugs per 1,000 lines), making the comparison fair"
    ],
    "answer": 3,
    "explain": "Defect density expresses bugs relative to code size so small and large modules can be compared fairly."
   },
   {
    "q": "A low defect leakage rate generally indicates...",
    "options": [
     "Testing was ineffective",
     "The team skipped testing entirely",
     "Most bugs were caught before release, a sign of a strong test process",
     "The software has no code at all"
    ],
    "answer": 2,
    "explain": "Low leakage means few bugs reached production, showing the testing process worked well."
   },
   {
    "q": "What do tools like Jira or TestRail primarily help testers do?",
    "options": [
     "Design company logos",
     "Write compiler code",
     "Compile source code faster",
     "Organise test cases, track pass/fail results, and log defects"
    ],
    "answer": 3,
    "explain": "Test management tools centralise test case tracking and defect logging for the whole team."
   }
  ]
 },
 "software-testing-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "In older, waterfall-style projects, testing happened as one big phase right at the end, after all the coding was done. Agile testing works differently: testing happens continuously, throughout every short sprint, alongside development rather than after it."
    },
    {
     "type": "text",
     "text": "In an agile team, testers are embedded members of the scrum team, not a separate department at the end of the line. They write test cases as soon as a user story is defined, test each small feature as it is built, and give feedback within days rather than months."
    },
    {
     "type": "text",
     "text": "Continuous testing takes this idea into the delivery pipeline itself: every time a developer pushes code, an automated pipeline runs the relevant tests immediately. This is part of the 'shift-left' philosophy from earlier — moving quality checks as early as possible, since bugs caught in minutes are far cheaper to fix than bugs caught weeks later."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A simple pytest suite that would run automatically\n# every time code is pushed, as part of continuous testing\ndef add(a, b):\n    return a + b\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-1, -1) == -2\n\n# Run with: pytest  -- the pipeline blocks the merge if any test fails"
    },
    {
     "type": "tip",
     "text": "Common exam contrast: Waterfall testing = one big phase at the end. Agile/continuous testing = small, constant checks woven through every sprint and every commit."
    }
   ],
   "recap": "Agile testing embeds testers directly in the development team so testing happens continuously through every sprint, and continuous testing automates this further by running tests on every code push, catching bugs early and cheaply."
  },
  "quiz": [
   {
    "q": "How does agile testing differ from traditional waterfall testing?",
    "options": [
     "It removes the need for testers entirely",
     "It happens continuously through each sprint rather than as one big phase at the end",
     "It only tests the database",
     "It happens exactly once, after release"
    ],
    "answer": 1,
    "explain": "Agile testing weaves testing throughout development, unlike waterfall's single end-of-project testing phase."
   },
   {
    "q": "In continuous testing, what usually triggers the test suite to run?",
    "options": [
     "Only a manager's direct request",
     "Every code push to the pipeline",
     "A yearly schedule",
     "Nothing — tests never run automatically"
    ],
    "answer": 1,
    "explain": "Continuous testing runs automated tests on every push, giving immediate feedback."
   },
   {
    "q": "Why is catching a bug early in development generally cheaper than catching it after release?",
    "options": [
     "Late bugs are always small and simple",
     "Fixing an early bug avoids the extra cost of rework, deployment, and user impact that a late-found bug causes",
     "It is not cheaper, cost is the same at any stage",
     "Early bugs are always easier to understand for no real reason"
    ],
    "answer": 1,
    "explain": "Bugs found later have often spread further into the system and into production, making them more costly to fix."
   },
   {
    "q": "In an agile scrum team, where do testers typically sit?",
    "options": [
     "Embedded within the team, testing continuously alongside developers",
     "Outside the team, testing only after the whole project ends",
     "In a separate company",
     "They do not exist in agile teams"
    ],
    "answer": 0,
    "explain": "Agile testers work as part of the same team throughout development, not as a final separate stage."
   }
  ]
 },
 "software-testing-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Modern applications are often split into a front end (what the user sees) and a back end (an API that does the real work). API testing checks the back end directly, by sending requests to it, without going through any screen or button at all."
    },
    {
     "type": "text",
     "text": "This matters because API testing is faster and more stable than testing through the UI — there is no page rendering or button clicking involved, just a request sent and a response checked. It can also test the back-end logic even before the front end is built."
    },
    {
     "type": "text",
     "text": "A typical API test checks three things about the response: the status code (200 for success, 404 for not found, 500 for a server error, and so on), the response body (does the returned data match what was expected), and sometimes the headers (like content type)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import requests\n\nresponse = requests.get(\"https://api.example.com/users/42\")\n\nassert response.status_code == 200\ndata = response.json()\nassert data[\"id\"] == 42\nassert data[\"name\"] == \"Aditi Sharma\""
    },
    {
     "type": "tip",
     "text": "Postman is the most common tool students meet first for API testing — it lets you build and send requests and check responses without writing any code, before moving to code-based tools like the Python requests library or REST-assured for Java."
    }
   ],
   "recap": "API testing sends requests directly to the back end and checks the status code, response body, and headers, skipping the user interface entirely — making it faster, more stable, and testable even before the UI exists."
  },
  "quiz": [
   {
    "q": "What is a key advantage of API testing over UI testing?",
    "options": [
     "It is faster and more stable since there is no page rendering or clicking involved",
     "It requires no internet connection ever",
     "It replaces the need for any other type of testing",
     "It can only test databases"
    ],
    "answer": 0,
    "explain": "API tests skip the UI layer, making them quicker and less fragile than tests that click through screens."
   },
   {
    "q": "A status code of 200 in an API response typically means...",
    "options": [
     "The request timed out",
     "The request was not found",
     "The request succeeded",
     "A server error occurred"
    ],
    "answer": 2,
    "explain": "200 is the standard HTTP status code for a successful response."
   },
   {
    "q": "Which tool is commonly used first by students to send and check API requests without writing code?",
    "options": [
     "A CSS stylesheet",
     "A spreadsheet",
     "Postman",
     "A text editor"
    ],
    "answer": 2,
    "explain": "Postman provides a graphical interface to build, send, and verify API requests without scripting."
   },
   {
    "q": "Besides the status code, what else does a good API test typically check?",
    "options": [
     "The response body content and sometimes the headers",
     "The user's screen resolution",
     "The colour of the browser window",
     "The developer's typing speed"
    ],
    "answer": 0,
    "explain": "API tests verify that the returned data (body) and metadata (headers) match what is expected."
   }
  ]
 },
 "software-testing-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have now walked the whole path of software testing: why we test, the levels (unit to acceptance), black-box and white-box techniques, automation, non-functional and security testing, test management, and how testing fits into agile and API-driven development. Interviewers love this subject because it mixes precise definitions with real judgement calls."
    },
    {
     "type": "text",
     "text": "A few pairs of terms get asked again and again, and mixing them up is the single most common mistake: verification vs. validation (building it right vs. building the right thing), severity vs. priority (impact vs. urgency), and QA vs. testing (preventing defects vs. finding them). Know these cold."
    },
    {
     "type": "text",
     "text": "Two more terms often surprise beginners. Exploratory testing means testing without a fixed script — the tester actively explores the app, learning and designing new tests as they go, guided by curiosity and experience. Monkey testing is the opposite extreme: throwing random, even nonsensical inputs at the app just to see if anything crashes, with no real plan behind it."
    },
    {
     "type": "text",
     "text": "In a real interview, the strongest answer to almost any 'how would you test X' question follows the same shape: start from requirements, pick black-box techniques (partitioning, boundaries) for the obvious cases, add white-box coverage if you can see the code, prioritise by risk since exhaustive testing is impossible, and mention which parts you would automate for regression versus test manually or exploratorily."
    },
    {
     "type": "tip",
     "text": "The single sentence that ties this whole subject together, worth remembering for any exam or interview: testing can only show the presence of bugs, never their absence — so good testing is about managing risk intelligently, not chasing a mythical 'zero bugs' guarantee."
    }
   ],
   "recap": "The full testing journey runs from unit tests to acceptance, through black-box and white-box design, automation, non-functional and security checks, agile and API testing, and it all comes back to one idea: since exhaustive testing is impossible, good testers manage risk, know their terms precisely, and choose the right technique for the job."
  },
  "quiz": [
   {
    "q": "What is the key difference between exploratory testing and monkey testing?",
    "options": [
     "Exploratory testing is a skilled, curiosity-driven investigation; monkey testing is unplanned, random input with no real strategy",
     "Exploratory testing requires no human tester at all",
     "Monkey testing is always more thorough",
     "They are the same thing"
    ],
    "answer": 0,
    "explain": "Exploratory testing uses tester skill and judgement to actively investigate the app, while monkey testing just throws random input with no plan."
   },
   {
    "q": "Which pair of terms is most often confused, according to this lesson?",
    "options": [
     "HTML and CSS",
     "Verification and validation",
     "Front-end and back-end",
     "RAM and ROM"
    ],
    "answer": 1,
    "explain": "Verification (building it right) and validation (building the right thing) are frequently mixed up but mean different things."
   },
   {
    "q": "Why is 'exhaustive testing is impossible' such an important idea in this subject?",
    "options": [
     "It explains why testers must prioritise by risk instead of trying to test every possible input",
     "It means testing should never be attempted",
     "It means only automated tests matter",
     "It applies only to very small programs"
    ],
    "answer": 0,
    "explain": "Since you cannot test every possible input, smart, risk-based prioritisation is the practical alternative."
   },
   {
    "q": "What does the statement 'testing can only show the presence of bugs, never their absence' mean?",
    "options": [
     "Testing is pointless",
     "Passing all tests proves the software is 100% bug-free",
     "Only failing tests matter",
     "Passing all tests increases confidence but never guarantees there are zero remaining bugs"
    ],
    "answer": 3,
    "explain": "Tests can reveal bugs when they fail, but passing tests only raises confidence — it cannot prove no bugs exist at all."
   }
  ]
 }
}
