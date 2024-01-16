/**
 * VO
 */
export abstract class VO<Ref = any, Cmd = any> {
    abstract __cname: string;
    protected _ref: Ref | undefined;
    protected _cmd: Cmd | null = null;

    initByCmd(cmd: Cmd) {
        this._cmd = cmd;
        this._ref = this.getRefByCmd(cmd);
    }

    initByRef(ref: Ref | undefined) {
        this._ref = ref;
        this._cmd = null;
    }

    get ref(): Ref | undefined {
        return this._ref;
    }

    get cmd(): Cmd | null {
        return this._cmd;
    }

    get id(): number {
        return 0;
    }
    abstract getRefByCmd(cmd: Cmd): any;
    protected get voName(): string {
        return this.__cname;
    }
}
