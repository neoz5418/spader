import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { useNavigate } from "@tanstack/react-router"
import {  useNavigate } from 'react-router-dom'
import { useState } from "react"

import { AxiosError } from "axios"
import {
  type BodyTokenApisOidcV1TokenPostType as AccessToken,
  RegisterUserMutationRequestType,
  GetCurrentUserQueryResponseType as UserPublicType,
} from "../gen/ts"

import {
  type ApiError,
} from "@/core/ApiError"

import {
  getCurrentUser as readUserMe,
  registerUser,
  token as loginAccessToken,
} from "../gen/clients"
import {
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
} from "@/utils/tokens";


import useCustomToast from "./use-custom-toast"

const isLoggedIn = () => {
  return getRefreshToken() !== null
}

const useAuth = () => {
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const showToast = useCustomToast()
  const queryClient = useQueryClient()
  const { data: user, isLoading } = useQuery<UserPublicType | null, Error>({
    queryKey: ["currentUser"],
    queryFn: readUserMe,
    enabled: isLoggedIn(),
  })

  const signUpMutation = useMutation({
    mutationFn: (data: RegisterUserMutationRequestType) =>
      registerUser(data),

    onSuccess: () => {
      navigate("/sign-in")
      showToast(
        "Account created.",
        "Your account has been created successfully.",
        "success",
      )
    },
    onError: (err: ApiError) => {
      let errDetail = (err.body as any)?.detail

      if (err instanceof AxiosError) {
        errDetail = err.message
      }

      showToast("Something went wrong.", errDetail, "error")
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })

  const login = async (data: AccessToken) => {
    const response = await loginAccessToken({
      grant_type: 'password',
      email: data.email,
      password: data.password,
    })
    setRefreshToken(response.refresh_token)
    setAccessToken(response.access_token)
  }

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      showToast("登录成功", "You have been logged in successfully.", "success")
      navigate( "/" )
    },
    onError: (err: AxiosError) => {
      let data = err.response?.data
      let errDetail = (data as any)?.detail

      if (err instanceof AxiosError) {
        errDetail = err.response?.data
      }

      if (Array.isArray(errDetail)) {
        errDetail = "Something went wrong"
      }

      showToast("登录失败", errDetail, "error")
      setError(errDetail)
    },
  })

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
        return false;
    }
    const response = await loginAccessToken({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    })
    setRefreshToken(response.refresh_token)
    setAccessToken(response.access_token)
    console.log("set new access token: " + response.access_token);
    console.log("set new refresh token: " + response.refresh_token);
    return true;
  }

  const logout = () => {
    removeRefreshToken()
    removeAccessToken()
    navigate("/sign-in")
  }

  const refreshTokenRetry = async (
    err: any,
    key: string,
    config: any,
    revalidate: (options: { retryCount: number }) => void,
    { retryCount }: { retryCount: number }
  ) => {
      if (retryCount >= 3) return
      if (err.status !== 401) return
      try {
          await refreshToken()
      } catch (e: any) {
          console.error(e)
          if (e.status !== 200) {
              localStorage.removeItem('access_token')
              localStorage.removeItem('refresh_token')
              navigate("/login")
              return
          }
      }
      revalidate({ retryCount: retryCount + 1 })
  }

  return {
    signUpMutation,
    loginMutation,
    logout,
    refreshToken,
    refreshTokenRetry,
    user,
    isLoading,
    error,
    resetError: () => setError(null),
  }
}

export { isLoggedIn, useAuth }
export default useAuth
