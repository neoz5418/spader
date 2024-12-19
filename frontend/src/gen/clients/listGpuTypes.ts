import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListGpuTypesQueryParamsType,
	ListGpuTypesQueryResponseType,
} from "../ts/ListGpuTypesType";

/**
 * @summary List Gpu Types
 * @link /apis/compute/v1/gpu_types
 */
export async function listGpuTypes(
	params: ListGpuTypesQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListGpuTypesQueryResponseType>["data"]> {
	const res = await client<ListGpuTypesQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/gpu_types`,
		params,
		...options,
	});
	return res.data;
}
