/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (
			await (locale === "en"
				? // When using Turbopack, this will enable HMR for `en`
					import("../messages/en.json")
				: import(`../messages/${locale}.json`))
		).default,
	};
});
