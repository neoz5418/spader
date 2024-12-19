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
	GetWorkspaceAccountRecharge422Type,
	GetWorkspaceAccountRechargePathParamsType,
	GetWorkspaceAccountRechargeQueryResponseType,
} from "../ts/GetWorkspaceAccountRechargeType";

type GetWorkspaceAccountRechargeClient = typeof client<
	GetWorkspaceAccountRechargeQueryResponseType,
	GetWorkspaceAccountRecharge422Type,
	never
>;
type GetWorkspaceAccountRecharge = {
	data: GetWorkspaceAccountRechargeQueryResponseType;
	error: GetWorkspaceAccountRecharge422Type;
	request: never;
	pathParams: GetWorkspaceAccountRechargePathParamsType;
	queryParams: never;
	headerParams: never;
	response: GetWorkspaceAccountRechargeQueryResponseType;
	client: {
		parameters: Partial<Parameters<GetWorkspaceAccountRechargeClient>[0]>;
		return: Awaited<ReturnType<GetWorkspaceAccountRechargeClient>>;
	};
};
export const getWorkspaceAccountRechargeQueryKey = (
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id",
			params: { workspace: workspace, rechargeId: rechargeId },
		},
	] as const;
export type GetWorkspaceAccountRechargeQueryKey = ReturnType<
	typeof getWorkspaceAccountRechargeQueryKey
>;
export function getWorkspaceAccountRechargeQueryOptions(
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
	options: GetWorkspaceAccountRecharge["client"]["parameters"] = {},
) {
	const queryKey = getWorkspaceAccountRechargeQueryKey(workspace, rechargeId);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				GetWorkspaceAccountRecharge["data"],
				GetWorkspaceAccountRecharge["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges/${rechargeId}`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Workspace Account Recharge
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id
 */
export function useGetWorkspaceAccountRechargeHook<
	TData = GetWorkspaceAccountRecharge["response"],
	TQueryData = GetWorkspaceAccountRecharge["response"],
	TQueryKey extends QueryKey = GetWorkspaceAccountRechargeQueryKey,
>(
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
	options: {
		query?: Partial<
			QueryObserverOptions<
				GetWorkspaceAccountRecharge["response"],
				GetWorkspaceAccountRecharge["error"],
				TData,
				TQueryData,
				TQueryKey
			>
		>;
		client?: GetWorkspaceAccountRecharge["client"]["parameters"];
	} = {},
): UseQueryResult<TData, GetWorkspaceAccountRecharge["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ??
		getWorkspaceAccountRechargeQueryKey(workspace, rechargeId);
	const query = useQuery({
		...(getWorkspaceAccountRechargeQueryOptions(
			workspace,
			rechargeId,
			clientOptions,
		) as unknown as QueryObserverOptions),
		queryKey,
		...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
	}) as UseQueryResult<TData, GetWorkspaceAccountRecharge["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
export const getWorkspaceAccountRechargeSuspenseQueryKey = (
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id",
			params: { workspace: workspace, rechargeId: rechargeId },
		},
	] as const;
export type GetWorkspaceAccountRechargeSuspenseQueryKey = ReturnType<
	typeof getWorkspaceAccountRechargeSuspenseQueryKey
>;
export function getWorkspaceAccountRechargeSuspenseQueryOptions(
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
	options: GetWorkspaceAccountRecharge["client"]["parameters"] = {},
) {
	const queryKey = getWorkspaceAccountRechargeSuspenseQueryKey(
		workspace,
		rechargeId,
	);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				GetWorkspaceAccountRecharge["data"],
				GetWorkspaceAccountRecharge["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges/${rechargeId}`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Workspace Account Recharge
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id
 */
export function useGetWorkspaceAccountRechargeHookSuspense<
	TData = GetWorkspaceAccountRecharge["response"],
	TQueryKey extends QueryKey = GetWorkspaceAccountRechargeSuspenseQueryKey,
>(
	workspace: GetWorkspaceAccountRechargePathParamsType["workspace"],
	rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"],
	options: {
		query?: Partial<
			UseSuspenseQueryOptions<
				GetWorkspaceAccountRecharge["response"],
				GetWorkspaceAccountRecharge["error"],
				TData,
				TQueryKey
			>
		>;
		client?: GetWorkspaceAccountRecharge["client"]["parameters"];
	} = {},
): UseSuspenseQueryResult<TData, GetWorkspaceAccountRecharge["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ??
		getWorkspaceAccountRechargeSuspenseQueryKey(workspace, rechargeId);
	const query = useSuspenseQuery({
		...(getWorkspaceAccountRechargeSuspenseQueryOptions(
			workspace,
			rechargeId,
			clientOptions,
		) as unknown as UseSuspenseQueryOptions),
		queryKey,
		...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">),
	}) as UseSuspenseQueryResult<TData, GetWorkspaceAccountRecharge["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
