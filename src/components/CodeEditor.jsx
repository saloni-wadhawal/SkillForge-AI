import { useEffect, useRef } from 'react'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { indentWithTab } from '@codemirror/commands'
import { python } from '@codemirror/lang-python'
import { javascript } from '@codemirror/lang-javascript'
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { oneDark } from '@codemirror/theme-one-dark'

const MODES = { python, javascript, cpp, java }

const languageFor = (mode) => {
  const make = MODES[mode]
  return make ? make() : []
}

// Matches the app's existing dark .code-block look so the editor does not feel
// bolted on.
const appTheme = EditorView.theme({
  '&': { fontSize: '14px', borderRadius: '14px', overflow: 'hidden' },
  '.cm-scroller': { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', lineHeight: '1.6' },
  '.cm-content': { padding: '14px 0' },
  '.cm-gutters': { border: 'none' },
  '&.cm-focused': { outline: 'none' },
})

export default function CodeEditor({ value, onChange, mode = 'python', minHeight = 260, readOnly = false }) {
  const host = useRef(null)
  const view = useRef(null)
  const language = useRef(new Compartment())
  const editable = useRef(new Compartment())
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  // Build the editor once. Later changes go through compartments / transactions
  // so the student never loses their cursor position.
  useEffect(() => {
    if (!host.current) return undefined
    const state = EditorState.create({
      doc: value ?? '',
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        language.current.of(languageFor(mode)),
        editable.current.of(EditorView.editable.of(!readOnly)),
        oneDark,
        appTheme,
        EditorView.theme({ '.cm-content, .cm-gutter': { minHeight: `${minHeight}px` } }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged && onChangeRef.current) onChangeRef.current(update.state.doc.toString())
        }),
      ],
    })
    view.current = new EditorView({ state, parent: host.current })
    // Dev only: lets the browser tests drive the editor directly, and is handy
    // for poking at it from the console. Stripped from production builds.
    if (import.meta.env.DEV) window.__cqEditor = view.current
    return () => {
      view.current?.destroy()
      view.current = null
    }
    // Deliberately built once — the effects below keep it in sync.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    view.current?.dispatch({ effects: language.current.reconfigure(languageFor(mode)) })
  }, [mode])

  useEffect(() => {
    view.current?.dispatch({ effects: editable.current.reconfigure(EditorView.editable.of(!readOnly)) })
  }, [readOnly])

  // Only replace the text when it really differs — e.g. switching language or
  // pressing Reset. Typing must not round-trip through here.
  useEffect(() => {
    const v = view.current
    if (!v) return
    const current = v.state.doc.toString()
    if (value === undefined || value === current) return
    v.dispatch({ changes: { from: 0, to: current.length, insert: value } })
  }, [value])

  return <div className="code-editor" ref={host} />
}
