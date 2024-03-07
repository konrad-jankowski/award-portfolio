"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SocialLinks } from "@/ui/atoms/SocialLinks";
import { NavLink } from "@/ui/atoms/NavLink";

type Link = {
	title: string;
	link: string;
};

export const Menu = ({
	navLinks,
	setToggle,
	toggle,
}: {
	navLinks: Link[];
	setToggle: (toggle: boolean) => void;
	toggle: boolean;
}) => {
	useGSAP(() => {
		if (toggle) {
			gsap.fromTo(
				".nav-link > a",
				{ opacity: 0 },
				{ opacity: 1, y: 0, stagger: 0.1, ease: "power2.out", duration: 0.4 },
			);
		}
	}, [toggle]);

	return (
		<div className="fixed left-0 right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-colorBackground px-6 font-secondary text-colorText  lg:p-section">
			<div className="mb-20 flex flex-col gap-4">
				{navLinks.map((link) => {
					return (
						<NavLink key={link.title} title={link.title} link={link.link} setToggle={setToggle} />
					);
				})}
			</div>
			<div className="grid w-full grid-cols-4 gap-2 lg:gap-6 ">
				<SocialLinks />
			</div>
		</div>
	);
};
