import { Button, Label, Node } from "cc";
import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { errcode } from "../../def/protocol";
import { IconLoader } from "../../misc/loader";
import { Equip } from "./chest-service";

export class ChestMediator extends Mediator {
    private _newEquip!: Equip;
    private _currEquip?: Equip;

    onCreate() {
        this.find("currEquip/icon").addComponent(IconLoader);
        this.find("newEquip/icon").addComponent(IconLoader);

        const btnOK = this.find("btnOK");
        btnOK.on(Button.EventType.CLICK, async () => {
            const data = await app.chestd.replace();
            if (data.err === errcode.OK) {
                if (this._currEquip) {
                    this._initEquip();
                } else {
                    this.close();
                }
            }
        });

        const btnNO = this.find("btnNO");
        btnNO.on(Button.EventType.CLICK, async () => {
            const data = await app.chestd.abandon();
            if (data.err === errcode.OK) {
                this.close();
            }
        });

        this._initEquip();
    }

    private _initEquip() {
        this._newEquip = app.chestd.newEquip!;
        this._currEquip = app.chestd.equips.get(this._newEquip.slot);
        this._updateEquipUI(this._currEquip, this.find("currEquip"));
        this._updateEquipUI(this._newEquip, this.find("newEquip"));
    }

    private _updateEquipUI(equip: Equip | undefined, view: Node) {
        const name = this.find("name", view).getComponent(Label)!;
        const icon = this.find("icon", view).getComponent(IconLoader)!;
        const level = this.find("level", view).getComponent(Label)!;
        const attrs = this.find("attrs", view);
        if (equip) {
            name.string = equip.name;
            level.string = `lv.${equip.level}`;
            icon.node.active = true;
            icon.load(equip.icon);
            for (let i = 0; i < 10; i++) {
                const attr = attrs.getChildByName(`item${i + 1}`);
                if (!attr) {
                    break;
                }
                const attrData = equip.attrs[i];
                if (attrData) {
                    const attrName = this.find("name", attr).getComponent(Label)!;
                    const attrValue = this.find("value", attr).getComponent(Label)!;
                    attrName.string = attrData.name;
                    attrValue.string = `${attrData.value}`;

                    const attrHigh = this.find("high", attr);
                    const attrLow = this.find("low", attr);
                    if (equip === this._newEquip) {
                        const currAttr = this._currEquip?.attrs.find((v) => v.id === attrData.id);
                        if (currAttr?.value === attrData.value) {
                            attrHigh.active = false;
                            attrLow.active = false;
                        } else if (currAttr && currAttr.value < attrData.value) {
                            attrHigh.active = true;
                            attrLow.active = false;
                        } else {
                            attrHigh.active = false;
                            attrLow.active = true;
                        }
                    } else {
                        attrHigh.active = false;
                        attrLow.active = false;
                    }
                } else {
                    attr.active = false;
                }
            }
        } else {
            icon.node.active = false;
            name.string = "";
            level.string = "";
            attrs.active = false;
        }
    }
}
