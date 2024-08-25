/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AssassinHome = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Home })))
const AssassinProfile = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Profile })))
const GeneralMissionsList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.GeneralMissionsListView })))
const AssignedMissionsList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssignedMissionsListView })))
const MissionsList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.MissionsListView })))
const MissionDetails = lazy(() => import('@pages/assassin').then((module) => ({ default: module.MissionDetailsView })))
const AssassinsList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssassinsListView })))
const AssassinDetails = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssassinDetailsView })))
const TransactionsList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.TransactionListView })))

export const assassinRouter = [
  {
    path: "assassin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ASSASSIN] } />,
    children: [
      { path: "home", element: <AssassinHome /> },
      { path: "profile", element: <AssassinProfile/>},
      { path: "missions/general", element: <GeneralMissionsList/>},
      { path: "missions/assignments", element: <AssignedMissionsList/>},
      { path: "missions/created-by-me", element: <MissionsList/>},
      { path: "missions/:missionId", element: <MissionDetails/>},
      { path: "assassins", element: <AssassinsList/>},
      { path: "assassins/:assassinId", element: <AssassinDetails/>},
      { path: "transactions", element: <TransactionsList/>},
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ]
  }
]
