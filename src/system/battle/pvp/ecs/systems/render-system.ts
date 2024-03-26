import { app } from "../../../../../app";
import * as ecs from "../../../../../core/ecs";
import { WorldConf } from "../../../../../def/world";
import { HeadInfoUI } from "../../../../../ui-runtime/prefab/battle/HeadInfoUI";
import { Tilemap } from "../../../tilemap/tilemap";
import { TMPropKey } from "../../../tilemap/tm-def";
import { PvpContext } from "../../pvp-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import {
    AnimationComponent,
    BoardComponent,
    ElementAnimation,
    ElementComponent,
    HeadInfoComponent,
    ShadowComponent,
    TroopComponent,
} from "../components/render-component";
import { TilemapComponent } from "../components/tilemap-component";

const tmpInfoVector4 = new Laya.Vector4();

export class RenderSystem extends ecs.System {
    public declare context: PvpContext;

    public override onAddComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            this._loadAnimation(component);
        } else if (component instanceof HeadInfoComponent) {
            this._loadHeadInfo(component);
        } else if (component instanceof ShadowComponent) {
            this._loadShadow(component);
        } else if (component instanceof BoardComponent) {
            this._loadBoard(component);
        } else if (component instanceof TroopComponent) {
            this._loadTroop(component);
        }
    }

    public override onRemoveComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            component.view?.destroy();
            component.view = null;
            component.animator = null;
        } else if (component instanceof HeadInfoComponent) {
            component.view?.destroy();
            component.view = null;
        } else if (component instanceof ShadowComponent) {
            component.view?.destroy();
            component.view = null;
        } else if (component instanceof BoardComponent) {
            const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
            tilemap.delObjectElementByEid(component.eid);
        } else if (component instanceof TroopComponent) {
            component.hero?.destroy();
            component.hero = null;
            component.soldiers.forEach((soldier) => {
                soldier.destroy();
            });
            component.soldiers.length = 0;
            component.animators.length = 0;
            component.view?.destroy();
            component.view = null;
        }
    }

    public update(dt: number): void {
        this.ecs.getComponents(ElementComponent).forEach((element) => {
            this._updatePosition(element);
        });
        this.ecs.getComponents(AnimationComponent).forEach((anim) => {
            // 可能不需要每帧执行
            this._updateAnim(anim);
        });
        this.ecs.getComponents(HeadInfoComponent).forEach((info) => {
            this._updateHeadInfoPos(info);
        });
    }

    private _updatePosition(element: ElementComponent) {
        const transform = element.getComponent(TransformComponent)!;

        if (transform.flag & TransformComponent.POSITION) {
            const { shadow, animation, troop } = element;

            // 更新阴影位置
            if (shadow?.view) {
                const position = shadow.view.transform.position;
                position.cloneFrom(transform.position);
                shadow.view.transform.position = position;
            }

            if (animation?.view) {
                // 更新动画位置
                animation.view.transform.position = transform.position;
                transform.flag &= ~TransformComponent.POSITION;
            } else if (troop?.view) {
                // 更新部队位置
                troop.view.transform.position = transform.position;
                transform.flag &= ~TransformComponent.POSITION;
            }
        }

        if (transform.flag & TransformComponent.ROTATION) {
            const { animation, troop } = element;

            if (animation?.view) {
                // 更新动画角度
                animation.view.transform.localRotationEulerY = transform.rotation;
                transform.flag &= ~TransformComponent.ROTATION;
            } else if (troop?.view) {
                // 更新部队角度
                troop.view.transform.localRotationEulerY = transform.rotation;
                transform.flag &= ~TransformComponent.ROTATION;
            }
        }
    }

    private _updateAnim(anim: AnimationComponent) {
        const animator = anim.animator;
        if (!anim.loop && anim.default.name && animator) {
            const playState = animator.getControllerLayer(0).getCurrentPlayState();
            if (
                playState.currentState?.name === anim.current.clip &&
                playState.normalizedTime >= 1
            ) {
                anim.loop = true;
                anim.current.name = anim.default.name;
                anim.current.clip = anim.default.clip;
                animator.crossFade(anim.current.clip, 0.15);
            }
        }
    }

    private _updateHeadInfoPos(info: HeadInfoComponent) {
        const animation = info.getComponent(AnimationComponent)!;
        if (!animation.view || !info.view) {
            return;
        }

        this.context.camera.worldToViewportPoint(animation.view.transform.position, tmpInfoVector4);
        info.view.pos(
            tmpInfoVector4.x - info.view.width / 2,
            tmpInfoVector4.y - info.data.offset,
            true
        );
    }

    private async _loadAnimation(anim: AnimationComponent) {
        if (anim.res) {
            const prefab = await app.loader.loadPrefab(anim.res, () => anim.alive);
            anim.view = prefab.create() as Laya.Sprite3D;
            anim.animator = anim.view.getChildByName("anim").getComponent(Laya.Animator);
            (anim.animator.owner as Laya.Sprite3D).transform.localRotationEulerY = 90;
            this.context.owner.roles.addChild(anim.view);
        }
    }

    private async _loadHeadInfo(info: HeadInfoComponent) {
        const prefab = await app.loader.loadPrefab(info.res, () => info.alive);
        info.view = prefab.create() as HeadInfoUI;
        info.view.update(info.data);
        this.context.owner.troops.addChild(info.view);
    }

    private async _loadShadow(shadow: ShadowComponent) {
        const prefab = await app.loader.loadPrefab(shadow.res, () => shadow.alive);
        shadow.view = prefab.create() as Laya.Sprite3D;
        shadow.view.transform.localPositionY = 0.01;
        this.context.owner.shadows.addChild(shadow.view);
    }

    private async _loadBoard(board: BoardComponent) {
        const transform = board.getComponent(TransformComponent)!;
        const element = board.getComponent(ElementComponent)!;

        const etype = element.entity.etype;
        const ETYPE = WorldConf.ENTITY_TYPE;
        const table = app.service.table;
        let offsetX = 0;
        let offsetZ = 0;

        if (etype === ETYPE.CITY) {
            board.props.set(TMPropKey.TextureKey, board.textureKey!);
            const cfg = app.service.table.textureCfg[board.textureKey!]!;
            offsetX = -cfg.tile_w / 2;
            offsetZ = -cfg.tile_h / 2;
        }
        // if (
        //     etype == ETYPE.BUILDING ||
        //     etype == ETYPE.WOOD ||
        //     etype == ETYPE.FOOD ||
        //     etype == ETYPE.STONE
        // ) {
        //     const buildingRow = table.battleBuilding[element.tableId];
        //     props.set(TMPropKey.TextureKey, buildingRow.texture_key);
        // } else if (etype === ETYPE.) {
        //     // TODO：其他实体类型的属性待定义
        // }

        const gridX = Math.floor(transform.position.x + offsetX);
        const gridY = Math.floor(transform.position.z + offsetZ);
        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        tilemap.addObjectElement(board.eid, gridX, gridY, board.props);
    }

    private _collectTroopAnimator(troop: TroopComponent, view: Laya.Sprite3D) {
        const animator = view.getChildByName("anim")?.getComponent(Laya.Animator);
        if (!animator) {
            console.error(`no animator in '${view.url}'`);
        } else {
            troop.animators.push(animator);
        }
    }

    private async _loadTroop(troop: TroopComponent) {
        const table = app.service.table;
        const heroRow = table.hero[troop.heroId];
        const heroEntityRow = table.worldEntity.models[heroRow.world_entity];
        const soldier1EntityRow = table.worldEntity.models[20000];
        const soldier2EntityRow = table.worldEntity.models[20001];
        const checker = () => troop.alive;
        const heroPrefable = await app.loader.loadPrefab(heroEntityRow.res, checker);
        const soldier1Prefable = await app.loader.loadPrefab(soldier1EntityRow.res, checker);
        const soldier2Prefable = await app.loader.loadPrefab(soldier2EntityRow.res, checker);
        const group = new Laya.Sprite3D();
        troop.view = new Laya.Sprite3D();
        troop.view.addChild(group);
        troop.hero = heroPrefable.create() as Laya.Sprite3D;
        troop.hero.transform.localRotationEulerY = 90;
        this._collectTroopAnimator(troop, troop.hero);
        group.addChild(troop.hero);
        group.transform.localPositionX = 0.3;
        group.transform.localScaleX = 0.5;
        group.transform.localScaleY = 0.5;
        group.transform.localScaleZ = 0.5;
        troop.formation.forEach((p, idx) => {
            if (idx >= 12) {
                return;
            }
            let soldier: Laya.Sprite3D | null;
            if (idx < 4) {
                soldier = soldier1Prefable.create() as Laya.Sprite3D;
            } else {
                soldier = soldier2Prefable.create() as Laya.Sprite3D;
            }
            const position = soldier.transform.localPosition;
            position.cloneFrom(p);
            soldier.transform.localPosition = position;
            this._collectTroopAnimator(troop, soldier);
            group.addChild(soldier);
        });
        this.context.owner.roles.addChild(troop.view);

        const movement = troop.getComponent(MovementComponent)!;
        if (movement.velocity.x !== 0 || movement.velocity.z !== 0) {
            this.context.playAnim(movement.eid, ElementAnimation.RUN);
        }
    }
}
