const { regClass, property } = Laya;
import { PanelCommont } from "../../../core/panel/PanelCommont";
import { ChatCellUI } from "./ChatCellUI";
import { ChatListPanelUIBase } from "./ChatListPanelUI.generated";

@regClass()
export class ChatListPanelUI extends ChatListPanelUIBase {
    panelCommont!: PanelCommont;
    private _allHeight: number = 0;
    cellData: any[] = [];
    cellNode: Laya.Node[] = [];

    @property({ type: Laya.Prefab })
    public cellPrefab!: Laya.Prefab;
    onAwake(): void {
        this.panelCommont = this.getComponent(PanelCommont);
    }
    addData(data: any) {
        let node = this.panelCommont.cellPrefab.create(data) as ChatCellUI;
        node.y = this._allHeight;
        node.setData(data);
        this.addChild(node);
        this.cellData.push(data);
        this.cellNode.push(node);
        this.resettingSize();
    }
    setArrayData(arrayData: any[]) {
        this.cellData = arrayData;
        this.cellNode = [];
        let height = 0;
        for (let data of this.cellData) {
            if (height >= this.height * 3) {
                break;
            }
            let node = this.panelCommont.cellPrefab.create(data) as ChatCellUI;
            node.setData(data);
            this.addChildAt(node, 0);

            this.cellNode.push(node);
            height += node.height;
        }
        this.resettingSize();
    }

    protected onScrollBarChange(scrollBar: Laya.ScrollBar): void {
        if (scrollBar.value == 0) {
            if (this.cellData.length > this.cellNode.length) {
                let node = this.addChildAt(
                    this.panelCommont.cellPrefab.create(this.cellData[this.cellNode.length]),
                    0
                ) as ChatCellUI;
                node.setData(this.cellData[this.cellNode.length]);
                let height = this._allHeight.toString();
                this.resettingSize();
                let height2 = this._allHeight;
                scrollBar.value = height2 - Number(height);
            }
        }

        super.onScrollBarChange(scrollBar);
    }

    resettingSize(): void {
        let addY = 0;
        for (let index = 0; index < this.numChildren; index++) {
            let node = this.getChildAt(index) as Laya.Sprite;
            node.y = addY;
            addY += node.height;
        }
        this._allHeight = addY;
        this.vScrollBar.max = this._allHeight - this.height;
    }
    refreshScrollBar() {
        this.vScrollBar.value = this.vScrollBar.max;
    }
}
