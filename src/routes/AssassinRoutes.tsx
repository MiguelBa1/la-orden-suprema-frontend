/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { RoleBasedRoute } from '@routes/index'
import { UserRole } from '@models/index'

const AssassinHome = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Home })))
const AssassinProfile = lazy(() => import('@pages/assassin').then((module) => ({ default: module.Profile })))
const GeneralMissionList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.GeneralMissionListView })))
const AssignedMissionList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssignedMissionListView })))
const MissionList = lazy(() => import('@pages/assassin').then((module) => ({ default: module.MissionListView })))

export const assassinRouter = [
  {
    path: "assassin/*",
    element: <RoleBasedRoute allowedRoles={ [UserRole.ASSASSIN] } />,
    children: [
      { path: "home", element: <AssassinHome /> },
      { path: "profile", element: <AssassinProfile/>},
      { path: "missions/general", element: <GeneralMissionList/>},
      { path: "missions/assignments", element: <AssignedMissionList/>},
      { path: "missions/created-by-me", element: <MissionList/>},
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ]
  }
]
