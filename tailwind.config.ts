/* eslint-disable import/no-default-export */
import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				colorPrimary: "rgb(var(--color-primary) / <alpha-value>)",
				colorBackground: "rgb(var(--color-background) / <alpha-value>)",
				colorText: "rgb(var(--color-text) / <alpha-value>)",
			},
			animation: {},
			padding: {
				section: "0 5rem 0 5rem",
			},
			fontFamily: {
				secondary: ["var(--font-roboto)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
