// import { GameStateRunning } from "../../gamestate/state/GameStateRunning";
import { VO } from "./vo";

/**
* VOBag 

VO封装了缓存cmd跟配置表ref，原则上每个缓存cmd都必须封装成VO使用
每个VO由VO与VOBag组成，VOBag管理了所有的VO对象。VOBag封装了VO的读取，过滤，排序，监听，非常方便使用

*/
export type BagEventType = "OnChanged" | "OnRemove" | "OnAdd" | "OnUpdate";

export abstract class VoBag<T extends VO<any, any>> {
    protected bag = new Map<string | number, T>();

    protected onDestroy(): void {}

    public abstract Hash(t: T): string | number;

    /**
     * 获取Map
     */
    public getBag(): Map<string | number, T> {
        const t: string[] = [];
        return this.bag;
    }

    public toArray() {
        const ret: Array<T> = [];
        for (const [_, v] of this.bag) {
            ret.push(v);
        }
        return ret;
    }

    /**
     * 以列表的形式获取背包
     */
    public filter(predicate: (value: T, key: string | number) => boolean): Array<T> {
        const ret: Array<T> = [];
        for (const [k, v] of this.bag) {
            if (predicate && !predicate(v, k)) continue;
            ret.push(v);
        }
        return ret;
    }

    public find(predicate: (value: T, key: string | number) => boolean) {
        for (const [k, v] of this.bag) {
            if (predicate(v, k)) {
                return v;
            }
        }
    }

    /**
     * 获取一个Goods
     * @param key
     */

    public get(key: string | number) {
        return this.bag.get(key);
    }

    /**
     * 获取第一个
     */
    public getOne(): T | undefined {
        if (this.bag.size > 0) {
            const iter = this.bag.entries();
            const [k, v] = iter.next().value;
            return v as T;
        }
        return undefined;
    }

    /**
     * 新增一个Goods
     */
    protected add(t: T) {
        const k = this.Hash(t);
        this.bag.set(k, t);
    }

    /**
     * 删除一个Goods
     * @param k
     */
    protected remove(key: string | number) {
        const t = this.get(key);
        this.bag.delete(key);
    }

    /**
     *更新vo
     * @param t
     * @param tmFieldChanged
     */
    protected update(t: T) {
        this.onUpdate(t);
    }

    public onAdd(t: T) {
        this.bag.set(t.id, t);
    }

    public onUpdate(t: T) {
        this.bag.set(t.id, t);
    }

    public onRemove(key: string | number) {
        this.bag.delete(key);
    }
    // protected abstract GetCacheName(): EnumProtoName | MessageProtoName

    //#endregion
}
