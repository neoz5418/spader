import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const deleteInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type DeleteInstancePathParamsSchema = z.infer<typeof deleteInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const deleteInstance200Schema = z.lazy(() => operationSchema);
export type DeleteInstance200Schema = z.infer<typeof deleteInstance200Schema>;
/**
 * @description Request error
 */
export const deleteInstance400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type DeleteInstance400Schema = z.infer<typeof deleteInstance400Schema>;
/**
 * @description Unauthorized
 */
export const deleteInstance401Schema = z.lazy(() => errorUnauthorizedSchema);
export type DeleteInstance401Schema = z.infer<typeof deleteInstance401Schema>;
/**
 * @description Not found
 */
export const deleteInstance404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type DeleteInstance404Schema = z.infer<typeof deleteInstance404Schema>;
/**
 * @description Resource conflict
 */
export const deleteInstance409Schema = z.lazy(() => errorResourceConflictSchema);
export type DeleteInstance409Schema = z.infer<typeof deleteInstance409Schema>;
/**
 * @description Precondition failed
 */
export const deleteInstance412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type DeleteInstance412Schema = z.infer<typeof deleteInstance412Schema>;
/**
 * @description Validation error
 */
export const deleteInstance422Schema = z.lazy(() => errorValidationFailedSchema);
export type DeleteInstance422Schema = z.infer<typeof deleteInstance422Schema>;
/**
 * @description Internal server error
 */
export const deleteInstance500Schema = z.lazy(() => errorInternalSchema);
export type DeleteInstance500Schema = z.infer<typeof deleteInstance500Schema>;
/**
 * @description Successful Response
 */
export const deleteInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type DeleteInstanceMutationResponseSchema = z.infer<typeof deleteInstanceMutationResponseSchema>;
