import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { DeleteFileStorageMutationResponseType, DeleteFileStoragePathParamsType, DeleteFileStorage400Type, DeleteFileStorage401Type, DeleteFileStorage404Type, DeleteFileStorage409Type, DeleteFileStorage412Type, DeleteFileStorage422Type, DeleteFileStorage500Type } from "../ts/DeleteFileStorageType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteFileStorageClient = typeof client<DeleteFileStorageMutationResponseType, DeleteFileStorage400Type | DeleteFileStorage401Type | DeleteFileStorage404Type | DeleteFileStorage409Type | DeleteFileStorage412Type | DeleteFileStorage422Type | DeleteFileStorage500Type, never>;
type DeleteFileStorage = {
    data: DeleteFileStorageMutationResponseType;
    error: DeleteFileStorage400Type | DeleteFileStorage401Type | DeleteFileStorage404Type | DeleteFileStorage409Type | DeleteFileStorage412Type | DeleteFileStorage422Type | DeleteFileStorage500Type;
    request: never;
    pathParams: DeleteFileStoragePathParamsType;
    queryParams: never;
    headerParams: never;
    response: DeleteFileStorageMutationResponseType;
    client: {
        parameters: Partial<Parameters<DeleteFileStorageClient>[0]>;
        return: Awaited<ReturnType<DeleteFileStorageClient>>;
    };
};
/**
 * @summary Delete File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/:name
 */
export function useDeleteFileStorageHook(workspace: DeleteFileStoragePathParamsType["workspace"], zone: DeleteFileStoragePathParamsType["zone"], name: DeleteFileStoragePathParamsType["name"], options: {
    mutation?: UseMutationOptions<DeleteFileStorage["response"], DeleteFileStorage["error"], DeleteFileStorage["request"]>;
    client?: DeleteFileStorage["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useDeleteFileStorageHook");
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteFileStorage["data"], DeleteFileStorage["error"], DeleteFileStorage["request"]>({
                method: "delete",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/${name}`,
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
