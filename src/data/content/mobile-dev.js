// Lesson text and quiz questions for "Mobile App Development".
// Loaded on demand by loadLevelContent() in ../tracks.js — never in the main bundle.
// Generated content: regenerate rather than hand-editing.

export default {
 "mobile-dev-1": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A mobile app is a program that runs on a phone or tablet. Almost every phone on Earth runs one of two operating systems: Android (made by Google, used by Samsung, Xiaomi, OnePlus and many brands) or iOS (made by Apple, used only on iPhones and iPads). As a developer, deciding which one(s) you target is the first big decision."
    },
    {
     "type": "text",
     "text": "The two platforms are different worlds. Android's official language is Kotlin (Java also works), its design toolkit is Jetpack Compose, and you build with Android Studio. iOS uses the Swift language, the SwiftUI toolkit, and Apple's Xcode — which only runs on a Mac. So the tools, languages, and even the computer you code on can differ per platform."
    },
    {
     "type": "tip",
     "text": "Think of Android and iOS like two countries with different languages and plug sockets. An app written for one won't just run on the other — you either rewrite it, or use a 'translator' (a cross-platform tool, coming in Level 2)."
    },
    {
     "type": "text",
     "text": "Apps are distributed through stores: the Google Play Store for Android and the Apple App Store for iOS. Each store reviews your app, charges a developer fee, and enforces rules. Android also allows 'sideloading' (installing an app file directly), while iOS is much more locked down."
    }
   ],
   "recap": "Android and iOS are the two dominant mobile platforms, each with its own languages, tools, and app store."
  },
  "quiz": [
   {
    "q": "Which language is Apple's official choice for building iOS apps?",
    "options": [
     "Swift",
     "Java",
     "Kotlin",
     "C#"
    ],
    "answer": 0,
    "explain": "Swift is Apple's modern language for iOS, paired with the SwiftUI toolkit and Xcode."
   },
   {
    "q": "What tool do you use to build native Android apps?",
    "options": [
     "Visual Studio for Mac",
     "Xcode",
     "Notepad",
     "Android Studio"
    ],
    "answer": 3,
    "explain": "Android Studio is Google's official IDE for Android development."
   },
   {
    "q": "Where do users normally download iOS apps?",
    "options": [
     "Microsoft Store",
     "The Apple App Store",
     "Sideloading a file",
     "Google Play Store"
    ],
    "answer": 1,
    "explain": "iOS apps are distributed through Apple's App Store, which reviews every submission."
   },
   {
    "q": "Why can't a native Android app simply run on an iPhone?",
    "options": [
     "iPhones have no storage",
     "The platforms use different OSes, languages, and toolkits",
     "Android is illegal on Apple devices",
     "Apps are too large"
    ],
    "answer": 1,
    "explain": "Android and iOS are separate operating systems with different languages and APIs, so native code isn't portable between them."
   }
  ]
 },
 "mobile-dev-2": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Building two separate apps (one in Swift, one in Kotlin) means writing everything twice. That's expensive and slow. So developers invented cross-platform frameworks: you write your code once, and the framework produces apps for both Android and iOS. The trade-off is a classic engineering decision between control and efficiency."
    },
    {
     "type": "text",
     "text": "Native development means using each platform's own tools directly. It gives the best performance, instant access to new OS features, and the most polished feel — but you maintain two codebases. Cross-platform means one codebase for both, which saves huge amounts of time, at the cost of some performance and occasional gaps when a brand-new device feature isn't supported yet."
    },
    {
     "type": "text",
     "text": "The two most popular cross-platform frameworks are Flutter (by Google, using the Dart language, which draws its own UI) and React Native (by Meta, using JavaScript, which drives real native UI components). Both let a small team ship to millions of users on both platforms."
    },
    {
     "type": "code",
     "code": "// A simple Flutter widget (Dart) that runs on Android AND iOS\nimport 'package:flutter/material.dart';\n\nclass Greeting extends StatelessWidget {\n  const Greeting({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return const Text('Hello, mobile world!');\n  }\n}",
     "lang": "dart"
    },
    {
     "type": "tip",
     "text": "Rule of thumb: choose native when you need maximum performance or deep hardware access (a high-end game, AR). Choose cross-platform when speed of delivery and one team matter most (most business apps)."
    }
   ],
   "recap": "Native gives top performance with two codebases; cross-platform frameworks like Flutter and React Native trade a little performance for a single shared codebase."
  },
  "quiz": [
   {
    "q": "What is the main advantage of a cross-platform framework?",
    "options": [
     "It only works on iPhones",
     "One codebase produces apps for both Android and iOS",
     "It runs faster than native code",
     "It removes the need for an app store"
    ],
    "answer": 1,
    "explain": "Cross-platform tools let you write code once and ship to both platforms, saving time and effort."
   },
   {
    "q": "Which language does Flutter use?",
    "options": [
     "JavaScript",
     "Dart",
     "Kotlin",
     "Swift"
    ],
    "answer": 1,
    "explain": "Flutter apps are written in Dart, and Flutter draws the UI itself."
   },
   {
    "q": "When is native development usually the better choice?",
    "options": [
     "When you want to ship as fast as possible",
     "When you need maximum performance or deep hardware access",
     "When you have no Mac",
     "For a simple to-do list"
    ],
    "answer": 1,
    "explain": "Native development gives the best performance and immediate access to platform features, ideal for demanding apps."
   },
   {
    "q": "React Native is primarily based on which language?",
    "options": [
     "C++",
     "JavaScript",
     "Dart",
     "Ruby"
    ],
    "answer": 1,
    "explain": "React Native lets developers build mobile apps using JavaScript that drives native UI components."
   }
  ]
 },
 "mobile-dev-3": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Unlike a desktop program that mostly stays open until you close it, a mobile app is constantly being started, paused, hidden, and resumed as the user switches apps, takes a call, or locks the screen. The operating system controls this through a series of lifecycle states, and it notifies your app each time it moves between them."
    },
    {
     "type": "text",
     "text": "A typical flow: the app is Created (its screen is being set up), moves to Started/Resumed (visible and interactive in the foreground), then Paused (still visible but not focused, e.g. a dialog appears), then Stopped (fully hidden in the background), and possibly Destroyed (removed from memory). Your job is to react correctly at each step."
    },
    {
     "type": "text",
     "text": "Why it matters: when your app goes to the background, you should save the user's work and release resources like the camera or GPS so you don't drain the battery or lose data. When it returns to the foreground, you reload that state. Ignoring the lifecycle causes bugs like lost form data or a camera that stays on and heats the phone."
    },
    {
     "type": "code",
     "code": "// Android (Kotlin) Activity lifecycle callbacks\nclass MainActivity : AppCompatActivity() {\n    override fun onResume() {\n        super.onResume()\n        // App is in the foreground: start the camera preview\n    }\n\n    override fun onPause() {\n        super.onPause()\n        // App is leaving the foreground: save data, stop the camera\n    }\n}",
     "lang": "kotlin"
    },
    {
     "type": "tip",
     "text": "Analogy: think of your app like a stove. When you leave the kitchen (background), turn the burners off (release the camera/GPS and save state). When you come back (foreground), turn them on again."
    }
   ],
   "recap": "The OS moves your app through lifecycle states (created, resumed, paused, stopped); react to each to save state and free resources."
  },
  "quiz": [
   {
    "q": "Why does mobile use a lifecycle instead of just running until closed?",
    "options": [
     "To make apps slower",
     "To use more battery",
     "Because users constantly switch, and the OS pauses/resumes apps",
     "Because phones have no memory"
    ],
    "answer": 2,
    "explain": "Phones interrupt and background apps frequently, so the OS signals state changes your app must handle."
   },
   {
    "q": "What should your app typically do when it moves to the background?",
    "options": [
     "Save state and release resources like the camera",
     "Open another app",
     "Delete all user data",
     "Speed up the CPU"
    ],
    "answer": 0,
    "explain": "Backgrounding is the moment to save work and free resources so you don't waste battery or lose data."
   },
   {
    "q": "In Android, which callback fires when the app becomes interactive in the foreground?",
    "options": [
     "onPause()",
     "onDestroy()",
     "onResume()",
     "onStop()"
    ],
    "answer": 2,
    "explain": "onResume() is called when the activity is in the foreground and ready for user interaction."
   },
   {
    "q": "A common bug from ignoring the lifecycle is:",
    "options": [
     "Lost form data or a camera left running",
     "The app changes color",
     "The phone reboots",
     "The store rejects the app"
    ],
    "answer": 0,
    "explain": "Failing to save state on pause or release resources leads to lost data and battery-draining leaks."
   }
  ]
 },
 "mobile-dev-4": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A mobile UI is what the user sees and touches: buttons, text, images, lists, and input fields arranged on the screen. Modern mobile development uses declarative UI: instead of manually adding and moving widgets step by step, you describe what the screen should look like for a given state, and the framework figures out how to draw and update it."
    },
    {
     "type": "text",
     "text": "UIs are built from small reusable pieces. In SwiftUI and Jetpack Compose these are called views/composables; in Flutter they're widgets. You nest them — a column containing a text and a button — to form a tree. Layout containers like Row, Column, and Stack arrange children horizontally, vertically, or on top of each other."
    },
    {
     "type": "code",
     "code": "// SwiftUI: a declarative screen with state\nstruct CounterView: View {\n    @State private var count = 0\n\n    var body: some View {\n        VStack {\n            Text(\"Taps: \\(count)\")\n            Button(\"Tap me\") { count += 1 }\n        }\n    }\n}",
     "lang": "swift"
    },
    {
     "type": "text",
     "text": "The key idea is state-driven UI. When a value (like count above) changes, the framework automatically re-renders the parts of the screen that depend on it. You never manually set the label text — you change the state, and the UI follows. This makes complex, interactive screens far easier to reason about."
    },
    {
     "type": "tip",
     "text": "Design for thumbs and small screens: make tap targets large (about 48dp), avoid tiny text, and test on different screen sizes. What looks fine on your laptop emulator can be cramped on a real phone."
    }
   ],
   "recap": "Modern mobile UIs are declarative and state-driven: you describe the screen from small reusable components, and it re-renders automatically when state changes."
  },
  "quiz": [
   {
    "q": "In declarative UI, how do you update what's on screen?",
    "options": [
     "Restart the app",
     "Redraw pixel by pixel",
     "Change the state and let the framework re-render",
     "Manually edit each widget's text"
    ],
    "answer": 2,
    "explain": "Declarative UIs re-render automatically when the underlying state changes."
   },
   {
    "q": "What is the small reusable UI building block called in Flutter?",
    "options": [
     "A widget",
     "A daemon",
     "A servlet",
     "A cursor"
    ],
    "answer": 0,
    "explain": "Flutter builds its entire interface from nested widgets."
   },
   {
    "q": "Which container arranges its children vertically?",
    "options": [
     "Grid of one cell",
     "Column/VStack",
     "Row",
     "Stack"
    ],
    "answer": 1,
    "explain": "A Column (Jetpack Compose/Flutter) or VStack (SwiftUI) stacks children top to bottom."
   },
   {
    "q": "A good UI practice for touch screens is:",
    "options": [
     "Hide all text",
     "Use the smallest possible buttons",
     "Make tap targets large enough for a thumb",
     "Avoid testing on real phones"
    ],
    "answer": 2,
    "explain": "Large tap targets (~48dp) make the app usable by thumbs on small screens."
   }
  ]
 },
 "mobile-dev-5": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Most useful apps don't work alone — they talk to servers over the internet to fetch and send data. This is done through APIs (Application Programming Interfaces), usually REST APIs that exchange data in JSON format over HTTP. Your app sends a request (e.g. GET a list of products) and the server sends back a response your app parses and displays."
    },
    {
     "type": "text",
     "text": "Because the network is slow and unreliable, these calls must be asynchronous: the app fires the request and keeps responding to the user while waiting, then handles the result when it arrives. Blocking the main thread to wait would freeze the UI. Languages provide async/await or coroutines to make this clean."
    },
    {
     "type": "code",
     "code": "// Kotlin: an asynchronous network call with coroutines + Retrofit\nsuspend fun loadProducts(): List<Product> {\n    val response = api.getProducts()   // suspends, does not freeze the UI\n    return response.body() ?: emptyList()\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Apps also store data locally so they work offline and load instantly. Options range from simple key-value stores (SharedPreferences on Android, UserDefaults on iOS) for small settings, to full on-device databases like SQLite (via Room or Core Data) for structured data. A common pattern is to show cached local data first, then refresh from the network."
    },
    {
     "type": "tip",
     "text": "Always handle failure: no internet, a timeout, or a 404. Show a friendly message and a retry button. An app that just shows a blank screen when the Wi-Fi drops feels broken."
    }
   ],
   "recap": "Apps fetch and send data via REST/JSON APIs using asynchronous calls, and cache data locally (key-value stores or SQLite) for speed and offline use."
  },
  "quiz": [
   {
    "q": "What format do most REST APIs use to exchange data?",
    "options": [
     "ZIP",
     "MP3",
     "PNG",
     "JSON"
    ],
    "answer": 3,
    "explain": "REST APIs commonly send and receive data as JSON over HTTP."
   },
   {
    "q": "Why must network calls be asynchronous?",
    "options": [
     "To use more data",
     "To make them slower",
     "So waiting doesn't freeze the UI",
     "To avoid using JSON"
    ],
    "answer": 2,
    "explain": "Async calls let the app stay responsive while it waits for a slow network reply instead of blocking the main thread."
   },
   {
    "q": "Which is best for storing structured, queryable data on the device?",
    "options": [
     "A single key-value pair",
     "SQLite (via Room or Core Data)",
     "The clipboard",
     "A JPEG file"
    ],
    "answer": 1,
    "explain": "SQLite-based solutions like Room or Core Data store structured data you can query offline."
   },
   {
    "q": "What should a well-built app do when the network request fails?",
    "options": [
     "Crash immediately",
     "Keep the screen blank forever",
     "Show a nice error and a retry option",
     "Delete the app"
    ],
    "answer": 2,
    "explain": "Gracefully handling failures with a message and retry keeps the app feeling reliable."
   }
  ]
 },
 "mobile-dev-6": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Writing the app is only half the job — shipping it to real users is its own discipline. Before release you create a signed release build. Signing cryptographically proves the app came from you; both stores require it, and losing your signing key can lock you out of updating your own app, so keep it safe (Google's Play App Signing can hold it for you)."
    },
    {
     "type": "text",
     "text": "Android publishes an AAB (Android App Bundle) to the Google Play Console; Google generates optimized APKs per device from it. iOS uploads a build via Xcode to App Store Connect. Both require store listings: an icon, screenshots, a description, a privacy policy, and a content rating. Apple additionally runs a human review that can reject apps for policy or quality reasons, so budget time for it."
    },
    {
     "type": "text",
     "text": "Professionals rarely ship straight to everyone. They use staged rollouts and test tracks — internal, closed (invited testers), and open beta — plus TestFlight on iOS. You release to a small percentage first, watch crash reports and analytics, and expand only if the numbers look healthy. This limits the blast radius of a bad build."
    },
    {
     "type": "code",
     "code": "# Build a signed Android App Bundle for the Play Store\n./gradlew bundleRelease\n# Output: app/build/outputs/bundle/release/app-release.aab",
     "lang": "bash"
    },
    {
     "type": "text",
     "text": "After launch, the work continues: monitor crashes (Firebase Crashlytics), track versions so you can support older releases, and push updates. Modern teams automate build-test-sign-upload with CI/CD pipelines (GitHub Actions, Fastlane) so every release is repeatable and low-risk."
    },
    {
     "type": "tip",
     "text": "Read the store policies before you build features. Apps get rejected for missing privacy disclosures, using restricted permissions, or copying another brand — issues far cheaper to avoid than to fix after a rejection."
    }
   ],
   "recap": "Publishing means creating a safely-signed release build, submitting an AAB/iOS build with a full store listing, rolling out gradually via test tracks, and monitoring crashes while automating releases with CI/CD."
  },
  "quiz": [
   {
    "q": "Why is protecting your app signing key so important?",
    "options": [
     "It hides the app icon",
     "It makes the app faster",
     "Losing it can prevent you from publishing updates",
     "It reduces the file size"
    ],
    "answer": 2,
    "explain": "The signing key proves the app is yours; losing it can lock you out of updating your own app."
   },
   {
    "q": "What format does Google Play prefer for uploading a modern Android app?",
    "options": [
     "A raw ZIP",
     "A JSON file",
     "An AAB (Android App Bundle)",
     "An EXE"
    ],
    "answer": 2,
    "explain": "Google Play uses the Android App Bundle (AAB) to generate device-optimized APKs."
   },
   {
    "q": "What is the benefit of a staged rollout or beta track?",
    "options": [
     "It doubles your revenue automatically",
     "It skips the store review",
     "It limits the impact of a bad build by releasing to few users first",
     "It removes the need for testing"
    ],
    "answer": 2,
    "explain": "Releasing gradually lets you catch problems on a small audience before everyone gets the update."
   },
   {
    "q": "What do CI/CD pipelines like Fastlane or GitHub Actions do for releases?",
    "options": [
     "Guarantee App Store approval",
     "Write the app for you",
     "Design the UI",
     "Automate build, test, sign, and upload steps"
    ],
    "answer": 3,
    "explain": "CI/CD automates the repetitive build-test-sign-upload process so releases are repeatable and low-risk."
   }
  ]
 },
 "mobile-dev-7": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Almost no real app has just one screen. A shopping app has a product list, a product detail page, a cart, and a checkout screen. Moving between these screens in an organized way is called navigation. Get it wrong and users get lost or the back button does something confusing."
    },
    {
     "type": "text",
     "text": "On Android, each full screen used to be an Activity, but modern apps use a single Activity holding multiple Fragments (reusable screen pieces) managed by a Navigation component, which keeps a back stack automatically. On iOS, a UINavigationController pushes and pops view controllers the same way, and SwiftUI has its own NavigationStack."
    },
    {
     "type": "code",
     "code": "// Kotlin: navigating to a detail screen and passing data\nfindNavController().navigate(\n    R.id.action_list_to_detail,\n    bundleOf(\"productId\" to product.id)\n)",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Two common patterns sit on top of simple push/pop navigation: tab navigation (bottom tabs like Home, Search, Profile, each with its own back stack) and drawer navigation (a slide-out side menu). Cross-platform frameworks like Flutter (Navigator) and React Navigation for React Native give you the same three patterns with a similar mental model."
    },
    {
     "type": "tip",
     "text": "Deep linking lets a URL or notification open a specific screen inside your app directly, instead of always landing on the home screen. Exam papers often ask you to name this alongside the back stack."
    }
   ],
   "recap": "Multi-screen apps organize navigation with a back stack (push/pop), plus tab and drawer patterns, and deep links can jump straight to a specific screen."
  },
  "quiz": [
   {
    "q": "What keeps track of which screen to return to when the user presses Back?",
    "options": [
     "The app icon",
     "The manifest file only",
     "The signing key",
     "The back stack"
    ],
    "answer": 3,
    "explain": "The back stack records the order of screens visited so Back can pop them off one at a time."
   },
   {
    "q": "On modern Android, what commonly replaces having a separate Activity per screen?",
    "options": [
     "A single Activity hosting multiple Fragments",
     "Only using web views",
     "A separate app per screen",
     "Storing screens in SQLite"
    ],
    "answer": 0,
    "explain": "Modern Android apps typically use one Activity and swap Fragments managed by the Navigation component."
   },
   {
    "q": "What is deep linking?",
    "options": [
     "A way to sign the app",
     "Compressing app size",
     "A link that opens a specific screen inside the app directly",
     "A type of database index"
    ],
    "answer": 2,
    "explain": "Deep links let a URL or notification take the user straight to a particular screen, not just the home screen."
   },
   {
    "q": "Which navigation pattern uses a slide-out side menu?",
    "options": [
     "Deep linking",
     "Back stack navigation",
     "Drawer navigation",
     "Tab navigation"
    ],
    "answer": 2,
    "explain": "Drawer navigation shows a hidden side panel of destinations that slides in, usually from the left edge."
   }
  ]
 },
 "mobile-dev-8": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "State is any data that can change and that the screen needs to reflect: is the user logged in, is a spinner showing, what did the user type in a search box. Managing state well is the difference between an app that feels solid and one where the UI randomly shows stale or wrong information."
    },
    {
     "type": "text",
     "text": "State comes in layers. Local UI state lives in one screen (is this checkbox ticked). Screen state survives configuration changes like rotation. App-wide state (is the user logged in, what is in the cart) needs to be shared across many screens, so it is usually held in a dedicated object rather than passed manually between every screen."
    },
    {
     "type": "code",
     "code": "// Kotlin (Jetpack Compose): state that survives recomposition\nvar count by remember { mutableStateOf(0) }\nButton(onClick = { count++ }) {\n    Text(\"Clicked $count times\")\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "For app-wide state, both platforms encourage a single source of truth: a ViewModel on Android (survives rotation, is destroyed only when the screen truly closes) or an ObservableObject in SwiftUI. The UI observes this object and redraws automatically whenever the data inside it changes, instead of the UI code manually pushing updates everywhere."
    },
    {
     "type": "tip",
     "text": "A very common bug is losing state on screen rotation, because Android by default destroys and recreates the Activity. Storing state in a ViewModel, not directly in the Activity, fixes this."
    }
   ],
   "recap": "State is changeable data the UI depends on; it is layered into local, screen, and app-wide state, with ViewModels/ObservableObjects acting as the single source of truth the UI observes."
  },
  "quiz": [
   {
    "q": "What is 'state' in an app?",
    "options": [
     "The app's icon file",
     "The store listing description",
     "Any data that can change and that the UI must reflect",
     "The signing certificate"
    ],
    "answer": 2,
    "explain": "State is changeable data like login status, loading spinners, or text input, that the screen must show correctly."
   },
   {
    "q": "Why does a ViewModel help with screen rotation on Android?",
    "options": [
     "It replaces the navigation component",
     "It survives configuration changes that would otherwise destroy the Activity's data",
     "It disables rotation",
     "It compresses the state"
    ],
    "answer": 1,
    "explain": "A ViewModel is designed to outlive configuration changes like rotation, so state isn't lost when the Activity recreates."
   },
   {
    "q": "What does 'single source of truth' mean for app-wide state?",
    "options": [
     "Only one screen can use the data",
     "One shared object holds the current data and the UI observes it, instead of many copies drifting apart",
     "It refers to the app's privacy policy",
     "The data can never change"
    ],
    "answer": 1,
    "explain": "A single source of truth avoids scattered, duplicated state that can become inconsistent across screens."
   },
   {
    "q": "In Jetpack Compose, what does `remember { mutableStateOf(0) }` do?",
    "options": [
     "Holds a piece of state that triggers UI recomposition when it changes",
     "Saves data permanently to disk",
     "Deletes old state",
     "Sends data to a server"
    ],
    "answer": 0,
    "explain": "It creates observable state that the UI redraws automatically whenever its value changes."
   }
  ]
 },
 "mobile-dev-9": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Phones carry a toolbox of hardware an app can tap into: GPS for location, a camera, an accelerometer and gyroscope for motion, a microphone, and Bluetooth. Anything that touches sensitive hardware or personal data is gated behind a permission the user must explicitly grant."
    },
    {
     "type": "text",
     "text": "Both platforms use runtime permissions: instead of asking for everything at install time, the app requests each sensitive permission (camera, location, contacts) right when it is actually needed, with a system dialog the user can allow or deny. Good apps explain why they need a permission before asking, since a bare request out of nowhere gets denied more often."
    },
    {
     "type": "code",
     "code": "// Kotlin: requesting the camera permission at runtime\nif (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)\n        != PackageManager.PERMISSION_GRANTED) {\n    requestPermissions(arrayOf(Manifest.permission.CAMERA), CAMERA_REQUEST_CODE)\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Sensors report continuous data, so apps usually register a listener and read values as they change, for example the accelerometer feeding a step counter or a game's tilt control. Location has extra care: fine GPS location drains the battery fast, so apps request only the accuracy they need and stop listening when the screen isn't visible."
    },
    {
     "type": "tip",
     "text": "Always handle the 'permission denied' case gracefully. If a user denies camera access, don't crash — disable the camera feature and explain what they're missing, so they can turn it on later from Settings."
    }
   ],
   "recap": "Sensitive hardware access (camera, location, sensors) requires runtime permissions the user can grant or deny, and apps should explain why they need each one and handle denial gracefully."
  },
  "quiz": [
   {
    "q": "What is a 'runtime permission'?",
    "options": [
     "A setting only developers can change",
     "A type of app signing key",
     "A permission the app requests right when the feature is needed, with a system dialog the user can allow or deny",
     "A permission requested only at install time"
    ],
    "answer": 2,
    "explain": "Runtime permissions are requested at the moment a sensitive feature is used, not all at once during install."
   },
   {
    "q": "Why should apps limit how often they request fine GPS location?",
    "options": [
     "It has no real cost",
     "GPS location is illegal to use",
     "It makes the UI slower to draw",
     "Continuous fine-location tracking drains the battery quickly"
    ],
    "answer": 3,
    "explain": "High-accuracy location tracking is battery-intensive, so well-built apps request only what they need and stop when not visible."
   },
   {
    "q": "What should a well-designed app do if the user denies a permission?",
    "options": [
     "Keep asking every second",
     "Uninstall itself",
     "Crash immediately",
     "Disable that feature gracefully and explain how to enable it later"
    ],
    "answer": 3,
    "explain": "Gracefully degrading and explaining the option to enable it later respects the user's choice without breaking the app."
   },
   {
    "q": "Which sensor would a step-counting app most directly rely on?",
    "options": [
     "The navigation back stack",
     "The signing key",
     "The microphone",
     "The accelerometer"
    ],
    "answer": 3,
    "explain": "The accelerometer measures motion and is the core sensor used to detect steps."
   }
  ]
 },
 "mobile-dev-10": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "A push notification is a message that appears even when the app is closed, like 'Your order has shipped'. It is one of the main ways apps bring users back without them opening the app first. Notifications are sent from a server, not generated locally, which is what separates them from a simple on-device alarm."
    },
    {
     "type": "text",
     "text": "The flow has three parties. Your app registers with a push service (Firebase Cloud Messaging for Android, Apple Push Notification service for iOS) and receives a unique device token. Your backend server stores that token and, when something happens, sends the message plus the token to the push service, which delivers it to the exact device."
    },
    {
     "type": "code",
     "code": "// Server-side (Node.js) example: sending a push notification via FCM\nconst fcm = { send: async (msg) => console.log(\"Sent:\", msg) };\nconst userDeviceToken = \"device-token-123\";\n\n(async () => {\n  await fcm.send({\n    token: userDeviceToken,\n    notification: { title: \"Order Shipped\", body: \"Your order #4213 is on the way!\" }\n  });\n})();",
     "lang": "javascript"
    },
    {
     "type": "text",
     "text": "On the device, the OS shows the notification even if your app process isn't running, and only wakes your app's code if the user taps it (or for silent/data notifications used to sync data quietly in the background). Users can also mute notification categories individually in system settings, so apps should group notifications sensibly (order updates vs marketing) rather than sending everything under one label."
    },
    {
     "type": "tip",
     "text": "Never spam notifications for things users don't care about. High opt-out rates and even app-store rejections have happened to apps that notify too aggressively — ask for the notification permission with context, not immediately on first launch."
    }
   ],
   "recap": "Push notifications are server-sent messages delivered through a push service (FCM/APNs) to a device token, shown by the OS even when the app is closed, and should be used sparingly and categorized well."
  },
  "quiz": [
   {
    "q": "What uniquely identifies a specific installed app instance for sending it a push notification?",
    "options": [
     "The device token",
     "The app's version number",
     "The app icon",
     "The Wi-Fi password"
    ],
    "answer": 0,
    "explain": "The push service issues a unique device token per app install, which the server uses to target that exact device."
   },
   {
    "q": "Where does the decision to send a push notification usually originate?",
    "options": [
     "The Wi-Fi router",
     "A server, reacting to some event",
     "The device's local clock only",
     "The app store review team"
    ],
    "answer": 1,
    "explain": "Push notifications are typically triggered by a backend server responding to an event, then routed through a push service."
   },
   {
    "q": "What is a 'silent' or 'data' notification typically used for?",
    "options": [
     "Playing loud sounds",
     "Deleting the app",
     "Quietly waking the app to sync data without alerting the user",
     "Requesting a permission"
    ],
    "answer": 2,
    "explain": "Silent notifications carry data payloads used to refresh app content in the background, without a visible alert."
   },
   {
    "q": "Why should apps avoid sending too many notifications?",
    "options": [
     "It increases battery life",
     "It has no downside",
     "It can lead to users muting or uninstalling the app",
     "It is required by law to send at least ten a day"
    ],
    "answer": 2,
    "explain": "Excessive notifications annoy users, leading to opt-outs, muted categories, or uninstalls."
   }
  ]
 },
 "mobile-dev-11": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Some work needs to keep happening even when the user isn't looking at the screen: uploading a photo, downloading a large file, syncing messages, or tracking a run. Doing this on the main thread, or expecting it to keep running forever unsupervised, breaks the app and drains the battery, so both platforms give you dedicated background mechanisms instead."
    },
    {
     "type": "text",
     "text": "Android's modern answer for deferrable background work is WorkManager: you describe a task ('sync data when there's a network connection') and the system decides the best time to run it, even surviving app restarts and device reboots. For work that must run now and be visible to the user, like music playback, a foreground service shows a persistent notification while it runs."
    },
    {
     "type": "code",
     "code": "// Kotlin: scheduling deferrable background work with WorkManager\nval syncRequest = OneTimeWorkRequestBuilder<SyncWorker>()\n    .setConstraints(Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build())\n    .build()\nWorkManager.getInstance(context).enqueue(syncRequest)",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "iOS is stricter about background time to protect battery life: apps get a short window after being backgrounded, plus specific APIs like Background App Refresh and Background Tasks for periodic work. Neither OS lets an app run freely forever in the background — both actively kill misbehaving apps to protect the user's battery and memory."
    },
    {
     "type": "tip",
     "text": "A frequent exam and interview question: why not just use a never-ending background thread? Because the OS will suspend or kill it to save battery — you must use the platform's scheduled/foreground APIs, which the OS trusts and manages."
    }
   ],
   "recap": "Background work uses OS-managed schedulers (WorkManager on Android, Background Tasks on iOS) for deferrable jobs and foreground services for ongoing visible tasks, because the OS actively limits and kills unmanaged background activity."
  },
  "quiz": [
   {
    "q": "What is WorkManager best suited for?",
    "options": [
     "Signing the app",
     "Drawing the UI",
     "Deferrable background tasks that the system schedules at a good time",
     "Storing passwords in plain text"
    ],
    "answer": 2,
    "explain": "WorkManager handles deferrable, guaranteed background work like syncing data, letting the OS choose the optimal time."
   },
   {
    "q": "What does a foreground service require while it runs?",
    "options": [
     "A persistent notification informing the user it's active",
     "A signed release build",
     "Nothing visible to the user",
     "Root access"
    ],
    "answer": 0,
    "explain": "Foreground services must show a persistent notification so the user knows something is actively running."
   },
   {
    "q": "Why can't an app just run an infinite background thread on its own?",
    "options": [
     "It violates JSON formatting rules",
     "It requires a special app icon",
     "It's technically impossible to write",
     "The OS will suspend or kill unmanaged background activity to save battery"
    ],
    "answer": 3,
    "explain": "Both Android and iOS actively limit or terminate background processes that aren't using the sanctioned APIs, to protect battery and memory."
   },
   {
    "q": "Which platform is described as stricter about giving apps background time?",
    "options": [
     "iOS",
     "Android",
     "Neither restricts background time",
     "Both are identical with no limits"
    ],
    "answer": 0,
    "explain": "iOS gives apps a short background window and relies on specific scheduled APIs to protect battery life more tightly."
   }
  ]
 },
 "mobile-dev-12": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "As an app grows past a few screens, dumping all the logic (UI drawing, business rules, data fetching) into one file becomes unmanageable and hard to test. Architecture patterns split responsibilities into clear layers so each piece can be understood, changed, and tested on its own."
    },
    {
     "type": "text",
     "text": "MVC (Model-View-Controller) is the oldest split: Model holds data, View shows it, Controller handles input and updates both. In many mobile MVC implementations the Controller ends up bloated with UI and logic mixed together, which is why newer patterns emerged. MVP (Model-View-Presenter) moves logic into a Presenter that the View calls into, making the View closer to 'dumb' and easier to test."
    },
    {
     "type": "text",
     "text": "MVVM (Model-View-ViewModel), the most common pattern on both platforms today, adds a ViewModel that exposes observable state; the View simply binds to it and redraws automatically when it changes, without the ViewModel needing a direct reference to the View. This is what Android's Jetpack ViewModel and iOS's SwiftUI/Combine are built around."
    },
    {
     "type": "code",
     "code": "// Kotlin: a minimal MVVM ViewModel exposing observable state\nclass ProductViewModel : ViewModel() {\n    private val _products = MutableLiveData<List<Product>>()\n    val products: LiveData<List<Product>> = _products\n\n    fun loadProducts() { _products.value = repository.fetchAll() }\n}",
     "lang": "kotlin"
    },
    {
     "type": "tip",
     "text": "Interviewers love asking 'why MVVM over MVC'. The real answer: separation of concerns makes the app testable (you can test the ViewModel with no UI at all) and survives configuration changes cleanly."
    }
   ],
   "recap": "Architecture patterns like MVC, MVP, and MVVM separate UI, logic, and data so large apps stay testable and maintainable; MVVM, where the View observes a ViewModel's state, is the dominant pattern on modern mobile platforms."
  },
  "quiz": [
   {
    "q": "In MVVM, how does the View typically learn about data changes?",
    "options": [
     "It observes state exposed by the ViewModel and updates automatically",
     "The Controller pushes updates manually",
     "It polls the database every second",
     "It re-reads the manifest file"
    ],
    "answer": 0,
    "explain": "The View binds to observable state in the ViewModel and redraws when that state changes, without manual pushing."
   },
   {
    "q": "What is a common criticism of plain MVC in mobile apps?",
    "options": [
     "It cannot display text",
     "It requires no internet",
     "The Controller often becomes bloated, mixing UI and logic",
     "It only works on iOS"
    ],
    "answer": 2,
    "explain": "In many mobile MVC implementations, the Controller absorbs too much responsibility, becoming hard to maintain."
   },
   {
    "q": "Why is MVVM considered easier to test than mixing everything in one class?",
    "options": [
     "It disables background work",
     "It removes the need for a Model",
     "Tests are not needed in MVVM",
     "The ViewModel can be tested without any UI present"
    ],
    "answer": 3,
    "explain": "Because the ViewModel holds logic and state independent of the View, you can unit test it directly with no UI involved."
   },
   {
    "q": "In MVP, what role does the Presenter play?",
    "options": [
     "It stores data permanently on the server",
     "It holds the presentation logic and the View calls into it, keeping the View simple",
     "It replaces the need for a Model entirely",
     "It signs the app for release"
    ],
    "answer": 1,
    "explain": "MVP moves logic out of the View into a Presenter, so the View stays closer to dumb display code."
   }
  ]
 },
 "mobile-dev-13": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You already know apps cache data locally with SQLite-based tools. Going deeper: Room (Android) and Core Data (iOS) are ORMs — Object-Relational Mappers — that let you work with normal objects in code while they generate the SQL underneath, catching mistakes like malformed queries at compile time instead of at runtime."
    },
    {
     "type": "text",
     "text": "A real app's data model changes over time: you add a column, split a table, rename a field. This means writing a migration, a small script that transforms the old database schema into the new one without losing the user's existing data. Skipping a migration step, or shipping an update without one, is a classic way to corrupt or wipe user data in production."
    },
    {
     "type": "code",
     "code": "// Kotlin: a Room migration adding a new column\nval MIGRATION_1_2 = object : Migration(1, 2) {\n    override fun migrate(db: SupportSQLiteDatabase) {\n        db.execSQL(\"ALTER TABLE products ADD COLUMN discount REAL NOT NULL DEFAULT 0\")\n    }\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Room also supports reactive queries: a query can return a Flow or LiveData that automatically emits a new list whenever the underlying table changes, so the UI updates itself without you manually re-querying. This pairs naturally with the MVVM pattern from the last level — the ViewModel exposes that reactive query straight to the View."
    },
    {
     "type": "tip",
     "text": "Always test migrations, not just new installs. A very common exam and real-world bug: the app works fine for new users but crashes for existing users updating from an older version, because a migration path was never written or tested."
    }
   ],
   "recap": "ORMs like Room and Core Data map objects to SQL and catch query errors early; schema changes need tested migrations to avoid losing or corrupting existing user data, and reactive queries let the UI update itself automatically."
  },
  "quiz": [
   {
    "q": "What does an ORM like Room do?",
    "options": [
     "Sends push notifications",
     "Maps code objects to SQL tables and generates queries, catching errors early",
     "Manages screen navigation",
     "Signs the release build"
    ],
    "answer": 1,
    "explain": "An Object-Relational Mapper lets you work with objects in code while generating and validating SQL underneath."
   },
   {
    "q": "What is a database migration?",
    "options": [
     "A script that transforms an old schema into a new one without losing existing data",
     "Renaming the app package",
     "Moving the app to a new store",
     "Deleting the local database entirely"
    ],
    "answer": 0,
    "explain": "Migrations update the database structure for existing users while preserving their data."
   },
   {
    "q": "What commonly goes wrong if a migration is missing or untested?",
    "options": [
     "Nothing, migrations are optional",
     "The app icon disappears",
     "Existing users updating the app can crash or lose data",
     "New installs stop working"
    ],
    "answer": 2,
    "explain": "Without a correct migration path, users upgrading from an older schema version can hit crashes or corrupted data."
   },
   {
    "q": "What benefit does a reactive query (Flow/LiveData) give in Room?",
    "options": [
     "It removes the need for a schema",
     "It makes SQL run on the server instead",
     "It disables offline access",
     "The UI updates automatically whenever the underlying data changes"
    ],
    "answer": 3,
    "explain": "Reactive queries emit fresh results automatically whenever the table changes, so the UI stays in sync without manual re-querying."
   }
  ]
 },
 "mobile-dev-14": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You met the native-vs-cross-platform tradeoff earlier; now look at how the two leading cross-platform frameworks actually work under the hood, because interviewers often ask you to compare them concretely rather than just say 'one codebase, two platforms'."
    },
    {
     "type": "text",
     "text": "React Native renders using real native UI components: a `<Text>` in your JavaScript becomes an actual native TextView on Android or UILabel on iOS, bridged through JavaScript. Flutter takes a different approach: it draws every pixel itself with its own rendering engine (Skia/Impeller), never touching native UI widgets at all, which gives it very consistent behavior across platforms and less bridge overhead."
    },
    {
     "type": "code",
     "code": "// Flutter (Dart): a simple counter widget\nclass CounterButton extends StatefulWidget {\n  @override\n  State<CounterButton> createState() => _CounterButtonState();\n}\nclass _CounterButtonState extends State<CounterButton> {\n  int count = 0;\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: () => setState(() => count++),\n      child: Text(\"Clicked $count times\"),\n    );\n  }\n}",
     "lang": "dart"
    },
    {
     "type": "text",
     "text": "Because Flutter draws its own widgets, an app looks pixel-identical on Android and iOS, which can be a downside if you actually want each platform's native look and feel. React Native, using real native components, tends to feel more 'at home' on each OS by default but can hit awkward gaps when a native module isn't yet wrapped for JavaScript."
    },
    {
     "type": "tip",
     "text": "A sharp interview answer: 'React Native bridges to native widgets; Flutter renders its own widgets with its own engine.' That one sentence answers most 'compare Flutter and React Native' questions."
    }
   ],
   "recap": "React Native bridges JavaScript to real native UI components, while Flutter draws every widget itself with its own rendering engine — a key architectural difference behind their look, feel, and performance tradeoffs."
  },
  "quiz": [
   {
    "q": "How does Flutter render its UI?",
    "options": [
     "It bridges to real native widgets like React Native",
     "It draws every widget itself using its own rendering engine",
     "It only works inside a web browser",
     "It compiles directly to native XML layouts"
    ],
    "answer": 1,
    "explain": "Flutter paints its own widgets with its own engine (Skia/Impeller) rather than using the platform's native UI components."
   },
   {
    "q": "How does React Native display a `<Text>` component?",
    "options": [
     "As a real native component like a TextView or UILabel, via a bridge",
     "As an image file",
     "It cannot display text",
     "As a custom-drawn pixel widget"
    ],
    "answer": 0,
    "explain": "React Native maps its components to actual native UI elements through a JavaScript bridge."
   },
   {
    "q": "What is a known tradeoff of Flutter's approach?",
    "options": [
     "It requires no programming language",
     "It cannot run on iOS at all",
     "It only supports one screen size",
     "Its UI can look identical across platforms, which may not match each OS's native feel"
    ],
    "answer": 3,
    "explain": "Because Flutter paints its own widgets, the app can look the same everywhere, which some users notice as not quite 'native' on either OS."
   },
   {
    "q": "What is a common downside mentioned for React Native?",
    "options": [
     "Gaps can appear when a native module isn't yet wrapped for JavaScript",
     "It draws every pixel manually",
     "It has no bridge to native code",
     "It cannot use JavaScript"
    ],
    "answer": 0,
    "explain": "Because React Native relies on bridged native modules, missing or immature bridges for a feature can cause friction."
   }
  ]
 },
 "mobile-dev-15": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mobile devices come in wildly different shapes: a small phone, a large phone, a tablet, a foldable that changes size while open, and any of them can rotate between portrait and landscape. A UI built assuming one fixed size looks broken, cramped, or wastes space on everything else."
    },
    {
     "type": "text",
     "text": "The fix is designing in flexible units and rules rather than fixed pixel positions. Android uses ConstraintLayout, where views are pinned relative to each other and the parent, and dp (density-independent pixels) so sizes look consistent across screen densities. iOS uses Auto Layout constraints and Size Classes (compact/regular) to describe how a layout should adapt, and SwiftUI does much of this automatically with stacks."
    },
    {
     "type": "code",
     "code": "<!-- Android ConstraintLayout: a button centered horizontally, pinned below an image -->\n<Button\n    android:layout_width=\"wrap_content\"\n    android:layout_height=\"wrap_content\"\n    app:layout_constraintTop_toBottomOf=\"@id/productImage\"\n    app:layout_constraintStart_toStartOf=\"parent\"\n    app:layout_constraintEnd_toEndOf=\"parent\" />",
     "lang": "xml"
    },
    {
     "type": "text",
     "text": "Adaptive design goes a step further than just resizing: on a tablet you might show a master list and detail pane side by side, while a phone shows only the list and pushes to a new screen for the detail — same data, a genuinely different layout chosen based on available width, not just a stretched version of the phone UI."
    },
    {
     "type": "tip",
     "text": "Never hardcode pixel positions. Test your layout in at least three sizes (small phone, large phone, tablet) and both orientations before calling a screen done — this is exactly what an exam question on 'responsive mobile UI' is checking for."
    }
   ],
   "recap": "Responsive UI uses flexible layout systems (ConstraintLayout, Auto Layout) and density-independent units so screens adapt to different sizes and orientations, while adaptive design changes the actual layout structure (like list-detail on tablets) based on available space."
  },
  "quiz": [
   {
    "q": "Why is designing with fixed pixel positions a problem on mobile?",
    "options": [
     "Fixed positions look fine on every device",
     "It's illegal on app stores",
     "Devices vary widely in screen size, density, and orientation, so fixed layouts break or waste space",
     "It uses too much battery"
    ],
    "answer": 2,
    "explain": "The huge variety of phone, tablet, and foldable screens means fixed positions fail to adapt and often look broken."
   },
   {
    "q": "What does 'dp' (density-independent pixels) achieve on Android?",
    "options": [
     "Consistent visual sizing across screens with different pixel densities",
     "Automatic dark mode",
     "Faster network calls",
     "Smaller app size"
    ],
    "answer": 0,
    "explain": "dp scales with screen density so a UI element looks the same physical size across different-density displays."
   },
   {
    "q": "What is an example of adaptive (not just responsive) design?",
    "options": [
     "Using a fixed pixel width everywhere",
     "Stretching the same single-column layout to fill a tablet screen",
     "Disabling rotation entirely",
     "Showing a list-detail split view on tablets but a single list on phones"
    ],
    "answer": 3,
    "explain": "Adaptive design changes the actual layout structure based on available space, like a genuinely different tablet layout, not just a scaled phone layout."
   },
   {
    "q": "What should you test before considering a screen's layout finished?",
    "options": [
     "Only one phone size in portrait",
     "Nothing, layouts always work",
     "Only the tablet in landscape",
     "Multiple screen sizes and both orientations"
    ],
    "answer": 3,
    "explain": "Testing across several sizes and both orientations catches layout bugs a single test case would miss."
   }
  ]
 },
 "mobile-dev-16": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mobile apps get tested in layers, from fast and narrow to slow and broad. Unit tests check a single function or class in isolation (does this price calculator return the right total), with no UI and no device needed, so they run in seconds and are the cheapest to write and maintain."
    },
    {
     "type": "text",
     "text": "Above that sit UI tests, which drive the actual screen: tap a button, type in a field, check the right text appears. Android uses Espresso, iOS uses XCUITest, and cross-platform tools like Appium can drive either. These are slower (they need an emulator or real device) and more brittle (a UI redesign can break them), so teams write far fewer of them than unit tests — this ratio is often drawn as a 'testing pyramid'."
    },
    {
     "type": "code",
     "code": "// Kotlin (JUnit): a simple unit test for a price calculator\n@Test\nfun applyDiscount_returnsCorrectPrice() {\n    val result = PriceCalculator.applyDiscount(basePrice = 100.0, percentOff = 20)\n    assertEquals(80.0, result, 0.01)\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Real devices matter too: emulators/simulators are fast and free but can't catch every quirk, like a specific manufacturer's camera bug or a low-end device running out of memory. Teams often run automated tests on device farms (Firebase Test Lab, AWS Device Farm) covering many real screen sizes, OS versions, and manufacturers before a release."
    },
    {
     "type": "tip",
     "text": "Remember the testing pyramid shape for exams: many fast unit tests at the base, fewer integration tests in the middle, and the fewest, slowest UI/end-to-end tests at the top."
    }
   ],
   "recap": "Mobile testing layers unit tests (fast, isolated logic), UI tests (Espresso/XCUITest driving real screens), and real-device testing on device farms, following a testing pyramid of many cheap tests and few expensive ones."
  },
  "quiz": [
   {
    "q": "What makes unit tests the cheapest and fastest to run?",
    "options": [
     "They test the whole app end to end",
     "They test a single function or class in isolation, with no UI or device needed",
     "They only run once a year",
     "They require a real phone"
    ],
    "answer": 1,
    "explain": "Unit tests isolate a small piece of logic, so they run in seconds without needing a UI or a device."
   },
   {
    "q": "What is Espresso used for?",
    "options": [
     "Writing SQL migrations",
     "Signing Android release builds",
     "Sending push notifications",
     "Driving and testing the actual Android UI (tapping, typing, checking screens)"
    ],
    "answer": 3,
    "explain": "Espresso is Android's UI testing framework that automates interacting with and asserting on real screens."
   },
   {
    "q": "According to the testing pyramid, how should test counts be distributed?",
    "options": [
     "Equal numbers of every test type",
     "Only end-to-end tests, nothing else",
     "Mostly UI tests, few unit tests",
     "Many unit tests at the base, fewer UI/end-to-end tests at the top"
    ],
    "answer": 3,
    "explain": "The pyramid shape favors many fast, cheap unit tests with progressively fewer slower, broader tests above them."
   },
   {
    "q": "Why do teams still test on real devices or device farms, not just emulators?",
    "options": [
     "Emulators are illegal for testing",
     "Device farms are required by app stores",
     "Real devices can reveal manufacturer-specific bugs and low-memory issues emulators may miss",
     "Emulators cannot run any app"
    ],
    "answer": 2,
    "explain": "Emulators are convenient but can't fully replicate every real device's hardware quirks and constraints."
   }
  ]
 },
 "mobile-dev-17": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Users judge an app harshly on feel: does it launch fast, scroll smoothly, and respond instantly to a tap. The single biggest performance rule on mobile is to keep the main (UI) thread free — it must redraw the screen roughly 60 times a second, and any heavy work done there (parsing a big JSON file, a database query) causes visible jank or a frozen frame."
    },
    {
     "type": "text",
     "text": "The fix is to move slow work off the main thread using coroutines/async tasks, and only hop back to the main thread to update the UI once the result is ready. Lists are a classic hotspot: showing a scrolling list of a thousand items naively (creating a thousand views) is wasteful, which is why RecyclerView/UITableView reuse a small pool of views as items scroll in and out, instead of creating new ones every time."
    },
    {
     "type": "code",
     "code": "// Kotlin: doing heavy work off the main thread, then updating UI on it\nlifecycleScope.launch {\n    val data = withContext(Dispatchers.IO) { repository.loadLargeDataset() }\n    updateUi(data) // back on the main thread automatically\n}",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Images are another common culprit: loading a full-resolution photo into a small thumbnail wastes memory and time, so libraries like Glide/Coil (Android) or SDWebImage (iOS) automatically downsample, cache, and load images asynchronously. Profiling tools (Android Studio Profiler, Xcode Instruments) let you actually measure where time and memory go, rather than guessing."
    },
    {
     "type": "tip",
     "text": "'Jank' is the term for a dropped or delayed frame that makes scrolling look stuttery. If a diploma exam asks what causes jank, the answer is almost always: heavy work blocking the main/UI thread."
    }
   ],
   "recap": "Mobile performance hinges on keeping the main thread free for smooth 60fps rendering, doing heavy work asynchronously, reusing views in lists, and downsampling/caching images, with profilers used to measure rather than guess."
  },
  "quiz": [
   {
    "q": "What is 'jank' in mobile UI?",
    "options": [
     "A dropped or delayed frame causing stuttery scrolling",
     "A push notification style",
     "A type of database migration",
     "A signing error"
    ],
    "answer": 0,
    "explain": "Jank refers to frames that render late or get dropped, usually because the main thread was busy, making motion look stuttery."
   },
   {
    "q": "Why must heavy work be moved off the main thread?",
    "options": [
     "The main thread must redraw the UI smoothly (~60 times a second) and gets blocked by slow work",
     "The main thread has no CPU access",
     "It saves disk space",
     "It is required by app store policy"
    ],
    "answer": 0,
    "explain": "Blocking the main thread with slow work prevents timely redraws, causing visible freezes or jank."
   },
   {
    "q": "Why do RecyclerView/UITableView reuse views instead of creating one per list item?",
    "options": [
     "Because reused views load faster from the network",
     "To save memory and avoid the cost of creating thousands of views",
     "It's required for push notifications",
     "It disables scrolling"
    ],
    "answer": 1,
    "explain": "Recycling a small pool of views as items scroll in and out is far cheaper than creating a new view per item."
   },
   {
    "q": "What do image-loading libraries like Glide/Coil primarily optimize?",
    "options": [
     "Downsampling, caching, and asynchronously loading images to save memory and time",
     "Push notification delivery",
     "Database migrations",
     "App signing"
    ],
    "answer": 0,
    "explain": "These libraries avoid loading full-resolution images into small views and handle caching and async loading automatically."
   }
  ]
 },
 "mobile-dev-18": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Mobile apps often carry sensitive data: passwords, tokens, payment details, personal information. That data can be attacked at rest (sitting on the device), in transit (traveling over the network), or through the app's own code being reverse-engineered, so mobile security has to cover all three."
    },
    {
     "type": "text",
     "text": "For data in transit, always use HTTPS (TLS), never plain HTTP, so traffic can't be read or altered by someone on the same network. For data at rest, never store passwords, tokens, or card numbers in plain SharedPreferences/UserDefaults; use the platform's secure storage — Android Keystore / EncryptedSharedPreferences, iOS Keychain — which is hardware-backed and much harder to extract."
    },
    {
     "type": "code",
     "code": "// Kotlin: storing a token securely instead of in plain SharedPreferences\nval encryptedPrefs = EncryptedSharedPreferences.create(\n    context, \"secure_prefs\",\n    MasterKey.Builder(context).setKeyScheme(MasterKey.KeyScheme.AES256_GCM).build(),\n    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,\n    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM\n)",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "Because an attacker can decompile an installed APK/IPA, never hardcode API keys or secrets directly in client code — assume anything shipped to the device can eventually be read. Sensitive operations (checking a password, calculating a real price) belong on the server, which the client cannot tamper with. Also request only the permissions you truly need: minimizing what an app can access limits the damage if it is ever compromised."
    },
    {
     "type": "tip",
     "text": "A classic exam/interview line: 'never trust the client.' Anything enforced only in the app's code, not on the server, can be bypassed by someone who reverse-engineers the app."
    }
   ],
   "recap": "Mobile security protects data in transit (HTTPS/TLS), data at rest (Keystore/Keychain, never plain storage), and the app's own code (no hardcoded secrets, sensitive logic on the server, minimal permissions)."
  },
  "quiz": [
   {
    "q": "Why should apps use HTTPS instead of plain HTTP?",
    "options": [
     "HTTPS is faster to type",
     "HTTPS encrypts traffic so it can't be easily read or altered in transit",
     "HTTPS uses less battery than HTTP always",
     "HTTP is not supported by app stores at all"
    ],
    "answer": 1,
    "explain": "HTTPS (TLS) encrypts network traffic, protecting data from interception or tampering on the way to the server."
   },
   {
    "q": "Where should a sensitive token be stored on Android?",
    "options": [
     "EncryptedSharedPreferences or the Android Keystore",
     "Plain SharedPreferences",
     "The app's source code as a hardcoded string",
     "A public text file"
    ],
    "answer": 0,
    "explain": "Secure, hardware-backed storage like the Android Keystore protects sensitive data far better than plain preference files."
   },
   {
    "q": "Why is hardcoding a secret API key directly in app code risky?",
    "options": [
     "It makes the app run slower",
     "It is only a problem on iOS",
     "Installed apps can be decompiled, exposing anything hardcoded in the client",
     "It has no risk at all"
    ],
    "answer": 2,
    "explain": "Since an installed app can be reverse-engineered, any secret embedded directly in client code should be assumed exposed."
   },
   {
    "q": "What does 'never trust the client' mean in mobile security?",
    "options": [
     "Critical checks and logic should be enforced on the server, not just in app code",
     "Apps should never connect to a server",
     "Users should never be trusted with data",
     "Client-side validation should never be written at all"
    ],
    "answer": 0,
    "explain": "Anything enforced only on the client can be bypassed by a tampered or reverse-engineered app, so critical logic must live on the server."
   }
  ]
 },
 "mobile-dev-19": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "Accessibility means building an app that people with visual, hearing, motor, or cognitive differences can actually use. This is not a niche feature: it is both an ethical responsibility and, in many countries, a legal requirement, and both major app stores review for basic accessibility support."
    },
    {
     "type": "text",
     "text": "Screen readers (TalkBack on Android, VoiceOver on iOS) read the screen aloud for blind or low-vision users by walking through UI elements one at a time. For this to work, every meaningful element needs a text label a screen reader can announce; an icon-only button with no label is effectively invisible to a screen reader user."
    },
    {
     "type": "code",
     "code": "<!-- Android: giving an icon-only button a label for TalkBack -->\n<ImageButton\n    android:id=\"@+id/deleteButton\"\n    android:src=\"@drawable/ic_delete\"\n    android:contentDescription=\"Delete item\" />",
     "lang": "xml"
    },
    {
     "type": "text",
     "text": "Beyond labels, good accessibility means sufficient color contrast (so low-vision users can read text), touch targets large enough for users with motor difficulties to tap reliably (a commonly cited minimum is around 48dp/44pt), respecting the system's text-size and font-scaling settings, and never conveying information through color alone (add an icon or text too, for colorblind users)."
    },
    {
     "type": "tip",
     "text": "A quick real test: turn on TalkBack or VoiceOver and try using your own app with the screen off. If you get lost or stuck, a real user relying on it would too."
    }
   ],
   "recap": "Accessible apps label every meaningful element for screen readers (TalkBack/VoiceOver), keep good color contrast and large enough touch targets, respect system text scaling, and never rely on color alone to convey meaning."
  },
  "quiz": [
   {
    "q": "What does TalkBack/VoiceOver do?",
    "options": [
     "Encrypts local data",
     "Reads the screen aloud, walking through UI elements for blind or low-vision users",
     "Schedules background sync jobs",
     "Compresses images for faster loading"
    ],
    "answer": 1,
    "explain": "Screen readers like TalkBack and VoiceOver announce UI elements aloud so users who can't see the screen can navigate it."
   },
   {
    "q": "Why does an icon-only button need a contentDescription/accessibility label?",
    "options": [
     "It is required only for buttons with text already",
     "Without it, a screen reader has no text to announce for that button",
     "It changes the button's color",
     "It makes the icon load faster"
    ],
    "answer": 1,
    "explain": "Screen readers rely on text labels; an unlabeled icon-only button is effectively invisible to someone using one."
   },
   {
    "q": "Why should apps avoid conveying information through color alone?",
    "options": [
     "Color always looks the same to everyone",
     "Colorblind users may not perceive the color difference, missing the information",
     "Color is expensive to render",
     "It slows down the main thread"
    ],
    "answer": 1,
    "explain": "Colorblind users can miss color-only cues, so pairing color with an icon or text ensures everyone gets the information."
   },
   {
    "q": "What is a commonly cited minimum touch target size for accessible tap targets?",
    "options": [
     "1dp",
     "Around 48dp/44pt",
     "500dp",
     "There is no recommended minimum"
    ],
    "answer": 1,
    "explain": "Around 48dp (Android) or 44pt (iOS) is the commonly cited minimum so users with motor difficulties can tap reliably."
   }
  ]
 },
 "mobile-dev-20": {
  "lesson": {
   "blocks": [
    {
     "type": "text",
     "text": "You now know enough to build, architect, test, secure, and ship a real app. The last thing worth knowing, especially for an interview, is where the field is moving, because mobile hardware and expectations keep changing faster than most other platforms."
    },
    {
     "type": "text",
     "text": "Foldable phones and large-screen devices are pushing 'adaptive UI' from a nice-to-have into a requirement: an app that only works in one fixed layout will look broken on a folding screen that changes its width while the app is running. Wearables (smartwatches) and other companion devices need a stripped-down, glanceable UI, often built with a separate, simpler codebase (Wear OS, watchOS) that talks to the phone app."
    },
    {
     "type": "code",
     "code": "// Conceptual: an on-device ML model classifying an image with no network call\nval result = imageClassifier.classify(bitmap)  // e.g. TensorFlow Lite / Core ML\n// Runs entirely on the phone: instant, works offline, keeps the photo private",
     "lang": "kotlin"
    },
    {
     "type": "text",
     "text": "On-device AI is a major current shift: instead of sending data to a server for every prediction, models compressed for mobile (TensorFlow Lite, Core ML, ONNX Runtime) run directly on the phone's chip. This gives instant results with no network dependency and keeps sensitive data (a photo, a voice clip) on the device entirely, which matters both for speed and for privacy regulations. Expect more app features (translation, image search, smart replies) to move on-device over time rather than round-tripping to a server."
    },
    {
     "type": "tip",
     "text": "A strong final interview answer to 'what's changing in mobile dev' ties these together: form factors are diversifying (foldables, wearables), so adaptive UI is now essential, and computation is moving from the cloud onto the device itself for speed and privacy."
    }
   ],
   "recap": "Mobile development is being reshaped by diversifying form factors (foldables, wearables needing adaptive, glanceable UI) and by AI computation moving on-device for instant, offline, privacy-preserving results, instead of relying on server round-trips."
  },
  "quiz": [
   {
    "q": "Why do foldable devices push adaptive UI from optional to necessary?",
    "options": [
     "They only support landscape mode",
     "They cannot run any apps",
     "They have no screen at all",
     "The available screen width can change while the app is actively running"
    ],
    "answer": 3,
    "explain": "A foldable can change its usable screen size mid-session, so a fixed single layout can visibly break as it unfolds or folds."
   },
   {
    "q": "What is the main advantage of running an ML model on-device (e.g. TensorFlow Lite) instead of on a server?",
    "options": [
     "It always produces more accurate results than server models",
     "It gives instant results, works offline, and keeps data private on the device",
     "It removes the need for any UI",
     "It requires a permanent internet connection"
    ],
    "answer": 1,
    "explain": "On-device inference avoids network round-trips, works without connectivity, and keeps sensitive input data on the phone."
   },
   {
    "q": "Why do smartwatch apps typically use a separate, simpler codebase?",
    "options": [
     "Watches cannot connect to phones at all",
     "Watches need a stripped-down, glanceable interface suited to a tiny screen and quick interactions",
     "It is required by app store policy for all apps",
     "Watches can run the exact same phone UI unmodified"
    ],
    "answer": 1,
    "explain": "A watch's tiny screen and quick-glance use case need a deliberately simplified UI, not a shrunk phone screen."
   },
   {
    "q": "What broader trend do foldables/wearables and on-device AI both reflect?",
    "options": [
     "All computation is moving permanently to the server",
     "Apps are becoming simpler and doing less overall",
     "Mobile computing is diversifying across form factors while pushing more computation onto the device itself",
     "Mobile development is becoming identical to web development"
    ],
    "answer": 2,
    "explain": "Both trends point the same direction: more diverse hardware shapes, and more processing happening locally on the device rather than in the cloud."
   }
  ]
 }
}
