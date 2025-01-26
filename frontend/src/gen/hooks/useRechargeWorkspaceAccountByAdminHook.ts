import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { RechargeWorkspaceAccountByAdminMutationRequestType, RechargeWorkspaceAccountByAdminMutationResponseType, RechargeWorkspaceAccountByAdminPathParamsType, RechargeWorkspaceAccountByAdmin422Type } from "../ts/RechargeWorkspaceAccountByAdminType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RechargeWorkspaceAccountByAdminClient = typeof client<RechargeWorkspaceAccountByAdminMutationResponseType, RechargeWorkspaceAccountByAdmin422Type, RechargeWorkspaceAccountByAdminMutationRequestType>;
type RechargeWorkspaceAccountByAdmin = {
    data: RechargeWorkspaceAccountByAdminMutationResponseType;
    error: RechargeWorkspaceAccountByAdmin422Type;
    request: RechargeWorkspaceAccountByAdminMutationRequestType;
    pathParams: RechargeWorkspaceAccountByAdminPathParamsType;
    queryParams: never;
    headerParams: never;
    response: RechargeWorkspaceAccountByAdminMutationResponseType;
    client: {
        parameters: Partial<Parameters<RechargeWorkspaceAccountByAdminClient>[0]>;
        return: Awaited<ReturnType<RechargeWorkspaceAccountByAdminClient>>;
    };
};
/**
 * @summary Recharge Workspace Account By Admin
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharge_by_admin
 */
export function useRechargeWorkspaceAccountByAdminHook(workspace: RechargeWorkspaceAccountByAdminPathParamsType["workspace"], options: {
    mutation?: UseMutationOptions<RechargeWorkspaceAccountByAdmin["response"], RechargeWorkspaceAccountByAdmin["error"], RechargeWorkspaceAccountByAdmin["request"]>;
    client?: RechargeWorkspaceAccountByAdmin["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useRechargeWorkspaceAccountByAdminHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<RechargeWorkspaceAccountByAdmin["data"], RechargeWorkspaceAccountByAdmin["error"], RechargeWorkspaceAccountByAdmin["request"]>({
                method: "post",
                url: `/apis/workspace/v1/workspaces/${workspace}/account/recharge_by_admin`,
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