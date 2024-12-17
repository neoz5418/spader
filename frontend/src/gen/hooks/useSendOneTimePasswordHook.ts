import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { SendOneTimePasswordMutationRequestType, SendOneTimePasswordMutationResponseType, SendOneTimePassword422Type } from "../ts/SendOneTimePasswordType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type SendOneTimePasswordClient = typeof client<SendOneTimePasswordMutationResponseType, SendOneTimePassword422Type, SendOneTimePasswordMutationRequestType>;
type SendOneTimePassword = {
    data: SendOneTimePasswordMutationResponseType;
    error: SendOneTimePassword422Type;
    request: SendOneTimePasswordMutationRequestType;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: SendOneTimePasswordMutationResponseType;
    client: {
        parameters: Partial<Parameters<SendOneTimePasswordClient>[0]>;
        return: Awaited<ReturnType<SendOneTimePasswordClient>>;
    };
};
/**
 * @summary Send One Time Password
 * @link /apis/user/v1/one_time_password
 */
export function useSendOneTimePasswordHook(options: {
    mutation?: UseMutationOptions<SendOneTimePassword["response"], SendOneTimePassword["error"], SendOneTimePassword["request"]>;
    client?: SendOneTimePassword["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useSendOneTimePasswordHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<SendOneTimePassword["data"], SendOneTimePassword["error"], SendOneTimePassword["request"]>({
                method: "post",
                url: `/apis/user/v1/one_time_password`,
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
