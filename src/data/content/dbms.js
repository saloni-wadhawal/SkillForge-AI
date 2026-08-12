// Lesson text and quiz questions for "DBMS".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "dbms-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A database is an organized place to store information so you can find it and change it later. Think of a giant, tidy filing cabinet that never loses a single sheet of paper. Your phone contacts, a school's student records, and an online shop's orders all live in databases."
    },
    {
     "type": "text",
     "text": "A DBMS (Database Management System) is the software that runs the database. You don't touch the raw files yourself — you ask the DBMS, and it stores, protects, and fetches the data for you. Popular examples are MySQL, PostgreSQL, SQLite, and Oracle."
    },
    {
     "type": "tip",
     "text": "Analogy: the database is the library full of books; the DBMS is the librarian who shelves them, guards them, and finds any book you ask for."
    },
    {
     "type": "text",
     "text": "Why not just use spreadsheets or plain files? Because a DBMS lets many people read and write at the same time, keeps the data safe from corruption, and can search millions of records in a fraction of a second."
    }
   ],
   "recap": "A database stores organized data; a DBMS is the software that manages and protects it."
  },
  "quiz": [
   {
    "q": "What does a DBMS do?",
    "options": [
     "Charges the phone battery",
     "Manages and controls a database",
     "Prints paper documents",
     "Designs website colors"
    ],
    "answer": 1,
    "explain": "A DBMS is the software that stores, protects, and retrieves the data in a database."
   },
   {
    "q": "Which of these is a real DBMS?",
    "options": [
     "PostgreSQL",
     "Windows",
     "Chrome",
     "Photoshop"
    ],
    "answer": 0,
    "explain": "PostgreSQL is a widely used database management system."
   },
   {
    "q": "One big advantage of a database over plain files is that it can:",
    "options": [
     "Let many users read and write safely at once",
     "Play music",
     "Replace the internet",
     "Charge money automatically"
    ],
    "answer": 0,
    "explain": "A DBMS handles many simultaneous users while keeping the data safe and consistent."
   }
  ]
 },
 "dbms-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Most databases organize data into tables. A table looks like a spreadsheet grid: it has columns across the top and rows going down. Each table holds one kind of thing — for example, a Students table or a Products table."
    },
    {
     "type": "text",
     "text": "A column (also called a field) is one piece of information, like 'name' or 'age'. Every value in that column is the same type — the age column only holds numbers. A row (also called a record) is one complete item: all the details about a single student."
    },
    {
     "type": "tip",
     "text": "Analogy: the table is a class roster. Each column is a heading like Name or Grade, and each row is one student's line filled in across those headings."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Students table:\n\n id | name    | age\n----+---------+-----\n  1 | Aisha   | 14\n  2 | Ben     | 15\n  3 | Chen    | 14\n\n(3 columns, 3 rows)"
    }
   ],
   "recap": "Data is stored in tables made of columns (fields) and rows (records); each row is one item."
  },
  "quiz": [
   {
    "q": "In a table, a single row represents:",
    "options": [
     "One type of field",
     "The whole database",
     "One complete record/item",
     "A color setting"
    ],
    "answer": 2,
    "explain": "A row holds all the details about one single item, such as one student."
   },
   {
    "q": "What is a column also called?",
    "options": [
     "A field",
     "A row",
     "A query",
     "A record"
    ],
    "answer": 0,
    "explain": "A column is also known as a field — one piece of information shared by every row."
   },
   {
    "q": "Why do all values in one column share a type?",
    "options": [
     "To make it slower",
     "So the data stays consistent and comparable",
     "To save colors",
     "It is random"
    ],
    "answer": 1,
    "explain": "Keeping one type per column (e.g. numbers for age) keeps the data consistent."
   },
   {
    "q": "In the example, how many records does the Students table hold?",
    "options": [
     "2",
     "3",
     "9",
     "1"
    ],
    "answer": 1,
    "explain": "There are 3 rows, so 3 records (Aisha, Ben, and Chen)."
   }
  ]
 },
 "dbms-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "How do we tell two students named 'Ben' apart? We give every row a unique label. A primary key is a column whose value is unique for each row and is never empty — often an 'id' number. No two rows can share the same primary key."
    },
    {
     "type": "tip",
     "text": "Analogy: a primary key is like a student ID card number. Two students can share a name, but never the same ID number."
    },
    {
     "type": "text",
     "text": "A foreign key is a column in one table that points to the primary key of another table. It links tables together. For example, an Orders table can have a customer_id that matches the id in the Customers table — that's how the database knows who placed each order."
    },
    {
     "type": "code",
     "lang": "text",
     "code": "Customers            Orders\n id | name           id | item   | customer_id\n----+------         ----+--------+------------\n  1 | Aisha           10 | Book   |     1   -> Aisha\n  2 | Ben             11 | Pen    |     2   -> Ben\n\ncustomer_id is a FOREIGN KEY pointing to Customers.id"
    }
   ],
   "recap": "A primary key uniquely identifies each row; a foreign key links a row to another table's primary key."
  },
  "quiz": [
   {
    "q": "A primary key must be:",
    "options": [
     "Colorful",
     "Always text",
     "The same for every row",
     "Unique and not empty for each row"
    ],
    "answer": 3,
    "explain": "A primary key uniquely identifies each row, so it must be unique and never empty."
   },
   {
    "q": "A foreign key is used to:",
    "options": [
     "Encrypt passwords",
     "Delete tables",
     "Change column colors",
     "Link one table to another table's primary key"
    ],
    "answer": 3,
    "explain": "A foreign key points to another table's primary key, connecting related data."
   },
   {
    "q": "In the example, what does Orders.customer_id point to?",
    "options": [
     "Customers.name",
     "Nothing",
     "Customers.id",
     "Orders.item"
    ],
    "answer": 2,
    "explain": "customer_id is a foreign key referencing the primary key Customers.id."
   }
  ]
 },
 "dbms-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "SQL (Structured Query Language) is the language we use to talk to most databases. The most common command is SELECT, which reads data. You tell it which columns you want and which table to read from."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name, age\nFROM Students;"
    },
    {
     "type": "text",
     "text": "This says: 'Give me the name and age columns from the Students table.' To grab every column at once, use a star. The semicolon at the end marks where the command finishes."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT * FROM Students;"
    },
    {
     "type": "tip",
     "text": "Tip: SELECT only reads data — it never changes it. It's a safe command to experiment with."
    }
   ],
   "recap": "SELECT reads data: list the columns you want, then FROM the table; use * for all columns."
  },
  "quiz": [
   {
    "q": "Which SQL command reads/retrieves data?",
    "options": [
     "SELECT",
     "REMOVE",
     "PRINT",
     "OPEN"
    ],
    "answer": 0,
    "explain": "SELECT is the SQL command used to read data from tables."
   },
   {
    "q": "What does SELECT * FROM Students; return?",
    "options": [
     "All columns of all rows",
     "Just the table name",
     "Nothing",
     "Only the id column"
    ],
    "answer": 0,
    "explain": "The * means all columns, so it returns every column for every row."
   },
   {
    "q": "In 'SELECT name, age FROM Students;', what is Students?",
    "options": [
     "A column",
     "A number",
     "The table being read",
     "A password"
    ],
    "answer": 2,
    "explain": "FROM names the table, so Students is the table the data comes from."
   },
   {
    "q": "Is SELECT safe to run when you only want to look at data?",
    "options": [
     "It reboots the server",
     "No, it deletes data",
     "Yes, it only reads data",
     "It renames the table"
    ],
    "answer": 2,
    "explain": "SELECT only reads data and does not modify it."
   }
  ]
 },
 "dbms-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Usually you don't want every row — you want the ones that match a rule. The WHERE clause filters rows by a condition. Only rows where the condition is true come back."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name, age\nFROM Students\nWHERE age >= 15;"
    },
    {
     "type": "text",
     "text": "This returns only students aged 15 or older. You can combine conditions with AND (both must be true) and OR (either can be true). Text values go inside single quotes."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name\nFROM Students\nWHERE age = 14 AND name = 'Aisha';"
    },
    {
     "type": "tip",
     "text": "Analogy: WHERE is like a sieve — you pour all the rows in, and only the ones matching your rule fall through."
    }
   ],
   "recap": "WHERE keeps only rows that match a condition; combine rules with AND/OR and quote text values."
  },
  "quiz": [
   {
    "q": "What does the WHERE clause do?",
    "options": [
     "Deletes the table",
     "Adds a new column",
     "Filters rows by a condition",
     "Sorts the whole table"
    ],
    "answer": 2,
    "explain": "WHERE keeps only the rows where its condition is true."
   },
   {
    "q": "Which query returns students older than 12?",
    "options": [
     "WHERE age > 12;",
     "SELECT age FROM Students;",
     "SELECT * FROM Students WHERE age > 12;",
     "SELECT * FROM Students;"
    ],
    "answer": 2,
    "explain": "Adding WHERE age > 12 filters to only rows with age greater than 12."
   },
   {
    "q": "In SQL, a text value like a name should be written:",
    "options": [
     "With no marks at all",
     "In single quotes, e.g. 'Aisha'",
     "As a number",
     "In parentheses only"
    ],
    "answer": 1,
    "explain": "Text (string) values belong inside single quotes, like 'Aisha'."
   },
   {
    "q": "Using AND between two conditions means:",
    "options": [
     "Neither is checked",
     "The table is deleted",
     "Both must be true",
     "Either one can be true"
    ],
    "answer": 2,
    "explain": "AND requires both conditions to be true for a row to match."
   }
  ]
 },
 "dbms-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Reading data is only half the job. Three commands change data. INSERT adds a new row, UPDATE edits existing rows, and DELETE removes rows."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "INSERT INTO Students (id, name, age)\nVALUES (4, 'Dara', 15);"
    },
    {
     "type": "text",
     "text": "UPDATE changes values in rows that match a WHERE condition. Always include WHERE — without it, UPDATE changes every row in the table!"
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "UPDATE Students\nSET age = 16\nWHERE id = 4;"
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "DELETE FROM Students\nWHERE id = 4;"
    },
    {
     "type": "tip",
     "text": "Warning: DELETE FROM Students; with no WHERE erases every single row. Double-check your WHERE before running UPDATE or DELETE."
    }
   ],
   "recap": "INSERT adds rows, UPDATE edits them, DELETE removes them; always use WHERE with UPDATE and DELETE."
  },
  "quiz": [
   {
    "q": "Which command adds a brand-new row?",
    "options": [
     "DELETE",
     "SELECT",
     "UPDATE",
     "INSERT"
    ],
    "answer": 3,
    "explain": "INSERT INTO ... VALUES adds a new row to a table."
   },
   {
    "q": "Why is WHERE important in an UPDATE statement?",
    "options": [
     "Without it, every row gets changed",
     "It makes it colorful",
     "It is optional decoration",
     "It speeds up reading"
    ],
    "answer": 0,
    "explain": "An UPDATE with no WHERE modifies every row in the table."
   },
   {
    "q": "What does DELETE FROM Students WHERE id = 4; do?",
    "options": [
     "Adds student 4",
     "Removes the row where id is 4",
     "Removes all students",
     "Renames the table"
    ],
    "answer": 1,
    "explain": "DELETE with WHERE id = 4 removes only the matching row."
   },
   {
    "q": "Which statement correctly sets Dara's age to 16?",
    "options": [
     "INSERT age 16;",
     "SET age = 16 FROM Students;",
     "DELETE age WHERE Dara;",
     "UPDATE Students SET age = 16 WHERE name = 'Dara';"
    ],
    "answer": 3,
    "explain": "UPDATE ... SET age = 16 WHERE name = 'Dara' edits the correct row."
   }
  ]
 },
 "dbms-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Normalization is the practice of organizing tables to avoid repeating the same data. If a customer's address is copied into every one of their orders, updating it means fixing many rows — and some may get missed. Instead, store the customer once and link orders to it with a foreign key."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: store each fact in exactly one place. If you find yourself copy-pasting the same value into many rows, split it into its own table."
    },
    {
     "type": "text",
     "text": "A transaction is a group of steps treated as one unit — like moving money from one bank account to another (subtract here, add there). Databases guarantee transactions follow ACID, four properties that keep data trustworthy even during crashes or many users at once."
    },
    {
     "type": "text",
     "text": "ACID means: Atomicity (all steps happen or none do), Consistency (the data stays valid by the rules), Isolation (concurrent transactions don't corrupt each other), and Durability (once committed, changes survive a power cut)."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "BEGIN;\n  UPDATE Accounts SET balance = balance - 100 WHERE id = 1;\n  UPDATE Accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;  -- both succeed together, or ROLLBACK undoes both"
    },
    {
     "type": "tip",
     "text": "Analogy: Atomicity is like sending a package — it either arrives whole or not at all; you never get half a box."
    }
   ],
   "recap": "Normalization stores each fact once to avoid duplication; ACID transactions (Atomicity, Consistency, Isolation, Durability) keep data reliable."
  },
  "quiz": [
   {
    "q": "The main goal of normalization is to:",
    "options": [
     "Slow down the database",
     "Make queries colorful",
     "Delete all tables",
     "Reduce duplicated data by storing each fact once"
    ],
    "answer": 3,
    "explain": "Normalization organizes tables so data isn't repeated, storing each fact in one place."
   },
   {
    "q": "In ACID, Atomicity means:",
    "options": [
     "Data is encrypted",
     "Tables are colorful",
     "All steps happen or none do",
     "Only one user allowed"
    ],
    "answer": 2,
    "explain": "Atomicity guarantees a transaction fully completes or fully rolls back — never half-done."
   },
   {
    "q": "Which ACID property ensures committed changes survive a power failure?",
    "options": [
     "Isolation",
     "Durability",
     "Consistency",
     "Atomicity"
    ],
    "answer": 1,
    "explain": "Durability guarantees that once a transaction is committed, its changes are permanent."
   },
   {
    "q": "In the bank example, why wrap both UPDATEs in one transaction?",
    "options": [
     "To delete the accounts",
     "To add color",
     "So money isn't lost if only one step runs",
     "To make it slower"
    ],
    "answer": 2,
    "explain": "A transaction makes both updates succeed together or not at all, so money is never lost."
   }
  ]
 },
 "dbms-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A functional dependency is a rule like: if you know the student id, you always know the student's name. We write it as id -> name. Normal forms are a checklist of rules built on functional dependencies that tell you how clean your table design is."
    },
    {
     "type": "text",
     "text": "1NF (First Normal Form) just means every cell holds one single value, not a list. A Phones column holding '9876543210, 9876500000' breaks 1NF — split it into separate rows or a separate table."
    },
    {
     "type": "text",
     "text": "2NF applies when a table has a combined key made of more than one column. It says every other column must depend on the WHOLE key, not just part of it. If OrderId+ProductId is the key but ProductName only depends on ProductId, that column belongs in its own Products table."
    },
    {
     "type": "text",
     "text": "3NF goes further: no column should depend on another column that is not the key. If a table stores StudentId, DeptId, and DeptName, then DeptName depends on DeptId, not on StudentId — so DeptName belongs in a separate Departments table."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: 1NF = atomic values, 2NF = no partial dependency on part of a combined key, 3NF = no transitive dependency through a non-key column."
    }
   ],
   "recap": "Functional dependencies show which columns determine which; 1NF, 2NF, and 3NF are rules that remove repeated and misplaced data step by step."
  },
  "quiz": [
   {
    "q": "A table has a Phones column storing '9876543210, 9876500000' in one cell. Which rule does this break?",
    "options": [
     "2NF",
     "3NF",
     "1NF",
     "BCNF"
    ],
    "answer": 2,
    "explain": "1NF requires every cell to hold a single atomic value, not a list of values."
   },
   {
    "q": "In a table keyed by (OrderId, ProductId), ProductName depends only on ProductId. This is a violation of:",
    "options": [
     "Atomicity",
     "2NF",
     "1NF",
     "Durability"
    ],
    "answer": 1,
    "explain": "2NF requires every non-key column to depend on the whole combined key, not just part of it."
   },
   {
    "q": "A table stores StudentId, DeptId, and DeptName, where DeptName depends on DeptId rather than StudentId. This is called a:",
    "options": [
     "Partial dependency",
     "Transitive dependency",
     "Primary key violation",
     "Foreign key error"
    ],
    "answer": 1,
    "explain": "DeptName depends on DeptId, a non-key column, rather than directly on the key StudentId — that chain is a transitive dependency, which 3NF removes."
   }
  ]
 },
 "dbms-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "BCNF (Boyce-Codd Normal Form) is a stricter version of 3NF. It says: for every functional dependency X -> Y in the table, X must be a candidate key (a column, or set of columns, that could uniquely identify a row). 3NF allows a few rare exceptions that BCNF does not."
    },
    {
     "type": "text",
     "text": "Example: a Teaches table with (Student, Subject, Teacher) where each subject is taught by only one teacher. Here Subject -> Teacher, but Subject alone is not a candidate key of the table. This satisfies 3NF but breaks BCNF, so it should be split into a Subject-Teacher table and a Student-Subject table."
    },
    {
     "type": "text",
     "text": "More normal forms is not always better. Normalization reduces duplicate data and update problems, but every join needed at query time costs performance. Denormalization means deliberately combining tables back together, accepting some duplication, to make reads faster."
    },
    {
     "type": "text",
     "text": "Real systems often normalize the tables that change often (orders, accounts) and denormalize read-heavy reports (a dashboard that shows total sales per city) by pre-computing summary tables."
    },
    {
     "type": "tip",
     "text": "Exam trick: if a question calls a dependency X -> Y a 'violation only in BCNF, not in 3NF', the giveaway is that X is not a candidate key of the whole table."
    }
   ],
   "recap": "BCNF requires every determinant to be a candidate key, stricter than 3NF; denormalization deliberately trades some duplication for faster reads."
  },
  "quiz": [
   {
    "q": "BCNF requires that for every dependency X -> Y:",
    "options": [
     "X must be a candidate key",
     "The table must have no foreign keys",
     "X and Y must be the same column",
     "Y must be numeric"
    ],
    "answer": 0,
    "explain": "BCNF's rule is that the left side of every functional dependency must be a candidate key of the table."
   },
   {
    "q": "Why would a team deliberately denormalize a reporting table?",
    "options": [
     "Because BCNF requires it",
     "To remove all foreign keys",
     "To satisfy 1NF",
     "To make reads faster by avoiding joins, accepting some duplicate data"
    ],
    "answer": 3,
    "explain": "Denormalization pre-combines data so read-heavy queries skip expensive joins, at the cost of some duplication."
   },
   {
    "q": "A table (Student, Subject, Teacher) where Subject -> Teacher and Subject is not a candidate key satisfies 3NF but not:",
    "options": [
     "1NF",
     "ACID",
     "2NF",
     "BCNF"
    ],
    "answer": 3,
    "explain": "This is the classic case that passes 3NF's relaxed rule but fails BCNF, which demands the determinant be a candidate key."
   }
  ]
 },
 "dbms-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once data is split across tables (thanks to normalization), you need JOIN to bring it back together for a query. A JOIN matches rows from two tables using a shared column, usually a foreign key linking to a primary key."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT Orders.id, Customers.name\nFROM Orders\nINNER JOIN Customers ON Orders.customer_id = Customers.id;"
    },
    {
     "type": "text",
     "text": "INNER JOIN returns only rows that match in both tables. LEFT JOIN returns every row from the left table, filling in NULLs when there's no match on the right — useful for finding customers with zero orders."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT Customers.name, Orders.id\nFROM Customers\nLEFT JOIN Orders ON Customers.id = Orders.customer_id;"
    },
    {
     "type": "text",
     "text": "RIGHT JOIN is the mirror of LEFT JOIN (keeps every row from the right table). FULL JOIN keeps every row from both sides. A self join joins a table to itself — handy for an Employees table where a Manager column points back to another row's id."
    },
    {
     "type": "tip",
     "text": "Memory aid: LEFT JOIN keeps everything on the LEFT even without a match; think of the left table as the 'main list' you never want to shrink."
    }
   ],
   "recap": "JOIN combines rows from related tables using a shared key; INNER keeps only matches, LEFT/RIGHT keep all rows from one side, FULL keeps all rows from both."
  },
  "quiz": [
   {
    "q": "Which JOIN returns only rows that have a match in both tables?",
    "options": [
     "FULL JOIN",
     "RIGHT JOIN",
     "LEFT JOIN",
     "INNER JOIN"
    ],
    "answer": 3,
    "explain": "INNER JOIN keeps only rows where the join condition matches on both sides."
   },
   {
    "q": "You want a list of every customer, including those with zero orders. Which JOIN fits?",
    "options": [
     "LEFT JOIN from Customers to Orders",
     "INNER JOIN",
     "A self join",
     "RIGHT JOIN from Orders to Customers only"
    ],
    "answer": 0,
    "explain": "LEFT JOIN keeps every row from the left table (Customers) even when there's no matching order, filling in NULL."
   },
   {
    "q": "An Employees table has a Manager column pointing to another row's employee id in the same table. Finding each employee's manager's name needs a:",
    "options": [
     "Self join",
     "Cross join with a different table",
     "FULL JOIN only",
     "Subquery, never a join"
    ],
    "answer": 0,
    "explain": "A self join links a table to itself, matching the Manager column to the id column of another row in the same table."
   }
  ]
 },
 "dbms-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Aggregate functions summarize many rows into one number: COUNT counts rows, SUM adds a column, AVG averages it, and MIN/MAX find the smallest or largest value."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT COUNT(*), AVG(age) FROM Students;"
    },
    {
     "type": "text",
     "text": "GROUP BY splits rows into buckets before aggregating. 'How many students per department?' needs one count per department, not one count for the whole table. WHERE filters individual rows before grouping happens; HAVING filters the groups after aggregation — you cannot write WHERE COUNT(*) > 5, but you can write HAVING COUNT(*) > 5."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT dept, COUNT(*) AS total\nFROM Students\nGROUP BY dept\nHAVING COUNT(*) > 5;"
    },
    {
     "type": "tip",
     "text": "Exam rule: WHERE comes before grouping and cannot use aggregate functions; HAVING comes after grouping and is the only place you can filter on COUNT, SUM, or AVG."
    }
   ],
   "recap": "Aggregate functions summarize rows; GROUP BY buckets rows before summarizing; HAVING filters those groups, while WHERE filters rows before grouping."
  },
  "quiz": [
   {
    "q": "Which clause filters groups AFTER aggregation, such as keeping only departments with more than 5 students?",
    "options": [
     "WHERE",
     "GROUP BY",
     "ORDER BY",
     "HAVING"
    ],
    "answer": 3,
    "explain": "HAVING filters aggregated groups; WHERE cannot use aggregate functions like COUNT()."
   },
   {
    "q": "Why is 'WHERE COUNT(*) > 5' invalid SQL?",
    "options": [
     "COUNT is not a real function",
     "You must always use HAVING instead of WHERE",
     "WHERE runs before grouping happens, so aggregates aren't ready yet",
     "WHERE only works with text columns"
    ],
    "answer": 2,
    "explain": "WHERE filters individual rows before GROUP BY creates the buckets, so aggregate results don't exist yet at that stage."
   },
   {
    "q": "To find the average age of students in each department, you would use:",
    "options": [
     "GROUP BY dept with AVG(age)",
     "AVG(age) with no GROUP BY",
     "HAVING dept = AVG(age)",
     "COUNT(dept)"
    ],
    "answer": 0,
    "explain": "GROUP BY dept buckets the rows by department, and AVG(age) then computes one average per bucket."
   }
  ]
 },
 "dbms-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A subquery is a SELECT statement placed inside another SQL statement, usually to compute an intermediate result the outer query needs. It can appear in the WHERE clause, the FROM clause, or even the SELECT list."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name FROM Students\nWHERE age > (SELECT AVG(age) FROM Students);"
    },
    {
     "type": "text",
     "text": "That query finds every student older than the average — the inner query computes the average first, and the outer query compares each row to it. Subqueries can also use IN to check membership in a list."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT name FROM Students\nWHERE dept_id IN (SELECT id FROM Departments WHERE building = 'A');"
    },
    {
     "type": "text",
     "text": "A correlated subquery references a column from the outer query, so it re-runs once per outer row — powerful, but slower than a plain join. EXISTS is often used with correlated subqueries to check 'does at least one matching row exist?' without fetching its data."
    },
    {
     "type": "tip",
     "text": "If a subquery can be rewritten as a JOIN, the JOIN is usually faster. Reach for a subquery when you need a single aggregated value or an EXISTS check, and a JOIN when you need columns from both tables in the result."
    }
   ],
   "recap": "A subquery is a query nested inside another; it can compute a value to compare against, or check membership with IN or EXISTS, but a JOIN is often faster when both tables' columns are needed."
  },
  "quiz": [
   {
    "q": "In 'SELECT name FROM Students WHERE age > (SELECT AVG(age) FROM Students);', what runs first?",
    "options": [
     "Both run at exactly the same time with no order",
     "The outer SELECT name",
     "Nothing runs, this is invalid SQL",
     "The inner query computing the average age"
    ],
    "answer": 3,
    "explain": "The inner subquery computes the average age first; the outer query then compares each student's age to that single value."
   },
   {
    "q": "A correlated subquery is one that:",
    "options": [
     "References a column from the outer query, re-running per outer row",
     "Never uses WHERE",
     "Always runs faster than a JOIN",
     "Can only appear in INSERT statements"
    ],
    "answer": 0,
    "explain": "A correlated subquery depends on the current row of the outer query, so the database re-evaluates it once for every outer row."
   },
   {
    "q": "When should you generally prefer a JOIN over a subquery?",
    "options": [
     "When you only need one aggregated value",
     "When you need columns from both tables in the final result",
     "Never — subqueries are always faster",
     "Only when using EXISTS"
    ],
    "answer": 1,
    "explain": "A JOIN is well suited when you need to display columns from both tables together; a subquery suits computing a single comparison value or existence check."
   }
  ]
 },
 "dbms-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A view is a saved SELECT query that behaves like a virtual table. It doesn't store data of its own — every time you query the view, the database runs the underlying SELECT again."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "CREATE VIEW ActiveStudents AS\nSELECT id, name, dept\nFROM Students\nWHERE status = 'active';"
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SELECT * FROM ActiveStudents WHERE dept = 'CS';"
    },
    {
     "type": "text",
     "text": "Views are useful for three reasons: they hide complexity (a messy multi-join query becomes one simple name), they restrict access (give a clerk a view that only shows non-salary columns, not the whole Employees table), and they keep queries consistent across an app."
    },
    {
     "type": "text",
     "text": "Because a view is just a stored query, updating the underlying tables' data automatically changes what the view shows next time — there is nothing to keep in sync manually. Some simple views can even be used with INSERT or UPDATE, which passes the change through to the base table."
    },
    {
     "type": "tip",
     "text": "Don't confuse a view with a copy of data. A view has no rows of its own; it's a saved question the database re-asks every time, so it's always up to date but adds a small overhead for the join or filter it hides."
    }
   ],
   "recap": "A view is a virtual table backed by a stored SELECT query; it simplifies complex queries, restricts what users can see, and always reflects current data."
  },
  "quiz": [
   {
    "q": "What does a view actually store?",
    "options": [
     "A compressed backup of the table",
     "A copy of the rows at creation time",
     "A saved SELECT query, re-run each time it's queried",
     "Nothing — it is only documentation"
    ],
    "answer": 2,
    "explain": "A view holds no data of its own; it re-executes its underlying SELECT statement whenever it is queried."
   },
   {
    "q": "Which is a common reason to create a view?",
    "options": [
     "Views cannot restrict access, only simplify",
     "To permanently delete a table",
     "To give a user a restricted set of columns without exposing the whole table",
     "To make INSERT statements run faster"
    ],
    "answer": 2,
    "explain": "A view can expose only certain columns or rows, letting you hand out limited access without touching the base table's permissions."
   },
   {
    "q": "If the underlying table's data changes, what happens to a view built on it?",
    "options": [
     "The view keeps showing old data forever",
     "The view shows the new data automatically next time it's queried",
     "The view must be manually refreshed with a REFRESH command",
     "The view breaks and must be recreated"
    ],
    "answer": 1,
    "explain": "Since a view re-runs its query each time, it always reflects the current state of the underlying tables."
   }
  ]
 },
 "dbms-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before writing any SQL, database designers sketch an ER (Entity-Relationship) diagram. An entity is a real-world thing worth storing, like Student or Course, drawn as a rectangle. Its attributes (name, id, age) are drawn as ovals attached to it."
    },
    {
     "type": "text",
     "text": "A relationship connects two entities, drawn as a diamond, such as Student 'enrolls in' Course. Relationships have cardinality: one-to-one (a person has one passport), one-to-many (one department has many employees), or many-to-many (students enroll in many courses, and each course has many students)."
    },
    {
     "type": "text",
     "text": "Turning an ER diagram into tables follows simple rules. Each entity becomes a table. A one-to-many relationship is handled by putting a foreign key on the 'many' side (Employee gets a dept_id column). A many-to-many relationship needs a brand-new junction table holding both foreign keys."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "CREATE TABLE Enrollments (\n  student_id INT,\n  course_id INT,\n  grade CHAR(1),\n  PRIMARY KEY (student_id, course_id),\n  FOREIGN KEY (student_id) REFERENCES Students(id),\n  FOREIGN KEY (course_id) REFERENCES Courses(id)\n);"
    },
    {
     "type": "tip",
     "text": "Exam giveaway: whenever you see 'many-to-many' in a question, the answer always needs a third junction table with two foreign keys — never a single extra column."
    }
   ],
   "recap": "ER diagrams model entities, attributes, and relationships before coding; one-to-many becomes a foreign key, many-to-many becomes a junction table with two foreign keys."
  },
  "quiz": [
   {
    "q": "In an ER diagram, a diamond shape represents:",
    "options": [
     "An entity",
     "An attribute",
     "A primary key",
     "A relationship between entities"
    ],
    "answer": 3,
    "explain": "Diamonds represent relationships connecting two or more entities in an ER diagram."
   },
   {
    "q": "How is a many-to-many relationship (students enroll in many courses, courses have many students) mapped to tables?",
    "options": [
     "Create a junction table holding both foreign keys",
     "Add a foreign key directly to the Course table",
     "Add a foreign key directly to the Student table",
     "Merge Student and Course into one table"
    ],
    "answer": 0,
    "explain": "Many-to-many relationships require a separate junction table (like Enrollments) holding a foreign key to each side."
   },
   {
    "q": "In a one-to-many relationship between Department and Employee, where does the foreign key go?",
    "options": [
     "On the Employee table, pointing to Department",
     "On a new junction table",
     "Foreign keys are not needed here",
     "On the Department table, pointing to Employee"
    ],
    "answer": 0,
    "explain": "The foreign key goes on the 'many' side — each Employee row stores the dept_id of the one department it belongs to."
   }
  ]
 },
 "dbms-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Relational algebra is the mathematical foundation SQL is built on. Every SQL query can be described using a small set of operations on tables (called relations). Learning them helps you understand exactly what a query is doing underneath."
    },
    {
     "type": "text",
     "text": "Selection (sigma, written as a Greek sigma symbol) picks rows matching a condition — this is what SQL's WHERE does. Projection (pi) picks certain columns and drops the rest — this is what SQL's SELECT column list does."
    },
    {
     "type": "text",
     "text": "Union combines the rows of two tables with the same columns, removing duplicates. Set difference finds rows in one table but not another. The Cartesian product pairs every row of one table with every row of another — the raw material a JOIN filters down using a condition."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "-- SQL: SELECT name FROM Students WHERE age > 18;\n-- Relational algebra: pi(name)( sigma(age > 18)(Students) )"
    },
    {
     "type": "tip",
     "text": "Order to remember: selection filters ROWS (sigma = WHERE), projection filters COLUMNS (pi = SELECT list). Mixing these two up is the most common mistake on exams."
    }
   ],
   "recap": "Relational algebra is SQL's mathematical basis: selection (sigma) filters rows, projection (pi) picks columns, and union, difference, and Cartesian product combine tables."
  },
  "quiz": [
   {
    "q": "In relational algebra, selection (sigma) corresponds to which SQL clause?",
    "options": [
     "SELECT column list",
     "GROUP BY",
     "ORDER BY",
     "WHERE"
    ],
    "answer": 3,
    "explain": "Selection filters rows based on a condition, exactly what SQL's WHERE clause does."
   },
   {
    "q": "Projection (pi) in relational algebra corresponds to:",
    "options": [
     "Filtering rows by a condition",
     "Joining two tables",
     "Sorting the result",
     "Choosing which columns to keep"
    ],
    "answer": 3,
    "explain": "Projection picks a subset of columns and drops the rest, matching SQL's SELECT column list."
   },
   {
    "q": "The Cartesian product of two tables produces:",
    "options": [
     "Every possible pairing of rows from both tables",
     "Only matching rows",
     "Rows from the first table only",
     "An empty table"
    ],
    "answer": 0,
    "explain": "A Cartesian product pairs every row of one table with every row of the other, which a JOIN then filters using a condition."
   }
  ]
 },
 "dbms-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Without help, finding one row in a million-row table means scanning every row — a full table scan. An index is an extra data structure the database keeps alongside a table so it can jump straight to matching rows instead."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "CREATE INDEX idx_students_name ON Students(name);"
    },
    {
     "type": "text",
     "text": "Most databases build indexes as a B-Tree, a balanced tree structure where every path from the root to a leaf is the same length. Looking up a value takes only a handful of comparisons even across millions of rows, because the tree's height grows very slowly (logarithmically) as data grows."
    },
    {
     "type": "text",
     "text": "Indexes speed up SELECT and WHERE lookups, but they are not free: every INSERT, UPDATE, or DELETE must also update the index, so writes get slower and the index itself takes extra disk space. A primary key is automatically indexed; other columns need CREATE INDEX explicitly."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: index columns you filter or join on often (foreign keys, WHERE columns) but avoid indexing columns that change constantly or tables that are write-heavy with few reads."
    }
   ],
   "recap": "An index lets the database find rows without scanning the whole table, usually stored as a B-Tree; it speeds up reads but slows down writes and uses extra space."
  },
  "quiz": [
   {
    "q": "What problem does an index solve?",
    "options": [
     "It encrypts sensitive columns",
     "It avoids scanning every row to find a match",
     "It automatically normalizes a table",
     "It stops duplicate rows from being inserted"
    ],
    "answer": 1,
    "explain": "An index lets the database jump directly to matching rows instead of scanning the entire table."
   },
   {
    "q": "Why do most databases use a B-Tree for indexes?",
    "options": [
     "Because it only works on text columns",
     "Because it never needs updating",
     "Because its balanced structure keeps lookups fast even as data grows",
     "Because it uses the least disk space possible"
    ],
    "answer": 2,
    "explain": "A B-Tree stays balanced, so the number of steps to find a value grows very slowly even as the table gets much bigger."
   },
   {
    "q": "What is a downside of adding an index to a heavily-written table?",
    "options": [
     "Every INSERT, UPDATE, or DELETE must also update the index, slowing writes",
     "SELECT queries get slower",
     "Indexes make WHERE clauses invalid",
     "The table loses its primary key"
    ],
    "answer": 0,
    "explain": "Maintaining the index on every write adds overhead, so write-heavy tables can slow down as more indexes are added."
   }
  ]
 },
 "dbms-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Real databases serve many users at once. If two transactions touch the same row at the same time with no coordination, you get problems: a lost update (one person's change silently overwrites another's), or a dirty read (reading a value another transaction hasn't committed yet, which might get rolled back)."
    },
    {
     "type": "text",
     "text": "Locking is the classic fix. A shared lock lets many transactions read a row at once but blocks anyone from writing it. An exclusive lock is taken before a write and blocks every other transaction from reading or writing that row until it's released."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "BEGIN;\nSELECT balance FROM Accounts WHERE id = 1 FOR UPDATE; -- takes an exclusive lock\nUPDATE Accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT; -- lock released"
    },
    {
     "type": "text",
     "text": "Two-phase locking is a protocol that guarantees safety: a transaction can only acquire new locks in its 'growing phase' and must release them all together in its 'shrinking phase' at the end, never acquiring a new lock after releasing one."
    },
    {
     "type": "tip",
     "text": "Common mix-up: a shared lock is for reading (many allowed at once), an exclusive lock is for writing (only one allowed, and it blocks reads too)."
    }
   ],
   "recap": "Locking coordinates concurrent transactions: shared locks allow multiple readers, exclusive locks give one writer sole access, and two-phase locking guarantees this stays safe."
  },
  "quiz": [
   {
    "q": "What is a lost update?",
    "options": [
     "A row that gets deleted by accident",
     "A query that returns zero rows",
     "A backup file going missing",
     "One transaction's change gets silently overwritten by another's, unnoticed"
    ],
    "answer": 3,
    "explain": "A lost update happens when two transactions write to the same row without coordination, and one change silently overwrites the other."
   },
   {
    "q": "What does a shared lock allow?",
    "options": [
     "Many transactions to read at once, but no writes while it's held",
     "Unlimited writes from any transaction",
     "Only one transaction to read or write",
     "Nothing — it blocks all access"
    ],
    "answer": 0,
    "explain": "A shared lock permits multiple readers simultaneously but prevents any transaction from writing until it's released."
   },
   {
    "q": "In two-phase locking, what happens once a transaction releases its first lock?",
    "options": [
     "It can acquire as many new locks as it wants",
     "It cannot acquire any new locks — it only releases from then on",
     "The transaction is automatically rolled back",
     "All other transactions are blocked forever"
    ],
    "answer": 1,
    "explain": "Two-phase locking splits a transaction into a growing phase (only acquiring locks) and a shrinking phase (only releasing them), never mixing the two."
   }
  ]
 },
 "dbms-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Isolation is the 'I' in ACID, but real databases let you dial down how strict it is, trading correctness for speed. SQL defines four isolation levels, from loosest to strictest: Read Uncommitted, Read Committed, Repeatable Read, and Serializable."
    },
    {
     "type": "text",
     "text": "Read Uncommitted allows dirty reads — seeing another transaction's uncommitted changes. Read Committed (the default in many databases) only lets you see committed data, but the same query run twice in one transaction might see different rows if another transaction commits in between — a non-repeatable read."
    },
    {
     "type": "text",
     "text": "Repeatable Read guarantees that rows you've already read stay the same for the rest of your transaction, but a phantom read can still occur: re-running a range query might return new rows another transaction just inserted. Serializable is the strictest — transactions behave as if run one after another, one at a time, eliminating all three problems."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\nBEGIN;\n  -- strongest guarantee, but the most locking / lowest concurrency\nCOMMIT;"
    },
    {
     "type": "tip",
     "text": "Exam ladder to memorize in order: Read Uncommitted (dirty read possible) < Read Committed (non-repeatable read possible) < Repeatable Read (phantom read possible) < Serializable (none possible)."
    }
   ],
   "recap": "Isolation levels trade strictness for speed: Read Uncommitted, Read Committed, Repeatable Read, and Serializable each remove one more class of concurrency anomaly, with Serializable being the safest and slowest."
  },
  "quiz": [
   {
    "q": "Which isolation level allows a transaction to see another transaction's uncommitted changes?",
    "options": [
     "Repeatable Read",
     "Serializable",
     "Read Uncommitted",
     "Read Committed"
    ],
    "answer": 2,
    "explain": "Read Uncommitted is the loosest level and permits dirty reads of uncommitted data."
   },
   {
    "q": "A phantom read happens when:",
    "options": [
     "A transaction reads its own uncommitted data",
     "The database crashes mid-query",
     "A range query returns new rows inserted by another transaction in between two reads",
     "A committed row disappears without a trace"
    ],
    "answer": 2,
    "explain": "A phantom read is new rows appearing in a repeated range query because another transaction inserted them concurrently."
   },
   {
    "q": "Which isolation level gives the strongest guarantee, behaving as if transactions ran one at a time?",
    "options": [
     "Repeatable Read",
     "Read Uncommitted",
     "Read Committed",
     "Serializable"
    ],
    "answer": 3,
    "explain": "Serializable is the strictest level, eliminating dirty reads, non-repeatable reads, and phantom reads, at the cost of concurrency."
   }
  ]
 },
 "dbms-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A deadlock happens when two transactions each hold a lock the other needs, and both wait forever. Transaction A holds a lock on Row 1 and wants Row 2; Transaction B holds a lock on Row 2 and wants Row 1. Neither can proceed."
    },
    {
     "type": "text",
     "text": "Databases detect this using a wait-for graph: a node per transaction, an edge from A to B if A is waiting on a lock B holds. If the graph has a cycle, that's a deadlock. The database picks one transaction as the 'victim', rolls it back, and lets the others continue."
    },
    {
     "type": "code",
     "lang": "sql",
     "code": "-- Transaction A\nBEGIN;\nUPDATE Accounts SET balance = balance - 10 WHERE id = 1;\n-- waits here for a lock Transaction B is holding on id = 2\nUPDATE Accounts SET balance = balance + 10 WHERE id = 2;\nCOMMIT;"
    },
    {
     "type": "text",
     "text": "Beyond locking, databases also need to survive crashes. Write-ahead logging (WAL) writes every change to a log file before touching the actual data pages. After a crash, the database replays committed transactions from the log (redo) and undoes uncommitted ones (undo), so no committed work is ever lost."
    },
    {
     "type": "tip",
     "text": "Simple fix that avoids most deadlocks in application code: always acquire locks on multiple rows in the same fixed order (for example, always by ascending id) across every transaction."
    }
   ],
   "recap": "A deadlock is a cycle of transactions each waiting on the other, detected with a wait-for graph and resolved by rolling back a victim; write-ahead logging lets the database recover cleanly after a crash."
  },
  "quiz": [
   {
    "q": "What causes a deadlock?",
    "options": [
     "A table with no primary key",
     "Two transactions each holding a lock the other needs, forming a wait cycle",
     "A missing WHERE clause in an UPDATE",
     "A transaction with no COMMIT statement"
    ],
    "answer": 1,
    "explain": "A deadlock is a cycle of transactions waiting on locks held by each other, so none can proceed."
   },
   {
    "q": "How does a database typically resolve a detected deadlock?",
    "options": [
     "It deletes the affected rows",
     "It ignores it and lets both transactions wait forever",
     "It picks a victim transaction and rolls it back so the others can proceed",
     "It shuts down completely"
    ],
    "answer": 2,
    "explain": "The database chooses one transaction (the victim), rolls it back to release its locks, and allows the remaining transactions to continue."
   },
   {
    "q": "What is the purpose of write-ahead logging (WAL)?",
    "options": [
     "To automatically normalize tables",
     "To prevent all deadlocks from happening",
     "To record changes to a log before applying them, so the database can recover after a crash",
     "To make queries return faster"
    ],
    "answer": 2,
    "explain": "WAL writes changes to a durable log first, allowing the database to redo committed work and undo uncommitted work after a crash."
   }
  ]
 },
 "dbms-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Everything so far has been a relational (SQL) database: fixed tables, fixed columns, strong ACID guarantees. NoSQL databases relax that structure to scale more easily across many machines. Common types include document stores (MongoDB, storing flexible JSON-like records), key-value stores (Redis, a giant dictionary), and wide-column or graph databases for specialized needs."
    },
    {
     "type": "text",
     "text": "The CAP theorem says a distributed database can only fully guarantee two of three properties at once: Consistency (every read sees the latest write), Availability (every request gets a response), and Partition tolerance (the system keeps working even if network links between machines fail). Since real networks do fail, partition tolerance is treated as mandatory, so the real choice in practice is between consistency and availability during a partition."
    },
    {
     "type": "text",
     "text": "This gives rise to two design philosophies. SQL databases traditionally favor consistency and use ACID transactions. Many NoSQL databases favor availability and use BASE instead: Basically Available, Soft state (data may be temporarily inconsistent), Eventually consistent (all copies converge given enough time)."
    },
    {
     "type": "text",
     "text": "Choosing between them is a real engineering decision, not a rule. A bank's ledger needs strict ACID consistency — pick SQL. A social media 'like' counter can tolerate being off by a few for a second — NoSQL's eventual consistency is fine and scales further."
    },
    {
     "type": "tip",
     "text": "Interview one-liner: 'SQL gives you strong consistency and structure; NoSQL trades some consistency for horizontal scale and flexible schemas — pick based on whether your data can tolerate being briefly stale.'"
    }
   ],
   "recap": "NoSQL databases trade the strict structure and ACID consistency of SQL for easier horizontal scaling; the CAP theorem explains why distributed systems must choose between consistency and availability when a network partition happens."
  },
  "quiz": [
   {
    "q": "According to the CAP theorem, which two properties can a distributed system realistically choose between during a network partition?",
    "options": [
     "Availability and Normalization",
     "Atomicity and Isolation",
     "Consistency and Durability",
     "Consistency and Availability"
    ],
    "answer": 3,
    "explain": "Since partition tolerance is treated as mandatory for any real distributed system, the practical trade-off during a partition is between consistency and availability."
   },
   {
    "q": "What does 'eventually consistent' mean in a BASE-style NoSQL system?",
    "options": [
     "All copies of the data converge to the same value given enough time, but may briefly differ",
     "The system refuses all writes until consistent",
     "Every read is instantly consistent across all servers",
     "Data is never consistent"
    ],
    "answer": 0,
    "explain": "Eventual consistency means replicas may briefly disagree after a write but will converge to the same value over time."
   },
   {
    "q": "Which scenario is the better fit for a strict SQL/ACID database rather than an eventually-consistent NoSQL store?",
    "options": [
     "A social media 'like' counter",
     "A page-view analytics counter",
     "A bank account balance transfer",
     "A cache of recently viewed products"
    ],
    "answer": 2,
    "explain": "A bank transfer needs strong, immediate consistency and atomicity, exactly what ACID transactions in an SQL database guarantee."
   }
  ]
 }
}
