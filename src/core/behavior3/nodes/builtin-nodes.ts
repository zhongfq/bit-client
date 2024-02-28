import { Constructor, Process } from "../behavior";
import { Log } from "./actions/log";
import { Wait } from "./actions/wait";
import { Foreach } from "./composites/foreach";
import { Ifelse } from "./composites/ifelse";
import { Loop } from "./composites/loop";
import { Parallel } from "./composites/parallel";
import { Selector } from "./composites/selector";
import { Sequence } from "./composites/sequence";
import { Check } from "./conditions/check";
import { AlwaysFail } from "./decorators/always-fail";
import { AlwaysSuccess } from "./decorators/always-success";
import { Not } from "./decorators/not";

export const builtinNodes: Constructor<Process>[] = [
    Log,
    Wait,
    Foreach,
    Ifelse,
    Loop,
    Parallel,
    Selector,
    Sequence,
    Check,
    AlwaysFail,
    AlwaysSuccess,
    Not,
];
