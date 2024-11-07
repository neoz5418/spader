import { z } from "@/utils/zod.ts";


export const sshKeySchema = z.object({ "workspace": z.string(), "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "uid": z.string().uuid().optional(), "public_key": z.string(), "create_time": z.union([z.string().datetime(), z.null()]).optional(), "delete_time": z.union([z.string().datetime(), z.null()]).optional() });
export type SshKeySchema = z.infer<typeof sshKeySchema>;
