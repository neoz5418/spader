import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListWorkspaceImagesPathParamsType,
	ListWorkspaceImagesQueryParamsType,
	ListWorkspaceImagesQueryResponseType,
} from "../ts/ListWorkspaceImagesType";

/**
 * @summary List Workspace Images
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/images
 */
export async function listWorkspaceImages(
	workspace: ListWorkspaceImagesPathParamsType["workspace"],
	zone: ListWorkspaceImagesPathParamsType["zone"],
	params?: ListWorkspaceImagesQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListWorkspaceImagesQueryResponseType>["data"]> {
	const res = await client<ListWorkspaceImagesQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/images`,
		params,
		...options,
	});
	return res.data;
}
