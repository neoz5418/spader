import { z } from "@/utils/zod.ts";
import { zoneSchema } from "./zoneSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { zoneBaseSchema } from "./zoneBaseSchema.gen";

 /**
 * @description Successful Response
 */
export const createZone201Schema = z.lazy(() => zoneSchema);
export type CreateZone201Schema = z.infer<typeof createZone201Schema>;
/**
 * @description Request error
 */
export const createZone400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateZone400Schema = z.infer<typeof createZone400Schema>;
/**
 * @description Unauthorized
 */
export const createZone401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateZone401Schema = z.infer<typeof createZone401Schema>;
/**
 * @description Not found
 */
export const createZone404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateZone404Schema = z.infer<typeof createZone404Schema>;
/**
 * @description Resource conflict
 */
export const createZone409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateZone409Schema = z.infer<typeof createZone409Schema>;
/**
 * @description Precondition failed
 */
export const createZone412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateZone412Schema = z.infer<typeof createZone412Schema>;
/**
 * @description Validation error
 */
export const createZone422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateZone422Schema = z.infer<typeof createZone422Schema>;
/**
 * @description Internal server error
 */
export const createZone500Schema = z.lazy(() => errorInternalSchema);
export type CreateZone500Schema = z.infer<typeof createZone500Schema>;

 export const createZoneMutationRequestSchema = z.lazy(() => zoneBaseSchema);
export type CreateZoneMutationRequestSchema = z.infer<typeof createZoneMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createZoneMutationResponseSchema = z.lazy(() => zoneSchema);
export type CreateZoneMutationResponseSchema = z.infer<typeof createZoneMutationResponseSchema>;
