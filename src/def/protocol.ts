// AUTO GENERATED, DON'T NOT MODIFY!

import { register } from "../system/network/network-service";
import proto from "../def/proto.js";

export const opcode = {
    alliance: {
        c2s_load: 0x1C00,
        s2c_load: 0x1C01,
    },
    bag: {
        c2s_load: 0x1700,
        s2c_load: 0x1701,
        c2s_use_item: 0x1702,
        s2c_use_item: 0x1703,
        c2s_composite_item: 0x1704,
        s2c_composite_item: 0x1705,
        c2s_discard_item: 0x1706,
        s2c_discard_item: 0x1707,
        notify_items: 0x1790,
    },
    battle: {
        c2s_ready: 0x1200,
        s2c_ready: 0x1201,
        c2s_launch_skill: 0x1206,
        s2c_launch_skill: 0x1207,
        c2s_ask_cmd: 0x1208,
        s2c_ask_cmd: 0x1209,
        c2s_ask_fight: 0x120A,
        s2c_ask_fight: 0x120B,
        c2s_load: 0x1210,
        s2c_load: 0x1211,
        notify_start: 0x1291,
        notify_cmd: 0x1292,
        notify_end: 0x1293,
        notify_debug: 0x1294,
    },
    chest: {
        c2s_load: 0x1600,
        s2c_load: 0x1601,
        c2s_open: 0x1602,
        s2c_open: 0x1603,
        c2s_replace: 0x1604,
        s2c_replace: 0x1605,
        c2s_abandon: 0x1606,
        s2c_abandon: 0x1607,
        c2s_challenge_dungeon: 0x1608,
        s2c_challenge_dungeon: 0x1609,
    },
    connection: {
        connected: 0x00F1,
        disconnected: 0x00F2,
        ioerror: 0x00F3,
    },
    dungeon: {
        c2s_load: 0x1100,
        s2c_load: 0x1101,
    },
    hero: {
        c2s_load: 0x1300,
        s2c_load: 0x1301,
    },
    mail: {
        c2s_load: 0x1900,
        s2c_load: 0x1901,
        c2s_read: 0x1902,
        s2c_read: 0x1903,
        c2s_receive_reward: 0x1904,
        s2c_receive_reward: 0x1905,
        c2s_delete_mails: 0x1906,
        s2c_delete_mails: 0x1907,
        notify_new_mails: 0x1990,
    },
    money: {
        c2s_load: 0x1800,
        s2c_load: 0x1801,
        notify_items: 0x1890,
    },
    profile: {
        c2s_load: 0x1A00,
        s2c_load: 0x1A01,
        notify_profile: 0x1A90,
    },
    task: {
        c2s_load: 0x1B00,
        s2c_load: 0x1B01,
        c2s_receive_reward: 0x1B02,
        s2c_receive_reward: 0x1B03,
        notify_tasks: 0x1B90,
        notify_remove_tasks: 0x1B91,
    },
    troop: {
        c2s_load: 0x1400,
        s2c_load: 0x1401,
    },
    user: {
        c2s_login: 0x1000,
        s2c_login: 0x1001,
        c2s_random_name: 0x1002,
        s2c_random_name: 0x1003,
        c2s_create_role: 0x1004,
        s2c_create_role: 0x1005,
        c2s_ping: 0x1006,
        s2c_ping: 0x1007,
        c2s_gm: 0x1008,
        s2c_gm: 0x1009,
        c2s_rename: 0x100A,
        s2c_rename: 0x100B,
    },
    world: {
        c2s_load: 0x1500,
        s2c_load: 0x1501,
        c2s_change_viewport: 0x1502,
        s2c_change_viewport: 0x1503,
        c2s_giveup: 0x1504,
        s2c_giveup: 0x1505,
        c2s_cancel_giveup: 0x1506,
        s2c_cancel_giveup: 0x1507,
        c2s_load_detect_info: 0x1508,
        s2c_load_detect_info: 0x1509,
        c2s_troop_move_to: 0x150A,
        s2c_troop_move_to: 0x150B,
        c2s_troop_move_by: 0x150C,
        s2c_troop_move_by: 0x150D,
        c2s_troop_move_stop: 0x150E,
        s2c_troop_move_stop: 0x150F,
        notify_alliances: 0x1590,
        notify_roles: 0x1591,
        notify_entities: 0x1592,
        notify_actions: 0x1593,
    },
};

