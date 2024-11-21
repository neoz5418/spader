import { grantTypeSchema } from "./grantTypeSchema.gen";
import { z } from "@/utils/zod.ts";


export const bodyTokenApisOidcV1TokenPostSchema = z.object({ "grant_type": z.lazy(() => grantTypeSchema), "client_secret": z.string().default("").optional(), "client_id": z.string().default("").optional(), "password": z.string().min(8).max(32).default("").optional(), "scope": z.string().default("").optional(), "username": z.string().default("").optional(), "phone": z.string().default("").optional(), "email": z.string().default("").optional(), "refresh_token": z.string().default("").optional() });
export type BodyTokenApisOidcV1TokenPostSchema = z.infer<typeof bodyTokenApisOidcV1TokenPostSchema>;
