const { regClass } = Laya;
import { LoginServerListUIBase } from "./LoginServerListUI.generated";

@regClass()
export class LoginServerUI extends LoginServerListUIBase {
    backFunc!: Laya.Handler;
    tlServerList!: any[];

    override open(closeOther?: boolean | undefined, param?: any): void {
        this.backFunc = param.back;
        this.tlServerList = param.serverList;
        super.open(closeOther, param);
    }
}
