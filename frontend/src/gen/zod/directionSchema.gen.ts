import { z } from "@/utils/zod.ts";


export const directionSchema = z.enum(["desc", "asc"]);
export type DirectionSchema = z.infer<typeof directionSchema>;