import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { BagUI } from "../../ui-runtime/prefab/bag/BagUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { DataUtil } from "../data/data-util";
import { IconNodeMediator } from "../icon/icon-node-mediator";
import { ItemVo } from "./vo/goods/item-vo";

const { regClass, property } = Laya;

@regClass()
export class BagMediator extends Mediator {
    owner!: BagUI;

    onAwake(): void {
        let b = this.owner.itemList.itemRender;
        let a = this.owner.iconNode;
        this.owner.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.itemList.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.menuTab.selectHandler = new Laya.Handler(this, this.onTabSelect);
        this.updateList();
    }
    onIconClick() {}
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
        }
    }
    onTabSelect(index: number) {
        this.updateList();
    }
    updateItem(cell: IconUI, index: number) {
        let cellData = cell.dataSource as ItemVo;
        // cell.iconNumber.text = cellData.goodsNumber?.toString() || "0";
        cell.updateGoods(cellData);
    }
    updateList() {
        let tlData = [];
        if (this.owner.menuTab.selectedIndex == 0) {
            for (let item of app.service.bag.itemBag.getBagAsArray()) {
                tlData.push(item);
            }
        } else {
            let tlItem = DataUtil.getArrayRef(app.service.data.itemTable, { composite: 1 });
            for (let refItem of tlItem) {
                let itemvo = app.service.bag.itemBag.createByRef(refItem.id);
                tlData.push(itemvo);
            }
            this.owner.iconNode.getComponent(IconNodeMediator).setClickHandler(this.onIconClick);
        }
        this.owner.itemList.array = tlData;
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
