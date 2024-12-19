import { z } from "@/utils/zod.ts";
import { roleSchema } from "./roleSchema.gen";

export const userSchema = z.object({
	create_time: z.string().datetime().optional(),
	update_time: z.union([z.string().datetime(), z.null()]).optional(),
	delete_time: z.union([z.string().datetime(), z.null()]).optional(),
	uid: z.string().uuid().optional(),
	name: z
		.string()
		.regex(/^[a-z0-9][a-z0-9-]*[a-z0-9]$/)
		.min(3)
		.max(32)
		.describe(
			"\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n",
		),
	email: z.string().email(),
	display_name: z.union([z.string(), z.null()]).optional(),
	phone_number: z.string(),
	hashed_password: z.string(),
	role: z.lazy(() => roleSchema),
});
export type UserSchema = z.infer<typeof userSchema>;
