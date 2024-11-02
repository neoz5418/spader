import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import QueryProvider from '@/components/providers'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <QueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
