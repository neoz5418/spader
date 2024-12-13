import { useParams } from 'react-router-dom'
import { getRefreshToken } from '@/utils/tokens'
import { useGetCurrentUserHook, useGetWorkspaceAccountHook, useListUserWorkspacesHook } from '@/gen'

export function useCurrentUser() {
  const { data: currentUser, isLoading } = useGetCurrentUserHook({
    query: {
      enabled: !!getRefreshToken(),
    },
  })
  return {
    currentUser,
    isLoading,
  }
}

export function useWorkspaces() {
  const { currentUser, isLoading: isUserLoading } = useCurrentUser()
  const {
    data: { items: workspaces = [] } = {},
    isLoading,
  } = useListUserWorkspacesHook(currentUser?.name || '', {}, {
    query: {
      enabled: !!currentUser,
    },
  })
  return {
    workspaces,
    isLoading: isLoading || isUserLoading,
  }
}

export function useCurrentWorkspace() {
  const { workspace: workspaceInPath } = useParams()
  const { workspaces, isLoading } = useWorkspaces()
  const currentWorkspace = workspaces.find(w => w.name === workspaceInPath)
  return {
    currentWorkspace,
    isLoading,
  }
}

export function useWorkspaceAccount() {
  const { currentWorkspace: workspace } = useCurrentWorkspace()
  const {
    data: workspacesAccount,
    isLoading,
  } = useGetWorkspaceAccountHook(workspace?.name || '', {
    query: {
      enabled: !!workspace,
    },
  })
  return {
    workspacesAccount,
    isLoading,
  }
}
