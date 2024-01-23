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
            app.service.gm.requestGM(this.owner.textInput.text);
        });

        this.owner.resetBtn.on(Laya.Event.CLICK, () => {
            app.service.gm.requestGM("reset");
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
        this.listData.push({ name: "发送系统邮件", instruct: "sys_mail 101" });
        this.listData.push({
            name: "发送自定义邮件",
            instruct: "gm_mail hello 'content xxx' {10101,11},{10102,22}}",
        });
        this.listData.push({ name: "修改主城位置1:X,2:Y", instruct: " change_castle_pos 1 2" });
        this.owner.List.array = this.listData;
    }
}
