const { regClass, property } = Laya;

@regClass()
export class PanelCommont extends Laya.Script {
    public declare owner: Laya.Button;

    @property({ type: Laya.Prefab })
    public cellPrefab!: Laya.Prefab;
}
