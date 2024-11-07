import { userSchema } from "./userSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListUserSchema = z.object({ "items": z.array(z.lazy(() => userSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListUserSchema = z.infer<typeof paginatedListUserSchema>;
