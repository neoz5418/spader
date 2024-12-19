import { z } from "@/utils/zod.ts";

export const listOperationsSortOptionsSchema = z.enum([
	"create_time",
	"start_time",
	"end_time",
]);
export type ListOperationsSortOptionsSchema = z.infer<
	typeof listOperationsSortOptionsSchema
>;
