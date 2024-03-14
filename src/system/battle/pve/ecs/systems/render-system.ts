import { app } from "../../../../../app";
import * as ecs from "../../../../../core/ecs";
import { BattleConf } from "../../../../../def/battle";
import { HeadInfoUI } from "../../../../../ui-runtime/prefab/battle/HeadInfoUI";
import { TMUtil } from "../../../tilemap/tm-util";
import { PveContext } from "../../pve-context";
import { TransformComponent } from "../components/movement-component";
import {
    AnimationComponent,
    BoardComponent,
    HeadInfoComponent,
    ShadowComponent,
} from "../components/render-component";
import { TilemapComponent } from "../components/tilemap-component";
import { ElementComponent } from "../components/troop-component";
import { CommandSystem } from "./command-system";

const tmpInfoVector4 = new Laya.Vector4();

export class RenderSystem extends ecs.System {
    public declare context: PveContext;

    public override onAddComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            this._loadAnimation(component);
        } else if (component instanceof HeadInfoComponent) {
            this._loadHeadInfo(component);
        } else if (component instanceof ShadowComponent) {
            this._loadShadow(component);
        } else if (component instanceof BoardComponent) {
            this._loadBoard(component);
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
            tilemap.delDynamicElementByEid(component.eid);
        }
    }

    public update(dt: number): void {
        this.ecs.getComponents(AnimationComponent).forEach((anim) => {
            this._updatePosition(anim);
            this._updateAnim(anim);
        });
        this.ecs.getComponents(HeadInfoComponent).forEach((info) => {
            this._updateHeadInfoPos(info);
        });
    }

    private _updatePosition(anim: AnimationComponent) {
        if (!anim.view) {
            return;
        }

        const transform = anim.getComponent(TransformComponent)!;
        const targetTransform = anim.view.transform;

        if (transform.flag & TransformComponent.POSITION) {
            // 更新阴影位置
            const shadow = anim.getComponent(ShadowComponent);
            if (shadow?.view) {
                const position = shadow.view.transform.position;
                position.cloneFrom(transform.position);
                shadow.view.transform.position = position;
            }

            targetTransform.position = transform.position;
            transform.flag &= ~TransformComponent.POSITION;
        }

        if (transform.flag & TransformComponent.ROTATION) {
            targetTransform.localRotationEulerY = transform.rotation;
            transform.flag &= ~TransformComponent.ROTATION;
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
        if (!animation || !animation.view || !info.view) {
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
            const prefab: Laya.Prefab = await Laya.loader.load(anim.res, Laya.Loader.HIERARCHY);
            anim.view = prefab.create() as Laya.Sprite3D;
            anim.animator = anim.view.getChildByName("anim").getComponent(Laya.Animator);
            (anim.animator.owner as Laya.Sprite3D).transform.localRotationEulerY = 90;
            this.context.owner.roles.addChild(anim.view);
        }
    }

    private async _loadHeadInfo(info: HeadInfoComponent) {
        if (info.res) {
            const prefab: Laya.Prefab = await Laya.loader.load(info.res, Laya.Loader.HIERARCHY);
            info.view = prefab.create() as HeadInfoUI;
            info.view.update(info.data);
            this.context.owner.troops.addChild(info.view);
        }
    }

    private async _loadShadow(shadow: ShadowComponent) {
        const prefab: Laya.Prefab = await Laya.loader.load(shadow.res, Laya.Loader.HIERARCHY);
        shadow.view = prefab.create() as Laya.Sprite3D;
        shadow.view.transform.localPositionY = 0.01;
        this.context.owner.shadows.addChild(shadow.view);
    }

    private async _loadBoard(board: BoardComponent) {
        const transform = board.getComponent(TransformComponent)!;
        const element = board.getComponent(ElementComponent)!;
        const headInfo = board.getComponent(HeadInfoComponent)!;

        const table = app.service.table;
        const buildingRow = table.battleBuilding[element.tableId];
        const textureCfg = TMUtil.DYNAMIC_TEXTURE_CFG.get(buildingRow.texture_key);

        const x = Math.floor(transform.position.x + (textureCfg?.tileX ?? 0));
        const y = Math.floor(transform.position.z + (textureCfg?.tileY ?? 0));

        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        tilemap.addDynamicElement(board.eid, x, y);

        const etype = element.entity.etype;
        const ETYPE = BattleConf.ENTITY_TYPE;

        if (etype == ETYPE.WOOD || etype == ETYPE.FOOD || etype == ETYPE.STONE) {
            const commandSystem = this.ecs.getSystem(CommandSystem);
            commandSystem?.updateCollectionHp(board.eid, element.tableId, headInfo.data.hp, false);
        }
    }
}
