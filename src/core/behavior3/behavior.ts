export namespace b3 {
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

        abstract run(node: Node, env: TreeEnv, ...any: unknown[]): Status;

        abstract get descriptor(): ProcessDescriptor;

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
            this._yield = TreeEnv.makePrivateKey(this, "yield");
        }

        run(env: TreeEnv) {
            if (env.getVar(this._yield) === undefined) {
                env.stack.push(this);
            }

            Node.tmpInputArgs.length = 0;
            this.data.input?.forEach((varName) => {
                Node.tmpInputArgs.push(env.getVar(varName));
            });

            env.lastRet.results.length = 0;

            const status = this._process.run(this, env, ...Node.tmpInputArgs);
            if (status != Status.RUNNING) {
                this.data.output?.forEach((varName, i) => {
                    const varValue = env.lastRet.results[i];
                    env.setVar(varName, varValue);
                });
                env.setVar(this._yield, undefined);
                env.stack.pop();
            } else if (env.getVar(this._yield) === undefined) {
                throw new Error(`${this.name}#${this.id}: should use Node.yield`);
            }

            env.lastRet.status = status;

            if (this.data.debug) {
                let varStr = "";
                for (const k of env.vars.keys()) {
                    if (!(TreeEnv.isPrivateKey(k) || TreeEnv.isPublicKey(k))) {
                        varStr += `${k}:${env.vars.get(k)}, `;
                    }
                }
                console.log(
                    `[DEBUG] behavior3 -> ${this.name}: tree:${this.tree.name}, node:${this.id}, ` +
                        `status:${status}, vars:{${varStr}}`
                );
            }

            return status;
        }

        yield(env: TreeEnv, value?: unknown) {
            env.setVar(this._yield, value ?? true);
            return Status.RUNNING;
        }

        resume(env: TreeEnv): unknown {
            return env.getVar(this._yield);
        }
    }

    export class Context {
        protected _processResolvers: Map<string, Process> = new Map();
        protected _exps: Map<string, ExpressionEvaluator> = new Map();

        time: number = 0;

        constructor() {}

        compileExpr(code: string) {
            let expr = this._exps.get(code);
            if (!expr) {
                expr = new ExpressionEvaluator(code);
                this._exps.set(code, expr);
            }
            return expr;
        }

        registerProcess<T extends Process>(...args: Constructor<T>[]) {
            for (const cls of args) {
                const process = new cls();
                this._processResolvers.set(process.descriptor.name, process);
            }
        }

        resolveProcess(name: string) {
            return this._processResolvers.get(name);
        }
    }

    export class TreeEnv {
        readonly context: Context;
        readonly lastRet: { status: Status; readonly results: unknown[] } = {
            status: Status.SUCCESS,
            results: [],
        };

        private _vars: Map<string, unknown> = new Map();
        private _stack: Node[] = [];

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
            return this._vars.get(k);
        }

        setVar(k: string, v: unknown) {
            if (v === undefined) {
                this._vars.delete(k);
            } else {
                this._vars.set(k, v);
            }
        }

        clear() {
            this._stack.length = 0;
            this._vars.clear();
            this.lastRet.results.length = 0;
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

        interrupt(env: TreeEnv) {
            const stack = env.stack;
            const vars = env.vars;
            if (stack.length > 0) {
                stack.length = 0;
                for (const key of vars.keys()) {
                    if (TreeEnv.isPrivateKey(key)) {
                        vars.delete(key);
                    }
                }
            }
        }

        run(env: TreeEnv) {
            const stack = env.stack;
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

        isRunning(env: TreeEnv) {
            return env.stack.length > 0;
        }
    }

    type TokenType = number | string;
    type ScalarType = number | string | boolean;
    type ObjectType = { [k: string]: ScalarType | undefined | null };

    class ExpressionEvaluator {
        private _postfix: TokenType[];
        private _args: Map<string, unknown> | null = null;

        constructor(expression: string) {
            expression = expression.replace(/\s/g, "");
            const tokens = expression.match(/\d+\.\d+|\w+|\d+|>=|<=|==|>|<|[-+*/().]/g);
            if (!tokens) {
                throw new Error("Invalid expression");
            }
            this._postfix = this._convertToPostfix(tokens);
        }

        evaluate(args: Map<string, unknown>): unknown {
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
                    while (
                        operatorStack.length &&
                        operatorStack[operatorStack.length - 1] !== "("
                    ) {
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
}
