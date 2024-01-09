import { Callback, Dispatcher, toEventType } from "./dispatcher";

export class Service<T extends Dispatcher> extends Dispatcher {
    protected _network: T;

    constructor(network: T) {
        super();

        this._network = network;
    }

    dispose?(): void;

    protected handle(type: string | number, callback: Callback) {
        if (!this._network) {
            throw Error("no network instance");
        }
        this._network.on(toEventType(type), this, callback);
    }
}
