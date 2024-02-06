import { app } from "../../../../app";
import { Callback } from "../../../../core/dispatcher";
import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { MathUtil } from "../../../../core/utils/math-util";
import proto from "../../../../def/proto";
import { opcode } from "../../../../def/protocol";
import { WorldConf } from "../../../../def/world";
import { WorldContext } from "../../world-context";
import { BattleComponent } from "../components/battle-component";
import { CameraComponent } from "../components/camera-component";
import {
    InterpolationRate,
    MovementComponent,
    MovementType,
    TransformComponent,
} from "../components/movement-component";
import { AnimationComponent } from "../components/render-component";
import { Tilemap } from "../components/tilemap-component";
import {
    CharacterAnimation,
    CharacterComponent,
    HeroComponent,
    OwnerComponent,
    SoldierComponent,
    SoliderOrder,
} from "../components/troop-component";

const formation: IVector3Like[] = [
    { x: -0.6, y: 0, z: 0 },
    { x: -0.6, y: 0, z: 0.6 },
    { x: -0.6, y: 0, z: -0.6 },
    { x: -1.2, y: 0, z: 0 },
    { x: -1.2, y: 0, z: 0.6 },
    { x: -1.2, y: 0, z: -0.6 },
    { x: -1.8, y: 0, z: 0 },
    { x: -1.8, y: 0, z: 0.6 },
    { x: -1.8, y: 0, z: -0.6 },
    { x: -2.4, y: 0, z: 0 },
    { x: -2.4, y: 0, z: 0.6 },
    { x: -2.4, y: 0, z: -0.6 },
];

const attackFormation: IVector3Like[] = [
    { x: -0.3, y: 0, z: 0 },
    { x: -0.3, y: 0, z: 0.5 },
    { x: -0.3, y: 0, z: -0.5 },
    { x: -0.3, y: 0, z: 1 },
    { x: -0.3, y: 0, z: -1 },
    { x: -0.6, y: 0, z: 0.2 },
    { x: -0.6, y: 0, z: -0.2 },
    { x: -0.6, y: 0, z: 0.7 },
    { x: -0.6, y: 0, z: -0.7 },
    { x: -0.9, y: 0, z: 0 },
    { x: -0.9, y: 0, z: 0.5 },
    { x: -0.9, y: 0, z: -0.5 },
    { x: -0.9, y: 0, z: 1 },
    { x: -0.9, y: 0, z: -1 },
];

const PREFAB_SOLDIERS = [
    "resources/prefab/battle/roles/mc03.lh",
    "resources/prefab/battle/roles/mc04.lh",
];

export class CommandSystem extends ecs.System {
    constructor(readonly context: WorldContext) {
        super();

        app.service.network.ignoreLog(opcode.world.c2s_troop_move_by);
        app.service.network.ignoreLog(opcode.world.s2c_troop_move_by);

        this.handle(opcode.world.notify_roles, this._onNotifyRoles);
        this.handle(opcode.world.notify_entities, this._onNotifyEntities);
        this.handle(opcode.world.notify_actions, this._onNotifyActions);
    }

    update(dt: number): void {}

    private handle(op: number, callback: Callback) {
        this.context.on(app.service.network, op, callback, this);
    }

    private _onNotifyRoles(notify: proto.world.notify_roles) {}

    private _onNotifyEntities(notify: proto.world.notify_entities) {
        notify.enterList.sort((a, b) => a.eid! - b.eid!);
        for (const cmd of notify.enterList) {
            this._addEntity(cmd as proto.world.Entity);
        }
        for (const eid of notify.leaveList) {
            this._delEntity(eid);
        }
    }

    private _onNotifyActions(notify: proto.world.notify_actions) {
        const ACTION = WorldConf.ENTITY_ACTION;
        for (const cmd of notify.actions) {
            switch (cmd.action) {
                case ACTION.ADD_ENTITY:
                    this._addEntity(cmd.addEntity?.entity as proto.world.Entity);
                    break;
                case ACTION.DEL_ENTITY:
                    this._delEntity(cmd.delEntity?.eid as number);
                    break;
                case ACTION.MOVE:
                    this._moveEntity(cmd.move as proto.world.MoveAction);
                    break;
                case ACTION.BATTLE_SKILL:
                    this._startAttack(cmd.battleSkill as proto.world.BattleSkillAction);
                    break;
                case ACTION.BATTLE_START:
                    this._startBattle(cmd.battleStart as proto.world.BattleStartAction);
                    break;
                case ACTION.BATTLE_STOP:
                    this._stopBattle(cmd.battleStop as proto.world.BattleStopAction);
                    break;
                case ACTION.BATTLE_SUB_HP:
                    break;
            }
        }
    }

