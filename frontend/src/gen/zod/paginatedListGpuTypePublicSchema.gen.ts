import { z } from "@/utils/zod.ts";
import { gpuTypePublicSchema } from "./gpuTypePublicSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";

export const paginatedListGpuTypePublicSchema = z.object({
	items: z.array(z.lazy(() => gpuTypePublicSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListGpuTypePublicSchema = z.infer<
	typeof paginatedListGpuTypePublicSchema
>;
