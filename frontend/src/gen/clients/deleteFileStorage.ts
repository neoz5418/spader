import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	DeleteFileStorageMutationResponseType,
	DeleteFileStoragePathParamsType,
} from "../ts/DeleteFileStorageType";

/**
 * @summary Delete File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name
 */
export async function deleteFileStorage(
	workspace: DeleteFileStoragePathParamsType["workspace"],
	zone: DeleteFileStoragePathParamsType["zone"],
	name: DeleteFileStoragePathParamsType["name"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeleteFileStorageMutationResponseType>["data"]> {
	const res = await client<DeleteFileStorageMutationResponseType>({
		method: "delete",
		url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}`,
		...options,
	});
	return res.data;
}
