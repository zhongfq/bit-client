import { app } from "../../../../../app";
import { ecs } from "../../../../../core/ecs";
import { tween } from "../../../../../core/tween/tween";
import { BattleConf } from "../../../../../def/battle";
import { res } from "../../../../../misc/res";
import { HeadInfoStyle } from "../../../../../ui-runtime/prefab/battle/HeadInfoUI";
import { ElementCreator, UpdateHp } from "../../../pve-server/pve-defs";
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
    BoardComponent,
    HeadInfoComponent,
    ShadowComponent,
} from "../components/render-component";
import { TilemapComponent } from "../components/tilemap-component";
import { ElementAnimation, ElementComponent } from "../components/troop-component";

const PREFAB_HEAD_INFO1 = "resources/prefab/battle/ui/head-info1.lh";
const PREFAB_HEAD_INFO2 = "resources/prefab/battle/ui/head-info2.lh";
const PREFAB_HEAD_INFO3 = "resources/prefab/battle/ui/head-info3.lh";
const PREFAB_ROLE_SHADOW = "resources/prefab/battle/ui/role-shadow.lh";

export class CommandSystem extends ecs.System implements ICommandSender {
    public constructor(public readonly context: PveContext) {
        super();
    }

    public override update(dt: number): void {}

    public focus(eid: number) {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
        this.context.focusRole = eid;
        camera.focus = eid;
    }

