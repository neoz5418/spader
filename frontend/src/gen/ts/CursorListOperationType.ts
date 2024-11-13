import type { OperationType } from "./OperationType";
import type { CursorType } from "./CursorType";

 export type CursorListOperationType = {
    /**
     * @type array
    */
    items: OperationType[];
    /**
     * @type object
    */
    cursor: CursorType;
};