export const btreeCode = [
    {code: "(current_time - fight_time) > 2", evaluator: (envars: any) => (envars.current_time - envars.fight_time) > 2},
    {code: "distance > 4", evaluator: (envars: any) => envars.distance > 4},
    {code: "distance > 5", evaluator: (envars: any) => envars.distance > 5},
    {code: "(a.x - b.y) > c - b * c", evaluator: (envars: any) => (envars.a.x - envars.b.y) > envars.c - envars.b * envars.c},
];