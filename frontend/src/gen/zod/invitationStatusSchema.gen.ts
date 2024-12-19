import { z } from "@/utils/zod.ts";

export const invitationStatusSchema = z.enum([
	"pending",
	"accepted",
	"rejected",
]);
export type InvitationStatusSchema = z.infer<typeof invitationStatusSchema>;
