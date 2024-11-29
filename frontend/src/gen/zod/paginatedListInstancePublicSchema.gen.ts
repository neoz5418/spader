import { instancePublicSchema } from "./instancePublicSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListInstancePublicSchema = z.object({ "items": z.array(z.lazy(() => instancePublicSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListInstancePublicSchema = z.infer<typeof paginatedListInstancePublicSchema>;
