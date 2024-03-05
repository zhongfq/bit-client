import { app } from "../../app";
import { Mediator } from "../../core/ui-mediator";
import { ChestUI } from "../../ui-runtime/prefab/chest/ChestUI";
import { ui } from "../../misc/ui";
import { ChestItemUI } from "../../ui-runtime/prefab/chest/ChestItemUI";
import proto from "../../def/proto";
import { ChestRow, ChestScoreRow } from "../../def/table";
import { HeroVo } from "../../misc/vo/goods/hero-vo";
import { ChestService } from "./chest-service";
import { Util } from "../../core/utils/util";
import { TableUtil } from "../table/table-util";

const { regClass, property } = Laya;
type ListCellData = {
    row: ChestRow;
    cmdNum?: number;
};
@regClass()
export class ChestMediator extends Mediator {
    declare owner: ChestUI;
    declare selectedIndex: number;
    private listData: ListCellData[] = [];

    override onAwake(): void {
        this.initUIEvent();
        this.initServiceEvent();
    }

    public initInfo() {
        this._updateList();
        this._updateScore();
        this._updateBtnOpen();
    }

    private initUIEvent() {
        this.owner.listBox.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.listBox.selectHandler = new Laya.Handler(this, this.onSelect);
        this.owner.btnOpenBox.on(Laya.Event.CLICK, this, this.openBox);
        this.owner.boxReward.on(Laya.Event.CLICK, () => {
            const chestScoreRow = TableUtil.getRow(app.service.table.chest.score, {
                id: app.service.chest.scoreInfo.scoreId,
            }) as ChestScoreRow;
            if (app.service.chest.scoreInfo.score >= chestScoreRow.reward_score) {
                app.service.chest.requestScoreReceive().then(() => {
                    const cell = this.owner.listBox.selectedItem as ListCellData;
                    if (
                        cell.row.id == chestScoreRow.chest_id &&
                        (!cell.cmdNum || cell.cmdNum < cell.row.open_max_num)
                    ) {
                        this.owner.spineShest.visible = true;
                        this.owner.spineShest.play("chest2_down", false);
                    }
                    this.owner.imgShestReward
                        .getComponent(Laya.Animator2D)
                        .play(chestScoreRow.chest_id.toString());
                    this._updateScore();
                    this._updateList();
                    this._updateBtnOpen();
                });
            } else {
                app.ui.toast("积分不足");
            }
        });
        this.owner.boxHero.on(Laya.Event.CLICK, () => {
            app.ui.show(ui.CHEST_HERO, {
                closeBack: (hero: HeroVo) => {
                    if (app.service.chest.heroId != hero.refId) {
                        app.service.chest
                            .requestSwitchHero({ heroId: hero.refId })
                            .then((data: proto.chest.Is2c_switch_hero) => {
                                if (!data.err) {
                                    this.owner.spineHero.source = `animations/spine/${
                                        app.service.table.chest.hero[hero.refId].spine_source
                                    }.skel`;
                                }
                            });
                    }
                },
            });
        });
    }

    private async openBox() {
        const cellData = this.owner.listBox.selectedItem as ListCellData;
        await app.service.chest
            .requestOpenChest({ id: cellData.row.id })
            .then((data: proto.chest.s2c_open_chest) => {
                if (!data.err) {
                    this.owner.spineHero.play("atk", false);
                    this.owner.spineHero.once(Laya.Event.STOPPED, this, () => {
                        this.owner.spineHero.play("idle", true);
                        this.owner.spineShest.play("chest2_up", false);
                        this.owner.spineShest.once(Laya.Event.STOPPED, this, () => {
                            app.ui.show(ui.REWARD, data.rewards);
                            this.owner.spineShest.play("chest2_down", false);
                            this._updateScore();
                            this._updateList();
                            this._updateBtnOpen();
                        });
                    });
                }
            });
    }

    private onSelect(index: number) {
        const cell = this.owner.listBox.cells[this.selectedIndex] as ChestItemUI;
        cell.normal();
        this.selectedIndex = this.owner.listBox.selectedIndex;
        const cell2 = this.owner.listBox.cells[this.selectedIndex] as ChestItemUI;
        cell2.hightlight();
        this._updateBtnOpen();
        this.owner.spineShest.play("chest2_down", false);
    }

    private _updateScore() {
        const score = app.service.chest.scoreInfo.score;
        const chesRow = TableUtil.getRow(app.service.table.chest.chest, {
            id: app.service.chest.scoreInfo.scoreId,
        });
        const scoreMax = chesRow ? chesRow.reward_score : 0;
        this.owner.boxReward.gray = score < scoreMax;
        this.owner.labelScore.text = `${score}/${scoreMax}`;
        this.owner.spineHero.source = `animations/spine/${
            app.service.table.chest.hero[app.service.chest.heroId].spine_source
        }.skel`;
    }

    private _updateBtnOpen() {
        const cellData = this.owner.listBox.selectedItem as ListCellData;
        if (cellData.cmdNum && cellData.cmdNum > 0) {
            this.owner.spineShest.visible = true;
            const num =
                cellData.cmdNum < cellData.row.open_max_num
                    ? cellData.cmdNum
                    : cellData.row.open_max_num;
            this.owner.btnOpenBox.label = `开启${num}个`;
            this.owner.btnOpenBox.gray = false;
        } else {
            this.owner.spineShest.visible = false;

            this.owner.btnOpenBox.label = "打开宝箱";
            this.owner.btnOpenBox.gray = true;
        }
    }

    private initServiceEvent() {
        // this.on(app.service.chest, ChestService.TASK_UPDATE, () => {
        //     this.tlTaskData = [];
        //     this.tlTaskData.push(app.service.task.mainTask);
        //     this.tlTaskData = this.tlTaskData.concat(app.service.task.branchTaskBag.toArray());
        //     this.updateList();
        // });
    }

    onListRender(item: ChestItemUI, index: number) {
        if (this.listData[index]) {
            item.labelNum.text = this.listData[index].cmdNum
                ? `x${this.listData[index].cmdNum}`
                : "x0";
            item.imgIcon.skin = `resources/atlas/chest/icon_chest_${this.listData[index].row.id}_n.png`;
            item.imgHigh.skin = `resources/atlas/chest/icon_chest_${this.listData[index].row.id}_s.png`;
        }
    }

    private _updateList() {
        this.listData = [];
        for (const chestRow of app.service.table.chest.chest) {
            this.listData.push({
                row: chestRow,
                cmdNum: app.service.chest.chestInfo.get(chestRow.id),
            });
        }
        this.owner.listBox.array = this.listData;
        this.selectedIndex = this.owner.listBox.selectedIndex;

        const cell = this.owner.listBox.cells[this.selectedIndex] as ChestItemUI;
        cell.hightlight();
    }
}
