import { ecs } from "../../../../core/ecs";
import { TroopAi } from "../../behavior3/troop-ai";
import { WorldContext } from "../../world-context";
import { AiComponent } from "../components/ai-component";
import { SoldierComponent } from "../components/troop-component";

export class AISystem extends ecs.System {
    private static readonly TICK = 100;

    private _time: number = 0;

    constructor(readonly context: WorldContext) {
        super();
    }

    onAddComponent(component: ecs.Component): void {
        if (component instanceof SoldierComponent) {
            // const ai = component.addComponent(AiComponent);
            // ai.tree = new TroopAi();
            // ai.tree.run();
        }
    }

    update(dt: number): void {
        const currTimer = Laya.timer.currTimer;
        if (currTimer - this._time > AISystem.TICK) {
            this.ecs.getComponents(AiComponent).forEach((ai) => {
                ai.tree.run();
            });
            this._time = currTimer;
        }
    }
}
