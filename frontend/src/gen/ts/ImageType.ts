import type { ArchitectureType } from "./ArchitectureType";
import type { ImageVisibilityType } from "./ImageVisibilityType";

 export type ImageType = {
    /**
     * @description \nNAME is subset of RFC1123 label names:\n1. contain only lowercase alphanumeric characters or \'-\'\n2. start with an alphanumeric character\n3. end with an alphanumeric character\n
     * @type string
    */
    name: string;
    /**
     * @type string | undefined, uuid
    */
    uid?: string;
    display_name?: (string | null);
    description?: (string | null);
    /**
     * @type string
    */
    architecture: ArchitectureType;
    /**
     * @type string
    */
    url: string;
    /**
     * @type string
    */
    visibility: ImageVisibilityType;
    /**
     * @default ""
     * @type string | undefined
    */
    workspace?: string;
};