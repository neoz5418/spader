import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserQuotaQueryResponseType, GetUserQuotaPathParamsType, GetUserQuota400Type, GetUserQuota401Type, GetUserQuota404Type, GetUserQuota409Type, GetUserQuota412Type, GetUserQuota422Type, GetUserQuota500Type } from "../ts/GetUserQuotaType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserQuotaClient = typeof client<GetUserQuotaQueryResponseType, GetUserQuota400Type | GetUserQuota401Type | GetUserQuota404Type | GetUserQuota409Type | GetUserQuota412Type | GetUserQuota422Type | GetUserQuota500Type, never>;
type GetUserQuota = {
    data: GetUserQuotaQueryResponseType;
    error: GetUserQuota400Type | GetUserQuota401Type | GetUserQuota404Type | GetUserQuota409Type | GetUserQuota412Type | GetUserQuota422Type | GetUserQuota500Type;
    request: never;
    pathParams: GetUserQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetUserQuotaQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetUserQuotaClient>[0]>;
        return: Awaited<ReturnType<GetUserQuotaClient>>;
    };
};
export const getUserQuotaQueryKey = (username: GetUserQuotaPathParamsType["username"]) => ["v5", { url: "/apis/user/v1/users/:username/quota", params: { username: username } }] as const;
export type GetUserQuotaQueryKey = ReturnType<typeof getUserQuotaQueryKey>;
export function getUserQuotaQueryOptions(username: GetUserQuotaPathParamsType["username"], options: GetUserQuota["client"]["parameters"] = {}) {
    const queryKey = getUserQuotaQueryKey(username);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserQuota["data"], GetUserQuota["error"]>({
                method: "get",
                url: `/apis/user/v1/users/${username}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export function useGetUserQuotaHook<TData = GetUserQuota["response"], TQueryData = GetUserQuota["response"], TQueryKey extends QueryKey = GetUserQuotaQueryKey>(username: GetUserQuotaPathParamsType["username"], options: {
    query?: Partial<QueryObserverOptions<GetUserQuota["response"], GetUserQuota["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUserQuota["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUserQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserQuotaQueryKey(username);
    const query = useQuery({
        ...getUserQuotaQueryOptions(username, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUserQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserQuotaSuspenseQueryKey = (username: GetUserQuotaPathParamsType["username"]) => ["v5", { url: "/apis/user/v1/users/:username/quota", params: { username: username } }] as const;
export type GetUserQuotaSuspenseQueryKey = ReturnType<typeof getUserQuotaSuspenseQueryKey>;
export function getUserQuotaSuspenseQueryOptions(username: GetUserQuotaPathParamsType["username"], options: GetUserQuota["client"]["parameters"] = {}) {
    const queryKey = getUserQuotaSuspenseQueryKey(username);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUserQuota["data"], GetUserQuota["error"]>({
                method: "get",
                url: `/apis/user/v1/users/${username}/quota`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export function useGetUserQuotaHookSuspense<TData = GetUserQuota["response"], TQueryKey extends QueryKey = GetUserQuotaSuspenseQueryKey>(username: GetUserQuotaPathParamsType["username"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetUserQuota["response"], GetUserQuota["error"], TData, TQueryKey>>;
    client?: GetUserQuota["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUserQuota["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserQuotaSuspenseQueryKey(username);
    const query = useSuspenseQuery({
        ...getUserQuotaSuspenseQueryOptions(username, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUserQuota["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
