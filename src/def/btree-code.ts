export const btreeCode = [
    {code: "(current_time - fight_time) > 2", evaluator: ($env: any) => ($env.current_time - $env.fight_time) > 2},
    {code: "distance > 4", evaluator: ($env: any) => $env.distance > 4},
    {code: "distance > 5", evaluator: ($env: any) => $env.distance > 5},
    {code: "(a.x - b.y) > c - b * c", evaluator: ($env: any) => ($env.a.x - $env.b.y) > $env.c - $env.b * $env.c},
];