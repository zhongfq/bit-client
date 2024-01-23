/**
 * VO
 */
export abstract class VO<Ref = any, Cmd = any> {
    protected _ref!: Ref;
    protected _cmd: Cmd | null = null;

    initByCmd(cmd: Cmd) {
        this._cmd = cmd;
        this._ref = this.getRefByCmd(cmd);
    }

    initByRef(ref: Ref) {
        this._ref = ref;
        this._cmd = null;
    }

    get ref(): Ref {
        return this._ref;
    }

    get cmd(): Cmd | null {
        return this._cmd;
    }

    get id(): number {
        return 0;
    }
    abstract getRefByCmd(cmd: Cmd): any;
}
