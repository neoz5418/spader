import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { resourceUsageRecordSchema } from "./resourceUsageRecordSchema.gen";

export const paginatedListResourceUsageRecordSchema = z.object({
	items: z.array(z.lazy(() => resourceUsageRecordSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListResourceUsageRecordSchema = z.infer<
	typeof paginatedListResourceUsageRecordSchema
>;
