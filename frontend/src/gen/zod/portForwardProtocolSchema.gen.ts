import { z } from "@/utils/zod.ts";


export const portForwardProtocolSchema = z.enum(["TCP", "UDP"]);
export type PortForwardProtocolSchema = z.infer<typeof portForwardProtocolSchema>;
