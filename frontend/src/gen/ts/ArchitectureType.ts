export const architecture = {
    "amd64": "amd64",
    "arm64": "arm64"
} as const;
export type ArchitectureType = (typeof architecture)[keyof typeof architecture];