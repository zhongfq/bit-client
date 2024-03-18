import { app } from "../../../app";
import { Constructor } from "../../../core/dispatcher";
import { Pool } from "../../../core/pool";
import { tween } from "../../../core/tween/tween";
import { StringUtil } from "../../../core/utils/string-util";
import { Tilemap } from "./tilemap";
import { TMAtlasName, TMLayerName, TMMode, TMPropKey, TMTextureCfg, TMTextureName } from "./tm-def";
import { TMUtil } from "./tm-util";

export abstract class TMElement {
    private static UID: number = 0;
    protected _tilemap!: Tilemap;

    private _uid!: number;
    private _gridX!: number;
    private _gridY!: number;
    private _props!: Map<string, unknown>;
    private _layerName!: string;
    private _eid?: number;

    public get uid(): number {
        return this._uid;
    }

    public get gridX(): number {
        return this._gridX;
    }

    public get gridY(): number {
        return this._gridY;
    }

    public get props(): Map<string, unknown> {
        return this._props;
    }

    public get layerName(): string {
        return this._layerName;
    }

    public get eid(): number {
        return this._eid ?? 0;
    }

    public static create<T>(cls: Constructor<T>): T {
        return Pool.obtain(cls);
    }

    public init(
        tilemap: Tilemap,
        gridX: number,
        gridY: number,
        props: Map<string, unknown>,
        layerName: string,
        eid?: number
    ): void {
        this._uid = --TMElement.UID;
        this._tilemap = tilemap;
        this._gridX = gridX;
        this._gridY = gridY;
        this._props = props;
        this._layerName = layerName;
        this._eid = eid;
    }

    public recover(): void {
        this.erase();
        Pool.free(this);
    }

    public abstract draw(): void;
    public abstract erase(): void;
}

export abstract class TMTileElemet extends TMElement {
    private _tile?: Laya.Sprite3D;

    public get gid(): number {
        return this.props.get(TMPropKey.Gid) as number;
    }

    public override async draw() {
        if (this._tile) {
            return;
        }
        const idx = this._tilemap.getAtlasFrameIdx(this.getAtlasName(), this.gid);
        if (idx == 0 && this.ignoreFirstFrame()) {
            return;
        }
        const cacheUid = this.uid;

        const [atlasPath, texturePath, prefabPath] = this.getResPaths();
        const atlas = await Laya.loader.load(atlasPath, Laya.Loader.ATLAS);
        const texture = await Laya.loader.load(texturePath, Laya.Loader.TEXTURE2D);
        const prefab = await Laya.loader.load(prefabPath, Laya.Loader.HIERARCHY);

        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        this._tile = prefab.create() as Laya.Sprite3D;

        const pos = this._tile.transform.position;
        pos.x = this.gridX;
        pos.y = this.getOffsetY();
        pos.z = this.gridY;
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

        this._tile.name = this.gridX + "_" + this.gridY;
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

export class TMStaticElement extends TMElement {
    private _root?: Laya.Sprite3D;
    private _startX: number = 0;
    private _startY: number = 0;
    private _width: number = 0;
    private _height: number = 0;

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
        return this.props.get(TMPropKey.Gid) as number;
    }

    public override async draw() {
        if (this._root) {
            return;
        }
        const cacheUid = this.uid;

        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/static/static-obj.lh",
            Laya.Loader.HIERARCHY
        );
        const resName = this._tilemap.getTextureResName(TMTextureName.Static, this.gid);
        const path = StringUtil.format("resources/texture/world-map/static/{0}.png", resName);
        const texture = (await Laya.loader.load(path, Laya.Loader.TEXTURE2D)) as Laya.Texture2D;

        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        this._root = prefab.create() as Laya.Sprite3D;

        const sprite = this._root.getChildAt(0) as Laya.Sprite3D;
        const textureCfg = app.service.table.textureCfg[resName];

        this._startX = Math.floor(this.gridX - (textureCfg?.tile_x ?? 0));
        this._startY = Math.floor(this.gridY - (textureCfg?.tile_y ?? 0));

        const objPos = this._root.transform.position;
        objPos.x = this._startX;
        objPos.y = 0;
        objPos.z = this._startY;
        this._root.transform.position = objPos;

        const spritePos = sprite.transform.localPosition;
        spritePos.x = textureCfg?.offset_x ?? 0;
        spritePos.y = textureCfg?.offset_y ?? 0;
        spritePos.z = textureCfg?.offset_z ?? 0;
        sprite.transform.localPosition = spritePos;

        sprite.transform.localScaleX = textureCfg?.scale ?? 1;
        sprite.transform.localScaleY = textureCfg?.scale ?? 1;

        const cameraTrans = this._tilemap.context.camera.transform;
        sprite.transform.localRotationEulerX = cameraTrans.localRotationEulerX;
        sprite.transform.localRotationEulerY = cameraTrans.localRotationEulerY;

        const renderer = sprite.getComponent(Laya.MeshRenderer);
        const mat = new Laya.UnlitMaterial();
        mat.albedoTexture = texture;
        mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        renderer.material = mat;

        this._width = textureCfg?.tile_w ?? 1;
        this._height = textureCfg?.tile_h ?? 1;

        this._root.name = this.startX + "_" + this.startY + " | " + resName;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._root);
    }

    public override erase() {
        this._root?.removeSelf();
        this._root = undefined;
        this._startX = 0;
        this._startY = 0;
        this._width = 0;
        this._height = 0;
    }
}

