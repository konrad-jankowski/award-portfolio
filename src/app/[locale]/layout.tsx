import type { Metadata } from "next";
import "./globals.css";
import { useTranslations } from "next-intl";
import { Providers } from "./providers";
import { Navbar } from "@/ui/molecules/Navbar/Navbar";
import { CustomCursor } from "@/ui/molecules/CustomCursor/CustomCursor";

type Link = {
	title: string;
	link: string;
};

export const metadata: Metadata = {
	title: "My portfolio",
	description: "This a Konrad Jankowski developer portfolio website.",
};

export default function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const t = useTranslations("Navbar");
	const navLinks = t.raw("navlinks") as Link[];
	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`bg-colorBackground font-primary selection:bg-colorText selection:text-colorBackground`}
			>
				<CustomCursor />
				<Providers>
					<div className="relative">
						<Navbar navLinks={navLinks} />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