export const enum errcode {
    OK = 0x0000,
    DISCONNECTED = 0x0001,
    NO_DESCRIPTOR = 0x0002,
    FAILED = 0x1000,
    INVALID_ID = 0x1001,
    NOT_IN_WAR = 0x1002,
    BATTLE_COIN_NOT_ENOUGH = 0x1003,
    ROLE_NOT_ONLINE = 0x1004,
    ROLE_NOT_EXIST = 0x1005,
    TEAM_IDX_ERROR = 0x1006,
    TEAM_STATE_ERROR = 0x1007,
    INVALID_EID = 0x1008,
    INVALID_RID = 0x1009,
    RETREAT_CANNOT_LAUNCH = 0x100A,
    MP_NOT_ENOUGH = 0x100B,
    WAR_IS_END = 0x100C,
    CHEST_AMOUNT_NOT_ENOUGH = 0x100D,
    NO_NEW_EQUIP = 0x100E,
    NEW_EQUIP_EXIST = 0x100F,
    ALREADY_IN_WAR = 0x1010,
    CHEST_DUNGEON_ID_ERROR = 0x1011,
    ITEM_NOT_ENOUGH = 0x1012,
    ILLEGAL_NAME = 0x1013,
    DAILY_RENAME_NOT_ENOUGH = 0x1014,
    ITEM_CAN_NOT_USE = 0x1015,
    REPEAT = 0x1016,
    TASK_NOT_FINISH = 0x1017,
    MAIL_EXPIRED = 0x1018,
    ARGS_ERROR = 0xA000,
    BODY_ERROR = 0xA001,
    AUTH_FAIL = 0xA002,
    TRACEBACK = 0xA003,
    API_NOT_FOUND = 0xA004,
    PASSWORD_ERROR = 0xA005,
};

export const errmsg = {
    0x0000: "Message is ok",
    0x0001: "Network is disconnected",
    0x0002: "Descriptocor not found",
    0x1000: "Message is fail",
    0x1001: "非法ID",
    0x1002: "未处于战斗中",
    0x1003: "金币不够",
    0x1004: "角色未登录",
    0x1005: "角色不存在",
    0x1006: "队伍编队不存在",
    0x1007: "队伍状态错误",
    0x1008: "非法eid",
    0x1009: "非法rid",
    0x100A: "撤退过程不能放技能",
    0x100B: "斗气值不足",
    0x100C: "战斗已经结束",
    0x100D: "宝箱次数不足",
    0x100E: "没有新的装备",
    0x100F: "新的装备已生成",
    0x1010: "已处于战斗中",
    0x1011: "宝箱关卡进度错误",
    0x1012: "物品不足",
    0x1013: "名字非法",
    0x1014: "每日改名次数不足",
    0x1015: "无法使用物品",
    0x1016: "重复操作",
    0x1017: "任务未完成",
    0x1018: "邮件已过期",
    0xA000: "参数错误",
    0xA001: "body错误",
    0xA002: "登录过期",
    0xA003: "服务端报错",
    0xA004: "API错误",
    0xA005: "用户名或密码错误",
};

