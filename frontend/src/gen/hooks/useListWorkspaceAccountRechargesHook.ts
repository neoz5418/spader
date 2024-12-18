import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceAccountRechargesQueryResponseType, ListWorkspaceAccountRechargesPathParamsType, ListWorkspaceAccountRechargesQueryParamsType, ListWorkspaceAccountRecharges422Type } from "../ts/ListWorkspaceAccountRechargesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceAccountRechargesClient = typeof client<ListWorkspaceAccountRechargesQueryResponseType, ListWorkspaceAccountRecharges422Type, never>;
type ListWorkspaceAccountRecharges = {
    data: ListWorkspaceAccountRechargesQueryResponseType;
    error: ListWorkspaceAccountRecharges422Type;
    request: never;
    pathParams: ListWorkspaceAccountRechargesPathParamsType;
    queryParams: ListWorkspaceAccountRechargesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceAccountRechargesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceAccountRechargesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceAccountRechargesClient>>;
    };
};
export const listWorkspaceAccountRechargesQueryKey = (workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/account/recharges", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceAccountRechargesQueryKey = ReturnType<typeof listWorkspaceAccountRechargesQueryKey>;
export function listWorkspaceAccountRechargesQueryOptions(workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"], options: ListWorkspaceAccountRecharges["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceAccountRechargesQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceAccountRecharges["data"], ListWorkspaceAccountRecharges["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Account Recharges
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges
 */
export function useListWorkspaceAccountRechargesHook<TData = ListWorkspaceAccountRecharges["response"], TQueryData = ListWorkspaceAccountRecharges["response"], TQueryKey extends QueryKey = ListWorkspaceAccountRechargesQueryKey>(workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceAccountRecharges["response"], ListWorkspaceAccountRecharges["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceAccountRecharges["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceAccountRecharges["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceAccountRechargesQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceAccountRechargesQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceAccountRecharges["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceAccountRechargesSuspenseQueryKey = (workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/account/recharges", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceAccountRechargesSuspenseQueryKey = ReturnType<typeof listWorkspaceAccountRechargesSuspenseQueryKey>;
export function listWorkspaceAccountRechargesSuspenseQueryOptions(workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"], options: ListWorkspaceAccountRecharges["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceAccountRechargesSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceAccountRecharges["data"], ListWorkspaceAccountRecharges["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Account Recharges
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges
 */
export function useListWorkspaceAccountRechargesHookSuspense<TData = ListWorkspaceAccountRecharges["response"], TQueryKey extends QueryKey = ListWorkspaceAccountRechargesSuspenseQueryKey>(workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRecharges["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceAccountRecharges["response"], ListWorkspaceAccountRecharges["error"], TData, TQueryKey>>;
    client?: ListWorkspaceAccountRecharges["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceAccountRecharges["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceAccountRechargesSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceAccountRechargesSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceAccountRecharges["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
