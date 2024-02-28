import { ecs } from "../../../../core/ecs";
import { IVector3Like } from "../../../../core/laya";

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

    static readonly STATIC_BASE_WIDTH = 256;
    static readonly STATIC_BASE_HEIGHT = 256;
    static readonly STATIC_SCALE = 3;

    static readonly STATIC_CFG_MAP: Map<number, Tilemap.StaticConfig> = new Map([
        [51, { resName: "map_Grassland_Tree_01", offsetY: 0.38591 }],
        [52, { resName: "map_Grassland_Tree_02", offsetY: 0.46933 }],
        [53, { resName: "map_Grassland_Tree_03", offsetY: 0.47747 }],
        [49, { resName: "map_Grassland_hill_01", offsetY: 0.69662 }],
        [50, { resName: "map_Grassland_hill_02", offsetY: 0.47278 }],
    ]);

    static readonly STATIC_CFG_MAP_UI3D: Map<number, Tilemap.StaticConfig> = new Map([
        [51, { resName: "map_Grassland_Tree_01", offsetY: 0.33846 }],
        [52, { resName: "map_Grassland_Tree_02", offsetY: 0.40402 }],
        [53, { resName: "map_Grassland_Tree_03", offsetY: 0.40269 }],
        [49, { resName: "map_Grassland_hill_01", offsetY: 0.60341 }],
        [50, { resName: "map_Grassland_hill_02", offsetY: 0.42114 }],
    ]);
}

export namespace Tilemap {

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
        Static = "static",
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

    export interface StaticConfig {
        resName: string;
        offsetY: number;
    }
}