import { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useUser } from '@lib/react-query-auth'

type PrivateRouteProps = {
  children: ReactElement;
}

export default function PrivateRoutes({ children }: PrivateRouteProps) {
  const { data: user } = useUser()
  const location = useLocation()

  if (!user) return <Navigate to="/auth/login" replace state={ { from: location } } />

  return <>{ children }</>
}
