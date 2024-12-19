import { z } from "@/utils/zod.ts";
import { fileStorageStatusSchema } from "./fileStorageStatusSchema.gen";

export const fileStorageSchema = z.object({
	name: z
		.string()
		.regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/)
		.min(3)
		.max(32)
		.describe(
			"\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n",
		),
	display_name: z.union([z.string(), z.null()]).optional(),
	size: z.number().int().min(0),
	status: z.lazy(() => fileStorageStatusSchema),
	uid: z.string().uuid().optional(),
	zone: z.string(),
	workspace: z.string(),
	create_time: z.string().datetime(),
	update_time: z.union([z.string().datetime(), z.null()]).optional(),
	delete_time: z.union([z.string().datetime(), z.null()]).optional(),
});
export type FileStorageSchema = z.infer<typeof fileStorageSchema>;
