import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { UpdateImageMutationResponseType, UpdateImagePathParamsType, UpdateImage400Type, UpdateImage401Type, UpdateImage404Type, UpdateImage422Type, UpdateImage429Type, UpdateImage500Type, UpdateImage503Type } from "../ts/UpdateImageType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateImageClient = typeof client<UpdateImageMutationResponseType, UpdateImage400Type | UpdateImage401Type | UpdateImage404Type | UpdateImage422Type | UpdateImage429Type | UpdateImage500Type | UpdateImage503Type, never>;
type UpdateImage = {
    data: UpdateImageMutationResponseType;
    error: UpdateImage400Type | UpdateImage401Type | UpdateImage404Type | UpdateImage422Type | UpdateImage429Type | UpdateImage500Type | UpdateImage503Type;
    request: never;
    pathParams: UpdateImagePathParamsType;
    queryParams: never;
    headerParams: never;
    response: UpdateImageMutationResponseType;
    client: {
        parameters: Partial<Parameters<UpdateImageClient>[0]>;
        return: Awaited<ReturnType<UpdateImageClient>>;
    };
};
/**
 * @summary Update Image
 * @link /apis/compute/v1/zones/:zone/images/:name
 */
export function useUpdateImageHook(zone: UpdateImagePathParamsType["zone"], name: UpdateImagePathParamsType["name"], options: {
    mutation?: UseMutationOptions<UpdateImage["response"], UpdateImage["error"], UpdateImage["request"]>;
    client?: UpdateImage["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useUpdateImageHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<UpdateImage["data"], UpdateImage["error"], UpdateImage["request"]>({
                method: "patch",
                url: `/apis/compute/v1/zones/${zone}/images/${name}`,
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
