import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListGpuTypesQueryResponseType, ListGpuTypesPathParamsType, ListGpuTypesQueryParamsType } from "../ts/ListGpuTypesType";

 /**
 * @summary List Gpu Types
 * @link /apis/compute/v1/zones/:zone/gpu_types
 */
export async function listGpuTypes(zone: ListGpuTypesPathParamsType["zone"], params?: ListGpuTypesQueryParamsType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListGpuTypesQueryResponseType>["data"]> {
    const res = await client<ListGpuTypesQueryResponseType>({ method: "get", url: `/apis/compute/v1/zones/${zone}/gpu_types`, params, ...options });
    return res.data;
}