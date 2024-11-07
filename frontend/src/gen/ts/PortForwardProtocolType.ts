export const portForwardProtocol = {
    "TCP": "TCP",
    "UDP": "UDP"
} as const;
export type PortForwardProtocolType = (typeof portForwardProtocol)[keyof typeof portForwardProtocol];
