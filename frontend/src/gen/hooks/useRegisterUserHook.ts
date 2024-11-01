import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { RegisterUserMutationRequestType, RegisterUserMutationResponseType, RegisterUser400Type, RegisterUser401Type, RegisterUser404Type, RegisterUser422Type, RegisterUser429Type, RegisterUser500Type, RegisterUser503Type } from "../ts/RegisterUserType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RegisterUserClient = typeof client<RegisterUserMutationResponseType, RegisterUser400Type | RegisterUser401Type | RegisterUser404Type | RegisterUser422Type | RegisterUser429Type | RegisterUser500Type | RegisterUser503Type, RegisterUserMutationRequestType>;
type RegisterUser = {
    data: RegisterUserMutationResponseType;
    error: RegisterUser400Type | RegisterUser401Type | RegisterUser404Type | RegisterUser422Type | RegisterUser429Type | RegisterUser500Type | RegisterUser503Type;
    request: RegisterUserMutationRequestType;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: RegisterUserMutationResponseType;
    client: {
        parameters: Partial<Parameters<RegisterUserClient>[0]>;
        return: Awaited<ReturnType<RegisterUserClient>>;
    };
};
/**
 * @summary Register User
 * @link /apis/user/v1/users/
 */
export function useRegisterUserHook(options: {
    mutation?: UseMutationOptions<RegisterUser["response"], RegisterUser["error"], RegisterUser["request"]>;
    client?: RegisterUser["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useRegisterUserHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<RegisterUser["data"], RegisterUser["error"], RegisterUser["request"]>({
                method: "post",
                url: `/apis/user/v1/users/`,
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