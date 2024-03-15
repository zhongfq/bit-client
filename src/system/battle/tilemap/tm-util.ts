import { Constructor } from "../../../core/dispatcher";
import { TMLayerName, TMTextureCfg } from "./tm-def";
import {
    TMBlockElement,
    TMBuildingElement,
    TMObjectElement,
    TMElement,
    TMEventElement,
    TMGroundElement,
    TMMonsterElement,
    TMRiverElement,
    TMRoadElement,
    TMStaticElement,
} from "./tm-element";

export class TMUtil {
    public static DEBUG_MODE = false; // 调试模式

    public static readonly VISION_WIDTH = 25; // 视野宽度（单位：米）
    public static readonly VISION_HEIGHT = 25; // 视野高度（单位：米）

    public static readonly MAP_WIDTH = 50; // 地图块宽度（仅第一块，单位：米）
    public static readonly MAP_HEIGHT = 50; // 地图块高度（仅第一块，单位：米）

    public static readonly TILE_WIDTH = 128; // 瓦片宽度（单位：像素）
    public static readonly TILE_HEIGHT = 64; // 瓦片高度（单位：像素）

    public static readonly XY_TO_KEY = (x: number, y: number) => {
        return Math.floor(x) + "_" + Math.floor(y);
    };

    public static readonly KEY_TO_XY = (key: string) => {
        const arr = key.split("_");
        return [Math.floor(Number(arr[0])), Math.floor(Number(arr[1]))];
    };

    public static readonly IN_RECT = (
        x: number,
        y: number,
        rectX: number,
        rectY: number,
        rectW: number,
        rectH: number
    ) => {
        return rectX <= x && x < rectX + rectW && rectY <= y && y < rectY + rectH;
    };

    public static readonly STATIC_TEXTURE_CFG: Map<string, TMTextureCfg> = new Map([
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

    public static readonly OBJECT_TEXTURE_CFG: Map<string, TMTextureCfg> = new Map([
        [
            "map_biulding_castle01",
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
                tileW: 1,
                tileH: 1,
                offsetX: -0.06037,
                offsetY: 1.0398,
                offsetZ: -0.12026,
                scale: 3,
            },
        ],
    ]);

    public static layerToCls(layerName: string): Constructor<TMElement> | null {
        switch (layerName) {
            case TMLayerName.Ground:
                return TMGroundElement;
            case TMLayerName.Road:
                return TMRoadElement;
            case TMLayerName.River:
                return TMRiverElement;
            case TMLayerName.Static:
                return TMStaticElement;
            case TMLayerName.Object:
                return TMObjectElement;
            case TMLayerName.Block:
                return TMBlockElement;
            case TMLayerName.Building:
                return TMBuildingElement;
            case TMLayerName.Monster:
                return TMMonsterElement;
            case TMLayerName.Event:
                return TMEventElement;
        }
        return null;
    }
}
