import { instanceSchema } from "./instanceSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListInstanceSchema = z.object({ "items": z.array(z.lazy(() => instanceSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListInstanceSchema = z.infer<typeof paginatedListInstanceSchema>;