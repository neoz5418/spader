import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceResourceUsageRecordsQueryResponseType, ListWorkspaceResourceUsageRecordsPathParamsType, ListWorkspaceResourceUsageRecordsQueryParamsType, ListWorkspaceResourceUsageRecords422Type } from "../ts/ListWorkspaceResourceUsageRecordsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceResourceUsageRecordsClient = typeof client<ListWorkspaceResourceUsageRecordsQueryResponseType, ListWorkspaceResourceUsageRecords422Type, never>;
type ListWorkspaceResourceUsageRecords = {
    data: ListWorkspaceResourceUsageRecordsQueryResponseType;
    error: ListWorkspaceResourceUsageRecords422Type;
    request: never;
    pathParams: ListWorkspaceResourceUsageRecordsPathParamsType;
    queryParams: ListWorkspaceResourceUsageRecordsQueryParamsType;
    headerParams: never;
    response: ListWorkspaceResourceUsageRecordsQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceResourceUsageRecordsClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceResourceUsageRecordsClient>>;
    };
};
export const listWorkspaceResourceUsageRecordsQueryKey = (workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/resource_usage_record", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceResourceUsageRecordsQueryKey = ReturnType<typeof listWorkspaceResourceUsageRecordsQueryKey>;
export function listWorkspaceResourceUsageRecordsQueryOptions(workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"], options: ListWorkspaceResourceUsageRecords["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceResourceUsageRecordsQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceResourceUsageRecords["data"], ListWorkspaceResourceUsageRecords["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/resource_usage_record`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Resource Usage Records
 * @link /apis/workspace/v1/workspaces/:workspace/resource_usage_record
 */
export function useListWorkspaceResourceUsageRecordsHook<TData = ListWorkspaceResourceUsageRecords["response"], TQueryData = ListWorkspaceResourceUsageRecords["response"], TQueryKey extends QueryKey = ListWorkspaceResourceUsageRecordsQueryKey>(workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceResourceUsageRecords["response"], ListWorkspaceResourceUsageRecords["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceResourceUsageRecords["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceResourceUsageRecords["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceResourceUsageRecordsQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceResourceUsageRecordsQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceResourceUsageRecords["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceResourceUsageRecordsSuspenseQueryKey = (workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/resource_usage_record", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceResourceUsageRecordsSuspenseQueryKey = ReturnType<typeof listWorkspaceResourceUsageRecordsSuspenseQueryKey>;
export function listWorkspaceResourceUsageRecordsSuspenseQueryOptions(workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"], options: ListWorkspaceResourceUsageRecords["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceResourceUsageRecordsSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceResourceUsageRecords["data"], ListWorkspaceResourceUsageRecords["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/resource_usage_record`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Resource Usage Records
 * @link /apis/workspace/v1/workspaces/:workspace/resource_usage_record
 */
export function useListWorkspaceResourceUsageRecordsHookSuspense<TData = ListWorkspaceResourceUsageRecords["response"], TQueryKey extends QueryKey = ListWorkspaceResourceUsageRecordsSuspenseQueryKey>(workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecords["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceResourceUsageRecords["response"], ListWorkspaceResourceUsageRecords["error"], TData, TQueryKey>>;
    client?: ListWorkspaceResourceUsageRecords["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceResourceUsageRecords["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceResourceUsageRecordsSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceResourceUsageRecordsSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceResourceUsageRecords["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
