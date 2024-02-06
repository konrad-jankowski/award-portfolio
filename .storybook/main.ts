import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
	webpackFinal: async (config) => {
		// Inicjalizacja config.resolve i config.resolve.alias, jeśli są undefined
		config.resolve = config.resolve || {};
		config.resolve.alias = config.resolve.alias || {};

		// Dodanie aliasów
		config.resolve.alias["@"] = path.resolve(__dirname, "../src");
		// Dodaj więcej aliasów tutaj, jeśli są potrzebne

		return config;
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {
			nextConfigPath: path.resolve(__dirname, "../next.config.js"),
		},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
