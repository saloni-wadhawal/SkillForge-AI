import { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeRunner from '../components/CodeRunner.jsx'
import { LANGUAGES } from '../lib/runner.js'

const STORAGE_KEY = 'codequest_codelab_v1'

const HELLO = {
  python: `# Try changing this and press Run\nname = "world"\nprint("Hello,", name)\n\nfor i in range(1, 6):\n    print(i, "x 7 =", i * 7)\n`,
  javascript: `// Try changing this and press Run\nconst name = "world";\nconsole.log("Hello,", name);\n\nfor (let i = 1; i <= 5; i++) {\n  console.log(i, "x 7 =", i * 7);\n}\n`,
  cpp: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, world" << std::endl;\n\n    for (int i = 1; i <= 5; i++) {\n        std::cout << i << " x 7 = " << i * 7 << std::endl;\n    }\n    return 0;\n}\n`,
  c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, world\\n");\n\n    for (int i = 1; i <= 5; i++) {\n        printf("%d x 7 = %d\\n", i, i * 7);\n    }\n    return 0;\n}\n`,
  java: `class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, world");\n\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(i + " x 7 = " + (i * 7));\n        }\n    }\n}\n`,
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved && saved.language && saved.code) return saved
  } catch {
    // ignore
  }
  return { language: 'python', code: HELLO.python, stdin: '' }
}

// A free-play editor. Nothing is graded here — it is for trying things out.
export default function CodeLab() {
  const [state, setState] = useState(load)

  const save = (next) => {
    setState(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // a full or blocked storage should not stop you coding
    }
  }

  const changeLanguage = (language) => {
    // Only replace the code if it is still the untouched sample for the old
    // language — never throw away something the student wrote.
    const untouched = state.code.trim() === (HELLO[state.language] || '').trim()
    save({ ...state, language, code: untouched ? HELLO[language] : state.code })
  }

  return (
    <div className="page">
      <div className="section-head-row">
        <div>
          <p className="section-sub">
            Write a program and run it. Nothing is marked here — try things, break things.
          </p>
        </div>
        <Link to="/challenges" className="section-link">
          Coding challenges →
        </Link>
      </div>

      <CodeRunner
        language={state.language}
        onLanguageChange={changeLanguage}
        code={state.code}
        onCodeChange={(code) => save({ ...state, code })}
        stdin={state.stdin}
        onStdinChange={(stdin) => save({ ...state, stdin })}
        onReset={() => save({ ...state, code: HELLO[state.language] })}
        minHeight={340}
      />

      <div className="recap lab-note">
        <strong>How input works:</strong> whatever you type in the Input box is fed to your program
        as if you had typed it while it was running. In Python that is <code>input()</code>, in C++{' '}
        <code>cin</code>, in Java <code>Scanner</code>.
        {LANGUAGES.find((l) => l.id === state.language)?.local ? (
          <>
            {' '}
            JavaScript runs right here in your browser, so it works even with no internet.
          </>
        ) : (
          <> This language runs on the server, so it needs the server to be on.</>
        )}
      </div>
    </div>
  )
}
