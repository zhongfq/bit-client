import { ecs } from "../../../../core/ecs";
import { StringUtil } from "../../../../core/utils/string-util";
import { WorldContext } from "../../world-context";
import { Tilemap, TilemapComponent } from "../components/tilemap-component";

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
                case Tilemap.LayerName.Static:
                    this._initStatic(worldMap, layer);
                    break;
                case Tilemap.LayerName.Block:
                    this._initBlock(worldMap, layer);
                    break;
                default:
                    break;
            }
        })
    }

    private async _initGround(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

        const atlas: Laya.AtlasResource = await Laya.loader.load("resources/texture/world-map/ground/ground.atlas", Laya.Loader.ATLAS);
        const texture: Laya.Texture2D = await Laya.loader.load("resources/texture/world-map/ground/ground.png", Laya.Loader.TEXTURE2D);
        const prefab: Laya.Prefab = await Laya.loader.load("resources/prefab/world-map/ground/ground-tile.lh", Laya.Loader.HIERARCHY);

        for (let i = 0; i < layer.data.length; i++) {
            const gid = layer.data[i];
            const tile = prefab.create() as Laya.Sprite3D;

            const pos = tile.transform.position;
            pos.x = i % worldMap.width;
            pos.y = 0;
            pos.z = Math.floor(i / worldMap.width);
            tile.transform.position = pos;

            const mat = new Laya.BlinnPhongMaterial();
            const path = atlas.frames[gid - 1].url;
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
    }

    private async _initStatic(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

        const prefab: Laya.Prefab = await Laya.loader.load("resources/prefab/world-map/static-ui3d/static-obj.lh", Laya.Loader.HIERARCHY);

        for (let i = 0; i < layer.data.length; i++) {
            const gid = layer.data[i];
            if (!gid) {
                continue;
            }
            const cfg = TilemapComponent.STATIC_CFG_MAP.get(gid);
            if (!cfg) {
                continue;
            }
            const staticObj = prefab.create() as Laya.Sprite3D;

            const pos = staticObj.transform.position;
            pos.x = i % worldMap.width;
            pos.y = cfg.offsetY * TilemapComponent.STATIC_SCALE;
            pos.z = Math.floor(i / worldMap.width);
            staticObj.transform.position = pos;

            const ui3d = staticObj.getChildAt(0).getComponent(Laya.UI3D);
            const uiRoot = ui3d.sprite as Laya.Box;
            const uiSprite = ui3d.sprite.getChildAt(0) as Laya.Sprite;
            const path = StringUtil.format("resources/texture/world-map/static/{0}.png", cfg.resName);
            const texture = await Laya.loader.load(path, Laya.Loader.IMAGE) as Laya.Texture;
            uiSprite.texture = texture;

            const srcWidth = texture.sourceWidth;
            const srcHeight = texture.sourceHeight;
            const scaleX = (srcWidth / TilemapComponent.STATIC_BASE_WIDTH) * TilemapComponent.STATIC_SCALE;
            const scaleY = (srcHeight / TilemapComponent.STATIC_BASE_HEIGHT) * TilemapComponent.STATIC_SCALE;
            uiRoot.size(srcWidth, srcHeight);
            uiSprite.size(srcWidth, srcHeight);
            ui3d.scale = new Laya.Vector2(scaleX, scaleY);
            ui3d.resolutionRate = Math.max(srcWidth / scaleX, srcHeight / scaleY);

            this.context.scene3D.addChild(staticObj);
        }
    }

    private _initBlock(worldMap: Tilemap.WorldMap, layer: Tilemap.Layer) {

    }

    update(dt: number): void {

    }
}