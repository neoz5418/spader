import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { StartInstanceMutationResponseType, StartInstancePathParamsType, StartInstance400Type, StartInstance401Type, StartInstance404Type, StartInstance422Type, StartInstance429Type, StartInstance500Type, StartInstance503Type } from "../ts/StartInstanceType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type StartInstanceClient = typeof client<StartInstanceMutationResponseType, StartInstance400Type | StartInstance401Type | StartInstance404Type | StartInstance422Type | StartInstance429Type | StartInstance500Type | StartInstance503Type, never>;
type StartInstance = {
    data: StartInstanceMutationResponseType;
    error: StartInstance400Type | StartInstance401Type | StartInstance404Type | StartInstance422Type | StartInstance429Type | StartInstance500Type | StartInstance503Type;
    request: never;
    pathParams: StartInstancePathParamsType;
    queryParams: never;
    headerParams: never;
    response: StartInstanceMutationResponseType;
    client: {
        parameters: Partial<Parameters<StartInstanceClient>[0]>;
        return: Awaited<ReturnType<StartInstanceClient>>;
    };
};
/**
 * @summary Start Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/start
 */
export function useStartInstanceHook(workspace: StartInstancePathParamsType["workspace"], zone: StartInstancePathParamsType["zone"], name: StartInstancePathParamsType["name"], options: {
    mutation?: UseMutationOptions<StartInstance["response"], StartInstance["error"], StartInstance["request"]>;
    client?: StartInstance["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useStartInstanceHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<StartInstance["data"], StartInstance["error"], StartInstance["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/start`,
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