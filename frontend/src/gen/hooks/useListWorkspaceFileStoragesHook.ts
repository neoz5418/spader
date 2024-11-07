import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceFileStoragesQueryResponseType, ListWorkspaceFileStoragesPathParamsType, ListWorkspaceFileStoragesQueryParamsType, ListWorkspaceFileStorages400Type, ListWorkspaceFileStorages401Type, ListWorkspaceFileStorages404Type, ListWorkspaceFileStorages422Type, ListWorkspaceFileStorages429Type, ListWorkspaceFileStorages500Type, ListWorkspaceFileStorages503Type } from "../ts/ListWorkspaceFileStoragesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceFileStoragesClient = typeof client<ListWorkspaceFileStoragesQueryResponseType, ListWorkspaceFileStorages400Type | ListWorkspaceFileStorages401Type | ListWorkspaceFileStorages404Type | ListWorkspaceFileStorages422Type | ListWorkspaceFileStorages429Type | ListWorkspaceFileStorages500Type | ListWorkspaceFileStorages503Type, never>;
type ListWorkspaceFileStorages = {
    data: ListWorkspaceFileStoragesQueryResponseType;
    error: ListWorkspaceFileStorages400Type | ListWorkspaceFileStorages401Type | ListWorkspaceFileStorages404Type | ListWorkspaceFileStorages422Type | ListWorkspaceFileStorages429Type | ListWorkspaceFileStorages500Type | ListWorkspaceFileStorages503Type;
    request: never;
    pathParams: ListWorkspaceFileStoragesPathParamsType;
    queryParams: ListWorkspaceFileStoragesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceFileStoragesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceFileStoragesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceFileStoragesClient>>;
    };
};
export const listWorkspaceFileStoragesQueryKey = (workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceFileStoragesQueryKey = ReturnType<typeof listWorkspaceFileStoragesQueryKey>;
export function listWorkspaceFileStoragesQueryOptions(workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"], options: ListWorkspaceFileStorages["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceFileStoragesQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceFileStorages["data"], ListWorkspaceFileStorages["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace File Storages
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages
 */
export function useListWorkspaceFileStoragesHook<TData = ListWorkspaceFileStorages["response"], TQueryData = ListWorkspaceFileStorages["response"], TQueryKey extends QueryKey = ListWorkspaceFileStoragesQueryKey>(workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceFileStorages["response"], ListWorkspaceFileStorages["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceFileStorages["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceFileStorages["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceFileStoragesQueryKey(workspace, zone, params);
    const query = useQuery({
        ...listWorkspaceFileStoragesQueryOptions(workspace, zone, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceFileStorages["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceFileStoragesSuspenseQueryKey = (workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceFileStoragesSuspenseQueryKey = ReturnType<typeof listWorkspaceFileStoragesSuspenseQueryKey>;
export function listWorkspaceFileStoragesSuspenseQueryOptions(workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"], options: ListWorkspaceFileStorages["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceFileStoragesSuspenseQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceFileStorages["data"], ListWorkspaceFileStorages["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace File Storages
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages
 */
export function useListWorkspaceFileStoragesHookSuspense<TData = ListWorkspaceFileStorages["response"], TQueryKey extends QueryKey = ListWorkspaceFileStoragesSuspenseQueryKey>(workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStorages["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceFileStorages["response"], ListWorkspaceFileStorages["error"], TData, TQueryKey>>;
    client?: ListWorkspaceFileStorages["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceFileStorages["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceFileStoragesSuspenseQueryKey(workspace, zone, params);
    const query = useSuspenseQuery({
        ...listWorkspaceFileStoragesSuspenseQueryOptions(workspace, zone, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceFileStorages["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
