/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AssassinHome = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Home })))
const AssassinProfile = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Profile })))

export const assassinRouter = [
  {
    path: "assassin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ASSASSIN] } />,
    children: [
      { path: "home", element: <AssassinHome /> },
      { path: "profile", element: <AssassinProfile/>},
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ]
  }
]
