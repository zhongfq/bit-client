import { app } from "../../app";
import { Service } from "../../core/service";
import { errcode, opcode } from "../../def/protocol";
import { MessageError, NetworkService } from "./network-service";

export class ErrorListenService extends Service<NetworkService> {
    constructor(network: NetworkService) {
        super(network);
        this.handle(opcode.connection.msg_error, (data: MessageError) => {
            app.ui.toast(`${data.err}_${data.msg}_${data.name}`);
            console.log(data.err, data.msg, data.name, data.opname);
        });
    }
}
