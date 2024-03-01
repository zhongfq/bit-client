import { ecs } from "../../../../../core/ecs";
import { HeroInfoUI } from "../../../../../ui-runtime/prefab/battle/HeroInfoUI";
import { SoldierInfoUI } from "../../../../../ui-runtime/prefab/battle/SoldierInfoUI";
import { PveContext } from "../../pve-context";
import { TransformComponent } from "../components/movement-component";
import {
    AnimationComponent,
    HeroInfoComponent,
    SoliderInfoComponent,
} from "../components/render-component";
import { HeroComponent, OwnerComponent } from "../components/troop-component";

export class RenderSystem extends ecs.System {
    constructor(readonly context: PveContext) {
        super();
    }

    override onAddComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            this._loadAnimation(component);
        } else if (component instanceof HeroInfoComponent) {
            this._loadHeroInfo(component);
        } else if (component instanceof SoliderInfoComponent) {
            this._loadSoiderInfo(component);
        }
    }

    override onRemoveComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            component.view?.destroy(true);
            component.view = null;
            component.animator = null;
        } else if (component instanceof HeroInfoComponent) {
            component.view?.destroy(true);
            component.view = null;
        }
    }

    update(dt: number): void {
        this.ecs.getComponents(AnimationComponent).forEach((anim) => {
            this._updatePosition(anim);
        });
        this.ecs.getComponents(HeroInfoComponent).forEach((info) => {
            this._updateHeroInfoPosition(info);
        });
        this.ecs.getComponents(SoliderInfoComponent).forEach((info) => {
            this._updateSoldierInfoPosition(info);
        });
    }

    private _updatePosition(anim: AnimationComponent) {
        if (!anim.view) {
            return;
        }

        const transform = anim.getComponent(TransformComponent)!;
        const targetTransform = anim.view.transform;

        if (transform.flag & TransformComponent.POSITION) {
            targetTransform.localPosition = transform.position;
            transform.flag &= ~TransformComponent.POSITION;
        }

        if (transform.flag & TransformComponent.ROTATION) {
            targetTransform.localRotationEulerY = transform.rotation;
            // const r = new Laya.Vector3(
            //     0,
            //     transform.rotation - targetTransform.localRotationEulerY,
            //     0
            // );
            // targetTransform.rotate(r, true, false);
            transform.flag &= ~TransformComponent.ROTATION;
        }
    }

    private _updateHeroInfoPosition(info: HeroInfoComponent) {
        const animation = info.getComponent(AnimationComponent)!;
        if (!animation.view || !info.view) {
            return;
        }

        const p = Laya.Pool.obtain(Laya.Vector4);
        this.context.camera.worldToViewportPoint(animation.view.transform.position, p);
        // TODO: 高度差值待定
        info.view.pos(p.x - info.view.width / 2, p.y - 170, true);
        Laya.Pool.free(p);
    }

    private _updateSoldierInfoPosition(info: SoliderInfoComponent) {
        const animation = info.getComponent(AnimationComponent)!;
        if (!animation.view || !info.view) {
            return;
        }

        const p = Laya.Pool.obtain(Laya.Vector4);
        this.context.camera.worldToViewportPoint(animation.view.transform.position, p);
        // TODO: 高度差值待定
        info.view.pos(p.x - info.view.width / 2, p.y - 50, true);
        Laya.Pool.free(p);
    }

    private async _loadAnimation(anim: AnimationComponent) {
        if (anim.path) {
            const prefab: Laya.Prefab = await Laya.loader.load(anim.path, Laya.Loader.HIERARCHY);
            anim.view = prefab.create() as Laya.Sprite3D;
            anim.animator = anim.view.getChildByName("anim").getComponent(Laya.Animator);
            (anim.animator.owner as Laya.Sprite3D).transform.localRotationEulerY = 90;
            this.context.scene3D.addChild(anim.view);
        }
    }

    private async _loadHeroInfo(info: HeroInfoComponent) {
        const hero = info.getComponent(HeroComponent)!;
        const owner = info.getComponent(OwnerComponent)!;
        const prefab: Laya.Prefab = await Laya.loader.load(info.path, Laya.Loader.HIERARCHY);
        info.view = prefab.create() as HeroInfoUI;
        this.context.owner.troops.addChild(info.view);
        info.view.heroName.text = owner.name;
        info.view.setHpStyle(info.hpStyle);
        info.view.updateHp(hero.hp / hero.maxHp);
    }

    private async _loadSoiderInfo(info: SoliderInfoComponent) {
        const soldier = info.getComponent(HeroComponent)!;
        const owner = info.getComponent(OwnerComponent)!;
        const prefab: Laya.Prefab = await Laya.loader.load(info.path, Laya.Loader.HIERARCHY);
        info.view = prefab.create() as SoldierInfoUI;
        this.context.owner.troops.addChild(info.view);
        info.view.setHpStyle(info.hpStyle);
        // info.view.updateHp(soldier.hp / soldier.maxHp);
    }
}
