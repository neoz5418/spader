import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListAcceleratorTypesQueryResponseType, ListAcceleratorTypesQueryParamsType, ListAcceleratorTypes422Type } from "../ts/ListAcceleratorTypesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListAcceleratorTypesClient = typeof client<ListAcceleratorTypesQueryResponseType, ListAcceleratorTypes422Type, never>;
type ListAcceleratorTypes = {
    data: ListAcceleratorTypesQueryResponseType;
    error: ListAcceleratorTypes422Type;
    request: never;
    pathParams: never;
    queryParams: ListAcceleratorTypesQueryParamsType;
    headerParams: never;
    response: ListAcceleratorTypesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListAcceleratorTypesClient>[0]>;
        return: Awaited<ReturnType<ListAcceleratorTypesClient>>;
    };
};
export const listAcceleratorTypesQueryKey = (params: ListAcceleratorTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/accelerator_types" }, ...(params ? [params] : [])] as const;
export type ListAcceleratorTypesQueryKey = ReturnType<typeof listAcceleratorTypesQueryKey>;
export function listAcceleratorTypesQueryOptions(params: ListAcceleratorTypes["queryParams"], options: ListAcceleratorTypes["client"]["parameters"] = {}) {
    const queryKey = listAcceleratorTypesQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListAcceleratorTypes["data"], ListAcceleratorTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/accelerator_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Accelerator Types
 * @link /apis/compute/v1/accelerator_types
 */
export function useListAcceleratorTypesHook<TData = ListAcceleratorTypes["response"], TQueryData = ListAcceleratorTypes["response"], TQueryKey extends QueryKey = ListAcceleratorTypesQueryKey>(params: ListAcceleratorTypes["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListAcceleratorTypes["response"], ListAcceleratorTypes["error"], TData, TQueryData, TQueryKey>>;
    client?: ListAcceleratorTypes["client"]["parameters"];
} = {}): UseQueryResult<TData, ListAcceleratorTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listAcceleratorTypesQueryKey(params);
    const query = useQuery({
        ...listAcceleratorTypesQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListAcceleratorTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listAcceleratorTypesSuspenseQueryKey = (params: ListAcceleratorTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/accelerator_types" }, ...(params ? [params] : [])] as const;
export type ListAcceleratorTypesSuspenseQueryKey = ReturnType<typeof listAcceleratorTypesSuspenseQueryKey>;
export function listAcceleratorTypesSuspenseQueryOptions(params: ListAcceleratorTypes["queryParams"], options: ListAcceleratorTypes["client"]["parameters"] = {}) {
    const queryKey = listAcceleratorTypesSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListAcceleratorTypes["data"], ListAcceleratorTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/accelerator_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Accelerator Types
 * @link /apis/compute/v1/accelerator_types
 */
export function useListAcceleratorTypesHookSuspense<TData = ListAcceleratorTypes["response"], TQueryKey extends QueryKey = ListAcceleratorTypesSuspenseQueryKey>(params: ListAcceleratorTypes["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListAcceleratorTypes["response"], ListAcceleratorTypes["error"], TData, TQueryKey>>;
    client?: ListAcceleratorTypes["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListAcceleratorTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listAcceleratorTypesSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listAcceleratorTypesSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListAcceleratorTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}