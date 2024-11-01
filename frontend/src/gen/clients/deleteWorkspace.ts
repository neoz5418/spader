import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { DeleteWorkspaceMutationResponseType, DeleteWorkspacePathParamsType } from "../ts/DeleteWorkspaceType";

 /**
 * @summary Delete Workspace
 * @link /apis/workspace/v1/workspaces/:workspace
 */
export async function deleteWorkspace(workspace: DeleteWorkspacePathParamsType["workspace"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteWorkspaceMutationResponseType>["data"]> {
    const res = await client<DeleteWorkspaceMutationResponseType>({ method: "delete", url: `/apis/workspace/v1/workspaces/${workspace}`, ...options });
    return res.data;
}