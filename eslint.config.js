import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
	{
		ignores: [
			"dist",
			"node-modules",
			"store",
			"*.d.ts",
			"*.config.ts",
			"*.log",
		],
	},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
		],
		files: ["**/*.{ts,tsx}"],
		settings: { react: { version: "18.3" } },
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			react,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"no-console": ["warn"],
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"arrow-body-style": ["error", "as-needed"],
			"import/no-duplicates": ["error", { "prefer-inline": true }],
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						["parent", "sibling", "index"],
					],
					"newlines-between": "always",
				},
			],
			"react/self-closing-comp": [
				"error",
				{
					component: true,
					html: true,
				},
			],
			"sort-imports": [
				"error",
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
					allowSeparatedGroups: true,
				},
			],
			...react.configs.recommended.rules,
			...react.configs["jsx-runtime"].rules,
		},
	},
);
