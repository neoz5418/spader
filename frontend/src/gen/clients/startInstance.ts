import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { StartInstanceMutationResponseType, StartInstancePathParamsType } from "../ts/StartInstanceType";

 /**
 * @summary Start Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/start
 */
export async function startInstance(workspace: StartInstancePathParamsType["workspace"], zone: StartInstancePathParamsType["zone"], name: StartInstancePathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<StartInstanceMutationResponseType>["data"]> {
    const res = await client<StartInstanceMutationResponseType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/start`, ...options });
    return res.data;
}
