import { zoneSchema } from "./zoneSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListZoneSchema = z.object({ "items": z.array(z.lazy(() => zoneSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListZoneSchema = z.infer<typeof paginatedListZoneSchema>;
