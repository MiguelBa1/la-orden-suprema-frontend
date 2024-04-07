import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUser } from '@lib/react-query-auth'
import { MainLayout } from '@components/index'

export default function PrivateRoutes() {
  const { data: user, isLoading } = useUser()
  const location = useLocation()

  if (isLoading) {
    return null
  }

  if (!user) {
    return <Navigate to="/auth/login" replace state={ { from: location } } />
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
