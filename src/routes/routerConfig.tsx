/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { AuthRedirect, PrivateRoutes } from '@routes/index'
import { GeneralError } from '@pages/Common'

const Login = lazy(() => import('@pages/Auth/views/Login'))
const Home = lazy(() => import('@pages/Common/views/Home'))
const NoMatch = lazy(() => import('@pages/Common/views/NoMatch'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={ GeneralError }
        onReset={ () => window.location.reload() }
      >
        <Outlet />
      </ErrorBoundary>
    ),
    children: [
      { path: "/", element: <AuthRedirect /> },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
])
