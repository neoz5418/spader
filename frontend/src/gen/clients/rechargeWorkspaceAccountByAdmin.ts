import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { RechargeWorkspaceAccountByAdminMutationRequestType, RechargeWorkspaceAccountByAdminMutationResponseType, RechargeWorkspaceAccountByAdminPathParamsType } from "../ts/RechargeWorkspaceAccountByAdminType";

 /**
 * @summary Recharge Workspace Account By Admin
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharge_by_admin
 */
export async function rechargeWorkspaceAccountByAdmin(workspace: RechargeWorkspaceAccountByAdminPathParamsType["workspace"], data: RechargeWorkspaceAccountByAdminMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<RechargeWorkspaceAccountByAdminMutationResponseType>["data"]> {
    const res = await client<RechargeWorkspaceAccountByAdminMutationResponseType, RechargeWorkspaceAccountByAdminMutationRequestType>({ method: "post", url: `/apis/workspace/v1/workspaces/${workspace}/account/recharge_by_admin`, data, ...options });
    return res.data;
}