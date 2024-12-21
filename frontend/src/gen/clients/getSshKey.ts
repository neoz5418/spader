import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetSshKeyQueryResponseType, GetSshKeyPathParamsType } from "../ts/GetSshKeyType";

 /**
 * @summary Get Ssh Key
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys/:name
 */
export async function getSshKey(workspace: GetSshKeyPathParamsType["workspace"], name: GetSshKeyPathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetSshKeyQueryResponseType>["data"]> {
    const res = await client<GetSshKeyQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys/${name}`, ...options });
    return res.data;
}