// Lesson text and quiz questions for "Cloud Computing".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "cloud-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 'cloud' just means someone else's computers that you use over the internet. Instead of buying a physical server and keeping it in your room, you rent computing power, storage, and software from a big data center and reach it through the network."
    },
    {
     "type": "text",
     "text": "When you upload a photo to Google Photos or stream a video on Netflix, the file does not live on your phone — it lives on servers in a data center far away. Your device just talks to those servers. That is cloud computing in everyday life."
    },
    {
     "type": "tip",
     "text": "Think of it like electricity: you do not build a power plant at home, you just plug in and pay for what you use. The cloud is computing delivered the same on-demand way."
    },
    {
     "type": "text",
     "text": "A key idea is 'on-demand self-service': you can spin up a server in minutes with a few clicks or a command, use it, then shut it down and stop paying. You never touch the physical hardware."
    }
   ],
   "recap": "The cloud is renting computing, storage, and software over the internet from remote data centers, paying only for what you use."
  },
  "quiz": [
   {
    "q": "What does 'the cloud' actually refer to?",
    "options": [
     "Remote computers you use over the internet",
     "Water vapor storage",
     "A type of Wi-Fi router",
     "A programming language"
    ],
    "answer": 0,
    "explain": "The cloud means using someone else's computers in data centers, accessed over the internet."
   },
   {
    "q": "Which is a real example of using the cloud?",
    "options": [
     "Printing a document locally",
     "Unplugging your laptop",
     "Doing math on paper",
     "Streaming a movie from Netflix's servers"
    ],
    "answer": 3,
    "explain": "Netflix streams from remote servers in data centers, which is cloud computing."
   },
   {
    "q": "The electricity analogy for the cloud highlights that you...",
    "options": [
     "Pay for what you use, on demand",
     "Must build your own power plant",
     "Get computing for free",
     "Can never turn it off"
    ],
    "answer": 0,
    "explain": "Like electricity, cloud computing is delivered on-demand and you pay for usage."
   }
  ]
 },
 "cloud-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The cloud works because of virtualization: software that lets one physical computer act like many separate computers. Each of these is called a virtual machine (VM), and each thinks it has its own CPU, memory, and disk."
    },
    {
     "type": "text",
     "text": "A special program called a hypervisor sits between the real hardware and the VMs. It shares the physical resources safely so many customers can run their own VMs on the same machine without seeing each other's data."
    },
    {
     "type": "tip",
     "text": "Picture an apartment building: one physical building (the server) is divided into many separate flats (VMs). Each tenant has their own locked space, but they share the foundation and plumbing."
    },
    {
     "type": "text",
     "text": "A newer, lighter approach is the container. Containers package an app with just what it needs and share the host's operating system, so they start in seconds and use less memory than full VMs. Docker is the most popular container tool."
    },
    {
     "type": "code",
     "code": "# Run an isolated Ubuntu container with Docker\ndocker run -it ubuntu bash\n\n# List running containers\ndocker ps",
     "lang": "bash"
    }
   ],
   "recap": "Virtualization uses a hypervisor to split one physical machine into many virtual machines; containers are a lighter alternative that share the host OS."
  },
  "quiz": [
   {
    "q": "What is a virtual machine (VM)?",
    "options": [
     "A physical server in a rack",
     "A type of monitor",
     "A software computer running on shared hardware",
     "A network cable"
    ],
    "answer": 2,
    "explain": "A VM is a software-based computer that runs on shared physical hardware via virtualization."
   },
   {
    "q": "What is the job of a hypervisor?",
    "options": [
     "To design websites",
     "To speed up the internet",
     "To manage and share hardware among many VMs",
     "To store passwords"
    ],
    "answer": 2,
    "explain": "The hypervisor sits between hardware and VMs, safely sharing resources among them."
   },
   {
    "q": "How do containers differ from full VMs?",
    "options": [
     "They need more memory",
     "They share the host OS and start faster",
     "They cannot run apps",
     "They require no software"
    ],
    "answer": 1,
    "explain": "Containers share the host operating system, making them lighter and quicker to start than VMs."
   },
   {
    "q": "The apartment-building analogy compares one server to...",
    "options": [
     "A moving truck",
     "A single locked room",
     "A building split into separate flats",
     "An empty field"
    ],
    "answer": 2,
    "explain": "One physical server is like a building divided into isolated flats, each a separate VM."
   }
  ]
 },
 "cloud-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Cloud services come in three main 'as-a-Service' layers. They differ by how much the provider manages for you versus how much you control yourself."
    },
    {
     "type": "text",
     "text": "IaaS (Infrastructure as a Service) gives you raw building blocks — virtual machines, storage, and networks. You install the operating system and everything on top. Examples: AWS EC2, Google Compute Engine."
    },
    {
     "type": "text",
     "text": "PaaS (Platform as a Service) hands you a ready-made platform to run your code. You just push your app and the provider handles the servers, OS, and scaling. Examples: Heroku, Google App Engine."
    },
    {
     "type": "text",
     "text": "SaaS (Software as a Service) is finished software you simply use in a browser — no installing or managing anything. Examples: Gmail, Google Docs, Dropbox."
    },
    {
     "type": "tip",
     "text": "Pizza analogy: IaaS is buying ingredients and cooking at home; PaaS is a take-and-bake pizza you finish in your oven; SaaS is ordering a delivered pizza — you just eat it."
    }
   ],
   "recap": "IaaS gives raw infrastructure, PaaS gives a ready platform for your code, and SaaS gives finished software you just use."
  },
  "quiz": [
   {
    "q": "Which model gives you raw virtual machines to manage yourself?",
    "options": [
     "IaaS",
     "PaaS",
     "DBaaS",
     "SaaS"
    ],
    "answer": 0,
    "explain": "IaaS provides raw infrastructure like VMs, storage, and networks that you configure."
   },
   {
    "q": "Gmail and Google Docs are examples of which model?",
    "options": [
     "PaaS",
     "IaaS",
     "None",
     "SaaS"
    ],
    "answer": 3,
    "explain": "They are finished software used in a browser, which is Software as a Service (SaaS)."
   },
   {
    "q": "With PaaS, what does the provider mainly handle for you?",
    "options": [
     "Your internet bill",
     "Your business decisions",
     "The servers, OS, and scaling",
     "Writing your app's code"
    ],
    "answer": 2,
    "explain": "PaaS manages the underlying servers, OS, and scaling so you focus only on your code."
   },
   {
    "q": "In the pizza analogy, ordering delivered pizza represents...",
    "options": [
     "PaaS",
     "IaaS",
     "On-premise",
     "SaaS"
    ],
    "answer": 3,
    "explain": "Delivered pizza needs no work from you, just like SaaS, which is ready-to-use software."
   }
  ]
 },
 "cloud-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Beyond service models, clouds also differ by who owns and shares the infrastructure. These are called deployment models: public, private, and hybrid."
    },
    {
     "type": "text",
     "text": "A public cloud is owned by a provider like AWS or Azure and shared by many customers over the internet. It is cheap and scales instantly, but you share the underlying hardware (safely isolated by virtualization)."
    },
    {
     "type": "text",
     "text": "A private cloud is used by only one organization, either in its own data center or hosted privately. It gives more control and can meet strict security or legal rules, but it costs more to run."
    },
    {
     "type": "text",
     "text": "A hybrid cloud mixes both: sensitive data stays in a private cloud while everyday workloads run on a cheaper public cloud. Systems connect so data and apps can move between them as needed."
    },
    {
     "type": "tip",
     "text": "Public cloud is like taking a shared bus — cheap and available to all. Private cloud is your own car — full control but you pay for it. Hybrid is using both depending on the trip."
    }
   ],
   "recap": "Public clouds are shared and cost-effective, private clouds are single-tenant and controlled, and hybrid clouds combine both to balance cost and security."
  },
  "quiz": [
   {
    "q": "A public cloud is best described as...",
    "options": [
     "Never connected to the internet",
     "Shared by many customers over the internet",
     "Free forever",
     "Used by only one company"
    ],
    "answer": 1,
    "explain": "A public cloud is owned by a provider and shared by many customers over the internet."
   },
   {
    "q": "Why might an organization choose a private cloud?",
    "options": [
     "To avoid using computers",
     "For more control and strict security rules",
     "It is always the cheapest",
     "Because it has no maintenance"
    ],
    "answer": 1,
    "explain": "Private clouds serve one organization, giving more control to meet strict security or legal needs."
   },
   {
    "q": "What defines a hybrid cloud?",
    "options": [
     "Only private resources",
     "A cloud with no servers",
     "Only public resources",
     "A mix of public and private that work together"
    ],
    "answer": 3,
    "explain": "A hybrid cloud combines public and private clouds so workloads and data can move between them."
   }
  ]
 },
 "cloud-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A handful of companies run most of the world's public cloud. Knowing their names and strengths helps you read job descriptions and pick tools for projects."
    },
    {
     "type": "text",
     "text": "Amazon Web Services (AWS) is the largest and oldest, launched in 2006. It has the widest range of services — its core compute service is EC2 and its storage service is S3."
    },
    {
     "type": "text",
     "text": "Microsoft Azure is strong in enterprises already using Windows, Office, and Active Directory. Google Cloud Platform (GCP) is known for data analytics, machine learning, and Kubernetes (which Google originally created)."
    },
    {
     "type": "text",
     "text": "Others include IBM Cloud, Oracle Cloud, and Alibaba Cloud (big in Asia). Most providers offer similar core building blocks — compute, storage, databases, and networking — under different names."
    },
    {
     "type": "tip",
     "text": "Do not memorize every service. Learn the core categories (compute, storage, database, networking) once, and you can map any provider's product names onto them quickly."
    },
    {
     "type": "code",
     "code": "# List your storage buckets on AWS using the CLI\naws s3 ls\n\n# Copy a file up to a bucket\naws s3 cp report.pdf s3://my-bucket/",
     "lang": "bash"
    }
   ],
   "recap": "AWS is the biggest provider, Azure suits Microsoft-centric enterprises, and GCP leads in data and ML; all share the same core categories of compute, storage, database, and networking."
  },
  "quiz": [
   {
    "q": "Which provider is the largest and oldest public cloud?",
    "options": [
     "Oracle Cloud",
     "Google Cloud",
     "IBM Cloud",
     "AWS"
    ],
    "answer": 3,
    "explain": "Amazon Web Services (AWS), launched in 2006, is the largest and oldest public cloud."
   },
   {
    "q": "Which provider originally created Kubernetes and is known for ML?",
    "options": [
     "Alibaba Cloud",
     "AWS",
     "Google Cloud (GCP)",
     "Microsoft Azure"
    ],
    "answer": 2,
    "explain": "Google created Kubernetes and GCP is known for data analytics and machine learning."
   },
   {
    "q": "What are the shared 'core categories' across providers?",
    "options": [
     "Just gaming servers",
     "Only email and chat",
     "Compute, storage, database, networking",
     "Printers and scanners"
    ],
    "answer": 2,
    "explain": "Every major provider offers compute, storage, database, and networking as core building blocks."
   },
   {
    "q": "Azure is especially popular with organizations that already use...",
    "options": [
     "Windows, Office, and Active Directory",
     "Only Linux servers",
     "Handwritten records",
     "No computers"
    ],
    "answer": 0,
    "explain": "Azure integrates well with Microsoft's Windows, Office, and Active Directory ecosystem."
   }
  ]
 },
 "cloud-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The cloud's big benefits are elasticity (grow or shrink resources instantly), pay-as-you-go cost (no huge upfront hardware bills), global reach, and high availability through data centers spread across regions."
    },
    {
     "type": "text",
     "text": "But moving to the cloud does not remove security responsibility. Providers use the 'shared responsibility model': the provider secures the cloud itself (hardware, data centers), while you secure what you put in it (your data, access, and configuration)."
    },
    {
     "type": "text",
     "text": "The most common cause of cloud breaches is misconfiguration — for example, a storage bucket accidentally left open to the public internet. Always check who can access your resources before deploying."
    },
    {
     "type": "text",
     "text": "Two essential controls: IAM (Identity and Access Management) grants each user and service only the permissions they truly need — the 'principle of least privilege'. Encryption scrambles data both at rest (stored) and in transit (moving over the network) so stolen data is useless."
    },
    {
     "type": "tip",
     "text": "Least privilege is like giving a hotel guest a keycard for their room only, not a master key. If the card is lost, the damage is contained."
    },
    {
     "type": "code",
     "code": "// An IAM policy allowing read-only access to ONE bucket\n{\n  \"Effect\": \"Allow\",\n  \"Action\": [\"s3:GetObject\"],\n  \"Resource\": \"arn:aws:s3:::my-bucket/*\"\n}",
     "lang": "json"
    }
   ],
   "recap": "The cloud offers elasticity and pay-as-you-go cost, but security is shared: providers protect the infrastructure while you protect your data using least-privilege IAM and encryption, avoiding misconfiguration."
  },
  "quiz": [
   {
    "q": "Under the shared responsibility model, what does the customer secure?",
    "options": [
     "The physical data centers",
     "The provider's hardware",
     "Nothing at all",
     "Their own data, access, and configuration"
    ],
    "answer": 3,
    "explain": "The provider secures the infrastructure while the customer secures their data, access, and configuration."
   },
   {
    "q": "What is the most common cause of cloud security breaches?",
    "options": [
     "Turning off servers",
     "Too much encryption",
     "Using least privilege",
     "Misconfiguration, like an open storage bucket"
    ],
    "answer": 3,
    "explain": "Misconfigured resources, such as publicly exposed storage, are the most common breach cause."
   },
   {
    "q": "The 'principle of least privilege' means...",
    "options": [
     "Share one password",
     "Grant only the permissions actually needed",
     "Disable all accounts",
     "Give everyone admin rights"
    ],
    "answer": 1,
    "explain": "Least privilege means each user or service gets only the access it truly requires."
   },
   {
    "q": "Encryption 'in transit' protects data while it is...",
    "options": [
     "Being deleted",
     "Stored on a disk",
     "Moving over the network",
     "Printed on paper"
    ],
    "answer": 2,
    "explain": "Encryption in transit protects data as it moves across the network between systems."
   }
  ]
 },
 "cloud-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Cloud storage is not one thing. Object storage (like Amazon S3) keeps whole files as 'objects' with metadata and a unique key, accessed over HTTP. It is cheap, scales to petabytes, and is perfect for photos, backups, and logs — but you cannot edit a small part of a file in place."
    },
    {
     "type": "text",
     "text": "Block storage (like AWS EBS) splits data into fixed-size blocks, the same way a hard disk does. It attaches to one virtual machine and supports fast random reads and writes, so it is used for databases and operating system disks."
    },
    {
     "type": "text",
     "text": "File storage (like AWS EFS or Azure Files) presents a shared folder structure that many machines can mount at once, using familiar protocols like NFS or SMB. It suits shared application data and home directories."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: object = whole files over the web (S3), block = a virtual hard disk for one VM (EBS), file = a shared network folder for many VMs (EFS/NFS)."
    },
    {
     "type": "code",
     "code": "# Uploading and reading an object with AWS S3 (boto3)\nimport boto3\ns3 = boto3.client('s3')\ns3.upload_file('report.pdf', 'my-bucket', 'reports/report.pdf')\nobj = s3.get_object(Bucket='my-bucket', Key='reports/report.pdf')\nprint(obj['ContentLength'], 'bytes')",
     "lang": "python"
    }
   ],
   "recap": "Object storage holds whole files at web scale, block storage is a fast virtual disk for one machine, and file storage is a shared network folder for many machines."
  },
  "quiz": [
   {
    "q": "Which storage type would you use for a database's operating disk needing fast random access?",
    "options": [
     "Object storage",
     "Block storage",
     "File storage",
     "Tape storage"
    ],
    "answer": 1,
    "explain": "Block storage behaves like a physical hard disk with fast random reads and writes, ideal for a database or OS disk."
   },
   {
    "q": "Amazon S3 is an example of which storage type?",
    "options": [
     "Block storage",
     "Object storage",
     "File storage",
     "Tape storage"
    ],
    "answer": 1,
    "explain": "S3 stores whole files as objects with metadata, accessed over HTTP, which is object storage."
   },
   {
    "q": "What makes file storage different from object storage?",
    "options": [
     "It only stores images",
     "It presents a shared folder mountable by many machines",
     "It is always more expensive",
     "It cannot be shared"
    ],
    "answer": 1,
    "explain": "File storage offers a shared folder structure over NFS or SMB that multiple machines can mount at once."
   },
   {
    "q": "Which storage type usually attaches to only one virtual machine at a time?",
    "options": [
     "Block storage",
     "CDN storage",
     "File storage",
     "Object storage"
    ],
    "answer": 0,
    "explain": "Block storage volumes like AWS EBS are typically attached to a single VM."
   }
  ]
 },
 "cloud-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Cloud providers offer managed databases so you never install or patch the database software yourself. Relational (SQL) services like Amazon RDS or Azure SQL Database store data in tables with fixed schemas and support complex joins and transactions."
    },
    {
     "type": "text",
     "text": "NoSQL databases relax the strict schema and often trade some consistency for speed and scale. Key-value stores (DynamoDB, Redis) are extremely fast for simple lookups; document stores (MongoDB, Cosmos DB) store flexible JSON-like records; wide-column stores (Cassandra) handle huge write volumes."
    },
    {
     "type": "text",
     "text": "Choosing between them depends on the shape of your data and your access pattern. A banking ledger needs SQL's strong consistency and transactions. A product catalog with varying attributes per item suits a document store better."
    },
    {
     "type": "tip",
     "text": "CAP theorem in one line: a distributed database can only fully guarantee two of Consistency, Availability, and Partition tolerance at once. Most cloud NoSQL databases choose Availability and Partition tolerance, accepting eventual consistency."
    },
    {
     "type": "code",
     "code": "-- A managed relational query (Amazon RDS / PostgreSQL)\nSELECT customer_id, SUM(amount) AS total_spent\nFROM orders\nWHERE order_date >= '2026-01-01'\nGROUP BY customer_id\nHAVING SUM(amount) > 10000;",
     "lang": "sql"
    }
   ],
   "recap": "Managed cloud databases come in SQL (strict schema, strong consistency, joins) and NoSQL flavors (key-value, document, wide-column) that trade some consistency for scale and flexibility."
  },
  "quiz": [
   {
    "q": "Which is best suited for a banking ledger that needs strict transactions?",
    "options": [
     "Relational (SQL) database",
     "Key-value store",
     "Wide-column store",
     "Object storage"
    ],
    "answer": 0,
    "explain": "Relational databases provide ACID transactions and strong consistency, which a banking ledger requires."
   },
   {
    "q": "What does the CAP theorem say a distributed database can guarantee at once?",
    "options": [
     "All of Consistency, Availability, and Partition tolerance",
     "Only two of Consistency, Availability, and Partition tolerance",
     "Nothing, it is just a theory",
     "Only Consistency, never anything else"
    ],
    "answer": 1,
    "explain": "CAP theorem states a distributed system can fully guarantee at most two of the three properties simultaneously."
   },
   {
    "q": "DynamoDB and Redis are examples of which NoSQL type?",
    "options": [
     "Key-value store",
     "Wide-column store",
     "Graph database",
     "Document store"
    ],
    "answer": 0,
    "explain": "DynamoDB and Redis are key-value stores optimized for fast simple lookups."
   },
   {
    "q": "Why would you choose a managed database service over installing one yourself on a VM?",
    "options": [
     "It removes the need for any schema",
     "The provider handles patching, backups, and scaling",
     "It guarantees zero downtime forever",
     "It is always free"
    ],
    "answer": 1,
    "explain": "Managed services handle operational tasks like patching, backups, and scaling for you."
   }
  ]
 },
 "cloud-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A load balancer sits in front of your servers and spreads incoming requests across them, so no single server gets overwhelmed. If one server fails a health check, the load balancer stops sending it traffic until it recovers."
    },
    {
     "type": "text",
     "text": "Auto-scaling watches metrics like CPU usage or request count and automatically adds servers when demand rises, then removes them when demand falls. This is what makes 'elasticity' actually happen rather than just being a marketing word."
    },
    {
     "type": "text",
     "text": "Together, load balancing and auto-scaling let an application handle a flash sale with ten times the normal traffic, then shrink back down an hour later, paying only for what was actually used."
    },
    {
     "type": "tip",
     "text": "A common exam trap: load balancing alone does not add capacity, it only distributes existing capacity. Auto-scaling is what creates new capacity. You usually need both together."
    },
    {
     "type": "code",
     "code": "# A simplified auto-scaling rule in pseudo-config\nscaling_policy:\n  metric: cpu_utilization\n  target: 60          # keep average CPU near 60%\n  min_instances: 2\n  max_instances: 10\n  scale_out_cooldown: 120  # seconds",
     "lang": "yaml"
    }
   ],
   "recap": "Load balancers distribute traffic across healthy servers, while auto-scaling adds or removes servers based on demand; together they deliver real elasticity."
  },
  "quiz": [
   {
    "q": "What does a load balancer do when a server fails its health check?",
    "options": [
     "Doubles its traffic",
     "Deletes the server permanently",
     "Stops sending it traffic until it recovers",
     "Restarts the whole data center"
    ],
    "answer": 2,
    "explain": "Load balancers route around unhealthy servers, sending traffic only to servers that pass health checks."
   },
   {
    "q": "What actually creates new server capacity during a traffic spike?",
    "options": [
     "Encryption",
     "Auto-scaling",
     "Load balancing alone",
     "DNS caching"
    ],
    "answer": 1,
    "explain": "Auto-scaling adds new instances based on demand metrics; load balancing only distributes traffic across existing ones."
   },
   {
    "q": "Which metric commonly triggers an auto-scaling event?",
    "options": [
     "Font size of the website",
     "Color of the logo",
     "CPU utilization or request count",
     "Number of employees"
    ],
    "answer": 2,
    "explain": "Auto-scaling policies typically watch metrics like CPU utilization, memory, or incoming request count."
   },
   {
    "q": "Why does elasticity save money compared to fixed capacity?",
    "options": [
     "You only run and pay for servers you actually need at a given time",
     "You pay a flat fee regardless of usage",
     "It requires buying hardware upfront",
     "It removes the need for a load balancer"
    ],
    "answer": 0,
    "explain": "Elastic scaling means you run extra servers only during demand spikes and shrink back down, avoiding paying for idle capacity."
   }
  ]
 },
 "cloud-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A container packages an application together with everything it needs to run — libraries, dependencies, configuration — into one lightweight, portable unit. Unlike a full virtual machine, containers share the host operating system's kernel, so they start in milliseconds and use far less memory."
    },
    {
     "type": "text",
     "text": "Docker is the most popular tool for building and running containers. A Dockerfile describes, step by step, how to build an image; running that image creates a container, an isolated running instance of it."
    },
    {
     "type": "text",
     "text": "Because a container bundles its own dependencies, it behaves the same on a developer's laptop, a test server, and a cloud VM. This solves the classic 'it works on my machine' problem."
    },
    {
     "type": "tip",
     "text": "Remember the hierarchy: a Dockerfile is a recipe, an image is a saved snapshot built from that recipe, and a container is a live running instance of that image. You can run many containers from one image."
    },
    {
     "type": "code",
     "code": "# Dockerfile: a minimal Python web app\nFROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD [\"python\", \"app.py\"]",
     "lang": "dockerfile"
    }
   ],
   "recap": "Containers package an app and its dependencies into a lightweight, portable unit that shares the host kernel; Docker builds images from a Dockerfile and runs them as containers."
  },
  "quiz": [
   {
    "q": "Why do containers start faster than virtual machines?",
    "options": [
     "They use more RAM than VMs",
     "They do not run any code",
     "They share the host operating system's kernel instead of booting a full OS",
     "They are always physical machines"
    ],
    "answer": 2,
    "explain": "Containers share the host kernel rather than booting a separate guest OS, so they start almost instantly."
   },
   {
    "q": "What is a Dockerfile?",
    "options": [
     "A running container",
     "A type of cloud database",
     "A saved image on disk",
     "A step-by-step recipe describing how to build an image"
    ],
    "answer": 3,
    "explain": "A Dockerfile is the set of instructions used to build a Docker image."
   },
   {
    "q": "What problem do containers solve by bundling dependencies with the app?",
    "options": [
     "Weak passwords",
     "The 'it works on my machine' inconsistency problem",
     "Slow internet speeds",
     "High electricity bills"
    ],
    "answer": 1,
    "explain": "Bundling dependencies means the app runs identically across laptops, test servers, and production, avoiding environment mismatches."
   },
   {
    "q": "What is the relationship between an image and a container?",
    "options": [
     "They are the same thing",
     "A container is a live running instance of an image",
     "Images cannot be reused",
     "An image runs inside a container"
    ],
    "answer": 1,
    "explain": "An image is a static snapshot; a container is a running instance created from that image, and many containers can share one image."
   }
  ]
 },
 "cloud-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Running one container is easy, but a real application might need hundreds of containers spread across many machines, restarted automatically when they crash, and scaled up during peak load. Kubernetes is the tool that manages this at scale, and it is what all major clouds run their container services on."
    },
    {
     "type": "text",
     "text": "A Pod is the smallest unit Kubernetes manages, usually holding one container. A Deployment describes how many replicas of a Pod should be running and how to update them without downtime. A Service gives a stable network address to a changing set of Pods."
    },
    {
     "type": "text",
     "text": "Kubernetes constantly checks the actual state of the cluster against the desired state you declared, and takes action to fix any difference — if a Pod dies, it starts a replacement automatically. This is called the reconciliation loop."
    },
    {
     "type": "tip",
     "text": "Kubernetes was originally built at Google and is often abbreviated 'K8s' — the 8 stands for the eight letters between the K and the s."
    },
    {
     "type": "code",
     "code": "# A Kubernetes Deployment: keep 3 replicas of a web app running\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-app\n  template:\n    metadata:\n      labels:\n        app: web-app\n    spec:\n      containers:\n        - name: web\n          image: myregistry/web-app:1.0",
     "lang": "yaml"
    }
   ],
   "recap": "Kubernetes orchestrates containers at scale using Pods, Deployments, and Services, continuously reconciling the actual cluster state to match what you declared."
  },
  "quiz": [
   {
    "q": "What is the smallest unit that Kubernetes manages?",
    "options": [
     "A Node",
     "A Deployment",
     "A Service",
     "A Pod"
    ],
    "answer": 3,
    "explain": "A Pod is the smallest deployable unit in Kubernetes, usually wrapping one container."
   },
   {
    "q": "What does a Kubernetes Service provide?",
    "options": [
     "A firewall rule only",
     "A billing report",
     "A single fixed container that never restarts",
     "A stable network address for a changing set of Pods"
    ],
    "answer": 3,
    "explain": "A Service gives a stable, consistent way to reach a set of Pods even as individual Pods are replaced."
   },
   {
    "q": "What happens when a Pod crashes in a Deployment set to 3 replicas?",
    "options": [
     "Kubernetes automatically starts a replacement to restore 3 replicas",
     "Nothing, it stays down",
     "It doubles the replica count",
     "The whole cluster shuts down"
    ],
    "answer": 0,
    "explain": "Kubernetes' reconciliation loop notices the mismatch and starts a new Pod to match the desired replica count."
   },
   {
    "q": "Which company originally built Kubernetes?",
    "options": [
     "Microsoft",
     "Amazon",
     "IBM",
     "Google"
    ],
    "answer": 3,
    "explain": "Kubernetes was originally developed at Google before being open-sourced."
   }
  ]
 },
 "cloud-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Serverless computing does not mean there are no servers — it means you never manage them. You upload a small piece of code, called a function, and the cloud provider runs it only when triggered, then shuts it down. This is Function as a Service (FaaS): AWS Lambda, Azure Functions, and Google Cloud Functions are the main examples."
    },
    {
     "type": "text",
     "text": "You are billed only for the actual execution time of your function, often measured in milliseconds, not for idle servers sitting around. A function that runs for 200 milliseconds a hundred times a day can cost almost nothing."
    },
    {
     "type": "text",
     "text": "Serverless suits event-driven work: resizing an image the moment it is uploaded, processing a message from a queue, or responding to an API request. It is a poor fit for long-running or highly stateful workloads, since most providers cap execution time and functions start 'cold' after being idle."
    },
    {
     "type": "tip",
     "text": "Watch for 'cold starts' — the first request to an idle function is slower because the provider must first spin up an environment for it. This is a common interview question about serverless downsides."
    },
    {
     "type": "code",
     "code": "# An AWS Lambda function triggered by an S3 upload\ndef lambda_handler(event, context):\n    bucket = event['Records'][0]['s3']['bucket']['name']\n    key = event['Records'][0]['s3']['object']['key']\n    print(f\"New file uploaded: {key} in {bucket}\")\n    return {\"statusCode\": 200}",
     "lang": "python"
    }
   ],
   "recap": "Serverless (FaaS) runs your code only when triggered and bills only for execution time, ideal for short event-driven tasks but not for long-running or stateful workloads."
  },
  "quiz": [
   {
    "q": "In serverless computing, what are you billed for?",
    "options": [
     "The number of employees using it",
     "Only the actual execution time of your function",
     "Nothing, it is always free",
     "A fixed monthly server rental"
    ],
    "answer": 1,
    "explain": "FaaS bills based on actual execution time and resources used, not for idle server capacity."
   },
   {
    "q": "What is a 'cold start'?",
    "options": [
     "A type of encryption",
     "The delay when an idle function must first spin up an environment before running",
     "A server that never turns on",
     "A database backup process"
    ],
    "answer": 1,
    "explain": "A cold start is the extra latency incurred the first time an idle serverless function is invoked."
   },
   {
    "q": "Which workload is serverless LEAST suited for?",
    "options": [
     "Responding to a single API request",
     "Processing one queue message",
     "Resizing an image on upload",
     "A long-running, highly stateful process"
    ],
    "answer": 3,
    "explain": "Serverless functions have execution time limits and are stateless, making them a poor fit for long-running stateful workloads."
   },
   {
    "q": "AWS Lambda is an example of which cloud model?",
    "options": [
     "IaaS",
     "Storage as a Service",
     "Platform as a Service in the traditional sense only",
     "Function as a Service (FaaS)"
    ],
    "answer": 3,
    "explain": "AWS Lambda runs individual functions on demand, which is the definition of Function as a Service."
   }
  ]
 },
 "cloud-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A monolith is one large application where every feature — user accounts, payments, search — lives in a single codebase and deploys as one unit. A microservices architecture splits the same application into small, independent services, each owning one responsibility and its own database."
    },
    {
     "type": "text",
     "text": "Services talk to each other over the network, usually through REST APIs or message queues, rather than by calling functions directly in the same process. This means each service can be built in a different language, deployed independently, and scaled on its own."
    },
    {
     "type": "text",
     "text": "The cost of this flexibility is complexity: you now have network calls that can fail, data spread across many databases instead of one, and a much harder debugging story when a request crosses ten services. Cloud platforms provide tools — service meshes, distributed tracing, API gateways — specifically to manage this complexity."
    },
    {
     "type": "tip",
     "text": "A classic interview question: 'when would you NOT choose microservices?' Good answer — for a small team or an early-stage product, a monolith is simpler to build, deploy, and debug; microservices pay off mainly at larger scale and team size."
    },
    {
     "type": "code",
     "code": "# Two independent microservices calling each other over HTTP\n# order-service calls payment-service\nimport requests\nresponse = requests.post(\n    'http://payment-service/charge',\n    json={'order_id': 42, 'amount': 999.00}\n)\nprint(response.json())",
     "lang": "python"
    }
   ],
   "recap": "Microservices split an application into small, independently deployable services communicating over the network, trading simplicity for flexibility, independent scaling, and added operational complexity."
  },
  "quiz": [
   {
    "q": "How do microservices typically communicate with each other?",
    "options": [
     "Shared global variables",
     "Over the network via APIs or message queues",
     "Direct in-process function calls",
     "They never communicate"
    ],
    "answer": 1,
    "explain": "Microservices are separate processes, often on separate machines, so they communicate over the network using REST APIs or message queues."
   },
   {
    "q": "What is a major downside of microservices compared to a monolith?",
    "options": [
     "They cannot scale independently",
     "Increased complexity from network calls and distributed data",
     "They are always slower to develop initially",
     "They must all use the same programming language"
    ],
    "answer": 1,
    "explain": "Splitting into services adds complexity: network failures, distributed data, and harder debugging across many services."
   },
   {
    "q": "When is a monolith often the better choice?",
    "options": [
     "Never, monoliths are obsolete",
     "Only for banks",
     "For a small team or early-stage product needing simplicity",
     "Always, in every situation"
    ],
    "answer": 2,
    "explain": "For small teams or early products, a monolith's simplicity in building and deploying outweighs the benefits of microservices."
   },
   {
    "q": "What does each microservice typically own?",
    "options": [
     "The entire application's user interface",
     "Its own responsibility and often its own database",
     "Every other service's code",
     "Nothing, they share one database"
    ],
    "answer": 1,
    "explain": "A key principle of microservices is that each service owns a single responsibility and manages its own data store."
   }
  ]
 },
 "cloud-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A Virtual Private Cloud (VPC) is your own isolated slice of the provider's network, where you control IP address ranges, routing, and firewall rules, even though the underlying hardware is shared with other customers."
    },
    {
     "type": "text",
     "text": "Inside a VPC, you divide address space into subnets. A public subnet has a route to the internet and typically holds web servers; a private subnet has no direct internet route and holds databases or internal services, reachable only from within the VPC."
    },
    {
     "type": "text",
     "text": "A Content Delivery Network (CDN) caches copies of your static content — images, videos, JavaScript files — on servers physically close to users around the world, so a user in Mumbai gets served from a nearby cache instead of a data center on the other side of the planet."
    },
    {
     "type": "tip",
     "text": "A well-known security pattern for exams: place the database in a private subnet, and only let the application server (in the public subnet) talk to it. Never expose a database directly to the internet."
    },
    {
     "type": "code",
     "code": "# A simplified VPC layout in pseudo-config\nvpc: 10.0.0.0/16\nsubnets:\n  - name: public-web\n    cidr: 10.0.1.0/24\n    internet_route: true\n  - name: private-db\n    cidr: 10.0.2.0/24\n    internet_route: false",
     "lang": "yaml"
    }
   ],
   "recap": "A VPC gives you an isolated, configurable network with public and private subnets, while a CDN caches content near users to reduce latency."
  },
  "quiz": [
   {
    "q": "What is a VPC?",
    "options": [
     "A physical router",
     "An isolated, configurable virtual network within the provider's infrastructure",
     "A type of database",
     "A billing plan"
    ],
    "answer": 1,
    "explain": "A Virtual Private Cloud is a logically isolated section of the cloud where you control IP ranges, routing, and firewall rules."
   },
   {
    "q": "Where should a database typically be placed for security?",
    "options": [
     "Outside any subnet",
     "In a public subnet exposed to the internet",
     "On the CDN",
     "In a private subnet with no direct internet route"
    ],
    "answer": 3,
    "explain": "Databases are best kept in a private subnet, reachable only from within the VPC, never directly from the internet."
   },
   {
    "q": "What problem does a CDN solve?",
    "options": [
     "It reduces latency by serving cached content from servers near the user",
     "It replaces the need for a database",
     "It encrypts all your data automatically",
     "It manages user passwords"
    ],
    "answer": 0,
    "explain": "A CDN caches static content at edge locations close to users, cutting the distance data has to travel and reducing latency."
   },
   {
    "q": "What distinguishes a public subnet from a private subnet?",
    "options": [
     "Private subnets are always bigger",
     "There is no real difference",
     "Public subnets have a route to the internet, private subnets do not",
     "Public subnets cannot hold web servers"
    ],
    "answer": 2,
    "explain": "A public subnet has an internet-facing route (via an internet gateway); a private subnet does not, keeping its contents internal."
   }
  ]
 },
 "cloud-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Disaster recovery planning answers one question: if something breaks badly, how do you get running again, and how much can you afford to lose? Two numbers drive every design decision. Recovery Time Objective (RTO) is how long you can be down before it is unacceptable. Recovery Point Objective (RPO) is how much data, measured in time, you can afford to lose."
    },
    {
     "type": "text",
     "text": "A low RTO and RPO — say, minutes — needs an expensive 'hot standby': a live replica running in another region, ready to take over instantly. A relaxed RTO and RPO — say, a day — can rely on cheaper nightly backups restored manually when needed."
    },
    {
     "type": "text",
     "text": "Cloud providers make multi-region replication far easier than on-premise hardware ever could, since you can spin up a full replica of your infrastructure in another region with a few configuration changes rather than buying a second data center."
    },
    {
     "type": "tip",
     "text": "Do not confuse the two: RTO is about TIME to recover (how long you're down), RPO is about DATA loss (how much you lose, measured in time since the last backup). A common exam question swaps these definitions to trip you up."
    },
    {
     "type": "code",
     "code": "# A backup policy expressed as config\nbackup_policy:\n  frequency: hourly\n  retention_days: 30\n  cross_region_replica: ap-south-1\n  # RPO ~= 1 hour (worst case data loss)\n  # RTO target = 15 minutes (time to fail over)",
     "lang": "yaml"
    }
   ],
   "recap": "RTO measures how long you can be down and RPO measures how much data you can afford to lose; cloud replication across regions makes fast, low-loss disaster recovery far cheaper than with physical hardware."
  },
  "quiz": [
   {
    "q": "What does RTO measure?",
    "options": [
     "The cost of the cloud bill",
     "How much data can be lost",
     "How long the system can be down before recovery",
     "The number of backups taken"
    ],
    "answer": 2,
    "explain": "Recovery Time Objective is the maximum acceptable downtime before service must be restored."
   },
   {
    "q": "What does RPO measure?",
    "options": [
     "Server CPU speed",
     "The recovery team's headcount",
     "Network bandwidth",
     "The maximum acceptable time since the last backup, i.e. potential data loss"
    ],
    "answer": 3,
    "explain": "Recovery Point Objective defines how much data, measured as time since the last good backup, you can afford to lose."
   },
   {
    "q": "Which setup fits a near-zero RTO and RPO requirement?",
    "options": [
     "No backups at all",
     "Monthly backups on tape",
     "A live hot standby replica in another region",
     "Manual restore from a USB drive"
    ],
    "answer": 2,
    "explain": "A live hot standby ready to take over instantly is needed to achieve very low RTO and RPO."
   },
   {
    "q": "Why is multi-region disaster recovery easier in the cloud than on-premise?",
    "options": [
     "On-premise is always cheaper",
     "Cloud regions cannot talk to each other",
     "You can replicate infrastructure to another region via configuration instead of buying new hardware",
     "Cloud providers ban disaster recovery"
    ],
    "answer": 2,
    "explain": "Cloud infrastructure can be replicated to another region through configuration, avoiding the cost of physical duplicate data centers."
   }
  ]
 },
 "cloud-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "DevOps is the practice of developers and operations teams working together, often through automation, so that code moves from a developer's laptop to production quickly and reliably instead of through slow manual handoffs."
    },
    {
     "type": "text",
     "text": "Continuous Integration (CI) means every code change is automatically built and tested the moment it is pushed, catching bugs early instead of at the end of a long release cycle. Continuous Deployment (CD) takes code that passes CI and automatically deploys it to production, often through cloud tools like AWS CodePipeline, GitHub Actions, or Jenkins."
    },
    {
     "type": "text",
     "text": "A typical pipeline runs: code push, automated build, automated tests, then a staged rollout — first to a small percentage of servers or users (a 'canary' release), and only to everyone once it proves stable."
    },
    {
     "type": "tip",
     "text": "Interview distinction: Continuous Delivery means the code is always ready to deploy but a human clicks the button; Continuous Deployment means it deploys automatically with no human step. Many people use the terms loosely, but examiners may test the difference."
    },
    {
     "type": "code",
     "code": "# A minimal GitHub Actions CI pipeline\nname: CI\non: [push]\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: pip install -r requirements.txt\n      - run: pytest",
     "lang": "yaml"
    }
   ],
   "recap": "DevOps automates the path from code to production through CI/CD pipelines: continuous integration builds and tests every change, and continuous deployment ships it out safely, often in staged rollouts."
  },
  "quiz": [
   {
    "q": "What does Continuous Integration (CI) do?",
    "options": [
     "Deploys code without any tests",
     "Manually reviews code once a year",
     "Deletes old code",
     "Automatically builds and tests every code change as it is pushed"
    ],
    "answer": 3,
    "explain": "CI automatically builds and runs tests on every push, catching problems early."
   },
   {
    "q": "What is a 'canary' release?",
    "options": [
     "Deleting the production environment",
     "A type of database backup",
     "A full rollback of all changes",
     "Rolling out a change to a small percentage of servers or users before full release"
    ],
    "answer": 3,
    "explain": "A canary release ships a change to a small subset first, to catch problems before a full rollout."
   },
   {
    "q": "What is the key difference between Continuous Delivery and Continuous Deployment?",
    "options": [
     "There is no difference",
     "Deployment only works for databases",
     "Delivery is always slower by law",
     "Delivery still needs a human to click deploy, Deployment ships automatically"
    ],
    "answer": 3,
    "explain": "Continuous Delivery keeps code always deployable but requires a manual trigger; Continuous Deployment ships automatically without a human step."
   },
   {
    "q": "Why does DevOps automation matter for cloud teams?",
    "options": [
     "It removes the need for version control",
     "It guarantees zero bugs forever",
     "It replaces the need for testing entirely",
     "It lets code move from development to production quickly and reliably"
    ],
    "answer": 3,
    "explain": "Automation through CI/CD reduces manual handoffs, speeding up and stabilizing the release process."
   }
  ]
 },
 "cloud-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Once an application runs across dozens of servers and services, you cannot just watch a single screen to know if it is healthy. Monitoring collects metrics — CPU, memory, error rate, response time — and alerts you when something crosses a threshold, ideally before users notice."
    },
    {
     "type": "text",
     "text": "Logging records what actually happened inside the application: an error message, a failed login, a slow database query. Centralized logging tools (like AWS CloudWatch Logs or the ELK stack) collect logs from every server into one searchable place, since SSHing into a hundred machines to read log files individually is not realistic."
    },
    {
     "type": "text",
     "text": "Observability goes further, combining metrics, logs, and traces (which follow a single request as it hops across many microservices) so an engineer can answer not just 'is something wrong' but 'why, and where exactly.'"
    },
    {
     "type": "tip",
     "text": "Remember the three pillars of observability for exams: metrics (numbers over time), logs (discrete event records), and traces (the path of one request across services)."
    },
    {
     "type": "code",
     "code": "# A simple alert rule expressed as config\nalert:\n  name: high-error-rate\n  metric: http_5xx_rate\n  threshold: \"> 5%\"\n  window: 5m\n  action: notify_oncall_engineer",
     "lang": "yaml"
    }
   ],
   "recap": "Monitoring tracks metrics and alerts on thresholds, logging records discrete events centrally, and observability ties metrics, logs, and traces together to explain not just that something broke but why."
  },
  "quiz": [
   {
    "q": "What does monitoring primarily track?",
    "options": [
     "Source code changes",
     "Metrics like CPU, memory, and error rate over time, with alerting",
     "Employee attendance",
     "Discrete text log messages"
    ],
    "answer": 1,
    "explain": "Monitoring focuses on numeric metrics over time and triggers alerts when thresholds are crossed."
   },
   {
    "q": "What is a 'trace' in observability?",
    "options": [
     "A single log line",
     "The path of one request as it moves across multiple services",
     "A firewall rule",
     "A backup snapshot"
    ],
    "answer": 1,
    "explain": "A trace follows a single request through every service it touches, useful for debugging distributed systems."
   },
   {
    "q": "Why is centralized logging important in the cloud?",
    "options": [
     "It is required by law in every country",
     "Manually checking logs on dozens or hundreds of individual servers is not practical",
     "It makes servers run faster",
     "It replaces the need for monitoring"
    ],
    "answer": 1,
    "explain": "With many servers, collecting logs into one searchable place is far more practical than checking each server individually."
   },
   {
    "q": "What are the three pillars of observability?",
    "options": [
     "Backups, encryption, firewalls",
     "CPU, RAM, and disk",
     "Metrics, logs, and traces",
     "IaaS, PaaS, SaaS"
    ],
    "answer": 2,
    "explain": "Observability is commonly described through three pillars: metrics, logs, and traces."
   }
  ]
 },
 "cloud-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Pay-as-you-go pricing is flexible, but it also means costs can silently spiral if nobody watches them — a forgotten test server left running for months, or an over-provisioned database, can quietly burn thousands of rupees. FinOps is the discipline of managing and optimizing cloud spend, bringing engineering, finance, and business together."
    },
    {
     "type": "text",
     "text": "Providers offer pricing options beyond plain on-demand rates. Reserved Instances or Savings Plans commit you to a certain usage level for one to three years in exchange for a large discount. Spot Instances sell unused provider capacity at steep discounts, but the provider can reclaim them with little notice, so they suit only interruption-tolerant workloads like batch processing."
    },
    {
     "type": "text",
     "text": "Right-sizing means regularly checking whether a resource is actually using the capacity it was given, and shrinking it if not — a common finding is a database instance running at 5% CPU that could be downsized to a much cheaper tier."
    },
    {
     "type": "tip",
     "text": "Interview-friendly memory aid: On-Demand = pay full price, flexible; Reserved = commit long-term, cheaper; Spot = cheapest, but can be taken away anytime. Match the workload's tolerance for interruption to the pricing model."
    },
    {
     "type": "code",
     "code": "# Tagging resources so costs can be tracked by team/project\nresource_tags:\n  team: payments\n  project: checkout-v2\n  environment: production\n# Cost dashboards group spend by these tags to spot waste",
     "lang": "yaml"
    }
   ],
   "recap": "FinOps manages cloud spend using pricing options like on-demand, reserved, and spot instances, plus right-sizing and tagging, to stop pay-as-you-go flexibility from turning into silent cost overruns."
  },
  "quiz": [
   {
    "q": "What is a Spot Instance best suited for?",
    "options": [
     "A database that must never restart",
     "Interruption-tolerant batch workloads seeking the deepest discount",
     "A production website's main servers",
     "Long-term stable workloads needing guarantees"
    ],
    "answer": 1,
    "explain": "Spot Instances can be reclaimed by the provider with little notice, so they suit workloads that tolerate interruption in exchange for steep discounts."
   },
   {
    "q": "What does 'right-sizing' mean in cloud cost management?",
    "options": [
     "Deleting all unused accounts",
     "Always choosing the largest instance available",
     "Adjusting a resource's capacity to match its actual usage",
     "Making every server the same size"
    ],
    "answer": 2,
    "explain": "Right-sizing means matching resource capacity (like CPU or memory) to actual observed usage, avoiding overpaying for unused capacity."
   },
   {
    "q": "What do Reserved Instances or Savings Plans require in exchange for a discount?",
    "options": [
     "Nothing at all",
     "Giving up all monitoring",
     "A long-term usage commitment, typically one to three years",
     "Using only free-tier resources"
    ],
    "answer": 2,
    "explain": "Reserved pricing offers a discount in exchange for committing to a usage level over a fixed term, usually one to three years."
   },
   {
    "q": "What is FinOps primarily concerned with?",
    "options": [
     "Writing application code",
     "Physical data center construction",
     "Designing user interfaces",
     "Managing and optimizing cloud spending across teams"
    ],
    "answer": 3,
    "explain": "FinOps is the practice of managing cloud costs, bringing together engineering, finance, and business stakeholders."
   }
  ]
 },
 "cloud-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Vendor lock-in happens when switching cloud providers becomes so costly or complex that you are effectively stuck, often because you have deeply adopted one provider's proprietary services. Some organizations respond with a multi-cloud strategy, deliberately running workloads across two or more providers to avoid depending on any single one and to negotiate better pricing."
    },
    {
     "type": "text",
     "text": "Multi-cloud is not free of cost either: it multiplies the operational complexity, since teams must understand multiple providers' quirks, pricing, and APIs. Tools like Kubernetes and Terraform help by giving a common layer that works the same way across providers, reducing how tightly you are tied to any one of them."
    },
    {
     "type": "text",
     "text": "Edge computing pushes computation physically closer to where data is generated — a factory sensor, a retail store camera, a phone — instead of always sending it to a distant data center. This cuts latency and reduces the bandwidth needed to send everything to the cloud, which matters for applications like real-time video analysis or autonomous vehicles."
    },
    {
     "type": "tip",
     "text": "Do not confuse edge computing with a CDN. A CDN caches static content near users; edge computing runs actual application logic and processing near where data is created, often on the device or a nearby local server."
    },
    {
     "type": "code",
     "code": "# Terraform: same syntax describes infrastructure on different clouds\nresource \"aws_instance\" \"web\" {\n  ami           = \"ami-0123456789abcdef0\"\n  instance_type = \"t3.micro\"\n}\n# A similar 'azurerm_virtual_machine' block would target Azure instead",
     "lang": "hcl"
    }
   ],
   "recap": "Vendor lock-in ties you tightly to one provider; multi-cloud spreads workloads across providers to reduce that risk at the cost of extra complexity, while edge computing moves processing physically close to where data is generated."
  },
  "quiz": [
   {
    "q": "What is vendor lock-in?",
    "options": [
     "Being so dependent on one provider's services that switching becomes costly or complex",
     "A pricing discount for loyalty",
     "A type of encryption key",
     "A security feature that blocks hackers"
    ],
    "answer": 0,
    "explain": "Vendor lock-in occurs when deep reliance on one provider's proprietary services makes switching providers difficult or expensive."
   },
   {
    "q": "What is a downside of a multi-cloud strategy?",
    "options": [
     "It removes the need for monitoring",
     "It eliminates all costs",
     "It increases operational complexity, since teams must manage multiple providers",
     "It is illegal in most countries"
    ],
    "answer": 2,
    "explain": "Running across multiple providers means learning and managing multiple sets of APIs, pricing models, and quirks, adding complexity."
   },
   {
    "q": "How does edge computing differ from a CDN?",
    "options": [
     "Edge computing runs actual processing near data sources, while a CDN only caches static content",
     "They are exactly the same thing",
     "A CDN processes video in real time",
     "Edge computing only works for text files"
    ],
    "answer": 0,
    "explain": "A CDN caches static content close to users, while edge computing performs real application processing near where data is generated."
   },
   {
    "q": "Why might a company use Terraform across multiple clouds?",
    "options": [
     "It provides a common syntax to describe infrastructure across different providers",
     "It only works on one provider",
     "It is a monitoring tool only",
     "It replaces the need for any cloud provider"
    ],
    "answer": 0,
    "explain": "Terraform lets teams describe infrastructure in a similar way across providers, reducing the friction of multi-cloud management."
   }
  ]
 },
 "cloud-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You have now covered the full arc of cloud computing: what the cloud is and why virtualization makes it possible, the service models (IaaS/PaaS/SaaS) and deployment models (public/private/hybrid), the major providers, storage and database choices, scaling and networking, containers and Kubernetes, serverless and microservices, and the operational disciplines of security, DevOps, monitoring, and cost control."
    },
    {
     "type": "text",
     "text": "A strong interview answer connects these pieces instead of listing them. For example: 'We containerize the app with Docker, orchestrate it with Kubernetes for auto-scaling and self-healing, put the database in a private subnet behind a load balancer, and use CI/CD to deploy safely, while FinOps practices like right-sizing keep the bill under control.'"
    },
    {
     "type": "text",
     "text": "For exams, be ready to compare things directly: SQL vs NoSQL, object vs block vs file storage, on-demand vs reserved vs spot pricing, monolith vs microservices, and RTO vs RPO. Examiners love asking you to pick the right tool for a described scenario, not just define terms."
    },
    {
     "type": "tip",
     "text": "The single most tested concept across both exams and interviews is the shared responsibility model — always be ready to say clearly what the provider secures and what you, the customer, must secure yourself."
    },
    {
     "type": "code",
     "code": "# A mental checklist before answering a cloud design question\nchecklist = [\n    \"What are the availability and latency requirements?\",\n    \"What is the RTO/RPO for disaster recovery?\",\n    \"SQL or NoSQL, and why?\",\n    \"Where do compute, storage, and networking need to scale?\",\n    \"What does the shared responsibility model mean here?\",\n    \"How will cost be controlled as usage grows?\"\n]\nfor item in checklist:\n    print(\"-\", item)",
     "lang": "python"
    }
   ],
   "recap": "Cloud computing is a connected system of choices — service model, storage, database, scaling, networking, and security — and both exams and interviews reward candidates who can compare options and justify a design, not just recite definitions."
  },
  "quiz": [
   {
    "q": "What is the most consistently tested concept across cloud exams and interviews, according to this review?",
    "options": [
     "The color scheme of cloud consoles",
     "The shared responsibility model",
     "The exact founding year of AWS",
     "The number of data centers Google owns"
    ],
    "answer": 1,
    "explain": "The shared responsibility model — what the provider secures versus what the customer must secure — is repeatedly emphasized as a core, frequently tested concept."
   },
   {
    "q": "In a strong interview answer about cloud architecture, what matters most?",
    "options": [
     "Listing every cloud service by name",
     "Avoiding mentioning security at all",
     "Only discussing pricing",
     "Connecting the pieces together into a coherent design with reasons"
    ],
    "answer": 3,
    "explain": "Interviewers value candidates who can connect concepts into a working design and justify choices, not just recite a list of services."
   },
   {
    "q": "Which comparison is explicitly highlighted as a favorite exam question type?",
    "options": [
     "Comparing SQL vs NoSQL, or monolith vs microservices, for a given scenario",
     "Comparing font choices in a UI",
     "Comparing keyboard shortcuts",
     "Comparing screen resolutions"
    ],
    "answer": 0,
    "explain": "Exams commonly ask you to pick the right tool for a described scenario, such as choosing between SQL and NoSQL or monolith and microservices."
   },
   {
    "q": "Which factor should you check first when designing a disaster recovery plan, per the checklist?",
    "options": [
     "The company logo colors",
     "The programming language used",
     "The office furniture budget",
     "The RTO and RPO requirements"
    ],
    "answer": 3,
    "explain": "RTO and RPO define how quickly you must recover and how much data loss is acceptable, driving the entire disaster recovery design."
   }
  ]
 }
}
