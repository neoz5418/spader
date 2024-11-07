import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceOperationQueryResponseType, GetWorkspaceOperationPathParamsType, GetWorkspaceOperation400Type, GetWorkspaceOperation401Type, GetWorkspaceOperation404Type, GetWorkspaceOperation422Type, GetWorkspaceOperation429Type, GetWorkspaceOperation500Type, GetWorkspaceOperation503Type } from "../ts/GetWorkspaceOperationType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceOperationClient = typeof client<GetWorkspaceOperationQueryResponseType, GetWorkspaceOperation400Type | GetWorkspaceOperation401Type | GetWorkspaceOperation404Type | GetWorkspaceOperation422Type | GetWorkspaceOperation429Type | GetWorkspaceOperation500Type | GetWorkspaceOperation503Type, never>;
type GetWorkspaceOperation = {
    data: GetWorkspaceOperationQueryResponseType;
    error: GetWorkspaceOperation400Type | GetWorkspaceOperation401Type | GetWorkspaceOperation404Type | GetWorkspaceOperation422Type | GetWorkspaceOperation429Type | GetWorkspaceOperation500Type | GetWorkspaceOperation503Type;
    request: never;
    pathParams: GetWorkspaceOperationPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceOperationQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceOperationClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceOperationClient>>;
    };
};
export const getWorkspaceOperationQueryKey = (workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid", params: { workspace: workspace, zone: zone, uid: uid } }] as const;
export type GetWorkspaceOperationQueryKey = ReturnType<typeof getWorkspaceOperationQueryKey>;
export function getWorkspaceOperationQueryOptions(workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"], options: GetWorkspaceOperation["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceOperationQueryKey(workspace, zone, uid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceOperation["data"], GetWorkspaceOperation["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations/${uid}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Operation
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid
 */
export function useGetWorkspaceOperationHook<TData = GetWorkspaceOperation["response"], TQueryData = GetWorkspaceOperation["response"], TQueryKey extends QueryKey = GetWorkspaceOperationQueryKey>(workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceOperation["response"], GetWorkspaceOperation["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceOperation["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceOperation["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceOperationQueryKey(workspace, zone, uid);
    const query = useQuery({
        ...getWorkspaceOperationQueryOptions(workspace, zone, uid, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceOperation["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceOperationSuspenseQueryKey = (workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid", params: { workspace: workspace, zone: zone, uid: uid } }] as const;
export type GetWorkspaceOperationSuspenseQueryKey = ReturnType<typeof getWorkspaceOperationSuspenseQueryKey>;
export function getWorkspaceOperationSuspenseQueryOptions(workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"], options: GetWorkspaceOperation["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceOperationSuspenseQueryKey(workspace, zone, uid);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceOperation["data"], GetWorkspaceOperation["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations/${uid}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Operation
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid
 */
export function useGetWorkspaceOperationHookSuspense<TData = GetWorkspaceOperation["response"], TQueryKey extends QueryKey = GetWorkspaceOperationSuspenseQueryKey>(workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceOperation["response"], GetWorkspaceOperation["error"], TData, TQueryKey>>;
    client?: GetWorkspaceOperation["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceOperation["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceOperationSuspenseQueryKey(workspace, zone, uid);
    const query = useSuspenseQuery({
        ...getWorkspaceOperationSuspenseQueryOptions(workspace, zone, uid, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceOperation["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
