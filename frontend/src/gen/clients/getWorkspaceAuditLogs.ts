import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceAuditLogsQueryResponseType, GetWorkspaceAuditLogsPathParamsType, GetWorkspaceAuditLogsQueryParamsType } from "../ts/GetWorkspaceAuditLogsType";

 /**
 * @summary Get Workspace Audit Logs
 * @link /apis/workspace/v1/workspaces/:workspace/audit_logs
 */
export async function getWorkspaceAuditLogs(workspace: GetWorkspaceAuditLogsPathParamsType["workspace"], params?: GetWorkspaceAuditLogsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceAuditLogsQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceAuditLogsQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/audit_logs`, params, ...options });
    return res.data;
}