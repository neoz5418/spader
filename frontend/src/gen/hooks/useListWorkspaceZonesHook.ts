import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceZonesQueryResponseType, ListWorkspaceZonesPathParamsType, ListWorkspaceZonesQueryParamsType, ListWorkspaceZones422Type } from "../ts/ListWorkspaceZonesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceZonesClient = typeof client<ListWorkspaceZonesQueryResponseType, ListWorkspaceZones422Type, never>;
type ListWorkspaceZones = {
    data: ListWorkspaceZonesQueryResponseType;
    error: ListWorkspaceZones422Type;
    request: never;
    pathParams: ListWorkspaceZonesPathParamsType;
    queryParams: ListWorkspaceZonesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceZonesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceZonesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceZonesClient>>;
    };
};
export const listWorkspaceZonesQueryKey = (workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceZonesQueryKey = ReturnType<typeof listWorkspaceZonesQueryKey>;
export function listWorkspaceZonesQueryOptions(workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"], options: ListWorkspaceZones["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceZonesQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceZones["data"], ListWorkspaceZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Zones
 * @link /apis/compute/v1/workspaces/:workspace/zones
 */
export function useListWorkspaceZonesHook<TData = ListWorkspaceZones["response"], TQueryData = ListWorkspaceZones["response"], TQueryKey extends QueryKey = ListWorkspaceZonesQueryKey>(workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceZones["response"], ListWorkspaceZones["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceZones["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceZonesQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceZonesQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceZonesSuspenseQueryKey = (workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceZonesSuspenseQueryKey = ReturnType<typeof listWorkspaceZonesSuspenseQueryKey>;
export function listWorkspaceZonesSuspenseQueryOptions(workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"], options: ListWorkspaceZones["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceZonesSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceZones["data"], ListWorkspaceZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Zones
 * @link /apis/compute/v1/workspaces/:workspace/zones
 */
export function useListWorkspaceZonesHookSuspense<TData = ListWorkspaceZones["response"], TQueryKey extends QueryKey = ListWorkspaceZonesSuspenseQueryKey>(workspace: ListWorkspaceZonesPathParamsType["workspace"], params?: ListWorkspaceZones["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceZones["response"], ListWorkspaceZones["error"], TData, TQueryKey>>;
    client?: ListWorkspaceZones["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceZonesSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceZonesSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
