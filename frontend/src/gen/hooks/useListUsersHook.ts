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
	ListUsers422Type,
	ListUsersQueryParamsType,
	ListUsersQueryResponseType,
} from "../ts/ListUsersType";

type ListUsersClient = typeof client<
	ListUsersQueryResponseType,
	ListUsers422Type,
	never
>;
type ListUsers = {
	data: ListUsersQueryResponseType;
	error: ListUsers422Type;
	request: never;
	pathParams: never;
	queryParams: ListUsersQueryParamsType;
	headerParams: never;
	response: ListUsersQueryResponseType;
	client: {
		parameters: Partial<Parameters<ListUsersClient>[0]>;
		return: Awaited<ReturnType<ListUsersClient>>;
	};
};
export const listUsersQueryKey = (params?: ListUsers["queryParams"]) =>
	["v5", { url: "/apis/user/v1/users/" }, ...(params ? [params] : [])] as const;
export type ListUsersQueryKey = ReturnType<typeof listUsersQueryKey>;
export function listUsersQueryOptions(
	params?: ListUsers["queryParams"],
	options: ListUsers["client"]["parameters"] = {},
) {
	const queryKey = listUsersQueryKey(params);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<ListUsers["data"], ListUsers["error"]>({
				method: "get",
				url: `/apis/user/v1/users/`,
				params,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary List Users
 * @link /apis/user/v1/users/
 */
export function useListUsersHook<
	TData = ListUsers["response"],
	TQueryData = ListUsers["response"],
	TQueryKey extends QueryKey = ListUsersQueryKey,
>(
	params?: ListUsers["queryParams"],
	options: {
		query?: Partial<
			QueryObserverOptions<
				ListUsers["response"],
				ListUsers["error"],
				TData,
				TQueryData,
				TQueryKey
			>
		>;
		client?: ListUsers["client"]["parameters"];
	} = {},
): UseQueryResult<TData, ListUsers["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? listUsersQueryKey(params);
	const query = useQuery({
		...(listUsersQueryOptions(
			params,
			clientOptions,
		) as unknown as QueryObserverOptions),
		queryKey,
		...(queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">),
	}) as UseQueryResult<TData, ListUsers["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
export const listUsersSuspenseQueryKey = (params?: ListUsers["queryParams"]) =>
	["v5", { url: "/apis/user/v1/users/" }, ...(params ? [params] : [])] as const;
export type ListUsersSuspenseQueryKey = ReturnType<
	typeof listUsersSuspenseQueryKey
>;
export function listUsersSuspenseQueryOptions(
	params?: ListUsers["queryParams"],
	options: ListUsers["client"]["parameters"] = {},
) {
	const queryKey = listUsersSuspenseQueryKey(params);
	return queryOptions({
		queryKey,
		queryFn: async () => {
			const res = await client<ListUsers["data"], ListUsers["error"]>({
				method: "get",
				url: `/apis/user/v1/users/`,
				params,
				...options,
			});
			return res.data;
		},
	});
}
/**
 * @summary List Users
 * @link /apis/user/v1/users/
 */
export function useListUsersHookSuspense<
	TData = ListUsers["response"],
	TQueryKey extends QueryKey = ListUsersSuspenseQueryKey,
>(
	params?: ListUsers["queryParams"],
	options: {
		query?: Partial<
			UseSuspenseQueryOptions<
				ListUsers["response"],
				ListUsers["error"],
				TData,
				TQueryKey
			>
		>;
		client?: ListUsers["client"]["parameters"];
	} = {},
): UseSuspenseQueryResult<TData, ListUsers["error"]> & {
	queryKey: TQueryKey;
} {
	const { query: queryOptions, client: clientOptions = {} } = options ?? {};
	const queryKey = queryOptions?.queryKey ?? listUsersSuspenseQueryKey(params);
	const query = useSuspenseQuery({
		...(listUsersSuspenseQueryOptions(
			params,
			clientOptions,
		) as unknown as UseSuspenseQueryOptions),
		queryKey,
		...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, "queryKey">),
	}) as UseSuspenseQueryResult<TData, ListUsers["error"]> & {
		queryKey: TQueryKey;
	};
	query.queryKey = queryKey as TQueryKey;
	return query;
}
