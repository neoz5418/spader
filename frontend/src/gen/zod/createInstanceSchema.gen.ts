import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { createInstanceRequestSchema } from "./createInstanceRequestSchema.gen";


export const createInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string() });
export type CreateInstancePathParamsSchema = z.infer<typeof createInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstance201Schema = z.lazy(() => operationSchema);
export type CreateInstance201Schema = z.infer<typeof createInstance201Schema>;
/**
 * @description Request error
 */
export const createInstance400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type CreateInstance400Schema = z.infer<typeof createInstance400Schema>;
/**
 * @description Unauthorized
 */
export const createInstance401Schema = z.lazy(() => errorUnauthorizedSchema);
export type CreateInstance401Schema = z.infer<typeof createInstance401Schema>;
/**
 * @description Not found
 */
export const createInstance404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type CreateInstance404Schema = z.infer<typeof createInstance404Schema>;
/**
 * @description Resource conflict
 */
export const createInstance409Schema = z.lazy(() => errorResourceConflictSchema);
export type CreateInstance409Schema = z.infer<typeof createInstance409Schema>;
/**
 * @description Precondition failed
 */
export const createInstance412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type CreateInstance412Schema = z.infer<typeof createInstance412Schema>;
/**
 * @description Validation error
 */
export const createInstance422Schema = z.lazy(() => errorValidationFailedSchema);
export type CreateInstance422Schema = z.infer<typeof createInstance422Schema>;
/**
 * @description Internal server error
 */
export const createInstance500Schema = z.lazy(() => errorInternalSchema);
export type CreateInstance500Schema = z.infer<typeof createInstance500Schema>;

 export const createInstanceMutationRequestSchema = z.lazy(() => createInstanceRequestSchema);
export type CreateInstanceMutationRequestSchema = z.infer<typeof createInstanceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateInstanceMutationResponseSchema = z.infer<typeof createInstanceMutationResponseSchema>;
