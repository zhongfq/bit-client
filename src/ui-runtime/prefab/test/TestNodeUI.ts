const { regClass } = Laya;
import { TestNodeUIBase } from "./TestNodeUI.generated";

@regClass()
export class TestNodeUI extends TestNodeUIBase {
    override set_dataSource(data: any) {
        super.set_dataSource(data);
        this.Label.text = data;
    }
}
