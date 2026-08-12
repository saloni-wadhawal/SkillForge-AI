// Lesson text and quiz questions for "Artificial Intelligence".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "ai-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Artificial Intelligence (AI) is the field of building machines that perform tasks we'd normally call 'intelligent' — understanding language, recognizing images, making decisions, or solving problems. It is a branch of computer science, not magic and not a conscious mind."
    },
    {
     "type": "text",
     "text": "A useful definition: AI systems perceive their environment, reason about it, and act to reach a goal. The classic academic framing (from Russell & Norvig) is that AI tries to build agents that act rationally — meaning they choose actions expected to best achieve their objective given what they know."
    },
    {
     "type": "tip",
     "text": "Analogy: A calculator does arithmetic but nobody calls it 'intelligent' because the steps are fixed. AI is about handling messy, uncertain, or novel situations where the right answer isn't hard-coded."
    },
    {
     "type": "text",
     "text": "What AI is NOT: it is not necessarily conscious, self-aware, or 'thinking like a human.' Today's AI is 'narrow' — it's very good at one task (say, spam filtering) and useless outside it. 'Artificial General Intelligence' (AGI), a single system as flexible as a person, does not yet exist."
    },
    {
     "type": "text",
     "text": "You'll also hear terms nested inside each other: AI is the big field; Machine Learning (ML) is one approach to AI where systems learn from data; Deep Learning is one kind of ML that uses neural networks. Think of them as boxes inside boxes."
    }
   ],
   "recap": "AI builds systems that perceive, reason, and act rationally toward goals — today it's narrow (task-specific), not conscious, and ML is one part of it."
  },
  "quiz": [
   {
    "q": "Which statement best describes today's AI?",
    "options": [
     "It is narrow — very good at specific tasks",
     "It only means humanoid robots",
     "It is conscious and self-aware",
     "It is the same as a general human mind"
    ],
    "answer": 0,
    "explain": "Current AI is 'narrow': it excels at one task but can't flexibly do everything a human can."
   },
   {
    "q": "How do AI, Machine Learning, and Deep Learning relate?",
    "options": [
     "AI contains ML, and ML contains Deep Learning",
     "Deep Learning contains AI",
     "They are three unrelated fields",
     "AI is inside Machine Learning"
    ],
    "answer": 0,
    "explain": "They nest like boxes: AI is broadest, ML is a subset, and Deep Learning is a subset of ML."
   },
   {
    "q": "The classic academic goal of an AI system is to build an agent that:",
    "options": [
     "Feels human emotions",
     "Acts rationally toward its goal",
     "Runs without any data",
     "Never makes any mistake"
    ],
    "answer": 1,
    "explain": "AI aims for rational agents that choose actions expected to best achieve their goals."
   }
  ]
 },
 "ai-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An agent is anything that perceives its environment through sensors and acts on it through actuators. A robot uses cameras and motors; a software agent uses data inputs and outputs. The agent's 'program' maps what it perceives to what it does — this mapping is called the agent function."
    },
    {
     "type": "text",
     "text": "The environment is described by the PEAS framework: Performance measure, Environment, Actuators, Sensors. For a self-driving car: Performance = safe, fast, legal driving; Environment = roads and traffic; Actuators = steering, brakes; Sensors = cameras, radar, GPS. Defining PEAS first tells you what to build."
    },
    {
     "type": "tip",
     "text": "Analogy: A thermostat is a tiny agent — it senses temperature and acts by switching heating on or off to reach a goal (your set temperature)."
    },
    {
     "type": "text",
     "text": "Agents range from simple to smart. A simple reflex agent uses condition-action rules ('if too cold, turn on heat'). A model-based agent keeps internal state about the world. A goal-based agent considers future outcomes, and a utility-based agent picks the action that maximizes a 'happiness score' when several goals compete."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def reflex_agent(percept):\n    # simple condition-action rules\n    if percept[\"temperature\"] < 20:\n        return \"turn_on_heater\"\n    elif percept[\"temperature\"] > 25:\n        return \"turn_on_cooler\"\n    return \"do_nothing\"\n\nprint(reflex_agent({\"temperature\": 18}))  # -> turn_on_heater"
    },
    {
     "type": "text",
     "text": "A learning agent adds one more piece: it improves its behavior over time from feedback. That bridge — an agent that gets better with experience — is exactly where machine learning enters, which we'll meet in a later level."
    }
   ],
   "recap": "An agent senses and acts to achieve a goal; describe its task with PEAS, and pick a design (reflex, model-based, goal-based, utility, or learning) to match the problem's difficulty."
  },
  "quiz": [
   {
    "q": "What does the PEAS framework stand for?",
    "options": [
     "Perceive, Enact, Adjust, Sense",
     "Plan, Execute, Analyze, Store",
     "Performance, Environment, Actuators, Sensors",
     "Program, Engine, Agent, State"
    ],
    "answer": 2,
    "explain": "PEAS = Performance measure, Environment, Actuators, Sensors — the way we specify an agent's task."
   },
   {
    "q": "A simple reflex agent chooses actions based on:",
    "options": [
     "A learned utility score",
     "Random guessing",
     "Long-term future planning",
     "Condition-action (if-then) rules on the current percept"
    ],
    "answer": 3,
    "explain": "Reflex agents map the current percept directly to an action using if-then rules."
   },
   {
    "q": "What extra capability defines a learning agent?",
    "options": [
     "It uses more sensors",
     "It improves its behavior from feedback over time",
     "It never stores internal state",
     "It only follows fixed rules"
    ],
    "answer": 1,
    "explain": "A learning agent improves with experience, which is where machine learning comes in."
   },
   {
    "q": "In a self-driving car, the cameras and radar are its:",
    "options": [
     "Goals",
     "Sensors",
     "Performance measure",
     "Actuators"
    ],
    "answer": 1,
    "explain": "Cameras and radar are sensors — how the agent perceives its environment."
   }
  ]
 },
 "ai-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Many AI problems become 'find a path from where you are to where you want to be.' We model this as a search problem with four parts: an initial state, a set of actions, a transition model (what each action does), and a goal test. The set of all reachable states forms a graph the agent explores."
    },
    {
     "type": "text",
     "text": "Uninformed search knows nothing extra about the goal's location. Breadth-First Search (BFS) explores level by level and finds the shortest path in steps, but uses lots of memory. Depth-First Search (DFS) plunges deep first, using little memory but risking long or infinite detours."
    },
    {
     "type": "tip",
     "text": "Analogy: BFS is like ripples spreading evenly on a pond; DFS is like following one corridor of a maze to its end before backtracking."
    },
    {
     "type": "text",
     "text": "Informed (heuristic) search uses a hint — a heuristic function h(n) that estimates the cost from a node to the goal. A* search combines the real cost so far, g(n), with the estimate h(n), choosing the node with the lowest f(n) = g(n) + h(n). If the heuristic never overestimates (it's 'admissible'), A* is guaranteed to find the cheapest path."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from queue import PriorityQueue\n\ndef a_star(start, goal, neighbors, h):\n    frontier = PriorityQueue()\n    frontier.put((0, start))\n    cost = {start: 0}\n    while not frontier.empty():\n        _, node = frontier.get()\n        if node == goal:\n            return cost[node]\n        for nxt, step in neighbors(node):\n            g = cost[node] + step\n            if nxt not in cost or g < cost[nxt]:\n                cost[nxt] = g\n                frontier.put((g + h(nxt, goal), nxt))\n    return None"
    },
    {
     "type": "text",
     "text": "For games and adversarial problems (chess, tic-tac-toe), we use minimax: assume the opponent plays their best move, and pick the move that maximizes your worst-case outcome. Alpha-beta pruning speeds this up by skipping branches that can't possibly change the decision."
    }
   ],
   "recap": "Frame problems as searching a state graph; BFS/DFS are uninformed, A* uses an admissible heuristic f=g+h to find optimal paths, and minimax handles two-player games."
  },
  "quiz": [
   {
    "q": "In A* search, the evaluation function is:",
    "options": [
     "f(n) = g(n) only",
     "f(n) = g(n) + h(n)",
     "f(n) = g(n) × h(n)",
     "f(n) = h(n) only"
    ],
    "answer": 1,
    "explain": "A* adds the cost so far g(n) to the heuristic estimate h(n): f(n) = g(n) + h(n)."
   },
   {
    "q": "A heuristic that never overestimates the true cost is called:",
    "options": [
     "Greedy",
     "Adversarial",
     "Admissible",
     "Random"
    ],
    "answer": 2,
    "explain": "An admissible heuristic never overestimates, which is what guarantees A* finds the optimal path."
   },
   {
    "q": "Which search explores level by level and finds the fewest-step path?",
    "options": [
     "Random walk",
     "Breadth-First Search",
     "Depth-First Search",
     "Minimax"
    ],
    "answer": 1,
    "explain": "BFS expands nodes level by level, so it finds the shortest path measured in steps."
   },
   {
    "q": "Minimax is mainly used for:",
    "options": [
     "Training neural networks",
     "Compressing files",
     "Two-player adversarial games",
     "Sorting numbers"
    ],
    "answer": 2,
    "explain": "Minimax picks moves assuming an optimal opponent, making it suited to two-player games."
   }
  ]
 },
 "ai-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some AI doesn't search for paths — it reasons about facts. A knowledge-based agent stores what it knows in a knowledge base (KB) as sentences in a formal language, then uses inference to derive new facts that logically follow. This is the 'symbolic' or 'good old-fashioned AI' tradition."
    },
    {
     "type": "text",
     "text": "Propositional logic uses true/false statements combined with AND, OR, NOT, and IMPLIES. From 'If it rains, the ground is wet' and 'It is raining,' we can infer 'the ground is wet.' That step — deriving a conclusion guaranteed by the premises — is called entailment, and the rule used here is modus ponens."
    },
    {
     "type": "tip",
     "text": "Analogy: A knowledge base is like a detective's corkboard of facts and rules; inference is drawing the string that connects clues to reach a conclusion no single clue stated outright."
    },
    {
     "type": "text",
     "text": "Propositional logic is limited because it can't talk about objects and relationships generally. First-order logic (predicate logic) adds objects, predicates, and quantifiers like 'for all' (∀) and 'there exists' (∃). This lets us say 'All humans are mortal' once, instead of writing a separate fact for every person."
    },
    {
     "type": "code",
     "lang": "prolog",
     "code": "% Facts and a rule in Prolog\nhuman(socrates).\nmortal(X) :- human(X).   % if X is human then X is mortal\n\n% Query: ?- mortal(socrates).\n% Prolog answers: true"
    },
    {
     "type": "text",
     "text": "The real world is rarely fully certain, so modern reasoning often uses probability. Bayesian networks represent variables and their dependencies as a graph and let an agent update beliefs when new evidence arrives — for example, a medical system revising the chance of a disease after a positive test. Pure logic says 'true/false'; probabilistic reasoning says 'how likely.'"
    }
   ],
   "recap": "Knowledge-based agents store facts and infer new ones; propositional and first-order logic give exact entailment, while Bayesian networks handle uncertainty by updating probabilities from evidence."
  },
  "quiz": [
   {
    "q": "The inference rule that concludes 'B' from 'A implies B' and 'A' is:",
    "options": [
     "Backpropagation",
     "Modus ponens",
     "Gradient descent",
     "Alpha-beta pruning"
    ],
    "answer": 1,
    "explain": "Modus ponens derives B when both 'A implies B' and 'A' are known to be true."
   },
   {
    "q": "What does first-order logic add over propositional logic?",
    "options": [
     "Neural network layers",
     "Random numbers",
     "Objects, predicates, and quantifiers (∀, ∃)",
     "Faster computers"
    ],
    "answer": 2,
    "explain": "First-order logic introduces objects, predicates, and quantifiers so general rules apply to all objects."
   },
   {
    "q": "Bayesian networks are mainly used to:",
    "options": [
     "Sort a knowledge base alphabetically",
     "Replace all logic with search",
     "Guarantee absolutely certain conclusions",
     "Reason under uncertainty by updating probabilities"
    ],
    "answer": 3,
    "explain": "Bayesian networks model dependencies and update belief probabilities as new evidence arrives."
   },
   {
    "q": "When a conclusion is guaranteed to be true whenever the premises are, we say the premises:",
    "options": [
     "Overfit the conclusion",
     "Prune the conclusion",
     "Randomize the conclusion",
     "Entail the conclusion"
    ],
    "answer": 3,
    "explain": "Entailment means the conclusion necessarily follows from the premises."
   }
  ]
 },
 "ai-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Instead of hand-coding every rule, machine learning lets a system learn patterns from data. You show it examples, it builds a model, and the model makes predictions on new, unseen inputs. ML is one powerful approach within AI — especially useful when the rules are too complex or fuzzy to write by hand (like recognizing a cat in a photo)."
    },
    {
     "type": "text",
     "text": "There are three main styles. Supervised learning trains on labeled examples (emails tagged spam/not-spam) to predict labels for new data. Unsupervised learning finds structure in unlabeled data (grouping customers into clusters). Reinforcement learning learns by trial and error, receiving rewards or penalties — how agents learn to play games or control robots."
    },
    {
     "type": "tip",
     "text": "Analogy: Supervised learning is studying with an answer key; unsupervised learning is sorting a pile of photos with no labels; reinforcement learning is training a pet with treats."
    },
    {
     "type": "text",
     "text": "Learning works by minimizing error. The model makes predictions, a loss function measures how wrong they are, and an optimizer (like gradient descent) nudges the model's parameters to reduce that loss, step by step. Deep learning stacks many layers of these adjustable units — neural networks — to learn very rich patterns."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.linear_model import LogisticRegression\n\n# X = features, y = labels (0/1)\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)          # learn from labeled data\npreds = model.predict(X_test)        # predict on new data\naccuracy = (preds == y_test).mean()\nprint(\"accuracy:\", accuracy)"
    },
    {
     "type": "text",
     "text": "The central challenge is generalization. A model that memorizes the training data but fails on new data is overfitting; one too simple to capture the pattern is underfitting. We test on held-out data the model never saw during training to check it truly learned, not just memorized."
    }
   ],
   "recap": "ML learns patterns from data instead of hand-coded rules; supervised/unsupervised/reinforcement are the main styles, training minimizes a loss, and the real goal is generalizing to new data without overfitting."
  },
  "quiz": [
   {
    "q": "Which learning style uses labeled examples to predict labels for new data?",
    "options": [
     "Reinforcement learning",
     "Supervised learning",
     "Unsupervised learning",
     "No learning at all"
    ],
    "answer": 1,
    "explain": "Supervised learning trains on labeled data (inputs paired with correct outputs)."
   },
   {
    "q": "A model that memorizes training data but performs poorly on new data is:",
    "options": [
     "Underfitting",
     "Overfitting",
     "Generalizing",
     "Clustering"
    ],
    "answer": 1,
    "explain": "Overfitting means the model fits training data too closely and fails to generalize."
   },
   {
    "q": "What does a loss function measure during training?",
    "options": [
     "How fast the computer runs",
     "How wrong the model's predictions are",
     "The size of the dataset",
     "How many layers the network has"
    ],
    "answer": 1,
    "explain": "The loss function quantifies prediction error, which the optimizer then tries to reduce."
   },
   {
    "q": "Learning to play a game by receiving rewards and penalties is an example of:",
    "options": [
     "Supervised learning",
     "Reinforcement learning",
     "Unsupervised learning",
     "Rule-based logic"
    ],
    "answer": 1,
    "explain": "Reinforcement learning improves behavior through trial and error guided by rewards."
   }
  ]
 },
 "ai-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "AI shows up in tools you use daily. Computer vision powers face unlock, medical image scanning, and self-driving perception. Natural Language Processing (NLP) drives translation, chatbots, and search. Recommender systems suggest what to watch or buy. Behind each is one of the techniques from earlier levels — usually machine learning trained on lots of data."
    },
    {
     "type": "text",
     "text": "A major recent leap is the large language model (LLM) — a neural network trained on huge amounts of text to predict the next word. By learning statistical patterns of language, it can answer questions, write code, and summarize documents. It doesn't 'look up' answers; it generates likely text, which is why it can sometimes produce confident-sounding but wrong output ('hallucination')."
    },
    {
     "type": "tip",
     "text": "Practical tip: Treat an AI system's output as a helpful draft to verify, not a final authority — especially for facts, code, and anything safety-critical."
    },
    {
     "type": "text",
     "text": "Building a real AI application is a pipeline, not just a model: collect and clean data, choose and train a model, evaluate it honestly, deploy it, then monitor it in production. Real data is messy, and a model's accuracy can quietly drift as the world changes (called data drift), so monitoring and retraining matter as much as the initial build."
    },
    {
     "type": "text",
     "text": "As a computer-engineering student, you rarely build models from scratch. You'll use libraries (scikit-learn, PyTorch, TensorFlow) and cloud APIs, and much of the real skill is problem framing, good data, sensible evaluation metrics, and integrating the model into a reliable software system."
    }
   ],
   "recap": "AI powers vision, NLP, recommendations, and LLMs; real applications are end-to-end pipelines (data → train → evaluate → deploy → monitor) where data quality, honest evaluation, and drift monitoring matter as much as the model."
  },
  "quiz": [
   {
    "q": "When an LLM produces confident but false information, this is called:",
    "options": [
     "Hallucination",
     "Pruning",
     "Overfitting",
     "Entailment"
    ],
    "answer": 0,
    "explain": "Hallucination is when a language model generates plausible-sounding but incorrect output."
   },
   {
    "q": "A large language model fundamentally works by:",
    "options": [
     "Looking answers up in a database",
     "Predicting likely next words from learned patterns",
     "Following hand-written grammar rules",
     "Searching the web in real time"
    ],
    "answer": 1,
    "explain": "LLMs are trained to predict the next token, generating text from statistical language patterns."
   },
   {
    "q": "When a deployed model's accuracy degrades because the world changed, this is:",
    "options": [
     "Modus ponens",
     "A heuristic",
     "Data drift",
     "Backtracking"
    ],
    "answer": 2,
    "explain": "Data drift is when real-world data shifts away from the training data, hurting accuracy."
   },
   {
    "q": "In a real AI project, which step comes AFTER deploying the model?",
    "options": [
     "Collecting the raw data",
     "Choosing the model type",
     "Framing the problem",
     "Monitoring it in production"
    ],
    "answer": 3,
    "explain": "After deployment you monitor the model (and retrain) since performance can drift over time."
   }
  ]
 },
 "ai-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Powerful AI raises hard questions that engineers, not just lawyers, must answer. Because models learn from historical data, they can absorb and amplify human bias — a hiring model trained on past decisions may quietly discriminate. Fairness means actively checking that a system doesn't systematically disadvantage groups, not assuming 'the data is neutral.' Data is a mirror of the past, flaws included."
    },
    {
     "type": "text",
     "text": "Many strong models are 'black boxes' — accurate but hard to explain. Explainability (XAI) is the effort to make a model's decisions understandable, which matters enormously when AI denies a loan or flags a medical case. A related principle is accountability: a human or organization must remain responsible for an AI's decisions; 'the algorithm did it' is not an acceptable answer."
    },
    {
     "type": "tip",
     "text": "Guiding question for any AI you build: 'Who could this harm, how would we detect it, and who is responsible when it goes wrong?' Ask it before deployment, not after."
    },
    {
     "type": "text",
     "text": "Other core concerns include privacy (models trained on personal data can leak or memorize it), security (adversarial inputs can fool a model, and deepfakes can deceive people), and transparency (users deserve to know when they're interacting with AI). These aren't optional extras — regulations like the EU AI Act increasingly make them legal requirements."
    },
    {
     "type": "text",
     "text": "Responsible AI is a practice, not a checkbox: diverse and representative data, bias testing across groups, human oversight for high-stakes decisions, clear documentation, and the humility to not deploy a system when the risks outweigh the benefits. As a future engineer, these decisions will land on your desk — technical skill and ethical judgment are two halves of the same job."
    }
   ],
   "recap": "AI can amplify bias, obscure its reasoning, and threaten privacy and security; responsible AI demands fairness testing, explainability, human accountability, transparency, and the judgment to sometimes not deploy."
  },
  "quiz": [
   {
    "q": "Why can an AI model trained on historical data become biased?",
    "options": [
     "Models cannot be biased",
     "Data is always perfectly neutral",
     "It can absorb and amplify past human bias in the data",
     "Bias only comes from the hardware"
    ],
    "answer": 2,
    "explain": "Models learn patterns from historical data, so past human biases get absorbed and amplified."
   },
   {
    "q": "The effort to make a model's decisions understandable to humans is called:",
    "options": [
     "Reinforcement",
     "Overfitting",
     "Pruning",
     "Explainability (XAI)"
    ],
    "answer": 3,
    "explain": "Explainable AI (XAI) makes black-box model decisions interpretable, crucial for high-stakes uses."
   },
   {
    "q": "The principle that a human or organization must remain answerable for an AI's decisions is:",
    "options": [
     "Heuristics",
     "Generalization",
     "Entailment",
     "Accountability"
    ],
    "answer": 3,
    "explain": "Accountability means humans stay responsible — 'the algorithm did it' isn't an acceptable defense."
   },
   {
    "q": "Which is a genuine practice of responsible AI?",
    "options": [
     "Deploy every model regardless of risk",
     "Hide from users that AI is involved",
     "Assume the training data needs no checking",
     "Test for bias across groups and keep human oversight"
    ],
    "answer": 3,
    "explain": "Responsible AI includes bias testing across groups and human oversight for high-stakes decisions."
   }
  ]
 },
 "ai-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Chess, tic-tac-toe, and checkers are games where two players take turns and one player's gain is the other's loss. AI handles this with adversarial search: instead of searching for a single best path, the AI must plan while assuming the opponent always makes the move that hurts it most."
    },
    {
     "type": "text",
     "text": "The classic algorithm is minimax. One player is MAX, trying to get the highest score; the other is MIN, trying to get the lowest score. The algorithm builds a tree of future moves, scores the bottom (leaf) positions, and then bubbles values up: MAX layers pick the maximum child, MIN layers pick the minimum child. The root's best move is whichever child gives MAX the best guaranteed outcome."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def minimax(node, depth, is_max):\n    if depth == 0 or node.is_terminal():\n        return node.value()\n    if is_max:\n        best = float('-inf')\n        for child in node.children():\n            best = max(best, minimax(child, depth - 1, False))\n        return best\n    else:\n        best = float('inf')\n        for child in node.children():\n            best = min(best, minimax(child, depth - 1, True))\n        return best"
    },
    {
     "type": "text",
     "text": "Minimax works but explores every branch, which is too slow for games like chess. Alpha-beta pruning speeds it up without changing the answer: it keeps track of the best value MAX can already guarantee (alpha) and the best value MIN can already guarantee (beta). If a branch can never beat what's already guaranteed, it is skipped entirely - the tree is 'pruned'."
    },
    {
     "type": "tip",
     "text": "Exam trick: alpha-beta pruning never changes the final decision, it only skips branches that cannot affect it. If asked 'does alpha-beta give a different answer than minimax?' the answer is no."
    }
   ],
   "recap": "Minimax scores a game tree assuming an optimal opponent, alternating max and min layers; alpha-beta pruning skips branches that cannot change the result, making the same search much faster."
  },
  "quiz": [
   {
    "q": "In minimax, who picks the move with the lowest score at their layer?",
    "options": [
     "Neither, it's random",
     "MAX",
     "MIN",
     "Both players equally"
    ],
    "answer": 2,
    "explain": "MIN represents the opponent, who always tries to minimize MAX's score."
   },
   {
    "q": "What does alpha-beta pruning change about minimax's final decision?",
    "options": [
     "It always finds a better move",
     "Nothing, the decision stays the same but faster",
     "It only works on two-move games",
     "It ignores the opponent's best moves"
    ],
    "answer": 1,
    "explain": "Alpha-beta pruning gives the exact same result as minimax, just by skipping branches that cannot affect it."
   },
   {
    "q": "Alpha-beta pruning skips a branch when:",
    "options": [
     "The node has no children",
     "The branch is deeper than 3 moves",
     "It contains a win for MIN",
     "It cannot possibly change the final decision"
    ],
    "answer": 3,
    "explain": "A branch is pruned once it is proven it can never affect the outcome already guaranteed higher up the tree."
   }
  ]
 },
 "ai-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some problems aren't about finding a path or beating an opponent - they're about assigning values to variables so that a set of rules (constraints) all hold. Sudoku, map coloring, and exam timetabling are all Constraint Satisfaction Problems (CSPs): a set of variables, a domain of possible values for each, and constraints that restrict which combinations are allowed."
    },
    {
     "type": "text",
     "text": "A basic approach is backtracking search: pick an unassigned variable, try a value, check that no constraint is broken, and recurse. If you hit a dead end, backtrack and try a different value. This is exhaustive but can be made much faster with two ideas: constraint propagation, which removes impossible values early (if a Sudoku cell can only be 7, remove 7 from its row, column, and box), and heuristics like choosing the most constrained variable first (the cell with fewest legal values left)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def backtrack(assignment, variables, domains, constraints):\n    if len(assignment) == len(variables):\n        return assignment\n    var = next(v for v in variables if v not in assignment)\n    for value in domains[var]:\n        assignment[var] = value\n        if constraints(assignment):\n            result = backtrack(assignment, variables, domains, constraints)\n            if result:\n                return result\n        del assignment[var]\n    return None"
    },
    {
     "type": "tip",
     "text": "Map coloring is the textbook CSP example: variables are regions, domain is a set of colors, and the constraint is 'neighboring regions must differ.' If it appears in your exam, draw the constraint graph first."
    }
   ],
   "recap": "A CSP assigns values to variables under constraints; backtracking search with constraint propagation and smart variable ordering solves problems like Sudoku and map coloring far faster than brute force."
  },
  "quiz": [
   {
    "q": "In a CSP, what is a 'domain'?",
    "options": [
     "The final solution",
     "The search tree depth",
     "The set of possible values a variable can take",
     "The set of constraints"
    ],
    "answer": 2,
    "explain": "A domain lists the legal values a given variable is allowed to be assigned."
   },
   {
    "q": "Removing values from a variable's domain early because they can never satisfy a constraint is called:",
    "options": [
     "Alpha-beta pruning",
     "Constraint propagation",
     "Overfitting",
     "Backtracking"
    ],
    "answer": 1,
    "explain": "Constraint propagation eliminates impossible values ahead of time so the search wastes less time."
   },
   {
    "q": "Which classic problem is a textbook example of a CSP?",
    "options": [
     "Word prediction",
     "Image classification",
     "Chess endgame scoring",
     "Map coloring"
    ],
    "answer": 3,
    "explain": "Map coloring assigns colors (values) to regions (variables) so no two neighbors share a color - a pure CSP."
   }
  ]
 },
 "ai-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real-world knowledge is rarely certain. 'If it's cloudy, it will rain' is usually true but not always. AI needs a way to reason with degrees of belief instead of hard true/false rules, and the standard tool for that is probability."
    },
    {
     "type": "text",
     "text": "Bayes' theorem lets an AI update a belief when new evidence arrives. It says P(A|B) = P(B|A) * P(A) / P(B): the probability of A given evidence B depends on how likely B is if A is true, how likely A was beforehand, and how likely B is overall. A spam filter uses exactly this - it updates 'probability this email is spam' after seeing words like 'lottery' or 'free.'"
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def bayes(p_a, p_b_given_a, p_b):\n    # P(A|B) = P(B|A) * P(A) / P(B)\n    return (p_b_given_a * p_a) / p_b\n\n# Example: probability an email is spam given it contains 'free'\np_spam = 0.3\np_free_given_spam = 0.6\np_free = 0.25\nprint(bayes(p_spam, p_free_given_spam, p_free))"
    },
    {
     "type": "text",
     "text": "When many uncertain variables affect each other, a Bayesian network organizes them as a graph: nodes are variables, arrows show direct influence, and each node stores a probability table conditioned on its parents. This lets an AI compute the probability of one thing given evidence about others, without needing to store every possible combination directly."
    },
    {
     "type": "tip",
     "text": "Remember the order in Bayes' theorem: it flips the conditioning. P(disease|symptom) is not the same as P(symptom|disease) - confusing the two is a classic exam and real-world mistake."
    }
   ],
   "recap": "AI reasons under uncertainty using probability; Bayes' theorem updates a belief given new evidence, and Bayesian networks extend this to graphs of interdependent variables."
  },
  "quiz": [
   {
    "q": "Bayes' theorem is used to:",
    "options": [
     "Predict the next word only",
     "Color a map with no conflicts",
     "Update a probability given new evidence",
     "Prune a game tree"
    ],
    "answer": 2,
    "explain": "Bayes' theorem computes an updated (posterior) probability of a hypothesis after observing evidence."
   },
   {
    "q": "In P(A|B) = P(B|A) * P(A) / P(B), what does P(A) represent?",
    "options": [
     "The probability of no evidence at all",
     "The probability of B given A",
     "The prior probability of A, before seeing evidence",
     "The final answer"
    ],
    "answer": 2,
    "explain": "P(A) is the prior belief in A before any evidence B is taken into account."
   },
   {
    "q": "A Bayesian network represents variables and their dependencies as:",
    "options": [
     "A decision tree only",
     "A single equation",
     "A flat list of rules",
     "A graph with conditional probability tables"
    ],
    "answer": 3,
    "explain": "Bayesian networks use a graph structure where each node holds a probability table conditioned on its parent nodes."
   }
  ]
 },
 "ai-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Classical logic only allows true or false. But real descriptions like 'the water is hot' or 'the car is fast' are matters of degree - water at 50 degrees C is sort of hot, not fully hot or fully cold. Fuzzy logic, introduced by Lotfi Zadeh, allows a statement to be partially true, with a membership value between 0 (completely false) and 1 (completely true)."
    },
    {
     "type": "text",
     "text": "Instead of a sharp cutoff, a fuzzy set uses a membership function. For 'hot,' water at 20 degrees C might have membership 0.1, at 60 degrees membership 0.6, and at 95 degrees membership 0.95. A fuzzy system takes crisp inputs, converts them to membership degrees (fuzzification), applies IF-THEN rules using those degrees, and converts the combined result back into one crisp output (defuzzification)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "def hot_membership(temp_c):\n    if temp_c <= 20:\n        return 0.0\n    if temp_c >= 80:\n        return 1.0\n    return (temp_c - 20) / 60  # rises linearly between 20 and 80\n\nprint(hot_membership(50))  # partly hot, e.g. 0.5"
    },
    {
     "type": "text",
     "text": "Fuzzy logic is widely used in control systems that must react smoothly rather than in sudden jumps - washing machines choosing wash time based on 'how dirty' and 'how much' laundry is, air conditioners adjusting cooling gradually, or anti-lock braking systems in cars."
    },
    {
     "type": "tip",
     "text": "If a question says 'partial truth' or 'degree of membership between 0 and 1,' the answer is fuzzy logic, not probability - probability is about uncertainty of an event, fuzzy logic is about vagueness of a description."
    }
   ],
   "recap": "Fuzzy logic replaces strict true/false with degrees of membership between 0 and 1, letting systems reason with vague terms like 'hot' or 'fast' and react smoothly rather than abruptly."
  },
  "quiz": [
   {
    "q": "In fuzzy logic, a membership value of 0.7 for 'hot' means:",
    "options": [
     "It is definitely not hot",
     "The temperature sensor is broken",
     "It is hot to a degree of 0.7 out of 1",
     "It is 70% likely to happen"
    ],
    "answer": 2,
    "explain": "Membership values express degree of truth of a description, not probability of an event."
   },
   {
    "q": "The step that converts a combined fuzzy result back into one crisp number is called:",
    "options": [
     "Fuzzification",
     "Pruning",
     "Defuzzification",
     "Backtracking"
    ],
    "answer": 2,
    "explain": "Defuzzification turns the fuzzy rule outputs back into a single usable crisp value."
   },
   {
    "q": "Which is a typical real-world use of fuzzy logic?",
    "options": [
     "Playing chess optimally",
     "Encrypting passwords",
     "A washing machine adjusting wash time smoothly",
     "Sorting a list of numbers"
    ],
    "answer": 2,
    "explain": "Fuzzy logic suits control systems needing smooth, gradual responses like appliance control, not exact optimization."
   }
  ]
 },
 "ai-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before machine learning became dominant, AI's biggest practical success was the expert system: a program that captures a human expert's knowledge as explicit rules and uses them to give advice or diagnoses, such as MYCIN, which suggested antibiotic treatments in the 1970s."
    },
    {
     "type": "text",
     "text": "An expert system has two main parts. The knowledge base stores facts and IF-THEN rules gathered from human experts (a knowledge engineer interviews the expert and encodes their reasoning). The inference engine applies those rules to the current facts to reach a conclusion, typically using forward chaining (start from known facts, fire rules whose conditions are met, add new facts, repeat until nothing new follows) or backward chaining (start from a goal and work backward, checking which rules could prove it)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "rules = [\n    ({'fever', 'cough'}, 'flu'),\n    ({'flu', 'body_ache'}, 'rest_and_fluids'),\n]\nfacts = {'fever', 'cough', 'body_ache'}\n\nchanged = True\nwhile changed:\n    changed = False\n    for conditions, conclusion in rules:\n        if conditions <= facts and conclusion not in facts:\n            facts.add(conclusion)\n            changed = True\nprint(facts)  # forward chaining adds 'flu', then 'rest_and_fluids'"
    },
    {
     "type": "tip",
     "text": "Forward chaining is data-driven ('what can I conclude from these facts?'); backward chaining is goal-driven ('what facts would prove this specific goal?'). Medical diagnosis systems often use forward chaining; systems answering a specific query use backward chaining."
    },
    {
     "type": "text",
     "text": "Expert systems are explainable - they can show exactly which rules fired to reach a conclusion - but they are brittle: they only know what was explicitly coded and cannot learn from new cases, which is one reason machine learning approaches later became preferred for pattern-heavy problems."
    }
   ],
   "recap": "An expert system pairs a rule-based knowledge base with an inference engine that reasons forward from facts or backward from a goal; it is explainable but cannot learn beyond its coded rules."
  },
  "quiz": [
   {
    "q": "The two main parts of an expert system are:",
    "options": [
     "A knowledge base and an inference engine",
     "A search tree and a heuristic",
     "A camera and a classifier",
     "A neural network and a dataset"
    ],
    "answer": 0,
    "explain": "The knowledge base holds facts and rules; the inference engine applies them to reach conclusions."
   },
   {
    "q": "Starting from known facts and firing rules to see what new facts follow is called:",
    "options": [
     "Forward chaining",
     "Alpha-beta pruning",
     "Backward chaining",
     "Defuzzification"
    ],
    "answer": 0,
    "explain": "Forward chaining is data-driven: it starts from facts and derives new conclusions."
   },
   {
    "q": "A major limitation of classic expert systems compared to machine learning is that they:",
    "options": [
     "Cannot explain their reasoning",
     "Cannot learn new patterns beyond their coded rules",
     "Require huge amounts of training data",
     "Cannot run on a computer"
    ],
    "answer": 1,
    "explain": "Expert systems only reason with rules a human explicitly wrote in; they don't learn from new examples like ML models do."
   }
  ]
 },
 "ai-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Natural Language Processing (NLP) is the branch of AI that lets computers work with human language - text and speech. It powers search engines, translation, chatbots, and the large language models you already met earlier in this track."
    },
    {
     "type": "text",
     "text": "Before any deep model runs, text usually goes through a pipeline. Tokenization splits text into words or sub-words ('AI is fun' becomes ['AI', 'is', 'fun']). Stop-word removal drops very common low-information words like 'is' or 'the'. Stemming/lemmatization reduces words to a base form ('running' to 'run') so 'run,' 'runs,' and 'running' are treated as related."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "text = \"AI is transforming how we build software\"\ntokens = text.lower().split()\nstop_words = {'is', 'how', 'we'}\nfiltered = [t for t in tokens if t not in stop_words]\nprint(filtered)  # ['ai', 'transforming', 'build', 'software']"
    },
    {
     "type": "text",
     "text": "Once text is tokenized, it must become numbers for a model to use. Older methods like bag-of-words just count word frequencies, ignoring order. Modern NLP uses word embeddings, where each word becomes a vector of numbers such that similar words end up close together in that vector space (the vector for 'king' minus 'man' plus 'woman' lands near 'queen'). Transformers, the architecture behind modern LLMs, go further by using attention to weigh how much each word in a sentence should influence the meaning of every other word."
    },
    {
     "type": "tip",
     "text": "If asked to name the architecture behind ChatGPT-style models, the answer is 'Transformer,' and its key mechanism is 'self-attention' - not 'neural network' alone, which is too generic for full marks."
    }
   ],
   "recap": "NLP pipelines tokenize, clean, and vectorize text (via embeddings), and modern systems use transformer architectures with self-attention to understand relationships between words in context."
  },
  "quiz": [
   {
    "q": "Splitting a sentence into individual words or sub-words is called:",
    "options": [
     "Backtracking",
     "Tokenization",
     "Defuzzification",
     "Pruning"
    ],
    "answer": 1,
    "explain": "Tokenization is the first NLP step, breaking raw text into tokens the pipeline can process."
   },
   {
    "q": "A word embedding represents a word as:",
    "options": [
     "A single true/false value",
     "A vector of numbers capturing meaning, with similar words placed nearby",
     "A fixed dictionary definition",
     "A rule in an expert system"
    ],
    "answer": 1,
    "explain": "Embeddings map words to vectors so that semantically similar words are close together in vector space."
   },
   {
    "q": "The mechanism that lets a transformer weigh how much each word should influence every other word in a sentence is:",
    "options": [
     "Backward chaining",
     "Alpha-beta pruning",
     "Self-attention",
     "Stemming"
    ],
    "answer": 2,
    "explain": "Self-attention is the core transformer mechanism that relates each word to every other word in context."
   }
  ]
 },
 "ai-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A neural network is loosely inspired by neurons in the brain. The basic unit is a perceptron: it takes several numeric inputs, multiplies each by a weight, adds a bias, sums the result, and passes that sum through an activation function to produce an output. Stacking many of these units in layers - an input layer, one or more hidden layers, and an output layer - gives a deep neural network, and 'deep learning' just means using networks with many hidden layers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\n\ndef perceptron(inputs, weights, bias):\n    total = sum(i * w for i, w in zip(inputs, weights)) + bias\n    return sigmoid(total)\n\nprint(perceptron([0.5, 0.8], [0.4, -0.2], 0.1))"
    },
    {
     "type": "text",
     "text": "Activation functions like sigmoid, ReLU, or tanh add non-linearity - without them, stacking layers would collapse into one big linear equation, unable to learn complex patterns like image recognition or language. The network learns by comparing its output to the correct answer using a loss function, then adjusting every weight slightly to reduce that loss. This adjustment process is called backpropagation: the error is propagated backward from the output layer to earlier layers using the chain rule from calculus, and an algorithm called gradient descent nudges each weight in the direction that reduces the loss."
    },
    {
     "type": "tip",
     "text": "Common exam mix-up: a perceptron with no activation function (or a linear one) cannot solve problems that aren't linearly separable, like XOR - this is a famous historical limitation that non-linear activations and multiple layers fixed."
    },
    {
     "type": "text",
     "text": "Specialized architectures suit specialized data: Convolutional Neural Networks (CNNs) scan small local patches of an image with shared filters, making them excellent for computer vision; Recurrent Neural Networks (RNNs) and their successors process sequences step by step, which suited early NLP before transformers took over."
    }
   ],
   "recap": "A neural network stacks layers of perceptrons with non-linear activations; it learns by backpropagating error from a loss function and adjusting weights via gradient descent, with CNNs and RNNs specialized for images and sequences respectively."
  },
  "quiz": [
   {
    "q": "Why do neural networks need non-linear activation functions?",
    "options": [
     "To remove the need for a loss function",
     "To make training slower on purpose",
     "To avoid using weights",
     "Without them, stacked layers collapse into one linear equation"
    ],
    "answer": 3,
    "explain": "Non-linear activations let networks model complex, non-linear patterns; without them, layers combine into a single linear function."
   },
   {
    "q": "Backpropagation is used to:",
    "options": [
     "Tokenize input text",
     "Prune a game search tree",
     "Defuzzify a fuzzy output",
     "Propagate error backward and update weights to reduce loss"
    ],
    "answer": 3,
    "explain": "Backpropagation computes how much each weight contributed to the error, so gradient descent can adjust weights to reduce it."
   },
   {
    "q": "Which network architecture is best suited to image data because it scans local patches with shared filters?",
    "options": [
     "Bayesian network",
     "Expert system",
     "Convolutional Neural Network (CNN)",
     "Recurrent Neural Network (RNN)"
    ],
    "answer": 2,
    "explain": "CNNs use convolutional filters that scan local regions of an image, making them well-suited to vision tasks."
   }
  ]
 },
 "ai-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some problems have search spaces too huge and irregular for exact methods, but a good-enough solution found quickly is valuable. Genetic algorithms borrow the idea of natural evolution: keep a population of candidate solutions and let the fittest ones survive and combine to produce better solutions over generations."
    },
    {
     "type": "text",
     "text": "Each candidate solution is encoded as a 'chromosome,' often a string of numbers or bits. The algorithm runs in a loop: evaluate every chromosome with a fitness function (how good is this solution?), select the fitter ones as parents, combine pairs of parents through crossover (swap parts of their chromosomes to make children), and apply mutation (randomly flip a small part of a chromosome) to keep some diversity and avoid getting stuck. Repeat for many generations."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import random\n\ndef fitness(chromosome):\n    return sum(chromosome)  # example: maximize number of 1s\n\ndef crossover(parent1, parent2):\n    point = random.randint(1, len(parent1) - 1)\n    return parent1[:point] + parent2[point:]\n\ndef mutate(chromosome, rate=0.1):\n    return [1 - g if random.random() < rate else g for g in chromosome]"
    },
    {
     "type": "tip",
     "text": "Mutation's job is to keep diversity and avoid getting permanently stuck on one 'good enough' solution (a local optimum) - if a question asks 'why mutate at all if crossover already combines good parents,' that's the answer."
    },
    {
     "type": "text",
     "text": "Genetic algorithms are used for scheduling, route optimization, and tuning parameters where the search space is too large to check exhaustively, and where an approximate but strong answer found in reasonable time beats a perfect answer that takes forever."
    }
   ],
   "recap": "Genetic algorithms evolve a population of candidate solutions across generations using fitness-based selection, crossover, and mutation, finding strong approximate solutions in huge search spaces."
  },
  "quiz": [
   {
    "q": "In a genetic algorithm, the fitness function is used to:",
    "options": [
     "Measure how good a candidate solution is",
     "Randomly flip bits",
     "Encode a chromosome as bits",
     "Combine two parent chromosomes"
    ],
    "answer": 0,
    "explain": "Fitness scores each candidate solution so the algorithm knows which ones deserve to become parents."
   },
   {
    "q": "Combining parts of two parent chromosomes to form a child is called:",
    "options": [
     "Defuzzification",
     "Crossover",
     "Mutation",
     "Backpropagation"
    ],
    "answer": 1,
    "explain": "Crossover mixes genetic material from two parents to produce a new candidate solution."
   },
   {
    "q": "Why do genetic algorithms include mutation?",
    "options": [
     "To slow down convergence for no reason",
     "To guarantee the exact optimal answer every time",
     "To keep diversity and avoid getting stuck on one local optimum",
     "To remove the need for a fitness function"
    ],
    "answer": 2,
    "explain": "Mutation introduces random variation, helping the population avoid settling permanently on a merely 'good enough' solution."
   }
  ]
 },
 "ai-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Search finds a path through states one step at a time, but many real tasks - like a robot arm assembling a product, or a delivery schedule - need a whole sequence of actions decided in advance, with each action changing the world in a known way. This is AI planning: given a starting state, a goal, and a set of possible actions, find an ordered sequence of actions that gets from start to goal."
    },
    {
     "type": "text",
     "text": "A common way to describe planning problems is STRIPS representation: each action has preconditions (what must be true before it can be done) and effects (what becomes true or false after it's done, split into an add-list and a delete-list). For example, the action 'pick up block A' might require 'hand is empty' and 'A is on the table,' and its effect adds 'holding A' and deletes 'hand is empty' and 'A is on the table.'"
    },
    {
     "type": "code",
     "lang": "python",
     "code": "action = {\n    'name': 'pick_up_A',\n    'preconditions': {'hand_empty', 'A_on_table'},\n    'add': {'holding_A'},\n    'delete': {'hand_empty', 'A_on_table'}\n}\n\ndef apply_action(state, action):\n    if not action['preconditions'] <= state:\n        raise ValueError('preconditions not met')\n    return (state - action['delete']) | action['add']"
    },
    {
     "type": "tip",
     "text": "The difference between search and planning that examiners love to test: search treats states as opaque and just finds a path, while planning reasons explicitly about actions' preconditions and effects, which is what lets a planner check whether an action is currently legal."
    },
    {
     "type": "text",
     "text": "Real planners must also handle ordering constraints (some actions must happen before others) and resource limits (only one robot arm available at a time). Hierarchical Task Network (HTN) planning breaks a big goal into smaller sub-tasks recursively, which scales better than reasoning about every low-level action at once, and is common in game AI and robotics."
    }
   ],
   "recap": "AI planning finds an ordered sequence of actions from a start state to a goal using representations like STRIPS (preconditions and add/delete effects), often organized hierarchically into sub-tasks for scalability."
  },
  "quiz": [
   {
    "q": "In STRIPS, the 'delete list' of an action specifies:",
    "options": [
     "What must be true before the action can run",
     "The fitness of the action",
     "What becomes false after the action runs",
     "The goal state"
    ],
    "answer": 2,
    "explain": "The delete list removes facts from the state that are no longer true once the action has been performed."
   },
   {
    "q": "What must be true before an action can legally be applied in STRIPS?",
    "options": [
     "Its delete-list",
     "The goal test",
     "Its add-list",
     "Its preconditions"
    ],
    "answer": 3,
    "explain": "Preconditions are the facts that must already hold in the current state for the action to be applicable."
   },
   {
    "q": "How does planning differ from plain search?",
    "options": [
     "Planning ignores the goal entirely",
     "There is no real difference",
     "Planning cannot handle sequences of actions",
     "Planning reasons explicitly about actions' preconditions and effects, not just opaque states"
    ],
    "answer": 3,
    "explain": "Planning represents actions structurally (preconditions/effects), letting it check legality and reason about the world explicitly, unlike generic search over opaque states."
   }
  ]
 },
 "ai-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Reinforcement Learning (RL) is a different way of learning from supervised machine learning: instead of being given correct answers, an agent learns by acting in an environment and receiving rewards or penalties, gradually discovering which actions lead to the best long-term outcome. This is how AlphaGo learned to play Go and how robots learn to walk."
    },
    {
     "type": "text",
     "text": "The core loop: the agent observes a state, chooses an action according to its policy (its strategy for picking actions), the environment returns a reward and a new state, and the agent uses that experience to improve its policy. The goal isn't to maximize the very next reward but the total reward over time, so an RL agent must sometimes take a lower immediate reward for a better long-term outcome - this is the credit assignment problem."
    },
    {
     "type": "text",
     "text": "A central trade-off is exploration versus exploitation: exploitation means taking the action currently believed best, while exploration means trying something new to discover if it's actually better. An agent that only exploits might get stuck on a mediocre strategy it found early and never discover the true best one."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import random\n\ndef choose_action(q_values, epsilon=0.1):\n    # epsilon-greedy: explore with probability epsilon, else exploit best known action\n    if random.random() < epsilon:\n        return random.choice(list(q_values.keys()))\n    return max(q_values, key=q_values.get)"
    },
    {
     "type": "tip",
     "text": "Q-learning is the RL algorithm most exam papers ask about by name: it learns a Q-value (expected future reward) for each state-action pair, and updates it using the reward just received plus the best Q-value of the next state, without needing a model of the environment."
    }
   ],
   "recap": "Reinforcement learning trains an agent through trial-and-error rewards rather than labeled examples, balancing exploration and exploitation to maximize long-term reward, often via algorithms like Q-learning."
  },
  "quiz": [
   {
    "q": "What signal does a reinforcement learning agent learn from, unlike supervised learning?",
    "options": [
     "A knowledge base of facts",
     "Rewards and penalties received from acting in an environment",
     "A fixed set of rules",
     "Labeled correct answers for every input"
    ],
    "answer": 1,
    "explain": "RL agents learn purely from reward feedback received through interaction, not from pre-labeled correct answers."
   },
   {
    "q": "The exploration-exploitation trade-off refers to:",
    "options": [
     "Deciding whether to prune a search tree",
     "Balancing trying new actions versus using the currently best-known action",
     "Choosing crossover versus mutation",
     "Choosing between forward and backward chaining"
    ],
    "answer": 1,
    "explain": "Exploitation uses the best-known action; exploration tries new actions to potentially discover something better."
   },
   {
    "q": "Q-learning updates a Q-value for a state-action pair using:",
    "options": [
     "The reward just received plus the best Q-value of the next state",
     "A fixed rule table written by an expert",
     "The fitness function of a genetic algorithm",
     "Only the very next reward, ignoring the future"
    ],
    "answer": 0,
    "explain": "Q-learning combines the immediate reward with an estimate of future value from the next state, so it accounts for long-term outcomes."
   }
  ]
 },
 "ai-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Computer vision is the field that lets machines interpret images and video - detecting objects, recognizing faces, reading handwriting, or guiding a self-driving car. A digital image is just a grid of pixels, each with numeric brightness or color values, and computer vision turns that raw grid into meaning."
    },
    {
     "type": "text",
     "text": "Classic techniques processed images with hand-designed filters: edge detection highlights sudden changes in brightness (where an object's outline likely is), and feature extraction picked out corners or distinctive patches to match between images. Modern computer vision is dominated by Convolutional Neural Networks (CNNs), which learn their own filters directly from labeled image data instead of relying on hand-crafted rules, and stack many convolutional layers so early layers detect simple edges while deeper layers detect complex shapes like eyes or wheels."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# a tiny illustration of a convolution: sliding a filter over a signal\ndef convolve_1d(signal, kernel):\n    k = len(kernel)\n    return [sum(signal[i + j] * kernel[j] for j in range(k))\n            for i in range(len(signal) - k + 1)]\n\nedge_kernel = [-1, 1]\nprint(convolve_1d([2, 2, 2, 9, 9, 9], edge_kernel))  # spikes where brightness jumps"
    },
    {
     "type": "text",
     "text": "Common computer vision tasks are worth telling apart: image classification labels the whole image ('this is a cat'); object detection finds and labels multiple objects with bounding boxes ('cat at these coordinates, dog at those'); and image segmentation labels every individual pixel by what object it belongs to, giving a precise outline rather than a box."
    },
    {
     "type": "tip",
     "text": "Exam distinction to memorize: classification = one label for the whole image, detection = boxes around objects, segmentation = pixel-level outlines. Mixing these up is the most common mistake students make."
    }
   ],
   "recap": "Computer vision turns pixel grids into meaning, moving from hand-designed filters to CNNs that learn their own features; classification, object detection, and segmentation are distinct tasks of increasing precision."
  },
  "quiz": [
   {
    "q": "Which computer vision task draws bounding boxes around multiple objects and labels each one?",
    "options": [
     "Defuzzification",
     "Image classification",
     "Object detection",
     "Edge detection only"
    ],
    "answer": 2,
    "explain": "Object detection both locates (bounding box) and labels each object present in an image."
   },
   {
    "q": "In a CNN, what do the earliest layers typically detect?",
    "options": [
     "Simple features like edges",
     "Text sentiment",
     "Reward values",
     "Whole objects like faces"
    ],
    "answer": 0,
    "explain": "Early CNN layers detect simple, low-level features such as edges; deeper layers combine these into complex shapes."
   },
   {
    "q": "Image segmentation differs from image classification because it:",
    "options": [
     "Ignores object boundaries entirely",
     "Cannot use neural networks",
     "Only works on black and white images",
     "Labels every individual pixel rather than the whole image"
    ],
    "answer": 3,
    "explain": "Segmentation assigns a class to each pixel, producing a precise outline, unlike classification which gives one label for the entire image."
   }
  ]
 },
 "ai-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A robot brings AI into the physical world, and that adds challenges pure software never faces: the real world is noisy, only partially known, and doesn't wait for the AI to finish thinking. Robotics is usually described as a loop of three stages: perception (sensing the world through cameras, lidar, or other sensors), planning (deciding what to do based on that perception), and control (actually driving the motors to carry out the plan)."
    },
    {
     "type": "text",
     "text": "A key problem unique to mobile robots is SLAM - Simultaneous Localization and Mapping. A robot dropped into an unknown building must build a map of its surroundings while also figuring out where it is on that map, and each of those two tasks depends on the other, since you need a map to know your location and you need to know your location to build an accurate map."
    },
    {
     "type": "text",
     "text": "Sensors are always somewhat unreliable, so robots use probabilistic techniques like the Kalman filter to combine noisy sensor readings with a model of expected motion, producing a best estimate of the robot's true position that's more accurate than any single sensor reading alone."
    },
    {
     "type": "tip",
     "text": "If an exam question describes a robot needing to build a map of an unknown space AND track its own position in that space at the same time, the keyword answer is SLAM - it's one of the most commonly tested robotics terms."
    },
    {
     "type": "text",
     "text": "Robotics also has to deal with real-time constraints: a self-driving car cannot spend ten seconds thinking about whether to brake. This is why robotics combines the reasoning techniques from earlier in this track - search, planning, uncertainty, reinforcement learning, and computer vision - with hard engineering limits on speed and reliability."
    }
   ],
   "recap": "Robotics loops through perception, planning, and control in the physical world, using techniques like SLAM to map and localize simultaneously and Kalman filters to handle noisy sensors, all under real-time constraints."
  },
  "quiz": [
   {
    "q": "The three-stage loop describing how a robot operates is:",
    "options": [
     "Perception, planning, control",
     "Fitness, crossover, mutation",
     "Forward chaining, backward chaining, inference",
     "Tokenize, embed, attend"
    ],
    "answer": 0,
    "explain": "Robots sense the world (perception), decide what to do (planning), and act (control) in a continuous loop."
   },
   {
    "q": "SLAM stands for a robot simultaneously:",
    "options": [
     "Searching and learning a map",
     "Localizing itself and mapping its environment",
     "Sorting and labeling images",
     "Scoring and logging actions and moves"
    ],
    "answer": 1,
    "explain": "SLAM (Simultaneous Localization and Mapping) means the robot builds a map while also tracking its own position within it."
   },
   {
    "q": "A Kalman filter is used in robotics mainly to:",
    "options": [
     "Convert fuzzy values into a crisp output",
     "Combine noisy sensor readings into a more accurate position estimate",
     "Prune a game search tree",
     "Encode chromosomes for a genetic algorithm"
    ],
    "answer": 1,
    "explain": "Kalman filters fuse noisy sensor data with a motion model to produce a better estimate of the true state than any raw sensor alone."
   }
  ]
 },
 "ai-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything in this track so far has been narrow AI (also called weak AI): a system built to do one kind of task well, whether that's playing chess, recognizing faces, or writing text. Artificial General Intelligence (AGI) is a hypothetical system that could match human-level ability across essentially any intellectual task, transferring what it learns in one domain to completely different ones the way a person can. No AGI exists today - even the most capable current models are still narrow AI, just narrow at an unusually wide range of tasks."
    },
    {
     "type": "text",
     "text": "As models get more capable, the AI alignment problem becomes central: how do we make sure a powerful AI system's goals and behavior actually match what humans intend, especially in situations its designers never explicitly anticipated? This is harder than it sounds - a system optimizing a poorly specified goal can satisfy the letter of its instructions while violating their spirit, a failure mode researchers call reward hacking or specification gaming."
    },
    {
     "type": "tip",
     "text": "Interview-ready one-liners worth memorizing: narrow AI does one task well; AGI (not yet real) would generalize like a human; alignment means an AI's goals match human intent; hallucination, bias, explainability, and data drift (from earlier levels) are the concrete problems alignment work tries to prevent at scale."
    },
    {
     "type": "text",
     "text": "A placement interviewer is far more likely to ask 'walk me through how you'd approach an AI problem' than to ask you to recite an algorithm. A strong answer touches: define the problem and success metric clearly, understand and clean the data, choose a suitable technique (search, ML, planning, or a mix), evaluate honestly against a held-out test set, and plan for monitoring and failure once deployed - the same end-to-end thinking from the AI-in-the-real-world level, now applied under interview pressure."
    },
    {
     "type": "text",
     "text": "This track has taken you from 'what is intelligence' through search, logic, uncertainty, learning, language, vision, robotics, and finally to the open questions researchers argue about today. The syllabus ends here, but the field does not - AI keeps changing fast, and the fundamentals in this track are what let you keep learning whatever comes next."
    }
   ],
   "recap": "Today's AI is narrow, not general; AGI remains hypothetical, and alignment - keeping a powerful AI's goals faithful to human intent - is the field's central open problem, alongside the practical craft of framing, building, evaluating, and monitoring AI systems."
  },
  "quiz": [
   {
    "q": "Which best describes all AI systems that exist today, including large language models?",
    "options": [
     "Artificial General Intelligence (AGI)",
     "Immune to bias and hallucination",
     "Narrow (weak) AI, however broad its range of tasks",
     "Fully aligned by default"
    ],
    "answer": 2,
    "explain": "Even very capable modern models are narrow AI - built and trained for specific kinds of tasks, not general human-like intelligence."
   },
   {
    "q": "The AI alignment problem is best described as:",
    "options": [
     "Balancing exploration and exploitation in a game",
     "Aligning pixels during image segmentation",
     "Making sure a robot's wheels are physically straight",
     "Making sure a powerful AI system's goals and behavior match human intent"
    ],
    "answer": 3,
    "explain": "Alignment is about ensuring an AI's objectives and actions actually reflect what humans intended, not a literal or physical alignment."
   },
   {
    "q": "A system that technically satisfies a poorly specified goal while violating its intended spirit is an example of:",
    "options": [
     "Backward chaining",
     "Reward hacking / specification gaming",
     "Constraint propagation",
     "Defuzzification"
    ],
    "answer": 1,
    "explain": "Reward hacking (specification gaming) happens when an agent exploits a loophole in how its goal was defined rather than achieving the intended outcome."
   },
   {
    "q": "In an interview, describing 'define the problem, prepare data, choose a technique, evaluate honestly, monitor after deployment' answers which kind of question best?",
    "options": [
     "How to approach an AI problem end-to-end",
     "A pure algorithm-recitation question",
     "A fuzzy logic membership calculation",
     "A minimax tree walkthrough"
    ],
    "answer": 0,
    "explain": "This end-to-end framing is exactly what interviewers look for when asking how a candidate would approach a real AI problem, not a single algorithm's mechanics."
   }
  ]
 }
}
