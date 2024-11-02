import axios from 'axios'

import { MutationCache, QueryCache } from "@tanstack/react-query";
import { mutationErrorHandler, queryErrorHandler } from "./error-handler";
import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAccessToken } from './tokens'

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

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Timezone-Val"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
    const token = getAccessToken();
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
      config.withCredentials = true;
    }
  }
  return config;
};

axios.interceptors.request.use(authRequestInterceptor);

export const axiosClient = async <TData, TError = unknown, TVariables = unknown>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
  const token = localStorage.getItem("access_token") || ""
  let commonHeader = axiosInstance?.defaults?.headers?.common
  if (commonHeader) {
    commonHeader['Authorization'] = `Bearer ${token}`
    commonHeader["Content-Type"] = "application/json";
    commonHeader["Timezone-Val"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  
  const promise = axiosInstance.request<TData, ResponseConfig<TData>>(config).catch((e: AxiosError<TError>) => {
    throw e
  })

  return promise
}


export const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      suspense: false,
      refetchInterval: 0,
      cacheTime: 0,
      staleTime: 0,
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: mutationErrorHandler,
  }),
};


export default axiosClient