const { regClass } = Laya;
import { Callback } from "../../../core/dispatcher";
import { ListUIBase } from "./ListUI.generated";

@regClass()
export class ListUI extends ListUIBase {
    public selectCheck: Callback | null = null;

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

    protected override onCellMouse(e: Laya.Event): void {
        if (e.type === Laya.Event.MOUSE_DOWN) this._isMoved = false;
        const cell = <Laya.UIComponent>e.currentTarget;
        const index = this._startIndex + this._cells.indexOf(cell);
        const isSelected = this.selectCheck ? this.selectCheck(index) : true;
        if (!isSelected) return;
        if (index < 0) return;
        if (e.type === Laya.Event.CLICK || e.type === Laya.Event.RIGHT_CLICK) {
            if (this.selectEnable && !this._isMoved) this.selectedIndex = index;
            else this.changeCellState(cell, true, 0);
        } else if (
            (e.type === Laya.Event.MOUSE_OVER || e.type === Laya.Event.MOUSE_OUT) &&
            this._selectedIndex !== index
        ) {
            this.changeCellState(cell, e.type === Laya.Event.MOUSE_OVER, 0);
        }
        this.mouseHandler && this.mouseHandler.runWith([e, index]);
    }
}
