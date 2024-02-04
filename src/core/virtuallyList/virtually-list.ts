import { ChatCellUI } from "../../ui-runtime/prefab/chat/ChatCellUI";
import { VirtuallyListUI } from "../../ui-runtime/prefab/common/VirtuallyListUI";

const { regClass, property } = Laya;

@regClass()
export class VirtuallyList extends Laya.Script {
    declare owner: VirtuallyListUI;
    private _nodes: ChatCellUI[] = []; //预创建
    private _node2Idx: Map<Laya.Sprite, number> = new Map();
    private _mouseX!: number; //横向列表要用
    private _mouseY!: number; //鼠标的Y坐标
    private _contentRect: Laya.Rectangle = new Laya.Rectangle(); //当前列表中node的矩形
    private _data: any[] = []; //数据列表
    @property({ type: Laya.Prefab })
    public cellPrefab!: Laya.Prefab; //节点的预制体
    onAwake(): void {
        const node = this._createNode();
        const count = Math.ceil(this.owner.height / node.height) + 2;
        for (let i = 0; i < count; i++) {
            this._createNode();
        }
        //-------------------------------------------------|
        // this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // this.data = [1, 2, 3, 4, 5];
        // Laya.timer.once(5000, this, () => {
        //     // this._data.unshift(0);
        //     // this._data.unshift(-1);
        //     // this._data.unshift(-2);
        //     this._data.push(0);
        //     this._data.push(-1);
        //     this._data.push(-2);
        //     // this._node2Idx.forEach((idx, node) => {
        //     //     this._node2Idx.set(node, idx + 3);
        //     //     console.log(idx + 3);
        //     // });
        // });
        //测试数据
        //-------------------------------------------------|
        this.owner.on(Laya.Event.MOUSE_DOWN, this, this.onBarMouseDown);
    }
    /**
     *创建预制体
     * @returns 预制体创建出来的节点
     */
    private _createNode() {
        let node = this.cellPrefab.create() as ChatCellUI;
        node.visible = false;
        this.owner.addChild(node);
        this._nodes.push(node);
        return node;
    }
    private get fistIndex() {
        for (let i = 0; i < this._nodes.length; i++) {
            const node = this._nodes[i];
            if (node && node.visible) {
                return this._node2Idx.get(node) ?? 0;
            }
        }
        return 0;
    }
    private get backIndex() {
        for (let i = this._nodes.length; i >= 0; i--) {
            const node = this._nodes[i];
            if (node && node.visible) {
                return this._node2Idx.get(node) ?? 0;
            }
        }
        return 0;
    }
    /**
     *创建预制体
     * @returns 预制体创建出来的节点
     */
    onBarMouseDown() {
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;

        this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.owner.once(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.owner.once(Laya.Event.MOUSE_OUT, this, this.mouseUp);
    }
    mouseMove(e: Laya.Event) {
        let shiftingNum = Laya.stage.mouseY - this._mouseY;
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;
        if (shiftingNum > 0) {
            if (this.owner.scrollRect.y <= this._contentRect.y) {
                if (this.fistIndex > 0) {
                    this.moveUP();
                }
            }
            if (this.owner.scrollRect.y - shiftingNum < this._contentRect.y) {
                this.owner.scrollRect.y = this._contentRect.y;
                return;
            }
        } else if (shiftingNum < 0) {
            if (this.owner.scrollRect.bottom >= this._contentRect.bottom) {
                if (this.backIndex < this._data.length - 1) {
                    this.moveDown();
                }
            }
            if (
                this.owner.rectangle.y - shiftingNum >
                this._contentRect.bottom - this.owner.height
            ) {
                this.owner.rectangle.y = this._contentRect.bottom - this.owner.height;
                return;
            }
        }
        this.owner.rectangle.y -= shiftingNum;
    }
    mouseUp() {
        this.owner.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }
    set data(val: any[]) {
        this._data = val;

        this._contentRect.x = 0;
        this._contentRect.y = 0;
        this._contentRect.height = 0;
        this._contentRect.width = 0;
        this.owner.scrollRect.x = 0;
        this.owner.scrollRect.y = 0;
        for (let i = 0; i < this._data.length; i++) {
            let node = this._nodes[i] as ChatCellUI;
            if (!node) {
                break;
            }

            (node.getChildByName("Label") as Laya.Label).text = this._data[i];
            // node.height = Math.random();
            node.visible = true;
            node.y = this._contentRect.height;
            this._contentRect.height += node.height;
            this._node2Idx.set(node, i);
        }
    }

    moveDown() {
        const index = this.backIndex + 1;
        const node = this._nodes.shift()!;
        node.y = this._contentRect.bottom;
        this._contentRect.height -= node.height;
        console.log("index:", index);

        (node.getChildByName("Label") as Laya.Label).text = this._data[index];
        node.visible = true;
        this._nodes.push(node);
        this._node2Idx.set(node, index);
        this._contentRect.y += node.height;
        this._contentRect.height += node.height;
    }

    moveUP() {
        const index = this.fistIndex - 1;
        const node = this._nodes.pop()!;
        this._contentRect.height -= node.height;
        (node.getChildByName("Label") as Laya.Label).text = this._data[index];
        node.y = this._contentRect.y - node.height;
        node.visible = true;
        this._nodes.unshift(node);
        this._node2Idx.set(node, index);
        this._contentRect.y -= node.height;
        this._contentRect.height += node.height;
    }
    toIndex() {}
}
