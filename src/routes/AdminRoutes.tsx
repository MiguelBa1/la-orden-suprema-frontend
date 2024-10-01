/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AssassinsList = lazy(() => import('@pages/admin').then((module) => ({ default: module.AssassinsListView })))
const AssassinDetails = lazy(() => import('@pages/admin').then((module) => ({ default: module.AssassinDetailsView })))
const CreateAssassinView = lazy(() => import('@pages/admin').then((module) => ({ default: module.CreateAssassinView })))
const MissionsList = lazy(() => import('@pages/admin').then((module) => ({ default: module.MissionsListView })))
const MissionDetails = lazy(() => import('@pages/admin').then((module) => ({ default: module.MissionDetailsView })))
const CreateMissionView = lazy(() => import('@pages/admin').then((module) => ({ default: module.CreateMissionView })))
const TransactionsList = lazy(() => import('@pages/admin').then((module) => ({ default: module.TransactionListView })))

export const adminRouter = [
  {
    path: "admin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ADMIN] } />,
    children: [
      { path: "assassins", element: <AssassinsList /> },
      { path: "assassins/create", element: <CreateAssassinView /> },
      { path: "assassins/:assassinId", element: <AssassinDetails /> },
      { path: "missions", element: <MissionsList /> },
      { path: "missions/create", element: <CreateMissionView /> },
      { path: "missions/:missionId", element: <MissionDetails /> },
      { path: "transactions", element: <TransactionsList /> },
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ],
  },
]
