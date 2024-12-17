import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorPreconditionFailedSchema } from "./errorPreconditionFailedSchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";


export const stopInstancePathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type StopInstancePathParamsSchema = z.infer<typeof stopInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const stopInstance200Schema = z.lazy(() => operationSchema);
export type StopInstance200Schema = z.infer<typeof stopInstance200Schema>;
/**
 * @description Request error
 */
export const stopInstance400Schema = z.lazy(() => errorInvalidArgumentSchema);
export type StopInstance400Schema = z.infer<typeof stopInstance400Schema>;
/**
 * @description Unauthorized
 */
export const stopInstance401Schema = z.lazy(() => errorUnauthorizedSchema);
export type StopInstance401Schema = z.infer<typeof stopInstance401Schema>;
/**
 * @description Not found
 */
export const stopInstance404Schema = z.lazy(() => errorResourceNotFoundSchema);
export type StopInstance404Schema = z.infer<typeof stopInstance404Schema>;
/**
 * @description Resource conflict
 */
export const stopInstance409Schema = z.lazy(() => errorResourceConflictSchema);
export type StopInstance409Schema = z.infer<typeof stopInstance409Schema>;
/**
 * @description Precondition failed
 */
export const stopInstance412Schema = z.lazy(() => errorPreconditionFailedSchema);
export type StopInstance412Schema = z.infer<typeof stopInstance412Schema>;
/**
 * @description Validation error
 */
export const stopInstance422Schema = z.lazy(() => errorValidationFailedSchema);
export type StopInstance422Schema = z.infer<typeof stopInstance422Schema>;
/**
 * @description Internal server error
 */
export const stopInstance500Schema = z.lazy(() => errorInternalSchema);
export type StopInstance500Schema = z.infer<typeof stopInstance500Schema>;
/**
 * @description Successful Response
 */
export const stopInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StopInstanceMutationResponseSchema = z.infer<typeof stopInstanceMutationResponseSchema>;
