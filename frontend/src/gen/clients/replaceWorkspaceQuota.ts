import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ReplaceWorkspaceQuotaMutationRequestType, ReplaceWorkspaceQuotaMutationResponseType, ReplaceWorkspaceQuotaPathParamsType } from "../ts/ReplaceWorkspaceQuotaType";

 /**
 * @summary Replace Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export async function replaceWorkspaceQuota(workspace: ReplaceWorkspaceQuotaPathParamsType["workspace"], data: ReplaceWorkspaceQuotaMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ReplaceWorkspaceQuotaMutationResponseType>["data"]> {
    const res = await client<ReplaceWorkspaceQuotaMutationResponseType, ReplaceWorkspaceQuotaMutationRequestType>({ method: "put", url: `/apis/workspace/v1/workspaces/${workspace}/quota`, data, ...options });
    return res.data;
}