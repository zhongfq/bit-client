import { ecs } from "../../../../core/ecs";

export class Timer extends ecs.SingletonComponent {
    local: number = 0;
    server: number = 0;
    scale: number = 1;

    steps: number[] = [];
}
