import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListUsersQueryParamsType,
	ListUsersQueryResponseType,
} from "../ts/ListUsersType";

/**
 * @summary List Users
 * @link /apis/user/v1/users/
 */
export async function listUsers(
	params?: ListUsersQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListUsersQueryResponseType>["data"]> {
	const res = await client<ListUsersQueryResponseType>({
		method: "get",
		url: `/apis/user/v1/users/`,
		params,
		...options,
	});
	return res.data;
}
