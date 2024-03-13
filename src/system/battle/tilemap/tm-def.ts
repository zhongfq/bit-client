import { TMElement } from "./tm-element";

export interface TMWorld {
    maps: TMMapInfo[];
}

export interface TMMapInfo {
    fileName: string;
    x: number;
    y: number;
    width: number;
    height: number;
    worldMap?: TMWorldMap;
}

export interface TMWorldMap {
    width: number;
    height: number;
    tilewidth: number;
    tileheight: number;
    layers: TMLayer[];
    tilesets: TMTileSet[];
}

export interface TMLayer {
    id: number;
    name: string;
    type: TMLayerType;
    width: number;
    height: number;
    data?: number[];
    objects?: TMObj[];
}

export interface TMObj {
    id: number;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    properties?: TMPropertie[];
}

export enum TMLayerType {
    TileLayer = "tilelayer",
    ObjectGroup = "objectgroup",
    ImageLayer = "imagelayer",
    Group = "group",
}

export enum TMLayerName {
    Ground = "ground",
    Road = "road",
    River = "river",
    Static = "static",
    Dynamic = "dynamic",
    Block = "block",
    Building = "building",
    Monster = "monster",
}

export interface TMTileSet {
    name: string;
    firstgid: number;
    tilecount: number;
    image: string;
    imagewidth: number;
    imageheight: number;
    properties?: TMPropertie[];
    tiles: TMTile[];
}

export interface TMTile {
    id: number;
    image: string;
    imagewidth: number;
    imageheight: number;
    properties?: TMPropertie[];
}

export interface TMPropertie {
    name: string;
    type: string;
    value: any;
}

export enum TMAtlasName {
    Ground = "ground",
    Road = "road",
    River = "river",
}

export enum TMTextureName {
    Static = "static",
    Dynamic = "dynamic",
}

export interface TMTextureCfg {
    tileX: number;
    tileY: number;
    tileW: number;
    tileH: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    scale: number;
}

export interface ITMContext {
    get scene3D(): Laya.Scene3D;
    get camera(): Laya.Camera;
    get mapDir(): string;

    onAddElement(element: TMElement): void;
    onDelElement(element: TMElement): void;
}
