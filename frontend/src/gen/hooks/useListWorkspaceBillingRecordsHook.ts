import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceBillingRecordsQueryResponseType, ListWorkspaceBillingRecordsPathParamsType, ListWorkspaceBillingRecordsQueryParamsType, ListWorkspaceBillingRecords422Type } from "../ts/ListWorkspaceBillingRecordsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceBillingRecordsClient = typeof client<ListWorkspaceBillingRecordsQueryResponseType, ListWorkspaceBillingRecords422Type, never>;
type ListWorkspaceBillingRecords = {
    data: ListWorkspaceBillingRecordsQueryResponseType;
    error: ListWorkspaceBillingRecords422Type;
    request: never;
    pathParams: ListWorkspaceBillingRecordsPathParamsType;
    queryParams: ListWorkspaceBillingRecordsQueryParamsType;
    headerParams: never;
    response: ListWorkspaceBillingRecordsQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceBillingRecordsClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceBillingRecordsClient>>;
    };
};
export const listWorkspaceBillingRecordsQueryKey = (workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/billing_records", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceBillingRecordsQueryKey = ReturnType<typeof listWorkspaceBillingRecordsQueryKey>;
export function listWorkspaceBillingRecordsQueryOptions(workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"], options: ListWorkspaceBillingRecords["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceBillingRecordsQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceBillingRecords["data"], ListWorkspaceBillingRecords["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/billing_records`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Billing Records
 * @link /apis/workspace/v1/workspaces/:workspace/billing_records
 */
export function useListWorkspaceBillingRecordsHook<TData = ListWorkspaceBillingRecords["response"], TQueryData = ListWorkspaceBillingRecords["response"], TQueryKey extends QueryKey = ListWorkspaceBillingRecordsQueryKey>(workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceBillingRecords["response"], ListWorkspaceBillingRecords["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceBillingRecords["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceBillingRecords["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceBillingRecordsQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceBillingRecordsQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceBillingRecords["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceBillingRecordsSuspenseQueryKey = (workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/billing_records", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceBillingRecordsSuspenseQueryKey = ReturnType<typeof listWorkspaceBillingRecordsSuspenseQueryKey>;
export function listWorkspaceBillingRecordsSuspenseQueryOptions(workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"], options: ListWorkspaceBillingRecords["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceBillingRecordsSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceBillingRecords["data"], ListWorkspaceBillingRecords["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/billing_records`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Billing Records
 * @link /apis/workspace/v1/workspaces/:workspace/billing_records
 */
export function useListWorkspaceBillingRecordsHookSuspense<TData = ListWorkspaceBillingRecords["response"], TQueryKey extends QueryKey = ListWorkspaceBillingRecordsSuspenseQueryKey>(workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecords["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceBillingRecords["response"], ListWorkspaceBillingRecords["error"], TData, TQueryKey>>;
    client?: ListWorkspaceBillingRecords["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceBillingRecords["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceBillingRecordsSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceBillingRecordsSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceBillingRecords["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}