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
    public check(node: Node): void {}

    public abstract run(node: Node, env: TreeEnv, ...any: unknown[]): Status;

    public abstract get descriptor(): ProcessDescriptor;

    protected error(node: Node, msg: string) {
        throw new Error(`${node.tree.name}->${node.name}#${node.id}: ${msg}`);
    }

    protected warn(node: Node, msg: string) {
        console.warn(`${node.tree.name}->${node.name}#${node.id}: ${msg}`);
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
    private static tmpInputArgs: unknown[] = [];

    public readonly tree: Tree;
    public readonly name: string;
    public readonly id: number;
    public readonly info: string;
    public readonly args: unknown;
    public readonly data: NodeData;
    public readonly children: Node[] = [];

    private _process: Process;
    private _yield: string;

    public constructor(data: NodeData, tree: Tree) {
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
        this._yield = TreeEnv.makeTempVar(this, "yield");
    }

    public run(env: TreeEnv) {
        if (env.getValue(this._yield) === undefined) {
            env.stack.push(this);
        }

        Node.tmpInputArgs.length = 0;
        this.data.input?.forEach((varName) => {
            Node.tmpInputArgs.push(env.getValue(varName));
        });

        env.lastRet.results.length = 0;

        const status = this._process.run(this, env, ...Node.tmpInputArgs);
        if (status != Status.RUNNING) {
            this.data.output?.forEach((varName, i) => {
                const varValue = env.lastRet.results[i];
                env.setValue(varName, varValue);
            });
            env.setValue(this._yield, undefined);
            env.stack.pop();
        } else if (env.getValue(this._yield) === undefined) {
            throw new Error(`${this.name}#${this.id}: should use Node.yield`);
        }

        env.lastRet.status = status;

        if (this.data.debug || env.debug) {
            let varStr = "";
            for (const k of env.vars.keys()) {
                if (!(TreeEnv.isTempVar(k) || TreeEnv.isPrivateVar(k))) {
                    varStr += `${k}:${env.vars.get(k)}, `;
                }
            }
            const indent = env.debug ? " ".repeat(env.stack.length) : "";
            console.log(
                `[DEBUG] behavior3 -> ${indent}${this.name}: tree:${this.tree.name}, ` +
                    `node:${this.id}, status:${status}, vars:{${varStr}}`
            );
        }

        return status;
    }

    public yield(env: TreeEnv, value?: unknown) {
        env.setValue(this._yield, value ?? true);
        return Status.RUNNING;
    }

    public resume(env: TreeEnv): unknown {
        return env.getValue(this._yield);
    }
}

export class Context {
    protected _processResolvers: Map<string, Process> = new Map();
    protected _exps: Map<string, ExpressionEvaluator> = new Map();

    public time: number = 0;

    public constructor() {}

    public compileExpr(code: string) {
        let expr = this._exps.get(code);
        if (!expr) {
            expr = new ExpressionEvaluator(code);
            this._exps.set(code, expr);
        }
        return expr;
    }

    public registerProcess<T extends Process>(...args: Constructor<T>[]) {
        for (const cls of args) {
            const process = new cls();
            this._processResolvers.set(process.descriptor.name, process);
        }
    }

    public resolveProcess(name: string) {
        return this._processResolvers.get(name);
    }
}

export class TreeEnv {
    public readonly context: Context;
    public readonly lastRet: { status: Status; readonly results: unknown[] } = {
        status: Status.SUCCESS,
        results: [],
    };

    private _values: Map<string, unknown> = new Map();
    private _stack: Node[] = [];

    public debug: boolean = false;

    public constructor(context: Context) {
        this.context = context;
    }

    public get vars() {
        return this._values;
    }

    public get stack() {
        return this._stack;
    }

    public eval(code: string) {
        return this.context.compileExpr(code).evaluate(this._values);
    }

    public getValue(k: string) {
        return this._values.get(k);
    }

    public setValue(k: string, v: unknown) {
        if (v === undefined) {
            this._values.delete(k);
        } else {
            this._values.set(k, v);
        }
    }

    public clear() {
        this._stack.length = 0;
        this._values.clear();
        this.lastRet.results.length = 0;
    }

    public static makePrivateVar(k: string): string;

    public static makePrivateVar(node: Node, k: string): string;

    public static makePrivateVar(node: Node | string, k?: string) {
        if (typeof node === "string") {
            return `__PRIVATE_VAR_${node}`;
        } else {
            return `__PRIVATE_VAR_NODE#${node.id}_${k}`;
        }
    }

    public static isPrivateVar(k: string) {
        return k.indexOf("__PRIVATE_VAR_") === 0;
    }

    public static makeTempVar(node: Node, k: string) {
        return `__TEMP_VAR_NODE#${node.id}_${k}`;
    }

    public static isTempVar(k: string) {
        return k.indexOf("__TEMP_VAR_") === 0;
    }
}

export interface TreeData {
    name: string;
    desc: string;
    root: NodeData;
}

