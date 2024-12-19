export const invitationStatus = {
	pending: "pending",
	accepted: "accepted",
	rejected: "rejected",
} as const;
export type InvitationStatusType =
	(typeof invitationStatus)[keyof typeof invitationStatus];
