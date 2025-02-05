import { z } from "@/utils/zod.ts";
import { imageSchema } from "./imageSchema.gen";
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


export const createImagePathParamsSchema = z.object({ "zone": z.string() });
export type CreateImagePathParamsSchema = z.infer<typeof createImagePathParamsSchema>;
/**
 * @description Successful Response
 */
export const createImage201Schema = z.lazy(() => imageSchema);
export type CreateImage201Schema = z.infer<typeof createImage201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createImage422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateImage422Schema = z.infer<typeof createImage422Schema>;

 export const createImageMutationRequestSchema = z.lazy(() => imageSchema);
export type CreateImageMutationRequestSchema = z.infer<typeof createImageMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createImageMutationResponseSchema = z.lazy(() => imageSchema);
export type CreateImageMutationResponseSchema = z.infer<typeof createImageMutationResponseSchema>;