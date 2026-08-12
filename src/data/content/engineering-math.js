// Lesson text and quiz questions for "Engineering Mathematics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "engineering-math-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You might wonder why a programmer needs math when the computer does the calculating. The answer: math is the language you use to TELL the computer what to calculate. Behind every game, search engine, and AI model is a stack of math quietly doing the heavy lifting."
    },
    {
     "type": "text",
     "text": "Think of math as the blueprint and code as the building. A blueprint doesn't lay a single brick, but without it the builders have no idea what to make. Similarly, the math describes the idea (rotate this image, rank these pages, predict this price) and your code turns that idea into instructions the machine follows."
    },
    {
     "type": "text",
     "text": "Different areas of CS lean on different math. Graphics and machine learning love linear algebra (vectors and matrices). Physics engines and optimization use calculus (derivatives and integrals). Cryptography uses number theory, and algorithms use discrete math and logic. You don't need all of it at once — you pick the tool for the job."
    },
    {
     "type": "tip",
     "text": "You don't have to be a 'math genius' to code well. You just need enough understanding to recognize which tool fits a problem — like knowing when to reach for a screwdriver instead of a hammer."
    },
    {
     "type": "text",
     "text": "In this track we'll build from the ground up: vectors and matrices, the operations on them, then derivatives and integrals, and finally how all of it powers real computing tasks. Early levels stay simple; later ones go deeper."
    }
   ],
   "recap": "Math is the language you use to describe problems so code can solve them — it's the blueprint, and your code is the builder."
  },
  "quiz": [
   {
    "q": "In the blueprint analogy, what does the MATH represent?",
    "options": [
     "The finished building",
     "The idea/plan of what to build",
     "The bricks",
     "The construction workers"
    ],
    "answer": 1,
    "explain": "Math describes the plan or idea, while code (the workers) actually builds it."
   },
   {
    "q": "Which area of math is most associated with graphics and machine learning?",
    "options": [
     "Geometry proofs",
     "Linear algebra",
     "Roman numerals",
     "Handwriting"
    ],
    "answer": 1,
    "explain": "Graphics and ML rely heavily on vectors and matrices, which are linear algebra."
   },
   {
    "q": "Which statement best matches the lesson?",
    "options": [
     "You pick the math tool that fits the problem",
     "You must master all math before coding",
     "Math is useless once you can code",
     "Computers make math irrelevant"
    ],
    "answer": 0,
    "explain": "The lesson stresses choosing the right math tool for each specific job."
   }
  ]
 },
 "engineering-math-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A vector is just an ordered list of numbers. That's it. [3, 4] is a 2D vector — you can picture it as an arrow pointing from the origin to the point (3, 4), or simply as a bundle of related values like a player's [x, y] position on screen."
    },
    {
     "type": "text",
     "text": "Vectors are everywhere in code. An RGB color is a 3-number vector [red, green, blue]. A user's movie ratings are a vector. In machine learning, a piece of text or an image gets turned into a long vector of numbers so the computer can compare and reason about it."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A vector is an ordered list of numbers\nposition = [3, 4]        # 2D point / arrow\ncolor = [255, 128, 0]    # an orange RGB color\n\n# Vector length (magnitude) via Pythagoras\nimport math\nlength = math.sqrt(position[0]**2 + position[1]**2)\nprint(length)  # 5.0"
    },
    {
     "type": "text",
     "text": "A matrix is a grid of numbers — rows and columns, like a spreadsheet. You can think of it as a stack of vectors. A 2x3 matrix has 2 rows and 3 columns. Matrices store tables of data, and they also represent TRANSFORMATIONS: rules that move, rotate, or scale vectors."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A matrix: rows and columns (a grid)\nmatrix = [\n    [1, 2, 3],   # row 0\n    [4, 5, 6]    # row 1\n]\n# This is a 2x3 matrix: 2 rows, 3 columns\nprint(matrix[1][2])  # 6  (row 1, column 2)"
    },
    {
     "type": "tip",
     "text": "Remember the order: matrix dimensions are always ROWS x COLUMNS. A 2x3 is short and wide, not tall and narrow."
    }
   ],
   "recap": "A vector is an ordered list of numbers (like [x, y] or RGB); a matrix is a grid of numbers with rows and columns."
  },
  "quiz": [
   {
    "q": "What is a vector?",
    "options": [
     "A single number",
     "An ordered list of numbers",
     "A type of loop",
     "A grid of numbers"
    ],
    "answer": 1,
    "explain": "A vector is an ordered list of numbers, such as [3, 4] or an RGB color."
   },
   {
    "q": "A matrix with 3 rows and 2 columns is described as:",
    "options": [
     "5x5",
     "3x2",
     "2x3",
     "6x1"
    ],
    "answer": 1,
    "explain": "Dimensions are written rows x columns, so 3 rows and 2 columns is 3x2."
   },
   {
    "q": "Which of these is naturally a vector?",
    "options": [
     "An RGB color [255, 128, 0]",
     "A function name",
     "The letter 'A'",
     "A single boolean"
    ],
    "answer": 0,
    "explain": "An RGB color is an ordered list of three numbers, which is a 3D vector."
   },
   {
    "q": "In the matrix [[1,2,3],[4,5,6]], what is at row 1, column 2 (0-based)?",
    "options": [
     "2",
     "5",
     "6",
     "3"
    ],
    "answer": 2,
    "explain": "Row 1 is [4,5,6], and column 2 of that row is 6."
   }
  ]
 },
 "engineering-math-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Now that we have vectors and matrices, let's do things with them. The simplest operation is addition: add two matrices of the SAME size by adding matching cells. Same for scalar multiplication — multiply every cell by one number to scale the whole thing."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "A = [[1, 2], [3, 4]]\nB = [[5, 6], [7, 8]]\n\n# Element-wise addition (same shape required)\nC = [[A[i][j] + B[i][j] for j in range(2)] for i in range(2)]\nprint(C)  # [[6, 8], [10, 12]]"
    },
    {
     "type": "text",
     "text": "The star of the show is matrix MULTIPLICATION, and it is NOT element-wise. To multiply, you take each row of the first matrix and 'dot' it with each column of the second: multiply pairs and add them up. This one operation is how a transformation gets applied to data — it's the core computation inside neural networks and 3D graphics."
    },
    {
     "type": "text",
     "text": "The key rule: to multiply an (m x n) matrix by another, the second must be (n x p) — the inner numbers must match. The result is (m x p). If A is 2x3 and B is 3x4, then A x B works and gives a 2x4. If the inner dimensions don't match, multiplication is undefined."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Row-by-column multiplication (dot products)\nA = [[1, 2, 3]]          # 1x3\nB = [[4], [5], [6]]      # 3x1\n# Inner dims match (3 == 3) -> result is 1x1\n# 1*4 + 2*5 + 3*6 = 32\nresult = sum(A[0][k] * B[k][0] for k in range(3))\nprint(result)  # 32"
    },
    {
     "type": "tip",
     "text": "Matrix multiplication is NOT commutative: A x B usually does NOT equal B x A. Order matters, unlike multiplying plain numbers."
    }
   ],
   "recap": "Add matrices cell-by-cell; multiply them row-by-column (a dot product), where inner dimensions must match and order matters."
  },
  "quiz": [
   {
    "q": "To ADD two matrices, they must have:",
    "options": [
     "The exact same shape (rows and columns)",
     "The same number of rows only",
     "Different shapes",
     "Prime dimensions"
    ],
    "answer": 0,
    "explain": "Matrix addition is element-wise, so both matrices need identical dimensions."
   },
   {
    "q": "You can multiply a 2x3 matrix by a matrix of shape:",
    "options": [
     "2x2",
     "3x4",
     "3x2 only",
     "4x2"
    ],
    "answer": 1,
    "explain": "The inner dimensions must match: 2x3 times 3x4 works and gives a 2x4 result."
   },
   {
    "q": "Matrix multiplication A x B compared to B x A is generally:",
    "options": [
     "Not equal (order matters)",
     "Always zero",
     "Always equal",
     "Undefined for all matrices"
    ],
    "answer": 0,
    "explain": "Matrix multiplication is not commutative, so A x B usually differs from B x A."
   },
   {
    "q": "Multiplying [[1,2,3]] by [[4],[5],[6]] gives:",
    "options": [
     "[[4,10,18]]",
     "[15]",
     "[32]",
     "[6,8,10]"
    ],
    "answer": 2,
    "explain": "It's a dot product: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32."
   }
  ]
 },
 "engineering-math-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A derivative measures how fast something is changing at an instant. If a function tells you a car's position over time, its derivative tells you the car's speed — the rate of change of position. Speed IS a derivative you already understand intuitively."
    },
    {
     "type": "text",
     "text": "Picture the graph of a function as a curvy road. The derivative at any point is the STEEPNESS (slope) of the road right there. Flat ground = slope 0. Going uphill = positive slope. Downhill = negative slope. The steeper the climb, the bigger the derivative."
    },
    {
     "type": "text",
     "text": "The most useful rule for beginners is the power rule: for f(x) = x raised to n, the derivative is n times x raised to (n-1). So the derivative of x^2 is 2x, and the derivative of x^3 is 3x^2. A constant (like 7) doesn't change, so its derivative is 0."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# f(x) = x^2, its derivative is f'(x) = 2x\ndef f(x):\n    return x**2\n\n# Estimate the slope numerically at x = 3\nh = 1e-6\nslope = (f(3 + h) - f(3)) / h\nprint(round(slope))  # 6, which matches 2*3"
    },
    {
     "type": "text",
     "text": "Why do programmers care? Derivatives point toward 'which way is downhill.' In machine learning, a model has an error score, and training uses the derivative (the gradient) to nudge the model's numbers in the direction that reduces error. This process, gradient descent, is how neural networks actually learn."
    },
    {
     "type": "tip",
     "text": "Slope zero means you're at a flat spot — a peak, a valley, or a plateau. Optimization algorithms hunt for these flat spots because a valley is often the 'best' (minimum-error) answer."
    }
   ],
   "recap": "A derivative is the instantaneous rate of change — the slope of the curve — and it tells optimization algorithms which way is 'downhill' toward better answers."
  },
  "quiz": [
   {
    "q": "A derivative measures:",
    "options": [
     "The total area under a curve",
     "A fixed constant value",
     "How fast something changes at an instant",
     "The number of rows in a matrix"
    ],
    "answer": 2,
    "explain": "A derivative is the instantaneous rate of change, like speed being the rate of change of position."
   },
   {
    "q": "Using the power rule, the derivative of x^3 is:",
    "options": [
     "x^2",
     "3x^2",
     "x^4/4",
     "3x"
    ],
    "answer": 1,
    "explain": "The power rule gives n*x^(n-1), so x^3 becomes 3*x^2."
   },
   {
    "q": "On a graph, a derivative of 0 at a point means:",
    "options": [
     "The slope is infinite",
     "The curve is vertical there",
     "The curve is flat there",
     "The function is undefined"
    ],
    "answer": 2,
    "explain": "A zero derivative means zero slope, i.e., a flat spot such as a peak or valley."
   },
   {
    "q": "In machine learning, derivatives (gradients) are used to:",
    "options": [
     "Nudge the model toward lower error",
     "Draw the user interface",
     "Encrypt the network",
     "Store the training data"
    ],
    "answer": 0,
    "explain": "Gradient descent uses derivatives to move the model's parameters in the error-reducing direction."
   }
  ]
 },
 "engineering-math-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "If a derivative breaks change into tiny instants, an integral does the opposite: it ADDS UP tiny pieces to get a total. Geometrically, an integral is the AREA under a curve. If a derivative is speed, then integrating speed over time gives you total distance travelled."
    },
    {
     "type": "text",
     "text": "Imagine estimating the area under a curvy graph by slicing it into many thin rectangles, finding each rectangle's area, and summing them. The thinner the slices, the more accurate the total. An integral is the exact answer you get as those slices become infinitely thin — pure accumulation."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Estimate the area under f(x) = x^2 from 0 to 3\n# by summing many thin rectangles (numerical integration)\ndef f(x):\n    return x**2\n\ntotal = 0\nn = 100000\na, b = 0, 3\ndx = (b - a) / n\nfor i in range(n):\n    total += f(a + i * dx) * dx\nprint(round(total, 2))  # ~9.0  (exact answer is 9)"
    },
    {
     "type": "text",
     "text": "Derivatives and integrals are two sides of one coin — that's the Fundamental Theorem of Calculus. Differentiating undoes integrating. The integral of x^2 is (x^3)/3, and if you differentiate (x^3)/3 with the power rule you get x^2 back. They're inverse operations, like multiply and divide."
    },
    {
     "type": "text",
     "text": "Where does this show up in computing? Anywhere you accumulate: total data transferred over time, a probability spread out under a bell curve, the blur applied across pixels in an image, or the total signal energy in audio processing. Summation over tiny pieces is the shared idea."
    },
    {
     "type": "tip",
     "text": "The word 'integrate' literally means 'to make whole.' You're gluing many tiny slivers together into one complete total."
    }
   ],
   "recap": "An integral sums infinitely many tiny pieces to give the area under a curve (a total), and it is the inverse of a derivative."
  },
  "quiz": [
   {
    "q": "Geometrically, an integral represents:",
    "options": [
     "The number of variables",
     "The peak of a curve",
     "The slope of a curve",
     "The area under a curve"
    ],
    "answer": 3,
    "explain": "An integral computes the accumulated area under the curve."
   },
   {
    "q": "If a derivative of position gives speed, then integrating speed over time gives:",
    "options": [
     "The slope",
     "Acceleration",
     "Total distance travelled",
     "The starting point"
    ],
    "answer": 2,
    "explain": "Integration accumulates speed over time to produce total distance."
   },
   {
    "q": "Derivatives and integrals are best described as:",
    "options": [
     "Completely unrelated",
     "Inverse operations",
     "Both types of matrices",
     "The same operation"
    ],
    "answer": 1,
    "explain": "The Fundamental Theorem of Calculus says differentiating undoes integrating — they are inverses."
   },
   {
    "q": "Numerical integration in code usually works by:",
    "options": [
     "Rotating a matrix",
     "Sorting the data",
     "Summing many thin slices",
     "Taking one derivative"
    ],
    "answer": 2,
    "explain": "You approximate the area by adding up many thin rectangles under the curve."
   }
  ]
 },
 "engineering-math-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Let's connect the dots. Everything so far — vectors, matrices, derivatives, integrals — combines to power the systems you use daily. This advanced level shows the big picture of how the pieces work together in real software."
    },
    {
     "type": "text",
     "text": "3D GRAPHICS: Every point of a 3D model is a vector. To rotate, scale, or move the model, you multiply those vectors by transformation MATRICES. A whole scene of thousands of points is one big matrix multiplication, which is exactly why GPUs are built to do matrix math extremely fast."
    },
    {
     "type": "text",
     "text": "MACHINE LEARNING: A neural network is layers of matrix multiplications (turning input vectors into output vectors) plus a nonlinear step. Training uses DERIVATIVES — the gradient of the error tells each weight how to change. Backpropagation is just the chain rule from calculus applied efficiently across the layers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# One neural-network layer = matrix multiply + bias + activation\nimport numpy as np\n\ninputs  = np.array([0.5, 0.9])          # input vector\nweights = np.array([[0.2, 0.8],\n                    [0.6, 0.1]])        # weight matrix\nbias    = np.array([0.1, 0.1])\n\nz = weights.dot(inputs) + bias          # linear part\noutput = np.maximum(0, z)               # ReLU activation\nprint(output)"
    },
    {
     "type": "text",
     "text": "SIGNALS & DATA: Audio, images, and sensor streams are processed with integrals and summation — smoothing, blurring, and measuring energy or probability all accumulate tiny contributions. Probability itself relies on integrals to find the area under a distribution, which underpins everything from spam filters to recommendation systems."
    },
    {
     "type": "text",
     "text": "The takeaway: you rarely compute these by hand. Libraries like NumPy, PyTorch, and TensorFlow do the arithmetic. Your job as an engineer is to UNDERSTAND the concepts well enough to choose the right approach, read the docs, and debug when the math misbehaves."
    },
    {
     "type": "tip",
     "text": "Master the ideas, not the hand-calculation. Knowing 'this is a matrix multiply' or 'the model needs a gradient here' is what separates an engineer who can build AI systems from one who's stuck."
    }
   ],
   "recap": "Vectors and matrices drive graphics and neural networks, while derivatives train models and integrals process signals and probability — libraries do the arithmetic, but you supply the understanding."
  },
  "quiz": [
   {
    "q": "Why are GPUs so useful for 3D graphics and machine learning?",
    "options": [
     "They do matrix math very fast",
     "They replace the internet",
     "They store more text",
     "They avoid all math"
    ],
    "answer": 0,
    "explain": "Both graphics and neural networks are dominated by large matrix multiplications, which GPUs accelerate."
   },
   {
    "q": "Backpropagation in a neural network is essentially:",
    "options": [
     "The chain rule (calculus) applied across layers",
     "Sorting the inputs",
     "A type of matrix addition",
     "Random guessing"
    ],
    "answer": 0,
    "explain": "Backpropagation applies the calculus chain rule to compute gradients through the network's layers."
   },
   {
    "q": "A single neural-network layer is mainly made of:",
    "options": [
     "A single subtraction",
     "A matrix multiply plus an activation",
     "A sorting algorithm",
     "Only integrals"
    ],
    "answer": 1,
    "explain": "Each layer multiplies inputs by a weight matrix, adds a bias, then applies a nonlinear activation."
   },
   {
    "q": "According to the lesson, an engineer's main job with this math is to:",
    "options": [
     "Memorize every formula",
     "Avoid using libraries",
     "Compute everything by hand",
     "Understand the concepts and choose the right approach"
    ],
    "answer": 3,
    "explain": "Libraries handle the arithmetic; the engineer must understand the concepts to apply and debug them."
   }
  ]
 },
 "engineering-math-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know how to multiply matrices. Now meet the DETERMINANT — a single number computed from a square matrix that tells you a lot about it. For a 2x2 matrix [[a,b],[c,d]], the determinant is ad - bc."
    },
    {
     "type": "text",
     "text": "Geometrically, the determinant is a scaling factor. If a matrix transforms shapes (rotating, stretching), the determinant tells you how much the AREA (in 2D) or VOLUME (in 3D) changes. A determinant of 0 means the transformation squashes everything flat — it destroys information."
    },
    {
     "type": "text",
     "text": "That last point matters: a matrix only has an INVERSE (a matrix that undoes it, like division undoes multiplication) if its determinant is not zero. A matrix with determinant 0 is called SINGULAR, and singular matrices cannot be inverted — there's no way to reverse the squashing."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\nA = np.array([[2, 1],\n              [1, 1]])\n\ndet = np.linalg.det(A)\nprint(\"determinant:\", det)      # 1.0 -> invertible\n\nA_inv = np.linalg.inv(A)\nprint(\"inverse:\\n\", A_inv)\n\n# check: A times its inverse gives the identity matrix\nprint(\"A * A_inv:\\n\", A.dot(A_inv))"
    },
    {
     "type": "text",
     "text": "Why care? Solving Ax = b for x is exactly like solving a = b/x, except with matrices you write x = A_inverse * b. Graphics engines use this to undo a transformation (unrotate a rotated shape), and engineers use it to solve systems of equations that model circuits, structures, and more."
    },
    {
     "type": "tip",
     "text": "Quick exam check: if det(A) = 0, stop — don't try to find an inverse, there isn't one. Many marks are lost by students who invert a singular matrix anyway."
    }
   ],
   "recap": "The determinant tells you how a matrix scales area or volume; a matrix has an inverse only when its determinant is nonzero."
  },
  "quiz": [
   {
    "q": "For [[3,1],[2,4]], what is the determinant?",
    "options": [
     "12",
     "10",
     "14",
     "8"
    ],
    "answer": 1,
    "explain": "ad - bc = (3)(4) - (1)(2) = 12 - 2 = 10."
   },
   {
    "q": "A matrix with determinant 0 is called:",
    "options": [
     "Singular",
     "Diagonal",
     "Identity",
     "Symmetric"
    ],
    "answer": 0,
    "explain": "Singular matrices cannot be inverted because their transformation squashes space and loses information."
   },
   {
    "q": "Why is a matrix inverse useful for solving Ax = b?",
    "options": [
     "It always makes b equal to zero",
     "It sorts the equations",
     "It removes the need for numbers",
     "x = A-inverse times b, similar to dividing in ordinary algebra"
    ],
    "answer": 3,
    "explain": "Multiplying both sides by the inverse isolates x, the matrix equivalent of dividing by A."
   },
   {
    "q": "Geometrically, what does the determinant of a 2x2 matrix represent?",
    "options": [
     "The scaling factor applied to area",
     "The angle of rotation",
     "The number of rows",
     "The largest entry in the matrix"
    ],
    "answer": 0,
    "explain": "The determinant measures how much a transformation stretches or shrinks area (or volume in 3D)."
   }
  ]
 },
 "engineering-math-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A SYSTEM of linear equations is just several equations sharing the same unknowns, like 2x + y = 5 and x - y = 1. Engineers hit these constantly: currents in a circuit, forces on a bridge, or prices across a supply chain all turn into a system to solve at once."
    },
    {
     "type": "text",
     "text": "You can write any such system as a single matrix equation, Ax = b, where A holds the coefficients, x is the vector of unknowns, and b is the vector of results. This is exactly why matrices matter — they let you handle dozens of equations as one compact object."
    },
    {
     "type": "text",
     "text": "GAUSSIAN ELIMINATION is the standard method to solve Ax = b by hand. You use row operations (swap two rows, multiply a row by a number, add a multiple of one row to another) to turn the matrix into an upper-triangular form, then solve from the bottom equation upward — this last part is called back-substitution."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\n# 2x + y = 5\n# x  - y = 1\nA = np.array([[2, 1],\n              [1, -1]])\nb = np.array([5, 1])\n\nx = np.linalg.solve(A, b)\nprint(\"solution:\", x)   # x=2, y=1"
    },
    {
     "type": "text",
     "text": "A system can have exactly one solution (the usual case), no solution (the equations contradict each other, like parallel lines that never meet), or infinitely many solutions (the equations overlap, like the same line twice). Gaussian elimination reveals which case you're in — a row of all zeros equal to a nonzero number means no solution."
    },
    {
     "type": "tip",
     "text": "Common mistake: forgetting to apply a row operation to the WHOLE row, including the right-hand side (the b column). Always carry every column along together."
    }
   ],
   "recap": "A system of linear equations can be written as Ax = b and solved with Gaussian elimination, which reduces the matrix to triangular form and then back-substitutes."
  },
  "quiz": [
   {
    "q": "In the matrix equation Ax = b, what does A represent?",
    "options": [
     "The number of equations only",
     "The coefficients of the equations",
     "The unknowns",
     "The final answer"
    ],
    "answer": 1,
    "explain": "A holds the coefficients that multiply each unknown; x is the vector of unknowns and b is the results."
   },
   {
    "q": "What does Gaussian elimination use to simplify a system?",
    "options": [
     "Multiplying every equation by zero",
     "Taking derivatives",
     "Guessing values at random",
     "Row operations that reduce the matrix to triangular form"
    ],
    "answer": 3,
    "explain": "Row swaps, scaling, and adding multiples of rows reduce the system to a form you can solve by back-substitution."
   },
   {
    "q": "During elimination, a row becomes [0 0 | 5] (all zero coefficients but a nonzero result). What does this mean?",
    "options": [
     "The system has exactly one solution",
     "The system has infinitely many solutions",
     "You made an arithmetic error that must be undone",
     "The system has no solution"
    ],
    "answer": 3,
    "explain": "Zero equals a nonzero number is a contradiction, meaning the equations are inconsistent and there is no solution."
   },
   {
    "q": "Why do engineers care about solving systems of linear equations?",
    "options": [
     "They only appear in pure math exams",
     "Real problems like circuit currents or structural forces produce many equations to solve together",
     "They replace the need for matrices entirely",
     "They only apply to computer graphics"
    ],
    "answer": 1,
    "explain": "Many real engineering problems naturally produce several simultaneous equations that must be solved as a system."
   }
  ]
 },
 "engineering-math-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Most vectors change direction when you multiply them by a matrix. But for every square matrix A, there are special vectors that only get STRETCHED or SHRUNK, never rotated. These are called EIGENVECTORS, and the amount they're stretched by is the corresponding EIGENVALUE, written as the Greek letter lambda."
    },
    {
     "type": "text",
     "text": "The defining equation is Av = lambda * v: multiplying eigenvector v by matrix A gives the same result as just scaling v by the number lambda. To find the eigenvalues, you solve det(A - lambda*I) = 0, called the CHARACTERISTIC EQUATION, where I is the identity matrix."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\nA = np.array([[2, 0],\n              [0, 3]])\n\nvalues, vectors = np.linalg.eig(A)\nprint(\"eigenvalues:\", values)\nprint(\"eigenvectors:\\n\", vectors)"
    },
    {
     "type": "text",
     "text": "Eigenvalues and eigenvectors show up everywhere: they describe the natural vibration frequencies of a bridge, the stable states of a system, the axes of an ellipse a transformation produces, and — as you'll see later — how search engines rank pages and how machine learning compresses data."
    },
    {
     "type": "tip",
     "text": "Memory aid: 'eigen' is German for 'own' or 'characteristic'. An eigenvector is a matrix's own special direction — the one direction it treats simply, by scaling instead of rotating."
    }
   ],
   "recap": "Eigenvectors are the special directions a matrix only stretches or shrinks (never rotates), and eigenvalues are the scaling factors, found from det(A - lambda*I) = 0."
  },
  "quiz": [
   {
    "q": "What equation defines an eigenvector v and eigenvalue lambda of matrix A?",
    "options": [
     "A * lambda = v",
     "Av = lambda * v",
     "A + v = lambda",
     "v / A = lambda"
    ],
    "answer": 1,
    "explain": "Multiplying the matrix by its eigenvector gives the same vector scaled by the eigenvalue."
   },
   {
    "q": "What is special about an eigenvector under its matrix's transformation?",
    "options": [
     "It only gets scaled, never rotated",
     "It becomes the zero vector",
     "It disappears",
     "It rotates by 90 degrees"
    ],
    "answer": 0,
    "explain": "Eigenvectors keep their direction; the matrix only stretches or shrinks them by the eigenvalue."
   },
   {
    "q": "How do you find the eigenvalues of a matrix A?",
    "options": [
     "Add up all its entries",
     "Take its transpose",
     "Solve det(A - lambda*I) = 0",
     "Divide A by its trace"
    ],
    "answer": 2,
    "explain": "This is the characteristic equation; its roots are the eigenvalues."
   },
   {
    "q": "Which of these is a real application of eigenvalues mentioned in the lesson?",
    "options": [
     "Rendering fonts on screen",
     "Formatting text files",
     "Compiling source code",
     "Describing a bridge's natural vibration frequencies"
    ],
    "answer": 3,
    "explain": "Eigenvalues describe the natural modes and frequencies at which structures like bridges vibrate."
   }
  ]
 },
 "engineering-math-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some equations, like x^2 + 1 = 0, have no solution among real numbers because no real number squares to -1. Mathematicians invented a new number, i, defined so that i squared equals -1. Numbers built from it, like 3 + 4i, are called COMPLEX NUMBERS, written as a + bi where a is the REAL part and b is the IMAGINARY part."
    },
    {
     "type": "text",
     "text": "You add and multiply complex numbers like ordinary algebra, just remembering that i squared is -1. For example, (2 + 3i) + (1 - i) = 3 + 2i, and (2 + i)(1 + i) = 2 + 2i + i + i^2 = 2 + 3i - 1 = 1 + 3i."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "z1 = complex(2, 3)   # 2 + 3i\nz2 = complex(1, -1)   # 1 - i\n\nprint(z1 + z2)        # (3+2j)\nprint(z1 * z2)        # (5+1j)\nprint(abs(z1))        # modulus: sqrt(2^2 + 3^2)"
    },
    {
     "type": "text",
     "text": "A complex number also has a MODULUS (its distance from the origin, sqrt(a^2 + b^2)) and an ARGUMENT (the angle it makes with the positive real axis). This turns complex numbers into a natural way to describe anything with a size and an angle — which is exactly what alternating current and vibrating signals look like."
    },
    {
     "type": "text",
     "text": "That's why electrical engineers use complex numbers to represent AC voltages and currents (called PHASORS), and why they reappear in the Fourier and Laplace transforms you'll meet soon — both describe signals in terms of rotating complex exponentials."
    },
    {
     "type": "tip",
     "text": "Powers of i cycle every 4 steps: i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, then it repeats. To simplify i to a high power, just divide the exponent by 4 and look at the remainder."
    }
   ],
   "recap": "Complex numbers extend real numbers with i (where i squared is -1), giving every number both a size (modulus) and an angle (argument) — ideal for describing AC signals and rotations."
  },
  "quiz": [
   {
    "q": "What does i satisfy, by definition?",
    "options": [
     "i squared = -1",
     "i = 0",
     "i squared = 1",
     "i = infinity"
    ],
    "answer": 0,
    "explain": "i is defined as the square root of -1, so i squared equals -1 by construction."
   },
   {
    "q": "What is (2 + i)(1 + i)?",
    "options": [
     "1 + 3i",
     "1 - 3i",
     "2 + i",
     "3 + i"
    ],
    "answer": 0,
    "explain": "Expanding gives 2 + 2i + i + i^2 = 2 + 3i - 1 = 1 + 3i."
   },
   {
    "q": "What is the modulus of a complex number a + bi?",
    "options": [
     "a + b",
     "sqrt(a^2 + b^2)",
     "a times b",
     "a - b"
    ],
    "answer": 1,
    "explain": "The modulus is the distance from the origin on the complex plane, found with the Pythagorean theorem."
   },
   {
    "q": "Why do electrical engineers use complex numbers for AC circuits?",
    "options": [
     "Because AC circuits only use whole numbers",
     "Because complex numbers eliminate the need for capacitors",
     "Because it avoids using resistors",
     "Because voltages and currents have both a size and a phase angle, which complex numbers naturally represent"
    ],
    "answer": 3,
    "explain": "Complex numbers (phasors) capture magnitude and phase together, matching how AC signals actually behave."
   }
  ]
 },
 "engineering-math-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far your derivatives measured how one variable changes with respect to another, like speed changing with time. But many real functions depend on SEVERAL variables at once — the temperature in a room depends on x, y, and z position, and a machine learning model's error depends on hundreds of weights simultaneously."
    },
    {
     "type": "text",
     "text": "A PARTIAL DERIVATIVE measures how a function changes with respect to just ONE variable, while treating all the others as constants for that moment. If f(x, y) = x^2 + 3xy, the partial derivative with respect to x (written df/dx) treats y as a fixed number: df/dx = 2x + 3y. The partial with respect to y treats x as fixed: df/dy = 3x."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def f(x, y):\n    return x**2 + 3*x*y\n\ndef partial_x(x, y, h=1e-6):\n    return (f(x + h, y) - f(x, y)) / h\n\ndef partial_y(x, y, h=1e-6):\n    return (f(x, y + h) - f(x, y)) / h\n\nprint(partial_x(2, 3))   # approx 2(2)+3(3) = 13\nprint(partial_y(2, 3))   # approx 3(2) = 6"
    },
    {
     "type": "text",
     "text": "Collect all the partial derivatives of a function into one vector and you get the GRADIENT, written as an upside-down triangle (nabla) f. The gradient points in the direction where the function increases FASTEST, and its length tells you how steep that increase is."
    },
    {
     "type": "text",
     "text": "This is the exact idea behind training a neural network: the gradient of the error tells every weight which direction makes the error worse, so the training algorithm steps in the OPPOSITE direction, shrinking the error a little at a time. That's called gradient descent, and you'll build it yourself in a later level."
    },
    {
     "type": "tip",
     "text": "When taking a partial derivative, physically cover up the other variables with your finger and treat them as plain numbers — it keeps you from accidentally applying the product rule where you shouldn't."
    }
   ],
   "recap": "A partial derivative measures a multivariable function's rate of change in one direction at a time, and the gradient collects all of them into a vector pointing toward steepest increase."
  },
  "quiz": [
   {
    "q": "For f(x, y) = x^2 + 3xy, what is df/dx?",
    "options": [
     "3x",
     "x^2",
     "2x + 3y",
     "2x + 3x"
    ],
    "answer": 2,
    "explain": "Treat y as constant: the derivative of x^2 is 2x, and the derivative of 3xy with respect to x is 3y."
   },
   {
    "q": "When computing a partial derivative with respect to x, how do you treat the other variables?",
    "options": [
     "Differentiate them too",
     "Set them all to zero",
     "Ignore the function entirely",
     "Treat them as constants"
    ],
    "answer": 3,
    "explain": "A partial derivative isolates the rate of change in one variable by holding every other variable fixed."
   },
   {
    "q": "What does the gradient of a function point toward?",
    "options": [
     "A random direction",
     "The origin of the coordinate system",
     "The function's minimum value always",
     "The direction of steepest increase"
    ],
    "answer": 3,
    "explain": "The gradient vector, built from all partial derivatives, points in the direction where the function grows fastest."
   },
   {
    "q": "How does the gradient relate to training a neural network?",
    "options": [
     "It counts the number of layers",
     "It tells each weight which direction increases error, so training moves the opposite way",
     "It replaces the need for data entirely",
     "It stores the training data"
    ],
    "answer": 1,
    "explain": "Gradient descent moves weights opposite to the gradient of the error to reduce that error step by step."
   }
  ]
 },
 "engineering-math-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You just met the GRADIENT, which turns a plain function (like temperature at each point) into a vector field showing the direction of fastest increase everywhere. Now consider the reverse case: a VECTOR FIELD, where every point in space already has its own vector, like wind speed and direction at each point on a map."
    },
    {
     "type": "text",
     "text": "DIVERGENCE measures whether a vector field is spreading OUT from a point or converging INTO it. Positive divergence at a point means vectors are flowing away from it (like a source, such as a water tap); negative divergence means they're flowing in (like a drain). Zero divergence means what flows in equals what flows out."
    },
    {
     "type": "text",
     "text": "CURL measures ROTATION in a vector field — how much it swirls around a point, like the tiny spin a paddle wheel would pick up if dropped into flowing water. A field with zero curl everywhere has no rotational tendency at all, which is why it's called IRROTATIONAL."
    },
    {
     "type": "text",
     "text": "These three ideas — gradient, divergence, curl — are the backbone of fluid dynamics, electromagnetism, and heat flow. Maxwell's equations, which describe every electric and magnetic field in the universe, are written almost entirely using divergence and curl."
    },
    {
     "type": "tip",
     "text": "Keep the three straight with their outputs: gradient takes a plain number field and returns a VECTOR field (direction of steepest change). Divergence takes a vector field and returns a NUMBER at each point (spreading or converging). Curl takes a vector field and returns another VECTOR (the axis and strength of local spin)."
    }
   ],
   "recap": "Divergence measures how much a vector field spreads from a point, and curl measures how much it rotates around a point — together with the gradient, these describe fluid flow and electromagnetic fields."
  },
  "quiz": [
   {
    "q": "What does positive divergence at a point indicate?",
    "options": [
     "The field is exactly zero there",
     "The field is rotating around that point",
     "The field only exists in 2D",
     "Vectors are flowing outward from that point, like a source"
    ],
    "answer": 3,
    "explain": "Positive divergence means more is flowing out of the point than into it, like a source."
   },
   {
    "q": "What does curl measure in a vector field?",
    "options": [
     "How fast the field spreads outward",
     "The average value of the field",
     "The total energy of the field",
     "How much the field rotates or swirls around a point"
    ],
    "answer": 3,
    "explain": "Curl captures the local spinning tendency of a vector field, like the spin a paddle wheel would gain."
   },
   {
    "q": "A vector field with zero curl everywhere is called:",
    "options": [
     "Singular",
     "Symmetric",
     "Divergent",
     "Irrotational"
    ],
    "answer": 3,
    "explain": "Zero curl means the field has no rotational tendency anywhere, hence 'irrotational'."
   },
   {
    "q": "Which real-world laws are written mainly using divergence and curl?",
    "options": [
     "Newton's laws of motion",
     "Ohm's law",
     "Maxwell's equations of electromagnetism",
     "The laws of thermodynamics only"
    ],
    "answer": 2,
    "explain": "Maxwell's equations describe electric and magnetic fields almost entirely in terms of divergence and curl."
   }
  ]
 },
 "engineering-math-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A single integral finds the area under a curve on a flat 2D graph. A DOUBLE INTEGRAL extends the same idea to functions of two variables, finding the VOLUME under a surface sitting above a flat region — imagine slicing a mountain-shaped surface into infinitely thin columns and adding up all their tiny volumes."
    },
    {
     "type": "text",
     "text": "You write a double integral as an ITERATED integral: integrate with respect to one variable first (treating the other as constant, just like a partial derivative), then integrate the result with respect to the second variable. The order (dx dy or dy dx) usually doesn't change the answer, but it can change how easy the calculation is."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from scipy import integrate\n\n# Volume under f(x, y) = x*y over the square 0<=x<=1, 0<=y<=1\nresult, error = integrate.dblquad(lambda y, x: x * y, 0, 1, 0, 1)\nprint(\"volume:\", result)   # 0.25"
    },
    {
     "type": "text",
     "text": "TRIPLE INTEGRALS go one dimension further, adding up a quantity across a 3D region — useful for finding the total mass of an object whose density varies from point to point, or the total charge inside a 3D region in an electric field."
    },
    {
     "type": "tip",
     "text": "The easiest mistake in multiple integrals is getting the LIMITS wrong for the inner integral when the region isn't a simple rectangle. Always sketch the region first and figure out, for a fixed x, what range y actually covers."
    }
   ],
   "recap": "A double integral finds the volume under a surface by integrating over both variables in turn, and a triple integral extends this to totals across a 3D region."
  },
  "quiz": [
   {
    "q": "What does a double integral of a function over a region typically represent?",
    "options": [
     "The volume under a surface above that region",
     "The number of variables in the function",
     "The slope of the function",
     "The average of two numbers"
    ],
    "answer": 0,
    "explain": "A double integral sums up tiny volume slices, giving the total volume under a surface."
   },
   {
    "q": "In an iterated double integral, what do you do first?",
    "options": [
     "Add the two variables together",
     "Integrate with respect to one variable while treating the other as constant",
     "Set both variables to zero",
     "Differentiate both variables at once"
    ],
    "answer": 1,
    "explain": "You integrate one variable first, holding the other fixed, then integrate the result over the second variable."
   },
   {
    "q": "A triple integral is most useful for finding:",
    "options": [
     "The slope of a line",
     "The eigenvalues of a matrix",
     "The area of a 2D shape only",
     "A total quantity (like mass or charge) spread across a 3D region"
    ],
    "answer": 3,
    "explain": "Triple integrals sum a varying quantity across three dimensions, such as total mass with variable density."
   },
   {
    "q": "What is the most common mistake when setting up a multiple integral over a non-rectangular region?",
    "options": [
     "Using the wrong variable names",
     "Using too many decimal places",
     "Forgetting to add a constant of integration",
     "Getting the integration limits wrong for the inner integral"
    ],
    "answer": 3,
    "explain": "For irregular regions, the limits of the inner integral often depend on the outer variable, and getting this wrong is a frequent error."
   }
  ]
 },
 "engineering-math-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A DIFFERENTIAL EQUATION is an equation that involves a function AND its derivatives, like dy/dx = 2y. Instead of asking 'what number solves this equation', it asks 'what FUNCTION solves this equation' — and that function describes how something changes over time or space."
    },
    {
     "type": "text",
     "text": "The ORDER of a differential equation is the highest derivative appearing in it. dy/dx = 2y is FIRST-order (only the first derivative appears). d^2y/dx^2 + y = 0 is SECOND-order, and shows up constantly in physics, describing anything that oscillates, like a spring or a pendulum."
    },
    {
     "type": "text",
     "text": "A SEPARABLE equation is one you can solve by moving all the y terms to one side and all the x terms to the other, then integrating both sides. For dy/dx = 2y, you rewrite it as dy/y = 2 dx, integrate both sides to get ln(y) = 2x + C, and solve for y = A * e^(2x) — exponential growth, the classic solution whenever a quantity's rate of change is proportional to itself."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\nfrom scipy.integrate import odeint\n\n# dy/dx = 2y, y(0) = 1\ndef model(y, x):\n    return 2 * y\n\nx = np.linspace(0, 2, 5)\ny = odeint(model, 1, x)\nprint(y.flatten())   # matches e^(2x)"
    },
    {
     "type": "text",
     "text": "Differential equations model almost everything that changes: population growth, radioactive decay, current in an electrical circuit, heat spreading through a rod, and the motion of a vibrating structure. Engineers rarely solve them entirely by hand for real problems — instead they use numerical solvers, exactly like the odeint call above."
    },
    {
     "type": "tip",
     "text": "Whenever a problem says a rate of change is 'proportional to' the current amount (growth, decay, cooling), it is describing a differential equation of the form dy/dx = k*y — recognize this pattern instantly and you save a lot of exam time."
    }
   ],
   "recap": "A differential equation links a function to its own derivatives; separable equations can be solved by integrating both sides, and they model growth, decay, and oscillation throughout engineering."
  },
  "quiz": [
   {
    "q": "What makes an equation a 'differential' equation?",
    "options": [
     "It contains only whole numbers",
     "It has more than one variable name",
     "It cannot be solved",
     "It involves a function together with its derivatives"
    ],
    "answer": 3,
    "explain": "A differential equation relates an unknown function to its derivatives, unlike an ordinary algebraic equation."
   },
   {
    "q": "d^2y/dx^2 + y = 0 is what order of differential equation?",
    "options": [
     "Zero order",
     "Second order",
     "First order",
     "It has no order"
    ],
    "answer": 1,
    "explain": "The order is the highest derivative present — here the second derivative, so it is second-order."
   },
   {
    "q": "Solving dy/dx = 2y by separating variables and integrating gives which type of solution?",
    "options": [
     "A straight line",
     "A quadratic function",
     "A constant with no x",
     "An exponential function"
    ],
    "answer": 3,
    "explain": "Separating and integrating gives ln(y) = 2x + C, which rearranges to the exponential y = A * e^(2x)."
   },
   {
    "q": "Which phrase in a word problem usually signals a differential equation of the form dy/dx = k*y?",
    "options": [
     "'Two numbers add up to 10'",
     "'The shape has four equal sides'",
     "'The total is fixed at 100'",
     "'The rate of change is proportional to the current amount'"
    ],
    "answer": 3,
    "explain": "Growth or decay proportional to the current amount is the defining feature of this classic differential equation."
   }
  ]
 },
 "engineering-math-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Differential equations can be painful to solve directly, especially with sudden inputs like a switch flipping on. The LAPLACE TRANSFORM is a trick that converts a differential equation in time (the t-domain) into a plain ALGEBRAIC equation in a new variable s (the s-domain) — no more derivatives, just multiplication and addition."
    },
    {
     "type": "text",
     "text": "The transform works like a dictionary: each common function in t has a known equivalent in s. A derivative in t becomes a multiplication by s in the s-domain (roughly, the Laplace transform of dy/dt is s*Y(s) minus the initial value). So a whole differential equation collapses into an algebraic one you can solve with ordinary algebra, then transform BACK to get the answer in terms of t."
    },
    {
     "type": "text",
     "text": "This three-step recipe — transform the problem into the s-domain, solve the easy algebra, transform back — is exactly how electrical and control engineers analyze circuits and feedback systems. A circuit's behavior right when a switch is flipped (called a transient) is famously messy in the time domain but simple in the s-domain."
    },
    {
     "type": "tip",
     "text": "Think of the Laplace transform like translating a hard problem into a language where it's a simple sentence, solving it there, then translating the answer back — you never actually 'do calculus' in the s-domain, only algebra."
    },
    {
     "type": "text",
     "text": "Laplace transforms are also the mathematical foundation of TRANSFER FUNCTIONS, which describe how a control system (like a thermostat, a drone's flight controller, or a car's cruise control) responds to an input — a concept that shows up throughout control systems engineering."
    }
   ],
   "recap": "The Laplace transform converts a hard differential equation in time into an easy algebraic equation in a new variable s, which you solve and then transform back — the standard tool of circuit and control-system analysis."
  },
  "quiz": [
   {
    "q": "What does the Laplace transform turn a differential equation into?",
    "options": [
     "An algebraic equation in a new variable s",
     "A probability distribution",
     "A geometric shape",
     "A matrix multiplication"
    ],
    "answer": 0,
    "explain": "The transform moves the problem to the s-domain, where derivatives become multiplications and the equation becomes algebraic."
   },
   {
    "q": "What is the general three-step process for using Laplace transforms?",
    "options": [
     "Differentiate twice, then integrate once",
     "Guess a solution, then check it numerically",
     "Convert to binary, solve, convert back to decimal",
     "Transform to s-domain, solve algebra, transform back to t-domain"
    ],
    "answer": 3,
    "explain": "You transform the equation, solve the now-simple algebra in s, then inverse-transform to get the answer back in terms of t."
   },
   {
    "q": "Why are Laplace transforms especially useful for circuits with switches?",
    "options": [
     "They only work for DC circuits",
     "They turn the messy transient behavior in time into simple algebra in the s-domain",
     "They remove the concept of time entirely",
     "They eliminate the need for resistors"
    ],
    "answer": 1,
    "explain": "Sudden inputs like a switch produce transients that are hard to solve directly in time but become simple algebra after the transform."
   },
   {
    "q": "Laplace transforms are the mathematical basis of which control-engineering concept?",
    "options": [
     "Boolean algebra",
     "Binary search",
     "Hash tables",
     "Transfer functions"
    ],
    "answer": 3,
    "explain": "Transfer functions describe a system's input-output behavior in the s-domain and are built directly from Laplace transforms."
   }
  ]
 },
 "engineering-math-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Here's a surprising fact: any repeating (periodic) signal, no matter how jagged, can be built by adding up plain sine and cosine waves of different frequencies and sizes. This decomposition is called a FOURIER SERIES, and it turns a complicated repeating shape into a simple recipe of 'how much of each frequency'."
    },
    {
     "type": "text",
     "text": "The FOURIER TRANSFORM extends this idea to signals that aren't periodic at all — like a single spoken word or one photograph. It converts a signal from the TIME (or space) domain into the FREQUENCY domain, showing exactly which frequencies are present and how strong each one is."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\n# A signal made of two sine waves: 5 Hz and 20 Hz\nt = np.linspace(0, 1, 500, endpoint=False)\nsignal = np.sin(2*np.pi*5*t) + 0.5*np.sin(2*np.pi*20*t)\n\nspectrum = np.fft.fft(signal)\nfreqs = np.fft.fftfreq(len(t), d=t[1]-t[0])\n\n# find the strongest positive frequencies\nmagnitude = np.abs(spectrum)\ntop = np.argsort(magnitude[:len(t)//2])[::-1][:2]\nprint(\"dominant frequencies (Hz):\", sorted(freqs[top]))"
    },
    {
     "type": "text",
     "text": "This frequency view is everywhere in engineering: MP3 and JPEG compression throw away frequencies your ears or eyes barely notice; noise-cancelling headphones detect the frequency of ambient noise and cancel it; and image processing filters (blurring, sharpening) work directly on an image's frequency content."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: if a problem talks about 'breaking a signal into frequencies', 'removing noise at a specific frequency', or 'compression', the tool underneath is a Fourier transform — recognizing this connects the math to the application instantly."
    }
   ],
   "recap": "The Fourier series and transform decompose any signal into a sum of simple sine waves at different frequencies, which is the basis of audio and image compression, filtering, and noise cancellation."
  },
  "quiz": [
   {
    "q": "What does a Fourier series claim about any periodic signal?",
    "options": [
     "It has no mathematical description",
     "It can be built by adding sine and cosine waves of different frequencies",
     "It must first be converted to binary",
     "It can only be described by one sine wave"
    ],
    "answer": 1,
    "explain": "Any periodic signal, however complex, can be represented as a sum of simple sine and cosine components."
   },
   {
    "q": "What does the Fourier transform convert a signal from and to?",
    "options": [
     "From time (or space) domain to frequency domain",
     "From binary to decimal",
     "From 2D to 3D",
     "From frequency domain to volume domain"
    ],
    "answer": 0,
    "explain": "It re-expresses a signal in terms of which frequencies it contains, instead of its value over time."
   },
   {
    "q": "Which real-world technology directly relies on the Fourier transform?",
    "options": [
     "Binary search trees",
     "Sorting algorithms",
     "MP3 audio compression",
     "Basic arithmetic calculators"
    ],
    "answer": 2,
    "explain": "MP3 compression analyzes a sound's frequency content and discards frequencies the ear barely perceives."
   },
   {
    "q": "A problem describes 'cancelling a constant background hum in a recording'. What technique is most relevant?",
    "options": [
     "Matrix inversion",
     "Determinants",
     "Gaussian elimination",
     "Fourier transform to isolate and remove that frequency"
    ],
    "answer": 3,
    "explain": "Identifying and removing a specific frequency component is a classic Fourier-domain operation."
   }
  ]
 },
 "engineering-math-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Plenty of equations have no neat algebraic solution — you can't just isolate x with a formula. Instead engineers use NUMERICAL METHODS: algorithms that start with a guess and improve it step by step until it's close enough to the true answer."
    },
    {
     "type": "text",
     "text": "The NEWTON-RAPHSON method finds a ROOT of a function (a value of x where f(x) = 0) by repeatedly drawing the tangent line at your current guess and jumping to where that tangent line crosses zero. The update rule is: x_new = x_old - f(x_old) / f'(x_old), where f' is the derivative."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def f(x):\n    return x**3 - 2*x - 5      # root near x = 2.09\n\ndef f_prime(x):\n    return 3*x**2 - 2\n\nx = 2.0                        # initial guess\nfor step in range(6):\n    x = x - f(x) / f_prime(x)\n    print(f\"step {step}: x = {x:.6f}\")"
    },
    {
     "type": "text",
     "text": "Notice how fast it converges — after just a few steps the guess barely changes. That speed is Newton-Raphson's main strength, but it has a weakness: if the derivative at your guess is zero or very small, the method can shoot off wildly instead of converging, so a good starting guess matters."
    },
    {
     "type": "tip",
     "text": "If Newton-Raphson refuses to converge (the guesses jump around or blow up), try a different starting point closer to where you expect the root to be, or check whether the derivative is close to zero near that region."
    }
   ],
   "recap": "Newton-Raphson finds a function's root by repeatedly following the tangent line to zero, converging quickly from a good starting guess but sometimes failing near a flat derivative."
  },
  "quiz": [
   {
    "q": "What is a 'root' of a function f(x)?",
    "options": [
     "The derivative of f(x)",
     "The maximum value of f(x)",
     "The steepest point on its graph",
     "A value of x where f(x) equals zero"
    ],
    "answer": 3,
    "explain": "A root is exactly where the function's output crosses zero."
   },
   {
    "q": "What is the Newton-Raphson update formula?",
    "options": [
     "x_new = x_old / f'(x_old)",
     "x_new = x_old - f(x_old) / f'(x_old)",
     "x_new = f(x_old) * f'(x_old)",
     "x_new = x_old + f(x_old)"
    ],
    "answer": 1,
    "explain": "The method subtracts the ratio of the function value to its derivative from the current guess."
   },
   {
    "q": "Why does Newton-Raphson typically converge quickly?",
    "options": [
     "It tries every possible value",
     "It follows the tangent line at each guess, which closely hugs the curve near the root",
     "It only works for straight lines",
     "It ignores the function entirely"
    ],
    "answer": 1,
    "explain": "Following the tangent line gives a much better next guess than a blind step, so it homes in on the root fast."
   },
   {
    "q": "When can Newton-Raphson fail to converge?",
    "options": [
     "When the derivative at the current guess is zero or very small",
     "When the root is a whole number",
     "When x starts positive",
     "When the function has too many terms"
    ],
    "answer": 0,
    "explain": "A near-zero derivative makes the tangent line nearly flat, sending the next guess far away instead of closer to the root."
   }
  ]
 },
 "engineering-math-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not every function can be integrated with a neat formula either. When that happens, engineers approximate the area under the curve numerically, by slicing it into simple pieces whose area IS easy to compute, then adding them up."
    },
    {
     "type": "text",
     "text": "The TRAPEZOIDAL RULE slices the region into thin vertical strips and approximates each strip as a trapezoid instead of a rectangle, which fits a curve better than a flat-topped rectangle would. More, thinner strips give a more accurate answer."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\ndef f(x):\n    return x**2\n\na, b, n = 0, 2, 1000            # integrate x^2 from 0 to 2\nx = np.linspace(a, b, n+1)\ny = f(x)\n\narea = np.trapz(y, x)\nprint(\"trapezoidal estimate:\", area)   # true value is 8/3 = 2.667"
    },
    {
     "type": "text",
     "text": "SIMPSON'S RULE goes further: instead of straight-line trapezoid tops, it fits a small curved (parabolic) piece through every pair of strips, which hugs a smoothly curving function even more closely. For the same number of slices, Simpson's rule is usually far more accurate than the trapezoidal rule."
    },
    {
     "type": "tip",
     "text": "The general trade-off in numerical integration: more slices means more accuracy but more computation. In practice you keep increasing the slice count until the answer stops changing meaningfully — that's when you know it has converged."
    }
   ],
   "recap": "The trapezoidal and Simpson's rules approximate the area under a curve by slicing it into simple shapes and summing them, trading computation for accuracy when no exact formula exists."
  },
  "quiz": [
   {
    "q": "Why would an engineer use numerical integration instead of finding an exact formula?",
    "options": [
     "Because some functions have no closed-form integral, so approximation is the only option",
     "Because computers cannot do exact math",
     "Because it's always faster than exact methods",
     "Because exact integrals are illegal in engineering"
    ],
    "answer": 0,
    "explain": "Many real functions cannot be integrated with a neat algebraic formula, so numerical approximation is the practical route."
   },
   {
    "q": "What shape does the trapezoidal rule use to approximate each strip under the curve?",
    "options": [
     "A rectangle",
     "A circle",
     "A triangle",
     "A trapezoid"
    ],
    "answer": 3,
    "explain": "It connects the curve's endpoints on each strip with a straight line, forming a trapezoid rather than a flat rectangle."
   },
   {
    "q": "How does Simpson's rule generally compare to the trapezoidal rule for the same number of slices?",
    "options": [
     "It is usually more accurate because it fits curved pieces instead of straight lines",
     "It is usually less accurate",
     "It gives exactly the same answer always",
     "It cannot be used on any function"
    ],
    "answer": 0,
    "explain": "Simpson's rule fits small parabolas through the data, which follows a smooth curve more closely than straight trapezoid tops."
   },
   {
    "q": "What is the general trade-off when choosing the number of slices in numerical integration?",
    "options": [
     "The number of slices has no effect on the result",
     "More slices improves accuracy but increases computation",
     "Fewer slices always gives a perfect answer",
     "More slices always makes the answer less accurate"
    ],
    "answer": 1,
    "explain": "Finer slicing better approximates the true curve but costs more computation, so you increase slices until the result stabilizes."
   }
  ]
 },
 "engineering-math-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "OPTIMIZATION means finding the input that makes a function as small (or as large) as possible — the lowest cost, the shortest route, the smallest training error. You've already met the gradient, which points toward the steepest INCREASE of a function; optimization just uses that fact in reverse."
    },
    {
     "type": "text",
     "text": "GRADIENT DESCENT starts at some guess, computes the gradient there, and takes a small step in the OPPOSITE direction (since that's the direction of steepest decrease). Repeat this enough times and you walk downhill into a minimum, the same way water flows down a hill to the lowest point it can reach."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def f(x):\n    return (x - 3)**2 + 4       # minimum at x = 3\n\ndef f_prime(x):\n    return 2 * (x - 3)\n\nx = 0.0                          # starting guess\nlearning_rate = 0.3\nfor step in range(15):\n    x = x - learning_rate * f_prime(x)\nprint(f\"minimum found near x = {x:.4f}\")"
    },
    {
     "type": "text",
     "text": "This is precisely how neural networks learn: the 'function' is the training error, the 'input' is every weight in the network, and gradient descent nudges each weight downhill, step after step, until the error is as small as the network can manage."
    },
    {
     "type": "text",
     "text": "Sometimes you need to optimize a function subject to a CONSTRAINT — for example, maximize the area of a rectangle given that its perimeter must equal exactly 20. LAGRANGE MULTIPLIERS handle exactly this: you combine the function and the constraint into one new expression (using an extra variable, lambda, the multiplier) and find where its gradient is zero, which locates the best point that still respects the constraint."
    },
    {
     "type": "tip",
     "text": "The LEARNING RATE in gradient descent is a step-size dial: too small and training crawls forever; too large and it overshoots the minimum and can even diverge. Tuning it is one of the most common practical challenges in machine learning."
    }
   ],
   "recap": "Gradient descent finds a function's minimum by repeatedly stepping opposite to the gradient, powering how neural networks learn, while Lagrange multipliers extend optimization to problems with constraints."
  },
  "quiz": [
   {
    "q": "In gradient descent, which direction do you step from the current guess?",
    "options": [
     "In the direction of the gradient (steepest increase)",
     "Opposite to the gradient (steepest decrease)",
     "Always toward zero",
     "In a random direction"
    ],
    "answer": 1,
    "explain": "Since the gradient points toward increase, stepping opposite to it moves toward a lower value of the function."
   },
   {
    "q": "What happens if the learning rate in gradient descent is set too large?",
    "options": [
     "Nothing changes at all",
     "The steps can overshoot the minimum and even diverge",
     "The gradient becomes undefined",
     "Training becomes perfectly accurate instantly"
    ],
    "answer": 1,
    "explain": "A learning rate that's too large causes overly large steps, which can bounce past the minimum or make the process unstable."
   },
   {
    "q": "What is the role of the extra variable (lambda) in Lagrange multipliers?",
    "options": [
     "It measures the number of constraints only",
     "It is only used for decoration in the formula",
     "It combines the function and the constraint so the optimum can be found together",
     "It replaces the original function entirely"
    ],
    "answer": 2,
    "explain": "Lambda weights the constraint into a combined expression whose gradient-zero point gives the constrained optimum."
   },
   {
    "q": "In neural network training, what plays the role of the 'function' being minimized by gradient descent?",
    "options": [
     "The size of the dataset file",
     "The training error (loss)",
     "The number of neurons",
     "The programming language used"
    ],
    "answer": 1,
    "explain": "Gradient descent adjusts the network's weights to minimize the training error, exactly as it minimizes any other function."
   }
  ]
 },
 "engineering-math-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Let's close this track with two ideas that show up constantly in interviews, because they combine almost everything you've learned — matrices, eigenvalues, and optimization — into systems used by billions of people every day."
    },
    {
     "type": "text",
     "text": "PRINCIPAL COMPONENT ANALYSIS (PCA) shrinks a dataset with many features (imagine 100 columns describing each customer) down to just a few that capture most of the useful variation. It works by computing the COVARIANCE MATRIX of the data (how every pair of features varies together), then finding its EIGENVECTORS. The eigenvector with the largest eigenvalue points in the direction where the data varies the MOST — that direction becomes your new first feature, capturing as much information as possible in one number."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import numpy as np\n\n# Tiny dataset: 2 features, 5 samples\nX = np.array([[2.5, 2.4], [0.5, 0.7], [2.2, 2.9], [1.9, 2.2], [3.1, 3.0]])\nX_centered = X - X.mean(axis=0)\n\ncov = np.cov(X_centered.T)\nvalues, vectors = np.linalg.eig(cov)\n\nmain_direction = vectors[:, np.argmax(values)]\nprint(\"direction of most variation:\", main_direction)"
    },
    {
     "type": "text",
     "text": "GOOGLE'S PAGERANK algorithm ranks web pages with the same core idea. It builds a giant matrix where each entry represents 'how much page A links to page B', treating the whole web as one enormous system of linked pages. The importance of every page turns out to be exactly the EIGENVECTOR corresponding to the matrix's largest eigenvalue — pages linked to by many important pages become important themselves, computed all at once by this single eigenvector."
    },
    {
     "type": "text",
     "text": "Both examples reveal the same deep pattern: whenever a real system is 'a bunch of things influencing each other repeatedly', its long-run, stable behavior is usually described by an eigenvector. Recognizing this pattern — recommendation engines, network analysis, vibration analysis, image compression — is exactly the kind of insight that separates a memorized formula from real understanding."
    },
    {
     "type": "tip",
     "text": "Interview tip: if asked 'how would you reduce the dimensions of a dataset' or 'how does PageRank work', the one-line answer that shows real understanding is: 'find the eigenvector with the largest eigenvalue of the matrix that captures how the elements relate to each other.'"
    }
   ],
   "recap": "PCA and PageRank both boil down to finding the eigenvector with the largest eigenvalue of a matrix built from relationships in the data — the same math you learned at the start of this track now explains how search engines rank the web and how machine learning compresses data."
  },
  "quiz": [
   {
    "q": "In PCA, what does the eigenvector with the largest eigenvalue of the covariance matrix represent?",
    "options": [
     "A random direction with no meaning",
     "The average of all the data",
     "The direction in which the data varies the most",
     "The smallest feature in the dataset"
    ],
    "answer": 2,
    "explain": "That eigenvector points along the direction capturing the greatest spread (variance) in the data, making it the most informative single direction."
   },
   {
    "q": "What does PageRank compute to determine the importance of a webpage?",
    "options": [
     "The eigenvector corresponding to the largest eigenvalue of the link matrix",
     "The page's file size",
     "The date the page was created",
     "The number of words on the page"
    ],
    "answer": 0,
    "explain": "PageRank models links between pages as a matrix and finds the dominant eigenvector, which gives each page's relative importance."
   },
   {
    "q": "What common pattern do PCA and PageRank both illustrate?",
    "options": [
     "Both only work on text data",
     "Both require sorting algorithms",
     "Both find their answer as the eigenvector of largest eigenvalue for a matrix describing relationships",
     "Both avoid using matrices entirely"
    ],
    "answer": 2,
    "explain": "Despite solving very different problems, both reduce to the same underlying eigenvector computation."
   },
   {
    "q": "Why does PCA compute the covariance matrix before finding eigenvectors?",
    "options": [
     "It converts the data into complex numbers",
     "It replaces the need for a dataset entirely",
     "The covariance matrix removes all the data's noise automatically",
     "The covariance matrix captures how features vary together, which is what eigenvectors of it reveal as directions of variation"
    ],
    "answer": 3,
    "explain": "The covariance matrix encodes how each pair of features relates, and its eigenvectors point along the directions of greatest shared variation."
   }
  ]
 }
}
