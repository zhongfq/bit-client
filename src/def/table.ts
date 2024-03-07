// import { BuffType } from "../system/war/ecs/components/buff";
// import { ElementType, SkillType } from "../system/war/ecs/components/element";
// import { TrackType } from "../system/war/ecs/components/movement";

import {
    GeneratedAllianceRow,
    GeneratedAttrRow,
    GeneratedBattleBuffRow,
    GeneratedBattleEntityEntityRow,
    GeneratedChestHeroRow,
    GeneratedChestRow,
    GeneratedChestScoreRow,
    GeneratedEmojiRow,
    GeneratedEquipColorRow,
    GeneratedEquipItemsRow,
    GeneratedEquipLevelRow,
    GeneratedEquipSlotRow,
    GeneratedHeroRow,
    GeneratedItemRow,
    GeneratedMailRow,
    GeneratedMoneyRow,
    GeneratedRoleConfRow,
    GeneratedRoleLevelRow,
    GeneratedShop1Row,
    GeneratedShop2Row,
    GeneratedShopConfigRow,
    GeneratedSkillRow,
    GeneratedSoldierRow,
    GeneratedTaskBranchRow,
    GeneratedTaskDailyRow,
    GeneratedTaskMainRow,
    GeneratedWorldEntityModelsRow,
} from "./table.generated";
//-----------------------------------------------------------------------------通用接口----------|
//通用奖励接口
export interface Reward {
    id: number;
    count: number;
}
//-----------------------------------------------------------------------------通用接口----------|

//-----------------------------------------------------------------------------
// equip
//-----------------------------------------------------------------------------
export interface EquipItemsRow extends GeneratedEquipItemsRow {}
export interface EquipSlotRow extends GeneratedEquipSlotRow {}
export interface EquipColorRow extends GeneratedEquipColorRow {}
export interface EquipLevelRow extends GeneratedEquipLevelRow {}
export type EquipTable = {
    items: EquipItemsRow[];
    slot: EquipSlotRow[];
    color: EquipColorRow[];
    level: EquipLevelRow[];
};
export type AttrTable = {
    [key: number | string]: GeneratedAttrRow;
};
//-----------------------------------------------------------------------------
// world
//-----------------------------------------------------------------------------
export interface WorldEntityModelsRow extends GeneratedWorldEntityModelsRow {}
export type WorldEntityTable = {
    models: {
        [k: string]: WorldEntityModelsRow;
    };
};

//-----------------------------------------------------------------------------
// 战斗相关
//-----------------------------------------------------------------------------
export interface BattleBuffRow extends GeneratedBattleBuffRow {}
export type BattleBuffTable = {
    buff: {
        [k: string]: BattleBuffRow;
    };
};

export interface BattleEntityRow extends GeneratedBattleEntityEntityRow {}

export type BattleEntityTable = {
    entity: { [k: string]: BattleEntityRow };
};

//-----------------------------------------------------------------------------
// 武将
//-----------------------------------------------------------------------------
export interface HeroRow extends GeneratedHeroRow {
    quality: number;
    icon: string;
}
export type HeroTable = {
    [k: string]: HeroRow;
};
//-----------------------------------------------------------------------------
// 兵种
//-----------------------------------------------------------------------------
export interface SoldierRow extends GeneratedSoldierRow {}
export type SoldierTable = {
    [k: string]: SoldierRow;
};
//-----------------------------------------------------------------------------
// 技能
//-----------------------------------------------------------------------------
export interface SkillRow extends GeneratedSkillRow {}
export type SkillTable = {
    [k: string]: SkillRow;
};
//-----------------------------------------------------------------------------
// 道具
//-----------------------------------------------------------------------------
export interface ItemMoneyRow extends ItemRow {
    args: { money_id: number }; //去掉可选：导表已检查
}
export interface ItemRow extends GeneratedItemRow {}
export type ItemTable = {
    [k: number]: ItemRow;
};
//-----------------------------------------------------------------------------
// 任务
//-----------------------------------------------------------------------------
export interface TaskMainRow extends GeneratedTaskMainRow {}
export interface TaskBranchRow extends GeneratedTaskBranchRow {}
export interface TaskDailyRow extends GeneratedTaskDailyRow {}
export type TaskTable = {
    [k: number]: TaskMainRow | TaskBranchRow | TaskDailyRow;
};
//-----------------------------------------------------------------------------
// 邮件
//-----------------------------------------------------------------------------
export interface MailRow extends GeneratedMailRow {}
export type MailTable = {
    [k: number]: MailRow;
};
//-----------------------------------------------------------------------------
// 商城
//-----------------------------------------------------------------------------
export interface ShopconfigRow extends GeneratedShopConfigRow {}
export interface Shop1Row extends GeneratedShop1Row {
    cost?: any[];
}
export interface Shop2Row extends GeneratedShop2Row {}
export type ShopTable = {
    shop_config: ShopconfigRow[];
    shop_1: Shop1Row[];
    shop_2: Shop2Row[];
};
//-----------------------------------------------------------------------------
// 资源
//-----------------------------------------------------------------------------
export interface MoneyRow extends GeneratedMoneyRow {}
export type MoneyTable = {
    [k: number]: GeneratedMoneyRow;
};
//-----------------------------------------------------------------------------
// 联盟
//-----------------------------------------------------------------------------
export interface AllianceRow extends GeneratedAllianceRow {}
export type AllianceTable = {
    [K: number]: AllianceRow;
};
//-----------------------------------------------------------------------------
// 表情
//-----------------------------------------------------------------------------
export interface EmojiRow extends GeneratedEmojiRow {}
export type EmojiTable = {
    [K: number]: EmojiRow;
};
//-----------------------------------------------------------------------------
// 用户
//-----------------------------------------------------------------------------
export interface RoleLevelRow extends GeneratedRoleLevelRow {}
export interface RoleConfRow extends GeneratedRoleConfRow {}
export type RoleTable = {
    level: RoleLevelRow[];
    conf: RoleConfRow[];
};
//-----------------------------------------------------------------------------
// 宝箱
//-----------------------------------------------------------------------------
export interface ChestRow extends GeneratedChestRow {}
export interface ChestHeroRow extends GeneratedChestHeroRow {}
export interface ChestScoreRow extends GeneratedChestScoreRow {}
export type ChestTable = {
    chest: {[k:number] : ChestRow};
    hero: ChestHeroRow[];
    score: ChestScoreRow[];
};
