import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from './skip-to-main'

import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import { WorkspaceSwitcher } from './custom/workspace-switch'
import { SidebarProvider } from './ui/sidebar'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()

  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <SkipToMain />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main
          id='content'
          className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
        >
           <Layout>
          {/* ===== Top Heading ===== */}
          <Layout.Header>
            <div className='ml-auto flex items-center space-x-4'>
              <TopNav links={topNav} />
              <ThemeSwitch />
              <p className='text-sm font-semibold'>$10.00</p>
              {/* <UserNav /> */}
              <WorkspaceSwitcher />
            </div>
          </Layout.Header>
          <Outlet />
          </Layout>
        </main>
    </div>
  )
}


const topNav = [
  {
    title: 'Docs',
    href: '/docs',
    isActive: true,
  },
  {
    title: 'Referrals',
    href: '/referrals',
    isActive: true,
  }
]
