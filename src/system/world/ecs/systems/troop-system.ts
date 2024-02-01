import { ecs } from "../../../../core/ecs";
import { MathUtil } from "../../../../core/utils/math-util";
import { troop } from "../../../../def/proto";
import { WorldContext } from "../../world-context";
import {
    MovementComponent,
    MovementType,
    TransformComponent,
} from "../components/movement-component";
import { SoldierComponent, SoliderOrder, TroopComponent } from "../components/troop-component";
import { CommandSystem } from "./command-system";

const tmpVector3 = new Laya.Vector3();

export class TroopSystem extends ecs.System {
    private static readonly TICK = 100;

    private _time: number = 0;

    constructor(readonly context: WorldContext) {
        super();
    }

    onAddComponent(component: ecs.Component): void {}

    update(dt: number): void {
        const currTimer = Laya.timer.currTimer;
        if (currTimer - this._time > TroopSystem.TICK) {
            this._time = currTimer;
            const api = this.ecs.getSystem(CommandSystem)!;
            this.ecs.getComponents(SoldierComponent).forEach((solider) => {
                const movement = solider.getComponent(MovementComponent)!;
                if (solider.order === SoliderOrder.IDLE) {
                    if (movement.type !== MovementType.NONE) {
                        api.stopMove(movement);
                    }
                } else if (solider.order === SoliderOrder.MOVE) {
                    // console.log("------------------------ calc");
                    const leaderTroop = this.ecs.getComponent(solider.leader, TroopComponent)!;
                    const leaderMovement = leaderTroop.getComponent(MovementComponent)!;
                    const transform = solider.getComponent(TransformComponent)!;
                    const p1 = tmpVector3;
                    const p0 = transform.position;
                    api.calcSoldierPosition(leaderTroop, solider, p1);
                    const distance = Laya.Vector3.distance(p1, p0);
                    if (distance == 0) {
                        movement.speed.x = 0;
                        movement.speed.y = 0;
                        movement.speed.z = 0;
                    } else {
                        const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
                        const degree = (rad * 180) / Math.PI;
                        const velocity =
                            (distance / (TroopSystem.TICK / 1000)) * leaderMovement.velocity;
                        // console.log("move:", degree, velocity);
                        api.startMove(
                            movement,
                            degree,
                            Math.min(velocity, leaderMovement.velocity)
                        );
                    }
                }
            });
        }
    }
}
