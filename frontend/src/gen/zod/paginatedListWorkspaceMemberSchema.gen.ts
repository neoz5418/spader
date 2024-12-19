import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { workspaceMemberSchema } from "./workspaceMemberSchema.gen";

export const paginatedListWorkspaceMemberSchema = z.object({
	items: z.array(z.lazy(() => workspaceMemberSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListWorkspaceMemberSchema = z.infer<
	typeof paginatedListWorkspaceMemberSchema
>;
