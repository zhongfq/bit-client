import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import { MovementType } from "../components/movement-component";
import { Tilemap } from "../components/tilemap-component";
import { HeroComponent, SoldierComponent, SoliderOrder } from "../components/troop-component";
import { CommandSystem } from "./command-system";

const tmpVector3 = new Laya.Vector3();

export class TroopSystem extends ecs.System {
    private static readonly TICK = 100;
    private static readonly ATTACK_INTERVAL = 1000;

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
                } else if (solider.order === SoliderOrder.RETURN) {
                    this._doReturn(solider);
                } else if (solider.order === SoliderOrder.FIGHT) {
                    this._doAttack(solider);
                }
            });
        }
    }

    private _doIdle(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const movement = soldier.movement;
        if (movement.type !== MovementType.NONE) {
            api.stopMove(soldier);
        }
    }

    private _doMove(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const leader = this.ecs.getComponent(soldier.leader, HeroComponent)!;
        const movement = soldier.movement;
        const transform = soldier.transform;
        const p1 = tmpVector3;
        const p0 = transform.position;
        api.calcSoldierPosition(leader, soldier, p1);
        const distance = Laya.Vector3.distance(p1, p0);
        if (distance == 0) {
            movement.speed.x *= 0.1;
            movement.speed.y *= 0.1;
            movement.speed.z *= 0.1;
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const degree = (rad * 180) / Math.PI;
            const velocity = distance / (TroopSystem.TICK / 1000) / Tilemap.RATE;
            if (soldier.velocity < leader.movement.velocity) {
                soldier.velocity = leader.movement.velocity;
            }
            if (soldier.velocity < velocity) {
                soldier.velocity += 0.05;
            } else {
                soldier.velocity = velocity;
            }
            if (soldier.velocity > 2) {
                soldier.velocity = 2;
            }
            api.startMove(soldier, degree, soldier.velocity);
        }
    }

    private _doReturn(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const leader = this.ecs.getComponent(soldier.leader, HeroComponent)!;
        const transform = soldier.transform;
        const p1 = tmpVector3;
        const p0 = transform.position;
        api.calcSoldierPosition(leader, soldier, p1);
        const distance = Laya.Vector3.distance(p1, p0);
        if (distance <= 0.01) {
            if (leader.movement.type === MovementType.WHEEL) {
                soldier.order = SoliderOrder.MOVE;
            } else {
                soldier.order = SoliderOrder.IDLE;
            }
        } else {
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const degree = (rad * 180) / Math.PI;
            const velocity = distance / (TroopSystem.TICK / 1000) / Tilemap.RATE;
            if (soldier.velocity < leader.movement.velocity) {
                soldier.velocity = leader.movement.velocity;
            }
            if (soldier.velocity < velocity) {
                soldier.velocity += 0.2;
            } else {
                soldier.velocity = velocity;
            }
            if (soldier.velocity > 4) {
                soldier.velocity = 4;
            }
            api.startMove(soldier, degree, soldier.velocity);
        }
    }

    private _doRush(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        const transform = soldier.transform;
        const distance = Laya.Vector3.distance(transform.position, soldier.attack.position);
        if (distance < 0.1) {
            soldier.order = SoliderOrder.FIGHT;
        } else {
            const movement = soldier.movement;
            if (!movement.target) {
                movement.target = Laya.Pool.obtain(Laya.Vector3);
            }
            soldier.attack.position.cloneTo(movement.target);
            const p1 = soldier.attack.position;
            const p0 = transform.position;
            const rad = Math.atan2(p1.z - p0.z, p1.x - p0.x);
            const degree = (rad * 180) / Math.PI;
            const velocity = distance / (TroopSystem.TICK / 1000) / Tilemap.RATE;

            if (soldier.velocity < velocity) {
                soldier.velocity += 0.2;
            } else {
                soldier.velocity = velocity;
            }
            if (soldier.velocity > 3) {
                soldier.velocity = 3;
            }
            api.startMove(soldier, degree, soldier.velocity);
        }
    }

    private _doAttack(soldier: SoldierComponent) {
        const api = this.ecs.getSystem(CommandSystem)!;
        if (Laya.timer.currTimer - soldier.attack.time > TroopSystem.ATTACK_INTERVAL) {
            soldier.attack.time = Laya.timer.currTimer;
            api.stopMove(soldier);
            api.soldierFight(soldier);
        }
    }
}
