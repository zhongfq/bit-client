import { builtinNodes } from "../../../../../core/behavior3/nodes/builtin-nodes";
import * as ecs from "../../../../../core/ecs";
import { btreeCode } from "../../../../../def/btree-code";
import { AdjustStance } from "../../btree/actions/adjust-stance";
import { BackSpawnpoint } from "../../btree/actions/back-spawnpoint";
import { BackTeam } from "../../btree/actions/back-team";
import { CalcHeroDistance } from "../../btree/actions/calc-hero-distance";
import { CalcSpawnDistance } from "../../btree/actions/calc-spawnpoint-distance";
import { ClearStance } from "../../btree/actions/clear-stance";
import { Collect } from "../../btree/actions/collect";
import { FollowHero } from "../../btree/actions/follow-hero";
import { GetPos } from "../../btree/actions/get-pos";
import { GetSkillTarget } from "../../btree/actions/get-skill-target";
import { GetSkillTime } from "../../btree/actions/get-skill-time";
import { Hurt } from "../../btree/actions/hurt";
import { LaunchSkill } from "../../btree/actions/launch-skill";
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
import { LauncherComponent } from "../components/skill-component";

export class AiSystem extends ecs.System {
    public declare context: PveServer;

    public static readonly TICK = 0.1;

    public override onCreate() {
        this.context.registerProcess(...builtinNodes);
        this.context.registerProcess(AdjustStance);
        this.context.registerProcess(BackSpawnpoint);
        this.context.registerProcess(BackTeam);
        this.context.registerProcess(CalcHeroDistance);
        this.context.registerProcess(CalcSpawnDistance);
        this.context.registerProcess(ClearStance);
        this.context.registerProcess(Collect);
        this.context.registerProcess(FindOneTarget);
        this.context.registerProcess(FindTargets);
        this.context.registerProcess(FollowHero);
        this.context.registerProcess(GetPos);
        this.context.registerProcess(GetSkillTarget);
        this.context.registerProcess(GetSkillTime);
        this.context.registerProcess(Hurt);
        this.context.registerProcess(IsFreeStance);
        this.context.registerProcess(IsTroopFighting);
        this.context.registerProcess(LaunchSkill);
        this.context.registerProcess(MoveStop);
        this.context.registerProcess(MoveToAtkPos);
        this.context.registerProcess(MoveToPos);
        this.context.registerProcess(NormalAttack);
        this.context.registerProcess(NormalAttack);
        this.context.registerProcess(PlayAnim);
        this.context.registerProcess(SetStance);
        this.context.registerProcess(TowardToTarget);
        this.context.registerProcess(Wait);

        btreeCode.forEach((value) => this.context.registerCode(value.code, value.evaluator));
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
            const launcher = ai.getComponent(LauncherComponent);
            if (launcher) {
                for (const v of launcher.skills) {
                    if (v.running) {
                        return;
                    }
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
