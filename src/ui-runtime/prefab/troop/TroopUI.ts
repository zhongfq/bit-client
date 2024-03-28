const { regClass } = Laya;
import { app } from "../../../app";
import { TroopUIBase } from "./TroopUI.generated";

@regClass()
export class TroopUI extends TroopUIBase {
    public override close(type?: string | undefined): void {
        app.service.troop.requestEditTroop();
        super.close(type);
    }
}
