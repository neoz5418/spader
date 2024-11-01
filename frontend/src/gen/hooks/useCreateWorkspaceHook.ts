import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CreateWorkspaceMutationRequestType, CreateWorkspaceMutationResponseType, CreateWorkspacePathParamsType, CreateWorkspace400Type, CreateWorkspace401Type, CreateWorkspace404Type, CreateWorkspace422Type, CreateWorkspace429Type, CreateWorkspace500Type, CreateWorkspace503Type } from "../ts/CreateWorkspaceType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateWorkspaceClient = typeof client<CreateWorkspaceMutationResponseType, CreateWorkspace400Type | CreateWorkspace401Type | CreateWorkspace404Type | CreateWorkspace422Type | CreateWorkspace429Type | CreateWorkspace500Type | CreateWorkspace503Type, CreateWorkspaceMutationRequestType>;
type CreateWorkspace = {
    data: CreateWorkspaceMutationResponseType;
    error: CreateWorkspace400Type | CreateWorkspace401Type | CreateWorkspace404Type | CreateWorkspace422Type | CreateWorkspace429Type | CreateWorkspace500Type | CreateWorkspace503Type;
    request: CreateWorkspaceMutationRequestType;
    pathParams: CreateWorkspacePathParamsType;
    queryParams: never;
    headerParams: never;
    response: CreateWorkspaceMutationResponseType;
    client: {
        parameters: Partial<Parameters<CreateWorkspaceClient>[0]>;
        return: Awaited<ReturnType<CreateWorkspaceClient>>;
    };
};
/**
 * @summary Create Workspace
 * @link /apis/workspace/v1/users/:username/workspaces
 */
export function useCreateWorkspaceHook(username: CreateWorkspacePathParamsType["username"], options: {
    mutation?: UseMutationOptions<CreateWorkspace["response"], CreateWorkspace["error"], CreateWorkspace["request"]>;
    client?: CreateWorkspace["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCreateWorkspaceHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateWorkspace["data"], CreateWorkspace["error"], CreateWorkspace["request"]>({
                method: "post",
                url: `/apis/workspace/v1/users/${username}/workspaces`,
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