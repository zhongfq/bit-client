import { ChatCellUI } from "../../ui-runtime/prefab/chat/ChatCellUI";
import { VirtuallyListUI } from "../../ui-runtime/prefab/common/VirtuallyListUI";

const { regClass, property } = Laya;
export enum ListCreateDataType {
    Top,
    Down,
}
@regClass()
export class VirtuallyList extends Laya.Script {
    public declare owner: VirtuallyListUI;
    private _nodes: Laya.Box[] = []; //预创建
    private _node2Idx: Map<Laya.Sprite, number> = new Map();
    private _mouseX!: number; //横向列表要用
    private _mouseY!: number; //鼠标的Y坐标
    private _contentRect: Laya.Rectangle = new Laya.Rectangle(); //当前列表中node的矩形
    private _data: any[] = []; //数据列表

    @property({ type: Laya.Prefab })
    public cellPrefab!: Laya.Prefab; //节点的预制体

    public override onAwake(): void {
        const node = this._createNode();
        const count = Math.ceil(this.owner.height / node.height) + 2;
        for (let i = 0; i < count; i++) {
            this._createNode();
        }
        //-------------------------------------------------|
        // this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // this.data = [1, 2, 3, 4, 5];
        // Laya.timer.once(5000, this, () => {
        //     this.scrollToIndex(9);
        // this._data.unshift(0);                           //测试数据
        //     // this._data.unshift(-1);
        //     // this._data.unshift(-2);
        // this._node2Idx.forEach((idx, node) => {
        //     //     this._node2Idx.set(node, idx + 3);
        //     //     console.log(idx + 3);
        //     // });
        // });

        //-------------------------------------------------|
        this.owner.on(Laya.Event.MOUSE_DOWN, this, this._onBarMouseDown);
    }

    /**
     *创建预制体
     * @returns 预制体创建出来的节点
     */
    private _createNode() {
        const node = this.cellPrefab.create() as Laya.Box;
        node.visible = false;
        this.owner.addChild(node);
        this._nodes.push(node);
        return node;
    }

    /**
     * 获取最前节点的索引
     */
    private get fistIndex() {
        for (let i = 0; i < this._nodes.length; i++) {
            const node = this._nodes[i];
            if (node && node.visible) {
                return this._node2Idx.get(node) ?? 0;
            }
        }
        return 0;
    }

    /**
     * 获取最后节点的索引
     */
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
     *按下事件
     */
    private _onBarMouseDown() {
        if (this._contentRect.height < this.owner.height) {
            return;
        }
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;

        this.owner.on(Laya.Event.MOUSE_MOVE, this, this._mouseMove);
        this.owner.once(Laya.Event.MOUSE_UP, this, this._mouseUp);
        this.owner.once(Laya.Event.MOUSE_OUT, this, this._mouseUp);
    }

