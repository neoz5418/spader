import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetWorkspaceSshKeysQueryResponseType, GetWorkspaceSshKeysPathParamsType, GetWorkspaceSshKeys400Type, GetWorkspaceSshKeys401Type, GetWorkspaceSshKeys404Type, GetWorkspaceSshKeys422Type, GetWorkspaceSshKeys429Type, GetWorkspaceSshKeys500Type, GetWorkspaceSshKeys503Type } from "../ts/GetWorkspaceSshKeysType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetWorkspaceSshKeysClient = typeof client<GetWorkspaceSshKeysQueryResponseType, GetWorkspaceSshKeys400Type | GetWorkspaceSshKeys401Type | GetWorkspaceSshKeys404Type | GetWorkspaceSshKeys422Type | GetWorkspaceSshKeys429Type | GetWorkspaceSshKeys500Type | GetWorkspaceSshKeys503Type, never>;
type GetWorkspaceSshKeys = {
    data: GetWorkspaceSshKeysQueryResponseType;
    error: GetWorkspaceSshKeys400Type | GetWorkspaceSshKeys401Type | GetWorkspaceSshKeys404Type | GetWorkspaceSshKeys422Type | GetWorkspaceSshKeys429Type | GetWorkspaceSshKeys500Type | GetWorkspaceSshKeys503Type;
    request: never;
    pathParams: GetWorkspaceSshKeysPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetWorkspaceSshKeysQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetWorkspaceSshKeysClient>[0]>;
        return: Awaited<ReturnType<GetWorkspaceSshKeysClient>>;
    };
};
export const getWorkspaceSshKeysQueryKey = (workspace: GetWorkspaceSshKeysPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys", params: { workspace: workspace } }] as const;
export type GetWorkspaceSshKeysQueryKey = ReturnType<typeof getWorkspaceSshKeysQueryKey>;
export function getWorkspaceSshKeysQueryOptions(workspace: GetWorkspaceSshKeysPathParamsType["workspace"], options: GetWorkspaceSshKeys["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceSshKeysQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceSshKeys["data"], GetWorkspaceSshKeys["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export function useGetWorkspaceSshKeysHook<TData = GetWorkspaceSshKeys["response"], TQueryData = GetWorkspaceSshKeys["response"], TQueryKey extends QueryKey = GetWorkspaceSshKeysQueryKey>(workspace: GetWorkspaceSshKeysPathParamsType["workspace"], options: {
    query?: Partial<QueryObserverOptions<GetWorkspaceSshKeys["response"], GetWorkspaceSshKeys["error"], TData, TQueryData, TQueryKey>>;
    client?: GetWorkspaceSshKeys["client"]["parameters"];
} = {}): UseQueryResult<TData, GetWorkspaceSshKeys["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceSshKeysQueryKey(workspace);
    const query = useQuery({
        ...getWorkspaceSshKeysQueryOptions(workspace, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetWorkspaceSshKeys["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getWorkspaceSshKeysSuspenseQueryKey = (workspace: GetWorkspaceSshKeysPathParamsType["workspace"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys", params: { workspace: workspace } }] as const;
export type GetWorkspaceSshKeysSuspenseQueryKey = ReturnType<typeof getWorkspaceSshKeysSuspenseQueryKey>;
export function getWorkspaceSshKeysSuspenseQueryOptions(workspace: GetWorkspaceSshKeysPathParamsType["workspace"], options: GetWorkspaceSshKeys["client"]["parameters"] = {}) {
    const queryKey = getWorkspaceSshKeysSuspenseQueryKey(workspace);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetWorkspaceSshKeys["data"], GetWorkspaceSshKeys["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export function useGetWorkspaceSshKeysHookSuspense<TData = GetWorkspaceSshKeys["response"], TQueryKey extends QueryKey = GetWorkspaceSshKeysSuspenseQueryKey>(workspace: GetWorkspaceSshKeysPathParamsType["workspace"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetWorkspaceSshKeys["response"], GetWorkspaceSshKeys["error"], TData, TQueryKey>>;
    client?: GetWorkspaceSshKeys["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetWorkspaceSshKeys["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getWorkspaceSshKeysSuspenseQueryKey(workspace);
    const query = useSuspenseQuery({
        ...getWorkspaceSshKeysSuspenseQueryOptions(workspace, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetWorkspaceSshKeys["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}