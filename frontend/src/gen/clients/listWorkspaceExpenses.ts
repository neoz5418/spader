import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListWorkspaceExpensesQueryResponseType, ListWorkspaceExpensesPathParamsType, ListWorkspaceExpensesQueryParamsType } from "../ts/ListWorkspaceExpensesType";

 /**
 * @summary List Workspace Expenses
 * @link /apis/workspace/v1/workspaces/:workspace/expenses
 */
export async function listWorkspaceExpenses(workspace: ListWorkspaceExpensesPathParamsType["workspace"], params: ListWorkspaceExpensesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListWorkspaceExpensesQueryResponseType>["data"]> {
    const res = await client<ListWorkspaceExpensesQueryResponseType>({ method: "get", url: `/apis/workspace/v1/workspaces/${workspace}/expenses`, params, ...options });
    return res.data;
}