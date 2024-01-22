import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { GmUI } from "../../ui-runtime/prefab/gm/GmUI";

const { regClass, property } = Laya;
interface GmCmdData {
    name: string;
    instruct: string;
}
@regClass()
export class GmMediator extends Mediator {
    owner!: GmUI;
    listData!: GmCmdData[];
    onAwake(): void {
        this.owner.List.mouseHandler = new Laya.Handler(this, this.onListClick);
        this.owner.List.renderHandler = new Laya.Handler(this, this.updateItem);
        this.owner.List.selectHandler = new Laya.Handler(this, this.onListClick);

        this.owner.closeBtn.on(Laya.Event.CLICK, () => {
            this.owner.close();
        });
        this.owner.useBtn.on(Laya.Event.CLICK, () => {
            app.service.gm.call(this.owner.textInput.text);
        });

        this.owner.resetBtn.on(Laya.Event.CLICK, () => {
            app.service.gm.call("reset");
        });
        this.updateList();
    }
    onListClick(evn: Laya.Event, index: number) {
        if (evn.type == Laya.Event.CLICK) {
            this.owner.textInput.text = this.listData[index].instruct;
        }
    }
    onTabSelect(index: number) {
        this.updateList();
    }
    updateItem(cell: Laya.Node, index: number) {
        (cell.getChildByName("Label") as Laya.Label).text = this.listData[index].name;
    }
    updateList() {
        this.listData = [];

        this.listData.push({ name: "加经验", instruct: "add_exp 99" });
        this.listData.push({ name: "升级", instruct: "add_lv 99" });
        this.listData.push({ name: "增加铜钱", instruct: "add_coin 99" });
        this.listData.push({ name: "增加钻石", instruct: "add_diamond 99" });
        this.listData.push({ name: "增加体力", instruct: "add_energy 99" });
        this.listData.push({ name: "添加道具1:id,2:数量", instruct: "add_item 1 2" });
        this.listData.push({ name: "删除道具1:id,2:数量", instruct: "sub_item 1 2" });
        this.listData.push({ name: "发送系统邮件", instruct: " sys_mail 101" });
        this.listData.push({
            name: "发送自定义邮件",
            instruct: "gm_mail hello 'content xxx' {10101,11},{10102,22}}",
        });
        this.listData.push({ name: "修改主城位置1:X,2:Y", instruct: " change_castle_pos 1 2" });
        this.owner.List.array = this.listData;
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
