import { app } from "../../../app";
import { IVector2Like } from "../../../core/laya";
import {
    ITMContext,
    TMAtlasName,
    TMLayer,
    TMLayerName,
    TMMapInfo,
    TMPropKey,
    TMTextureName,
    TMTile,
    TMTileSet,
    TMWorld,
    TMWorldMap,
} from "./tm-def";
import { TMObjectElement, TMElement, TMStaticElement, TMTileElemet } from "./tm-element";
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
     * 添加对象元素
     * @param eid 实体ID
     * @param gridX X坐标
     * @param gridY Y坐标
     * @returns 对象元素的唯一ID
     */
    public addObjectElement(
        eid: number,
        gridX: number,
        gridY: number,
        props: Map<string, unknown>
    ): number | undefined {
        return this._tryAdd(gridX, gridY, props, TMLayerName.Object, eid);
    }

    /**
     * 跟据唯一ID删除对象元素
     * @param uid 唯一ID
     */
    public delObjectElementByUid(uid: number): void {
        const element = this._allMap.get(uid);
        if (element) {
            this._tryDel(element.gridX, element.gridY, (layerName: string) => {
                return layerName == TMLayerName.Object;
            });
        }
    }

    /**
     * 根据实体ID删除对象元素
     * @param eid 实体ID
     */
    public delObjectElementByEid(eid: number): void {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == TMLayerName.Object) {
                this._tryDel(element.gridX, element.gridY, (layerName: string) => {
                    return layerName == TMLayerName.Object;
                });
                return;
            }
        }
    }

    /**
     * 根据唯一ID获取对象元素
     * @param uid 唯一ID
     * @returns 对象元素
     */
    public getObjectElementByUid(uid: number): TMObjectElement | undefined {
        const element = this._allMap.get(uid);
        if (element?.layerName == TMLayerName.Object) {
            return element as TMObjectElement;
        }
        return undefined;
    }

    /**
     * 根据实体ID获取对象元素
     * @param eid 实体ID
     * @returns 对象元素
     */
    public getObjectElementByEid(eid: number): TMObjectElement | undefined {
        for (const element of this._allMap.values()) {
            if (element.eid == eid && element.layerName == TMLayerName.Object) {
                return element as TMObjectElement;
            }
        }
        return undefined;
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
     * @param gridX X坐标
     * @param gridY Y坐标
     * @param layerName 层级名称
     * @returns 元素对象
     */
    public getElementByPos(
        gridX: number,
        gridY: number,
        layerName: TMLayerName
    ): TMElement | undefined {
        const uidMap = this._posMap.get(layerName);
        if (uidMap) {
            if (layerName == TMLayerName.Static || layerName == TMLayerName.Object) {
                for (const uid of uidMap.values()) {
                    const element = this._allMap.get(uid) as TMStaticElement | TMObjectElement;
                    if (
                        element &&
                        TMUtil.inRect(
                            gridX,
                            gridY,
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
                const uid = uidMap.get(TMUtil.xyToKey(gridX, gridY)) ?? 0;
                const element = this._allMap.get(uid);
                return element;
            }
        }
        return undefined;
    }

    /**
     * 根据矩形范围获取元素列表
     * @param gridX X坐标
     * @param gridY Y坐标
     * @param width 矩形宽度
     * @param height 矩形高度
     * @param layerName 层级名称
     * @returns 元素对象列表
     */
    public getElementsByRect(
        gridX: number,
        gridY: number,
        width: number,
        height: number,
        layerName: TMLayerName
    ): TMElement[] {
        const elements: TMElement[] = [];
        for (let $x = gridX; $x < gridX + width; $x++) {
            for (let $y = gridY; $y < gridY + height; $y++) {
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
     * 指定位置是否阻挡块
     * @param gridX X坐标
     * @param gridY Y坐标
     */
    public isBlock(gridX: number, gridY: number): boolean {
        const uidMap = this._posMap.get(TMLayerName.Block);
        const uid = uidMap?.get(TMUtil.xyToKey(gridX, gridY));
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

    private _allMap: Map<number, TMElement> = new Map();
    private _posMap: Map<TMLayerName, Map<string, number>> = new Map();

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

        const tilesetRef = (await Laya.loader.fetch(
            `${this.context.mapDir}/world-tileset-ref.json`,
            "json"
        )) as TMWorldMap;

        if (!this._root || this._root.destroyed) {
            console.warn("Tilemap根节点已经被销毁");
            return;
        }

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
        this._allMap.clear();
        this._posMap.clear();
    }

    public update(position: Laya.Vector3): void {
        if (!this._root || !this._world) {
            return;
        }

        const curX = Math.floor(position.x - TMUtil.VISION_WIDTH * 0.6);
        const curY = Math.floor(position.z - TMUtil.VISION_HEIGHT * 0.6);
        this._curRect.setTo(curX, curY, TMUtil.VISION_WIDTH, TMUtil.VISION_HEIGHT);

        if (this._curRect.equals(this._lastRect)) {
            return;
        }

        const addArr = [];
        const delArr = [];

        if (!this._lastRect.isEmpty()) {
            for (let x = curX; x < curX + this._curRect.width; x++) {
                for (let y = curY; y < curY + this._curRect.height; y++) {
                    if (!this._lastRect.contains(x, y)) {
                        addArr.push([x, y]);
                    }
                }
            }
            const lastX = this._lastRect.x;
            const lastY = this._lastRect.y;
            for (let x = lastX; x < lastX + this._lastRect.width; x++) {
                for (let y = lastY; y < lastY + this._lastRect.height; y++) {
                    if (!this._curRect.contains(x, y)) {
                        delArr.push([x, y]);
                    }
                }
            }
        } else {
            for (let x = curX; x < curX + this._curRect.width; x++) {
                for (let y = curY; y < curY + this._curRect.height; y++) {
                    addArr.push([x, y]);
                }
            }
        }
        this._lastRect.copyFrom(this._curRect);

        for (let i = 0; i < addArr.length; i++) {
            const [x, y] = addArr[i];
            this._searchInMap(x, y, (layerName) => {
                return layerName != TMLayerName.Object && layerName != TMLayerName.Marker;
            });
        }

        for (let i = 0; i < delArr.length; i++) {
            const [x, y] = delArr[i];
            this._tryDel(x, y, (layerName) => {
                return layerName != TMLayerName.Object && layerName != TMLayerName.Marker;
            });
        }

        if (TMUtil.TILE_BATCH) {
            Laya.timer.once(3000, this, () => {
                this._drawTilePlane(this._curRect, TMLayerName.Ground);
                this._drawTilePlane(this._curRect, TMLayerName.Road);
                this._drawTilePlane(this._curRect, TMLayerName.River);
            });
        }
    }

    private async _searchInMap(
        gridX: number,
        gridY: number,
        filterFunc?: (layerName: string) => boolean
    ) {
        for (let i = 0; i < this._world!.maps.length; i++) {
            const info = this._world!.maps[i];

            const inRect = TMUtil.inRect(gridX, gridY, info.x, info.y, info.width, info.height);
            if (!inRect) {
                continue;
            }

            if (!info.worldMap) {
                info.worldMap = (await Laya.loader.fetch(
                    `${this.context.mapDir}/` + info.fileName,
                    "json"
                )) as TMWorldMap;
            }

            for (let j = 0; j < info.worldMap.layers.length; j++) {
                const layer = info.worldMap.layers[j];
                const layerName = layer.name as TMLayerName;

                if (filterFunc && !filterFunc(layerName)) {
                    continue;
                }
                const props = this._getProps(info, layer, gridX, gridY);
                if (!props) {
                    continue;
                }
                this._tryAdd(gridX, gridY, props, layerName);
            }
        }
    }

    private _tryAdd(
        gridX: number,
        gridY: number,
        props: Map<string, unknown>,
        layerName: TMLayerName,
        eid?: number
    ): number | undefined {
        const cls = TMUtil.layerToCls(layerName);
        if (!cls) {
            return undefined;
        }
        let uidMap = this._posMap.get(layerName);
        if (!uidMap) {
            uidMap = new Map();
            this._posMap.set(layerName, uidMap);
        }
        const key = TMUtil.xyToKey(gridX, gridY);
        const uid = uidMap.get(key) ?? 0;

        let element = this._allMap.get(uid);
        if (!element) {
            element = TMElement.create(cls);
            element.init(this, gridX, gridY, props, layerName, eid);

            uidMap.set(key, element.uid);
            this._allMap.set(element.uid, element);

            element.draw();
            this.context.onAddElement(element);
        }
    }

    private _tryDel(gridX: number, gridY: number, filterFunc?: (layerName: string) => boolean) {
        this._posMap.forEach((uidMap, layerName) => {
            if (filterFunc && !filterFunc(layerName)) {
                return;
            }
            const key = TMUtil.xyToKey(gridX, gridY);
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

    private _getProps(
        info: TMMapInfo,
        layer: TMLayer,
        gridX: number,
        gridY: number
    ): Map<string, unknown> | undefined {
        if (layer.data) {
            const idx = (gridY - info.y) * info.width + (gridX - info.x);
            const gid = layer.data[idx];
            if (!gid || gid == 0) {
                return undefined;
            }
            const props = new Map<string, unknown>();
            props.set(TMPropKey.Gid, gid);
            return props;
        } else if (layer.objects) {
            const $gridX = gridX - info.x;
            const $gridY = gridY - info.y;
            const $targetObj = layer.objects[TMUtil.xyToKey($gridX, $gridY)];
            if (!$targetObj) {
                return undefined;
            }
            const props = new Map<string, unknown>();
            $targetObj.properties?.forEach((prop) => {
                props.set(prop.name, prop.value);
            });
            props.set(TMPropKey.RealX, info.x + $targetObj.x - 0.5);
            props.set(TMPropKey.RealY, info.y + $targetObj.y - 0.5);
            return props;
        } else {
            console.warn("该层没有数据", layer.name);
            return undefined;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    private _tilePlanes: Map<TMLayerName, Laya.Sprite3D> = new Map();

    private async _drawTilePlane(rect: Laya.Rectangle, layerName: TMLayerName) {
        let plane = this._tilePlanes.get(layerName);
        if (plane) {
            plane.destroy();
            this._tilePlanes.delete(layerName);
        }
        const firstElement = this.getElementByPos(rect.x, rect.y, layerName) as TMTileElemet;
        const atlasName = firstElement.getAtlasName();
        const offsetY = firstElement.getOffsetY();
        const renderMode = firstElement.getRenderMode();
        const ignoreFirstFrame = firstElement.ignoreFirstFrame();

        const checker = () => this._root && !this._root.destroyed;

        const [atlasPath, texturePath, prefabPath] = firstElement.getResPaths();
        const atlas = await app.loader.loadAtlas(atlasPath, checker);
        const texture = await app.loader.loadTexture2D(texturePath, checker);

        const uvMap = this._getUVMap(rect, layerName, atlas);
        if (uvMap.size == 0) {
            return;
        }
        plane = new Laya.Sprite3D();
        plane.addComponent(Laya.MeshRenderer);

        const mesh = plane.addComponent(Laya.MeshFilter);
        mesh.sharedMesh = TMUtil.createPlane(rect, uvMap);
        plane.name = layerName + "-batch";

        const pos = plane.transform.localPosition;
        pos.x = rect.x;
        pos.y = offsetY;
        pos.z = rect.y;
        plane.transform.localPosition = pos;

        const renderer = plane.getComponent(Laya.MeshRenderer);
        const mat = new Laya.BlinnPhongMaterial();
        mat.albedoTexture = texture;
        mat.renderMode = renderMode;
        renderer.material = mat;

        this._root.getChildByName(layerName).addChild(plane);
        this._tilePlanes.set(layerName as TMLayerName, plane);
    }

    private _getUVMap(
        rect: Laya.Rectangle,
        layerName: TMLayerName,
        atlas: Laya.AtlasResource
    ): Map<string, IVector2Like[]> {
        const uvMap: Map<string, IVector2Like[]> = new Map();

        for (let x = rect.x; x < rect.x + rect.width; x++) {
            for (let y = rect.y; y < rect.y + rect.height; y++) {
                const key = TMUtil.xyToKey(x, y);
                const uvs = this._findUVs(x, y, layerName, atlas);
                uvMap.set(key, uvs);
            }
        }
        return uvMap;
    }

    private _findUVs(
        gridX: number,
        gridY: number,
        layerName: TMLayerName,
        atlas: Laya.AtlasResource
    ): IVector2Like[] {
        const element = this.getElementByPos(gridX, gridY, layerName) as TMTileElemet;
        const idx = this.getAtlasFrameIdx(element.getAtlasName(), element.gid);
        const path = atlas.frames[idx].url;
        const tex = Laya.loader.getRes(path) as Laya.Texture;

        const uvs: IVector2Like[] = [];
        for (let i = 0; i < tex.uv.length - 1; i += 2) {
            uvs.push({ x: tex.uv[i], y: tex.uv[i + 1] });
        }

        // 最后两个uv需要对调一下，才符合laya的需求
        const uv2 = { x: uvs[2].x, y: uvs[2].y };
        const uv3 = { x: uvs[3].x, y: uvs[3].y };
        [uvs[2], uvs[3]] = [uv3, uv2];

        return uvs;
    }
}
