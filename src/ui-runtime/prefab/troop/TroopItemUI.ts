const { regClass } = Laya;
import { app } from "../../../app";
import { ui } from "../../../misc/ui";
import { TroopItemUIBase } from "./TroopItemUI.generated";
export interface TroopCellData {
    soldierId?: number;
}
@regClass()
export class TroopItemUI extends TroopItemUIBase {
    private _cellData!: TroopCellData;

    public override onAwake(): void {
        this.VBox.on(Laya.Event.CLICK, (event: Laya.Event) => {
            const a = this.dataSource;
            if (event.target) {
                const soldierRow =
                    app.service.table.soldier.soldier[Number(this._cellData.soldierId)];
                switch (event.target.name) {
                    case "btn1":
                        app.ui.show(ui.TROOP_PENDANT, {
                            idx: 1,
                            soldierId: this.dataSource.soldierId,
                        });
                        break;
                    case "btn2":
                        app.ui.show(ui.TROOP_PENDANT, {
                            idx: 2,
                            soldierId: this.dataSource.soldierId,
                        });
                        break;
                    case "btn3":
                        app.ui.show(ui.TROOP_PENDANT, {
                            idx: 3,
                            soldierId: this.dataSource.soldierId,
                        });
                        break;
                    case "btn4":
                        app.ui.show(ui.TROOP_PENDANT, {
                            idx: 4,
                            soldierId: this.dataSource.soldierId,
                        });
                        break;
                }
            }
        });
    }

    public updateInfo(troopCellData: TroopCellData) {
        this._cellData = troopCellData;
        if (!this._cellData.soldierId) {
            this.VBox.visible = false;
        } else {
            this.VBox.visible = true;
            const soldierItem = app.service.table.item[this._cellData.soldierId];
            for (let i = 0; i < 4; i++) {
                (this.VBox.getChildAt(i) as Laya.Button).label = soldierItem.name;
            }
        }
    }
}
