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
	GetInstance422Type,
	GetInstancePathParamsType,
	GetInstanceQueryResponseType,
} from "../ts/GetInstanceType";

type GetInstanceClient = typeof client<
	GetInstanceQueryResponseType,
	GetInstance422Type,
	never
>;
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
export const getInstanceQueryKey = (
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
) =>
	[
		"v5",
		{
			url: "/apis/compute/v1/workspaces/:workspace/instances/:name",
			params: { workspace: workspace, name: name },
		},
	] as const;
export type GetInstanceQueryKey = ReturnType<typeof getInstanceQueryKey>;
export function getInstanceQueryOptions(
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
	options: GetInstance["client"]["parameters"] = {},
) {
	const queryKey = getInstanceQueryKey(workspace, name);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<GetInstance["data"], GetInstance["error"]>({
				method: "get",
				url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name
 */
export function useGetInstanceHook<
	TData = GetInstance["response"],
	TQueryData = GetInstance["response"],
	TQueryKey extends QueryKey = GetInstanceQueryKey,
>(
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
	options: {
		query?: Partial<
			QueryObserverOptions<
				GetInstance["response"],
				GetInstance["error"],
				TData,
				TQueryData,
				TQueryKey
			>
		>;
		client?: GetInstance["client"]["parameters"];
	} = {},
): UseQueryResult<TData, GetInstance["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getInstanceQueryKey(workspace, name);
	const query = useQuery({
		...(getInstanceQueryOptions(
			workspace,
			name,
			clientOptions,
		) as unknown as QueryObserverOptions),
		queryKey,
		...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
	}) as UseQueryResult<TData, GetInstance["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
export const getInstanceSuspenseQueryKey = (
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
) =>
	[
		"v5",
		{
			url: "/apis/compute/v1/workspaces/:workspace/instances/:name",
			params: { workspace: workspace, name: name },
		},
	] as const;
export type GetInstanceSuspenseQueryKey = ReturnType<
	typeof getInstanceSuspenseQueryKey
>;
export function getInstanceSuspenseQueryOptions(
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
	options: GetInstance["client"]["parameters"] = {},
) {
	const queryKey = getInstanceSuspenseQueryKey(workspace, name);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<GetInstance["data"], GetInstance["error"]>({
				method: "get",
				url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name
 */
export function useGetInstanceHookSuspense<
	TData = GetInstance["response"],
	TQueryKey extends QueryKey = GetInstanceSuspenseQueryKey,
>(
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
	options: {
		query?: Partial<
			UseSuspenseQueryOptions<
				GetInstance["response"],
				GetInstance["error"],
				TData,
				TQueryKey
			>
		>;
		client?: GetInstance["client"]["parameters"];
	} = {},
): UseSuspenseQueryResult<TData, GetInstance["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getInstanceSuspenseQueryKey(workspace, name);
	const query = useSuspenseQuery({
		...(getInstanceSuspenseQueryOptions(
			workspace,
			name,
			clientOptions,
		) as unknown as UseSuspenseQueryOptions),
		queryKey,
		...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">),
	}) as UseSuspenseQueryResult<TData, GetInstance["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
