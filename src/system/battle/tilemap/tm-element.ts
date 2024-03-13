import { Constructor } from "../../../core/dispatcher";
import { StringUtil } from "../../../core/utils/string-util";
import { Tilemap } from "./tilemap";
import { TMAtlasName, TMLayerName, TMTextureCfg, TMTextureName } from "./tm-def";
import { TMUtil } from "./tm-util";

export abstract class TMElement {
    private static UID: number = 0;
    protected _tilemap!: Tilemap;

    private _uid!: number;
    private _x!: number;
    private _y!: number;
    private _props!: Map<string, any>;
    private _layerName!: string;
    private _eid?: number;

    public get uid(): number {
        return this._uid;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get props(): Map<string, any> {
        return this._props;
    }

    public get layerName(): string {
        return this._layerName;
    }

    public get eid(): number {
        return this._eid ?? 0;
    }

    public static create<T>(sign: string, cls: Constructor<T>): T {
        return Laya.Pool.getItemByClass(sign, cls);
    }

    public init(
        tilemap: Tilemap,
        x: number,
        y: number,
        props: Map<string, any>,
        layerName: string,
        eid?: number
    ): void {
        this._uid = --TMElement.UID;
        this._tilemap = tilemap;
        this._x = x;
        this._y = y;
        this._props = props;
        this._layerName = layerName;
        this._eid = eid;
    }

    public recover(): void {
        this.erase();
        Laya.Pool.recoverByClass(this);
    }

    public abstract draw(): void;
    public abstract erase(): void;
}

export abstract class TMTileElemet extends TMElement {
    private _tile?: Laya.Sprite3D;

    public get gid(): number {
        return this.props.get("gid");
    }

    public override async draw() {
        if (this._tile) {
            return;
        }
        const idx = this._tilemap.getAtlasFrameIdx(this.getAtlasName(), this.gid);
        if (idx == 0 && this.ignoreFirstFrame()) {
            return;
        }
        const [atlasPath, texturePath, prefabPath] = this.getResPaths();
        const atlas = await Laya.loader.load(atlasPath, Laya.Loader.ATLAS);
        const texture = await Laya.loader.load(texturePath, Laya.Loader.TEXTURE2D);
        const prefab = await Laya.loader.load(prefabPath, Laya.Loader.HIERARCHY);

        this._tile = prefab.create() as Laya.Sprite3D;

        const pos = this._tile.transform.position;
        pos.x = this.x;
        pos.y = this.getOffsetY();
        pos.z = this.y;
        this._tile.transform.position = pos;

        const mat = new Laya.BlinnPhongMaterial(); // 使用 UnlitMaterial 时 tilingOffset 会失效
        const path = atlas.frames[idx].url;
        const tex = Laya.loader.getRes(path) as Laya.Texture;
        mat.albedoTexture = texture;
        mat.tilingOffset.x = tex.uvrect[2]; // 瓦片宽度
        mat.tilingOffset.y = tex.uvrect[3]; // 瓦片高度
        mat.tilingOffset.z = tex.uvrect[0]; // X坐标偏移
        mat.tilingOffset.w = 1 - mat.tilingOffset.y - tex.uvrect[1]; // Y坐标偏移（拿到的偏移值是基于左上角的，这里转成右下角的）
        mat.renderMode = this.getRenderMode();

        const renderer = this._tile.getChildAt(0).getComponent(Laya.MeshRenderer);
        renderer.material = mat;

        if (TMUtil.DEBUG_MODE) {
            this._tile.transform.localScaleX = 0.98;
            this._tile.transform.localScaleZ = 0.98;
        }

        this._tile.name = this.x + "_" + this.y;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._tile);
    }

    public override erase() {
        this._tile?.removeSelf();
        this._tile = undefined;
    }

    protected abstract getAtlasName(): TMAtlasName;
    protected abstract getResPaths(): string[];
    protected abstract getOffsetY(): number;
    protected abstract getRenderMode(): Laya.MaterialRenderMode;
    protected abstract ignoreFirstFrame(): boolean;
}

export class TMGroundElement extends TMTileElemet {
    protected override getAtlasName(): TMAtlasName {
        return TMAtlasName.Ground;
    }

    protected override getResPaths(): string[] {
        return [
            "resources/texture/world-map/ground/ground.atlas",
            "resources/texture/world-map/ground/ground.png",
            "resources/prefab/world-map/ground/ground-tile.lh",
        ];
    }

    protected override getOffsetY(): number {
        return -0.01;
    }

    protected override getRenderMode(): Laya.MaterialRenderMode {
        return Laya.MaterialRenderMode.RENDERMODE_OPAQUE;
    }

