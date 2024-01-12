import { BuffType } from "../system/war/ecs/components/buff";
import { ElementType, SkillType } from "../system/war/ecs/components/element";
import { TrackType } from "../system/war/ecs/components/movement";

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
// battle
//-----------------------------------------------------------------------------
export type BattleEntityTable = {
    entity: {
        [k: string]: {
            etype: ElementType;
            res: string;
            card: string;
            id: number;
            track_type?: TrackType;
        };
    };
};

export type BattleBuffTable = {
    buff: {
        [k: string]: {
            id: number;
            type: BuffType;
            res: string;
        };
    };
};

export type HeroTable = {
    [k: string]: {
        id: number;
        name: string;
    };
};

export type SkillTable = {
    [k: string]: {
        id: number;
        type: SkillType;
    };
};
export type Item = {
    id: number;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
    desc: string;
    composite:number;
    sub_type:number;
    use:number;
};
export type ItemTable = {
    [k: number]: Item;
};
