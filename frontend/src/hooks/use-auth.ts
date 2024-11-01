import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import { useNavigate } from "@tanstack/react-router"
import {  useNavigate } from 'react-router-dom'
import { useState } from "react"

import { AxiosError } from "axios"
// import {
//   type Body_login_login_access_token as AccessToken,
//   type ApiError,
//   LoginService,
//   type UserPublic,
//   type UserRegister,
//   UsersService,
// } from "../client"
import {
  type BodyTokenApisOidcV1TokenPostType as AccessToken,
  // type ApiError,
  // LoginService,
  RegisterUserMutationRequestType,
  GetCurrentUserQueryResponseType as UserPublicType,
  // type UserPublic,
  // type UserRegister,
  // UsersService,
} from "../gen/ts"

import {
  type ApiError,
} from "@/core/ApiError"

import {
  getCurrentUser as readUserMe,
  registerUser,
  token as loginAccessToken,
} from "../gen/clients"


import useCustomToast from "./use-custom-toast"

const isLoggedIn = () => {
  return localStorage.getItem("access_token") !== null
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
    localStorage.setItem("access_token", response.access_token)
    localStorage.setItem('refresh_token', response.refresh_token);
  }

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate( "/" )
    },
    onError: (err: ApiError) => {
      let errDetail = (err.body as any)?.detail

      if (err instanceof AxiosError) {
        errDetail = err.message
      }

      if (Array.isArray(errDetail)) {
        errDetail = "Something went wrong"
      }

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
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
    console.log("set new access token: " + response.access_token);
    console.log("set new refresh token: " + response.refresh_token);
    return true;
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem('refresh_token')
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
