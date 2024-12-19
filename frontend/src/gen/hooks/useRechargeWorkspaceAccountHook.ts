import client from "@/utils/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useInvalidationForMutation } from "../../useInvalidationForMutation";
import type {
	RechargeWorkspaceAccount422Type,
	RechargeWorkspaceAccountMutationRequestType,
	RechargeWorkspaceAccountMutationResponseType,
	RechargeWorkspaceAccountPathParamsType,
} from "../ts/RechargeWorkspaceAccountType";

type RechargeWorkspaceAccountClient = typeof client<
	RechargeWorkspaceAccountMutationResponseType,
	RechargeWorkspaceAccount422Type,
	RechargeWorkspaceAccountMutationRequestType
>;
type RechargeWorkspaceAccount = {
	data: RechargeWorkspaceAccountMutationResponseType;
	error: RechargeWorkspaceAccount422Type;
	request: RechargeWorkspaceAccountMutationRequestType;
	pathParams: RechargeWorkspaceAccountPathParamsType;
	queryParams: never;
	headerParams: never;
	response: RechargeWorkspaceAccountMutationResponseType;
	client: {
		parameters: Partial<Parameters<RechargeWorkspaceAccountClient>[0]>;
		return: Awaited<ReturnType<RechargeWorkspaceAccountClient>>;
	};
};
/**
 * @summary Recharge Workspace Account
 * @link /apis/workspace/v1/workspaces/:workspace/account/recharge
 */
export function useRechargeWorkspaceAccountHook(
	workspace: RechargeWorkspaceAccountPathParamsType["workspace"],
	options: {
		mutation?: UseMutationOptions<
			RechargeWorkspaceAccount["response"],
			RechargeWorkspaceAccount["error"],
			RechargeWorkspaceAccount["request"]
		>;
		client?: RechargeWorkspaceAccount["client"]["parameters"];
	} = {},
) {
	const { mutation: mutationOptions, client: clientOptions = {} } =
		options ?? {};
	const invalidationOnSuccess = useInvalidationForMutation(
		"useRechargeWorkspaceAccountHook",
	);
	return useMutation({
		mutationFn: async (data) => {
			const res = await client<
				RechargeWorkspaceAccount["data"],
				RechargeWorkspaceAccount["error"],
				RechargeWorkspaceAccount["request"]
			>({
				method: "post",
				url: `/apis/workspace/v1/workspaces/${workspace}/account/recharge`,
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
