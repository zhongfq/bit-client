import * as ecs from "../../../../../core/ecs";
import { PveContext } from "../../pve-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";

export class CameraSystem extends ecs.System {
    public declare context: PveContext;

    private _ray: Laya.Ray = new Laya.Ray(new Laya.Vector3(), new Laya.Vector3());
    private _rayMat: Laya.Matrix4x4 = new Laya.Matrix4x4();

    public update(dt: number): void {
        const camera = this.ecs.getSingletonComponent(CameraComponent)!;

        if (this.context.focusRole) {
            const transform = this.ecs.getComponent(this.context.focusRole, TransformComponent);
            if (transform) {
                camera.focus.cloneFrom(transform.position);
            }
        }

        const cameraTransform = this.context.camera.transform;
        const ray = this._ray;
        const rayMat = this._rayMat;
        cameraTransform.position.cloneTo(ray.origin);
        ray.direction.set(0, 0, -1);
        Laya.Matrix4x4.createRotationQuaternion(cameraTransform.rotation, rayMat);
        Laya.Vector3.transformCoordinate(ray.direction, rayMat, ray.direction);
        ray.direction.normalize();

        // 光从相机原点出发到地面所需时间
        const t = -ray.origin.y / ray.direction.y;
        ray.direction.scale(t, ray.direction);
        ray.origin.vadd(ray.direction, ray.origin);
        camera.focus.vsub(ray.origin, ray.origin);
        ray.origin.y = 0;
        ray.origin.vadd(cameraTransform.position, ray.origin);
        cameraTransform.position = ray.origin;
    }
}
