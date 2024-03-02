import { app } from "../../../../../app";
import { ecs } from "../../../../../core/ecs";
import { BattleConf } from "../../../../../def/battle";
import { RoleCreator, TreeCreator } from "../../../pve-server/pve-defs";
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
import { RoleAnimation, RoleComponent } from "../components/troop-component";

export class CommandSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    override update(dt: number): void {}

    focus(eid: number) {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
        camera.focus = eid;
    }

    createRole(data: RoleCreator) {
        const ETYPE = BattleConf.ENTITY_TYPE;

        const entity = this.ecs.createEntity(data.eid);
        entity.etype = data.etype;

        const movement = entity.addComponent(MovementComponent);
        movement.rotationInterpolation.rate = InterpolationRate.ROTATION;

        const role = entity.addComponent(RoleComponent);
        role.tid = data.tid;
        role.hp = data.hp;
        role.maxHp = data.maxHp;

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
            throw new Error(`unsupport etype for create role: ${data.etype}`);
        }

        const shadow = entity.addComponent(ShadowComponent);
        shadow.res = "resources/prefab/battle/ui/role-shadow.lh";
    }

    createTree(data: TreeCreator) {}

    moveStart(character: RoleComponent, degree: number, velocity: number) {
        this.moveChange(character, degree, velocity);
    }

    moveChange(character: RoleComponent, degree: number, velocity: number) {
        const { movement } = character;
        movement.type = MovementType.WHEEL;
        movement.velocity = velocity;
        TilemapComponent.degree2Speed(degree, velocity, movement.speed);
        this._setRotation(character, movement.speed.x, movement.speed.z);
        this.playAnimation(character, RoleAnimation.RUN);
    }

    moveStop(character: RoleComponent) {
        const { movement } = character;
        movement.type = MovementType.NONE;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        movement.track = null;
        movement.target = null;
        this.playAnimation(character, RoleAnimation.IDLE);
    }

    playAnimation(character: RoleComponent, name: RoleAnimation) {
        const animator = character.animation.animator;
        if (animator) {
            switch (name) {
                case RoleAnimation.ATTACK:
                    animator.setParamsTrigger(RoleAnimation.ATTACK);
                    break;
                case RoleAnimation.IDLE:
                    animator.setParamsBool(RoleAnimation.RUN, false);
                    animator.setParamsBool(RoleAnimation.IDLE, true);
                    break;
                case RoleAnimation.RUN:
                    animator.setParamsBool(RoleAnimation.IDLE, false);
                    animator.setParamsBool(RoleAnimation.RUN, true);
                    break;
            }
        }
    }

    private _setRotation(character: RoleComponent, x: number, z: number) {
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
