import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetUserQueryResponseType, GetUserPathParamsType } from "../ts/GetUserType";

 /**
 * @summary Get User
 * @link /apis/user/v1/users/:username
 */
export async function getUser(username: GetUserPathParamsType["username"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetUserQueryResponseType>["data"]> {
    const res = await client<GetUserQueryResponseType>({ method: "get", url: `/apis/user/v1/users/${username}`, ...options });
    return res.data;
}