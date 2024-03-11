import { Constructor } from "../../../../../core/dispatcher";
import { ecs } from "../../../../../core/ecs";
import { IVector3Like } from "../../../../../core/laya";
import { StringUtil } from "../../../../../core/utils/string-util";
import { TilemapSystem } from "../systems/tilemap-system";

export class TilemapComponent extends ecs.SingletonComponent {
    static DEBUG_MODE = false; // 调试模式

    static readonly VISION_WIDTH = 25; // 视野宽度（单位：米）
    static readonly VISION_HEIGHT = 25; // 视野高度（单位：米）

    static readonly MAP_WIDTH = 50; // 地图块宽度（仅第一块，单位：米）
    static readonly MAP_HEIGHT = 50; // 地图块高度（仅第一块，单位：米）

    static readonly TILE_WIDTH = 128; // 瓦片宽度（单位：像素）
    static readonly TILE_HEIGHT = 64; // 瓦片高度（单位：像素）

    static readonly XY_TO_KEY = (x: number, y: number) => {
        return Math.floor(x) + "_" + Math.floor(y);
    };
    static readonly KEY_TO_XY = (key: string) => {
        const arr = key.split("_");
        return [Math.floor(Number(arr[0])), Math.floor(Number(arr[1]))];
    };

    static readonly IN_RECT = (
        x: number,
        y: number,
        rectX: number,
        rectY: number,
        rectW: number,
        rectH: number
    ) => {
        return rectX <= x && x < rectX + rectW && rectY <= y && y < rectY + rectH;
    };

    static readonly STATIC_TEXTURE_CFG: Map<string, Tilemap.TextureCfg> = new Map([
        [
            "map_Grassland_hill_01",
            {
                tileX: 1,
                tileY: 3,
                tileW: 4,
                tileH: 4,
                offsetX: 1.44996,
                offsetY: 1.49997,
                offsetZ: 1.51993,
                scale: 4.5,
            },
        ],
        [
            "map_Grassland_hill_02",
            {
                tileX: 1,
                tileY: 2,
                tileW: 3,
                tileH: 3,
                offsetX: 1.21997,
                offsetY: 1.49997,
                offsetZ: 1.32993,
                scale: 3,
            },
        ],
        [
            "map_Grassland_Tree_01",
            {
                tileX: 0,
                tileY: 1,
                tileW: 2,
                tileH: 2,
                offsetX: 0.51987,
                offsetY: 1.22977,
                offsetZ: 0.48983,
                scale: 3,
            },
        ],
        [
            "map_Grassland_Tree_02",
            {
                tileX: 1,
                tileY: 2,
                tileW: 3,
                tileH: 3,
                offsetX: 1.43997,
                offsetY: 1.34993,
                offsetZ: 1.39997,
                scale: 3,
            },
        ],
        [
            "map_Grassland_Tree_03",
            {
                tileX: 1,
                tileY: 2,
                tileW: 3,
                tileH: 3,
                offsetX: 1.55997,
                offsetY: 1.24993,
                offsetZ: 1.41997,
                scale: 3,
            },
        ],
    ]);

    static readonly DYNAMIC_TEXTURE_CFG: Map<string, Tilemap.TextureCfg> = new Map([
        [
            "building_castle01@1,2_5,5",
            {
                tileX: 3,
                tileY: 5,
                tileW: 5,
                tileH: 5,
                offsetX: 3.14974,
                offsetY: 2.09952,
                offsetZ: 2.18969,
                scale: 6,
            },
        ],
        [
            "map_gather_wood1-1",
            {
                tileX: 0,
                tileY: 1,
                tileW: 2,
                tileH: 2,
                offsetX: 0.39992,
                offsetY: 1.21985,
                offsetZ: 0.32989,
                scale: 3,
            },
        ],
        [
            "map_gather_wood1-2",
            {
                tileX: 0,
                tileY: 1,
                tileW: 2,
                tileH: 2,
                offsetX: 0.39992,
                offsetY: 1.21985,
                offsetZ: 0.32989,
                scale: 3,
            },
        ],
    ]);
}

