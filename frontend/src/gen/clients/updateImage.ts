import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { UpdateImageMutationResponseType, UpdateImagePathParamsType } from "../ts/UpdateImageType";

 /**
 * @summary Update Image
 * @link /apis/compute/v1/zones/:zone/images/:name
 */
export async function updateImage(zone: UpdateImagePathParamsType["zone"], name: UpdateImagePathParamsType["name"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UpdateImageMutationResponseType>["data"]> {
    const res = await client<UpdateImageMutationResponseType>({ method: "patch", url: `/apis/compute/v1/zones/${zone}/images/${name}`, ...options });
    return res.data;
}