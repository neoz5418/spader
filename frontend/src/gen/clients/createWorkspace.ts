import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { CreateWorkspaceMutationRequestType, CreateWorkspaceMutationResponseType, CreateWorkspacePathParamsType } from "../ts/CreateWorkspaceType";

 /**
 * @summary Create Workspace
 * @link /apis/workspace/v1/users/:username/workspaces
 */
export async function createWorkspace(username: CreateWorkspacePathParamsType["username"], data: CreateWorkspaceMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<CreateWorkspaceMutationResponseType>["data"]> {
    const res = await client<CreateWorkspaceMutationResponseType, CreateWorkspaceMutationRequestType>({ method: "post", url: `/apis/workspace/v1/users/${username}/workspaces`, data, ...options });
    return res.data;
}