export namespace Tilemap {
    export interface World {
        maps: MapInfo[];
    }

    export interface MapInfo {
        fileName: string;
        x: number;
        y: number;
        width: number;
        height: number;
        worldMap?: WorldMap;
    }

    export interface WorldMap {
        width: number;
        height: number;
        tilewidth: number;
        tileheight: number;
        layers: Layer[];
        tilesets: TileSet[];
    }

    export interface Layer {
        id: number;
        name: string;
        type: LayerType;
        width: number;
        height: number;
        data?: number[];
        objects?: Obj[];
    }

    export interface Obj {
        id: number;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        properties?: Propertie[];
    }

    export enum LayerType {
        TileLayer = "tilelayer",
        ObjectGroup = "objectgroup",
        ImageLayer = "imagelayer",
        Group = "group",
    }

    export enum LayerName {
        Ground = "ground",
        Road = "road",
        River = "river",
        Static = "static",
        Dynamic = "dynamic",
        Block = "block",
        Building = "building",
        Monster = "monster",
    }

    export function LayerToCls(layerName: string): Constructor<Tilemap.Element> | null {
        switch (layerName) {
            case Tilemap.LayerName.Ground:
                return Tilemap.GroundElement;
            case Tilemap.LayerName.Road:
                return Tilemap.RoadElement;
            case Tilemap.LayerName.River:
                return Tilemap.RiverElement;
            case Tilemap.LayerName.Static:
                return Tilemap.StaticElement;
            case Tilemap.LayerName.Dynamic:
                return Tilemap.DynamicElement;
            case Tilemap.LayerName.Block:
                return Tilemap.BlockElement;
            case Tilemap.LayerName.Building:
                return Tilemap.BuildingElement;
            case Tilemap.LayerName.Monster:
                return Tilemap.MonsterElement;
        }
        return null;
    }

    export interface TileSet {
        name: string;
        firstgid: number;
        tilecount: number;
        image: string;
        imagewidth: number;
        imageheight: number;
        properties?: Propertie[];
        tiles: Tile[];
    }

    export interface Tile {
        id: number;
        image: string;
        imagewidth: number;
        imageheight: number;
        properties?: Propertie[];
    }

    export interface Propertie {
        name: string;
        type: string;
        value: any;
    }

    export enum AtlasName {
        Ground = "ground",
        Road = "road",
        River = "river",
    }

    export enum TextureName {
        Static = "static",
        Dynamic = "dynamic",
    }

    export interface TextureCfg {
        tileX: number;
        tileY: number;
        tileW: number;
        tileH: number;
        offsetX: number;
        offsetY: number;
        offsetZ: number;
        scale: number;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export abstract class Element {
        private static UID: number = 0;
        protected system!: TilemapSystem;

        private _uid!: number;
        private _x!: number;
        private _y!: number;
        private _props!: Map<string, any>;
        private _layerName!: string;
        private _eid?: number;

        public get uid(): number {
            return this._uid;
        }

        public get x(): number {
            return this._x;
        }

        public get y(): number {
            return this._y;
        }

        public get props(): Map<string, any> {
            return this._props;
        }

        public get layerName(): string {
            return this._layerName;
        }

        public get eid(): number {
            return this._eid ?? 0;
        }

        public static create<T>(sign: string, cls: Constructor<T>): T {
            return Laya.Pool.getItemByClass(sign, cls);
        }

        public init(
            system: TilemapSystem,
            x: number,
            y: number,
            props: Map<string, any>,
            layerName: string,
            eid?: number
        ): void {
            this._uid = --Element.UID;
            this.system = system;
            this._x = x;
            this._y = y;
            this._props = props;
            this._layerName = layerName;
            this._eid = eid;
        }

        public recover(): void {
            this.erase();
            Laya.Pool.recoverByClass(this);
        }

        public abstract draw(): void;
        public abstract erase(): void;
    }

    export abstract class TileElemet extends Element {
        private _tile?: Laya.Sprite3D;

