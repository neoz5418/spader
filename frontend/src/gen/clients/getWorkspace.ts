import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceQueryResponseType, GetWorkspacePathParamsType } from "../ts/GetWorkspaceType";

 /**
 * @summary Get Workspace
 * @link /apis/workspace/v1/workspaces/:workspace
 */
export async function getWorkspace(workspace: GetWorkspacePathParamsType["workspace"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}`, ...options });
    return res.data;
}