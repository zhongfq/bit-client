import { app } from "../../../app";
import { Mediator } from "../../../core/ui-mediator";
import { ui } from "../../../misc/ui";
import { PvpUI } from "../../../ui-runtime/scene/PvpUI";

@Laya.regClass()
export class PvpMediator extends Mediator {
    public declare owner: PvpUI;

    public override onAwake() {}
}
