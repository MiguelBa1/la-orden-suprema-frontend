import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Spinner } from '@components/index'
import { router } from '@routes/routerConfig'

export default function AppRoutes() {
  return (
    <Suspense fallback={ <div className="flex justify-center items-center h-screen"><Spinner /></div> }>
      <RouterProvider router={ router } />
    </Suspense>
  )
}
