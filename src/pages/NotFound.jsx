import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page narrow center">
      <div className="result-card">
        <div className="result-emoji">🧭</div>
        <h1>Page not found</h1>
        <p className="muted">That page does not exist.</p>
        <Link to="/" className="btn btn-primary">Go home</Link>
      </div>
    </div>
  )
}
