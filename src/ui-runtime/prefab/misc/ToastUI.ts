const { regClass } = Laya;
import { ToastArgs } from "../../../misc/ui";
import { ToastUIBase } from "./ToastUI.generated";

@regClass()
export class ToastUI extends ToastUIBase {
    public args!: ToastArgs;

    public override open(closeOther?: boolean | undefined, param?: any): void {
        this.args = param;
        super.open(closeOther, param);
    }
}
