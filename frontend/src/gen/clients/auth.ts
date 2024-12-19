import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	AuthMutationRequestType,
	AuthMutationResponseType,
} from "../ts/AuthType";

/**
 * @summary Auth
 * @link /apis/oidc/v1/auth
 */
export async function auth(
	data: AuthMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<AuthMutationResponseType>["data"]> {
	const res = await client<AuthMutationResponseType, AuthMutationRequestType>({
		method: "post",
		url: `/apis/oidc/v1/auth`,
		data,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			...options.headers,
		},
		...options,
	});
	return res.data;
}
