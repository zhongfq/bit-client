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
} from "../../def/table";
import { ItemConf } from "../../def/item";
import { VOBag } from "../../misc/vo/vo-base/vo-bag";
import { NetworkService } from "../network/network-service";
import { TableUtil } from "./table-util";

const JSON_ENTITY_TABLE = "resources/data/world/world_entity.json";
const JSON_BUFF_TABLE = "resources/data/battle/battle_buff.json";
const JSON_HERO_TABLE = "resources/data/hero.json";
const JSON_SOLDIER_TABLE = "resources/data/soldier.json";
const JSON_SKILL_TABLE = "resources/data/skill.json";
const JSON_EQUIP_TABLE = "resources/data/equip.json";
const JSON_ATTR_TABLE = "resources/data/attr.json";
const JSON_ITEM_TABLE = "resources/data/item.json";
const JSON_TASK_TABLE = "resources/data/task.json";
const JSON_MAIL_TABLE = "resources/data/mail.json";
const JSON_SHOP_TABLE = "resources/data/activity/shop.json";
const JSON_MONEY_TABLE = "resources/data/money.json";

export class TableService extends Service<NetworkService> {
    equip!: EquipTable;
    attr!: AttrTable;
    worldEntity!: WorldEntityTable;
    battleBuff!: BattleBuffTable;
    hero!: HeroTable;
    soldier!: SoldierTable;
    skill!: SkillTable;
    item!: ItemTable;
    task!: TaskTable;
    mail!: MailTable;
    shop!: ShopTable;
    money!: MoneyTable;

    constructor(network: NetworkService) {
        super(network);
    }
    async load() {
        // TODO: 处理加载错误
        this.equip = await app.loader.loadJson(JSON_EQUIP_TABLE);
        this.attr = await app.loader.loadJson(JSON_ATTR_TABLE);
        this.worldEntity = await app.loader.loadJson(JSON_ENTITY_TABLE);
        this.soldier = await app.loader.loadJson(JSON_SOLDIER_TABLE);
        this.skill = await app.loader.loadJson(JSON_SKILL_TABLE);
        this.hero = await app.loader.loadJson(JSON_HERO_TABLE);
        this.item = await app.loader.loadJson(JSON_ITEM_TABLE);
        this.task = await app.loader.loadJson(JSON_TASK_TABLE);
        this.mail = await app.loader.loadJson(JSON_MAIL_TABLE);
        this.shop = await app.loader.loadJson(JSON_SHOP_TABLE);
        this.money = await app.loader.loadJson(JSON_MONEY_TABLE);
    }
    getVo(refId: number) {
        let dataRow = TableUtil.getRef(this.item, { id: refId });
        if (dataRow) {
            if (dataRow.sub_type == ItemConf.ITEM_TYPE.MONEY) {
                return app.service.user.monye.get(refId);
            } else {
                return app.service.bag.itemBag;
            }
        }
        return null;
    }
}
