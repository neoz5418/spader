import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceZoneQuotaQueryResponseType, GetWorkspaceZoneQuotaPathParamsType, GetWorkspaceZoneQuota400Type, GetWorkspaceZoneQuota401Type, GetWorkspaceZoneQuota404Type, GetWorkspaceZoneQuota409Type, GetWorkspaceZoneQuota412Type, GetWorkspaceZoneQuota422Type, GetWorkspaceZoneQuota500Type } from "../ts/GetWorkspaceZoneQuotaType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceZoneQuotaClient = typeof client<GetWorkspaceZoneQuotaQueryResponseType, GetWorkspaceZoneQuota400Type | GetWorkspaceZoneQuota401Type | GetWorkspaceZoneQuota404Type | GetWorkspaceZoneQuota409Type | GetWorkspaceZoneQuota412Type | GetWorkspaceZoneQuota422Type | GetWorkspaceZoneQuota500Type, never>;
type GetWorkspaceZoneQuota = {
    data: GetWorkspaceZoneQuotaQueryResponseType;
    error: GetWorkspaceZoneQuota400Type | GetWorkspaceZoneQuota401Type | GetWorkspaceZoneQuota404Type | GetWorkspaceZoneQuota409Type | GetWorkspaceZoneQuota412Type | GetWorkspaceZoneQuota422Type | GetWorkspaceZoneQuota500Type;
    request: never;
    pathParams: GetWorkspaceZoneQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceZoneQuotaQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceZoneQuotaClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceZoneQuotaClient>>;
    };
};
export const getWorkspaceZoneQuotaQueryKey = (workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/quota", params: { workspace: workspace, zone: zone } }] as const;
export type GetWorkspaceZoneQuotaQueryKey = ReturnType<typeof getWorkspaceZoneQuotaQueryKey>;
export function getWorkspaceZoneQuotaQueryOptions(workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"], options: GetWorkspaceZoneQuota["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceZoneQuotaQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceZoneQuota["data"], GetWorkspaceZoneQuota["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Zone Quota
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/quota
 */
export function useGetWorkspaceZoneQuotaHook<TData = GetWorkspaceZoneQuota["response"], TQueryData = GetWorkspaceZoneQuota["response"], TQueryKey extends QueryKey = GetWorkspaceZoneQuotaQueryKey>(workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceZoneQuota["response"], GetWorkspaceZoneQuota["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceZoneQuota["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceZoneQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceZoneQuotaQueryKey(workspace, zone);
    const query = useQuery({
        ...getWorkspaceZoneQuotaQueryOptions(workspace, zone, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceZoneQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceZoneQuotaSuspenseQueryKey = (workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/quota", params: { workspace: workspace, zone: zone } }] as const;
export type GetWorkspaceZoneQuotaSuspenseQueryKey = ReturnType<typeof getWorkspaceZoneQuotaSuspenseQueryKey>;
export function getWorkspaceZoneQuotaSuspenseQueryOptions(workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"], options: GetWorkspaceZoneQuota["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceZoneQuotaSuspenseQueryKey(workspace, zone);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceZoneQuota["data"], GetWorkspaceZoneQuota["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Zone Quota
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/quota
 */
export function useGetWorkspaceZoneQuotaHookSuspense<TData = GetWorkspaceZoneQuota["response"], TQueryKey extends QueryKey = GetWorkspaceZoneQuotaSuspenseQueryKey>(workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceZoneQuota["response"], GetWorkspaceZoneQuota["error"], TData, TQueryKey>>;
    client?: GetWorkspaceZoneQuota["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceZoneQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceZoneQuotaSuspenseQueryKey(workspace, zone);
    const query = useSuspenseQuery({
        ...getWorkspaceZoneQuotaSuspenseQueryOptions(workspace, zone, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceZoneQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
