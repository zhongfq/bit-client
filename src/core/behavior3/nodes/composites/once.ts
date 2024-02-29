import { Env, Node, Process, ProcessDescriptor, Status } from "../../behavior";

export class Once extends Process {
    override check(node: Node): void {}

    override run(node: Node, env: Env) {
        const onceKey = Env.makePublicKey(node, "once");
        if (env.getVar(onceKey) === true) {
            return Status.FAILURE;
        }

        for (let i = 0; i < node.children.length; i++) {
            const status = node.children[i].run(env);
            if (status === Status.RUNNING) {
                this.error(node, "this child should not return running status");
            }
        }

        env.setVar(onceKey, true);
        return Status.FAILURE;
    }

    override get descriptor() {
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
