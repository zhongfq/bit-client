import * as ecs from "../../../../../core/ecs";
import { PveServer } from "../../pve-server";
import { EventComponent } from "../components/event-component";
import { TransformComponent } from "../components/movement-component";

export class EventSystem extends ecs.System {
    private static readonly TICK = 0.3;

    private _lastTick: number = 0;

    public declare context: PveServer;

    public override update(dt: number): void {
        const time = this.context.time;
        if (time - this._lastTick > EventSystem.TICK) {
            this._lastTick = time;
            const focusTransform = this.ecs.getComponent(
                this.context.focusRole,
                TransformComponent
            );
            if (!focusTransform) {
                return;
            }
            this.ecs.getComponents(EventComponent).forEach((event) => {
                const transform = event.getComponent(TransformComponent)!;
                const dis = Laya.Vector3.distance(focusTransform.position, transform.position);
                if (dis < event.data.radius) {
                    if (!event.dispatching) {
                        event.dispatching = true;
                        console.log("dispatch event:", event);
                    }
                } else if (event.dispatching) {
                    event.dispatching = false;
                    console.log("dispatch no:", event);
                }
            });
        }
    }
}
