import { z } from "@/utils/zod.ts";
import { oneTimePasswordValidateTypeSchema } from "./oneTimePasswordValidateTypeSchema.gen";

export const sendOneTimePasswordRequestSchema = z.object({
	uid: z.string().uuid().optional(),
	name: z
		.string()
		.regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/)
		.min(3)
		.max(32)
		.describe(
			"\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n",
		),
	email: z.union([z.string(), z.null()]).optional(),
	display_name: z.union([z.string(), z.null()]).optional(),
	phone_number: z.string(),
	password: z
		.string()
		.min(8)
		.max(32)
		.describe(
			"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
		),
	type: z.lazy(() => oneTimePasswordValidateTypeSchema),
});
export type SendOneTimePasswordRequestSchema = z.infer<
	typeof sendOneTimePasswordRequestSchema
>;
