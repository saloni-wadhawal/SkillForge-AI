// Lesson text and quiz questions for "Machine Learning".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "ml-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "In normal programming, you write the rules and the computer follows them. Machine learning flips this around: you show the computer many examples, and IT figures out the rules by itself. You give it data and answers, and it learns the pattern that connects them."
    },
    {
     "type": "text",
     "text": "Imagine teaching a child to recognize cats. You don't list every rule ('pointy ears, whiskers, tail'). You just show them many cats, and their brain learns what a cat looks like. Machine learning works the same way — the more good examples it sees, the better it gets."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: if a problem is easy to write with if-else rules, use normal code. If the rules are fuzzy or too many (like recognizing faces), reach for machine learning."
    },
    {
     "type": "text",
     "text": "A trained ML system is called a 'model'. Think of a model as a smart function: you feed it a new input it has never seen, and it outputs a prediction based on the patterns it learned."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Traditional: you write the rule\ndef is_adult(age):\n    return age >= 18\n\n# Machine learning: the model LEARNS the rule from examples\n# model.fit(ages, labels)  <- it discovers the '18' boundary itself\n# model.predict([20])      -> 'adult'"
    }
   ],
   "recap": "Machine learning learns rules from examples instead of being given the rules; the learned result is called a model."
  },
  "quiz": [
   {
    "q": "How is machine learning different from traditional programming?",
    "options": [
     "It learns rules from data instead of being given rules",
     "It never makes mistakes",
     "It does not need a computer",
     "It runs faster on any computer"
    ],
    "answer": 0,
    "explain": "In ML you supply examples and the computer discovers the rules, rather than you coding them by hand."
   },
   {
    "q": "In machine learning, what is a 'model'?",
    "options": [
     "A type of hard drive",
     "The person who labels data",
     "The learned system that makes predictions",
     "The programming language used"
    ],
    "answer": 2,
    "explain": "A model is the trained result that takes an input and outputs a prediction."
   },
   {
    "q": "Which problem is the BEST fit for machine learning?",
    "options": [
     "Recognizing faces in photos",
     "Converting Celsius to Fahrenheit",
     "Adding two numbers together",
     "Checking if a number is even"
    ],
    "answer": 0,
    "explain": "Face recognition has fuzzy, hard-to-code rules, which is exactly where ML shines."
   }
  ]
 },
 "ml-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Machine learning is only as good as its data. Data is usually a table: each ROW is one example (called a sample), and each COLUMN is one measurable property (called a feature). If you were predicting house prices, one row is one house."
    },
    {
     "type": "text",
     "text": "A 'feature' is an input clue the model uses. For a house, useful features are size, number of bedrooms, and location. The 'label' (or target) is the answer you want to predict — here, the price. Features go in, label comes out."
    },
    {
     "type": "tip",
     "text": "Analogy: features are the ingredients, the label is the finished dish. Better ingredients make a better dish — and better features make a better model."
    },
    {
     "type": "text",
     "text": "Raw data is often messy: missing values, different scales (age 0-100 vs salary 0-100000), or text that must become numbers. Cleaning and preparing data is called preprocessing, and it often takes MORE time than the actual learning."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A tiny dataset: 3 samples, 2 features, 1 label\n# features: [size_sqft, bedrooms]      label: price\nX = [[1000, 2],\n     [1500, 3],\n     [ 800, 1]]\ny = [50, 75, 40]   # prices in lakhs\n\n# Each row in X lines up with one answer in y"
    }
   ],
   "recap": "Data is a table of samples (rows) and features (columns); features are the inputs and the label is the answer to predict."
  },
  "quiz": [
   {
    "q": "In a data table, what does a single ROW usually represent?",
    "options": [
     "The whole dataset",
     "The prediction only",
     "One feature",
     "One example (sample)"
    ],
    "answer": 3,
    "explain": "Each row is one example, and its columns hold that example's feature values."
   },
   {
    "q": "What is the 'label' (target) in a dataset?",
    "options": [
     "The name of the file",
     "An input clue for the model",
     "The answer you want to predict",
     "A missing value"
    ],
    "answer": 2,
    "explain": "The label is the correct answer the model is trying to learn to predict."
   },
   {
    "q": "When predicting house price, which is a FEATURE and not the label?",
    "options": [
     "Number of bedrooms",
     "The profit made",
     "The buyer's opinion",
     "The final price"
    ],
    "answer": 0,
    "explain": "Number of bedrooms is an input property used to predict the price, so it is a feature."
   },
   {
    "q": "Why does preprocessing matter so much?",
    "options": [
     "Raw data is often messy and must be cleaned first",
     "It deletes the model",
     "It is only for graphics",
     "It makes the screen brighter"
    ],
    "answer": 0,
    "explain": "Models learn poorly from messy data, so cleaning and preparing it is essential."
   }
  ]
 },
 "ml-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Machine learning comes in two big families. In SUPERVISED learning, your data comes WITH the correct answers (labels). The model studies inputs paired with known outputs and learns to reproduce them for new inputs — like studying with an answer key."
    },
    {
     "type": "text",
     "text": "In UNSUPERVISED learning, there are NO labels. You just have data, and you ask the model to find hidden structure on its own — for example, grouping similar customers together. It's like sorting a pile of photos into stacks without anyone telling you the categories."
    },
    {
     "type": "tip",
     "text": "Quick test: Do you already have the 'right answers' to learn from? Yes = supervised. No, just find patterns = unsupervised."
    },
    {
     "type": "text",
     "text": "Supervised tasks split into regression (predict a number, like price) and classification (predict a category, like spam / not spam). Unsupervised tasks include clustering (grouping) and dimensionality reduction (simplifying data while keeping its shape)."
    },
    {
     "type": "text",
     "text": "Diagram in words: Supervised = [inputs + labels] -> model -> predicts label. Unsupervised = [inputs only] -> model -> discovers groups. The presence or absence of labels is the whole difference."
    }
   ],
   "recap": "Supervised learning uses labeled data to predict answers; unsupervised learning finds hidden patterns in unlabeled data."
  },
  "quiz": [
   {
    "q": "What defines SUPERVISED learning?",
    "options": [
     "It only works on images",
     "The training data includes correct labels",
     "It needs no data at all",
     "It never uses features"
    ],
    "answer": 1,
    "explain": "Supervised learning trains on inputs paired with their known correct answers."
   },
   {
    "q": "Grouping customers into similar segments with NO labels is an example of:",
    "options": [
     "Unsupervised clustering",
     "Manual coding",
     "Supervised classification",
     "Supervised regression"
    ],
    "answer": 0,
    "explain": "Clustering finds groups in unlabeled data, which is unsupervised learning."
   },
   {
    "q": "Which pair are both SUPERVISED tasks?",
    "options": [
     "Regression and classification",
     "Cleaning and plotting",
     "Clustering and reduction",
     "Sorting and shuffling"
    ],
    "answer": 0,
    "explain": "Regression (predict a number) and classification (predict a category) both use labeled data."
   }
  ]
 },
 "ml-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You never judge a model by how well it does on data it already studied — of course it remembers those! The real question is how it performs on NEW, unseen data. To check honestly, you split your data into a training set and a test set."
    },
    {
     "type": "text",
     "text": "The model learns ONLY from the training set (often about 80% of the data). The test set (the remaining ~20%) is hidden during learning and used afterward to measure real performance. This mimics the real world, where new inputs arrive that the model has never seen."
    },
    {
     "type": "tip",
     "text": "Analogy: training data is the practice questions; test data is the final exam. If a student memorizes the practice answers, they still fail an exam with fresh questions."
    },
    {
     "type": "text",
     "text": "The word 'fit' means training. You call fit() on the training data so the model adjusts its internal numbers to match the patterns. Then you call predict() on the test data and compare predictions to the true labels to score accuracy."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.model_selection import train_test_split\n\n# hold back 20% for honest testing\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42)\n\nmodel.fit(X_train, y_train)      # learn from training data\nscore = model.score(X_test, y_test)  # grade on unseen data"
    }
   ],
   "recap": "Split data into training and test sets; learn from training data and measure honest performance on the unseen test set."
  },
  "quiz": [
   {
    "q": "Why do we hold back a test set instead of scoring on training data?",
    "options": [
     "Because training data is broken",
     "To make training faster",
     "To save disk space",
     "To measure performance on unseen data honestly"
    ],
    "answer": 3,
    "explain": "Scoring on unseen data shows how the model will really behave on new inputs."
   },
   {
    "q": "In scikit-learn, what does the fit() method do?",
    "options": [
     "Splits the data",
     "Trains the model on the given data",
     "Draws a graph",
     "Deletes the data"
    ],
    "answer": 1,
    "explain": "fit() is the training step where the model adjusts to match the patterns."
   },
   {
    "q": "A typical train/test split ratio is:",
    "options": [
     "50% train / 50% delete",
     "80% train / 20% test",
     "10% train / 10% test",
     "100% train / 0% test"
    ],
    "answer": 1,
    "explain": "Around 80/20 is common, keeping most data for learning and enough for honest testing."
   },
   {
    "q": "The exam analogy compares the TEST set to:",
    "options": [
     "The practice questions",
     "The textbook",
     "The teacher",
     "The final exam with fresh questions"
    ],
    "answer": 3,
    "explain": "The test set is like a final exam of unseen questions that proves real understanding."
   }
  ]
 },
 "ml-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Regression is supervised learning where the answer is a continuous NUMBER — a price, a temperature, an exam score. The simplest form is linear regression, which tries to draw the best straight line through your data points."
    },
    {
     "type": "text",
     "text": "The line has the classic form y = m*x + b, where m is the slope and b is the intercept. Learning means finding the m and b that make the line pass as closely as possible through all the points, so it can predict y for any new x."
    },
    {
     "type": "tip",
     "text": "Picture a scatter of dots on graph paper. Regression is like laying a ruler so that the dots hug it as tightly as possible — then you read predictions straight off the ruler."
    },
    {
     "type": "text",
     "text": "How do we measure 'closeness'? We use a loss function, commonly Mean Squared Error (MSE): the average of the squared gaps between predicted and actual values. Training means nudging m and b to make MSE as small as possible. Smaller error = better fit."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)   # finds best slope + intercept\n\npred = model.predict([[1200, 2]])   # predict a NUMBER (price)\nprint(pred)   # e.g. [58.3]"
    }
   ],
   "recap": "Regression predicts continuous numbers; linear regression fits the best line by minimizing error like Mean Squared Error."
  },
  "quiz": [
   {
    "q": "Regression is used when the answer you want is:",
    "options": [
     "A category like spam / not spam",
     "A yes/no only",
     "A continuous number like price",
     "A cluster group"
    ],
    "answer": 2,
    "explain": "Regression predicts continuous numeric values such as prices or temperatures."
   },
   {
    "q": "In y = m*x + b, what does the model actually learn?",
    "options": [
     "The values of m and b",
     "The value of x",
     "The number of rows",
     "The file name"
    ],
    "answer": 0,
    "explain": "Training finds the slope m and intercept b that best fit the data."
   },
   {
    "q": "What does Mean Squared Error measure?",
    "options": [
     "The average squared gap between predictions and actual values",
     "The number of features",
     "The screen resolution",
     "How fast training runs"
    ],
    "answer": 0,
    "explain": "MSE averages the squared errors, so smaller MSE means the line fits better."
   }
  ]
 },
 "ml-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Classification is supervised learning where the answer is a CATEGORY, not a number. Is this email spam or not spam? Is this tumor benign or malignant? The model learns a boundary that separates the classes and assigns new inputs to a side."
    },
    {
     "type": "text",
     "text": "A popular starting model is logistic regression. Despite its name, it does classification: it outputs a probability between 0 and 1, then applies a threshold (usually 0.5) to decide the class. Above the line -> class A; below -> class B."
    },
    {
     "type": "tip",
     "text": "Accuracy alone can lie. If 99% of emails are 'not spam', a lazy model that always says 'not spam' scores 99% but catches zero spam. Always check what kinds of mistakes the model makes."
    },
    {
     "type": "text",
     "text": "To see the mistakes, we use a confusion matrix: true positives, true negatives, false positives, and false negatives. From it we compute precision (of the ones I flagged, how many were right?) and recall (of the real positives, how many did I catch?)."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nclf = LogisticRegression()\nclf.fit(X_train, y_train)\n\npreds = clf.predict(X_test)          # predicts a CLASS label\nprint(accuracy_score(y_test, preds)) # e.g. 0.94"
    }
   ],
   "recap": "Classification predicts categories using a decision boundary; judge it with precision and recall, not accuracy alone."
  },
  "quiz": [
   {
    "q": "Classification predicts:",
    "options": [
     "A random value",
     "A slope and intercept",
     "A continuous number",
     "A category or class label"
    ],
    "answer": 3,
    "explain": "Classification assigns inputs to discrete categories like spam or not spam."
   },
   {
    "q": "Logistic regression is actually used for what task?",
    "options": [
     "Classification",
     "Clustering",
     "Sorting files",
     "Data cleaning"
    ],
    "answer": 0,
    "explain": "Despite its name, logistic regression outputs a probability to classify inputs."
   },
   {
    "q": "Why can accuracy be misleading on imbalanced data?",
    "options": [
     "A model can score high by always guessing the majority class",
     "It only works for numbers",
     "It needs a GPU",
     "It is always zero"
    ],
    "answer": 0,
    "explain": "With 99% one class, always predicting that class looks accurate but catches none of the rare class."
   },
   {
    "q": "Recall answers which question?",
    "options": [
     "How many features exist?",
     "What is the file size?",
     "Of the real positives, how many did I catch?",
     "How fast is training?"
    ],
    "answer": 2,
    "explain": "Recall measures the fraction of actual positives the model correctly identified."
   }
  ]
 },
 "ml-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The biggest trap in machine learning is OVERFITTING: the model memorizes the training data — including its noise and quirks — instead of learning the general pattern. It scores brilliantly on training data but fails on new data. The opposite, underfitting, means the model is too simple to capture the pattern at all."
    },
    {
     "type": "tip",
     "text": "Analogy: an overfitting student memorizes past papers word-for-word and panics when the exam is reworded. A good model, like a good student, understands the concept and handles fresh questions."
    },
    {
     "type": "text",
     "text": "You spot overfitting when training accuracy is high but test accuracy is much lower — a big gap between them. Cures include using more data, simplifying the model, regularization (penalizing complexity), and cross-validation (testing on several different splits to be sure)."
    },
    {
     "type": "text",
     "text": "The goal is generalization: good performance on data the model has never seen. This is the balance between underfitting and overfitting — sometimes called the bias-variance tradeoff. Neither too simple nor too memorized; just right."
    },
    {
     "type": "text",
     "text": "Real-world ML powers spam filters, product recommendations, fraud detection, medical image analysis, voice assistants, and self-driving perception. As an engineer, remember: garbage in, garbage out — clean data and honest testing matter far more than a fancy algorithm."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.model_selection import cross_val_score\n\n# test on 5 different splits to check it generalizes\nscores = cross_val_score(model, X, y, cv=5)\nprint(scores.mean())   # steady across folds = healthy\n# big train/test gap => overfitting; both low => underfitting"
    }
   ],
   "recap": "Overfitting memorizes noise and fails on new data; aim for generalization using more data, simpler models, regularization, and cross-validation."
  },
  "quiz": [
   {
    "q": "What is overfitting?",
    "options": [
     "The model memorizes training data and fails on new data",
     "The model is too simple to learn",
     "The model has no features",
     "The dataset is too small to load"
    ],
    "answer": 0,
    "explain": "Overfitting means the model learns noise and quirks, so it does not generalize to unseen data."
   },
   {
    "q": "A clear SIGN of overfitting is:",
    "options": [
     "Both accuracies near zero",
     "High training accuracy but much lower test accuracy",
     "No training data used",
     "Equal training and test accuracy"
    ],
    "answer": 1,
    "explain": "A large gap where training is high but test is low reveals memorization rather than learning."
   },
   {
    "q": "Which technique helps CHECK that a model generalizes?",
    "options": [
     "Training on test data too",
     "Cross-validation across multiple splits",
     "Ignoring the labels",
     "Deleting the test set"
    ],
    "answer": 1,
    "explain": "Cross-validation tests on several different splits to confirm steady, honest performance."
   },
   {
    "q": "The overall goal of a good ML model is:",
    "options": [
     "The fastest training time",
     "Using the most features possible",
     "Generalization to unseen data",
     "Perfect training score only"
    ],
    "answer": 2,
    "explain": "Generalization — performing well on new, unseen data — is the true measure of success."
   }
  ]
 },
 "ml-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A decision tree makes predictions by asking a series of yes/no questions about the features, like a flowchart. \"Is age > 30?\" then \"Is income > 50k?\" and so on, until it reaches a leaf that gives the answer. Both classification and regression trees exist."
    },
    {
     "type": "text",
     "text": "The tree picks each question by trying to split the data into the purest possible groups. Purity is measured with Gini impurity or entropy (information gain) — a pure group has almost all one class, an impure group is a 50/50 mix."
    },
    {
     "type": "text",
     "text": "Trees are easy to read and explain to a non-technical manager, which is a big advantage in fields like banking and healthcare. But a tree grown too deep will overfit badly, because it keeps splitting until it memorizes individual training rows."
    },
    {
     "type": "tip",
     "text": "Control overfitting with max_depth, min_samples_split, or min_samples_leaf. A tree with no depth limit almost always overfits — that is the single most common decision-tree mistake in exams and interviews."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.tree import DecisionTreeClassifier\n\ntree = DecisionTreeClassifier(max_depth=4, criterion='gini')\ntree.fit(X_train, y_train)\nprint(tree.score(X_test, y_test))\n\n# tree.feature_importances_ shows which features mattered most"
    }
   ],
   "recap": "Decision trees split data on the feature that gives the purest groups (low Gini/entropy); limit their depth or they overfit."
  },
  "quiz": [
   {
    "q": "A decision tree decides where to split by choosing the feature that:",
    "options": [
     "Has the most missing values",
     "Comes first in the dataset",
     "Has the largest values",
     "Produces the purest child groups"
    ],
    "answer": 3,
    "explain": "Splits are chosen to maximize purity (low Gini impurity or high information gain) in the resulting groups."
   },
   {
    "q": "What is the most common risk with an unrestricted decision tree?",
    "options": [
     "It cannot handle categories",
     "It cannot be visualized",
     "It overfits by growing too deep",
     "It underfits"
    ],
    "answer": 2,
    "explain": "Without a depth limit, a tree keeps splitting until it memorizes the training data, which overfits."
   },
   {
    "q": "Gini impurity is used to measure:",
    "options": [
     "Memory usage",
     "The number of features",
     "Training speed",
     "How mixed the classes are in a group"
    ],
    "answer": 3,
    "explain": "Gini impurity is low when a group is mostly one class (pure) and high when classes are mixed."
   },
   {
    "q": "One advantage of decision trees over many other models is:",
    "options": [
     "They are always the most accurate",
     "They never overfit",
     "They need no training data",
     "They are easy to visualize and explain"
    ],
    "answer": 3,
    "explain": "Trees mirror human decision-making with readable if/else questions, making them easy to explain to non-experts."
   }
  ]
 },
 "ml-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A single decision tree can be unstable — a small change in the data can produce a very different tree. Ensembles fix this by combining many models so their errors cancel out. The wisdom-of-the-crowd idea: many weak, slightly-different opinions averaged together beat one confident opinion."
    },
    {
     "type": "text",
     "text": "Bagging (bootstrap aggregating) trains many copies of a model on random samples of the data (drawn with replacement), then averages their predictions (regression) or takes a majority vote (classification)."
    },
    {
     "type": "text",
     "text": "Random Forest is bagging applied to decision trees, with one extra trick: each tree also only considers a random subset of features at each split. This decorrelates the trees so they make different mistakes, which is exactly what makes averaging them powerful."
    },
    {
     "type": "tip",
     "text": "Random Forests almost never overfit as badly as a single deep tree, because errors from individual trees wash out in the vote. That is why they are a strong, low-effort default before trying anything fancier."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.ensemble import RandomForestClassifier\n\nforest = RandomForestClassifier(n_estimators=200, max_depth=6)\nforest.fit(X_train, y_train)\nprint(forest.score(X_test, y_test))\n\n# n_estimators = how many trees vote in the forest"
    }
   ],
   "recap": "Bagging trains many models on random data samples and combines their votes; Random Forest adds random feature subsets to make trees disagree usefully."
  },
  "quiz": [
   {
    "q": "Bagging improves accuracy mainly by:",
    "options": [
     "Using only the largest feature",
     "Training one very deep model",
     "Combining many models trained on random samples",
     "Deleting outliers"
    ],
    "answer": 2,
    "explain": "Bagging averages or votes across many models trained on bootstrap samples, cancelling out individual errors."
   },
   {
    "q": "What extra randomness does a Random Forest add beyond plain bagging?",
    "options": [
     "Random labels",
     "Random test sets",
     "A random subset of features considered at each split",
     "Random learning rates"
    ],
    "answer": 2,
    "explain": "Each tree in a Random Forest only sees a random subset of features per split, making the trees less correlated."
   },
   {
    "q": "Why does decorrelating the trees in a forest help?",
    "options": [
     "It makes training faster only",
     "It removes the need for a test set",
     "It makes every tree identical",
     "Different trees make different mistakes that cancel out when voted"
    ],
    "answer": 3,
    "explain": "If trees were identical they would all make the same mistakes; diverse trees' errors average away."
   },
   {
    "q": "Compared to a single unpruned decision tree, a Random Forest typically:",
    "options": [
     "Overfits less and generalizes better",
     "Overfits more",
     "Cannot be used for classification",
     "Requires no training data at all"
    ],
    "answer": 0,
    "explain": "Averaging many diverse trees reduces variance, so Random Forests generalize better than one deep tree."
   }
  ]
 },
 "ml-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Boosting is a different way to combine weak models: instead of training them independently like bagging, it trains them one after another, and each new model focuses on fixing the mistakes of the previous ones."
    },
    {
     "type": "text",
     "text": "AdaBoost (Adaptive Boosting) gives higher weight to the training examples the previous model got wrong, so the next weak learner pays more attention to the hard cases. The final prediction is a weighted vote of all the weak learners."
    },
    {
     "type": "text",
     "text": "Gradient Boosting instead trains each new model to predict the residual error (how far off the current predictions are) of the model before it, gradually reducing the error step by step. XGBoost and LightGBM are fast, regularized implementations of this idea used widely in industry and competitions."
    },
    {
     "type": "tip",
     "text": "Boosting usually gets higher accuracy than bagging but is more prone to overfitting and more sensitive to noisy data, because it keeps chasing every mistake, including noise. Tune the learning rate and number of rounds carefully."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.ensemble import GradientBoostingClassifier\n\ngb = GradientBoostingClassifier(n_estimators=150, learning_rate=0.1, max_depth=3)\ngb.fit(X_train, y_train)\nprint(gb.score(X_test, y_test))\n\n# smaller learning_rate + more n_estimators = slower but often better"
    }
   ],
   "recap": "Boosting trains models sequentially, each one correcting the previous one's mistakes; it is powerful but more overfit-prone than bagging."
  },
  "quiz": [
   {
    "q": "The key difference between boosting and bagging is:",
    "options": [
     "Bagging always uses neural networks",
     "Boosting never uses decision trees",
     "Boosting trains models sequentially to fix prior errors, bagging trains them independently",
     "Bagging trains only one model"
    ],
    "answer": 2,
    "explain": "Boosting builds models one after another, each focusing on previous mistakes; bagging trains independent models in parallel."
   },
   {
    "q": "Gradient Boosting trains each new model to predict:",
    "options": [
     "The test set labels",
     "A random label",
     "The original raw features only",
     "The residual error of the previous model"
    ],
    "answer": 3,
    "explain": "Each new weak learner is fit to the leftover error (residual) of the ensemble built so far, gradually reducing it."
   },
   {
    "q": "A downside of boosting compared to bagging is that it:",
    "options": [
     "Cannot be used for classification",
     "Trains models independently",
     "Is more sensitive to noisy data and overfitting",
     "Needs no hyperparameters"
    ],
    "answer": 2,
    "explain": "Because boosting keeps chasing every mistake including noise, it can overfit more easily than bagging if not tuned."
   },
   {
    "q": "AdaBoost focuses the next weak learner on which examples?",
    "options": [
     "Examples the previous learner got wrong",
     "Randomly chosen examples",
     "Only the largest examples",
     "Examples the previous learner already got right"
    ],
    "answer": 0,
    "explain": "AdaBoost increases the weight of misclassified examples so the next learner concentrates on the hard cases."
   }
  ]
 },
 "ml-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "k-Nearest Neighbors (k-NN) is one of the simplest ML algorithms: to predict a new point, find the k closest points in the training data (usually by Euclidean distance) and let them vote. For classification, take the majority class among the neighbors; for regression, average their values."
    },
    {
     "type": "text",
     "text": "k-NN does not really 'train' at all — it just stores the data and does all its work at prediction time. This is called a lazy learner, and it makes prediction slow when the dataset is huge, since every new point is compared against all stored points."
    },
    {
     "type": "text",
     "text": "Choosing k matters a lot. A small k (like 1) follows the training data very closely and can overfit to noise. A large k smooths the decision boundary but can underfit by blending in points from the wrong class."
    },
    {
     "type": "tip",
     "text": "k-NN is extremely sensitive to feature scale, because distance is dominated by whichever feature has the biggest numbers. Always scale your features (e.g. StandardScaler) before using k-NN — a common exam trap is forgetting this step."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(X_train)\nX_test_s = scaler.transform(X_test)\n\nknn = KNeighborsClassifier(n_neighbors=5)\nknn.fit(X_train_s, y_train)\nprint(knn.score(X_test_s, y_test))"
    }
   ],
   "recap": "k-NN predicts by voting among the k closest training points; it needs feature scaling and the right choice of k to avoid over- or under-fitting."
  },
  "quiz": [
   {
    "q": "k-NN is called a 'lazy learner' because it:",
    "options": [
     "Trains for a very long time",
     "Only works with images",
     "Does no real work until prediction time, just stores the data",
     "Ignores the test set"
    ],
    "answer": 2,
    "explain": "k-NN stores the training data and defers all computation to prediction time, comparing the new point to stored points."
   },
   {
    "q": "Choosing a very small k (like 1) tends to:",
    "options": [
     "Overfit by following training noise too closely",
     "Make training slower",
     "Have no effect on accuracy",
     "Underfit by ignoring the data"
    ],
    "answer": 0,
    "explain": "With k=1, predictions depend on a single nearest point, which is very sensitive to noise and outliers."
   },
   {
    "q": "Why must features usually be scaled before running k-NN?",
    "options": [
     "Scaling is never needed for k-NN",
     "It changes the number of classes",
     "Distance calculations are dominated by features with larger numeric ranges",
     "It speeds up storage only"
    ],
    "answer": 2,
    "explain": "If one feature has much bigger values, it dominates the distance metric and unfairly outweighs other features."
   },
   {
    "q": "For regression with k-NN, the prediction for a new point is:",
    "options": [
     "The average value of its k nearest neighbors",
     "The majority class of its neighbors",
     "A random neighbor's value",
     "The farthest neighbor's value"
    ],
    "answer": 0,
    "explain": "In k-NN regression, the predicted value is the average (or weighted average) of the k closest neighbors' target values."
   }
  ]
 },
 "ml-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Naive Bayes is a classification algorithm built on Bayes' theorem: it calculates the probability of each class given the features, and picks the class with the highest probability. It is widely used for spam filtering and text classification."
    },
    {
     "type": "text",
     "text": "It is called 'naive' because it assumes all features are independent of each other given the class — an assumption that is rarely fully true (e.g. the word 'free' and the word 'money' often appear together in spam) but works surprisingly well in practice anyway."
    },
    {
     "type": "text",
     "text": "Bayes' theorem itself is: P(class | features) is proportional to P(features | class) times P(class). Naive Bayes multiplies the individual per-feature probabilities together instead of modeling their joint interaction, which is what makes it fast and simple."
    },
    {
     "type": "tip",
     "text": "Naive Bayes trains extremely fast and works well even with a small amount of data or very high-dimensional data like text (thousands of word features), which is why it is still a common baseline for spam and sentiment classifiers."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.naive_bayes import MultinomialNB\nfrom sklearn.feature_extraction.text import CountVectorizer\n\nvec = CountVectorizer()\nX = vec.fit_transform(emails)          # word counts as features\n\nnb = MultinomialNB()\nnb.fit(X, labels)\nprint(nb.predict(vec.transform([\"win free money now\"])))"
    }
   ],
   "recap": "Naive Bayes uses Bayes' theorem and assumes features are independent given the class; it is fast, simple, and strong for text classification."
  },
  "quiz": [
   {
    "q": "Naive Bayes is called 'naive' because it assumes:",
    "options": [
     "Probabilities do not matter",
     "All features are independent given the class",
     "The dataset has no noise",
     "There is only one class"
    ],
    "answer": 1,
    "explain": "It naively assumes features contribute independently to the class probability, ignoring interactions between them."
   },
   {
    "q": "Naive Bayes is especially popular for which task?",
    "options": [
     "Text and spam classification",
     "Image super-resolution",
     "Predicting house prices",
     "Clustering customers"
    ],
    "answer": 0,
    "explain": "Its speed and ability to handle many features (like thousands of words) make it a classic choice for spam and text classification."
   },
   {
    "q": "Bayes' theorem relates P(class | features) to:",
    "options": [
     "The distance between points",
     "P(features | class) times P(class)",
     "The learning rate",
     "The number of training rows only"
    ],
    "answer": 1,
    "explain": "Bayes' theorem computes the posterior probability of a class from the likelihood of the features given that class, times the class's prior probability."
   },
   {
    "q": "A practical advantage of Naive Bayes is that it:",
    "options": [
     "Never needs a probability calculation",
     "Cannot be used for more than two classes",
     "Requires huge amounts of data to work at all",
     "Trains very fast even on high-dimensional data"
    ],
    "answer": 3,
    "explain": "Because it just multiplies simple per-feature probabilities, Naive Bayes trains quickly even with many features or classes."
   }
  ]
 },
 "ml-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A Support Vector Machine (SVM) is a classifier that finds the best possible boundary between classes: the line (or hyperplane, in higher dimensions) that separates the classes with the widest possible margin, the gap to the nearest points on either side."
    },
    {
     "type": "text",
     "text": "The points closest to the boundary — the ones that actually determine where it sits — are called the support vectors. All other points could move around freely without changing the boundary at all, which is why SVMs often generalize well."
    },
    {
     "type": "text",
     "text": "Real data is rarely perfectly separable by a straight line. The kernel trick lets an SVM draw a curved boundary by implicitly mapping data into a higher-dimensional space where a straight line does exist, without ever computing that space directly. Common kernels: linear, polynomial, and RBF (radial basis function)."
    },
    {
     "type": "tip",
     "text": "The C parameter controls the tradeoff between a wide margin and classifying every training point correctly. A large C fits the training data tightly (risking overfitting); a small C allows more margin violations for a smoother, more general boundary."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.svm import SVC\n\nsvm = SVC(kernel='rbf', C=1.0, gamma='scale')\nsvm.fit(X_train, y_train)\nprint(svm.score(X_test, y_test))\n\n# kernel='linear' for a straight boundary, 'rbf' for curved ones"
    }
   ],
   "recap": "SVMs find the widest-margin boundary between classes, supported only by the closest points; the kernel trick lets that boundary curve for non-linearly-separable data."
  },
  "quiz": [
   {
    "q": "An SVM chooses its decision boundary to:",
    "options": [
     "Always be a curve",
     "Maximize the margin between the classes",
     "Minimize the number of features",
     "Pass through as many points as possible"
    ],
    "answer": 1,
    "explain": "SVMs specifically look for the hyperplane with the widest gap (margin) to the nearest points of each class."
   },
   {
    "q": "The 'support vectors' in an SVM are:",
    "options": [
     "The test set points",
     "The points closest to the decision boundary that define it",
     "All the training points",
     "Randomly chosen points"
    ],
    "answer": 1,
    "explain": "Only the closest points to the boundary influence its position — those are the support vectors; the rest could move without changing it."
   },
   {
    "q": "The kernel trick lets an SVM:",
    "options": [
     "Draw a curved boundary by implicitly mapping data to a higher dimension",
     "Only work on text data",
     "Train without any data",
     "Skip choosing a boundary entirely"
    ],
    "answer": 0,
    "explain": "Kernels like RBF let SVMs separate classes that are not linearly separable in the original feature space."
   },
   {
    "q": "A large value of the C parameter in an SVM tends to:",
    "options": [
     "Disable the kernel",
     "Fit the training data tightly, risking overfitting",
     "Widen the margin at all costs",
     "Ignore the support vectors"
    ],
    "answer": 1,
    "explain": "A large C penalizes margin violations heavily, so the model fits training points closely, which can overfit."
   }
  ]
 },
 "ml-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far every algorithm has used labeled data. k-Means is unsupervised: it groups similar points together into k clusters without ever being told the right answer, useful for tasks like customer segmentation where there are no pre-existing labels."
    },
    {
     "type": "text",
     "text": "The algorithm: pick k random starting points as cluster centers (centroids), assign every point to its nearest centroid, recompute each centroid as the mean of its assigned points, and repeat until the centroids stop moving."
    },
    {
     "type": "text",
     "text": "You must choose k in advance, which is tricky since there is no 'correct answer' to check against. The elbow method helps: plot the total within-cluster distance for different k values and look for the point where adding more clusters stops helping much — the 'elbow' in the curve."
    },
    {
     "type": "tip",
     "text": "k-Means can get stuck in a bad local grouping depending on where the centroids started. In practice it is run several times with different random starts (scikit-learn's n_init) and the best result is kept."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.cluster import KMeans\n\nkm = KMeans(n_clusters=3, n_init=10, random_state=42)\nkm.fit(X)\nprint(km.labels_)          # which cluster each point belongs to\nprint(km.cluster_centers_) # the coordinates of the 3 centroids"
    }
   ],
   "recap": "k-Means groups unlabeled data into k clusters by repeatedly assigning points to the nearest centroid and recomputing centroids; the elbow method helps pick k."
  },
  "quiz": [
   {
    "q": "k-Means is described as unsupervised because:",
    "options": [
     "It only works on images",
     "It requires a test set",
     "It needs GPU hardware",
     "It groups data without using any labels"
    ],
    "answer": 3,
    "explain": "Unsupervised learning finds structure in data with no correct-answer labels provided, which is exactly what k-Means does."
   },
   {
    "q": "In each iteration of k-Means, a centroid is updated to:",
    "options": [
     "The original starting location, always",
     "The mean of all points currently assigned to it",
     "A random new location",
     "The point farthest from it"
    ],
    "answer": 1,
    "explain": "After points are assigned to the nearest centroid, each centroid moves to the average position of its assigned points."
   },
   {
    "q": "The elbow method helps decide:",
    "options": [
     "The train/test split ratio",
     "The learning rate",
     "Which distance metric to use",
     "The value of k, the number of clusters"
    ],
    "answer": 3,
    "explain": "Plotting within-cluster distance against different k values and finding where improvement flattens out helps choose a reasonable k."
   },
   {
    "q": "Why does scikit-learn's KMeans run with multiple random starts (n_init)?",
    "options": [
     "To speed up training",
     "Because results can depend on the initial centroid positions",
     "To avoid using labels",
     "Because it is required for regression"
    ],
    "answer": 1,
    "explain": "k-Means can converge to a poor local grouping depending on initial centroids, so multiple runs help find a better result."
   }
  ]
 },
 "ml-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real datasets often have dozens or hundreds of features, many of which overlap in the information they carry. Dimensionality reduction compresses these into fewer features while keeping as much useful information as possible — this fights the 'curse of dimensionality', where too many features makes distances and patterns harder to learn from."
    },
    {
     "type": "text",
     "text": "Principal Component Analysis (PCA) is the standard technique. It finds new axes, called principal components, that point in the directions of greatest variance in the data. The first component captures the most spread, the second captures the next most (while being perpendicular to the first), and so on."
    },
    {
     "type": "text",
     "text": "By keeping only the top few principal components, you can represent most of the data's information in far fewer dimensions — useful for visualization (compressing to 2D or 3D to plot), speeding up training, and removing noisy, redundant features."
    },
    {
     "type": "tip",
     "text": "PCA is sensitive to feature scale, just like k-NN, so always standardize features first. Also remember PCA components are combinations of original features and lose direct interpretability — you trade explainability for compactness."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\n\nX_scaled = StandardScaler().fit_transform(X)\n\npca = PCA(n_components=2)\nX_reduced = pca.fit_transform(X_scaled)\nprint(pca.explained_variance_ratio_)  # how much info each component keeps"
    }
   ],
   "recap": "PCA compresses many features into fewer principal components that capture the most variance, fighting the curse of dimensionality at the cost of interpretability."
  },
  "quiz": [
   {
    "q": "PCA's principal components are chosen to point in the direction of:",
    "options": [
     "The greatest variance in the data",
     "The smallest variance in the data",
     "Zero correlation with the label",
     "Alphabetical order of features"
    ],
    "answer": 0,
    "explain": "Each principal component captures as much of the remaining spread (variance) in the data as possible."
   },
   {
    "q": "The 'curse of dimensionality' refers to the problem where:",
    "options": [
     "Too many features make distances and patterns harder to learn from",
     "Labels become incorrect",
     "Models always run out of memory",
     "Too few features make training impossible"
    ],
    "answer": 0,
    "explain": "As dimensions grow, data becomes sparse and distance-based reasoning becomes less meaningful, hurting many algorithms."
   },
   {
    "q": "A tradeoff of using PCA is that:",
    "options": [
     "The new components are hard to interpret directly",
     "It can only reduce to exactly 2 dimensions",
     "It always improves accuracy",
     "It requires labeled data"
    ],
    "answer": 0,
    "explain": "Principal components are mathematical combinations of the original features, so you lose the direct meaning of each original feature."
   },
   {
    "q": "Before applying PCA, you should typically:",
    "options": [
     "Delete the test set",
     "Standardize/scale the features",
     "Remove all labels",
     "Convert all features to text"
    ],
    "answer": 1,
    "explain": "PCA is sensitive to feature scale since it relies on variance, so features are usually standardized first."
   }
  ]
 },
 "ml-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Feature engineering is the craft of turning raw data into inputs a model can actually learn from — often it matters more than which algorithm you pick. Examples: extracting 'day of week' from a timestamp, combining height and weight into BMI, or turning a free-text address into a city code."
    },
    {
     "type": "text",
     "text": "Categorical features (like 'red', 'blue', 'green') must be converted to numbers before most models can use them. One-hot encoding creates a separate 0/1 column per category, avoiding the false idea that 'blue' is 'bigger' than 'red'. Label encoding just assigns 0, 1, 2 — fine for tree models, risky for distance-based ones."
    },
    {
     "type": "text",
     "text": "Feature scaling puts numeric features on a comparable range. Standardization (subtract mean, divide by standard deviation) centers data around 0; normalization (min-max scaling) squeezes values into a 0-1 range. Distance-based models (k-NN, SVM, PCA) and gradient-based models (neural networks) need this; tree-based models generally do not."
    },
    {
     "type": "tip",
     "text": "Always fit your scaler and encoder only on the training set, then apply (transform) the same fitted values to the test set. Fitting on the whole dataset leaks test information into training — a subtle but very common exam and real-world mistake."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.compose import ColumnTransformer\n\nct = ColumnTransformer([\n    ('num', StandardScaler(), ['age', 'income']),\n    ('cat', OneHotEncoder(), ['city'])\n])\nX_train_t = ct.fit_transform(X_train)   # fit on train\nX_test_t  = ct.transform(X_test)        # only transform on test"
    }
   ],
   "recap": "Good feature engineering and correct scaling/encoding often matter more than the choice of algorithm; always fit transformations on the training set only."
  },
  "quiz": [
   {
    "q": "One-hot encoding is preferred over plain label encoding for categories because:",
    "options": [
     "It is always faster",
     "It removes the need for scaling",
     "It avoids implying a false order between categories",
     "It works only with images"
    ],
    "answer": 2,
    "explain": "Label encoding (0,1,2...) implies an ordering that plain categories like colors do not have; one-hot encoding avoids that."
   },
   {
    "q": "Which type of model generally needs feature scaling the LEAST?",
    "options": [
     "SVM",
     "Decision trees / Random Forests",
     "Neural networks",
     "k-NN"
    ],
    "answer": 1,
    "explain": "Tree-based models split on thresholds per feature independently, so the scale of features does not affect their splits."
   },
   {
    "q": "Fitting a scaler on the entire dataset (train + test) before splitting is a mistake because it:",
    "options": [
     "Is not allowed by any library",
     "Speeds up training too much",
     "Leaks information from the test set into training",
     "Only works for text data"
    ],
    "answer": 2,
    "explain": "The scaler would learn statistics (mean, std) that include test data, giving the model indirect knowledge of the test set."
   },
   {
    "q": "Feature engineering refers to:",
    "options": [
     "Creating or transforming inputs so a model can learn from them better",
     "Choosing which algorithm to use",
     "Buying more powerful hardware",
     "Splitting data into train and test"
    ],
    "answer": 0,
    "explain": "Feature engineering is about designing useful inputs (like extracting day-of-week or combining columns) rather than algorithm choice."
   }
  ]
 },
 "ml-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Precision and recall look at a single decision threshold, but most classifiers actually output a probability, and you choose the cutoff (often 0.5) that turns it into a class. The ROC curve plots the true positive rate against the false positive rate as that cutoff slides from 0 to 1, showing the tradeoff at every possible threshold."
    },
    {
     "type": "text",
     "text": "AUC (area under the ROC curve) summarizes that whole curve in one number between 0 and 1: 0.5 means the model is no better than a coin flip, 1.0 means perfect separation of the classes. AUC is popular because it does not depend on picking one specific threshold."
    },
    {
     "type": "text",
     "text": "Every model also has hyperparameters — settings chosen before training, like a tree's max_depth or an SVM's C — which are different from the parameters the model learns itself. Grid search and random search try many hyperparameter combinations, using cross-validation on the training set to score each one fairly."
    },
    {
     "type": "tip",
     "text": "Never tune hyperparameters by peeking at test set performance — that leaks test information into your choices, just like fitting a scaler on the whole dataset. Use a separate validation set or cross-validation for tuning, and touch the test set only once, at the very end."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\nparams = {'max_depth': [3, 5, 8], 'n_estimators': [100, 200]}\ngrid = GridSearchCV(RandomForestClassifier(), params, cv=5, scoring='roc_auc')\ngrid.fit(X_train, y_train)\nprint(grid.best_params_)"
    }
   ],
   "recap": "ROC-AUC measures classifier quality across all thresholds; hyperparameters are tuned with grid/random search and cross-validation, never by peeking at the test set."
  },
  "quiz": [
   {
    "q": "An AUC score of 0.5 means the classifier:",
    "options": [
     "Only works on regression",
     "Is perfect",
     "Cannot be evaluated",
     "Performs no better than random guessing"
    ],
    "answer": 3,
    "explain": "An AUC of 0.5 corresponds to the diagonal line on the ROC curve, meaning the model separates classes no better than chance."
   },
   {
    "q": "The ROC curve is built by varying:",
    "options": [
     "The number of clusters",
     "The training set size",
     "The number of features",
     "The classification decision threshold"
    ],
    "answer": 3,
    "explain": "ROC plots true positive rate vs false positive rate as the probability cutoff used to assign classes is slid from 0 to 1."
   },
   {
    "q": "Hyperparameters, unlike model parameters, are:",
    "options": [
     "Only relevant to unsupervised learning",
     "Learned automatically during training from data",
     "Chosen before training, like max_depth or C",
     "Always equal to zero"
    ],
    "answer": 2,
    "explain": "Hyperparameters are settings you choose (like tree depth or SVM's C) before training begins, as opposed to weights the model learns."
   },
   {
    "q": "Why should hyperparameter tuning avoid using the final test set?",
    "options": [
     "It makes training too slow",
     "Test set information would leak into your model choices",
     "Grid search does not work with test sets",
     "Test sets cannot hold numeric data"
    ],
    "answer": 1,
    "explain": "Tuning against the test set means your chosen settings are indirectly fit to it, giving an overly optimistic and dishonest final evaluation."
   }
  ]
 },
 "ml-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A neural network is built from layers of simple units called neurons. Each neuron takes weighted inputs, adds a bias, and passes the result through an activation function (like ReLU or sigmoid) that adds non-linearity — without this, stacking layers would just collapse into one big linear equation."
    },
    {
     "type": "text",
     "text": "A basic network has an input layer (the features), one or more hidden layers, and an output layer (the prediction). More hidden layers and neurons let the network represent more complex patterns, which is where the term 'deep learning' comes from — deep just means many layers."
    },
    {
     "type": "text",
     "text": "Training uses forward propagation (compute a prediction), a loss function (measure how wrong it was), and backpropagation (use calculus — the chain rule — to figure out how much each weight contributed to the error). Gradient descent then nudges every weight slightly to reduce that error, and this repeats over many iterations (epochs)."
    },
    {
     "type": "tip",
     "text": "The learning rate controls the size of each gradient descent step. Too high and training overshoots and never settles; too low and training crawls or gets stuck. It is one of the first things to tune when a network refuses to learn."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from sklearn.neural_network import MLPClassifier\n\nnet = MLPClassifier(hidden_layer_sizes=(32, 16), activation='relu', learning_rate_init=0.001, max_iter=500)\nnet.fit(X_train, y_train)\nprint(net.score(X_test, y_test))"
    }
   ],
   "recap": "Neural networks stack layers of neurons with non-linear activations, trained by backpropagation and gradient descent to reduce a loss function over many epochs."
  },
  "quiz": [
   {
    "q": "Why do neural networks need a non-linear activation function?",
    "options": [
     "To make training slower on purpose",
     "Activation functions are only cosmetic",
     "To reduce the number of neurons needed",
     "Without it, stacking layers collapses into one linear equation"
    ],
    "answer": 3,
    "explain": "Without non-linearity, any number of stacked linear layers is mathematically equivalent to a single linear layer, losing the power of depth."
   },
   {
    "q": "Backpropagation is used to:",
    "options": [
     "Choose the number of layers automatically",
     "Convert categories to numbers",
     "Compute how much each weight contributed to the error, using the chain rule",
     "Collect more training data"
    ],
    "answer": 2,
    "explain": "Backpropagation applies the chain rule backward through the network to compute each weight's gradient with respect to the loss."
   },
   {
    "q": "'Deep' in deep learning refers to:",
    "options": [
     "The use of decision trees",
     "Very small learning rates",
     "Very large datasets only",
     "Networks with many hidden layers"
    ],
    "answer": 3,
    "explain": "Depth refers to the number of stacked hidden layers a network has, allowing it to represent more complex patterns."
   },
   {
    "q": "If the learning rate is set far too high, training typically:",
    "options": [
     "Overshoots and fails to settle down",
     "Has no effect on the result",
     "Converges faster than normal, safely",
     "Automatically corrects itself"
    ],
    "answer": 0,
    "explain": "A learning rate that is too large causes gradient descent steps to overshoot the minimum repeatedly instead of converging."
   }
  ]
 },
 "ml-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A plain neural network treats an image as one long list of pixel numbers, throwing away the fact that nearby pixels are related. Convolutional Neural Networks (CNNs) fix this: a small filter (kernel) slides across the image, learning to detect local patterns like edges, corners, or textures."
    },
    {
     "type": "text",
     "text": "Early convolutional layers learn simple patterns like edges; deeper layers combine those into more complex shapes, and eventually into whole objects like eyes or wheels. Pooling layers shrink the image between convolutions, keeping the strongest signal and making the network faster and more tolerant of small shifts in position."
    },
    {
     "type": "text",
     "text": "CNNs power image classification, object detection, and medical image analysis. For sequential data like text or speech, Recurrent Neural Networks (RNNs) and their successors (LSTMs, and now Transformers) are used instead, because they can remember information across a sequence of steps, not just a grid of pixels."
    },
    {
     "type": "tip",
     "text": "You rarely train a huge CNN from scratch. Transfer learning takes a network already trained on millions of images (like ImageNet) and fine-tunes only its last few layers on your smaller dataset — this saves enormous time and data, and is standard industry practice."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from tensorflow.keras import layers, models\n\nmodel = models.Sequential([\n    layers.Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),\n    layers.MaxPooling2D((2,2)),\n    layers.Flatten(),\n    layers.Dense(64, activation='relu'),\n    layers.Dense(10, activation='softmax')\n])\nmodel.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])"
    }
   ],
   "recap": "CNNs use sliding filters and pooling to learn spatial patterns in images, from edges to whole objects; RNNs/Transformers handle sequences, and transfer learning reuses pretrained networks."
  },
  "quiz": [
   {
    "q": "Why are CNNs better suited to images than a plain fully-connected network?",
    "options": [
     "They require no training data",
     "They exploit the local spatial relationship between nearby pixels",
     "They cannot detect edges",
     "They ignore all pixel values"
    ],
    "answer": 1,
    "explain": "Convolutional filters slide across local regions, learning spatial patterns like edges that a flat pixel list would ignore."
   },
   {
    "q": "In a CNN, what do the earliest convolutional layers typically learn?",
    "options": [
     "Simple local patterns like edges and corners",
     "Text sentiment",
     "Whole objects like faces",
     "Cluster centroids"
    ],
    "answer": 0,
    "explain": "Early layers detect simple, low-level patterns; deeper layers combine these into increasingly complex shapes and objects."
   },
   {
    "q": "Transfer learning is useful because it lets you:",
    "options": [
     "Train without any labels at all",
     "Reuse a network pretrained on a large dataset and fine-tune it on your smaller one",
     "Skip evaluation entirely",
     "Avoid using activation functions"
    ],
    "answer": 1,
    "explain": "Transfer learning fine-tunes a model already trained on a large dataset, saving time and data on your specific task."
   },
   {
    "q": "For sequential data like text, which architecture family is typically used instead of a CNN?",
    "options": [
     "Decision trees only",
     "RNNs/LSTMs or Transformers",
     "k-Means",
     "Naive Bayes only"
    ],
    "answer": 1,
    "explain": "RNNs, LSTMs, and Transformers are designed to handle sequences by carrying information across time steps or positions."
   }
  ]
 },
 "ml-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Getting a model to score well in a notebook is only half the job. In production, a model is wrapped behind an API so other software can send it new data and get predictions back, often packaged in a container (like Docker) so it runs the same way everywhere it is deployed."
    },
    {
     "type": "text",
     "text": "Once deployed, a model can suffer from data drift: the real world changes and the incoming data no longer looks like the training data, so accuracy quietly degrades over time. This is why production systems monitor prediction quality continuously and retrain on fresh data on a schedule."
    },
    {
     "type": "text",
     "text": "Bias is a serious risk: if the training data reflects historical unfairness (for example, past hiring decisions that favored one group), the model will learn and repeat that bias, even without being told anyone's group directly. Fairness checks across different subgroups of data are part of responsible model evaluation, not an optional extra."
    },
    {
     "type": "tip",
     "text": "A classic interview question is 'what happens after you deploy a model?' — the strong answer covers monitoring for drift, a retraining pipeline, logging predictions for auditing, and a rollback plan if the new model performs worse than the old one."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import joblib\n\n# save a trained model for deployment\njoblib.dump(model, 'model.pkl')\n\n# later, in the serving API:\nloaded_model = joblib.load('model.pkl')\nprediction = loaded_model.predict(new_data)\n# monitor: log predictions + true outcomes to detect drift over time"
    }
   ],
   "recap": "Deploying an ML model is only the start: watch for data drift, retrain on fresh data, and check for bias across subgroups — production ML is a continuous responsibility, not a one-time task."
  },
  "quiz": [
   {
    "q": "Data drift refers to:",
    "options": [
     "Real-world data changing over time so it no longer matches training data",
     "A bug in the training code",
     "A model that trains too slowly",
     "Missing values in a dataset"
    ],
    "answer": 0,
    "explain": "Drift happens when the distribution of incoming data shifts away from what the model was trained on, quietly hurting accuracy."
   },
   {
    "q": "A model can become biased even without being given a protected attribute directly because:",
    "options": [
     "It only happens with neural networks",
     "Other features can act as proxies that encode historical bias in the training data",
     "Bias only comes from the algorithm's code",
     "Bias is impossible without that attribute"
    ],
    "answer": 1,
    "explain": "Historical unfairness embedded in the data (via correlated features) can be learned by the model even if the sensitive attribute itself is removed."
   },
   {
    "q": "Why do production systems retrain models on a schedule?",
    "options": [
     "To make the code look busy",
     "To keep up with data drift as the real world changes",
     "Because retraining is required by scikit-learn",
     "To reduce the number of features"
    ],
    "answer": 1,
    "explain": "Regular retraining on fresh data helps a model stay accurate as the underlying data distribution shifts over time."
   },
   {
    "q": "A strong answer to 'what happens after deployment' should mention:",
    "options": [
     "Monitoring for drift, retraining, logging, and a rollback plan",
     "Only that the model was accurate on the test set",
     "Nothing, deployment is the final step",
     "Deleting the training data immediately"
    ],
    "answer": 0,
    "explain": "Responsible deployment includes ongoing monitoring, a retraining pipeline, prediction logging, and a way to roll back a worse-performing update."
   }
  ]
 }
}