export class TMObjectElement extends TMElement {
    private _board?: Laya.Sprite3D;
    private _startX: number = 0;
    private _startY: number = 0;
    private _width: number = 0;
    private _height: number = 0;
    private _resName: string = "";
    private _drawing: boolean = false;
    private _originPos: Laya.Vector3 = new Laya.Vector3();

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

    public override async draw() {
        if (this._board || this._drawing) {
            return;
        }
        this._drawing = true;

        const cacheUid = this.uid;
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/object/object-obj.lh",
            Laya.Loader.HIERARCHY
        );
        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        this._board = prefab.create() as Laya.Sprite3D;

        const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
        const defaultRes = this.props.get(TMPropKey.TextureKey) as string;
        const textureCfg = app.service.table.textureCfg[defaultRes];

        const objPos = this._board.transform.position;
        objPos.x = this.gridX;
        objPos.y = 0;
        objPos.z = this.gridY;
        this._board.transform.position = objPos;

        const spritePos = sprite.transform.localPosition;
        spritePos.x = textureCfg?.offset_x ?? 0;
        spritePos.y = textureCfg?.offset_y ?? 0;
        spritePos.z = textureCfg?.offset_z ?? 0;
        sprite.transform.localPosition = spritePos;
        this._originPos.set(spritePos.x, spritePos.y, spritePos.z);

        sprite.transform.localScaleX = textureCfg?.scale ?? 1;
        sprite.transform.localScaleY = textureCfg?.scale ?? 1;

        const cameraTrans = this._tilemap.context.camera.transform;
        sprite.transform.localRotationEulerX = cameraTrans.localRotationEulerX;
        sprite.transform.localRotationEulerY = cameraTrans.localRotationEulerY;

        this.setTexture(this._resName || defaultRes, true);

        this._startX = this.gridX;
        this._startY = this.gridY;

        this._width = textureCfg?.tile_w ?? 1;
        this._height = textureCfg?.tile_h ?? 1;

