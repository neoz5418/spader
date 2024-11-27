import { createBrowserRouter, redirect } from 'react-router-dom'
import GeneralError from './pages/errors/general-error.tsx'
import NotFoundError from './pages/errors/not-found-error.tsx'
import MaintenanceError from './pages/errors/maintenance-error.tsx'
import UnauthorisedError from './pages/errors/unauthorised-error.tsx'
import {AuthLayout, Layout} from './lib/layouts.tsx'
import { isLoggedIn  as isAuthenticated} from './hooks/use-auth.ts'
import { useSetting } from './hooks/use-setting.ts'


async function requireAuth() {
  console.log('requireAuth', isAuthenticated())
  if (!isAuthenticated()) {
    throw redirect('/sign-in');
  }

  return null;
}

async function redirectIfUser() {
  console.log('redirectIfUser', isAuthenticated())
  if (isAuthenticated()) {
    throw redirect('/');
  }
  return null;
}


const router = createBrowserRouter([{
  element: <Layout />,
  loader: redirectIfUser,
  children: [
    // Auth routes
    {
      path: '/login',
      lazy: async () => ({
        Component: (await import('./pages/auth/sign-in.tsx')).default,
      }),
    },
    {
      path: '/sign-in',
      lazy: async () => ({
        Component: (await import('./pages/auth/sign-in.tsx')).default,
      }),
    },
    {
      path: '/sign-up',
      lazy: async () => ({
        Component: (await import('./pages/auth/sign-up.tsx')).default,
      }),
    },
    {
      path: '/forgot-password',
      lazy: async () => ({
        Component: (await import('./pages/auth/forgot-password.tsx')).default,
      }),
    },
  ]
  },
  {
    path: '/',
    lazy: async () => ({
      Component: (await import('./pages/loading.tsx')).default,
    }),
  },
  {
    element: <AuthLayout />,
    loader: requireAuth,
    children: [
      // Main routes
      {
        path: '/workspaces/:workspace/',
        lazy: async () => {
          const AppShell = await import('./pages/app-shell.tsx')
          return { Component: AppShell.default }
        },
        // errorElement: <GeneralError />,
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('./pages/dashboard/index.tsx')).default,
            }),
          },
          {
            path: 'users-2',
            lazy: async () => ({
              Component: (await import('@/pages/users/index.tsx')).default,
            }),
          },
          {
            path: 'users',
            lazy: async () => ({
              Component: (await import('@/pages/users')).default,
            }),
          },
          {
            path: 'instances',
            lazy: async () => ({
              Component: (await import('@/pages/instances')).default,
            }),
          },
          {
            path: 'instances/deploy',
            lazy: async () => ({
              Component: (await import('@/pages/instances/deploy.tsx')).default,
            }),
          }
          ,
          {
            path: 'files',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'images',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'instances',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'templates',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'members',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'recharge',
            lazy: async () => ({
              Component: (await import('./pages/workspaces/recharge.tsx')).default,
            }),
          },
          {
            path: 'logs',
            lazy: async () => ({
              Component: (await import('@/components/coming-soon')).default,
            }),
          },
          {
            path: 'settings',
            lazy: async () => ({
              Component: (await import('./pages/settings/index.tsx')).default,
            }),
            // errorElement: <GeneralError />,
            children: [
              // {
              //   index: true,
              //   lazy: async () => ({
              //     Component: (await import('./pages/settings/profile/index.tsx')).default,
              //   }),
              // },
              {
                // path: 'account',
                index: true,
                lazy: async () => ({
                  Component: (await import('./pages/settings/account/index.tsx')).default,
                }),
              },
              {
                path: 'appearance',
                lazy: async () => ({
                  Component: (await import('./pages/settings/appearance/index.tsx')).default,
                }),
              },
              {
                path: 'notifications',
                lazy: async () => ({
                  Component: (await import('./pages/settings/notifications/index.tsx'))
                    .default,
                }),
              },
              {
                path: 'display',
                lazy: async () => ({
                  Component: (await import('./pages/settings/display/index.tsx')).default,
                }),
              },
              {
                path: 'error-example',
                lazy: async () => ({
                  Component: (await import('./pages/settings/error-example/index.tsx'))
                    .default,
                }),
                // errorElement: <GeneralError className='h-[50svh]' minimal />,
              },
            ],
          },
        ],
      }
    ]
  },

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },
  { path: '/401', Component: UnauthorisedError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
