const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const parser = require("astro-eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("@evan-yang", "plugin:astro/recommended"),

    rules: {
        "no-console": "off",
        "react/display-name": "off",
        "react-hooks/rules-of-hooks": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/jsx-key": "off",
        "import/namespace": "off",
        "react/jsx-closing-tag-location": "off",
    },
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
}, {
    files: ["**/*.astro/*.js", "*.astro/*.js"],

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "prettier/prettier": "off",
    },
}, globalIgnores([
    "**/dist",
    "**/public",
    "**/node_modules",
    "**/.netlify",
    "**/.vercel",
    "**/.github",
    "**/.changeset",
])]);
