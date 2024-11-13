import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceOperationsQueryResponseType, ListWorkspaceOperationsPathParamsType, ListWorkspaceOperationsQueryParamsType, ListWorkspaceOperations400Type, ListWorkspaceOperations401Type, ListWorkspaceOperations404Type, ListWorkspaceOperations422Type, ListWorkspaceOperations429Type, ListWorkspaceOperations500Type, ListWorkspaceOperations503Type } from "../ts/ListWorkspaceOperationsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceOperationsClient = typeof client<ListWorkspaceOperationsQueryResponseType, ListWorkspaceOperations400Type | ListWorkspaceOperations401Type | ListWorkspaceOperations404Type | ListWorkspaceOperations422Type | ListWorkspaceOperations429Type | ListWorkspaceOperations500Type | ListWorkspaceOperations503Type, never>;
type ListWorkspaceOperations = {
    data: ListWorkspaceOperationsQueryResponseType;
    error: ListWorkspaceOperations400Type | ListWorkspaceOperations401Type | ListWorkspaceOperations404Type | ListWorkspaceOperations422Type | ListWorkspaceOperations429Type | ListWorkspaceOperations500Type | ListWorkspaceOperations503Type;
    request: never;
    pathParams: ListWorkspaceOperationsPathParamsType;
    queryParams: ListWorkspaceOperationsQueryParamsType;
    headerParams: never;
    response: ListWorkspaceOperationsQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceOperationsClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceOperationsClient>>;
    };
};
export const listWorkspaceOperationsQueryKey = (workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceOperationsQueryKey = ReturnType<typeof listWorkspaceOperationsQueryKey>;
export function listWorkspaceOperationsQueryOptions(workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"], options: ListWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceOperationsQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceOperations["data"], ListWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Operations
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations
 */
export function useListWorkspaceOperationsHook<TData = ListWorkspaceOperations["response"], TQueryData = ListWorkspaceOperations["response"], TQueryKey extends QueryKey = ListWorkspaceOperationsQueryKey>(workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceOperations["response"], ListWorkspaceOperations["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceOperations["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceOperationsQueryKey(workspace, zone, params);
    const query = useQuery({
        ...listWorkspaceOperationsQueryOptions(workspace, zone, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceOperationsSuspenseQueryKey = (workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceOperationsSuspenseQueryKey = ReturnType<typeof listWorkspaceOperationsSuspenseQueryKey>;
export function listWorkspaceOperationsSuspenseQueryOptions(workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"], options: ListWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceOperationsSuspenseQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceOperations["data"], ListWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Operations
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations
 */
export function useListWorkspaceOperationsHookSuspense<TData = ListWorkspaceOperations["response"], TQueryKey extends QueryKey = ListWorkspaceOperationsSuspenseQueryKey>(workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperations["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceOperations["response"], ListWorkspaceOperations["error"], TData, TQueryKey>>;
    client?: ListWorkspaceOperations["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceOperationsSuspenseQueryKey(workspace, zone, params);
    const query = useSuspenseQuery({
        ...listWorkspaceOperationsSuspenseQueryOptions(workspace, zone, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}