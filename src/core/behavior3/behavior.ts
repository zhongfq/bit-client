import { ExpressionEvaluator, ValueMap, ValueType } from "./expression-evaluator";

export type Constructor<T = unknown> = new (...args: any[]) => T;

export const enum Status {
    FAIL = "FAIL", // 失败
    SUCCESS = "SUCCESS", // 成功
    RUNNING = "RUNNING", // 运行中
}

export interface Result {
    status: Status;
    results?: ValueType[];
}

export namespace Result {
    export const FAIL: Readonly<Result> = { status: Status.FAIL };
    export const RUNNING: Readonly<Result> = { status: Status.RUNNING };
    export const SUCCESS: Readonly<Result> = { status: Status.SUCCESS };
}

export interface ProcessDescriptor {
    name: string;
    type: string;
    desc: string;
    args?: string[][];
    output?: string[];
    input?: string[];
    doc?: string;
}

export abstract class Process {
    run(node: Node, env: Env, ...any: ValueType[]): Readonly<Result> {
        return Result.FAIL;
    }

    abstract get descriptor(): ProcessDescriptor;

    check(node: Node): void {}

    protected error(node: Node, msg: string) {
        throw new Error(`${node.tree.name}#${node.id}: ${msg}`);
    }
}

export interface NodeData {
    id: number;
    name: string;
    desc: string;
    args: unknown;
    debug?: boolean;
    children?: NodeData[];
    input?: string[];
    output?: string[];
}

const NODE_YIELD = "YIELD";

export class Node {
    private static tmpArgs: ValueType[] = [];

    readonly tree: Tree;
    readonly name: string;
    readonly id: number;
    readonly info: string;
    readonly args: unknown;
    readonly data: NodeData;
    readonly children: Node[] = [];

    private _process: Process;
    private _yield: string;

    constructor(data: NodeData, tree: Tree) {
        this.tree = tree;
        this.name = data.name;
        this.id = data.id;
        this.info = `node ${tree.name}.${this.id}.${this.name}`;

        this.data = data;
        this.args = data.args ?? {};
        data.children?.forEach((value) => {
            this.children.push(new Node(value, tree));
        });

        const process = tree.context.resolveProcess(this.name);
        if (!process) {
            throw new Error(`behavior3: process '${this.name}' not found`);
        }
        this._process = process;
        this._process.check(this);
        this._yield = Env.makePrivateKey(this, "yield");
    }

    run(env: Env) {
        if (env.getVar(this._yield) === undefined) {
            env.pushStack(this);
        }

        Node.tmpArgs.length = 0;
        this.data.input?.forEach((varName) => {
            Node.tmpArgs.push(env.getVar(varName));
        });

        const ret = this._process.run(this, env, ...Node.tmpArgs);
        if (ret.status != Status.RUNNING) {
            env.setVar(this._yield, undefined);
            env.popStack();
        } else if (env.getVar(this._yield) === undefined) {
            env.setVar(this._yield, true);
        }

        this.data.output?.forEach((varName, i) => {
            const varValue = ret.results?.[i];
            env.setVar(varName, varValue);
        });

        env.lastStatus = ret.status;

        if (this.data.debug) {
            let varStr = "";
            for (const k in env.vars) {
                if (!Env.isPrivateKey(k)) {
                    varStr += `${k}:${env.vars[k]},`;
                }
            }
            console.log(
                `[DEBUG] behavior3 -> ${this.name}: tree:${this.tree.name}, node:${this.id}, ` +
                    `ret:${ret.status}, vars:{${varStr}}`
            );
        }

        return ret;
    }

    yield(env: Env, value?: ValueType) {
        env.setVar(this._yield, value ?? true);
        return Result.RUNNING;
    }

    resume(env: Env): ValueType {
        return env.getVar(this._yield);
    }
}

export class Context {
    private _processResolvers: { [k: string]: Process | undefined } = {};
    private _exps: { [k: string]: ExpressionEvaluator | undefined } = {};

    time: number = 0;

    constructor() {}

    compileExpr(code: string) {
        let expr = this._exps[code];
        if (!expr) {
            expr = new ExpressionEvaluator(code);
            this._exps[code] = expr;
        }
        return expr;
    }

    registerProcess<T extends Process>(cls: Constructor<T>) {
        const process = new cls();
        this._processResolvers[process.descriptor.name] = process;
    }

    resolveProcess(name: string) {
        return this._processResolvers[name];
    }
}

export class Env {
    private _vars: ValueMap = {};
    private _stack: Node[] = [];

    readonly context: Context;

    lastStatus: Status = Status.SUCCESS;

    constructor(context: Context) {
        this.context = context;
    }

    get vars() {
        return this._vars;
    }

    get stack() {
        return this._stack;
    }

    eval(code: string) {
        return this.context.compileExpr(code).evaluate(this._vars);
    }

    getVar(k: string) {
        return this._vars[k];
    }

    setVar(k: string, v: ValueType) {
        if (v === undefined) {
            delete this._vars[k];
        } else {
            this._vars[k] = v;
        }
    }

    pushStack(node: Node) {
        this._stack.push(node);
    }

    popStack() {
        return this._stack.pop();
    }

    static makePrivateKey(node: Node, k: string) {
        return `__private_Node#${node.id}_${k}`;
    }

    static isPrivateKey(k: string) {
        return k.indexOf("__private") === 0;
    }
}

export interface TreeData {
    name: string;
    desc: string;
    root: NodeData;
}

export class Tree {
    readonly name: string;
    readonly root: Node;
    readonly context: Context;

    tick: number = 0;

    constructor(name: string, data: TreeData, context: Context) {
        this.name = name;
        this.context = context;
        this.root = new Node(data.root, this);
    }

    interrupt(env: Env) {
        const stack = env.stack;
        const vars = env.vars;
        if (stack.length > 0) {
            stack.length = 0;
            for (const k in vars) {
                if (Env.isPrivateKey(k)) {
                    delete vars[k];
                }
            }
        }
    }

    run(env: Env) {
        if (env.stack.length > 0) {
            while (env.stack.length) {
                const lastNode = env.stack[env.stack.length - 1];
                const ret = lastNode.run(env);
                if (ret.status === Status.RUNNING) {
                    break;
                }
            }
        } else {
            this.root.run(env);
        }
        ++this.tick;
    }
}
