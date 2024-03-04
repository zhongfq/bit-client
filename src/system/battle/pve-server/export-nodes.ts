import { Log } from "../../../core/behavior3/nodes/actions/log";
import { Foreach } from "../../../core/behavior3/nodes/composites/foreach";
import { Loop } from "../../../core/behavior3/nodes/composites/loop";
import { Once } from "../../../core/behavior3/nodes/composites/once";
import { Parallel } from "../../../core/behavior3/nodes/composites/parallel";
import { Selector } from "../../../core/behavior3/nodes/composites/selector";
import { Sequence } from "../../../core/behavior3/nodes/composites/sequence";
import { Check } from "../../../core/behavior3/nodes/conditions/check";
import { AlwaysFail } from "../../../core/behavior3/nodes/decorators/always-fail";
import { AlwaysSuccess } from "../../../core/behavior3/nodes/decorators/always-success";
import { Not } from "../../../core/behavior3/nodes/decorators/not";
import { AddBuff } from "./btree/actions/add-buff";
import { BackTeam } from "./btree/actions/back-team";
import { ChopTree } from "./btree/actions/chop-tree";
import { CreateBullet } from "./btree/actions/create-bullet";
import { DelBuff } from "./btree/actions/del-buff";
import { FollowHero } from "./btree/actions/follow-hero";
import { GetPos } from "./btree/actions/get-pos";
import { GetSkillTarget } from "./btree/actions/get-skill-target";
import { LaunchSkill } from "./btree/actions/launch-skill";
import { MoveForward } from "./btree/actions/move-forward";
import { MoveToAtkPos } from "./btree/actions/move-to-atk-pos";
import { MoveToPos } from "./btree/actions/move-to-pos";
import { NormalAttack } from "./btree/actions/normal-attack";
import { Wait } from "./btree/actions/wait";
import { FindOneTarget } from "./btree/conditions/find-one-target";
import { FindTargets } from "./btree/conditions/find-targets";

export class ExportNodes {
    static stringify() {
        let str = JSON.stringify(
            [
                // 内置节点
                new AlwaysFail().descriptor,
                new AlwaysSuccess().descriptor,
                new Check().descriptor,
                new Foreach().descriptor,
                new Log().descriptor,
                new Loop().descriptor,
                new Not().descriptor,
                new Once().descriptor,
                new Parallel().descriptor,
                new Selector().descriptor,
                new Sequence().descriptor,

                // 自定义节点
                new AddBuff().descriptor,
                new BackTeam().descriptor,
                new ChopTree().descriptor,
                new CreateBullet().descriptor,
                new DelBuff().descriptor,
                new FollowHero().descriptor,
                new GetPos().descriptor,
                new GetSkillTarget().descriptor,
                new LaunchSkill().descriptor,
                new MoveForward().descriptor,
                new MoveToPos().descriptor,
                new MoveToAtkPos().descriptor,
                new NormalAttack().descriptor,
                new Wait().descriptor,

                new FindTargets().descriptor,
                new FindOneTarget().descriptor,
            ],
            null,
            2
        );
        str = str.replace(/"doc": "\\n +/g, '"doc": "');
        str = str.replace(/\\n +/g, "\\n");
        return str;
    }
}
