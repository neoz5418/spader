import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { UpdateWorkspaceQuotaMutationRequestType, UpdateWorkspaceQuotaMutationResponseType, UpdateWorkspaceQuotaPathParamsType, UpdateWorkspaceQuota422Type } from "../ts/UpdateWorkspaceQuotaType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateWorkspaceQuotaClient = typeof client<UpdateWorkspaceQuotaMutationResponseType, UpdateWorkspaceQuota422Type, UpdateWorkspaceQuotaMutationRequestType>;
type UpdateWorkspaceQuota = {
    data: UpdateWorkspaceQuotaMutationResponseType;
    error: UpdateWorkspaceQuota422Type;
    request: UpdateWorkspaceQuotaMutationRequestType;
    pathParams: UpdateWorkspaceQuotaPathParamsType;
    queryParams: never;
    headerParams: never;
    response: UpdateWorkspaceQuotaMutationResponseType;
    client: {
        parameters: Partial<Parameters<UpdateWorkspaceQuotaClient>[0]>;
        return: Awaited<ReturnType<UpdateWorkspaceQuotaClient>>;
    };
};
/**
 * @summary Update Workspace Quota
 * @link /apis/workspace/v1/workspaces/:workspace/quota
 */
export function useUpdateWorkspaceQuotaHook(workspace: UpdateWorkspaceQuotaPathParamsType["workspace"], options: {
    mutation?: UseMutationOptions<UpdateWorkspaceQuota["response"], UpdateWorkspaceQuota["error"], UpdateWorkspaceQuota["request"]>;
    client?: UpdateWorkspaceQuota["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useUpdateWorkspaceQuotaHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateWorkspaceQuota["data"], UpdateWorkspaceQuota["error"], UpdateWorkspaceQuota["request"]>({
                method: "patch",
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