import { ecs } from "../../../../core/ecs";
import { StringUtil } from "../../../../core/utils/string-util";
import { WorldContext } from "../../world-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";
import { Tilemap, TilemapComponent } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {

    private static readonly TICK = 200;
    private _lastTime: number = 0;

    private _hasInit: boolean = false;

    private _world!: Tilemap.World;

    private _atlasMap: Map<Tilemap.AtlasName, Tilemap.TileSet> = new Map();
    private _textureMap: Map<Tilemap.TextureName, Map<number, Tilemap.Tile>> = new Map();

    private _lastRect: Laya.Rectangle = Laya.Rectangle.create();
    private _curRect: Laya.Rectangle = Laya.Rectangle.create();

    private _addArr: string[] = [];
    private _delArr: string[] = [];

    private _totalMap: Map<string, Map<Tilemap.LayerName, Tilemap.Element>> = new Map();

    constructor(readonly context: WorldContext) {
        super();
        this._init();
    }

    private async _init() {
        if (this._hasInit) {
            return
        }
        this._hasInit = true;

        this._world = await Laya.loader.fetch("resources/data/world-map/world.json", "json") as Tilemap.World;
        this._world.maps.forEach(info => {
            [info.x, info.y] = this._transMapPos(info);
            [info.width, info.height] = [TilemapComponent.MAP_WIDTH, TilemapComponent.MAP_HEIGHT];
        });

        const tilesetRef = await Laya.loader.fetch("resources/data/world-map/world-tileset-ref.json", "json") as Tilemap.WorldMap;
        tilesetRef.tilesets.forEach(tileset => {
            if (tileset.tiles?.length > 0) {
                const map = new Map<number, Tilemap.Tile>()
                tileset.tiles.forEach(tile => {
                    map.set(tileset.firstgid + tile.id, tile);
                })
                this._textureMap.set(tileset.name as Tilemap.TextureName, map);
            } else {
                this._atlasMap.set(tileset.name as Tilemap.AtlasName, tileset);
            }
        })
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

    public getAtlasFrameIdx(atlasName: Tilemap.AtlasName, gid: number): number {
        const tileset = this._atlasMap.get(atlasName);
        return gid - (tileset?.firstgid || 1);
    }

    public getTextureResName(textureName: Tilemap.TextureName, gid: number): string {
        const map = this._textureMap.get(textureName);
        const tile = map?.get(gid);
        return tile?.image.split('/').at(-1)?.split('.').at(0) || "";
    }

    public getTextureOffsetY(textureName: Tilemap.TextureName, gid: number): number {
        const map = this._textureMap.get(textureName);
        const tile = map?.get(gid);
        let offsetY = 0;
        tile?.properties?.forEach(prop => {
            if (prop.name == "offsetY") { offsetY = prop.value; return; }
        })
        return offsetY;
    }

    public update(dt: number): void {
        const curTime = Laya.timer.currTimer;
        if (curTime - this._lastTime < TilemapSystem.TICK) {
            return;
        }
        this._lastTime = curTime;

        const camera = this.ecs.getSingletonComponent(CameraComponent)!;
        const transform = this.ecs.getComponent(camera?.focus as number, TransformComponent)!;
        if (!transform?.position) {
            return;
        }
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
                    if (!gid || gid == 0) {
                        return;
                    }
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
                        element.init(this, x, y, gid);
                        element.draw();
                        elements?.set(layer.name as Tilemap.LayerName, element);
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