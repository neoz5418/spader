import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { CreateFileStorageMutationRequestType, CreateFileStorageMutationResponseType, CreateFileStoragePathParamsType } from "../ts/CreateFileStorageType";

 /**
 * @summary Create File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/
 */
export async function createFileStorage(workspace: CreateFileStoragePathParamsType["workspace"], zone: CreateFileStoragePathParamsType["zone"], data: CreateFileStorageMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<CreateFileStorageMutationResponseType>["data"]> {
    const res = await client<CreateFileStorageMutationResponseType, CreateFileStorageMutationRequestType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/`, data, ...options });
    return res.data;
}