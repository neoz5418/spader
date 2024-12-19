import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListWorkspaceZonesPathParamsType,
	ListWorkspaceZonesQueryParamsType,
	ListWorkspaceZonesQueryResponseType,
} from "../ts/ListWorkspaceZonesType";

/**
 * @summary List Workspace Zones
 * @link /apis/compute/v1/workspaces/:workspace/zones
 */
export async function listWorkspaceZones(
	workspace: ListWorkspaceZonesPathParamsType["workspace"],
	params?: ListWorkspaceZonesQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListWorkspaceZonesQueryResponseType>["data"]> {
	const res = await client<ListWorkspaceZonesQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/workspaces/${workspace}/zones`,
		params,
		...options,
	});
	return res.data;
}
