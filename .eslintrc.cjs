module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "@stylistic/js"],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",

        // https://eslint.style/rules/js/lines-between-class-members
        "@stylistic/js/lines-between-class-members": [
            "error",
            {
                enforce: [{ blankLine: "always", prev: "method", next: "method" }],
            },
        ],
    },
    root: true,
};
