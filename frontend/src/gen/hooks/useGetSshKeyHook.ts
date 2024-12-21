import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetSshKeyQueryResponseType, GetSshKeyPathParamsType, GetSshKey422Type } from "../ts/GetSshKeyType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetSshKeyClient = typeof client<GetSshKeyQueryResponseType, GetSshKey422Type, never>;
type GetSshKey = {
    data: GetSshKeyQueryResponseType;
    error: GetSshKey422Type;
    request: never;
    pathParams: GetSshKeyPathParamsType;
    queryParams: never;
    headerParams: never;
    response: GetSshKeyQueryResponseType;
    client: {
        parameters: Partial<Parameters<GetSshKeyClient>[0]>;
        return: Awaited<ReturnType<GetSshKeyClient>>;
    };
};
export const getSshKeyQueryKey = (workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys/:name", params: { workspace: workspace, name: name } }] as const;
export type GetSshKeyQueryKey = ReturnType<typeof getSshKeyQueryKey>;
export function getSshKeyQueryOptions(workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"], options: GetSshKey["client"]["parameters"] = {}) {
    const queryKey = getSshKeyQueryKey(workspace, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetSshKey["data"], GetSshKey["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Ssh Key
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys/:name
 */
export function useGetSshKeyHook<TData = GetSshKey["response"], TQueryData = GetSshKey["response"], TQueryKey extends QueryKey = GetSshKeyQueryKey>(workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"], options: {
    query?: Partial<QueryObserverOptions<GetSshKey["response"], GetSshKey["error"], TData, TQueryData, TQueryKey>>;
    client?: GetSshKey["client"]["parameters"];
} = {}): UseQueryResult<TData, GetSshKey["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getSshKeyQueryKey(workspace, name);
    const query = useQuery({
        ...getSshKeyQueryOptions(workspace, name, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetSshKey["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getSshKeySuspenseQueryKey = (workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"]) => ["v5", { url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys/:name", params: { workspace: workspace, name: name } }] as const;
export type GetSshKeySuspenseQueryKey = ReturnType<typeof getSshKeySuspenseQueryKey>;
export function getSshKeySuspenseQueryOptions(workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"], options: GetSshKey["client"]["parameters"] = {}) {
    const queryKey = getSshKeySuspenseQueryKey(workspace, name);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetSshKey["data"], GetSshKey["error"]>({
                method: "get",
                url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys/${name}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Get Ssh Key
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys/:name
 */
export function useGetSshKeyHookSuspense<TData = GetSshKey["response"], TQueryKey extends QueryKey = GetSshKeySuspenseQueryKey>(workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetSshKey["response"], GetSshKey["error"], TData, TQueryKey>>;
    client?: GetSshKey["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetSshKey["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getSshKeySuspenseQueryKey(workspace, name);
    const query = useSuspenseQuery({
        ...getSshKeySuspenseQueryOptions(workspace, name, clientOptions) as unknown as UseSuspenseQueryOptions,
        queryKey,
        ...queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetSshKey["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}