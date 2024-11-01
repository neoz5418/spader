import { z } from "@/utils/zod.ts";


export const providerSchema = z.enum(["ecloud"]);
export type ProviderSchema = z.infer<typeof providerSchema>;