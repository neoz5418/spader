export const errorResourceConflictType = {
    "ResourceConflict": "ResourceConflict"
} as const;
export type ErrorResourceConflictTypeType = (typeof errorResourceConflictType)[keyof typeof errorResourceConflictType];
export type ErrorResourceConflictType = {
    /**
     * @type string
    */
    type: ErrorResourceConflictTypeType;
    input: any;
    /**
     * @type string
    */
    location: string;
    /**
     * @type string
    */
    resource_name: string;
};