    protected override ignoreFirstFrame(): boolean {
        return false;
    }
}

export class TMRoadElement extends TMTileElemet {
    protected override getAtlasName(): TMAtlasName {
        return TMAtlasName.Road;
    }

    protected override getResPaths(): string[] {
        return [
            "resources/texture/world-map/road/road.atlas",
            "resources/texture/world-map/road/road.png",
            "resources/prefab/world-map/road/road-tile.lh",
        ];
    }

    protected override getOffsetY(): number {
        return 0;
    }

    protected override getRenderMode(): Laya.MaterialRenderMode {
        return Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
    }

    protected override ignoreFirstFrame(): boolean {
        return true;
    }
}

export class TMRiverElement extends TMTileElemet {
    protected override getAtlasName(): TMAtlasName {
        return TMAtlasName.River;
    }

    protected override getResPaths(): string[] {
        return [
            "resources/texture/world-map/river/river.atlas",
            "resources/texture/world-map/river/river.png",
            "resources/prefab/world-map/river/river-tile.lh",
        ];
    }

    protected override getOffsetY(): number {
        return 0;
    }

    protected override getRenderMode(): Laya.MaterialRenderMode {
        return Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
    }

    protected override ignoreFirstFrame(): boolean {
        return true;
    }
}

export abstract class TMBoardElement extends TMElement {
    private _board?: Laya.Sprite3D;
    private _startX: number = 0;
    private _startY: number = 0;
    private _width: number = 0;
    private _height: number = 0;
    private _resName: string = "";

    public get startX(): number {
        return this._startX;
    }

    public get startY(): number {
        return this._startY;
    }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    public get gid(): number {
        return this.props.get("gid");
    }

    public override async draw() {
        if (this._board) {
            return;
        }
        const prefab = await Laya.loader.load(this.getPrefabPath(), Laya.Loader.HIERARCHY);

        this._board = prefab.create() as Laya.Sprite3D;

        const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
        const resName = this._tilemap.getTextureResName(this.getTextureName(), this.gid);
        const textureCfg = this.getTextureCfg().get(resName);

        this._startX = Math.floor(this.x - (textureCfg?.tileX ?? 0));
        this._startY = Math.floor(this.y - (textureCfg?.tileY ?? 0));

        const objPos = this._board.transform.position;
        objPos.x = this._startX;
        objPos.y = 0;
        objPos.z = this._startY;
        this._board.transform.position = objPos;

        const spritePos = sprite.transform.localPosition;
        spritePos.x = textureCfg?.offsetX ?? 0;
        spritePos.y = textureCfg?.offsetY ?? 0;
        spritePos.z = textureCfg?.offsetZ ?? 0;
        sprite.transform.localPosition = spritePos;

        sprite.transform.localScaleX = textureCfg?.scale ?? 1;
        sprite.transform.localScaleY = textureCfg?.scale ?? 1;

        const cameraTrans = this._tilemap.context.camera.transform;
        sprite.transform.localRotationEulerX = cameraTrans.localRotationEulerX;
        sprite.transform.localRotationEulerY = cameraTrans.localRotationEulerY;

        this.setTexture(resName);

        this._width = textureCfg?.tileW ?? 1;
        this._height = textureCfg?.tileH ?? 1;

        this._board.name = this.startX + "_" + this.startY + " | " + resName;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._board);
    }

    public async setTexture(resName: string) {
        if (!this._board || this._resName == resName) {
            return;
        }
        const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
        const renderer = sprite.getComponent(Laya.MeshRenderer);

        const mat = new Laya.UnlitMaterial();
        const path = StringUtil.format(this.getTexturePath(), resName);
        const texture = (await Laya.loader.load(path, Laya.Loader.TEXTURE2D)) as Laya.Texture2D;
        mat.albedoTexture = texture;
        mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        renderer.material = mat;

        this._resName = resName;
    }

    public showBlock() {
        for (let $x = this.startX; $x < this.startX + this.width; $x++) {
            for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                this._tilemap.showBlocks.set(TMUtil.XY_TO_KEY($x, $y), true);
                const element = this._tilemap.getElementByPos($x, $y, TMLayerName.Block);
                element?.draw();
            }
        }
    }

    public hideBlock() {
        for (let $x = this.startX; $x < this.startX + this.width; $x++) {
            for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                this._tilemap.showBlocks.delete(TMUtil.XY_TO_KEY($x, $y));
                const element = this._tilemap.getElementByPos($x, $y, TMLayerName.Block);
                element?.erase();
            }
        }
    }

    public override erase() {
        this.hideBlock();
        this._board?.removeSelf();
        this._board = undefined;
        this._startX = 0;
        this._startY = 0;
        this._width = 0;
        this._height = 0;
        this._resName = "";
    }

    protected abstract getPrefabPath(): string;
    protected abstract getTexturePath(): string;
    protected abstract getTextureName(): TMTextureName;
    protected abstract getTextureCfg(): Map<string, TMTextureCfg>;
}

