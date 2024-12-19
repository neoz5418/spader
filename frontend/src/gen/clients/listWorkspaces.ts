import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspacesQueryResponseType, ListWorkspacesQueryParamsType } from "../ts/ListWorkspacesType";

 /**
 * @summary List Workspaces
 * @link /apis/workspace/v1/workspaces
 */
export async function listWorkspaces(params?: ListWorkspacesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspacesQueryResponseType>["data"]> {
    const res = await client<ListWorkspacesQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces`, params, ...options });
    return res.data;
}