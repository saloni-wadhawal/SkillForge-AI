// Lesson text and quiz questions for "Computer Networks".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "networks-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A computer network is simply two or more devices connected so they can share things with each other. Those things might be files, a printer, an internet connection, or messages. Your phone talking to a website, or two laptops sharing photos, are both networks in action."
    },
    {
     "type": "text",
     "text": "The devices on a network are often called nodes or hosts. Anything with a network connection can be a host: a laptop, a phone, a smart TV, a game console, even a doorbell camera. They connect using cables (like Ethernet) or wirelessly (like Wi-Fi)."
    },
    {
     "type": "tip",
     "text": "Think of a network like a group of friends passing notes in class. Each friend is a device, and the notes are the data being shared between them."
    },
    {
     "type": "text",
     "text": "The internet is just the biggest network of all — a network of millions of smaller networks all joined together. That is literally where the name comes from: 'inter-network', shortened to internet."
    }
   ],
   "recap": "A network is devices connected to share data; the internet is a giant network of networks."
  },
  "quiz": [
   {
    "q": "What is a computer network?",
    "options": [
     "Two or more devices connected to share things",
     "A brand of cable",
     "A single very fast computer",
     "A type of website"
    ],
    "answer": 0,
    "explain": "A network is any set of two or more connected devices that can share data or resources."
   },
   {
    "q": "Which of these can be a host on a network?",
    "options": [
     "Only phones",
     "Only laptops",
     "Only devices with cables",
     "A phone, TV, or game console"
    ],
    "answer": 3,
    "explain": "Any device with a network connection — wired or wireless — can be a host."
   },
   {
    "q": "Where does the word 'internet' come from?",
    "options": [
     "International net",
     "Inter-network (network of networks)",
     "Instant network",
     "Internal network"
    ],
    "answer": 1,
    "explain": "The internet is a network of networks, so 'inter-network' was shortened to 'internet'."
   }
  ]
 },
 "networks-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Networks come in different sizes. A LAN, or Local Area Network, covers a small area like your home, a school, or one office. The devices are close together and usually connect through a single router or switch."
    },
    {
     "type": "text",
     "text": "A WAN, or Wide Area Network, covers a large area — a whole city, a country, or the entire globe. A WAN links many LANs together over long distances. The internet is the largest WAN in the world."
    },
    {
     "type": "tip",
     "text": "Think of a LAN as your house and a WAN as the whole postal system connecting every house in the country."
    },
    {
     "type": "text",
     "text": "In a typical home, your Wi-Fi router creates a LAN for all your devices, then connects that LAN to your internet provider's WAN. So your laptop reaches a website by hopping from your LAN out onto the giant WAN and back."
    }
   ],
   "recap": "A LAN is a small local network; a WAN is a large network linking many LANs, and the internet is the biggest WAN."
  },
  "quiz": [
   {
    "q": "What does LAN stand for?",
    "options": [
     "Large Access Network",
     "Local Area Network",
     "Long Area Net",
     "Linked Analog Node"
    ],
    "answer": 1,
    "explain": "LAN stands for Local Area Network, covering a small area like a home or office."
   },
   {
    "q": "Which best describes a WAN?",
    "options": [
     "A network for one room",
     "A network covering a large area, linking many LANs",
     "A single wireless device",
     "A backup hard drive"
    ],
    "answer": 1,
    "explain": "A WAN (Wide Area Network) spans large distances and connects many LANs together."
   },
   {
    "q": "The internet is an example of a…",
    "options": [
     "LAN",
     "Printer",
     "WAN",
     "Single computer"
    ],
    "answer": 2,
    "explain": "The internet spans the whole globe and connects countless LANs, making it the largest WAN."
   },
   {
    "q": "In a typical home, what usually creates the LAN?",
    "options": [
     "The keyboard",
     "The monitor",
     "The website",
     "The Wi-Fi router"
    ],
    "answer": 3,
    "explain": "The home router creates the local network (LAN) and links it to the provider's WAN."
   }
  ]
 },
 "networks-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "For devices to find each other, each one needs an address. On a network this is called an IP address (IP stands for Internet Protocol). It works like a home address so that data knows exactly where to go and where it came from."
    },
    {
     "type": "text",
     "text": "The older, most common style is IPv4. It looks like four numbers separated by dots, and each number is between 0 and 255. For example: 192.168.1.10. Because the world ran out of these, a newer, much larger style called IPv6 was created, using longer addresses with letters and numbers."
    },
    {
     "type": "code",
     "code": "IPv4 example:  192.168.1.10\nIPv6 example:  2001:0db8:85a3::8a2e:0370:7334",
     "lang": "text"
    },
    {
     "type": "tip",
     "text": "An IP address is like your mailing address: without it, the postman (the network) has no idea which door to deliver your letter to."
    },
    {
     "type": "text",
     "text": "Some IP addresses are private, used only inside your home network (like 192.168.x.x), while others are public and unique across the whole internet. Your router translates between the two so many home devices can share one public address."
    }
   ],
   "recap": "An IP address uniquely identifies a device so data can be delivered to the right place; IPv4 uses four numbers, IPv6 is a newer longer format."
  },
  "quiz": [
   {
    "q": "What is the main job of an IP address?",
    "options": [
     "To power the router",
     "To make the internet faster",
     "To identify a device so data reaches the right place",
     "To store your files"
    ],
    "answer": 2,
    "explain": "An IP address acts like a mailing address, telling the network where to deliver data."
   },
   {
    "q": "Which of these is a valid IPv4 address?",
    "options": [
     "12-34-56-78",
     "999.999.999.999",
     "192.168.1.10",
     "hello.world.net"
    ],
    "answer": 2,
    "explain": "IPv4 uses four numbers from 0 to 255 separated by dots, like 192.168.1.10."
   },
   {
    "q": "Why was IPv6 created?",
    "options": [
     "To make addresses shorter",
     "Because the world ran out of IPv4 addresses",
     "To remove the need for routers",
     "To replace Wi-Fi"
    ],
    "answer": 1,
    "explain": "IPv4 addresses ran out, so IPv6 was designed with a far larger address space."
   },
   {
    "q": "A private address like 192.168.1.5 is used…",
    "options": [
     "Across the entire internet",
     "For email only",
     "Only inside a local network",
     "Nowhere anymore"
    ],
    "answer": 2,
    "explain": "Private IP addresses are used only within a local network, not directly on the public internet."
   }
  ]
 },
 "networks-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Networking is complicated, so engineers split the job into layers, where each layer handles one part and hands the rest to the next. Two famous models describe this: the OSI model (7 layers) and the simpler TCP/IP model (4 layers). We will use the TCP/IP model because it matches the real internet."
    },
    {
     "type": "text",
     "text": "The four TCP/IP layers, from top to bottom, are: the Application layer (apps like your browser and email), the Transport layer (splits data and makes sure it arrives, using TCP or UDP), the Internet layer (addresses and routes packets using IP), and the Link layer (the actual cables, Wi-Fi, and hardware)."
    },
    {
     "type": "tip",
     "text": "Think of layers like sending a gift: you write the message (application), box it up (transport), put an address on it (internet), and a truck carries it (link). Each step only worries about its own job."
    },
    {
     "type": "text",
     "text": "The power of layers is that each one can change without breaking the others. You can switch from Wi-Fi to Ethernet (the Link layer) and your browser (the Application layer) never even notices, because the layers only agree on how to hand data to each other."
    }
   ],
   "recap": "Networking is split into cooperating layers; the TCP/IP model has four — Application, Transport, Internet, and Link — each handling one job."
  },
  "quiz": [
   {
    "q": "Why is networking split into layers?",
    "options": [
     "To hide the internet",
     "To use more cables",
     "So each layer handles one job and can change independently",
     "To make it slower"
    ],
    "answer": 2,
    "explain": "Layering lets each part focus on one task and be changed without breaking the others."
   },
   {
    "q": "How many layers does the TCP/IP model have?",
    "options": [
     "Two",
     "Seven",
     "Ten",
     "Four"
    ],
    "answer": 3,
    "explain": "The TCP/IP model has four layers: Application, Transport, Internet, and Link."
   },
   {
    "q": "Which layer do apps like your web browser live in?",
    "options": [
     "The Internet layer",
     "The Link layer",
     "The Application layer",
     "The Transport layer"
    ],
    "answer": 2,
    "explain": "User programs such as browsers and email operate at the Application layer."
   },
   {
    "q": "Which layer is responsible for addressing and routing packets with IP?",
    "options": [
     "The Application layer",
     "The Internet layer",
     "The Link layer",
     "The Transport layer"
    ],
    "answer": 1,
    "explain": "The Internet layer uses IP addresses to route packets toward their destination."
   }
  ]
 },
 "networks-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "When you send a file or load a video, the data is not sent as one giant lump. It is chopped into many small pieces called packets. Each packet travels on its own and they are reassembled into the original data at the other end."
    },
    {
     "type": "text",
     "text": "Every packet carries a header (like an envelope) with the source IP, the destination IP, and a sequence number so the pieces can be put back in order. The rest of the packet is the payload — the actual chunk of your data."
    },
    {
     "type": "tip",
     "text": "Imagine mailing a book one page at a time in separate envelopes, each numbered. Even if pages arrive out of order, the numbers let the receiver rebuild the whole book."
    },
    {
     "type": "text",
     "text": "Packets can take different routes across the network, and some may get lost. This is where TCP (Transmission Control Protocol) helps: it checks that every packet arrived, asks for missing ones to be resent, and reassembles them in order. UDP is a faster alternative that skips those checks, used for live video and games where speed matters more than perfection."
    }
   ],
   "recap": "Data is split into numbered packets that travel separately and are reassembled at the destination; TCP guarantees delivery while UDP trades reliability for speed."
  },
  "quiz": [
   {
    "q": "How is data sent across a network?",
    "options": [
     "As one large block",
     "One letter per second",
     "Split into small packets",
     "Only as images"
    ],
    "answer": 2,
    "explain": "Data is broken into many small packets that travel separately and are reassembled."
   },
   {
    "q": "What does a packet's header contain?",
    "options": [
     "The whole file",
     "Source and destination info plus a sequence number",
     "Only the payload",
     "Nothing"
    ],
    "answer": 1,
    "explain": "The header holds addressing and ordering info so packets can be routed and reassembled."
   },
   {
    "q": "What does TCP guarantee that UDP does not?",
    "options": [
     "Faster speed always",
     "Free internet",
     "That all packets arrive and are put in order",
     "Colorful data"
    ],
    "answer": 2,
    "explain": "TCP checks delivery and reorders packets, resending lost ones; UDP skips this for speed."
   },
   {
    "q": "Why might UDP be chosen for live video or games?",
    "options": [
     "It encrypts everything",
     "It is more reliable",
     "It uses no packets",
     "Speed matters more than perfect delivery"
    ],
    "answer": 3,
    "explain": "UDP avoids delivery checks, making it faster — ideal when a little lost data is acceptable."
   }
  ]
 },
 "networks-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "People remember names like google.com, but computers route data using IP addresses like 142.250.72.14. DNS, the Domain Name System, is the service that translates the human-friendly name into the number the network actually needs."
    },
    {
     "type": "tip",
     "text": "DNS is like the contacts app in your phone: you tap a friend's name and it quietly looks up the phone number for you. You never have to memorize the digits."
    },
    {
     "type": "text",
     "text": "When you type a website, your computer asks a DNS resolver, 'What is the IP for this name?' The request may pass through several DNS servers until one answers. Your device then caches (remembers) the answer for a while so it does not have to ask again every single time."
    },
    {
     "type": "code",
     "code": "# Look up the IP address behind a name\nnslookup example.com\n\n# Typical answer:\n# Name:    example.com\n# Address: 93.184.216.34",
     "lang": "bash"
    },
    {
     "type": "text",
     "text": "Without DNS the internet would still work, but you would have to type raw IP addresses for every site. DNS is what lets the web use easy, memorable names instead."
    }
   ],
   "recap": "DNS translates human-friendly domain names into the IP addresses computers use, acting like a phonebook for the internet."
  },
  "quiz": [
   {
    "q": "What does DNS do?",
    "options": [
     "Translates domain names into IP addresses",
     "Stores your passwords",
     "Speeds up your Wi-Fi",
     "Blocks all ads"
    ],
    "answer": 0,
    "explain": "DNS converts human-friendly names like google.com into the IP addresses computers need."
   },
   {
    "q": "DNS is often compared to…",
    "options": [
     "A firewall",
     "A power cable",
     "A calculator",
     "A phonebook or contacts app"
    ],
    "answer": 3,
    "explain": "Like a phonebook, DNS looks up the number (IP) that matches a name."
   },
   {
    "q": "Why do devices cache DNS answers?",
    "options": [
     "To hide the website",
     "To use more memory on purpose",
     "To slow things down",
     "So they don't have to look up the same name every time"
    ],
    "answer": 3,
    "explain": "Caching stores recent answers so repeated lookups are faster and reduce network traffic."
   },
   {
    "q": "Without DNS, how would you reach a website?",
    "options": [
     "You could not use the internet at all",
     "By typing its raw IP address",
     "By calling the owner",
     "By restarting your router"
    ],
    "answer": 1,
    "explain": "The internet would still function, but you'd have to type numeric IP addresses directly."
   }
  ]
 },
 "networks-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A protocol is simply an agreed set of rules for how two computers talk, so both sides understand each other. The web runs on HTTP, the HyperText Transfer Protocol, which defines how your browser asks for a page and how the server replies."
    },
    {
     "type": "text",
     "text": "HTTPS is HTTP with security added. The 'S' means the connection is encrypted using TLS, so anyone snooping in between sees only scrambled data. This protects passwords, messages, and payment details. That is why the padlock icon and 'https://' matter, especially on login and shopping pages."
    },
    {
     "type": "code",
     "code": "GET /index.html HTTP/1.1\nHost: example.com\n\nHTTP/1.1 200 OK\nContent-Type: text/html",
     "lang": "http"
    },
    {
     "type": "text",
     "text": "The web is only one part of the internet. Other common protocols each specialize: DNS looks up names, SMTP/IMAP handle email, FTP transfers files, and SSH gives a secure remote command line. Underneath them all, TCP or UDP carry the packets and IP does the routing."
    },
    {
     "type": "tip",
     "text": "Think of protocols like languages: two people must speak the same one to understand each other. HTTPS is just that same language spoken in a locked, private room."
    }
   ],
   "recap": "Protocols are shared rules for communication; HTTP powers the web, HTTPS adds encryption, and other protocols like SMTP, FTP, and SSH each handle their own task on top of TCP/IP."
  },
  "quiz": [
   {
    "q": "What is a protocol in networking?",
    "options": [
     "A type of cable",
     "A brand of router",
     "A single web page",
     "An agreed set of rules for how computers communicate"
    ],
    "answer": 3,
    "explain": "A protocol is a shared set of rules so both devices understand each other's messages."
   },
   {
    "q": "What does the 'S' in HTTPS add?",
    "options": [
     "More storage",
     "Faster speed",
     "A new domain name",
     "Encryption for security"
    ],
    "answer": 3,
    "explain": "HTTPS adds TLS encryption so data traveling between browser and server stays private."
   },
   {
    "q": "Which protocol is mainly used for sending email?",
    "options": [
     "SMTP",
     "FTP",
     "HTTP",
     "SSH"
    ],
    "answer": 0,
    "explain": "SMTP (Simple Mail Transfer Protocol) is used to send email between servers."
   },
   {
    "q": "Which protocol gives a secure remote command line?",
    "options": [
     "DNS",
     "SSH",
     "FTP",
     "HTTP"
    ],
    "answer": 1,
    "explain": "SSH provides an encrypted connection for remotely controlling another computer's shell."
   }
  ]
 },
 "networks-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A hub is the simplest device: it takes data arriving on one port and blasts it out every other port, whether the other computers need it or not. This wastes bandwidth and causes collisions, so hubs are rarely used today."
    },
    {
     "type": "text",
     "text": "A switch is smarter. It learns which device sits on which port by reading MAC addresses, then sends data only to the port that needs it. This keeps a local network (LAN) fast even as more devices join."
    },
    {
     "type": "text",
     "text": "A router works one level up. It connects separate networks together, for example your home LAN and the wider internet, and decides which path a packet should take based on IP addresses. Your home Wi-Fi box is usually a switch and a router (and often an access point) combined into one box."
    },
    {
     "type": "tip",
     "text": "Quick memory aid: a hub shouts to everyone, a switch whispers to the right person, a router picks which building to send the letter to."
    },
    {
     "type": "text",
     "text": "In an exam, remember the layer each device works at: hubs and switches operate mainly at the data link layer (using MAC addresses), while routers operate at the network layer (using IP addresses)."
    }
   ],
   "recap": "Hubs broadcast to every port, switches learn MAC addresses and forward only to the right port, and routers connect different networks together using IP addresses."
  },
  "quiz": [
   {
    "q": "Why are hubs rarely used today?",
    "options": [
     "They broadcast data to every port, wasting bandwidth",
     "They cannot power on without internet",
     "They only work with fibre cables",
     "They are too expensive"
    ],
    "answer": 0,
    "explain": "A hub repeats incoming data out of every port, which wastes bandwidth and causes unnecessary collisions."
   },
   {
    "q": "How does a switch decide where to send data?",
    "options": [
     "It guesses randomly",
     "It always sends to all ports",
     "It reads MAC addresses and learns which device is on which port",
     "It asks a DNS server"
    ],
    "answer": 2,
    "explain": "Switches build a table of MAC addresses versus ports and forward data only to the correct port."
   },
   {
    "q": "What does a router mainly use to decide where to send a packet?",
    "options": [
     "MAC addresses",
     "IP addresses",
     "Port numbers only",
     "Cable color"
    ],
    "answer": 1,
    "explain": "Routers work at the network layer and use IP addresses to choose the best path between networks."
   },
   {
    "q": "Which best matches: 'connects your home network to the internet'?",
    "options": [
     "Router",
     "Repeater",
     "Hub",
     "Patch cable"
    ],
    "answer": 0,
    "explain": "A router connects separate networks, such as a home LAN and the internet, together."
   }
  ]
 },
 "networks-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Every network card has a MAC address, a 48-bit number burned into the hardware by its maker, usually written as six pairs of hex digits like 3C:5A:B4:12:9E:01. Unlike an IP address, a MAC address does not change when you move to a different network."
    },
    {
     "type": "text",
     "text": "IP addresses handle routing across networks, but on the local network, devices actually deliver frames using MAC addresses. So a computer needs a way to find the MAC address that matches a known IP address on its own LAN."
    },
    {
     "type": "text",
     "text": "That is the job of ARP, the Address Resolution Protocol. A device broadcasts 'who has this IP address?' to everyone on the LAN, and the owner replies with its MAC address. The asking device then caches the answer in its ARP table."
    },
    {
     "type": "code",
     "code": "# See the ARP cache on a computer\narp -a\n\n# Example output:\n# Address         HWtype  HWaddress\n# 192.168.1.1     ether   aa:bb:cc:dd:ee:ff",
     "lang": "bash"
    },
    {
     "type": "tip",
     "text": "Exam trick question: MAC address = hardware, local delivery. IP address = logical, routing across networks. ARP is the bridge between the two."
    }
   ],
   "recap": "MAC addresses identify hardware on the local network, and ARP translates a known IP address into the matching MAC address so a frame can actually be delivered."
  },
  "quiz": [
   {
    "q": "What is a MAC address?",
    "options": [
     "The name of a website",
     "A temporary address assigned by DHCP",
     "A type of firewall rule",
     "A hardware address burned into the network card"
    ],
    "answer": 3,
    "explain": "A MAC address is a fixed 48-bit hardware identifier assigned by the manufacturer."
   },
   {
    "q": "What problem does ARP solve?",
    "options": [
     "Splitting a network into subnets",
     "Finding the MAC address that matches a known IP address on the LAN",
     "Finding a domain name's IP address",
     "Encrypting web traffic"
    ],
    "answer": 1,
    "explain": "ARP lets a device discover which MAC address corresponds to a given IP address on the same local network."
   },
   {
    "q": "How does a device typically ask 'who has this IP?' using ARP?",
    "options": [
     "It queries a DNS server",
     "It calls the ISP",
     "It sends a broadcast to everyone on the LAN",
     "It emails the router"
    ],
    "answer": 2,
    "explain": "ARP requests are broadcast to all devices on the local network, and the owner of the IP replies directly."
   },
   {
    "q": "Which statement is true?",
    "options": [
     "IP addresses are burned into hardware",
     "ARP is used only for encryption",
     "MAC addresses stay the same across networks; IP addresses can change",
     "MAC addresses change every time you connect to a new Wi-Fi network"
    ],
    "answer": 2,
    "explain": "MAC addresses are fixed to the hardware, while IP addresses are logical and can change depending on the network you join."
   }
  ]
 },
 "networks-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A subnet is a smaller network carved out of a larger one. Splitting a big network into subnets keeps broadcast traffic local, groups devices logically (for example, one subnet per floor of an office), and improves security by isolating groups."
    },
    {
     "type": "text",
     "text": "An IP address like 192.168.1.10 is split into a network part and a host part. A subnet mask, such as 255.255.255.0, tells the computer where that split happens: bits set to 1 are the network part, bits set to 0 are the host part."
    },
    {
     "type": "text",
     "text": "CIDR notation writes this more compactly. 192.168.1.0/24 means the first 24 bits are the network part, leaving 8 bits (256 addresses, minus a couple reserved) for hosts on that subnet."
    },
    {
     "type": "code",
     "code": "# /24 network: 192.168.1.0/24\n# Subnet mask: 255.255.255.0\n# Usable host range: 192.168.1.1 to 192.168.1.254\n# Network address: 192.168.1.0\n# Broadcast address: 192.168.1.255",
     "lang": "text"
    },
    {
     "type": "tip",
     "text": "Memory aid: the bigger the number after the slash, the smaller the subnet. /24 gives 254 usable hosts; /30 gives only 2, just enough for a point-to-point link."
    }
   ],
   "recap": "Subnetting splits a network into smaller pieces using a subnet mask; CIDR notation like /24 tells you how many bits are the network part and how many hosts the subnet can hold."
  },
  "quiz": [
   {
    "q": "What does a subnet mask do?",
    "options": [
     "Marks which bits of an IP address are the network part versus the host part",
     "Assigns MAC addresses",
     "Encrypts network traffic",
     "Blocks unwanted websites"
    ],
    "answer": 0,
    "explain": "The subnet mask shows the boundary between the network portion and the host portion of an IP address."
   },
   {
    "q": "In CIDR notation, what does /24 mean?",
    "options": [
     "The first 24 bits are the network part",
     "The subnet uses 24 routers",
     "24% of the bandwidth is reserved",
     "24 devices maximum"
    ],
    "answer": 0,
    "explain": "/24 means the first 24 bits of the address identify the network, leaving the remaining 8 bits for hosts."
   },
   {
    "q": "Roughly how many usable host addresses does a /24 subnet provide?",
    "options": [
     "16",
     "2",
     "254",
     "65534"
    ],
    "answer": 2,
    "explain": "A /24 has 8 host bits, giving 256 addresses total, minus the network and broadcast address, leaving 254 usable ones."
   },
   {
    "q": "Why do organizations use subnetting?",
    "options": [
     "To keep broadcast traffic local and organize/isolate groups of devices",
     "To avoid using DNS",
     "To remove the need for routers",
     "To make IP addresses longer"
    ],
    "answer": 0,
    "explain": "Subnetting reduces broadcast traffic, groups devices logically, and can improve security by isolating segments."
   }
  ]
 },
 "networks-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "There are far more devices in the world than there are available IPv4 addresses. NAT, Network Address Translation, solves this by letting many devices on a private network share a single public IP address when talking to the internet."
    },
    {
     "type": "text",
     "text": "Your home router keeps a table mapping each private device's (IP, port) pair to a unique port on its own public IP. When a reply comes back from the internet, the router checks the table and forwards it to the correct device inside your home."
    },
    {
     "type": "text",
     "text": "Private IP ranges like 192.168.x.x, 10.x.x.x, and 172.16.x.x through 172.31.x.x are reserved and never routed on the public internet, which is exactly why they can be reused inside millions of different homes and offices without clashing."
    },
    {
     "type": "code",
     "code": "# Inside the house (private):        192.168.1.10:54321\n# Router NAT table maps it to:        203.0.113.5:40001  (public IP:port)\n# Reply from the internet arrives at: 203.0.113.5:40001\n# Router looks up the table and forwards to: 192.168.1.10:54321",
     "lang": "text"
    },
    {
     "type": "tip",
     "text": "Think of NAT like an office receptionist: the outside world only sees the office's main phone number, but the receptionist knows exactly which desk extension to transfer each call to."
    }
   ],
   "recap": "NAT lets many private devices share one public IP address by tracking (IP, port) mappings in a table, which is also why the world has not fully run out of IPv4 addresses."
  },
  "quiz": [
   {
    "q": "What problem does NAT mainly solve?",
    "options": [
     "Slow Wi-Fi speeds",
     "Domain name lookups",
     "Shortage of public IPv4 addresses",
     "Encrypting web traffic"
    ],
    "answer": 2,
    "explain": "NAT allows many devices to share one public IP address, easing the shortage of available IPv4 addresses."
   },
   {
    "q": "How does a NAT router know where to send a reply from the internet?",
    "options": [
     "It checks its table mapping public port to the original private IP and port",
     "It asks the ISP each time",
     "It uses the device's MAC address",
     "It broadcasts the reply to every device"
    ],
    "answer": 0,
    "explain": "The router keeps a mapping table and uses the destination port to look up which internal device should receive the reply."
   },
   {
    "q": "Which of these is a private IP range reserved for local networks?",
    "options": [
     "203.0.113.0/24",
     "192.168.0.0 to 192.168.255.255",
     "1.1.1.1",
     "8.8.8.8"
    ],
    "answer": 1,
    "explain": "192.168.x.x is one of the reserved private ranges that is never routed on the public internet."
   },
   {
    "q": "Why can many different homes reuse the same private IP range like 192.168.1.10?",
    "options": [
     "Because private ranges are not routed on the public internet, so no clash occurs outside the LAN",
     "Because ISPs assign them randomly",
     "Because private IPs are never actually used",
     "Because routers encrypt them"
    ],
    "answer": 0,
    "explain": "Private addresses only have meaning inside their own LAN, so the same range can be reused safely in millions of separate networks."
   }
  ]
 },
 "networks-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Before two computers exchange data reliably over TCP, they perform a three-way handshake to agree that both sides are ready and to synchronize sequence numbers, which are used later to detect lost or out-of-order data."
    },
    {
     "type": "text",
     "text": "Step 1: the client sends a SYN (synchronize) packet. Step 2: the server replies with SYN-ACK, agreeing and synchronizing its own sequence number. Step 3: the client replies with ACK (acknowledge), and the connection is now open."
    },
    {
     "type": "code",
     "code": "Client                     Server\n  |------ SYN ------------->|\n  |<---- SYN, ACK ----------|\n  |------ ACK ------------->|\n  |   connection established |",
     "lang": "text"
    },
    {
     "type": "text",
     "text": "Closing a TCP connection is similarly polite: each side sends a FIN when it is done, and the other side ACKs it, so both directions are closed cleanly rather than data being cut off mid-stream."
    },
    {
     "type": "tip",
     "text": "Exam shortcut: SYN, SYN-ACK, ACK. Say it like a chant — three steps, three packets, one open connection."
    }
   ],
   "recap": "TCP opens a connection with a three-way handshake — SYN, SYN-ACK, ACK — so both sides confirm readiness and agree on starting sequence numbers before any real data is sent."
  },
  "quiz": [
   {
    "q": "What is the correct order of the TCP three-way handshake?",
    "options": [
     "ACK, SYN, SYN-ACK",
     "SYN-ACK, SYN, ACK",
     "ACK, ACK, SYN",
     "SYN, SYN-ACK, ACK"
    ],
    "answer": 3,
    "explain": "The client sends SYN, the server replies SYN-ACK, and the client finishes with ACK."
   },
   {
    "q": "Why does TCP perform a handshake before sending data?",
    "options": [
     "To assign IP addresses",
     "To slow down attackers only",
     "To choose a DNS server",
     "To confirm both sides are ready and synchronize sequence numbers"
    ],
    "answer": 3,
    "explain": "The handshake confirms readiness on both ends and agrees on sequence numbers used to track data reliably."
   },
   {
    "q": "What does the server send in step two of the handshake?",
    "options": [
     "Just SYN",
     "FIN",
     "Just ACK",
     "SYN and ACK together"
    ],
    "answer": 3,
    "explain": "In step two the server combines SYN (its own synchronization request) with ACK (acknowledging the client's SYN)."
   },
   {
    "q": "What packet type is used to gracefully close a TCP connection?",
    "options": [
     "FIN",
     "ARP",
     "ICMP",
     "SYN"
    ],
    "answer": 0,
    "explain": "FIN packets signal that one side is finished sending data, and the other side acknowledges it to close cleanly."
   }
  ]
 },
 "networks-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Cables, radio signals, and hardware are never perfect, so bits can flip during transmission. Networks need a way to notice when data arrived damaged, without re-sending everything just to check."
    },
    {
     "type": "text",
     "text": "A checksum is a simple way to do this: the sender adds up the data (in a defined way) and attaches the sum. The receiver redoes the same sum and compares it. If the numbers do not match, something changed in transit and the data is discarded or a resend is requested."
    },
    {
     "type": "text",
     "text": "CRC, Cyclic Redundancy Check, is a stronger method used by Ethernet and many other systems. It treats the data as a large binary number and divides it by a fixed pattern, keeping the remainder as the check value. CRC catches far more error patterns than a simple checksum, though it still cannot catch every possible corruption."
    },
    {
     "type": "code",
     "code": "def simple_checksum(data_bytes):\n    total = sum(data_bytes) % 256\n    return total\n\nsent = [12, 200, 45, 9]\nchecksum = simple_checksum(sent)\nprint('Checksum sent along with data:', checksum)\n\n# Receiver recomputes and compares\nreceived = [12, 200, 45, 9]\nif simple_checksum(received) == checksum:\n    print('Data looks intact')\nelse:\n    print('Data was corrupted in transit')",
     "lang": "python"
    },
    {
     "type": "tip",
     "text": "Remember: checksums and CRC detect errors, they do not fix them. Fixing usually means asking the sender to retransmit, which is why TCP relies on acknowledgments and timeouts on top of error checks."
    }
   ],
   "recap": "Checksums and CRC let a receiver detect whether data was corrupted during transmission by comparing a recomputed value against the one the sender attached; CRC catches more error patterns than a plain checksum."
  },
  "quiz": [
   {
    "q": "What is the main purpose of a checksum?",
    "options": [
     "To find the sender's IP address",
     "To compress the data",
     "To encrypt the data",
     "To detect if data was corrupted during transmission"
    ],
    "answer": 3,
    "explain": "A checksum lets the receiver verify whether the data matches what was sent, revealing transmission errors."
   },
   {
    "q": "Compared to a simple checksum, CRC is generally...",
    "options": [
     "Used only for encryption",
     "Weaker at catching errors",
     "Identical in every way",
     "Stronger at catching a wider range of error patterns"
    ],
    "answer": 3,
    "explain": "CRC's mathematical structure detects more types of bit errors than a basic sum-based checksum."
   },
   {
    "q": "If a checksum mismatch is detected, what typically happens?",
    "options": [
     "The data is discarded or a retransmission is requested",
     "Nothing, mismatches are ignored",
     "The data is automatically corrected",
     "The connection is upgraded to HTTPS"
    ],
    "answer": 0,
    "explain": "A mismatch signals corruption, so the corrupted data is usually dropped and the sender is asked to resend it."
   },
   {
    "q": "Do checksums or CRC actually repair corrupted data themselves?",
    "options": [
     "No, they only detect that something is wrong",
     "Only CRC can repair data",
     "Only over Wi-Fi",
     "Yes, they always repair it"
    ],
    "answer": 0,
    "explain": "These techniques only detect corruption; fixing it requires a separate mechanism like retransmission."
   }
  ]
 },
 "networks-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A router's job is to pick the best path for a packet toward its destination. With thousands of possible routes across the internet, routers need automatic algorithms rather than a person configuring every path by hand."
    },
    {
     "type": "text",
     "text": "In distance vector routing, such as RIP, each router only knows the distance (hop count) to each destination as reported by its direct neighbors, and periodically shares its whole table with them. It is simple but can be slow to react to changes and is prone to routing loops."
    },
    {
     "type": "text",
     "text": "In link state routing, such as OSPF, every router builds a full map of the network by flooding information about its direct links to everyone, then independently calculates the shortest path (often with Dijkstra's algorithm) to every destination. This reacts faster to changes and scales better in large networks."
    },
    {
     "type": "tip",
     "text": "Memory aid: distance vector is 'rumor-based' — you trust what your neighbor tells you about distances. Link state is 'map-based' — every router draws its own full map and calculates routes itself."
    },
    {
     "type": "text",
     "text": "On the wider internet, a different protocol called BGP (Border Gateway Protocol) is used between large organizations and ISPs, choosing routes based on policy and business agreements as much as pure distance."
    }
   ],
   "recap": "Distance vector routing shares hop-count tables between neighbors, while link state routing builds a full network map and computes shortest paths directly; BGP handles routing between large organizations on the internet."
  },
  "quiz": [
   {
    "q": "In distance vector routing, what does a router know about the network?",
    "options": [
     "A full map of every link",
     "Nothing, it guesses",
     "Only the distances reported by its direct neighbors",
     "The MAC address of every device"
    ],
    "answer": 2,
    "explain": "Distance vector routers rely on distance information shared by their immediate neighbors rather than building a full map."
   },
   {
    "q": "Which algorithm is commonly used by link state routing to compute shortest paths?",
    "options": [
     "Bubble sort",
     "Quicksort",
     "Binary search",
     "Dijkstra's algorithm"
    ],
    "answer": 3,
    "explain": "Link state protocols like OSPF typically use Dijkstra's shortest path algorithm once every router has the full network map."
   },
   {
    "q": "What is a known weakness of distance vector routing?",
    "options": [
     "It cannot be used on any network",
     "It only works with IPv6",
     "It is prone to routing loops and slow to react to changes",
     "It requires no configuration at all"
    ],
    "answer": 2,
    "explain": "Distance vector protocols can be slow to converge after a change and are susceptible to routing loops."
   },
   {
    "q": "Which protocol is used to route between large organizations and ISPs across the internet?",
    "options": [
     "DHCP",
     "DNS",
     "ARP",
     "BGP"
    ],
    "answer": 3,
    "explain": "BGP (Border Gateway Protocol) manages routing decisions between autonomous systems such as ISPs and large organizations."
   }
  ]
 },
 "networks-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Congestion happens when too much data tries to cross a network link at once, causing queues to fill up, delay to rise, and packets to be dropped. TCP includes congestion control so senders don't overwhelm the network."
    },
    {
     "type": "text",
     "text": "Slow start is how a TCP connection begins cautiously: it sends a small amount of data, and if acknowledgments come back cleanly, it roughly doubles the amount sent each round trip. This ramps up quickly to use available bandwidth without immediately flooding the network."
    },
    {
     "type": "text",
     "text": "Once losses start appearing (a sign of congestion), TCP backs off, cutting its sending rate, then grows more cautiously afterward using a phase called congestion avoidance. This cycle of grow, back off, grow again is why a single TCP transfer's speed graph looks like a sawtooth."
    },
    {
     "type": "code",
     "code": "# Simplified idea of TCP's sending window growth\nwindow = 1\nfor round_trip in range(6):\n    print(f'Round {round_trip}: sending window = {window} segments')\n    ack_ok = True  # assume no loss for this example\n    if ack_ok:\n        window *= 2  # slow start doubles each round trip",
     "lang": "python"
    },
    {
     "type": "tip",
     "text": "Exam tip: congestion control (avoiding overload of the network) is a different concept from flow control (not overwhelming the receiver's buffer). Both limit how fast TCP sends, but for different reasons."
    }
   ],
   "recap": "TCP congestion control starts cautiously with slow start, ramps up sending speed, and backs off when packet loss signals congestion, producing the characteristic sawtooth pattern of TCP throughput."
  },
  "quiz": [
   {
    "q": "What triggers TCP to slow down its sending rate?",
    "options": [
     "A change in DNS server",
     "The user closing a browser tab",
     "A new MAC address",
     "Detected packet loss, signaling congestion"
    ],
    "answer": 3,
    "explain": "Packet loss is treated as a sign of congestion, prompting TCP to reduce its sending rate."
   },
   {
    "q": "What does slow start do at the beginning of a connection?",
    "options": [
     "Disables encryption temporarily",
     "Waits 10 seconds before sending anything",
     "Sends the maximum amount of data immediately",
     "Sends a small amount and roughly doubles it each round trip if all goes well"
    ],
    "answer": 3,
    "explain": "Slow start begins conservatively and increases the sending window quickly as long as acknowledgments confirm success."
   },
   {
    "q": "Why does a TCP throughput graph often look like a sawtooth?",
    "options": [
     "Because TCP repeatedly grows its sending rate then backs off after loss",
     "Because DNS keeps changing IP addresses",
     "Because of MAC address collisions",
     "Because routers randomly reboot"
    ],
    "answer": 0,
    "explain": "The repeated cycle of increasing the send rate and then cutting back after congestion creates the sawtooth shape."
   },
   {
    "q": "How does congestion control differ from flow control?",
    "options": [
     "Congestion control protects the network from overload; flow control protects the receiver's buffer",
     "Flow control is only used in UDP",
     "Congestion control only applies to Wi-Fi",
     "They are exactly the same thing"
    ],
    "answer": 0,
    "explain": "Congestion control avoids overloading the network path, while flow control avoids overwhelming the receiving device's buffer."
   }
  ]
 },
 "networks-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Wi-Fi lets devices join a LAN over radio waves instead of cables, following the IEEE 802.11 family of standards. Each generation adds speed, range, or efficiency improvements, and is marked with a letter or a simple number."
    },
    {
     "type": "text",
     "text": "Older standards like 802.11b/g/n operate mainly on the crowded 2.4 GHz band, which has longer range but more interference from microwaves, Bluetooth devices, and neighboring routers. Newer standards like 802.11ac and 802.11ax (marketed as Wi-Fi 6) also use the 5 GHz and even 6 GHz bands, which are faster and less congested but have shorter range."
    },
    {
     "type": "text",
     "text": "Wireless networks face a problem wired networks mostly avoid: two devices can transmit at the same time and interfere without either one directly noticing, called the hidden node problem. Wi-Fi handles shared access using CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) — a device listens first, and if the channel seems busy, it waits a random amount of time before retrying."
    },
    {
     "type": "tip",
     "text": "Contrast with wired Ethernet's CSMA/CD (Collision Detection): wired networks can detect a collision while it happens and stop immediately, but wireless devices often cannot hear their own collisions, so Wi-Fi avoids them proactively instead."
    },
    {
     "type": "text",
     "text": "Wi-Fi security has also evolved: WEP was broken and should never be used, WPA2 became the long-standing standard, and WPA3 is the current recommended standard offering stronger protection against password-guessing attacks."
    }
   ],
   "recap": "Wi-Fi follows the 802.11 family of standards across the 2.4, 5, and 6 GHz bands, uses CSMA/CA to avoid collisions since devices can't always detect them, and has moved from insecure WEP through WPA2 to the stronger WPA3."
  },
  "quiz": [
   {
    "q": "Which IEEE standard family does Wi-Fi belong to?",
    "options": [
     "802.3",
     "802.1",
     "802.11",
     "802.15"
    ],
    "answer": 2,
    "explain": "Wi-Fi is defined by the IEEE 802.11 family of wireless networking standards."
   },
   {
    "q": "Why does Wi-Fi use CSMA/CA instead of CSMA/CD?",
    "options": [
     "Because Wi-Fi never has collisions",
     "Because CSMA/CD is faster on radio waves",
     "Because CSMA/CA requires no cables",
     "Because wireless devices often cannot reliably detect collisions while they happen"
    ],
    "answer": 3,
    "explain": "Since wireless devices may not hear their own transmission colliding with another's, Wi-Fi avoids collisions proactively rather than detecting them after the fact."
   },
   {
    "q": "Which Wi-Fi security standard is currently recommended as the strongest?",
    "options": [
     "WPA2",
     "WEP",
     "WPA3",
     "WPA"
    ],
    "answer": 2,
    "explain": "WPA3 is the current standard, offering stronger protection than the older, now-broken WEP or the long-standing WPA2."
   },
   {
    "q": "What is a general tradeoff of the 5 GHz band compared to 2.4 GHz?",
    "options": [
     "There is no difference",
     "5 GHz is slower but has longer range",
     "5 GHz cannot be used indoors",
     "5 GHz is generally faster with less interference but shorter range"
    ],
    "answer": 3,
    "explain": "Higher frequency bands like 5 GHz typically offer more speed and less congestion but do not travel as far or penetrate walls as well."
   }
  ]
 },
 "networks-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A firewall is a gatekeeper that inspects traffic entering or leaving a network and decides, based on a set of rules, whether to allow or block it. Rules commonly filter by IP address, port number, or protocol, for example blocking all inbound traffic except on port 443 (HTTPS)."
    },
    {
     "type": "text",
     "text": "A basic packet-filtering firewall checks each packet in isolation against its rule list. A stateful firewall goes further, remembering ongoing connections, so it can tell that an incoming packet is actually a reply to a request your own device made, and allow it automatically."
    },
    {
     "type": "code",
     "code": "# Example firewall rule style (conceptual, not a real tool)\nALLOW  inbound  tcp  port 443   # HTTPS website traffic\nALLOW  inbound  tcp  port 22    # SSH, maybe restricted to office IPs\nDENY   inbound  tcp  port 23    # Telnet, insecure, blocked\nDENY   inbound  any  any        # default: block everything else",
     "lang": "text"
    },
    {
     "type": "text",
     "text": "A VPN, Virtual Private Network, creates an encrypted tunnel between your device and a remote server, so your traffic looks like it is coming from that server's network and cannot be read by anyone snooping on the path in between, such as on public Wi-Fi."
    },
    {
     "type": "tip",
     "text": "Firewalls decide what traffic is allowed to pass; VPNs protect and disguise traffic that is already allowed to pass. They solve different problems and are often used together."
    }
   ],
   "recap": "Firewalls filter traffic by rules (and, when stateful, by tracking connections), while VPNs create an encrypted tunnel that protects traffic in transit and can make it appear to come from a different network."
  },
  "quiz": [
   {
    "q": "What does a stateful firewall do that a basic packet filter does not?",
    "options": [
     "It encrypts all traffic",
     "It resolves domain names",
     "It assigns IP addresses",
     "It tracks ongoing connections to recognize replies to requests you made"
    ],
    "answer": 3,
    "explain": "A stateful firewall remembers active connections so it can automatically allow replies to outgoing requests."
   },
   {
    "q": "What is the main purpose of a VPN?",
    "options": [
     "To assign MAC addresses",
     "To speed up DNS lookups",
     "To filter which websites can be visited",
     "To create an encrypted tunnel that protects and can reroute your traffic"
    ],
    "answer": 3,
    "explain": "A VPN encrypts traffic between your device and a remote server, protecting it from snooping and changing where it appears to originate."
   },
   {
    "q": "A firewall rule that blocks port 23 (Telnet) but allows port 443 (HTTPS) is filtering by...",
    "options": [
     "MAC address only",
     "Domain name only",
     "Screen resolution",
     "Port number and protocol"
    ],
    "answer": 3,
    "explain": "This kind of rule filters traffic based on the port number and protocol being used."
   },
   {
    "q": "Which statement best describes how firewalls and VPNs relate?",
    "options": [
     "Firewalls decide what traffic is allowed; VPNs protect traffic that is allowed",
     "They do the same job and are interchangeable",
     "Firewalls only work on wireless networks",
     "VPNs replace the need for firewalls entirely"
    ],
    "answer": 0,
    "explain": "Firewalls control access based on rules, while VPNs add encryption and privacy to traffic that is permitted to flow."
   }
  ]
 },
 "networks-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A socket is a programming endpoint that lets an application send and receive data over a network, identified by an IP address and a port number together. Almost every networked application, from a browser to a chat app, is built on sockets under the hood."
    },
    {
     "type": "text",
     "text": "A server socket typically binds to a specific port and listens for incoming connections. A client socket connects out to that server's IP address and port. Once connected, both sides can send and receive data as if reading and writing to a file."
    },
    {
     "type": "code",
     "code": "import socket\n\n# Simple TCP server\nserver = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserver.bind(('0.0.0.0', 5000))\nserver.listen(1)\nprint('Waiting for a connection on port 5000...')\n\nconn, addr = server.accept()\nprint('Connected by', addr)\ndata = conn.recv(1024)\nprint('Received:', data.decode())\nconn.sendall(b'Hello, client!')\nconn.close()",
     "lang": "python"
    },
    {
     "type": "code",
     "code": "import socket\n\n# Simple TCP client\nclient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nclient.connect(('127.0.0.1', 5000))\nclient.sendall(b'Hello, server!')\nresponse = client.recv(1024)\nprint('Server said:', response.decode())\nclient.close()",
     "lang": "python"
    },
    {
     "type": "tip",
     "text": "SOCK_STREAM means TCP (reliable, connection-based); SOCK_DGRAM means UDP (fast, no guaranteed delivery). Interviewers love asking which one you'd use for a video call (UDP, since a little loss is fine) versus a file download (TCP, since every byte matters)."
    }
   ],
   "recap": "A socket is an application's network endpoint, identified by an IP address and port; servers bind and listen while clients connect, and the socket type (stream or datagram) decides whether the underlying protocol is TCP or UDP."
  },
  "quiz": [
   {
    "q": "What two things identify a socket?",
    "options": [
     "Subnet mask and gateway",
     "MAC address and hostname",
     "Username and password",
     "IP address and port number"
    ],
    "answer": 3,
    "explain": "A socket is identified by the combination of an IP address and a port number."
   },
   {
    "q": "In socket programming, what does a server socket typically do first?",
    "options": [
     "Binds to a port and listens for incoming connections",
     "Connects to itself",
     "Sends data immediately",
     "Deletes its own IP address"
    ],
    "answer": 0,
    "explain": "A server socket binds to a chosen port and listens, waiting for a client to connect."
   },
   {
    "q": "Which socket type corresponds to TCP?",
    "options": [
     "SOCK_RAW",
     "SOCK_UDP",
     "SOCK_STREAM",
     "SOCK_DGRAM"
    ],
    "answer": 2,
    "explain": "SOCK_STREAM sockets use TCP, providing a reliable, connection-oriented byte stream."
   },
   {
    "q": "For a live video call where occasional dropped frames are acceptable, which protocol is usually preferred?",
    "options": [
     "ARP, for address resolution",
     "FTP, for file transfer reliability",
     "TCP, for guaranteed delivery",
     "UDP, for lower latency even with some loss"
    ],
    "answer": 3,
    "explain": "UDP is preferred for real-time media because it avoids the delays of retransmission, and occasional lost data is tolerable."
   }
  ]
 },
 "networks-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Popular websites get far more traffic than a single server can handle. A load balancer sits in front of many identical servers and spreads incoming requests across them, so no single machine gets overwhelmed and the site stays fast even under heavy load."
    },
    {
     "type": "text",
     "text": "Load balancers use different strategies to choose a server: round robin (take turns), least connections (send to whichever server is currently least busy), or based on server response time. If one server fails a health check, the load balancer stops sending it traffic until it recovers."
    },
    {
     "type": "text",
     "text": "A CDN, Content Delivery Network, takes this idea further by placing copies of content (images, videos, static files) on servers physically close to users around the world. When you request a file, you are served from a nearby CDN server instead of the original, distant origin server, cutting down travel time dramatically."
    },
    {
     "type": "tip",
     "text": "Interview framing: a load balancer solves 'too many requests for one server', while a CDN solves 'the server is too far away from the user'. Real systems usually use both together."
    },
    {
     "type": "text",
     "text": "Together, load balancers and CDNs are core building blocks of how large-scale systems stay fast and available even when millions of people use them at once, which is exactly what backend and systems interviews often probe."
    }
   ],
   "recap": "Load balancers distribute traffic across many servers to prevent overload, while CDNs cache content near users geographically to cut latency; large-scale systems typically combine both."
  },
  "quiz": [
   {
    "q": "What is the main job of a load balancer?",
    "options": [
     "To encrypt traffic between client and server",
     "To assign private IP addresses to devices",
     "To distribute incoming requests across multiple servers",
     "To translate domain names into IP addresses"
    ],
    "answer": 2,
    "explain": "A load balancer spreads requests across a pool of servers so no single one becomes overwhelmed."
   },
   {
    "q": "What problem does a CDN primarily solve?",
    "options": [
     "Server overload from too many requests",
     "IP address exhaustion",
     "MAC address collisions",
     "Long travel distance between the user and a distant origin server"
    ],
    "answer": 3,
    "explain": "A CDN places copies of content near users geographically, reducing the distance data has to travel and improving load times."
   },
   {
    "q": "Which is a common load-balancing strategy?",
    "options": [
     "Sending requests only at midnight",
     "Always sending every request to the same server",
     "Never checking if a server is healthy",
     "Round robin, taking turns sending requests to each server"
    ],
    "answer": 3,
    "explain": "Round robin is a simple, common strategy where requests are distributed to servers in rotation."
   },
   {
    "q": "Why do large-scale systems often use both a load balancer and a CDN?",
    "options": [
     "Because one manages server overload while the other reduces distance-related latency",
     "Because they do the exact same job twice",
     "Because CDNs replace the need for servers entirely",
     "Because load balancers only work with UDP"
    ],
    "answer": 0,
    "explain": "Load balancers and CDNs solve different problems — overload and distance — so combining them improves both reliability and speed."
   }
  ]
 },
 "networks-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Understanding how networks can be attacked is just as important as understanding how they work, and it is a favorite topic in placement interviews. A denial-of-service (DoS) attack floods a target with traffic or requests until it can no longer serve real users; a distributed denial-of-service (DDoS) attack does this from many machines at once, often a botnet, making it much harder to block."
    },
    {
     "type": "text",
     "text": "A man-in-the-middle (MITM) attack happens when an attacker secretly sits between two communicating parties, able to read or even alter the traffic. This is exactly what HTTPS and TLS encryption are designed to prevent, since encrypted traffic is useless to an attacker who cannot decrypt it."
    },
    {
     "type": "text",
     "text": "IP spoofing means forging the source IP address in a packet to disguise where it really came from, often used to make DoS attacks harder to trace or to trick systems that trust certain IP ranges. ARP spoofing is a related local-network attack, where a device tricks others into thinking it owns an IP address it does not, letting it intercept their traffic."
    },
    {
     "type": "code",
     "code": "# Conceptual illustration only, not a real attack tool\n# ARP spoofing idea: attacker sends fake ARP replies claiming\n# 'I am 192.168.1.1' (the router) with the attacker's own MAC address,\n# so victims send their traffic to the attacker instead of the real router.",
     "lang": "text"
    },
    {
     "type": "tip",
     "text": "Defense checklist interviewers expect: encryption (HTTPS/TLS/VPN) against MITM, firewalls and rate limiting against DoS, static ARP entries or ARP monitoring against ARP spoofing, and ingress filtering by ISPs against IP spoofing."
    }
   ],
   "recap": "DoS/DDoS attacks overwhelm a target with traffic, MITM attacks intercept communication (countered by encryption), and spoofing attacks (IP or ARP) forge identity to redirect or hide traffic — together these are the network attacks most often covered in exams and interviews."
  },
  "quiz": [
   {
    "q": "What distinguishes a DDoS attack from a simple DoS attack?",
    "options": [
     "DDoS comes from many machines at once, making it harder to block",
     "There is no real difference",
     "DDoS only targets DNS servers",
     "DDoS uses encryption, DoS does not"
    ],
    "answer": 0,
    "explain": "A DDoS attack is distributed across many machines, often a botnet, which makes filtering out the attack traffic much harder than with a single-source DoS attack."
   },
   {
    "q": "What does encryption like HTTPS/TLS primarily protect against?",
    "options": [
     "Slow internet speeds",
     "ARP table exhaustion",
     "Running out of IP addresses",
     "Man-in-the-middle attacks reading or altering traffic"
    ],
    "answer": 3,
    "explain": "Encryption makes intercepted traffic unreadable and tamper-evident, directly countering man-in-the-middle attacks."
   },
   {
    "q": "What is ARP spoofing?",
    "options": [
     "Forging DNS responses",
     "Tricking devices on a LAN into associating an attacker's MAC address with someone else's IP",
     "Blocking a website with a firewall",
     "Overloading a server with traffic"
    ],
    "answer": 1,
    "explain": "ARP spoofing sends fake ARP replies so victims send traffic meant for another device (like the router) to the attacker instead."
   },
   {
    "q": "Which defense is most directly aimed at IP spoofing?",
    "options": [
     "Using UDP instead of TCP",
     "Using a stronger Wi-Fi password",
     "Increasing the DNS cache size",
     "Ingress filtering that checks whether a packet's source IP is plausible for the network it entered from"
    ],
    "answer": 3,
    "explain": "Ingress filtering at network boundaries checks that a packet's claimed source IP is consistent with where it actually entered, helping catch spoofed addresses."
   }
  ]
 }
}
