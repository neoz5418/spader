import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { GetWorkspaceOperationsQueryResponseType, GetWorkspaceOperationsPathParamsType, GetWorkspaceOperationsQueryParamsType } from "../ts/GetWorkspaceOperationsType";

 /**
 * @summary Get Workspace Operations
 * @link /apis/workspace/v1/workspaces/:workspace/operations
 */
export async function getWorkspaceOperations(workspace: GetWorkspaceOperationsPathParamsType["workspace"], params?: GetWorkspaceOperationsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetWorkspaceOperationsQueryResponseType>["data"]> {
    const res = await client<GetWorkspaceOperationsQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/operations`, params, ...options });
    return res.data;
}