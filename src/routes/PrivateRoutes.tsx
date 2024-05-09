import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import { useUser } from '@lib/index'
import { MainLayout } from '@components/index'
import { adminRouter, assassinRouter } from '@routes/index'

export function PrivateRoutes() {
  const { data: user, isLoading } = useUser()
  const location = useLocation()

  const element = useRoutes([
    ...adminRouter,
    ...assassinRouter,
    { path: "*", element: <Navigate to="/no-match" replace /> },
  ])

  if (isLoading) {
    return null
  }

  if (!user) {
    return <Navigate to="/auth/login" replace state={ { from: location } } />
  }

  return (
    <MainLayout>
      { element }
    </MainLayout>
  )
}
