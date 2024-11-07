import { z } from "@/utils/zod.ts";


export const listUsersSortOptionsSchema = z.enum(["create_time", "uid", "delete_time", "name", "email", "update_time"]);
export type ListUsersSortOptionsSchema = z.infer<typeof listUsersSortOptionsSchema>;
