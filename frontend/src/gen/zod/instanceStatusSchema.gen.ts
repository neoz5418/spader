import { z } from "@/utils/zod.ts";

/**
 * @description An instance can be in one of the following states:\n\n- `provisioning`: resources are allocated for the instance. The instance is not running yet.\n- `staging`: resources are acquired, and the instance is preparing for first boot.\n- `running`: the instance is booting up or running.\n- `stopping`: the instance is being stopped. You requested a stop, or a failure occurred. This is a temporary status after which the instance enters the `terminated` status.\n- `terminated`: the instance is stopped. You stopped the instance, or the instance encountered a failure. You can restart or delete the instance.
 */
export const instanceStatusSchema = z
	.enum(["provisioning", "staging", "running", "stopping", "terminated"])
	.describe(
		"An instance can be in one of the following states:\n\n- `provisioning`: resources are allocated for the instance. The instance is not running yet.\n- `staging`: resources are acquired, and the instance is preparing for first boot.\n- `running`: the instance is booting up or running.\n- `stopping`: the instance is being stopped. You requested a stop, or a failure occurred. This is a temporary status after which the instance enters the `terminated` status.\n- `terminated`: the instance is stopped. You stopped the instance, or the instance encountered a failure. You can restart or delete the instance.",
	);
export type InstanceStatusSchema = z.infer<typeof instanceStatusSchema>;
