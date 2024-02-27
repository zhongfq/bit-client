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
        Block = "block",
        Static = "static",
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
}