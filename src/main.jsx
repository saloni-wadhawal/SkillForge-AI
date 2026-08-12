import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider, useAuth } from './state/AuthContext.jsx'
import { ProgressProvider } from './state/ProgressContext.jsx'
import { initTheme } from './lib/theme.js'
import './index.css'

// Before the first paint, so reloading in dark mode never flashes white.
initTheme()

// The key= remounts the progress provider whenever the account changes, so it
// re-reads that account's saved progress instead of showing the last one's.
function ProgressGate({ children }) {
  const { user, guest } = useAuth()
  return (
    <ProgressProvider key={user?.id ?? (guest ? 'guest' : 'anon')}>{children}</ProgressProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProgressGate>
          <App />
        </ProgressGate>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
