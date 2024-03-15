import * as ecs from "../../../../../core/ecs";

export class OwnerComponent extends ecs.Component {
    public aid: number = 0;
    public rid: number = 0;
    public isRobot: boolean = false;
    public roleName: string = "";
    public allianceName: string = "";
}
