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
import { ChopTree } from "./btree/actions/chop-tree";
import { Wait } from "./btree/actions/wait";
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
                new ChopTree().descriptor,
                new FindTargets().descriptor,
                new Wait().descriptor,
            ],
            null,
            2
        );
        str = str.replace(/"doc": "\\n +/g, '"doc": "');
        str = str.replace(/\\n +/g, "\\n");
        return str;
    }
}
