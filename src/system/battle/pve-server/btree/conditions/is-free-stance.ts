import * as b3 from "../../../../../core/behavior3/behavior";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";
import { LAST_ADJUST_DIR } from "../actions/adjust-stance";

export class IsFreeStance extends b3.Process {
    public override run(node: b3.Node, env: AiTreeEnv, enemy: ElementComponent) {
        const owner = env.owner;
        if (env.context.isFreeStance(owner, owner.transform.position)) {
            env.setValue(LAST_ADJUST_DIR, undefined);
            return b3.Status.SUCCESS;
        } else {
            return b3.Status.FAILURE;
        }
    }

    public override get descriptor() {
        return {
            name: "IsFreeStance",
            type: "Condition",
            desc: "判断攻击位置",
            doc: `+ 判断当前的位置是不是合理的攻击位置`,
        };
    }
}
