import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import SkipToMain from '../components/skip-to-main'

import { Layout } from '@/components/custom/layout'
import { TopNav } from '@/components/top-nav'
import { WorkspaceSwitcher } from '@/components/custom/workspace-switch'
import useWorkspace from '@/hooks/use-setting'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  const {
    workspaces,
    workspace: current,
    workspacesAccount,
    switchWorkspace
  } = useWorkspace()
  const balance = workspacesAccount?.balance || 0
  const currency = workspacesAccount?.currency || 'CNY'
  const rechargeLink = "/workspaces/" + (current?.name || "") + "/recharge"
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
          <Layout.Header>
            <div className="ml-auto flex items-center space-x-4">
              <TopNav links={topNav} />
              {/* <ThemeSwitch /> */}
              <p className="text-sm font-semibold">{(balance / 100).toLocaleString('zh-CN', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2
              })}</p>
              <Link
                  to={rechargeLink}
                >
                  {"充值"}
                </Link>
              {/* <UserNav /> */}
              <WorkspaceSwitcher workspaces={workspaces} current={current} switchWorkspace={switchWorkspace} />
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
    title: '文档',
    href: '/docs',
    isActive: true,
  },
]
