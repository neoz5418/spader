import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { DeleteUserMutationResponseType, DeleteUserPathParamsType, DeleteUser422Type } from "../ts/DeleteUserType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteUserClient = typeof client<DeleteUserMutationResponseType, DeleteUser422Type, never>;
type DeleteUser = {
    data: DeleteUserMutationResponseType;
    error: DeleteUser422Type;
    request: never;
    pathParams: DeleteUserPathParamsType;
    queryParams: never;
    headerParams: never;
    response: DeleteUserMutationResponseType;
    client: {
        parameters: Partial<Parameters<DeleteUserClient>[0]>;
        return: Awaited<ReturnType<DeleteUserClient>>;
    };
};
/**
 * @summary Delete User
 * @link /apis/user/v1/users/:username
 */
export function useDeleteUserHook(username: DeleteUserPathParamsType["username"], options: {
    mutation?: UseMutationOptions<DeleteUser["response"], DeleteUser["error"], DeleteUser["request"]>;
    client?: DeleteUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useDeleteUserHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteUser["data"], DeleteUser["error"], DeleteUser["request"]>({
                method: "delete",
                url: `/apis/user/v1/users/${username}`,
                ...clientOptions
            });
            return res.data;
        },
        onSuccess: (...args) => {
            if (invalidationOnSuccess)
                invalidationOnSuccess(...args);
            if (mutationOptions?.onSuccess)
                mutationOptions.onSuccess(...args);
        },
        ...mutationOptions
    });
}