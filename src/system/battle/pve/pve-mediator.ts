import { Mediator } from "../../../core/ui-mediator";
import { PveUI } from "../../../ui-runtime/scene/PveUI";

@Laya.regClass()
export class PveMediator extends Mediator {
    declare owner: PveUI;

    override onAwake() {}
}
