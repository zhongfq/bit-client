type TokenType = number | string;
export type ScalarType = number | string | boolean;
export type ObjectType = { [k: string]: ScalarType | undefined | null };
export type ValueType = unknown;

export interface ValueMap {
    [k: string]: ValueType;
}

export class ExpressionEvaluator {
    private _postfix: TokenType[];
    private _env: ValueMap | null = null;

    constructor(expression: string) {
        expression = expression.replace(/\s/g, "");
        const tokens = expression.match(/\d+\.\d+|\w+|\d+|>=|<=|==|>|<|[-+*/().]/g);
        if (!tokens) {
            throw new Error("Invalid expression");
        }
        this._postfix = this._convertToPostfix(tokens);
    }

    evaluate(env: ValueMap): number | boolean {
        const stack: TokenType[] = [];

        this._env = env;
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

        this._env = null;

        return stack.pop() as number;
    }

    private _toObject(token: ScalarType) {
        if (typeof token === "string") {
            const obj = this._env?.[token];
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
            const value = this._env?.[token];
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
