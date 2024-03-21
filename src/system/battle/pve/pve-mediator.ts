import { app } from "../../../app";
import { Mediator } from "../../../core/ui-mediator";
import { ui } from "../../../misc/ui";
import { PveUI } from "../../../ui-runtime/scene/PveUI";

@Laya.regClass()
export class PveMediator extends Mediator {
    public declare owner: PveUI;

    public override onAwake() {}
}
