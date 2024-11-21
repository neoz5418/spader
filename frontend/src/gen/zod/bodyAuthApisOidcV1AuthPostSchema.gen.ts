import { z } from "@/utils/zod.ts";


export const bodyAuthApisOidcV1AuthPostSchema = z.object({ "grant_type": z.union([z.string(), z.null()]).optional(), "username": z.string(), "password": z.string(), "scope": z.string().default("").optional(), "client_id": z.union([z.string(), z.null()]).optional(), "client_secret": z.union([z.string(), z.null()]).optional() });
export type BodyAuthApisOidcV1AuthPostSchema = z.infer<typeof bodyAuthApisOidcV1AuthPostSchema>;
