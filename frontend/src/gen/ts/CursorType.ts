export type CursorType = {
    /**
     * @type integer
    */
    limit: number;
    before?: (string | null);
    after?: (string | null);
};