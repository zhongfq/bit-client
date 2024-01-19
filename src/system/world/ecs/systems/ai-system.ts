import { ecs } from "../../../../core/ecs";
import { TroopAi } from "../../behavior3/troop-ai";
import { World } from "../../world";
import { AI } from "../components/ai";
import { TroopMember } from "../components/troop";

export class AISystem extends ecs.System {
    private static readonly TICK = 100;

    private _time: number = 0;

    constructor(readonly context: World) {
        super();
    }

    onAddComponent(component: ecs.Component): void {
        if (component instanceof TroopMember) {
            const ai = component.addComponent(AI);
            ai.tree = new TroopAi();
            ai.tree.run();
        }
    }

    update(dt: number): void {
        const currTimer = Laya.timer.currTimer;
        if (currTimer - this._time > AISystem.TICK) {
            this.ecs.getComponents(AI).forEach((ai) => {
                ai.tree.run();
            });
            this._time = currTimer;
        }
    }
}
