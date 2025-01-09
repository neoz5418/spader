import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { CalculateInstanceCostMutationRequestType, CalculateInstanceCostMutationResponseType, CalculateInstanceCostPathParamsType } from "../ts/CalculateInstanceCostType";

 /**
 * @summary Calculate Instance Cost
 * @link /apis/compute/v1/workspaces/:workspace/instances/calculate-cost
 */
export async function calculateInstanceCost(workspace: CalculateInstanceCostPathParamsType["workspace"], data: CalculateInstanceCostMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<CalculateInstanceCostMutationResponseType>["data"]> {
    const res = await client<CalculateInstanceCostMutationResponseType, CalculateInstanceCostMutationRequestType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/instances/calculate-cost`, data, ...options });
    return res.data;
}
