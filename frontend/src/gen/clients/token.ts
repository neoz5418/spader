import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { TokenMutationRequestType, TokenMutationResponseType } from "../ts/TokenType";

 /**
 * @summary Token
 * @link /apis/oidc/v1/token
 */
export async function token(data: TokenMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<TokenMutationResponseType>["data"]> {
    const res = await client<TokenMutationResponseType, TokenMutationRequestType>({ method: "post", url: `/apis/oidc/v1/token`, data, headers: { "Content-Type": "application/x-www-form-urlencoded", ...options.headers }, ...options });
    return res.data;
}
