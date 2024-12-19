import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	ListZonesQueryParamsType,
	ListZonesQueryResponseType,
} from "../ts/ListZonesType";

/**
 * @summary List Zones
 * @link /apis/compute/v1/zones
 */
export async function listZones(
	params?: ListZonesQueryParamsType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ListZonesQueryResponseType>["data"]> {
	const res = await client<ListZonesQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/zones`,
		params,
		...options,
	});
	return res.data;
}
