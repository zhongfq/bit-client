import { Mediator } from "../../core/ui-mediator";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";

@Laya.regClass()
export class WorldMediator extends Mediator {
    declare owner: WorldUI;

    override onAwake() {}
}
