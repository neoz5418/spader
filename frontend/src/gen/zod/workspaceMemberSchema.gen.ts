import { z } from "@/utils/zod.ts";
import { workspaceRoleSchema } from "./workspaceRoleSchema.gen";

export const workspaceMemberSchema = z.object({
	workspace: z.string(),
	username: z.string(),
	role: z.lazy(() => workspaceRoleSchema),
	uid: z.string().uuid().optional(),
	create_time: z.union([z.string().datetime(), z.null()]).optional(),
	delete_time: z.union([z.string().datetime(), z.null()]).optional(),
});
export type WorkspaceMemberSchema = z.infer<typeof workspaceMemberSchema>;
