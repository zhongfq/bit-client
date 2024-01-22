export const world = {
    COM_ENUM: {
        BATTLE: "battle",
        BUILDING: "building",
        MOVE: "move",
        OWNER: "owner",
        PLAYER: "player",
        POS: "pos",
        STATE: "state",
        TROOP: "troop",
    },
    ENTITY_ACTION: {
        ADD_ENTITY: 1,
        DEL_ENTITY: 2,
        MOVE: 3,
    },
    ENTITY_CMD: {
        MOVE_TO: 1,
        RETREAT: 3,
        STOP: 2,
    },
    ENTITY_COMPONENTS: {
        1: {
            1: "pos",
            2: "owner",
            3: "building",
        },
        2: {
            1: "pos",
            2: "state",
            3: "move",
            4: "owner",
            5: "troop",
        },
        4: {
            1: "player",
        },
        5: {
            1: "pos",
            2: "battle",
        },
    },
    ENTITY_STATE: {
        FIGHTING: 5,
        IDLE: 2,
        MOVE: 3,
        RETREAT: 6,
        STANDBY: 1,
        WAITLIST: 4,
    },
    ENTITY_TYPE: {
        BATTLE: 5,
        CASTLE: 1,
        CITY: 3,
        PLAYER: 4,
        TROOP: 2,
    },
    LOGIC_FPS: 10,
    SAND_WORLD_ID: 101,
    VISUAL_FPS: 60,
}
