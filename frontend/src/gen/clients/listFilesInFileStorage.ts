import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListFilesInFileStorageQueryResponseType, ListFilesInFileStoragePathParamsType, ListFilesInFileStorageQueryParamsType } from "../ts/ListFilesInFileStorageType";

 /**
 * @description Up to 100 files can be listed
 * @summary List Files In File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name/files
 */
export async function listFilesInFileStorage(workspace: ListFilesInFileStoragePathParamsType["workspace"], zone: ListFilesInFileStoragePathParamsType["zone"], name: ListFilesInFileStoragePathParamsType["name"], params?: ListFilesInFileStorageQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListFilesInFileStorageQueryResponseType>["data"]> {
    const res = await client<ListFilesInFileStorageQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}/files`, params, ...options });
    return res.data;
}