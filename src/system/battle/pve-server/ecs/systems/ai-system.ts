import { b3 } from "../../../../../core/behavior3/behavior";
import { builtinNodes } from "../../../../../core/behavior3/nodes/builtin-nodes";
import { ecs } from "../../../../../core/ecs";
import { BackTeam } from "../../btree/actions/back-team";
import { FollowHero } from "../../btree/actions/follow-hero";
import { GetHeroDistance } from "../../btree/actions/get-hero-distance";
import { GetPos } from "../../btree/actions/get-pos";
import { Hurt } from "../../btree/actions/hurt";
import { MoveToAtkPos } from "../../btree/actions/move-to-atk-pos";
import { MoveToPos } from "../../btree/actions/move-to-pos";
import { NormalAttack } from "../../btree/actions/normal-attack";
import { Wait } from "../../btree/actions/wait";
import { FindOneTarget } from "../../btree/conditions/find-one-target";
import { FindTargets } from "../../btree/conditions/find-targets";
import { PveServer } from "../../pve-server";
import { AiComponent } from "../components/ai-component";
import { RoleComponent, RoleEnv } from "../components/role-component";

export class AiSystem extends ecs.System {
    static readonly TICK = 0.1;

    private _time: number = 0;

    constructor(readonly context: PveServer) {
        super();

        context.registerProcess(...builtinNodes);
        context.registerProcess(BackTeam);
        context.registerProcess(FindOneTarget);
        context.registerProcess(FindTargets);
        context.registerProcess(FollowHero);
        context.registerProcess(GetHeroDistance);
        context.registerProcess(GetPos);
        context.registerProcess(Hurt);
        context.registerProcess(MoveToAtkPos);
        context.registerProcess(MoveToPos);
        context.registerProcess(NormalAttack);
        context.registerProcess(NormalAttack);
        context.registerProcess(Wait);
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
