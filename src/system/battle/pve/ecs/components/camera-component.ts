import { ecs } from "../../../../../core/ecs";

export class CameraComponent implements ecs.SingletonComponent {
    public focus: number | null = null;

    // eslint-disable-next-line @typescript-eslint/no-shadow
    public constructor(public readonly ecs: ecs.World) {}
}
