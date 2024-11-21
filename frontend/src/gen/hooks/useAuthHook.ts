import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { AuthMutationRequestType, AuthMutationResponseType, Auth400Type, Auth401Type, Auth404Type, Auth422Type, Auth429Type, Auth500Type, Auth503Type } from "../ts/AuthType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AuthClient = typeof client<AuthMutationResponseType, Auth400Type | Auth401Type | Auth404Type | Auth422Type | Auth429Type | Auth500Type | Auth503Type, AuthMutationRequestType>;
type Auth = {
    data: AuthMutationResponseType;
    error: Auth400Type | Auth401Type | Auth404Type | Auth422Type | Auth429Type | Auth500Type | Auth503Type;
    request: AuthMutationRequestType;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: AuthMutationResponseType;
    client: {
        parameters: Partial<Parameters<AuthClient>[0]>;
        return: Awaited<ReturnType<AuthClient>>;
    };
};
/**
 * @summary Auth
 * @link /apis/oidc/v1/auth
 */
export function useAuthHook(options: {
    mutation?: UseMutationOptions<Auth["response"], Auth["error"], Auth["request"]>;
    client?: Auth["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useAuthHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<Auth["data"], Auth["error"], Auth["request"]>({
                method: "post",
                url: `/apis/oidc/v1/auth`,
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
