import { fileStorageSchema } from "./fileStorageSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListFileStorageSchema = z.object({ "items": z.array(z.lazy(() => fileStorageSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListFileStorageSchema = z.infer<typeof paginatedListFileStorageSchema>;
