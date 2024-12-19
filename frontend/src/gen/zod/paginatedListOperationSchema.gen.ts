import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";

export const paginatedListOperationSchema = z.object({
	items: z.array(z.lazy(() => operationSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListOperationSchema = z.infer<
	typeof paginatedListOperationSchema
>;
