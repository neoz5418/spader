import { z } from "@/utils/zod.ts";
import { userSchema } from "./userSchema.gen";
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


export const getUserPathParamsSchema = z.object({ "username": z.string() });
export type GetUserPathParamsSchema = z.infer<typeof getUserPathParamsSchema>;
/**
 * @description Successful Response
 */
export const getUser200Schema = z.lazy(() => userSchema);
export type GetUser200Schema = z.infer<typeof getUser200Schema>;
/**
 * @description Unprocessable Entity
 */
export const getUser422Schema = z.union([z.lazy(() => errorInternalSchema), z.lazy(() => errorInvalidArgumentSchema), z.lazy(() => errorRefreshTokenCannotBeEmptySchema), z.lazy(() => errorRefreshTokenExpiredSchema), z.lazy(() => errorRefreshTokenInvalidSchema), z.lazy(() => errorInsufficientBalanceSchema), z.lazy(() => errorForbiddenSchema), z.lazy(() => errorUnauthorizedSchema), z.lazy(() => errorUsernameOrEmailCannotBeEmptySchema), z.lazy(() => errorValidationFailedSchema)]);
export type GetUser422Schema = z.infer<typeof getUser422Schema>;
/**
 * @description Successful Response
 */
export const getUserQueryResponseSchema = z.lazy(() => userSchema);
export type GetUserQueryResponseSchema = z.infer<typeof getUserQueryResponseSchema>;