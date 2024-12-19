import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	GetWorkspaceQuotaPathParamsType,
	GetWorkspaceQuotaQueryResponseType,
} from "../ts/GetWorkspaceQuotaType";

/**
 * @summary Get Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export async function getWorkspaceQuota(
	workspace: GetWorkspaceQuotaPathParamsType["workspace"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetWorkspaceQuotaQueryResponseType>["data"]> {
	const res = await client<GetWorkspaceQuotaQueryResponseType>({
		method: "get",
		url: `/apis/workspace/v1/workspaces/${workspace}/quota`,
		...options,
	});
	return res.data;
}
