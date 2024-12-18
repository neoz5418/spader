export const errorResourceConflictType = {
    "ResourceConflict": "ResourceConflict"
} as const;
export type ErrorResourceConflictTypeType = (typeof errorResourceConflictType)[keyof typeof errorResourceConflictType];
export type ErrorResourceConflictType = {
    /**
     * @type string
    */
    type: ErrorResourceConflictTypeType;
    input: (string | object | number);
    /**
     * @type array
    */
    loc: (string | number)[];
    /**
     * @type string
    */
    resource_name: string;
};