    public createElement(data: ElementCreator) {
        const table = app.service.table;
        const ETYPE = BattleConf.ENTITY_TYPE;

        const entityRow = table.battleEntity[data.entityId];

        const entity = this.ecs.createEntity(data.eid);
        entity.etype = data.etype;

        const element = entity.addComponent(ElementComponent);
        element.entityId = data.entityId;
        element.tableId = data.tableId;

        const transform = entity.addComponent(TransformComponent);
        transform.position.cloneFrom(data.position);
        transform.flag |= TransformComponent.POSITION;

        if (data.animation) {
            const animation = entity.addComponent(AnimationComponent);
            animation.res = entityRow.res;
        }

        if (entityRow.info_style) {
            const info = entity.addComponent(HeadInfoComponent);
            info.data.hp = data.hp;
            info.data.maxHp = data.maxHp;
            info.data.offset = entityRow.info_offset ?? 0;
            if (data.aid === 2) {
                info.data.style = HeadInfoStyle.ENEMY;
            }
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

        if (
            data.etype == ETYPE.BUILDING ||
            data.etype == ETYPE.WOOD ||
            data.etype == ETYPE.FOOD ||
            data.etype == ETYPE.STONE
        ) {
            entity.addComponent(BoardComponent);
        }
    }

    public removeElement(eid: number): void {
        this.ecs.removeEntity(eid);
    }

    private _findElement(eid: number) {
        const element = this.ecs.getComponent(eid, ElementComponent);
        if (!element) {
            console.warn(`not found entity: ${eid}`);
        }
        return element;
    }

    public rushStart(eid: number) {
        const element = this._findElement(eid);
        if (element) {
            element.animation.rushing = true;
        }
    }

    public moveStart(eid: number, velocity: Laya.Vector3) {
        const element = this._findElement(eid);
        if (element) {
            const { movement } = element;
            movement.type = MovementType.WHEEL;
            movement.velocity.cloneFrom(velocity);
            this._setRotation(element, velocity.x, velocity.z);
            this.playAnim(element.eid, ElementAnimation.RUN);
        }
    }

    public moveStop(eid: number, position: Laya.Vector3) {
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

    public towardTo(eid: number, target: number) {
        const element1 = this._findElement(eid);
        const element2 = this._findElement(target);
        if (element1 && element2) {
            const p1 = element1.transform.position;
            const p2 = element2.transform.position;
            this._setRotation(element1, p2.x - p1.x, p2.z - p1.z);
        }
    }

    private _playCrossFade(
        element: ElementComponent,
        name: string,
        clip: string,
        loop: boolean
    ): void {
        const animation = element.animation;
        const animator = animation.animator;
        if (animator && animation.current.name !== name && animation.current.clip !== clip) {
            animation.current.name = name;
            animation.current.clip = clip;
            animation.loop = loop;
            animator.crossFade(clip, 0.15);
        }
    }

    public playAnim(eid: number, name: ElementAnimation) {
        const element = this._findElement(eid);
        if (element) {
            switch (name) {
                case ElementAnimation.ATTACK: {
                    const idx = (Math.round(Math.random() * 1000) % 2) + 1;
                    this._playCrossFade(element, name, "attack" + idx, false);
                    break;
                }
                case ElementAnimation.IDLE:
                    element.animation.rushing = false;
                    element.animation.default.name = name;
                    element.animation.default.clip = "idle";
                    this._playCrossFade(element, name, "idle", true);
                    break;
                case ElementAnimation.RUN: {
                    const clip = element.animation.rushing ? "rush" : "run";
                    element.animation.default.name = name;
                    element.animation.default.clip = clip;
                    this._playCrossFade(element, name, clip, true);
                    break;
                }
                case ElementAnimation.DIE:
                    element.animation.default.name = "";
                    element.animation.default.clip = "";
                    this._playCrossFade(element, name, "die", false);
                    break;
                case ElementAnimation.CHOP:
                    this._playCrossFade(element, name, "chop", false);
            }
        }
    }

    public updateHp(eid: number, data: UpdateHp): void {
        const element = this._findElement(eid);
        if (element && data.subHp) {
            const info = element.getComponent(HeadInfoComponent);
            if (info && info.view) {
                info.data.hp = data.hp;
                info.data.maxHp = data.maxHp;
                info.view.update(info.data);

                if (data.hp <= 0) {
                    info.view.visible = false;
                }

                let prefab: Laya.Prefab | undefined;
                if (data.isCrit) {
                    prefab = Laya.loader.getRes(res.BATTLE_HP_NUM_X);
                } else {
                    prefab = Laya.loader.getRes(res.BATTLE_HP_NUM);
                }
                if (prefab) {
                    const pos = new Laya.Vector4();
                    this.context.camera.worldToViewportPoint(element.transform.position, pos);
                    const hpui = prefab.create() as Laya.Sprite;
                    const hpTxt = hpui.getChildByName("anim").getChildByName("hp") as Laya.Text;
                    hpTxt.text = data.subHp.toFixed();
                    hpui.pos(pos.x - info.view.width / 2, pos.y - info.data.offset, true);
                    this.context.owner.labels.addChild(hpui);
                    hpui.scaleX = 0.5;
                    hpui.scaleY = 0.5;
                    tween(hpui)
                        .to(0.3, { scaleX: 1, scaleY: 1 }, { easing: "bounceOut" })
                        .delay(0.5)
                        .call(() => {
                            tween(hpui)
                                .to(0.5, { y: hpui.y - 50 })
                                .start();
                            tween(hpui).to(0.5, { alpha: 0 }).removeSelf().start();
                        })
                        .start();
                }
            }
            const etype = element.entity.etype;
            const ETYPE = BattleConf.ENTITY_TYPE;

            if (etype == ETYPE.WOOD || etype == ETYPE.FOOD || etype == ETYPE.STONE) {
                const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
                const dynamicElement = tilemap.getDynamicElementByEid(eid);
                const buildingRow = app.service.table.battleBuilding[element.tableId];
                const stateArr = buildingRow.hp_state as Array<number>;
                const textureArr = buildingRow.hp_texture as Array<string>;

                let textureName = undefined;
                if (data.hp > 0) {
                    for (let i = 0; i < stateArr.length - 1; i++) {
                        const hp = stateArr[i];
                        const nextHp = stateArr[i + 1];
                        if (hp >= data.hp && data.hp > nextHp) {
                            textureName = textureArr[i];
                            break;
                        }
                    }
                } else {
                    if (buildingRow.die_hide) {
                        textureName = undefined;
                    } else {
                        textureName = textureArr.at(-1);
                    }
                }
                if (textureName) {
                    dynamicElement?.draw();
                    dynamicElement?.setTexture(textureName);
                } else {
                    dynamicElement?.erase();
                }
            }
        }
    }

    public drawDebug(x: number, z: number, radius: number, color: number) {
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
