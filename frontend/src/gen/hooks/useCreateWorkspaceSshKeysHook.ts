import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	CreateWorkspaceSshKeys422Type,
	CreateWorkspaceSshKeysMutationRequestType,
	CreateWorkspaceSshKeysMutationResponseType,
	CreateWorkspaceSshKeysPathParamsType,
} from "../ts/CreateWorkspaceSshKeysType";

type CreateWorkspaceSshKeysClient = typeof client<
	CreateWorkspaceSshKeysMutationResponseType,
	CreateWorkspaceSshKeys422Type,
	CreateWorkspaceSshKeysMutationRequestType
>;
type CreateWorkspaceSshKeys = {
	data: CreateWorkspaceSshKeysMutationResponseType;
	error: CreateWorkspaceSshKeys422Type;
	request: CreateWorkspaceSshKeysMutationRequestType;
	pathParams: CreateWorkspaceSshKeysPathParamsType;
	queryParams: never;
	headerParams: never;
	response: CreateWorkspaceSshKeysMutationResponseType;
	client: {
		parameters: Partial<Parameters<CreateWorkspaceSshKeysClient>[0]>;
		return: Awaited<ReturnType<CreateWorkspaceSshKeysClient>>;
	};
};
/**
 * @summary Create Workspace Ssh Keys
 * @link /apis/workspace/v1/workspaces/:workspace/ssh_keys
 */
export function useCreateWorkspaceSshKeysHook(
	workspace: CreateWorkspaceSshKeysPathParamsType["workspace"],
	options: {
		mutation?: UseMutationOptions<
			CreateWorkspaceSshKeys["response"],
			CreateWorkspaceSshKeys["error"],
			CreateWorkspaceSshKeys["request"]
		>;
		client?: CreateWorkspaceSshKeys["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useCreateWorkspaceSshKeysHook",
	);
	return useMutation({
		mutationFn: async (data) => {
			const res = await client<
				CreateWorkspaceSshKeys["data"],
				CreateWorkspaceSshKeys["error"],
				CreateWorkspaceSshKeys["request"]
			>({
				method: "post",
				url: `/apis/workspace/v1/workspaces/${workspace}/ssh_keys`,
				data,
				...clientOptions,
			});
			return res.data;
		},
		onSuccess: (...args) => {
			if (invalidationOnSuccess) invalidationOnSuccess(...args);
			if (mutationOptions?.onSuccess) mutationOptions.onSuccess(...args);
		},
		...mutationOptions,
	});
}
