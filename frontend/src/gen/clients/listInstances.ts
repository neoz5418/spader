import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListInstancesQueryResponseType, ListInstancesQueryParamsType } from "../ts/ListInstancesType";

 /**
 * @summary List Instances
 * @link /apis/compute/v1/instances
 */
export async function listInstances(params?: ListInstancesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListInstancesQueryResponseType>["data"]> {
    const res = await client<ListInstancesQueryResponseType>({ method: "get", url: `/apis/compute/v1/instances`, params, ...options });
    return res.data;
}
