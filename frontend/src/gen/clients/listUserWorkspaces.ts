import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListUserWorkspacesQueryResponseType, ListUserWorkspacesPathParamsType, ListUserWorkspacesQueryParamsType } from "../ts/ListUserWorkspacesType";

 /**
 * @summary List User Workspaces
 * @link /apis/workspace/v1/users/:username/workspaces
 */
export async function listUserWorkspaces(username: ListUserWorkspacesPathParamsType["username"], params?: ListUserWorkspacesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListUserWorkspacesQueryResponseType>["data"]> {
    const res = await client<ListUserWorkspacesQueryResponseType>({ method: "get", url: `/apis/workspace/v1/users/${username}/workspaces`, params, ...options });
    return res.data;
}