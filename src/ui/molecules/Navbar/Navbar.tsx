import { twMerge } from "tailwind-merge";
import { Menu } from "./Menu";
import { DarkModeSwitcher } from "@/ui/atoms/DarkModeSwitcher";

export const Navbar = () => {
	return (
		<nav className="fixed left-0 right-0 top-0 z-[999] flex h-28 w-full items-center justify-between  px-10 text-colorText">
			<div className="logo z-50 text-center font-bold">
				<div className="tracking-wider ">Konrad_Jankowski</div>
				<div className="text-xs tracking-widest">{"< web developer />"}</div>
			</div>
			<ul className="flex items-center gap-4">
				<li>
					<DarkModeSwitcher />
				</li>
				<div className="menu-toggle">
					<div id="menu-toggle-btn">
						<span
							className={twMerge(
								"test group absolute top-1/2 inline-block h-0.5 w-8 bg-colorText transition-all duration-300 before:absolute",
								'before:content-[" "] before:-top-0.5 before:inline-block before:h-[3px] before:w-8 before:-translate-y-2.5 before:bg-colorText before:transition-all before:duration-300 ',
							)}
						></span>
					</div>
				</div>
			</ul>
			<Menu />
		</nav>
	);
};
