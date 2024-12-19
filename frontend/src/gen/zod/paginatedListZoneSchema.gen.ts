import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { zoneSchema } from "./zoneSchema.gen";

export const paginatedListZoneSchema = z.object({
	items: z.array(z.lazy(() => zoneSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListZoneSchema = z.infer<typeof paginatedListZoneSchema>;