        this._board.name = this.startX + "_" + this.startY + " | " + defaultRes;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._board);

        this._drawing = false;
    }

    public async setTexture(resName: string, force: boolean = false) {
        if (this._resName == resName && !force) {
            return;
        }
        this._resName = resName;

        const cacheUid = this.uid;
        const path = StringUtil.format("resources/texture/world-map/object/{0}.png", resName);
        const texture = (await Laya.loader.load(path, Laya.Loader.TEXTURE2D)) as Laya.Texture2D;

        // 如果uid和缓存的不一致，说明对象复用了
        if (!this._board || cacheUid !== this.uid) {
            return;
        }
        const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
        const renderer = sprite.getComponent(Laya.MeshRenderer);

        const mat = new Laya.UnlitMaterial();
        mat.albedoTexture = texture;
        mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        renderer.material = mat;
    }

    public shake() {
        if (!this._board) {
            return;
        }
        const sprite = this._board.getChildAt(0) as Laya.Sprite3D;
        const spritePos = sprite.transform.localPosition;
        spritePos.x = this._originPos.x;
        spritePos.y = this._originPos.y;
        spritePos.z = this._originPos.z;
        sprite.transform.localPosition = spritePos;

        tween(sprite.transform)
            .to(0.05, {
                localPositionX: this._originPos.x + 0.03,
                localPositionZ: this._originPos.z - 0.03,
            })
            .to(0.05, {
                localPositionX: this._originPos.x - 0.03,
                localPositionZ: this._originPos.z + 0.03,
            })
            .to(0.05, {
                localPositionX: this._originPos.x + 0.02,
                localPositionZ: this._originPos.z - 0.02,
            })
            .to(0.05, {
                localPositionX: this._originPos.x - 0.02,
                localPositionZ: this._originPos.z + 0.02,
            })
            .to(0.05, {
                localPositionX: this._originPos.x + 0.01,
                localPositionZ: this._originPos.z - 0.01,
            })
            .to(0.05, {
                localPositionX: this._originPos.x - 0.01,
                localPositionZ: this._originPos.z + 0.01,
            })
            .to(0.05, {
                localPositionX: this._originPos.x,
                localPositionZ: this._originPos.z,
            })
            .start();
    }

    public showBlock() {
        for (let $x = this.startX; $x < this.startX + this.width; $x++) {
            for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                this._tilemap.showBlocks.set(TMUtil.xyToKey($x, $y), true);
                const element = this._tilemap.getElementByPos($x, $y, TMLayerName.Block);
                element?.draw();
            }
        }
    }

    public hideBlock() {
        for (let $x = this.startX; $x < this.startX + this.width; $x++) {
            for (let $y = this.startY; $y < this.startY + this.height; $y++) {
                this._tilemap.showBlocks.delete(TMUtil.xyToKey($x, $y));
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
        this._drawing = false;
        this._originPos.toDefault();
    }
}

export class TMBlockElement extends TMElement {
    private _blockTile?: Laya.Sprite3D;

    public override async draw() {
        if (this._blockTile) {
            return;
        }
        const key = TMUtil.xyToKey(this.gridX, this.gridY);
        if (!this._tilemap.showBlocks.get(key)) {
            return;
        }
        const cacheUid = this.uid;
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/block/block-tile.lh",
            Laya.Loader.HIERARCHY
        );
        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        this._blockTile = prefab.create() as Laya.Sprite3D;

        const pos = this._blockTile.transform.position;
        pos.x = this.gridX;
        pos.y = 0.01;
        pos.z = this.gridY;
        this._blockTile.transform.position = pos;

        this._blockTile.name = this.gridX + "_" + this.gridY;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._blockTile);
    }

    public override erase() {
        this._blockTile?.removeSelf();
        this._blockTile = undefined;
    }
}

export abstract class TMDebugElement extends TMElement {
    public get id(): number {
        return this.props.get(TMPropKey.ID) as number;
    }

    public get realX(): number {
        return this.props.get(TMPropKey.RealX) as number;
    }

    public get realY(): number {
        return this.props.get(TMPropKey.RealY) as number;
    }
}

export class TMBuildingElement extends TMDebugElement {
    private _debugObjs: Laya.Sprite3D[] = [];

