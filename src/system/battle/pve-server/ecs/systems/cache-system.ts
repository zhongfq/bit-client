import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { ElementComponent } from "../components/element-component";

export class CacheData {
    public element!: ElementComponent;
    public reliveTime: number | undefined;
    public outVision: boolean | undefined;
}

export class CacheSystem extends ecs.System {
    public declare context: PveServer;

    public getCache(key: string): CacheData | undefined {
        return this._cacheMap.get(key);
    }

    public canRelive(key: string): boolean | undefined {
        const data = this.getCache(key);
        if (!data || data.reliveTime === undefined) {
            return undefined;
        }
        return data.reliveTime <= Laya.timer.currTimer;
    }

    public setReliveTime(element: ElementComponent, reliveTime: number | undefined) {
        let data = this.getCache(element.key);
        data = data ?? this._tryAdd(element);
        data.reliveTime = reliveTime;
        this._tryDel(data);
    }

    public isOutVision(key: string): boolean | undefined {
        const data = this.getCache(key);
        if (!data || data.outVision === undefined) {
            return undefined;
        }
        return data.outVision === true;
    }

    public setOutVision(element: ElementComponent, outVision: boolean | undefined) {
        let data = this.getCache(element.key);
        data = data ?? this._tryAdd(element);
        data.outVision = outVision;
        this._tryDel(data);
    }

    public override update(dt: number): void {
        this._cacheMap.forEach((data) => {
            const key = data.element.key;
            if (this.canRelive(key) === true) {
                data.element.hp = data.element.maxHp;
                this.context.relive(data.element);
                this.setReliveTime(data.element, undefined);
            }
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    private _cacheMap: Map<string, CacheData> = new Map();

    private _tryAdd(element: ElementComponent): CacheData {
        let data = this._cacheMap.get(element.key);
        if (data) {
            return data;
        }
        data = new CacheData();
        data.element = element;
        this._cacheMap.set(element.key, data);
        return data;
    }

    private _tryDel(data: CacheData) {
        if (data.reliveTime === undefined && data.outVision === undefined) {
            const key = data.element.key;
            this._cacheMap.delete(key);
        }
    }
}
