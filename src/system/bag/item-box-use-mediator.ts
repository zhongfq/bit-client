import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ItemBoxUseUI } from "../../ui-runtime/prefab/bag/ItemBoxUseUI";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";

const { regClass, property } = Laya;

@regClass()
export class ItemBoxUseMediator extends Mediator {
    owner!: ItemBoxUseUI;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.initInfo();
        this.initEvent();
    }

    //初始化界面信息
    initInfo() {
        this.owner.slider_h.min = 1;
        this.owner.slider_h.max = this.owner.data.goodsNumber;
        this.owner.slider_h.value = 1;
        this.owner.iconNodeTop.updateGoods(this.owner.data);
        const tlData = [];

        for (const data of this.owner.data.ref.args) {
            const vo = app.service.bag.itemBag.createByRef(data[0]);
            vo.goodsNumber = data[1];
            tlData.push(vo);
        }
        this.owner.listItem.array = tlData;
    }

    //初始化
    initEvent() {
        this.owner.btnClose.on(Laya.Event.CLICK, this.owner.close);
        this.owner.btnSynthesis.on(Laya.Event.CLICK, this, this.onSynthesisBtn);
        this.owner.listItem.renderHandler = new Laya.Handler(this, this.updateItem);
    }

    updateItem(cell: IconUI, index: number) {
        cell.updateGoods(cell.dataSource);
    }

    onSynthesisBtn() {
        app.service.bag.requestUseItem({
            itemId: this.owner.data.refId,
            num: this.owner.slider_h.value,
        });
    }
}
