import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListAcceleratorTypesQueryResponseType, ListAcceleratorTypesQueryParamsType } from "../ts/ListAcceleratorTypesType";

 /**
 * @summary List Accelerator Types
 * @link /apis/compute/v1/accelerator_types
 */
export async function listAcceleratorTypes(params: ListAcceleratorTypesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListAcceleratorTypesQueryResponseType>["data"]> {
    const res = await client<ListAcceleratorTypesQueryResponseType>({ method: "get", url: `/apis/compute/v1/accelerator_types`, params, ...options });
    return res.data;
}