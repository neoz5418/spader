import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetUserQuotaQueryResponseType, GetUserQuotaPathParamsType } from "../ts/GetUserQuotaType";

 /**
 * @summary Get User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export async function getUserQuota(username: GetUserQuotaPathParamsType["username"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetUserQuotaQueryResponseType>["data"]> {
    const res = await client<GetUserQuotaQueryResponseType>({ method: "get", url: `/apis/user/v1/users/${username}/quota`, ...options });
    return res.data;
}