import { Mat3, Vec3 } from "cc";
import { ecs } from "../../../../core/ecs";
import { GamePlayer } from "../../game-player";
import { Movement } from "../components/movement";
import { Animation, AnimationName } from "../components/render";

export class MovementSystem extends ecs.System {
    constructor(readonly context: GamePlayer) {
        super();
    }

    update(dt: number) {
        for (const movement of this.ecs.getComponents(Movement).values()) {
            if (movement.isCurvedTrack()) {
                this.updateTrack(movement, dt);
            } else if (movement.speed.x || movement.speed.y) {
                this.updatePosition(movement, dt);
            }
        }
    }

    private updatePosition(movement: Movement, dt: number) {
        const position = movement.position;
        const speed = movement.speed;
        const target = movement.target;
        position.x += speed.x * dt * movement.rate;
        position.y += speed.y * dt * movement.rate;
        if (target) {
            const offsetX = target.x - position.x;
            const offsetY = target.y - position.y;
            if (offsetX * speed.x < 0) {
                position.x = target.x;
                speed.x = 0;
            }
            if (offsetY * speed.y < 0) {
                position.y = target.y;
                speed.y = 0;
            }
            if (speed.x == 0 && speed.y == 0) {
                movement.target = null;
                const anim = movement.entity.getComponent(Animation);
                if (anim) {
                    anim.name = AnimationName.IDLE;
                }
            }
        }
    }

    /**
     * 关于二阶贝塞尔曲线
     * https://blog.csdn.net/xhhjin/article/details/62905007
     * https://github.com/xhhjin/quadratic-bezier
     *
     */
    private updateTrack(movement: Movement, dt: number) {
        const track = movement.track!;
        if (track.time > track.duration) {
            track.cp = null;
            return;
        }

        if (!track.cp) {
            // 计算p1、p2之间通过的点
            const p0 = track.p0;
            const p2 = track.p2;
            const p2p0 = p2.clone().subtract(p0);
            const sign = p2p0.x > 0 ? 1 : -1;
            const mat3 = Mat3.fromTranslation(new Mat3(), p0);
            mat3.rotate(Math.atan2(p2p0.y, p2p0.x));
            const length = p2p0.length();
            const p1 = Vec3.transformMat3(
                new Vec3(),
                { x: length / 2, y: (length / 6) * sign, z: 1 },
                mat3
            );
            track.p1 = p1;

            // PC = P1 - 1/2(√|P0-P1||P2-P1|)(P0-P1/|P0-P1| + P2-P1/|P2-P1|)
            const p0p1 = p0.clone().subtract(p1);
            const p2p1 = p2.clone().subtract(p1);
            const distp0p1 = p0p1.length();
            const distp2p1 = p2p1.length();
            const sqrtdist = Math.sqrt(distp0p1 * distp2p1);
            track.cp = new Vec3(
                p1.x - (sqrtdist * (p0p1.x / distp0p1 + p2p1.x / distp2p1)) / 2,
                p1.y - (sqrtdist * (p0p1.y / distp0p1 + p2p1.y / distp2p1)) / 2
            );
        }

        const position = movement.position;
        const last = position.clone();
        const p0 = track.p0;
        const p2 = track.p2;
        const p1 = track.cp;
        const t = track.time / track.duration;
        const t1 = (1 - t) * (1 - t);
        const t2 = 2 * t * (1 - t);
        const t3 = t * t;
        // B(t) = (1-t)²P0 + 2t(1-t)P1 + t²P2
        position.x = t1 * p0.x + t2 * p1.x + t3 * p2.x;
        position.y = t1 * p0.y + t2 * p1.y + t3 * p2.y;
        track.time += dt;
        movement.speed.x = (position.x - last.x) / dt;
        movement.speed.y = (position.y - last.y) / dt;
    }
}
