import { ExpressionEvaluator, ValueMap, ValueType } from "./expression-evaluator";

export type Constructor<T = unknown> = new (...args: any[]) => T;

export const enum Status {
    FAILURE = "failure", // 失败
    SUCCESS = "success", // 成功
    RUNNING = "running", // 运行中
}

export interface ProcessDescriptor {
    name: string;
    type: string;
    desc: string;
    args?: { name: string; type: string; desc: string }[];
    output?: string[];
    input?: string[];
    doc?: string;
}

export abstract class Process {
    check(node: Node): void {}

    run(node: Node, env: Env, ...any: ValueType[]): Status {
        return Status.FAILURE;
    }

    abstract get descriptor(): ProcessDescriptor;

    protected error(node: Node, msg: string) {
        throw new Error(`${node.tree.name}->${node.name}#${node.id}: ${msg}`);
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

        env.lastRet.results = null;

        const status = this._process.run(this, env, ...Node.tmpArgs);
        if (status != Status.RUNNING) {
            this.data.output?.forEach((varName, i) => {
                const varValue = env.lastRet.results?.[i];
                env.setVar(varName, varValue);
            });
            env.setVar(this._yield, undefined);
            env.popStack();
        }

        env.lastRet.status = status;

        if (this.data.debug) {
            let varStr = "";
            for (const k in env.vars) {
                if (!Env.isPrivateKey(k)) {
                    varStr += `${k}:${env.vars[k]},`;
                }
            }
            console.log(
                `[DEBUG] behavior3 -> ${this.name}: tree:${this.tree.name}, node:${this.id}, ` +
                    `ret:${status}, vars:{${varStr}}`
            );
        }

        return status;
    }

    yield(env: Env, value?: ValueType) {
        env.setVar(this._yield, value ?? true);
        return Status.RUNNING;
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

    lastRet: { status: Status; results?: ValueType[] | null } = { status: Status.SUCCESS };

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

    static makePublicKey(node: Node, k: string) {
        return `__public_Node#${node.id}_${k}`;
    }

    static isPublicKey(k: string) {
        return k.indexOf("__public_") === 0;
    }

    static makePrivateKey(node: Node, k: string) {
        return `__private_Node#${node.id}_${k}`;
    }

    static isPrivateKey(k: string) {
        return k.indexOf("__private_") === 0;
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
                const status = lastNode.run(env);
                if (status === Status.RUNNING) {
                    break;
                }
            }
        } else {
            this.root.run(env);
        }
    }
}
