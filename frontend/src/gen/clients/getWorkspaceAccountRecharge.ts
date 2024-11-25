import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceAccountRechargeQueryResponseType, GetWorkspaceAccountRechargePathParamsType } from "../ts/GetWorkspaceAccountRechargeType";

 /**
 * @summary Get Workspace Account Recharge
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharges/:recharge_id
 */
export async function getWorkspaceAccountRecharge(workspace: GetWorkspaceAccountRechargePathParamsType["workspace"], rechargeId: GetWorkspaceAccountRechargePathParamsType["recharge_id"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceAccountRechargeQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceAccountRechargeQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/account/recharges/${rechargeId}`, ...options });
    return res.data;
}