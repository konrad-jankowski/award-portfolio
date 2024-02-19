import { DarkModeSwitcher } from "@/ui/atoms/DarkModeSwitcher";

export const Navbar = () => {
	return (
		<nav className="fixed left-0 right-0 top-0 z-50 flex h-28 w-full items-center justify-between  px-10 text-colorText">
			<div>Logo</div>
			<ul className="flex items-center gap-4">
				<li>
					<DarkModeSwitcher />
				</li>
				<li className="flex flex-col items-center gap-2">
					<span>Work</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li>
				<li className="flex flex-col items-center gap-2">
					<span>Projects</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li>
				<li className="flex flex-col items-center gap-2">
					<span>Contact</span>
					<span className="h-2 w-2 rounded-full bg-colorText" />
				</li>
			</ul>
		</nav>
	);
};
