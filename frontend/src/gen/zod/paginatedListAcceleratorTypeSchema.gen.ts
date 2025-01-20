import { acceleratorTypeSchema } from "./acceleratorTypeSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListAcceleratorTypeSchema = z.object({ "items": z.array(z.lazy(() => acceleratorTypeSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListAcceleratorTypeSchema = z.infer<typeof paginatedListAcceleratorTypeSchema>;