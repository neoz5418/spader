import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	CreateImageMutationRequestType,
	CreateImageMutationResponseType,
	CreateImagePathParamsType,
} from "../ts/CreateImageType";

/**
 * @summary Create Image
 * @link /apis/compute/v1/zones/:zone/images/
 */
export async function createImage(
	zone: CreateImagePathParamsType["zone"],
	data: CreateImageMutationRequestType,
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<CreateImageMutationResponseType>["data"]> {
	const res = await client<
		CreateImageMutationResponseType,
		CreateImageMutationRequestType
	>({
		method: "post",
		url: `/apis/compute/v1/zones/${zone}/images/`,
		data,
		...options,
	});
	return res.data;
}
