import { z } from "@/utils/zod.ts";
import { operationSchema } from "./operationSchema.gen";
import { errorInternalSchema } from "./errorInternalSchema.gen";
import { errorInvalidArgumentSchema } from "./errorInvalidArgumentSchema.gen";
import { errorRefreshTokenCannotBeEmptySchema } from "./errorRefreshTokenCannotBeEmptySchema.gen";
import { errorRefreshTokenExpiredSchema } from "./errorRefreshTokenExpiredSchema.gen";
import { errorRefreshTokenInvalidSchema } from "./errorRefreshTokenInvalidSchema.gen";
import { errorForbiddenSchema } from "./errorForbiddenSchema.gen";
import { errorUnauthorizedSchema } from "./errorUnauthorizedSchema.gen";
import { errorUsernameOrEmailCannotBeEmptySchema } from "./errorUsernameOrEmailCannotBeEmptySchema.gen";
import { errorValidationFailedSchema } from "./errorValidationFailedSchema.gen";


export const stopInstancePathParamsSchema = z.object({ "workspace": z.string(), "name": z.string() });
export type StopInstancePathParamsSchema = z.infer<typeof stopInstancePathParamsSchema>;
/**
 * @description Successful Response
 */
export const stopInstance200Schema = z.lazy(() => operationSchema);
export type StopInstance200Schema = z.infer<typeof stopInstance200Schema>;
/**
 * @description Unprocessable Entity
 */
export const stopInstance422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type StopInstance422Schema = z.infer<typeof stopInstance422Schema>;
/**
 * @description Successful Response
 */
export const stopInstanceMutationResponseSchema = z.lazy(() => operationSchema);
export type StopInstanceMutationResponseSchema = z.infer<typeof stopInstanceMutationResponseSchema>;