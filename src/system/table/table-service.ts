import { app } from "../../app";
import { Service } from "../../core/service";
import { ItemConf } from "../../def/item";
import {
    AllianceTable,
    AttrTable,
    BattleBuffTable,
    BattleBuildingTable,
    BattleEntityTable,
    ChestTable,
    EmojiTable,
    EquipTable,
    HeroTable,
    ItemTable,
    MailTable,
    MoneyTable,
    RoleTable,
    ShopTable,
    SkillTable,
    SoldierTable,
    TaskTable,
    WorldEntityTable,
} from "../../def/table";
import { res } from "../../misc/res";
import { NetworkService } from "../network/network-service";
import { TableUtil } from "./table-util";

export class TableService extends Service<NetworkService> {
    public alliance!: AllianceTable;
    public attr!: AttrTable;
    public battleBuff!: BattleBuffTable;
    public battleEntity!: BattleEntityTable;
    public battleBuilding!: BattleBuildingTable;
    public chest!: ChestTable;
    public emoji!: EmojiTable;
    public equip!: EquipTable;
    public hero!: HeroTable;
    public item!: ItemTable;
    public mail!: MailTable;
    public money!: MoneyTable;
    public role!: RoleTable;
    public shop!: ShopTable;
    public skill!: SkillTable;
    public soldier!: SoldierTable;
    public task!: TaskTable;
    public worldEntity!: WorldEntityTable;

    public constructor(network: NetworkService) {
        super(network);
    }

    public async load() {
        // TODO: 处理加载错误
        this.alliance = await app.loader.loadJson(res.TABLE_ALLIANCE_TABLE);
        this.attr = await app.loader.loadJson(res.TABLE_ATTR_TABLE);
        this.battleEntity = await app.loader.loadJson(res.TABLE_BATTLE_ENTITY_TABLE);
        this.battleBuilding = await app.loader.loadJson(res.TABLE_BATTLE_BUILDING_TABLE);
        this.chest = await app.loader.loadJson(res.TABLE_CHEST_TABLE);
        this.emoji = await app.loader.loadJson(res.TABLE_EMOJI_TABLE);
        this.equip = await app.loader.loadJson(res.TABLE_EQUIP_TABLE);
        this.hero = await app.loader.loadJson(res.TABLE_HERO_TABLE);
        this.item = await app.loader.loadJson(res.TABLE_ITEM_TABLE);
        this.mail = await app.loader.loadJson(res.TABLE_MAIL_TABLE);
        this.money = await app.loader.loadJson(res.TABLE_MONEY_TABLE);
        this.role = await app.loader.loadJson(res.TABLE_ROLE_TABLE);
        this.shop = await app.loader.loadJson(res.TABLE_SHOP_TABLE);
        this.skill = await app.loader.loadJson(res.TABLE_SKILL_TABLE);
        this.soldier = await app.loader.loadJson(res.TABLE_SOLDIER_TABLE);
        this.task = await app.loader.loadJson(res.TABLE_TASK_TABLE);
        this.worldEntity = await app.loader.loadJson(res.TABLE_ENTITY_TABLE);
    }

    public getVo(refId: number) {
        const dataRow = TableUtil.getRow(this.item, { id: refId });
        if (dataRow) {
            if (dataRow.sub_type == ItemConf.ITEM_TYPE.MONEY) {
                return app.service.user.money.get(refId);
            } else {
                return app.service.bag.itemBag;
            }
        }
        return null;
    }
}
