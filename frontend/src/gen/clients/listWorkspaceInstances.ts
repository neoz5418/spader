import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceInstancesQueryResponseType, ListWorkspaceInstancesPathParamsType, ListWorkspaceInstancesQueryParamsType } from "../ts/ListWorkspaceInstancesType";

 /**
 * @summary List Workspace Instances
 * @link /apis/compute/v1/workspaces/:workspace/instances
 */
export async function listWorkspaceInstances(workspace: ListWorkspaceInstancesPathParamsType["workspace"], params?: ListWorkspaceInstancesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceInstancesQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceInstancesQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/instances`, params, ...options });
    return res.data;
}
