/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

const Login = lazy(() => import('@pages/Auth/views/Login'))
const NoMatch = lazy(() => import('@pages/Common/views/NoMatch'))
const Home = lazy(() => import('@pages/Common/views/Home'))

export const routes = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
])
