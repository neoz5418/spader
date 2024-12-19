import { z } from "@/utils/zod.ts";
import { invitationStatusSchema } from "./invitationStatusSchema.gen";

export const workspaceInvitationSchema = z.object({
	workspace: z.string(),
	email: z.string().email(),
	username: z.string(),
	uid: z.string().uuid(),
	status: z.lazy(() => invitationStatusSchema),
	create_time: z.union([z.string().datetime(), z.null()]).optional(),
	delete_time: z.union([z.string().datetime(), z.null()]).optional(),
});
export type WorkspaceInvitationSchema = z.infer<
	typeof workspaceInvitationSchema
>;
