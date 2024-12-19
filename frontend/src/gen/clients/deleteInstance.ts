import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type {
	DeleteInstanceMutationResponseType,
	DeleteInstancePathParamsType,
} from "../ts/DeleteInstanceType";

/**
 * @summary Delete Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name
 */
export async function deleteInstance(
	workspace: DeleteInstancePathParamsType["workspace"],
	name: DeleteInstancePathParamsType["name"],
	options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<DeleteInstanceMutationResponseType>["data"]> {
	const res = await client<DeleteInstanceMutationResponseType>({
		method: "delete",
		url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}`,
		...options,
	});
	return res.data;
}
