import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { ReplaceUserQuotaMutationResponseType, ReplaceUserQuotaPathParamsType, ReplaceUserQuota400Type, ReplaceUserQuota401Type, ReplaceUserQuota404Type, ReplaceUserQuota409Type, ReplaceUserQuota412Type, ReplaceUserQuota422Type, ReplaceUserQuota500Type } from "../ts/ReplaceUserQuotaType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ReplaceUserQuotaClient = typeof client<ReplaceUserQuotaMutationResponseType, ReplaceUserQuota400Type | ReplaceUserQuota401Type | ReplaceUserQuota404Type | ReplaceUserQuota409Type | ReplaceUserQuota412Type | ReplaceUserQuota422Type | ReplaceUserQuota500Type, never>;
type ReplaceUserQuota = {
    data: ReplaceUserQuotaMutationResponseType;
    error: ReplaceUserQuota400Type | ReplaceUserQuota401Type | ReplaceUserQuota404Type | ReplaceUserQuota409Type | ReplaceUserQuota412Type | ReplaceUserQuota422Type | ReplaceUserQuota500Type;
    request: never;
    pathParams: ReplaceUserQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: ReplaceUserQuotaMutationResponseType;
    client: {
        parameters: Partial<Parameters<ReplaceUserQuotaClient>[0]>;
        return: Awaited<ReturnType<ReplaceUserQuotaClient>>;
    };
};
/**
 * @summary Replace User Quota
 * @link /apis/user/v1/users/:username/quota
 */
export function useReplaceUserQuotaHook(username: ReplaceUserQuotaPathParamsType["username"], options: {
    mutation?: UseMutationOptions<ReplaceUserQuota["response"], ReplaceUserQuota["error"], ReplaceUserQuota["request"]>;
    client?: ReplaceUserQuota["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useReplaceUserQuotaHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<ReplaceUserQuota["data"], ReplaceUserQuota["error"], ReplaceUserQuota["request"]>({
                method: "put",
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
