import * as ecs from "../../../../../core/ecs";
import { UpdateTruck } from "../../../pve-server/pve-defs";

interface FlyingCollect {
    idx: number;
    obj: Laya.Sprite3D;
    pointParent: Laya.Sprite3D;
    gatherParent: Laya.Sprite3D;
    finalPos: Laya.Vector3;
    speed: number;
}

export class TruckCollectComponent extends ecs.Component {
    public truck!: number;
    public data!: UpdateTruck;
    public flyingCollect?: FlyingCollect;
}