    private _addEntity(cmd: proto.world.Entity) {
        const entity = this.ecs.createEntity(cmd.eid);
        const etype = cmd.etype;
        const ENTITY_TYPE = WorldConf.ENTITY_TYPE;

        entity.etype = etype;

        if (cmd.pos) {
            const transform = entity.addComponent(TransformComponent);
            const data = cmd.pos as proto.world.Position;
            Tilemap.grid2Pixel(data.x, data.y, transform.position);
            transform.flag |= TransformComponent.POSITION;
        }

        if (cmd.owner) {
            const owner = entity.addComponent(OwnerComponent);
            const data = cmd.owner as proto.world.OwnerComponent;
            owner.rid = data.rid;
            owner.aid = data.aid;
            owner.name = data.roleName;
        }

        if (cmd.building) {
            console.log("TODO: add building component");
        }

        if (cmd.move) {
            const movement = entity.addComponent(MovementComponent);
            movement.positionInterpolation.rate = InterpolationRate.POSITION;
            movement.rotationInterpolation.rate = InterpolationRate.ROTATION;
        }

        if (cmd.troop) {
            const data = cmd.troop as proto.world.TroopComponent;
            const animation = entity.addComponent(AnimationComponent);
            const heroProp = app.service.table.hero[data.heroId];
            const modelProp = app.service.table.worldEntity.models[heroProp.model];
            animation.path = modelProp.res;

            if (this.context.troop.eid === cmd.eid) {
                const camera = this.ecs.getSingletonComponent(CameraComponent)!;
                camera.focus = cmd.eid;
            }

            const hero = entity.addComponent(HeroComponent);
            hero.maxHp = Math.max(0.1, data.maxHp);
            hero.hp = data.hp;
            this._loadSoldiers(hero);
        }

        if (cmd.battle) {
            const data = cmd.battle as proto.world.BattleComponent;
            const battle = entity.addComponent(BattleComponent);
            battle.battleUid = data.battleUid;
            battle.startTime = data.startTs;
            data.fighterEids.forEach((fightEid) => {
                this._joinBattle(battle.eid, fightEid);
            });
        }

        if (cmd.etype === ENTITY_TYPE.TROOP) {
            // const prop = app.service.data.worldEntityTable.models[cmd.]
        } else {
            console.log(`unhandle entity type: ${cmd.etype}`);
        }

        if (cmd.move) {
            this._updateMovement(cmd.eid, cmd.move as proto.world.MoveComponent);
        }
    }

    private _delEntity(eid: number) {
        const entity = this.ecs.getEntity(eid);
        if (entity) {
            const hero = entity.getComponent(HeroComponent);
            if (hero) {
                hero.soldiers.forEach((solider) => {
                    this.ecs.removeEntity(solider.eid);
                });
            }
            this.ecs.removeEntity(eid);
        }
    }

    private _moveEntity(cmd: proto.world.MoveAction) {
        const entity = this.ecs.getEntity(cmd.eid as number);
        if (!entity) {
            console.warn(`entity not found: eid=${cmd.eid}`);
            return;
        }
        if (cmd.curPos) {
            const transform = entity.getComponent(TransformComponent)!;
            const movement = entity.getComponent(MovementComponent)!;
            const current = cmd.curPos as proto.world.Position;
            const positionInterpolation = movement.positionInterpolation;
            positionInterpolation.percent = 0;
            Tilemap.grid2Pixel(current.x, current.y, positionInterpolation);
            positionInterpolation.vsub(transform.position, positionInterpolation);
        }
        this._updateMovement(
            cmd.eid as number,
            proto.world.MoveComponent.create({
                path: cmd.path,
                speed: cmd.speed,
                startMs: cmd.startMs,
                degree: cmd.degree,
            })
        );
    }

    private _updateMovement(eid: number, data: proto.world.MoveComponent) {
        const entity = this.ecs.getEntity(eid);
        if (!entity) {
            console.warn(`entity not found: eid=${eid}`);
            return;
        }

        const hero = entity.getComponent(HeroComponent)!;
        if (data.speed === 0 && data.path.length === 0) {
            this.stopMove(hero);
            if (hero) {
                this._stopMoveSoldiers(hero);
            }
        } else if (data.path.length > 0) {
        } else if (data.speed > 0) {
            this.startMove(hero, MathUtil.toDegree(data.degree), data.speed);
            if (hero) {
                this._startMoveSoldiers(hero);
            }
        }
    }

    private _startAttack(cmd: proto.world.BattleSkillAction) {
        const entity = this.ecs.getEntity(cmd.srcEid);
        if (!entity) {
            console.warn(`entity not found: eid=${cmd.srcEid}`);
            return;
        }
        const character = entity.getComponent(HeroComponent)!;
        this.playAnimation(character, CharacterAnimation.ATTACK);
        this._towardToTarget(cmd.srcEid, cmd.dstEid);
    }

