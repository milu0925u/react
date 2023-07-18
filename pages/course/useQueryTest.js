import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import QueryData from '@/components/querytext/queryData'

export default function UseQueryTest() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryData />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
