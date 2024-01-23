import { app } from "../../app";
import { Service } from "../../core/service";
import {
    AttrTable,
    BattleBuffTable,
    BattleEntityTable,
    EquipTable,
    HeroTable,
    ItemTable,
    MailTable,
    SkillTable,
    TaskTable,
} from "../../def/data";
import { NetworkService } from "../network/network-service";

const JSON_ENTITY_TABLE = "resources/data/battle/battle_entity.json";
const JSON_BUFF_TABLE = "resources/data/battle/battle_buff.json";
const JSON_HERO_TABLE = "resources/data/hero.json";
const JSON_SKILL_TABLE = "resources/data/skill.json";
const JSON_EQUIP_TABLE = "resources/data/equip.json";
const JSON_ATTR_TABLE = "resources/data/attr.json";
const JSON_ITEM_TABLE = "resources/data/item.json";
const JSON_TASK_TABLE = "resources/data/task.json";
const JSON_Mail_TABLE = "resources/data/mail.json";

export class DataService extends Service<NetworkService> {
    equipTable!: EquipTable;
    attrTable!: AttrTable;
    battleEntityTable!: BattleEntityTable;
    battleBuffTable!: BattleBuffTable;
    heroTable!: HeroTable;
    skillTable!: SkillTable;
    itemTable!: ItemTable;
    taskTable!: TaskTable;
    mailTable!: MailTable;

    constructor(network: NetworkService) {
        super(network);
    }

    async load() {
        // TODO: 处理加载错误
        this.equipTable = await app.loader.loadJson(JSON_EQUIP_TABLE);
        this.attrTable = await app.loader.loadJson(JSON_ATTR_TABLE);
        // this.battleEntityTable = await app.loader.loadJson(JSON_ENTITY_TABLE);
        // this.battleBuffTable = await app.loader.loadJson(JSON_BUFF_TABLE);
        this.skillTable = await app.loader.loadJson(JSON_SKILL_TABLE);
        this.heroTable = await app.loader.loadJson(JSON_HERO_TABLE);
        this.itemTable = await app.loader.loadJson(JSON_ITEM_TABLE);
        this.taskTable = await app.loader.loadJson(JSON_TASK_TABLE);
        this.mailTable = await app.loader.loadJson(JSON_Mail_TABLE);
    }
}