    private _towardToTarget(eid1: number, eid2: number) {
        const transform1 = this.ecs.getEntity(eid1)?.getComponent(TransformComponent);
        const transform2 = this.ecs.getEntity(eid2)?.getComponent(TransformComponent);
        if (transform1 && transform2) {
            const p1 = transform1.position;
            const p2 = transform2.position;
            this._setRotation(transform1, p2.x - p1.x, p2.z - p1.z, true);
        }
    }

    private _startBattle(action: proto.world.BattleStartAction) {
        this._joinBattle(action.battleEid, action.fighterEid);
    }

    private _stopBattle(action: proto.world.BattleStopAction) {
        const entity = this.ecs.getEntity(action.fighterEid);
        if (entity) {
            const animation = entity.getComponent(AnimationComponent)!;
            const hero = entity.getComponent(HeroComponent)!;
            hero.attackTarget = 0;
            hero.soldiers.forEach((soldier) => {
                soldier.attack.target = null;
                soldier.order = SoliderOrder.RETURN;
            });
            const movement = entity.getComponent(MovementComponent)!;
            if (movement.type === MovementType.WHEEL) {
                const transform = animation.getComponent(TransformComponent)!;
                transform.rotation = MathUtil.toDegree(
                    Math.atan2(-movement.speed.z, movement.speed.x)
                );
                transform.flag |= TransformComponent.ROTATION;
            }
        } else {
            console.warn(`entity not found in 'stop battle': ${action.fighterEid}`);
        }

        const battle = this.ecs.getComponent(action.battleEid, BattleComponent);
        if (battle) {
            const idx = battle.fighterEids.indexOf(action.fighterEid);
            if (idx >= 0) {
                battle.fighterEids.splice(idx, 1);
            }
        } else {
            console.warn(`battle not found in 'stop battle': ${action.battleEid}`);
        }
    }

    private _subHp(action: proto.world.BattleSubHpAction) {}

    private _findAttackTarget(battle: BattleComponent, fightEid: number) {
        const fighterOwner = this.ecs.getComponent(fightEid, OwnerComponent);
        if (fighterOwner) {
            for (let i = 0; i < battle.fighterEids.length - 1; i++) {
                const target = this.ecs.getComponent(battle.fighterEids[i], OwnerComponent);
                if (target && target.aid !== fighterOwner.aid) {
                    return target.getComponent(HeroComponent)!;
                }
            }
        }
        return null;
    }

    private _joinBattle(battleEid: number, fighterEid: number) {
        const battle = this.ecs.getComponent(battleEid, BattleComponent);
        const fighter = this.ecs.getComponent(fighterEid, HeroComponent);

        if (!battle) {
            console.warn(`join battle: battle not found: ${battleEid}`);
            return;
        }

        if (!fighter) {
            console.warn(`join battle: entity not found: ${fighterEid}`);
            return;
        }

        if (battle.fighterEids.indexOf(fighterEid) >= 0) {
            console.warn(`join battle: fighter alread exist: ${fighterEid}`);
            return;
        }

        battle.fighterEids.push(fighterEid);
        if (battle.fighterEids.length > 1) {
            const target = this._findAttackTarget(battle, fighterEid);
            if (target && target.soldiers.length && fighter.soldiers.length) {
                this._fight(fighter, target);
            }
        }
    }

    private _fight(hero1: HeroComponent, hero2: HeroComponent) {
        if (hero2.attackTarget) {
        } else {
            hero1.attackTarget = hero2.eid;
            hero2.attackTarget = hero1.eid;
            const transform1 = hero1.getComponent(TransformComponent)!;
            const transform2 = hero2.getComponent(TransformComponent)!;
            const rad = Math.atan2(
                -(transform2.position.z - transform1.position.z),
                transform2.position.x - transform1.position.x
            );
            const x = (transform1.position.x + transform2.position.x) / 2;
            const z = (transform1.position.z + transform2.position.z) / 2;
            const matrix = Laya.Pool.obtain(Laya.Matrix4x4);
            const position = Laya.Pool.obtain(Laya.Vector3).set(x, 0, z);

            Laya.Matrix4x4.createRotationY(rad, matrix);
            matrix.setPosition(position);
            hero1.soldiers.forEach((solider, index) => {
                const offset = attackFormation[index];
                Laya.Vector3.transformCoordinate(
                    offset as Laya.Vector3,
                    matrix,
                    solider.attack.position
                );
                solider.order = SoliderOrder.RUSH;
            });

            Laya.Matrix4x4.createRotationY(rad + Math.PI, matrix);
            matrix.setPosition(position);
            hero2.soldiers.forEach((solider, index) => {
                const offset = attackFormation[index];
                Laya.Vector3.transformCoordinate(
                    offset as Laya.Vector3,
                    matrix,
                    solider.attack.position
                );
                solider.order = SoliderOrder.RUSH;
            });

            Laya.Pool.free(matrix);
            Laya.Pool.free(position);
        }
    }

