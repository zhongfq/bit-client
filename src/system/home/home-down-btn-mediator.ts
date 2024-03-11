import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ui } from "../../misc/ui";
import { HomeDownBtnBoxUI } from "../../ui-runtime/prefab/home/HomeDownBtnBoxUI";
import { HomeDownBtnItemUI } from "../../ui-runtime/prefab/home/HomeDownBtnItemUI";
import { HomeUI } from "../../ui-runtime/scene/HomeUI";

const { regClass, property } = Laya;

@regClass()
export class HomeDownBtnMediator extends Mediator {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    declare owner: HomeDownBtnBoxUI;
    listBtnIndex: number = -1;

    override onAwake(): void {
        this.owner.listDownBtn.renderHandler = new Laya.Handler(
            this,
            (item: HomeDownBtnItemUI, index: number) => {
                item.imgIcon.skin = `resources/atlas/home/${
                    this.owner.listDownBtn.getItem(index).iconSkin
                }.png`;
                item.imgText.skin = `resources/atlas/home/${
                    this.owner.listDownBtn.getItem(index).textSkin
                }.png`;
            }
        );
        this.owner.listDownBtn.mouseHandler = new Laya.Handler(this, (e: Event, index: number) => {
            if (e.type == Laya.Event.CLICK) {
                if (index == this.listBtnIndex) {
                    this.owner.listDownBtn.selectedIndex = this.listBtnIndex = -1;
                } else {
                    this.listBtnIndex = index;
                }
                this.owner.listDownBtn.getItem(index).func();
            }
        });
        this.initEvent();
        this.updateInfo();
    }

    initEvent() {}

    updateInfo() {
        this.owner.listDownBtn.array = [
            {
                iconSkin: "icon_main_1",
                textSkin: "text_main_1",
                func: () => {
                    const home = this.owner.parent as HomeUI;
                    home.viewStack.selectedIndex =
                        this.owner.listDownBtn.selectedIndex == 0 ? 0 : -1;
                },
            },
            {
                iconSkin: "icon_main_2",
                textSkin: "text_main_2",
                func: () => {
                    const home = this.owner.parent as HomeUI;
                    home.viewStack.selectedIndex =
                        this.owner.listDownBtn.selectedIndex == 1 ? 1 : -1;
                },
            },
            {
                iconSkin: "icon_main_3",
                textSkin: "text_main_3",
                func: () => {
                    app.ui.replace(ui.PVE);
                },
            },
            {
                iconSkin: "icon_main_4",
                textSkin: "text_main_4",
                func: () => {
                    const home = this.owner.parent as HomeUI;
                    home.viewStack.selectedIndex =
                        this.owner.listDownBtn.selectedIndex == 3 ? 2 : -1;
                },
            },
            { iconSkin: "icon_main_5", textSkin: "text_main_5", func: () => {} },
        ];
    }
}
