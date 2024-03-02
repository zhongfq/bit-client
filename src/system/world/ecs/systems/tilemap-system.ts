import { ecs } from "../../../../core/ecs";
import { StringUtil } from "../../../../core/utils/string-util";
import { WorldContext } from "../../world-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";
import { Tilemap, TilemapComponent } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {

    private _world!: Tilemap.World;

    private static readonly TICK = 200;
    private _lastTime: number = 0;

    private _lastRect: Laya.Rectangle = Laya.Rectangle.create();
    private _curRect: Laya.Rectangle = Laya.Rectangle.create();

    private _addArr: string[] = [];
    private _delArr: string[] = [];

    private _totalMap: Map<string, Map<string, Tilemap.Element>> = new Map();

    constructor(readonly context: WorldContext) {
        super();
        this._init();
    }

    private async _init() {
        if (!this._world) {
            this._world = await Laya.loader.fetch("resources/data/world-map/world.json", "json") as Tilemap.World;
            this._world.maps.forEach(info => {
                [info.x, info.y] = this._transMapPos(info);
                [info.width, info.height] = [TilemapComponent.MAP_WIDTH, TilemapComponent.MAP_HEIGHT];

                console.log(info.fileName, info.x, info.y);
            });
        }
    }

    private _transMapPos(info: Tilemap.MapInfo) {
        const scale = Math.sqrt((TilemapComponent.TILE_HEIGHT * 2) ** 2 / 2);

        const mat = new Laya.Matrix3x3();
        mat.translate(new Laya.Vector2((TilemapComponent.MAP_HEIGHT * TilemapComponent.TILE_WIDTH) / 2, 0), mat);
        mat.scale(new Laya.Vector2(1, 0.5), mat);
        mat.rotate(Math.PI / 4, mat);
        mat.scale(new Laya.Vector2(scale, scale), mat);

        const invertMat = new Laya.Matrix3x3();
        mat.invert(invertMat);

        const pos = new Laya.Vector2(info.x + info.width / 2, info.y);
        Laya.Vector2.transformCoordinate(pos, invertMat, pos);
        return [pos.x, pos.y];
    }

    private async _initGround(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

        const atlas: Laya.AtlasResource = await Laya.loader.load("resources/texture/world-map/ground/ground.atlas", Laya.Loader.ATLAS);
        const texture: Laya.Texture2D = await Laya.loader.load("resources/texture/world-map/ground/ground.png", Laya.Loader.TEXTURE2D);
        const prefab: Laya.Prefab = await Laya.loader.load("resources/prefab/world-map/ground/ground-tile.lh", Laya.Loader.HIERARCHY);

        for (let i = 0; i < layer.data.length; i++) {
            const gid = layer.data[i];
            const tile = prefab.create() as Laya.Sprite3D;

            const pos = tile.transform.position;
            pos.x = i % worldMap.width;
            pos.y = 0;
            pos.z = Math.floor(i / worldMap.width);
            tile.transform.position = pos;

            const mat = new Laya.BlinnPhongMaterial(); // 使用 UnlitMaterial 时 tilingOffset 会失效
            const path = atlas.frames[gid - 1].url;
            const tex = Laya.loader.getRes(path) as Laya.Texture;
            mat.albedoTexture = texture;
            mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
            mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
            mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
            mat.tilingOffset.w = (1 - mat.tilingOffset.y) - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）

            const renderer = tile.getChildAt(0).getComponent(Laya.MeshRenderer);
            renderer.material = mat;

            this.context.scene3D.addChild(tile);
        }
    }

    private async _initStatic(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

        const prefab: Laya.Prefab = await Laya.loader.load("resources/prefab/world-map/static/static-obj.lh", Laya.Loader.HIERARCHY);

        for (let i = 0; i < layer.data.length; i++) {
            const gid = layer.data[i];
            if (!gid) {
                continue;
            }
            const cfg = TilemapComponent.STATIC_CFG_MAP.get(gid);
            if (!cfg) {
                continue;
            }
            const staticObj = prefab.create() as Laya.Sprite3D;

            const pos = staticObj.transform.position;
            pos.x = i % worldMap.width;
            pos.y = cfg.offsetY * TilemapComponent.STATIC_SCALE;
            pos.z = Math.floor(i / worldMap.width);
            staticObj.transform.position = pos;

            const renderer = staticObj.getChildAt(0).getComponent(Laya.MeshRenderer);
            const mat = new Laya.UnlitMaterial();
            const path = StringUtil.format("resources/texture/world-map/static/{0}.png", cfg.resName);
            const texture = await Laya.loader.load(path, Laya.Loader.TEXTURE2D) as Laya.Texture2D;
            mat.albedoTexture = texture;
            mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
            renderer.material = mat;

            const scaleX = (texture.width / TilemapComponent.STATIC_BASE_WIDTH) * TilemapComponent.STATIC_SCALE;
            const scaleZ = (texture.height / TilemapComponent.STATIC_BASE_HEIGHT) * TilemapComponent.STATIC_SCALE;
            staticObj.transform.localScaleX = scaleX;
            staticObj.transform.localScaleZ = scaleZ;

            const rotateX = this.context.camera.transform.localRotationEulerX;
            staticObj.transform.localRotationEulerX = -rotateX;

            this.context.scene3D.addChild(staticObj);
        }
    }

    update(dt: number): void {
        const curTime = Laya.timer.currTimer;
        if (curTime - this._lastTime < TilemapSystem.TICK) {
            return;
        }
        this._lastTime = curTime;

        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
        const transform = this.ecs.getComponent(camera.focus as number, TransformComponent)!;
        const curX = Math.floor(transform.position.x - TilemapComponent.VISION_WIDTH / 2);
        const curY = Math.floor(transform.position.z - TilemapComponent.VISION_HEIGHT / 2);
        this._curRect.setTo(curX, curY, TilemapComponent.VISION_WIDTH, TilemapComponent.VISION_HEIGHT);

        if (this._curRect.equals(this._lastRect)) {
            return;
        }

        this._addArr = [];
        this._delArr = [];

        if (!this._lastRect.isEmpty()) {
            for (let x = curX; x < curX + this._curRect.width; x++) {
                for (let y = curY; y < curY + this._curRect.height; y++) {
                    if (!this._lastRect.contains(x, y)) {
                        this._addArr.push(TilemapComponent.XY_TO_KEY(x, y));
                    }
                }
            }
            const [lastX, lastY] = [this._lastRect.x, this._lastRect.y];
            for (let x = lastX; x < lastX + this._lastRect.width; x++) {
                for (let y = lastY; y < lastY + this._lastRect.height; y++) {
                    if (!this._curRect.contains(x, y)) {
                        this._delArr.push(TilemapComponent.XY_TO_KEY(x, y));
                    }
                }
            }
        } else {
            for (let x = curX; x < curX + this._curRect.width; x++) {
                for (let y = curY; y < curY + this._curRect.height; y++) {
                    this._addArr.push(TilemapComponent.XY_TO_KEY(x, y));
                }
            }
        }
        this._lastRect.copyFrom(this._curRect);

        for (let i = 0; i < this._addArr.length; i++) {
            const key = this._addArr[i];
            this._tryAdd(key);
        }

        for (let i = 0; i < this._delArr.length; i++) {
            const key = this._delArr[i];
            this._tryDel(key);
        }
    }

    private _tryAdd(key: string) {
        const [x, y] = TilemapComponent.KEY_TO_XY(key);

        let elements = this._totalMap.get(key);
        if (!elements) {
            elements = new Map();
            this._totalMap.set(key, elements);
        }

        this._world.maps.forEach(async (info: Tilemap.MapInfo) => {

            if (info.x <= x && x < info.x + info.width &&
                info.y <= y && y < info.y + info.height) {

                if (!info.worldMap) {
                    const realFileName = info.fileName.split('/').at(-1)?.replace('.tmx', '.json');
                    info.worldMap = await Laya.loader.fetch("resources/data/world-map/" + realFileName, "json") as Tilemap.WorldMap;
                }

                const idx = (y - info.y) * info.width + (x - info.x);
                info.worldMap.layers.forEach(layer => {
                    if (!layer.data) {
                        return;
                    }
                    const gid = layer.data[idx];

                    let element: Tilemap.Element | undefined = undefined;
                    switch (layer.name) {
                        case Tilemap.LayerName.Ground:
                            element = Tilemap.Element.create("Tilemap.GroundElement", Tilemap.GroundElement);
                            break;
                        case Tilemap.LayerName.Static:
                            element = Tilemap.Element.create('Tilemap.StaticElement', Tilemap.StaticElement);
                            break;
                        default:
                            break;
                    }
                    if (element) {
                        element.init(x, y, gid);
                        element.draw(this.context);
                        elements?.set(layer.name, element);
                    }
                })
            }
        })
    }

    private _tryDel(key: string) {
        const elements = this._totalMap.get(key);
        if (elements) {
            elements.forEach((element) => {
                element.recover();
            })
            elements.clear();
        }
        this._totalMap.delete(key);
    }
}