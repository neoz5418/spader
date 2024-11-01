import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { DeleteWorkspaceSshKeysMutationResponseType, DeleteWorkspaceSshKeysPathParamsType } from "../ts/DeleteWorkspaceSshKeysType";

 /**
 * @summary Delete Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys/:name
 */
export async function deleteWorkspaceSshKeys(workspace: DeleteWorkspaceSshKeysPathParamsType["workspace"], name: DeleteWorkspaceSshKeysPathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteWorkspaceSshKeysMutationResponseType>["data"]> {
    const res = await client<DeleteWorkspaceSshKeysMutationResponseType>({ method: "delete", url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys/${name}`, ...options });
    return res.data;
}