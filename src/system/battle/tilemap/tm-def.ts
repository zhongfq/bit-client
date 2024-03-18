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
    objects?: { [k: string]: TMObj };
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
    // 编辑器里的层
    Ground = "ground",
    Road = "road",
    River = "river",
    Block = "block",
    Static = "static",
    Marker = "marker",
    Building = "building",
    Monster = "monster",
    Event = "event",
    // 自定义对象层
    Object = "object",
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
    Object = "object",
}

export interface TMTextureCfg {
    tileX?: number;
    tileY?: number;
    tileW: number;
    tileH: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    scale: number;
}

export enum TMPropKey {
    // 外部变量
    ID = "id",
    // 内部变量
    OWNER = "__owner",
    Gid = "__gid",
    RealX = "__realX",
    RealY = "__realY",
    TextureKey = "__texture_key",
}

export enum TMMode {
    PVE = 1,
    PVP = 2,
}

export interface ITMContext {
    get scene3D(): Laya.Scene3D;
    get camera(): Laya.Camera;
    get mapDir(): string;
    get mode(): TMMode;

    onAddElement(element: TMElement): void;
    onDelElement(element: TMElement): void;
}
