export type Constructor<T = unknown> = new (...args: any[]) => T;

export type ConstructorType<T> = {
    [K in keyof T]?: T[K];
};

export interface Callback {
    (...any: any[]): void;
}

// eslint-disable-next-line
export type AnyFunction = Function;

export const toEventType = (type: string | number) => {
    if (typeof type === "number") {
        return `number-event:${type}`;
    } else {
        return type;
    }
};

export class Dispatcher extends Laya.EventDispatcher {
    public override event(type: number, data?: any): boolean;

    public override event(type: string, data?: any): boolean;

    public override event(type: string | number, data?: any): boolean {
        return super.event(toEventType(type), data);
    }
}

export function assert(condition: boolean, message?: string): asserts condition {
    if (!condition) {
        throw new Error(`assert: ${message}`);
    }
}
