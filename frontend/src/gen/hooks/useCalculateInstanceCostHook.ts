import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CalculateInstanceCostMutationRequestType, CalculateInstanceCostMutationResponseType, CalculateInstanceCostPathParamsType, CalculateInstanceCost422Type } from "../ts/CalculateInstanceCostType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CalculateInstanceCostClient = typeof client<CalculateInstanceCostMutationResponseType, CalculateInstanceCost422Type, CalculateInstanceCostMutationRequestType>;
type CalculateInstanceCost = {
    data: CalculateInstanceCostMutationResponseType;
    error: CalculateInstanceCost422Type;
    request: CalculateInstanceCostMutationRequestType;
    pathParams: CalculateInstanceCostPathParamsType;
    queryParams: never;
    headerParams: never;
    response: CalculateInstanceCostMutationResponseType;
    client: {
        parameters: Partial<Parameters<CalculateInstanceCostClient>[0]>;
        return: Awaited<ReturnType<CalculateInstanceCostClient>>;
    };
};
/**
 * @summary Calculate Instance Cost
 * @link /apis/compute/v1/workspaces/:workspace/instances/calculate-cost
 */
export function useCalculateInstanceCostHook(workspace: CalculateInstanceCostPathParamsType["workspace"], options: {
    mutation?: UseMutationOptions<CalculateInstanceCost["response"], CalculateInstanceCost["error"], CalculateInstanceCost["request"]>;
    client?: CalculateInstanceCost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCalculateInstanceCostHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CalculateInstanceCost["data"], CalculateInstanceCost["error"], CalculateInstanceCost["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/instances/calculate-cost`,
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