export const registerProtocols = () => {
    console.log("register protocols");
    register({
        op: opcode.alliance.c2s_load,
        typeURL: proto.alliance.c2s_load.getTypeUrl(),
        encode: proto.alliance.c2s_load.encode,
        decode: proto.alliance.c2s_load.decode,
    });
    register({
        op: opcode.alliance.s2c_load,
        typeURL: proto.alliance.s2c_load.getTypeUrl(),
        encode: proto.alliance.s2c_load.encode,
        decode: proto.alliance.s2c_load.decode,
    });
    register({
        op: opcode.bag.c2s_load,
        typeURL: proto.bag.c2s_load.getTypeUrl(),
        encode: proto.bag.c2s_load.encode,
        decode: proto.bag.c2s_load.decode,
    });
    register({
        op: opcode.bag.s2c_load,
        typeURL: proto.bag.s2c_load.getTypeUrl(),
        encode: proto.bag.s2c_load.encode,
        decode: proto.bag.s2c_load.decode,
    });
    register({
        op: opcode.bag.c2s_use_item,
        typeURL: proto.bag.c2s_use_item.getTypeUrl(),
        encode: proto.bag.c2s_use_item.encode,
        decode: proto.bag.c2s_use_item.decode,
    });
    register({
        op: opcode.bag.s2c_use_item,
        typeURL: proto.bag.s2c_use_item.getTypeUrl(),
        encode: proto.bag.s2c_use_item.encode,
        decode: proto.bag.s2c_use_item.decode,
    });
    register({
        op: opcode.bag.c2s_composite_item,
        typeURL: proto.bag.c2s_composite_item.getTypeUrl(),
        encode: proto.bag.c2s_composite_item.encode,
        decode: proto.bag.c2s_composite_item.decode,
    });
    register({
        op: opcode.bag.s2c_composite_item,
        typeURL: proto.bag.s2c_composite_item.getTypeUrl(),
        encode: proto.bag.s2c_composite_item.encode,
        decode: proto.bag.s2c_composite_item.decode,
    });
    register({
        op: opcode.bag.c2s_discard_item,
        typeURL: proto.bag.c2s_discard_item.getTypeUrl(),
        encode: proto.bag.c2s_discard_item.encode,
        decode: proto.bag.c2s_discard_item.decode,
    });
    register({
        op: opcode.bag.s2c_discard_item,
        typeURL: proto.bag.s2c_discard_item.getTypeUrl(),
        encode: proto.bag.s2c_discard_item.encode,
        decode: proto.bag.s2c_discard_item.decode,
    });
    register({
        op: opcode.bag.notify_items,
        typeURL: proto.bag.notify_items.getTypeUrl(),
        encode: proto.bag.notify_items.encode,
        decode: proto.bag.notify_items.decode,
    });
    register({
        op: opcode.battle.c2s_ready,
        typeURL: proto.battle.c2s_ready.getTypeUrl(),
        encode: proto.battle.c2s_ready.encode,
        decode: proto.battle.c2s_ready.decode,
    });
    register({
        op: opcode.battle.s2c_ready,
        typeURL: proto.battle.s2c_ready.getTypeUrl(),
        encode: proto.battle.s2c_ready.encode,
        decode: proto.battle.s2c_ready.decode,
    });
    register({
        op: opcode.battle.c2s_launch_skill,
        typeURL: proto.battle.c2s_launch_skill.getTypeUrl(),
        encode: proto.battle.c2s_launch_skill.encode,
        decode: proto.battle.c2s_launch_skill.decode,
    });
    register({
        op: opcode.battle.s2c_launch_skill,
        typeURL: proto.battle.s2c_launch_skill.getTypeUrl(),
        encode: proto.battle.s2c_launch_skill.encode,
        decode: proto.battle.s2c_launch_skill.decode,
    });
    register({
        op: opcode.battle.c2s_ask_cmd,
        typeURL: proto.battle.c2s_ask_cmd.getTypeUrl(),
        encode: proto.battle.c2s_ask_cmd.encode,
        decode: proto.battle.c2s_ask_cmd.decode,
    });
    register({
        op: opcode.battle.s2c_ask_cmd,
        typeURL: proto.battle.s2c_ask_cmd.getTypeUrl(),
        encode: proto.battle.s2c_ask_cmd.encode,
        decode: proto.battle.s2c_ask_cmd.decode,
    });
    register({
        op: opcode.battle.c2s_ask_fight,
        typeURL: proto.battle.c2s_ask_fight.getTypeUrl(),
        encode: proto.battle.c2s_ask_fight.encode,
        decode: proto.battle.c2s_ask_fight.decode,
    });
    register({
        op: opcode.battle.s2c_ask_fight,
        typeURL: proto.battle.s2c_ask_fight.getTypeUrl(),
        encode: proto.battle.s2c_ask_fight.encode,
        decode: proto.battle.s2c_ask_fight.decode,
    });
    register({
        op: opcode.battle.c2s_load,
        typeURL: proto.battle.c2s_load.getTypeUrl(),
        encode: proto.battle.c2s_load.encode,
        decode: proto.battle.c2s_load.decode,
    });
    register({
        op: opcode.battle.s2c_load,
        typeURL: proto.battle.s2c_load.getTypeUrl(),
        encode: proto.battle.s2c_load.encode,
        decode: proto.battle.s2c_load.decode,
    });
    register({
        op: opcode.battle.notify_start,
        typeURL: proto.battle.notify_start.getTypeUrl(),
        encode: proto.battle.notify_start.encode,
        decode: proto.battle.notify_start.decode,
    });
    register({
        op: opcode.battle.notify_cmd,
        typeURL: proto.battle.notify_cmd.getTypeUrl(),
        encode: proto.battle.notify_cmd.encode,
        decode: proto.battle.notify_cmd.decode,
    });
    register({
        op: opcode.battle.notify_end,
        typeURL: proto.battle.notify_end.getTypeUrl(),
        encode: proto.battle.notify_end.encode,
        decode: proto.battle.notify_end.decode,
    });
    register({
        op: opcode.battle.notify_debug,
        typeURL: proto.battle.notify_debug.getTypeUrl(),
        encode: proto.battle.notify_debug.encode,
        decode: proto.battle.notify_debug.decode,
    });
    register({
        op: opcode.chest.c2s_load,
        typeURL: proto.chest.c2s_load.getTypeUrl(),
        encode: proto.chest.c2s_load.encode,
        decode: proto.chest.c2s_load.decode,
    });
    register({
        op: opcode.chest.s2c_load,
        typeURL: proto.chest.s2c_load.getTypeUrl(),
        encode: proto.chest.s2c_load.encode,
        decode: proto.chest.s2c_load.decode,
    });
    register({
        op: opcode.chest.c2s_open,
        typeURL: proto.chest.c2s_open.getTypeUrl(),
        encode: proto.chest.c2s_open.encode,
        decode: proto.chest.c2s_open.decode,
    });
    register({
        op: opcode.chest.s2c_open,
        typeURL: proto.chest.s2c_open.getTypeUrl(),
        encode: proto.chest.s2c_open.encode,
        decode: proto.chest.s2c_open.decode,
    });
    register({
        op: opcode.chest.c2s_replace,
        typeURL: proto.chest.c2s_replace.getTypeUrl(),
        encode: proto.chest.c2s_replace.encode,
        decode: proto.chest.c2s_replace.decode,
    });
    register({
        op: opcode.chest.s2c_replace,
        typeURL: proto.chest.s2c_replace.getTypeUrl(),
        encode: proto.chest.s2c_replace.encode,
        decode: proto.chest.s2c_replace.decode,
    });
    register({
        op: opcode.chest.c2s_abandon,
        typeURL: proto.chest.c2s_abandon.getTypeUrl(),
        encode: proto.chest.c2s_abandon.encode,
        decode: proto.chest.c2s_abandon.decode,
    });
    register({
        op: opcode.chest.s2c_abandon,
        typeURL: proto.chest.s2c_abandon.getTypeUrl(),
        encode: proto.chest.s2c_abandon.encode,
        decode: proto.chest.s2c_abandon.decode,
    });
    register({
        op: opcode.chest.c2s_challenge_dungeon,
        typeURL: proto.chest.c2s_challenge_dungeon.getTypeUrl(),
        encode: proto.chest.c2s_challenge_dungeon.encode,
        decode: proto.chest.c2s_challenge_dungeon.decode,
    });
    register({
        op: opcode.chest.s2c_challenge_dungeon,
        typeURL: proto.chest.s2c_challenge_dungeon.getTypeUrl(),
        encode: proto.chest.s2c_challenge_dungeon.encode,
        decode: proto.chest.s2c_challenge_dungeon.decode,
    });
    register({
        op: opcode.dungeon.c2s_load,
        typeURL: proto.dungeon.c2s_load.getTypeUrl(),
        encode: proto.dungeon.c2s_load.encode,
        decode: proto.dungeon.c2s_load.decode,
    });
    register({
        op: opcode.dungeon.s2c_load,
        typeURL: proto.dungeon.s2c_load.getTypeUrl(),
        encode: proto.dungeon.s2c_load.encode,
        decode: proto.dungeon.s2c_load.decode,
    });
    register({
        op: opcode.hero.c2s_load,
        typeURL: proto.hero.c2s_load.getTypeUrl(),
        encode: proto.hero.c2s_load.encode,
        decode: proto.hero.c2s_load.decode,
    });
    register({
        op: opcode.hero.s2c_load,
        typeURL: proto.hero.s2c_load.getTypeUrl(),
        encode: proto.hero.s2c_load.encode,
        decode: proto.hero.s2c_load.decode,
    });
    register({
        op: opcode.mail.c2s_load,
        typeURL: proto.mail.c2s_load.getTypeUrl(),
        encode: proto.mail.c2s_load.encode,
        decode: proto.mail.c2s_load.decode,
    });
    register({
        op: opcode.mail.s2c_load,
        typeURL: proto.mail.s2c_load.getTypeUrl(),
        encode: proto.mail.s2c_load.encode,
        decode: proto.mail.s2c_load.decode,
    });
    register({
        op: opcode.mail.c2s_read,
        typeURL: proto.mail.c2s_read.getTypeUrl(),
        encode: proto.mail.c2s_read.encode,
        decode: proto.mail.c2s_read.decode,
    });
    register({
        op: opcode.mail.s2c_read,
        typeURL: proto.mail.s2c_read.getTypeUrl(),
        encode: proto.mail.s2c_read.encode,
        decode: proto.mail.s2c_read.decode,
    });
    register({
        op: opcode.mail.c2s_receive_reward,
        typeURL: proto.mail.c2s_receive_reward.getTypeUrl(),
        encode: proto.mail.c2s_receive_reward.encode,
        decode: proto.mail.c2s_receive_reward.decode,
    });
    register({
        op: opcode.mail.s2c_receive_reward,
        typeURL: proto.mail.s2c_receive_reward.getTypeUrl(),
        encode: proto.mail.s2c_receive_reward.encode,
        decode: proto.mail.s2c_receive_reward.decode,
    });
    register({
        op: opcode.mail.c2s_delete_mails,
        typeURL: proto.mail.c2s_delete_mails.getTypeUrl(),
        encode: proto.mail.c2s_delete_mails.encode,
        decode: proto.mail.c2s_delete_mails.decode,
    });
    register({
        op: opcode.mail.s2c_delete_mails,
        typeURL: proto.mail.s2c_delete_mails.getTypeUrl(),
        encode: proto.mail.s2c_delete_mails.encode,
        decode: proto.mail.s2c_delete_mails.decode,
    });
    register({
        op: opcode.mail.notify_new_mails,
        typeURL: proto.mail.notify_new_mails.getTypeUrl(),
        encode: proto.mail.notify_new_mails.encode,
        decode: proto.mail.notify_new_mails.decode,
    });
    register({
        op: opcode.money.c2s_load,
        typeURL: proto.money.c2s_load.getTypeUrl(),
        encode: proto.money.c2s_load.encode,
        decode: proto.money.c2s_load.decode,
    });
    register({
        op: opcode.money.s2c_load,
        typeURL: proto.money.s2c_load.getTypeUrl(),
        encode: proto.money.s2c_load.encode,
        decode: proto.money.s2c_load.decode,
    });
    register({
        op: opcode.money.notify_items,
        typeURL: proto.money.notify_items.getTypeUrl(),
        encode: proto.money.notify_items.encode,
        decode: proto.money.notify_items.decode,
    });
    register({
        op: opcode.profile.c2s_load,
        typeURL: proto.profile.c2s_load.getTypeUrl(),
        encode: proto.profile.c2s_load.encode,
        decode: proto.profile.c2s_load.decode,
    });
    register({
        op: opcode.profile.s2c_load,
        typeURL: proto.profile.s2c_load.getTypeUrl(),
        encode: proto.profile.s2c_load.encode,
        decode: proto.profile.s2c_load.decode,
    });
    register({
        op: opcode.profile.notify_profile,
        typeURL: proto.profile.notify_profile.getTypeUrl(),
        encode: proto.profile.notify_profile.encode,
        decode: proto.profile.notify_profile.decode,
    });
    register({
        op: opcode.task.c2s_load,
        typeURL: proto.task.c2s_load.getTypeUrl(),
        encode: proto.task.c2s_load.encode,
        decode: proto.task.c2s_load.decode,
    });
    register({
        op: opcode.task.s2c_load,
        typeURL: proto.task.s2c_load.getTypeUrl(),
        encode: proto.task.s2c_load.encode,
        decode: proto.task.s2c_load.decode,
    });
    register({
        op: opcode.task.c2s_receive_reward,
        typeURL: proto.task.c2s_receive_reward.getTypeUrl(),
        encode: proto.task.c2s_receive_reward.encode,
        decode: proto.task.c2s_receive_reward.decode,
    });
    register({
        op: opcode.task.s2c_receive_reward,
        typeURL: proto.task.s2c_receive_reward.getTypeUrl(),
        encode: proto.task.s2c_receive_reward.encode,
        decode: proto.task.s2c_receive_reward.decode,
    });
    register({
        op: opcode.task.notify_tasks,
        typeURL: proto.task.notify_tasks.getTypeUrl(),
        encode: proto.task.notify_tasks.encode,
        decode: proto.task.notify_tasks.decode,
    });
    register({
        op: opcode.task.notify_remove_tasks,
        typeURL: proto.task.notify_remove_tasks.getTypeUrl(),
        encode: proto.task.notify_remove_tasks.encode,
        decode: proto.task.notify_remove_tasks.decode,
    });
    register({
        op: opcode.troop.c2s_load,
        typeURL: proto.troop.c2s_load.getTypeUrl(),
        encode: proto.troop.c2s_load.encode,
        decode: proto.troop.c2s_load.decode,
    });
    register({
        op: opcode.troop.s2c_load,
        typeURL: proto.troop.s2c_load.getTypeUrl(),
        encode: proto.troop.s2c_load.encode,
        decode: proto.troop.s2c_load.decode,
    });
    register({
        op: opcode.user.c2s_login,
        typeURL: proto.user.c2s_login.getTypeUrl(),
        encode: proto.user.c2s_login.encode,
        decode: proto.user.c2s_login.decode,
    });
    register({
        op: opcode.user.s2c_login,
        typeURL: proto.user.s2c_login.getTypeUrl(),
        encode: proto.user.s2c_login.encode,
        decode: proto.user.s2c_login.decode,
    });
    register({
        op: opcode.user.c2s_random_name,
        typeURL: proto.user.c2s_random_name.getTypeUrl(),
        encode: proto.user.c2s_random_name.encode,
        decode: proto.user.c2s_random_name.decode,
    });
    register({
        op: opcode.user.s2c_random_name,
        typeURL: proto.user.s2c_random_name.getTypeUrl(),
        encode: proto.user.s2c_random_name.encode,
        decode: proto.user.s2c_random_name.decode,
    });
    register({
        op: opcode.user.c2s_create_role,
        typeURL: proto.user.c2s_create_role.getTypeUrl(),
        encode: proto.user.c2s_create_role.encode,
        decode: proto.user.c2s_create_role.decode,
    });
    register({
        op: opcode.user.s2c_create_role,
        typeURL: proto.user.s2c_create_role.getTypeUrl(),
        encode: proto.user.s2c_create_role.encode,
        decode: proto.user.s2c_create_role.decode,
    });
    register({
        op: opcode.user.c2s_ping,
        typeURL: proto.user.c2s_ping.getTypeUrl(),
        encode: proto.user.c2s_ping.encode,
        decode: proto.user.c2s_ping.decode,
    });
    register({
        op: opcode.user.s2c_ping,
        typeURL: proto.user.s2c_ping.getTypeUrl(),
        encode: proto.user.s2c_ping.encode,
        decode: proto.user.s2c_ping.decode,
    });
    register({
        op: opcode.user.c2s_gm,
        typeURL: proto.user.c2s_gm.getTypeUrl(),
        encode: proto.user.c2s_gm.encode,
        decode: proto.user.c2s_gm.decode,
    });
    register({
        op: opcode.user.s2c_gm,
        typeURL: proto.user.s2c_gm.getTypeUrl(),
        encode: proto.user.s2c_gm.encode,
        decode: proto.user.s2c_gm.decode,
    });
    register({
        op: opcode.user.c2s_rename,
        typeURL: proto.user.c2s_rename.getTypeUrl(),
        encode: proto.user.c2s_rename.encode,
        decode: proto.user.c2s_rename.decode,
    });
    register({
        op: opcode.user.s2c_rename,
        typeURL: proto.user.s2c_rename.getTypeUrl(),
        encode: proto.user.s2c_rename.encode,
        decode: proto.user.s2c_rename.decode,
    });
    register({
        op: opcode.world.c2s_load,
        typeURL: proto.world.c2s_load.getTypeUrl(),
        encode: proto.world.c2s_load.encode,
        decode: proto.world.c2s_load.decode,
    });
    register({
        op: opcode.world.s2c_load,
        typeURL: proto.world.s2c_load.getTypeUrl(),
        encode: proto.world.s2c_load.encode,
        decode: proto.world.s2c_load.decode,
    });
    register({
        op: opcode.world.c2s_change_viewport,
        typeURL: proto.world.c2s_change_viewport.getTypeUrl(),
        encode: proto.world.c2s_change_viewport.encode,
        decode: proto.world.c2s_change_viewport.decode,
    });
    register({
        op: opcode.world.s2c_change_viewport,
        typeURL: proto.world.s2c_change_viewport.getTypeUrl(),
        encode: proto.world.s2c_change_viewport.encode,
        decode: proto.world.s2c_change_viewport.decode,
    });
    register({
        op: opcode.world.c2s_giveup,
        typeURL: proto.world.c2s_giveup.getTypeUrl(),
        encode: proto.world.c2s_giveup.encode,
        decode: proto.world.c2s_giveup.decode,
    });
    register({
        op: opcode.world.s2c_giveup,
        typeURL: proto.world.s2c_giveup.getTypeUrl(),
        encode: proto.world.s2c_giveup.encode,
        decode: proto.world.s2c_giveup.decode,
    });
    register({
        op: opcode.world.c2s_cancel_giveup,
        typeURL: proto.world.c2s_cancel_giveup.getTypeUrl(),
        encode: proto.world.c2s_cancel_giveup.encode,
        decode: proto.world.c2s_cancel_giveup.decode,
    });
    register({
        op: opcode.world.s2c_cancel_giveup,
        typeURL: proto.world.s2c_cancel_giveup.getTypeUrl(),
        encode: proto.world.s2c_cancel_giveup.encode,
        decode: proto.world.s2c_cancel_giveup.decode,
    });
    register({
        op: opcode.world.c2s_load_detect_info,
        typeURL: proto.world.c2s_load_detect_info.getTypeUrl(),
        encode: proto.world.c2s_load_detect_info.encode,
        decode: proto.world.c2s_load_detect_info.decode,
    });
    register({
        op: opcode.world.s2c_load_detect_info,
        typeURL: proto.world.s2c_load_detect_info.getTypeUrl(),
        encode: proto.world.s2c_load_detect_info.encode,
        decode: proto.world.s2c_load_detect_info.decode,
    });
    register({
        op: opcode.world.c2s_troop_move_to,
        typeURL: proto.world.c2s_troop_move_to.getTypeUrl(),
        encode: proto.world.c2s_troop_move_to.encode,
        decode: proto.world.c2s_troop_move_to.decode,
    });
    register({
        op: opcode.world.s2c_troop_move_to,
        typeURL: proto.world.s2c_troop_move_to.getTypeUrl(),
        encode: proto.world.s2c_troop_move_to.encode,
        decode: proto.world.s2c_troop_move_to.decode,
    });
    register({
        op: opcode.world.c2s_troop_move_by,
        typeURL: proto.world.c2s_troop_move_by.getTypeUrl(),
        encode: proto.world.c2s_troop_move_by.encode,
        decode: proto.world.c2s_troop_move_by.decode,
    });
    register({
        op: opcode.world.s2c_troop_move_by,
        typeURL: proto.world.s2c_troop_move_by.getTypeUrl(),
        encode: proto.world.s2c_troop_move_by.encode,
        decode: proto.world.s2c_troop_move_by.decode,
    });
    register({
        op: opcode.world.c2s_troop_move_stop,
        typeURL: proto.world.c2s_troop_move_stop.getTypeUrl(),
        encode: proto.world.c2s_troop_move_stop.encode,
        decode: proto.world.c2s_troop_move_stop.decode,
    });
    register({
        op: opcode.world.s2c_troop_move_stop,
        typeURL: proto.world.s2c_troop_move_stop.getTypeUrl(),
        encode: proto.world.s2c_troop_move_stop.encode,
        decode: proto.world.s2c_troop_move_stop.decode,
    });
    register({
        op: opcode.world.notify_alliances,
        typeURL: proto.world.notify_alliances.getTypeUrl(),
        encode: proto.world.notify_alliances.encode,
        decode: proto.world.notify_alliances.decode,
    });
    register({
        op: opcode.world.notify_roles,
        typeURL: proto.world.notify_roles.getTypeUrl(),
        encode: proto.world.notify_roles.encode,
        decode: proto.world.notify_roles.decode,
    });
    register({
        op: opcode.world.notify_entities,
        typeURL: proto.world.notify_entities.getTypeUrl(),
        encode: proto.world.notify_entities.encode,
        decode: proto.world.notify_entities.decode,
    });
    register({
        op: opcode.world.notify_actions,
        typeURL: proto.world.notify_actions.getTypeUrl(),
        encode: proto.world.notify_actions.encode,
        decode: proto.world.notify_actions.decode,
    });
};
