const { regClass } = Laya;
import proto from "../../../def/proto";
import { ItemVo } from "../../../misc/vo/goods/item-vo";
import { IconUI } from "../icon/IconUI";
import { RewardUIBase } from "./RewardUI.generated";

@regClass()
export class RewardUI extends RewardUIBase {
    public openData: proto.bag.IItem[] = [];

    public override open(closeOther?: boolean | undefined, param?: any): void {
        this.openData = param;
        super.open(closeOther, param);
    }

    public override onAwake(): void {
        this.initUIEvent();
    }

    private initUIEvent() {
        this.listItem.renderHandler = new Laya.Handler(this, this.onListRender);
        this._updateList();
    }

    public onListRender(cell: IconUI, index: number) {
        const cellData = this.listItem.array[index];
        cell.updateGoods(cellData);
    }

    private _updateList() {
        const arrayData = [];
        for (const itemData of this.openData) {
            const vo = new ItemVo();
            vo.initByCmd(itemData as proto.bag.Item);
            arrayData.push(vo);
        }
        this.listItem.array = arrayData;
    }
}
