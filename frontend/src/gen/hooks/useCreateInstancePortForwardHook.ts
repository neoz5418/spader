import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CreateInstancePortForwardMutationRequestType, CreateInstancePortForwardMutationResponseType, CreateInstancePortForwardPathParamsType, CreateInstancePortForward422Type } from "../ts/CreateInstancePortForwardType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateInstancePortForwardClient = typeof client<CreateInstancePortForwardMutationResponseType, CreateInstancePortForward422Type, CreateInstancePortForwardMutationRequestType>;
type CreateInstancePortForward = {
    data: CreateInstancePortForwardMutationResponseType;
    error: CreateInstancePortForward422Type;
    request: CreateInstancePortForwardMutationRequestType;
    pathParams: CreateInstancePortForwardPathParamsType;
    queryParams: never;
    headerParams: never;
    response: CreateInstancePortForwardMutationResponseType;
    client: {
        parameters: Partial<Parameters<CreateInstancePortForwardClient>[0]>;
        return: Awaited<ReturnType<CreateInstancePortForwardClient>>;
    };
};
/**
 * @summary Create Instance Port Forward
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forward
 */
export function useCreateInstancePortForwardHook(workspace: CreateInstancePortForwardPathParamsType["workspace"], zone: CreateInstancePortForwardPathParamsType["zone"], name: CreateInstancePortForwardPathParamsType["name"], options: {
    mutation?: UseMutationOptions<CreateInstancePortForward["response"], CreateInstancePortForward["error"], CreateInstancePortForward["request"]>;
    client?: CreateInstancePortForward["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCreateInstancePortForwardHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateInstancePortForward["data"], CreateInstancePortForward["error"], CreateInstancePortForward["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forward`,
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
