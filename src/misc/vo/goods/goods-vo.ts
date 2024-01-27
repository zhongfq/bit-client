import { ItemTable } from "../../../def/table";
import { VO } from "../vo-base/vo";

/**
 * Goods
 * 物品基类
 */
export abstract class GoodsVo<IRef = any, Cmd = any> extends VO<IRef, Cmd> {
    static __cname: string = "Goods";
    refTable!: any;
    //获取物品refId
    abstract get refId(): number;
    //获取物品数据库id
    abstract get id(): number;
    //物品类型
    abstract get goodsType(): number;
    //获取描述
    abstract get desc(): string;
    //获取图标路径
    abstract get iconUrl(): string;
    //品质
    abstract get quality(): number;
    //品质框资源路径
    abstract get qualitySkin(): string;
    //名字
    abstract get name(): string;

    //#region 外部注入数量
    //获取物品数量
    protected onGetNumber(): number {
        return 0;
    }

    private goodsNum: number | null = null;

    get goodsNumberStr(): string {
        return "" + this.goodsNumber;
    }
    set goodsNumber(num: number) {
        if (typeof num == "string") {
            this.goodsNum = Number(num);
        } else {
            this.goodsNum = num;
        }
    }
    get goodsNumber(): number {
        if (this.goodsNum != null) {
            return this.goodsNum;
        }
        let number = this.onGetNumber();
        if (!isNaN(number)) {
            return number;
        }
        return 0;
    }
}
