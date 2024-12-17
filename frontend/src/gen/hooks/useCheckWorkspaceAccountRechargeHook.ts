import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CheckWorkspaceAccountRechargeMutationResponseType, CheckWorkspaceAccountRechargePathParamsType, CheckWorkspaceAccountRecharge400Type, CheckWorkspaceAccountRecharge401Type, CheckWorkspaceAccountRecharge404Type, CheckWorkspaceAccountRecharge409Type, CheckWorkspaceAccountRecharge412Type, CheckWorkspaceAccountRecharge422Type, CheckWorkspaceAccountRecharge500Type } from "../ts/CheckWorkspaceAccountRechargeType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CheckWorkspaceAccountRechargeClient = typeof client<CheckWorkspaceAccountRechargeMutationResponseType, CheckWorkspaceAccountRecharge400Type | CheckWorkspaceAccountRecharge401Type | CheckWorkspaceAccountRecharge404Type | CheckWorkspaceAccountRecharge409Type | CheckWorkspaceAccountRecharge412Type | CheckWorkspaceAccountRecharge422Type | CheckWorkspaceAccountRecharge500Type, never>;
type CheckWorkspaceAccountRecharge = {
    data: CheckWorkspaceAccountRechargeMutationResponseType;
    error: CheckWorkspaceAccountRecharge400Type | CheckWorkspaceAccountRecharge401Type | CheckWorkspaceAccountRecharge404Type | CheckWorkspaceAccountRecharge409Type | CheckWorkspaceAccountRecharge412Type | CheckWorkspaceAccountRecharge422Type | CheckWorkspaceAccountRecharge500Type;
    request: never;
    pathParams: CheckWorkspaceAccountRechargePathParamsType;
    queryParams: never;
    headerParams: never;
    response: CheckWorkspaceAccountRechargeMutationResponseType;
    client: {
        parameters: Partial<Parameters<CheckWorkspaceAccountRechargeClient>[0]>;
        return: Awaited<ReturnType<CheckWorkspaceAccountRechargeClient>>;
    };
};
/**
 * @summary Check Workspace Account Recharge
 * @link /apis/workspace/v1/recharges/:recharge_id/check
 */
export function useCheckWorkspaceAccountRechargeHook(rechargeId: CheckWorkspaceAccountRechargePathParamsType["recharge_id"], options: {
    mutation?: UseMutationOptions<CheckWorkspaceAccountRecharge["response"], CheckWorkspaceAccountRecharge["error"], CheckWorkspaceAccountRecharge["request"]>;
    client?: CheckWorkspaceAccountRecharge["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCheckWorkspaceAccountRechargeHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<CheckWorkspaceAccountRecharge["data"], CheckWorkspaceAccountRecharge["error"], CheckWorkspaceAccountRecharge["request"]>({
                method: "post",
                url: `/apis/workspace/v1/recharges/${rechargeId}/check`,
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
