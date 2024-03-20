const { regClass } = Laya;
import { app } from "../../app";
import { CommonConf } from "../../def/common";
import proto from "../../def/proto";
import { errcode } from "../../def/protocol";
import { ui } from "../../misc/ui";
import { CreatorRoleUIBase } from "./CreatorRoleUI.generated";

@regClass()
export class CreatorRoleUI extends CreatorRoleUIBase {
    private _curName: string = "";
    private isThisName: boolean = false;

    public override onAwake(): void {
        this._initUIEvent();
    }

    private _initUIEvent() {
        this.tab.selectHandler = new Laya.Handler(this, this._onSelect);
        this.btnCreatorRole.on(Laya.Event.CLICK, () => {
            //请求创角
            app.service.user
                .requestCreateRole({
                    uid: app.service.login.username,
                    gender:
                        this.tab.selectedIndex == 0
                            ? CommonConf.GENDER.MALE
                            : CommonConf.GENDER.FEMALE,
                    name: this.textInputName.text,
                })
                .then((data: proto.user.Is2c_create_role) => {
                    if (data.err === errcode.OK) {
                        app.ui.replace(ui.LOADING_SCENE);
                    }
                });
        });
        this.btnRandomName.on(Laya.Event.CLICK, () => {
            //随机名字
            app.service.user
                .requestRandomName({
                    gender:
                        this.tab.selectedIndex == 0
                            ? CommonConf.GENDER.MALE
                            : CommonConf.GENDER.FEMALE,
                })
                .then((val: proto.user.s2c_random_name) => {
                    this.textInputName.text = val.name;
                    this.isThisName = false;
                });
        });
        this.textInputName.on(Laya.Event.BLUR, () => {
            if (!this.isThisName && this._curName != this.textInputName.text) {
                this.isThisName = true;
            }
        });
    }

    private _onSelect(index: number) {
        this.viewStack.selectedIndex = index;
        if (!this.isThisName) {
            app.service.user
                .requestRandomName({
                    gender:
                        this.tab.selectedIndex == 0
                            ? CommonConf.GENDER.MALE
                            : CommonConf.GENDER.FEMALE,
                })
                .then((val: proto.user.s2c_random_name) => {
                    this.textInputName.text = val.name;
                    this.isThisName = false;
                });
        }
    }
}
