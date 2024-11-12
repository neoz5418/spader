import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { useNavigate } from "@tanstack/react-router"
import {  useNavigate } from 'react-router-dom'
import { useState } from "react"

import { AxiosError } from "axios"
import {
  type BodyTokenApisOidcV1TokenPostType as AccessToken,
  RegisterUserMutationRequestType,
  GetCurrentUserQueryResponseType as UserPublicType,
  WorkspaceType,
} from "../gen/ts"

import {
  type ApiError,
} from "@/core/ApiError"

import {
  listUserWorkspaces,
} from "../gen/clients"
import {
  setCurrentWorkspace,
  getCurrentWorkspace,
} from "@/utils/tokens";


import useCustomToast from "./use-custom-toast"
import useAuth from "./use-auth"

const useWorkspace = () => {
  const showToast = useCustomToast()
  const [workspace, setWorkspace] = useState<WorkspaceType | null>(null)
  // const [workspaces, setWorkspaces] = useState<WorkspaceType[] >([])
  const { user: currentUser } = useAuth()
  const { isLoading, data: workspaces } = useQuery<WorkspaceType[] >({
    queryKey: ["workspaces", currentUser?.name],
    queryFn: async () =>{
      const username = currentUser?.name as string
      const response = await listUserWorkspaces(username)
      const current = response?.items?.find(w => w.name === getCurrentWorkspace(username))
      setWorkspace(current || response.items[0])
      return response?.items || []
    },
    enabled: !!currentUser?.name,
  })

  const switchWorkspace = (workspaceName: string) => {
    const workspace = workspaces?.find(w => w.name === workspaceName)
    if (!workspace) {
      showToast(
        `Workspace(${workspaceName}) not found`,
        "Please try again later",
        "error"
      )
    } else {
      const username = currentUser?.name as string
      setCurrentWorkspace(username, workspaceName)
      setWorkspace(workspace) 
    }
  }

  return {
    switchWorkspace,
    workspaces,
    workspace,
    isLoading,
  }
}

export {  useWorkspace }
export default useWorkspace
