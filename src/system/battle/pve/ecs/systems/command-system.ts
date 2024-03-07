import { app } from "../../../../../app";
import { ecs } from "../../../../../core/ecs";
import { BattleConf } from "../../../../../def/battle";
import { ElementCreator } from "../../../pve-server/pve-defs";
import { ICommandSender } from "../../../pve-server/pve-server";
import { PveContext } from "../../pve-context";
import { CameraComponent } from "../components/camera-component";
import {
    InterpolationRate,
    MovementComponent,
    MovementType,
    TransformComponent,
} from "../components/movement-component";
import { AnimationComponent, ShadowComponent } from "../components/render-component";
import { TilemapComponent } from "../components/tilemap-component";
import { ElementAnimation, ElementComponent } from "../components/troop-component";

export class CommandSystem extends ecs.System implements ICommandSender {
    constructor(readonly context: PveContext) {
        super();
    }

    override update(dt: number): void {}

    focus(eid: number) {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
        this.context.focusRole = eid;
        camera.focus = eid;
    }

    createElement(data: ElementCreator) {
        const ETYPE = BattleConf.ENTITY_TYPE;

        const entity = this.ecs.createEntity(data.eid);
        entity.etype = data.etype;

        const movement = entity.addComponent(MovementComponent);
        movement.rotationInterpolation.rate = InterpolationRate.ROTATION;

        const element = entity.addComponent(ElementComponent);
        element.tid = data.tid;
        element.hp = data.hp;
        element.maxHp = data.maxHp;

        const transform = entity.addComponent(TransformComponent);
        transform.position.cloneFrom(data.positioin);
        transform.flag |= TransformComponent.POSITION;

        const animation = entity.addComponent(AnimationComponent);
        if (data.etype === ETYPE.HERO) {
            const table = app.service.table;
            const heroRow = table.hero[data.tid];
            const entityRow = table.battleEntity.entity[heroRow.battle_entity];
            animation.res = entityRow.res;
        } else if (data.etype === ETYPE.SOLDIER) {
            const table = app.service.table;
            const soldierRow = table.soldier[data.tid];
            const entityRow = table.battleEntity.entity[soldierRow.battle_entity];
            animation.res = entityRow.res;
        } else {
            throw new Error(`unsupport etype for create element: ${data.etype}`);
        }

        const shadow = entity.addComponent(ShadowComponent);
        shadow.res = "resources/prefab/battle/ui/role-shadow.lh";
    }

    private _findElement(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found entity: ${eid}`);
        }
        return element;
    }

    createWood(data: ElementCreator) {}

    chopWood(eid: number, target: number) {}

    moveStart(eid: number, speed: Laya.Vector3) {
        const element = this._findElement(eid);
        if (element) {
            const { movement } = element;
            movement.type = MovementType.WHEEL;
            movement.speed.cloneFrom(speed);
            this._setRotation(element, speed.x, speed.z);
            this.playAnim(element.eid, ElementAnimation.RUN);
        }
    }

    moveStop(eid: number) {
        const element = this._findElement(eid);
        if (element) {
            const { movement } = element;
            movement.type = MovementType.NONE;
            movement.speed.x = 0;
            movement.speed.y = 0;
            movement.speed.z = 0;
            movement.track = null;
            movement.target = null;
            this.playAnim(eid, ElementAnimation.IDLE);
        }
    }

    towardTo(eid: number, target: number) {
        const element1 = this._findElement(eid);
        const element2 = this._findElement(target);
        if (element1 && element2) {
            const p1 = element1.transform.position;
            const p2 = element2.transform.position;
            this._setRotation(element1, p2.x - p1.x, p2.z - p1.z);
        }
    }

    playAnim(eid: number, name: ElementAnimation) {
        const element = this._findElement(eid);
        if (element) {
            const animator = element.animation.animator;
            if (animator) {
                switch (name) {
                    case ElementAnimation.ATTACK:
                        animator.setParamsTrigger(ElementAnimation.ATTACK);
                        break;
                    case ElementAnimation.IDLE:
                        animator.setParamsBool(ElementAnimation.RUN, false);
                        animator.setParamsBool(ElementAnimation.IDLE, true);
                        break;
                    case ElementAnimation.RUN:
                        animator.setParamsBool(ElementAnimation.IDLE, false);
                        animator.setParamsBool(ElementAnimation.RUN, true);
                        break;
                }
            }
        }
    }

    drawDebug(x: number, z: number, radius: number) {
        const outPos = Laya.Pool.obtain(Laya.Vector4);
        const inPos = Laya.Pool.obtain(Laya.Vector3);
        inPos.x = x;
        inPos.z = z;
        this.context.camera.worldToViewportPoint(inPos, outPos);
        this.context.owner.debug.graphics.drawCircle(outPos.x, outPos.y, radius, null, 0xff0000, 2);
    }

    private _setRotation(character: ElementComponent, x: number, z: number) {
        const rad = Math.atan2(-z, x);
        const dest = (rad * 180) / Math.PI;
        const { movement, transform } = character;
        let offset = dest - transform.rotation;
        if (offset > 180) {
            offset -= 360;
        } else if (offset < -180) {
            offset += 360;
        }
        movement.rotationInterpolation.percent = 0;
        movement.rotationInterpolation.rotation = offset;
    }
}
