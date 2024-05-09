import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@lib/index'
import { UserRole } from '@models/index'

interface RoleBasedRouteProps {
  allowedRoles: UserRole[];
}

export function RoleBasedRoute ({ allowedRoles }: RoleBasedRouteProps) {
  const { data: user, isLoading } = useUser()

  if (isLoading || !user) {
    return null
  }

  if (user.roles.some((role) => allowedRoles.includes(role))) {
    return <Outlet />
  }

  return <Navigate to="/no-match" replace />
}
