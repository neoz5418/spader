import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceOperationsQueryResponseType, ListWorkspaceOperationsPathParamsType, ListWorkspaceOperationsQueryParamsType } from "../ts/ListWorkspaceOperationsType";

 /**
 * @summary List Workspace Operations
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/operations
 */
export async function listWorkspaceOperations(workspace: ListWorkspaceOperationsPathParamsType["workspace"], zone: ListWorkspaceOperationsPathParamsType["zone"], params?: ListWorkspaceOperationsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceOperationsQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceOperationsQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/operations`, params, ...options });
    return res.data;
}