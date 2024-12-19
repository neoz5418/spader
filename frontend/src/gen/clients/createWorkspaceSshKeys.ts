import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	CreateWorkspaceSshKeysMutationRequestType,
	CreateWorkspaceSshKeysMutationResponseType,
	CreateWorkspaceSshKeysPathParamsType,
} from "../ts/CreateWorkspaceSshKeysType";

/**
 * @summary Create Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export async function createWorkspaceSshKeys(
	workspace: CreateWorkspaceSshKeysPathParamsType["workspace"],
	data: CreateWorkspaceSshKeysMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateWorkspaceSshKeysMutationResponseType>["data"]> {
	const res = await client<
		CreateWorkspaceSshKeysMutationResponseType,
		CreateWorkspaceSshKeysMutationRequestType
	>({
		method: "post",
		url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
		data,
		...options,
	});
	return res.data;
}
