import axios from 'axios'

import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios'

declare const AXIOS_BASE: string
declare const AXIOS_HEADERS: string

/**
 * Subset of AxiosRequestConfig
 */
export type RequestConfig<TData = unknown> = {
  baseURL?: string
  url?: string
  method: 'get' | 'put' | 'patch' | 'post' | 'delete'
  params?: unknown
  data?: TData
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'
  signal?: AbortSignal
  headers?: AxiosRequestConfig['headers']
}
/**
 * Subset of AxiosResponse
 */
export type ResponseConfig<TData = unknown> = {
  data: TData
  status: number
  statusText: string
  headers?: AxiosResponse['headers']
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {},
})

export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
  const token = localStorage.getItem("access_token") || ""
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const promise = axiosInstance.request<TData, ResponseConfig<TData>>(config).catch((e: AxiosError<TError>) => {
    throw e
  })

  return promise
}

export default axiosClient