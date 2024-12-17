import { z } from "@/utils/zod.ts";


export const messageSchema = z.enum(["unauthorized", "password_mismatch"]);
export type MessageSchema = z.infer<typeof messageSchema>;
