import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Spinner } from '@components/UI'
import { router } from '@routes/index'

export function AppRoutes() {
  return (
    <Suspense fallback={ <div className="flex justify-center items-center h-screen"><Spinner /></div> }>
      <RouterProvider router={ router } />
    </Suspense>
  )
}
