import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from '../components/skip-to-main'

import { Layout } from '@/components/custom/layout'
import { TopNav } from '@/components/top-nav'
import { WorkspaceSwitcher } from '@/components/custom/workspace-switch'
import { useCurrentWorkspace, useWorkspaceAccount, useWorkspaces } from '@/hooks/use-setting.ts'
import ThemeSwitch from '@/components/theme-switch.tsx'
import { WatchEvents } from '@/hooks/use-watch.tsx'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  const { workspacesAccount, isLoading: workspaceAccountIsLoading } =
    useWorkspaceAccount()
  const { workspaces } = useWorkspaces()
  const { currentWorkspace: current } = useCurrentWorkspace()
  const balance = workspacesAccount?.balance || 0
  const currency = workspacesAccount?.currency || 'CNY'
  const billingLink = '/workspaces/' + (current?.name || '') + '/billing'
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <SkipToMain />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        <Layout>
          {/* ===== Top Heading ===== */}
          <WatchEvents>
            <Layout.Header>
              <div className="ml-auto flex items-center space-x-4">
                <TopNav links={topNav} />
                <ThemeSwitch />

                <Link to={billingLink}>
                  {workspaceAccountIsLoading ? (
                    '...'
                  ) : (
                    <p className="text-sm font-semibold">
                      {(balance / 100).toLocaleString('zh-CN', {
                        style: 'currency',
                        currency: currency,
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  )}
                </Link>
                {/* <UserNav /> */}
                <WorkspaceSwitcher workspaces={workspaces} current={current} />
              </div>
            </Layout.Header>
            <Outlet />
          </WatchEvents>
        </Layout>
      </main>
    </div>
  )
}

const topNav = [
  {
    title: '文档',
    href: '/docs',
    isActive: true,
  },
]
