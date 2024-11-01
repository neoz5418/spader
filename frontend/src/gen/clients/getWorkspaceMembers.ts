import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceMembersQueryResponseType, GetWorkspaceMembersPathParamsType } from "../ts/GetWorkspaceMembersType";

 /**
 * @summary Get Workspace Members
 * @link /apis/workspace/v1/workspaces/:workspace/members
 */
export async function getWorkspaceMembers(workspace: GetWorkspaceMembersPathParamsType["workspace"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceMembersQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceMembersQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/members`, ...options });
    return res.data;
}