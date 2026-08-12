// Lesson text and quiz questions for "Cyber Security & Cryptography".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "cybersecurity-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every app you build handles something valuable: passwords, messages, money, health records. Cyber security is the practice of protecting that data and the systems that hold it from people who want to steal, change, or destroy it. As an engineer, security is not an extra feature you bolt on at the end — it is part of doing the job well."
    },
    {
     "type": "text",
     "text": "Think of a system like a house. It can have strong walls (good code) but still be broken into through an unlocked window (a weak password) or a trusting owner who opens the door to a stranger (a phishing email). Attackers look for the easiest way in, not the hardest, so defenders must think about the whole house, not just the front door."
    },
    {
     "type": "text",
     "text": "A useful mindset is 'assume breach': plan as if an attacker will eventually get in, and design so the damage is limited. This means not trusting input, giving programs only the access they need, and keeping backups. Security is about reducing risk, never about being 100% safe — perfect security does not exist."
    },
    {
     "type": "tip",
     "text": "Tip: The weakest link is usually a human, not the maths. A brilliant encryption algorithm won't help if someone writes the password on a sticky note."
    }
   ],
   "recap": "Security protects valuable data and systems; attackers pick the easiest path, so defenders must think broadly and assume a breach can happen."
  },
  "quiz": [
   {
    "q": "What does the 'assume breach' mindset mean?",
    "options": [
     "Only encrypt data once a breach is confirmed",
     "Trust all internal systems completely",
     "Never connect to the internet",
     "Design so damage is limited when an attacker gets in"
    ],
    "answer": 3,
    "explain": "Assume-breach means planning for a successful attack so its impact is contained, rather than assuming you'll always keep attackers out."
   },
   {
    "q": "Why do attackers often succeed through passwords or phishing rather than breaking encryption?",
    "options": [
     "Encryption is illegal to attack",
     "Attackers choose the easiest way in, and humans are often the weakest link",
     "Passwords are always unbreakable",
     "Phishing is a type of firewall"
    ],
    "answer": 1,
    "explain": "Attackers take the path of least resistance, and weak human habits are usually easier to exploit than strong cryptography."
   },
   {
    "q": "Which statement about security is most accurate?",
    "options": [
     "Security reduces risk but is never absolute",
     "Perfect security is achievable with enough money",
     "Only banks need security",
     "Security should be added only after launch"
    ],
    "answer": 0,
    "explain": "No system is perfectly secure; the goal is to reduce risk to an acceptable level."
   }
  ]
 },
 "cybersecurity-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Security professionals summarise their goals with three words: Confidentiality, Integrity, and Availability — the CIA triad. It is a checklist you can hold up against any system to ask, 'Am I protecting the right things?' Nothing to do with the spy agency; it's just a memorable name."
    },
    {
     "type": "text",
     "text": "Confidentiality means only authorised people can see the data. Your bank balance should be visible to you, not to strangers. We achieve it with things like passwords, access controls, and encryption. A leak of private data is a confidentiality failure."
    },
    {
     "type": "text",
     "text": "Integrity means data stays correct and unaltered unless changed by someone allowed to. If an attacker changes a '₹100 transfer' into a '₹100000 transfer', that is an integrity failure. We protect it with checksums, hashes, and digital signatures that reveal tampering."
    },
    {
     "type": "text",
     "text": "Availability means the system is up and working when legitimate users need it. A website knocked offline by an overload attack has failed on availability — the data was safe, but nobody could reach it. Backups, redundancy, and good capacity planning support availability."
    },
    {
     "type": "tip",
     "text": "Tip: The three goals can conflict. Locking data behind seven passwords boosts confidentiality but hurts availability. Good security balances the triad for the situation."
    }
   ],
   "recap": "The CIA triad — Confidentiality (only the right people see it), Integrity (data stays correct), Availability (it's there when needed) — frames every security decision."
  },
  "quiz": [
   {
    "q": "An attacker secretly changes the price field in an order database. Which CIA property failed?",
    "options": [
     "Availability",
     "Confidentiality",
     "Integrity",
     "Redundancy"
    ],
    "answer": 2,
    "explain": "Altering data without authorisation is a violation of integrity, which is about data staying correct and unaltered."
   },
   {
    "q": "A flood of fake traffic makes a website unreachable for real users. This mainly harms:",
    "options": [
     "Availability",
     "Confidentiality",
     "Encryption",
     "Integrity"
    ],
    "answer": 0,
    "explain": "When legitimate users cannot access a working system, the availability goal has been broken."
   },
   {
    "q": "Encrypting a database of private customer records primarily protects which property?",
    "options": [
     "Latency",
     "Availability",
     "Confidentiality",
     "Integrity"
    ],
    "answer": 2,
    "explain": "Encryption keeps data unreadable to unauthorised viewers, which is the essence of confidentiality."
   },
   {
    "q": "Why can the CIA goals sometimes conflict?",
    "options": [
     "Stronger protection on one can reduce another, like too many locks hurting availability",
     "They only apply to hardware",
     "Integrity always cancels confidentiality",
     "They are all the same goal"
    ],
    "answer": 0,
    "explain": "Tightening one goal (e.g., heavy access controls for confidentiality) can make a system harder to reach, reducing availability, so balance is needed."
   }
  ]
 },
 "cybersecurity-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "To defend a system you must know how it gets attacked. Two of the most common everyday threats are malware and phishing. Understanding them helps you spot danger before it spreads."
    },
    {
     "type": "text",
     "text": "Malware is 'malicious software' — any program written to harm or take control. A virus attaches itself to other files and spreads; a worm copies itself across a network on its own; a trojan hides inside something that looks useful; and ransomware encrypts your files and demands payment to unlock them. Malware usually arrives through downloads, infected USB drives, or dodgy attachments."
    },
    {
     "type": "text",
     "text": "Phishing is a social-engineering attack: the attacker tricks a person instead of hacking the machine. A fake email that looks like it's from your bank asks you to 'verify your password' on a lookalike website, and you hand your credentials straight to the attacker. Spear phishing is a targeted version aimed at one specific person, often using details about them to seem convincing."
    },
    {
     "type": "text",
     "text": "Other important attacks include the Denial of Service (DoS/DDoS), where a system is flooded with traffic until it collapses, and the man-in-the-middle, where an attacker secretly sits between two parties and reads or changes what they send. Many attacks combine techniques — a phishing email may deliver ransomware, for example."
    },
    {
     "type": "tip",
     "text": "Tip: Hover over a link before clicking. If the email says 'bank.com' but the link points to 'bank-verify-login.xyz', that mismatch is a classic phishing red flag."
    }
   ],
   "recap": "Malware (viruses, worms, trojans, ransomware) attacks the machine; phishing attacks the person; DoS and man-in-the-middle target availability and communication. Attacks are often combined."
  },
  "quiz": [
   {
    "q": "Which describes ransomware?",
    "options": [
     "Malware that encrypts your files and demands payment to unlock them",
     "A backup system",
     "A tool that blocks phishing emails",
     "Software that speeds up your computer"
    ],
    "answer": 0,
    "explain": "Ransomware locks a victim's files with encryption and demands a ransom for the decryption key."
   },
   {
    "q": "A fake email pretending to be your bank asks you to enter your password on a lookalike site. This is:",
    "options": [
     "A worm",
     "Phishing",
     "A denial of service attack",
     "Encryption"
    ],
    "answer": 1,
    "explain": "Tricking a person into revealing credentials via a deceptive message is phishing, a form of social engineering."
   },
   {
    "q": "What makes a worm different from a virus?",
    "options": [
     "A worm cannot spread",
     "A worm is a legitimate program",
     "A worm can copy itself across a network without attaching to another file",
     "A worm only affects printers"
    ],
    "answer": 2,
    "explain": "Unlike a virus that attaches to host files, a worm self-replicates and spreads across networks on its own."
   },
   {
    "q": "In a man-in-the-middle attack, the attacker:",
    "options": [
     "Encrypts their own files",
     "Secretly sits between two parties, reading or altering their messages",
     "Floods a server with traffic",
     "Physically steals a laptop"
    ],
    "answer": 1,
    "explain": "A man-in-the-middle intercepts communication between two parties, able to eavesdrop or tamper with it."
   }
  ]
 },
 "cybersecurity-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Encryption turns readable data (plaintext) into scrambled data (ciphertext) using an algorithm and a key. Without the right key, the ciphertext looks like nonsense. This is how we keep data confidential even if someone intercepts it. Decryption is the reverse: turning ciphertext back into plaintext."
    },
    {
     "type": "text",
     "text": "Symmetric encryption uses the same key to lock and unlock. It is fast and great for large amounts of data. The catch: both sides must already share the secret key, and getting that key to the other person safely is the hard part. AES is the most widely used symmetric algorithm today."
    },
    {
     "type": "text",
     "text": "Asymmetric encryption uses a pair of keys: a public key that anyone can have, and a private key kept secret. Data locked with the public key can only be unlocked with the matching private key. Picture a mailbox: anyone can drop a letter through the slot (public key), but only you have the key to open it and read (private key). RSA and elliptic-curve (ECC) are common examples."
    },
    {
     "type": "text",
     "text": "In practice we combine both. Asymmetric encryption is slow, so systems like HTTPS use it just to safely exchange a symmetric key, then switch to fast symmetric encryption for the actual conversation. This 'best of both worlds' approach is called hybrid encryption."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "from cryptography.fernet import Fernet\n\n# Symmetric encryption: one shared key locks and unlocks\nkey = Fernet.generate_key()\ncipher = Fernet(key)\n\nsecret = b\"Meet at 6pm\"\ntoken = cipher.encrypt(secret)      # ciphertext, unreadable\nprint(token)\n\nplain = cipher.decrypt(token)       # same key reverses it\nprint(plain.decode())               # 'Meet at 6pm'"
    },
    {
     "type": "tip",
     "text": "Tip: Never invent your own encryption algorithm for real use. Use trusted, well-reviewed libraries — homemade crypto almost always has hidden flaws."
    }
   ],
   "recap": "Encryption scrambles data with a key. Symmetric uses one shared key (fast, but key-sharing is hard); asymmetric uses a public/private key pair (solves key sharing). HTTPS combines both as hybrid encryption."
  },
  "quiz": [
   {
    "q": "What is the main advantage of asymmetric encryption over symmetric?",
    "options": [
     "It solves the problem of safely sharing a secret key",
     "It never needs any keys",
     "It cannot be broken by anyone ever",
     "It is much faster for large files"
    ],
    "answer": 0,
    "explain": "With a public/private key pair, you can share the public key openly, avoiding the risky problem of distributing a shared secret."
   },
   {
    "q": "In the mailbox analogy, the private key is like:",
    "options": [
     "The address on the envelope",
     "The key only you have to open and read the mail",
     "The postal worker",
     "The public slot anyone can post through"
    ],
    "answer": 1,
    "explain": "The private key, kept secret by the owner, is what unlocks messages encrypted with the matching public key."
   },
   {
    "q": "Why does HTTPS use hybrid encryption?",
    "options": [
     "Because public keys must stay secret",
     "To avoid using any keys at all",
     "To use slow asymmetric crypto to exchange a key, then fast symmetric crypto for the data",
     "Because symmetric encryption is illegal"
    ],
    "answer": 2,
    "explain": "Hybrid encryption uses asymmetric crypto once to share a symmetric key, then the faster symmetric algorithm for the bulk of the traffic."
   },
   {
    "q": "Which is the widely used symmetric encryption standard today?",
    "options": [
     "AES",
     "SHA-256",
     "RSA",
     "HTTP"
    ],
    "answer": 0,
    "explain": "AES (Advanced Encryption Standard) is the dominant symmetric algorithm; RSA is asymmetric and SHA-256 is a hash, not encryption."
   }
  ]
 },
 "cybersecurity-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A hash function takes any input — a word, a file, a whole movie — and produces a fixed-length string called a hash or digest. The same input always gives the same hash, but even a tiny change to the input produces a completely different result. Crucially, hashing is one-way: you cannot reverse a hash back into the original data."
    },
    {
     "type": "text",
     "text": "This is different from encryption. Encryption is two-way (you decrypt to get the data back); hashing is one-way (there is no 'unhash'). Think of a hash like a fingerprint: it uniquely identifies something, but you cannot rebuild a person from their fingerprint."
    },
    {
     "type": "text",
     "text": "Hashes verify integrity. Download a file with its published hash, hash your copy, and compare — if they match, the file wasn't corrupted or tampered with. A good cryptographic hash (like SHA-256) is also collision-resistant, meaning it's practically impossible to find two different inputs with the same hash."
    },
    {
     "type": "text",
     "text": "Hashing is how passwords should be stored. Instead of keeping your actual password, a server stores its hash; at login it hashes what you type and compares. But because attackers precompute hashes of common passwords, we add a random 'salt' to each password before hashing so identical passwords get different hashes, and use slow algorithms like bcrypt or Argon2 to make guessing expensive."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import hashlib\n\n# Same input -> same hash, always\nprint(hashlib.sha256(b\"hello\").hexdigest())\n# 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824\n\n# One tiny change -> totally different hash\nprint(hashlib.sha256(b\"Hello\").hexdigest())\n# 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"
    },
    {
     "type": "tip",
     "text": "Tip: Never store passwords as plain text or with plain hashing alone. Use a salted, slow hash like bcrypt or Argon2 — it's the industry standard for a reason."
    }
   ],
   "recap": "Hashing is a one-way function turning any input into a fixed-length fingerprint. It verifies integrity and stores passwords safely — best done with a salt and a slow algorithm like bcrypt or Argon2."
  },
  "quiz": [
   {
    "q": "What is the key difference between hashing and encryption?",
    "options": [
     "Hashing is one-way and cannot be reversed; encryption can be decrypted",
     "Encryption is one-way; hashing is two-way",
     "They are exactly the same",
     "Hashing is faster to type"
    ],
    "answer": 0,
    "explain": "Hashing produces an irreversible digest, whereas encryption is designed to be reversed with the correct key."
   },
   {
    "q": "Why is a random 'salt' added to passwords before hashing?",
    "options": [
     "So identical passwords produce different hashes and precomputed attacks fail",
     "To make the hash shorter",
     "To encrypt the network",
     "To reverse the hash later"
    ],
    "answer": 0,
    "explain": "A unique salt per password ensures identical passwords hash differently, defeating precomputed hash (rainbow table) attacks."
   },
   {
    "q": "You download a file and its published SHA-256 hash matches your copy's hash. This confirms:",
    "options": [
     "The download used asymmetric keys",
     "The file was likely not corrupted or tampered with",
     "The file is a virus",
     "The file is encrypted"
    ],
    "answer": 1,
    "explain": "Matching hashes indicate the file's integrity is intact — it hasn't been altered in transit."
   },
   {
    "q": "'Collision-resistant' means it is practically impossible to:",
    "options": [
     "Store the hash in a database",
     "Find two different inputs that produce the same hash",
     "Reverse the hash",
     "Run the hash function twice"
    ],
    "answer": 1,
    "explain": "Collision resistance means an attacker cannot feasibly find two distinct inputs sharing one hash output."
   }
  ]
 },
 "cybersecurity-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Data spends much of its life travelling across networks, so defending the network is central to security. The goal is to control who can connect, protect data in transit, and detect intruders — layered so that if one control fails, another still stands. This layering is called defence in depth."
    },
    {
     "type": "text",
     "text": "A firewall is the gatekeeper. It sits between networks and decides which traffic to allow or block based on rules — for example, permit web traffic on port 443 but block everything else. Think of it as a security guard checking a guest list at the door. Firewalls can be hardware, software, or built into the cloud."
    },
    {
     "type": "text",
     "text": "TLS (the successor to SSL) secures data in transit — it's the 'S' in HTTPS. When you see the padlock in your browser, TLS is encrypting the connection and verifying the server's identity with a certificate, so eavesdroppers see only ciphertext and you know you're talking to the real site, not an impostor. A VPN extends this idea by tunnelling all your traffic through an encrypted connection."
    },
    {
     "type": "text",
     "text": "To catch what slips through, we use monitoring tools. An Intrusion Detection System (IDS) watches traffic and raises an alert on suspicious patterns; an Intrusion Prevention System (IPS) goes further and blocks it. Splitting a network into segments (segmentation) limits how far an attacker can move if they get in — a breach in the guest Wi-Fi shouldn't reach the servers."
    },
    {
     "type": "tip",
     "text": "Tip: 'Deny by default' is a strong firewall rule — block everything, then allow only what's specifically needed. It's safer than allowing everything and blocking known-bad."
    }
   ],
   "recap": "Network security uses layered defences: firewalls control access, TLS/VPNs encrypt data in transit and verify identity, and IDS/IPS plus segmentation detect and contain intruders. Prefer deny-by-default."
  },
  "quiz": [
   {
    "q": "What is the primary job of a firewall?",
    "options": [
     "To hash passwords",
     "To control which network traffic is allowed or blocked based on rules",
     "To encrypt stored files",
     "To speed up the internet"
    ],
    "answer": 1,
    "explain": "A firewall acts as a gatekeeper, permitting or denying traffic according to defined rules."
   },
   {
    "q": "When you see the padlock and HTTPS in a browser, what is TLS doing?",
    "options": [
     "Hashing the whole website",
     "Blocking all traffic",
     "Encrypting the connection and verifying the server's identity",
     "Deleting cookies"
    ],
    "answer": 2,
    "explain": "TLS encrypts data in transit and uses a certificate to confirm you're connected to the genuine server."
   },
   {
    "q": "What is the difference between an IDS and an IPS?",
    "options": [
     "An IDS encrypts data; an IPS decrypts it",
     "An IPS only works on Wi-Fi",
     "An IDS alerts on suspicious traffic; an IPS also blocks it",
     "They are identical"
    ],
    "answer": 2,
    "explain": "An Intrusion Detection System raises alerts, while an Intrusion Prevention System actively blocks the malicious traffic."
   },
   {
    "q": "Why is network segmentation useful?",
    "options": [
     "It makes passwords longer",
     "It limits how far an attacker can move if they breach one part",
     "It replaces the need for encryption",
     "It disables firewalls"
    ],
    "answer": 1,
    "explain": "Segmentation contains a breach to one section, preventing an attacker from freely reaching the rest of the network."
   }
  ]
 },
 "cybersecurity-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Knowing the theory is only half the job; the other half is building and operating systems securely every day. Advanced security is about principles you apply consistently, not one-off fixes. Here are the ones a computer-engineering professional is expected to live by."
    },
    {
     "type": "text",
     "text": "Least privilege: give every user, process, and service only the access it truly needs, and no more. A photo-editing app doesn't need your contacts; a database account for reports shouldn't be able to delete tables. Combine this with zero trust — never automatically trust a request just because it comes from inside the network; verify identity and permissions every time."
    },
    {
     "type": "text",
     "text": "Defence in depth and secure defaults: layer multiple controls so no single failure is fatal, and make the safe option the default. Turn on multi-factor authentication (MFA), which requires something you know (password) plus something you have (a phone code), so a stolen password alone isn't enough. Keep software patched — most breaches exploit known, already-fixed vulnerabilities."
    },
    {
     "type": "text",
     "text": "Secure coding is your direct responsibility as a developer. Validate and sanitise all input to prevent injection attacks like SQL injection, where malicious input is smuggled into a query. Use parameterised queries, encode output to stop cross-site scripting (XSS), and never hard-code secrets like API keys in source code — store them in a secrets manager or environment variables kept out of version control."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# WRONG: string-building lets input become SQL (injection risk)\nquery = \"SELECT * FROM users WHERE name = '\" + user_input + \"'\"\n\n# RIGHT: parameterised query treats input as data, never code\ncursor.execute(\n    \"SELECT * FROM users WHERE name = ?\",\n    (user_input,)\n)"
    },
    {
     "type": "text",
     "text": "Finally, plan for when things go wrong. Keep tested backups (following the 3-2-1 rule: three copies, two media types, one offsite) so ransomware can't hold you hostage, and have an incident response plan so your team knows who does what during a breach. Security is a continuous process of improving, monitoring, and responding — not a box you tick once."
    },
    {
     "type": "tip",
     "text": "Tip: Treat every piece of external input as hostile until proven safe. 'Never trust user input' is the single habit that prevents the largest share of application vulnerabilities."
    }
   ],
   "recap": "Advanced practice means living by principles: least privilege and zero trust, defence in depth with MFA and patching, secure coding (parameterised queries, no hard-coded secrets), and being ready with tested backups and an incident response plan."
  },
  "quiz": [
   {
    "q": "The principle of least privilege says you should:",
    "options": [
     "Grant each user or process only the access it genuinely needs",
     "Remove all access from everyone",
     "Trust anything on the internal network",
     "Give everyone admin access to save time"
    ],
    "answer": 0,
    "explain": "Least privilege limits each account to the minimum access required, shrinking the damage a compromise can cause."
   },
   {
    "q": "Why does the parameterised query prevent SQL injection?",
    "options": [
     "It makes queries run faster",
     "It encrypts the database",
     "It treats user input as data, not as executable SQL code",
     "It hashes the query"
    ],
    "answer": 2,
    "explain": "Parameterised queries separate code from data, so malicious input can't be interpreted as part of the SQL command."
   },
   {
    "q": "What does multi-factor authentication (MFA) add on top of a password?",
    "options": [
     "A longer password",
     "A second factor like a phone code, so a stolen password alone isn't enough",
     "Automatic encryption of all files",
     "A faster login"
    ],
    "answer": 1,
    "explain": "MFA requires an additional factor (something you have or are), so a compromised password by itself can't grant access."
   },
   {
    "q": "Under 'zero trust', a request coming from inside the corporate network should be:",
    "options": [
     "Given admin rights",
     "Trusted automatically",
     "Ignored completely",
     "Verified for identity and permissions every time"
    ],
    "answer": 3,
    "explain": "Zero trust means no request is trusted by default based on its origin; identity and authorisation are always checked."
   }
  ]
 },
 "cybersecurity-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know that hashing turns data into a fixed-size fingerprint that can't be reversed. Passwords are the classic use case: a system should never store your actual password, only the hash of it. When you log in, it hashes what you typed and compares the two hashes."
    },
    {
     "type": "text",
     "text": "But plain hashing has a weakness. Attackers pre-compute huge tables of hashes for common passwords, called rainbow tables, and just look up a match. The fix is a salt: a random string added to the password before hashing, unique per user and stored alongside the hash. Now two users with the same password get completely different hashes, and pre-computed tables become useless."
    },
    {
     "type": "text",
     "text": "There's a second problem: general-purpose hashes like SHA-256 are fast, and fast is bad for passwords, because it lets an attacker who steals your hash database try billions of guesses per second on cheap hardware. Password hashing needs to be deliberately slow. That's why we use special algorithms built for this job: bcrypt, scrypt, and Argon2. They add a 'work factor' you can dial up as computers get faster."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "import hashlib, os\n\npassword = b\"MyS3cret!\"\nsalt = os.urandom(16)  # unique random salt per user, stored alongside the hash\n\n# pbkdf2_hmac repeats the hash thousands of times, making it deliberately slow\nhashed = hashlib.pbkdf2_hmac(\"sha256\", password, salt, 100_000)\nprint(hashed.hex())\n\n# checking a login attempt (using the same stored salt)\nattempt = b\"MyS3cret!\"\ncheck = hashlib.pbkdf2_hmac(\"sha256\", attempt, salt, 100_000)\nprint(\"Password correct\" if check == hashed else \"Wrong password\")"
    },
    {
     "type": "tip",
     "text": "Exam tip: if a question asks 'why not just use MD5/SHA-256 for passwords', the answer is always speed — they're too fast, which helps brute-force attacks. bcrypt/Argon2 are deliberately slow."
    }
   ],
   "recap": "Never store plaintext passwords: store a salted hash. The salt defeats rainbow tables, and slow, purpose-built algorithms like bcrypt or Argon2 defeat brute-force guessing."
  },
  "quiz": [
   {
    "q": "Why do we add a salt before hashing a password?",
    "options": [
     "To make the hash reversible",
     "So identical passwords produce different hashes, defeating pre-computed rainbow tables",
     "To speed up hashing",
     "To make the hash shorter"
    ],
    "answer": 1,
    "explain": "A unique random salt per user means the same password hashes differently for each user, so an attacker's pre-computed table is useless."
   },
   {
    "q": "Why is SHA-256 a poor choice for hashing passwords, even though it's a strong hash?",
    "options": [
     "It's not deterministic",
     "It doesn't support salting at all",
     "It's too slow for a server to compute",
     "It's fast, which lets attackers try billions of guesses per second if the hash is stolen"
    ],
    "answer": 3,
    "explain": "General-purpose hashes are optimised for speed, which is exactly the opposite of what you want against a brute-force attacker."
   },
   {
    "q": "What do bcrypt, scrypt, and Argon2 have in common?",
    "options": [
     "They are used only for wireless security",
     "They encrypt data so it can be decrypted later",
     "They are deliberately slow, tunable hashing algorithms designed for passwords",
     "They compress passwords to save storage"
    ],
    "answer": 2,
    "explain": "These algorithms include a configurable work factor to make each hash computation slow, resisting brute-force and hardware-accelerated attacks."
   },
   {
    "q": "If two users pick the exact same password on a properly salted system, what happens to their stored hashes?",
    "options": [
     "Only the first user's password is hashed",
     "They are different, because each user has a different random salt",
     "The system rejects the second user",
     "They are identical"
    ],
    "answer": 1,
    "explain": "Each account gets its own random salt, so even identical passwords produce different final hashes."
   }
  ]
 },
 "cybersecurity-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Authentication proves who you are; access control decides what you're allowed to do once you're in. There isn't just one way to manage that — different systems use different models, and exam papers love asking you to tell them apart."
    },
    {
     "type": "text",
     "text": "Discretionary Access Control (DAC) lets the owner of a resource decide who else can access it — like sharing a Google Doc with specific people. It's flexible but risky, since any user with access can often pass it on. Mandatory Access Control (MAC) is the opposite: a central authority sets rigid rules based on security labels (like 'Confidential' or 'Top Secret'), and no user, not even the owner, can override them. MAC is common in military and government systems."
    },
    {
     "type": "text",
     "text": "Role-Based Access Control (RBAC) assigns permissions to roles, not individuals — 'Manager', 'Accountant', 'Intern' — and users get access by being placed in a role. This is the most common model in businesses because it scales: promote someone and just change their role, instead of editing a hundred individual permissions. Attribute-Based Access Control (ABAC) goes further, granting access based on a combination of attributes (user department, time of day, device, location) evaluated by policy at request time."
    },
    {
     "type": "tip",
     "text": "Memory aid: DAC = owner Decides. MAC = system Mandates (fixed labels, no exceptions). RBAC = Role decides. ABAC = Attributes decide, checked dynamically."
    }
   ],
   "recap": "Access control models differ in who sets the rules: DAC lets owners share resources, MAC enforces fixed labels centrally, RBAC grants access by job role, and ABAC evaluates multiple attributes at request time."
  },
  "quiz": [
   {
    "q": "In Mandatory Access Control (MAC), who can override the access rules for a labelled resource?",
    "options": [
     "Any user with a manager role",
     "No one — the rules are fixed centrally regardless of ownership",
     "Whoever created the account",
     "The file's owner, at any time"
    ],
    "answer": 1,
    "explain": "MAC rules are set centrally using security labels, and individual users, including owners, cannot override them."
   },
   {
    "q": "A company assigns permissions to job titles like 'HR', 'Finance', and 'Intern', and users inherit access by being placed in one of these. Which model is this?",
    "options": [
     "Mandatory Access Control",
     "Role-Based Access Control",
     "Physical access control",
     "Discretionary Access Control"
    ],
    "answer": 1,
    "explain": "Assigning permissions to roles rather than individuals is the defining feature of RBAC, and it scales well as staff change."
   },
   {
    "q": "Which access control model would grant or deny access based on a mix of user department, current time, and device type, evaluated at the moment of the request?",
    "options": [
     "MAC",
     "ABAC",
     "RBAC",
     "DAC"
    ],
    "answer": 1,
    "explain": "ABAC evaluates multiple attributes together against a policy at request time, allowing very fine-grained, context-aware decisions."
   },
   {
    "q": "Why is DAC considered riskier than MAC in high-security environments?",
    "options": [
     "Under DAC, any user with access can often share it further, spreading control beyond the original policy",
     "DAC requires no authentication at all",
     "DAC is slower to compute",
     "DAC cannot be used with passwords"
    ],
    "answer": 0,
    "explain": "Because owners control sharing in DAC, permissions can spread in ways a central authority never intended, unlike the rigid rules of MAC."
   }
  ]
 },
 "cybersecurity-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You learned that asymmetric encryption uses a public key and a private key. But there's a gap: if someone hands you a public key claiming to be your bank, how do you know it really belongs to the bank and not an attacker? That trust problem is what Public Key Infrastructure (PKI) solves."
    },
    {
     "type": "text",
     "text": "A digital certificate is a file that binds a public key to an identity (like a domain name) and is signed by a Certificate Authority (CA) — a trusted third party such as DigiCert or Let's Encrypt. Your browser ships with a list of CAs it already trusts. When a website presents its certificate, the browser checks the CA's signature on it to confirm the certificate is genuine and hasn't been tampered with."
    },
    {
     "type": "text",
     "text": "This creates a chain of trust: the CA signs the website's certificate, and a higher-level 'root' CA may have signed the intermediate CA's certificate, all the way up to a root certificate the browser trusts implicitly. If any link in that chain breaks — an expired certificate, an untrusted CA, a mismatched domain name — the browser shows a warning instead of the padlock."
    },
    {
     "type": "tip",
     "text": "Tip: 'Certificate expired' or 'certificate name mismatch' warnings exist precisely because PKI is checking identity, not just encrypting traffic. Never click through them on a real login page."
    }
   ],
   "recap": "PKI solves the problem of trusting a public key: a Certificate Authority signs a digital certificate binding a public key to an identity, and browsers verify that signature through a chain of trust up to a trusted root."
  },
  "quiz": [
   {
    "q": "What problem does a digital certificate solve?",
    "options": [
     "It proves that a given public key really belongs to the claimed identity",
     "It makes encryption faster",
     "It replaces the need for hashing",
     "It stores your password securely"
    ],
    "answer": 0,
    "explain": "A certificate binds a public key to an identity and is signed by a trusted authority, so you can trust the key actually belongs to who it claims."
   },
   {
    "q": "Who signs a website's digital certificate to vouch for its authenticity?",
    "options": [
     "The website's own developer, self-signed with no oversight",
     "A Certificate Authority (CA) that browsers already trust",
     "The web browser itself, at load time",
     "The user's internet service provider"
    ],
    "answer": 1,
    "explain": "A trusted Certificate Authority signs the certificate; browsers verify that signature against their built-in list of trusted CAs."
   },
   {
    "q": "What does 'chain of trust' refer to in PKI?",
    "options": [
     "The encryption keys used in a single TLS session",
     "A backup copy of the private key",
     "The sequence of signatures from a root CA down through intermediate CAs to the website's certificate",
     "A list of every user who ever logged into a site"
    ],
    "answer": 2,
    "explain": "Trust flows from a root certificate the browser inherently trusts, through intermediate CAs, down to the certificate presented by the site."
   },
   {
    "q": "A browser shows a certificate warning for a login page. What is the safest response?",
    "options": [
     "Switch to HTTP instead of HTTPS",
     "Stop and do not proceed, since identity verification has failed",
     "Enter your password quickly before it expires",
     "Click through — warnings are usually false alarms"
    ],
    "answer": 1,
    "explain": "A certificate warning means the identity of the server could not be verified, which is exactly the scenario PKI exists to catch."
   }
  ]
 },
 "cybersecurity-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Encryption keeps a message secret. A digital signature does something different: it proves who sent a message and proves it wasn't altered, without necessarily hiding the message's contents. Think of it as cryptographic proof of authorship."
    },
    {
     "type": "text",
     "text": "Here's how it works. The sender hashes the message to get a short fingerprint, then encrypts that hash with their own private key — this encrypted hash is the signature, attached to the message. Anyone with the sender's public key can decrypt the signature back to the original hash, then hash the message themselves and compare. If the two hashes match, two things are proven at once: the message came from someone holding that private key, and it wasn't changed in transit."
    },
    {
     "type": "text",
     "text": "This gives us three properties exam papers ask about by name: authenticity (it really came from the claimed sender), integrity (it wasn't tampered with), and non-repudiation (the sender can't later deny having sent it, since only they hold that private key). Digital signatures are why you can trust a software update is genuinely from Microsoft, or a signed PDF contract is legally binding."
    },
    {
     "type": "tip",
     "text": "Common confusion: signing uses the sender's PRIVATE key (only they can create it); anyone can VERIFY it with the sender's PUBLIC key. That's the reverse of normal asymmetric encryption, where you encrypt with the recipient's public key."
    }
   ],
   "recap": "A digital signature is a message's hash encrypted with the sender's private key. Anyone can verify it with the sender's public key, proving authenticity, integrity, and non-repudiation."
  },
  "quiz": [
   {
    "q": "Which key does a sender use to create a digital signature?",
    "options": [
     "The recipient's private key",
     "The recipient's public key",
     "Their own private key",
     "A shared symmetric key"
    ],
    "answer": 2,
    "explain": "The sender encrypts the message's hash with their own private key; only they hold it, which is what makes the signature meaningful."
   },
   {
    "q": "Which key does a recipient use to verify a digital signature?",
    "options": [
     "Their own private key",
     "The recipient's own public key",
     "The sender's public key",
     "A shared secret key agreed in advance"
    ],
    "answer": 2,
    "explain": "Anyone holding the sender's public key can decrypt the signature and check it against a fresh hash of the message."
   },
   {
    "q": "What does 'non-repudiation' mean in the context of digital signatures?",
    "options": [
     "The recipient can edit the message",
     "The sender cannot later deny having sent the message",
     "The message can be sent an unlimited number of times",
     "The message is encrypted so no one can read it"
    ],
    "answer": 1,
    "explain": "Since only the sender holds the private key that produced the signature, they cannot credibly deny authorship."
   },
   {
    "q": "If a message is altered after being signed, what happens when the recipient verifies it?",
    "options": [
     "The recipient's public key stops working",
     "The message is automatically re-encrypted",
     "The signature still matches, since signatures don't check content",
     "The recomputed hash of the altered message won't match the decrypted signature, so verification fails"
    ],
    "answer": 3,
    "explain": "Any change to the message changes its hash, so it will no longer match the hash recovered from the signature, revealing tampering."
   }
  ]
 },
 "cybersecurity-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The OWASP Top 10 is a widely referenced list of the most common and dangerous web application weaknesses, maintained by the Open Web Application Security Project. Interviewers and exam papers both draw heavily from it, so knowing the main entries by name and mechanism matters."
    },
    {
     "type": "text",
     "text": "SQL injection, which you've already met, lets an attacker insert malicious SQL through an input field to read or modify data it shouldn't touch. Cross-Site Scripting (XSS) is the web equivalent for the browser: an attacker injects malicious JavaScript into a page viewed by other users. Stored XSS saves the script on the server (e.g. in a comment) so it runs for every visitor; reflected XSS bounces the script back immediately in a crafted link, running only for whoever clicks it."
    },
    {
     "type": "text",
     "text": "Cross-Site Request Forgery (CSRF) tricks a logged-in user's browser into submitting a request they didn't intend — for example, a hidden form on a malicious site that fires 'transfer money' to your bank while your session cookie is still valid. Defences include CSRF tokens (a hidden, unpredictable value the real site checks) and checking the request's origin. Broken authentication covers weaknesses like predictable session IDs, no account lockout after failed logins, or session tokens that never expire."
    },
    {
     "type": "code",
     "lang": "javascript",
     "code": "// Reflected XSS risk: printing user input straight into HTML\nfunction getQueryParam() {\n  return \"<script>stealCookies()</script>\"; // simulated malicious input\n}\nconst name = getQueryParam();\n\n// Mock element standing in for a real DOM node, which behaves the same way\nconst el = { innerHTML: \"\", textContent: \"\" };\n\nel.innerHTML = \"Hello \" + name;   // UNSAFE: a browser would parse and run the <script> tag\nel.textContent = \"Hello \" + name; // SAFE: a browser shows the tag as literal text, never executing it\n\nconsole.log(\"innerHTML value:\", el.innerHTML);\nconsole.log(\"textContent value:\", el.textContent);"
    },
    {
     "type": "tip",
     "text": "Exam tip: SQL injection attacks the database; XSS attacks the browser of another user; CSRF abuses an already-logged-in browser's trust. Three different targets, three different fixes."
    }
   ],
   "recap": "The OWASP Top 10 catalogues common web risks: SQL injection targets the database, XSS injects scripts that run in other users' browsers, and CSRF forges requests from an already-authenticated session. Each needs its own specific defence."
  },
  "quiz": [
   {
    "q": "What is the key difference between stored XSS and reflected XSS?",
    "options": [
     "There is no difference; they are the same attack",
     "Stored XSS only affects the attacker's own browser",
     "Reflected XSS attacks the database directly",
     "Stored XSS is saved on the server and runs for every visitor; reflected XSS runs only via a crafted link the victim clicks"
    ],
    "answer": 3,
    "explain": "Stored XSS persists on the server (e.g. in a comment) and affects all viewers, while reflected XSS is delivered fresh in a malicious link each time."
   },
   {
    "q": "What does a CSRF attack exploit?",
    "options": [
     "A missing firewall rule",
     "A weak password hash",
     "The fact that a victim's browser is still authenticated, tricking it into sending an unwanted request",
     "An expired TLS certificate"
    ],
    "answer": 2,
    "explain": "CSRF relies on the victim already being logged in, so their browser's valid session is hijacked to send a request the user never intended."
   },
   {
    "q": "Which OWASP category best matches: 'session tokens never expire and there's no lockout after repeated failed logins'?",
    "options": [
     "Broken authentication",
     "Cross-Site Request Forgery",
     "SQL injection",
     "Cross-Site Scripting"
    ],
    "answer": 0,
    "explain": "Weaknesses in how a system verifies and manages logged-in sessions fall under broken authentication."
   },
   {
    "q": "Why does replacing innerHTML with textContent help prevent XSS in the code example?",
    "options": [
     "It blocks all network requests",
     "It hashes the user's name",
     "It encrypts the input",
     "It renders input as plain text instead of executable HTML/JavaScript"
    ],
    "answer": 3,
    "explain": "textContent inserts the value as literal text, so any script tags in the input are displayed, not executed."
   }
  ]
 },
 "cybersecurity-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Languages like C and C++ let you write directly to fixed-size memory buffers without automatically checking that your data actually fits. A buffer overflow happens when a program writes more data into a buffer than it was allocated for, spilling over into adjacent memory it shouldn't touch."
    },
    {
     "type": "text",
     "text": "On the stack, that adjacent memory can include the return address — the location the program jumps back to after a function finishes. A classic stack-based buffer overflow attack overwrites that return address with the address of the attacker's own malicious code, hijacking control of the program the moment the function returns. This is how a huge share of historic viruses and worms first gained a foothold."
    },
    {
     "type": "code",
     "lang": "c",
     "code": "#include <stdio.h>\n#include <string.h>\n\nvoid greet(char *name) {\n    char buffer[16];\n    strcpy(buffer, name); // no bounds check: overflow if name > 15 chars\n    printf(\"Hello, %s\\n\", buffer);\n}\n\n// Safer version: bound the copy to the buffer's real size\nvoid greet_safe(char *name) {\n    char buffer[16];\n    strncpy(buffer, name, sizeof(buffer) - 1);\n    buffer[sizeof(buffer) - 1] = '\\0';\n    printf(\"Hello, %s\\n\", buffer);\n}\n\nint main(void) {\n    greet_safe(\"Alice\");       // fits comfortably in the 16-byte buffer\n    greet_safe(\"A very long name that would overflow the buffer\"); // safely truncated\n    return 0;\n}"
    },
    {
     "type": "text",
     "text": "Modern systems fight back with several layers: bounds-checked functions (strncpy instead of strcpy), stack canaries (a secret value placed before the return address that gets checked before the function returns, so tampering is detected), Address Space Layout Randomisation (ASLR, which randomises where code sits in memory each run, so an attacker can't reliably guess an address to jump to), and simply writing new code in memory-safe languages like Python, Java, or Rust, which check bounds automatically."
    },
    {
     "type": "tip",
     "text": "Exam tip: buffer overflow is a memory-corruption vulnerability specific to unmanaged memory (C/C++). Managed languages with automatic bounds checking are not immune to all bugs, but they eliminate this specific class."
    }
   ],
   "recap": "A buffer overflow writes past the end of an allocated buffer, potentially overwriting a function's return address to hijack execution. Defences include bounds-checked functions, stack canaries, ASLR, and memory-safe languages."
  },
  "quiz": [
   {
    "q": "What is a buffer overflow?",
    "options": [
     "Encrypting a buffer with too strong a key",
     "A network running out of bandwidth",
     "A hash collision between two files",
     "Writing more data into a fixed-size buffer than it can hold, spilling into adjacent memory"
    ],
    "answer": 3,
    "explain": "The core problem is a write operation that exceeds the buffer's allocated size, corrupting neighbouring memory."
   },
   {
    "q": "In a classic stack-based overflow attack, what does the attacker often try to overwrite?",
    "options": [
     "The function's return address, to redirect execution to malicious code",
     "The disk's file allocation table",
     "The CPU clock speed",
     "The network's DNS cache"
    ],
    "answer": 0,
    "explain": "Overwriting the return address lets the attacker redirect the program to jump into code of their choosing once the function returns."
   },
   {
    "q": "What does a stack canary do?",
    "options": [
     "Places a secret check value before the return address that's verified before returning, detecting overflow tampering",
     "Encrypts all stack variables",
     "Compresses the stack to save memory",
     "Randomises the CPU's clock speed"
    ],
    "answer": 0,
    "explain": "If an overflow corrupts the canary value while overwriting the return address, the mismatch is detected and the program halts safely."
   },
   {
    "q": "Why does writing an application in Java or Python largely eliminate classic buffer overflow vulnerabilities?",
    "options": [
     "They don't support functions",
     "They disable all network access",
     "These languages don't use memory at all",
     "They automatically perform bounds checking on array and buffer access"
    ],
    "answer": 3,
    "explain": "Memory-safe languages check array and buffer bounds at runtime, raising an error instead of allowing an out-of-bounds write."
   }
  ]
 },
 "cybersecurity-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Malware is any software built to harm, exploit, or spy on a system, but the category covers several very different behaviours, and exam questions test whether you can tell them apart by how they spread and what they do."
    },
    {
     "type": "text",
     "text": "A virus attaches itself to a legitimate file or program and needs a human to run that file to spread further — it can't move on its own. A worm is self-replicating and needs no human action at all: it actively scans networks for vulnerable machines and copies itself across them, which is why worms can spread globally in hours. A Trojan (named after the Trojan Horse) disguises itself as something useful or desirable but secretly carries a malicious payload; unlike viruses and worms, it doesn't self-replicate — it relies on tricking the user into installing it."
    },
    {
     "type": "text",
     "text": "Ransomware encrypts the victim's files and demands payment for the decryption key, often spreading through phishing attachments or unpatched vulnerabilities. A rootkit is designed to hide itself and other malware deep in the operating system, often at a privilege level below normal antivirus scans, making it extremely hard to detect. Spyware quietly collects information — keystrokes, browsing habits, credentials — and sends it to an attacker."
    },
    {
     "type": "tip",
     "text": "Memory aid: virus needs a host file and a human action; worm spreads itself over a network with no human needed; Trojan tricks you into installing it voluntarily. That single distinction (self-replicating vs disguised vs attached) answers most exam questions on this topic."
    }
   ],
   "recap": "Malware types differ in how they spread and hide: viruses attach to files and need human action, worms self-replicate across networks, Trojans disguise themselves to trick users, ransomware encrypts files for extortion, and rootkits hide deep in the OS."
  },
  "quiz": [
   {
    "q": "What distinguishes a worm from a virus?",
    "options": [
     "A worm only affects mobile phones",
     "There is no real difference",
     "A worm self-replicates across a network without human action; a virus needs a host file run by a human",
     "A worm needs a human to run an infected file; a virus does not"
    ],
    "answer": 2,
    "explain": "Worms actively spread themselves over networks, while viruses depend on a human executing an infected file to propagate further."
   },
   {
    "q": "A program disguises itself as a free game but secretly installs spyware when run. What type of malware is this?",
    "options": [
     "Ransomware",
     "Worm",
     "Rootkit",
     "Trojan"
    ],
    "answer": 3,
    "explain": "A Trojan presents itself as something desirable to trick the user into installing it, then delivers a hidden malicious payload."
   },
   {
    "q": "What does ransomware typically do to a victim's system?",
    "options": [
     "It only affects network routers",
     "It deletes the operating system permanently",
     "It slows down the CPU clock speed",
     "It encrypts files and demands payment for the decryption key"
    ],
    "answer": 3,
    "explain": "Ransomware's defining action is encrypting the victim's data and extorting payment in exchange for the key to unlock it."
   },
   {
    "q": "Why are rootkits especially hard to detect?",
    "options": [
     "They never connect to a network",
     "They only target hardware, not software",
     "They only run once and then delete themselves",
     "They hide deep within the operating system, often below the level normal antivirus scans check"
    ],
    "answer": 3,
    "explain": "Rootkits embed themselves at a low privilege level, concealing both themselves and other malware from standard detection tools."
   }
  ]
 },
 "cybersecurity-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The strongest firewall in the world doesn't help if an attacker simply asks an employee to hand over their password. Social engineering is the art of manipulating people, rather than computers, into breaking security procedures — and it's consistently rated the most common way real breaches actually begin."
    },
    {
     "type": "text",
     "text": "Phishing is the most familiar form: a fake email or message, often mimicking a bank, employer, or delivery service, that pressures the victim into clicking a malicious link or entering credentials on a fake page. Spear phishing is a targeted version aimed at a specific person, using personal details to look convincing (a fake email from your actual manager, referencing a real project). Whaling targets senior executives specifically, since they can authorise large transfers or access sensitive systems."
    },
    {
     "type": "text",
     "text": "Other techniques include pretexting (inventing a false scenario, like posing as IT support to get a password 'for a system check'), baiting (leaving an infected USB drive labelled 'Salaries 2024' where an employee will plug it in out of curiosity), and tailgating (physically following an authorised person through a secure door without their own badge). All of these exploit trust, urgency, or curiosity rather than a technical flaw."
    },
    {
     "type": "tip",
     "text": "Exam tip: the best defence against social engineering isn't a technical control at all — it's security awareness training and a culture where verifying an unusual request (calling back on a known number) is normal, not rude."
    }
   ],
   "recap": "Social engineering manipulates people rather than systems. Phishing (and its targeted forms, spear phishing and whaling), pretexting, baiting, and tailgating all exploit trust and urgency; awareness training is the main defence."
  },
  "quiz": [
   {
    "q": "What makes spear phishing different from ordinary phishing?",
    "options": [
     "It only targets computers, not people",
     "It requires physical access to a building",
     "It never uses email",
     "It's personalised toward a specific individual using real details to appear convincing"
    ],
    "answer": 3,
    "explain": "Spear phishing tailors the message to a specific target using real, researched details, making it far more convincing than generic phishing."
   },
   {
    "q": "An attacker leaves a USB drive labelled 'Confidential Payroll' in a company parking lot, hoping an employee plugs it in. What technique is this?",
    "options": [
     "Whaling",
     "Baiting",
     "Pretexting",
     "Tailgating"
    ],
    "answer": 1,
    "explain": "Baiting lures a victim with something tempting, like a labelled USB drive, to get them to compromise their own system out of curiosity."
   },
   {
    "q": "Following an employee through a secure door without swiping your own access badge is an example of:",
    "options": [
     "Ransomware",
     "A stack overflow",
     "Tailgating",
     "Phishing"
    ],
    "answer": 2,
    "explain": "Tailgating is a physical social engineering technique: exploiting politeness or inattention to gain unauthorised physical entry."
   },
   {
    "q": "What is generally considered the most effective defence against social engineering attacks?",
    "options": [
     "Security awareness training and a habit of verifying unusual requests",
     "A stronger firewall",
     "Longer password length alone",
     "Faster internet speeds"
    ],
    "answer": 0,
    "explain": "Because social engineering targets human behaviour rather than a technical flaw, training people to recognise and verify suspicious requests is the primary defence."
   }
  ]
 },
 "cybersecurity-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Wireless networks broadcast data through the air, so anyone nearby with a receiver can capture the signal — security here depends entirely on encryption and authentication, not on physical cabling keeping outsiders out."
    },
    {
     "type": "text",
     "text": "Wi-Fi security has gone through several generations. WEP (Wired Equivalent Privacy), the earliest standard, used a flawed encryption scheme that can be cracked in minutes with freely available tools — it should never be used today. WPA2 fixed this with much stronger AES encryption and a proper handshake process where the router and device prove they both know the password without ever sending it directly over the air. WPA3, the current standard, improves further with a handshake resistant to offline password-guessing attacks, so even a weak password is harder to crack from captured traffic."
    },
    {
     "type": "text",
     "text": "A common attack is the evil twin: a rogue access point set up with the same name (SSID) as a legitimate network, tricking devices into connecting to the attacker instead, who can then see all unencrypted traffic. MAC address filtering (only allowing known device addresses to connect) sounds secure but is weak in practice, since an attacker can simply observe an allowed address in the air and spoof it."
    },
    {
     "type": "tip",
     "text": "Exam tip: if a question mentions WEP, the expected answer is almost always 'insecure / broken, should be replaced with WPA2 or WPA3'. That single fact is tested often."
    }
   ],
   "recap": "Wi-Fi security has evolved from broken WEP to strong WPA2/WPA3 with AES encryption and secure handshakes. Evil twin access points and MAC spoofing remain practical threats even on well-configured networks."
  },
  "quiz": [
   {
    "q": "Why is WEP considered obsolete and insecure today?",
    "options": [
     "It cannot be used with a router at all",
     "It only works on 5GHz Wi-Fi",
     "Its encryption scheme has known flaws that let attackers crack it within minutes",
     "It requires too much hardware to run"
    ],
    "answer": 2,
    "explain": "WEP's key scheduling has well-documented weaknesses that freely available tools exploit to recover the key very quickly."
   },
   {
    "q": "What is an 'evil twin' attack?",
    "options": [
     "A worm that infects two computers at once",
     "A rogue access point broadcasting the same network name as a legitimate one, to trick devices into connecting",
     "A virus that copies itself twice",
     "A backup Wi-Fi router for redundancy"
    ],
    "answer": 1,
    "explain": "By mimicking a trusted network's name, an evil twin access point lures devices to connect to the attacker, exposing their traffic."
   },
   {
    "q": "Why is MAC address filtering a weak security control on its own?",
    "options": [
     "It disables encryption entirely",
     "An attacker can observe an allowed MAC address over the air and spoof it",
     "It only works with WPA3",
     "MAC addresses cannot be configured on routers"
    ],
    "answer": 1,
    "explain": "MAC addresses are visible in wireless traffic, so an attacker can simply copy an allowed address to bypass the filter."
   },
   {
    "q": "What is the key improvement WPA3 makes over WPA2?",
    "options": [
     "Its handshake resists offline password-guessing attacks even from captured traffic",
     "It only works on wired networks",
     "It uses WEP-style encryption for compatibility",
     "It removes the need for a password entirely"
    ],
    "answer": 0,
    "explain": "WPA3's handshake is designed so that captured traffic can't be used to guess the password offline, unlike earlier weaknesses in WPA2."
   }
  ]
 },
 "cybersecurity-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Symmetric encryption is fast, but both sides need the same secret key — so how do two computers that have never met agree on a secret key over a public network, without an eavesdropper capturing it? This is exactly the problem the Diffie-Hellman key exchange solves, and it's a favourite interview question."
    },
    {
     "type": "text",
     "text": "The trick is mathematical: each side picks a private secret number, combines it with public values everyone can see, and sends the result over the open network. Both sides then combine what they received with their own private secret and independently arrive at the same shared value — the secret key — even though an eavesdropper who saw everything exchanged cannot feasibly reconstruct it. In practice, this is exactly how HTTPS negotiates a fresh symmetric session key at the start of every connection, combining the speed of symmetric encryption with a safe way to establish the key."
    },
    {
     "type": "text",
     "text": "Beyond exchange, real systems need key management: a lifecycle covering generation (using a strong random source, never a predictable one), secure storage (hardware security modules or encrypted vaults, never plaintext config files), rotation (replacing keys periodically so a compromise has a limited blast radius), and revocation (immediately invalidating a key known to be compromised, and letting others know via a certificate revocation list)."
    },
    {
     "type": "tip",
     "text": "Exam tip: Diffie-Hellman itself only agrees on a shared secret — it doesn't verify identity. That's why real TLS combines it with certificates (which you met with PKI) to get both a secure key AND proof of who you're talking to."
    }
   ],
   "recap": "Diffie-Hellman lets two parties agree on a shared secret key over a public channel without ever transmitting the key itself. Real systems also need full key management: generation, secure storage, rotation, and revocation."
  },
  "quiz": [
   {
    "q": "What problem does the Diffie-Hellman key exchange solve?",
    "options": [
     "Letting two parties agree on a shared secret key over a public network without ever sending the key itself",
     "Compressing large files before encryption",
     "Hashing passwords for storage",
     "Verifying a website's identity"
    ],
    "answer": 0,
    "explain": "Diffie-Hellman lets both sides mathematically derive the same secret independently, so an eavesdropper who sees the exchange can't feasibly reconstruct it."
   },
   {
    "q": "Why does HTTPS combine Diffie-Hellman with certificates rather than using either alone?",
    "options": [
     "Diffie-Hellman agrees on a key but doesn't verify identity, so certificates supply that missing proof",
     "Certificates replace the need for any key exchange",
     "Diffie-Hellman is too slow to be used at all",
     "Certificates are only decorative and not actually checked"
    ],
    "answer": 0,
    "explain": "Diffie-Hellman alone establishes a shared secret but says nothing about who you're talking to, which is why PKI certificates are layered on top."
   },
   {
    "q": "What is 'key rotation' in key management?",
    "options": [
     "Encrypting a key with another key",
     "Converting a symmetric key into an asymmetric one",
     "Periodically replacing keys with new ones to limit the damage if one is ever compromised",
     "Deleting all keys permanently"
    ],
    "answer": 2,
    "explain": "Rotating keys regularly ensures that even if one key leaks, the exposure window and its impact are limited."
   },
   {
    "q": "If a private key is known to have been stolen, what should happen immediately?",
    "options": [
     "The key should be re-hashed",
     "The password should be changed instead",
     "Nothing, since keys can't be changed once issued",
     "The key should be revoked and added to a revocation list so systems stop trusting it"
    ],
    "answer": 3,
    "explain": "Revocation invalidates the compromised key and communicates that fact to relying systems, typically via a certificate revocation list."
   }
  ]
 },
 "cybersecurity-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Penetration testing (pen testing) is the practice of legally, deliberately attacking your own systems to find weaknesses before a real attacker does. The word 'legally' matters: the entire activity depends on written authorisation from the system's owner, which is what separates a penetration tester from a criminal doing the exact same technical steps."
    },
    {
     "type": "text",
     "text": "The industry commonly describes hackers by hat colour: a white hat hacker (an ethical hacker) has explicit permission and reports findings responsibly; a black hat hacker breaks in illegally for personal gain or harm; a grey hat hacker finds and sometimes discloses vulnerabilities without permission but without clearly malicious intent, occupying an ethically and legally murky middle ground."
    },
    {
     "type": "text",
     "text": "A pen test typically follows a set of phases: reconnaissance (gathering public information about the target, e.g. domain names, employee names, technology used), scanning (actively probing for open ports and known vulnerabilities, often with a tool like Nmap), gaining access (exploiting a found weakness to get in, sometimes with a framework like Metasploit), maintaining access (checking whether an attacker could persist undetected), and finally reporting (the actual deliverable — a clear write-up of what was found, how, and how to fix it, since a pen test that finds problems but explains nothing is worthless to the client)."
    },
    {
     "type": "tip",
     "text": "Exam tip: if asked what legally distinguishes a pen tester from a black hat attacker performing the identical technical action, the answer is authorisation — a signed scope-of-work agreement, not skill or intent."
    }
   ],
   "recap": "Penetration testing is authorised, ethical attacking of your own systems, following phases of reconnaissance, scanning, gaining access, maintaining access, and reporting. Written authorisation is what legally separates white hats from black hats."
  },
  "quiz": [
   {
    "q": "What legally separates a white hat penetration tester from a black hat attacker performing the same technical steps?",
    "options": [
     "The tools they use",
     "Written authorisation from the system's owner to perform the test",
     "How advanced their skills are",
     "Whether the attack succeeds"
    ],
    "answer": 1,
    "explain": "The technical actions can be identical; it's explicit, documented permission from the owner that makes penetration testing legal and ethical."
   },
   {
    "q": "In the phases of a penetration test, what happens during 'reconnaissance'?",
    "options": [
     "Installing persistent backdoors",
     "Exploiting a found vulnerability to gain access",
     "Writing the final report for the client",
     "Gathering publicly available information about the target before any active probing"
    ],
    "answer": 3,
    "explain": "Reconnaissance is the passive information-gathering phase, done before any active scanning or exploitation begins."
   },
   {
    "q": "A grey hat hacker is best described as someone who:",
    "options": [
     "Always has full written authorisation, like a white hat",
     "Works exclusively for government agencies",
     "Finds or discloses vulnerabilities without permission, but without clearly malicious intent",
     "Only attacks systems for financial theft"
    ],
    "answer": 2,
    "explain": "Grey hats operate in an ambiguous middle ground: unauthorised, but not driven by the malicious intent typical of a black hat."
   },
   {
    "q": "Why is the reporting phase considered the actual deliverable of a penetration test?",
    "options": [
     "Because the client only cares about the invoice",
     "Because it is the shortest phase",
     "Because findings that aren't clearly explained and prioritised give the client nothing actionable to fix",
     "Because reports replace the need for reconnaissance"
    ],
    "answer": 2,
    "explain": "A pen test's value comes from clearly communicating what was found and how to remediate it — without that, the technical work has no practical benefit."
   }
  ]
 },
 "cybersecurity-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "No matter how strong your defences are, a breach can still happen — and how an organisation reacts in the first few hours often matters as much as the attack itself. Two closely related disciplines cover this: incident response (acting fast to contain and recover) and digital forensics (investigating exactly what happened, carefully enough that the evidence would hold up in court)."
    },
    {
     "type": "text",
     "text": "A standard incident response lifecycle has six stages: preparation (having a plan, tools, and trained team before anything happens), identification (confirming an incident is really occurring, not a false alarm), containment (isolating affected systems to stop the damage spreading, e.g. disconnecting an infected machine from the network), eradication (removing the actual cause, like deleting malware or closing the exploited vulnerability), recovery (safely restoring systems to normal operation and monitoring closely for recurrence), and lessons learned (a formal review of what happened and how to prevent it next time)."
    },
    {
     "type": "text",
     "text": "Digital forensics investigators follow a chain of custody: a documented, unbroken record of who collected each piece of evidence, when, and how it was handled, so nothing can be argued to have been altered. Evidence is typically collected as an exact bit-for-bit copy of a disk or memory (never the original device, to avoid contaminating it), and investigators work from that copy so the original remains untouched and admissible."
    },
    {
     "type": "tip",
     "text": "Exam tip: 'containment' comes before 'eradication' in the lifecycle — you stop the bleeding first, then find and remove the root cause. Mixing up the order is a common exam trap."
    }
   ],
   "recap": "Incident response follows preparation, identification, containment, eradication, recovery, and lessons learned. Digital forensics investigates evidence through a strict chain of custody, working from bit-for-bit copies to keep the original evidence untouched."
  },
  "quiz": [
   {
    "q": "In the incident response lifecycle, what is the purpose of the 'containment' stage?",
    "options": [
     "To permanently delete all evidence",
     "To isolate affected systems and stop the damage from spreading further",
     "To restore systems to their normal state",
     "To formally review what went wrong afterward"
    ],
    "answer": 1,
    "explain": "Containment focuses on limiting the incident's spread quickly, before the root cause is fully removed in eradication."
   },
   {
    "q": "Which comes first in the incident response lifecycle: containment or eradication?",
    "options": [
     "Containment, then eradication",
     "Eradication, then containment",
     "Neither; recovery always comes first",
     "They always happen simultaneously"
    ],
    "answer": 0,
    "explain": "You contain the incident to stop it spreading first, then eradicate the root cause once the immediate damage is under control."
   },
   {
    "q": "Why do forensic investigators work from a bit-for-bit copy of a disk rather than the original?",
    "options": [
     "Copies use less storage space",
     "Copies are faster to analyse",
     "The original device cannot be powered on",
     "To keep the original evidence untouched and legally admissible"
    ],
    "answer": 3,
    "explain": "Working from a copy preserves the original in its exact state, protecting the integrity of the evidence for any legal proceedings."
   },
   {
    "q": "What does 'chain of custody' document?",
    "options": [
     "Who collected, handled, and had access to a piece of evidence, and when",
     "The network topology of the attacked organisation",
     "The list of employees with admin access",
     "The encryption algorithm used on a file"
    ],
    "answer": 0,
    "explain": "Chain of custody is a documented, unbroken trail of evidence handling, which is essential for the evidence to be trusted and used legally."
   }
  ]
 },
 "cybersecurity-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "No organisation can eliminate every risk, and trying to would be prohibitively expensive. Security management is really about risk management: identifying what could go wrong, how likely it is, and how bad the impact would be, then spending your limited budget where it matters most. A common way to frame this: Risk = Threat x Vulnerability x Impact — a serious threat against a well-patched system with low business impact may matter less than a minor threat against a critical, unpatched system."
    },
    {
     "type": "text",
     "text": "Organisations don't invent security practices from scratch; they follow established standards. ISO/IEC 27001 is an international standard for building an Information Security Management System, a structured, auditable process for managing risk continuously rather than as a one-off project. GDPR (the EU's General Data Protection Regulation) governs how personal data must be collected, stored, and protected, with serious fines for mishandling it — and it applies to any organisation handling EU residents' data, regardless of where the company is based. Frameworks like these turn security from a vague good intention into something that can be audited and proven."
    },
    {
     "type": "text",
     "text": "Two terms come up constantly in the news and in interviews. A zero-day vulnerability is a flaw that's exploited by attackers before the vendor even knows it exists (and so before any patch is available) — the 'zero days' refers to how much time the defenders had to prepare. An Advanced Persistent Threat (APT) describes a well-resourced, often state-sponsored attacker group that infiltrates a target and stays hidden for a long time, quietly gathering information rather than causing immediate visible damage, using many of the techniques from this whole course together: phishing to get in, privilege escalation to move around, and careful evasion to avoid detection."
    },
    {
     "type": "tip",
     "text": "Interview tip: if asked to describe security as a whole in one sentence, the strongest answer is that it's a continuous, risk-based process across people, process, and technology — not a single product you install once and forget."
    }
   ],
   "recap": "Security is fundamentally risk management: weighing threat, vulnerability, and impact, guided by frameworks like ISO 27001 and regulations like GDPR. Zero-day vulnerabilities and Advanced Persistent Threats represent the sharpest end of what everything in this course defends against."
  },
  "quiz": [
   {
    "q": "In the risk equation Risk = Threat x Vulnerability x Impact, why might a critical unpatched system need urgent attention even against a 'minor' threat?",
    "options": [
     "Because threat is the only factor that matters",
     "Because impact is not part of the calculation",
     "Because high vulnerability and high impact can still produce significant overall risk even with a modest threat",
     "Because minor threats are always ignored by risk models"
    ],
    "answer": 2,
    "explain": "Risk depends on all three factors together, so a system with severe vulnerability and high business impact can carry serious risk even from a lesser threat."
   },
   {
    "q": "What does ISO/IEC 27001 provide to organisations?",
    "options": [
     "A specific antivirus product",
     "A list of banned passwords",
     "A single one-time security checklist",
     "A structured, auditable framework for continuously managing information security risk"
    ],
    "answer": 3,
    "explain": "ISO 27001 defines an Information Security Management System: an ongoing, auditable process, not a one-time checklist."
   },
   {
    "q": "What makes a vulnerability a 'zero-day'?",
    "options": [
     "It is a vulnerability with zero real-world impact",
     "It is being exploited before the vendor knows about it and before any patch exists",
     "It has existed and been patched for zero days",
     "It only affects systems zero days old"
    ],
    "answer": 1,
    "explain": "The term refers to defenders having had zero days of advance warning, since the flaw is exploited before the vendor is even aware of it."
   },
   {
    "q": "What is the defining characteristic of an Advanced Persistent Threat (APT)?",
    "options": [
     "A single automated script with no human involvement",
     "An attack that only ever targets home Wi-Fi routers",
     "A quick, loud attack designed to cause maximum immediate visible damage",
     "A well-resourced attacker that infiltrates a target and stays hidden for a long time, quietly gathering information"
    ],
    "answer": 3,
    "explain": "APTs are characterised by patience and stealth: long-term, low-visibility presence inside a target, typically run by well-funded groups."
   }
  ]
 }
}