export class Tree {
    public readonly name: string;
    public readonly root: Node;
    public readonly context: Context;

    public constructor(name: string, data: TreeData, context: Context) {
        this.name = name;
        this.context = context;
        this.root = new Node(data.root, this);
    }

    public interrupt(env: TreeEnv) {
        const stack = env.stack;
        const vars = env.vars;
        if (stack.length > 0) {
            stack.length = 0;
            for (const key of vars.keys()) {
                if (TreeEnv.isTempVar(key)) {
                    vars.delete(key);
                }
            }
        }
    }

    public run(env: TreeEnv) {
        const stack = env.stack;
        if (env.debug) {
            console.log(`---------------- debug ai: ${this.name} --------------------`);
        }
        if (stack.length > 0) {
            while (stack.length > 0) {
                const node = stack[env.stack.length - 1];
                const status = node.run(env);
                if (status === Status.RUNNING) {
                    break;
                }
            }
        } else {
            this.root.run(env);
        }
    }

    public isRunning(env: TreeEnv) {
        return env.stack.length > 0;
    }
}

type TokenType = number | string;
type ScalarType = number | string | boolean;
type ObjectType = { [k: string]: ScalarType | undefined | null };

class ExpressionEvaluator {
    private _postfix: TokenType[];
    private _args: Map<string, unknown> | null = null;

    public constructor(expression: string) {
        expression = expression.replace(/\s/g, "");
        const tokens = expression.match(/\d+\.\d+|\w+|\d+|>=|<=|==|>|<|[-+*/().]/g);
        if (!tokens) {
            throw new Error("Invalid expression");
        }
        this._postfix = this._convertToPostfix(tokens);
    }

    public evaluate(args: Map<string, unknown>): unknown {
        const stack: TokenType[] = [];

        this._args = args;
        for (const token of this._postfix) {
            if (typeof token === "number") {
                stack.push(token);
            } else if (/^\w+$/.test(token)) {
                stack.push(token);
            } else {
                const b = stack.pop()!;
                const a = stack.pop()!;
                switch (token) {
                    case ".": {
                        const obj = this._toObject(a);
                        stack.push(this._toNumber(obj[b]));
                        break;
                    }
                    case ">":
                        return this._toNumber(a) > this._toNumber(b);
                    case ">=":
                        return this._toNumber(a) >= this._toNumber(b);
                    case "==":
                        return this._toNumber(a) === this._toNumber(b);
                    case "<":
                        return this._toNumber(a) < this._toNumber(b);
                    case "<=":
                        return this._toNumber(a) <= this._toNumber(b);
                    case "+":
                        stack.push(this._toNumber(a) + this._toNumber(b));
                        break;
                    case "-":
                        stack.push(this._toNumber(a) - this._toNumber(b));
                        break;
                    case "*":
                        stack.push(this._toNumber(a) * this._toNumber(b));
                        break;
                    case "/":
                        stack.push(this._toNumber(a) / this._toNumber(b));
                        break;
                }
            }
        }

        this._args = null;

        return stack.pop();
    }

    private _toObject(token: ScalarType) {
        if (typeof token === "string") {
            const obj = this._args?.get(token);
            if (typeof obj === "object") {
                return obj as ObjectType;
            } else {
                throw new Error(`value indexed by '${token}' is not a object`);
            }
        } else {
            throw new Error(`token '${token}' is not a string`);
        }
    }

    private _toNumber(token: ScalarType | unknown) {
        if (typeof token === "number") {
            return token;
        } else if (typeof token === "string") {
            const value = this._args?.get(token);
            if (typeof value === "number") {
                return value;
            } else if (value === undefined) {
                throw new Error(`value indexed by '${token}' is not found`);
            } else {
                throw new Error(`value indexed by '${token}' is not a number'`);
            }
        } else {
            throw new Error(`token '${token}' is not a number`);
        }
    }

    private _precedence(operator: string): number {
        switch (operator) {
            case "<":
            case "<=":
            case "==":
            case ">":
            case ">=":
                return 1;
            case "+":
            case "-":
                return 2;
            case "*":
            case "/":
                return 3;
            case ".":
                return 4;
            default:
                return 0;
        }
    }

    private _convertToPostfix(infix: string[]) {
        const outputQueue: (string | number)[] = [];
        const operatorStack: string[] = [];

        infix.forEach((token) => {
            if (/^\d+$/.test(token)) {
                outputQueue.push(parseFloat(token));
            } else if (/^\w+$/.test(token)) {
                outputQueue.push(token);
            } else if (token === "(") {
                operatorStack.push(token);
            } else if (token === ")") {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.pop();
            } else {
                while (
                    operatorStack.length &&
                    this._precedence(token) <=
                        this._precedence(operatorStack[operatorStack.length - 1])
                ) {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.push(token);
            }
        });

        while (operatorStack.length) {
            outputQueue.push(operatorStack.pop()!);
        }

        return outputQueue;
    }
}
