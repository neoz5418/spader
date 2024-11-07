import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CreateZoneMutationRequestType, CreateZoneMutationResponseType, CreateZone400Type, CreateZone401Type, CreateZone404Type, CreateZone422Type, CreateZone429Type, CreateZone500Type, CreateZone503Type } from "../ts/CreateZoneType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateZoneClient = typeof client<CreateZoneMutationResponseType, CreateZone400Type | CreateZone401Type | CreateZone404Type | CreateZone422Type | CreateZone429Type | CreateZone500Type | CreateZone503Type, CreateZoneMutationRequestType>;
type CreateZone = {
    data: CreateZoneMutationResponseType;
    error: CreateZone400Type | CreateZone401Type | CreateZone404Type | CreateZone422Type | CreateZone429Type | CreateZone500Type | CreateZone503Type;
    request: CreateZoneMutationRequestType;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: CreateZoneMutationResponseType;
    client: {
        parameters: Partial<Parameters<CreateZoneClient>[0]>;
        return: Awaited<ReturnType<CreateZoneClient>>;
    };
};
/**
 * @summary Create a new zone
 * @link /apis/compute/v1/zones/
 */
export function useCreateZoneHook(options: {
    mutation?: UseMutationOptions<CreateZone["response"], CreateZone["error"], CreateZone["request"]>;
    client?: CreateZone["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCreateZoneHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateZone["data"], CreateZone["error"], CreateZone["request"]>({
                method: "post",
                url: `/apis/compute/v1/zones/`,
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
