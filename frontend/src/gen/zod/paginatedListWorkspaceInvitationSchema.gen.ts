import { workspaceInvitationSchema } from "./workspaceInvitationSchema.gen";
import { paginationSchema } from "./paginationSchema.gen";
import { z } from "@/utils/zod.ts";


export const paginatedListWorkspaceInvitationSchema = z.object({ "items": z.array(z.lazy(() => workspaceInvitationSchema)), "pagination": z.lazy(() => paginationSchema) });
export type PaginatedListWorkspaceInvitationSchema = z.infer<typeof paginatedListWorkspaceInvitationSchema>;