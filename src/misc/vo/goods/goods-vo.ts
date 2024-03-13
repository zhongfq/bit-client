import { ItemTable } from "../../../def/table";
import { VO } from "../vo-base/vo";

/**
 * Goods
 * 物品基类
 */
export abstract class GoodsVo<IRef = any, Cmd = any> extends VO<IRef, Cmd> {
    public refTable!: any;
    //获取物品refId
    public abstract get refId(): number;
    //获取物品数据库id
    public abstract override get id(): number;
    //物品类型
    public abstract get goodsType(): number;
    //获取描述
    public abstract get desc(): string;
    //获取图标路径
    public abstract get iconUrl(): string;
    //品质
    public abstract get quality(): number;
    //品质框资源路径
    public abstract get qualitySkin(): string;
    //名字
    public abstract get name(): string;

    //#region 外部注入数量
    //获取物品数量
    protected onGetNumber(): number {
        return 0;
    }

    private goodsNum: number | null = null;

    public get goodsNumberStr(): string {
        return "" + this.goodsNumber;
    }

    public set goodsNumber(num: number) {
        if (typeof num == "string") {
            this.goodsNum = Number(num);
        } else {
            this.goodsNum = num;
        }
    }

    public get goodsNumber(): number {
        if (this.goodsNum != null) {
            return this.goodsNum;
        }
        const number = this.onGetNumber();
        if (!isNaN(number)) {
            return number;
        }
        return 0;
    }
}
