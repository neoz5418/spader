import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceOperationQueryResponseType, GetWorkspaceOperationPathParamsType } from "../ts/GetWorkspaceOperationType";

 /**
 * @summary Get Workspace Operation
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations/:uid
 */
export async function getWorkspaceOperation(workspace: GetWorkspaceOperationPathParamsType["workspace"], zone: GetWorkspaceOperationPathParamsType["zone"], uid: GetWorkspaceOperationPathParamsType["uid"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceOperationQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceOperationQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations/${uid}`, ...options });
    return res.data;
}