import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@lib/react-query.ts'
import { GeneralError } from '@pages/Common'
import { AppRoutes } from '@routes/index'

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ GeneralError }>
      <QueryClientProvider client={ queryClient }>
        <AppRoutes />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
