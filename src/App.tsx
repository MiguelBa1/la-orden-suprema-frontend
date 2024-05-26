import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@lib/index'
import { AppRoutes } from '@routes/index'
import { ToastContainer } from '@components/UI'

export default function App() {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={ queryClient }>
        <AppRoutes />
        <ReactQueryDevtools client={ queryClient } initialIsOpen={ false } />
      </QueryClientProvider>
    </>
  )
}
