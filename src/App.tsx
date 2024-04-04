import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@lib/react-query.ts'
import { AppRoutes } from '@routes/index'
import { ToastContainer } from '@components/index.ts'

export default function App() {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={ queryClient }>
        <AppRoutes />
      </QueryClientProvider>
    </>
  )
}
