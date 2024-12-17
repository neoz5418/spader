import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type { CreateFileStorageMutationRequestType, CreateFileStorageMutationResponseType, CreateFileStoragePathParamsType, CreateFileStorage422Type } from "../ts/CreateFileStorageType";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CreateFileStorageClient = typeof client<CreateFileStorageMutationResponseType, CreateFileStorage422Type, CreateFileStorageMutationRequestType>;
type CreateFileStorage = {
    data: CreateFileStorageMutationResponseType;
    error: CreateFileStorage422Type;
    request: CreateFileStorageMutationRequestType;
    pathParams: CreateFileStoragePathParamsType;
    queryParams: never;
    headerParams: never;
    response: CreateFileStorageMutationResponseType;
    client: {
        parameters: Partial<Parameters<CreateFileStorageClient>[0]>;
        return: Awaited<ReturnType<CreateFileStorageClient>>;
    };
};
/**
 * @summary Create File Storage
 * @link /apis/compute/v1/workspaces/:workspace/zones/:zone/file_storages/
 */
export function useCreateFileStorageHook(workspace: CreateFileStoragePathParamsType["workspace"], zone: CreateFileStoragePathParamsType["zone"], options: {
    mutation?: UseMutationOptions<CreateFileStorage["response"], CreateFileStorage["error"], CreateFileStorage["request"]>;
    client?: CreateFileStorage["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    const invalidationOnSuccess = useInvalidationForMutation("useCreateFileStorageHook");
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<CreateFileStorage["data"], CreateFileStorage["error"], CreateFileStorage["request"]>({
                method: "post",
                url: `/apis/compute/v1/workspaces/${workspace}/zones/${zone}/file_storages/`,
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
