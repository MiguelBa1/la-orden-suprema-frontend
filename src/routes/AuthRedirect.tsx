import { Navigate } from 'react-router-dom'
import { useUser } from '@lib/react-query-auth'

/**
 * Component to redirect the user based on their authentication status.
 * If the user is authenticated, it redirects to "/home".
 * If not authenticated, it redirects to "/auth/login".
 */
const AuthRedirect = () => {
  const { data: user, isLoading } = useUser()

  if (isLoading) {
    return null
  }

  if (user) {
    return <Navigate to="/home" replace />
  }

  return <Navigate to="/auth/login" replace />
}

export default AuthRedirect
