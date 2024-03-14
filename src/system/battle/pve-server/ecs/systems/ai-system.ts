import * as b3 from "../../../../../core/behavior3/behavior";
import { builtinNodes } from "../../../../../core/behavior3/nodes/builtin-nodes";
import * as ecs from "../../../../../core/ecs";
import { AdjustStance } from "../../btree/actions/adjust-stance";
import { BackTeam } from "../../btree/actions/back-team";
import { ClearStance } from "../../btree/actions/clear-stance";
import { FollowHero } from "../../btree/actions/follow-hero";
import { CalcHeroDistance } from "../../btree/actions/calc-hero-distance";
import { GetPos } from "../../btree/actions/get-pos";
import { GetSkillTarget } from "../../btree/actions/get-skill-target";
import { Hurt } from "../../btree/actions/hurt";
import { MoveStop } from "../../btree/actions/move-stop";
import { MoveToAtkPos } from "../../btree/actions/move-to-atk-pos";
import { MoveToPos } from "../../btree/actions/move-to-pos";
import { NormalAttack } from "../../btree/actions/normal-attack";
import { PlayAnim } from "../../btree/actions/play-anim";
import { SetStance } from "../../btree/actions/set-stance";
import { TowardToTarget } from "../../btree/actions/toward-to-target";
import { Wait } from "../../btree/actions/wait";
import { FindOneTarget } from "../../btree/conditions/find-one-target";
import { FindTargets } from "../../btree/conditions/find-targets";
import { IsFreeStance } from "../../btree/conditions/is-free-stance";
import { IsTroopFighting } from "../../btree/conditions/is-troop-fighting";
import { PveServer } from "../../pve-server";
import { AiComponent, AiTreeEnv } from "../components/ai-component";
import { ElementComponent } from "../components/element-component";
import { SkillComponent } from "../components/skill-component";
import { CalcSpawnDistance } from "../../btree/actions/calc-spawnpoint-distance";
import { BackSpawnpoint } from "../../btree/actions/back-spawnpoint";
import { Collect } from "../../btree/actions/collect";

export class AiSystem extends ecs.System {
    public static readonly TICK = 0.1;

    public constructor(public readonly context: PveServer) {
        super();

        context.registerProcess(...builtinNodes);
        context.registerProcess(AdjustStance);
        context.registerProcess(BackSpawnpoint);
        context.registerProcess(BackTeam);
        context.registerProcess(CalcHeroDistance);
        context.registerProcess(CalcSpawnDistance);
        context.registerProcess(ClearStance);
        context.registerProcess(FindOneTarget);
        context.registerProcess(FindTargets);
        context.registerProcess(FollowHero);
        context.registerProcess(GetPos);
        context.registerProcess(GetSkillTarget);
        context.registerProcess(Hurt);
        context.registerProcess(IsFreeStance);
        context.registerProcess(IsTroopFighting);
        context.registerProcess(MoveStop);
        context.registerProcess(MoveToAtkPos);
        context.registerProcess(MoveToPos);
        context.registerProcess(NormalAttack);
        context.registerProcess(NormalAttack);
        context.registerProcess(PlayAnim);
        context.registerProcess(SetStance);
        context.registerProcess(TowardToTarget);
        context.registerProcess(Wait);
        context.registerProcess(Collect);
    }

    public override onAddComponent(component: ecs.Component): void {
        if (component instanceof AiComponent) {
            this._loadAi(component);
        }
    }

    public override onRemoveComponent(component: ecs.Component): void {
        if (component instanceof AiComponent) {
            const ai = component;
            ai.env?.clear();
            ai.tree = null!;
            ai.env = null!;
        }
    }

    public override update(dt: number): void {
        const time = this.context.time;
        this.ecs.getComponents(AiComponent).forEach((ai) => {
            for (const v of ai.getComponent(SkillComponent)!.skills) {
                if (v.running) {
                    return;
                }
            }
            if (ai.active && time - ai.lastUpdate > ai.tick && ai.tree && ai.env) {
                ai.tree.run(ai.env);
                ai.lastUpdate = time;
            }
        });
    }

    private async _loadAi(ai: AiComponent) {
        const tree = await this.context.loadAiTree(ai.res);
        if (tree) {
            ai.tree = tree;
            ai.env = new AiTreeEnv(this.context, ai.getComponent(ElementComponent)!);
            ai.tick = AiSystem.TICK;
        }
    }
}
