import { app } from "../../app";
import { Callback } from "../../core/dispatcher";
import { CallFunc } from "../../core/tween/actions/action-instant";
import { Mediator } from "../../core/ui-mediator";
import { GmUI } from "../../ui-runtime/prefab/gm/GmUI";

const { regClass, property } = Laya;
interface GmCmdData {
    name: string;
    instruct: string;
}
interface SwitchData {
    name:string
    func:Callback;
}
@regClass()
export class GmMediator extends Mediator {
    declare owner: GmUI;
    listGmData!: GmCmdData[];
    listSwitchData!: SwitchData[];
    isShowStat:boolean = false;

    override onAwake(): void {
        this._initEvent()
        this.updateList();
    }
    
    private _initEvent(){
        //-------------------------------------gm指令列表
        this.owner.listGm.mouseHandler = new Laya.Handler(this, (evn: Laya.Event, index: number)=>{
            if (evn.type == Laya.Event.CLICK) {
                this.owner.textInput.text = this.listGmData[index].instruct;
            }
        });
        this.owner.listGm.renderHandler = new Laya.Handler(this, (cell: Laya.Node, index: number)=>{

            (cell.getChildByName("Label") as Laya.Label).text = this.listGmData[index].name;
        });
        this.owner.listGm.selectHandler = new Laya.Handler(this, (evn: Laya.Event, index: number)=>{
            if (evn.type == Laya.Event.CLICK) {
                this.owner.textInput.text = this.listGmData[index].instruct;
            }
        });
        //-------------------------------------gm指令列表

        
        //-------------------------------------功能开关列表
        this.owner.listSwitch.mouseHandler = new Laya.Handler(this, (evn: Laya.Event, index: number)=>{
            if (evn.type == Laya.Event.CLICK) {
                this.listSwitchData[index].func(index);
            }
        });
        this.owner.listSwitch.renderHandler = new Laya.Handler(this, (cell: Laya.Node, index: number)=>{

            (cell.getChildByName("Label") as Laya.Label).text = this.listSwitchData[index].name;
        });
        //-------------------------------------功能开关列表

        this.owner.btnUse.on(Laya.Event.CLICK, () => {
            app.service.gm.requestGM(this.owner.textInput.text);
        });

        this.owner.btnReset.on(Laya.Event.CLICK, () => {
            app.service.gm.requestGM("reset");
        });
        this.owner.Tab.selectHandler = new Laya.Handler(this,(index:number)=>{
            this.owner.ViewStack.selectedIndex = index;
        })
    }

    onTabSelect(index: number) {
        this.updateList();
    }


    updateList() {
        this.listGmData = [];

        this.listGmData.push({ name: "加经验", instruct: "add_exp 99" });
        this.listGmData.push({ name: "升级", instruct: "add_lv 99" });
        this.listGmData.push({ name: "增加铜钱", instruct: "add_coin 99" });
        this.listGmData.push({ name: "增加钻石", instruct: "add_diamond 99" });
        this.listGmData.push({ name: "增加体力", instruct: "add_energy 99" });
        this.listGmData.push({ name: "添加道具1:id,2:数量", instruct: "add_item 1 2" });
        this.listGmData.push({ name: "删除道具1:id,2:数量", instruct: "sub_item 1 2" });
        this.listGmData.push({ name: "发送系统邮件", instruct: "sys_mail 101" });
        this.listGmData.push({
            name: "发送自定义邮件",
            instruct: "gm_mail hello 'content xxx' {10101,11},{10102,22}}",
        });
        this.listGmData.push({ name: "修改主城位置1:X,2:Y", instruct: " change_castle_pos 1 2" });
        this.owner.listGm.array = this.listGmData;

        this.listSwitchData = []
        this.listSwitchData.push({name:"统计信息:关",func:(index:number)=>{
            this.isShowStat = !this.isShowStat
            this.isShowStat?Laya.Stat.show():Laya.Stat.hide()
            this.listSwitchData[index].name = "统计信息:"+(this.isShowStat?"关":"开");
            this.owner.listSwitch.refresh();
            
        }})
        this.owner.listSwitch.array = this.listSwitchData;

        // this.owner.l
    }
}
