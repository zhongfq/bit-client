import {
    ITMContext,
    TMAtlasName,
    TMLayer,
    TMLayerName,
    TMMapInfo,
    TMTextureName,
    TMTile,
    TMTileSet,
    TMWorld,
    TMWorldMap,
} from "./tm-def";
import { TMBoardElement, TMBuildingElement, TMDynamicElement, TMElement } from "./tm-element";
import { TMUtil } from "./tm-util";

export class Tilemap {
    /**
     * 获取地图根节点
     * @returns 根节点
     */
    public getRoot(): Laya.Sprite3D {
        return this._root;
    }

    /**
     *  获取元素映射总表
     */
    public getAllMap(): Map<number, TMElement> {
        return this._allMap;
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
        this._tryAdd(
            x,
            y,
            (layerName: string) => {
                return layerName == TMLayerName.Dynamic;
            },
            eid,
            uids
        );
        return uids[0];
    }

    /**
     * 跟据唯一ID删除动态元素
     * @param uid 唯一ID
     */
    public delDynamicElementByUid(uid: number): void {
        const element = this._allMap.get(uid);
        if (element) {
            this._tryDel(element.x, element.y, (layerName: string) => {
                return layerName == TMLayerName.Dynamic;
            });
        }
    }

    /**
     * 根据实体ID删除动态元素
     * @param eid 实体ID
     */
    public delDynamicElementByEid(eid: number): void {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == TMLayerName.Dynamic) {
                this._tryDel(element.x, element.y, (layerName: string) => {
                    return layerName == TMLayerName.Dynamic;
                });
                return;
            }
        }
    }

    /**
     * 根据唯一ID获取动态元素
     * @param uid 唯一ID
     * @returns 动态元素对象
     */
    public getDynamicElementByUid(uid: number): TMDynamicElement | undefined {
        const element = this._allMap.get(uid);
        if (element?.layerName == TMLayerName.Dynamic) {
            return element as TMDynamicElement;
        }
        return undefined;
    }

    /**
     * 根据实体ID获取动态元素
     * @param eid 实体ID
     * @returns 动态元素对象
     */
    public getDynamicElementByEid(eid: number): TMDynamicElement | undefined {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == TMLayerName.Dynamic) {
                return element as TMDynamicElement;
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
    public addElement(x: number, y: number, layerName: TMLayerName): number {
        const uids: number[] = [];
        this._tryAdd(
            x,
            y,
            ($layerName: string) => {
                return $layerName == layerName;
            },
            undefined,
            uids
        );
        return uids[0];
    }

    /**
     * 跟据唯一ID删除元素
     * @param uid 唯一ID
     */
    public delElementByUid(uid: number): void {
        const element = this._allMap.get(uid);
        if (element) {
            this._tryDel(element.x, element.y, ($layerName: string) => {
                return $layerName == element.layerName;
            });
        }
    }

    /**
     * 根据唯一ID获取元素
     * @param uid 唯一ID
     * @returns 元素对象
     */
    public getElementByUid(uid: number): TMElement | undefined {
        return this._allMap.get(uid);
    }

    /**
     * 根据坐标获取元素
     * @param x X坐标
     * @param y Y坐标
     * @param layerName 层级名称
     * @returns 元素对象
     */
    public getElementByPos(x: number, y: number, layerName: TMLayerName): TMElement | undefined {
        const uidMap = this._posMap.get(layerName);
        if (uidMap) {
            if (layerName == TMLayerName.Static || layerName == TMLayerName.Dynamic) {
                for (const uid of uidMap.values()) {
                    const element = this._allMap.get(uid) as TMBoardElement;
                    if (
                        element &&
                        TMUtil.IN_RECT(
                            x,
                            y,
                            element.startX,
                            element.startY,
                            element.width,
                            element.height
                        )
                    ) {
                        return element;
                    }
                }
            } else {
                const uid = uidMap.get(TMUtil.XY_TO_KEY(x, y)) ?? 0;
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
    public getElementsByRect(
        x: number,
        y: number,
        width: number,
        height: number,
        layerName: TMLayerName
    ): TMElement[] {
        const elements: TMElement[] = [];
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
    public getElementsByLayer(layerName: TMLayerName): TMElement[] {
        const elements: TMElement[] = [];
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
     * 获取动态元素所在区域内的建筑对象列表
     * @param uid 动态元素唯一id
     */
    public dynamicToBuildingElements(uid: number): TMBuildingElement[] {
        const element = this._allMap.get(uid);
        if (element instanceof TMDynamicElement) {
            return this.getElementsByRect(
                element.startX,
                element.startY,
                element.width,
                element.height,
                TMLayerName.Building
            ) as TMBuildingElement[];
        }
        return [];
    }

    /**
     * 获取建筑对象所在位置的动态元素
     * @param uid 建筑对象唯一id
     */
    public buildingToDynamicElemnt(uid: number): TMDynamicElement | undefined {
        const element = this._allMap.get(uid);
        if (element instanceof TMBuildingElement) {
            return this.getElementByPos(
                element.x,
                element.y,
                TMLayerName.Dynamic
            ) as TMDynamicElement;
        }
        return undefined;
    }

    /**
     * 指定位置是否阻挡块
     * @param x X坐标
     * @param y Y坐标
     */
    public isBlock(x: number, y: number): boolean {
        const uidMap = this._posMap.get(TMLayerName.Block);
        const uid = uidMap?.get(TMUtil.XY_TO_KEY(x, y));
        return Boolean(uid);
    }

    /**
     * 根据GID获取图集序列帧的序号
     * @param atlasName 图集名称
     * @param gid 资源ID
     * @returns
     */
    public getAtlasFrameIdx(atlasName: TMAtlasName, gid: number): number {
        const tileset = this._atlasMap.get(atlasName);
        return gid - (tileset?.firstgid ?? 1);
    }

    /**
     * 根据GID获取纹理资源名称
     * @param textureName 纹理名称
     * @param gid 资源ID
     * @returns
     */
    public getTextureResName(textureName: TMTextureName, gid: number): string {
        const map = this._textureMap.get(textureName);
        const tile = map?.get(gid);
        return tile?.image.split("/").at(-1)?.split(".").at(0) ?? "";
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    private _root!: Laya.Sprite3D;
    private _world: TMWorld | undefined;

    private _atlasMap: Map<TMAtlasName, TMTileSet> = new Map();
    private _textureMap: Map<TMTextureName, Map<number, TMTile>> = new Map();

    private _lastRect: Laya.Rectangle = Laya.Rectangle.create();
    private _curRect: Laya.Rectangle = Laya.Rectangle.create();

    private _addArr: number[][] = [];
    private _delArr: number[][] = [];

    private _allMap: Map<number, TMElement> = new Map();
    private _posMap: Map<TMLayerName, Map<string, number>> = new Map();

    private _transMat: Laya.Matrix3x3 | undefined;

    public showBlocks: Map<string, boolean> = new Map();

    public constructor(public readonly context: ITMContext) {}

    public get isReady() {
        return !!this._root && !!this._world;
    }

    public async onCreate() {
        this._root = this.context.scene3D.getChildByName("world-map") as Laya.Sprite3D;

        this._world = (await Laya.loader.fetch(
            `${this.context.mapDir}/world.json`,
            "json"
        )) as TMWorld;
        this._world.maps.forEach((info) => {
            [info.x, info.y] = this._transMapPos(info);
            [info.width, info.height] = [
                info.width / TMUtil.TILE_WIDTH,
                info.height / TMUtil.TILE_HEIGHT,
            ];
        });

        const tilesetRef = (await Laya.loader.fetch(
            `${this.context.mapDir}/world-tileset-ref.json`,
            "json"
        )) as TMWorldMap;
        tilesetRef.tilesets.forEach((tileset) => {
            if (tileset.tiles?.length > 0) {
                const map = new Map<number, TMTile>();
                tileset.tiles.forEach((tile) => {
                    map.set(tileset.firstgid + tile.id, tile);
                });
                this._textureMap.set(tileset.name as TMTextureName, map);
            } else {
                this._atlasMap.set(tileset.name as TMAtlasName, tileset);
            }
        });
    }

    public onDestroy() {
        this._allMap.forEach((element) => {
            element.recover();
        });
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

    private _transMapPos(info: TMMapInfo) {
        const mat = this._getTransMat();
        const pos = new Laya.Vector2(info.x + info.width / 2, info.y);
        Laya.Vector2.transformCoordinate(pos, mat, pos);

        return [Math.floor(pos.x), Math.floor(pos.y)];
    }

    private _getTransMat() {
        if (this._transMat) {
            return this._transMat;
        }
        const scale = Math.sqrt((TMUtil.TILE_HEIGHT * 2) ** 2 / 2);

        const mat = new Laya.Matrix3x3();
        mat.translate(new Laya.Vector2((TMUtil.MAP_HEIGHT * TMUtil.TILE_WIDTH) / 2, 0), mat);
        mat.scale(new Laya.Vector2(1, 0.5), mat);
        mat.rotate(Math.PI / 4, mat);
        mat.scale(new Laya.Vector2(scale, scale), mat);

        const invertMat = new Laya.Matrix3x3();
        mat.invert(invertMat);

        this._transMat = invertMat;
        return invertMat;
    }

    public update(position: Laya.Vector3): void {
        if (!this._root || !this._world) {
            return;
        }

        const curX = Math.floor(position.x - TMUtil.VISION_WIDTH / 2);
        const curY = Math.floor(position.z - TMUtil.VISION_HEIGHT / 2);
        this._curRect.setTo(curX, curY, TMUtil.VISION_WIDTH, TMUtil.VISION_HEIGHT);

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
            this._tryAdd(x, y, (layerName: string) => {
                return layerName != TMLayerName.Dynamic;
            });
        }

        for (let i = 0; i < this._delArr.length; i++) {
            const [x, y] = this._delArr[i];
            this._tryDel(x, y, (layerName: string) => {
                return layerName != TMLayerName.Dynamic;
            });
        }
    }

    private async _tryAdd(
        x: number,
        y: number,
        filterFunc?: (layerName: string) => boolean,
        eid?: number,
        outUids?: number[]
    ) {
        for (let i = 0; i < this._world!.maps.length; i++) {
            const info = this._world!.maps[i];

            const inRect = TMUtil.IN_RECT(x, y, info.x, info.y, info.width, info.height);
            if (!inRect) {
                continue;
            }

            if (!info.worldMap) {
                const realFileName = info.fileName.split("/").at(-1)?.replace(".tmx", ".json");
                info.worldMap = (await Laya.loader.fetch(
                    `${this.context.mapDir}/` + realFileName,
                    "json"
                )) as TMWorldMap;
            }

            for (let j = 0; j < info.worldMap.layers.length; j++) {
                const layer = info.worldMap.layers[j];
                const layerName = layer.name as TMLayerName;

                if (filterFunc && !filterFunc(layerName)) {
                    continue;
                }
                const props = this._getProps(info, layer, x, y);
                if (!props) {
                    continue;
                }
                const cls = TMUtil.layerToCls(layerName);
                if (!cls) {
                    continue;
                }
                let uidMap = this._posMap.get(layerName);
                if (!uidMap) {
                    uidMap = new Map();
                    this._posMap.set(layerName, uidMap);
                }
                const key = TMUtil.XY_TO_KEY(x, y);
                const uid = uidMap.get(key) ?? 0;

                let element = this._allMap.get(uid);
                if (!element) {
                    element = TMElement.create(cls.name, cls);
                    element.init(this, x, y, props, layerName, eid);

                    uidMap.set(key, element.uid);
                    this._allMap.set(element.uid, element);

                    element.draw();

                    this.context.onAddElement(element);
                }
                outUids?.push(element.uid);
            }
        }
    }

    private _getProps(
        info: TMMapInfo,
        layer: TMLayer,
        x: number,
        y: number
    ): Map<string, any> | undefined {
        const props = new Map<string, any>();

        if (layer.data) {
            const idx = (y - info.y) * info.width + (x - info.x);
            const gid = layer.data[idx];
            if (!gid || gid == 0) {
                return undefined;
            }
            props.set("gid", gid);
        } else if (layer.objects) {
            let targetObj;
            let objX, objY;
            let realX, realY;

            for (const obj of layer.objects) {
                objX = Math.floor(info.x + obj.x / 64);
                objY = Math.floor(info.y + obj.y / 64);

                realX = Math.max(Math.floor((info.x + obj.x / 64 - 0.5) * 100) / 100, 0);
                realY = Math.max(Math.floor((info.y + obj.y / 64 - 0.5) * 100) / 100, 0);

                if (objX == x && objY == y) {
                    targetObj = obj;
                    break;
                }
            }
            if (!targetObj) {
                return undefined;
            }
            targetObj.properties?.forEach((prop) => {
                props.set(prop.name, prop.value);
            });
            props.set("realX", realX);
            props.set("realY", realY);
        } else {
            console.warn("该层没有数据", layer.name);
            return undefined;
        }

        return props;
    }

    private _tryDel(x: number, y: number, filterFunc?: (layerName: string) => boolean) {
        this._posMap.forEach((uidMap, layerName) => {
            if (filterFunc && !filterFunc(layerName)) {
                return;
            }
            const key = TMUtil.XY_TO_KEY(x, y);
            const uid = uidMap.get(key) ?? 0;
            const element = this._allMap.get(uid);

            if (element) {
                this.context.onDelElement(element);
                element.recover();
            }
            uidMap.delete(key);
            this._allMap.delete(uid);
        });
    }
}