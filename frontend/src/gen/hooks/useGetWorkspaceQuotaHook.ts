import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceQuotaQueryResponseType, GetWorkspaceQuotaPathParamsType, GetWorkspaceQuota422Type } from "../ts/GetWorkspaceQuotaType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceQuotaClient = typeof client<GetWorkspaceQuotaQueryResponseType, GetWorkspaceQuota422Type, never>;
type GetWorkspaceQuota = {
    data: GetWorkspaceQuotaQueryResponseType;
    error: GetWorkspaceQuota422Type;
    request: never;
    pathParams: GetWorkspaceQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceQuotaQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceQuotaClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceQuotaClient>>;
    };
};
export const getWorkspaceQuotaQueryKey = (workspace: GetWorkspaceQuotaPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/quota", params: { workspace: workspace } }] as const;
export type GetWorkspaceQuotaQueryKey = ReturnType<typeof getWorkspaceQuotaQueryKey>;
export function getWorkspaceQuotaQueryOptions(workspace: GetWorkspaceQuotaPathParamsType["workspace"], options: GetWorkspaceQuota["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceQuotaQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceQuota["data"], GetWorkspaceQuota["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export function useGetWorkspaceQuotaHook<TData = GetWorkspaceQuota["response"], TQueryData = GetWorkspaceQuota["response"], TQueryKey extends QueryKey = GetWorkspaceQuotaQueryKey>(workspace: GetWorkspaceQuotaPathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceQuota["response"], GetWorkspaceQuota["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceQuota["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceQuotaQueryKey(workspace);
    const query = useQuery({
        ...getWorkspaceQuotaQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceQuotaSuspenseQueryKey = (workspace: GetWorkspaceQuotaPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/quota", params: { workspace: workspace } }] as const;
export type GetWorkspaceQuotaSuspenseQueryKey = ReturnType<typeof getWorkspaceQuotaSuspenseQueryKey>;
export function getWorkspaceQuotaSuspenseQueryOptions(workspace: GetWorkspaceQuotaPathParamsType["workspace"], options: GetWorkspaceQuota["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceQuotaSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceQuota["data"], GetWorkspaceQuota["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export function useGetWorkspaceQuotaHookSuspense<TData = GetWorkspaceQuota["response"], TQueryKey extends QueryKey = GetWorkspaceQuotaSuspenseQueryKey>(workspace: GetWorkspaceQuotaPathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceQuota["response"], GetWorkspaceQuota["error"], TData, TQueryKey>>;
    client?: GetWorkspaceQuota["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceQuotaSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...getWorkspaceQuotaSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
