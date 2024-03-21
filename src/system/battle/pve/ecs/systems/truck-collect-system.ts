import * as ecs from "../../../../../core/ecs";
import { BattleConf } from "../../../../../def/battle";
import { TruckFormation } from "../../../pve-server/pve-defs";
import { PveContext } from "../../pve-context";
import { ElementComponent, TruckComponent } from "../components/element-component";
import { TruckCollectComponent } from "../components/truck-collect-component";

export class TruckCollectSystem extends ecs.System {
    public declare context: PveContext;

    public override update(dt: number): void {
        this.ecs.getComponents(TruckCollectComponent).forEach((component) => {
            const data = component.flyingCollect;
            if (!data) {
                return;
            }
            if (data.obj.destroyed || data.parent.destroyed) {
                this.ecs.removeEntity(component.eid);
                return;
            }
            const objPos = data.obj.transform.localPosition;
            const totalDis = Laya.Vector3.distance(objPos, data.targetPos);
            const gapDis = data.speed * dt;

            if (gapDis < totalDis) {
                Laya.Vector3.lerp(objPos, data.targetPos, gapDis / totalDis, objPos);
                data.obj.transform.localPosition = objPos;
                data.speed += 0.2;
            } else {
                const finalPos = data.finalPos;
                data.obj.transform.localPosition = finalPos;
                data.obj.transform.localRotationEuler = Laya.Vector3.ZERO;
                data.obj.transform.localScale = Laya.Vector3.ONE;
                data.obj.removeSelf();
                data.parent.addChild(data.obj);

                this.ecs.removeEntity(component.eid);
            }
        });
    }

    public override onAddComponent(component: ecs.Component): void {
        if (component instanceof TruckCollectComponent) {
            this.addCollectObj(component);
        }
    }

    public override onRemoveComponent(component: ecs.Component): void {
        if (component instanceof TruckCollectComponent) {
            // component.data = undefined!;
        }
    }

    public async addCollectObj(component: TruckCollectComponent) {
        const truck = this.ecs.getComponent(component.truck, ElementComponent);
        if (!truck) {
            return;
        }
        const truckComp = truck.getComponent(TruckComponent);
        if (!truckComp) {
            return;
        }
        const view = truck.animation.view;
        const pointParent = view?.getChildByName("point") as Laya.Sprite3D;
        if (!pointParent) {
            return;
        }
        const gatherParent = view?.getChildByPath("anim/gather") as Laya.Sprite3D;
        if (!gatherParent) {
            return;
        }

        let path!: string;
        let formation!: Laya.Vector3[];
        if (truckComp.collectType == BattleConf.ENTITY_TYPE.WOOD) {
            [path, formation] = ["anim/gather-wood", TruckFormation.WOOD];
        } else if (truckComp.collectType == BattleConf.ENTITY_TYPE.FOOD) {
            [path, formation] = ["anim/gather-food", TruckFormation.FOOD];
        } else if (truckComp.collectType == BattleConf.ENTITY_TYPE.STONE) {
            [path, formation] = ["anim/gather-stone", TruckFormation.STONE];
        }
        if (!path || !formation) {
            return;
        }

        const obj = (view?.getChildByPath(path) as Laya.Sprite3D).clone()!;
        obj.active = true;
        obj.transform.localRotationEulerY = Math.random() * 360;
        obj.transform.localScale = new Laya.Vector3(0.25, 0.25, 0.25);
        this.context.scene3D.addChild(obj);

        const idx = truckComp.collectObjs.length;
        truckComp.collectObjs.push(obj);

        const collection = this.ecs.getComponent(component.data.collection, ElementComponent);
        const startPos = collection!.transform.position.clone();
        startPos.y = 1; // TODO：不同采集物配置不同高度
        obj.transform.position = startPos;

        const targetPos = new Laya.Vector3(0, 0.2, 0);
        const finalPos = formation[idx % formation.length].clone();
        const offsetY = Math.floor(idx / formation.length) * 0.35;
        finalPos.y += offsetY; // 计算采集物每一层的偏移高度

        obj.name = idx + "_" + finalPos.x + "_" + finalPos.y + "_" + finalPos.z;

        const radius = Math.random() + 0.5;
        const rad = Math.random() * Math.PI * 2;
        Laya.Tween.to(
            obj.transform,
            {
                localPositionX: startPos.x + radius * Math.sin(rad),
                localPositionZ: startPos.z + radius * Math.cos(rad),
                localRotationEulerY: obj.transform.localRotationEulerY + 90,
            },
            500,
            Laya.Ease.cubicOut,
            Laya.Handler.create(component, () => {
                if (obj.destroyed || pointParent.destroyed) {
                    return;
                }
                const localPos = new Laya.Vector3();
                pointParent.transform.globalToLocal(obj.transform.position, localPos);
                obj.transform.localPosition = localPos;
                obj.removeSelf();
                pointParent.addChild(obj);

                component.flyingCollect = {
                    idx: idx,
                    obj: obj,
                    parent: gatherParent,
                    targetPos: targetPos,
                    finalPos: finalPos,
                    speed: 1,
                };
            })
        );
    }

    public delCollectObj(eid: number) {
        const truck = this.ecs.getComponent(eid, ElementComponent);
        if (!truck) {
            return;
        }
        const truckComp = truck.getComponent(TruckComponent);
        if (!truckComp) {
            return;
        }
        let obj = truckComp.collectObjs.pop();
        if (obj) {
            obj.removeSelf();
            obj = undefined;
        }
    }
}
