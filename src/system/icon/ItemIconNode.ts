import { IconUI } from "../../ui-runtime/prefab/icon/IconUI";

class ItemIconNode extends Laya.Box {
    /**
     *
     */
    owner!: IconUI;
    constructor() {
        super();
        this.width = 100;
        this.height = 100;
        this.init();
    }
    init() {
        Laya.loader.load("resources/prefab/icon/icon-node.lh").then((pre: Laya.Prefab) => {
            this.owner = pre.create() as IconUI;
            this.addChild(this.owner);
            this.update();
        });
    }
    update() {
        // this.owner.updateGoods()
    }
}