export class TMStaticElement extends TMBoardElement {
    protected override getPrefabPath(): string {
        return "resources/prefab/world-map/static/static-obj.lh";
    }

    protected override getTexturePath(): string {
        return "resources/texture/world-map/static/{0}.png";
    }

    protected override getTextureName(): TMTextureName {
        return TMTextureName.Static;
    }

    protected override getTextureCfg(): Map<string, TMTextureCfg> {
        return TMUtil.STATIC_TEXTURE_CFG;
    }
}

export class TMDynamicElement extends TMBoardElement {
    protected override getPrefabPath(): string {
        return "resources/prefab/world-map/dynamic/dynamic-obj.lh";
    }

    protected override getTexturePath(): string {
        return "resources/texture/world-map/dynamic/{0}.png";
    }

    protected override getTextureName(): TMTextureName {
        return TMTextureName.Dynamic;
    }

    protected override getTextureCfg(): Map<string, TMTextureCfg> {
        return TMUtil.DYNAMIC_TEXTURE_CFG;
    }
}

export class TMBlockElement extends TMElement {
    private _blockTile?: Laya.Sprite3D;

    public override async draw() {
        if (this._blockTile) {
            return;
        }
        const key = TMUtil.XY_TO_KEY(this.x, this.y);
        if (!this._tilemap.showBlocks.get(key)) {
            return;
        }
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/block/block-tile.lh",
            Laya.Loader.HIERARCHY
        );

        this._blockTile = prefab.create() as Laya.Sprite3D;

        const pos = this._blockTile.transform.position;
        pos.x = this.x;
        pos.y = 0.01;
        pos.z = this.y;
        this._blockTile.transform.position = pos;

        this._blockTile.name = this.x + "_" + this.y;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._blockTile);
    }

    public override erase() {
        this._blockTile?.removeSelf();
        this._blockTile = undefined;
    }
}

export abstract class TMObjectElement extends TMElement {
    public get id(): number {
        return this.props.get("id");
    }

    public get realX(): number {
        return this.props.get("realX");
    }

    public get realY(): number {
        return this.props.get("realY");
    }
}

export class TMBuildingElement extends TMObjectElement {
    private _debugObjs: Laya.Sprite3D[] = [];

    public override async draw() {
        if (this._debugObjs.length > 0) {
            return;
        }
        if (!TMUtil.DEBUG_MODE) {
            return;
        }
        const dynamicElement = this._tilemap.buildingToDynamicElemnt(this.uid);
        if (!dynamicElement) {
            return;
        }
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/test/debug-obj.lh",
            Laya.Loader.HIERARCHY
        );
        for (let i = 0; i < dynamicElement.width; i++) {
            for (let j = 0; j < dynamicElement.height; j++) {
                const debugObj = prefab.create() as Laya.Sprite3D;
                this._debugObjs.push(debugObj);

                const pos = debugObj.transform.position;
                pos.x = dynamicElement.startX + i;
                pos.y = 0;
                pos.z = dynamicElement.startY + j;
                debugObj.transform.position = pos;

                debugObj.name = this.x + "_" + this.y + " (" + i + "," + j + ")";
                this._tilemap.getRoot().getChildByName(this.layerName).addChild(debugObj);
            }
        }
    }

    public override erase() {
        this._debugObjs.forEach((obj) => {
            obj.removeSelf();
        });
        this._debugObjs = [];
    }
}

export class TMMonsterElement extends TMObjectElement {
    private _debugObj?: Laya.Sprite3D;

    public override async draw() {
        if (this._debugObj) {
            return;
        }
        if (!TMUtil.DEBUG_MODE) {
            return;
        }
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/test/debug-obj.lh",
            Laya.Loader.HIERARCHY
        );

        this._debugObj = prefab.create() as Laya.Sprite3D;

        const pos = this._debugObj.transform.position;
        pos.x = this.x;
        pos.y = 0;
        pos.z = this.y;
        this._debugObj.transform.position = pos;

        this._debugObj.name = this.x + "_" + this.y;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._debugObj);
    }

    public override erase() {
        this._debugObj?.removeSelf();
        this._debugObj = undefined;
    }
}
