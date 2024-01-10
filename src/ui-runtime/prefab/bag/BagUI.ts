const { regClass } = Laya;
import { app } from "../../../app";
import { IconUI } from "../icon/IconUI";
import { BagUIBase } from "./BagUI.generated";

@regClass()
export class BagUI extends BagUIBase {
    onAwake(): void {
        let tlData = [];
        let tlRefId = [
            10101, 10102, 10103, 10104, 10201, 10202, 10203, 30301, 30401, 20501, 20601, 20602,
            20603,
        ];
        for (let i = 0; i < tlRefId.length; i++) {
            let itemVo = app.bagd.itemBag.createByRef(tlRefId[i]);
            tlData.push(itemVo);
        }
        this.itemList.array = tlData;

        this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
    }
    updateItem(cell: IconUI, index: number) {
        let b = cell.dataSource;
        let a = 1;
        // cell.iconNumber.text = index.toString();
    }
}
