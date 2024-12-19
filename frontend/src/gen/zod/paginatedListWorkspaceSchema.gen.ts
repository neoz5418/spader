import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { workspaceSchema } from "./workspaceSchema.gen";

export const paginatedListWorkspaceSchema = z.object({
	items: z.array(z.lazy(() => workspaceSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListWorkspaceSchema = z.infer<
	typeof paginatedListWorkspaceSchema
>;
