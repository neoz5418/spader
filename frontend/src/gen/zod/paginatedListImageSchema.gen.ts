import { imageSchema } from "./imageSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListImageSchema = z.object({ "items": z.array(z.lazy(() => imageSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListImageSchema = z.infer<typeof paginatedListImageSchema>;
