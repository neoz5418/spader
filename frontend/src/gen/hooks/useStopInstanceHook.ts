import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { StopInstanceMutationResponseType, StopInstancePathParamsType, StopInstance400Type, StopInstance401Type, StopInstance404Type, StopInstance422Type, StopInstance429Type, StopInstance500Type, StopInstance503Type } from "../ts/StopInstanceType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type StopInstanceClient = typeof client<StopInstanceMutationResponseType, StopInstance400Type | StopInstance401Type | StopInstance404Type | StopInstance422Type | StopInstance429Type | StopInstance500Type | StopInstance503Type, never>;
type StopInstance = {
    data: StopInstanceMutationResponseType;
    error: StopInstance400Type | StopInstance401Type | StopInstance404Type | StopInstance422Type | StopInstance429Type | StopInstance500Type | StopInstance503Type;
    request: never;
    pathParams: StopInstancePathParamsType;
    queryParams: never;
    headerParams: never;
    response: StopInstanceMutationResponseType;
    client: {
        parameters: Partial<Parameters<StopInstanceClient>[0]>;
        return: Awaited<ReturnType<StopInstanceClient>>;
    };
};
/**
 * @summary Stop Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/stop
 */
export function useStopInstanceHook(workspace: StopInstancePathParamsType["workspace"], zone: StopInstancePathParamsType["zone"], name: StopInstancePathParamsType["name"], options: {
    mutation?: UseMutationOptions<StopInstance["response"], StopInstance["error"], StopInstance["request"]>;
    client?: StopInstance["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useStopInstanceHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<StopInstance["data"], StopInstance["error"], StopInstance["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/stop`,
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