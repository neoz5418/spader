import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	DeleteInstance422Type,
	DeleteInstanceMutationResponseType,
	DeleteInstancePathParamsType,
} from "../ts/DeleteInstanceType";

type DeleteInstanceClient = typeof client<
	DeleteInstanceMutationResponseType,
	DeleteInstance422Type,
	never
>;
type DeleteInstance = {
	data: DeleteInstanceMutationResponseType;
	error: DeleteInstance422Type;
	request: never;
	pathParams: DeleteInstancePathParamsType;
	queryParams: never;
	headerParams: never;
	response: DeleteInstanceMutationResponseType;
	client: {
		parameters: Partial<Parameters<DeleteInstanceClient>[0]>;
		return: Awaited<ReturnType<DeleteInstanceClient>>;
	};
};
/**
 * @summary Delete Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name
 */
export function useDeleteInstanceHook(
	workspace: DeleteInstancePathParamsType["workspace"],
	name: DeleteInstancePathParamsType["name"],
	options: {
		mutation?: UseMutationOptions<
			DeleteInstance["response"],
			DeleteInstance["error"],
			DeleteInstance["request"]
		>;
		client?: DeleteInstance["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useDeleteInstanceHook",
	);
	return useMutation({
		mutationFn: async () => {
			const res = await client<
				DeleteInstance["data"],
				DeleteInstance["error"],
				DeleteInstance["request"]
			>({
				method: "delete",
				url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}`,
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
