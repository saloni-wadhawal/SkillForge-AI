import { Suspense, lazy } from 'react'
import { Navigate, Outlet, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Tracks from './pages/Tracks.jsx'
import TrackDetail from './pages/TrackDetail.jsx'
import Lesson from './pages/Lesson.jsx'
import Quiz from './pages/Quiz.jsx'
import Practice from './pages/Practice.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'
import NotFound from './pages/NotFound.jsx'
import { useAuth } from './state/AuthContext.jsx'

// The code editor, the challenge bank and the interview question bank are big,
// and most visits never open them — so they load only when someone goes there.
const CodeLab = lazy(() => import('./pages/CodeLab.jsx'))
const Challenges = lazy(() => import('./pages/Challenges.jsx'))
const Challenge = lazy(() => import('./pages/Challenge.jsx'))
const Interview = lazy(() => import('./pages/Interview.jsx'))
const InterviewRoom = lazy(() => import('./pages/InterviewRoom.jsx'))
const InterviewAnswers = lazy(() => import('./pages/InterviewAnswers.jsx'))

const Loading = ({ what = 'the code editor' }) => (
  <div className="page loading-note">Loading {what}…</div>
)

// A session is an account OR an explicit guest, so nobody is ever locked out
// of learning — they just have to choose one on the way in.
function RequireSession() {
  const { signedIn } = useAuth()
  const location = useLocation()
  if (!signedIn) return <Navigate to="/login" replace state={{ from: location }} />
  return <Outlet />
}

// Only a real account is bounced away from these pages. A guest must be able to
// reach them — "create a free account" is the whole point of the guest banner.
function RedirectIfSignedIn() {
  const { user } = useAuth()
  const location = useLocation()
  if (user) return <Navigate to={location.state?.from?.pathname || '/'} replace />
  return <Outlet />
}

export default function App() {
  return (
    <Routes>
      {/* Public — these render without the app shell */}
      <Route element={<RedirectIfSignedIn />}>
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/signup" element={<Auth mode="signup" />} />
      </Route>

      {/* The app itself */}
      <Route element={<RequireSession />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Tracks />} />
          <Route path="/learn/:trackId" element={<TrackDetail />} />
          <Route path="/learn/:trackId/:levelId/lesson" element={<Lesson />} />
          <Route path="/learn/:trackId/:levelId/quiz" element={<Quiz />} />
          <Route path="/practice" element={<Practice />} />
          <Route
            path="/code"
            element={
              <Suspense fallback={<Loading />}>
                <CodeLab />
              </Suspense>
            }
          />
          <Route
            path="/challenges"
            element={
              <Suspense fallback={<Loading />}>
                <Challenges />
              </Suspense>
            }
          />
          <Route
            path="/challenges/:challengeId"
            element={
              <Suspense fallback={<Loading />}>
                <Challenge />
              </Suspense>
            }
          />
          <Route
            path="/interview"
            element={
              <Suspense fallback={<Loading what="the interview room" />}>
                <Interview />
              </Suspense>
            }
          />
          {/* Must sit above /interview/:roleId — "answers" is a page, not a role */}
          <Route
            path="/interview/answers"
            element={
              <Suspense fallback={<Loading what="the answers" />}>
                <InterviewAnswers />
              </Suspense>
            }
          />
          <Route
            path="/interview/:roleId"
            element={
              <Suspense fallback={<Loading what="the interview room" />}>
                <InterviewRoom />
              </Suspense>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* Keep 404 public so a bad link does not look like a login wall */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
