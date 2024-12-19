import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	UpdateUserQuotaMutationResponseType,
	UpdateUserQuotaPathParamsType,
} from "../ts/UpdateUserQuotaType";

/**
 * @summary Update User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export async function updateUserQuota(
	username: UpdateUserQuotaPathParamsType["username"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateUserQuotaMutationResponseType>["data"]> {
	const res = await client<UpdateUserQuotaMutationResponseType>({
		method: "patch",
		url: `/apis/user/v1/users/${username}/quota`,
		...options,
	});
	return res.data;
}
