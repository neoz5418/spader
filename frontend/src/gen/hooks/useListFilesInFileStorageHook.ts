import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListFilesInFileStorageQueryResponseType, ListFilesInFileStoragePathParamsType, ListFilesInFileStorageQueryParamsType, ListFilesInFileStorage422Type } from "../ts/ListFilesInFileStorageType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListFilesInFileStorageClient = typeof client<ListFilesInFileStorageQueryResponseType, ListFilesInFileStorage422Type, never>;
type ListFilesInFileStorage = {
    data: ListFilesInFileStorageQueryResponseType;
    error: ListFilesInFileStorage422Type;
    request: never;
    pathParams: ListFilesInFileStoragePathParamsType;
    queryParams: ListFilesInFileStorageQueryParamsType;
    headerParams: never;
    response: ListFilesInFileStorageQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListFilesInFileStorageClient>[0]>;
        return: Awaited<ReturnType<ListFilesInFileStorageClient>>;
    };
};
export const listFilesInFileStorageQueryKey = (workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files", params: { workspace: workspace, zone: zone, name: name } }, ...(params ? [params] : [])] as const;
export type ListFilesInFileStorageQueryKey = ReturnType<typeof listFilesInFileStorageQueryKey>;
export function listFilesInFileStorageQueryOptions(workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"], options: ListFilesInFileStorage["client"]["parameters"] = {}) {
    const queryKey = listFilesInFileStorageQueryKey(workspace, zone, name, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListFilesInFileStorage["data"], ListFilesInFileStorage["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}/files`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Up to 100 files can be listed
 * @summary List Files In File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files
 */
export function useListFilesInFileStorageHook<TData = ListFilesInFileStorage["response"], TQueryData = ListFilesInFileStorage["response"], TQueryKey extends QueryKey = ListFilesInFileStorageQueryKey>(workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListFilesInFileStorage["response"], ListFilesInFileStorage["error"], TData, TQueryData, TQueryKey>>;
    client?: ListFilesInFileStorage["client"]["parameters"];
} = {}): UseQueryResult<TData, ListFilesInFileStorage["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listFilesInFileStorageQueryKey(workspace, zone, name, params);
    const query = useQuery({
        ...listFilesInFileStorageQueryOptions(workspace, zone, name, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListFilesInFileStorage["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listFilesInFileStorageSuspenseQueryKey = (workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files", params: { workspace: workspace, zone: zone, name: name } }, ...(params ? [params] : [])] as const;
export type ListFilesInFileStorageSuspenseQueryKey = ReturnType<typeof listFilesInFileStorageSuspenseQueryKey>;
export function listFilesInFileStorageSuspenseQueryOptions(workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"], options: ListFilesInFileStorage["client"]["parameters"] = {}) {
    const queryKey = listFilesInFileStorageSuspenseQueryKey(workspace, zone, name, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListFilesInFileStorage["data"], ListFilesInFileStorage["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}/files`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Up to 100 files can be listed
 * @summary List Files In File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files
 */
export function useListFilesInFileStorageHookSuspense<TData = ListFilesInFileStorage["response"], TQueryKey extends QueryKey = ListFilesInFileStorageSuspenseQueryKey>(workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorage["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListFilesInFileStorage["response"], ListFilesInFileStorage["error"], TData, TQueryKey>>;
    client?: ListFilesInFileStorage["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListFilesInFileStorage["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listFilesInFileStorageSuspenseQueryKey(workspace, zone, name, params);
    const query = useSuspenseQuery({
        ...listFilesInFileStorageSuspenseQueryOptions(workspace, zone, name, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListFilesInFileStorage["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
