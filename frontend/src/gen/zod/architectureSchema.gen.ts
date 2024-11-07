import { z } from "@/utils/zod.ts";


export const architectureSchema = z.enum(["amd64", "arm64"]);
export type ArchitectureSchema = z.infer<typeof architectureSchema>;
