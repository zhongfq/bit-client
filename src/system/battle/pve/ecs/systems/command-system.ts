import { app } from "../../../../../app";
import { ecs } from "../../../../../core/ecs";
import { BattleConf } from "../../../../../def/battle";
import { ElementCreator } from "../../../pve-server/pve-defs";
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

export class CommandSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    override update(dt: number): void {}

    focus(eid: number) {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
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
        TilemapComponent.grid2Pixel(data.positioin.x, data.positioin.z, transform.position);
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

    createWood(data: ElementCreator) {}

    moveStart(character: ElementComponent, speed: Laya.Vector3) {
        const { movement } = character;
        movement.type = MovementType.WHEEL;
        movement.speed.cloneFrom(speed);
        this._setRotation(character, speed);
        this.playAnim(character, ElementAnimation.RUN);
    }

    moveStop(character: ElementComponent) {
        const { movement } = character;
        movement.type = MovementType.NONE;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        movement.track = null;
        movement.target = null;
        this.playAnim(character, ElementAnimation.IDLE);
    }

    playAnim(character: ElementComponent, name: ElementAnimation) {
        const animator = character.animation.animator;
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

    private _setRotation(character: ElementComponent, speed: Laya.Vector3) {
        const rad = Math.atan2(-speed.z, speed.x);
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
