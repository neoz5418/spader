import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceMembersQueryResponseType, GetWorkspaceMembersPathParamsType, GetWorkspaceMembers422Type } from "../ts/GetWorkspaceMembersType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceMembersClient = typeof client<GetWorkspaceMembersQueryResponseType, GetWorkspaceMembers422Type, never>;
type GetWorkspaceMembers = {
    data: GetWorkspaceMembersQueryResponseType;
    error: GetWorkspaceMembers422Type;
    request: never;
    pathParams: GetWorkspaceMembersPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceMembersQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceMembersClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceMembersClient>>;
    };
};
export const getWorkspaceMembersQueryKey = (workspace: GetWorkspaceMembersPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/members", params: { workspace: workspace } }] as const;
export type GetWorkspaceMembersQueryKey = ReturnType<typeof getWorkspaceMembersQueryKey>;
export function getWorkspaceMembersQueryOptions(workspace: GetWorkspaceMembersPathParamsType["workspace"], options: GetWorkspaceMembers["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceMembersQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceMembers["data"], GetWorkspaceMembers["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/members`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Members
 * @link /apis/workspace/v1/workspaces/:workspace/members
 */
export function useGetWorkspaceMembersHook<TData = GetWorkspaceMembers["response"], TQueryData = GetWorkspaceMembers["response"], TQueryKey extends QueryKey = GetWorkspaceMembersQueryKey>(workspace: GetWorkspaceMembersPathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceMembers["response"], GetWorkspaceMembers["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceMembers["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceMembers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceMembersQueryKey(workspace);
    const query = useQuery({
        ...getWorkspaceMembersQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceMembers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceMembersSuspenseQueryKey = (workspace: GetWorkspaceMembersPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/members", params: { workspace: workspace } }] as const;
export type GetWorkspaceMembersSuspenseQueryKey = ReturnType<typeof getWorkspaceMembersSuspenseQueryKey>;
export function getWorkspaceMembersSuspenseQueryOptions(workspace: GetWorkspaceMembersPathParamsType["workspace"], options: GetWorkspaceMembers["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceMembersSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceMembers["data"], GetWorkspaceMembers["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/members`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Members
 * @link /apis/workspace/v1/workspaces/:workspace/members
 */
export function useGetWorkspaceMembersHookSuspense<TData = GetWorkspaceMembers["response"], TQueryKey extends QueryKey = GetWorkspaceMembersSuspenseQueryKey>(workspace: GetWorkspaceMembersPathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceMembers["response"], GetWorkspaceMembers["error"], TData, TQueryKey>>;
    client?: GetWorkspaceMembers["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceMembers["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceMembersSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...getWorkspaceMembersSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceMembers["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}