const { regClass } = Laya;
import { AlertArgs } from "../../misc/ui";
import { AlertUIBase } from "./AlertUI.generated";

@regClass()
export class AlertUI extends AlertUIBase {
    args!: AlertArgs;

    open(closeOther?: boolean | undefined, param?: any): void {
        this.args = param;
        super.open(closeOther, param);
    }

    close(type?: string | undefined): void {
        if (!type) {
            Laya.Dialog.manager.close(this);
        }
    }
}
