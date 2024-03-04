import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { StringUtil } from "../../../../core/utils/string-util";
import { TilemapSystem } from "../systems/tilemap-system";

export class TilemapComponent extends ecs.SingletonComponent {
    static readonly RATE = 1;

    static grid2Pixel(x: number, z: number, out: IVector3Like) {
        // TODO
        out.x = x * TilemapComponent.RATE;
        out.z = z * TilemapComponent.RATE;
        out.y = 0;
        return out;
    }

    static degree2Speed(deg: number, velocity: number, out: IVector3Like) {
        const rad = (deg / 180) * Math.PI;
        out.x = Math.cos(rad) * velocity * TilemapComponent.RATE;
        out.z = Math.sin(rad) * velocity * TilemapComponent.RATE;
        out.y = 0;
        return out;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    static readonly VISION_WIDTH = 15; // 视野宽度（单位：米）
    static readonly VISION_HEIGHT = 30; // 视野高度（单位：米）

    static readonly MAP_WIDTH = 50; // 地图块宽度（单位：米）
    static readonly MAP_HEIGHT = 50; // 地图块高度（单位：米）

    static readonly TILE_WIDTH = 128; // 瓦片宽度（单位：像素）
    static readonly TILE_HEIGHT = 64; // 瓦片高度（单位：像素）

    static readonly STATIC_BASE_WIDTH = 256; // 静态物体贴图基准宽度（单位：像素）
    static readonly STATIC_BASE_HEIGHT = 256; // 静态物体贴图基准宽度（单位：像素）

    static readonly STATIC_SCALE = 3; // 静态物体缩放

    static readonly XY_TO_KEY = (x: number, y: number) => { return x + '_' + y; };
    static readonly KEY_TO_XY = (key: string) => { const arr = key.split('_'); return [Number(arr[0]), Number(arr[1])] };
}

export namespace Tilemap {

    export interface World {
        maps: MapInfo[];
    }

    export interface MapInfo {
        fileName: string,
        x: number,
        y: number,
        width: number,
        height: number,
        worldMap?: WorldMap,
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
        name: string;
        type: string;
        width: number;
        height: number;
        data: number[];
    }

    export enum LayerName {
        Ground = "ground",
        Road = "road",
        River = "river",
        Static = "static",
        Dynamic = "dynamic",
        Block = "block",
    }

    export enum LayerType {
        TileLayer = "tilelayer",
        ObjectGroup = "objectgroup",
        ImageLayer = "imagelayer",
        Group = "group",
    }

    export interface TileSet {
        name: string;
        firstgid: number;
        tilecount: number;
        image: string;
        imagewidth: number;
        imageheight: number;
        properties: Propertie[];
        tiles: Tile[];
    }

    export interface Tile {
        id: number;
        image: string;
        imagewidth: number;
        imageheight: number;
        properties: Propertie[];
    }

    export interface Propertie {
        name: string;
        type: string;
        value: number;
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export abstract class Element {
        private static UID: number = 0;
        protected system!: TilemapSystem;

        public uid!: number;
        public x!: number;
        public y!: number;
        public gid!: number;
        public layerName!: string;

        public static create<T>(sign: string, cls: new () => T): T {
            return Laya.Pool.getItemByClass(sign, cls);
        }

        public init(system: TilemapSystem, x: number, y: number, gid: number, layerName: string): void {
            this.uid = --Element.UID;
            this.system = system;
            this.x = x;
            this.y = y;
            this.gid = gid;
            this.layerName = layerName;
        }

        public recover(): void {
            this.reset();
            Laya.Pool.recoverByClass(this);
        }

        public abstract draw(): void;
        public abstract reset(): void;
    }

    export abstract class TileElemet extends Element {
        private _tile?: Laya.Sprite3D;

        protected abstract getResPaths(): string[];

        public override async draw() {
            const [atlasPath, texturePath, prefabPath] = this.getResPaths();
            const atlas = await Laya.loader.load(atlasPath, Laya.Loader.ATLAS);
            const texture = await Laya.loader.load(texturePath, Laya.Loader.TEXTURE2D);
            const prefab = await Laya.loader.load(prefabPath, Laya.Loader.HIERARCHY);

            this._tile = prefab.create() as Laya.Sprite3D;

            const pos = this._tile.transform.position;
            pos.x = this.x;
            pos.y = 0;
            pos.z = this.y;
            this._tile.transform.position = pos;

            const mat = new Laya.BlinnPhongMaterial(); // 使用 UnlitMaterial 时 tilingOffset 会失效
            const idx = this.system.getAtlasFrameIdx(AtlasName.Ground, this.gid);
            const path = atlas.frames[idx].url;
            const tex = Laya.loader.getRes(path) as Laya.Texture;
            mat.albedoTexture = texture;
            mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
            mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
            mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
            mat.tilingOffset.w = (1 - mat.tilingOffset.y) - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）

            const renderer = this._tile.getChildAt(0).getComponent(Laya.MeshRenderer);
            renderer.material = mat;

            this.system.context.scene3D.addChild(this._tile);
        }

        public override reset() {
            this._tile?.removeSelf();
        }
    }

