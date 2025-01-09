import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceCouponsQueryResponseType, ListWorkspaceCouponsPathParamsType, ListWorkspaceCouponsQueryParamsType, ListWorkspaceCoupons422Type } from "../ts/ListWorkspaceCouponsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceCouponsClient = typeof client<ListWorkspaceCouponsQueryResponseType, ListWorkspaceCoupons422Type, never>;
type ListWorkspaceCoupons = {
    data: ListWorkspaceCouponsQueryResponseType;
    error: ListWorkspaceCoupons422Type;
    request: never;
    pathParams: ListWorkspaceCouponsPathParamsType;
    queryParams: ListWorkspaceCouponsQueryParamsType;
    headerParams: never;
    response: ListWorkspaceCouponsQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceCouponsClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceCouponsClient>>;
    };
};
export const listWorkspaceCouponsQueryKey = (workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/coupons", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceCouponsQueryKey = ReturnType<typeof listWorkspaceCouponsQueryKey>;
export function listWorkspaceCouponsQueryOptions(workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"], options: ListWorkspaceCoupons["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceCouponsQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceCoupons["data"], ListWorkspaceCoupons["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/coupons`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Coupons
 * @link /apis/workspace/v1/workspaces/:workspace/coupons
 */
export function useListWorkspaceCouponsHook<TData = ListWorkspaceCoupons["response"], TQueryData = ListWorkspaceCoupons["response"], TQueryKey extends QueryKey = ListWorkspaceCouponsQueryKey>(workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceCoupons["response"], ListWorkspaceCoupons["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceCoupons["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceCoupons["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceCouponsQueryKey(workspace, params);
    const query = useQuery({
        ...listWorkspaceCouponsQueryOptions(workspace, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceCoupons["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceCouponsSuspenseQueryKey = (workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/coupons", params: { workspace: workspace } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceCouponsSuspenseQueryKey = ReturnType<typeof listWorkspaceCouponsSuspenseQueryKey>;
export function listWorkspaceCouponsSuspenseQueryOptions(workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"], options: ListWorkspaceCoupons["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceCouponsSuspenseQueryKey(workspace, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceCoupons["data"], ListWorkspaceCoupons["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/coupons`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Coupons
 * @link /apis/workspace/v1/workspaces/:workspace/coupons
 */
export function useListWorkspaceCouponsHookSuspense<TData = ListWorkspaceCoupons["response"], TQueryKey extends QueryKey = ListWorkspaceCouponsSuspenseQueryKey>(workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCoupons["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceCoupons["response"], ListWorkspaceCoupons["error"], TData, TQueryKey>>;
    client?: ListWorkspaceCoupons["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceCoupons["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceCouponsSuspenseQueryKey(workspace, params);
    const query = useSuspenseQuery({
        ...listWorkspaceCouponsSuspenseQueryOptions(workspace, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceCoupons["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
