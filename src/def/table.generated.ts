// AUTO GENERATED, DON'T NOT MODIFY!

export interface GeneratedItemRow {
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
};

export interface GeneratedRoleLevelRow {
    upgrade_exp: number;
};

export interface GeneratedRoleConfRow {
    value?: string;
};

export interface GeneratedHeroRow {
    name: string;
    type: number;
    model: number;
    enable?: number;
    job: number;
    attack_range: number;
};

export interface GeneratedSoldierRow {
    model: number;
};

export interface GeneratedEquipItemsRow {
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
};

export interface GeneratedEquipSlotRow {
    name: string;
    icon: string;
};

export interface GeneratedEquipColorRow {
    name: string;
};

export interface GeneratedEquipLevelRow {
    name: string;
};

export interface GeneratedEquipConfRow {
    value?: string;
};

export interface GeneratedAttrRow {
    name: string;
    define?: string;
};

export interface GeneratedDefineRow {
};

export interface GeneratedBagRow {
    type: number;
    max_grid: number;
};

export interface GeneratedMoneyRow {
    name: string;
    icon?: string;
    recover_max?: number;
    recover_sec?: number;
    recover_inc?: number;
};

export interface GeneratedSkillRow {
    type: number;
    anim?: string;
    cd?: number;
};

export interface GeneratedMailRow {
    type: number;
    title: string;
    content: string;
    reward?: any;
    expired_sec?: number;
};

export interface GeneratedTaskMainRow {
    type: number;
    desc: string;
    reward: any;
};

export interface GeneratedTaskBranchRow {
    type: number;
    desc: string;
    reward: any;
};

export interface GeneratedTaskDailyRow {
    type: number;
    desc: string;
    reward: any;
};

export interface GeneratedRandomNameRow {
    firstname?: string;
    malename?: string;
    femalename?: string;
};

export interface GeneratedWorldMapRow {
    battle_type: number;
    battle_mode: number;
    expired_sec: number;
};

export interface GeneratedBattleDemoRow {
    hero_ids: any;
};

export interface GeneratedBattleBuffRow {
    type: string;
    res: string;
    ban_actions?: any;
};

export interface GeneratedWorldEntityTypeConfRow {
    define: string;
    dispel_fog_size?: number;
    view_limit?: number;
    sight_radius?: number;
    sight_shared?: number;
    build_limit?: number;
    can_defend?: number;
};

export interface GeneratedWorldEntityModelsRow {
    res: string;
};

export interface GeneratedWorldBuildingCastleRow {
    etype: number;
    fill_size: number;
    obstacle_size: number;
    name: string;
    building_desc?: string;
    type_desc: string;
    max_hp: number;
};

export interface GeneratedWorldBuildingCityRow {
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
};

export interface GeneratedWorldSeasonRow {
    name: string;
    map: string;
};

export interface GeneratedWorldTroopCmdRow {
    name: string;
    icon?: string;
    cost_energy?: number;
    priority?: number;
    auto_back?: number;
    rsp_color_name?: string;
};

export interface GeneratedWorldTroopStateRow {
    speedup?: number;
    peace?: number;
};

export interface GeneratedWorldTroopState2cmdRow {
    MOVE_TO?: number;
    STOP?: number;
    RETREAT?: number;
};

export interface GeneratedAllianceRow {
    name: string;
};

export interface GeneratedDungeonRow {
    reward?: any;
};

export interface GeneratedShopconfigRow {
    type: number;
    open_id?: number;
    refresh_hour?: number;
};

export interface GeneratedShop1Row {
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
};

export interface GeneratedShop2Row {
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
};
