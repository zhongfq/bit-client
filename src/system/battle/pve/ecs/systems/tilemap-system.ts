import { ecs } from "../../../../../core/ecs";
import { PveContext } from "../../pve-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";
import { TilemapComponent } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {
    private static readonly TICK = 100;

    private _lastTick = 0;

    public constructor(public readonly context: PveContext) {
        super();
    }

    public override onCreate() {
        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        tilemap.onCreate();
    }

    public override update(dt: number) {
        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        const curr = Laya.timer.currTimer;
        if (tilemap.isReady && curr - this._lastTick >= TilemapSystem.TICK) {
            this._lastTick = curr;
            const camera = this.ecs.getSingletonComponent(CameraComponent)!;
            if (camera.focus) {
                const transform = this.ecs.getComponent(camera.focus, TransformComponent)!;
                tilemap.update(transform.position);
            }
        }
    }
}
