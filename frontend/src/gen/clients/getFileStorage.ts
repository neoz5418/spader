import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	GetFileStoragePathParamsType,
	GetFileStorageQueryResponseType,
} from "../ts/GetFileStorageType";

/**
 * @summary Get File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name
 */
export async function getFileStorage(
	workspace: GetFileStoragePathParamsType["workspace"],
	zone: GetFileStoragePathParamsType["zone"],
	name: GetFileStoragePathParamsType["name"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetFileStorageQueryResponseType>["data"]> {
	const res = await client<GetFileStorageQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}`,
		...options,
	});
	return res.data;
}
