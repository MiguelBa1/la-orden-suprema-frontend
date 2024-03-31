import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { GeneralError } from '@pages/index'

const Login = lazy(() => import('@pages/Auth/Login'))
const NoMatch = lazy(() => import('@pages/Common/NoMatch'))

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={ <div>Loading...</div> }>
        <ErrorBoundary FallbackComponent={ GeneralError }>
          <Routes>
            <Route path="/auth" element={ <Login /> } />
            <Route path="*" element={ <NoMatch /> } />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  )
}
