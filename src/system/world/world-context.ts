import { app } from "../../app";
import { Callback } from "../../core/dispatcher";
import proto from "../../def/proto";
import { ecs } from "../../core/ecs";
import { Mediator } from "../../core/ui-mediator";
import { AISystem } from "./ecs/systems/ai-system";
import { CommandSystem } from "./ecs/systems/command-system";
import { MovementSystem } from "./ecs/systems/movement-system";
import { RenderSystem } from "./ecs/systems/render-system";
import { CameraComponent } from "./ecs/components/camera-component";
import { CameraSystem } from "./ecs/systems/camera-system";
import { JoystickComponent } from "./ecs/components/joystick-component";
import { JoystickSystem } from "./ecs/systems/joystick-system";
import { WorldUI } from "../../ui-runtime/scene/WorldUI";

type WorldMap = {
    width: number;
    height: number;
    tilewidth: number;
    tileheight: number;
    layers: {
        class: string;
        type: string;
        data: number[];
    }[];
    tilesets: {
        firstgid: number;
        tilecount: number;
        properties: {
            name: string;
            type: string;
            value: number;
        }[];
    }[];
};

@Laya.regClass()
export class WorldContext extends Mediator {
    declare owner: WorldUI;

    private _ecs!: ecs.World;

    troop!: proto.troop.Troop;

    get scene() {
        return this.owner.scene;
    }

    get scene3D(): Laya.Scene3D {
        return this.owner.scene3D;
    }

    onAwake(): void {
        this._ecs = new ecs.World();
        this._ecs.addSingletonComponent(CameraComponent);
        this._ecs.addSingletonComponent(JoystickComponent);
        this._ecs.addSystem(new JoystickSystem(this));
        this._ecs.addSystem(new CommandSystem(this));
        this._ecs.addSystem(new AISystem(this));
        this._ecs.addSystem(new MovementSystem(this));
        this._ecs.addSystem(new CameraSystem(this));
        this._ecs.addSystem(new RenderSystem(this));

        this.loadMap();

        // const mc1 = this.scene3D.getChildByName("mc04") as Laya.Sprite3D;
        // const animator = mc1.getComponent(Laya.Animator);
        // animator.setParamsTrigger("run");

        // this.timer.delay(2, () => {
        //     animator.setParamsTrigger("attack");
        // });
        // this.timer.delay(4, () => animator.setParamsTrigger("idle"));
        // this.timer.delay(6, () => {
        //     animator.setParamsTrigger("run");
        // });
    }

    async onStart() {
        await app.service.gm.requestGM("setup_troop 1 101 1 10");
        await app.service.gm.requestGM("join_world");

        this.troop = (await app.service.world.requestTroopLoad()).troopList[0] as proto.troop.Troop;

        await app.service.world.requestChangeViewport({ x: 0, y: 0 });
    }

    onUpdate(): void {
        super.onUpdate();
        this._ecs.update(Laya.timer.delta / 1000);
    }

    private async loadMap() {
        const arr: Laya.Prefab[] = [
            await Laya.loader.load("resources/prefab/world/Top grass.lh", Laya.Loader.HIERARCHY),
            await Laya.loader.load("resources/prefab/world/Top Ice.lh", Laya.Loader.HIERARCHY),
            await Laya.loader.load("resources/prefab/world/Top lava.lh", Laya.Loader.HIERARCHY),
            await Laya.loader.load("resources/prefab/world/Top pavement.lh", Laya.Loader.HIERARCHY),
        ];
        const map = (await Laya.loader.fetch("resources/data/world-map.json", "json")) as WorldMap;
        map.layers.forEach((layer) => {
            if (!layer.data || layer.class !== "grounds") {
                return;
            }
            for (let i = 0; i < layer.data.length; i++) {
                let idx = -1;
                const gid = layer.data[i];
                for (const ts of map.tilesets) {
                    if (gid >= ts.firstgid && gid < ts.firstgid + ts.tilecount) {
                        idx = ts.properties[0].value + gid - ts.firstgid;
                        break;
                    }
                }
                if (idx < 0) {
                    continue;
                }
                const tile = arr[idx % arr.length].create() as Laya.Sprite3D;
                const position = tile.transform.position;
                position.x = i % map.width;
                position.y = -0.5;
                position.z = Math.floor(i / map.width);
                tile.transform.position = position;
                this.scene3D.addChild(tile);
            }
        });
    }
}
