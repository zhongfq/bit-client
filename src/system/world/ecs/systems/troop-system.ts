import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import {
    MovementComponent,
    MovementType,
    TransformComponent,
} from "../components/movement-component";
import { Tilemap } from "../components/tilemap-component";
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
                if (solider.order === SoliderOrder.IDLE) {
                    this._doIdle(solider);
                } else if (solider.order === SoliderOrder.MOVE) {
                    this._doMove(solider);
                } else if (solider.order === SoliderOrder.RUSH) {
                    this._doRush(solider);
                }
            });
        }
    }

    private _doIdle(soldier: SoldierComponent) {
        const movement = soldier.getComponent(MovementComponent)!;
        const api = this.ecs.getSystem(CommandSystem)!;
        if (movement.type !== MovementType.NONE) {
            api.stopMove(movement);
        }
    }

    private _doMove(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const movement = soldier.getComponent(MovementComponent)!;
        const leaderTroop = this.ecs.getComponent(soldier.leader, TroopComponent)!;
        const leaderMovement = leaderTroop.getComponent(MovementComponent)!;
        const transform = soldier.getComponent(TransformComponent)!;
        const p1 = tmpVector3;
        const p0 = transform.position;
        api.calcSoldierPositionImmediately(leaderTroop, soldier, p1);
        const distance = Laya.Vector3.distance(p1, p0);
        if (distance == 0) {
            movement.speed.x *= 0.1;
            movement.speed.y *= 0.1;
            movement.speed.z *= 0.1;
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const degree = (rad * 180) / Math.PI;
            const velocity = distance / (TroopSystem.TICK / 1000) / Tilemap.RATE;
            // api.startMove(movement, degree, Math.min(velocity, leaderMovement.velocity));
            api.startMove(movement, degree, Math.min(velocity, leaderMovement.velocity * 1.4));
        }
    }

    private _doRush(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const movement = soldier.getComponent(MovementComponent)!;
        const transform = soldier.getComponent(TransformComponent)!;
        const distance = Laya.Vector3.distance(transform.position, soldier.attack.position);
        if (distance < 0.1) {
            soldier.order = SoliderOrder.FIGHT;
            api.soldierFight(soldier);
        } else if (!movement.target) {
            movement.target = Laya.Pool.obtain(Laya.Vector3);
            soldier.attack.position.cloneTo(movement.target);
            const rad = Math.atan2(
                soldier.attack.position.z - transform.position.z,
                soldier.attack.position.x - transform.position.x
            );
            const degree = (rad * 180) / Math.PI;
            const velocity = distance / 1 / Tilemap.RATE;
            api.startMove(movement, degree, velocity);
        }
    }
}
