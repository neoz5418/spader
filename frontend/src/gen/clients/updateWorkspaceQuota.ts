import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	UpdateWorkspaceQuotaMutationRequestType,
	UpdateWorkspaceQuotaMutationResponseType,
	UpdateWorkspaceQuotaPathParamsType,
} from "../ts/UpdateWorkspaceQuotaType";

/**
 * @summary Update Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export async function updateWorkspaceQuota(
	workspace: UpdateWorkspaceQuotaPathParamsType["workspace"],
	data: UpdateWorkspaceQuotaMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateWorkspaceQuotaMutationResponseType>["data"]> {
	const res = await client<
		UpdateWorkspaceQuotaMutationResponseType,
		UpdateWorkspaceQuotaMutationRequestType
	>({
		method: "patch",
		url: `/apis/workspace/v1/workspaces/${workspace}/quota`,
		data,
		...options,
	});
	return res.data;
}
