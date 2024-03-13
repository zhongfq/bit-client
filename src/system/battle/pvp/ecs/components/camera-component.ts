import { ecs } from "../../../../../core/ecs";

export class CameraComponent implements ecs.SingletonComponent {
    focus: Laya.Vector3 = new Laya.Vector3();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    constructor(readonly ecs: ecs.World) {}
}
