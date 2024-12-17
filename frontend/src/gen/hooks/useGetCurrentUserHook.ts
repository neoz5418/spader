import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetCurrentUserQueryResponseType, GetCurrentUser400Type, GetCurrentUser401Type, GetCurrentUser404Type, GetCurrentUser409Type, GetCurrentUser412Type, GetCurrentUser422Type, GetCurrentUser500Type } from "../ts/GetCurrentUserType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetCurrentUserClient = typeof client<GetCurrentUserQueryResponseType, GetCurrentUser400Type | GetCurrentUser401Type | GetCurrentUser404Type | GetCurrentUser409Type | GetCurrentUser412Type | GetCurrentUser422Type | GetCurrentUser500Type, never>;
type GetCurrentUser = {
    data: GetCurrentUserQueryResponseType;
    error: GetCurrentUser400Type | GetCurrentUser401Type | GetCurrentUser404Type | GetCurrentUser409Type | GetCurrentUser412Type | GetCurrentUser422Type | GetCurrentUser500Type;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetCurrentUserQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetCurrentUserClient>[0]>;
        return: Awaited<ReturnType<GetCurrentUserClient>>;
    };
};
export const getCurrentUserQueryKey = () => ["v5", { url: "/apis/user/v1/users/me" }] as const;
export type GetCurrentUserQueryKey = ReturnType<typeof getCurrentUserQueryKey>;
export function getCurrentUserQueryOptions(options: GetCurrentUser["client"]["parameters"] = {}) {
    const queryKey = getCurrentUserQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentUser["data"], GetCurrentUser["error"]>({
                method: "get",
                url: `/apis/user/v1/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Current User
 * @link /apis/user/v1/users/me
 */
export function useGetCurrentUserHook<TData = GetCurrentUser["response"], TQueryData = GetCurrentUser["response"], TQueryKey extends QueryKey = GetCurrentUserQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetCurrentUser["response"], GetCurrentUser["error"], TData, TQueryData, TQueryKey>>;
    client?: GetCurrentUser["client"]["parameters"];
} = {}): UseQueryResult<TData, GetCurrentUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentUserQueryKey();
    const query = useQuery({
        ...getCurrentUserQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetCurrentUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getCurrentUserSuspenseQueryKey = () => ["v5", { url: "/apis/user/v1/users/me" }] as const;
export type GetCurrentUserSuspenseQueryKey = ReturnType<typeof getCurrentUserSuspenseQueryKey>;
export function getCurrentUserSuspenseQueryOptions(options: GetCurrentUser["client"]["parameters"] = {}) {
    const queryKey = getCurrentUserSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetCurrentUser["data"], GetCurrentUser["error"]>({
                method: "get",
                url: `/apis/user/v1/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Current User
 * @link /apis/user/v1/users/me
 */
export function useGetCurrentUserHookSuspense<TData = GetCurrentUser["response"], TQueryKey extends QueryKey = GetCurrentUserSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetCurrentUser["response"], GetCurrentUser["error"], TData, TQueryKey>>;
    client?: GetCurrentUser["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetCurrentUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getCurrentUserSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getCurrentUserSuspenseQueryOptions(clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetCurrentUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
