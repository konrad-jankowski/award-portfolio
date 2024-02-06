import { type Pathnames } from "next-intl/navigation";

export const locales = ["pl", "en", "de"] as const;

export const pathnames = {
	"/": "/",
	"/pathnames": {
		pl: "/pathnames",
		en: "/pathnames",
		de: "/pfadnamen",
	},
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
