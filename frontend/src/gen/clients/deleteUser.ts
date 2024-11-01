import client from "@/utils/client.ts";
import type { ResponseConfig } from "@/utils/client.ts";
import type { DeleteUserMutationResponseType, DeleteUserPathParamsType } from "../ts/DeleteUserType";

 /**
 * @summary Delete User
 * @link /apis/user/v1/users/:username
 */
export async function deleteUser(username: DeleteUserPathParamsType["username"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteUserMutationResponseType>["data"]> {
    const res = await client<DeleteUserMutationResponseType>({ method: "delete", url: `/apis/user/v1/users/${username}`, ...options });
    return res.data;
}