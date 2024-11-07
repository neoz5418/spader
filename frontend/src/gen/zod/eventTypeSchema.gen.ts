import { z } from "@/utils/zod.ts";


export const eventTypeSchema = z.enum(["ADDED", "MODIFIED", "DELETED", "ERROR"]);
export type EventTypeSchema = z.infer<typeof eventTypeSchema>;
