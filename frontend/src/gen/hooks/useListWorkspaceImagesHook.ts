import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ListWorkspaceImagesQueryResponseType, ListWorkspaceImagesPathParamsType, ListWorkspaceImagesQueryParamsType, ListWorkspaceImages422Type } from "../ts/ListWorkspaceImagesType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ListWorkspaceImagesClient = typeof client<ListWorkspaceImagesQueryResponseType, ListWorkspaceImages422Type, never>;
type ListWorkspaceImages = {
    data: ListWorkspaceImagesQueryResponseType;
    error: ListWorkspaceImages422Type;
    request: never;
    pathParams: ListWorkspaceImagesPathParamsType;
    queryParams: ListWorkspaceImagesQueryParamsType;
    headerParams: never;
    response: ListWorkspaceImagesQueryResponseType;
    client: {
        parameters: Partial<Parameters<ListWorkspaceImagesClient>[0]>;
        return: Awaited<ReturnType<ListWorkspaceImagesClient>>;
    };
};
export const listWorkspaceImagesQueryKey = (workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/images", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceImagesQueryKey = ReturnType<typeof listWorkspaceImagesQueryKey>;
export function listWorkspaceImagesQueryOptions(workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"], options: ListWorkspaceImages["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceImagesQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceImages["data"], ListWorkspaceImages["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/images`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Images
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/images
 */
export function useListWorkspaceImagesHook<TData = ListWorkspaceImages["response"], TQueryData = ListWorkspaceImages["response"], TQueryKey extends QueryKey = ListWorkspaceImagesQueryKey>(workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ListWorkspaceImages["response"], ListWorkspaceImages["error"], TData, TQueryData, TQueryKey>>;
    client?: ListWorkspaceImages["client"]["parameters"];
} = {}): UseQueryResult<TData, ListWorkspaceImages["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceImagesQueryKey(workspace, zone, params);
    const query = useQuery({
        ...listWorkspaceImagesQueryOptions(workspace, zone, params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ListWorkspaceImages["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const listWorkspaceImagesSuspenseQueryKey = (workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"]) => ["v5", { url: "/apis/compute/v1/workspaces/:workspace/zones/:zone/images", params: { workspace: workspace, zone: zone } }, ...(params ? [params] : [])] as const;
export type ListWorkspaceImagesSuspenseQueryKey = ReturnType<typeof listWorkspaceImagesSuspenseQueryKey>;
export function listWorkspaceImagesSuspenseQueryOptions(workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"], options: ListWorkspaceImages["client"]["parameters"] = {}) {
    const queryKey = listWorkspaceImagesSuspenseQueryKey(workspace, zone, params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ListWorkspaceImages["data"], ListWorkspaceImages["error"]>({
                method: "get",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/images`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary List Workspace Images
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/images
 */
export function useListWorkspaceImagesHookSuspense<TData = ListWorkspaceImages["response"], TQueryKey extends QueryKey = ListWorkspaceImagesSuspenseQueryKey>(workspace: ListWorkspaceImagesPathParamsType["workspace"], zone: ListWorkspaceImagesPathParamsType["zone"], params?: ListWorkspaceImages["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ListWorkspaceImages["response"], ListWorkspaceImages["error"], TData, TQueryKey>>;
    client?: ListWorkspaceImages["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ListWorkspaceImages["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? listWorkspaceImagesSuspenseQueryKey(workspace, zone, params);
    const query = useSuspenseQuery({
        ...listWorkspaceImagesSuspenseQueryOptions(workspace, zone, params, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ListWorkspaceImages["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}