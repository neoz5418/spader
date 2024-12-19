import { z } from "@/utils/zod.ts";

export const errorRefreshTokenCannotBeEmptySchema = z.object({
	type: z.enum(["RefreshTokenCannotBeEmpty"]),
});
export type ErrorRefreshTokenCannotBeEmptySchema = z.infer<
	typeof errorRefreshTokenCannotBeEmptySchema
>;
