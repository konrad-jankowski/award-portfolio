import type { Metadata } from "next";
import { Michroma, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/ui/molecules/Navbar/Navbar";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Web Dev Agency",
	description: "Generated by create next app",
};

export default function LocaleLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${michroma.className} ${roboto.variable}`}>
				<Providers>
					<div className="relative">
						<Navbar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
