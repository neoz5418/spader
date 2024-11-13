import { z } from "@/utils/zod.ts";


export const baseModelSchema = z.object({});
export type BaseModelSchema = z.infer<typeof baseModelSchema>;