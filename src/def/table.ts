// import { BuffType } from "../system/war/ecs/components/buff";
// import { ElementType, SkillType } from "../system/war/ecs/components/element";
// import { TrackType } from "../system/war/ecs/components/movement";

//-----------------------------------------------------------------------------
// equip
//-----------------------------------------------------------------------------
type EquipItem = {
    id: number;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
};

type EquipSlot = {};
type EquipColor = {};
type EquipLevel = {};

export type EquipTable = {
    items: EquipItem[];
    slot: EquipSlot[];
    color: EquipColor[];
    level: EquipLevel[];
};

type Attr = {
    id: number;
    name: string;
};

export type AttrTable = {
    [key: number | string]: Attr;
};

//-----------------------------------------------------------------------------
// world
//-----------------------------------------------------------------------------
export type WorldEntityTable = {
    models: {
        [k: string]: {
            res: string;
            id: number;
        };
    };
};

export type BattleBuffTable = {
    buff: {
        [k: string]: {
            id: number;
            // type: BuffType;
            res: string;
        };
    };
};

export type HeroTable = {
    [k: string]: {
        id: number;
        name: string;
        model: number;
    };
};

export type SoldierTable = {
    [k: string]: {
        id: number;
        model: string;
    };
};

export type SkillTable = {
    [k: string]: {
        id: number;
        // type: SkillType;
    };
};
export type ItemRow = {
    id: number;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
    desc: string;
    composite: number;
    sub_type: number;
    use: number;
    quality: number;
    args?: any;
    _id: number;
};
export type ItemTable = {
    [k: number]: ItemRow;
};
export type TaskRow = {
    id: number;
    comment: string;
    type: number;
    desc: string;
};
export type TaskTable = {
    [k: number]: TaskRow;
};
export type Reward = { id: number; count: number };
export type MailRow = {
    id: number;
    title: string;
    content: string;
    reward: Reward[];
};

export type MailTable = {
    [k: number]: MailRow;
};
export type ShopRow = {
    id: number;
    desc: string;
    items: Reward[];
    cost?: Reward[];
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
};
export type ShopTable = {
    shop_config: { id: number; type: number; open_id?: number; time?: number }[];
    shop_1: ShopRow[];
    shop_2: ShopRow[];
};
export type MoneyRow = {
    id: number;
    desc: string;
    name: string;
    icon: string;
};
export type MoneyTable = {
    [k: number]: MoneyRow;
};
export type ItemArgsReward = {};
export type ItemArgsExp = {};
export type ItemArgsMoney = {
    money_id: number;
};
