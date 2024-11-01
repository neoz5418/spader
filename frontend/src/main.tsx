import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from 'react';
import ReactDOM from 'react-dom/client';
import useAuth from "@/hooks/use-auth"

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