    export class GroundElement extends TileElemet {
        protected override getResPaths() {
            return [
                "resources/texture/world-map/ground/ground.atlas",
                "resources/texture/world-map/ground/ground.png",
                "resources/prefab/world-map/ground/ground-tile.lh"
            ];
        }
    }

    export class RoadElement extends TileElemet {
        protected override getResPaths() {
            return [
                "resources/texture/world-map/road/road.atlas",
                "resources/texture/world-map/road/road.png",
                "resources/prefab/world-map/road/road-tile.lh"
            ];
        }
    }

    export class RiverElement extends TileElemet {
        protected override getResPaths() {
            return [
                "resources/texture/world-map/river/river.atlas",
                "resources/texture/world-map/river/river.png",
                "resources/prefab/world-map/river/river-tile.lh"
            ];
        }
    }

    export class StaticElement extends Element {
        private _staticObj?: Laya.Sprite3D;

        public override async draw() {
            const prefab = await Laya.loader.load("resources/prefab/world-map/static/static-obj.lh", Laya.Loader.HIERARCHY);

            this._staticObj = prefab.create() as Laya.Sprite3D;

            const pos = this._staticObj.transform.position;
            pos.x = this.x;
            pos.y = this.system.getTextureOffsetY(TextureName.Static, this.gid) * TilemapComponent.STATIC_SCALE;
            pos.z = this.y;
            this._staticObj.transform.position = pos;

            const renderer = this._staticObj.getChildAt(0).getComponent(Laya.MeshRenderer);
            const mat = new Laya.UnlitMaterial();
            const resName = this.system.getTextureResName(TextureName.Static, this.gid);
            const path = StringUtil.format("resources/texture/world-map/static/{0}.png", resName);
            const texture = await Laya.loader.load(path, Laya.Loader.TEXTURE2D) as Laya.Texture2D;
            mat.albedoTexture = texture;
            mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
            renderer.material = mat;

            const scaleX = (texture.width / TilemapComponent.STATIC_BASE_WIDTH) * TilemapComponent.STATIC_SCALE;
            const scaleZ = (texture.height / TilemapComponent.STATIC_BASE_HEIGHT) * TilemapComponent.STATIC_SCALE;
            this._staticObj.transform.localScaleX = scaleX;
            this._staticObj.transform.localScaleZ = scaleZ;

            const rotateX = this.system.context.camera.transform.localRotationEulerX;
            this._staticObj.transform.localRotationEulerX = -rotateX;

            this.system.context.scene3D.addChild(this._staticObj);
        }

        public override reset() {
            this._staticObj?.removeSelf();
        }
    }

    export class DynamicElement extends Element {
        private _dynamicObj?: Laya.Sprite3D;

        public override async draw() {
            const prefab = await Laya.loader.load("resources/prefab/world-map/dynamic/dynamic-obj.lh", Laya.Loader.HIERARCHY);

            this._dynamicObj = prefab.create() as Laya.Sprite3D;

            const pos = this._dynamicObj.transform.position;
            pos.x = this.x;
            pos.y = this.system.getTextureOffsetY(TextureName.Dynamic, this.gid) * TilemapComponent.STATIC_SCALE;
            pos.z = this.y;
            this._dynamicObj.transform.position = pos;

            const renderer = this._dynamicObj.getChildAt(0).getComponent(Laya.MeshRenderer);
            const mat = new Laya.UnlitMaterial();
            const resName = this.system.getTextureResName(TextureName.Dynamic, this.gid);
            const path = StringUtil.format("resources/texture/world-map/dynamic/{0}.png", resName);
            const texture = await Laya.loader.load(path, Laya.Loader.TEXTURE2D) as Laya.Texture2D;
            mat.albedoTexture = texture;
            mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
            renderer.material = mat;

            const scaleX = (texture.width / TilemapComponent.STATIC_BASE_WIDTH) * TilemapComponent.STATIC_SCALE;
            const scaleZ = (texture.height / TilemapComponent.STATIC_BASE_HEIGHT) * TilemapComponent.STATIC_SCALE;
            this._dynamicObj.transform.localScaleX = scaleX;
            this._dynamicObj.transform.localScaleZ = scaleZ;

            const rotateX = this.system.context.camera.transform.localRotationEulerX;
            this._dynamicObj.transform.localRotationEulerX = -rotateX;

            this.system.context.scene3D.addChild(this._dynamicObj);
        }

        public override reset() {
            this._dynamicObj?.removeSelf();
        }
    }

    export class BlockElement extends Element {
        private _blockTile?: Laya.Sprite3D;

        public override async draw() {
            const prefab = await Laya.loader.load("resources/prefab/world-map/block/block-tile.lh", Laya.Loader.HIERARCHY);

            this._blockTile = prefab.create() as Laya.Sprite3D;

            const pos = this._blockTile.transform.position;
            pos.x = this.x;
            pos.y = 0.01;
            pos.z = this.y;
            this._blockTile.transform.position = pos;

            this.system.context.scene3D.addChild(this._blockTile);
        }

        public override reset() {
            this._blockTile?.removeSelf();
        }
    }
}