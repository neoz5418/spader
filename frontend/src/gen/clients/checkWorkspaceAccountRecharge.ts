import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	CheckWorkspaceAccountRechargeMutationResponseType,
	CheckWorkspaceAccountRechargePathParamsType,
} from "../ts/CheckWorkspaceAccountRechargeType";

/**
 * @summary Check Workspace Account Recharge
 * @link /apis/workspace/v1/recharges/:recharge_id/check
 */
export async function checkWorkspaceAccountRecharge(
	rechargeId: CheckWorkspaceAccountRechargePathParamsType["recharge_id"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<
	ResponseConfig<CheckWorkspaceAccountRechargeMutationResponseType>["data"]
> {
	const res = await client<CheckWorkspaceAccountRechargeMutationResponseType>({
		method: "post",
		url: `/apis/workspace/v1/recharges/${rechargeId}/check`,
		...options,
	});
	return res.data;
}
