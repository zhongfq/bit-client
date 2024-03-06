import { b3 } from "../../../../../core/behavior3/behavior";
import { builtinNodes } from "../../../../../core/behavior3/nodes/builtin-nodes";
import { ecs } from "../../../../../core/ecs";
import { AdjustPos } from "../../btree/actions/adjust-pos";
import { BackTeam } from "../../btree/actions/back-team";
import { ClearStance } from "../../btree/actions/clear-stance";
import { FollowHero } from "../../btree/actions/follow-hero";
import { GetHeroDistance } from "../../btree/actions/get-hero-distance";
import { GetPos } from "../../btree/actions/get-pos";
import { GetSkillTarget } from "../../btree/actions/get-skill-target";
import { Hurt } from "../../btree/actions/hurt";
import { MoveStop } from "../../btree/actions/move-stop";
import { MoveToAtkPos } from "../../btree/actions/move-to-atk-pos";
import { MoveToPos } from "../../btree/actions/move-to-pos";
import { NormalAttack } from "../../btree/actions/normal-attack";
import { PlaySkillAnim } from "../../btree/actions/play-skill-anim";
import { SetStance } from "../../btree/actions/set-stance";
import { TowardToTarget } from "../../btree/actions/toward-to-target";
import { Wait } from "../../btree/actions/wait";
import { FindOneTarget } from "../../btree/conditions/find-one-target";
import { FindTargets } from "../../btree/conditions/find-targets";
import { IsFreeStance } from "../../btree/conditions/is-free-stance";
import { PveServer } from "../../pve-server";
import { AiComponent, AiTreeEnv } from "../components/ai-component";
import { ElementComponent } from "../components/element-component";
import { SkillComponent } from "../components/skill-component";

export class AiSystem extends ecs.System {
    static readonly TICK = 0.1;

    constructor(readonly context: PveServer) {
        super();

        context.registerProcess(...builtinNodes);
        context.registerProcess(AdjustPos);
        context.registerProcess(BackTeam);
        context.registerProcess(ClearStance);
        context.registerProcess(FindOneTarget);
        context.registerProcess(FindTargets);
        context.registerProcess(FollowHero);
        context.registerProcess(GetHeroDistance);
        context.registerProcess(GetPos);
        context.registerProcess(GetSkillTarget);
        context.registerProcess(Hurt);
        context.registerProcess(IsFreeStance);
        context.registerProcess(MoveStop);
        context.registerProcess(MoveToAtkPos);
        context.registerProcess(MoveToPos);
        context.registerProcess(NormalAttack);
        context.registerProcess(NormalAttack);
        context.registerProcess(PlaySkillAnim);
        context.registerProcess(SetStance);
        context.registerProcess(TowardToTarget);
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
        const time = this.context.time;
        this.ecs.getComponents(AiComponent).forEach((ai) => {
            for (const v of ai.getComponent(SkillComponent)!.skills) {
                if (v.running) {
                    return;
                }
            }
            if (time - ai.lastUpdate > AiSystem.TICK && ai.tree && ai.env) {
                ai.tree.run(ai.env);
            }
        });
    }

    private async _loadAi(ai: AiComponent) {
        const tree = await this.context.loadAiTree(ai.res);
        if (tree) {
            ai.tree = tree;
            ai.env = new AiTreeEnv(this.context, ai.getComponent(ElementComponent)!);
        }
    }
}