        public get gid(): number {
            return this.props.get("gid");
        }

        public override async draw() {
            if (this._tile) {
                return;
            }
            const idx = this.system.getAtlasFrameIdx(this.getAtlasName(), this.gid);
            if (idx == 0 && this.ignoreFirstFrame()) {
                return;
            }
            const [atlasPath, texturePath, prefabPath] = this.getResPaths();
            const atlas = await Laya.loader.load(atlasPath, Laya.Loader.ATLAS);
            const texture = await Laya.loader.load(texturePath, Laya.Loader.TEXTURE2D);
            const prefab = await Laya.loader.load(prefabPath, Laya.Loader.HIERARCHY);

            this._tile = prefab.create() as Laya.Sprite3D;

            const pos = this._tile.transform.position;
            pos.x = this.x;
            pos.y = this.getOffsetY();
            pos.z = this.y;
            this._tile.transform.position = pos;

            const mat = new Laya.BlinnPhongMaterial(); // 使用 UnlitMaterial 时 tilingOffset 会失效
            const path = atlas.frames[idx].url;
            const tex = Laya.loader.getRes(path) as Laya.Texture;
            mat.albedoTexture = texture;
            mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
            mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
            mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
            mat.tilingOffset.w = 1 - mat.tilingOffset.y - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）
            mat.renderMode = this.getRenderMode();

            const renderer = this._tile.getChildAt(0).getComponent(Laya.MeshRenderer);
            renderer.material = mat;

            if (TilemapComponent.DEBUG_MODE) {
                this._tile.transform.localScaleX = 0.98;
                this._tile.transform.localScaleZ = 0.98;
            }

            this._tile.name = this.x + "_" + this.y;
            this.system.getRoot().getChildByName(this.layerName).addChild(this._tile);
        }

        public override erase() {
            this._tile?.removeSelf();
            this._tile = undefined;
        }

        protected abstract getAtlasName(): AtlasName;
        protected abstract getResPaths(): string[];
        protected abstract getOffsetY(): number;
        protected abstract getRenderMode(): Laya.MaterialRenderMode;
        protected abstract ignoreFirstFrame(): boolean;
    }

    export class GroundElement extends TileElemet {
        protected override getAtlasName(): AtlasName {
            return AtlasName.Ground;
        }

        protected override getResPaths(): string[] {
            return [
                "resources/texture/world-map/ground/ground.atlas",
                "resources/texture/world-map/ground/ground.png",
                "resources/prefab/world-map/ground/ground-tile.lh",
            ];
        }

        protected override getOffsetY(): number {
            return -0.01;
        }

        protected override getRenderMode(): Laya.MaterialRenderMode {
            return Laya.MaterialRenderMode.RENDERMODE_OPAQUE;
        }

        protected override ignoreFirstFrame(): boolean {
            return false;
        }
    }

    export class RoadElement extends TileElemet {
        protected override getAtlasName(): AtlasName {
            return AtlasName.Road;
        }

        protected override getResPaths(): string[] {
            return [
                "resources/texture/world-map/road/road.atlas",
                "resources/texture/world-map/road/road.png",
                "resources/prefab/world-map/road/road-tile.lh",
            ];
        }

        protected override getOffsetY(): number {
            return 0;
        }

        protected override getRenderMode(): Laya.MaterialRenderMode {
            return Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        }

        protected override ignoreFirstFrame(): boolean {
            return true;
        }
    }

    export class RiverElement extends TileElemet {
        protected override getAtlasName(): AtlasName {
            return AtlasName.River;
        }

        protected override getResPaths(): string[] {
            return [
                "resources/texture/world-map/river/river.atlas",
                "resources/texture/world-map/river/river.png",
                "resources/prefab/world-map/river/river-tile.lh",
            ];
        }

        protected override getOffsetY(): number {
            return 0;
        }

        protected override getRenderMode(): Laya.MaterialRenderMode {
            return Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        }

        protected override ignoreFirstFrame(): boolean {
            return true;
        }
    }

