/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { AuthRedirect, PrivateRoutes } from '@routes/index'
import { GeneralError } from '@pages/common'

const Login = lazy(() => import('@pages/index').then((module) => ({ default: module.Login })))
const Home = lazy(() => import('@pages/index').then((module) => ({ default: module.Home })))
const NoMatch = lazy(() => import('@pages/index').then((module) => ({ default: module.NoMatch })))

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
