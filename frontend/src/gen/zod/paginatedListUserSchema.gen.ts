import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { userSchema } from "./userSchema.gen";

export const paginatedListUserSchema = z.object({
	items: z.array(z.lazy(() => userSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListUserSchema = z.infer<typeof paginatedListUserSchema>;
