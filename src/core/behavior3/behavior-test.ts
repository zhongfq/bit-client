import { Callback } from "../dispatcher";
import { Context, Env, Node, Process, ProcessDescriptor, Status, Tree, TreeData } from "./behavior";
import { builtinNodes } from "./nodes/builtin-nodes";

interface Role {
    hp: number;
    x: number;
    y: number;
}

interface Position {
    x: number;
    y: number;
}

class RoleEnv extends Env {
    declare context: RoleContext;
    owner!: Role;
}

class Attack extends Process {
    override run(node: Node, env: Env, enemy?: Role) {
        if (!enemy) {
            return Status.FAILURE;
        }
        console.log("Do Attack");
        enemy.hp -= 100;
        env.setVar("ATTACKING", true);
        return Status.SUCCESS;
    }

    get descriptor(): ProcessDescriptor {
        return { name: "Attack" } as ProcessDescriptor;
    }
}

class GetHp extends Process {
    override run(node: Node, env: RoleEnv) {
        env.lastRet.results = [(env.owner as Role).hp];
        return Status.SUCCESS;
    }

    get descriptor(): ProcessDescriptor {
        return { name: "GetHp" } as ProcessDescriptor;
    }
}

class Idle extends Process {
    override run(node: Node, env: Env) {
        console.log("Do Idle");
        return Status.SUCCESS;
    }

    get descriptor(): ProcessDescriptor {
        return { name: "Idle" } as ProcessDescriptor;
    }
}

class MoveToPos extends Process {
    override run(node: Node, env: RoleEnv) {
        const owner = env.owner as Role;
        const args = node.args as Position;
        owner.x = args.x;
        owner.y = args.y;
        return Status.SUCCESS;
    }

    get descriptor(): ProcessDescriptor {
        return { name: "MoveToPos" } as ProcessDescriptor;
    }
}

class MoveToTarget extends Process {
    static SPEED = 50;

    override run(node: Node, env: RoleEnv, target?: Role) {
        if (!target) {
            return Status.FAILURE;
        }
        const owner = env.owner as Role;
        const { x, y } = owner;
        const { x: tx, y: ty } = target;
        if (Math.abs(x - tx) < MoveToTarget.SPEED && Math.abs(y - ty) < MoveToTarget.SPEED) {
            console.log("Moving reach target");
            return Status.SUCCESS;
        }

        console.log(`Moving (${x}, ${y}) => (${tx}, ${ty})`);

        if (Math.abs(x - tx) >= MoveToTarget.SPEED) {
            owner.x = owner.x + MoveToTarget.SPEED * (tx > x ? 1 : -1);
        }

        if (Math.abs(y - ty) >= MoveToTarget.SPEED) {
            owner.y = owner.y + MoveToTarget.SPEED * (ty > x ? 1 : -1);
        }

        return node.yield(env);
    }

    get descriptor(): ProcessDescriptor {
        return { name: "MoveToTarget" } as ProcessDescriptor;
    }
}

interface FindEnemyArgs {
    w: number;
    h: number;
    count?: number;
}

class FindEnemy extends Process {
    override run(node: Node, env: RoleEnv) {
        const args = node.args as FindEnemyArgs;
        const x = env.owner.x;
        const y = env.owner.y;
        const w = args.w;
        const h = args.h;
        const list = env.context.find((role: Role) => {
            if (role === env.owner) {
                return false;
            }
            const tx = role.x;
            const ty = role.y;
            return Math.abs(x - tx) <= w && Math.abs(y - ty) <= h;
        }, args.count ?? -1);
        if (list.length) {
            env.lastRet.results = list;
            return Status.SUCCESS;
        } else {
            return Status.FAILURE;
        }
    }

    get descriptor(): ProcessDescriptor {
        return { name: "FindEnemy" } as ProcessDescriptor;
    }
}

class RoleContext extends Context {
    avators: Role[] = [];

    find(func: Callback, count: number) {
        return this.avators.filter((value) => func(value));
    }
}

export class BehaviorTest {
    start() {
        const context = new RoleContext();
        context.registerProcess(...builtinNodes);
        context.registerProcess(Attack);
        context.registerProcess(GetHp);
        context.registerProcess(Idle);
        context.registerProcess(MoveToPos);
        context.registerProcess(MoveToTarget);
        context.registerProcess(FindEnemy);
        context.avators.push({
            x: 200,
            y: 0,
            hp: 100,
        });
        context.avators.push({
            x: 0,
            y: 0,
            hp: 100,
        });

        this.testHero(context);
        this.testMonster(context);
    }

    testHero(context: RoleContext) {
        console.log("====================test hero=============================");
        // -- test hero
        const tree = new Tree("hero", heroTree as TreeData, context);
        const env = new RoleEnv(context);
        env.owner = context.avators[1];
        tree.run(env);
        tree.run(env);
        tree.run(env);
        tree.run(env);
        tree.run(env);
        tree.run(env);

        //后摇;
        tree.run(env);
        tree.interrupt(env);
        tree.run(env);
        context.time = 20;
        tree.run(env);
    }

    testMonster(context: RoleContext) {
        console.log("====================test monster=============================");
        const tree = new Tree("monster", monsterTree as TreeData, context);
        const env = new RoleEnv(context);
        env.owner = context.avators[0];
        env.owner.hp = 100;
        tree.run(env);

        env.owner.hp = 20;
        tree.run(env);
        env.context.time = 40;
        tree.run(env);
        tree.run(env);
    }
}

