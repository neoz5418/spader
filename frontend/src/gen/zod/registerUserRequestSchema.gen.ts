import { oneTimePasswordValidateTypeSchema } from "./oneTimePasswordValidateTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const registerUserRequestSchema = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9][a-z0-9-]*[a-z0-9]$")).min(3).max(32).describe("\nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or '-'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n"), "email": z.string().email(), "display_name": z.union([z.string(), z.null()]).optional(), "phone_number": z.string(), "password": z.string().min(8).max(32).describe("Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"), "one_time_password_validate_type": z.lazy(() => oneTimePasswordValidateTypeSchema), "one_time_password": z.string() });
export type RegisterUserRequestSchema = z.infer<typeof registerUserRequestSchema>;
