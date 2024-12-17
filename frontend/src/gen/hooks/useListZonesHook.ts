import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListZonesQueryResponseType, ListZonesQueryParamsType, ListZones422Type } from "../ts/ListZonesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListZonesClient = typeof client<ListZonesQueryResponseType, ListZones422Type, never>;
type ListZones = {
    data: ListZonesQueryResponseType;
    error: ListZones422Type;
    request: never;
    pathParams: never;
    queryParams: ListZonesQueryParamsType;
    headerParams: never;
    response: ListZonesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListZonesClient>[0]>;
        return: Awaited<ReturnType<ListZonesClient>>;
    };
};
export const listZonesQueryKey = (params?: ListZones["queryParams"]) => ["v5", { url: "/apis/compute/v1/zones" }, ...(params ? [params] : [])] as const;
export type ListZonesQueryKey = ReturnType<typeof listZonesQueryKey>;
export function listZonesQueryOptions(params?: ListZones["queryParams"], options: ListZones["client"]["parameters"] = {}) {
    const queryKey = listZonesQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListZones["data"], ListZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/zones`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Zones
 * @link /apis/compute/v1/zones
 */
export function useListZonesHook<TData = ListZones["response"], TQueryData = ListZones["response"], TQueryKey extends QueryKey = ListZonesQueryKey>(params?: ListZones["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListZones["response"], ListZones["error"], TData, TQueryData, TQueryKey>>;
    client?: ListZones["client"]["parameters"];
} = {}): UseQueryResult<TData, ListZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listZonesQueryKey(params);
    const query = useQuery({
        ...listZonesQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listZonesSuspenseQueryKey = (params?: ListZones["queryParams"]) => ["v5", { url: "/apis/compute/v1/zones" }, ...(params ? [params] : [])] as const;
export type ListZonesSuspenseQueryKey = ReturnType<typeof listZonesSuspenseQueryKey>;
export function listZonesSuspenseQueryOptions(params?: ListZones["queryParams"], options: ListZones["client"]["parameters"] = {}) {
    const queryKey = listZonesSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListZones["data"], ListZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/zones`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Zones
 * @link /apis/compute/v1/zones
 */
export function useListZonesHookSuspense<TData = ListZones["response"], TQueryKey extends QueryKey = ListZonesSuspenseQueryKey>(params?: ListZones["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListZones["response"], ListZones["error"], TData, TQueryKey>>;
    client?: ListZones["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listZonesSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listZonesSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
