import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetInstanceQueryResponseType, GetInstancePathParamsType, GetInstance422Type } from "../ts/GetInstanceType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetInstanceClient = typeof client<GetInstanceQueryResponseType, GetInstance422Type, never>;
type GetInstance = {
    data: GetInstanceQueryResponseType;
    error: GetInstance422Type;
    request: never;
    pathParams: GetInstancePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetInstanceQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetInstanceClient>[0]>;
        return: Awaited<ReturnType<GetInstanceClient>>;
    };
};
export const getInstanceQueryKey = (workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type GetInstanceQueryKey = ReturnType<typeof getInstanceQueryKey>;
export function getInstanceQueryOptions(workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"], options: GetInstance["client"]["parameters"] = {}) {
    const queryKey = getInstanceQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetInstance["data"], GetInstance["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name
 */
export function useGetInstanceHook<TData = GetInstance["response"], TQueryData = GetInstance["response"], TQueryKey extends QueryKey = GetInstanceQueryKey>(workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"], options: {
    query?: Partial<QueryObserverOptions<GetInstance["response"], GetInstance["error"], TData, TQueryData, TQueryKey>>;
    client?: GetInstance["client"]["parameters"];
} = {}): UseQueryResult<TData, GetInstance["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getInstanceQueryKey(workspace, zone, name);
    const query = useQuery({
        ...getInstanceQueryOptions(workspace, zone, name, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetInstance["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getInstanceSuspenseQueryKey = (workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type GetInstanceSuspenseQueryKey = ReturnType<typeof getInstanceSuspenseQueryKey>;
export function getInstanceSuspenseQueryOptions(workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"], options: GetInstance["client"]["parameters"] = {}) {
    const queryKey = getInstanceSuspenseQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetInstance["data"], GetInstance["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name
 */
export function useGetInstanceHookSuspense<TData = GetInstance["response"], TQueryKey extends QueryKey = GetInstanceSuspenseQueryKey>(workspace: GetInstancePathParamsType["workspace"], zone: GetInstancePathParamsType["zone"], name: GetInstancePathParamsType["name"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetInstance["response"], GetInstance["error"], TData, TQueryKey>>;
    client?: GetInstance["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetInstance["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getInstanceSuspenseQueryKey(workspace, zone, name);
    const query = useSuspenseQuery({
        ...getInstanceSuspenseQueryOptions(workspace, zone, name, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetInstance["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
