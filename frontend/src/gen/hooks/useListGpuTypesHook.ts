import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListGpuTypesQueryResponseType, ListGpuTypesPathParamsType, ListGpuTypesQueryParamsType, ListGpuTypes400Type, ListGpuTypes401Type, ListGpuTypes404Type, ListGpuTypes422Type, ListGpuTypes429Type, ListGpuTypes500Type, ListGpuTypes503Type } from "../ts/ListGpuTypesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListGpuTypesClient = typeof client<ListGpuTypesQueryResponseType, ListGpuTypes400Type | ListGpuTypes401Type | ListGpuTypes404Type | ListGpuTypes422Type | ListGpuTypes429Type | ListGpuTypes500Type | ListGpuTypes503Type, never>;
type ListGpuTypes = {
    data: ListGpuTypesQueryResponseType;
    error: ListGpuTypes400Type | ListGpuTypes401Type | ListGpuTypes404Type | ListGpuTypes422Type | ListGpuTypes429Type | ListGpuTypes500Type | ListGpuTypes503Type;
    request: never;
    pathParams: ListGpuTypesPathParamsType;
    queryParams: ListGpuTypesQueryParamsType;
    headerParams: never;
    response: ListGpuTypesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListGpuTypesClient>[0]>;
        return: Awaited<ReturnType<ListGpuTypesClient>>;
    };
};
export const listGpuTypesQueryKey = (zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/zones/:zone/gpu_types", params: { zone: zone } }, ...(params ? [params] : [])] as const;
export type ListGpuTypesQueryKey = ReturnType<typeof listGpuTypesQueryKey>;
export function listGpuTypesQueryOptions(zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"], options: ListGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listGpuTypesQueryKey(zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListGpuTypes["data"], ListGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/zones/${zone}/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Gpu Types
 * @link /apis/compute/v1/zones/:zone/gpu_types
 */
export function useListGpuTypesHook<TData = ListGpuTypes["response"], TQueryData = ListGpuTypes["response"], TQueryKey extends QueryKey = ListGpuTypesQueryKey>(zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListGpuTypes["response"], ListGpuTypes["error"], TData, TQueryData, TQueryKey>>;
    client?: ListGpuTypes["client"]["parameters"];
} = {}): UseQueryResult<TData, ListGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listGpuTypesQueryKey(zone, params);
    const query = useQuery({
        ...listGpuTypesQueryOptions(zone, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listGpuTypesSuspenseQueryKey = (zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/zones/:zone/gpu_types", params: { zone: zone } }, ...(params ? [params] : [])] as const;
export type ListGpuTypesSuspenseQueryKey = ReturnType<typeof listGpuTypesSuspenseQueryKey>;
export function listGpuTypesSuspenseQueryOptions(zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"], options: ListGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listGpuTypesSuspenseQueryKey(zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListGpuTypes["data"], ListGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/zones/${zone}/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Gpu Types
 * @link /apis/compute/v1/zones/:zone/gpu_types
 */
export function useListGpuTypesHookSuspense<TData = ListGpuTypes["response"], TQueryKey extends QueryKey = ListGpuTypesSuspenseQueryKey>(zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypes["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListGpuTypes["response"], ListGpuTypes["error"], TData, TQueryKey>>;
    client?: ListGpuTypes["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listGpuTypesSuspenseQueryKey(zone, params);
    const query = useSuspenseQuery({
        ...listGpuTypesSuspenseQueryOptions(zone, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}