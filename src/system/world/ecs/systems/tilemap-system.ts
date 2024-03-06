import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import { CameraComponent } from "../components/camera-component";
import { TransformComponent } from "../components/movement-component";
import { Tilemap, TilemapComponent } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {

    /**
     * 获取地图根节点
     * @returns 根节点
     */
    public getRoot(): Laya.Sprite3D {
        return this._root;
    }

    /**
     * 添加动态元素
     * @param eid 实体ID
     * @param x X坐标
     * @param y Y坐标
     * @returns 动态元素的唯一ID
     */
    public addDynamicElement(eid: number, x: number, y: number): number {
        const uids: number[] = [];
        this._tryAdd(x, y, Tilemap.LayerName.Dynamic, eid, uids);
        return uids[0];
    }

    /**
     * 跟据唯一ID删除动态元素
     * @param uid 唯一ID
     */
    public delDynamicElementByUid(uid: number): void {
        const element = this._allMap.get(uid);
        if (element) {
            this._tryDel(element.x, element.y, Tilemap.LayerName.Dynamic);
        }
    }

    /**
     * 根据实体ID删除动态元素
     * @param eid 实体ID
     */
    public delDynamicElementByEid(eid: number): void {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == Tilemap.LayerName.Dynamic) {
                this._tryDel(element.x, element.y, Tilemap.LayerName.Dynamic);
                return;
            }
        }
    }

    /**
     * 根据唯一ID获取动态元素
     * @param uid 唯一ID
     * @returns 动态元素对象
     */
    public getDynamicElementByUid(uid: number): Tilemap.DynamicElement | undefined {
        const element = this._allMap.get(uid);
        if (element?.layerName == Tilemap.LayerName.Dynamic) {
            return element as Tilemap.DynamicElement;
        }
        return undefined;
    }

    /**
     * 根据实体ID获取动态元素
     * @param eid 实体ID
     * @returns 动态元素对象
     */
    public getDynamicElementByEid(eid: number): Tilemap.DynamicElement | undefined {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == Tilemap.LayerName.Dynamic) {
                return element as Tilemap.DynamicElement;
            }
        }
        return undefined;
    }

    /**
     * 添加元素
     * @param x X坐标
     * @param y Y坐标
     * @param layerName 层级名称
     * @returns 元素的唯一ID
     */
    public addElement(x: number, y: number, layerName: Tilemap.LayerName): number {
        const uids: number[] = [];
        this._tryAdd(x, y, layerName, undefined, uids);
        return uids[0];
    }

    /**
     * 跟据唯一ID删除元素
     * @param uid 唯一ID
     */
    public delElementByUid(uid: number): void {
        const element = this._allMap.get(uid);
        if (element) {
            this._tryDel(element.x, element.y, element.layerName as Tilemap.LayerName);
        }
    }

    /**
     * 根据唯一ID获取元素
     * @param uid 唯一ID
     * @returns 元素对象
     */
    public getElementByUid(uid: number): Tilemap.Element | undefined {
        return this._allMap.get(uid);
    }

    /**
     * 根据坐标获取元素
     * @param x X坐标
     * @param y Y坐标
     * @param layerName 层级名称
     * @returns 元素对象
     */
    public getElementByPos(x: number, y: number, layerName: Tilemap.LayerName): Tilemap.Element | undefined {
        const uidMap = this._posMap.get(layerName);
        if (uidMap) {
            if (layerName == Tilemap.LayerName.Static || layerName == Tilemap.LayerName.Dynamic) {
                for (const uid of uidMap.values()) {
                    const element = this._allMap.get(uid) as Tilemap.ObjElement;
                    if (element && TilemapComponent.IN_RECT(x, y, element.realX, element.realY, element.width, element.height)) {
                        return element;
                    }
                }
            } else {
                const uid = uidMap.get(TilemapComponent.XY_TO_KEY(x, y)) || 0;
                const element = this._allMap.get(uid);
                return element;
            }
        }
        return undefined;
    }

    /**
     * 根据矩形范围获取元素列表
     * @param x X坐标
     * @param y Y坐标
     * @param width 矩形宽度
     * @param height 矩形高度
     * @param layerName 层级名称
     * @returns 元素对象列表
     */
    public getElementsByRect(x: number, y: number, width: number, height: number, layerName: Tilemap.LayerName): Tilemap.Element[] {
        const elements: Tilemap.Element[] = [];
        for (let $x = x; $x < x + width; $x++) {
            for (let $y = y; $y < y + height; $y++) {
                const element = this.getElementByPos($x, $y, layerName);
                if (element) {
                    elements.push(element);
                }
            }
        }
        return elements;
    }

    /**
     * 根据层级名称获取元素列表
     * @param layerName 层级名称
     * @returns 元素对象列表
     */
    public getElementsByLayer(layerName: Tilemap.LayerName): Tilemap.Element[] {
        const elements: Tilemap.Element[] = [];
        const uidMap = this._posMap.get(layerName);
        if (uidMap) {
            for (const uid of uidMap.values()) {
                const element = this._allMap.get(uid);
                if (element) {
                    elements.push(element);
                }
            }
        }
        return elements;
    }

    /**
     * 指定位置是否阻挡块
     * @param x X坐标
     * @param y Y坐标
     */
    public isBlock(x: number, y: number): boolean {
        const uidMap = this._posMap.get(Tilemap.LayerName.Block);
        const uid = uidMap?.get(TilemapComponent.XY_TO_KEY(x, y));
        return Boolean(uid);
    }

    /**
     * 根据GID获取图集序列帧的序号
     * @param atlasName 图集名称
     * @param gid 资源ID
     * @returns 
     */
    public getAtlasFrameIdx(atlasName: Tilemap.AtlasName, gid: number): number {
        const tileset = this._atlasMap.get(atlasName);
        return gid - (tileset?.firstgid || 1);
    }

    /**
     * 根据GID获取纹理资源名称
     * @param textureName 纹理名称
     * @param gid 资源ID
     * @returns 
     */
    public getTextureResName(textureName: Tilemap.TextureName, gid: number): string {
        const map = this._textureMap.get(textureName);
        const tile = map?.get(gid);
        return tile?.image.split('/').at(-1)?.split('.').at(0) || "";
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    private static readonly TICK = 200;
    private _lastTime: number = 0;

    private _root!: Laya.Sprite3D;
    private _world: Tilemap.World | undefined;

    private _atlasMap: Map<Tilemap.AtlasName, Tilemap.TileSet> = new Map();
    private _textureMap: Map<Tilemap.TextureName, Map<number, Tilemap.Tile>> = new Map();

    private _lastRect: Laya.Rectangle = Laya.Rectangle.create();
    private _curRect: Laya.Rectangle = Laya.Rectangle.create();

    private _addArr: number[][] = [];
    private _delArr: number[][] = [];

    private _allMap: Map<number, Tilemap.Element> = new Map();
    private _posMap: Map<Tilemap.LayerName, Map<string, number>> = new Map();

    public showBlocks: Map<string, boolean> = new Map();

    constructor(readonly context: WorldContext) {
        super();
    }

    public override async onCreate() {
        this._root = this.context.scene3D.getChildByName('world-map') as Laya.Sprite3D;

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

    public override onDestroy() {
        this._allMap.forEach(element => {
            element.recover();
        })
        this._world = undefined;
        this._atlasMap.clear();
        this._textureMap.clear();
        this._lastRect.reset();
        this._curRect.reset();
        this._addArr = [];
        this._delArr = [];
        this._allMap.clear();
        this._posMap.clear();
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
                        this._addArr.push([x, y]);
                    }
                }
            }
            const [lastX, lastY] = [this._lastRect.x, this._lastRect.y];
            for (let x = lastX; x < lastX + this._lastRect.width; x++) {
                for (let y = lastY; y < lastY + this._lastRect.height; y++) {
                    if (!this._curRect.contains(x, y)) {
                        this._delArr.push([x, y]);
                    }
                }
            }
        } else {
            for (let x = curX; x < curX + this._curRect.width; x++) {
                for (let y = curY; y < curY + this._curRect.height; y++) {
                    this._addArr.push([x, y]);
                }
            }
        }
        this._lastRect.copyFrom(this._curRect);

        for (let i = 0; i < this._addArr.length; i++) {
            const [x, y] = this._addArr[i];
            this._tryAdd(x, y);
        }

        for (let i = 0; i < this._delArr.length; i++) {
            const [x, y] = this._delArr[i];
            this._tryDel(x, y);
        }
    }

    private async _tryAdd(x: number, y: number, filterLayer?: Tilemap.LayerName, eid?: number, outUids?: number[]) {

        for (let i = 0; i < this._world!.maps.length; i++) {
            const info = this._world!.maps[i];

            const inRect = TilemapComponent.IN_RECT(x, y, info.x, info.y, info.width, info.height);
            if (!inRect) {
                continue;
            }

            if (!info.worldMap) {
                const realFileName = info.fileName.split('/').at(-1)?.replace('.tmx', '.json');
                info.worldMap = await Laya.loader.fetch("resources/data/world-map/" + realFileName, "json") as Tilemap.WorldMap;
            }

            const idx = (y - info.y) * info.width + (x - info.x);

            for (let j = 0; j < info.worldMap.layers.length; j++) {
                const layer = info.worldMap.layers[j];
                if (!layer.data) {
                    continue;
                }
                const layerName = layer.name as Tilemap.LayerName;
                if (filterLayer && layerName != filterLayer) {
                    continue;
                }
                const gid = layer.data[idx];
                if (!gid || gid == 0) {
                    continue;
                }
                const cls = Tilemap.LayerToCls(layerName);
                if (!cls) {
                    continue;
                }
                let uidMap = this._posMap.get(layerName);
                if (!uidMap) {
                    uidMap = new Map();
                    this._posMap.set(layerName, uidMap);
                }
                const key = TilemapComponent.XY_TO_KEY(x, y);
                const uid = uidMap.get(key) || 0;

                let element = this._allMap.get(uid);
                if (!element) {
                    element = Tilemap.Element.create(cls.name, cls);
                    element.init(this, x, y, gid, layerName, eid);

                    uidMap.set(key, element.uid);
                    this._allMap.set(element.uid, element);

                    element.draw();
                }
                outUids?.push(element.uid);
            }
        }
    }

    private _tryDel(x: number, y: number, filterLayer?: Tilemap.LayerName) {
        this._posMap.forEach((uidMap, layerName) => {
            if (filterLayer && layerName != filterLayer) {
                return;
            }
            const key = TilemapComponent.XY_TO_KEY(x, y);
            const uid = uidMap.get(key) || 0;
            const element = this._allMap.get(uid);
            element?.recover();
            uidMap.delete(key);
            this._allMap.delete(uid);
        })
    }
}