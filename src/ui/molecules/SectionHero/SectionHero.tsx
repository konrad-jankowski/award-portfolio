import React from "react";
import { HeroHeading } from "@/ui/atoms/HeroHeading/HeroHeading";

export const SectionHero = () => {
	return (
		<section className="flex h-screen w-full items-center justify-center bg-colorBackground">
			<HeroHeading />
			<div className=" from-neutral-300 to-stone-400 fixed right-10 top-40 z-20 h-[480px] w-[400px] rounded-3xl bg-gradient-to-r opacity-40 blur-3xl" />
		</section>
	);
};
