import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'

import { Mutation,  QueryClient, QueryClientProvider, Query } from "@tanstack/react-query"
import {queryClientConfig} from "@/utils/client"
import { useState } from 'react';

export default function QueryProvider({children}:any) {


  const [queryClient] = useState(
    () =>
      new QueryClient(queryClientConfig),
  );
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    )
}