    public override async draw() {
        if (this._debugObjs.length > 0) {
            return;
        }
        if (!TMUtil.DEBUG_MODE) {
            return;
        }

        let textureCfg = undefined;
        const mode = this._tilemap.context.mode;

        if (mode == TMMode.PVE) {
            const buildingRow = app.service.table.battleBuilding[this.id];
            textureCfg = app.service.table.textureCfg[buildingRow.texture_key];
        } else if (mode == TMMode.PVP) {
            // TODO：先临时读 battle_building 表，后面需要改读 world_building 表
            const buildingRow = app.service.table.battleBuilding[this.id];
            textureCfg = app.service.table.textureCfg[buildingRow.texture_key];
        }

        if (!textureCfg) {
            return;
        }
        const cacheUid = this.uid;
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/test/debug-obj.lh",
            Laya.Loader.HIERARCHY
        );
        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        for (let i = 0; i < textureCfg.tile_w; i++) {
            for (let j = 0; j < textureCfg.tile_h; j++) {
                const debugObj = prefab.create() as Laya.Sprite3D;
                this._debugObjs.push(debugObj);

                const pos = debugObj.transform.position;
                pos.x = this.gridX + i;
                pos.y = 0.01;
                pos.z = this.gridY + j;
                debugObj.transform.position = pos;

                const sprite = debugObj.getChildAt(0) as Laya.Sprite3D;
                const renderer = sprite.getComponent(Laya.MeshRenderer);
                const mat = new Laya.UnlitMaterial();
                mat.albedoColor = Laya.Color.BLUE; // new Laya.Color(85, 170, 255, 255);
                mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
                renderer.material = mat;

                debugObj.name = this.gridX + "_" + this.gridY + " (" + i + "," + j + ")";
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

export class TMMonsterElement extends TMDebugElement {
    private _debugObj?: Laya.Sprite3D;

    public override async draw() {
        if (this._debugObj) {
            return;
        }
        if (!TMUtil.DEBUG_MODE) {
            return;
        }
        const cacheUid = this.uid;
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/test/debug-obj.lh",
            Laya.Loader.HIERARCHY
        );
        // 如果uid和缓存的不一致，说明对象复用了
        if (cacheUid !== this.uid) {
            return;
        }
        this._debugObj = prefab.create() as Laya.Sprite3D;

        const pos = this._debugObj.transform.position;
        pos.x = this.gridX;
        pos.y = 0.01;
        pos.z = this.gridY;
        this._debugObj.transform.position = pos;

        const sprite = this._debugObj.getChildAt(0) as Laya.Sprite3D;
        const renderer = sprite.getComponent(Laya.MeshRenderer);
        const mat = new Laya.UnlitMaterial();
        mat.albedoColor = Laya.Color.MAGENTA; // new Laya.Color(255, 85, 255, 255);
        mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        renderer.material = mat;

        this._debugObj.name = this.gridX + "_" + this.gridY;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._debugObj);
    }

    public override erase() {
        this._debugObj?.removeSelf();
        this._debugObj = undefined;
    }
}

export class TMEventElement extends TMDebugElement {
    private _debugObj?: Laya.Sprite3D;

    public override async draw() {
        if (this._debugObj) {
            return;
        }
        if (!TMUtil.DEBUG_MODE) {
            return;
        }
        const cacheUid = this.uid;
        const prefab = await Laya.loader.load(
            "resources/prefab/world-map/test/debug-obj.lh",
            Laya.Loader.HIERARCHY
        );
        if (cacheUid !== this.uid) {
            return;
        }
        this._debugObj = prefab.create() as Laya.Sprite3D;

        const pos = this._debugObj.transform.position;
        pos.x = this.gridX;
        pos.y = 0.01;
        pos.z = this.gridY;
        this._debugObj.transform.position = pos;

        const sprite = this._debugObj.getChildAt(0) as Laya.Sprite3D;
        const renderer = sprite.getComponent(Laya.MeshRenderer);
        const mat = new Laya.UnlitMaterial();
        mat.albedoColor = Laya.Color.YELLOW; // new Laya.Color(255, 247, 0, 255);
        mat.renderMode = Laya.MaterialRenderMode.RENDERMODE_TRANSPARENT;
        renderer.material = mat;

        this._debugObj.name = this.gridX + "_" + this.gridY;
        this._tilemap.getRoot().getChildByName(this.layerName).addChild(this._debugObj);
    }

    public override erase() {
        this._debugObj?.removeSelf();
        this._debugObj = undefined;
    }
}
