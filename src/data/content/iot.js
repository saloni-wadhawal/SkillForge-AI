// Lesson text and quiz questions for "Internet of Things (IoT)".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "iot-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The Internet of Things (IoT) means everyday physical objects — lamps, doorbells, watches, factory machines — that carry tiny computers and can connect to a network to send and receive data. Instead of only people using the internet, now 'things' use it too."
    },
    {
     "type": "text",
     "text": "A normal object just sits there. An IoT object senses the world, thinks a little (or sends data to something that thinks for it), and acts. Your fitness band counts steps and shows them on your phone; a smart thermostat notices the room is cold and turns on the heater. That loop — sense, send, decide, act — is the heart of IoT."
    },
    {
     "type": "tip",
     "text": "Analogy: a regular fridge is a box that keeps things cold. An IoT fridge is that same box plus a helper that can text you 'you're out of milk.' The fridge didn't change — we added senses and a voice."
    },
    {
     "type": "text",
     "text": "A basic IoT system usually has four parts: the 'thing' (a device with sensors), connectivity (WiFi, Bluetooth, mobile data), a place to collect the data (often a cloud server), and an app or dashboard where a human sees results or gives commands."
    }
   ],
   "recap": "IoT connects everyday objects to networks so they can sense, share, and act on data through a sense–send–decide–act loop."
  },
  "quiz": [
   {
    "q": "What best describes the Internet of Things?",
    "options": [
     "Everyday physical objects that connect to a network to share and use data",
     "A type of computer virus",
     "A faster version of home WiFi",
     "A programming language for websites"
    ],
    "answer": 0,
    "explain": "IoT is about ordinary physical objects gaining sensors and network connections so they can exchange data."
   },
   {
    "q": "Which four parts make up a basic IoT system?",
    "options": [
     "Keyboard, mouse, monitor, printer",
     "The thing, connectivity, a place to collect data, and an app/dashboard",
     "CPU, RAM, hard disk, power supply",
     "HTML, CSS, JavaScript, database"
    ],
    "answer": 1,
    "explain": "An IoT system is the device, its connectivity, a data-collection point (often the cloud), and a human-facing app or dashboard."
   },
   {
    "q": "In an IoT device, what does the sensing step do?",
    "options": [
     "It charges the battery",
     "It measures something about the real world, like temperature or motion",
     "It compiles source code",
     "It prints documents"
    ],
    "answer": 1,
    "explain": "Sensing means measuring a real-world quantity so the device has data to act on."
   }
  ]
 },
 "iot-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "IoT devices interact with the world through two kinds of components. Sensors are the device's senses — they read something physical (light, heat, motion, humidity, distance) and turn it into an electrical signal a computer can understand. Actuators are the device's muscles — they take a signal and cause a physical change (spin a motor, open a valve, light an LED, buzz a speaker)."
    },
    {
     "type": "tip",
     "text": "Easy way to remember: sensors are INPUT (world → device), actuators are OUTPUT (device → world). Sensor = eyes and ears. Actuator = hands and voice."
    },
    {
     "type": "text",
     "text": "Sensors give either analog values (a smooth range, like a temperature of 23.7°C) or digital values (on/off, like a button pressed or not). A microcontroller reads these values, often using an ADC (analog-to-digital converter) to turn a smooth analog voltage into a number the program can use."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// Read a temperature sensor, turn on a fan actuator if it's hot\nint tempPin = A0;      // analog sensor input\nint fanPin  = 8;       // actuator output (fan/relay)\n\nvoid loop() {\n  int reading = analogRead(tempPin);   // 0..1023 from the ADC\n  float voltage = reading * (5.0 / 1023.0);\n  float celsius = voltage * 100.0;     // example conversion\n\n  if (celsius > 30.0) {\n    digitalWrite(fanPin, HIGH);        // actuator ON\n  } else {\n    digitalWrite(fanPin, LOW);         // actuator OFF\n  }\n}"
    },
    {
     "type": "text",
     "text": "Common sensors you'll meet: DHT11/DHT22 (temperature + humidity), PIR (motion), LDR (light), ultrasonic HC-SR04 (distance). Common actuators: DC motors, servo motors, relays (to switch big appliances), buzzers, and LEDs."
    }
   ],
   "recap": "Sensors are inputs that measure the physical world; actuators are outputs that change it — together they let an IoT device sense and act."
  },
  "quiz": [
   {
    "q": "Which pair correctly labels a sensor and an actuator?",
    "options": [
     "Motor = sensor, thermometer = actuator",
     "Both are outputs",
     "Both are inputs",
     "Temperature sensor = input, motor = output"
    ],
    "answer": 3,
    "explain": "Sensors are inputs that measure the world; actuators like motors are outputs that change it."
   },
   {
    "q": "What does an ADC (analog-to-digital converter) do?",
    "options": [
     "Connects the device to WiFi",
     "Sends email alerts",
     "Turns a smooth analog voltage into a number the program can use",
     "Charges the device battery"
    ],
    "answer": 2,
    "explain": "An ADC converts a continuous analog signal into a discrete digital value the microcontroller can process."
   },
   {
    "q": "A relay is used in IoT projects mainly to:",
    "options": [
     "Switch larger appliances on and off with a small control signal",
     "Store data permanently",
     "Measure temperature",
     "Detect motion"
    ],
    "answer": 0,
    "explain": "A relay is an actuator that lets a low-power signal safely switch high-power devices."
   },
   {
    "q": "A PIR component in a device is a:",
    "options": [
     "Cloud database",
     "Actuator that spins motors",
     "Sensor that detects motion",
     "Power supply"
    ],
    "answer": 2,
    "explain": "A PIR (passive infrared) sensor detects movement, making it an input sensor."
   }
  ]
 },
 "iot-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "The 'brain' inside most IoT things is a microcontroller — a tiny, low-power computer on a single chip with a processor, a small amount of memory, and pins to connect sensors and actuators. Unlike your laptop, it usually runs just one program forever, dedicated to a single job. That's what 'embedded' means: a computer built into a product rather than sitting on a desk."
    },
    {
     "type": "text",
     "text": "Arduino is a beginner-friendly board and software that made microcontrollers easy to learn. An Arduino sketch (program) has two special functions: setup() runs once when the board powers on, and loop() runs over and over forever. You configure your pins in setup(), then read sensors and drive actuators inside loop()."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// Classic 'Blink': the Hello World of embedded devices\nint ledPin = 13;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);   // runs ONCE at power-on\n}\n\nvoid loop() {                // runs FOREVER\n  digitalWrite(ledPin, HIGH); // LED on\n  delay(1000);                // wait 1000 ms\n  digitalWrite(ledPin, LOW);  // LED off\n  delay(1000);\n}"
    },
    {
     "type": "tip",
     "text": "Think of loop() as a hamster wheel that never stops. The microcontroller has no desktop, no windows — its whole life is running your loop again and again, thousands of times a second."
    },
    {
     "type": "text",
     "text": "Pins are how the board touches the world. Digital pins handle on/off (HIGH/LOW), analog input pins read smooth values, and PWM pins can fake an in-between output to dim an LED or set a motor's speed. For internet features, boards like the ESP32 or ESP8266 add built-in WiFi — that's where a plain microcontroller becomes a true IoT device."
    }
   ],
   "recap": "Embedded IoT devices run on microcontrollers dedicated to one job; Arduino makes this approachable with a setup() that runs once and a loop() that runs forever."
  },
  "quiz": [
   {
    "q": "In an Arduino sketch, how often does loop() run?",
    "options": [
     "Once per day",
     "Once at power-on, then never again",
     "Repeatedly, over and over, as long as the board is powered",
     "Only when a button is pressed"
    ],
    "answer": 2,
    "explain": "loop() executes continuously in a cycle for as long as the board has power."
   },
   {
    "q": "What does 'embedded' mean in 'embedded device'?",
    "options": [
     "A very fast gaming PC",
     "A computer built into a product to do one dedicated job",
     "A website hosted in the cloud",
     "A backup copy of your files"
    ],
    "answer": 1,
    "explain": "Embedded means a small computer is built into a product, dedicated to a specific task rather than general use."
   },
   {
    "q": "Which board is commonly chosen when a project needs built-in WiFi?",
    "options": [
     "A desktop hard drive",
     "A USB keyboard",
     "A basic Arduino Uno with nothing added",
     "An ESP32 or ESP8266"
    ],
    "answer": 3,
    "explain": "ESP32/ESP8266 boards include built-in WiFi, turning a microcontroller into a networked IoT device."
   },
   {
    "q": "What is the correct job of setup() in Arduino?",
    "options": [
     "It keeps looping to read sensors",
     "It connects to the cloud every second",
     "It runs once at power-on to prepare pins and settings",
     "It converts analog to digital automatically"
    ],
    "answer": 2,
    "explain": "setup() runs a single time at startup to initialize pins and configuration."
   }
  ]
 },
 "iot-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A device is only 'IoT' once it can talk to something else. Connectivity is the channel it uses. There's no single best choice — you pick based on how far the data must travel, how much power you have, and how much data you send. The big trade-off is almost always range vs. power vs. data rate."
    },
    {
     "type": "text",
     "text": "WiFi gives high data rates and reaches the internet directly through your router, but it drains batteries quickly — great for a plugged-in smart camera, poor for a coin-cell sensor. Bluetooth (especially Bluetooth Low Energy, BLE) uses very little power over short distances — perfect for wearables and phone-linked gadgets that must run for months on a tiny battery."
    },
    {
     "type": "tip",
     "text": "Rule of thumb: WiFi = big data but thirsty for power. BLE = sips power but only whispers a little data over a short range. Match the radio to the job, not the other way around."
    },
    {
     "type": "text",
     "text": "Other radios fill the gaps: Zigbee and Z-Wave form low-power mesh networks for smart homes (devices relay for each other); LoRa/LoRaWAN sends tiny messages many kilometres for farm and city sensors; and cellular (4G/5G, NB-IoT) works anywhere there's a mobile signal, no local router needed."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// ESP32/ESP8266 joining a WiFi network\n#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(\"MyNetwork\", \"myPassword\");\n\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");            // still connecting\n  }\n  Serial.println(\"\\nConnected!\");\n  Serial.println(WiFi.localIP()); // the device now has an IP address\n}\n\nvoid loop() { }"
    },
    {
     "type": "text",
     "text": "Once connected, devices exchange data using protocols. HTTP is familiar and simple but heavy. MQTT is the IoT favourite: a lightweight publish/subscribe protocol where devices 'publish' readings to topics and others 'subscribe' — efficient for thousands of small messages over unreliable networks."
    }
   ],
   "recap": "Choosing connectivity is a trade-off of range, power, and data rate — WiFi is fast but power-hungry, BLE sips power over short range, and protocols like MQTT move IoT data efficiently."
  },
  "quiz": [
   {
    "q": "Why is Bluetooth Low Energy (BLE) often preferred for a fitness wearable?",
    "options": [
     "It can reach the internet without any phone or router",
     "It has the longest range of any radio",
     "It uses very little power for short-range data, so the battery lasts long",
     "It sends the largest amount of data possible"
    ],
    "answer": 2,
    "explain": "BLE is designed for low power over short distances, ideal for battery-powered wearables."
   },
   {
    "q": "Which technology suits sending tiny sensor messages several kilometres across a farm?",
    "options": [
     "Classic Bluetooth",
     "Standard home WiFi",
     "A USB cable",
     "LoRa / LoRaWAN"
    ],
    "answer": 3,
    "explain": "LoRaWAN specializes in very long range with tiny, infrequent messages at low power."
   },
   {
    "q": "MQTT is popular in IoT because it is:",
    "options": [
     "A heavy protocol that sends huge files",
     "A lightweight publish/subscribe protocol good for many small messages",
     "A type of sensor",
     "A programming language"
    ],
    "answer": 1,
    "explain": "MQTT's lightweight publish/subscribe model efficiently handles many small IoT messages over unreliable links."
   },
   {
    "q": "The core trade-off when choosing an IoT radio is between:",
    "options": [
     "Colour, size, and price",
     "Range, power use, and data rate",
     "Operating system and browser",
     "Screen size and keyboard"
    ],
    "answer": 1,
    "explain": "Connectivity choices balance how far data travels, how much power is used, and how much data is sent."
   }
  ]
 },
 "iot-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A single device holding readings isn't very useful. The power of IoT appears when many devices send their data to a central place — the cloud — where it can be stored, combined, analysed, and shown on dashboards or apps anywhere in the world. The cloud is really just someone else's powerful computers you rent over the internet."
    },
    {
     "type": "text",
     "text": "A typical data journey: the sensor reads a value → the microcontroller packages it (often as JSON) → it's sent over WiFi/cellular using MQTT or HTTP → a cloud IoT platform (AWS IoT, Azure IoT, Google Cloud IoT, or a simple service like ThingSpeak) receives it → the data is stored in a database → a dashboard or mobile app displays it and can send commands back."
    },
    {
     "type": "code",
     "lang": "json",
     "code": "{\n  \"deviceId\": \"sensor-07\",\n  \"timestamp\": \"2026-07-25T10:15:00Z\",\n  \"temperature\": 24.6,\n  \"humidity\": 58,\n  \"battery\": 87\n}"
    },
    {
     "type": "tip",
     "text": "JSON is just a tidy label-and-value format both tiny devices and big servers understand — like writing a shipping label so any post office in the world can read the package."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "// Publish a reading to the cloud over MQTT (PubSubClient library)\nclient.connect(\"sensor-07\");\nString payload = \"{\\\"temperature\\\":24.6,\\\"humidity\\\":58}\";\nclient.publish(\"factory/room1/climate\", payload.c_str());\n// A cloud dashboard subscribed to 'factory/room1/climate' now sees it"
    },
    {
     "type": "text",
     "text": "Two smart patterns matter as fleets grow. Edge computing means doing some processing on or near the device (e.g. only send an alert when temperature crosses a limit) to save bandwidth and react faster. And digital twins are a live software model of a real device in the cloud, so you can watch and even command it remotely as if it were in front of you."
    }
   ],
   "recap": "IoT devices package readings (often as JSON) and send them via MQTT/HTTP to cloud platforms that store, analyse, and display the data — with edge computing and digital twins helping at scale."
  },
  "quiz": [
   {
    "q": "What is 'the cloud' in an IoT system, in plain terms?",
    "options": [
     "A backup battery inside the device",
     "Powerful remote computers you rent over the internet to store and process data",
     "The WiFi antenna",
     "The weather sensor on the device"
    ],
    "answer": 1,
    "explain": "The cloud is remote server infrastructure accessed over the internet for storage and processing."
   },
   {
    "q": "Why is JSON commonly used to send IoT readings?",
    "options": [
     "It permanently powers the device",
     "It is a type of sensor",
     "It makes the WiFi faster",
     "It is a tidy label-and-value format that both small devices and servers can read"
    ],
    "answer": 3,
    "explain": "JSON is a lightweight, human-readable label/value format understood across devices and servers."
   },
   {
    "q": "What does 'edge computing' mean in IoT?",
    "options": [
     "Connecting devices with cables only",
     "Sending data to the edge of the country",
     "Doing some processing on or near the device instead of sending everything to the cloud",
     "Storing all data only in one giant database"
    ],
    "answer": 2,
    "explain": "Edge computing processes data close to the device to save bandwidth and react faster."
   },
   {
    "q": "A 'digital twin' is:",
    "options": [
     "A duplicate WiFi router",
     "A live software model of a real device in the cloud",
     "A backup SD card",
     "A second physical copy of the device"
    ],
    "answer": 1,
    "explain": "A digital twin is a live virtual representation of a real device used to monitor and control it remotely."
   }
  ]
 },
 "iot-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "IoT is already everywhere: smart homes (lights, locks, thermostats), wearables and remote health monitors, smart agriculture (soil and weather sensors that guide irrigation), Industrial IoT (IIoT) where factories predict machine failure before it happens, connected vehicles, and smart cities managing traffic, parking, and energy. The common thread is turning real-world measurements into better, faster decisions."
    },
    {
     "type": "text",
     "text": "But connecting billions of devices creates a huge attack surface. Many IoT devices are cheap, rarely updated, and shipped with weak default passwords — making them easy targets. A famous example, the Mirai botnet, hijacked thousands of poorly-secured cameras and routers to launch massive attacks. In IoT, security is not optional; a compromised device can spy, be weaponised, or open a door into the whole network."
    },
    {
     "type": "tip",
     "text": "Think of every IoT device as a small unlocked window in a big house. One forgotten open window (a default password) can let an intruder into every room. Security is only as strong as the weakest device."
    },
    {
     "type": "text",
     "text": "Core defences every engineer should apply: change default credentials and use strong, unique passwords; encrypt data in transit (TLS) and at rest so it can't be read if intercepted; authenticate devices so only trusted ones join; keep firmware updatable and patched (secure over-the-air updates); and follow least privilege — each device gets only the access it truly needs. Physical security and disabling unused ports/services matter too."
    },
    {
     "type": "text",
     "text": "Beyond attacks, engineers must weigh privacy (sensors collect very personal data — who owns it and who can see it?), reliability (a stuck medical or automotive sensor can be dangerous), and scale (managing, monitoring, and updating thousands of devices safely). Good IoT design bakes in 'security and privacy by design' from day one rather than bolting it on later."
    }
   ],
   "recap": "IoT powers smart homes, health, agriculture, industry, and cities — but its scale demands security by design: strong credentials, encryption, device authentication, patchable firmware, least privilege, and privacy protection."
  },
  "quiz": [
   {
    "q": "Why are many IoT devices attractive targets for attackers?",
    "options": [
     "They are too expensive to hack",
     "They contain no data at all",
     "They never connect to any network",
     "They are often cheap, rarely updated, and shipped with weak default passwords"
    ],
    "answer": 3,
    "explain": "Low-cost, seldom-patched devices with default passwords are easy to compromise, as the Mirai botnet showed."
   },
   {
    "q": "What does encrypting data 'in transit' with TLS protect against?",
    "options": [
     "The battery running out",
     "The device overheating",
     "The WiFi being too slow",
     "Someone intercepting and reading the data as it travels"
    ],
    "answer": 3,
    "explain": "TLS encryption keeps data unreadable to anyone who intercepts it while it moves across the network."
   },
   {
    "q": "The principle of 'least privilege' means:",
    "options": [
     "Devices should never be updated",
     "All devices share one password",
     "Every device gets full admin access",
     "Each device gets only the access it truly needs and nothing more"
    ],
    "answer": 3,
    "explain": "Least privilege limits each device's access to the minimum required, shrinking the damage if it's breached."
   },
   {
    "q": "What is a strong reason to design IoT with 'security and privacy by design'?",
    "options": [
     "It makes devices cheaper to build",
     "It removes the need for any passwords",
     "Sensors collect personal data and huge fleets are hard to secure if it's an afterthought",
     "It disables all data collection"
    ],
    "answer": 2,
    "explain": "Because IoT gathers sensitive data at massive scale, protection must be built in from the start rather than added later."
   }
  ]
 },
 "iot-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "So far you have met sensors, boards, connectivity, and the cloud one at a time. Now put them together. Most textbooks describe IoT as a stack of four layers, each one depending on the layer below it, much like a building has a foundation, walls, wiring, and rooms."
    },
    {
     "type": "text",
     "text": "The perception layer is the physical world: sensors and actuators that sense temperature, motion, or light and act on the world (a motor, a relay, an LED). The network layer carries that data using WiFi, Bluetooth, Zigbee, or cellular. The middleware layer sits in the cloud or on a gateway, and does the unglamorous but essential work: storing data, filtering out noise, and matching the right data to the right application. The application layer is what the user actually sees — a dashboard, a mobile app, an automatic alert."
    },
    {
     "type": "text",
     "text": "A smart irrigation system makes this concrete. Perception: a soil-moisture sensor. Network: the reading travels over WiFi to a gateway. Middleware: a cloud service stores the reading and checks it against a threshold. Application: a farmer's app shows 'soil is dry' and lets them turn on the pump remotely."
    },
    {
     "type": "tip",
     "text": "Exam trick: if a question describes 'a sensor reading being converted into an alert on a phone', map each part of the sentence onto a layer — sensor is perception, the alert logic is middleware, the phone screen is application."
    },
    {
     "type": "text",
     "text": "This layered thinking matters in interviews too. When asked to design an IoT system, naming the four layers first shows you can structure a messy real-world problem instead of jumping straight to code."
    }
   ],
   "recap": "IoT systems are commonly split into four layers — perception (sensors/actuators), network (connectivity), middleware (storage and processing), and application (the user-facing app) — each depending on the one below it."
  },
  "quiz": [
   {
    "q": "Which layer includes the actual sensors and actuators touching the physical world?",
    "options": [
     "Application layer",
     "Perception layer",
     "Network layer",
     "Middleware layer"
    ],
    "answer": 1,
    "explain": "The perception layer is the physical hardware — sensors that sense and actuators that act."
   },
   {
    "q": "In a smart irrigation system, checking a moisture reading against a threshold and deciding to raise an alert belongs to which layer?",
    "options": [
     "Perception layer",
     "Power layer",
     "Network layer",
     "Middleware layer"
    ],
    "answer": 3,
    "explain": "Middleware does the processing and decision logic between raw data and the user-facing app."
   },
   {
    "q": "Why is naming the four IoT layers useful when designing a new system?",
    "options": [
     "It removes the need for a network",
     "It makes the hardware cheaper",
     "It gives a structure to break a messy real-world problem into clear, dependent parts",
     "It is required by law in every country"
    ],
    "answer": 2,
    "explain": "Layered thinking helps organise design decisions from hardware up to the user-facing app."
   }
  ]
 },
 "iot-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already saw MQTT publish a reading to the cloud. Now compare the three protocols IoT engineers actually choose between. HTTP is the familiar request-response protocol of the web — simple, but it needs a full connection handshake for every message, which is heavy for a tiny battery-powered sensor sending readings every second."
    },
    {
     "type": "text",
     "text": "MQTT (Message Queuing Telemetry Transport) uses a publish-subscribe model: devices publish readings to a 'topic' on a broker, and any number of apps can subscribe to that topic without the device knowing who is listening. It keeps one lightweight open connection, which suits devices sending frequent small updates over unreliable networks."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# A simple MQTT subscriber using paho-mqtt\nimport paho.mqtt.client as mqtt\n\ndef on_message(client, userdata, msg):\n    print(f\"{msg.topic}: {msg.payload.decode()}\")\n\nclient = mqtt.Client()\nclient.on_message = on_message\nclient.connect(\"broker.hivemq.com\", 1883)\nclient.subscribe(\"factory/room1/climate\")\nclient.loop_forever()"
    },
    {
     "type": "text",
     "text": "CoAP (Constrained Application Protocol) is designed for devices even more limited than MQTT targets — think tiny sensors with almost no memory. It mimics HTTP's GET/POST style but runs over UDP instead of TCP, so it skips the connection handshake and uses far less overhead, at the cost of built-in reliability."
    },
    {
     "type": "tip",
     "text": "Quick way to remember which protocol to pick: HTTP for normal web APIs, MQTT for many small devices streaming continuously to a broker, CoAP for the tiniest, most constrained devices that cannot afford MQTT's persistent connection."
    }
   ],
   "recap": "HTTP, MQTT, and CoAP each suit different IoT needs: HTTP is the familiar request-response web protocol, MQTT uses lightweight publish-subscribe over a persistent connection for streaming devices, and CoAP is a UDP-based, HTTP-like protocol for the most constrained sensors."
  },
  "quiz": [
   {
    "q": "What communication model does MQTT use?",
    "options": [
     "Publish-subscribe through a broker",
     "Request-response only, like plain HTTP",
     "Direct peer-to-peer file transfer",
     "Broadcast to every device on Earth"
    ],
    "answer": 0,
    "explain": "MQTT devices publish to a topic on a broker, and interested apps subscribe to that topic."
   },
   {
    "q": "Why might CoAP be chosen over MQTT for a very constrained sensor?",
    "options": [
     "CoAP only works with cellular networks",
     "CoAP runs over UDP and skips the connection handshake, using less overhead",
     "CoAP requires more memory than MQTT",
     "CoAP cannot send numeric data"
    ],
    "answer": 1,
    "explain": "CoAP is built for the most limited devices, using UDP for lower overhead than a persistent connection."
   },
   {
    "q": "What is a downside of using plain HTTP for a sensor that sends a reading every second?",
    "options": [
     "HTTP has no way to send any data at all",
     "HTTP only works on Bluetooth",
     "HTTP cannot send numbers",
     "Each request needs a full connection handshake, which is heavy for tiny, frequent updates"
    ],
    "answer": 3,
    "explain": "HTTP's per-request handshake overhead becomes costly for frequent small messages from constrained devices."
   }
  ]
 },
 "iot-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "WiFi and Bluetooth are great for a handful of devices, but a smart building might have thousands of sensors that each need to run for years on a coin-cell battery. Zigbee was built for exactly this: a low-power, low-data-rate radio standard where devices form a mesh network, relaying each other's messages so the whole network covers a large area even though each radio's range is short."
    },
    {
     "type": "text",
     "text": "In a mesh network, a message can hop from device to device to reach the gateway, instead of every device needing a direct line to it. This means adding one more lightbulb or sensor can actually extend the network's reach, not just add load to it."
    },
    {
     "type": "tip",
     "text": "Picture a bucket brigade passing water buckets hand to hand to put out a fire far away — that's mesh networking. No single person needs to reach the fire; they just pass to the next person in the chain."
    },
    {
     "type": "text",
     "text": "6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) takes a different angle: it squeezes full IPv6 addressing onto tiny, low-power radios, so every sensor can have its own globally routable internet address, compressed to fit small packet sizes. This lets tiny devices talk directly on the internet without a special gateway translating protocols."
    },
    {
     "type": "text",
     "text": "Both matter for exams and interviews: Zigbee is the classic mesh-network answer for smart-home and building sensors; 6LoWPAN is the answer when a question asks how constrained devices get proper IPv6 addresses."
    }
   ],
   "recap": "Zigbee is a low-power mesh protocol where devices relay messages hop by hop to extend range, while 6LoWPAN compresses IPv6 so even tiny, constrained devices can have their own internet address."
  },
  "quiz": [
   {
    "q": "In a Zigbee mesh network, how does a message far from the gateway usually reach it?",
    "options": [
     "It must be sent over WiFi instead",
     "It hops from device to device until it reaches the gateway",
     "Every device must be within direct range of the gateway",
     "It is deleted"
    ],
    "answer": 1,
    "explain": "Mesh networking relays messages device to device, so devices don't need a direct line to the gateway."
   },
   {
    "q": "What is the main idea behind 6LoWPAN?",
    "options": [
     "Sending video over a coin-cell battery",
     "Replacing WiFi with Bluetooth everywhere",
     "Running full IPv6 addressing over low-power, constrained wireless devices",
     "Removing the need for any addressing at all"
    ],
    "answer": 2,
    "explain": "6LoWPAN compresses IPv6 so small, low-power devices can each have a real internet address."
   },
   {
    "q": "Why is Zigbee well suited to a building with thousands of battery-powered sensors?",
    "options": [
     "It needs a wired connection to every device",
     "It requires a 4G SIM card in every sensor",
     "It only works for one device at a time",
     "It uses low power and mesh relaying so range and battery life both scale well"
    ],
    "answer": 3,
    "explain": "Zigbee's low power draw and mesh relaying let a large sensor fleet run for years on small batteries."
   }
  ]
 },
 "iot-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mesh networks like Zigbee cover a building well, but what about a sensor on a farm ten kilometres from the nearest gateway, or a water meter in a basement? For that distance, engineers reach for LPWAN — Low Power Wide Area Network — technologies, which trade data speed for enormous range and battery life measured in years, not days."
    },
    {
     "type": "text",
     "text": "LoRaWAN uses a licence-free radio technique called LoRa (Long Range) to send tiny amounts of data many kilometres, and organisations can run their own private LoRaWAN gateway cheaply. NB-IoT (Narrowband IoT) instead rides on existing cellular networks, using a licensed band, so it needs no private gateway but does need a SIM card and a network operator, similar to a phone."
    },
    {
     "type": "tip",
     "text": "Remember it as: LoRaWAN is 'build your own radio network, no monthly SIM fee', NB-IoT is 'rent the mobile operator's existing towers, pay a SIM data fee'. Both trade speed for range and battery life."
    },
    {
     "type": "text",
     "text": "A single LoRaWAN gateway can hear thousands of sensors across an entire town, each sending just a few bytes every few minutes — a soil sensor, a smart water meter, a parking-space detector. NB-IoT suits similar low-data use cases but benefits from existing telecom coverage, which matters for products that must work anywhere without installing new infrastructure."
    },
    {
     "type": "text",
     "text": "Neither is meant for streaming video or fast control loops — for that you're back to WiFi, Bluetooth, or cellular broadband. Picking the right connectivity option is really a trade-off between range, power, data rate, and cost, and exam questions often ask you to justify a choice given a scenario."
    }
   ],
   "recap": "LPWAN technologies trade data speed for very long range and long battery life: LoRaWAN uses licence-free radio and your own gateway, while NB-IoT rides on existing licensed cellular towers using a SIM card."
  },
  "quiz": [
   {
    "q": "What problem do LPWAN technologies like LoRaWAN and NB-IoT solve?",
    "options": [
     "Replacing Bluetooth for headphones",
     "Streaming high-definition video from sensors",
     "Sending small amounts of data over very long distances on long battery life",
     "Making WiFi faster"
    ],
    "answer": 2,
    "explain": "LPWAN trades data speed for long range and multi-year battery life, ideal for infrequent small readings."
   },
   {
    "q": "What does NB-IoT need that LoRaWAN typically does not?",
    "options": [
     "An antenna",
     "A private gateway you must build",
     "A battery",
     "A SIM card and a cellular network operator"
    ],
    "answer": 3,
    "explain": "NB-IoT rides on existing licensed cellular networks, so it needs a SIM card and operator, unlike a self-hosted LoRaWAN gateway."
   },
   {
    "q": "Which of these is a poor use case for LoRaWAN?",
    "options": [
     "A remote water meter reporting usage once a day",
     "Streaming a live security camera feed",
     "A smart parking sensor reporting occupancy",
     "A soil moisture sensor sending a reading every 10 minutes"
    ],
    "answer": 1,
    "explain": "LPWAN's low data rate makes it unsuitable for continuous high-bandwidth data like video."
   }
  ]
 },
 "iot-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Not every 'thing' in IoT needs a battery or its own radio chip talking to a network. RFID (Radio-Frequency Identification) uses tiny tags, often just a chip and an antenna printed on a sticker, that have no battery at all. A reader device sends out a radio signal; the tag uses the energy from that very signal to power itself and reply with its stored ID."
    },
    {
     "type": "text",
     "text": "This is why RFID tags are so cheap and common: warehouse pallets, library books, and toll-road tags (like FASTag in India) all use passive RFID to be identified automatically as they pass a reader, with no wiring and no battery to replace."
    },
    {
     "type": "tip",
     "text": "Passive RFID has no battery — think of it like a person shouting a question loud enough that the echo carries their own name back. The reader supplies the energy; the tag just reflects it with information attached."
    },
    {
     "type": "text",
     "text": "NFC (Near Field Communication) is a close cousin of RFID, built for very short range — a few centimetres — and two-way communication, which is why it's used for contactless payment cards and phone-to-phone tap-to-share. Where RFID readers can sense tags from metres away, NFC intentionally limits range for security: you must deliberately tap, not just walk past a reader."
    },
    {
     "type": "text",
     "text": "In IoT system design, RFID and NFC solve the 'identification' problem — knowing which specific physical object this is — often feeding that ID into a bigger system (a warehouse database, a payment ledger) rather than sensing an environmental value like temperature."
    }
   ],
   "recap": "RFID tags use the reader's own radio signal to power themselves and report an ID over a distance, while NFC is a short-range, two-way variant used for deliberate taps like payments — both solve the problem of identifying a specific physical object."
  },
  "quiz": [
   {
    "q": "How does a passive RFID tag get the power it needs to respond?",
    "options": [
     "It is plugged into mains power",
     "It draws power from sunlight only",
     "It harvests energy from the reader's own radio signal",
     "It has its own internal battery"
    ],
    "answer": 2,
    "explain": "Passive RFID tags have no battery; they use energy from the reader's radio signal to power a reply."
   },
   {
    "q": "Why is NFC's range intentionally very short compared to RFID?",
    "options": [
     "Because longer range is technically impossible",
     "To require a deliberate tap for security, as in contactless payments",
     "To make the antenna cheaper to manufacture",
     "Because NFC tags cannot use any power at all"
    ],
    "answer": 1,
    "explain": "Short range in NFC requires a deliberate, close tap, which is a security feature for payments and pairing."
   },
   {
    "q": "Which of these is a classic passive RFID use case?",
    "options": [
     "Running a machine-learning model on a phone",
     "Streaming live video from a security camera",
     "Sending Bluetooth audio to headphones",
     "Toll-road tags like FASTag identifying a vehicle as it passes"
    ],
    "answer": 3,
    "explain": "Toll tags are a well-known passive RFID application: no battery, identified automatically as the vehicle passes."
   }
  ]
 },
 "iot-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sending one device's reading to a cloud service is easy. Managing ten thousand devices — each needing firmware updates, security certificates, and monitoring — is where an IoT platform earns its keep. Platforms like AWS IoT Core, Azure IoT Hub, and Google Cloud IoT provide the plumbing so engineers don't rebuild it from scratch for every project."
    },
    {
     "type": "text",
     "text": "A device registry keeps track of every device's identity and certificate so the platform knows which devices are trusted. Device shadows (or 'device twins') store the last known state of a device in the cloud, so an app can read or even set a value even while the device itself is briefly offline — the platform syncs it once the device reconnects."
    },
    {
     "type": "code",
     "lang": "json",
     "code": "{\n  \"reported\": { \"ledOn\": false, \"temperature\": 24.6 },\n  \"desired\": { \"ledOn\": true },\n  \"version\": 12\n}"
    },
    {
     "type": "tip",
     "text": "Device shadow is like leaving a note on someone's door: you don't need them home to leave instructions ('desired: turn the light on'); they'll read it and act as soon as they get back ('reported' catches up)."
    },
    {
     "type": "text",
     "text": "Platforms also handle Over-The-Air (OTA) updates, so firmware bugs and security patches can be pushed to every device remotely instead of physically visiting each one, and provide rules engines that trigger actions (send an alert, start another cloud service) automatically when incoming data matches a condition."
    }
   ],
   "recap": "IoT platforms like AWS IoT Core and Azure IoT Hub manage device identity, use device shadows to sync state even when a device is offline, and support OTA updates and rules engines — the infrastructure needed to run thousands of devices reliably."
  },
  "quiz": [
   {
    "q": "What problem does a 'device shadow' (device twin) solve?",
    "options": [
     "It physically duplicates the hardware",
     "It only stores video recordings",
     "It replaces the need for any sensors",
     "It lets you interact with a device's last known/desired state even when the device is temporarily offline"
    ],
    "answer": 3,
    "explain": "A device shadow keeps reported and desired state in the cloud so apps can interact with it regardless of live connectivity."
   },
   {
    "q": "Why are Over-The-Air (OTA) updates important for large IoT fleets?",
    "options": [
     "They are required only for RFID tags",
     "They let firmware be patched remotely instead of visiting every device physically",
     "They make devices consume more power permanently",
     "They remove the need for encryption"
    ],
    "answer": 1,
    "explain": "OTA updates let engineers fix bugs and security issues remotely across thousands of deployed devices."
   },
   {
    "q": "What does a device registry keep track of on an IoT platform?",
    "options": [
     "The weather forecast",
     "The price of the cloud service",
     "Each device's identity and certificate so the platform knows which devices are trusted",
     "The colour of each sensor's case"
    ],
    "answer": 2,
    "explain": "The device registry manages device identities and credentials, underpinning trust in the whole fleet."
   }
  ]
 },
 "iot-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You've met edge computing (processing right on the device) and cloud computing (processing far away on powerful servers). Fog computing sits between the two: it places processing power on local servers or gateways near a group of devices — in the same building or factory floor — rather than either the tiny device itself or a distant data centre."
    },
    {
     "type": "text",
     "text": "Picture a factory with five hundred sensors. Sending every single reading straight to a distant cloud is slow and expensive in bandwidth. Instead, a fog node — a local, more powerful computer on-site — collects readings from nearby sensors, does the heavy filtering and immediate decision-making locally, and only sends summarised or important data up to the cloud for long-term storage and cross-factory analysis."
    },
    {
     "type": "tip",
     "text": "Think of the chain as edge (a single worker's own hands), fog (the local team supervisor on the factory floor), and cloud (head office far away). Fast local decisions happen close by; big-picture analysis happens at head office."
    },
    {
     "type": "text",
     "text": "Fog computing reduces latency for time-critical decisions (like stopping a machine before it overheats), reduces the bandwidth bill, and keeps working even if the internet link to the cloud briefly drops, since the fog node can act on local data independently."
    },
    {
     "type": "text",
     "text": "Exam and interview questions often ask you to distinguish edge vs fog vs cloud by where the processing physically happens and by what decision needs to be that fast: edge for instant reflexes, fog for local coordinated decisions, cloud for long-term, large-scale analysis."
    }
   ],
   "recap": "Fog computing places processing on local servers or gateways near a group of devices, sitting between edge processing on the device itself and centralised cloud processing far away — reducing latency and bandwidth while staying resilient if the cloud link drops."
  },
  "quiz": [
   {
    "q": "Where does fog computing typically place its processing power?",
    "options": [
     "Nowhere — fog computing avoids processing entirely",
     "Only inside the sensor itself",
     "On a local server or gateway near a group of devices, such as on a factory floor",
     "Only in a distant data centre"
    ],
    "answer": 2,
    "explain": "Fog computing uses local infrastructure near the devices, between edge devices and the distant cloud."
   },
   {
    "q": "What is a key benefit of a factory using a fog node instead of sending every reading straight to the cloud?",
    "options": [
     "It reduces latency and bandwidth, and keeps working if the cloud link drops",
     "It eliminates the need for security",
     "It makes the cloud storage cheaper by itself",
     "It removes the need for any sensors"
    ],
    "answer": 0,
    "explain": "Local fog processing gives faster decisions, lower bandwidth use, and resilience to internet outages."
   },
   {
    "q": "Which task is best suited to fog computing rather than pure edge or pure cloud processing?",
    "options": [
     "Reading a single temperature value on one sensor",
     "Storing years of historical data for global analytics",
     "Displaying a static webpage",
     "Coordinating and filtering data from many nearby sensors before sending a summary to the cloud"
    ],
    "answer": 3,
    "explain": "Fog computing is designed for local coordination across multiple nearby devices, unlike single-device edge processing or distant cloud analytics."
   }
  ]
 },
 "iot-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A smart sensor buried in a farm field or bolted to a bridge cannot have its battery changed every month — someone would have to physically visit it. So power management is one of the most practical concerns in real IoT design, not just a nice-to-have."
    },
    {
     "type": "text",
     "text": "The biggest lever is duty cycling: instead of the microcontroller and radio staying awake all the time, the device sleeps in a very low-power mode and wakes only briefly to take a reading and transmit it, then sleeps again. A device that wakes for 50 milliseconds every 10 minutes can run for years on a small battery, while one left fully awake might last only days."
    },
    {
     "type": "code",
     "lang": "cpp",
     "code": "#include <iostream>\nusing namespace std;\n\nfloat readSensor() { return 24.6f; }          // stand-in for a real sensor read\nvoid sendToCloud(float reading) {             // stand-in for a real network send\n  cout << \"Sending reading: \" << reading << endl;\n}\nvoid deepSleep(long seconds) {                // stand-in for esp_deep_sleep()\n  cout << \"Sleeping for \" << seconds << \" seconds\" << endl;\n}\n\nint main() {\n  float reading = readSensor();\n  sendToCloud(reading);\n  deepSleep(10 * 60); // sleep 10 minutes, then wake and repeat\n  return 0;\n}"
    },
    {
     "type": "tip",
     "text": "Remember the three big power costs, in rough order: the radio transmitting data usually draws the most power, then the CPU running, then a sleeping sensor drawing almost nothing. Cutting how often and how long the radio is on saves the most battery."
    },
    {
     "type": "text",
     "text": "Energy harvesting takes this further by removing the battery-replacement problem altogether: small solar panels, piezoelectric strips that generate power from vibration, or thermoelectric generators that use a temperature difference can trickle-charge a tiny capacitor, letting a sensor run indefinitely off ambient energy instead of a fixed battery."
    }
   ],
   "recap": "IoT devices save battery mainly through duty cycling — sleeping deeply and waking briefly to sense and transmit — and some deployments remove the battery problem entirely using energy harvesting from solar, vibration, or heat."
  },
  "quiz": [
   {
    "q": "What is 'duty cycling' in the context of IoT power management?",
    "options": [
     "Charging the device only once a year",
     "Running the radio continuously at full power",
     "Putting the device into deep sleep most of the time and waking briefly to sense and transmit",
     "Disabling the sensor permanently"
    ],
    "answer": 2,
    "explain": "Duty cycling minimises active time, sleeping deeply between brief wake-sense-transmit cycles to save battery."
   },
   {
    "q": "Which component typically draws the most power in a battery-powered IoT device?",
    "options": [
     "A sleeping sensor",
     "The radio while transmitting data",
     "An unused GPIO pin",
     "The device's plastic casing"
    ],
    "answer": 1,
    "explain": "Radio transmission is usually the most power-hungry operation, more than a sleeping sensor or the idle CPU."
   },
   {
    "q": "What is energy harvesting in IoT?",
    "options": [
     "Manually swapping the battery every week",
     "Turning the device off permanently",
     "Capturing ambient energy such as solar, vibration, or heat to power a device without a fixed battery",
     "Increasing the WiFi signal strength"
    ],
    "answer": 2,
    "explain": "Energy harvesting draws power from the environment, avoiding the need for regular battery replacement."
   }
  ]
 },
 "iot-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A single sensor sends a trickle of readings, but a real IoT deployment — a smart city's traffic sensors, or a factory's thousands of machine sensors — produces a flood of data arriving continuously. This is where IoT meets big data: the volume, velocity, and variety of readings is too much for a normal database query pattern to handle well."
    },
    {
     "type": "text",
     "text": "Engineers usually split IoT analytics into two lanes. Stream processing (or 'hot path') looks at data the instant it arrives, to catch things that need an immediate reaction — a machine vibrating dangerously, or a spike in a heart-rate monitor. Batch processing (the 'cold path') stores everything and later runs deep analysis across weeks or months of history, for trends like 'which machines fail most in summer'."
    },
    {
     "type": "tip",
     "text": "Remember it as 'hot path reacts, cold path reflects.' Hot path answers 'what's happening right now?'; cold path answers 'what's the pattern over time?' A well-designed IoT analytics system usually needs both."
    },
    {
     "type": "text",
     "text": "Time-series databases (like InfluxDB or TimescaleDB) are commonly used to store IoT data efficiently, because almost every IoT reading is a timestamped value, and these databases are built to compress and query that pattern far faster than a generic table would."
    },
    {
     "type": "text",
     "text": "The end goal of all this analysis is usually predictive maintenance in industry (spotting a failing bearing before it breaks) or better decisions in daily life (a smart city retiming traffic lights based on real congestion patterns) — turning huge volumes of raw sensor noise into a small number of useful, timely insights."
    }
   ],
   "recap": "IoT deployments produce huge volumes of continuous data, handled through stream processing for immediate reactions and batch processing for long-term trend analysis, often stored in time-series databases, aiming at goals like predictive maintenance."
  },
  "quiz": [
   {
    "q": "What is the main purpose of 'stream processing' (the hot path) in IoT analytics?",
    "options": [
     "Deleting old sensor readings",
     "Reacting immediately to data as it arrives, such as detecting a dangerous vibration",
     "Storing data for years without ever reading it",
     "Only running once a year"
    ],
    "answer": 1,
    "explain": "Stream processing analyses data the moment it arrives so the system can react in real time."
   },
   {
    "q": "Why are time-series databases commonly used for IoT data?",
    "options": [
     "They are built to efficiently store and query timestamped readings, which is what most IoT data is",
     "They are slower than normal databases for this purpose",
     "They require no timestamps at all",
     "They can only store text, not numbers"
    ],
    "answer": 0,
    "explain": "Time-series databases are optimised for the timestamp-plus-value pattern typical of IoT sensor readings."
   },
   {
    "q": "What is 'predictive maintenance' as a goal of IoT big data analytics?",
    "options": [
     "Spotting signs of a failing part before it actually breaks, using sensor data trends",
     "Replacing all machines every year regardless of condition",
     "Waiting for a machine to break before fixing it",
     "Ignoring sensor data entirely"
    ],
    "answer": 0,
    "explain": "Predictive maintenance uses analysed sensor trends to catch failures early, before a breakdown occurs."
   }
  ]
 },
 "iot-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Sending every reading to the cloud for a machine-learning model to analyse costs bandwidth, battery, and time. TinyML flips this: it runs a small, already-trained machine-learning model directly on a microcontroller — the same kind of tiny chip you met running Arduino code — so the device can make smart decisions on its own, with no network connection needed at all."
    },
    {
     "type": "text",
     "text": "A classic example is a microphone-equipped microcontroller trained to recognise a single spoken word ('wake up') or detect glass breaking, running entirely on-device, using only a few kilobytes of memory and milliwatts of power — orders of magnitude less than a phone or laptop running the same kind of model."
    },
    {
     "type": "code",
     "lang": "python",
     "code": "# Training happens on a normal computer, then the model is converted\n# and shrunk to run on a microcontroller. Simplified idea:\nimport tensorflow as tf\n\n# train a small model first (a few lines of a real network)\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(8, activation=\"relu\", input_shape=(4,)),\n    tf.keras.layers.Dense(1)\n])\nmodel.compile(optimizer=\"adam\", loss=\"mse\")\n# ... model.fit(...) would go here ...\n\nconverter = tf.lite.TFLiteConverter.from_keras_model(model)\nconverter.optimizations = [tf.lite.Optimize.DEFAULT]\ntflite_model = converter.convert()  # now small enough for a microcontroller"
    },
    {
     "type": "tip",
     "text": "TinyML models are trained on a powerful computer first, then compressed ('quantised') to fit a device with kilobytes of memory — training is heavy, running the finished model on the device is light."
    },
    {
     "type": "text",
     "text": "TinyML matters for privacy (audio or images never leave the device), for speed (a decision in milliseconds, not a round trip to the cloud), and for reliability (it keeps working with no internet at all) — making it a natural fit for battery-powered, always-listening or always-watching sensors."
    }
   ],
   "recap": "TinyML runs a small, pre-trained machine-learning model directly on a low-power microcontroller, giving instant, private, offline-capable intelligence instead of sending every reading to the cloud for analysis."
  },
  "quiz": [
   {
    "q": "What does TinyML mean?",
    "options": [
     "Deleting machine-learning models to save space",
     "A new type of WiFi protocol",
     "Running a small, already-trained machine-learning model directly on a microcontroller",
     "Training huge models only in the cloud"
    ],
    "answer": 2,
    "explain": "TinyML is about running compact ML models on-device, on low-power microcontrollers."
   },
   {
    "q": "Why might a battery-powered device use TinyML instead of sending data to the cloud for analysis?",
    "options": [
     "To make the device more expensive",
     "Because microcontrollers cannot run any code",
     "To use more bandwidth and battery",
     "For faster, private, offline-capable decisions without a network round trip"
    ],
    "answer": 3,
    "explain": "On-device inference avoids network delay, preserves privacy, and works without internet connectivity."
   },
   {
    "q": "Where does the heavy training step for a TinyML model usually happen?",
    "options": [
     "On a normal, more powerful computer, before the model is shrunk to fit the device",
     "On the microcontroller itself",
     "Only on a smartphone",
     "It never happens; models appear ready-made"
    ],
    "answer": 0,
    "explain": "Training is computationally heavy and done on a powerful machine first; the trained model is then compressed for the tiny device."
   }
  ]
 },
 "iot-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You've already met the basic defences — strong passwords, TLS encryption, and patchable firmware. Now go one level deeper into how security engineers actually think about protecting an IoT system: threat modeling, the practice of listing out, before building anything, everything that could go wrong and who might try to make it go wrong."
    },
    {
     "type": "text",
     "text": "A common framework is STRIDE: Spoofing (pretending to be a trusted device), Tampering (altering data or firmware), Repudiation (denying an action happened), Information disclosure (leaking private data), Denial of service (flooding a device or server so it can't respond), and Elevation of privilege (gaining more access than intended). Walking through each letter for a design reveals gaps a checklist alone would miss."
    },
    {
     "type": "tip",
     "text": "In an interview, if asked 'how would you secure this IoT product', naming STRIDE and picking one or two realistic threats per category shows structured thinking, rather than just saying 'add encryption' and stopping there."
    },
    {
     "type": "text",
     "text": "Secure boot is a hardware-backed defence against tampered firmware: the chip checks a cryptographic signature on its own firmware before running it, and refuses to boot code that isn't properly signed by the manufacturer. This stops an attacker who gains physical or network access from silently swapping in malicious firmware."
    },
    {
     "type": "text",
     "text": "A hardware security module or a Trusted Platform Module (TPM) — a small dedicated security chip — stores cryptographic keys in a way that's very hard to extract even with physical access to the device, which matters because IoT devices, unlike cloud servers, are often physically reachable by an attacker."
    }
   ],
   "recap": "Threat modeling frameworks like STRIDE help engineers systematically list what could go wrong before building a system, while hardware defences like secure boot and TPMs protect against tampered firmware and stolen cryptographic keys — a level deeper than the basic encryption-and-passwords defences."
  },
  "quiz": [
   {
    "q": "What does 'threat modeling' mean in IoT security?",
    "options": [
     "Systematically listing what could go wrong and who might attack the system, before it's built",
     "Ignoring security until launch",
     "Only encrypting data after an attack happens",
     "Buying more sensors"
    ],
    "answer": 0,
    "explain": "Threat modeling is a proactive process of identifying possible attacks and weaknesses during design."
   },
   {
    "q": "What does 'secure boot' protect against?",
    "options": [
     "A dead battery",
     "The device running tampered or unsigned firmware",
     "Slow WiFi speeds",
     "Sensor calibration drift"
    ],
    "answer": 1,
    "explain": "Secure boot checks a cryptographic signature before running firmware, blocking malicious or altered code."
   },
   {
    "q": "In the STRIDE framework, what does the 'S' stand for?",
    "options": [
     "Spoofing — pretending to be a trusted device",
     "Speed",
     "Storage",
     "Scaling"
    ],
    "answer": 0,
    "explain": "STRIDE's S stands for Spoofing, one of six threat categories used to structure security analysis."
   },
   {
    "q": "Why do IoT devices often need extra protection for stored cryptographic keys, compared to a cloud server?",
    "options": [
     "Physical access is impossible for IoT devices",
     "IoT devices are often physically reachable by attackers, unlike a locked-away server",
     "Cloud servers have no security at all",
     "IoT devices never store any keys"
    ],
    "answer": 1,
    "explain": "Because attackers can often physically access IoT devices, hardware-backed key storage like a TPM is especially important."
   }
  ]
 },
 "iot-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Imagine buying a smart bulb from one company and a smart speaker from another, expecting them to work together — that only happens because of standards. Without agreed rules for how devices describe themselves and talk to each other, every manufacturer's ecosystem would be its own isolated island."
    },
    {
     "type": "text",
     "text": "oneM2M is an international standard that defines a common way for devices, applications, and platforms from different vendors to exchange data, so a temperature sensor from one company can be understood by a dashboard built by a completely different company, without custom one-off integration work."
    },
    {
     "type": "text",
     "text": "More recently, Matter is an industry-backed smart-home standard (built on IP networking, including 6LoWPAN-style low-power links and WiFi) designed so that lights, locks, and thermostats from competing brands can be controlled from one single app, addressing the very real problem of a home full of five different incompatible smart-home apps."
    },
    {
     "type": "tip",
     "text": "When a question mentions 'interoperability' or 'vendor lock-in', it's pointing at standards like oneM2M or Matter — the whole point of a standard is to stop customers being trapped by a single manufacturer's ecosystem."
    },
    {
     "type": "text",
     "text": "Interoperability isn't only a consumer convenience — in Industrial IoT, standards let a factory mix sensors and machines from different suppliers into one monitoring system, and let a hospital's medical devices from different manufacturers report into one patient dashboard safely and predictably."
    }
   ],
   "recap": "IoT standards like oneM2M and Matter define common ways for devices from different vendors to describe themselves and exchange data, solving the interoperability and vendor-lock-in problems that would otherwise fragment every smart ecosystem."
  },
  "quiz": [
   {
    "q": "What problem do IoT standards like oneM2M and Matter solve?",
    "options": [
     "They remove the need for any network at all",
     "They make hardware more expensive",
     "They let devices from different vendors understand and interoperate with each other",
     "They only apply to a single manufacturer's products"
    ],
    "answer": 2,
    "explain": "Standards define common data and communication rules so multi-vendor devices can work together."
   },
   {
    "q": "Why does 'vendor lock-in' matter to an IoT customer?",
    "options": [
     "It has no real effect on the customer",
     "It makes devices cheaper",
     "It is only a concern for cloud servers",
     "Without standards, a customer may be stuck buying only one brand's compatible devices forever"
    ],
    "answer": 3,
    "explain": "Vendor lock-in traps customers within one ecosystem; standards reduce this by enabling cross-brand compatibility."
   },
   {
    "q": "In Industrial IoT, why is interoperability especially valuable?",
    "options": [
     "It requires removing all sensors",
     "It only benefits smart-home consumers, not factories",
     "It prevents any data from being collected",
     "It lets a factory mix sensors and machines from different suppliers into one monitoring system"
    ],
    "answer": 3,
    "explain": "Interoperability allows a factory or hospital to unify equipment from multiple vendors into one coherent system."
   }
  ]
 },
 "iot-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Industrial IoT (IIoT) applies everything you've learned to factories, power plants, and heavy machinery, where a single unplanned breakdown can cost far more than a delayed phone notification ever would. It's a favourite interview topic precisely because it forces you to combine sensing, connectivity, analytics, and security into one coherent story."
    },
    {
     "type": "text",
     "text": "A predictive maintenance system for a factory motor might work like this: vibration and temperature sensors (perception layer) attached to the motor stream readings over an industrial wireless protocol to a local fog node, which filters noise and checks against known-bad vibration patterns in real time (the hot path). Anything unusual is flagged instantly to a supervisor, while all raw data is also sent to the cloud (the cold path) where a machine-learning model, trained on months of past failures, refines its prediction of 'this bearing will likely fail within two weeks.'"
    },
    {
     "type": "tip",
     "text": "When designing an IIoT answer for an exam or interview, walk through it layer by layer and path by path: perception, network, fog/edge for fast reaction, cloud for deep analysis, and security threaded through all of it. That structure alone earns most of the marks."
    },
    {
     "type": "text",
     "text": "The payoff of predictive maintenance is replacing two costly strategies: reactive maintenance (fix it only after it breaks, causing unplanned downtime) and scheduled maintenance (replace parts on a fixed calendar whether they need it or not, wasting good parts). Predicting failure lets a factory replace exactly the right part, exactly when it's actually needed."
    },
    {
     "type": "text",
     "text": "Security threads through the whole story too: the vibration sensors need authentication so a false reading can't be injected to hide a real fault, and the fog node's decision logic needs integrity checks so it isn't tricked into ignoring a genuine warning."
    }
   ],
   "recap": "Industrial IoT combines sensing, fog computing for fast local reaction, cloud analytics for deep prediction, and security throughout — predictive maintenance is the classic payoff, replacing costly reactive or fixed-schedule maintenance with fixing exactly the right part at exactly the right time."
  },
  "quiz": [
   {
    "q": "In the predictive-maintenance example, what role does the fog node play?",
    "options": [
     "It only handles billing",
     "It filters noise and reacts instantly to known-bad patterns locally, before data reaches the cloud",
     "It replaces the need for any sensors",
     "It stores data for a hundred years untouched"
    ],
    "answer": 1,
    "explain": "The fog node provides fast local filtering and immediate reaction, complementing deeper cloud-based analysis."
   },
   {
    "q": "What is the main advantage of predictive maintenance over scheduled (fixed-calendar) maintenance?",
    "options": [
     "It replaces parts more often than necessary",
     "It removes the need for any maintenance at all",
     "It only works if the factory has no sensors",
     "It replaces the right part exactly when it's actually needed, avoiding wasted good parts and unplanned downtime"
    ],
    "answer": 3,
    "explain": "Predictive maintenance targets the true point of failure, avoiding both wasted parts and unexpected breakdowns."
   },
   {
    "q": "Why does security matter for the vibration sensors in this IIoT example?",
    "options": [
     "Security is not relevant to industrial sensors",
     "Sensors cannot be attacked physically",
     "Security only applies to cloud servers, not sensors",
     "Without authentication, a false reading could be injected to hide a real fault"
    ],
    "answer": 3,
    "explain": "Authenticating sensor data prevents attackers from injecting fake readings that could mask a genuine problem."
   }
  ]
 },
 "iot-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "This is the level a placement interviewer or a final exam design question actually tests: given a vague brief like 'design a smart parking system for a city', can you produce a coherent system using everything you've learned, not just recall isolated facts?"
    },
    {
     "type": "text",
     "text": "Start with the four layers as your skeleton. Perception: an ultrasonic or magnetic sensor per parking spot detects occupancy. Network: since spots are spread across a large area with modest data (just occupied/free), LPWAN (LoRaWAN or NB-IoT) fits far better than WiFi, which would need power-hungry routers everywhere. Middleware: an IoT platform with a device registry and shadows tracks every sensor's status, feeding a rules engine that flags any sensor gone silent as a maintenance issue. Application: a driver's app shows free spots on a map in real time and could suggest the nearest one."
    },
    {
     "type": "tip",
     "text": "In a design interview, always justify your protocol and layer choices against the scenario's actual constraints (data size, area, power, latency) instead of naming the 'best-known' technology by reflex — a correct-sounding choice with no justification earns far fewer marks than a modest choice explained well."
    },
    {
     "type": "text",
     "text": "Layer in the cross-cutting concerns next: security (each sensor authenticated, data encrypted, firmware patchable over the air), power (battery-only sensors need deep sleep and infrequent reporting, since parking status doesn't need second-by-second updates), and analytics (cold-path history reveals which streets are chronically full, informing city planning, while hot-path handles the live map)."
    },
    {
     "type": "text",
     "text": "Finally, mention what could go wrong and how the design tolerates it: a sensor's battery dying should degrade gracefully (mark that spot 'unknown', not 'free'), and the fog/cloud split should mean a temporary internet outage doesn't stop the local system from still functioning for nearby users."
    }
   ],
   "recap": "Designing a full IoT system means applying the four-layer architecture to a real scenario, justifying each protocol and platform choice against the scenario's actual data size, area, and power constraints, and explicitly addressing security, power, and failure modes — exactly what an interview or final design question is testing."
  },
  "quiz": [
   {
    "q": "For a city-wide smart parking system with spread-out sensors sending tiny occupied/free updates, which connectivity choice is usually best justified?",
    "options": [
     "An LPWAN technology like LoRaWAN or NB-IoT",
     "High-definition video streaming from each spot",
     "A wired Ethernet cable to every sensor",
     "WiFi routers at every parking spot"
    ],
    "answer": 0,
    "explain": "LPWAN suits small, infrequent data over a wide area with long battery life, unlike power-hungry WiFi infrastructure everywhere."
   },
   {
    "q": "In a strong system-design answer, what matters more than naming the 'best-known' technology?",
    "options": [
     "Avoiding any mention of security",
     "Justifying each choice against the scenario's actual constraints like data size, area, and power",
     "Always picking the most expensive option",
     "Naming as many buzzwords as possible"
    ],
    "answer": 1,
    "explain": "Interviewers value reasoned trade-offs matched to the scenario over reflexive naming of trendy technology."
   },
   {
    "q": "If a parking sensor's battery dies, what is the more graceful design choice?",
    "options": [
     "Silently deleting that parking spot from the map forever",
     "Marking that spot as 'unknown' rather than incorrectly showing it as 'free'",
     "Crashing the entire application for all users",
     "Ignoring the failure and showing random data"
    ],
    "answer": 1,
    "explain": "Graceful degradation means failure is visible and honest (unknown), not silently or incorrectly reported as free."
   },
   {
    "q": "Why is addressing failure modes (like a temporary internet outage) part of a good IoT design answer?",
    "options": [
     "It replaces the need for any sensors",
     "Failure modes are irrelevant to IoT design",
     "It shows the system was designed to keep working for local/nearby cases even when part of it fails",
     "It proves the system never needs the cloud"
    ],
    "answer": 2,
    "explain": "Good designs anticipate real-world failures like connectivity loss and keep essential local functions working anyway."
   }
  ]
 }
}
