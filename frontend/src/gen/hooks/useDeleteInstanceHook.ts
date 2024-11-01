import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { DeleteInstanceMutationResponseType, DeleteInstancePathParamsType, DeleteInstance400Type, DeleteInstance401Type, DeleteInstance404Type, DeleteInstance422Type, DeleteInstance429Type, DeleteInstance500Type, DeleteInstance503Type } from "../ts/DeleteInstanceType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteInstanceClient = typeof client<DeleteInstanceMutationResponseType, DeleteInstance400Type | DeleteInstance401Type | DeleteInstance404Type | DeleteInstance422Type | DeleteInstance429Type | DeleteInstance500Type | DeleteInstance503Type, never>;
type DeleteInstance = {
    data: DeleteInstanceMutationResponseType;
    error: DeleteInstance400Type | DeleteInstance401Type | DeleteInstance404Type | DeleteInstance422Type | DeleteInstance429Type | DeleteInstance500Type | DeleteInstance503Type;
    request: never;
    pathParams: DeleteInstancePathParamsType;
    queryParams: never;
    headerParams: never;
    response: DeleteInstanceMutationResponseType;
    client: {
        parameters: Partial<Parameters<DeleteInstanceClient>[0]>;
        return: Awaited<ReturnType<DeleteInstanceClient>>;
    };
};
/**
 * @summary Delete Instance
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/instances/:name
 */
export function useDeleteInstanceHook(workspace: DeleteInstancePathParamsType["workspace"], zone: DeleteInstancePathParamsType["zone"], name: DeleteInstancePathParamsType["name"], options: {
    mutation?: UseMutationOptions<DeleteInstance["response"], DeleteInstance["error"], DeleteInstance["request"]>;
    client?: DeleteInstance["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useDeleteInstanceHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteInstance["data"], DeleteInstance["error"], DeleteInstance["request"]>({
                method: "delete",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/instances/${name}`,
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