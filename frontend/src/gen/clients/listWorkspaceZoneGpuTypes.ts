import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceZoneGpuTypesQueryResponseType, ListWorkspaceZoneGpuTypesPathParamsType, ListWorkspaceZoneGpuTypesQueryParamsType } from "../ts/ListWorkspaceZoneGpuTypesType";

 /**
 * @summary List Workspace Zone Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/gpu_types
 */
export async function listWorkspaceZoneGpuTypes(workspace: ListWorkspaceZoneGpuTypesPathParamsType["workspace"], zone: ListWorkspaceZoneGpuTypesPathParamsType["zone"], params?: ListWorkspaceZoneGpuTypesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceZoneGpuTypesQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceZoneGpuTypesQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/gpu_types`, params, ...options });
    return res.data;
}