const { regClass } = Laya;
import { LoginServerUIBase } from "./LoginServerUI.generated";

@regClass()
export class LoginServerUI extends LoginServerUIBase {
    backFunc!:Laya.Handler;
    tlServerList!:any[];
    open(closeOther?: boolean | undefined, param?: any): void {
        this.backFunc = param.back;
        this.tlServerList = param.serverList;
        super.open(closeOther,param);
    }
}