import { Callback } from "../../core/dispatcher";
import { ecs } from "../../core/ecs";
import { Mediator } from "../../core/ui-mediator";
import { AISystem } from "./ecs/systems/ai-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";

@Laya.regClass()
export class World extends Mediator {
    private _ecs!: ecs.World;

    onAwake(): void {
        this._ecs = new ecs.World();
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new AISystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new RenderSystem(this));
    }

    onUpdate(): void {
        this._ecs.update(Laya.timer.delta / 1000);
    }
}
