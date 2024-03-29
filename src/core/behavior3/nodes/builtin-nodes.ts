import { Constructor, Process } from "../behavior";
import { Clear } from "./actions/clear";
import { GetTime } from "./actions/get-time";
import { Log } from "./actions/log";
import { Wait } from "./actions/wait";
import { Foreach } from "./composites/foreach";
import { Loop } from "./composites/loop";
import { Once } from "./composites/once";
import { Parallel } from "./composites/parallel";
import { Selector } from "./composites/selector";
import { Sequence } from "./composites/sequence";
import { Check } from "./conditions/check";
import { IsNull } from "./conditions/is-null";
import { NotNull } from "./conditions/not-null";
import { AlwaysFail } from "./decorators/always-fail";
import { AlwaysSuccess } from "./decorators/always-success";
import { Not } from "./decorators/not";

export const builtinNodes: Constructor<Process>[] = [
    AlwaysFail,
    AlwaysSuccess,
    Check,
    Clear,
    Foreach,
    IsNull,
    Log,
    Loop,
    Not,
    NotNull,
    Once,
    Parallel,
    Selector,
    Sequence,
    GetTime,
    Wait,
];
