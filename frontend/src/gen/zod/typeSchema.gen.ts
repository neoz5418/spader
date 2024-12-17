import { z } from "@/utils/zod.ts";


export const typeSchema = z.enum(["username_or_email_cannot_be_empty", "email_and_username_cannot_be_provided_at_the_same_time", "refresh_token_cannot_be_empty", "refresh_token_invalid", "refresh_token_expired"]);
export type TypeSchema = z.infer<typeof typeSchema>;
