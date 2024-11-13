import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { WatchWorkspaceOperationsQueryResponseType, WatchWorkspaceOperationsPathParamsType } from "../ts/WatchWorkspaceOperationsType";

 /**
 * @summary Watch Workspace Operations
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones/:zone/operations
 */
export async function watchWorkspaceOperations(workspace: WatchWorkspaceOperationsPathParamsType["workspace"], zone: WatchWorkspaceOperationsPathParamsType["zone"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<WatchWorkspaceOperationsQueryResponseType>["data"]> {
    const res = await client<WatchWorkspaceOperationsQueryResponseType>({ method: "get", url: `/apis/compute/v1/watch/workspaces/${workspace}/zones/${zone}/operations`, ...options });
    return res.data;
}