    /**
     *移动事件
     */
    private _mouseMove(e: Laya.Event) {
        const shiftingNum = Laya.stage.mouseY - this._mouseY;
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;
        if (shiftingNum > 0) {
            if (this.owner.scrollRect.y <= this._contentRect.y) {
                if (this.fistIndex > 0) {
                    this._moveUP();
                }
            }
            if (this.owner.scrollRect.y - shiftingNum < this._contentRect.y) {
                this.owner.scrollRect.y = this._contentRect.y;
                return;
            }
        } else if (shiftingNum < 0) {
            if (this.owner.scrollRect.bottom >= this._contentRect.bottom) {
                if (this.backIndex < this._data.length - 1) {
                    this._moveDown();
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

    /**
     *抬起事件
     */
    private _mouseUp() {
        this.owner.off(Laya.Event.MOUSE_MOVE, this, this._mouseMove);
    }

    /**
     *设置数据
     */
    public setArrayData(val: any[], type?: ListCreateDataType) {
        this._data = val;
        this._initRect();
        if (type && type == ListCreateDataType.Down) {
            this._addEndNode();
            this.owner.scrollRect.y -= this.owner.height;
        } else {
            this.scrollToUp();
            this.owner.scrollRect.y = 0;
        }
    }

    public addData(val: any) {
        this._data.push(val);
        const idx = this.backIndex;
        const node = this._nodes.shift();
        if (!node) {
            return;
        }
        node.set_dataSource(val);
        node.visible = true;
        node.y = this._contentRect.bottom;
        this._contentRect.height += node.height;
        this._nodes.push(node);
        this._node2Idx.set(node, idx + 1);
        this.owner.scrollRect.y += node.height;
    }

    /**
     *初始化滚动区域
     */
    private _initRect() {
        this._contentRect.x = 0;
        this._contentRect.y = 0;
        this._contentRect.height = 0;
        this._contentRect.width = 0;
        this.owner.scrollRect.x = 0;
        this.owner.scrollRect.y = 0;
        for (const node of this._nodes) {
            node.visible = false;
        }
    }

    /**
     *向下移动
     */
    private _moveDown() {
        const index = this.backIndex + 1;
        const node = this._nodes.shift()!;
        node.y = this._contentRect.bottom;
        this._contentRect.height -= node.height;

        node.set_dataSource(this._data[index]);
        node.visible = true;
        this._nodes.push(node);
        this._node2Idx.set(node, index);
        this._contentRect.y += node.height;
        this._contentRect.height += node.height;
    }

    /**
     *向上移动
     */
    private _moveUP() {
        const index = this.fistIndex - 1;
        const node = this._nodes.pop()!;
        this._contentRect.height -= node.height;
        node.set_dataSource(this._data[index]);
        node.y = this._contentRect.y - node.height;
        node.visible = true;
        this._nodes.unshift(node);
        this._node2Idx.set(node, index);
        this._contentRect.y -= node.height;
        this._contentRect.height += node.height;
    }

    /**
     *滚动到顶部
     */
    public scrollToUp(type?: ListCreateDataType) {
        this._initRect();
        this._addStarNode();
        this.owner.scrollRect.y = 0;
    }

    /**
     *滚动到指定位置
     @toIndex 数据索引
     */
    public scrollToIndex(toIndex: number) {
        this._initRect();
        let nodeIndex = 0;
        let toIndexY = 0;
        const idx =
            this._data.length + 1 - toIndex > this._nodes.length
                ? toIndex
                : this._data.length + 1 - this._nodes.length;
        for (let i = idx; i < this._data.length; i++) {
            const node = this._nodes[nodeIndex] as ChatCellUI;
            if (!node) {
                break;
            }
            node.set_dataSource(this._data[i]);
            node.visible = true;
            node.y = this._contentRect.height;

            if (i == toIndex) {
                toIndexY = node.y;
            }
            this._contentRect.height += node.height;
            this._node2Idx.set(node, i);
            nodeIndex++;
        }
        console.log(this._contentRect.height, toIndexY);
        if (this._contentRect.height - this.owner.height < toIndexY) {
            this.owner.scrollRect.y = this._contentRect.bottom - this.owner.height;
        } else {
            this.owner.scrollRect.y = toIndexY;
        }
    }

    /**
     *滚动到底部
     */
    public scrollToDown() {
        this._initRect();
        this._addEndNode();
        this.owner.scrollRect.y -= this.owner.height;
    }

    /**
     * 正序创建节点
     */
    private _addStarNode() {
        for (let i = 0; i < this._data.length; i++) {
            const node = this._nodes[i];
            if (!node) {
                break;
            }
            node.set_dataSource(this._data[i]);
            node.visible = true;
            node.y = this._contentRect.height;
            this._contentRect.height += node.height;
            this._node2Idx.set(node, i);
        }
    }

    /**
     * 倒序创建节点
     */
    private _addEndNode() {
        let nodeIndex = this._nodes.length - 1;
        for (let i = this._data.length - 1; i >= 0; i--) {
            const node = this._nodes[nodeIndex] as ChatCellUI;
            if (!node) {
                break;
            }
            nodeIndex--;
            node.set_dataSource(this._data[i]);
            node.visible = true;
            node.y = this._contentRect.y - node.height;
            this._contentRect.height += node.height;
            this._contentRect.y -= node.height;
            this._node2Idx.set(node, i);
        }
    }
}
