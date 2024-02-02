import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import { MovementComponent, TransformComponent } from "../components/movement-component";
import { AnimationComponent } from "../components/render-component";

export class RenderSystem extends ecs.System {
    constructor(readonly context: WorldContext) {
        super();
    }

    onAddComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            this._loadAnimation(component);
        }
    }

    onRemoveComponent(component: ecs.Component): void {
        if (component instanceof AnimationComponent) {
            component.view?.destroy(true);
            component.view = null;
            component.animator = null;
        }
    }

    update(dt: number): void {
        this.ecs.getComponents(AnimationComponent).forEach((anim) => {
            this._updatePosition(anim);
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

    private async _loadAnimation(anim: AnimationComponent) {
        if (anim.path) {
            const prefab: Laya.Prefab = await Laya.loader.load(anim.path, Laya.Loader.HIERARCHY);
            anim.view = prefab.create() as Laya.Sprite3D;
            anim.animator = anim.view.getChildByName("anim").getComponent(Laya.Animator);
            (anim.animator.owner as Laya.Sprite3D).transform.localRotationEulerY = 90;
            this.context.scene3D.addChild(anim.view);
        }
    }
}
