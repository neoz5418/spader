import { z } from "@/utils/zod.ts";


export const listWorkspacesSortOptionsSchema = z.enum(["create_time", "delete_time", "name"]);
export type ListWorkspacesSortOptionsSchema = z.infer<typeof listWorkspacesSortOptionsSchema>;
