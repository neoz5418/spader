import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListInstancesQueryResponseType, ListInstancesQueryParamsType, ListInstances422Type } from "../ts/ListInstancesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListInstancesClient = typeof client<ListInstancesQueryResponseType, ListInstances422Type, never>;
type ListInstances = {
    data: ListInstancesQueryResponseType;
    error: ListInstances422Type;
    request: never;
    pathParams: never;
    queryParams: ListInstancesQueryParamsType;
    headerParams: never;
    response: ListInstancesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListInstancesClient>[0]>;
        return: Awaited<ReturnType<ListInstancesClient>>;
    };
};
export const listInstancesQueryKey = (params?: ListInstances["queryParams"]) => ["v5", { url: "/apis/compute/v1/instances" }, ...(params ? [params] : [])] as const;
export type ListInstancesQueryKey = ReturnType<typeof listInstancesQueryKey>;
export function listInstancesQueryOptions(params?: ListInstances["queryParams"], options: ListInstances["client"]["parameters"] = {}) {
    const queryKey = listInstancesQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListInstances["data"], ListInstances["error"]>({
                method: "get",
                url: `/apis/compute/v1/instances`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Instances
 * @link /apis/compute/v1/instances
 */
export function useListInstancesHook<TData = ListInstances["response"], TQueryData = ListInstances["response"], TQueryKey extends QueryKey = ListInstancesQueryKey>(params?: ListInstances["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListInstances["response"], ListInstances["error"], TData, TQueryData, TQueryKey>>;
    client?: ListInstances["client"]["parameters"];
} = {}): UseQueryResult<TData, ListInstances["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listInstancesQueryKey(params);
    const query = useQuery({
        ...listInstancesQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListInstances["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listInstancesSuspenseQueryKey = (params?: ListInstances["queryParams"]) => ["v5", { url: "/apis/compute/v1/instances" }, ...(params ? [params] : [])] as const;
export type ListInstancesSuspenseQueryKey = ReturnType<typeof listInstancesSuspenseQueryKey>;
export function listInstancesSuspenseQueryOptions(params?: ListInstances["queryParams"], options: ListInstances["client"]["parameters"] = {}) {
    const queryKey = listInstancesSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListInstances["data"], ListInstances["error"]>({
                method: "get",
                url: `/apis/compute/v1/instances`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Instances
 * @link /apis/compute/v1/instances
 */
export function useListInstancesHookSuspense<TData = ListInstances["response"], TQueryKey extends QueryKey = ListInstancesSuspenseQueryKey>(params?: ListInstances["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListInstances["response"], ListInstances["error"], TData, TQueryKey>>;
    client?: ListInstances["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListInstances["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listInstancesSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listInstancesSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListInstances["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
