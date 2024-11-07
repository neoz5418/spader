import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { CreateInstancePortForwardMutationRequestType, CreateInstancePortForwardMutationResponseType, CreateInstancePortForwardPathParamsType } from "../ts/CreateInstancePortForwardType";

 /**
 * @summary Create Instance Port Forward
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forward
 */
export async function createInstancePortForward(workspace: CreateInstancePortForwardPathParamsType["workspace"], zone: CreateInstancePortForwardPathParamsType["zone"], name: CreateInstancePortForwardPathParamsType["name"], data: CreateInstancePortForwardMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<CreateInstancePortForwardMutationResponseType>["data"]> {
    const res = await client<CreateInstancePortForwardMutationResponseType, CreateInstancePortForwardMutationRequestType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forward`, data, ...options });
    return res.data;
}