const heroTree = {
    name: "hero",
    root: {
        id: 1,
        name: "Selector",
        desc: "英雄测试AI",
        args: {},
        children: [
            {
                id: 2,
                name: "Once",
                args: {},
                children: [
                    {
                        id: 3,
                        name: "AlwaysFail",
                        args: {},
                        children: [
                            {
                                id: 4,
                                name: "Sequence",
                                args: {},
                                children: [
                                    {
                                        id: 5,
                                        name: "Log",
                                        args: {
                                            str: "B: test sequeue1",
                                        },
                                    },
                                    {
                                        id: 6,
                                        name: "Log",
                                        args: {
                                            str: "B: test sequeue2",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 7,
                        name: "AlwaysFail",
                        args: {},
                        children: [
                            {
                                id: 8,
                                name: "Sequence",
                                args: {},
                                debug: true,
                                children: [
                                    {
                                        id: 9,
                                        name: "Log",
                                        args: {
                                            str: "A: test sequeue1",
                                        },
                                    },
                                    {
                                        id: 10,
                                        name: "AlwaysFail",
                                        args: {},
                                        children: [
                                            {
                                                id: 11,
                                                name: "Log",
                                                args: {
                                                    str: "A: test fail",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        id: 12,
                                        name: "Log",
                                        args: {
                                            str: "A: test sequeue2",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 13,
                        name: "AlwaysFail",
                        args: {},
                        children: [
                            {
                                id: 14,
                                name: "Selector",
                                args: {},
                                children: [
                                    {
                                        id: 15,
                                        name: "AlwaysFail",
                                        args: {},
                                        children: [
                                            {
                                                id: 16,
                                                name: "Log",
                                                args: {
                                                    str: "C: test fail",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        id: 17,
                                        name: "Log",
                                        args: {
                                            str: "C: test sequeue1",
                                        },
                                    },
                                    {
                                        id: 18,
                                        name: "Log",
                                        args: {
                                            str: "C: test sequeue2",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 19,
                        name: "AlwaysFail",
                        args: {},
                        children: [
                            {
                                id: 20,
                                name: "Parallel",
                                args: {},
                                children: [
                                    {
                                        id: 21,
                                        name: "Log",
                                        args: {
                                            str: "D: test sequeue1",
                                        },
                                    },
                                    {
                                        id: 22,
                                        name: "AlwaysFail",
                                        args: {},
                                        children: [
                                            {
                                                id: 23,
                                                name: "Log",
                                                args: {
                                                    str: "D: test fail",
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        id: 24,
                                        name: "Log",
                                        args: {
                                            str: "D: test sequeue2",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 25,
                name: "Sequence",
                desc: "攻击",
                args: {},
                children: [
                    {
                        id: 26,
                        name: "FindEnemy",
                        args: {
                            x: 0,
                            y: 0,
                            w: 100,
                            h: 50,
                        },
                        output: ["enemy"],
                        debug: true,
                    },
                    {
                        id: 27,
                        name: "Attack",
                        args: {},
                        input: ["enemy"],
                    },
                    {
                        id: 28,
                        name: "Wait",
                        args: {
                            time: 10,
                        },
                    },
                ],
            },
            {
                id: 29,
                name: "Sequence",
                desc: "移动",
                args: {},
                children: [
                    {
                        id: 30,
                        name: "FindEnemy",
                        args: {
                            w: 1000,
                            h: 500,
                            x: 0,
                            y: 0,
                        },
                        output: ["enemy"],
                    },
                    {
                        id: 31,
                        name: "MoveToTarget",
                        args: {},
                        input: ["enemy"],
                    },
                ],
            },
            {
                id: 32,
                name: "Sequence",
                desc: "逃跑",
                args: {},
                children: [
                    {
                        id: 33,
                        name: "GetHp",
                        args: {},
                        output: ["hp"],
                    },
                    {
                        id: 34,
                        name: "Check",
                        args: {
                            value: "hp > 50",
                        },
                    },
                    {
                        id: 35,
                        name: "MoveToPos",
                        args: {
                            x: 0,
                            y: 0,
                        },
                    },
                ],
            },
            {
                id: 36,
                name: "Idle",
            },
        ],
    },
    desc: "英雄测试AI",
};
const monsterTree = {
    name: "monster",
    root: {
        id: 1,
        name: "Sequence",
        desc: "怪物测试AI",
        args: {},
        children: [
            {
                id: 2,
                name: "Selector",
                args: {},
                children: [
                    {
                        id: 3,
                        name: "Sequence",
                        args: {},
                        children: [
                            {
                                id: 4,
                                name: "GetHp",
                                args: {},
                                output: ["hp"],
                            },
                            {
                                id: 5,
                                name: "Check",
                                args: {
                                    value: "hp > 50",
                                },
                            },
                            {
                                id: 6,
                                name: "Log",
                                desc: "攻击",
                                args: {
                                    str: "Attack!",
                                },
                            },
                            {
                                id: 7,
                                name: "Wait",
                                args: {
                                    time: 5,
                                },
                            },
                        ],
                    },
                    {
                        id: 8,
                        name: "Log",
                        desc: "逃跑",
                        args: {
                            str: "Run!",
                        },
                        children: [],
                    },
                ],
            },
            {
                id: 9,
                name: "Log",
                desc: "test",
                args: {
                    str: "if true",
                },
                children: [],
            },
        ],
    },
    desc: "怪物测试AI",
};
