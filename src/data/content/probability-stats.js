// Lesson text and quiz questions for "Probability & Statistics".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "probability-stats-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Probability is just a way of putting a number on how likely something is to happen. That number always sits between 0 and 1. A probability of 0 means it can never happen, 1 means it is certain, and 0.5 means it is a coin-flip either way."
    },
    {
     "type": "text",
     "text": "For a fair situation where every outcome is equally likely, probability is simply: favorable outcomes divided by total outcomes. Roll a normal 6-sided die and ask 'what's the chance of a 4?' There is 1 favorable outcome (the 4) out of 6 total, so the probability is 1/6."
    },
    {
     "type": "tip",
     "text": "Think of probability like a battery bar: empty (0) means impossible, full (1) means guaranteed. Everything real lives somewhere in between."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Probability of rolling a 4 on a fair die\nfavorable = 1      # just the number 4\ntotal = 6          # faces 1..6\nprob = favorable / total\nprint(prob)        # 0.1666...  (about 16.7%)"
    },
    {
     "type": "text",
     "text": "Because all probabilities of every possible outcome must cover 'something definitely happens', they always add up to 1. The six die faces each have probability 1/6, and 6 x (1/6) = 1."
    }
   ],
   "recap": "Probability is a number from 0 to 1 measuring how likely an event is, found as favorable outcomes over total outcomes."
  },
  "quiz": [
   {
    "q": "What is the probability of rolling a 4 on a fair 6-sided die?",
    "options": [
     "1/6",
     "4/6",
     "1/2",
     "1/4"
    ],
    "answer": 0,
    "explain": "There is 1 favorable face (the 4) out of 6 total faces, so the probability is 1/6."
   },
   {
    "q": "A probability value can never be:",
    "options": [
     "Equal to 0.5",
     "Equal to 1",
     "Equal to 0",
     "Greater than 1"
    ],
    "answer": 3,
    "explain": "Probabilities are always between 0 and 1 inclusive, so a value above 1 is impossible."
   },
   {
    "q": "If an event is certain to happen, its probability is:",
    "options": [
     "1",
     "100",
     "0",
     "0.5"
    ],
    "answer": 0,
    "explain": "A certainty is represented by a probability of exactly 1."
   },
   {
    "q": "The probabilities of all possible outcomes of an experiment must add up to:",
    "options": [
     "It varies",
     "1",
     "0",
     "The number of outcomes"
    ],
    "answer": 1,
    "explain": "Since something must happen, the probabilities of all outcomes always sum to 1."
   }
  ]
 },
 "probability-stats-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "An outcome is a single possible result, like rolling a 3. An event is a collection of outcomes we care about, like 'rolling an even number', which groups the outcomes 2, 4, and 6. The full list of all possible outcomes is called the sample space."
    },
    {
     "type": "text",
     "text": "Events can combine. The probability of A OR B (either happens) uses addition, and if the two events cannot happen at the same time (mutually exclusive), you just add their probabilities. The probability of A AND B both happening, when they are independent (one does not affect the other), is found by multiplying."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: 'OR' usually means add, 'AND' usually means multiply. Rolling a 1 OR a 2 = 1/6 + 1/6. Getting heads AND heads on two flips = 1/2 x 1/2."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Two independent coin flips: P(heads AND heads)\np_heads = 0.5\np_both = p_heads * p_heads   # AND -> multiply\nprint(p_both)                # 0.25\n\n# One die: P(rolling a 1 OR a 2) -- mutually exclusive\np_one_or_two = 1/6 + 1/6     # OR -> add\nprint(p_one_or_two)          # 0.333..."
    },
    {
     "type": "text",
     "text": "The complement of an event is 'everything except it'. Since the whole sample space adds to 1, the probability of an event NOT happening is 1 minus its probability. If rain has probability 0.3, then no-rain has probability 0.7."
    }
   ],
   "recap": "Outcomes are single results, events are groups of outcomes; combine with add for OR, multiply for independent AND, and use 1 minus P for the complement."
  },
  "quiz": [
   {
    "q": "Rolling an even number on a die is an example of a(n):",
    "options": [
     "Single outcome",
     "Complement",
     "Sample space",
     "Event"
    ],
    "answer": 3,
    "explain": "It is an event because it groups several outcomes (2, 4, and 6) together."
   },
   {
    "q": "For two independent coin flips, the probability of getting heads on both is:",
    "options": [
     "0.75",
     "0.25",
     "1.0",
     "0.5"
    ],
    "answer": 1,
    "explain": "Independent AND events multiply: 0.5 x 0.5 = 0.25."
   },
   {
    "q": "If the probability of rain is 0.3, the probability of no rain is:",
    "options": [
     "1.3",
     "0",
     "0.7",
     "0.3"
    ],
    "answer": 2,
    "explain": "The complement is 1 minus the event's probability: 1 - 0.3 = 0.7."
   },
   {
    "q": "For two mutually exclusive events, the probability that either one happens is found by:",
    "options": [
     "Subtracting them",
     "Multiplying them",
     "Dividing them",
     "Adding them"
    ],
    "answer": 3,
    "explain": "Mutually exclusive OR events are combined by adding their probabilities."
   }
  ]
 },
 "probability-stats-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When you have a pile of numbers, you often want one value that represents the 'center'. Statistics gives three: the mean, median, and mode. Each answers 'what is typical?' in a slightly different way."
    },
    {
     "type": "text",
     "text": "The mean (average) is the sum of all values divided by how many there are. The median is the middle value once the numbers are sorted (with an even count, average the two middle ones). The mode is the value that appears most often."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "data = [4, 8, 6, 4, 10]\n\nmean = sum(data) / len(data)      # (4+8+6+4+10)/5 = 6.4\n\nordered = sorted(data)            # [4, 4, 6, 8, 10]\nmedian = ordered[len(ordered)//2] # middle value = 6\n\nmode = 4                          # 4 appears most often\nprint(mean, median, mode)         # 6.4 6 4"
    },
    {
     "type": "tip",
     "text": "The mean gets dragged by outliers; the median does not. One billionaire in a room makes the AVERAGE salary huge, but the MEDIAN salary barely moves, which is why news often reports median income."
    },
    {
     "type": "text",
     "text": "As a computer engineer, you will compute these constantly: average response time of a server, median latency (better than mean when a few slow requests skew things), or the most common error code (mode). Picking the right measure changes the story your data tells."
    }
   ],
   "recap": "Mean is the average, median is the sorted middle value, and mode is the most frequent value; the median resists outliers better than the mean."
  },
  "quiz": [
   {
    "q": "What is the mean of the data set [4, 8, 6, 4, 10]?",
    "options": [
     "6.4",
     "4",
     "6",
     "8"
    ],
    "answer": 0,
    "explain": "The sum is 32 and there are 5 values, so 32/5 = 6.4."
   },
   {
    "q": "The median of a sorted list is:",
    "options": [
     "The largest value",
     "The most frequent value",
     "The middle value",
     "The sum divided by count"
    ],
    "answer": 2,
    "explain": "The median is the middle value of the sorted data."
   },
   {
    "q": "Which measure of center is LEAST affected by a single extreme outlier?",
    "options": [
     "Range",
     "Mean",
     "Sum",
     "Median"
    ],
    "answer": 3,
    "explain": "The median depends only on position, so one extreme value barely shifts it."
   },
   {
    "q": "In the list [4, 4, 6, 8, 10], the mode is:",
    "options": [
     "10",
     "6",
     "8",
     "4"
    ],
    "answer": 3,
    "explain": "The mode is the most frequent value, and 4 appears twice while the rest appear once."
   }
  ]
 },
 "probability-stats-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The mean tells you the center, but not how spread out the data is. Two servers can both average 100 ms latency, yet one is rock-steady while the other swings from 10 ms to 300 ms. Variance and standard deviation measure that spread."
    },
    {
     "type": "text",
     "text": "Variance is the average of the squared distances from the mean. You square each difference (so negatives and positives do not cancel out), average them, and that is the variance. Standard deviation is simply the square root of the variance, which brings the number back to the original units."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "data = [2, 4, 4, 4, 5, 5, 7, 9]\nmean = sum(data) / len(data)          # 5.0\n\nsquared_diffs = [(x - mean) ** 2 for x in data]\nvariance = sum(squared_diffs) / len(data)   # 4.0\nstd_dev = variance ** 0.5                    # 2.0\nprint(variance, std_dev)                     # 4.0 2.0"
    },
    {
     "type": "tip",
     "text": "Standard deviation is more intuitive than variance because it is in the same units as your data. If latency is in milliseconds, the standard deviation is also in milliseconds, while variance is in 'ms squared'."
    },
    {
     "type": "text",
     "text": "A small standard deviation means values cluster tightly around the mean (consistent, predictable). A large one means they are scattered (volatile). In engineering, low variance often means reliability, which is why you monitor not just average performance but its stability."
    }
   ],
   "recap": "Variance is the average squared distance from the mean, and standard deviation is its square root; both measure spread, with a smaller value meaning more consistent data."
  },
  "quiz": [
   {
    "q": "Standard deviation is calculated as the:",
    "options": [
     "Sum of the differences",
     "Mean of the data",
     "Square of the variance",
     "Square root of the variance"
    ],
    "answer": 3,
    "explain": "Standard deviation is the square root of the variance, returning it to the original units."
   },
   {
    "q": "Why are the differences from the mean squared when computing variance?",
    "options": [
     "So positives and negatives do not cancel out",
     "To convert to percentages",
     "To remove the mean",
     "To make the math faster"
    ],
    "answer": 0,
    "explain": "Squaring makes every difference positive so opposite-sign deviations do not cancel each other."
   },
   {
    "q": "Two data sets have the same mean. The one with the SMALLER standard deviation is:",
    "options": [
     "Missing values",
     "More spread out",
     "More tightly clustered",
     "Always larger"
    ],
    "answer": 2,
    "explain": "A smaller standard deviation means the values sit closer to the mean, so they are tightly clustered."
   },
   {
    "q": "An advantage of standard deviation over variance is that it:",
    "options": [
     "Cannot be negative only",
     "Uses the same units as the data",
     "Ignores the mean",
     "Is always zero"
    ],
    "answer": 1,
    "explain": "Standard deviation shares the data's original units, making it easier to interpret."
   }
  ]
 },
 "probability-stats-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A probability distribution describes how likely each possible value is. Instead of listing outcomes one by one, a distribution gives you the whole shape at once. A few standard shapes show up again and again, so recognizing them is a superpower."
    },
    {
     "type": "text",
     "text": "The uniform distribution is flat: every outcome is equally likely, like a fair die. The normal distribution is the famous bell curve: most values cluster near the mean and rarer values trail off symmetrically on both sides. Heights, measurement errors, and exam scores often look normal."
    },
    {
     "type": "tip",
     "text": "Picture the normal distribution as a hill: the peak is the mean, and about 68% of all data falls within one standard deviation of that peak, roughly 95% within two. This is the '68-95-99.7 rule'."
    },
    {
     "type": "text",
     "text": "The binomial distribution counts successes in a fixed number of yes/no trials, like how many heads in 10 coin flips. The Poisson distribution models how many events happen in a fixed window, like requests hitting a server per second. Both are workhorses in computing and networking."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Simulate a normal distribution and check the 68% rule\nimport random\nsamples = [random.gauss(0, 1) for _ in range(100000)]  # mean 0, std 1\nwithin_one_std = sum(1 for x in samples if -1 < x < 1)\nprint(within_one_std / len(samples))   # ~0.68"
    }
   ],
   "recap": "Distributions describe the shape of likely values: uniform is flat, normal is the bell curve (68-95-99.7 rule), binomial counts successes in trials, and Poisson counts events per interval."
  },
  "quiz": [
   {
    "q": "In a normal distribution, approximately what percent of data falls within one standard deviation of the mean?",
    "options": [
     "100%",
     "50%",
     "95%",
     "68%"
    ],
    "answer": 3,
    "explain": "By the 68-95-99.7 rule, about 68% of values lie within one standard deviation of the mean."
   },
   {
    "q": "A distribution where every outcome is equally likely is called:",
    "options": [
     "Binomial",
     "Poisson",
     "Normal",
     "Uniform"
    ],
    "answer": 3,
    "explain": "The uniform distribution assigns equal probability to every outcome, like a fair die."
   },
   {
    "q": "Counting the number of heads in 10 coin flips is best modeled by the:",
    "options": [
     "Poisson distribution",
     "Binomial distribution",
     "Normal distribution",
     "Uniform distribution"
    ],
    "answer": 1,
    "explain": "The binomial distribution counts successes across a fixed number of independent yes/no trials."
   },
   {
    "q": "Which distribution best models the number of requests arriving at a server each second?",
    "options": [
     "Bell curve only",
     "Poisson",
     "Uniform",
     "Binomial"
    ],
    "answer": 1,
    "explain": "The Poisson distribution models counts of events occurring in a fixed interval of time."
   }
  ]
 },
 "probability-stats-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything you have learned comes together in data science and machine learning. Models learn from data, and data is noisy, so statistics is the language for separating real signal from random noise. Without it, you cannot tell whether a result is meaningful or just luck."
    },
    {
     "type": "text",
     "text": "Sampling and inference let you study a small sample and draw conclusions about a huge population, because measuring everyone is impossible. Hypothesis testing gives a disciplined way to ask 'is this difference real?' The p-value estimates how likely you would see your result if nothing were actually going on, and a small p-value suggests a genuine effect."
    },
    {
     "type": "tip",
     "text": "Correlation is not causation. Ice cream sales and drowning deaths rise together, but ice cream does not cause drowning, hot weather drives both. Always ask what hidden variable might be lurking behind a pattern."
    },
    {
     "type": "text",
     "text": "Machine learning is applied statistics at scale. A model's predictions are probability estimates, training minimizes a loss that is often rooted in likelihood, and you evaluate models with statistical metrics like accuracy, precision, and confidence intervals. The mean, variance, and distributions from earlier levels are the raw ingredients."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A classifier outputs a probability, not just a label\nspam_probability = 0.87\nthreshold = 0.5\nlabel = \"spam\" if spam_probability > threshold else \"not spam\"\nprint(label, f\"(confidence {spam_probability:.0%})\")  # spam (confidence 87%)"
    },
    {
     "type": "text",
     "text": "The big idea: statistics turns raw data into trustworthy decisions. As a computer engineer you will build systems that measure, predict, and A/B test, and every one of them rests on the probability and statistics foundations in this track."
    }
   ],
   "recap": "Statistics is the backbone of data science: it powers sampling, hypothesis testing, p-values, and machine-learning models, helping separate real signal from random noise while never confusing correlation with causation."
  },
  "quiz": [
   {
    "q": "A small p-value in hypothesis testing suggests that:",
    "options": [
     "The observed effect is probably real",
     "The sample was too big",
     "Nothing can be concluded",
     "The result is likely random noise"
    ],
    "answer": 0,
    "explain": "A small p-value means the result would be unlikely by chance alone, suggesting a genuine effect."
   },
   {
    "q": "'Correlation is not causation' warns that two variables moving together:",
    "options": [
     "Are always unrelated",
     "May share a hidden cause instead",
     "Cannot be measured",
     "Must cause each other"
    ],
    "answer": 1,
    "explain": "Correlated variables may both be driven by a lurking third factor rather than one causing the other."
   },
   {
    "q": "Why do we use sampling and inference in statistics?",
    "options": [
     "Measuring an entire population is often impossible",
     "Populations do not exist",
     "Samples are always wrong",
     "To avoid using any math"
    ],
    "answer": 0,
    "explain": "Sampling lets us draw conclusions about a large population when measuring everyone is impractical."
   },
   {
    "q": "In machine learning, a classifier's output like 0.87 is best understood as:",
    "options": [
     "A memory address",
     "An exact count",
     "A probability or confidence estimate",
     "A random seed"
    ],
    "answer": 2,
    "explain": "Classifiers output probability estimates, so 0.87 represents the model's confidence in that class."
   }
  ]
 },
 "probability-stats-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Conditional probability is the chance of an event happening given that another event has already happened. We write it P(A|B), read as 'probability of A given B'. Knowing B occurred can change how likely A is."
    },
    {
     "type": "text",
     "text": "The formula is P(A|B) = P(A and B) / P(B). In words: look only at the world where B is true, and ask what fraction of that smaller world also has A true."
    },
    {
     "type": "tip",
     "text": "The word 'given' is a signal to shrink your sample space. Once you know B happened, forget about outcomes where B did not happen."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Draw one card from a standard 52-card deck.\n# What is P(card is a heart | card is red)?\nred_cards = 26          # hearts + diamonds\nhearts_and_red = 13     # all hearts are red\np_heart_given_red = hearts_and_red / red_cards\nprint(p_heart_given_red)  # 0.5"
    },
    {
     "type": "text",
     "text": "Rearranging the formula gives the multiplication rule: P(A and B) = P(A|B) x P(B). This lets you build up the probability of two things happening together from conditional pieces, which is the base you need for Bayes' theorem next."
    }
   ],
   "recap": "Conditional probability P(A|B) measures the chance of A once you already know B happened, found by narrowing the sample space to only outcomes where B is true."
  },
  "quiz": [
   {
    "q": "What does P(A|B) mean?",
    "options": [
     "Probability of A or B happening",
     "Probability of A, given that B already happened",
     "Probability that B happens because of A",
     "Probability of A and B both happening"
    ],
    "answer": 1,
    "explain": "P(A|B) is read 'probability of A given B' — it assumes B has already occurred."
   },
   {
    "q": "A bag has 3 red and 2 blue balls. If you're told the ball drawn is red, what is P(it is also numbered 1 | it is red), given exactly 1 of the 3 red balls is numbered 1?",
    "options": [
     "1/2",
     "1/5",
     "1/3",
     "3/5"
    ],
    "answer": 2,
    "explain": "Once told it's red, the sample space shrinks to the 3 red balls, and 1 of those 3 is numbered 1, giving 1/3."
   },
   {
    "q": "The multiplication rule P(A and B) = P(A|B) x P(B) comes directly from:",
    "options": [
     "The normal distribution",
     "Bayes' theorem",
     "Rearranging the conditional probability formula",
     "The law of large numbers"
    ],
    "answer": 2,
    "explain": "Multiplying both sides of P(A|B) = P(A and B)/P(B) by P(B) gives the multiplication rule."
   },
   {
    "q": "Why does conditioning on an event B usually change the probability of A?",
    "options": [
     "Because knowing B narrows the sample space to a smaller, more relevant set of outcomes",
     "It never actually changes anything",
     "Because probabilities must always equal 0.5",
     "Because B causes A"
    ],
    "answer": 0,
    "explain": "Conditioning restricts attention to the outcomes consistent with B, which can shift how likely A looks within that smaller set."
   }
  ]
 },
 "probability-stats-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Bayes' theorem lets you flip a conditional probability around. If you know P(B|A), you can find P(A|B) using: P(A|B) = P(B|A) x P(A) / P(B). It is how you update a belief once new evidence arrives."
    },
    {
     "type": "text",
     "text": "Classic example: a disease affects 1% of people. A test is 99% accurate. If you test positive, what's the chance you actually have the disease? Surprisingly, it is far below 99%, because most positives come from the huge pool of healthy people who got a rare false positive."
    },
    {
     "type": "tip",
     "text": "Do not confuse P(A|B) with P(B|A). 'Chance you have the disease given a positive test' is NOT the same number as 'chance of a positive test given you have the disease'. Mixing these up is the single most common Bayes mistake."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Bayes' theorem: disease testing\np_disease = 0.01              # P(A): 1% have the disease\np_pos_given_disease = 0.99    # P(B|A): test catches true cases\np_pos_given_healthy = 0.05    # P(B|not A): 5% false positive rate\n\np_healthy = 1 - p_disease\np_pos = (p_pos_given_disease * p_disease) + (p_pos_given_healthy * p_healthy)\np_disease_given_pos = (p_pos_given_disease * p_disease) / p_pos\nprint(round(p_disease_given_pos, 3))  # about 0.167, only ~17%"
    },
    {
     "type": "text",
     "text": "Bayes' theorem is the engine behind spam filters, medical diagnosis tools, and recommendation systems: each new piece of evidence updates a prior belief into a more accurate posterior belief."
    }
   ],
   "recap": "Bayes' theorem, P(A|B) = P(B|A) x P(A) / P(B), lets you reverse a conditional probability and update your belief in A after observing evidence B."
  },
  "quiz": [
   {
    "q": "Bayes' theorem is used to:",
    "options": [
     "Find the variance of a distribution",
     "Reverse a conditional probability, going from P(B|A) to P(A|B)",
     "Calculate the mean of a dataset",
     "Prove two events are independent"
    ],
    "answer": 1,
    "explain": "Bayes' theorem converts a known conditional probability in one direction into the reverse conditional probability."
   },
   {
    "q": "In the disease-test example, why is P(disease | positive test) much lower than the test's 99% accuracy?",
    "options": [
     "Because most positives come from the large healthy population producing rare false positives",
     "The test is actually useless",
     "Because 99% accuracy is impossible",
     "Because probability formulas always underestimate"
    ],
    "answer": 0,
    "explain": "When the disease is rare, even a small false-positive rate among the huge healthy group outnumbers true positives from the small sick group."
   },
   {
    "q": "In P(A|B) = P(B|A) x P(A) / P(B), what does P(A) represent?",
    "options": [
     "The posterior probability",
     "The test's error rate",
     "The prior probability of A before seeing evidence B",
     "The probability of B alone"
    ],
    "answer": 2,
    "explain": "P(A) is the prior — what you believed about A's chance before the new evidence B arrived."
   },
   {
    "q": "Which of these is a real-world use of Bayes' theorem?",
    "options": [
     "A spam filter updating the odds an email is spam based on words it contains",
     "Sorting an array",
     "Drawing a bar chart",
     "Compiling source code"
    ],
    "answer": 0,
    "explain": "Spam filters treat each word as evidence and use Bayes' theorem to update the probability that a message is spam."
   }
  ]
 },
 "probability-stats-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Two events are independent if one happening tells you nothing about the other. Formally, A and B are independent when P(A|B) = P(A), which also means P(A and B) = P(A) x P(B). Flipping two separate coins is independent: the first flip has zero effect on the second."
    },
    {
     "type": "text",
     "text": "Events are dependent when one changes the odds of the other. Drawing two cards from a deck without putting the first one back is dependent, because the deck composition changes after the first draw."
    },
    {
     "type": "tip",
     "text": "To test independence, check if P(A|B) equals plain P(A). If conditioning changes the number at all, the events are dependent, no matter how small the change."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Independent: two fair coin flips, both heads\np_two_heads_independent = 0.5 * 0.5\nprint(p_two_heads_independent)  # 0.25\n\n# Dependent: two aces drawn from a deck without replacement\np_first_ace = 4 / 52\np_second_ace_given_first = 3 / 51   # one ace and one card gone\np_two_aces = p_first_ace * p_second_ace_given_first\nprint(round(p_two_aces, 4))  # about 0.0045"
    },
    {
     "type": "text",
     "text": "For independent events the multiplication rule simplifies to just multiplying the plain probabilities, since conditioning does nothing. For dependent events, you must use the conditional probability that reflects the updated situation."
    }
   ],
   "recap": "Independent events satisfy P(A and B) = P(A) x P(B) because knowing one gives no information about the other; dependent events require the conditional probability that accounts for that change."
  },
  "quiz": [
   {
    "q": "Two events A and B are independent when:",
    "options": [
     "P(A) + P(B) = 1",
     "P(A|B) = P(A)",
     "P(A|B) = P(B|A)",
     "P(A and B) = 0"
    ],
    "answer": 1,
    "explain": "Independence means knowing B occurred does not change the probability of A, so P(A|B) equals plain P(A)."
   },
   {
    "q": "Drawing two cards from a deck WITHOUT replacement is an example of:",
    "options": [
     "Impossible events",
     "Dependent events, since the deck changes after the first draw",
     "Mutually exclusive events",
     "Independent events"
    ],
    "answer": 1,
    "explain": "Removing the first card changes the deck's composition, so the second draw's probabilities depend on the first."
   },
   {
    "q": "For two independent events with P(A) = 0.4 and P(B) = 0.5, what is P(A and B)?",
    "options": [
     "0.2",
     "0.9",
     "0.1",
     "0.45"
    ],
    "answer": 0,
    "explain": "Independent events multiply directly: 0.4 x 0.5 = 0.2."
   },
   {
    "q": "If flipping a fair coin twice, why is the second flip's outcome independent of the first?",
    "options": [
     "Because heads and tails are mutually exclusive",
     "Because two flips can never both be heads",
     "Because the coin has no memory of past flips",
     "Because coins are always fair"
    ],
    "answer": 2,
    "explain": "Each flip is a fresh, unrelated physical event, so the first outcome has no influence on the second."
   }
  ]
 },
 "probability-stats-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Many probability problems boil down to counting: how many favorable outcomes exist out of how many total outcomes. Two counting tools handle most of these: permutations (order matters) and combinations (order does not matter)."
    },
    {
     "type": "text",
     "text": "A permutation of r items chosen from n is nPr = n! / (n - r)!. A combination is nCr = n! / (r! x (n - r)!), which is just the permutation count divided by the r! ways to arrange the chosen items, since order no longer matters."
    },
    {
     "type": "tip",
     "text": "Ask yourself: if I shuffled the chosen items into a different order, would that count as a different outcome? If yes, use permutations. If no, use combinations."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\n# Permutation: how many ways to award gold, silver, bronze to 3 of 8 runners (order matters)\nprint(math.perm(8, 3))  # 336\n\n# Combination: how many ways to pick a 3-person committee from 8 people (order doesn't matter)\nprint(math.comb(8, 3))  # 56"
    },
    {
     "type": "text",
     "text": "These counts feed straight back into basic probability: to find the chance of drawing a specific 5-card poker hand, you count favorable hands with combinations and divide by the total number of 5-card hands, C(52, 5)."
    }
   ],
   "recap": "Permutations count arrangements where order matters (nPr), and combinations count selections where order does not matter (nCr); both give the outcome counts that probability calculations are built from."
  },
  "quiz": [
   {
    "q": "When should you use a permutation instead of a combination?",
    "options": [
     "When the sample space is continuous",
     "When probabilities must be independent",
     "When the order of the chosen items matters",
     "When you are choosing from an infinite set"
    ],
    "answer": 2,
    "explain": "Permutations count arrangements, so they apply whenever swapping the order of the chosen items produces a different outcome."
   },
   {
    "q": "How many ways can you choose a 4-person team from 10 people, where order does not matter?",
    "options": [
     "40",
     "10000",
     "210",
     "5040"
    ],
    "answer": 2,
    "explain": "This is C(10, 4) = 10! / (4! x 6!) = 210."
   },
   {
    "q": "The formula for nCr, n! / (r! x (n-r)!), can be understood as:",
    "options": [
     "The same thing as nPr",
     "Random guessing with no structure",
     "nPr divided by r!, removing the duplicate orderings of each selection",
     "n! multiplied by r!"
    ],
    "answer": 2,
    "explain": "Combinations remove the r! ways each same group of items could be ordered, since order no longer matters."
   },
   {
    "q": "To find the probability of a specific 5-card poker hand, you would divide the count of favorable hands by:",
    "options": [
     "52",
     "5!",
     "P(52, 5)",
     "C(52, 5), the total number of possible 5-card hands"
    ],
    "answer": 3,
    "explain": "A poker hand is an unordered selection of 5 cards from 52, so the total outcome space is C(52, 5)."
   }
  ]
 },
 "probability-stats-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A random variable is just a number that comes out of a random process. Roll a die and let X be the number shown; X is discrete because it can only take specific separate values (1 through 6). Measure someone's height and it is continuous, since it can be any value in a range."
    },
    {
     "type": "text",
     "text": "A probability distribution lists every possible value of a random variable alongside its probability. For a discrete variable this is a probability mass function (PMF); for a continuous variable it is a probability density function (PDF), where probabilities come from the area under a curve rather than a single point."
    },
    {
     "type": "tip",
     "text": "Expected value is not 'the most likely outcome', it is the long-run average if you repeated the experiment forever. A die's expected value is 3.5, a number the die can never actually show."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Expected value of a fair 6-sided die\nvalues = [1, 2, 3, 4, 5, 6]\nprobabilities = [1/6] * 6\nexpected_value = sum(v * p for v, p in zip(values, probabilities))\nprint(expected_value)  # 3.5"
    },
    {
     "type": "text",
     "text": "Every distribution's probabilities must sum (discrete) or integrate (continuous) to exactly 1, since together they must cover every possible outcome. This is the same rule you saw with a single die, just generalized to any random variable."
    }
   ],
   "recap": "A random variable assigns a number to a random outcome, discrete or continuous; its probability distribution (PMF or PDF) describes how likely each value is, and its expected value is the long-run average, not the most common single result."
  },
  "quiz": [
   {
    "q": "Which of these is a discrete random variable?",
    "options": [
     "The exact weight of a random apple",
     "The time until a light bulb fails",
     "A person's exact height",
     "The number of heads in 3 coin flips"
    ],
    "answer": 3,
    "explain": "The number of heads can only be 0, 1, 2, or 3 — separate countable values, which makes it discrete."
   },
   {
    "q": "What is the expected value of rolling a fair 6-sided die?",
    "options": [
     "6",
     "3",
     "3.5",
     "1"
    ],
    "answer": 2,
    "explain": "Expected value is the average of all outcomes weighted by probability: (1+2+3+4+5+6)/6 = 3.5."
   },
   {
    "q": "For a continuous random variable, probability of a value is found using:",
    "options": [
     "A single point on the PDF curve",
     "The area under the PDF curve over a range",
     "Adding up all possible values",
     "Multiplying by 100"
    ],
    "answer": 1,
    "explain": "For continuous variables, probability corresponds to area under the density curve over an interval, not a single point value."
   },
   {
    "q": "Why is expected value not necessarily an outcome the variable can actually take?",
    "options": [
     "Because random variables have no real values",
     "Because expected value is always wrong",
     "Because it is the long-run average across many trials, which can fall between actual possible values",
     "Because probabilities cannot be averaged"
    ],
    "answer": 2,
    "explain": "A die's expected value of 3.5 is an average across infinite rolls, not a face the die can ever show."
   }
  ]
 },
 "probability-stats-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The binomial distribution models the number of successes in a fixed number of independent yes/no trials, each with the same success probability p. Think: flip a coin n times and count the heads, or test n products and count the defective ones."
    },
    {
     "type": "text",
     "text": "Four conditions must hold: a fixed number of trials n, each trial has only two outcomes, trials are independent, and the success probability p stays constant. The formula for exactly k successes is P(X=k) = C(n,k) x p^k x (1-p)^(n-k)."
    },
    {
     "type": "tip",
     "text": "Check all four conditions before reaching for the binomial formula. If p changes between trials (like drawing cards without replacement), it is not binomial."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\n# Probability of exactly 3 correct guesses on 5 true/false questions (p = 0.5 each)\nn, k, p = 5, 3, 0.5\nprob = math.comb(n, k) * (p ** k) * ((1 - p) ** (n - k))\nprint(round(prob, 4))  # 0.3125"
    },
    {
     "type": "text",
     "text": "The binomial distribution's mean is simply n x p, and its variance is n x p x (1-p). These give you a quick shortcut without summing every individual term."
    }
   ],
   "recap": "The binomial distribution finds the probability of exactly k successes in n independent trials with constant success probability p, using P(X=k) = C(n,k) x p^k x (1-p)^(n-k)."
  },
  "quiz": [
   {
    "q": "Which condition is NOT required for the binomial distribution?",
    "options": [
     "Independence between trials",
     "Probability of success must change over time",
     "Constant probability of success across trials",
     "A fixed number of trials"
    ],
    "answer": 1,
    "explain": "Binomial requires the success probability to stay CONSTANT, not change; a changing p breaks the binomial assumption."
   },
   {
    "q": "In the binomial formula P(X=k) = C(n,k) x p^k x (1-p)^(n-k), what does C(n,k) represent?",
    "options": [
     "The mean of the distribution",
     "The number of ways to choose which k trials are successes",
     "The probability of failure",
     "The variance"
    ],
    "answer": 1,
    "explain": "C(n,k) counts how many different arrangements of trials could produce exactly k successes."
   },
   {
    "q": "What is the mean of a binomial distribution with n = 10 and p = 0.3?",
    "options": [
     "3",
     "10",
     "7",
     "0.3"
    ],
    "answer": 0,
    "explain": "The binomial mean is n x p = 10 x 0.3 = 3."
   },
   {
    "q": "Which scenario correctly fits the binomial distribution?",
    "options": [
     "Flipping a fair coin 20 times and counting the heads",
     "Recording the time between bus arrivals",
     "Measuring the exact height of 20 random people",
     "Drawing cards from a deck one at a time without replacement"
    ],
    "answer": 0,
    "explain": "Coin flips are fixed in number, independent, two-outcome, and constant-probability — exactly the binomial setup."
   }
  ]
 },
 "probability-stats-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Poisson distribution models the number of times a rare, random event happens in a fixed interval of time or space, when events happen independently at some average rate. Think: number of emails arriving per hour, or number of typos per page."
    },
    {
     "type": "text",
     "text": "It needs only one parameter, lambda (the average rate). The formula is P(X=k) = (e^-lambda x lambda^k) / k!, giving the probability of exactly k events occurring."
    },
    {
     "type": "tip",
     "text": "Poisson is the go-to model when events are rare relative to the size of the interval, and roughly independent of each other. It also shows up as an approximation to the binomial when n is large and p is small."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import math\n\n# A call center averages 4 calls per minute (lambda = 4).\n# Probability of exactly 6 calls in a given minute?\nlam, k = 4, 6\nprob = (math.exp(-lam) * (lam ** k)) / math.factorial(k)\nprint(round(prob, 4))  # about 0.1042"
    },
    {
     "type": "text",
     "text": "For the Poisson distribution, both the mean and the variance equal lambda, a neat fact that makes it quick to spot in real data: if the variance of a count roughly matches its mean, Poisson is often a good fit."
    }
   ],
   "recap": "The Poisson distribution models the count of rare, independent events in a fixed interval using a single rate parameter lambda, where both the mean and variance equal lambda."
  },
  "quiz": [
   {
    "q": "The Poisson distribution is best suited for modeling:",
    "options": [
     "A fixed number of coin flips",
     "The order in which 5 books are arranged",
     "The number of rare, independent events occurring in a fixed interval",
     "A person's exact height"
    ],
    "answer": 2,
    "explain": "Poisson describes counts of events, like calls or defects, happening over a fixed span at some average rate."
   },
   {
    "q": "What single parameter defines a Poisson distribution?",
    "options": [
     "sigma, the standard deviation",
     "n, the number of trials",
     "lambda, the average event rate",
     "p, the success probability"
    ],
    "answer": 2,
    "explain": "Poisson only needs lambda, the average rate of events over the interval, unlike binomial which needs n and p."
   },
   {
    "q": "For a Poisson distribution, how do the mean and variance relate?",
    "options": [
     "Variance is always zero",
     "Variance is always double the mean",
     "Mean equals variance, both equal to lambda",
     "There is no relationship"
    ],
    "answer": 2,
    "explain": "A defining property of the Poisson distribution is that its mean and variance are both exactly lambda."
   },
   {
    "q": "The Poisson distribution can approximate the binomial distribution when:",
    "options": [
     "there are only 2 trials",
     "n is large and p is small",
     "the trials are dependent",
     "n is small and p is close to 1"
    ],
    "answer": 1,
    "explain": "When trials are many but success is rare, binomial probabilities converge closely to Poisson probabilities with lambda = n x p."
   }
  ]
 },
 "probability-stats-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The normal distribution is the classic symmetric bell curve, defined entirely by its mean (the center) and standard deviation (how spread out it is). Heights, exam scores, and measurement errors often follow it closely."
    },
    {
     "type": "text",
     "text": "The 68-95-99.7 rule says about 68% of values fall within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3. This gives you a fast mental estimate of how unusual a value is."
    },
    {
     "type": "tip",
     "text": "A z-score tells you how many standard deviations a value sits from the mean: z = (x - mean) / standard deviation. A z-score of 2 means the value is unusually far out, in the top few percent."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Exam scores: mean = 70, std dev = 10. A student scored 85.\nmean, std_dev, score = 70, 10, 85\nz = (score - mean) / std_dev\nprint(z)  # 1.5, so 85 is 1.5 standard deviations above average"
    },
    {
     "type": "text",
     "text": "Z-scores let you compare values from completely different distributions on the same scale, and are the basis for looking up probabilities in a standard normal table, or for later tools like confidence intervals and hypothesis tests."
    }
   ],
   "recap": "The normal distribution is a symmetric bell curve set by its mean and standard deviation, and z-scores convert any value into 'how many standard deviations from the mean', letting you compare and judge how typical or extreme it is."
  },
  "quiz": [
   {
    "q": "What two parameters fully define a normal distribution?",
    "options": [
     "n and p",
     "Mean and standard deviation",
     "Minimum and maximum",
     "Median and mode"
    ],
    "answer": 1,
    "explain": "A normal distribution's entire shape and position are determined by just its mean (center) and standard deviation (spread)."
   },
   {
    "q": "According to the 68-95-99.7 rule, about what percent of values fall within 2 standard deviations of the mean?",
    "options": [
     "95%",
     "68%",
     "50%",
     "99.7%"
    ],
    "answer": 0,
    "explain": "The rule states roughly 95% of a normal distribution's values lie within 2 standard deviations of the mean."
   },
   {
    "q": "A value has a z-score of -2. What does that tell you?",
    "options": [
     "It equals the mean",
     "It is 2 units below the mean",
     "It is impossible",
     "It is 2 standard deviations below the mean"
    ],
    "answer": 3,
    "explain": "A z-score measures distance from the mean in standard deviations, so -2 means 2 standard deviations below average."
   },
   {
    "q": "Why are z-scores useful for comparing two different exams with different means and spreads?",
    "options": [
     "They only work on binomial data",
     "They remove the need for a mean",
     "They convert both scores to the same standardized scale of 'standard deviations from the mean'",
     "They are not useful for that"
    ],
    "answer": 2,
    "explain": "Z-scores standardize any value onto a common scale, making scores from different distributions directly comparable."
   }
  ]
 },
 "probability-stats-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A population is the entire group you care about; a sample is a smaller subset you actually measure. Since measuring an entire population is usually impossible, statistics relies on samples and asks how well a sample's average represents the population's true average."
    },
    {
     "type": "text",
     "text": "The central limit theorem (CLT) is one of the most useful facts in statistics: if you take many samples of a reasonably large size (commonly n >= 30) from almost any population, the distribution of the sample means will look approximately normal, even if the original population is not normal at all."
    },
    {
     "type": "tip",
     "text": "The CLT is what lets you use normal-distribution tools like z-scores and confidence intervals on sample means, even when the underlying data is skewed, as long as the sample is large enough."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import random\n\n# Simulate the CLT: population is a skewed set of 1..100 exam times,\n# but the distribution of SAMPLE MEANS becomes bell-shaped.\npopulation = list(range(1, 101))\nsample_means = []\nfor _ in range(1000):\n    sample = random.sample(population, 30)\n    sample_means.append(sum(sample) / len(sample))\n\nprint(round(sum(sample_means) / len(sample_means), 1))  # close to 50.5, the true population mean"
    },
    {
     "type": "text",
     "text": "The spread of the sample means shrinks as sample size grows, measured by the standard error, standard deviation divided by the square root of n. Bigger samples give more precise estimates of the true population mean."
    }
   ],
   "recap": "Sampling lets you estimate a population using a manageable subset, and the central limit theorem guarantees that sample means become approximately normally distributed for large enough samples, no matter the population's original shape."
  },
  "quiz": [
   {
    "q": "The central limit theorem states that, for a large enough sample size, the distribution of sample means:",
    "options": [
     "Becomes uniform",
     "Matches the population's exact shape",
     "Approaches a normal distribution, regardless of the population's original shape",
     "Becomes impossible to predict"
    ],
    "answer": 2,
    "explain": "The CLT guarantees approximate normality of sample means for large samples, even from a skewed or unusual population."
   },
   {
    "q": "What is a commonly used rule-of-thumb minimum sample size for the CLT to apply well?",
    "options": [
     "n >= 2",
     "n >= 1000",
     "n >= 30",
     "n >= 5"
    ],
    "answer": 2,
    "explain": "A sample size of 30 or more is the widely used rule of thumb for the CLT to give a good normal approximation."
   },
   {
    "q": "What happens to the standard error of the sample mean as sample size n increases?",
    "options": [
     "It decreases",
     "It becomes negative",
     "It increases",
     "It stays the same"
    ],
    "answer": 0,
    "explain": "Standard error equals standard deviation divided by the square root of n, so it shrinks as n grows, giving more precise estimates."
   },
   {
    "q": "Why is the central limit theorem so useful in practice?",
    "options": [
     "It only works for binomial data",
     "It lets you apply normal-distribution tools to sample means even when the underlying population isn't normal",
     "It removes the need for sampling",
     "It proves all data must be normal"
    ],
    "answer": 1,
    "explain": "The CLT justifies using z-scores, confidence intervals, and other normal-based tools on sample means from almost any population."
   }
  ]
 },
 "probability-stats-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A confidence interval gives a range of plausible values for a population parameter, instead of a single guessed number. Rather than saying 'the average height is 165cm', you say 'we are 95% confident the true average is between 163cm and 167cm'."
    },
    {
     "type": "text",
     "text": "A confidence interval for a mean is built as: sample mean +/- margin of error, where margin of error = z x (standard deviation / sqrt(n)). The z value depends on the confidence level, 1.96 for 95% confidence is the most common."
    },
    {
     "type": "tip",
     "text": "'95% confidence' does NOT mean 'there's a 95% chance the true value is in this specific interval'. It means the METHOD produces intervals that capture the true value 95% of the time across many repeated samples."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# 95% confidence interval for a sample mean\nsample_mean = 165\nstd_dev = 8\nn = 64\nz = 1.96\n\nmargin_of_error = z * (std_dev / (n ** 0.5))\nlower = sample_mean - margin_of_error\nupper = sample_mean + margin_of_error\nprint(round(lower, 2), round(upper, 2))  # about 163.04 to 166.96"
    },
    {
     "type": "text",
     "text": "Bigger samples and lower confidence levels both produce narrower, more precise intervals; higher confidence and smaller samples widen the interval, since you need more room to be more sure you have captured the true value."
    }
   ],
   "recap": "A confidence interval is a range around a sample estimate, built from the margin of error, that is likely to contain the true population parameter, with the confidence level describing how reliable the interval-building method is."
  },
  "quiz": [
   {
    "q": "A 95% confidence interval means:",
    "options": [
     "95% of the data lies inside the interval",
     "There is a 95% chance the true value is in this exact interval",
     "The method used to build the interval captures the true value in about 95% of repeated samples",
     "The sample mean is wrong 95% of the time"
    ],
    "answer": 2,
    "explain": "Confidence level describes the long-run reliability of the interval-construction method, not the probability for one specific interval."
   },
   {
    "q": "What happens to a confidence interval's width as the sample size n increases (all else equal)?",
    "options": [
     "It stays exactly the same",
     "It widens",
     "It narrows, giving a more precise estimate",
     "It becomes negative"
    ],
    "answer": 2,
    "explain": "Larger samples reduce standard error, which shrinks the margin of error and narrows the interval."
   },
   {
    "q": "In the confidence interval formula, margin of error = z x (std dev / sqrt(n)), increasing the confidence level (say from 90% to 99%) will:",
    "options": [
     "Make std dev irrelevant",
     "Narrow the interval",
     "Have no effect",
     "Widen the interval, since a larger z is needed for more confidence"
    ],
    "answer": 3,
    "explain": "Higher confidence requires a larger z value, which increases the margin of error and widens the interval."
   },
   {
    "q": "Why do we report a confidence interval instead of just the sample mean alone?",
    "options": [
     "Because intervals are required by law",
     "Because a single number is always wrong",
     "Because it communicates the uncertainty around the estimate, not just a point guess",
     "Because means cannot be computed accurately"
    ],
    "answer": 2,
    "explain": "A confidence interval shows a plausible range, honestly reflecting the uncertainty that comes from working with a sample rather than the whole population."
   }
  ]
 },
 "probability-stats-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Hypothesis testing is a formal way to decide whether evidence from a sample is strong enough to challenge an existing assumption. You start with the null hypothesis (H0), the boring 'nothing has changed' claim, versus the alternative hypothesis (H1), what you suspect might actually be true."
    },
    {
     "type": "text",
     "text": "Example: H0 = 'this new drug has no effect', H1 = 'this new drug does have an effect'. You collect data, compute a test statistic, and get a p-value, the probability of seeing data this extreme if H0 were actually true. A small p-value (usually below a significance level alpha, commonly 0.05) leads you to reject H0."
    },
    {
     "type": "tip",
     "text": "You never 'prove H0 is true', you only ever 'fail to reject it'. Absence of strong evidence against H0 is not the same as proof that H0 is correct."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Decision rule using a p-value and significance level\np_value = 0.03\nalpha = 0.05\n\nif p_value < alpha:\n    decision = \"Reject H0 (result is statistically significant)\"\nelse:\n    decision = \"Fail to reject H0 (not enough evidence)\"\nprint(decision)  # Reject H0 (result is statistically significant)"
    },
    {
     "type": "text",
     "text": "Two kinds of mistakes are possible. A Type I error rejects a true H0 (a false alarm), with probability alpha. A Type II error fails to reject a false H0 (a missed effect), with probability beta. Lowering one type of error typically raises the other, so tests must balance the trade-off for the situation."
    }
   ],
   "recap": "Hypothesis testing weighs sample evidence against a null hypothesis using a p-value; a small p-value (below alpha) means you reject H0, while a Type I error is a false alarm and a Type II error is a missed real effect."
  },
  "quiz": [
   {
    "q": "The null hypothesis (H0) typically represents:",
    "options": [
     "Always the correct answer",
     "The claim you are hoping to prove",
     "The 'no effect' or 'nothing has changed' baseline assumption",
     "A random guess with no meaning"
    ],
    "answer": 2,
    "explain": "H0 is the default, status-quo assumption that a test tries to find evidence against."
   },
   {
    "q": "If a hypothesis test gives a p-value of 0.02 and alpha = 0.05, what is the decision?",
    "options": [
     "Reject H0, the result is statistically significant",
     "Fail to reject H0",
     "Accept H0 as definitely true",
     "The test is invalid"
    ],
    "answer": 0,
    "explain": "Since 0.02 is less than alpha (0.05), the evidence is strong enough to reject the null hypothesis."
   },
   {
    "q": "A Type I error occurs when you:",
    "options": [
     "Correctly fail to reject a true H0",
     "Fail to reject a false H0",
     "Correctly reject a false H0",
     "Reject a true H0 (a false alarm)"
    ],
    "answer": 3,
    "explain": "Type I error is rejecting H0 when it was actually true, i.e., a false alarm, with probability alpha."
   },
   {
    "q": "'Failing to reject H0' means:",
    "options": [
     "The test was performed incorrectly",
     "There was not enough evidence in the sample to conclude H0 is false",
     "H0 has been proven true",
     "H1 is automatically true instead"
    ],
    "answer": 1,
    "explain": "Hypothesis tests never prove H0 true; they only say whether the sample gave enough evidence to reject it."
   }
  ]
 },
 "probability-stats-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A t-test compares means when the population standard deviation is unknown or the sample is small, which is the everyday reality for most experiments. It uses the t-distribution, which looks like a normal curve but has fatter tails to account for the extra uncertainty of estimating standard deviation from a small sample."
    },
    {
     "type": "text",
     "text": "A chi-square test instead works with categorical data, like comparing observed counts against expected counts (goodness of fit), or checking whether two categorical variables are associated (test of independence), such as 'is smoking status related to disease presence?'."
    },
    {
     "type": "tip",
     "text": "Quick rule: comparing means of numeric data uses a t-test; comparing counts or proportions of categories uses a chi-square test. Picking the wrong test is a common exam and interview trip-up."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Chi-square style goodness-of-fit statistic (by hand)\nobserved = [50, 30, 20]   # counts in 3 categories\nexpected = [40, 40, 20]   # what we'd expect if evenly likely-ish\n\nchi_square = sum((o - e) ** 2 / e for o, e in zip(observed, expected))\nprint(round(chi_square, 2))  # 5.0 -- compare this to a chi-square critical value"
    },
    {
     "type": "text",
     "text": "Both tests end the same way as any hypothesis test: compute a test statistic, compare it (or its p-value) to a threshold, and decide whether to reject H0. The math differs, but the logic of the earlier level, comparing evidence against a null assumption, stays identical."
    }
   ],
   "recap": "A t-test compares means with an unknown or small-sample standard deviation using the t-distribution, while a chi-square test checks categorical counts for fit or association; both follow the same reject-or-fail-to-reject-H0 logic."
  },
  "quiz": [
   {
    "q": "A t-test is most appropriate when:",
    "options": [
     "You have the entire population's data",
     "Comparing means with an unknown population standard deviation or small sample size",
     "Comparing counts of categorical data",
     "You want to draw a scatter plot"
    ],
    "answer": 1,
    "explain": "The t-test handles the common real-world case of comparing means when the true standard deviation is unknown, using the t-distribution instead of the normal."
   },
   {
    "q": "A chi-square test is best suited for:",
    "options": [
     "Testing whether categorical variables are associated, or if observed counts fit expected counts",
     "Finding the standard deviation of a sample",
     "Comparing two numeric means",
     "Estimating a confidence interval for a mean"
    ],
    "answer": 0,
    "explain": "Chi-square tests work with counts across categories, either checking a fit to expectation or association between two categorical variables."
   },
   {
    "q": "Why does the t-distribution have fatter tails than the normal distribution?",
    "options": [
     "Because it ignores the sample mean",
     "To account for extra uncertainty from estimating standard deviation with a small sample",
     "Because it only applies to categorical data",
     "Because it is used only for very large samples"
    ],
    "answer": 1,
    "explain": "Small samples add uncertainty in estimating spread, so the t-distribution widens its tails compared to the normal to reflect that."
   },
   {
    "q": "You want to test if 'preferred programming language' is associated with 'job role' (both categorical). Which test fits?",
    "options": [
     "t-test",
     "Chi-square test of independence",
     "Binomial distribution",
     "Z-score calculation"
    ],
    "answer": 1,
    "explain": "Testing association between two categorical variables is exactly what a chi-square test of independence is designed for."
   }
  ]
 },
 "probability-stats-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The correlation coefficient, r, measures how strongly two numeric variables move together in a straight-line pattern. It ranges from -1 to 1: near 1 means a strong positive relationship, near -1 a strong negative one, and near 0 means little to no linear relationship."
    },
    {
     "type": "text",
     "text": "Linear regression goes a step further than correlation: it fits an actual line, y = mx + b, through the data using the least-squares method, which picks the slope m and intercept b that minimize the total squared distance between the line and every data point."
    },
    {
     "type": "tip",
     "text": "A high r tells you two variables move together, but says nothing about which one, if either, causes the other. Always separate 'they're related' from 'one causes the other'."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Correlation coefficient by hand for two small variables\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\n\nn = len(x)\nmean_x = sum(x) / n\nmean_y = sum(y) / n\n\ncov = sum((xi - mean_x) * (yi - mean_y) for xi, yi in zip(x, y))\nstd_x = sum((xi - mean_x) ** 2 for xi in x) ** 0.5\nstd_y = sum((yi - mean_y) ** 2 for yi in y) ** 0.5\n\nr = cov / (std_x * std_y)\nprint(round(r, 3))  # about 0.775, a fairly strong positive correlation"
    },
    {
     "type": "text",
     "text": "R-squared, the square of r, tells you what fraction of the variation in y is explained by the linear relationship with x. An r-squared of 0.6 means the line explains 60% of the spread in y, leaving 40% down to other factors or noise."
    }
   ],
   "recap": "Correlation (r) measures the strength and direction of a linear relationship between two variables, and linear regression fits the best-fit line through the data using least squares, with r-squared showing how much of the variation the line explains."
  },
  "quiz": [
   {
    "q": "A correlation coefficient of r = -0.9 indicates:",
    "options": [
     "A strong positive linear relationship",
     "A strong negative linear relationship",
     "That one variable causes the other",
     "No relationship at all"
    ],
    "answer": 1,
    "explain": "Values of r close to -1 indicate a strong negative linear relationship: as one variable rises, the other tends to fall."
   },
   {
    "q": "Linear regression's least-squares method chooses the line that:",
    "options": [
     "Minimizes the total squared vertical distance between the line and the data points",
     "Ignores the intercept entirely",
     "Passes through the most data points exactly",
     "Has the steepest possible slope"
    ],
    "answer": 0,
    "explain": "Least squares finds the slope and intercept that minimize the sum of squared errors between predicted and actual y values."
   },
   {
    "q": "What does an r-squared value of 0.6 mean?",
    "options": [
     "60% of the data points are correct",
     "There is a 60% chance the relationship is real",
     "The line explains about 60% of the variation in the dependent variable",
     "The correlation coefficient r is 6"
    ],
    "answer": 2,
    "explain": "R-squared is the proportion of variance in y accounted for by the linear model, so 0.6 means 60% of the spread is explained."
   },
   {
    "q": "A strong correlation between two variables tells you:",
    "options": [
     "One variable definitely causes the other",
     "The relationship must be linear and causal",
     "They tend to move together, but this alone does not establish causation",
     "The variables are identical"
    ],
    "answer": 2,
    "explain": "Correlation only measures how variables move together; establishing causation requires further evidence beyond just r."
   }
  ]
 },
 "probability-stats-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Placement interviews love probability puzzles because they test whether you truly understand the concepts or just memorize formulas. Two of the most famous are the Monty Hall problem and the birthday paradox, both of which surprise almost everyone on first hearing."
    },
    {
     "type": "text",
     "text": "Monty Hall: you pick 1 of 3 doors, one hides a prize. The host, who knows where the prize is, opens a different door showing no prize, then offers you the chance to switch. Switching wins 2/3 of the time, staying wins only 1/3, because the host's reveal carries information about the other two doors combined."
    },
    {
     "type": "tip",
     "text": "For 'at least one' probability questions, it is almost always easier to compute P(none) and use P(at least one) = 1 - P(none), rather than adding up every individual case directly."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Birthday paradox: probability that in a room of n people, at least 2 share a birthday\ndef birthday_paradox(n, days=365):\n    p_all_different = 1.0\n    for i in range(n):\n        p_all_different *= (days - i) / days\n    return 1 - p_all_different\n\nprint(round(birthday_paradox(23), 3))  # about 0.507 -- just 23 people, over 50% chance!"
    },
    {
     "type": "text",
     "text": "The birthday paradox surprises people because they think of 'their own' birthday matching someone, when actually there are many possible PAIRS to compare (23 people give 253 possible pairs), and each pair has a small chance of matching, but there are enough pairs that a match becomes likely fast. This same 'flip to the complement, count all pairs' thinking solves most tricky interview probability questions."
    }
   ],
   "recap": "Interview-style probability puzzles like Monty Hall and the birthday paradox reward careful reasoning over memorized formulas: switch in Monty Hall (2/3 odds), and use the complement rule (1 - P(none)) for 'at least one' style questions."
  },
  "quiz": [
   {
    "q": "In the Monty Hall problem, after the host reveals a goat behind one of the two doors you didn't pick, what should you do?",
    "options": [
     "Stay, since both remaining doors are equally likely",
     "Switch, since switching wins the prize 2/3 of the time",
     "Ask for a new set of doors",
     "It doesn't matter, both choices are identical"
    ],
    "answer": 1,
    "explain": "Switching wins 2/3 of the time because the host's informed reveal concentrates the other two doors' combined 2/3 probability onto the one remaining unopened door."
   },
   {
    "q": "Why does the birthday paradox produce a surprisingly high probability with only 23 people?",
    "options": [
     "Because it considers all possible PAIRS of people (253 pairs), not just matches to one specific person",
     "Because 23 is close to 365",
     "Because birthdays are not evenly distributed",
     "Because it's a trick question with no real math"
    ],
    "answer": 0,
    "explain": "With 23 people there are C(23,2) = 253 pairs to check for a birthday match, and enough pairs make a match likely even though any single pair rarely matches."
   },
   {
    "q": "The 'complement rule' for finding P(at least one event happens) is:",
    "options": [
     "P(at least one) = 1 - P(none happen)",
     "P(at least one) = P(event) x n",
     "P(at least one) is always 1",
     "P(at least one) = P(event)^n"
    ],
    "answer": 0,
    "explain": "It is usually far easier to compute the probability that NONE of the events happen, then subtract from 1."
   },
   {
    "q": "What makes probability puzzles like Monty Hall valuable in placement interviews?",
    "options": [
     "They reveal whether a candidate reasons correctly about conditional information, not just formula recall",
     "They have no correct answer",
     "They test memorized formulas only",
     "They only test arithmetic speed"
    ],
    "answer": 0,
    "explain": "These puzzles require genuine reasoning about how new information (like the host's reveal) changes probabilities, which formula memorization alone cannot solve."
   }
  ]
 }
}
