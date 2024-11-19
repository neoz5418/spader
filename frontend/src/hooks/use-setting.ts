import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { useNavigate } from "@tanstack/react-router"
import {  useNavigate } from 'react-router-dom'
import { useState } from "react"

import { AxiosError } from "axios"
import {
  type BodyTokenApisOidcV1TokenPostType as AccessToken,
  RegisterUserMutationRequestType,
  GetCurrentUserQueryResponseType as UserPublicType,
  WorkspaceAccountType,
  WorkspaceType,
} from "../gen/ts"

import {
  type ApiError,
} from "@/core/ApiError"

import {
  listUserWorkspaces,
  getWorkspaceAccount,
} from "../gen/clients"
import {
  setCurrentWorkspace,
  getCurrentWorkspace,
} from "@/utils/tokens";
import {
  getRefreshToken,
} from "@/utils/tokens";

const isLoggedIn = () => {
  return getRefreshToken() !== null
}

import {
  getCurrentUser as readUserMe,
} from "../gen/clients"
import useCustomToast from "./use-custom-toast"

const useSetting = () => {
  const showToast = useCustomToast()
  const [workspace, setWorkspace] = useState<WorkspaceType>()
  const navigate = useNavigate()
  const { data: user } = useQuery<UserPublicType | null, Error>({
    queryKey: ["currentUser"],
    queryFn: readUserMe,
    enabled: isLoggedIn(),
  })
  
  const username = user?.name
  const { isLoading, data: workspaces } = useQuery<WorkspaceType[] >({
    queryKey: ["workspaces", username],
    queryFn: async () =>{
      const response = await listUserWorkspaces(username as string)
      const current = response?.items?.find(w => w.name === getCurrentWorkspace(username as string))
      console.log(["[+] current", current], response.items)
      setWorkspace(current || response.items[0])
      return response?.items || []
    },
    enabled: !!username,
  })

  const { data: workspacesAccount } = useQuery<WorkspaceAccountType>({
    queryKey: ["workspaceAccount", workspace?.name],
    queryFn: async () =>{
      const response = await getWorkspaceAccount(workspace?.name as string)
      return response
    },
    enabled: !!workspace,
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
      setCurrentWorkspace(username as string, workspaceName)
      setWorkspace(workspace) 
      navigate(`/workspaces/${workspaceName}`)
    }
  }

  const [theme, setTheme] = useState<string>("")
  const switchTheme = (theme: string) => {
    setTheme(theme)
  }

  return {
    workspaces,
    workspace,
    workspacesAccount,
    switchWorkspace,
    theme,
    switchTheme,
    isLoading,
  }
}

export {  useSetting }
export default useSetting
