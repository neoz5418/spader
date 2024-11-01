import type { EventTypeType } from "./EventTypeType";

 export type WatchEventType = {
    /**
     * @type string
    */
    type: EventTypeType;
    /**
     * @type object
    */
    object: object;
};