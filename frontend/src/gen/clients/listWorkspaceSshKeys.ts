import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListWorkspaceSshKeysPathParamsType,
	ListWorkspaceSshKeysQueryResponseType,
} from "../ts/ListWorkspaceSshKeysType";

/**
 * @summary List Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export async function listWorkspaceSshKeys(
	workspace: ListWorkspaceSshKeysPathParamsType["workspace"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListWorkspaceSshKeysQueryResponseType>["data"]> {
	const res = await client<ListWorkspaceSshKeysQueryResponseType>({
		method: "get",
		url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
		...options,
	});
	return res.data;
}
