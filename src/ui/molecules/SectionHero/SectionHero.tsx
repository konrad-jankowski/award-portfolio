import React from "react";
import { HeroHeading } from "@/ui/atoms/HeroHeading/HeroHeading";

export const SectionHero = () => {
	return (
		<section className="flex h-screen w-full items-center justify-center bg-colorBackground">
			<HeroHeading />
			<div className=" fixed right-10 top-40 z-20 rounded-full bg-gradient-to-l from-colorText to-colorBackground opacity-40 blur-2xl lg:h-[480px] lg:w-[400px]" />
		</section>
	);
};
