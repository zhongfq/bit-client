import * as ecs from "../../../../../core/ecs";
import { PvpContext } from "../../pvp-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";
import { TilemapComponent } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {
    private static readonly TICK = 0.1;

    public declare context: PvpContext;

    private _lastTick = 0;

    public override onCreate() {
        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        tilemap.onCreate();
    }

    public override update(dt: number) {
        const tilemap = this.ecs.getSingletonComponent(TilemapComponent)!;
        const time = this.ecs.time;
        if (tilemap.isReady && time - this._lastTick >= TilemapSystem.TICK) {
            this._lastTick = time;
            const camera = this.ecs.getSingletonComponent(CameraComponent)!;
            tilemap.update(camera.focus);
        }
    }
}
