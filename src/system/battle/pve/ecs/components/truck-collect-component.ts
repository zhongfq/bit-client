import * as ecs from "../../../../../core/ecs";
import { UpdateTruck } from "../../../pve-server/pve-defs";

interface FlyingCollect {
    idx: number;
    obj: Laya.Sprite3D;
    parent: Laya.Sprite3D;
    targetPos: Laya.Vector3;
    finalPos: Laya.Vector3;
    speed: number;
}

export class TruckCollectComponent extends ecs.Component {
    public truck!: number;
    public data!: UpdateTruck;
    public flyingCollect?: FlyingCollect;
}
