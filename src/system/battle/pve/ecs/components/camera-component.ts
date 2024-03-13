import { ecs } from "../../../../../core/ecs";

export class CameraComponent implements ecs.SingletonComponent {
    focus: number | null = null;

    // eslint-disable-next-line @typescript-eslint/no-shadow
    constructor(readonly ecs: ecs.World) {}
}
