import { Navigate } from 'react-router-dom'
import { useUser } from '@lib/index'

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

  if (user) {
    return <Navigate to="/home" replace />
  }

  return <Navigate to="/auth/login" replace />
}
