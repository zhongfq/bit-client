import { Node, Process, Status, TreeEnv } from "../../behavior";

export class Once extends Process {
    public override check(node: Node): void {}

    public override run(node: Node, env: TreeEnv) {
        const onceKey = TreeEnv.makePrivateVar(node, "once");
        if (env.getValue(onceKey) === true) {
            return Status.FAILURE;
        }

        for (let i = 0; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === Status.RUNNING) {
                this.error(node, "this child should not return running status");
            }
        }

        env.setValue(onceKey, true);
        return Status.FAILURE;
    }

    public override get descriptor() {
        return {
            name: "Once",
            type: "Composite",
            desc: "只执行一次",
            doc: `
                + 可以接多个子节点，子节点默认全部执行
                + 被打断后该节点后的子节点依旧不会执行
                + 该节点执行后永远返回成功`,
        };
    }
}
