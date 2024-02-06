"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	);
}
