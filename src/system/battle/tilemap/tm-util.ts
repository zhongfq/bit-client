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

    public static readonly xyToKey = (x: number, y: number) => {
        return Math.floor(x) + "_" + Math.floor(y);
    };

    public static readonly inRect = (
        x: number,
        y: number,
        rectX: number,
        rectY: number,
        rectW: number,
        rectH: number
    ) => {
        return rectX <= x && x < rectX + rectW && rectY <= y && y < rectY + rectH;
    };

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
