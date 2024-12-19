import client from "@/utils/client.ts";
import {
	queryOptions,
	useQuery,
	useSuspenseQuery,
} from "@tanstack/react-query";
import type {
	QueryKey,
	QueryObserverOptions,
	UseQueryResult,
	UseSuspenseQueryOptions,
	UseSuspenseQueryResult,
} from "@tanstack/react-query";
import type {
	ListWorkspaceSshKeys422Type,
	ListWorkspaceSshKeysPathParamsType,
	ListWorkspaceSshKeysQueryResponseType,
} from "../ts/ListWorkspaceSshKeysType";

type ListWorkspaceSshKeysClient = typeof client<
	ListWorkspaceSshKeysQueryResponseType,
	ListWorkspaceSshKeys422Type,
	never
>;
type ListWorkspaceSshKeys = {
	data: ListWorkspaceSshKeysQueryResponseType;
	error: ListWorkspaceSshKeys422Type;
	request: never;
	pathParams: ListWorkspaceSshKeysPathParamsType;
	queryParams: never;
	headerParams: never;
	response: ListWorkspaceSshKeysQueryResponseType;
	client: {
		parameters: Partial<Parameters<ListWorkspaceSshKeysClient>[0]>;
		return: Awaited<ReturnType<ListWorkspaceSshKeysClient>>;
	};
};
export const listWorkspaceSshKeysQueryKey = (
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys",
			params: { workspace: workspace },
		},
	] as const;
export type ListWorkspaceSshKeysQueryKey = ReturnType<
	typeof listWorkspaceSshKeysQueryKey
>;
export function listWorkspaceSshKeysQueryOptions(
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
	options: ListWorkspaceSshKeys["client"]["parameters"] = {},
) {
	const queryKey = listWorkspaceSshKeysQueryKey(workspace);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				ListWorkspaceSshKeys["data"],
				ListWorkspaceSshKeys["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary List Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export function useListWorkspaceSshKeysHook<
	TData = ListWorkspaceSshKeys["response"],
	TQueryData = ListWorkspaceSshKeys["response"],
	TQueryKey extends QueryKey = ListWorkspaceSshKeysQueryKey,
>(
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
	options: {
		query?: Partial<
			QueryObserverOptions<
				ListWorkspaceSshKeys["response"],
				ListWorkspaceSshKeys["error"],
				TData,
				TQueryData,
				TQueryKey
			>
		>;
		client?: ListWorkspaceSshKeys["client"]["parameters"];
	} = {},
): UseQueryResult<TData, ListWorkspaceSshKeys["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? listWorkspaceSshKeysQueryKey(workspace);
	const query = useQuery({
		...(listWorkspaceSshKeysQueryOptions(
			workspace,
			clientOptions,
		) as unknown as QueryObserverOptions),
		queryKey,
		...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
	}) as UseQueryResult<TData, ListWorkspaceSshKeys["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
export const listWorkspaceSshKeysSuspenseQueryKey = (
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/ssh_keys",
			params: { workspace: workspace },
		},
	] as const;
export type ListWorkspaceSshKeysSuspenseQueryKey = ReturnType<
	typeof listWorkspaceSshKeysSuspenseQueryKey
>;
export function listWorkspaceSshKeysSuspenseQueryOptions(
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
	options: ListWorkspaceSshKeys["client"]["parameters"] = {},
) {
	const queryKey = listWorkspaceSshKeysSuspenseQueryKey(workspace);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				ListWorkspaceSshKeys["data"],
				ListWorkspaceSshKeys["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary List Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export function useListWorkspaceSshKeysHookSuspense<
	TData = ListWorkspaceSshKeys["response"],
	TQueryKey extends QueryKey = ListWorkspaceSshKeysSuspenseQueryKey,
>(
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
	options: {
		query?: Partial<
			UseSuspenseQueryOptions<
				ListWorkspaceSshKeys["response"],
				ListWorkspaceSshKeys["error"],
				TData,
				TQueryKey
			>
		>;
		client?: ListWorkspaceSshKeys["client"]["parameters"];
	} = {},
): UseSuspenseQueryResult<TData, ListWorkspaceSshKeys["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? listWorkspaceSshKeysSuspenseQueryKey(workspace);
	const query = useSuspenseQuery({
		...(listWorkspaceSshKeysSuspenseQueryOptions(
			workspace,
			clientOptions,
		) as unknown as UseSuspenseQueryOptions),
		queryKey,
		...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">),
	}) as UseSuspenseQueryResult<TData, ListWorkspaceSshKeys["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
