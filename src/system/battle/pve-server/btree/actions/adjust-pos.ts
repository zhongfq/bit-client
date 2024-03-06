import { b3 } from "../../../../../core/behavior3/behavior";
import { MathUtil } from "../../../../../core/utils/math-util";
import { AiTreeEnv } from "../../ecs/components/ai-component";

const tmpSpeed = new Laya.Vector3();

export class AdjustPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv) {
        const owner = env.owner;
        const target = env.context.findAtStance(owner.transform.position);
        if (!target || target === owner) {
            return b3.Status.FAILURE;
        }

        let p1 = node.resume(env) as Laya.Vector3 | undefined;
        const p0 = owner.transform.position;
        if (!p1) {
            const rad = MathUtil.toRadian(MathUtil.randomInt(0, 360));
            p1 = owner.transform.position.clone();
            p1.x += Math.cos(rad);
            p1.z += Math.sin(rad);
        }
        const distance = Laya.Vector3.distance(p1, p0);
        // 与阵型位置在0.5格内认为已经归队了，剩下交给 FollowHero 节点
        if (distance <= 0.5) {
            return b3.Status.SUCCESS;
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            // TODO: 定义速度
            const velocity = 1.5;
            tmpSpeed.x = velocity * Math.cos(rad);
            tmpSpeed.z = velocity * Math.sin(rad);
            env.context.moveStart(env.owner, tmpSpeed);
        }

        return node.yield(env, p1);
    }

    override get descriptor() {
        return {
            name: "AdjustPos",
            type: "Action",
            desc: "调整站位",
        };
    }
}
