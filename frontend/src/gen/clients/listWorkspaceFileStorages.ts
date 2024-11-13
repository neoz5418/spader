import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceFileStoragesQueryResponseType, ListWorkspaceFileStoragesPathParamsType, ListWorkspaceFileStoragesQueryParamsType } from "../ts/ListWorkspaceFileStoragesType";

 /**
 * @summary List Workspace File Storages
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages
 */
export async function listWorkspaceFileStorages(workspace: ListWorkspaceFileStoragesPathParamsType["workspace"], zone: ListWorkspaceFileStoragesPathParamsType["zone"], params?: ListWorkspaceFileStoragesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceFileStoragesQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceFileStoragesQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages`, params, ...options });
    return res.data;
}