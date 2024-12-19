export const listWorkspacesSortOptions = {
	create_time: "create_time",
	delete_time: "delete_time",
	name: "name",
} as const;
export type ListWorkspacesSortOptionsType =
	(typeof listWorkspacesSortOptions)[keyof typeof listWorkspacesSortOptions];
