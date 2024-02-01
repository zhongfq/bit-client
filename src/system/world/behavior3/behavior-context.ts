import { MovementComponent } from "../ecs/components/movement-component";

export interface IBehaviorContext {
    startMove(movement: MovementComponent, degree: number, velocity: number): void;
    stopMove(movement: MovementComponent): void;
}
