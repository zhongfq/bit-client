import { app } from "../../app";
import { Service } from "../../core/service";
import { ItemConf } from "../../def/item";
import {
    AllianceTable,
    AttrTable,
    BattleBuffTable,
    BattleBuildingTable,
    BattleEntityTable,
    BattleEventTable,
    ChestTable,
    EmojiTable,
    EquipTable,
    HeroTable,
    ItemTable,
    MailTable,
    MoneyTable,
    MonsterTable,
    RoleTable,
    ShopTable,
    SkillTable,
    SoldierTable,
    TaskTable,
    TextureCfgTable,
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
    public battleEvent!: BattleEventTable;
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
    public monster!: MonsterTable;
    public textureCfg!: TextureCfgTable;
    public worldEntity!: WorldEntityTable;

    public constructor(network: NetworkService) {
        super(network);
    }

    public async load() {
        const checker = () => true;
        this.alliance = await app.loader.loadJson(res.TABLE_ALLIANCE_TABLE, checker);
        this.attr = await app.loader.loadJson(res.TABLE_ATTR_TABLE, checker);
        this.battleBuilding = await app.loader.loadJson(res.TABLE_BATTLE_BUILDING_TABLE, checker);
        this.battleEntity = await app.loader.loadJson(res.TABLE_BATTLE_ENTITY_TABLE, checker);
        this.battleEvent = await app.loader.loadJson(res.TABLE_BATTLE_EVENT_TABLE, checker);
        this.chest = await app.loader.loadJson(res.TABLE_CHEST_TABLE, checker);
        this.emoji = await app.loader.loadJson(res.TABLE_EMOJI_TABLE, checker);
        this.equip = await app.loader.loadJson(res.TABLE_EQUIP_TABLE, checker);
        this.hero = await app.loader.loadJson(res.TABLE_HERO_TABLE, checker);
        this.item = await app.loader.loadJson(res.TABLE_ITEM_TABLE, checker);
        this.mail = await app.loader.loadJson(res.TABLE_MAIL_TABLE, checker);
        this.money = await app.loader.loadJson(res.TABLE_MONEY_TABLE, checker);
        this.monster = await app.loader.loadJson(res.TABLE_MONSTER_TABLE, checker);
        this.role = await app.loader.loadJson(res.TABLE_ROLE_TABLE, checker);
        this.shop = await app.loader.loadJson(res.TABLE_SHOP_TABLE, checker);
        this.skill = await app.loader.loadJson(res.TABLE_SKILL_TABLE, checker);
        this.soldier = await app.loader.loadJson(res.TABLE_SOLDIER_TABLE, checker);
        this.task = await app.loader.loadJson(res.TABLE_TASK_TABLE, checker);
        this.textureCfg = await app.loader.loadJson(res.TABLE_TEXTURE_CFG_TABLE, checker);
        this.worldEntity = await app.loader.loadJson(res.TABLE_ENTITY_TABLE, checker);
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
