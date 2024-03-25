import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { CacheComponent } from "../components/cache-component";

export class CacheSystem extends ecs.System {
    private static readonly TICK = 0.2;

    public declare context: PveServer;

    private _lastTick: number = 0;

    public override update(dt: number): void {
        const time = this.context.time;
        if (time - this._lastTick > CacheSystem.TICK) {
            this._lastTick = time;
            const cache = this.ecs.getSingletonComponent(CacheComponent)!;
            cache.forEach((entry) => {
                if (!entry.outVision && entry.reliveTime < time) {
                    if (entry.data.hp <= 0) {
                        entry.data.hp = entry.data.maxHp;
                    }
                    this.context.relive(entry);
                    cache.delete(entry.data.key);
                }
            });
        }
    }
}
