import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListGpuTypesQueryResponseType, ListGpuTypesQueryParamsType, ListGpuTypes422Type } from "../ts/ListGpuTypesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListGpuTypesClient = typeof client<ListGpuTypesQueryResponseType, ListGpuTypes422Type, never>;
type ListGpuTypes = {
    data: ListGpuTypesQueryResponseType;
    error: ListGpuTypes422Type;
    request: never;
    pathParams: never;
    queryParams: ListGpuTypesQueryParamsType;
    headerParams: never;
    response: ListGpuTypesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListGpuTypesClient>[0]>;
        return: Awaited<ReturnType<ListGpuTypesClient>>;
    };
};
export const listGpuTypesQueryKey = (params: ListGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/gpu_types" }, ...(params ? [params] : [])] as const;
export type ListGpuTypesQueryKey = ReturnType<typeof listGpuTypesQueryKey>;
export function listGpuTypesQueryOptions(params: ListGpuTypes["queryParams"], options: ListGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listGpuTypesQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListGpuTypes["data"], ListGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Gpu Types
 * @link /apis/compute/v1/gpu_types
 */
export function useListGpuTypesHook<TData = ListGpuTypes["response"], TQueryData = ListGpuTypes["response"], TQueryKey extends QueryKey = ListGpuTypesQueryKey>(params: ListGpuTypes["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListGpuTypes["response"], ListGpuTypes["error"], TData, TQueryData, TQueryKey>>;
    client?: ListGpuTypes["client"]["parameters"];
} = {}): UseQueryResult<TData, ListGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listGpuTypesQueryKey(params);
    const query = useQuery({
        ...listGpuTypesQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listGpuTypesSuspenseQueryKey = (params: ListGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/gpu_types" }, ...(params ? [params] : [])] as const;
export type ListGpuTypesSuspenseQueryKey = ReturnType<typeof listGpuTypesSuspenseQueryKey>;
export function listGpuTypesSuspenseQueryOptions(params: ListGpuTypes["queryParams"], options: ListGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listGpuTypesSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListGpuTypes["data"], ListGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Gpu Types
 * @link /apis/compute/v1/gpu_types
 */
export function useListGpuTypesHookSuspense<TData = ListGpuTypes["response"], TQueryKey extends QueryKey = ListGpuTypesSuspenseQueryKey>(params: ListGpuTypes["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListGpuTypes["response"], ListGpuTypes["error"], TData, TQueryKey>>;
    client?: ListGpuTypes["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listGpuTypesSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listGpuTypesSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}