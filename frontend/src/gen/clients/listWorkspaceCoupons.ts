import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceCouponsQueryResponseType, ListWorkspaceCouponsPathParamsType, ListWorkspaceCouponsQueryParamsType } from "../ts/ListWorkspaceCouponsType";

 /**
 * @summary List Workspace Coupons
 * @link /apis/workspace/v1/workspaces/:workspace/coupons
 */
export async function listWorkspaceCoupons(workspace: ListWorkspaceCouponsPathParamsType["workspace"], params?: ListWorkspaceCouponsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceCouponsQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceCouponsQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/coupons`, params, ...options });
    return res.data;
}
