/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { AuthRedirect, PrivateRoutes } from '@routes/index'
import { GeneralError } from '@pages/common'

const Login = lazy(() => import('@pages/index').then((module) => ({ default: module.Login })))
const ForgotPassword = lazy(() => import('@pages/index').then((module) => ({ default: module.ForgotPassword })))
const VerifyCode = lazy(() => import('@pages/index').then((module) => ({ default: module.VerifyCode })))
const NewPassword = lazy(() => import('@pages/index').then((module) => ({ default: module.NewPassword })))
const NoMatch = lazy(() => import('@pages/index').then((module) => ({ default: module.NoMatch })))

export const router = createBrowserRouter([
  { 
    path: "/", element: (
      <ErrorBoundary FallbackComponent={ GeneralError } onReset={ () => window.location.reload() }>
        <Outlet />
      </ErrorBoundary>
    ), 
    children: [
      { path: "/", element: <AuthRedirect /> },
      { path: "auth/login", element: <Login /> },
      { path: 'forgot-password', element: <ForgotPassword /> },  
      { path: 'verify-code', element: <VerifyCode /> },
      { path: 'new-password', element: <NewPassword /> },
      { path: "app/*", element: <PrivateRoutes /> },
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ], 
    errorElement: <GeneralError />, 
  }, 
  { path: "no-match", element: <NoMatch /> }
])
