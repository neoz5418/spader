import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { DeleteInstancePortForwardMutationResponseType, DeleteInstancePortForwardPathParamsType } from "../ts/DeleteInstancePortForwardType";

 /**
 * @summary Delete Instance Port Forward
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards/:port_forward_name
 */
export async function deleteInstancePortForward(workspace: DeleteInstancePortForwardPathParamsType["workspace"], zone: DeleteInstancePortForwardPathParamsType["zone"], name: DeleteInstancePortForwardPathParamsType["name"], portForwardName: DeleteInstancePortForwardPathParamsType["port_forward_name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteInstancePortForwardMutationResponseType>["data"]> {
    const res = await client<DeleteInstancePortForwardMutationResponseType>({ method: "delete", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forwards/${portForwardName}`, ...options });
    return res.data;
}
