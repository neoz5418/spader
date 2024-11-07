import { z } from "@/utils/zod.ts";


export const roleSchema = z.enum(["global_admin", "user"]);
export type RoleSchema = z.infer<typeof roleSchema>;
