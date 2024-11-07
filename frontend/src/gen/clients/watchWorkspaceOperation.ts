import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { WatchWorkspaceOperationQueryResponseType, WatchWorkspaceOperationPathParamsType } from "../ts/WatchWorkspaceOperationType";

 /**
 * @summary Watch Workspace Operation
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations/:uid
 */
export async function watchWorkspaceOperation(workspace: WatchWorkspaceOperationPathParamsType["workspace"], zone: WatchWorkspaceOperationPathParamsType["zone"], uid: WatchWorkspaceOperationPathParamsType["uid"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<WatchWorkspaceOperationQueryResponseType>["data"]> {
    const res = await client<WatchWorkspaceOperationQueryResponseType>({ method: "get", url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations/${uid}`, ...options });
    return res.data;
}
