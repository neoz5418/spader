import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { WatchWorkspaceZonesQueryResponseType, WatchWorkspaceZonesPathParamsType } from "../ts/WatchWorkspaceZonesType";

 /**
 * @summary Watch Workspace Zones
 * @link /apis/compute/v1/watch/workspaces/:workspace/zones
 */
export async function watchWorkspaceZones(workspace: WatchWorkspaceZonesPathParamsType["workspace"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<WatchWorkspaceZonesQueryResponseType>["data"]> {
    const res = await client<WatchWorkspaceZonesQueryResponseType>({ method: "get", url: `/apis/compute/v1/watch/workspaces/${workspace}/zones`, ...options });
    return res.data;
}