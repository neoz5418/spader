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
	GetWorkspaceInvitations422Type,
	GetWorkspaceInvitationsPathParamsType,
	GetWorkspaceInvitationsQueryResponseType,
} from "../ts/GetWorkspaceInvitationsType";

type GetWorkspaceInvitationsClient = typeof client<
	GetWorkspaceInvitationsQueryResponseType,
	GetWorkspaceInvitations422Type,
	never
>;
type GetWorkspaceInvitations = {
	data: GetWorkspaceInvitationsQueryResponseType;
	error: GetWorkspaceInvitations422Type;
	request: never;
	pathParams: GetWorkspaceInvitationsPathParamsType;
	queryParams: never;
	headerParams: never;
	response: GetWorkspaceInvitationsQueryResponseType;
	client: {
		parameters: Partial<Parameters<GetWorkspaceInvitationsClient>[0]>;
		return: Awaited<ReturnType<GetWorkspaceInvitationsClient>>;
	};
};
export const getWorkspaceInvitationsQueryKey = (
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/invitations",
			params: { workspace: workspace },
		},
	] as const;
export type GetWorkspaceInvitationsQueryKey = ReturnType<
	typeof getWorkspaceInvitationsQueryKey
>;
export function getWorkspaceInvitationsQueryOptions(
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
	options: GetWorkspaceInvitations["client"]["parameters"] = {},
) {
	const queryKey = getWorkspaceInvitationsQueryKey(workspace);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				GetWorkspaceInvitations["data"],
				GetWorkspaceInvitations["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/invitations`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Workspace Invitations
 * @link /apis/workspace/v1/workspaces/:workspace/invitations
 */
export function useGetWorkspaceInvitationsHook<
	TData = GetWorkspaceInvitations["response"],
	TQueryData = GetWorkspaceInvitations["response"],
	TQueryKey extends QueryKey = GetWorkspaceInvitationsQueryKey,
>(
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
	options: {
		query?: Partial<
			QueryObserverOptions<
				GetWorkspaceInvitations["response"],
				GetWorkspaceInvitations["error"],
				TData,
				TQueryData,
				TQueryKey
			>
		>;
		client?: GetWorkspaceInvitations["client"]["parameters"];
	} = {},
): UseQueryResult<TData, GetWorkspaceInvitations["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ?? getWorkspaceInvitationsQueryKey(workspace);
	const query = useQuery({
		...(getWorkspaceInvitationsQueryOptions(
			workspace,
			clientOptions,
		) as unknown as QueryObserverOptions),
		queryKey,
		...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
	}) as UseQueryResult<TData, GetWorkspaceInvitations["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
export const getWorkspaceInvitationsSuspenseQueryKey = (
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
) =>
	[
		"v5",
		{
			url: "/apis/workspace/v1/workspaces/:workspace/invitations",
			params: { workspace: workspace },
		},
	] as const;
export type GetWorkspaceInvitationsSuspenseQueryKey = ReturnType<
	typeof getWorkspaceInvitationsSuspenseQueryKey
>;
export function getWorkspaceInvitationsSuspenseQueryOptions(
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
	options: GetWorkspaceInvitations["client"]["parameters"] = {},
) {
	const queryKey = getWorkspaceInvitationsSuspenseQueryKey(workspace);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<
				GetWorkspaceInvitations["data"],
				GetWorkspaceInvitations["error"]
			>({
				method: "get",
				url: `/apis/workspace/v1/workspaces/${workspace}/invitations`,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary Get Workspace Invitations
 * @link /apis/workspace/v1/workspaces/:workspace/invitations
 */
export function useGetWorkspaceInvitationsHookSuspense<
	TData = GetWorkspaceInvitations["response"],
	TQueryKey extends QueryKey = GetWorkspaceInvitationsSuspenseQueryKey,
>(
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
	options: {
		query?: Partial<
			UseSuspenseQueryOptions<
				GetWorkspaceInvitations["response"],
				GetWorkspaceInvitations["error"],
				TData,
				TQueryKey
			>
		>;
		client?: GetWorkspaceInvitations["client"]["parameters"];
	} = {},
): UseSuspenseQueryResult<TData, GetWorkspaceInvitations["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey =
		queryOptions?.queryKey ??
		getWorkspaceInvitationsSuspenseQueryKey(workspace);
	const query = useSuspenseQuery({
		...(getWorkspaceInvitationsSuspenseQueryOptions(
			workspace,
			clientOptions,
		) as unknown as UseSuspenseQueryOptions),
		queryKey,
		...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">),
	}) as UseSuspenseQueryResult<TData, GetWorkspaceInvitations["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
