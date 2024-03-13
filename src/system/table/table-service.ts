import { app } from "../../app";
import { Service } from "../../core/service";
import {
    AttrTable,
    BattleBuffTable,
    WorldEntityTable,
    EquipTable,
    HeroTable,
    ItemTable,
    MailTable,
    SkillTable,
    TaskTable,
    SoldierTable,
    ShopTable,
    MoneyTable,
    AllianceTable,
    EmojiTable,
    RoleTable,
    ChestTable,
    BattleEntityTable,
    BattleBuildingTable,
} from "../../def/table";
import { ItemConf } from "../../def/item";
import { VoBag } from "../../misc/vo/vo-base/vo-bag";
import { NetworkService } from "../network/network-service";
import { TableUtil } from "./table-util";

const JSON_ALLIANCE_TABLE = "resources/data/alliance.json";
const JSON_ATTR_TABLE = "resources/data/attr.json";
const JSON_BATTLE_ENTITY_TABLE = "resources/data/battle/battle-entity.json";
const JSON_BATTLE_BUILDING_TABLE = "resources/data/battle/battle-building.json";
const JSON_BUFF_TABLE = "resources/data/battle/battle-buff.json";
const JSON_CHEST_TABLE = "resources/data/chest.json";
const JSON_EMOJI_TABLE = "resources/data/emoji.json";
const JSON_ENTITY_TABLE = "resources/data/world/world-entity.json";
const JSON_EQUIP_TABLE = "resources/data/equip.json";
const JSON_HERO_TABLE = "resources/data/hero.json";
const JSON_ITEM_TABLE = "resources/data/item.json";
const JSON_MAIL_TABLE = "resources/data/mail.json";
const JSON_MONEY_TABLE = "resources/data/money.json";
const JSON_ROLE_TABLE = "resources/data/role.json";
const JSON_SHOP_TABLE = "resources/data/activity/shop.json";
const JSON_SKILL_TABLE = "resources/data/skill.json";
const JSON_SOLDIER_TABLE = "resources/data/soldier.json";
const JSON_TASK_TABLE = "resources/data/task.json";

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
        this.alliance = await app.loader.loadJson(JSON_ALLIANCE_TABLE);
        this.attr = await app.loader.loadJson(JSON_ATTR_TABLE);
        this.battleEntity = await app.loader.loadJson(JSON_BATTLE_ENTITY_TABLE);
        this.battleBuilding = await app.loader.loadJson(JSON_BATTLE_BUILDING_TABLE);
        this.chest = await app.loader.loadJson(JSON_CHEST_TABLE);
        this.emoji = await app.loader.loadJson(JSON_EMOJI_TABLE);
        this.equip = await app.loader.loadJson(JSON_EQUIP_TABLE);
        this.hero = await app.loader.loadJson(JSON_HERO_TABLE);
        this.item = await app.loader.loadJson(JSON_ITEM_TABLE);
        this.mail = await app.loader.loadJson(JSON_MAIL_TABLE);
        this.money = await app.loader.loadJson(JSON_MONEY_TABLE);
        this.role = await app.loader.loadJson(JSON_ROLE_TABLE);
        this.shop = await app.loader.loadJson(JSON_SHOP_TABLE);
        this.skill = await app.loader.loadJson(JSON_SKILL_TABLE);
        this.soldier = await app.loader.loadJson(JSON_SOLDIER_TABLE);
        this.task = await app.loader.loadJson(JSON_TASK_TABLE);
        this.worldEntity = await app.loader.loadJson(JSON_ENTITY_TABLE);
        this.worldEntity = await app.loader.loadJson(JSON_ENTITY_TABLE);
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
