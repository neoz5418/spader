import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	GetWorkspaceAccountPathParamsType,
	GetWorkspaceAccountQueryResponseType,
} from "../ts/GetWorkspaceAccountType";

/**
 * @summary Get Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account
 */
export async function getWorkspaceAccount(
	workspace: GetWorkspaceAccountPathParamsType["workspace"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetWorkspaceAccountQueryResponseType>["data"]> {
	const res = await client<GetWorkspaceAccountQueryResponseType>({
		method: "get",
		url: `/apis/workspace/v1/workspaces/${workspace}/account`,
		...options,
	});
	return res.data;
}
