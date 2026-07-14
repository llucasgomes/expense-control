'use client'

import { queryClient } from '@/lib/react-query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import type * as React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
  )
}
