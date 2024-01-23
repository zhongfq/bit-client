import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import { MovementComponent, PositionComponent } from "../components/movement-component";
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

    onRemoveComponent(component: ecs.Component): void {}

    update(dt: number): void {
        this.ecs.getComponents(AnimationComponent).forEach((anim) => {
            this._updatePosition(anim);
        });
    }

    private _updatePosition(anim: AnimationComponent) {
        const position = anim.getComponent(PositionComponent)!;
        if (anim.view) {
            const p = anim.view.transform.position;
            p.x = position.x;
            p.z = position.z;
        }
    }

    private async _loadAnimation(anim: AnimationComponent) {
        if (anim.path) {
            const prefab: Laya.Prefab = await Laya.loader.load(anim.path, Laya.Loader.HIERARCHY);
            anim.view = prefab.create() as Laya.Sprite3D;
            anim.view.transform.position = new Laya.Vector3(0, 0, 1);
            this.context.scene3D.addChild(anim.view);
        }
    }
}
