import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { RechargeWorkspaceAccountMutationRequestType, RechargeWorkspaceAccountMutationResponseType, RechargeWorkspaceAccountPathParamsType } from "../ts/RechargeWorkspaceAccountType";

 /**
 * @summary Recharge Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharge
 */
export async function rechargeWorkspaceAccount(workspace: RechargeWorkspaceAccountPathParamsType["workspace"], data: RechargeWorkspaceAccountMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<RechargeWorkspaceAccountMutationResponseType>["data"]> {
    const res = await client<RechargeWorkspaceAccountMutationResponseType, RechargeWorkspaceAccountMutationRequestType>({ method: "post", url: `/apis/workspace/v1/workspaces/${workspace}/account/recharge`, data, ...options });
    return res.data;
}