import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListWorkspaceGpuTypesPathParamsType,
	ListWorkspaceGpuTypesQueryParamsType,
	ListWorkspaceGpuTypesQueryResponseType,
} from "../ts/ListWorkspaceGpuTypesType";

/**
 * @summary List Workspace Gpu Types
 * @link /apis/compute/v1/workspaces/:workspace/gpu_types
 */
export async function listWorkspaceGpuTypes(
	workspace: ListWorkspaceGpuTypesPathParamsType["workspace"],
	params?: ListWorkspaceGpuTypesQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListWorkspaceGpuTypesQueryResponseType>["data"]> {
	const res = await client<ListWorkspaceGpuTypesQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/workspaces/${workspace}/gpu_types`,
		params,
		...options,
	});
	return res.data;
}
