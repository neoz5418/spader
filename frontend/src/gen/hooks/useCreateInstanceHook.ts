import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	CreateInstance422Type,
	CreateInstanceMutationRequestType,
	CreateInstanceMutationResponseType,
	CreateInstancePathParamsType,
} from "../ts/CreateInstanceType";

type CreateInstanceClient = typeof client<
	CreateInstanceMutationResponseType,
	CreateInstance422Type,
	CreateInstanceMutationRequestType
>;
type CreateInstance = {
	data: CreateInstanceMutationResponseType;
	error: CreateInstance422Type;
	request: CreateInstanceMutationRequestType;
	pathParams: CreateInstancePathParamsType;
	queryParams: never;
	headerParams: never;
	response: CreateInstanceMutationResponseType;
	client: {
		parameters: Partial<Parameters<CreateInstanceClient>[0]>;
		return: Awaited<ReturnType<CreateInstanceClient>>;
	};
};
/**
 * @summary Create and start a new instance
 * @link /apis/compute/v1/workspaces/:workspace/instances
 */
export function useCreateInstanceHook(
	workspace: CreateInstancePathParamsType["workspace"],
	options: {
		mutation?: UseMutationOptions<
			CreateInstance["response"],
			CreateInstance["error"],
			CreateInstance["request"]
		>;
		client?: CreateInstance["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useCreateInstanceHook",
	);
	return useMutation({
		mutationFn: async (data) => {
			const res = await client<
				CreateInstance["data"],
				CreateInstance["error"],
				CreateInstance["request"]
			>({
				method: "post",
				url: `/apis/compute/v1/workspaces/${workspace}/instances`,
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
