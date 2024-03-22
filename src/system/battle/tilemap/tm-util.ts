import { Constructor } from "../../../core/dispatcher";
import { IVector2Like } from "../../../core/laya";
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
    public static TILE_BATCH = false; // 瓦片是否合批

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

    public static createPlane(rect: Laya.Rectangle, uvMap: Map<string, IVector2Like[]>): Laya.Mesh {
        const vertexPerCnt = 4; // 每个Tile包含4个顶点
        const indexPerCnt = 6; // 每个Tile包含6个顶点序号

        const vertexCount: number = rect.width * rect.height * vertexPerCnt;
        const indexCount: number = rect.width * rect.height * indexPerCnt;

        const vertexDeclaration: Laya.VertexDeclaration =
            Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV");
        const vertexFloatStride: number = vertexDeclaration.vertexStride / 4;

        const vertices: Float32Array = new Float32Array(vertexCount * vertexFloatStride);
        const indices: Uint16Array = new Uint16Array(indexCount);

        let verticeCount: number = 0;
        let indiceIndex: number = 0;

        const xArr = [-0.5, 0.5, -0.5, 0.5];
        const yArr = [-0.5, -0.5, 0.5, 0.5];

        for (let y: number = 0; y < rect.height; y++) {
            for (let x: number = 0; x < rect.width; x++) {
                const uvs = uvMap.get(TMUtil.xyToKey(rect.x + x, rect.y + y))!;

                for (let i: number = 0; i < vertexPerCnt; i++) {
                    // POSITION
                    vertices[verticeCount++] = xArr[i] + x;
                    vertices[verticeCount++] = 0;
                    vertices[verticeCount++] = yArr[i] + y;
                    // NORMAL
                    vertices[verticeCount++] = 0;
                    vertices[verticeCount++] = 1;
                    vertices[verticeCount++] = 0;
                    // UV
                    vertices[verticeCount++] = uvs[i].x;
                    vertices[verticeCount++] = uvs[i].y;
                }

                const idx = (y * rect.width + x) * vertexPerCnt;

                indices[indiceIndex++] = idx + 2;
                indices[indiceIndex++] = idx + 0;
                indices[indiceIndex++] = idx + 3;

                indices[indiceIndex++] = idx + 0;
                indices[indiceIndex++] = idx + 1;
                indices[indiceIndex++] = idx + 3;
            }
        }
        return Laya.PrimitiveMesh._createMesh(vertexDeclaration, vertices, indices);
    }
}
