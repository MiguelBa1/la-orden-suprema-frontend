import { Navigate } from 'react-router-dom'
import { useUser } from '@lib/index'
import { UserRole } from '@models/index'

/**
 * Component to redirect the user based on their authentication status.
 * If the user is authenticated, it redirects to "/home".
 * If not authenticated, it redirects to "/auth/login".
 */
export function AuthRedirect() {
  const { data: user, isLoading } = useUser()

  if (isLoading) {
    return null
  }

  if (user?.role === UserRole.ADMIN) {
    return <Navigate to="/app/admin/home" replace />
  }

  if (user?.role === UserRole.ASSASSIN) {
    return <Navigate to="/app/assassin/home" replace />
  }

  return <Navigate to="/auth/login" replace />
}
