import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceAuditLogsQueryResponseType, GetWorkspaceAuditLogsPathParamsType, GetWorkspaceAuditLogsQueryParamsType, GetWorkspaceAuditLogs422Type } from "../ts/GetWorkspaceAuditLogsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceAuditLogsClient = typeof client<GetWorkspaceAuditLogsQueryResponseType, GetWorkspaceAuditLogs422Type, never>;
type GetWorkspaceAuditLogs = {
    data: GetWorkspaceAuditLogsQueryResponseType;
    error: GetWorkspaceAuditLogs422Type;
    request: never;
    pathParams: GetWorkspaceAuditLogsPathParamsType;
    queryParams: GetWorkspaceAuditLogsQueryParamsType;
    headerParams: never;
    response: GetWorkspaceAuditLogsQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceAuditLogsClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceAuditLogsClient>>;
    };
};
export const getWorkspaceAuditLogsQueryKey = (workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/audit_logs", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type GetWorkspaceAuditLogsQueryKey = ReturnType<typeof getWorkspaceAuditLogsQueryKey>;
export function getWorkspaceAuditLogsQueryOptions(workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"], options: GetWorkspaceAuditLogs["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceAuditLogsQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceAuditLogs["data"], GetWorkspaceAuditLogs["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/audit_logs`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Audit Logs
 * @link /apis/workspace/v1/workspaces/:workspace/audit_logs
 */
export function useGetWorkspaceAuditLogsHook<TData = GetWorkspaceAuditLogs["response"], TQueryData = GetWorkspaceAuditLogs["response"], TQueryKey extends QueryKey = GetWorkspaceAuditLogsQueryKey>(workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceAuditLogs["response"], GetWorkspaceAuditLogs["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceAuditLogs["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceAuditLogs["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceAuditLogsQueryKey(workspace, params);
    const query = useQuery({
        ...getWorkspaceAuditLogsQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceAuditLogs["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceAuditLogsSuspenseQueryKey = (workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/audit_logs", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type GetWorkspaceAuditLogsSuspenseQueryKey = ReturnType<typeof getWorkspaceAuditLogsSuspenseQueryKey>;
export function getWorkspaceAuditLogsSuspenseQueryOptions(workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"], options: GetWorkspaceAuditLogs["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceAuditLogsSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceAuditLogs["data"], GetWorkspaceAuditLogs["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/audit_logs`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Audit Logs
 * @link /apis/workspace/v1/workspaces/:workspace/audit_logs
 */
export function useGetWorkspaceAuditLogsHookSuspense<TData = GetWorkspaceAuditLogs["response"], TQueryKey extends QueryKey = GetWorkspaceAuditLogsSuspenseQueryKey>(workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogs["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceAuditLogs["response"], GetWorkspaceAuditLogs["error"], TData, TQueryKey>>;
    client?: GetWorkspaceAuditLogs["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceAuditLogs["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceAuditLogsSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...getWorkspaceAuditLogsSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceAuditLogs["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}