import { z } from "@/utils/zod.ts";
import { zoneSchema } from "./zoneSchema.gen";
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
import { zoneBaseSchema } from "./zoneBaseSchema.gen";

 /**
 * @description Successful Response
 */
export const createZone201Schema = z.lazy(() => zoneSchema);
export type CreateZone201Schema = z.infer<typeof createZone201Schema>;
/**
 * @description Unprocessable Entity
 */
export const createZone422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type CreateZone422Schema = z.infer<typeof createZone422Schema>;

 export const createZoneMutationRequestSchema = z.lazy(() => zoneBaseSchema);
export type CreateZoneMutationRequestSchema = z.infer<typeof createZoneMutationRequestSchema>;
/**
 * @description Successful Response
 */
export const createZoneMutationResponseSchema = z.lazy(() => zoneSchema);
export type CreateZoneMutationResponseSchema = z.infer<typeof createZoneMutationResponseSchema>;