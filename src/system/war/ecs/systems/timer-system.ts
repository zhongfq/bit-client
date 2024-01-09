import { ecs } from "../../../../core/ecs";
import { war } from "../../../../def/war";
import { GamePlayer } from "../../game-player";
import { Timer } from "../components/timer";

export class TimerSystem extends ecs.System {
    constructor(readonly context: GamePlayer) {
        super();
    }

    advance(dt: number) {
        const timer = this.ecs.getSingletonComponent(Timer)!;
        timer.server += dt;

        dt *= timer.scale;

        while (dt > 0) {
            const step = Math.min(dt, 1 / war.LOGIC_FPS);
            dt -= step;

            timer.steps.push(step);
            timer.local += step;

            if (timer.local >= timer.server) {
                timer.scale = 1;
                return;
            }
        }
    }

    update(dt: number): void {}
}
