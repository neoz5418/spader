import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetFileStorageQueryResponseType, GetFileStoragePathParamsType, GetFileStorage400Type, GetFileStorage401Type, GetFileStorage404Type, GetFileStorage422Type, GetFileStorage429Type, GetFileStorage500Type, GetFileStorage503Type } from "../ts/GetFileStorageType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetFileStorageClient = typeof client<GetFileStorageQueryResponseType, GetFileStorage400Type | GetFileStorage401Type | GetFileStorage404Type | GetFileStorage422Type | GetFileStorage429Type | GetFileStorage500Type | GetFileStorage503Type, never>;
type GetFileStorage = {
    data: GetFileStorageQueryResponseType;
    error: GetFileStorage400Type | GetFileStorage401Type | GetFileStorage404Type | GetFileStorage422Type | GetFileStorage429Type | GetFileStorage500Type | GetFileStorage503Type;
    request: never;
    pathParams: GetFileStoragePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetFileStorageQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetFileStorageClient>[0]>;
        return: Awaited<ReturnType<GetFileStorageClient>>;
    };
};
export const getFileStorageQueryKey = (workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type GetFileStorageQueryKey = ReturnType<typeof getFileStorageQueryKey>;
export function getFileStorageQueryOptions(workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"], options: GetFileStorage["client"]["parameters"] = {}) {
    const queryKey = getFileStorageQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetFileStorage["data"], GetFileStorage["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name
 */
export function useGetFileStorageHook<TData = GetFileStorage["response"], TQueryData = GetFileStorage["response"], TQueryKey extends QueryKey = GetFileStorageQueryKey>(workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"], options: {
    query?: Partial<QueryObserverOptions<GetFileStorage["response"], GetFileStorage["error"], TData, TQueryData, TQueryKey>>;
    client?: GetFileStorage["client"]["parameters"];
} = {}): UseQueryResult<TData, GetFileStorage["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getFileStorageQueryKey(workspace, zone, name);
    const query = useQuery({
        ...getFileStorageQueryOptions(workspace, zone, name, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetFileStorage["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getFileStorageSuspenseQueryKey = (workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name", params: { workspace: workspace, zone: zone, name: name } }] as const;
export type GetFileStorageSuspenseQueryKey = ReturnType<typeof getFileStorageSuspenseQueryKey>;
export function getFileStorageSuspenseQueryOptions(workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"], options: GetFileStorage["client"]["parameters"] = {}) {
    const queryKey = getFileStorageSuspenseQueryKey(workspace, zone, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetFileStorage["data"], GetFileStorage["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name
 */
export function useGetFileStorageHookSuspense<TData = GetFileStorage["response"], TQueryKey extends QueryKey = GetFileStorageSuspenseQueryKey>(workspace: GetFileStoragePathParamsType["workspace"], zone: GetFileStoragePathParamsType["zone"], name: GetFileStoragePathParamsType["name"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetFileStorage["response"], GetFileStorage["error"], TData, TQueryKey>>;
    client?: GetFileStorage["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetFileStorage["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getFileStorageSuspenseQueryKey(workspace, zone, name);
    const query = useSuspenseQuery({
        ...getFileStorageSuspenseQueryOptions(workspace, zone, name, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetFileStorage["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
