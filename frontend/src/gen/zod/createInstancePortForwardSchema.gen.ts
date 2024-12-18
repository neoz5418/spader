import { z } from "@/utils/zod.ts";
import { portForwardSchema } from "./portForwardSchema.gen";
import { errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema } from "./errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema.gen";
import { errorResourceNotFoundSchema } from "./errorResourceNotFoundSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorPasswordMismatchSchema } from "./errorPasswordMismatchSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorResourceConflictSchema } from "./errorResourceConflictSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const createInstancePortForwardPathParamsSchema = z.object({ "workspace": z.string(), "zone": z.string(), "name": z.string() });
export type CreateInstancePortForwardPathParamsSchema = z.infer<typeof createInstancePortForwardPathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForward201Schema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForward201Schema = z.infer<typeof createInstancePortForward201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createInstancePortForward422Schema = z.union([z.lazy(() => errorEmailAndUsernameCannotBeProvidedAtTheSameTimeSchema), z.lazy(() => errorResourceNotFoundSchema), z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorPasswordMismatchSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorResourceConflictSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateInstancePortForward422Schema = z.infer<typeof createInstancePortForward422Schema>;

 export const createInstancePortForwardMutationRequestSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationRequestSchema = z.infer<typeof createInstancePortForwardMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstancePortForwardMutationResponseSchema = z.lazy(() => portForwardSchema);
export type CreateInstancePortForwardMutationResponseSchema = z.infer<typeof createInstancePortForwardMutationResponseSchema>;
