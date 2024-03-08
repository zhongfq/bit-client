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
import {
    AnimationComponent,
    HeadInfoComponent,
    ShadowComponent,
} from "../components/render-component";
import { ElementAnimation, ElementComponent } from "../components/troop-component";

const PREFAB_HEAD_INFO1 = "resources/prefab/battle/ui/head-info1.lh";
const PREFAB_HEAD_INFO2 = "resources/prefab/battle/ui/head-info2.lh";
const PREFAB_HEAD_INFO3 = "resources/prefab/battle/ui/head-info3.lh";
const PREFAB_ROLE_SHADOW = "resources/prefab/battle/ui/role-shadow.lh";

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
        const table = app.service.table;
        const ETYPE = BattleConf.ENTITY_TYPE;

        const entityRow = table.battleEntity[data.tid];

        const entity = this.ecs.createEntity(data.eid);
        entity.etype = data.etype;

        const element = entity.addComponent(ElementComponent);
        element.tid = data.tid;

        const transform = entity.addComponent(TransformComponent);
        transform.position.cloneFrom(data.position);
        transform.flag |= TransformComponent.POSITION;

        const animation = entity.addComponent(AnimationComponent);
        animation.res = entityRow.res;

        if (entityRow.info_style) {
            const info = entity.addComponent(HeadInfoComponent);
            info.data.hp = data.hp;
            info.data.maxHp = data.maxHp;
            info.data.offset = entityRow.info_offset ?? 0;
            if (entityRow.info_style === 1) {
                info.res = PREFAB_HEAD_INFO1;
            } else if (entityRow.info_style === 2) {
                info.res = PREFAB_HEAD_INFO2;
            } else if (entityRow.info_style === 3) {
                info.res = PREFAB_HEAD_INFO3;
            }
        }

        if (
            data.etype === ETYPE.HERO ||
            data.etype === ETYPE.MONSTER ||
            data.etype === ETYPE.SOLDIER
        ) {
            const shadow = entity.addComponent(ShadowComponent);
            shadow.res = PREFAB_ROLE_SHADOW;

            const movement = entity.addComponent(MovementComponent);
            movement.rotationInterpolation.rate = InterpolationRate.ROTATION;
        }
    }

    removeElement(eid: number): void {
        this.ecs.removeEntity(eid);
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

    moveStart(eid: number, velocity: Laya.Vector3) {
        const element = this._findElement(eid);
        if (element) {
            const { movement } = element;
            movement.type = MovementType.WHEEL;
            movement.velocity.cloneFrom(velocity);
            this._setRotation(element, velocity.x, velocity.z);
            this.playAnim(element.eid, ElementAnimation.RUN);
        }
    }

    moveStop(eid: number, position: Laya.Vector3) {
        const element = this._findElement(eid);
        if (element) {
            const { movement, transform } = element;
            movement.type = MovementType.NONE;
            movement.velocity.x = 0;
            movement.velocity.y = 0;
            movement.velocity.z = 0;
            movement.track = null;
            movement.target = null;
            transform.position.cloneFrom(position);
            transform.flag |= TransformComponent.POSITION;
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

    drawDebug(x: number, z: number, radius: number, color: number) {
        const outPos = Laya.Pool.obtain(Laya.Vector4);
        const inPos = Laya.Pool.obtain(Laya.Vector3);
        inPos.x = x;
        inPos.z = z;
        this.context.camera.worldToViewportPoint(inPos, outPos);
        this.context.owner.debug.graphics.drawCircle(outPos.x, outPos.y, radius, null, color, 2);
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
