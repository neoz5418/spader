import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceAccountQueryResponseType, GetWorkspaceAccountPathParamsType, GetWorkspaceAccount422Type } from "../ts/GetWorkspaceAccountType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceAccountClient = typeof client<GetWorkspaceAccountQueryResponseType, GetWorkspaceAccount422Type, never>;
type GetWorkspaceAccount = {
    data: GetWorkspaceAccountQueryResponseType;
    error: GetWorkspaceAccount422Type;
    request: never;
    pathParams: GetWorkspaceAccountPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceAccountQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceAccountClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceAccountClient>>;
    };
};
export const getWorkspaceAccountQueryKey = (workspace: GetWorkspaceAccountPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/account", params: { workspace: workspace } }] as const;
export type GetWorkspaceAccountQueryKey = ReturnType<typeof getWorkspaceAccountQueryKey>;
export function getWorkspaceAccountQueryOptions(workspace: GetWorkspaceAccountPathParamsType["workspace"], options: GetWorkspaceAccount["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceAccountQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceAccount["data"], GetWorkspaceAccount["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/account`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account
 */
export function useGetWorkspaceAccountHook<TData = GetWorkspaceAccount["response"], TQueryData = GetWorkspaceAccount["response"], TQueryKey extends QueryKey = GetWorkspaceAccountQueryKey>(workspace: GetWorkspaceAccountPathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceAccount["response"], GetWorkspaceAccount["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceAccount["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceAccount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceAccountQueryKey(workspace);
    const query = useQuery({
        ...getWorkspaceAccountQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceAccount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceAccountSuspenseQueryKey = (workspace: GetWorkspaceAccountPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/account", params: { workspace: workspace } }] as const;
export type GetWorkspaceAccountSuspenseQueryKey = ReturnType<typeof getWorkspaceAccountSuspenseQueryKey>;
export function getWorkspaceAccountSuspenseQueryOptions(workspace: GetWorkspaceAccountPathParamsType["workspace"], options: GetWorkspaceAccount["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceAccountSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceAccount["data"], GetWorkspaceAccount["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/account`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account
 */
export function useGetWorkspaceAccountHookSuspense<TData = GetWorkspaceAccount["response"], TQueryKey extends QueryKey = GetWorkspaceAccountSuspenseQueryKey>(workspace: GetWorkspaceAccountPathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceAccount["response"], GetWorkspaceAccount["error"], TData, TQueryKey>>;
    client?: GetWorkspaceAccount["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceAccount["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceAccountSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...getWorkspaceAccountSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceAccount["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
