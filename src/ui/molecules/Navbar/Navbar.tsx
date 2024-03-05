"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Menu } from "./Menu";
import { DarkModeSwitcher } from "@/ui/atoms/DarkModeSwitcher";
import { Logo } from "@/ui/atoms/Logo";

type Link = {
	title: string;
	link: string;
};

export const Navbar = ({ navLinks }: { navLinks: Link[] }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="fixed left-0 right-0 top-0 z-[999] flex h-20 w-full items-center justify-between px-6 text-colorText  lg:h-24 lg:p-section">
			<Logo />
			<ul className="flex items-center lg:gap-4">
				<li>
					<DarkModeSwitcher />
				</li>
				<div
					onClick={() => setToggle((prev) => !prev)}
					className="relative z-50 cursor-pointer text-colorText"
				>
					{toggle ? <X size={32} /> : <MenuIcon size={32} />}
				</div>
			</ul>
			{toggle && <Menu setToggle={setToggle} toggle={toggle} navLinks={navLinks} />}
		</nav>
	);
};
