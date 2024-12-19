import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";

export const paginatedListImageSchema = z.object({
	items: z.array(z.lazy(() => imageSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListImageSchema = z.infer<typeof paginatedListImageSchema>;
