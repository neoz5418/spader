import { z } from "@/utils/zod.ts";


export const errorUsernameOrEmailCannotBeEmptySchema = z.object({ "type": z.enum(["UsernameOrEmailCannotBeEmpty"]) });
export type ErrorUsernameOrEmailCannotBeEmptySchema = z.infer<typeof errorUsernameOrEmailCannotBeEmptySchema>;
