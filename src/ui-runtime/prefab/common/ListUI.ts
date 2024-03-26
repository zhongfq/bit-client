const { regClass } = Laya;
import { ListUIBase } from "./ListUI.generated";

@regClass()
export class ListUI extends ListUIBase {
    protected override addCell(cell: Laya.UIComponent): void {
        cell.on(Laya.Event.CLICK, this, this.onCellMouse);
        this._cells.push(cell);
    }

    protected override changeCellState(
        cell: Laya.UIComponent,
        visible: boolean,
        index: number
    ): void {
        if (!this.selectEnable) return;
        const selectBox = <Laya.Clip>cell.getChildByName("selectBox");
        if (selectBox) {
            this.selectEnable = true;
            selectBox.visible = visible;
            selectBox.index = index;
        }
    }
}
