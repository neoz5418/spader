import axios from 'axios'

import { MutationCache, QueryCache } from "@tanstack/react-query";
import { mutationErrorHandler, queryErrorHandler } from "./error-handler";
import type { AxiosError, AxiosHeaders, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getAccessToken } from './tokens'
import { ApiError } from '@/core/ApiError';

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

export async function axiosClient<TData, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>> {
  const token = localStorage.getItem("access_token") || ""
  const commonHeader = axiosInstance?.defaults?.headers?.common
  if (commonHeader) {
    commonHeader['Authorization'] = `Bearer ${token}`
    commonHeader["Content-Type"] = "application/json";
    commonHeader["Timezone-Val"] =
      Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  try {
    const response = await axiosInstance.request<TData, ResponseConfig<TData>>(config);
    return response;
  } catch (err) {
    const error = err as AxiosError ;
    const errorResponse: ApiError = {
      message: '未知错误',
      status:  0,
    };


    if (!error.response) {
      errorResponse.message = '网络连接失败，请检查网络设置！';
    } else {
      switch (error.response.status) {
        case 401:
          errorResponse.message = '未授权，请重新登录';
          break;
        case 403:
          errorResponse.message = '拒绝访问';
          break;
        case 404:
          errorResponse.message = '请求的资源不存在';
          break;
        case 500:
          errorResponse.message = '服务器错误';
          break;
        default:
          errorResponse.message = error.response.data as string || '请求失败';
      }
    }
    console.log("[+]", errorResponse)
    throw errorResponse
  }
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
