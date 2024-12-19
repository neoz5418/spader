import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { StartInstanceMutationResponseType, StartInstancePathParamsType, StartInstance422Type } from "../ts/StartInstanceType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type StartInstanceClient = typeof client<StartInstanceMutationResponseType, StartInstance422Type, never>;
type StartInstance = {
    data: StartInstanceMutationResponseType;
    error: StartInstance422Type;
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
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name/start
 */
export function useStartInstanceHook(workspace: StartInstancePathParamsType["workspace"], name: StartInstancePathParamsType["name"], options: {
    mutation?: UseMutationOptions<StartInstance["response"], StartInstance["error"], StartInstance["request"]>;
    client?: StartInstance["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useStartInstanceHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<StartInstance["data"], StartInstance["error"], StartInstance["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}/start`,
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