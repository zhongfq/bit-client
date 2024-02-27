import { ecs } from "../../../../core/ecs";
import { WorldContext } from "../../world-context";
import { Tilemap } from "../components/tilemap-component";

export class TilemapSystem extends ecs.System {

    constructor(readonly context: WorldContext) {
        super();
        this._init();
    }

    private async _init() {
        const worldMap = await Laya.loader.fetch("resources/data/world-map.json", "json") as Tilemap.WorldMap;
        worldMap.layers.forEach(layer => {
            if (!layer.data) {
                return;
            }
            switch (layer.name) {
                case Tilemap.LayerName.Ground:
                    this._initGround(worldMap, layer);
                    break;
                case Tilemap.LayerName.Block:
                    this._initBlock(worldMap, layer);
                    break;
                case Tilemap.LayerName.Static:
                    this._initStatic(worldMap, layer);
                    break;
                default:
                    break;
            }
        })
    }

    private _initGround(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

        Laya.loader.load("resources/texture/world-map/ground.atlas", Laya.Loader.ATLAS).then((atlas: Laya.AtlasResource) => {
            Laya.loader.load("resources/texture/world-map/ground.png", Laya.Loader.TEXTURE2D).then((texture: Laya.Texture2D) => {
                Laya.loader.load("resources/prefab/world-map/ground-tile.lh", Laya.Loader.HIERARCHY).then((prefab: Laya.Prefab) => {

                    for (let i = 0; i < layer.data.length; i++) {
                        const gid = layer.data[i] - 1;
                        const tile = prefab.create() as Laya.Sprite3D;
                        
                        const pos = tile.transform.position;
                        pos.x = i % worldMap.width;
                        pos.y = -0.5;
                        pos.z = Math.floor(i / worldMap.width);
                        tile.transform.position = pos;
                        
                        const mat = new Laya.BlinnPhongMaterial();
                        const path = atlas.frames[gid].url;
                        const tex = Laya.loader.getRes(path) as Laya.Texture;
                        mat.albedoTexture = texture;
                        mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
                        mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
                        mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
                        mat.tilingOffset.w = (1 - mat.tilingOffset.y) - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）
                        
                        const renderer = tile.getChildAt(0).getComponent(Laya.MeshRenderer);
                        renderer.material = mat;
                        
                        this.context.scene3D.addChild(tile);
                    }
                    
                    // 打印测试
                    // for (let i = 0; i < atlas.frames.length; i++) {
                    //     const frame = atlas.frames[i];
                    //     let str = "";
                    //     for (let j = 0; j < frame.uvrect.length; j++) {
                    //         str += frame.uvrect[j] + " ";
                    //     }
                    //     console.log(str);
                    // }
                })
            })
        })
    }

    private _initBlock(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

    }

    private _initStatic(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

    }

    update(dt: number): void {

    }
}