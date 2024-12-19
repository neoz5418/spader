import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	DeleteWorkspace422Type,
	DeleteWorkspaceMutationResponseType,
	DeleteWorkspacePathParamsType,
} from "../ts/DeleteWorkspaceType";

type DeleteWorkspaceClient = typeof client<
	DeleteWorkspaceMutationResponseType,
	DeleteWorkspace422Type,
	never
>;
type DeleteWorkspace = {
	data: DeleteWorkspaceMutationResponseType;
	error: DeleteWorkspace422Type;
	request: never;
	pathParams: DeleteWorkspacePathParamsType;
	queryParams: never;
	headerParams: never;
	response: DeleteWorkspaceMutationResponseType;
	client: {
		parameters: Partial<Parameters<DeleteWorkspaceClient>[0]>;
		return: Awaited<ReturnType<DeleteWorkspaceClient>>;
	};
};
/**
 * @summary Delete Workspace
 * @link /apis/workspace/v1/workspaces/:workspace
 */
export function useDeleteWorkspaceHook(
	workspace: DeleteWorkspacePathParamsType["workspace"],
	options: {
		mutation?: UseMutationOptions<
			DeleteWorkspace["response"],
			DeleteWorkspace["error"],
			DeleteWorkspace["request"]
		>;
		client?: DeleteWorkspace["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useDeleteWorkspaceHook",
	);
	return useMutation({
		mutationFn: async () => {
			const res = await client<
				DeleteWorkspace["data"],
				DeleteWorkspace["error"],
				DeleteWorkspace["request"]
			>({
				method: "delete",
				url: `/apis/workspace/v1/workspaces/${workspace}`,
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
