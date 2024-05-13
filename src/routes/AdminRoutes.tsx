/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AdminHome = lazy(() => import('@pages/admin/views').then((module) => ({ default: module.Home })))
const AssassinsList = lazy(() => import('@pages/admin/views').then((module) => ({ default: module.AssassinsList })))
const AssassinDetails = lazy(() => import('@pages/admin/views').then((module) => ({ default: module.AssassinDetails })))

export const adminRouter = [
  {
    path: "admin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ADMIN] } />,
    children: [
      { path: "home", element: <AdminHome /> },
      { path: "assassins", element: <AssassinsList /> },
      { path: "assassins/:assassinId", element: <AssassinDetails /> },
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ],
  },
]
