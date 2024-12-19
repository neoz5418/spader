import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListInstancePortForwardsQueryResponseType, ListInstancePortForwardsPathParamsType, ListInstancePortForwards422Type } from "../ts/ListInstancePortForwardsType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListInstancePortForwardsClient = typeof client<ListInstancePortForwardsQueryResponseType, ListInstancePortForwards422Type, never>;
type ListInstancePortForwards = {
    data: ListInstancePortForwardsQueryResponseType;
    error: ListInstancePortForwards422Type;
    request: never;
    pathParams: ListInstancePortForwardsPathParamsType;
    queryParams: never;
    headerParams: never;
    response: ListInstancePortForwardsQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListInstancePortForwardsClient>[0]>;
        return: Awaited<ReturnType<ListInstancePortForwardsClient>>;
    };
};
export const listInstancePortForwardsQueryKey = (workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type ListInstancePortForwardsQueryKey = ReturnType<typeof listInstancePortForwardsQueryKey>;
export function listInstancePortForwardsQueryOptions(workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"], options: ListInstancePortForwards["client"]["parameters"] = {}) {
    const queryKey = listInstancePortForwardsQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListInstancePortForwards["data"], ListInstancePortForwards["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forwards`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Instance Port Forwards
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards
 */
export function useListInstancePortForwardsHook<TData = ListInstancePortForwards["response"], TQueryData = ListInstancePortForwards["response"], TQueryKey extends QueryKey = ListInstancePortForwardsQueryKey>(workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"], options: {
    query?: Partial<QueryObserverOptions<ListInstancePortForwards["response"], ListInstancePortForwards["error"], TData, TQueryData, TQueryKey>>;
    client?: ListInstancePortForwards["client"]["parameters"];
} = {}): UseQueryResult<TData, ListInstancePortForwards["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listInstancePortForwardsQueryKey(workspace, zone, name);
    const query = useQuery({
        ...listInstancePortForwardsQueryOptions(workspace, zone, name, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListInstancePortForwards["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listInstancePortForwardsSuspenseQueryKey = (workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type ListInstancePortForwardsSuspenseQueryKey = ReturnType<typeof listInstancePortForwardsSuspenseQueryKey>;
export function listInstancePortForwardsSuspenseQueryOptions(workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"], options: ListInstancePortForwards["client"]["parameters"] = {}) {
    const queryKey = listInstancePortForwardsSuspenseQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListInstancePortForwards["data"], ListInstancePortForwards["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forwards`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Instance Port Forwards
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards
 */
export function useListInstancePortForwardsHookSuspense<TData = ListInstancePortForwards["response"], TQueryKey extends QueryKey = ListInstancePortForwardsSuspenseQueryKey>(workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListInstancePortForwards["response"], ListInstancePortForwards["error"], TData, TQueryKey>>;
    client?: ListInstancePortForwards["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListInstancePortForwards["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listInstancePortForwardsSuspenseQueryKey(workspace, zone, name);
    const query = useSuspenseQuery({
        ...listInstancePortForwardsSuspenseQueryOptions(workspace, zone, name, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListInstancePortForwards["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}