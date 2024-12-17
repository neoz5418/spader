import { z } from "@/utils/zod.ts";
import { instanceSchema } from "./instanceSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const getInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type GetInstancePathParamsSchema = z.infer<typeof getInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const getInstance200Schema = z.lazy(() => instanceSchema);
export type GetInstance200Schema = z.infer<typeof getInstance200Schema>;
/**
 * @description Request error
 */
export const getInstance400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type GetInstance400Schema = z.infer<typeof getInstance400Schema>;
/**
 * @description Unauthorized
 */
export const getInstance401Schema = z.lazy(() => errorUnauthorizedSchema);
export type GetInstance401Schema = z.infer<typeof getInstance401Schema>;
/**
 * @description Not found
 */
export const getInstance404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type GetInstance404Schema = z.infer<typeof getInstance404Schema>;
/**
 * @description Resource conflict
 */
export const getInstance409Schema = z.lazy(() => errorResourceConflictSchema);
export type GetInstance409Schema = z.infer<typeof getInstance409Schema>;
/**
 * @description Precondition failed
 */
export const getInstance412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type GetInstance412Schema = z.infer<typeof getInstance412Schema>;
/**
 * @description Validation error
 */
export const getInstance422Schema = z.lazy(() => errorValidationFailedSchema);
export type GetInstance422Schema = z.infer<typeof getInstance422Schema>;
/**
 * @description Internal server error
 */
export const getInstance500Schema = z.lazy(() => errorInternalSchema);
export type GetInstance500Schema = z.infer<typeof getInstance500Schema>;
/**
 * @description Successful Response
 */
export const getInstanceQueryResponseSchema = z.lazy(() => instanceSchema);
export type GetInstanceQueryResponseSchema = z.infer<typeof getInstanceQueryResponseSchema>;
