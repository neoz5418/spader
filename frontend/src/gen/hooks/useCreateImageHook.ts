import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CreateImageMutationRequestType, CreateImageMutationResponseType, CreateImagePathParamsType, CreateImage422Type } from "../ts/CreateImageType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateImageClient = typeof client<CreateImageMutationResponseType, CreateImage422Type, CreateImageMutationRequestType>;
type CreateImage = {
    data: CreateImageMutationResponseType;
    error: CreateImage422Type;
    request: CreateImageMutationRequestType;
    pathParams: CreateImagePathParamsType;
    queryParams: never;
    headerParams: never;
    response: CreateImageMutationResponseType;
    client: {
        parameters: Partial<Parameters<CreateImageClient>[0]>;
        return: Awaited<ReturnType<CreateImageClient>>;
    };
};
/**
 * @summary Create Image
 * @link /apis/compute/v1/zones/:zone/images/
 */
export function useCreateImageHook(zone: CreateImagePathParamsType["zone"], options: {
    mutation?: UseMutationOptions<CreateImage["response"], CreateImage["error"], CreateImage["request"]>;
    client?: CreateImage["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCreateImageHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateImage["data"], CreateImage["error"], CreateImage["request"]>({
                method: "post",
                url: `/apis/compute/v1/zones/${zone}/images/`,
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