    export abstract class BoardElement extends Element {
        private _board?: Laya.Sprite3D;
        private _startX: number = 0;
        private _startY: number = 0;
        private _width: number = 0;
        private _height: number = 0;

        public get startX(): number {
            return this._startX;
        }

        public get startY(): number {
            return this._startY;
        }

        public get width(): number {
            return this._width;
        }

        public get height(): number {
            return this._height;
        }

        public get gid(): number {
            return this.props.get("gid");
        }

        public override async draw() {
            if (this._board) {
                return;
            }
            const prefab = await Laya.loader.load(this.getPrefabPath(), Laya.Loader.HIERARCHY);

            this._board = prefab.create() as Laya.Sprite3D;

            const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
            const renderer = sprite.getComponent(Laya.MeshRenderer);
            const resName = this.system.getTextureResName(this.getTextureName(), this.gid);
            const textureCfg = this.getTextureCfg().get(resName);

            this._startX = Math.floor(this.x - (textureCfg?.tileX ?? 0));
            this._startY = Math.floor(this.y - (textureCfg?.tileY ?? 0));

            const objPos = this._board.transform.position;
            objPos.x = this._startX;
            objPos.y = 0;
            objPos.z = this._startY;
            this._board.transform.position = objPos;

            const spritePos = sprite.transform.localPosition;
            spritePos.x = textureCfg?.offsetX ?? 0;
            spritePos.y = textureCfg?.offsetY ?? 0;
            spritePos.z = textureCfg?.offsetZ ?? 0;
            sprite.transform.localPosition = spritePos;

            sprite.transform.localScaleX = textureCfg?.scale ?? 1;
            sprite.transform.localScaleY = textureCfg?.scale ?? 1;

            const cameraTrans = this.system.context.camera.transform;
            sprite.transform.localRotationEulerX = cameraTrans.localRotationEulerX;
            sprite.transform.localRotationEulerY = cameraTrans.localRotationEulerY;

            const mat = new Laya.UnlitMaterial();
            const path = StringUtil.format(this.getTexturePath(), resName);
            const texture = (await Laya.loader.load(path, Laya.Loader.TEXTURE2D)) as Laya.Texture2D;
            mat.albedoTexture = texture;
            mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
            renderer.material = mat;

            this._width = textureCfg?.tileW ?? 1;
            this._height = textureCfg?.tileH ?? 1;

            this._board.name = this.startX + "_" + this.startY + " | " + resName;
            this.system.getRoot().getChildByName(this.layerName).addChild(this._board);
        }

        public showBlock() {
            for (let $x = this.startX; $x < this.startX + this.width; $x++) {
                for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                    this.system.showBlocks.set(TilemapComponent.XY_TO_KEY($x, $y), true);
                    const element = this.system.getElementByPos($x, $y, LayerName.Block);
                    element?.draw();
                }
            }
        }

        public hideBlock() {
            for (let $x = this.startX; $x < this.startX + this.width; $x++) {
                for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                    this.system.showBlocks.delete(TilemapComponent.XY_TO_KEY($x, $y));
                    const element = this.system.getElementByPos($x, $y, LayerName.Block);
                    element?.erase();
                }
            }
        }

        public override erase() {
            this.hideBlock();
            this._board?.removeSelf();
            this._board = undefined;
            this._width = 0;
            this._height = 0;
        }

