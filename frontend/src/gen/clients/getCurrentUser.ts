import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetCurrentUserQueryResponseType } from "../ts/GetCurrentUserType";

 /**
 * @summary Get Current User
 * @link /apis/user/v1/users/me
 */
export async function getCurrentUser(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetCurrentUserQueryResponseType>["data"]> {
    const res = await client<GetCurrentUserQueryResponseType>({ method: "get", url: `/apis/user/v1/users/me`, ...options });
    return res.data;
}
