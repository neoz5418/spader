import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { StopInstanceMutationResponseType, StopInstancePathParamsType } from "../ts/StopInstanceType";

 /**
 * @summary Stop Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name/stop
 */
export async function stopInstance(workspace: StopInstancePathParamsType["workspace"], name: StopInstancePathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<StopInstanceMutationResponseType>["data"]> {
    const res = await client<StopInstanceMutationResponseType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}/stop`, ...options });
    return res.data;
}