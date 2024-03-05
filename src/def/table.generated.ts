// AUTO GENERATED, DON'T NOT MODIFY!

// file: design/item.xlsx
export interface GeneratedItemRow {
    id: number;
    name: string;
    desc: string;
    main_type: number;
    sub_type: number;
    bag_id: number;
    use?: number;
    stack?: number;
    discard?: number;
    composite?: number;
    expired?: number;
    quality: number;
    args?: any;
    icon: string;
}

// file: design/role.xlsx
export interface GeneratedRoleLevelRow {
    lv: number;
    upgrade_exp: number;
}

// file: design/role.xlsx
export interface GeneratedRoleConfRow {
    key: string;
    value?: string;
}

// file: design/hero.xlsx
export interface GeneratedHeroRow {
    id: number;
    name: string;
    type: number;
    battle_entity: number;
    world_entity: number;
    enable?: number;
    job: number;
    attack_radius: number;
    skill_radius: number;
    skill1?: number;
    skill2?: number;
    skill3?: number;
    skill4?: number;
}

// file: design/soldier.xlsx
export interface GeneratedSoldierRow {
    id: number;
    battle_entity: number;
    skill1?: number;
    attack_radius: number;
    skill_radius: number;
    skill2?: number;
}

// file: design/equip.xlsx
export interface GeneratedEquipItemsRow {
    id: number;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
}

// file: design/equip.xlsx
export interface GeneratedEquipSlotRow {
    idx: number;
    name: string;
    icon: string;
}

// file: design/equip.xlsx
export interface GeneratedEquipColorRow {
    id: number;
    name: string;
}

// file: design/equip.xlsx
export interface GeneratedEquipLevelRow {
    lv: number;
    name: string;
}

// file: design/equip.xlsx
export interface GeneratedEquipConfRow {
    key: string;
    value?: string;
}

// file: design/attr.xlsx
export interface GeneratedAttrRow {
    id: number;
    name: string;
    define?: string;
}

// file: design/define.xlsx
export interface GeneratedDefineRow {
    idx: number;
}

// file: design/bag.xlsx
export interface GeneratedBagRow {
    id: number;
    type: number;
    max_grid: number;
}

// file: design/money.xlsx
export interface GeneratedMoneyRow {
    id: number;
    name: string;
    icon?: string;
    recover_max?: number;
    recover_sec?: number;
    recover_inc?: number;
}

// file: design/skill.xlsx
export interface GeneratedSkillRow {
    id: number;
    type: number;
    lanuch_btree: string;
    anim?: string;
    cd?: number;
}

// file: design/mail.xlsx
export interface GeneratedMailRow {
    id: number;
    type: number;
    title: string;
    content: string;
    reward?: any;
    expired_sec?: number;
}

// file: design/task.xlsx
export interface GeneratedTaskMainRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    branch_tasks?: any;
    reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/task.xlsx
export interface GeneratedTaskBranchRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/task.xlsx
export interface GeneratedTaskDailyRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/task.xlsx
export interface GeneratedTaskWeeklyRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/task.xlsx
export interface GeneratedTaskEventsRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    reward: any;
    vip_reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/task.xlsx
export interface GeneratedTaskPassesRow {
    id: number;
    sort: number;
    type: number;
    desc: string;
    reward: any;
    vip_reward: any;
    guide_id?: number;
    reset_type: number;
    receive_type: number;
    icon: string;
}

// file: design/random_name.xlsx
export interface GeneratedRandomNameRow {
    id: number;
    firstname?: string;
    malename?: string;
    femalename?: string;
}

// file: design/battle/battle_entity.xlsx
export interface GeneratedBattleEntityEtypeRow {
    etype: number;
    define: string;
}

// file: design/battle/battle_entity.xlsx
export interface GeneratedBattleEntityEntityRow {
    id: number;
    etype: number;
    res: string;
    pve_ai: string;
    attack_radius?: number;
    skill_radius?: number;
}

