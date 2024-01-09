import { ecs } from "../../../../core/ecs";

export type EntityInfo = {
    x: number;
    y: number;
    z: number;
    size: number;
    color: number;
};

export class Debug extends ecs.SingletonComponent {
    enable: boolean = true;
    infoes: EntityInfo[] = [];
    logs: string[] = [];
}
