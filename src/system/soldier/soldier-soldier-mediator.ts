import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { StringUtil } from "../../core/utils/string-util";
import { ItemConf } from "../../def/item";
import proto from "../../def/proto";
import { SoldierVo } from "../../misc/vo/soldier/soldier-vo";
import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";
import { SoldierIconUI } from "../../ui-runtime/prefab/icon/SoldierIconUI";
import { SoldierSoldierUI } from "../../ui-runtime/prefab/soldier/SoldierSoldierUI";
import { TableUtil } from "../table/table-util";
import { SoldierService } from "./soldier-service";

const { regClass, property } = Laya;

@regClass()
export class SoldierSoldierMediator extends Mediator {
    public declare owner: SoldierSoldierUI;

    public override onAwake(): void {
        this.initUIEvent();
        // this.initInfo();
        this.updateList();
    }

    //初始化UI
    private initInfo() {
        const vo = this.owner.listSoldier.selectedItem.soldierVo as SoldierVo;
        this.owner.labelName.text = vo.name;

        this.owner.labelLv.text = "Lv." + vo.level;
        const skillRow = app.service.table.skill[vo.ref.skill2];
        this.owner.labelSkillName.text = skillRow.name;
        this.owner.labelSkillDesc.text = skillRow.desc;
        // this.owner.imgHeadIcon.skin = ""
        const attrList = [];
        const attrs = (vo.cmd as proto.soldier.SoldierInfo).attrs;
        for (const attr in attrs) {
            attrList.push({ id: attr, val: attrs[attr] });
        }
        this.owner.listAttr.array = attrList;
    }

    //初始化UI事件监听
    private initUIEvent() {
        this.on(app.service.soldier, SoldierService.SOLDIER_SOLDIER_UPDATE, () => {
            this.updateList();
        });
        this.owner.btnUpLv.on(Laya.Event.CLICK, () => {
            //升级
            app.service.soldier.requestSoldiertUpgrade({
                id: this.owner.listSoldier.selectedItem.soldierVo.id,
            });
        });

        this.owner.listSoldier.renderHandler = new Laya.Handler(this, this.updateItem);

        this.owner.listAttr.renderHandler = new Laya.Handler(
            this,
            (cell: Laya.Label, index: number) => {
                cell.text = StringUtil.getAttrStr(
                    this.owner.listAttr.array[index].id,
                    this.owner.listAttr.array[index].val
                );
            }
        );
    }

    public updateItem(cell: SoldierIconUI, index: number) {
        cell.updateGoods(cell.dataSource.soldierVo, ItemConf.ITEM_SUB_TYPE.SOLDIER);
    }

    private updateList() {
        const pendantList = [];

        for (const soldierRow of TableUtil.getRows(app.service.table.soldier.soldier, {})) {
            let vo = new SoldierVo();
            const soldierVo = app.service.soldier.soldierBag.get(soldierRow.id);
            if (soldierVo) {
                vo = soldierVo;
            } else {
                vo.initByTableRow(soldierRow);
            }
            pendantList.push({
                soldierVo: vo,
            });
        }
        this.owner.listSoldier.array = pendantList;
        this.initInfo();
    }
}
