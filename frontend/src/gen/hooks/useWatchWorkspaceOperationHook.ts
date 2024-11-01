import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { WatchWorkspaceOperationQueryResponseType, WatchWorkspaceOperationPathParamsType, WatchWorkspaceOperation400Type, WatchWorkspaceOperation401Type, WatchWorkspaceOperation404Type, WatchWorkspaceOperation422Type, WatchWorkspaceOperation429Type, WatchWorkspaceOperation500Type, WatchWorkspaceOperation503Type } from "../ts/WatchWorkspaceOperationType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type WatchWorkspaceOperationClient = typeof client<WatchWorkspaceOperationQueryResponseType, WatchWorkspaceOperation400Type | WatchWorkspaceOperation401Type | WatchWorkspaceOperation404Type | WatchWorkspaceOperation422Type | WatchWorkspaceOperation429Type | WatchWorkspaceOperation500Type | WatchWorkspaceOperation503Type, never>;
type WatchWorkspaceOperation = {
    data: WatchWorkspaceOperationQueryResponseType;
    error: WatchWorkspaceOperation400Type | WatchWorkspaceOperation401Type | WatchWorkspaceOperation404Type | WatchWorkspaceOperation422Type | WatchWorkspaceOperation429Type | WatchWorkspaceOperation500Type | WatchWorkspaceOperation503Type;
    request: never;
    pathParams: WatchWorkspaceOperationPathParamsType;
    queryParams: never;
    headerParams: never;
    response: WatchWorkspaceOperationQueryResponseType;
    client: {
        parameters: Partial<Parameters<WatchWorkspaceOperationClient>[0]>;
        return: Awaited<ReturnType<WatchWorkspaceOperationClient>>;
    };
};
export const watchWorkspaceOperationQueryKey = (workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations/:uid", params: { workspace: workspace, zone: zone, uid: uid } }] as const;
export type WatchWorkspaceOperationQueryKey = ReturnType<typeof watchWorkspaceOperationQueryKey>;
export function watchWorkspaceOperationQueryOptions(workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"], options: WatchWorkspaceOperation["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceOperationQueryKey(workspace, zone, uid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceOperation["data"], WatchWorkspaceOperation["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations/${uid}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Operation
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations/:uid
 */
export function useWatchWorkspaceOperationHook<TData = WatchWorkspaceOperation["response"], TQueryData = WatchWorkspaceOperation["response"], TQueryKey extends QueryKey = WatchWorkspaceOperationQueryKey>(workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"], options: {
    query?: Partial<QueryObserverOptions<WatchWorkspaceOperation["response"], WatchWorkspaceOperation["error"], TData, TQueryData, TQueryKey>>;
    client?: WatchWorkspaceOperation["client"]["parameters"];
} = {}): UseQueryResult<TData, WatchWorkspaceOperation["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceOperationQueryKey(workspace, zone, uid);
    const query = useQuery({
        ...watchWorkspaceOperationQueryOptions(workspace, zone, uid, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, WatchWorkspaceOperation["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const watchWorkspaceOperationSuspenseQueryKey = (workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"]) => ["v5", { url: "/apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations/:uid", params: { workspace: workspace, zone: zone, uid: uid } }] as const;
export type WatchWorkspaceOperationSuspenseQueryKey = ReturnType<typeof watchWorkspaceOperationSuspenseQueryKey>;
export function watchWorkspaceOperationSuspenseQueryOptions(workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"], options: WatchWorkspaceOperation["client"]["parameters"] = {}) {
    const queryKey = watchWorkspaceOperationSuspenseQueryKey(workspace, zone, uid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<WatchWorkspaceOperation["data"], WatchWorkspaceOperation["error"]>({
                method: "get",
                url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations/${uid}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Watch Workspace Operation
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations/:uid
 */
export function useWatchWorkspaceOperationHookSuspense<TData = WatchWorkspaceOperation["response"], TQueryKey extends QueryKey = WatchWorkspaceOperationSuspenseQueryKey>(workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"], options: {
    query?: Partial<UseSuspenseQueryOptions<WatchWorkspaceOperation["response"], WatchWorkspaceOperation["error"], TData, TQueryKey>>;
    client?: WatchWorkspaceOperation["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, WatchWorkspaceOperation["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? watchWorkspaceOperationSuspenseQueryKey(workspace, zone, uid);
    const query = useSuspenseQuery({
        ...watchWorkspaceOperationSuspenseQueryOptions(workspace, zone, uid, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, WatchWorkspaceOperation["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}