import { z } from "@/utils/zod.ts";


export const paginationSchema = z.object({ "limit": z.number().int(), "total_page": z.number().int() });
export type PaginationSchema = z.infer<typeof paginationSchema>;