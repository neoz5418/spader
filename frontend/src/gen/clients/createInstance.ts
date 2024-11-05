import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { CreateInstanceMutationRequestType, CreateInstanceMutationResponseType, CreateInstancePathParamsType } from "../ts/CreateInstanceType";

 /**
 * @summary Create and start a new instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances
 */
export async function createInstance(workspace: CreateInstancePathParamsType["workspace"], zone: CreateInstancePathParamsType["zone"], data: CreateInstanceMutationRequestType, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<CreateInstanceMutationResponseType>["data"]> {
    const res = await client<CreateInstanceMutationResponseType, CreateInstanceMutationRequestType>({ method: "post", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances`, data, ...options });
    return res.data;
}