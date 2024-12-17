import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { TokenMutationRequestType, TokenMutationResponseType, Token400Type, Token401Type, Token404Type, Token409Type, Token412Type, Token422Type, Token500Type } from "../ts/TokenType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type TokenClient = typeof client<TokenMutationResponseType, Token400Type | Token401Type | Token404Type | Token409Type | Token412Type | Token422Type | Token500Type, TokenMutationRequestType>;
type Token = {
    data: TokenMutationResponseType;
    error: Token400Type | Token401Type | Token404Type | Token409Type | Token412Type | Token422Type | Token500Type;
    request: TokenMutationRequestType;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: TokenMutationResponseType;
    client: {
        parameters: Partial<Parameters<TokenClient>[0]>;
        return: Awaited<ReturnType<TokenClient>>;
    };
};
/**
 * @summary Token
 * @link /apis/oidc/v1/token
 */
export function useTokenHook(options: {
    mutation?: UseMutationOptions<Token["response"], Token["error"], Token["request"]>;
    client?: Token["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useTokenHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<Token["data"], Token["error"], Token["request"]>({
                method: "post",
                url: `/apis/oidc/v1/token`,
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
