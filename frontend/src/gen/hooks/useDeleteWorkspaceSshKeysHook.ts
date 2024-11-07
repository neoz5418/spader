import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { DeleteWorkspaceSshKeysMutationResponseType, DeleteWorkspaceSshKeysPathParamsType, DeleteWorkspaceSshKeys400Type, DeleteWorkspaceSshKeys401Type, DeleteWorkspaceSshKeys404Type, DeleteWorkspaceSshKeys422Type, DeleteWorkspaceSshKeys429Type, DeleteWorkspaceSshKeys500Type, DeleteWorkspaceSshKeys503Type } from "../ts/DeleteWorkspaceSshKeysType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteWorkspaceSshKeysClient = typeof client<DeleteWorkspaceSshKeysMutationResponseType, DeleteWorkspaceSshKeys400Type | DeleteWorkspaceSshKeys401Type | DeleteWorkspaceSshKeys404Type | DeleteWorkspaceSshKeys422Type | DeleteWorkspaceSshKeys429Type | DeleteWorkspaceSshKeys500Type | DeleteWorkspaceSshKeys503Type, never>;
type DeleteWorkspaceSshKeys = {
    data: DeleteWorkspaceSshKeysMutationResponseType;
    error: DeleteWorkspaceSshKeys400Type | DeleteWorkspaceSshKeys401Type | DeleteWorkspaceSshKeys404Type | DeleteWorkspaceSshKeys422Type | DeleteWorkspaceSshKeys429Type | DeleteWorkspaceSshKeys500Type | DeleteWorkspaceSshKeys503Type;
    request: never;
    pathParams: DeleteWorkspaceSshKeysPathParamsType;
    queryParams: never;
    headerParams: never;
    response: DeleteWorkspaceSshKeysMutationResponseType;
    client: {
        parameters: Partial<Parameters<DeleteWorkspaceSshKeysClient>[0]>;
        return: Awaited<ReturnType<DeleteWorkspaceSshKeysClient>>;
    };
};
/**
 * @summary Delete Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys/:name
 */
export function useDeleteWorkspaceSshKeysHook(workspace: DeleteWorkspaceSshKeysPathParamsType["workspace"], name: DeleteWorkspaceSshKeysPathParamsType["name"], options: {
    mutation?: UseMutationOptions<DeleteWorkspaceSshKeys["response"], DeleteWorkspaceSshKeys["error"], DeleteWorkspaceSshKeys["request"]>;
    client?: DeleteWorkspaceSshKeys["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useDeleteWorkspaceSshKeysHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteWorkspaceSshKeys["data"], DeleteWorkspaceSshKeys["error"], DeleteWorkspaceSshKeys["request"]>({
                method: "delete",
                url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys/${name}`,
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
