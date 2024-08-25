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
const MissionDetails = lazy(() => import('@pages/assassin').then((module) => ({ default: module.MissionDetailsView })))
const AssassinsListView = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssassinsListView })))
const AssassinDetailsView = lazy(() => import('@pages/assassin').then((module) => ({ default: module.AssassinsDetailsView })))

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
      { path: "missions/:missionId", element: <MissionDetails/>},
      { path: "assassins", element: <AssassinsListView/>},
      { path: "assassins/:assassinId", element: <AssassinDetailsView/>},
      { path: "*", element: <Navigate to="/no-match" replace /> },
    ]
  }
]
