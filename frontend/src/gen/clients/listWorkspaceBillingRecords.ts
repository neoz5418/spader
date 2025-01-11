import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceBillingRecordsQueryResponseType, ListWorkspaceBillingRecordsPathParamsType, ListWorkspaceBillingRecordsQueryParamsType } from "../ts/ListWorkspaceBillingRecordsType";

 /**
 * @summary List Workspace Billing Records
 * @link /apis/workspace/v1/workspaces/:workspace/billing_records
 */
export async function listWorkspaceBillingRecords(workspace: ListWorkspaceBillingRecordsPathParamsType["workspace"], params?: ListWorkspaceBillingRecordsQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceBillingRecordsQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceBillingRecordsQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/billing_records`, params, ...options });
    return res.data;
}