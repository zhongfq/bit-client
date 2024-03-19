export type Constructor<T = unknown> = new (...args: any[]) => T;

export type ObjectType = { [k: string]: unknown };

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
            for (const k in env.vars) {
                if (!(TreeEnv.isTempVar(k) || TreeEnv.isPrivateVar(k))) {
                    varStr += `${k}:${env.vars[k]}, `;
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

type Evaluator = (envars: any) => unknown;

export class Context {
    protected _processResolvers: Map<string, Process> = new Map();
    protected _evaluators: Map<string, Evaluator> = new Map();

    public time: number = 0;

    public constructor() {}

    public compileCode(code: string) {
        let evaluator = this._evaluators.get(code);
        if (!evaluator) {
            const expr = new ExpressionEvaluator(code);
            evaluator = (envars: any) => expr.evaluate(envars);
            this._evaluators.set(code, evaluator);
        }
        return evaluator;
    }

    public registerCode(code: string, evaluator: Evaluator) {
        this._evaluators.set(code, evaluator);
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

    private _values: ObjectType = {};
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
        return this.context.compileCode(code)(this._values);
    }

    public getValue(k: string) {
        return this._values[k];
    }

    public setValue(k: string, v: unknown) {
        if (v === undefined) {
            delete this._values[k];
        } else {
            this._values[k] = v;
        }
    }

    public clear() {
        this._stack.length = 0;
        this._values = {};
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
            for (const key in vars) {
                if (TreeEnv.isTempVar(key)) {
                    delete vars[key];
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
            let node = stack.at(-1);
            while (node) {
                const status = node.run(env);
                if (status === Status.RUNNING) {
                    break;
                } else {
                    node = stack.at(-1);
                }
            }
        } else {
            this.root.run(env);
        }
        return env.lastRet.status;
    }

    public isRunning(env: TreeEnv) {
        return env.stack.length > 0;
    }
}

const enum TokenType {
    NUMBER,
    STRING,
    DOT,
    GT,
    GE,
    EQ,
    LT,
    LE,
    ADD,
    SUB,
    MUL,
    DIV,
}

type Token = {
    type: TokenType;
    value?: string | number;
};

class ExpressionEvaluator {
    private _postfix: Token[];
    private _args: ObjectType | null = null;

    public constructor(expression: string) {
        expression = expression.replace(/\s/g, "");
        const tokens = expression.match(/\d+\.\d+|\w+|\d+|>=|<=|==|>|<|[-+*/().]/g);
        if (!tokens) {
            throw new Error("Invalid expression");
        }
        this._postfix = this._convertToPostfix(tokens);
    }

    public evaluate(args: ObjectType): unknown {
        const stack: (string | number)[] = [];

        this._args = args;
        for (const token of this._postfix) {
            const type = token.type;
            if (type === TokenType.NUMBER) {
                stack.push(token.value as number);
            } else if (type === TokenType.STRING) {
                stack.push(token.value as string);
            } else {
                const b = stack.pop()!;
                const a = stack.pop()!;
                switch (type) {
                    case TokenType.DOT: {
                        const obj = this._toObject(a);
                        stack.push(this._toNumber(obj[b]));
                        break;
                    }
                    case TokenType.GT:
                        return this._toNumber(a) > this._toNumber(b);
                    case TokenType.GE:
                        return this._toNumber(a) >= this._toNumber(b);
                    case TokenType.EQ:
                        return this._toNumber(a) === this._toNumber(b);
                    case TokenType.LT:
                        return this._toNumber(a) < this._toNumber(b);
                    case TokenType.LE:
                        return this._toNumber(a) <= this._toNumber(b);
                    case TokenType.ADD:
                        stack.push(this._toNumber(a) + this._toNumber(b));
                        break;
                    case TokenType.SUB:
                        stack.push(this._toNumber(a) - this._toNumber(b));
                        break;
                    case TokenType.MUL:
                        stack.push(this._toNumber(a) * this._toNumber(b));
                        break;
                    case TokenType.DIV:
                        stack.push(this._toNumber(a) / this._toNumber(b));
                        break;
                }
            }
        }

        this._args = null;

        return stack.pop();
    }

    private _toObject(token: unknown) {
        if (typeof token === "string") {
            const obj = this._args?.[token];
            if (typeof obj === "object") {
                return obj as ObjectType;
            } else {
                throw new Error(`value indexed by '${token}' is not a object`);
            }
        } else {
            throw new Error(`token '${token}' is not a string`);
        }
    }

    private _toNumber(token: unknown) {
        if (typeof token === "number") {
            return token;
        } else if (typeof token === "string") {
            const value = this._args?.[token];
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

    private _toToken(operator: string): Token {
        switch (operator) {
            case "<":
                return { type: TokenType.LT };
            case "<=":
                return { type: TokenType.LE };
            case "==":
                return { type: TokenType.EQ };
            case ">":
                return { type: TokenType.GT };
            case ">=":
                return { type: TokenType.GE };
            case "+":
                return { type: TokenType.ADD };
            case "-":
                return { type: TokenType.SUB };
            case "*":
                return { type: TokenType.MUL };
            case "/":
                return { type: TokenType.DIV };
            case ".":
                return { type: TokenType.DOT };
            default:
                throw new Error(`unsupport operator: ${operator}`);
        }
    }

    private _convertToPostfix(infix: string[]) {
        const outputQueue: Token[] = [];
        const operatorStack: string[] = [];

        infix.forEach((token) => {
            if (/^\d+$/.test(token)) {
                outputQueue.push({
                    type: TokenType.NUMBER,
                    value: parseFloat(token),
                });
            } else if (/^\w+$/.test(token)) {
                outputQueue.push({ type: TokenType.STRING, value: token });
            } else if (token === "(") {
                operatorStack.push(token);
            } else if (token === ")") {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue.push(this._toToken(operatorStack.pop()!));
                }
                operatorStack.pop();
            } else {
                while (
                    operatorStack.length &&
                    this._precedence(token) <=
                        this._precedence(operatorStack[operatorStack.length - 1])
                ) {
                    outputQueue.push(this._toToken(operatorStack.pop()!));
                }
                operatorStack.push(token);
            }
        });

        while (operatorStack.length) {
            outputQueue.push(this._toToken(operatorStack.pop()!));
        }

        return outputQueue;
    }
}
