import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspacesQueryResponseType, ListWorkspacesQueryParamsType, ListWorkspaces422Type } from "../ts/ListWorkspacesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspacesClient = typeof client<ListWorkspacesQueryResponseType, ListWorkspaces422Type, never>;
type ListWorkspaces = {
    data: ListWorkspacesQueryResponseType;
    error: ListWorkspaces422Type;
    request: never;
    pathParams: never;
    queryParams: ListWorkspacesQueryParamsType;
    headerParams: never;
    response: ListWorkspacesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspacesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspacesClient>>;
    };
};
export const listWorkspacesQueryKey = (params?: ListWorkspaces["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces" }, ...(params ? [params] : [])] as const;
export type ListWorkspacesQueryKey = ReturnType<typeof listWorkspacesQueryKey>;
export function listWorkspacesQueryOptions(params?: ListWorkspaces["queryParams"], options: ListWorkspaces["client"]["parameters"] = {}) {
    const queryKey = listWorkspacesQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaces["data"], ListWorkspaces["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspaces
 * @link /apis/workspace/v1/workspaces
 */
export function useListWorkspacesHook<TData = ListWorkspaces["response"], TQueryData = ListWorkspaces["response"], TQueryKey extends QueryKey = ListWorkspacesQueryKey>(params?: ListWorkspaces["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaces["response"], ListWorkspaces["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaces["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaces["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspacesQueryKey(params);
    const query = useQuery({
        ...listWorkspacesQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaces["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspacesSuspenseQueryKey = (params?: ListWorkspaces["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces" }, ...(params ? [params] : [])] as const;
export type ListWorkspacesSuspenseQueryKey = ReturnType<typeof listWorkspacesSuspenseQueryKey>;
export function listWorkspacesSuspenseQueryOptions(params?: ListWorkspaces["queryParams"], options: ListWorkspaces["client"]["parameters"] = {}) {
    const queryKey = listWorkspacesSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaces["data"], ListWorkspaces["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspaces
 * @link /apis/workspace/v1/workspaces
 */
export function useListWorkspacesHookSuspense<TData = ListWorkspaces["response"], TQueryKey extends QueryKey = ListWorkspacesSuspenseQueryKey>(params?: ListWorkspaces["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaces["response"], ListWorkspaces["error"], TData, TQueryKey>>;
    client?: ListWorkspaces["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaces["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspacesSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...listWorkspacesSuspenseQueryOptions(params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaces["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
