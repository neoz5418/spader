import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceOperationsQueryResponseType, GetWorkspaceOperationsPathParamsType, GetWorkspaceOperationsQueryParamsType, GetWorkspaceOperations422Type } from "../ts/GetWorkspaceOperationsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceOperationsClient = typeof client<GetWorkspaceOperationsQueryResponseType, GetWorkspaceOperations422Type, never>;
type GetWorkspaceOperations = {
    data: GetWorkspaceOperationsQueryResponseType;
    error: GetWorkspaceOperations422Type;
    request: never;
    pathParams: GetWorkspaceOperationsPathParamsType;
    queryParams: GetWorkspaceOperationsQueryParamsType;
    headerParams: never;
    response: GetWorkspaceOperationsQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceOperationsClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceOperationsClient>>;
    };
};
export const getWorkspaceOperationsQueryKey = (workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/operations", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type GetWorkspaceOperationsQueryKey = ReturnType<typeof getWorkspaceOperationsQueryKey>;
export function getWorkspaceOperationsQueryOptions(workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"], options: GetWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceOperationsQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceOperations["data"], GetWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/operations`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Operations
 * @link /apis/workspace/v1/workspaces/:workspace/operations
 */
export function useGetWorkspaceOperationsHook<TData = GetWorkspaceOperations["response"], TQueryData = GetWorkspaceOperations["response"], TQueryKey extends QueryKey = GetWorkspaceOperationsQueryKey>(workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceOperations["response"], GetWorkspaceOperations["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceOperations["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceOperationsQueryKey(workspace, params);
    const query = useQuery({
        ...getWorkspaceOperationsQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceOperationsSuspenseQueryKey = (workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/operations", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type GetWorkspaceOperationsSuspenseQueryKey = ReturnType<typeof getWorkspaceOperationsSuspenseQueryKey>;
export function getWorkspaceOperationsSuspenseQueryOptions(workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"], options: GetWorkspaceOperations["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceOperationsSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceOperations["data"], GetWorkspaceOperations["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/operations`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Operations
 * @link /apis/workspace/v1/workspaces/:workspace/operations
 */
export function useGetWorkspaceOperationsHookSuspense<TData = GetWorkspaceOperations["response"], TQueryKey extends QueryKey = GetWorkspaceOperationsSuspenseQueryKey>(workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperations["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceOperations["response"], GetWorkspaceOperations["error"], TData, TQueryKey>>;
    client?: GetWorkspaceOperations["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceOperations["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceOperationsSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...getWorkspaceOperationsSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceOperations["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}