    private _setRotation(
        transform: TransformComponent,
        x: number,
        z: number,
        shouldInterpolate?: boolean
    ) {
        const rad = Math.atan2(-z, x);
        let dest = (rad * 180) / Math.PI;
        if (shouldInterpolate) {
            const movement = transform.getComponent(MovementComponent)!;
            let offset = dest - transform.rotation;
            if (offset > 180) {
                offset -= 360;
            } else if (offset < -180) {
                offset += 360;
            }
            movement.rotationInterpolation.percent = 0;
            movement.rotationInterpolation.rotation = offset;
        } else {
            transform.rotation = dest;
            transform.flag |= TransformComponent.ROTATION;
        }
    }

    // 加载小兵
    private _loadSoldiers(hero: HeroComponent) {
        const leaderTransform = hero.getComponent(TransformComponent)!;
        const aid = hero.getComponent(OwnerComponent)!.aid;
        for (let i = 0; i < formation.length; i++) {
            const offset = formation[i];
            const entity = this.ecs.createEntity();
            const transform = entity.addComponent(TransformComponent);
            transform.position.x = leaderTransform.position.x + offset.x;
            transform.position.y = leaderTransform.position.y + offset.y;
            transform.position.z = leaderTransform.position.z + offset.z;
            transform.flag |= TransformComponent.POSITION;

            const animation = entity.addComponent(AnimationComponent);
            animation.path = PREFAB_SOLDIERS[aid % PREFAB_SOLDIERS.length];

            const movement = entity.addComponent(MovementComponent);
            movement.positionInterpolation.rate = InterpolationRate.SOLDIER_POSITION;
            movement.rotationInterpolation.rate = InterpolationRate.SOLDIER_ROTATION;

            const soldier = entity.addComponent(SoldierComponent);
            soldier.leader = hero.eid;
            soldier.offset = offset;
            hero.soldiers.push(soldier);
        }
    }

    private _startMoveSoldiers(hero: HeroComponent) {
        hero.soldiers.forEach((soldier) => {
            if (soldier.order == SoliderOrder.IDLE) {
                soldier.order = SoliderOrder.MOVE;
            }
        });
    }

    private _stopMoveSoldiers(hero: HeroComponent) {
        hero.soldiers.forEach((soldier) => {
            if (soldier.order == SoliderOrder.MOVE) {
                soldier.order = SoliderOrder.IDLE;
            }
        });
    }

    soldierFight(soldier: SoldierComponent) {
        // if (soldier.attack.target) {
        // this._towardToTarget(soldier.eid, soldier.attack.target);
        this.playAnimation(soldier, CharacterAnimation.ATTACK);
        // }
    }

    playAnimation(character: CharacterComponent, name: CharacterAnimation) {
        const animator = character.animation.animator;
        if (animator) {
            switch (name) {
                case CharacterAnimation.ATTACK:
                    animator.setParamsTrigger(CharacterAnimation.ATTACK);
                    break;
                case CharacterAnimation.IDLE:
                    animator.setParamsBool(CharacterAnimation.RUN, false);
                    animator.setParamsBool(CharacterAnimation.IDLE, true);
                    break;
                case CharacterAnimation.RUN:
                    animator.setParamsBool(CharacterAnimation.IDLE, false);
                    animator.setParamsBool(CharacterAnimation.RUN, true);
                    break;
            }
        }
    }

    calcSoldierPosition(hero: HeroComponent, solider: SoldierComponent, out: Laya.Vector3) {
        const animation = hero.animation;
        const transform = hero.transform;
        if (animation.view) {
            out.x = solider.offset.x;
            out.y = solider.offset.y;
            out.z = solider.offset.z;
            animation.view.transform.localToGlobal(out, out);
        } else {
            out.x = transform.position.x + solider.offset.x;
            out.y = transform.position.y + solider.offset.y;
            out.z = transform.position.z + solider.offset.z;
        }
    }

    startMove(character: CharacterComponent, degree: number, velocity: number) {
        const { transform, movement } = character;
        movement.type = MovementType.WHEEL;
        movement.velocity = velocity;
        Tilemap.degree2Speed(degree, velocity, movement.speed);
        this._setRotation(transform, movement.speed.x, movement.speed.z, true);
        this.playAnimation(character, CharacterAnimation.RUN);
    }

    stopMove(character: CharacterComponent) {
        const { movement } = character;
        Laya.Pool.free(movement.target);
        movement.type = MovementType.NONE;
        movement.speed.x = 0;
        movement.speed.y = 0;
        movement.speed.z = 0;
        movement.track = null;
        movement.target = null;
        this.playAnimation(character, CharacterAnimation.IDLE);
    }
}
