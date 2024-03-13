import { ChatCellUI } from "../../ui-runtime/prefab/chat/ChatCellUI";
import { VirtuallyListNewUI } from "../../ui-runtime/prefab/common/VirtuallyListNewUI";
import { VirtuallyListUI } from "../../ui-runtime/prefab/common/VirtuallyListUI";

const { regClass, property } = Laya;
export enum ListCreateDataType {
    Top,
    /**
     *111
     */ Down,
}

export enum AlignH {
    /**
     * 居顶部对齐。
     */
    TOP,
    /**
     * 居底部对齐。
     */
    BOTTOM,
}

export enum AlignV {
    /**
     * 左对齐。
     */
    LEFT,
    /**
     * 右对齐。
     */
    RIGHT,
}

@regClass()
export class VirtuallyListNew extends Laya.Script {
    public declare owner: VirtuallyListNewUI;
    private _nodes: Laya.Box[] = []; //预创建
    private _node2Idx: Map<Laya.Sprite, number> = new Map();
    private _mouseX!: number; //横向列表要用
    private _mouseY!: number; //鼠标的Y坐标
    private _contentRect: Laya.Rectangle = new Laya.Rectangle(); //当前列表中node的矩形
    private _data: any[] = []; //数据列表

    @property({ type: Laya.Prefab })
    public cellPrefab!: Laya.Prefab; //节点的预制体

    @property({ type: AlignH, tips: "横向间隙" })
    public alignH: AlignH = AlignH.TOP; //横向布局

    @property({ type: AlignV })
    public alignV: AlignV = AlignV.LEFT; //竖向布局

    @property({ type: Number, tips: "横向间隙" })
    public spaceX: number = 0; //横向间隙

    @property({ type: Number, tips: "竖向间隙" })
    public spaceY: number = 0; //竖向间隙

    @property({ type: Number, fractionDigits: 0, min: 1, tips: "横向节点数量" })
    public cellNumX: number = 1; //横向cell数量

    @property({ type: Number, fractionDigits: 0, min: 1, tips: "竖向节点数量" })
    public cellNumY: number = 1; //竖向cell数量

    @property({ type: Laya.ScrollType, tips: "滚动方向" })
    public scrollType: Laya.ScrollType = 1; //竖向cell数量

