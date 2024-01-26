import { app } from "../../app";
import { Service } from "../../core/service";
import { opcode } from "../../def/protocol";
import { MessageError, NetworkService } from "./network-service";

export class ToastService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.connection.msg_error, (data: MessageError) => {
            app.ui.toast(`${data.msg}[${data.name}]`);
            console.log(data.err, data.msg, data.name, data.opname);
        });
    }
}
