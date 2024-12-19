import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { ListInstancePortForwardsQueryResponseType, ListInstancePortForwardsPathParamsType } from "../ts/ListInstancePortForwardsType";

 /**
 * @summary List Instance Port Forwards
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards
 */
export async function listInstancePortForwards(workspace: ListInstancePortForwardsPathParamsType["workspace"], zone: ListInstancePortForwardsPathParamsType["zone"], name: ListInstancePortForwardsPathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ListInstancePortForwardsQueryResponseType>["data"]> {
    const res = await client<ListInstancePortForwardsQueryResponseType>({ method: "get", url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forwards`, ...options });
    return res.data;
}