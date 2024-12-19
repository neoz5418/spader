import { z } from "@/utils/zod.ts";

export const workspaceZoneQuotaSchema = z.object({
	uid: z.string().uuid().optional(),
	workspace: z.string(),
	zone: z.string(),
	limitation: z.object({}).catchall(z.number().int()).default({}).optional(),
	status: z.object({}).catchall(z.number().int()).default({}).optional(),
});
export type WorkspaceZoneQuotaSchema = z.infer<typeof workspaceZoneQuotaSchema>;
