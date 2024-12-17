import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceQueryResponseType, GetWorkspacePathParamsType, GetWorkspace422Type } from "../ts/GetWorkspaceType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceClient = typeof client<GetWorkspaceQueryResponseType, GetWorkspace422Type, never>;
type GetWorkspace = {
    data: GetWorkspaceQueryResponseType;
    error: GetWorkspace422Type;
    request: never;
    pathParams: GetWorkspacePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceClient>>;
    };
};
export const getWorkspaceQueryKey = (workspace: GetWorkspacePathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace", params: { workspace: workspace } }] as const;
export type GetWorkspaceQueryKey = ReturnType<typeof getWorkspaceQueryKey>;
export function getWorkspaceQueryOptions(workspace: GetWorkspacePathParamsType["workspace"], options: GetWorkspace["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspace["data"], GetWorkspace["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace
 * @link /apis/workspace/v1/workspaces/:workspace
 */
export function useGetWorkspaceHook<TData = GetWorkspace["response"], TQueryData = GetWorkspace["response"], TQueryKey extends QueryKey = GetWorkspaceQueryKey>(workspace: GetWorkspacePathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspace["response"], GetWorkspace["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspace["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspace["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceQueryKey(workspace);
    const query = useQuery({
        ...getWorkspaceQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspace["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceSuspenseQueryKey = (workspace: GetWorkspacePathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace", params: { workspace: workspace } }] as const;
export type GetWorkspaceSuspenseQueryKey = ReturnType<typeof getWorkspaceSuspenseQueryKey>;
export function getWorkspaceSuspenseQueryOptions(workspace: GetWorkspacePathParamsType["workspace"], options: GetWorkspace["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspace["data"], GetWorkspace["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace
 * @link /apis/workspace/v1/workspaces/:workspace
 */
export function useGetWorkspaceHookSuspense<TData = GetWorkspace["response"], TQueryKey extends QueryKey = GetWorkspaceSuspenseQueryKey>(workspace: GetWorkspacePathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspace["response"], GetWorkspace["error"], TData, TQueryKey>>;
    client?: GetWorkspace["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspace["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...getWorkspaceSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspace["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