    public override onAwake(): void {
        const node = this._createNode();
        const cellNum = this.scrollType == Laya.ScrollType.Vertical ? this.cellNumX : this.cellNumY;
        const count = Math.ceil(this.owner.height / node.height) * cellNum + 2 * cellNum;

        for (let i = 0; i < count - 1; i++) {
            this._createNode();
        }
        //-------------------------------------------------|
        // this.setArrayData([1, 2, 3, 4, 5, 6, 7, 8]);
        // this.setArrayData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        Laya.timer.once(3000, this, () => {
            // console.log("11111111111111111111111111111111");
            // this.addData(11, true);
            //     this.scrollToIndex(9);
            // this._data.unshift(0);                           //测试数据
            //     // this._data.unshift(-1);
            //     // this._data.unshift(-2);
            // this._node2Idx.forEach((idx, node) => {
            //     //     this._node2Idx.set(node, idx + 3);
            //     //     console.log(idx + 3);
            //     // });
        });

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
        if (
            this.scrollType == Laya.ScrollType.Vertical &&
            this._contentRect.height < this.owner.height
        ) {
            return;
        } else if (
            this.scrollType == Laya.ScrollType.Horizontal &&
            this._contentRect.width < this.owner.width
        ) {
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
        if (this.scrollType == Laya.ScrollType.Vertical) {
            this._moveV();
        } else {
            this._moveH();
        }
    }

    private _moveV() {
        const shiftingNum = Laya.stage.mouseY - this._mouseY;
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;
        if (shiftingNum > 0) {
            if (this.owner.scrollRect.y <= this._contentRect.y) {
                if (
                    (this.alignH == AlignH.TOP && this.fistIndex > 0) ||
                    (this.alignH == AlignH.BOTTOM && this.backIndex < this._data.length - 1)
                ) {
                    this._moveUP();
                }
            }
            if (this.owner.scrollRect.y - shiftingNum < this._contentRect.y) {
                this.owner.scrollRect.y = this._contentRect.y;
                return;
            }
        } else if (shiftingNum < 0) {
            if (this.owner.scrollRect.bottom >= this._contentRect.bottom) {
                if (
                    (this.alignH == AlignH.BOTTOM && this.fistIndex > 0) ||
                    (this.alignH == AlignH.TOP && this.backIndex < this._data.length - 1)
                ) {
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

    private _moveH() {
        const shiftingNum = Laya.stage.mouseX - this._mouseX;
        this._mouseX = Laya.stage.mouseX;
        this._mouseY = Laya.stage.mouseY;
        if (shiftingNum > 0) {
            if (this.owner.scrollRect.x <= this._contentRect.x) {
                if (
                    (this.alignV == AlignV.LEFT && this.fistIndex > 0) ||
                    (this.alignV == AlignV.RIGHT && this.backIndex < this._data.length - 1)
                ) {
                    this._moveLeft();
                }
            }
            if (this.owner.scrollRect.x - shiftingNum < this._contentRect.x) {
                this.owner.scrollRect.x = this._contentRect.x;
                return;
            }
        } else if (shiftingNum < 0) {
            if (this.owner.scrollRect.right >= this._contentRect.right) {
                if (
                    (this.alignV == AlignV.RIGHT && this.fistIndex > 0) ||
                    (this.alignV == AlignV.LEFT && this.backIndex < this._data.length - 1)
                ) {
                    this._moveRight();
                }
            }
            if (this.owner.rectangle.x - shiftingNum > this._contentRect.right - this.owner.width) {
                this.owner.rectangle.x = this._contentRect.right - this.owner.width;
                return;
            }
        }
        this.owner.rectangle.x -= shiftingNum;
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
    public setArrayData(val: any[]) {
        this._data = val;
        this._initRect();
        this._addNode();
        if (this.alignH == AlignH.BOTTOM) {
            this.owner.scrollRect.y -= this.owner.height;
        }
        if (this.alignV == AlignV.RIGHT) {
            this.owner.scrollRect.x = -this.owner.width;
        }
    }

    public scrollTop() {
        this.owner.scrollRect.y = 0;
    }

    public scrollDown() {
        this.owner.scrollRect.y = this._contentRect.y;
    }

    public addData(val: any, isFist?: boolean) {
        if ((this.cellNumX > 1 || this.cellNumY > 1) && isFist) {
            //多行多列不支持往头部添加数据
            return;
        }
        const backIdx = this.backIndex;
        const fistIdx = this.fistIndex;
        let node: any;
        if (isFist) {
            if (this.scrollType == Laya.ScrollType.Vertical) {
                this._data.unshift(val);
                if (fistIdx == 0) {
                    if (backIdx == this._nodes.length - 1) {
                        node = this._nodes.pop();
                    } else {
                        node = this._nodes[backIdx + 1];
                        node.visible = true;
                    }
                    node.set_dataSource(val);
                    this._nodes.unshift(node);
                    this._node2Idx.set(node, fistIdx - 1);
                    if (this.alignH == AlignH.BOTTOM) {
                        node.y = this._contentRect.bottom + this.spaceY;
                        this._contentRect.y += node.height + this.spaceY;
                    } else {
                        node.y = this._contentRect.y - node.height + this.spaceY;
                        this._contentRect.y -= node.height + this.spaceY;
                    }
                }
                this._node2Idx.forEach((data: number, key: any) => {
                    this._node2Idx.set(key, data + 1);
                });
            } else {
                this._data.unshift(val);
                if (fistIdx == 0) {
                    if (backIdx == this._nodes.length - 1) {
                        node = this._nodes.pop();
                    } else {
                        node = this._nodes[backIdx + 1];
                        node.visible = true;
                    }
                    node.set_dataSource(val);
                    this._nodes.unshift(node);
                    this._node2Idx.set(node, fistIdx - 1);
                    if (this.alignV == AlignV.RIGHT) {
                        node.x = this._contentRect.right + this.spaceX;
                        this._contentRect.x += node.width + this.spaceX;
                    } else {
                        node.x = this._contentRect.x - node.width + this.spaceX;
                        this._contentRect.x -= node.width + this.spaceX;
                    }
                }
                this._node2Idx.forEach((data: number, key: any) => {
                    this._node2Idx.set(key, data + 1);
                });
            }
        } else {
            this._data.push(val);
        }
        // if (!node) {
        //     return;
        // }
        // node.set_dataSource(val);
        // node.visible = true;
        // node.y = this._contentRect.bottom;
        // this._contentRect.height += node.height;
        // this._nodes.push(node);
        // this._node2Idx.set(node, idx + 1);
        // this.owner.scrollRect.y += node.height;
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

    private _moveDown() {
        for (let i = 0; i < this.cellNumX; i++) {
            let index = 0;
            let node: any;
            if (this.alignH == AlignH.TOP) {
                index = this.backIndex + 1;
                node = this._nodes.shift()!;
                node.y = this._contentRect.bottom;
            } else {
                index = this.fistIndex - 1;
                node = this._nodes.pop()!;
                node.y = this._contentRect.bottom + this.spaceY;
            }
            if (i == 0) {
                this._contentRect.height -= node.height + this.spaceY;
            }

            node.x =
                this.alignV == AlignV.LEFT
                    ? (node.width + this.spaceX) * (i % this.cellNumX)
                    : -(node.width + this.spaceX) * ((i % this.cellNumX) + 1);

            node.set_dataSource(this._data[index]);
            node.visible = true;

            if (this.alignH == AlignH.TOP) {
                this._nodes.push(node);
            } else {
                this._nodes.unshift(node);
            }
            this._node2Idx.set(node, index);
            if (i == 0) {
                this._contentRect.height += node.height + this.spaceY;
            }
            if (i == this.cellNumX - 1) {
                this._contentRect.y += node.height + this.spaceY;
            }
        }
    }

    private _moveUP() {
        for (let i = 0; i < this.cellNumX; i++) {
            let index = 0;
            let node: any;
            if (this.alignH == AlignH.TOP) {
                index = this.fistIndex - 1;
                node = this._nodes.pop()!;
            } else {
                index = this.backIndex + 1;
                node = this._nodes.shift()!;
            }
            if (i == 0) {
                this._contentRect.height -= node.height + this.spaceY;
            }
            node.set_dataSource(this._data[index]);
            node.x =
                this.alignV == AlignV.LEFT
                    ? (node.width + this.spaceX) * (i % this.cellNumX)
                    : -(node.width + this.spaceX) * ((i % this.cellNumX) + 1);
            node.visible = true;
            if (this.alignH == AlignH.TOP) {
                node.y = this._contentRect.y - node.height - this.spaceY;
                this._nodes.unshift(node);
            } else {
                node.y = this._contentRect.y - node.height;
                this._nodes.push(node);
            }
            this._node2Idx.set(node, index);

            if (i == 0) {
                this._contentRect.height += node.height + this.spaceY;
            }
            if (i == this.cellNumX - 1) {
                this._contentRect.y -= node.height + this.spaceY;
            }
        }
    }

    private _moveLeft() {
        for (let i = 0; i < this.cellNumY; i++) {
            let index = 0;
            let node: any;
            if (this.alignV == AlignV.LEFT) {
                index = this.fistIndex - 1;
                node = this._nodes.pop()!;
            } else {
                index = this.backIndex + 1;
                node = this._nodes.shift()!;
            }
            if (i == 0) {
                this._contentRect.width -= node.width + this.spaceX;
            }
            node.set_dataSource(this._data[index]);
            node.y =
                this.alignH == AlignH.TOP
                    ? (node.height + this.spaceY) * (i % this.cellNumY)
                    : -(node.height + this.spaceY) * ((i % this.cellNumY) + 1);
            node.visible = true;
            if (this.alignV == AlignV.LEFT) {
                node.x = this._contentRect.x - node.width - this.spaceX;
                this._nodes.unshift(node);
            } else {
                node.x = this._contentRect.x - node.width;
                this._nodes.push(node);
            }
            this._node2Idx.set(node, index);

            if (i == 0) {
                this._contentRect.width += node.width + this.spaceX;
            }
            if (i == this.cellNumX - 1) {
                this._contentRect.x -= node.width + this.spaceX;
            }
        }
    }

    private _moveRight() {
        for (let i = 0; i < this.cellNumY; i++) {
            let index = 0;
            let node: any;
            if (this.alignV == AlignV.LEFT) {
                index = this.backIndex + 1;
                node = this._nodes.shift()!;

                node.x = this._contentRect.right;
            } else {
                index = this.fistIndex - 1;
                node = this._nodes.pop()!;

                node.x = this._contentRect.right + this.spaceX;
            }
            if (i == 0) {
                this._contentRect.width -= node.width + this.spaceX;
            }
            node.y =
                this.alignH == AlignH.TOP
                    ? (node.height + this.spaceY) * (i % this.cellNumY)
                    : -(node.height + this.spaceY) * ((i % this.cellNumY) + 1);

            node.set_dataSource(this._data[index]);
            node.visible = true;

            if (this.alignV == AlignV.LEFT) {
                this._nodes.push(node);
            } else {
                this._nodes.unshift(node);
            }
            this._node2Idx.set(node, index);
            if (i == 0) {
                this._contentRect.width += node.width + this.spaceX;
            }
            if (i == this.cellNumX - 1) {
                this._contentRect.x += node.width + this.spaceX;
            }
        }
    }

    private _addNode() {
        let addNum = 0;
        let contentRectY = this._contentRect.y;
        let contentRectX = this._contentRect.x;

        let nodeX = 0;
        let nodeY = 0;

        for (let i = 0; i < this._data.length; i++) {
            let addHight = 0;
            let addWidht = 0;
            const node = this._nodes[i];
            if (!node) {
                break;
            }

            node.set_dataSource(this._data[i]);
            node.visible = true;

            if (this.scrollType == Laya.ScrollType.Vertical) {
                if (addNum % this.cellNumX == 0) {
                    nodeX = 0;
                    addHight = node.height + this.spaceY;

                    nodeY =
                        this.alignH == AlignH.TOP
                            ? this._contentRect.height
                            : this._contentRect.y - node.height;
                    contentRectY =
                        this.alignH == AlignH.TOP
                            ? contentRectY
                            : contentRectY - (node.height + this.spaceY);

                    nodeX =
                        this.alignV == AlignV.LEFT
                            ? (node.width + this.spaceX) * (addNum % this.cellNumX)
                            : -(node.width + this.spaceX) * ((addNum % this.cellNumX) + 1);
                } else {
                    nodeX =
                        this.alignV == AlignV.LEFT
                            ? (node.width + this.spaceX) * (addNum % this.cellNumX)
                            : -(node.width + this.spaceX) * (addNum % this.cellNumX);
                }
            } else {
                if (addNum % this.cellNumY == 0) {
                    nodeY = 0;
                    addWidht += node.width + this.spaceX;

                    nodeX =
                        this.alignV == AlignV.LEFT
                            ? this._contentRect.width
                            : this._contentRect.x - node.width;
                    contentRectX =
                        this.alignV == AlignV.LEFT
                            ? contentRectX
                            : contentRectX - (node.width + this.spaceX);

                    nodeY =
                        this.alignH == AlignH.TOP
                            ? (node.height + this.spaceY) * (addNum % this.cellNumY)
                            : -(node.height + this.spaceY) * ((addNum % this.cellNumY) + 1);
                } else {
                    nodeY =
                        this.alignH == AlignH.TOP
                            ? (node.height + this.spaceY) * (addNum % this.cellNumY)
                            : -(node.height + this.spaceY) * (addNum % this.cellNumY);
                }
            }

            node.y = nodeY;
            node.x = nodeX;

            this._contentRect.height += addHight;
            this._contentRect.width += addWidht;
            this._contentRect.y = contentRectY;
            this._contentRect.x = contentRectX;
            this._node2Idx.set(node, i);

            addNum++;
        }
    }
}
