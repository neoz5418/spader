import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { UpdateUserQuotaMutationResponseType, UpdateUserQuotaPathParamsType, UpdateUserQuota400Type, UpdateUserQuota401Type, UpdateUserQuota404Type, UpdateUserQuota409Type, UpdateUserQuota412Type, UpdateUserQuota422Type, UpdateUserQuota500Type } from "../ts/UpdateUserQuotaType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateUserQuotaClient = typeof client<UpdateUserQuotaMutationResponseType, UpdateUserQuota400Type | UpdateUserQuota401Type | UpdateUserQuota404Type | UpdateUserQuota409Type | UpdateUserQuota412Type | UpdateUserQuota422Type | UpdateUserQuota500Type, never>;
type UpdateUserQuota = {
    data: UpdateUserQuotaMutationResponseType;
    error: UpdateUserQuota400Type | UpdateUserQuota401Type | UpdateUserQuota404Type | UpdateUserQuota409Type | UpdateUserQuota412Type | UpdateUserQuota422Type | UpdateUserQuota500Type;
    request: never;
    pathParams: UpdateUserQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: UpdateUserQuotaMutationResponseType;
    client: {
        parameters: Partial<Parameters<UpdateUserQuotaClient>[0]>;
        return: Awaited<ReturnType<UpdateUserQuotaClient>>;
    };
};
/**
 * @summary Update User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export function useUpdateUserQuotaHook(username: UpdateUserQuotaPathParamsType["username"], options: {
    mutation?: UseMutationOptions<UpdateUserQuota["response"], UpdateUserQuota["error"], UpdateUserQuota["request"]>;
    client?: UpdateUserQuota["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useUpdateUserQuotaHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<UpdateUserQuota["data"], UpdateUserQuota["error"], UpdateUserQuota["request"]>({
                method: "patch",
                url: `/apis/user/v1/users/${username}/quota`,
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
