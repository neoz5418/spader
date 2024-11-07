import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListUserWorkspacesQueryResponseType, ListUserWorkspacesPathParamsType, ListUserWorkspacesQueryParamsType, ListUserWorkspaces400Type, ListUserWorkspaces401Type, ListUserWorkspaces404Type, ListUserWorkspaces422Type, ListUserWorkspaces429Type, ListUserWorkspaces500Type, ListUserWorkspaces503Type } from "../ts/ListUserWorkspacesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListUserWorkspacesClient = typeof client<ListUserWorkspacesQueryResponseType, ListUserWorkspaces400Type | ListUserWorkspaces401Type | ListUserWorkspaces404Type | ListUserWorkspaces422Type | ListUserWorkspaces429Type | ListUserWorkspaces500Type | ListUserWorkspaces503Type, never>;
type ListUserWorkspaces = {
    data: ListUserWorkspacesQueryResponseType;
    error: ListUserWorkspaces400Type | ListUserWorkspaces401Type | ListUserWorkspaces404Type | ListUserWorkspaces422Type | ListUserWorkspaces429Type | ListUserWorkspaces500Type | ListUserWorkspaces503Type;
    request: never;
    pathParams: ListUserWorkspacesPathParamsType;
    queryParams: ListUserWorkspacesQueryParamsType;
    headerParams: never;
    response: ListUserWorkspacesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListUserWorkspacesClient>[0]>;
        return: Awaited<ReturnType<ListUserWorkspacesClient>>;
    };
};
export const listUserWorkspacesQueryKey = (username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"]) => ["v5", { url: "/apis/workspace/v1/users/:username/workspaces", params: { username: username } }, ...(params ? [params] : [])] as const;
export type ListUserWorkspacesQueryKey = ReturnType<typeof listUserWorkspacesQueryKey>;
export function listUserWorkspacesQueryOptions(username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"], options: ListUserWorkspaces["client"]["parameters"] = {}) {
    const queryKey = listUserWorkspacesQueryKey(username, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListUserWorkspaces["data"], ListUserWorkspaces["error"]>({
                method: "get",
                url: `/apis/workspace/v1/users/${username}/workspaces`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List User Workspaces
 * @link /apis/workspace/v1/users/:username/workspaces
 */
export function useListUserWorkspacesHook<TData = ListUserWorkspaces["response"], TQueryData = ListUserWorkspaces["response"], TQueryKey extends QueryKey = ListUserWorkspacesQueryKey>(username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListUserWorkspaces["response"], ListUserWorkspaces["error"], TData, TQueryData, TQueryKey>>;
    client?: ListUserWorkspaces["client"]["parameters"];
} = {}): UseQueryResult<TData, ListUserWorkspaces["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listUserWorkspacesQueryKey(username, params);
    const query = useQuery({
        ...listUserWorkspacesQueryOptions(username, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListUserWorkspaces["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listUserWorkspacesSuspenseQueryKey = (username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"]) => ["v5", { url: "/apis/workspace/v1/users/:username/workspaces", params: { username: username } }, ...(params ? [params] : [])] as const;
export type ListUserWorkspacesSuspenseQueryKey = ReturnType<typeof listUserWorkspacesSuspenseQueryKey>;
export function listUserWorkspacesSuspenseQueryOptions(username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"], options: ListUserWorkspaces["client"]["parameters"] = {}) {
    const queryKey = listUserWorkspacesSuspenseQueryKey(username, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListUserWorkspaces["data"], ListUserWorkspaces["error"]>({
                method: "get",
                url: `/apis/workspace/v1/users/${username}/workspaces`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List User Workspaces
 * @link /apis/workspace/v1/users/:username/workspaces
 */
export function useListUserWorkspacesHookSuspense<TData = ListUserWorkspaces["response"], TQueryKey extends QueryKey = ListUserWorkspacesSuspenseQueryKey>(username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspaces["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListUserWorkspaces["response"], ListUserWorkspaces["error"], TData, TQueryKey>>;
    client?: ListUserWorkspaces["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListUserWorkspaces["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listUserWorkspacesSuspenseQueryKey(username, params);
    const query = useSuspenseQuery({
        ...listUserWorkspacesSuspenseQueryOptions(username, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListUserWorkspaces["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
