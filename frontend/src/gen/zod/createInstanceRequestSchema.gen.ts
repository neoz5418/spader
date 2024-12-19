import { z } from "@/utils/zod.ts";

export const createInstanceRequestSchema = z.object({
	name: z
		.string()
		.regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/)
		.min(3)
		.max(32)
		.describe(
			"\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n",
		),
	display_name: z.union([z.string(), z.null()]).optional(),
	zone: z.string(),
	gpu_count: z.number().int(),
	gpu_type: z.string(),
	file_storages: z.array(z.string()).optional(),
	image: z.string(),
});
export type CreateInstanceRequestSchema = z.infer<
	typeof createInstanceRequestSchema
>;
