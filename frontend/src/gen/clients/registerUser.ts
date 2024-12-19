import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	RegisterUserMutationRequestType,
	RegisterUserMutationResponseType,
} from "../ts/RegisterUserType";

/**
 * @summary Register User
 * @link /apis/user/v1/users/
 */
export async function registerUser(
	data: RegisterUserMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<RegisterUserMutationResponseType>["data"]> {
	const res = await client<
		RegisterUserMutationResponseType,
		RegisterUserMutationRequestType
	>({ method: "post", url: `/apis/user/v1/users/`, data, ...options });
	return res.data;
}
