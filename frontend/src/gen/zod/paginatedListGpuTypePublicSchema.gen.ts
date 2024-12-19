import { gpuTypePublicSchema } from "./gpuTypePublicSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListGpuTypePublicSchema = z.object({ "items": z.array(z.lazy(() => gpuTypePublicSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListGpuTypePublicSchema = z.infer<typeof paginatedListGpuTypePublicSchema>;