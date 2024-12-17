import { z } from "@/utils/zod.ts";


export const errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema = z.object({ "type": z.enum(["EmailAndUsernameCannotBeProvidedAtTheSameTime"]) });
export type ErrorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema = z.infer<typeof errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema>;
