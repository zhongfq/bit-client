// AUTO GENERATED, DON'T NOT MODIFY!

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

export interface GeneratedRoleLevelRow {
    lv: number;
    upgrade_exp: number;
}

export interface GeneratedRoleConfRow {
    key: string;
    value?: string;
}

export interface GeneratedHeroRow {
    id: number;
    name: string;
    type: number;
    model: number;
    enable?: number;
    job: number;
    attack_range: number;
}

export interface GeneratedSoldierRow {
    id: number;
    model: number;
}

export interface GeneratedEquipItemsRow {
    id: number;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
}

export interface GeneratedEquipSlotRow {
    idx: number;
    name: string;
    icon: string;
}

export interface GeneratedEquipColorRow {
    id: number;
    name: string;
}

export interface GeneratedEquipLevelRow {
    lv: number;
    name: string;
}

export interface GeneratedEquipConfRow {
    key: string;
    value?: string;
}

export interface GeneratedAttrRow {
    id: number;
    name: string;
    define?: string;
}

export interface GeneratedDefineRow {
    idx: number;
}

export interface GeneratedBagRow {
    id: number;
    type: number;
    max_grid: number;
}

export interface GeneratedMoneyRow {
    id: number;
    name: string;
    icon?: string;
    recover_max?: number;
    recover_sec?: number;
    recover_inc?: number;
}

export interface GeneratedSkillRow {
    id: number;
    type: number;
    anim?: string;
    cd?: number;
}

export interface GeneratedMailRow {
    id: number;
    type: number;
    title: string;
    content: string;
    reward?: any;
    expired_sec?: number;
}

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

export interface GeneratedRandomNameRow {
    id: number;
    firstname?: string;
    malename?: string;
    femalename?: string;
}

export interface GeneratedWorldMapMapsRow {
    id: number;
    battle_type: number;
    battle_mode: number;
    expired_sec: number;
}

export interface GeneratedWorldMapStatesRow {
    id: number;
    aid?: number;
    next_state?: number;
    pass_cond?: any;
}

export interface GeneratedBattleDemoRow {
    key: string;
    hero_ids: any;
}

export interface GeneratedBattleBuffRow {
    id: number;
    type: string;
    res: string;
    ban_actions?: any;
}

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

export interface GeneratedWorldEntityModelsRow {
    id: number;
    res: string;
}

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

export interface GeneratedWorldSeasonRow {
    season: number;
    name: string;
    map: string;
}

export interface GeneratedWorldTroopCmdRow {
    cmd: string;
    name: string;
    icon?: string;
    cost_energy?: number;
    priority?: number;
    auto_back?: number;
    rsp_color_name?: string;
}

export interface GeneratedWorldTroopStateRow {
    state: string;
    speedup?: number;
    peace?: number;
}

export interface GeneratedWorldTroopState2cmdRow {
    state: string;
    MOVE_TO?: number;
    STOP?: number;
    RETREAT?: number;
}

export interface GeneratedAllianceRow {
    id: number;
    name: string;
}

export interface GeneratedDungeonRow {
    id: number;
    reward?: any;
}

export interface GeneratedShopconfigRow {
    id: number;
    type: number;
    open_id?: number;
    refresh_hour?: number;
}

export interface GeneratedShop1Row {
    id: number;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
}

export interface GeneratedShop2Row {
    id: number;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
}

export interface GeneratedEmojiRow {
    id: number;
    icon: string;
}
