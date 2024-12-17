import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetUserQueryResponseType, GetUserPathParamsType, GetUser422Type } from "../ts/GetUserType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetUserClient = typeof client<GetUserQueryResponseType, GetUser422Type, never>;
type GetUser = {
    data: GetUserQueryResponseType;
    error: GetUser422Type;
    request: never;
    pathParams: GetUserPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetUserQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetUserClient>[0]>;
        return: Awaited<ReturnType<GetUserClient>>;
    };
};
export const getUserQueryKey = (username: GetUserPathParamsType["username"]) => ["v5", { url: "/apis/user/v1/users/:username", params: { username: username } }] as const;
export type GetUserQueryKey = ReturnType<typeof getUserQueryKey>;
export function getUserQueryOptions(username: GetUserPathParamsType["username"], options: GetUser["client"]["parameters"] = {}) {
    const queryKey = getUserQueryKey(username);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUser["data"], GetUser["error"]>({
                method: "get",
                url: `/apis/user/v1/users/${username}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get User
 * @link /apis/user/v1/users/:username
 */
export function useGetUserHook<TData = GetUser["response"], TQueryData = GetUser["response"], TQueryKey extends QueryKey = GetUserQueryKey>(username: GetUserPathParamsType["username"], options: {
    query?: Partial<QueryObserverOptions<GetUser["response"], GetUser["error"], TData, TQueryData, TQueryKey>>;
    client?: GetUser["client"]["parameters"];
} = {}): UseQueryResult<TData, GetUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserQueryKey(username);
    const query = useQuery({
        ...getUserQueryOptions(username, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getUserSuspenseQueryKey = (username: GetUserPathParamsType["username"]) => ["v5", { url: "/apis/user/v1/users/:username", params: { username: username } }] as const;
export type GetUserSuspenseQueryKey = ReturnType<typeof getUserSuspenseQueryKey>;
export function getUserSuspenseQueryOptions(username: GetUserPathParamsType["username"], options: GetUser["client"]["parameters"] = {}) {
    const queryKey = getUserSuspenseQueryKey(username);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetUser["data"], GetUser["error"]>({
                method: "get",
                url: `/apis/user/v1/users/${username}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get User
 * @link /apis/user/v1/users/:username
 */
export function useGetUserHookSuspense<TData = GetUser["response"], TQueryKey extends QueryKey = GetUserSuspenseQueryKey>(username: GetUserPathParamsType["username"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetUser["response"], GetUser["error"], TData, TQueryKey>>;
    client?: GetUser["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getUserSuspenseQueryKey(username);
    const query = useSuspenseQuery({
        ...getUserSuspenseQueryOptions(username, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
