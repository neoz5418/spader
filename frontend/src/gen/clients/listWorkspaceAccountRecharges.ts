import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceAccountRechargesQueryResponseType, ListWorkspaceAccountRechargesPathParamsType, ListWorkspaceAccountRechargesQueryParamsType } from "../ts/ListWorkspaceAccountRechargesType";

 /**
 * @summary List Workspace Account Recharges
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges
 */
export async function listWorkspaceAccountRecharges(workspace: ListWorkspaceAccountRechargesPathParamsType["workspace"], params?: ListWorkspaceAccountRechargesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceAccountRechargesQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceAccountRechargesQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges`, params, ...options });
    return res.data;
}
