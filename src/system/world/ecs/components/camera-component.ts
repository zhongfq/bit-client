import { ecs } from "../../../../core/ecs";

export class CameraComponent extends ecs.SingletonComponent {
    focus: number | null = null;
}
