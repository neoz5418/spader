import { z } from "@/utils/zod.ts";

export const imageVisibilitySchema = z.enum(["public", "private"]);
export type ImageVisibilitySchema = z.infer<typeof imageVisibilitySchema>;
