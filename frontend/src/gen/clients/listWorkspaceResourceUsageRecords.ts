import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceResourceUsageRecordsQueryResponseType, ListWorkspaceResourceUsageRecordsPathParamsType, ListWorkspaceResourceUsageRecordsQueryParamsType } from "../ts/ListWorkspaceResourceUsageRecordsType";

 /**
 * @summary List Workspace Resource Usage Records
 * @link /apis/workspace/v1/workspaces/:workspace/resource_usage_record
 */
export async function listWorkspaceResourceUsageRecords(workspace: ListWorkspaceResourceUsageRecordsPathParamsType["workspace"], params: ListWorkspaceResourceUsageRecordsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceResourceUsageRecordsQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceResourceUsageRecordsQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/resource_usage_record`, params, ...options });
    return res.data;
}