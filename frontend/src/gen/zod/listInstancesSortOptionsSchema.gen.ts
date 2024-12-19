import { z } from "@/utils/zod.ts";

export const listInstancesSortOptionsSchema = z.enum(["create_time", "name"]);
export type ListInstancesSortOptionsSchema = z.infer<
	typeof listInstancesSortOptionsSchema
>;
