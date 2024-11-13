import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ReplaceUserQuotaMutationResponseType, ReplaceUserQuotaPathParamsType } from "../ts/ReplaceUserQuotaType";

 /**
 * @summary Replace User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export async function replaceUserQuota(username: ReplaceUserQuotaPathParamsType["username"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ReplaceUserQuotaMutationResponseType>["data"]> {
    const res = await client<ReplaceUserQuotaMutationResponseType>({ method: "put", url: `/apis/user/v1/users/${username}/quota`, ...options });
    return res.data;
}