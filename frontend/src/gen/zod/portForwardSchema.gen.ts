import { portForwardProtocolSchema } from "./portForwardProtocolSchema.gen";
import { z } from "@/utils/zod.ts";


export const portForwardSchema = z.object({ "uid": z.string().uuid().optional(), "instance": z.string().uuid(), "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "port": z.number().int(), "target_port": z.number().int(), "protocol": z.lazy(() => portForwardProtocolSchema) });
export type PortForwardSchema = z.infer<typeof portForwardSchema>;
