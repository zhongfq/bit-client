import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";
import { StringUtil } from "../../../../core/utils/string-util";
import { WorldContext } from "../../world-context";

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

    static readonly STATIC_CFG_MAP: Map<number, Tilemap.StaticConfig> = new Map([
        [51, { resName: "map_Grassland_Tree_01", offsetY: 0.38591 }],
        [52, { resName: "map_Grassland_Tree_02", offsetY: 0.46933 }],
        [53, { resName: "map_Grassland_Tree_03", offsetY: 0.47747 }],
        [49, { resName: "map_Grassland_hill_01", offsetY: 0.69662 }],
        [50, { resName: "map_Grassland_hill_02", offsetY: 0.47278 }],
    ]);

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
        firstgid: number;
        tilecount: number;
        image: string;
        imageheight: number;
        imagewidth: number;
        tiles: Tile[];
        properties: Propertie[];
    }

    export interface Tile {
        id: number;
        image: string;
        imageheight: number;
        imagewidth: number;
    }

    export interface Propertie {
        name: string;
        type: string;
        value: number;
    }

    ///////////////////////////////////////////////////////////////////////////////

    export abstract class Element {
        protected x!: number;
        protected y!: number;
        protected gid!: number;

        static create<T>(sign: string, cls: new () => T): T {
            return Laya.Pool.getItemByClass(sign, cls);
        }

        init(x: number, y: number, gid: number): void {
            this.x = x; this.y = y; this.gid = gid;
        }

        recover(): void {
            this.reset();
            Laya.Pool.recoverByClass(this);
        }

        abstract draw(context: WorldContext): void;
        abstract reset(): void;
    }

    export class GroundElement extends Element {

        private static atlas: Laya.AtlasResource;
        private static texture: Laya.Texture2D;
        private static prefab: Laya.Prefab;

        private _tile?: Laya.Sprite3D;

        override async draw(context: WorldContext) {
            if (!GroundElement.atlas) {
                GroundElement.atlas = await Laya.loader.load("resources/texture/world-map/ground/ground.atlas", Laya.Loader.ATLAS);
            }
            if (!GroundElement.texture) {
                GroundElement.texture = await Laya.loader.load("resources/texture/world-map/ground/ground.png", Laya.Loader.TEXTURE2D);
            }
            if (!GroundElement.prefab) {
                GroundElement.prefab = await Laya.loader.load("resources/prefab/world-map/ground/ground-tile.lh", Laya.Loader.HIERARCHY);
            }
            this._tile = GroundElement.prefab.create() as Laya.Sprite3D;

            const pos = this._tile.transform.position;
            pos.x = this.x;
            pos.y = 0;
            pos.z = this.y
            this._tile.transform.position = pos;

            const mat = new Laya.BlinnPhongMaterial(); // 使用 UnlitMaterial 时 tilingOffset 会失效
            const path = GroundElement.atlas.frames[this.gid - 1].url;
            const tex = Laya.loader.getRes(path) as Laya.Texture;
            mat.albedoTexture = GroundElement.texture;
            mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
            mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
            mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
            mat.tilingOffset.w = (1 - mat.tilingOffset.y) - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）

            const renderer = this._tile.getChildAt(0).getComponent(Laya.MeshRenderer);
            renderer.material = mat;

            context.scene3D.addChild(this._tile);
        }

        override reset() {
            this._tile?.removeSelf();
        }
    }

    export class StaticElement extends Element {

        private static prefab: Laya.Prefab;
        private _staticObj?: Laya.Sprite3D;

        override async draw(context: WorldContext) {
            if (!StaticElement.prefab) {
                StaticElement.prefab = await Laya.loader.load("resources/prefab/world-map/static/static-obj.lh", Laya.Loader.HIERARCHY);
            }
            const cfg = TilemapComponent.STATIC_CFG_MAP.get(this.gid);
            if (!cfg) {
                return;
            }
            this._staticObj = StaticElement.prefab.create() as Laya.Sprite3D;

            const pos = this._staticObj.transform.position;
            pos.x = this.x;
            pos.y = cfg.offsetY * TilemapComponent.STATIC_SCALE;
            pos.z = this.y;
            this._staticObj.transform.position = pos;

            const renderer = this._staticObj.getChildAt(0).getComponent(Laya.MeshRenderer);
            const mat = new Laya.UnlitMaterial();
            const path = StringUtil.format("resources/texture/world-map/static/{0}.png", cfg.resName);
            const texture = await Laya.loader.load(path, Laya.Loader.TEXTURE2D) as Laya.Texture2D;
            mat.albedoTexture = texture;
            mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
            renderer.material = mat;

            const scaleX = (texture.width / TilemapComponent.STATIC_BASE_WIDTH) * TilemapComponent.STATIC_SCALE;
            const scaleZ = (texture.height / TilemapComponent.STATIC_BASE_HEIGHT) * TilemapComponent.STATIC_SCALE;
            this._staticObj.transform.localScaleX = scaleX;
            this._staticObj.transform.localScaleZ = scaleZ;

            const rotateX = context.camera.transform.localRotationEulerX;
            this._staticObj.transform.localRotationEulerX = -rotateX;

            context.scene3D.addChild(this._staticObj);
        }

        override reset() {
            this._staticObj?.removeSelf();
        }
    }

    export interface StaticConfig {
        resName: string;
        offsetY: number;
    }
}