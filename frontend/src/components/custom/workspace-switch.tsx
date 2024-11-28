import { Check, ChevronsUpDown } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/custom/button'
import useAuth from '@/hooks/use-auth'
import type { WorkspaceType } from '@/gen/'
import { useNavigate } from 'react-router-dom'

export function WorkspaceSwitcher({ workspaces, current }: {
  workspaces: WorkspaceType[] | undefined,
  current: WorkspaceType | undefined
}) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    logout()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Workspace</span>
            <span className="">{current?.display_name}</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width]"
        align="start"
      >
        {workspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace.name}
            onSelect={() => navigate(`/workspaces/${workspace.name}`)}
          >
            {workspace.display_name}{' '}
            {workspace.name === current?.name && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