        protected abstract getPrefabPath(): string;
        protected abstract getTexturePath(): string;
        protected abstract getTextureName(): TextureName;
        protected abstract getTextureCfg(): Map<string, Tilemap.TextureCfg>;
    }

    export class StaticElement extends BoardElement {
        protected override getPrefabPath(): string {
            return "resources/prefab/world-map/static/static-obj.lh";
        }

        protected override getTexturePath(): string {
            return "resources/texture/world-map/static/{0}.png";
        }

        protected override getTextureName(): TextureName {
            return TextureName.Static;
        }

        protected override getTextureCfg(): Map<string, Tilemap.TextureCfg> {
            return TilemapComponent.STATIC_TEXTURE_CFG;
        }
    }

    export class DynamicElement extends BoardElement {
        protected override getPrefabPath(): string {
            return "resources/prefab/world-map/dynamic/dynamic-obj.lh";
        }

        protected override getTexturePath(): string {
            return "resources/texture/world-map/dynamic/{0}.png";
        }

        protected override getTextureName(): TextureName {
            return TextureName.Dynamic;
        }

        protected override getTextureCfg(): Map<string, Tilemap.TextureCfg> {
            return TilemapComponent.DYNAMIC_TEXTURE_CFG;
        }
    }

    export class BlockElement extends Element {
        private _blockTile?: Laya.Sprite3D;

        public override async draw() {
            if (this._blockTile) {
                return;
            }
            const key = TilemapComponent.XY_TO_KEY(this.x, this.y);
            if (!this.system.showBlocks.get(key)) {
                return;
            }
            const prefab = await Laya.loader.load(
                "resources/prefab/world-map/block/block-tile.lh",
                Laya.Loader.HIERARCHY
            );

            this._blockTile = prefab.create() as Laya.Sprite3D;

            const pos = this._blockTile.transform.position;
            pos.x = this.x;
            pos.y = 0.01;
            pos.z = this.y;
            this._blockTile.transform.position = pos;

            this._blockTile.name = this.x + "_" + this.y;
            this.system.getRoot().getChildByName(this.layerName).addChild(this._blockTile);
        }

        public override erase() {
            this._blockTile?.removeSelf();
            this._blockTile = undefined;
        }
    }

    export abstract class ObjectElement extends Element {
        public get id(): number {
            return this.props.get("id");
        }

        public get realX(): number {
            return this.props.get("realX");
        }

        public get realY(): number {
            return this.props.get("realY");
        }
    }

    export class BuildingElement extends ObjectElement {
        private _debugObjs: Laya.Sprite3D[] = [];

        public override async draw() {
            if (this._debugObjs.length > 0) {
                return;
            }
            if (!TilemapComponent.DEBUG_MODE) {
                return;
            }
            const dynamicElement = this.system.buildingToDynamicElemnt(this.uid);
            if (!dynamicElement) {
                return;
            }
            const prefab = await Laya.loader.load(
                "resources/prefab/world-map/test/debug-obj.lh",
                Laya.Loader.HIERARCHY
            );
            for (let i = 0; i < dynamicElement.width; i++) {
                for (let j = 0; j < dynamicElement.height; j++) {
                    const debugObj = prefab.create() as Laya.Sprite3D;
                    this._debugObjs.push(debugObj);

                    const pos = debugObj.transform.position;
                    pos.x = dynamicElement.startX + i;
                    pos.y = 0;
                    pos.z = dynamicElement.startY + j;
                    debugObj.transform.position = pos;

                    debugObj.name = this.x + "_" + this.y + " (" + i + "," + j + ")";
                    this.system.getRoot().getChildByName(this.layerName).addChild(debugObj);
                }
            }
        }

        public override erase() {
            this._debugObjs.forEach((obj) => {
                obj.removeSelf();
            });
            this._debugObjs = [];
        }
    }

    export class MonsterElement extends ObjectElement {
        private _debugObj?: Laya.Sprite3D;

        public override async draw() {
            if (this._debugObj) {
                return;
            }
            if (!TilemapComponent.DEBUG_MODE) {
                return;
            }
            const prefab = await Laya.loader.load(
                "resources/prefab/world-map/test/debug-obj.lh",
                Laya.Loader.HIERARCHY
            );

            this._debugObj = prefab.create() as Laya.Sprite3D;

            const pos = this._debugObj.transform.position;
            pos.x = this.x;
            pos.y = 0;
            pos.z = this.y;
            this._debugObj.transform.position = pos;

            this._debugObj.name = this.x + "_" + this.y;
            this.system.getRoot().getChildByName(this.layerName).addChild(this._debugObj);
        }

        public override erase() {
            this._debugObj?.removeSelf();
            this._debugObj = undefined;
        }
    }
}
