import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	GetInstancePathParamsType,
	GetInstanceQueryResponseType,
} from "../ts/GetInstanceType";

/**
 * @summary Get Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name
 */
export async function getInstance(
	workspace: GetInstancePathParamsType["workspace"],
	name: GetInstancePathParamsType["name"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetInstanceQueryResponseType>["data"]> {
	const res = await client<GetInstanceQueryResponseType>({
		method: "get",
		url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}`,
		...options,
	});
	return res.data;
}
