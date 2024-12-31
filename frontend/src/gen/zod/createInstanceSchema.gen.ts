import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorInsufficientBalanceSchema } from "./errorInsufficientBalanceSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";
import { createInstanceRequestSchema } from "./createInstanceRequestSchema.gen";


export const createInstancePathParamsSchema = z.object({ "workspace": z.string() });
export type CreateInstancePathParamsSchema = z.infer<typeof createInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createInstance201Schema = z.lazy(() => operationSchema);
export type CreateInstance201Schema = z.infer<typeof createInstance201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createInstance422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateInstance422Schema = z.infer<typeof createInstance422Schema>;

 export const createInstanceMutationRequestSchema = z.lazy(() => createInstanceRequestSchema);
export type CreateInstanceMutationRequestSchema = z.infer<typeof createInstanceMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type CreateInstanceMutationResponseSchema = z.infer<typeof createInstanceMutationResponseSchema>;
