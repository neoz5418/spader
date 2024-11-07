import { fileInfoSchema } from "./fileInfoSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListFileInfoSchema = z.object({ "items": z.array(z.lazy(() => fileInfoSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListFileInfoSchema = z.infer<typeof paginatedListFileInfoSchema>;
