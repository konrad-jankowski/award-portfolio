"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitcher = () => {
	const [mounted, setIsMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setIsMounted(true), []);

	return (
		<button
			onClick={resolvedTheme === "dark" ? () => setTheme("light") : () => setTheme("dark")}
			className="mr-9 h-9 w-9 rounded-full border-2 border-colorText bg-gradient-to-r from-colorBackground from-50% to-colorText to-50%"
		></button>
	);
};
