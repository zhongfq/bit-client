import { Service } from "../../../core/service";
import { NetworkService } from "../../network/network-service";

export class PvpService extends Service<NetworkService> {
    public constructor(network: NetworkService) {
        super(network);
    }
}
