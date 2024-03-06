import { b3 } from "../../../../../core/behavior3/behavior";
import { MathUtil } from "../../../../../core/utils/math-util";
import { AiTreeEnv } from "../../ecs/components/ai-component";
import { ElementComponent } from "../../ecs/components/element-component";

const tmpSpeed = new Laya.Vector3();
const tmpDir = new Laya.Vector3();

export const LAST_ADJUST_DIR = b3.TreeEnv.makePrivateVar("lastAdjustDir");

// 可以通过预定位置的方式进行优化
export class AdjustPos extends b3.Process {
    override run(node: b3.Node, env: AiTreeEnv, enemy: ElementComponent) {
        const owner = env.owner;
        let p1 = node.resume(env) as Laya.Vector3 | undefined;
        let running = !!p1;
        const p0 = owner.transform.position;
        if (p1) {
            if (!env.context.isFreeStance(owner, p1)) {
                // 目标位置有人，重新计算
                p1 = undefined;
                running = false;
            }
        }
        if (!p1) {
            /**
             *  │  p1
             *  │
             *  │  p0(owner)  p2(emeny)
             *  │
             *  ┼─────────────────────>
             */
            // 二维空间中, 一个向量(x, y)的垂直向量是(-y, x)
            const p2 = enemy.transform.position;
            // 确定方向 p0->p1
            tmpDir.set(-(p2.z - p0.z), 0, p2.x - p0.x);
            tmpDir.normalize();

            // 与目标切线方向走0.5的距离
            let lastAdjustDir = env.getValue(LAST_ADJUST_DIR) as number | undefined;
            if (lastAdjustDir === undefined) {
                lastAdjustDir = Math.round(Math.random() % 10000) % 2 ? 1 : -1;
                env.setValue(LAST_ADJUST_DIR, lastAdjustDir);
            }
            p1 = owner.transform.position.clone();
            p1.x += tmpDir.x * 0.3 * lastAdjustDir;
            p1.z += tmpDir.z * 0.3 * lastAdjustDir;
        }
        const distance = Laya.Vector3.distance(p1, p0);
        if (distance <= 0.01) {
            return b3.Status.SUCCESS;
        } else if (!running) {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            // TODO: 定义速度
            const velocity = 1.5;
            tmpSpeed.x = velocity * Math.cos(rad);
            tmpSpeed.z = velocity * Math.sin(rad);
            env.context.moveStart(env.owner, tmpSpeed, p1);
        }
        return node.yield(env, p1);
    }

    override get descriptor() {
        return {
            name: "AdjustPos",
            type: "Action",
            desc: "根据目标调整攻击站位",
            input: ["目标"],
        };
    }
}
