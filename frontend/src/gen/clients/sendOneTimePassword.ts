import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { SendOneTimePasswordMutationRequestType, SendOneTimePasswordMutationResponseType } from "../ts/SendOneTimePasswordType";

 /**
 * @summary Send One Time Password
 * @link /apis/user/v1/one_time_password
 */
export async function sendOneTimePassword(data: SendOneTimePasswordMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<SendOneTimePasswordMutationResponseType>["data"]> {
    const res = await client<SendOneTimePasswordMutationResponseType, SendOneTimePasswordMutationRequestType>({ method: "post", url: `/apis/user/v1/one_time_password`, data, ...options });
    return res.data;
}