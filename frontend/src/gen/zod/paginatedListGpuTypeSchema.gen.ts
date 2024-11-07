import { gpuTypeSchema } from "./gpuTypeSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListGpuTypeSchema = z.object({ "items": z.array(z.lazy(() => gpuTypeSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListGpuTypeSchema = z.infer<typeof paginatedListGpuTypeSchema>;
