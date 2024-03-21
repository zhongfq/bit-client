import { ElementAnimation } from "../../pve/ecs/components/element-component";

export const SkillOption = [
    { name: "当前技能", value: -1 },
    { name: "普攻", value: 0 },
    { name: "技能1", value: 1 },
    { name: "技能2", value: 2 },
    { name: "技能3", value: 3 },
];
export const SkillRangeOption = [{ name: "自定义范围", value: -2 }, ...SkillOption];

export const AnimNameOptions = [
    { name: "普攻", value: ElementAnimation.ATTACK },
    { name: "移动", value: ElementAnimation.RUN },
    { name: "待机", value: ElementAnimation.IDLE },
];
