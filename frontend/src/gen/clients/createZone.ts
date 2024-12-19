import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	CreateZoneMutationRequestType,
	CreateZoneMutationResponseType,
} from "../ts/CreateZoneType";

/**
 * @summary Create a new zone
 * @link /apis/compute/v1/zones/
 */
export async function createZone(
	data: CreateZoneMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateZoneMutationResponseType>["data"]> {
	const res = await client<
		CreateZoneMutationResponseType,
		CreateZoneMutationRequestType
	>({ method: "post", url: `/apis/compute/v1/zones/`, data, ...options });
	return res.data;
}
