import { z } from "@/utils/zod.ts";

export const errorPasswordMismatchSchema = z.object({
	type: z.enum(["PasswordMismatch"]),
});
export type ErrorPasswordMismatchSchema = z.infer<
	typeof errorPasswordMismatchSchema
>;
