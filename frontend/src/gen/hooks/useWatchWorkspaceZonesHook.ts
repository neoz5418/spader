import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WatchWorkspaceZonesQueryResponseType, WatchWorkspaceZonesPathParamsType, WatchWorkspaceZones400Type, WatchWorkspaceZones401Type, WatchWorkspaceZones404Type, WatchWorkspaceZones422Type, WatchWorkspaceZones429Type, WatchWorkspaceZones500Type, WatchWorkspaceZones503Type } from "../ts/WatchWorkspaceZonesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WatchWorkspaceZonesClient = typeof client<WatchWorkspaceZonesQueryResponseType, WatchWorkspaceZones400Type | WatchWorkspaceZones401Type | WatchWorkspaceZones404Type | WatchWorkspaceZones422Type | WatchWorkspaceZones429Type | WatchWorkspaceZones500Type | WatchWorkspaceZones503Type, never>;
type WatchWorkspaceZones = {
    data: WatchWorkspaceZonesQueryResponseType;
    error: WatchWorkspaceZones400Type | WatchWorkspaceZones401Type | WatchWorkspaceZones404Type | WatchWorkspaceZones422Type | WatchWorkspaceZones429Type | WatchWorkspaceZones500Type | WatchWorkspaceZones503Type;
    request: never;
    pathParams: WatchWorkspaceZonesPathParamsType;
    queryParams: never;
    headerParams: never;
    response: WatchWorkspaceZonesQueryResponseType;
    client: {
        parameters: Partial<Parameters<WatchWorkspaceZonesClient>[0]>;
        return: Awaited<ReturnType<WatchWorkspaceZonesClient>>;
    };
};
export const watchWorkspaceZonesQueryKey = (workspace: WatchWorkspaceZonesPathParamsType["workspace"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones", params: { workspace: workspace } }] as const;
export type WatchWorkspaceZonesQueryKey = ReturnType<typeof watchWorkspaceZonesQueryKey>;
export function watchWorkspaceZonesQueryOptions(workspace: WatchWorkspaceZonesPathParamsType["workspace"], options: WatchWorkspaceZones["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceZonesQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceZones["data"], WatchWorkspaceZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Zones
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones
 */
export function useWatchWorkspaceZonesHook<TData = WatchWorkspaceZones["response"], TQueryData = WatchWorkspaceZones["response"], TQueryKey extends QueryKey = WatchWorkspaceZonesQueryKey>(workspace: WatchWorkspaceZonesPathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<WatchWorkspaceZones["response"], WatchWorkspaceZones["error"], TData, TQueryData, TQueryKey>>;
    client?: WatchWorkspaceZones["client"]["parameters"];
} = {}): UseQueryResult<TData, WatchWorkspaceZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceZonesQueryKey(workspace);
    const query = useQuery({
        ...watchWorkspaceZonesQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WatchWorkspaceZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const watchWorkspaceZonesSuspenseQueryKey = (workspace: WatchWorkspaceZonesPathParamsType["workspace"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones", params: { workspace: workspace } }] as const;
export type WatchWorkspaceZonesSuspenseQueryKey = ReturnType<typeof watchWorkspaceZonesSuspenseQueryKey>;
export function watchWorkspaceZonesSuspenseQueryOptions(workspace: WatchWorkspaceZonesPathParamsType["workspace"], options: WatchWorkspaceZones["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceZonesSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceZones["data"], WatchWorkspaceZones["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Zones
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones
 */
export function useWatchWorkspaceZonesHookSuspense<TData = WatchWorkspaceZones["response"], TQueryKey extends QueryKey = WatchWorkspaceZonesSuspenseQueryKey>(workspace: WatchWorkspaceZonesPathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<WatchWorkspaceZones["response"], WatchWorkspaceZones["error"], TData, TQueryKey>>;
    client?: WatchWorkspaceZones["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WatchWorkspaceZones["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceZonesSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...watchWorkspaceZonesSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WatchWorkspaceZones["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}