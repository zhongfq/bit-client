// AUTO GENERATED, DON'T NOT MODIFY!

export interface GeneratedItemRow {
    comment: string;
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
    comment: string;
    upgrade_exp: number;
};

export interface GeneratedRoleConfRow {
    comment: string;
    value?: string;
};

export interface GeneratedHeroRow {
    name: string;
    type: number;
    model: number;
    enable?: number;
    job: number;
    attack_range: number;
    skill1?: number;
    skill2?: number;
    skill3?: number;
    skill4?: number;
    kill_reward?: any;
    battle_entity_id?: number;
    ATK_GROW: any;
    DEF_GROW: any;
    HP_GROW: any;
    MAX_HP: number;
    ATK: number;
    DEF: number;
    CRITICAL_ATK: number;
    CRITICAL_DEF: number;
    CRITICAL_DAMAGE: number;
    HIT: number;
    DODGE: number;
    SUNDER_ARMOR: number;
    ATK_SPEED_RATE: number;
    MOVE_SPEED_RATE: number;
    RUSE: number;
    DAMAGE_REDUCE: number;
    BEATBACK_ATK: number;
    BEATBACK_DEF: number;
    AI_ROLL: number;
    DROP_SP: number;
    InitStar: number;
    OPEN: number;
    Contry: number;
    COMMAND: number;
    FORCE: number;
    BRAINS: number;
    ROBOT_PROB: number;
    RECOVER_HP: number;
    MP: number;
};

export interface GeneratedSoldierRow {
    comment: string;
    model: number;
};

export interface GeneratedEquipItemsRow {
    desc: string;
    name: string;
    lv: number;
    color: number;
    slot: number;
    icon: string;
    attr1: any;
    attr2: any;
};

export interface GeneratedEquipSlotRow {
    desc: string;
    name: string;
    icon: string;
};

export interface GeneratedEquipColorRow {
    desc: string;
    name: string;
};

export interface GeneratedEquipLevelRow {
    desc: string;
    name: string;
};

export interface GeneratedEquipConfRow {
    comment: string;
    value?: string;
};

export interface GeneratedAttrRow {
    desc: string;
    name: string;
    define?: string;
};

export interface GeneratedDefineRow {
    desc: string;
    hero_id: number;
};

export interface GeneratedBagRow {
    comment: string;
    type: number;
    max_grid: number;
};

export interface GeneratedMoneyRow {
    desc: string;
    name: string;
    icon?: string;
    init_value: number;
    recover_max?: number;
    recover_sec?: number;
    recover_inc?: number;
};

export interface GeneratedSkillRow {
    desc: string;
    type: number;
    lanuch_btree: string;
    anim?: string;
    coefficient?: number;
    cd?: number;
};

export interface GeneratedMailRow {
    comment: string;
    type: number;
    title: string;
    content: string;
    reward?: any;
    expired_sec?: number;
};

export interface GeneratedTaskMainRow {
    comment: string;
    type: number;
    desc: string;
    prev_task?: number;
    next_tasks?: any;
    condition: string;
    args: any;
    reward: any;
};

export interface GeneratedTaskBranchRow {
    comment: string;
    type: number;
    desc: string;
    prev_task?: number;
    next_tasks?: any;
    condition: string;
    args: any;
    reward: any;
};

export interface GeneratedTaskDailyRow {
    comment: string;
    type: number;
    desc: string;
    prev_task?: number;
    next_tasks?: any;
    condition: string;
    args: any;
    reward: any;
};

export interface GeneratedRandomNameRow {
    firstname?: string;
    malename?: string;
    femalename?: string;
};

export interface GeneratedWorldMapRow {
    desc: string;
    battle_type: number;
    battle_mode: number;
    expired_sec: number;
};

export interface GeneratedBattleDemoRow {
    hero_ids: any;
};

export interface GeneratedBattleBuffRow {
    desc: string;
    type: string;
    res: string;
    ban_actions?: any;
};

export interface GeneratedWorldEntityTypeConfRow {
    desc: string;
    define: string;
    dispel_fog_size?: number;
    view_limit?: number;
    sight_radius?: number;
    sight_shared?: number;
    build_limit?: number;
    can_defend?: number;
};

export interface GeneratedWorldEntityModelsRow {
    desc: string;
    res: string;
};

export interface GeneratedWorldBuildingCastleRow {
    cn: string;
    etype: number;
    fill_size: number;
    obstacle_size: number;
    name: string;
    building_desc?: string;
    type_desc: string;
    max_hp: number;
    recover_inr: number;
    recover_hp: number;
    recover_zero: number;
    peace_time: number;
};

export interface GeneratedWorldBuildingCityRow {
    cn: string;
    etype: number;
    portal?: number;
    fill_size: number;
    obstacle_size: number;
    exclude_size: number;
    coll_radius: number;
    public_sight_radius: number;
    lv: number;
    declare_cost: any;
    gameplay: number;
    declare_cd: number;
    siege_cd: number;
    decare_fail_cd: number;
    peace_time: number;
    name: string;
    building_desc: string;
    type_desc: string;
    select_effect_lv: number;
    max_hp: number;
    recover_inr: number;
    recover_hp: number;
    recover_zero: number;
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
    state_desc: string;
    speedup?: number;
    peace?: number;
};

export interface GeneratedWorldTroopState2cmdRow {
    state_desc: string;
    MOVE_TO?: number;
    STOP?: number;
    RETREAT?: number;
};

export interface GeneratedAllianceRow {
    comment: string;
    name: string;
    born_pos: any;
};

export interface GeneratedDungeonRow {
    comment: string;
    next_id?: number;
    reward?: any;
};

export interface GeneratedShopconfigRow {
    desc: string;
    type: number;
    open_id?: number;
    refresh_hour?: number;
};

export interface GeneratedShop1Row {
    desc: string;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
    prob?: number;
};

export interface GeneratedShop2Row {
    desc: string;
    items: any;
    cost?: any;
    limit_day?: number;
    limit_week?: number;
    sort_id?: number;
    open_id?: number;
    prob?: number;
};
