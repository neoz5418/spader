"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/custom/button"
import useAuth from "@/hooks/use-auth"

export function WorkspaceSwitcher() {
  const [selectedWorkspace, setSelectedWorkspace] = React.useState("")
  const { logout, user: currentUser } = useAuth()
  const handleLogout = async () => {
    logout()
  }
  const workspaces = [currentUser?.email || ""]


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
                <span className="">{currentUser?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace}
                onSelect={() => setSelectedWorkspace(workspace)}
              >
                {workspace}{" "}
                {workspace === selectedWorkspace && <Check className="ml-auto" />}
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
