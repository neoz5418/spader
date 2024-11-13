export const direction = {
    "desc": "desc",
    "asc": "asc"
} as const;
export type DirectionType = (typeof direction)[keyof typeof direction];