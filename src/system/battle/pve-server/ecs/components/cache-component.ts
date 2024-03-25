import * as ecs from "../../../../../core/ecs";
import { ElementComponent } from "./element-component";

export interface IElementLike {
    etype: number;
    tid: number;
    key: string;
    hp: number;
    maxHp: number;
    spawnpoint: Laya.Vector3;
}

export class CacheEntry {
    public data: IElementLike;
    public outVision: boolean = false;
    /**
     * 如果对象不需要复活，则可以把复活时间设置为无限大。
     */
    public reliveTime: number = 0;

    public constructor(data: IElementLike) {
        this.data = data;
    }
}

export class CacheComponent extends Map<string, CacheEntry> implements ecs.SingletonComponent {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    public constructor(public readonly ecs: ecs.World) {
        super();
    }

    public create(data: IElementLike) {
        let cacheEntry = this.get(data.key);
        if (!cacheEntry) {
            cacheEntry = new CacheEntry(data);
            this.set(data.key, cacheEntry);
        } else {
            cacheEntry.data = data;
        }
        return cacheEntry;
    }
}
