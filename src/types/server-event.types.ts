export type ServerEvent = {
    message: JsonRepresentable & {
        type: string;
        timestamp: number;
        delta: number;
    };
    newState: JsonRepresentable;
    newScheduledActions?: JsonRepresentable[]
    oldState?: JsonRepresentable;
    diffState?: JsonRepresentable;
};

export type JsonRepresentable = Record<string, any>;