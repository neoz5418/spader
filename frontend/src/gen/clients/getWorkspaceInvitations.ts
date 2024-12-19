import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	GetWorkspaceInvitationsPathParamsType,
	GetWorkspaceInvitationsQueryResponseType,
} from "../ts/GetWorkspaceInvitationsType";

/**
 * @summary Get Workspace Invitations
 * @link /apis/workspace/v1/workspaces/:workspace/invitations
 */
export async function getWorkspaceInvitations(
	workspace: GetWorkspaceInvitationsPathParamsType["workspace"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetWorkspaceInvitationsQueryResponseType>["data"]> {
	const res = await client<GetWorkspaceInvitationsQueryResponseType>({
		method: "get",
		url: `/apis/workspace/v1/workspaces/${workspace}/invitations`,
		...options,
	});
	return res.data;
}
