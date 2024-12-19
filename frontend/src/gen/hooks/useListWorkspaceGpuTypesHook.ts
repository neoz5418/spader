import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceGpuTypesQueryResponseType, ListWorkspaceGpuTypesPathParamsType, ListWorkspaceGpuTypesQueryParamsType, ListWorkspaceGpuTypes422Type } from "../ts/ListWorkspaceGpuTypesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceGpuTypesClient = typeof client<ListWorkspaceGpuTypesQueryResponseType, ListWorkspaceGpuTypes422Type, never>;
type ListWorkspaceGpuTypes = {
    data: ListWorkspaceGpuTypesQueryResponseType;
    error: ListWorkspaceGpuTypes422Type;
    request: never;
    pathParams: ListWorkspaceGpuTypesPathParamsType;
    queryParams: ListWorkspaceGpuTypesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceGpuTypesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceGpuTypesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceGpuTypesClient>>;
    };
};
export const listWorkspaceGpuTypesQueryKey = (workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/gpu_types", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceGpuTypesQueryKey = ReturnType<typeof listWorkspaceGpuTypesQueryKey>;
export function listWorkspaceGpuTypesQueryOptions(workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"], options: ListWorkspaceGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceGpuTypesQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceGpuTypes["data"], ListWorkspaceGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/gpu_types
 */
export function useListWorkspaceGpuTypesHook<TData = ListWorkspaceGpuTypes["response"], TQueryData = ListWorkspaceGpuTypes["response"], TQueryKey extends QueryKey = ListWorkspaceGpuTypesQueryKey>(workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceGpuTypes["response"], ListWorkspaceGpuTypes["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceGpuTypes["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceGpuTypesQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceGpuTypesQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceGpuTypesSuspenseQueryKey = (workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/gpu_types", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceGpuTypesSuspenseQueryKey = ReturnType<typeof listWorkspaceGpuTypesSuspenseQueryKey>;
export function listWorkspaceGpuTypesSuspenseQueryOptions(workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"], options: ListWorkspaceGpuTypes["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceGpuTypesSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceGpuTypes["data"], ListWorkspaceGpuTypes["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/gpu_types`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/gpu_types
 */
export function useListWorkspaceGpuTypesHookSuspense<TData = ListWorkspaceGpuTypes["response"], TQueryKey extends QueryKey = ListWorkspaceGpuTypesSuspenseQueryKey>(workspace: ListWorkspaceGpuTypesPathParamsType["workspace"], params?: ListWorkspaceGpuTypes["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceGpuTypes["response"], ListWorkspaceGpuTypes["error"], TData, TQueryKey>>;
    client?: ListWorkspaceGpuTypes["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceGpuTypes["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceGpuTypesSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceGpuTypesSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceGpuTypes["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}