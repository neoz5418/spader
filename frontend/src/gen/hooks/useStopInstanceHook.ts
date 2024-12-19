import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	StopInstance422Type,
	StopInstanceMutationResponseType,
	StopInstancePathParamsType,
} from "../ts/StopInstanceType";

type StopInstanceClient = typeof client<
	StopInstanceMutationResponseType,
	StopInstance422Type,
	never
>;
type StopInstance = {
	data: StopInstanceMutationResponseType;
	error: StopInstance422Type;
	request: never;
	pathParams: StopInstancePathParamsType;
	queryParams: never;
	headerParams: never;
	response: StopInstanceMutationResponseType;
	client: {
		parameters: Partial<Parameters<StopInstanceClient>[0]>;
		return: Awaited<ReturnType<StopInstanceClient>>;
	};
};
/**
 * @summary Stop Instance
 * @link /apis/compute/v1/workspaces/:workspace/instances/:name/stop
 */
export function useStopInstanceHook(
	workspace: StopInstancePathParamsType["workspace"],
	name: StopInstancePathParamsType["name"],
	options: {
		mutation?: UseMutationOptions<
			StopInstance["response"],
			StopInstance["error"],
			StopInstance["request"]
		>;
		client?: StopInstance["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useStopInstanceHook",
	);
	return useMutation({
		mutationFn: async () => {
			const res = await client<
				StopInstance["data"],
				StopInstance["error"],
				StopInstance["request"]
			>({
				method: "post",
				url: `/apis/compute/v1/workspaces/${workspace}/instances/${name}/stop`,
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
