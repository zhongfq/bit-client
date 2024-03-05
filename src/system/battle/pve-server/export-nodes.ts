import { b3 } from "../../../core/behavior3/behavior";
import { Clear } from "../../../core/behavior3/nodes/actions/clear";
import { GetTime } from "../../../core/behavior3/nodes/actions/get-time";
import { Log } from "../../../core/behavior3/nodes/actions/log";
import { builtinNodes } from "../../../core/behavior3/nodes/builtin-nodes";
import { Foreach } from "../../../core/behavior3/nodes/composites/foreach";
import { Loop } from "../../../core/behavior3/nodes/composites/loop";
import { Once } from "../../../core/behavior3/nodes/composites/once";
import { Parallel } from "../../../core/behavior3/nodes/composites/parallel";
import { Selector } from "../../../core/behavior3/nodes/composites/selector";
import { Sequence } from "../../../core/behavior3/nodes/composites/sequence";
import { Check } from "../../../core/behavior3/nodes/conditions/check";
import { IsNull } from "../../../core/behavior3/nodes/conditions/is-null";
import { NotNull } from "../../../core/behavior3/nodes/conditions/not-null";
import { AlwaysFail } from "../../../core/behavior3/nodes/decorators/always-fail";
import { AlwaysSuccess } from "../../../core/behavior3/nodes/decorators/always-success";
import { Not } from "../../../core/behavior3/nodes/decorators/not";
import { AddBuff } from "./btree/actions/add-buff";
import { BackTeam } from "./btree/actions/back-team";
import { ChopTree } from "./btree/actions/chop-tree";
import { CreateBullet } from "./btree/actions/create-bullet";
import { DelBuff } from "./btree/actions/del-buff";
import { FollowHero } from "./btree/actions/follow-hero";
import { GetHeroDistance } from "./btree/actions/get-hero-distance";
import { GetPos } from "./btree/actions/get-pos";
import { GetSkillTarget } from "./btree/actions/get-skill-target";
import { Hurt } from "./btree/actions/hurt";
import { LaunchSkill } from "./btree/actions/launch-skill";
import { MoveForward } from "./btree/actions/move-forward";
import { MoveToAtkPos } from "./btree/actions/move-to-atk-pos";
import { MoveToPos } from "./btree/actions/move-to-pos";
import { NormalAttack } from "./btree/actions/normal-attack";
import { PlaySkillAnim } from "./btree/actions/play-skill-anim";
import { Wait } from "./btree/actions/wait";
import { FindOneTarget } from "./btree/conditions/find-one-target";
import { FindTargets } from "./btree/conditions/find-targets";

export class ExportNodes extends b3.Context {
    stringify() {
        this.registerProcess(...builtinNodes);
        this.registerProcess<b3.Process>(
            AddBuff,
            BackTeam,
            ChopTree,
            CreateBullet,
            DelBuff,
            FindOneTarget,
            FindTargets,
            FollowHero,
            GetHeroDistance,
            GetPos,
            GetSkillTarget,
            Hurt,
            LaunchSkill,
            MoveForward,
            MoveToAtkPos,
            MoveToPos,
            NormalAttack,
            PlaySkillAnim,
            Wait
        );
        const descriptors: b3.ProcessDescriptor[] = [];
        for (const v of this._processResolvers.values()) {
            descriptors.push(v.descriptor);
        }
        descriptors.sort((a, b) => a.name.localeCompare(b.name));
        let str = JSON.stringify(descriptors, null, 2);
        str = str.replace(/"doc": "\\n +/g, '"doc": "');
        str = str.replace(/\\n +/g, "\\n");
        return str;
    }
}
