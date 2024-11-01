import { z } from "@/utils/zod.ts";


export const workspaceRoleSchema = z.enum(["owner", "admin", "member"]);
export type WorkspaceRoleSchema = z.infer<typeof workspaceRoleSchema>;