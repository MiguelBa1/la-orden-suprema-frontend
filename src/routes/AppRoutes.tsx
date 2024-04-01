import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from '@routes/PrivateRoutes'

const Login = lazy(() => import('@pages/Auth/Login'))
const NoMatch = lazy(() => import('@pages/Common/NoMatch'))
const Home = lazy(() => import('@pages/Common/Home'))

export default function AppRoutes() {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
      <Router>
        <Routes>
          <Route path="/auth/login" element={ <Login /> } />
          <Route
            path="*"
            element={
              <PrivateRoutes>
                <Routes>
                  <Route path="/home" element={ <Home /> } />
                  <Route path="*" element={ <NoMatch /> } />
                </Routes>
              </PrivateRoutes>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  )
}
