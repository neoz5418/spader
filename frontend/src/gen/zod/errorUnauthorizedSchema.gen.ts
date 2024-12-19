import { z } from "@/utils/zod.ts";

export const errorUnauthorizedSchema = z.object({
	type: z.enum(["Unauthorized"]),
});
export type ErrorUnauthorizedSchema = z.infer<typeof errorUnauthorizedSchema>;
