// Lesson text and quiz questions for "Data Science & Big Data".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "data-science-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Data science is the craft of turning raw data into useful answers. Instead of guessing why sales dropped or which students might fail, you look at the actual numbers and let evidence guide the decision. It sits where three skills overlap: coding, statistics, and knowledge of the real-world problem you are solving."
    },
    {
     "type": "text",
     "text": "A data scientist does more than run a program. They ask a clear question, gather the right data, clean it, explore it, build a model or chart, and finally explain what it means to a human who will act on it. The 'science' part is the loop of forming a guess (hypothesis), testing it against data, and updating your belief."
    },
    {
     "type": "tip",
     "text": "Think of a doctor: symptoms are the data, tests are the analysis, and the diagnosis is the insight. Data science is diagnosis for businesses, apps, and systems."
    },
    {
     "type": "text",
     "text": "It helps to separate three roles you will hear about. A data analyst mostly describes what happened using dashboards and reports. A data scientist also predicts and explains why, often with statistics or machine learning. A data engineer builds the pipes and storage that keep clean data flowing to both of them."
    }
   ],
   "recap": "Data science combines coding, statistics, and domain knowledge to turn raw data into decisions."
  },
  "quiz": [
   {
    "q": "Which three skills does data science combine?",
    "options": [
     "Design, marketing, sales",
     "Networking, security, and databases",
     "Only advanced mathematics",
     "Coding, statistics, and domain knowledge"
    ],
    "answer": 3,
    "explain": "Data science lives at the overlap of programming, statistics, and understanding the real problem."
   },
   {
    "q": "What is the main job of a data scientist?",
    "options": [
     "To sell software licenses",
     "To design app user interfaces",
     "To store data on servers",
     "To turn raw data into useful answers and decisions"
    ],
    "answer": 3,
    "explain": "The core goal is converting data into insight that guides real decisions."
   },
   {
    "q": "Who typically builds the pipelines and storage that keep clean data flowing?",
    "options": [
     "A quality tester",
     "A data engineer",
     "A graphic designer",
     "A project manager"
    ],
    "answer": 1,
    "explain": "Data engineers build and maintain the systems that move and store data."
   },
   {
    "q": "The 'science' in data science mainly refers to which idea?",
    "options": [
     "Using expensive lab equipment",
     "Memorizing formulas",
     "Always using the newest tool",
     "Forming a hypothesis and testing it against data"
    ],
    "answer": 3,
    "explain": "It is the loop of guessing, testing against evidence, and updating your belief."
   }
  ]
 },
 "data-science-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real projects follow a repeatable path from messy input to a shared result. A common version has these stages: collect the data, store it, clean and transform it, analyze or model it, and finally communicate the findings. This end-to-end path is called the data pipeline."
    },
    {
     "type": "text",
     "text": "Collection is where data enters: sensors, web forms, app logs, APIs, or an existing database. Storage keeps it safe and reachable, often in a database or a data warehouse. Then comes processing, where you fix errors and reshape the data into a tidy table your tools can actually use."
    },
    {
     "type": "tip",
     "text": "You will hear ETL a lot: Extract (pull the data), Transform (clean and reshape it), Load (save it where analysis happens). It is just a name for the middle of the pipeline."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import pandas as pd\n\n# Extract: read raw data from a CSV file\ndf = pd.read_csv('sales.csv')\n\n# Transform: keep only completed orders and add a total column\ndf = df[df['status'] == 'completed']\ndf['total'] = df['price'] * df['quantity']\n\n# Load: save the cleaned result for the analysis step\ndf.to_csv('sales_clean.csv', index=False)"
    },
    {
     "type": "text",
     "text": "A good pipeline is automated and repeatable. If tomorrow's data arrives in the same shape, the same code should run again with no manual editing. That reliability is what separates a one-off script from a real data product."
    }
   ],
   "recap": "A data pipeline moves data through collect, store, clean/transform (ETL), analyze, and communicate."
  },
  "quiz": [
   {
    "q": "What does the acronym ETL stand for?",
    "options": [
     "Encode, Transfer, Link",
     "Evaluate, Train, Launch",
     "Enter, Test, Log",
     "Extract, Transform, Load"
    ],
    "answer": 3,
    "explain": "ETL means Extract the data, Transform (clean/reshape) it, then Load it where analysis happens."
   },
   {
    "q": "Which stage comes first in a typical data pipeline?",
    "options": [
     "Collecting the data",
     "Building a model",
     "Communicating findings",
     "Cleaning the data"
    ],
    "answer": 0,
    "explain": "Nothing can happen until data is collected as the pipeline's input."
   },
   {
    "q": "Why should a pipeline be automated and repeatable?",
    "options": [
     "To avoid using databases",
     "So the same code runs again on new data without manual edits",
     "To make the code longer",
     "So only one person can run it"
    ],
    "answer": 1,
    "explain": "Repeatability lets the same process handle new data reliably, making it a real data product."
   },
   {
    "q": "A data warehouse is mainly used for which pipeline stage?",
    "options": [
     "Writing the final report",
     "Storing data so it is safe and reachable",
     "Collecting sensor readings",
     "Drawing charts"
    ],
    "answer": 1,
    "explain": "Warehouses are storage systems that hold data for later processing and analysis."
   }
  ]
 },
 "data-science-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real data is messy. It has missing values, typos, duplicate rows, wrong types, and outliers that make no sense. Cleaning is the unglamorous stage where you fix these problems, and it often takes more time than the modeling itself. The rule is simple: garbage in, garbage out."
    },
    {
     "type": "text",
     "text": "Missing values are common. You can drop rows that miss critical fields, or fill (impute) them with a sensible substitute like the column's average or most frequent value. Which choice is right depends on how much data is missing and whether that gap carries meaning."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import pandas as pd\n\ndf = pd.read_csv('users.csv')\n\n# Remove exact duplicate rows\ndf = df.drop_duplicates()\n\n# Fill missing ages with the average age\ndf['age'] = df['age'].fillna(df['age'].mean())\n\n# Fix a type: make sure signup dates are real dates\ndf['signup'] = pd.to_datetime(df['signup'])"
    },
    {
     "type": "tip",
     "text": "An outlier like an age of 999 is usually a data-entry error, not a super-centenarian. Always ask whether a strange value is real before you trust it."
    },
    {
     "type": "text",
     "text": "The goal of cleaning is 'tidy data': each row is one observation, each column is one variable, and each value is in a consistent format. A tidy, trustworthy table is what makes every later step — analysis, charts, models — actually reliable."
    }
   ],
   "recap": "Cleaning fixes missing values, duplicates, wrong types, and outliers to produce tidy, trustworthy data."
  },
  "quiz": [
   {
    "q": "The phrase 'garbage in, garbage out' means what?",
    "options": [
     "Garbage collection frees memory",
     "Bad input data leads to bad results",
     "Delete all your data regularly",
     "Always use more data"
    ],
    "answer": 1,
    "explain": "If the input data is flawed, any analysis built on it will also be flawed."
   },
   {
    "q": "Filling a missing value with the column's average is called what?",
    "options": [
     "Encryption",
     "Imputation",
     "Normalization",
     "Compression"
    ],
    "answer": 1,
    "explain": "Imputation is replacing missing values with a sensible substitute like the mean."
   },
   {
    "q": "In tidy data, what does a single row represent?",
    "options": [
     "One database",
     "One observation",
     "One chart",
     "One variable"
    ],
    "answer": 1,
    "explain": "In tidy data each row is one observation and each column is one variable."
   },
   {
    "q": "An 'age' value of 999 in a customer table is most likely what?",
    "options": [
     "A duplicate row",
     "A required field",
     "A valid rare value",
     "A data-entry error to investigate"
    ],
    "answer": 3,
    "explain": "Such an extreme value is almost always an entry error, not a real age."
   }
  ]
 },
 "data-science-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once data is clean, you explore it to find patterns. This starts with summary statistics: the mean (average), the median (middle value), and measures of spread like the standard deviation, which tells you how much values scatter around the average. These numbers give a quick feel for the data before you draw anything."
    },
    {
     "type": "tip",
     "text": "Mean vs median: if one billionaire walks into a room, the average (mean) income jumps wildly, but the median barely moves. The median resists extreme outliers, so it is often the safer 'typical' value."
    },
    {
     "type": "text",
     "text": "Visualization turns numbers into pictures your brain reads instantly. Match the chart to the question: a bar chart compares categories, a line chart shows change over time, a histogram shows how one variable is distributed, and a scatter plot reveals the relationship between two variables."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('sales_clean.csv')\n\n# Quick summary of every numeric column\nprint(df.describe())\n\n# Line chart of total sales over time\ndaily = df.groupby('date')['total'].sum()\ndaily.plot(kind='line', title='Daily Sales')\nplt.show()"
    },
    {
     "type": "text",
     "text": "Two warnings. First, correlation is not causation: ice cream sales and drowning both rise in summer, but neither causes the other — heat does. Second, an honest chart starts its axis at a sensible baseline; a truncated axis can make a tiny change look huge."
    }
   ],
   "recap": "Explore with summary stats, then match the chart to the question — and remember correlation isn't causation."
  },
  "quiz": [
   {
    "q": "Which measure is least affected by a single extreme outlier?",
    "options": [
     "The mean",
     "The median",
     "The sum",
     "The maximum"
    ],
    "answer": 1,
    "explain": "The median is the middle value, so extreme outliers barely shift it."
   },
   {
    "q": "Which chart best shows how a value changes over time?",
    "options": [
     "A pie chart",
     "A scatter plot",
     "A line chart",
     "A histogram"
    ],
    "answer": 2,
    "explain": "Line charts are designed to show trends and change across time."
   },
   {
    "q": "'Correlation is not causation' warns you that...",
    "options": [
     "Bigger data is always better",
     "Charts are always wrong",
     "Two things moving together may share a hidden cause",
     "You should never use statistics"
    ],
    "answer": 2,
    "explain": "Variables can move together because of a third factor rather than one causing the other."
   },
   {
    "q": "Standard deviation measures what about a dataset?",
    "options": [
     "How much the values scatter around the average",
     "Its middle value",
     "Its total count",
     "Its newest entry"
    ],
    "answer": 0,
    "explain": "Standard deviation quantifies the spread of values around the mean."
   }
  ]
 },
 "data-science-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Data becomes 'big' when it is too large or too fast for a single ordinary computer to handle comfortably. It is not just about size — it is about needing new tools and strategies. Practitioners describe the challenge with a set of words that start with V."
    },
    {
     "type": "text",
     "text": "Volume is the sheer amount, from terabytes to petabytes. Velocity is the speed at which new data arrives, like millions of clicks or sensor readings per second. Variety is the mix of formats: neat tables, plus messy text, images, video, and logs that do not fit a tidy grid."
    },
    {
     "type": "tip",
     "text": "Two more Vs are often added: Veracity (can you trust the data — how noisy or uncertain is it?) and Value (does analyzing it actually pay off?). Big without value is just an expensive storage bill."
    },
    {
     "type": "text",
     "text": "The key technical idea for handling volume is distributed computing: instead of one giant machine, you split the work across a cluster of many ordinary machines that cooperate. If one machine fails, the others carry on, and you add capacity by adding more machines rather than buying a bigger one."
    },
    {
     "type": "tip",
     "text": "Scaling 'up' means a bigger single computer and has a hard ceiling. Scaling 'out' means more computers working together and is how big-data systems grow almost without limit."
    }
   ],
   "recap": "Big data is defined by the Vs — Volume, Velocity, Variety (plus Veracity and Value) — and handled by scaling out across clusters."
  },
  "quiz": [
   {
    "q": "In the classic three Vs, which one refers to the speed at which new data arrives?",
    "options": [
     "Volume",
     "Veracity",
     "Velocity",
     "Variety"
    ],
    "answer": 2,
    "explain": "Velocity describes how fast data streams in, such as clicks per second."
   },
   {
    "q": "'Variety' in big data refers to what?",
    "options": [
     "The mix of data formats like text, images, and tables",
     "The total storage cost",
     "The number of servers",
     "The trustworthiness of data"
    ],
    "answer": 0,
    "explain": "Variety is the diversity of data types and formats you must handle."
   },
   {
    "q": "Scaling 'out' instead of 'up' means what?",
    "options": [
     "Deleting old data",
     "Compressing files",
     "Adding more machines that work together",
     "Buying one much bigger machine"
    ],
    "answer": 2,
    "explain": "Scaling out spreads work across many machines, the core of distributed computing."
   },
   {
    "q": "Why is 'Value' considered an important V?",
    "options": [
     "It encrypts the data",
     "It measures file size",
     "Storing huge data is pointless unless analyzing it pays off",
     "It makes data arrive faster"
    ],
    "answer": 2,
    "explain": "Big data only matters if the insight it produces is worth the cost of handling it."
   }
  ]
 },
 "data-science-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The big-data era began with a simple idea: MapReduce. You 'map' a task into many small pieces that run in parallel across a cluster, then 'reduce' the partial results into a final answer. Apache Hadoop made this famous, pairing MapReduce with HDFS, a file system that spreads one huge file across many machines."
    },
    {
     "type": "text",
     "text": "Hadoop wrote intermediate results to disk, which was slow. Apache Spark replaced it as the default engine by keeping data in memory across the cluster, making the same jobs many times faster. Spark also offers friendly APIs in Python, SQL, and Scala, so you write high-level code and it handles the distribution."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from pyspark.sql import SparkSession\n\nspark = SparkSession.builder.appName('sales').getOrCreate()\n\n# Spark reads a huge dataset spread across the cluster\ndf = spark.read.parquet('s3://data/sales/')\n\n# This groupBy runs in parallel on many machines\nresult = df.groupBy('region').sum('total')\nresult.show()"
    },
    {
     "type": "tip",
     "text": "Notice the PySpark code looks almost like pandas. The big difference is that pandas runs on one machine's memory, while Spark spreads the same operation across a whole cluster."
    },
    {
     "type": "text",
     "text": "Around these engines sits a wider ecosystem. Message queues like Apache Kafka carry high-velocity streaming data. Cloud data warehouses like Snowflake or BigQuery let you query enormous tables with plain SQL. And NoSQL databases like Cassandra or MongoDB store variety-heavy data that does not fit neat rows. The lesson: pick the tool that matches the V you are fighting."
    }
   ],
   "recap": "MapReduce and Hadoop started big data; Spark's in-memory engine, plus Kafka, cloud warehouses, and NoSQL, now handle the different Vs."
  },
  "quiz": [
   {
    "q": "What is the core idea of MapReduce?",
    "options": [
     "Map database tables to disk",
     "Split work into parallel pieces (map), then combine results (reduce)",
     "Reduce the size of every file",
     "Store data twice for safety"
    ],
    "answer": 1,
    "explain": "Map breaks a job into parallel tasks and reduce merges their partial results."
   },
   {
    "q": "Why is Apache Spark generally faster than classic Hadoop MapReduce?",
    "options": [
     "It uses fewer machines",
     "It keeps data in memory instead of writing to disk between steps",
     "It skips data cleaning",
     "It only works on small data"
    ],
    "answer": 1,
    "explain": "Spark's in-memory processing avoids Hadoop's slow disk writes between stages."
   },
   {
    "q": "Which tool is designed to carry high-velocity streaming data?",
    "options": [
     "Apache Kafka",
     "Snowflake",
     "HDFS",
     "Matplotlib"
    ],
    "answer": 0,
    "explain": "Kafka is a message queue built for real-time streaming data feeds."
   },
   {
    "q": "A NoSQL database like MongoDB is a good fit mainly for which challenge?",
    "options": [
     "Reducing velocity",
     "Drawing charts",
     "Encrypting passwords",
     "Data that doesn't fit neat rows and columns (Variety)"
    ],
    "answer": 3,
    "explain": "NoSQL stores flexible, variety-heavy data that relational rows and columns handle poorly."
   }
  ]
 },
 "data-science-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real analysis rarely lives in one table. A sales table might list orders, while a separate customers table lists names and cities. To answer 'which city buys the most?' you need to combine them. A JOIN does exactly that, matching rows from two tables on a shared column, usually a key."
    },
    {
     "type": "text",
     "text": "INNER JOIN keeps only rows that match in both tables. LEFT JOIN keeps every row from the first table, filling in NULLs where there is no match on the right. Analysts reach for LEFT JOIN constantly, because it lets you keep 'orders with no matching customer record' visible instead of silently dropping them."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT c.city, SUM(o.total) AS revenue\nFROM orders o\nLEFT JOIN customers c ON o.customer_id = c.id\nGROUP BY c.city\nORDER BY revenue DESC;"
    },
    {
     "type": "text",
     "text": "Window functions answer a different kind of question: 'rank each row within a group' or 'compute a running total' without collapsing rows the way GROUP BY does. OVER(PARTITION BY ... ORDER BY ...) tells SQL to calculate per group, but still return one row per record."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT region, salesperson, total,\n       RANK() OVER (PARTITION BY region ORDER BY total DESC) AS region_rank\nFROM sales;"
    },
    {
     "type": "tip",
     "text": "GROUP BY answers 'one summary row per group'. A window function answers 'keep every row, but attach a group-aware number to it'. Mixing these up is the single most common SQL analytics mistake."
    }
   ],
   "recap": "JOINs combine related tables (LEFT JOIN keeps unmatched rows), and window functions like RANK() OVER(PARTITION BY ...) compute per-group values without collapsing rows."
  },
  "quiz": [
   {
    "q": "What does a LEFT JOIN do that an INNER JOIN does not?",
    "options": [
     "It sorts the result automatically",
     "It removes duplicate rows",
     "It keeps all rows from the left table even when there is no match on the right",
     "It only works on one table"
    ],
    "answer": 2,
    "explain": "LEFT JOIN preserves every row from the left table, filling unmatched columns with NULL, while INNER JOIN drops unmatched rows entirely."
   },
   {
    "q": "What is the key difference between GROUP BY and a window function (OVER())?",
    "options": [
     "There is no real difference",
     "Window functions only work with dates",
     "GROUP BY collapses rows into one per group; a window function keeps every row",
     "GROUP BY is faster in every case"
    ],
    "answer": 2,
    "explain": "GROUP BY produces one summary row per group, while a window function attaches a computed value to each original row."
   },
   {
    "q": "In 'RANK() OVER (PARTITION BY region ORDER BY total DESC)', what does PARTITION BY do?",
    "options": [
     "Restarts the ranking separately for each region",
     "Joins two tables together",
     "Sorts regions alphabetically",
     "Deletes rows outside the region"
    ],
    "answer": 0,
    "explain": "PARTITION BY splits the data into groups (here, by region) and the ranking restarts fresh within each group."
   },
   {
    "q": "Why might an analyst prefer LEFT JOIN over INNER JOIN when checking for data problems?",
    "options": [
     "LEFT JOIN runs faster on every database",
     "It shows rows with missing matches (as NULLs) instead of hiding them",
     "It sorts the output by revenue",
     "It automatically fixes NULL values"
    ],
    "answer": 1,
    "explain": "LEFT JOIN surfaces unmatched rows as NULLs, making missing or broken relationships visible rather than silently discarded."
   }
  ]
 },
 "data-science-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The database that runs your company's checkout page is built for a very different job than the one your analysts query for a monthly report. That difference has a name: OLTP versus OLAP."
    },
    {
     "type": "text",
     "text": "OLTP (Online Transaction Processing) systems handle many small, fast operations: insert this order, update that stock count, look up one customer. Think of a bank's core system processing thousands of individual transfers per second. Speed and accuracy on single rows matter most."
    },
    {
     "type": "text",
     "text": "OLAP (Online Analytical Processing) systems do the opposite: few queries, but each one scans and aggregates millions of rows to answer questions like 'total sales by region for the last three years'. A data warehouse is built specifically for this kind of heavy, read-mostly analysis."
    },
    {
     "type": "tip",
     "text": "Memory aid: OLTP = lots of tiny writes (Transactions), OLAP = a few giant reads (Analysis). Running analytics directly on a live OLTP system can slow down real customers, which is exactly why warehouses exist separately."
    },
    {
     "type": "text",
     "text": "In practice, data flows one way: it is created in OLTP systems throughout the day, then regularly copied, cleaned, and reshaped into the OLAP warehouse for analysts to query without touching production."
    }
   ],
   "recap": "OLTP systems handle fast, everyday transactions; OLAP warehouses handle heavy analytical queries over historical data, kept separate so analytics never slows down production."
  },
  "quiz": [
   {
    "q": "Which best describes an OLTP system?",
    "options": [
     "A system built for scanning millions of rows for reports",
     "A system that only stores images and video",
     "A system built for many small, fast day-to-day transactions",
     "A system used exclusively for machine learning"
    ],
    "answer": 2,
    "explain": "OLTP systems are optimized for frequent, quick, single-row operations like inserts and updates."
   },
   {
    "q": "Why do companies keep a separate OLAP data warehouse instead of running reports directly on the OLTP database?",
    "options": [
     "OLAP systems are always free",
     "OLTP systems cannot store numbers",
     "Heavy analytical queries could slow down the live transactional system",
     "Warehouses are required by law"
    ],
    "answer": 2,
    "explain": "Running large aggregations on a live transactional database risks slowing down real customer operations, so warehouses handle analytics separately."
   },
   {
    "q": "A query that computes 'total revenue per region for the last five years' is most typical of which system?",
    "options": [
     "OLTP",
     "Neither, this needs a spreadsheet",
     "OLAP",
     "A device driver"
    ],
    "answer": 2,
    "explain": "Large, aggregated, historical queries are the core job of an OLAP data warehouse."
   },
   {
    "q": "How does data usually flow between OLTP and OLAP systems?",
    "options": [
     "They never share any data",
     "Data is created in OLTP systems, then loaded and reshaped into the OLAP warehouse",
     "Both systems always share one single table",
     "OLAP data is created first, then copied into OLTP"
    ],
    "answer": 1,
    "explain": "Transactional data is generated in OLTP systems and then regularly moved and reshaped into the analytical warehouse."
   }
  ]
 },
 "data-science-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Getting data from scattered sources into a warehouse is a repeatable job called a pipeline. The classic pattern is ETL: Extract data from sources (apps, files, APIs), Transform it (clean, reshape, join) on a separate processing server, then Load the finished result into the warehouse."
    },
    {
     "type": "text",
     "text": "Modern cloud warehouses like Snowflake and BigQuery are powerful enough to do heavy transformation themselves. So many teams now use ELT instead: Extract, Load the raw data straight in, then Transform it afterwards using the warehouse's own SQL engine. This skips a separate transformation server and keeps the messy raw data around for later reuse."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import pandas as pd\n\n# A tiny ETL-style pipeline: extract, transform, then 'load'\nraw = pd.DataFrame({\n    'order_id': [1, 2, 3, 4],\n    'amount': [250, None, 400, 150],\n    'status': ['paid', 'paid', 'refunded', 'paid']\n})\n\n# Transform: clean missing values, keep only paid orders\ncleaned = raw.dropna(subset=['amount'])\npaid_only = cleaned[cleaned['status'] == 'paid']\n\n# Load: in real life this writes to a warehouse table\nprint(paid_only)"
    },
    {
     "type": "tip",
     "text": "A good pipeline is idempotent: running it twice on the same input gives the same result, with no duplicate rows. Always design loads to overwrite or upsert by key, never to blindly append."
    },
    {
     "type": "text",
     "text": "Whichever order you pick, a pipeline is normally scheduled to run automatically, on a timer or triggered by new data arriving, so the warehouse stays fresh without a human running it by hand every day."
    }
   ],
   "recap": "ETL transforms data before loading it; ELT loads raw data first and transforms it inside the warehouse. Good pipelines are automated and idempotent."
  },
  "quiz": [
   {
    "q": "In ETL, when does the transformation step happen?",
    "options": [
     "Before loading, on a separate processing step",
     "Before extraction",
     "Transformation never happens in ETL",
     "After loading, inside the warehouse"
    ],
    "answer": 0,
    "explain": "ETL transforms the data first, then loads the already-clean result into the warehouse."
   },
   {
    "q": "What is the main advantage of the ELT approach over ETL?",
    "options": [
     "It removes the need for extraction",
     "It uses the warehouse's own power to transform, and keeps raw data available for later",
     "It only works with images",
     "It never needs a warehouse"
    ],
    "answer": 1,
    "explain": "ELT loads raw data first, letting a powerful warehouse handle transformations while preserving the original raw data for reuse."
   },
   {
    "q": "What does it mean for a pipeline to be 'idempotent'?",
    "options": [
     "It always doubles the data",
     "It only works with SQL, never Python",
     "Running it multiple times on the same input produces the same correct result, without duplicates",
     "It runs only once and then deletes itself"
    ],
    "answer": 2,
    "explain": "Idempotent pipelines can safely be re-run (for example after a failure) without creating duplicate or inconsistent data."
   },
   {
    "q": "Why are data pipelines usually scheduled rather than run manually?",
    "options": [
     "So the warehouse stays up to date automatically without a person triggering it every time",
     "Manual runs are illegal",
     "Because SQL cannot be run by hand",
     "Scheduling makes the data smaller"
    ],
    "answer": 0,
    "explain": "Automated scheduling keeps analytical data fresh and consistent without relying on someone remembering to run it."
   }
  ]
 },
 "data-science-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once data lands in a warehouse, it needs to be organized so analysts can query it quickly. The most common layout is the star schema: one central fact table surrounded by several dimension tables, like points around a star."
    },
    {
     "type": "text",
     "text": "The fact table holds the numbers you measure, such as a sales table with one row per transaction: product_id, customer_id, date_id, and amount. The dimension tables hold descriptive context: a products table with names and categories, a customers table with names and cities, a date table with day, month, and year."
    },
    {
     "type": "text",
     "text": "A snowflake schema takes this further by normalizing the dimensions themselves. Instead of one flat products table, you might split it into products and a separate categories table it references. This saves storage and avoids repeated text, but it means more joins for every query."
    },
    {
     "type": "tip",
     "text": "Star schemas are preferred for BI dashboards because fewer joins means faster queries. Snowflake schemas trade query speed for a cleaner, less redundant structure. When in doubt for analytics speed, favor the star."
    }
   ],
   "recap": "A star schema pairs one fact table with several flat dimension tables for fast queries; a snowflake schema normalizes those dimensions further, trading speed for less redundancy."
  },
  "quiz": [
   {
    "q": "What kind of data does a fact table hold?",
    "options": [
     "Descriptive text like product names",
     "The warehouse's user login information",
     "Only customer addresses",
     "The measurable numbers, like sale amounts, tied to keys of related dimensions"
    ],
    "answer": 3,
    "explain": "Fact tables store the numeric measurements (like amount or quantity) along with keys linking to dimension tables."
   },
   {
    "q": "What is a dimension table used for?",
    "options": [
     "Replacing the fact table entirely",
     "Storing the descriptive context around a fact, like customer or product details",
     "Running the warehouse's backup schedule",
     "Storing only encrypted passwords"
    ],
    "answer": 1,
    "explain": "Dimension tables hold the descriptive attributes (names, categories, dates) that give facts their meaning."
   },
   {
    "q": "How does a snowflake schema differ from a star schema?",
    "options": [
     "It stores everything in one single table",
     "It normalizes dimension tables further into sub-tables, trading query speed for less redundancy",
     "It only works with NoSQL databases",
     "It has no fact table at all"
    ],
    "answer": 1,
    "explain": "Snowflake schemas break dimensions into smaller normalized tables, reducing duplication at the cost of extra joins."
   },
   {
    "q": "Why do BI dashboards generally prefer a star schema over a snowflake schema?",
    "options": [
     "Star schemas need no fact table",
     "Snowflake schemas cannot store dates",
     "Fewer joins make queries run faster",
     "Star schemas use less disk space in every case"
    ],
    "answer": 2,
    "explain": "With fewer joins required, star schemas typically answer analytical queries faster, which matters for interactive dashboards."
   }
  ]
 },
 "data-science-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "HDFS (Hadoop Distributed File System) makes a cluster of ordinary machines behave like one giant hard drive. A huge file is not stored whole on one machine. It is chopped into large blocks, 128 MB by default, and those blocks are scattered across many machines called DataNodes."
    },
    {
     "type": "text",
     "text": "One special machine, the NameNode, keeps the master map: which blocks make up which file, and which DataNodes hold each block. Clients ask the NameNode 'where is this file?' and then read the actual data directly from the DataNodes, in parallel."
    },
    {
     "type": "text",
     "text": "To survive hardware failure, which is common across thousands of cheap machines, HDFS replicates every block, usually three copies, stored on different machines. If one DataNode crashes, the data is still safely available from its replicas, and the cluster quietly creates a new copy to restore the replication level."
    },
    {
     "type": "tip",
     "text": "Exam trap: HDFS is designed for large sequential reads and writes of big files, not for many small files or random-access edits. Millions of tiny files overload the NameNode's metadata memory, which is a classic HDFS weakness."
    }
   ],
   "recap": "HDFS splits huge files into large blocks spread across DataNodes, with a NameNode tracking locations and replication (usually 3x) protecting against hardware failure."
  },
  "quiz": [
   {
    "q": "In HDFS, what does the NameNode store?",
    "options": [
     "Only backup copies of the data",
     "User passwords",
     "Metadata: which blocks make up which file and where they are stored",
     "The actual file data itself"
    ],
    "answer": 2,
    "explain": "The NameNode keeps the master directory of files, blocks, and their DataNode locations, not the data itself."
   },
   {
    "q": "Why does HDFS replicate each block across multiple DataNodes?",
    "options": [
     "To let the same block be edited by many people at once",
     "To reduce total storage used",
     "So the data survives even if some machines fail",
     "To make files load slower"
    ],
    "answer": 2,
    "explain": "Replication (typically three copies) ensures data remains available even when individual machines fail, which is common in large clusters."
   },
   {
    "q": "What kind of workload is HDFS specifically weak at handling?",
    "options": [
     "Storing a single huge file",
     "Millions of very small files",
     "Fault-tolerant storage",
     "Large sequential file reads"
    ],
    "answer": 1,
    "explain": "Huge numbers of small files bloat the NameNode's metadata, which is a well-known HDFS limitation."
   },
   {
    "q": "What is the default block size commonly used in HDFS?",
    "options": [
     "10 GB",
     "4 KB",
     "1 MB",
     "128 MB"
    ],
    "answer": 3,
    "explain": "HDFS commonly uses 128 MB blocks, chosen to be large enough for efficient sequential access across a cluster."
   }
  ]
 },
 "data-science-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Under Spark's friendly DataFrame API sits its original building block: the RDD, or Resilient Distributed Dataset. An RDD is an immutable collection of data split into partitions spread across the cluster. Immutable means once created, it never changes; instead, operations produce new RDDs."
    },
    {
     "type": "text",
     "text": "Spark operations come in two kinds. Transformations, like map() and filter(), describe a new dataset but do not run immediately. Actions, like count() and collect(), actually trigger computation and return a result. This split enables lazy evaluation: Spark waits, silently building a plan, and only executes when an action forces it to."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "from pyspark.sql import SparkSession\nspark = SparkSession.builder.appName('demo').getOrCreate()\n\nnums = spark.sparkContext.parallelize(range(1, 11))\n\n# Transformations: nothing runs yet, Spark just builds a plan\nevens = nums.filter(lambda n: n % 2 == 0)\nsquared = evens.map(lambda n: n * n)\n\n# Action: THIS is when Spark actually computes everything\nprint(squared.collect())"
    },
    {
     "type": "tip",
     "text": "Lazy evaluation lets Spark optimize the whole chain of transformations before running anything, skipping unnecessary work. The catch: if you forget to call an action, nothing has actually happened yet, no matter how much code you wrote."
    },
    {
     "type": "text",
     "text": "DataFrames sit on top of RDDs and add a query optimizer called Catalyst, which rewrites your code into an efficient execution plan, similar to how a SQL database optimizes a query before running it. That is why DataFrames are usually preferred over raw RDDs today."
    }
   ],
   "recap": "RDDs are Spark's immutable, partitioned building block; transformations are lazy and only run when an action is called, and DataFrames add an optimizer (Catalyst) on top."
  },
  "quiz": [
   {
    "q": "What does it mean that an RDD is 'immutable'?",
    "options": [
     "Once created it cannot be changed; operations create new RDDs instead",
     "It only stores numbers",
     "It can never be read",
     "It automatically deletes itself after use"
    ],
    "answer": 0,
    "explain": "RDDs cannot be modified in place; transformations always produce a new RDD rather than altering the original."
   },
   {
    "q": "Which of these is an 'action' in Spark, not a transformation?",
    "options": [
     "map()",
     "select()",
     "collect()",
     "filter()"
    ],
    "answer": 2,
    "explain": "collect() actually triggers execution and returns results, while map/filter/select just describe future work lazily."
   },
   {
    "q": "What is the benefit of Spark's lazy evaluation?",
    "options": [
     "It lets Spark see the whole chain of operations and optimize before executing anything",
     "It removes the need for a cluster",
     "It prevents Spark from ever failing",
     "It forces every line of code to run immediately"
    ],
    "answer": 0,
    "explain": "By waiting until an action is called, Spark can plan and optimize the entire sequence of transformations at once."
   },
   {
    "q": "What does Spark's Catalyst optimizer do?",
    "options": [
     "Encrypts data automatically",
     "Schedules cron jobs",
     "Replicates data across DataNodes",
     "Rewrites DataFrame code into an efficient execution plan, similar to a SQL query optimizer"
    ],
    "answer": 3,
    "explain": "Catalyst analyzes DataFrame operations and produces an optimized physical execution plan before running the job."
   }
  ]
 },
 "data-science-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far, most tools we covered assume the data already sits still, waiting to be processed. That is batch processing: gather data over a period (an hour, a day), then run one big job over the whole pile at once. A nightly sales report is a classic batch job."
    },
    {
     "type": "text",
     "text": "Some problems cannot wait for tomorrow's batch. Detecting a fraudulent credit card swipe, or updating a live dashboard of website traffic, needs stream processing: handling each event, or a tiny 'micro-batch' of events, within seconds of it happening."
    },
    {
     "type": "text",
     "text": "Kafka is often the pipe that carries the stream of events (like 'user clicked', 'payment made') at high velocity. Engines like Spark Structured Streaming or Kafka Streams then read from that pipe continuously, applying the same kind of transformations as batch jobs, but as data arrives rather than after it has piled up."
    },
    {
     "type": "tip",
     "text": "There is always a trade-off: streaming systems favor low latency (fast answers) sometimes at the cost of throughput or complexity, while batch systems favor high throughput and simplicity at the cost of waiting. Choose based on how fast the answer actually needs to be, not because 'real-time' sounds impressive."
    }
   ],
   "recap": "Batch processing analyzes accumulated data periodically; stream processing analyzes events as they arrive, trading some simplicity for low latency, often via Kafka feeding Spark Streaming or Kafka Streams."
  },
  "quiz": [
   {
    "q": "Which scenario is the best fit for batch processing?",
    "options": [
     "Updating a live scoreboard during a match",
     "Generating a nightly summary report of yesterday's sales",
     "Alerting on a server outage within one second",
     "Detecting a fraudulent transaction the instant it happens"
    ],
    "answer": 1,
    "explain": "A nightly report over accumulated data is the classic batch use case, since there is no need for a second-by-second answer."
   },
   {
    "q": "What role does Apache Kafka typically play in a streaming architecture?",
    "options": [
     "It stores the final report as a PDF",
     "It replaces HDFS entirely",
     "It carries high-velocity event data from producers to consumers in real time",
     "It only runs SQL queries"
    ],
    "answer": 2,
    "explain": "Kafka acts as a durable, high-throughput message pipe that streaming applications read from continuously."
   },
   {
    "q": "What is the main trade-off streaming systems accept in exchange for low latency?",
    "options": [
     "They eliminate the need for any storage",
     "They become completely free to run",
     "They can only process numbers, not text",
     "They typically add complexity and sometimes sacrifice raw throughput"
    ],
    "answer": 3,
    "explain": "Getting answers within seconds usually requires more complex, continuously-running infrastructure compared to simpler batch jobs."
   },
   {
    "q": "Why should a team avoid choosing streaming just because it sounds modern?",
    "options": [
     "Streaming is always slower than batch",
     "Streaming cannot use Kafka",
     "Streaming adds real complexity, so it should be chosen only when the business genuinely needs near-instant answers",
     "Batch processing is illegal in the cloud"
    ],
    "answer": 2,
    "explain": "Streaming systems are harder to build and operate, so the choice should be driven by an actual latency requirement, not trend-following."
   }
  ]
 },
 "data-science-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not all data fits neatly into rows and columns. NoSQL databases were built for that variety, and they come in a few distinct families, each shaped for a different kind of problem."
    },
    {
     "type": "text",
     "text": "Key-value stores (like Redis) pair a unique key with a value, ideal for fast lookups like a shopping cart session. Document stores (like MongoDB) save flexible, JSON-like documents where each record can have different fields, great for product catalogs. Column-family stores (like Cassandra) organize huge amounts of data by column for very fast writes at massive scale. Graph databases (like Neo4j) store nodes and the relationships between them, perfect for social networks or recommendation engines."
    },
    {
     "type": "tip",
     "text": "Match the model to the query pattern you need most: fast key lookup, flexible nested records, massive write throughput, or relationship traversal. Picking the wrong NoSQL family is as costly as picking the wrong tool for any job."
    },
    {
     "type": "text",
     "text": "Distributed NoSQL databases are shaped by the CAP theorem: during a network partition (a break in communication between servers), a system can guarantee only two of three properties: Consistency (everyone sees the same data), Availability (every request gets a response), and Partition tolerance (the system keeps working despite the break). Since partitions do happen, real systems must choose between prioritizing consistency or availability when one occurs."
    }
   ],
   "recap": "NoSQL databases come in four families (key-value, document, column-family, graph), each suited to a different access pattern, and distributed systems are bound by the CAP theorem's Consistency/Availability/Partition-tolerance trade-off."
  },
  "quiz": [
   {
    "q": "Which NoSQL family would best fit a social network's 'friends of friends' recommendation feature?",
    "options": [
     "Column-family store",
     "Graph database",
     "Key-value store",
     "None, this needs OLTP"
    ],
    "answer": 1,
    "explain": "Graph databases store nodes and their relationships directly, making relationship traversal like 'friends of friends' natural and fast."
   },
   {
    "q": "What kind of data does a document store like MongoDB handle well?",
    "options": [
     "Only encrypted binary blobs",
     "Only fixed-schema rows identical across every record",
     "Flexible, JSON-like records where different documents can have different fields",
     "Only image files"
    ],
    "answer": 2,
    "explain": "Document databases store semi-structured, flexible records, which suits data like varied product catalogs well."
   },
   {
    "q": "According to the CAP theorem, what happens when a network partition occurs in a distributed system?",
    "options": [
     "Nothing changes, all three properties hold at once",
     "CAP only applies to SQL databases",
     "The system must choose to prioritize either consistency or availability, since perfect partition tolerance with both is impossible",
     "The system automatically deletes all data"
    ],
    "answer": 2,
    "explain": "During a partition, a distributed system can guarantee only two of Consistency, Availability, and Partition tolerance, and since partitions must be tolerated, it trades off consistency versus availability."
   },
   {
    "q": "Which NoSQL family is best known for extremely fast writes at massive scale, organizing data by column?",
    "options": [
     "Key-value stores only",
     "Column-family stores like Cassandra",
     "Relational databases",
     "Graph databases"
    ],
    "answer": 1,
    "explain": "Column-family databases like Cassandra are designed for very high write throughput across huge distributed datasets."
   }
  ]
 },
 "data-science-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A real data pipeline is rarely one script. It is a chain of steps: extract from an API, wait for that to finish, clean the data, wait again, load it into the warehouse, then refresh a dashboard. Someone, or something, needs to run these steps in the right order, retry the ones that fail, and alert a human when things go wrong."
    },
    {
     "type": "text",
     "text": "That job belongs to an orchestrator. Apache Airflow is the most widely used one. It represents a pipeline as a DAG, a Directed Acyclic Graph: each task is a node, and arrows show which tasks must finish before the next one can start. 'Acyclic' means no loops back to an earlier step, since a pipeline must always move forward to completion."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "from airflow import DAG\nfrom airflow.operators.python import PythonOperator\nfrom datetime import datetime\n\ndef extract():\n    print('pulling data from source')\n\ndef transform():\n    print('cleaning the data')\n\ndef load():\n    print('loading into warehouse')\n\nwith DAG('daily_sales_pipeline', start_date=datetime(2026, 1, 1), schedule='@daily') as dag:\n    t1 = PythonOperator(task_id='extract', python_callable=extract)\n    t2 = PythonOperator(task_id='transform', python_callable=transform)\n    t3 = PythonOperator(task_id='load', python_callable=load)\n\n    t1 >> t2 >> t3  # run in this order"
    },
    {
     "type": "tip",
     "text": "The '>>' arrows are the whole point of a DAG: they declare dependencies, not just order of writing. Airflow uses this graph to know what can run in parallel, what must wait, and exactly which task to retry if only one step fails."
    },
    {
     "type": "text",
     "text": "Beyond ordering, orchestrators handle the operational reality of pipelines: retrying a step that failed due to a flaky network call, alerting the on-call engineer, and backfilling, which means re-running the pipeline for past dates if logic changes or a bug is fixed."
    }
   ],
   "recap": "Orchestrators like Apache Airflow schedule multi-step pipelines as DAGs, where dependencies decide execution order, and handle retries, alerting, and backfilling automatically."
  },
  "quiz": [
   {
    "q": "What does DAG stand for in the context of Airflow?",
    "options": [
     "Data Aggregation Group",
     "Distributed Analytics Grid",
     "Directed Acyclic Graph",
     "Database Access Gateway"
    ],
    "answer": 2,
    "explain": "A DAG is a Directed Acyclic Graph: tasks as nodes, dependencies as directed edges, with no loops back to earlier steps."
   },
   {
    "q": "In an Airflow DAG, what does 't1 >> t2' express?",
    "options": [
     "t1 must complete before t2 starts",
     "t1 and t2 run at the exact same time always",
     "t1 and t2 are unrelated tasks",
     "t2 is deleted after t1 runs"
    ],
    "answer": 0,
    "explain": "The '>>' operator declares a dependency: the task on the left must finish before the task on the right begins."
   },
   {
    "q": "Why is a pipeline DAG required to be acyclic (no loops)?",
    "options": [
     "Because loops make code prettier",
     "Because Python does not support loops",
     "A pipeline must move forward toward completion; a loop back to an earlier task would never finish",
     "Acyclic graphs use less memory always"
    ],
    "answer": 2,
    "explain": "A cycle would create a dependency that never resolves, so pipelines are modeled as acyclic graphs that always progress to an end."
   },
   {
    "q": "What is 'backfilling' in the context of an orchestrator like Airflow?",
    "options": [
     "Reversing a completed transaction",
     "Deleting old pipeline runs to save space",
     "Backing up the entire warehouse nightly",
     "Re-running a pipeline for past dates, for example after fixing a bug in the logic"
    ],
    "answer": 3,
    "explain": "Backfilling reruns a pipeline over historical date ranges, often needed when logic changes and past results must be recomputed."
   }
  ]
 },
 "data-science-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Data scientists are often asked to prove that a change actually helped, not just guess. An A/B test splits users randomly into a control group (the old version) and a variant group (the new version), then compares a metric, like click rate or purchase rate, between the two."
    },
    {
     "type": "text",
     "text": "The tricky part is telling a real effect apart from random noise. If 52% of variant users bought something versus 50% of control users, is that a genuine improvement, or could it easily happen by chance with small samples? Statistical significance testing answers this by calculating a p-value: roughly, the probability of seeing a difference this large purely by chance if there were truly no real effect."
    },
    {
     "type": "text",
     "text": "By convention, many teams treat a p-value below 0.05 (5%) as 'statistically significant', meaning the result is unlikely to be a fluke. But significance alone is not enough: a tiny, real effect on a huge sample can be 'significant' yet not worth shipping, so teams also check the effect size, how big the actual improvement is."
    },
    {
     "type": "tip",
     "text": "A classic mistake is 'peeking': checking results daily and stopping the test the moment it looks significant. This inflates the chance of a false positive. Decide the sample size and test duration in advance, and stick to it."
    }
   ],
   "recap": "A/B tests compare a control and a variant group; a p-value estimates whether the observed difference is likely real or just chance, but effect size and a fixed test duration matter just as much as significance."
  },
  "quiz": [
   {
    "q": "In an A/B test, what is the purpose of the control group?",
    "options": [
     "To always be larger than the variant group",
     "To be excluded from all analysis",
     "To represent the existing, unchanged version as a baseline for comparison",
     "To receive the new version being tested"
    ],
    "answer": 2,
    "explain": "The control group experiences the current, unchanged version, giving a baseline to compare the new variant against."
   },
   {
    "q": "Roughly, what does a p-value below 0.05 suggest in an A/B test?",
    "options": [
     "The new version definitely fails",
     "Exactly 5% of users clicked",
     "The test needs to run five more days",
     "The observed difference is unlikely to be pure random chance, under the assumption there is no real effect"
    ],
    "answer": 3,
    "explain": "A low p-value indicates the observed result would be unlikely if there were truly no real difference, suggesting the effect is probably genuine."
   },
   {
    "q": "Why is 'effect size' important alongside statistical significance?",
    "options": [
     "Effect size only matters for streaming data",
     "It is not important, only the p-value matters",
     "A statistically significant result can still be too small in practice to be worth implementing",
     "Effect size replaces the need for a control group"
    ],
    "answer": 2,
    "explain": "With a large enough sample, even a tiny, practically meaningless difference can become statistically significant, so the actual size of the effect must also be judged."
   },
   {
    "q": "Why is 'peeking' at A/B test results daily and stopping early considered a mistake?",
    "options": [
     "It is not a mistake, it saves time",
     "It makes the test run faster",
     "It only affects OLAP systems",
     "It increases the chance of falsely concluding significance just from random fluctuation"
    ],
    "answer": 3,
    "explain": "Repeatedly checking and stopping as soon as a result looks good raises the false-positive rate, since random noise will eventually look 'significant' if you check often enough."
   }
  ]
 },
 "data-science-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A data warehouse expects clean, structured tables, defined before you load anything: this is schema-on-write. A data lake takes the opposite approach: dump raw data of any shape, structured, semi-structured, or completely unstructured (images, logs, JSON), cheaply into object storage like Amazon S3, and decide the structure later when you actually read it. This is schema-on-read."
    },
    {
     "type": "text",
     "text": "Lakes are attractive because storage is cheap and nothing is thrown away, keeping raw history available for future, not-yet-imagined analyses. The downside: without discipline, a lake can decay into a 'data swamp', a pile of files nobody trusts or can find."
    },
    {
     "type": "text",
     "text": "The lakehouse architecture tries to get the best of both worlds. Table formats like Delta Lake or Apache Iceberg sit on top of cheap lake storage but add warehouse-like features: ACID transactions (so a failed write does not corrupt the table), schema enforcement, and fast queries, all without needing to copy data into a separate warehouse."
    },
    {
     "type": "tip",
     "text": "Remember the direction of the trade: warehouse = structured and reliable but costlier and rigid; lake = cheap and flexible but riskier without governance; lakehouse = lake storage plus warehouse guarantees on top."
    }
   ],
   "recap": "Data lakes store raw data cheaply with schema decided at read time, risking a 'data swamp' without governance; lakehouse architectures (Delta Lake, Iceberg) add warehouse-like reliability on top of lake storage."
  },
  "quiz": [
   {
    "q": "What does 'schema-on-read' mean, as used by data lakes?",
    "options": [
     "The structure of the data is interpreted only when it is actually read and used",
     "The table structure must be defined before any data is stored",
     "Only images can be stored",
     "Data can never be read once written"
    ],
    "answer": 0,
    "explain": "Data lakes store raw data first and let consumers decide/interpret the schema at the moment they read it, rather than fixing it in advance."
   },
   {
    "q": "What is a 'data swamp'?",
    "options": [
     "A type of NoSQL database",
     "A data lake that has decayed into an untrusted, disorganized pile of files",
     "A well-organized, fully documented data lake",
     "A synonym for a data warehouse"
    ],
    "answer": 1,
    "explain": "Without governance and documentation, a data lake's cheap, flexible storage can turn into a disorganized 'swamp' nobody trusts."
   },
   {
    "q": "What key feature do lakehouse table formats like Delta Lake or Iceberg add on top of raw lake storage?",
    "options": [
     "ACID transactions and schema enforcement, similar to a warehouse",
     "Unlimited free storage",
     "Removal of all historical data",
     "Automatic image recognition"
    ],
    "answer": 0,
    "explain": "Lakehouse formats bring warehouse-like reliability, such as ACID transactions and schema checks, directly onto lake storage."
   },
   {
    "q": "Which storage approach is typically cheapest but requires the most discipline to stay trustworthy?",
    "options": [
     "An OLTP database",
     "A data lake",
     "A data warehouse",
     "A single spreadsheet"
    ],
    "answer": 1,
    "explain": "Data lakes offer cheap, flexible raw storage, but without governance they easily become unreliable data swamps."
   }
  ]
 },
 "data-science-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As pipelines move personal and sensitive data across many systems, someone has to answer: who is allowed to see this, where did it come from, and can we prove it was handled correctly? That is data governance: the policies and controls around access, quality, and accountability for data."
    },
    {
     "type": "text",
     "text": "Data lineage is a core governance tool: a tracked record of where each piece of data came from and every transformation it passed through. If a number in a report looks wrong, lineage lets you trace it back to its source instead of guessing."
    },
    {
     "type": "text",
     "text": "Privacy laws, like the EU's GDPR or India's Digital Personal Data Protection (DPDP) Act, require careful handling of personal data. Two related techniques help: anonymization permanently strips identifying details so the original person can never be recovered, while pseudonymization replaces identifying details with a reversible code, useful when you may legitimately need to re-identify someone later (with proper authorization)."
    },
    {
     "type": "tip",
     "text": "Interview-ready distinction: anonymization is irreversible (no key exists to undo it); pseudonymization is reversible (a separate key can map the code back to the real identity). Confusing the two is a common exam and interview trap."
    },
    {
     "type": "text",
     "text": "Ethics goes beyond legal compliance: biased training data can produce biased models, for example an accidentally skewed dataset causing a model to treat groups unfairly. Responsible data science means questioning where data came from and who it might disadvantage, not just whether a model is technically accurate."
    }
   ],
   "recap": "Data governance covers access policies and lineage tracking; anonymization is irreversible while pseudonymization is reversible; ethical data science also means watching for bias baked into the data itself."
  },
  "quiz": [
   {
    "q": "What is 'data lineage' used for?",
    "options": [
     "Compressing large files",
     "Tracking where a piece of data came from and every transformation it went through",
     "Encrypting data at rest",
     "Scheduling pipeline runs"
    ],
    "answer": 1,
    "explain": "Lineage is a traceable record of a data point's origin and its transformation history, useful for debugging and auditing."
   },
   {
    "q": "What is the key difference between anonymization and pseudonymization?",
    "options": [
     "Anonymization is reversible, pseudonymization is not",
     "Anonymization permanently removes identity with no way back; pseudonymization uses a reversible code",
     "Pseudonymization only applies to images",
     "They are the same thing"
    ],
    "answer": 1,
    "explain": "Anonymization irreversibly strips identity, while pseudonymization replaces it with a code that can be reversed using a separate key."
   },
   {
    "q": "Why can biased training data be an ethical concern in data science?",
    "options": [
     "A model trained on skewed data can end up treating certain groups unfairly",
     "Bias only affects hardware performance",
     "Biased data always makes models run faster",
     "Ethics has nothing to do with data collection"
    ],
    "answer": 0,
    "explain": "If the underlying data unfairly represents or excludes certain groups, models trained on it can produce biased, unfair outcomes."
   },
   {
    "q": "What does 'data governance' broadly refer to?",
    "options": [
     "A type of NoSQL database",
     "The physical cooling systems in a data center",
     "The policies and controls around who can access data, its quality, and accountability for it",
     "A programming language for big data"
    ],
    "answer": 2,
    "explain": "Governance is the set of policies and processes that manage access, quality, and accountability for an organization's data."
   }
  ]
 },
 "data-science-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "All the cleaning, warehousing, and processing in earlier lessons exists to serve one final goal: helping a person make a better decision. That final step is usually a dashboard, built with tools like Tableau, Power BI, or Looker, sitting on top of the OLAP tables built earlier."
    },
    {
     "type": "text",
     "text": "A good dashboard starts from KPIs (Key Performance Indicators), the small number of metrics that actually matter to the business, like monthly active users or gross margin, not every number the data happens to contain. Drill-down lets a viewer click a summary chart to see the detail behind it, moving from 'what happened' to 'why'."
    },
    {
     "type": "text",
     "text": "Design choices matter as much as the numbers: pick the chart type that matches the question (a trend over time needs a line chart, a comparison across categories needs bars, a part-of-whole story rarely needs a pie chart with ten slices). Refresh frequency also matters: a dashboard for daily operations may need near-real-time data from a streaming pipeline, while a monthly strategy review is fine with a nightly batch refresh."
    },
    {
     "type": "tip",
     "text": "A dashboard nobody acts on is a wasted pipeline. Before adding a chart, ask what decision it changes; if the answer is 'none', it does not belong on the dashboard."
    }
   ],
   "recap": "Dashboards are the final mile of a data pipeline, built around a small set of true KPIs, the right chart per question, and a refresh rate matched to how the data will actually be used."
  },
  "quiz": [
   {
    "q": "What is a KPI in the context of a business dashboard?",
    "options": [
     "A Key Performance Indicator: one of a small set of metrics that genuinely matter to the business",
     "Every single number a database can produce",
     "A type of NoSQL database",
     "A synonym for a data lake"
    ],
    "answer": 0,
    "explain": "KPIs are the handful of carefully chosen metrics that reflect what actually matters for decision-making, not every possible number."
   },
   {
    "q": "What does 'drill-down' allow a dashboard user to do?",
    "options": [
     "Change the warehouse schema",
     "Click a summary chart to see the more detailed data behind it",
     "Delete underlying data",
     "Encrypt the dashboard"
    ],
    "answer": 1,
    "explain": "Drill-down lets a user move from a high-level summary to the finer-grained data that explains it."
   },
   {
    "q": "Why might a daily operations dashboard need near-real-time data while a monthly strategy review does not?",
    "options": [
     "The two use cases have very different needs for how quickly the data must reflect reality",
     "Real-time data is always cheaper",
     "Refresh frequency has no effect on dashboard usefulness",
     "Monthly reviews always need faster data"
    ],
    "answer": 0,
    "explain": "Operational decisions often need up-to-the-minute information, while strategic reviews are usually fine with periodic, batch-refreshed data."
   },
   {
    "q": "What is the practical test suggested for whether a chart belongs on a dashboard?",
    "options": [
     "Whether it is a pie chart",
     "Whether it changes some real decision the viewer makes",
     "Whether it uses the most colors",
     "Whether it took the longest to build"
    ],
    "answer": 1,
    "explain": "A chart earns its place on a dashboard only if it actually informs a decision; charts nobody acts on are clutter."
   }
  ]
 },
 "data-science-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Interviewers love asking a single question that forces you to walk through the whole journey: 'A retail company wants to reduce customer churn. Walk me through your approach.' Every lesson in this subject is a piece of the answer, in order."
    },
    {
     "type": "text",
     "text": "Start with the business question, not the data: what decision will this analysis actually change? Then trace the pipeline: data is generated in OLTP systems (orders, logins), moved through an ETL or ELT pipeline, orchestrated by something like Airflow, and lands in an OLAP warehouse modeled as a star schema, or in a lakehouse if the data is too varied or large for a rigid schema."
    },
    {
     "type": "text",
     "text": "From there, you clean and explore the data, engineer features, and either run statistical analysis (like an A/B test on a retention email) or hand it to a machine learning model to predict which customers are likely to churn. At big-data scale, that processing runs on Spark across a cluster rather than on one laptop. The results reach decision-makers through a dashboard built around real KPIs, and the whole flow is protected by governance: lineage, access control, and privacy-safe handling of customer data."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import pandas as pd\n\n# A miniature end-to-end pass: raw data -> clean -> analyze -> decision-ready output\nraw = pd.DataFrame({\n    'customer_id': [1, 2, 3, 4, 5],\n    'last_login_days_ago': [2, 40, 5, 90, 3],\n    'monthly_spend': [500, 0, 300, 0, 800]\n})\n\n# Feature engineering: a simple churn-risk flag\nraw['churn_risk'] = (raw['last_login_days_ago'] > 30).astype(int)\n\n# Aggregate into a decision-ready summary, the kind that feeds a dashboard\nsummary = raw.groupby('churn_risk')['monthly_spend'].mean()\nprint(summary)"
    },
    {
     "type": "tip",
     "text": "In an interview, always narrate the pipeline in order: business question, source systems, ingestion, storage, processing at scale, analysis or modeling, and finally the decision-facing output. Interviewers are scoring your structure as much as your technical facts."
    },
    {
     "type": "text",
     "text": "This is also the natural bridge to what comes next: turning a churn-risk flag like the one above into a real trained model is exactly the territory covered in Machine Learning, while running that model continuously in production belongs to MLOps and cloud computing."
    }
   ],
   "recap": "An end-to-end data science answer moves in order: business question, OLTP sources, ETL/ELT and orchestration, warehouse or lakehouse storage, distributed processing, analysis or modeling, and a governed, decision-ready dashboard."
  },
  "quiz": [
   {
    "q": "What should the very first step be when tackling a business data science problem?",
    "options": [
     "Immediately start writing Spark code",
     "Build the dashboard first",
     "Pick a NoSQL database at random",
     "Clarify the business question and what decision the analysis should change"
    ],
    "answer": 3,
    "explain": "Without a clear business question, even technically correct analysis can answer the wrong problem entirely."
   },
   {
    "q": "In the full pipeline, where does raw transactional data (like orders and logins) typically originate?",
    "options": [
     "In the data governance policy document",
     "In the dashboard",
     "In the Airflow scheduler",
     "In OLTP systems"
    ],
    "answer": 3,
    "explain": "OLTP systems are where day-to-day operational data, such as orders and logins, is first created."
   },
   {
    "q": "Why might a distributed engine like Spark be needed instead of a single laptop for this kind of analysis?",
    "options": [
     "Single machines cannot store any data at all",
     "Spark is required by law for churn analysis",
     "At big-data scale, the volume of data exceeds what one machine can process in reasonable time",
     "Laptops cannot run Python"
    ],
    "answer": 2,
    "explain": "When data volume grows beyond what a single machine can efficiently handle, distributed processing across a cluster becomes necessary."
   },
   {
    "q": "What should the final, decision-facing step of this pipeline connect to?",
    "options": [
     "A dashboard built around real KPIs that people actually act on",
     "Deleting the raw data immediately",
     "Restarting the NameNode",
     "Nothing, the pipeline ends at storage"
    ],
    "answer": 0,
    "explain": "The entire pipeline exists to inform a decision, which is why it culminates in a dashboard or report tied to real, actionable KPIs."
   }
  ]
 }
}
