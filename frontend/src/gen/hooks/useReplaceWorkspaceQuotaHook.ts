import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { ReplaceWorkspaceQuotaMutationRequestType, ReplaceWorkspaceQuotaMutationResponseType, ReplaceWorkspaceQuotaPathParamsType, ReplaceWorkspaceQuota400Type, ReplaceWorkspaceQuota401Type, ReplaceWorkspaceQuota404Type, ReplaceWorkspaceQuota422Type, ReplaceWorkspaceQuota429Type, ReplaceWorkspaceQuota500Type, ReplaceWorkspaceQuota503Type } from "../ts/ReplaceWorkspaceQuotaType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ReplaceWorkspaceQuotaClient = typeof client<ReplaceWorkspaceQuotaMutationResponseType, ReplaceWorkspaceQuota400Type | ReplaceWorkspaceQuota401Type | ReplaceWorkspaceQuota404Type | ReplaceWorkspaceQuota422Type | ReplaceWorkspaceQuota429Type | ReplaceWorkspaceQuota500Type | ReplaceWorkspaceQuota503Type, ReplaceWorkspaceQuotaMutationRequestType>;
type ReplaceWorkspaceQuota = {
    data: ReplaceWorkspaceQuotaMutationResponseType;
    error: ReplaceWorkspaceQuota400Type | ReplaceWorkspaceQuota401Type | ReplaceWorkspaceQuota404Type | ReplaceWorkspaceQuota422Type | ReplaceWorkspaceQuota429Type | ReplaceWorkspaceQuota500Type | ReplaceWorkspaceQuota503Type;
    request: ReplaceWorkspaceQuotaMutationRequestType;
    pathParams: ReplaceWorkspaceQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: ReplaceWorkspaceQuotaMutationResponseType;
    client: {
        parameters: Partial<Parameters<ReplaceWorkspaceQuotaClient>[0]>;
        return: Awaited<ReturnType<ReplaceWorkspaceQuotaClient>>;
    };
};
/**
 * @summary Replace Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export function useReplaceWorkspaceQuotaHook(workspace: ReplaceWorkspaceQuotaPathParamsType["workspace"], options: {
    mutation?: UseMutationOptions<ReplaceWorkspaceQuota["response"], ReplaceWorkspaceQuota["error"], ReplaceWorkspaceQuota["request"]>;
    client?: ReplaceWorkspaceQuota["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useReplaceWorkspaceQuotaHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<ReplaceWorkspaceQuota["data"], ReplaceWorkspaceQuota["error"], ReplaceWorkspaceQuota["request"]>({
                method: "put",
                url: `/apis/workspace/v1/workspaces/${workspace}/quota`,
                data,
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
