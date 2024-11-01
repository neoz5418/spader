import { z } from "@/utils/zod.ts";


export const errorInfoSchema = z.object({ "reason": z.string(), "metadata": z.object({}) });
export type ErrorInfoSchema = z.infer<typeof errorInfoSchema>;