// file: design/battle/battle_demo.xlsx
export interface GeneratedBattleDemoRow {
    key: string;
    hero_id: number;
    soldiers1: any;
    soldiers2: any;
    soldiers3: any;
    soldiers4: any;
}

// file: design/battle/battle_buff.xlsx
export interface GeneratedBattleBuffRow {
    id: number;
    type: string;
    res: string;
    ban_actions?: any;
}

// file: design/world/world_map.xlsx
export interface GeneratedWorldMapMapsRow {
    id: number;
    battle_type: number;
    battle_mode: number;
    expired_sec: number;
}

// file: design/world/world_map.xlsx
export interface GeneratedWorldMapStatesRow {
    id: number;
    aid?: number;
    next_state?: number;
    pass_cond?: any;
}

// file: design/world/world_entity.xlsx
export interface GeneratedWorldEntityTypeConfRow {
    etype: number;
    define: string;
    dispel_fog_size?: number;
    view_limit?: number;
    sight_radius?: number;
    sight_shared?: number;
    build_limit?: number;
    can_defend?: number;
}

// file: design/world/world_entity.xlsx
export interface GeneratedWorldEntityModelsRow {
    id: number;
    res: string;
}

// file: design/world/world_building.xlsx
export interface GeneratedWorldBuildingCastleRow {
    id: number;
    etype: number;
    fill_size: number;
    obstacle_size: number;
    name: string;
    building_desc?: string;
    type_desc: string;
    max_hp: number;
}

// file: design/world/world_building.xlsx
export interface GeneratedWorldBuildingCityRow {
    id: number;
    etype: number;
    portal?: number;
    fill_size: number;
    obstacle_size: number;
    coll_radius: number;
    public_sight_radius: number;
    lv: number;
    declare_cost: any;
    gameplay: number;
    name: string;
    building_desc: string;
    type_desc: string;
    select_effect_lv: number;
    max_hp: number;
    touch_mail: number;
    alliance_mail: number;
    tips_pic: string;
}

// file: design/world/world_season.xlsx
export interface GeneratedWorldSeasonRow {
    season: number;
    name: string;
    map: string;
}

// file: design/world/world_troop.xlsx
export interface GeneratedWorldTroopCmdRow {
    cmd: string;
    name: string;
    icon?: string;
    cost_energy?: number;
    priority?: number;
    auto_back?: number;
    rsp_color_name?: string;
}

// file: design/world/world_troop.xlsx
export interface GeneratedWorldTroopStateRow {
    state: string;
    speedup?: number;
    peace?: number;
}

// file: design/world/world_troop.xlsx
export interface GeneratedWorldTroopState2cmdRow {
    state: string;
    MOVE_TO?: number;
    STOP?: number;
    RETREAT?: number;
}

// file: design/alliance.xlsx
export interface GeneratedAllianceRow {
    id: number;
    name: string;
}

// file: design/dungeon.xlsx
export interface GeneratedDungeonRow {
    id: number;
    reward?: any;
}

// file: design/activity/shop.xlsx
export interface GeneratedShopConfigRow {
    id: number;
    type: number;
    open_id?: number;
    refresh_hour?: number;
}

// file: design/activity/shop.xlsx
export interface GeneratedShop1Row {
    id: number;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
}

// file: design/activity/shop.xlsx
export interface GeneratedShop2Row {
    id: number;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
}

// file: design/emoji.xlsx
export interface GeneratedEmojiRow {
    id: number;
    icon: string;
}

// file: design/chest.xlsx
export interface GeneratedChestRow {
    id: number;
    sort: number;
    icon?: string;
    open_max_num: number;
    open_score: number;
    reward_score: number;
    reward: any;
    desc?: string;
}

// file: design/chest.xlsx
export interface GeneratedChestHeroRow {
    hero_id: number;
    sort: number;
    spine_source: string;
}
