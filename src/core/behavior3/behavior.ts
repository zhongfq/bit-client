import { ExpressionEvaluator, ValueMap, ValueType } from "./expression-evaluator";

export type Constructor<T = unknown> = new (...args: any[]) => T;

export const enum Status {
    FAIL = "FAIL", // 失败
    SUCCESS = "SUCCESS", // 成功
    RUNNING = "running", // 运行中
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
    readonly tree: Tree;
    readonly name: string;
    readonly id: number;
    readonly info: string;
    readonly args: unknown;
    readonly data: NodeData;
    readonly children: Node[] = [];

    private _process: Process;

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
    }

    run(env: Env) {
        if (env.getInnerVar(this, NODE_YIELD) === undefined) {
            env.pushStack(this);
        }

        const vars: ValueType[] = [];
        this.data.input?.forEach((varName) => {
            vars.push(env.getVar(varName));
        });

        const ret = this._process.run(this, env, ...vars);
        if (ret.status != Status.RUNNING) {
            env.delInnerVar(this, NODE_YIELD);
            env.popStack();
        } else if (env.getInnerVar(this, NODE_YIELD) === undefined) {
            env.setInnerVar(this, NODE_YIELD, true);
        }

        this.data.output?.forEach((varName, i) => {
            const varValue = ret.results?.[i];
            env.setVar(varName, varValue);
        });

        env.lastStatus = ret.status;

        if (this.data.debug) {
            let varStr = "";
            for (const k in env.vars) {
                varStr += `${k}:${env.vars[k]},`;
            }
            console.log(
                `[DEBUG] behavior3 -> ${this.name}: tree:${this.tree.name}, node:${this.id}, ` +
                    `ret:${ret.status}, vars:{${varStr}}`
            );
        }

        return ret;
    }

    yield(env: Env, value?: ValueType) {
        env.setInnerVar(this, NODE_YIELD, value ?? true);
        return Result.RUNNING;
    }

    resume(env: Env): ValueType {
        return env.getInnerVar(this, NODE_YIELD);
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
    private _innerVars: ValueMap = {};
    private _stack: Node[] = [];

    readonly context: Context;

    lastStatus: Status = Status.SUCCESS;

    constructor(context: Context) {
        this.context = context;
    }

    get vars() {
        return this._vars;
    }

    get innerVars() {
        return this._innerVars;
    }

    get stack() {
        return this._stack;
    }

    interrupt() {
        if (this._stack.length) {
            this._stack.length = 0;
            this._innerVars = {};
        }
    }

    eval(code: string) {
        return this.context.compileExpr(code).evaluate(this._vars);
    }

    getVar(k: string) {
        return this._vars[k];
    }

    setVar(k: string, v: ValueType) {
        this._vars[k] = v;
    }

    delVar(k: string) {
        delete this._vars[k];
    }

    getInnerVar(node: Node, k: string) {
        return this._innerVars[this._toKey(node, k)];
    }

    setInnerVar(node: Node, k: string, v: ValueType) {
        this._innerVars[this._toKey(node, k)] = v;
    }

    delInnerVar(node: Node, k: string) {
        delete this._innerVars[this._toKey(node, k)];
    }

    pushStack(node: Node) {
        this._stack.push(node);
    }

    popStack() {
        return this._stack.pop();
    }

    private _toKey(node: Node, k: string) {
        return `${node.id}_${k}`;
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
        env.interrupt();
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
