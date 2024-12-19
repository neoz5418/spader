import { z } from "@/utils/zod.ts";


export const sortOrderSchema = z.enum(["asc", "desc"]);
export type SortOrderSchema = z.infer<typeof sortOrderSchema>;