import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { RechargeWorkspaceAccountMutationRequestType, RechargeWorkspaceAccountMutationResponseType, RechargeWorkspaceAccountPathParamsType, RechargeWorkspaceAccount400Type, RechargeWorkspaceAccount401Type, RechargeWorkspaceAccount404Type, RechargeWorkspaceAccount422Type, RechargeWorkspaceAccount429Type, RechargeWorkspaceAccount500Type, RechargeWorkspaceAccount503Type } from "../ts/RechargeWorkspaceAccountType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RechargeWorkspaceAccountClient = typeof client<RechargeWorkspaceAccountMutationResponseType, RechargeWorkspaceAccount400Type | RechargeWorkspaceAccount401Type | RechargeWorkspaceAccount404Type | RechargeWorkspaceAccount422Type | RechargeWorkspaceAccount429Type | RechargeWorkspaceAccount500Type | RechargeWorkspaceAccount503Type, RechargeWorkspaceAccountMutationRequestType>;
type RechargeWorkspaceAccount = {
    data: RechargeWorkspaceAccountMutationResponseType;
    error: RechargeWorkspaceAccount400Type | RechargeWorkspaceAccount401Type | RechargeWorkspaceAccount404Type | RechargeWorkspaceAccount422Type | RechargeWorkspaceAccount429Type | RechargeWorkspaceAccount500Type | RechargeWorkspaceAccount503Type;
    request: RechargeWorkspaceAccountMutationRequestType;
    pathParams: RechargeWorkspaceAccountPathParamsType;
    queryParams: never;
    headerParams: never;
    response: RechargeWorkspaceAccountMutationResponseType;
    client: {
        parameters: Partial<Parameters<RechargeWorkspaceAccountClient>[0]>;
        return: Awaited<ReturnType<RechargeWorkspaceAccountClient>>;
    };
};
/**
 * @summary Recharge Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharge
 */
export function useRechargeWorkspaceAccountHook(workspace: RechargeWorkspaceAccountPathParamsType["workspace"], options: {
    mutation?: UseMutationOptions<RechargeWorkspaceAccount["response"], RechargeWorkspaceAccount["error"], RechargeWorkspaceAccount["request"]>;
    client?: RechargeWorkspaceAccount["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useRechargeWorkspaceAccountHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<RechargeWorkspaceAccount["data"], RechargeWorkspaceAccount["error"], RechargeWorkspaceAccount["request"]>({
                method: "post",
                url: `/apis/workspace/v1/workspaces/${workspace}/account/recharge`,
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
