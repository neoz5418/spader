import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceSshKeysQueryResponseType, GetWorkspaceSshKeysPathParamsType } from "../ts/GetWorkspaceSshKeysType";

 /**
 * @summary Get Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export async function getWorkspaceSshKeys(workspace: GetWorkspaceSshKeysPathParamsType["workspace"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceSshKeysQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceSshKeysQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`, ...options });
    return res.data;
}