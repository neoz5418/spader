import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WatchWorkspaceOperationsQueryResponseType, WatchWorkspaceOperationsPathParamsType, WatchWorkspaceOperations400Type, WatchWorkspaceOperations401Type, WatchWorkspaceOperations404Type, WatchWorkspaceOperations422Type, WatchWorkspaceOperations429Type, WatchWorkspaceOperations500Type, WatchWorkspaceOperations503Type } from "../ts/WatchWorkspaceOperationsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WatchWorkspaceOperationsClient = typeof client<WatchWorkspaceOperationsQueryResponseType, WatchWorkspaceOperations400Type | WatchWorkspaceOperations401Type | WatchWorkspaceOperations404Type | WatchWorkspaceOperations422Type | WatchWorkspaceOperations429Type | WatchWorkspaceOperations500Type | WatchWorkspaceOperations503Type, never>;
type WatchWorkspaceOperations = {
    data: WatchWorkspaceOperationsQueryResponseType;
    error: WatchWorkspaceOperations400Type | WatchWorkspaceOperations401Type | WatchWorkspaceOperations404Type | WatchWorkspaceOperations422Type | WatchWorkspaceOperations429Type | WatchWorkspaceOperations500Type | WatchWorkspaceOperations503Type;
    request: never;
    pathParams: WatchWorkspaceOperationsPathParamsType;
    queryParams: never;
    headerParams: never;
    response: WatchWorkspaceOperationsQueryResponseType;
    client: {
        parameters: Partial<Parameters<WatchWorkspaceOperationsClient>[0]>;
        return: Awaited<ReturnType<WatchWorkspaceOperationsClient>>;
    };
};
export const watchWorkspaceOperationsQueryKey = (workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations", params: { workspace: workspace, zone: zone } }] as const;
export type WatchWorkspaceOperationsQueryKey = ReturnType<typeof watchWorkspaceOperationsQueryKey>;
export function watchWorkspaceOperationsQueryOptions(workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"], options: WatchWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceOperationsQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceOperations["data"], WatchWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Operations
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations
 */
export function useWatchWorkspaceOperationsHook<TData = WatchWorkspaceOperations["response"], TQueryData = WatchWorkspaceOperations["response"], TQueryKey extends QueryKey = WatchWorkspaceOperationsQueryKey>(workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"], options: {
    query?: Partial<QueryObserverOptions<WatchWorkspaceOperations["response"], WatchWorkspaceOperations["error"], TData, TQueryData, TQueryKey>>;
    client?: WatchWorkspaceOperations["client"]["parameters"];
} = {}): UseQueryResult<TData, WatchWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceOperationsQueryKey(workspace, zone);
    const query = useQuery({
        ...watchWorkspaceOperationsQueryOptions(workspace, zone, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WatchWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const watchWorkspaceOperationsSuspenseQueryKey = (workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations", params: { workspace: workspace, zone: zone } }] as const;
export type WatchWorkspaceOperationsSuspenseQueryKey = ReturnType<typeof watchWorkspaceOperationsSuspenseQueryKey>;
export function watchWorkspaceOperationsSuspenseQueryOptions(workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"], options: WatchWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceOperationsSuspenseQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceOperations["data"], WatchWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Operations
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations
 */
export function useWatchWorkspaceOperationsHookSuspense<TData = WatchWorkspaceOperations["response"], TQueryKey extends QueryKey = WatchWorkspaceOperationsSuspenseQueryKey>(workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"], options: {
    query?: Partial<UseSuspenseQueryOptions<WatchWorkspaceOperations["response"], WatchWorkspaceOperations["error"], TData, TQueryKey>>;
    client?: WatchWorkspaceOperations["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WatchWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceOperationsSuspenseQueryKey(workspace, zone);
    const query = useSuspenseQuery({
        ...watchWorkspaceOperationsSuspenseQueryOptions(workspace, zone, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WatchWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
