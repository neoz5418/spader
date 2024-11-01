import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceZoneGpuTypesQueryResponseType, ListWorkspaceZoneGpuTypesPathParamsType, ListWorkspaceZoneGpuTypes400Type, ListWorkspaceZoneGpuTypes401Type, ListWorkspaceZoneGpuTypes404Type, ListWorkspaceZoneGpuTypes422Type, ListWorkspaceZoneGpuTypes429Type, ListWorkspaceZoneGpuTypes500Type, ListWorkspaceZoneGpuTypes503Type } from "../ts/ListWorkspaceZoneGpuTypesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceZoneGpuTypesClient = typeof client<ListWorkspaceZoneGpuTypesQueryResponseType, ListWorkspaceZoneGpuTypes400Type | ListWorkspaceZoneGpuTypes401Type | ListWorkspaceZoneGpuTypes404Type | ListWorkspaceZoneGpuTypes422Type | ListWorkspaceZoneGpuTypes429Type | ListWorkspaceZoneGpuTypes500Type | ListWorkspaceZoneGpuTypes503Type, never>;
type ListWorkspaceZoneGpuTypes = {
    data: ListWorkspaceZoneGpuTypesQueryResponseType;
    error: ListWorkspaceZoneGpuTypes400Type | ListWorkspaceZoneGpuTypes401Type | ListWorkspaceZoneGpuTypes404Type | ListWorkspaceZoneGpuTypes422Type | ListWorkspaceZoneGpuTypes429Type | ListWorkspaceZoneGpuTypes500Type | ListWorkspaceZoneGpuTypes503Type;
    request: never;
    pathParams: ListWorkspaceZoneGpuTypesPathParamsType;
    queryParams: never;
    headerParams: never;
    response: ListWorkspaceZoneGpuTypesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceZoneGpuTypesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceZoneGpuTypesClient>>;
    };
};
export const listWorkspaceZoneGpuTypesQueryKey = (workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/gpu_types", params: { workspace: workspace, zone: zone } }] as const;
export type ListWorkspaceZoneGpuTypesQueryKey = ReturnType<typeof listWorkspaceZoneGpuTypesQueryKey>;
export function listWorkspaceZoneGpuTypesQueryOptions(workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"], options: ListWorkspaceZoneGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceZoneGpuTypesQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceZoneGpuTypes["data"], ListWorkspaceZoneGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/gpu_types`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Zone Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/gpu_types
 */
export function useListWorkspaceZoneGpuTypesHook<TData = ListWorkspaceZoneGpuTypes["response"], TQueryData = ListWorkspaceZoneGpuTypes["response"], TQueryKey extends QueryKey = ListWorkspaceZoneGpuTypesQueryKey>(workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceZoneGpuTypes["response"], ListWorkspaceZoneGpuTypes["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceZoneGpuTypes["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceZoneGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceZoneGpuTypesQueryKey(workspace, zone);
    const query = useQuery({
        ...listWorkspaceZoneGpuTypesQueryOptions(workspace, zone, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceZoneGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceZoneGpuTypesSuspenseQueryKey = (workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/gpu_types", params: { workspace: workspace, zone: zone } }] as const;
export type ListWorkspaceZoneGpuTypesSuspenseQueryKey = ReturnType<typeof listWorkspaceZoneGpuTypesSuspenseQueryKey>;
export function listWorkspaceZoneGpuTypesSuspenseQueryOptions(workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"], options: ListWorkspaceZoneGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceZoneGpuTypesSuspenseQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceZoneGpuTypes["data"], ListWorkspaceZoneGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/gpu_types`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Zone Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/gpu_types
 */
export function useListWorkspaceZoneGpuTypesHookSuspense<TData = ListWorkspaceZoneGpuTypes["response"], TQueryKey extends QueryKey = ListWorkspaceZoneGpuTypesSuspenseQueryKey>(workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceZoneGpuTypes["response"], ListWorkspaceZoneGpuTypes["error"], TData, TQueryKey>>;
    client?: ListWorkspaceZoneGpuTypes["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceZoneGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceZoneGpuTypesSuspenseQueryKey(workspace, zone);
    const query = useSuspenseQuery({
        ...listWorkspaceZoneGpuTypesSuspenseQueryOptions(workspace, zone, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceZoneGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}