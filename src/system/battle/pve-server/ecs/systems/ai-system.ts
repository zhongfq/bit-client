import { b3 } from "../../../../../core/behavior3/behavior";
import { ecs } from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { AiComponent } from "../components/ai-component";

export class AiSystem extends ecs.System {
    private static readonly TICK = 100;

    private _time: number = 0;

    constructor(readonly context: PveServer) {
        super();
    }

    override onAddComponent(component: ecs.Component): void {
        if (component instanceof AiComponent) {
            this._loadAi(component);
        }
    }

    override onRemoveComponent(component: ecs.Component): void {
        if (component instanceof AiComponent) {
            const ai = component;
            ai.env?.clear();
            ai.tree = null!;
            ai.env = null!;
        }
    }

    override update(dt: number): void {
        const currTimer = Laya.timer.currTimer;
        if (currTimer - this._time > AiSystem.TICK) {
            this.ecs.getComponents(AiComponent).forEach((ai) => {
                if (ai.tree && ai.env) {
                    ai.tree.run(ai.env);
                }
            });
            this._time = currTimer;
        }
    }

    private async _loadAi(ai: AiComponent) {
        const tree = await this.context.loadAiTree(ai.res);
        if (tree) {
            ai.tree = tree;
            ai.env = new b3.Env(this.context);
        }
    }
}
