import * as ecs from "../../../../../core/ecs";
import { ElementComponent } from "./element-component";

export interface IElementLike {
    key: string;
    hp: number;
    maxHp: number;
}

export class CacheEntry {
    public key: string;
    public hp: number;
    public maxHp: number;

    /**
     * 表示此对象是否处在视野之外
     */
    public outVision: boolean = true;

    /**
     * + 小于0，代表此对象不可复活。
     * + 等于0，表示此前记录的对象未创建。
     * + 大于0，表示些对象记录了复活时间。
     */
    public reliveTime: number = 0;

    public constructor(data: IElementLike) {
        this.key = data.key;
        this.hp = data.hp;
        this.maxHp = data.maxHp;
    }
}

export class CacheComponent extends Map<string, CacheEntry> implements ecs.SingletonComponent {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    public constructor(public readonly ecs: ecs.World) {
        super();
    }

    public create(element: ElementComponent) {
        let cacheEntry = this.get(element.key);
        if (!cacheEntry) {
            cacheEntry = new CacheEntry(element);
            this.set(cacheEntry.key, cacheEntry);
        } else {
            cacheEntry.hp = element.hp;
            cacheEntry.maxHp = element.maxHp;
        }
        return cacheEntry;
    }
}
