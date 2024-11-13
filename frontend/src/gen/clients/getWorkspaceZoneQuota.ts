import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceZoneQuotaQueryResponseType, GetWorkspaceZoneQuotaPathParamsType } from "../ts/GetWorkspaceZoneQuotaType";

 /**
 * @summary Get Workspace Zone Quota
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/quota
 */
export async function getWorkspaceZoneQuota(workspace: GetWorkspaceZoneQuotaPathParamsType["workspace"], zone: GetWorkspaceZoneQuotaPathParamsType["zone"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceZoneQuotaQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceZoneQuotaQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/quota`, ...options });
    return res.data;
}