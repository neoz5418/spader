import { z } from "@/utils/zod.ts";


export const fileStorageStatusSchema = z.enum(["provisioning", "ready", "failed", "deleting"]);
export type FileStorageStatusSchema = z.infer<typeof fileStorageStatusSchema>;