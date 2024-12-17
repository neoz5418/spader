import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { DeleteInstancePortForwardMutationResponseType, DeleteInstancePortForwardPathParamsType, DeleteInstancePortForward400Type, DeleteInstancePortForward401Type, DeleteInstancePortForward404Type, DeleteInstancePortForward409Type, DeleteInstancePortForward412Type, DeleteInstancePortForward422Type, DeleteInstancePortForward500Type } from "../ts/DeleteInstancePortForwardType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteInstancePortForwardClient = typeof client<DeleteInstancePortForwardMutationResponseType, DeleteInstancePortForward400Type | DeleteInstancePortForward401Type | DeleteInstancePortForward404Type | DeleteInstancePortForward409Type | DeleteInstancePortForward412Type | DeleteInstancePortForward422Type | DeleteInstancePortForward500Type, never>;
type DeleteInstancePortForward = {
    data: DeleteInstancePortForwardMutationResponseType;
    error: DeleteInstancePortForward400Type | DeleteInstancePortForward401Type | DeleteInstancePortForward404Type | DeleteInstancePortForward409Type | DeleteInstancePortForward412Type | DeleteInstancePortForward422Type | DeleteInstancePortForward500Type;
    request: never;
    pathParams: DeleteInstancePortForwardPathParamsType;
    queryParams: never;
    headerParams: never;
    response: DeleteInstancePortForwardMutationResponseType;
    client: {
        parameters: Partial<Parameters<DeleteInstancePortForwardClient>[0]>;
        return: Awaited<ReturnType<DeleteInstancePortForwardClient>>;
    };
};
/**
 * @summary Delete Instance Port Forward
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name/port_forwards/:port_forward_name
 */
export function useDeleteInstancePortForwardHook(workspace: DeleteInstancePortForwardPathParamsType["workspace"], zone: DeleteInstancePortForwardPathParamsType["zone"], name: DeleteInstancePortForwardPathParamsType["name"], portForwardName: DeleteInstancePortForwardPathParamsType["port_forward_name"], options: {
    mutation?: UseMutationOptions<DeleteInstancePortForward["response"], DeleteInstancePortForward["error"], DeleteInstancePortForward["request"]>;
    client?: DeleteInstancePortForward["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useDeleteInstancePortForwardHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteInstancePortForward["data"], DeleteInstancePortForward["error"], DeleteInstancePortForward["request"]>({
                method: "delete",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}/port_forwards/${portForwardName}`,
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
