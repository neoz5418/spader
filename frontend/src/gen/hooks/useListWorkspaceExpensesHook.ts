import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceExpensesQueryResponseType, ListWorkspaceExpensesPathParamsType, ListWorkspaceExpensesQueryParamsType, ListWorkspaceExpenses422Type } from "../ts/ListWorkspaceExpensesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceExpensesClient = typeof client<ListWorkspaceExpensesQueryResponseType, ListWorkspaceExpenses422Type, never>;
type ListWorkspaceExpenses = {
    data: ListWorkspaceExpensesQueryResponseType;
    error: ListWorkspaceExpenses422Type;
    request: never;
    pathParams: ListWorkspaceExpensesPathParamsType;
    queryParams: ListWorkspaceExpensesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceExpensesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceExpensesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceExpensesClient>>;
    };
};
export const listWorkspaceExpensesQueryKey = (workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/expenses", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceExpensesQueryKey = ReturnType<typeof listWorkspaceExpensesQueryKey>;
export function listWorkspaceExpensesQueryOptions(workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"], options: ListWorkspaceExpenses["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceExpensesQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceExpenses["data"], ListWorkspaceExpenses["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/expenses`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Expenses
 * @link /apis/workspace/v1/workspaces/:workspace/expenses
 */
export function useListWorkspaceExpensesHook<TData = ListWorkspaceExpenses["response"], TQueryData = ListWorkspaceExpenses["response"], TQueryKey extends QueryKey = ListWorkspaceExpensesQueryKey>(workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceExpenses["response"], ListWorkspaceExpenses["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceExpenses["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceExpenses["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceExpensesQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceExpensesQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceExpenses["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceExpensesSuspenseQueryKey = (workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/expenses", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceExpensesSuspenseQueryKey = ReturnType<typeof listWorkspaceExpensesSuspenseQueryKey>;
export function listWorkspaceExpensesSuspenseQueryOptions(workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"], options: ListWorkspaceExpenses["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceExpensesSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceExpenses["data"], ListWorkspaceExpenses["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/expenses`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Expenses
 * @link /apis/workspace/v1/workspaces/:workspace/expenses
 */
export function useListWorkspaceExpensesHookSuspense<TData = ListWorkspaceExpenses["response"], TQueryKey extends QueryKey = ListWorkspaceExpensesSuspenseQueryKey>(workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpenses["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceExpenses["response"], ListWorkspaceExpenses["error"], TData, TQueryKey>>;
    client?: ListWorkspaceExpenses["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceExpenses["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceExpensesSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceExpensesSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceExpenses["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}