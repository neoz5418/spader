import { z } from "@/utils/zod.ts";
import { paginationSchema } from "./paginationSchema.gen";
import { workspaceInvitationSchema } from "./workspaceInvitationSchema.gen";

export const paginatedListWorkspaceInvitationSchema = z.object({
	items: z.array(z.lazy(() => workspaceInvitationSchema)),
	pagination: z.lazy(() => paginationSchema),
});
export type PaginatedListWorkspaceInvitationSchema = z.infer<
	typeof paginatedListWorkspaceInvitationSchema
>;
