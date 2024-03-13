/**
 * VO
 */
export abstract class VO<Ref = any, Cmd = any> {
    protected _ref!: Ref;
    protected _cmd: Cmd | null = null;

    public initByCmd(cmd: Cmd) {
        this._cmd = cmd;
        this._ref = this.getTableRowByCmd(cmd);
    }

    public initByTableRow(ref: Ref) {
        this._ref = ref;
        this._cmd = null;
    }

    public get ref(): Ref {
        return this._ref;
    }

    public get cmd(): Cmd | null {
        return this._cmd;
    }

    public get id(): number {
        return 0;
    }
    public abstract getTableRowByCmd(cmd: Cmd): any;
}
