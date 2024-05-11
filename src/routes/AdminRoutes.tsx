/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AdminHome = lazy(() => import('@pages/admin/views').then((module) => ({ default: module.Home })))

export const adminRouter = [
  {
    path: "admin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ADMIN] } />,
    children: [
      { path: "home", element: <AdminHome /> },
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ],
  },
]
