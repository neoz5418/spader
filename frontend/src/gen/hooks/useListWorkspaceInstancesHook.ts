import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceInstancesQueryResponseType, ListWorkspaceInstancesPathParamsType, ListWorkspaceInstancesQueryParamsType, ListWorkspaceInstances422Type } from "../ts/ListWorkspaceInstancesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceInstancesClient = typeof client<ListWorkspaceInstancesQueryResponseType, ListWorkspaceInstances422Type, never>;
type ListWorkspaceInstances = {
    data: ListWorkspaceInstancesQueryResponseType;
    error: ListWorkspaceInstances422Type;
    request: never;
    pathParams: ListWorkspaceInstancesPathParamsType;
    queryParams: ListWorkspaceInstancesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceInstancesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceInstancesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceInstancesClient>>;
    };
};
export const listWorkspaceInstancesQueryKey = (workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/instances", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceInstancesQueryKey = ReturnType<typeof listWorkspaceInstancesQueryKey>;
export function listWorkspaceInstancesQueryOptions(workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"], options: ListWorkspaceInstances["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceInstancesQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceInstances["data"], ListWorkspaceInstances["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/instances`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Instances
 * @link /apis/compute/v1/workspaces/:workspace/instances
 */
export function useListWorkspaceInstancesHook<TData = ListWorkspaceInstances["response"], TQueryData = ListWorkspaceInstances["response"], TQueryKey extends QueryKey = ListWorkspaceInstancesQueryKey>(workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceInstances["response"], ListWorkspaceInstances["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceInstances["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceInstances["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceInstancesQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceInstancesQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceInstances["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceInstancesSuspenseQueryKey = (workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/instances", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceInstancesSuspenseQueryKey = ReturnType<typeof listWorkspaceInstancesSuspenseQueryKey>;
export function listWorkspaceInstancesSuspenseQueryOptions(workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"], options: ListWorkspaceInstances["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceInstancesSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceInstances["data"], ListWorkspaceInstances["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/instances`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Instances
 * @link /apis/compute/v1/workspaces/:workspace/instances
 */
export function useListWorkspaceInstancesHookSuspense<TData = ListWorkspaceInstances["response"], TQueryKey extends QueryKey = ListWorkspaceInstancesSuspenseQueryKey>(workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstances["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceInstances["response"], ListWorkspaceInstances["error"], TData, TQueryKey>>;
    client?: ListWorkspaceInstances["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceInstances["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceInstancesSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceInstancesSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceInstances["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}