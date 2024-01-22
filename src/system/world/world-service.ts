import { Service } from "../../core/service";
import { NetworkService } from "../network/network-service";

export class WorldService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
    }

    // ------------------------------------------------------------------------
    // RPC
    // ------------------------------------------------------------------------
}
