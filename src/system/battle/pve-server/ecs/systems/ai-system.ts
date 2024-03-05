import { b3 } from "../../../../../core/behavior3/behavior";
import { builtinNodes } from "../../../../../core/behavior3/nodes/builtin-nodes";
import { ecs } from "../../../../../core/ecs";
import { FollowHero } from "../../btree/actions/follow-hero";
import { NormalAttack } from "../../btree/actions/normal-attack";
import { Wait } from "../../btree/actions/wait";
import { PveServer } from "../../pve-server";
import { AiComponent } from "../components/ai-component";
import { RoleComponent, RoleEnv } from "../components/role-component";

export class AiSystem extends ecs.System {
    static readonly TICK = 0.1;

    private _time: number = 0;

    constructor(readonly context: PveServer) {
        super();

        context.registerProcess(...builtinNodes);
        context.registerProcess(Wait);
        context.registerProcess(NormalAttack);
        context.registerProcess(FollowHero);
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
        const currTimer = this.context.time;
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
            ai.env = new RoleEnv(this.context, ai.getComponent(RoleComponent)!);
        }
    }
}
